import { Box, Grid, GridItem, Image, VStack } from "@chakra-ui/react";
import Footer from "./Footer";
import Hero from "./Hero";
import Navbar from "./Navbar";
import { NextPage } from 'next'

interface Props {
    children?: any;
}

const BaseLayout:  NextPage<Props> = ({children}) => {
  return (
    <Box p="2" mx="4">
      <Navbar />
      <Hero />
      <Grid templateColumns="repeat(8, 1fr)" gap={4} mt="4">
        <GridItem colSpan={6} w="100%" h="10" bg="blue.500" height="200vh">
          <Box p="2">

          {children}
          </Box>
        </GridItem>
        <GridItem colSpan={2} w="100%" h="10" bg="blue.500">
          <VStack spacing={4}>
            <Box>
              <Image src="https://via.placeholder.com/250" alt="Dan Abramov" />
            </Box>
            <Box>
              <Image src="https://via.placeholder.com/250" alt="Dan Abramov" />
            </Box>
            <Box>
              <Image src="https://via.placeholder.com/250" alt="Dan Abramov" />
            </Box>
          </VStack>
        </GridItem>
      </Grid>
      <Footer/>
    </Box>
  );
}
export default BaseLayout;
