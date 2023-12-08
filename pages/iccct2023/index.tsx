import {
  Heading,
  Table,
  TableContainer,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";
import BaseLayout from "../../components/BaseLayout";
import presentedPaperDetails from "./presentedPaperDetails.json";

const ICCCT2023 = () => {
  return (
    <BaseLayout>
      <Heading as="h1" size="3xl">
        ICCCT 2023 Paper Presentation Details
      </Heading>

      <TableContainer mt="4">
        <Table variant="striped" size="md">
          <Thead>
            <Tr>
              <Th>Paper ID</Th>
              <Th>Paper Title</Th>
              <Th>Name of Authors</Th>
              <Th>Name of Presenting Author</Th>
              <Th>Name of Organisation</Th>
            </Tr>
          </Thead>
          <Tbody>
            {presentedPaperDetails.map((item) => (
              <Tr key={item?.["Paper ID"]}>
                <Td>{item["Paper ID"]}</Td>
                <Td wordBreak={"break-word"}>{item["Paper Title"]}</Td>
                <Td wordBreak={"break-word"}>{item["Name of Authors"]}</Td>
                <Td>{item["Name of Presenting Author"]}</Td>
                <Td>{item["Name of Organisation"]}</Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </TableContainer>
    </BaseLayout>
  );
};
export default ICCCT2023;
