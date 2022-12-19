import { Center, Flex, Image } from "@chakra-ui/react";
import ICCCTBanner from "../assets/iccct-banner.jpg"

function Hero() {
  return (
    <Flex justifyContent="center">
      <Center>
        <Image objectFit={"cover"} rounded="xl" src={ICCCTBanner.src} alt="ICCCT Banner" height="400" />
      </Center>
    </Flex>
  );
}
export default Hero;
