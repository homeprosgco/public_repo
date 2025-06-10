import homerepairpro from "~/_images/app/homepage/home-repair-service.jpg";
import homecleaning from "~/_images/app/homepage/service-images/cleaning.jpg";
import pressurewashing from "~/_images/app/homepage/service-images/pressure-washing.jpg";
import carpetcleaning from "~/_images/app/homepage/service-images/carpet-cleaning.jpg";
import draincleaning from "~/_images/app/homepage/service-images/drain-cleaning.png";
import faucetreplacment from "~/_images/app/homepage/service-images/faucet-replacement.webp";
import septictankcleaning from "~/_images/app/homepage/service-images/septic-cleaning.jpg";

import servicepro from "~/_images/demo/service-providers/serviceprovider.jpg";
import serviceprovider1 from "~/_images/demo/service-providers/serviceprovider1.jpeg";
import serviceprovider2 from "~/_images/demo/service-providers/serviceprovider2.jpg";
import {
  Box,
  Flex,
  Card,
  Stack,
  BackgroundImage,
  Button,
  Title,
  Text,
} from "@mantine/core";
import { ServiceCarouselSection } from "~/client/__ui/components";
import { ServiceCarouselProps } from "~/client/__ui/components/ServiceCarousel";
import { ServiceProviderCarouselProps } from "~/client/__ui/components/ServiceProviderCarousel";
import ServiceProviderCarouselSection from "~/client/__ui/components/ServiceProviderCarouselSection";
import { AppSearchInput } from "~/client/__ui/inputs";
import { Link } from "@remix-run/react";
import ServiceCategoriesGrid from "~/client/__ui/components/ServiceCategoriesGrid";
import { useViewportSize } from "@mantine/hooks";
import MobileHomePageHeader from "./home-page-header/MobileHomePageHeader";
import { extractLocation } from "~/_lib/utils";
import { User } from "@prisma/client";

type MobileHomePageProps = {
  user: User;
};

export default function MobileHomePage({user}: MobileHomePageProps) {
  const cleaningServices: ServiceCarouselProps = {
    items: [
      {
        categoryName: "Home Cleaning",
        companyName: "The Maid Company",
        imageAlt: "Home Cleaing Services",
        imageURL: homecleaning,
        startPrice: "$79",
      },
      {
        categoryName: "Window Cleaning",
        companyName: "Terry's Power Washing",
        imageAlt: "Power Washing Services",
        imageURL: pressurewashing,
        startPrice: "$59",
      },
      {
        categoryName: "Carpet Cleaning",
        companyName: "Stanley The Cleaning Guy",
        imageAlt: "Carpet Cleaning",
        imageURL: carpetcleaning,
        startPrice: "$89",
      },
    ],
  };

  const plumbingServices: ServiceCarouselProps = {
    items: [
      {
        categoryName: "Drain Cleaning",
        companyName: "The Plumbing Company",
        imageAlt: "Drain Cleaing Services",
        imageURL: draincleaning,
        startPrice: "$179",
      },
      {
        categoryName: "Faucet Replacement",
        companyName: "Mike Wilkins Plumbing",
        imageAlt: "Faucet Replacement Services",
        imageURL: faucetreplacment,
        startPrice: "$129",
      },
      {
        categoryName: "Septic Tank Cleanig",
        companyName: "Cedric The Septic Tank Pro",
        imageAlt: "Septic Tank Cleaning",
        imageURL: septictankcleaning,
        startPrice: "$389",
      },
    ],
  };

  const localServiceProviders: ServiceProviderCarouselProps = {
    items: [
      {
        categoryName: "Drain Cleaning",
        companyName: "The Plumbing Company",
        imageAlt: "Drain Cleaing Services",
        imageURL: servicepro,
        rating: "4.8",
      },
      {
        categoryName: "Faucet Replacement",
        companyName: "Mike Wilkins Plumbing",
        imageAlt: "Faucet Replacement Services",
        imageURL: serviceprovider2,
        rating: "4.2",
      },
      {
        categoryName: "Septic Tank Cleanig",
        companyName: "Cedric The Septic Tank Pro",
        imageAlt: "Septic Tank Cleaning",
        imageURL: serviceprovider1,
        rating: "4.5",
      },
    ],
  };

  const location = extractLocation(user.primaryAddress);

  return (
    <Box id="mobile-page-wrapper" bg="primary.0">
      <Flex id="mobile-content-wrapper" direction="column">
        <Card m={4}>
          <Stack spacing={48}>
            <Stack>
              <MobileHomePageHeader location={'Jupiter, FL'} />
              <AppSearchInput />
              <HomepageHeroImg />
            </Stack>
            <ServiceCategoriesGrid />
          </Stack>
        </Card>
        <Card mb={4} mx={4}>
          <ServiceCarouselSection
            sectionTitle={"Cleaning Services"}
            carouselItems={{
              items: cleaningServices.items,
            }}
          />
        </Card>
        <Card mb={4} mx={4}>
          <ServiceCarouselSection
            sectionTitle={"Plumbing Services"}
            carouselItems={{
              items: plumbingServices.items,
            }}
          />
        </Card>
        <Card mb={4} mx={4}>
          <ServiceProviderCarouselSection
            sectionTitle={"Local Service Providers"}
            carouselItems={{
              items: localServiceProviders.items,
            }}
          />
        </Card>
      </Flex>
    </Box>
  );
}

const HomepageHeroImg = () => {
  const { width } = useViewportSize();

  return (
    <>
      <Box pos="relative" w={width - 40}>
        <BackgroundImage src={homerepairpro} radius="md" p={8}>
          <Box pos="relative" w="60%">
            <Box
              pos="absolute"
              bg="primary"
              opacity={0.8}
              h="100%"
              maw="60%"
              miw="288px"
              w="100%"
              sx={{ borderRadius: 8 }}
            ></Box>
            <Stack pos="relative" p={12} miw="100px">
              <Title
                order={4}
                sx={(theme) => ({ color: theme.white })}
                fw={700}
                fz={18}
                maw={200}
              >
                Local Home Professionals
              </Title>
              <Text
                fz={12}
                maw="53%"
                miw="296px"
                sx={(theme) => ({ color: theme.white })}
              >
                Find local home professionals for all your home improvment and
                repair projects.
              </Text>
              <Button component={Link} to="/booking" maw={180} size="xs">
                Book Now
              </Button>
            </Stack>
          </Box>
        </BackgroundImage>
      </Box>
    </>
  );
};
