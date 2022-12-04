import BaseLayout from "../components/BaseLayout"
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
} from '@chakra-ui/react'

function Registration() {
  return (
    <BaseLayout>
    {/* write from here */}
    <Box pt={10}>
    <Table border='1px' >
      <Thead border='1px' >
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
        <Td >80 USD</Td>
      </Tr>
      <Tr>
        <Td>Academic Delegates</Td>
        <Td>5,000 INR</Td>
        <Td >65 USD</Td>
      </Tr>
      <Tr>
        <Td>Students (U.G., P.G., Ph.D., Research Scholars)</Td>
        <Td>4,000 INR</Td>
        <Td >55 USD</Td>
      </Tr>
    </Tbody>
    </Table>
    </Box>
    </BaseLayout>
  )
}
export default Registration