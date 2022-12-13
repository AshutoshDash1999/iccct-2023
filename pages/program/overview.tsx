import {
  Heading,
  Table,
  TableCaption,
  TableContainer,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";
import BaseLayout from "../../components/BaseLayout";

const programDatesData = [
  {
    program: "Paper Submission",
    date: "15 February 2022",
  },

  {
    program: "Final Submission",
    date: "15 April 2022",
  },
  {
    program: "Notification of Acceptance",
    date: "15 May 2022",
  },
  {
    program: "Registration Deadline",
    date: "15 May 2022",
  },
  {
    program: "Conference Date",
    date: "7-8 July 2022",
  },
];

function Overview() {
  return (
    <BaseLayout>
      <Heading as="h2" size="2xl">
        Program Overview
      </Heading>
      <TableContainer mt="4">
        <Table variant="simple">
          <TableCaption>Program overview with dates</TableCaption>
          <Thead>
            <Tr>
              <Th>Program</Th>
              <Th>Date</Th>
            </Tr>
          </Thead>
          <Tbody>
            {programDatesData.map((item, index) => (
              <Tr key={index}>
                <Td>{item.program}</Td>
                <Td>{item.date}</Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </TableContainer>
    </BaseLayout>
  );
}
export default Overview;
