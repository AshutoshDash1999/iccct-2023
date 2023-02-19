import {
  Box,
  Flex,
  Heading,
  Stack,
  Table,
  TableContainer,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr,
  useMediaQuery
} from "@chakra-ui/react";
import BaseLayout from "../../components/BaseLayout";

const programCommittee = [
  {
    name: "Dr. Albert Sunny",
    university: "IIT",
    place: "Palakkad",
  },
  {
    name: "Dr. Niladri Bihari Puhan",
    university: "IIT",
    place: "Bhubaneswar",
  },
  {
    name: "Dr. Manoranjan Satpathy",
    university: "IIT",
    place: "Bhubaneswar",
  },
  {
    name: "Dr. Barathram. Ramkumar",
    university: "IIT",
    place: "Bhubaneswar",
  },
  {
    name: "Dr. Soumya Prakash Dash",
    university: "IIT",
    place: "Bhubaneswar",
  },
  {
    name: "Prof. Debasish Jena",
    university: "IIT",
    place: "Bhubaneswar",
  },
  {
    name: "Prof. M S Bhatt",
    university: "NIT",
    place: "Surtkal",
  },
  {
    name: "Prof. Poonam Singh",
    university: "NIT",
    place: "Rourkela",
  },
  {
    name: "Prof. B. D. Sahu",
    university: "NIT",
    place: "Rourkela",
  },
  {
    name: "Prof. Anjali Mohapatra",
    university: "IIIT",
    place: "Bhubaneswar",
  },
  {
    name: "Prof. Saraju P. Mohanty",
    university: "UNT",
    place: "Denton",
  },
  {
    name: "Prof. Sriram Chellappan",
    university: "USF",
    place: "Florida",
  },
  {
    name: "Prof. Sarojananda Mishra",
    university: "IGIT",
    place: "Sarang",
  },
];

function ProgramCommittee() {
  const [isMobile] = useMediaQuery("(max-width: 400px)");

  return (
    <BaseLayout>
      {/* write from here */}
      <Heading as="h2" size="xl">
        Program Committee
      </Heading>
      <Flex my="4" gap="4">
        <Text fontSize="2xl" as="b">
          Program Chair :
        </Text>
        <Box>
          <Text fontSize="2xl">Prof. Atulya K. Nagar</Text>
          <Text fontSize="md">Liverpool Hope University,</Text>
          <Text fontSize="md">Liverpool, United Kingdom</Text>
        </Box>
      </Flex>
      <TableContainer bg="blue.50" mt={10} rounded="lg" shadow={"md"} p="4">
        <Table variant="simple">
          <Thead borderBottom="4px" borderColor="gray.200">
            <Tr>
              <Th>SL.NO</Th>
              <Th>NAME</Th>
              <Th>UNIVERSITY/COLLAGE</Th>
              <Th>PLACE</Th>
            </Tr>
          </Thead>
          <Tbody>
            {programCommittee.map((data, index) => (
              <Tr key={index}>
                <Td>{index + 1}</Td>
                <Td>{data.name}</Td>
                <Td>{data.university}</Td>
                <Td>{data.place}</Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </TableContainer>
    </BaseLayout>
  );
}
export default ProgramCommittee;
