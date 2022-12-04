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
import BaseLayout from "../../components/BaseLayout"

function ProgramCommittee() {
  return (
    <BaseLayout>
    {/* write from here */}
    <Heading as="h2" size="xl">
    Program Committee
      </Heading>
      <TableContainer mt={10} rounded="lg" shadow={"md"} p="4">
        <Table variant="simple">
        <Thead borderBottom="2px" borderColor="gray.200">
          <Tr>
            <Th>SL.NO</Th>
            <Th>NAME</Th>
            <Th>UNIVERSITY/COLLAGE</Th>
            <Th>PLACE</Th>
          </Tr>
        </Thead>
        <Tbody>
          <Tr>
            <Td>1</Td>
            <Td>Prof. Poonam Singh</Td>
            <Td>NIT</Td>
            <Td>Rourkela</Td>
          </Tr>
          <Tr>
            <Td>2</Td>
            <Td>Prof. Saraju P. Mohanty</Td>
            <Td>UNT</Td>
            <Td>Denton</Td>
          </Tr>
          <Tr>
            <Td>3</Td>
            <Td>Prof. Sriram Chellappan</Td>
            <Td>USF</Td>
            <Td>Florida</Td>
          </Tr>
          <Tr>
            <Td>4</Td>
            <Td>Prof. Sarojananda Mishra</Td>
            <Td>IGIT</Td>
            <Td>Sarang</Td>
          </Tr>
          <Tr>
            <Td>5</Td>
            <Td>Prof. M S Bhatt</Td>
            <Td>NIT</Td>
            <Td>Surtkal</Td>
          </Tr>
          <Tr>
            <Td>6</Td>
            <Td>Dr. Albert Sunny</Td>
            <Td>IIT</Td>
            <Td>Palakkad</Td>
          </Tr>
          <Tr>
            <Td>7</Td>
            <Td>Dr. Niladri Bihari Puhan</Td>
            <Td>IIT</Td>
            <Td>Bhubaneswar</Td>
          </Tr>
          <Tr>
            <Td>8</Td>
            <Td>Dr. Manoranjan Satpathy</Td>
            <Td>IIT</Td>
            <Td>Bhubaneswar</Td>
          </Tr>
          <Tr>
            <Td>9</Td>
            <Td>Dr. Barathram. Ramkumar</Td>
            <Td>IIT</Td>
            <Td>Bhubaneswar</Td>
          </Tr>
          <Tr>
            <Td>10</Td>
            <Td>Dr. Soumya Prakash Dash</Td>
            <Td>IIT</Td>
            <Td>Bhubaneswar</Td>
          </Tr>
          <Tr>
            <Td>11</Td>
            <Td>Prof. Debasish Jena</Td>
            <Td>IIT</Td>
            <Td>Bhubaneswar</Td>
          </Tr>
        </Tbody>
        </Table>
      </TableContainer>
    </BaseLayout>
  )
}
export default ProgramCommittee