import {
  Box,
  Divider,
  Grid,
  GridItem,
  Heading,
  Image,
  VStack,
} from "@chakra-ui/react";
import Footer from "./Footer";
import Hero from "./Hero";
import Navbar from "./Navbar";
import { NextPage } from "next";
import Head from "next/head";

interface Props {
  children?: any;
}

const BaseLayout: NextPage<Props> = ({ children }) => {
  return (
    <Box p="2" mx="4">
      <Head>
        <title>ICCCT 2023</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta property="og:title" content="ICCCT 2023" key="title" />
      </Head>
      <main>
        <Navbar />
        <Hero />
        <Grid templateColumns="repeat(8, 1fr)" gap={4} mt="4">
          <GridItem colSpan={6} w="100%">
            <Box p="4">{children}</Box>
          </GridItem>
          
          <GridItem colSpan={2} w="100%">
            {/* brand  */}
            <VStack spacing={4}>
              <Heading as="h3" size="lg">
                Sponsors
              </Heading>
              <Divider border="4px" borderRadius="lg" borderColor="black" />
              <Heading
                as="h5"
                size="md"
                background="blue.300"
                rounded="lg"
                p="2"
              >
                Diamond Sponsors
              </Heading>

              <Box>
                <Image
                  src="https://via.placeholder.com/250"
                  alt="sponsors"
                />
              </Box>
              <Heading
                as="h5"
                size="md"
                background="blue.300"
                rounded="lg"
                p="2"
              >
                Gold Sponsors
              </Heading>
              <Box>
                <Image
                  src="https://via.placeholder.com/250"
                  alt="sponsors"
                />
              </Box>
              <Heading
                as="h5"
                size="md"
                background="blue.300"
                rounded="lg"
                p="2"
              >
                Silver Sponsors
              </Heading>
              <Box>
                <Image
                  src="https://via.placeholder.com/250"
                  alt="sponsors"
                />
              </Box>
            </VStack>
          </GridItem>
        </Grid>
        <Footer />
      </main>
    </Box>
  );
};
export default BaseLayout;
