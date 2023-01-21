import {
  ButtonGroup,
  Card,
  CardBody,
  CardFooter,
  Divider,
  Heading,
  Stack,
  Text,
  Button,
  SimpleGrid,
  Center,
  Image,
  Box,
} from "@chakra-ui/react";
import BaseLayout from "../../components/BaseLayout";
import spk1 from "../../assets/spk1.jpg";
import spk2 from "../../assets/spk2.jpg";
import chairspk1 from "../../assets/programChairspk1.jpg"

const speakerData = [
  {
    name: "Dr. Saraju P. Mohanty",
    university: "University of North Texas (UNT)",
    location: "Denton, Texas, USA",
    imageSrc: spk1.src,
  },
  {
    name: "Dr. Sriram Chellappan",
    university: "University of South Florida (USF)",
    location: "Tampa, Florida, USA",
    imageSrc: spk2.src,
  },
];

const programChairData = [
  {
    name: "Prof. Atulya K. Nagar",
    university: "Liverpool Hope University",
    location: " Liverpool, United Kingdom",
    imageSrc: chairspk1.src,
  }
]

function Keynotespeakers() {
  return (
    <BaseLayout>
      <Heading as="h1" size="2xl">
        Keynote Speakers
      </Heading>

      <SimpleGrid
        spacing={4}
        templateColumns="repeat(auto-fill, minmax(300px, 1fr))"
        mt="8"
      >
        {speakerData.map((dataItem, index) => (
          <Card key={index} variant={"filled"}>
            <CardBody>
              <Center>
                <Image
                  objectFit={"cover"}
                  rounded={"md"}
                  height="15rem"
                  src={dataItem.imageSrc}
                  alt={dataItem.name}
                />
              </Center>
              <Stack mt="6" spacing="3">
                <Heading size="md">{dataItem.name}</Heading>
                <Box>
                  <Text>{dataItem.university}</Text>
                  <Text mt="0">{dataItem.location}</Text>
                </Box>
              </Stack>
            </CardBody>
          </Card>
        ))}
      </SimpleGrid>

      <Heading as="h1" size="2xl" mt="8">
        Program Chair
      </Heading>

      <SimpleGrid
        spacing={4}
        templateColumns="repeat(auto-fill, minmax(300px, 1fr))"
        mt="8"
      >
        {programChairData.map((dataItem, index) => (
          <Card key={index} variant={"filled"}>
            <CardBody>
              <Center>
                <Image
                  objectFit={"cover"}
                  rounded={"md"}
                  height="15rem"
                  src={dataItem.imageSrc}
                  alt={dataItem.name}
                />
              </Center>
              <Stack mt="6" spacing="3">
                <Heading size="md">{dataItem.name}</Heading>
                <Box>
                  <Text>{dataItem.university}</Text>
                  <Text mt="0">{dataItem.location}</Text>
                </Box>
              </Stack>
            </CardBody>
          </Card>
        ))}
      </SimpleGrid>

    </BaseLayout>
  );
}
export default Keynotespeakers;
