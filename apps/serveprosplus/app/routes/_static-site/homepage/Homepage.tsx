import { Box, Stack } from "@mantine/core";
import HeroSection from "./hero-section/HeroSection";
import HomeImprovementProjects from "./home-improvement-projects/HomeImprovementProjects";
import ProNetworkCTA from "./pro-network-cta/ProNetworkCTA";
import ServiceCities from "./service-cities/ServiceCities";
import Testimonials from "./testimonials/Testimonials";
import TrendingHomeServices from "./trending-home-services/TrendingHomeServices";
import useEmblaCarousel from "embla-carousel-react";

export default function HomepageHero() {
  const [emblaRef] = useEmblaCarousel();

  return (
    <>
      <Box className="homepage">
        <Stack spacing={96}>
          <HeroSection />
          <Stack spacing={64}>
            <div className="embla" ref={emblaRef}>
              <div className="embla__container">
                <div className="embla__slide">Slide 1</div>
                <div className="embla__slide">Slide 2</div>
                <div className="embla__slide">Slide 3</div>
              </div>
            </div>
            <TrendingHomeServices />
            <HomeImprovementProjects />
            <ServiceCities />
            <ProNetworkCTA />
            <Testimonials />
          </Stack>
        </Stack>
      </Box>
    </>
  );
}
