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

function reviewValidator(fields: ReviewFieldsType) {
  return Prisma.validator<Prisma.CompanyReviewCreateArgs>()({
    data: {
      review: {
        create: {
          ...fields
        }
      }
    }

  })
}

export const createCompanyReview = async (fields: ReviewFields) => {
  const result = ReviewFields.safeParse(fields);

  if (!result.success) {
    return { fields, errors: result.error.flatten() }
  } else {
    const validReview = reviewValidator(fields);
    const review = await prisma.companyReview.create(validReview);
    return { review }
  }
}