import { json, LoaderArgs, LoaderFunction, redirect } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { IvanvsCLDataset } from "~/_server/apify/actors/ivanvs-craigslist-actor.server";
import { Prisma, prisma } from "~/_server/prisma/prisma.server";
import ServiceProviderProfile from "../_static-site.service-providers/ServiceProviderProfile";

const _serviceProvider = async (serviceProviderId: string) => {
  return await prisma.serviceProvider.findUnique({
    where: {
      id: serviceProviderId,
    },
    include: {
      user: {
        include: {
          avatarURL: true,
          website: true
        },
      },
      serviceProviderReviews: {
        include: {
          review: true
        }
      },
      operatingHours: true
    },
  });
};

export type ServiceProviderType = Prisma.PromiseReturnType<
  typeof _serviceProvider
>;

export const loader: LoaderFunction = async ({
  request,
  params,
}: LoaderArgs) => {
  console.log(params);
  const { serviceProviderId } = params;
  if (!serviceProviderId) {
    return redirect("/service-providers");
  }

  const provider = await _serviceProvider(serviceProviderId);

  if (!provider) {
    return redirect("/service-providers");
  }

  return json({ provider });
};

export default function ServiceProviderProfileRoute() {
  const { provider } = useLoaderData<typeof loader>();
  console.log(provider);
  return <ServiceProviderProfile provider={provider} />;
}
