import { Center, Flex, Image } from "@chakra-ui/react";

function Hero() {
  return (
    <Flex justifyContent="center">
      <Center>
        <Image src="https://via.placeholder.com/1500x300" alt="Dan Abramov" />
      </Center>
    </Flex>
  );
}
export default Hero;
