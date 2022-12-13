import {
  Box,
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Grid,
  GridItem,
  Heading,
  Link,
  Text,
} from "@chakra-ui/react";
import BaseLayout from "../components/BaseLayout";

function CallForPapers() {
  return (
    <BaseLayout>
      <Heading as="h1" size="3xl">
        Call for Papers
      </Heading>
      <Text fontSize="xl" mt={6}>
        ICCCT aims to bring together leading academic scientists, researchers
        and research scholars to exchange and share their experiences and
        research results on all aspects of Communication and Computational
        Techniques. It also provides a premier interdisciplinary platform for
        researchers, practitioners and educators to present and discuss the most
        recent innovations, trends, and concerns as well as practical challenges
        encountered and solutions adopted in the fields of Computational
        Techniques and Communication
      </Text>
      <Box w="100%">
        <Text fontSize="xl" mt={6}>
          <b>Review and Publication of Manuscripts:</b>
          The originality, technical correctness, relevance, and quality of
          presentation of the submitted papers will be evaluated by the TPC
          members. An accepted paper must be presented at the conference venue
          by a registered author at the full registration rate. Each full
          registration covers up to two conference papers authored by the
          registered author. Accepted and presented papers will be published in
          the conference Procedia (Applied For)
        </Text>
      </Box>

      <Card variant={"filled"} mt="10">
        <CardHeader>
          <Heading size="md"> Paper Submission</Heading>
        </CardHeader>
        <CardBody>
          <Text>Click on the button below to submit your paper</Text>
        </CardBody>
        <CardFooter>
          <Link
            href="https://easychair.org/account/signin?l=PcXGF3g4ftU2x8lewIu82k"
            isExternal
          >
            <Button variant={"solid"} colorScheme="blue">
              Submit
            </Button>
          </Link>
        </CardFooter>
      </Card>
    </BaseLayout>
  );
}
export default CallForPapers;
