import { Box, Flex, SimpleGrid, Text, Image } from "@mantine/core";
import appliance from "~/_images/service-icons/appliances.png";
import painting from "~/_images/service-icons/painting.png";
import electrical from "~/_images/service-icons/electrical.png";
import plumbing from "~/_images/service-icons/plumbing.png";
import remodeling from "~/_images/service-icons/remodeling.png";
import hvac from "~/_images/service-icons/hvac.png";
import flooring from "~/_images/service-icons/flooring.png";
import moreservices from "~/_images/service-icons/more-services.png";

type IconServiceItemProps = {
  imageURL: string;
  categoryName: string;
};

const IconServiceItem = ({ imageURL, categoryName }: IconServiceItemProps) => {
  return (
    <>
      <Flex direction="column" rowGap="sm" align="center">
        <Box w={36} h={36}>
          <Image src={imageURL} alt="Appliance Repair" />
        </Box>
        <Text color="primary.4">{categoryName}</Text>
      </Flex>
    </>
  );
};

export default function ServiceCategoriesGrid() {
  const serviceCategories: IconServiceItemProps[] = [
    {
      imageURL: appliance,
      categoryName: "Appliances",
    },
    {
      imageURL: painting,
      categoryName: "Painting"
    },
    {
      imageURL: electrical,
      categoryName: "Electrical"
    },
    {
      imageURL: plumbing,
      categoryName: "Plumbing"
    },
    {
      imageURL: flooring,
      categoryName: "Flooring"
    },
    {
      imageURL: hvac,
      categoryName: "Hvac"
    },
    {
      imageURL: remodeling,
      categoryName: "Remodeling"
    },
    {
      imageURL: moreservices,
      categoryName: "More"
    }
  ];

  return (
    <>
      <SimpleGrid cols={4}>
        {serviceCategories.map((serviceItem: IconServiceItemProps) => {
          return <IconServiceItem {...serviceItem} key={serviceItem.categoryName} />;
        })}
      </SimpleGrid>
    </>
  );
}
