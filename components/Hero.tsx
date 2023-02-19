import { Center, Flex, Image, useMediaQuery } from "@chakra-ui/react";
import ICCCTDesktopBanner from "../assets/iccct-banner-desktop.jpg";
import ICCCTMobileBanner from "../assets/iccct-banner-mobile.png";

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
