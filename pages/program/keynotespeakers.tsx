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
} from "@chakra-ui/react";
import BaseLayout from "../../components/BaseLayout";
import spk1 from "../../assets/spk1.jpg";
import spk2 from "../../assets/spk2.jpg";

const speakerData = [
  {
    name: "Sarang Mahatwo",
    location: "New Jersey, USA",
    imageSrc: spk1.src,
  },
  {
    name: "Prof. Valentina E Balas",
    location: "Aurel Vlaicu University of Arad, Romania",
    imageSrc: spk2.src,
  },
];

function Keynotespeakers() {
  return (
    <BaseLayout>
      <Heading as="h1" size="3xl">
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
                <Text>{dataItem.location}</Text>
              </Stack>
            </CardBody>
          </Card>
        ))}
      </SimpleGrid>
    </BaseLayout>
  );
}
export default Keynotespeakers;
