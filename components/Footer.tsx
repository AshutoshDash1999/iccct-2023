import { Box, Center,Text,Link,Divider } from "@chakra-ui/react";

function Footer() {
  return (
    <Box>
      <Center pt='150px'>
      <Divider  pt={10} />
      </Center>
      <Center bg="white.200"  position="relative" bottom="0" pt={1} >
         <Link pt={5}><Text as='u' color='blue' fontSize='xs'>Code of Conduct</Text></Link>
         
      </Center>
      <Center>
      <Text>© IEEEVR Conference</Text>
      </Center>
    </Box>
  );
}
export default Footer;
