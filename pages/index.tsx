import { Box, Heading,Text  } from "@chakra-ui/react";
import Head from "next/head";
import BaseLayout from "../components/BaseLayout";

export default function Home() {
  return (
    <div className="">
      <Head>
        <title>ICCCT 2023</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta property="og:title" content="ICCCT 2023" key="title" />
      </Head>
      <main>
        <BaseLayout>
          {/* write from here */}
          <Heading>I&apos; m a Heading</Heading>
          <Text fontSize=''>(3xl) In love with React & Next</Text>
        </BaseLayout>
      </main>
    </div>
  );
}
