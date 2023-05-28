import {
  Box,
  Divider,
  Heading,
  Table,
  TableCaption,
  TableContainer,
  Tbody,
  Td,
  Tfoot,
  Th,
  Thead,
  Tr
} from "@chakra-ui/react";
import BaseLayout from "../components/BaseLayout";

function Registration() {
  return (
    <BaseLayout>
      {/* write from here */}
      <Heading as="h2" size="xl">
        Registration
      </Heading>
      <Heading as="h4" size="md" my="4">
        International Conference on Communication and Computational Techniques
        (ICCCT-2023)
      </Heading>
      <TableContainer bg="blue.50" mt={10} rounded="lg" shadow={"md"} p="4">
        <Table variant="simple">
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

      <Box>
        <Heading as="h4" size="md" mt="8" mb="4">
          Bank Details
        </Heading>

        <Box>
          <TableContainer mt={10} rounded="lg" shadow={"md"} p="4">
            <Table variant="simple">
              <Tbody>
                <Tr>
                  <Td>Account Holder Name:</Td>
                  <Td>ICCCT 2023</Td>
                </Tr>
                <Tr>
                  <Td>Account Number:</Td>
                  <Td>110102561871</Td>
                </Tr>
                <Tr>
                  <Td>Branch Name:</Td>
                  <Td>CET CAMPUS, BHUBANESWAR</Td>
                </Tr>
                <Tr>
                  <Td>Branch Address:</Td>
                  <Td>
                    <div> CANARA BANK, COLLEGE OF ENGINEERING AND TECHNOLOGY,</div> 
                    <div>GHATIKIA, KALINGANAGAR, BHUBANESWAR</div> 
                    <div>PIN: 751003</div> 
                  </Td>
                </Tr>
                <Tr>
                  <Td>IFSC Code:</Td>
                  <Td>CNRB0018017</Td>
                </Tr>
              </Tbody>
            </Table>
          </TableContainer>
        </Box>
      </Box>
    </BaseLayout>
  );
}
export default Registration;
