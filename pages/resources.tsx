import { Grid, GridItem } from "@chakra-ui/react";
import BaseLayout from "../components/BaseLayout";
import ResourceCard from "../components/ResourceCard";

const resourcesData = [
  {
    name: "Research Sample Template",
    url: "https://docs.google.com/document/d/14wNXYnQ2AV4Jnyvd7d8kyQEfaLmwq6kd/edit?usp=share_link&ouid=103992238130266655295&rtpof=true&sd=true",
  },
  {
    name: "Guidelines For Authors",
    url: "https://docs.google.com/document/d/1RcDVyfyyndAXcde5_r6Kln_vO9jatIMU/edit?usp=share_link&ouid=103992238130266655295&rtpof=true&sd=true",
  },
];

export default function Resources() {
  return (
    <BaseLayout>
      <Grid templateColumns="repeat(3, 1fr)" gap={6}>
        {resourcesData.map((itemData, index) => (
          <GridItem key={index}>
            <ResourceCard data={itemData}/>
          </GridItem>
        ))}
      </Grid>
    </BaseLayout>
  );
}
