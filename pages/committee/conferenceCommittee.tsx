import {
  Box,
  Card,
  CardBody,
  CardHeader,
  Heading,
  Stack,
  StackDivider,
  Text,
} from "@chakra-ui/react";
import BaseLayout from "../../components/BaseLayout";

function ConferenceCommittee() {
  return (
    <BaseLayout>
      <Heading>Conference Committees</Heading>
      <Card>
        <CardHeader></CardHeader>

        <CardBody>
          <Stack divider={<StackDivider />} spacing="4">
            <Box>
              <Heading size="md" textTransform="uppercase">
                Patron
              </Heading>
              <Text pt="2" fontSize="md">
                Dr. Prashanta Kumar Patra , OSD, OUTR, Bhubaneswar
              </Text>
            </Box>
            <Box>
              <Heading size="md" textTransform="uppercase">
                Convener
              </Heading>
              <Text pt="2" fontSize="md">
                Dr.Jibitesh Mishra, Professor & HOD, Department of CSA, OUTR,
                Bhubaneswar
              </Text>
            </Box>

            <Box>
              <Heading size="md" textTransform="uppercase">
                Finance Chair
              </Heading>
              <Text pt="2" fontSize="md">
                Finance Chair
              </Text>
            </Box>
            <Box>
              <Heading size="md" textTransform="uppercase">
                General Chair
              </Heading>
              <Text pt="2" fontSize="md">
                Prof. Bijaya Ketan Panigrahi, IIT, Delhi
              </Text>
            </Box>
            <Box>
              <Heading size="md" textTransform="uppercase">
                Publicity Chair
              </Heading>
              <Text pt="2" fontSize="md">
                Prof. Bijaya Ketan Panigrahi, IIT,Delhi Dr.Subhasis Mahapatra,
                HOD, Department of CSE, OUTR, Bhubaneswar
              </Text>
            </Box>
          </Stack>
        </CardBody>
      </Card>
    </BaseLayout>
  );
}
export default ConferenceCommittee;
