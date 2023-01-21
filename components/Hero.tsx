import { Center, Flex, Image, useMediaQuery } from "@chakra-ui/react";
import ICCCTMobileBanner from "../assets/iccct-banner-mobile.png";
import ICCCTDesktopBanner from "../assets/iccct-banner-desktop.png";

function Hero() {
  const [isMobile] = useMediaQuery("(max-width: 945px)");

  return (
    <Flex justifyContent="center">
      <Center>
        {isMobile ? (
          <Image
            objectFit={"cover"}
            rounded="xl"
            src={ICCCTMobileBanner.src}
            alt="ICCCT Banner"
            height="300"
          />
        ) : (
          <Image
            objectFit={"cover"}
            rounded="xl"
            src={ICCCTDesktopBanner.src}
            alt="ICCCT Banner"
            height="400"
          />
        )}
      </Center>
    </Flex>
  );
}
export default Hero;
