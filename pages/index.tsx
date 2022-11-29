import { Box, Heading, Text } from "@chakra-ui/react";
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
          <Heading>Come and join us</Heading>
          <Text fontSize="2xl" pt={5}>
            The safety and well-being of all conference participants is our
            priority. After evaluating the current COVID-19 situation in New
            Zealand and the uncertainty around International travel, the
            decision has been made to transform the in-person component of IEEE
            VR 2022 into an all-digital conference experience and will now be an
            online event. Therefore, IEEE VR 2022 will no longer take place in
            Christchurch, New Zealand and will instead take place virtually. The
            conference dates remain the same (12 – 16 March 2022). Proceedings
            will not be cancelled, and publications will continue as planned.
          </Text>
          <Text fontSize="2xl" pt={5}>
            Though the decision has been made to transform IEEE VR 2022 into an
            all-digital online conference experience, several members of the
            IEEE VR community around the world have agreed to organise small
            meeting hubs for those able to travel locally. Please visit the
            satellite events page to find an event near you.
          </Text>
          <Text fontSize="2xl" pt={5}>
            Our goal is to provide the best experience for virtual attendees,
            following in the historical footsteps of the virtual experience of
            VR 2020 in Atlanta and VR 2021 in Lisbon.
          </Text>
          <Text fontSize="2xl" pt={5}>
            Come join us for an unforgettable experience and explore the
            virtuality continuum in the premier event covering extended reality
            featuring oral presentations, posters, research demos, tutorials,
            and workshops.
          </Text>
        </BaseLayout>
      </main>
    </div>
  );
}
