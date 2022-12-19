import {
  Box,
  Divider,
  Grid,
  GridItem,
  Heading,
  Image,
  VStack,
  useMediaQuery,
} from "@chakra-ui/react";
import Footer from "./Footer";
import Hero from "./Hero";
import Navbar from "./Navbar";
import { NextPage } from "next";
import Head from "next/head";
import Sponsors from "./Sponsors";

interface Props {
  children?: any;
}

const BaseLayout: NextPage<Props> = ({ children }) => {
  const [isMobile] = useMediaQuery("(max-width: 768px)");

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
        {isMobile ? (
          <Box>
            <Box p="4">{children}</Box>
            <Sponsors/>
          </Box>
        ) : (
          <Grid templateColumns="repeat(8, 1fr)" gap={4} mt="4">
            <GridItem colSpan={6} w="100%">
              <Box p="4">{children}</Box>
            </GridItem>

            <GridItem colSpan={2} w="100%">
              {/* brand  */}
              <Sponsors/>
            </GridItem>
          </Grid>
        )}
        <Footer />
      </main>
    </Box>
  );
};
export default BaseLayout;
