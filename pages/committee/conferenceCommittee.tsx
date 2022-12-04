import {
  List,
  ListItem,
  ListIcon,
  OrderedList,
  UnorderedList,
  VStack,
  StackDivider,
} from "@chakra-ui/react";
import {
  Box,
  Button,
  Heading,
  Text,
  Input,
  InputGroup,
  ButtonGroup,
  InputRightElement,
  Divider,
} from "@chakra-ui/react";
import BaseLayout from "../../components/BaseLayout";

function ConferenceCommittee() {
  return (
    <BaseLayout>
      {/* write from here */}
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
              Dr. Prashanta Kumar Patra , OSD, OUTR, Bhubaneswar
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
              Prof. Tapas Kumar Patra , Dept. of E&IE , OUTR,Bhubanewa
            </ListItem>
          </UnorderedList>
        </Box>
        <Box>
          <Heading as="h3" size="lg">
            General Chair
          </Heading>
          <UnorderedList>
            <ListItem>Prof. Bijaya Ketan Panigrahi, IIT, Delhi</ListItem>
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
