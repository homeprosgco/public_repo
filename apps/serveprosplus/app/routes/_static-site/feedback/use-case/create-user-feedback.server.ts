import { Prisma } from "@prisma/client";
import { userFeedbackSchema } from "prisma/zod";
import { z } from "zod";
import { feedbackData } from "~/_lib/integrations/faker/feedbackData";
import { inferSafeParseErrors } from "~/_lib/utils";
import { prisma } from "~/_server/prisma/prisma.server";

const FeedbackFields = userFeedbackSchema.pick({
  feedback: true,
});


export type FeedbackFields = z.infer<typeof FeedbackFields>
export type FeedbackFieldsErrors = inferSafeParseErrors<typeof FeedbackFields>;
type FeedbackActionData = {
  fields: FeedbackFields;
  errors?: FeedbackFieldsErrors;
}
type FeedbackFieldsType = ReturnType<typeof feedbackData>

function feedbackValidator(userId: string, fields: FeedbackFieldsType) {
  return Prisma.validator<Prisma.UserFeedbackCreateArgs>()({
    data: {
      feedback: fields.feedback,
      user: {
        connect: {
          id: userId
        }
      }
    }

  })
}

export const createUserFeedback = async (userId: string, fields: FeedbackFields) => {
  const result = FeedbackFields.safeParse(fields);

  if (!result.success) {
    return { fields, errors: result.error.flatten() }
  } else {
    const validFeedback = feedbackValidator(userId, fields);
    const feedback = await prisma.userFeedback.create(validFeedback);
    return { feedback }
  }
}