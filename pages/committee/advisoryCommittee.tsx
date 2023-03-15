import {
  Heading,
  Table, TableContainer, Tbody, Td, Th, Thead, Tr
} from "@chakra-ui/react";
import BaseLayout from "../../components/BaseLayout";

const advisoryCommitteeData = [
  {
    name: "Prof. S. Behera",
    department: "Dean, SRIC",
  },
  {
    name: "Prof. A.N. Acharya",
    department: "Dean, Academic Affairs, OUTR",
  },
  {
    name: "Prof. A.Barisal",
    department: "Electrical Engineering",
  },
  {
    name: "Prof. D. P. Satpathy",
    department: "Civil Engineering",
  },
  {
    name: "Prof. R. Mallick",
    department: "Mechanical Engineering",
  },
  {
    name: "Prof. R.K. Pradhan",
    department: "Department of Biotechnology",
  },
  {
    name: "Prof.A.K.Dash",
    department: "Fashion Technology",
  },
  {
    name: "Prof. B.P.Dash",
    department: "HoD Textile Engineering",
  },
  {
    name: "Prof. A.N.Acharya",
    department: "Chemistry",
  },
  {
    name: "Prof. P.K. Satpathy",
    department: "Dean PG Studies & Research, OUTR",
  },
];

function AdvisoryCommittee() {
  return (
    <BaseLayout>
      {/* write from here */}
      <Heading as="h2" size="xl">
        Advisory Committee
      </Heading>

      <TableContainer bg="blue.50" mt={10} rounded="lg" shadow={"md"} p="4">
        <Table variant="simple">
          <Thead borderBottom="4px" borderColor="gray.200">
            <Tr>
              <Th>SL.NO</Th>
              <Th>Name</Th>
              {/* <Th>Department</Th> */}
            </Tr>
          </Thead>
          <Tbody>
            {advisoryCommitteeData.map((item, index) => {
              return (
                <Tr key={item.name}>
                  <Td>{index + 1}</Td>
                  <Td>{item.name}</Td>
                  <Td>{item.department}</Td>
                </Tr>
              );
            })}
          </Tbody>
        </Table>
      </TableContainer>
    </BaseLayout>
  );
}
export default AdvisoryCommittee;
