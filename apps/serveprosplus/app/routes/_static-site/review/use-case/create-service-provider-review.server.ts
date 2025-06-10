import { Prisma } from "@prisma/client";
import { reviewSchema } from "prisma/zod";
import { z } from "zod";
import { reviewData } from "~/_lib/integrations/faker/reviewData";
import { inferSafeParseErrors } from "~/_lib/utils";
import { prisma } from "~/_server/prisma/prisma.server";

const ReviewFields = reviewSchema.pick({
  comment: true,
  customerName: true,
  location: true,
  rating: true
});


export type ReviewFields = z.infer<typeof ReviewFields>
export type ReviewFieldsErrors = inferSafeParseErrors<typeof ReviewFields>;
type ReviewActionData = {
  fields: ReviewFields;
  errors?: ReviewFieldsErrors;
}
type ReviewFieldsType = ReturnType<typeof reviewData>

function reviewValidator(providerId: string, fields: ReviewFieldsType) {
  return Prisma.validator<Prisma.ServiceProviderReviewCreateArgs>()({
    data: {
      review: {
        create: {
          ...fields
        }
      },
      serviceProvider: {
        connect: {
          id: providerId
        }
      }
    }

  })
}

export const createServiceProviderReview = async (providerId: string, fields: ReviewFields) => {
  const result = ReviewFields.safeParse(fields);

  if (!result.success) {
    return { fields, errors: result.error.flatten() }
  } else {
    const validReview = reviewValidator(providerId, fields);
    const review = await prisma.serviceProviderReview.create(validReview);
    return { review }
  }
}