import { Heading, Table, TableContainer, Tbody, Td, Th, Thead, Tr } from "@chakra-ui/react";
import BaseLayout from "../../components/BaseLayout";

const publicityCommitteeData = [
  {
    name: "Dr. Subasish Mohapatra",
    university: "OUTR, Bhubaneswar",
  },
  {
    name: "Dr. Sanjay Panda",
    university: "NIT, Warangal",
  },
  {
    name: "Dr. Jitendra Ku. Rout",
    university: "NIT, Raipur",
  },
]

const PublicityCommittee = () => {
  return (
    <BaseLayout>
      <Heading as="h2" size="xl">
        Publicity Committee
      </Heading>

      <TableContainer bg="blue.50" mt={10} rounded="lg" shadow={"md"} p="4">
        <Table variant="simple">
          <Thead borderBottom="4px" borderColor="gray.200">
            <Tr>
              <Th>SL.NO</Th>
              <Th>Name</Th>
              <Th>Department</Th>
            </Tr>
          </Thead>
          <Tbody>
            {publicityCommitteeData.map((item, index) => {
              return (
                <Tr key={item.name}>
                  <Td>{index + 1}</Td>
                  <Td>{item.name}</Td>
                  <Td>{item.university}</Td>
                </Tr>
              );
            })}
          </Tbody>
        </Table>
      </TableContainer>
    </BaseLayout>
  );
};
export default PublicityCommittee;
