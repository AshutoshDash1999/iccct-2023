import {
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
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

function AdvisoryCommittee() {
  return (
    <BaseLayout>
      {/* write from here */}
      <Heading as="h2" size="xl">
        Advisory Committee
      </Heading>
    

      <TableContainer mt={10} rounded="lg" shadow={"md"} p="4">
        <Table variant="simple">
          <Thead borderBottom="2px" borderColor="gray.200">
            <Tr>
              <Th>SL.NO</Th>
              <Th>Name</Th>
              <Th>Department</Th>
            </Tr>
          </Thead>
          <Tbody>
            <Tr>
              <Td>1</Td>
              <Td>Prof. S. Behera</Td>
              <Td> Electrical and Instrumentation Engineer</Td>
            </Tr>
            <Tr>
              <Td>2</Td>
              <Td>Prof. A.Barisal</Td>
              <Td>Electrical Engineering</Td>
            </Tr>
            <Tr>
              <Td>3</Td>
              <Td>Prof. D. P. Satpathy</Td>
              <Td>Civil Engineering</Td>
            </Tr>
            <Tr>
              <Td>4</Td>
              <Td>Prof. R. Mallick</Td>
              <Td>Mechanical Engineering</Td>
            </Tr>
            <Tr>
              <Td>5</Td>
              <Td>Prof.R.K.Pradhan</Td>
              <Td>Biotechnology</Td>
            </Tr>
            <Tr>
              <Td>6</Td>
              <Td>Prof.A.K.Dash</Td>
              <Td>Fashion Technology</Td>
            </Tr>
            <Tr>
              <Td>7</Td>
              <Td>Prof. B.P.Dash</Td>
              <Td>Textile Engineering</Td>
            </Tr>
            <Tr>
              <Td>8</Td>
              <Td>Prof. A.N.Acharya</Td>
              <Td>Chemistry</Td>
            </Tr>
          </Tbody>
        </Table>
      </TableContainer>
    </BaseLayout>
  );
}
export default AdvisoryCommittee;
