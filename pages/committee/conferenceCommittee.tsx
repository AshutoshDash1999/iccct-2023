import {
  Box,
  Heading,
  ListItem,
  StackDivider,
  UnorderedList,
  VStack
} from "@chakra-ui/react";
import BaseLayout from "../../components/BaseLayout";

function ConferenceCommittee() {
  return (
    <BaseLayout>
      <Heading as="h2" size="xl" mb={8}>
        Conference Committee
      </Heading>
      <VStack
        align="stretch"
        divider={<StackDivider borderColor="gray.200" />}
        spacing={4}
      >
        <Box>
          <Heading as="h3" size="lg">
            Patron
          </Heading>
          <UnorderedList>
            <ListItem>
              Prof. (Dr.) Bibhuti Bhusan Biswal, Hon&apos;ble VC, OUTR
            </ListItem>
          </UnorderedList>
        </Box>
        <Box>
          <Heading as="h3" size="lg">
            Convener
          </Heading>
          <UnorderedList>
            <ListItem>
              Dr.Jibitesh Mishra, Professor & HOD, Department of CSA, OUTR,
              Bhubaneswar
            </ListItem>
          </UnorderedList>
        </Box>
        <Box>
          <Heading as="h3" size="lg">
            General Chair
          </Heading>
          <UnorderedList>
            <ListItem>
              Rati Ranjan Dash, Dean Center for Distance and Continuing Education, OUTR
            </ListItem>
          </UnorderedList>
        </Box>
        <Box>
          <Heading as="h3" size="lg">
            Program Chair
          </Heading>
          <UnorderedList>
            <ListItem>
              Prof. Atulya K. Nagar, Liverpool Hope University, Liverpool, United Kingdom
            </ListItem>
          </UnorderedList>
        </Box>
        <Box>
          <Heading as="h3" size="lg">
            Organising Chair
          </Heading>
          <UnorderedList>
            <ListItem>
              Dr.Jibitesh Mishra, Professor & HOD, Department of CSA, OUTR,
              Bhubaneswar
            </ListItem>
            <ListItem>
              Dr.Ranjan Kumar Dash, Professor & HOD, Department of IT, OUTR,
              Bhubaneswar
            </ListItem>
            <ListItem>
              Prof. Tapas Kumar Patra , Dept. of E&IE , OUTR,Bhubanewar
            </ListItem>
          </UnorderedList>
        </Box>
        <Box>
          <Heading as="h3" size="lg">
            Finance Chair
          </Heading>
          <UnorderedList>
            <ListItem>
              Prof. P. K. Padhi , Dept. of Civil , OUTR, Bhubaneswar
            </ListItem>
            <ListItem>
              Prof. Tapas Kumar Patra , Dept. of E&IE , OUTR, Bhubaneswar
            </ListItem>
            <ListItem>
              Sapna Sarita Swain, Dept. of Planning , OUTR, Bhubaneswar
            </ListItem>
          </UnorderedList>
        </Box>
        <Box>
          <Heading as="h3" size="lg">
            Publicity Chair
          </Heading>
          <UnorderedList>
            <ListItem>Prof. Bijaya Ketan Panigrahi, IIT,Delhi</ListItem>
            <ListItem>
              Dr.Subhasis Mahapatra, HOD, Department of CSE, OUTR, Bhubaneswar
            </ListItem>
          </UnorderedList>
        </Box>
      </VStack>
    </BaseLayout>
  );
}
export default ConferenceCommittee;
