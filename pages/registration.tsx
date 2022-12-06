import BaseLayout from "../components/BaseLayout";
import {
  Box,
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
  Heading,
  Divider,
} from "@chakra-ui/react";

function Registration() {
  return (
    <BaseLayout>
      {/* write from here */}
      <Heading as="h2" size="xl">
        Registration
      </Heading>
      <Heading as="h4" size="md" my="4">
        1st International Conference on Communication and Computational
        Techniques (ICCCT-2023)
      </Heading>
      <TableContainer mt={10} rounded="lg" shadow={"md"} p="4">
        <Table variant='simple'>
          <Thead borderBottom="2px" borderColor="gray.200">
            <Tr>
              <Th>PARTICIPANT CATEGORY</Th>
              <Th>NATIONAL</Th>
              <Th>OVERSEAS (USD)</Th>
            </Tr>
          </Thead>
          <Tbody>
            <Tr>
              <Td>Industrial Delegates</Td>
              <Td>6,000 INR</Td>
              <Td>80 USD</Td>
            </Tr>
            <Tr>
              <Td>Academic Delegates</Td>
              <Td>5,000 INR</Td>
              <Td>65 USD</Td>
            </Tr>
            <Tr>
              <Td>Students (U.G., P.G., Ph.D., Research Scholars)</Td>
              <Td>4,000 INR</Td>
              <Td>55 USD</Td>
            </Tr>
          </Tbody>
        </Table>
      </TableContainer>
    </BaseLayout>
  );
}
export default Registration;
