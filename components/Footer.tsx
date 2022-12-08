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
    <Box mt="2">
      <Divider size=""/>
      <Flex p="4">
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
          <Text>Odisha University of Technology and Research (OUTR)</Text>
          <Text>All Rights Reserved</Text>
        </VStack>
      </Center>
    </Box>
  );
}
export default Footer;
