import {
  Box,
  Center,
  Text,
  Divider,
  Flex,
  Spacer,
  Heading,
  VStack,
} from "@chakra-ui/react";

function Footer() {
  return (
    <Box m="2" p="4" rounded={"2xl"} backgroundColor={"gray.200"}>
      <Flex p="4" wrap={"wrap"}>
        <Box>
          <Heading as="h2" size="sm">
            ICCCT-2023
          </Heading>
          <Text>Odisha University of Technology and Research (OUTR)</Text>
          <Text>All Rights Reserved</Text>
        </Box>
        <Spacer />
        <Box>
          <VStack>
            <Heading as="h4" size="sm">
              Get in Touch
            </Heading>
            <Text>Odisha University of Technology and Research (OUTR)</Text>
            <Text>All Rights Reserved</Text>
            <Text>085-132567</Text>
            <Text>csa@outr.net</Text>
          </VStack>
        </Box>
      </Flex>

      <Center>
        <VStack>
          <Center>
            <Heading as="h4" size="md">
              Odisha University of Technology and Research (OUTR)
            </Heading>
          </Center>
          <Center>All Rights Reserved</Center>
        </VStack>
      </Center>
    </Box>
  );
}
export default Footer;
