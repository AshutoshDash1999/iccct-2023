import {
  ButtonGroup,
  Card,
  CardBody,
  CardFooter,
  Divider,
  Heading,
  Stack,
  Text,
  Button,Grid, GridItem
} from "@chakra-ui/react";
import BaseLayout from "../components/BaseLayout";
import Image from "next/image";
import spk1 from "../assets/spk1.jpg";
import spk2 from "../assets/spk2.jpg";

function Keynotespeakers() {
  return (
    <BaseLayout>
      <Heading as="h1" size="3xl">
        Keynote Speakers
      </Heading>
      <Grid templateColumns='repeat(3, 2fr)' gap={5}>
      <Card maxW="sm">
        <CardBody>
          <Image src={spk1} alt="ICCCT Banner" height="400" priority />
          <Stack mt="6" spacing="3">
            <Heading size="md">Sarang Mahatwo</Heading>
            <Text>New Jersey, USA</Text>
          </Stack>
        </CardBody>
        <Divider />
        <CardFooter></CardFooter>
      </Card>
      <Card maxW="sm">
        <CardBody>
          <Image src={spk2} alt="ICCCT Banner" height="400" priority />
          <Stack mt="6" spacing="3">
            <Heading size="md">Prof. Valentina E Balas</Heading>
            <Text>Aurel Vlaicu University of Arad, Romania</Text>
          </Stack>
        </CardBody>
        <Divider />
        <CardFooter></CardFooter>
      </Card>
      </Grid>
    </BaseLayout>
  );
}
export default Keynotespeakers;
