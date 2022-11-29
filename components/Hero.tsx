import { Center, Flex } from "@chakra-ui/react";
import Image from "next/image";
import ICCCTBanner from "../assets/iccct-banner.jpg"

function Hero() {
  return (
    <Flex justifyContent="center">
      <Center>
        <Image src={ICCCTBanner} alt="ICCCT Banner" height="400" priority />
      </Center>
    </Flex>
  );
}
export default Hero;
