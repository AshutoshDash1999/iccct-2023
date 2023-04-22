import { Box, Divider, Heading, Image, VStack } from "@chakra-ui/react";
import COEAILabPic from "../assets/coeai-lab.jpg";

export default function Sponsors() {
  return (
    <VStack spacing={4}>
      <Heading as="h3" size="lg">
        Sponsors
      </Heading>
      <Divider border="4px" borderRadius="lg" borderColor="black" />
      <Heading as="h5" size="md" background="blue.300" rounded="lg" p="2">
        Diamond Sponsors
      </Heading>

      <Box>
        <Image
          rounded="xl"
          src="https://via.placeholder.com/250"
          alt="sponsors"
        />
      </Box>
      <Heading as="h5" size="md" background="blue.300" rounded="lg" p="2">
        Gold Sponsors
      </Heading>
      <Box>
        <Image
          rounded="xl"
          src="https://via.placeholder.com/250"
          alt="sponsors"
        />
      </Box>
      <Heading as="h5" size="md" background="blue.300" rounded="lg" p="2">
        Silver Sponsors
      </Heading>
      <Box>
        <Image
          rounded="xl"
          src={COEAILabPic.src}
          alt="sponsors"
          objectFit="contain"
        />
      </Box>
    </VStack>
  );
}
