import { Box, Center, Text, Link, Divider } from "@chakra-ui/react";

function Footer() {
  return (
    <Box>
      <Center>
        <Divider py={10} />
      </Center>
      <Center bg="white.200" pt={1}>
        <Link pt={5}>
          <Text as="u" color="blue" fontSize="xs">
            Code of Conduct
          </Text>
        </Link>
      </Center>
      <Center>
        <Text>© ICCCT 2023</Text>
      </Center>
    </Box>
  );
}
export default Footer;
