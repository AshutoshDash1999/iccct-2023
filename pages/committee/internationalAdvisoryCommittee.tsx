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

function InternationalAdvisoryCommittee() {
  return (
    <BaseLayout>
      {/* write from here */}
      <Heading as="h3" size="lg">
        International Advisory Committee
      </Heading>
      <Box w="50%" h="5px" bgGradient="linear(to-r, pink.500, orange.500)" />

      <TableContainer>
        <Table variant="simple">
          <Thead>
            <Tr>
              <Th>SL.NO</Th>
              <Th>Name</Th>
              <Th>University/Collage</Th>
              <Th>Country</Th>
            </Tr>
          </Thead>
          <Tbody>
            <Tr>
              <Td>1</Td>
              <Td>Prof. P. V. Sudha</Td>
              <Td>Osmania University</Td>
              <Td>India</Td>
            </Tr>
            <Tr>
              <Td>2</Td>
              <Td>Prof. Joy Iong Zong Chen</Td>
              <Td>Da- Yeh University</Td>
              <Td>Taiwan</Td>
            </Tr>
            <Tr>
              <Td>3</Td>
              <Td>Prof. A K Verma</Td>
              <Td>Western Norway University</Td>
              <Td>Norway</Td>
            </Tr>
            <Tr>
              <Td>4</Td>
              <Td>Prof. Dan Simon</Td>
              <Td>Cleveland State University</Td>
              <Td>USA</Td>
            </Tr>
            <Tr>
              <Td>5</Td>
              <Td>Prof. Atulya K. Nagar</Td>
              <Td>Liverpool Hope University</Td>
              <Td>UK</Td>
            </Tr>
            <Tr>
              <Td>6</Td>
              <Td>Dr. Wang Haoxiang</Td>
              <Td>Cornell University</Td>
              <Td>USA</Td>
            </Tr>
            <Tr>
              <Td>7</Td>
              <Td>Dr. Anuradha Ranasinghe</Td>
              <Td>Liverpool Hope University</Td>
              <Td>UK</Td>
            </Tr>
          </Tbody>
        </Table>
      </TableContainer>
    </BaseLayout>
  );
}
export default InternationalAdvisoryCommittee;
