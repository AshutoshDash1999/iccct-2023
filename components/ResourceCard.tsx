import { Card, CardBody, Heading, Text } from "@chakra-ui/react";
import { NextPage } from "next";
import Link from "next/link";

interface CardProps {
  data: any;
}

const ResourceCard: NextPage<CardProps> = ({ data }) => {
  return (
    <Link href={data.url} target="_blank">
      <Card bg={"blue.50"} _hover={{background:"blue.200"}}>
        <CardBody>
          <Heading>{data.name}</Heading>
          {/* <Text>{data.name}</Text> */}
        </CardBody>
      </Card>
    </Link>
  );
};

export default ResourceCard;
