import { Prisma, ServiceCategory } from "@prisma/client";
import { json, LoaderArgs, LoaderFunction } from "@remix-run/node";
import { useFetcher, useLocation } from "@remix-run/react";
import { useEffect, useState } from "react";
import { prisma } from "~/_server/prisma/prisma.server";
import { fromProspectToProvider } from "../_static-site.company-account/service-provider-prospects/incoming-data-mappers/fromProspectToProvider";
import { providerProspectsByServiceCategory } from "../_static-site.company-account/service-provider-prospects/use-case/providerProspectsByServiceCategory.server";
import { ServiceCategoryMatcher } from "../_static-site.company-account/service-provider-prospects/utils";
import ServiceProvidersPage from "../_static-site.service-providers/ServiceProvidersPage";

const _providers = async () => {
  return await prisma.serviceProvider.findMany({
    include: {
      user: {
        include: {
          avatarURL: true,
        },
      },
      serviceProviderReviews: {
        include: {
          review: true,
        },
      },
    },
  });
};

const _provider = async (serviceProviderId: string) => {
  return await prisma.serviceProvider.findUnique({
    where: {
      id: serviceProviderId,
    },
    include: {
      user: {
        include: {
          avatarURL: true,
        },
      },
      serviceProviderReviews: {
        include: {
          review: true,
        },
      },
    },
  });
};

export type Provider = Prisma.PromiseReturnType<typeof _provider>;
export type Providers = Prisma.PromiseReturnType<typeof _providers>;

export const loader: LoaderFunction = async ({ request }: LoaderArgs) => {
  const url = new URL(request.url);
  const category = url.searchParams.get("category");
  let providers: Providers = [];

  if (category) {
    const keyword = category.split(" ")[0];
    console.log(keyword);
    const serviceCategory = ServiceCategoryMatcher(
      keyword.toLowerCase()
    ) as ServiceCategory[];
    console.log(serviceCategory);

    const { prospects } = await providerProspectsByServiceCategory(
      serviceCategory
    );

    providers = prospects.map((prospect) =>
      fromProspectToProvider(prospect.id, prospect, serviceCategory)
    ) as Providers;

    // providers = await prisma.serviceProvider.findMany({
    //   where: {
    //     serviceCategories: {
    //       hasSome: serviceCategory,
    //     },
    //   },
    //   include: {
    //     user: {
    //       include: {
    //         avatarURL: true,
    //       },
    //     },
    //     serviceProviderReviews: {
    //       include: {
    //         review: true,
    //       },
    //     },
    //   },
    // });
    console.log("search", providers);
    return json({ providers });
  } else {
    providers = await prisma.serviceProvider.findMany({
      include: {
        user: {
          include: {
            avatarURL: true,
          },
        },
        serviceProviderReviews: {
          include: {
            review: true,
          },
        },
      },
    });

    return json({ providers });
  }
};

export default function ServiceProvidersRoute() {
  const [activeCategory, setActiveCategory] = useState<string>("All");
  const [providers, setProviders] = useState<Providers>([]);
  const location = useLocation();

  const serviceCategory = useFetcher();

  function filterCategory(category: string) {
    console.log(category);
    if (category !== "All") {
      serviceCategory.load(`/service-providers?category=${category}`);
    } else {
      serviceCategory.load(`/service-providers`);
    }
  }

  useEffect(() => {
    console.log(serviceCategory.type);
    console.log(location);
    if (serviceCategory.type === "init") {
      if (location.search) {
        serviceCategory.load(`/service-providers${location.search}`);
      } else {
        serviceCategory.load(`/service-providers`);
      }
    }
    if (serviceCategory.type === "done") {
      console.log(serviceCategory.data.providers);
      setProviders(serviceCategory.data.providers);
    }
  }, [serviceCategory]);

  return (
    <ServiceProvidersPage
      activeCategory={activeCategory}
      filterCategory={filterCategory}
      isProvidersLoaded={serviceCategory.type === "done"}
      serviceProviders={providers}
    />
  );
}
