import {
  Heading,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
} from "@chakra-ui/react";
import BaseLayout from "../../components/BaseLayout";

const programCommittee = [
  {
    name: "Prof. Poonam Singh",
    university: "NIT",
    place: "Rourkela",
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
  {
    name: "Prof. M S Bhatt",
    university: "NIT",
    place: "Surtkal",
  },
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
];

function ProgramCommittee() {
  return (
    <BaseLayout>
      {/* write from here */}
      <Heading as="h2" size="xl">
        Program Committee
      </Heading>
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
            {programCommittee.map((data, index) => 
              <Tr key={index}>
                <Td>{index+1}</Td>
                <Td>{data.name}</Td>
                <Td>{data.university}</Td>
                <Td>{data.place}</Td>
              </Tr>
            )}
          </Tbody>
        </Table>
      </TableContainer>
    </BaseLayout>
  );
}
export default ProgramCommittee;
