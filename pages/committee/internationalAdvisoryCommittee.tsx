import {
  Heading,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
  Box,
} from "@chakra-ui/react";
import BaseLayout from "../../components/BaseLayout";

const iaCommitteeData = [
  {
    name: "Prof. P. V. Sudha",
    university: "Osmania University",
    country: "India",
  },
  {
    name: "Prof. Joy Iong Zong Chen",
    university: "Da- Yeh University",
    country: "Taiwan",
  },
  {
    name: "Prof. A K Verma",
    university: "Western Norway University",
    country: "Norway",
  },
  {
    name: "Prof. Dan Simon",
    university: "Cleveland State University",
    country: "USA",
  },
  {
    name: "Prof. Atulya K. Nagar",
    university: "Liverpool Hope University",
    country: "UK",
  },
  {
    name: "Dr. Wang Haoxiang",
    university: "Cornell University",
    country: "USA",
  },
  {
    name: "Dr. Anuradha Ranasinghe",
    university: "Liverpool Hope University",
    country: "UK",
  },
];

function InternationalAdvisoryCommittee() {
  return (
    <BaseLayout>
      {/* write from here */}
      <Heading as="h2" size="xl">
        International Advisory Committee
      </Heading>

      <TableContainer bg="blue.50" mt={10} rounded="lg" shadow={"md"} p="4">
        <Table variant="simple">
          <Thead borderBottom="2px" borderColor="gray.200">
            <Tr>
              <Th>SL.NO</Th>
              <Th>Name</Th>
              <Th>University/Collage</Th>
              <Th>Country</Th>
            </Tr>
          </Thead>
          <Tbody>
            {iaCommitteeData.map((item, index) => (
              <Tr key={index}>
                <Td>{index+1}</Td>
                <Td>{item.name}</Td>
                <Td>{item.university}</Td>
                <Td>{item.country}</Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </TableContainer>
    </BaseLayout>
  );
}
export default InternationalAdvisoryCommittee;
