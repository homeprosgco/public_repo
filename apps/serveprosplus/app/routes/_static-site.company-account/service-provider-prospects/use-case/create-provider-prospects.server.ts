import { Prisma, ServiceProviderProspect } from "@prisma/client";
import { PrismaClientKnownRequestError } from "@prisma/client/runtime";
import { prospectReviewSchema, serviceProviderProspectSchema } from "prisma/zod";
import { z } from "zod";
import { inferSafeParseErrors } from "~/_lib/utils";
import { prisma } from "~/_server/prisma/prisma.server";
import { providerProspectData } from "../../../../_lib/integrations/faker/providerProspectData";

export const ProviderProspectFields = serviceProviderProspectSchema.pick({
  companyName: true,
  phoneNumber: true,
  source: true,
  serviceCategories: true,
  imageURLs: true,
  location: true,
}).extend({
  prospectReviews: prospectReviewSchema.pick({
    date: true,
    photoURLs: true,
    rating: true,
    reviewerLocation: true,
    review: true,
    reviewerName: true
  }).array().nullish()
});

type ProviderProspectFields = z.infer<typeof ProviderProspectFields>;
type ProviderProspectFieldsErrors = inferSafeParseErrors<typeof ProviderProspectFields>;
type ProviderProspectActionData = {
  fields: ProviderProspectFields;
  errors?: ProviderProspectFieldsErrors;
}

export type ProviderProspectType = ReturnType<typeof providerProspectData>;

function createProspect(prospect: Partial<ProviderProspectType>): ProviderProspectType {

  return {
    ...prospect,
    companyBio: prospect.companyBio || null,
    primaryPhotoURL: prospect.primaryPhotoURL || null,
    directURL: prospect.directURL || null,
    website: prospect.website || null,
    prospectReviews: (prospect.prospectReviews && prospect.prospectReviews.length > 0) ? [...prospect.prospectReviews] : null,
    title: prospect.title || null
  } as ProviderProspectType;
}

function providerProspectValidator(prospect: ProviderProspectType) {
  const { prospectReviews, ...rest } = prospect;

  if (prospectReviews) {
    return Prisma.validator<Prisma.ServiceProviderProspectCreateArgs>()({
      data: {
        ...rest,
        prospectReviews: {
          createMany: {
            data: [...prospectReviews]
          }
        }
      },
    })
  }

  return Prisma.validator<Prisma.ServiceProviderProspectCreateArgs>()({
    data: {
      ...rest,
    },
  })
}

export const createManyProviderProspects = async (prospects: Partial<ProviderProspectType>[]) => {

  let providerProspects = [];
  let errors = [];

  for await (const prospect of prospects) {
    const _prospect = createProspect(prospect) as ProviderProspectType;
    ProviderProspectFields.parse(prospect);
    const validProspect = providerProspectValidator(_prospect);
    try {
      console.log("new Prospect: ", validProspect);
      const provider = await prisma.serviceProviderProspect.create(validProspect);
      providerProspects.push(provider);

    } catch (error) {
      if (error instanceof PrismaClientKnownRequestError) {
        errors.push({ message: error.message, code: error.code})
      }

    }

  }

  console.log("Errors: ", JSON.stringify(errors, null, 2));
  return await Promise.all(providerProspects);

}