import {
  List,
  ListItem,
  ListIcon,
  OrderedList,
  UnorderedList,
} from '@chakra-ui/react'
import { Box, Button, Heading, Text, Input,InputGroup, ButtonGroup,InputRightElement,Divider } from "@chakra-ui/react";
import BaseLayout from "../../components/BaseLayout"

function ConferenceCommittee() {
  return (
    <BaseLayout>
    {/* write from here */}
    <Heading as='h3' size='lg'>
    Patron
  </Heading>
  <Box w='50%' h='5px' bgGradient='linear(to-r, pink.500, orange.500)' />
  <Box>
  <UnorderedList>
  <ListItem>Dr. Prashanta Kumar Patra , OSD, OUTR, Bhubaneswar</ListItem>
</UnorderedList>
  </Box>
  <Heading as='h3' size='lg'>
  Convener
  </Heading>
  <Box w='50%' h='5px' bgGradient='linear(to-r, pink.500, orange.500)' />
  <Box>
  <UnorderedList>
  <ListItem>Dr.Jibitesh Mishra, Professor & HOD, Department of CSA, OUTR, Bhubaneswar</ListItem>
</UnorderedList>
  </Box>
  <Heading as='h3' size='lg'>
  Organising Chair
  </Heading>
  <Box w='50%' h='5px' bgGradient='linear(to-r, pink.500, orange.500)' />
  <Box>
  <UnorderedList>
  <ListItem>Dr.Jibitesh Mishra, Professor & HOD, Department of CSA, OUTR, Bhubaneswar</ListItem>
  <ListItem>Dr.Ranjan Kumar Dash, Professor & HOD, Department of IT, OUTR, Bhubaneswar</ListItem>
  <ListItem>Prof. Tapas Kumar Patra , Dept. of E&IE , OUTR,Bhubanewar</ListItem>
</UnorderedList>
  </Box>
  <Heading as='h3' size='lg'>
  Finance Chair
  </Heading>
  <Box w='50%' h='5px' bgGradient='linear(to-r, pink.500, orange.500)' />
  <Box>
  <UnorderedList>
  <ListItem>Prof. Tapas Kumar Patra , Dept. of E&IE , OUTR,Bhubanewa</ListItem>
</UnorderedList>
  </Box>
  <Heading as='h3' size='lg'>
  General Chair
  </Heading>
  <Box w='50%' h='5px' bgGradient='linear(to-r, pink.500, orange.500)' />
  <Box>
  <UnorderedList>
  <ListItem>Prof. Bijaya Ketan Panigrahi, IIT, Delhi</ListItem>
</UnorderedList>
  </Box>
  <Heading as='h3' size='lg'>
  Publicity Chair
  </Heading>
  <Box w='50%' h='5px' bgGradient='linear(to-r, pink.500, orange.500)' />
  <Box>
  <UnorderedList>
  <ListItem>Prof. Bijaya Ketan Panigrahi, IIT,Delhi</ListItem>
  <ListItem>Dr.Subhasis Mahapatra, HOD, Department of CSE, OUTR, Bhubaneswar</ListItem>
</UnorderedList>
  </Box>
    </BaseLayout>
    
  )
}
export default ConferenceCommittee