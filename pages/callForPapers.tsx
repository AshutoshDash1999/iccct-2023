import {
    Alert,
    AlertIcon,
    Box,
    Button,
    Card,
    CardBody,
    CardFooter,
    CardHeader,
    Heading,
    Link,
    Text
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
          members. Each full registration covers one conference paper
          presentation and publication by the registered author.
        </Text>
      </Box>

      <Box my="4">
        <Alert status="info" variant="left-accent" borderRadius="md">
          <AlertIcon />
          <Text as='b'>
            After conference proceedings will be published in the Taylor
            and Francis series.
          </Text>
        </Alert>
      </Box>

      <Card variant={"filled"} mt="10">
        <CardHeader>
          <Heading size="md"> Paper Submission</Heading>
        </CardHeader>
        <CardBody>
          <Text>Click on the button below to submit your paper</Text>
        </CardBody>
        <CardFooter>
          <Link href="https://easychair.org/account/signin" isExternal>
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
