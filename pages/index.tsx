import { Box, Button, Heading, Text } from "@chakra-ui/react";
import Head from "next/head";
import BaseLayout from "../components/BaseLayout";

export default function Home() {
  return (
    <div className="">
      <main>
        <BaseLayout>
          {/* write from here */}
          <Heading as="h1" size="2xl">
            About the Conference
          </Heading>
          <Box width="70%">
            <Heading as="h4" size="md" my="4">
              International Conference on Communication and Computational
              Techniques (ICCCT-2023)
            </Heading>
          </Box>
          <Text fontSize="xl" mt={6}>
            ICCCT aims to bring together leading academic scientists,
            researchers and research scholars to exchange and share their
            experiences and research results on all aspects of Communication and
            Computational Techniques. It also provides a premier
            interdisciplinary platform for researchers, practitioners and
            educators to present and discuss the most recent innovations,
            trends, and concerns as well as practical challenges encountered and
            solutions adopted in the fields of Computational Techniques and
            Communication
          </Text>

          <Box mt={10}>
            <Heading as="h2" size="2xl">
              About Odisha University of Technology and Research (OUTR)
            </Heading>
            <Heading as="h4" size="md" my="4">
              (Formerly College of Engineering and Technology)
            </Heading>
            <Text fontSize="xl">
              The Odisha University of Technology and Research, (Formerly CET),
              Bhubaneswar was established by the Government of Odisha in 1981 to
              meet the growing technical man power need in the State. It was a
              Constituent College of the Odisha University of Agriculture &
              Technology, Bhubaneswar since inception. After creation of a
              Technical University for Odisha State, the College has become a
              Constituent College of Biju Patnaik University of Technology
              (BPUT), Odisha with effect from 09th July, 2002 as per
              section-37(1) of BPUT Act, 2002.
            </Text>
            <Text fontSize="xl" mt={5}>
              The College is located in the Techno-campus (an area of more than
              100 Acres) at Kalinga Nagar, Bhubaneswar about 2.0 Kms. away from
              Khandagiri-Udayagiri caves. The College was shifted to the new
              Techno Campus in March, 2001. A full-fledged branch of Canara Bank
              is operating in the college campus. At present, students are
              residing in two Ladies Hostel (KCHR & KHR) of 500 capacity each
              and two Boys Hostel (RHR & APJAKHR) of 500 capacity each inside
              the campus.
            </Text>
          </Box>
        </BaseLayout>
      </main>
    </div>
  );
}
