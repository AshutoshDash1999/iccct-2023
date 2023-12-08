import { Heading } from "@chakra-ui/react";
import BaseLayout from "../../components/BaseLayout";
import presentedPaperDetails from "./presentedPaperDetails.json";
import style from "./style";

const ICCCT2023 = () => {
  return (
    <BaseLayout>
      <Heading as="h1" size="3xl">
        ICCCT 2023 Paper Presentation Details
      </Heading>

      <table style={style.table}>
        <thead>
          <tr>
            <th style={style.table__head__paperId}>Paper ID</th>
            <th>Paper Title</th>
            <th>Name of Authors</th>
            <th>Name of Presenting Author</th>
            <th>Name of Organisation</th>
          </tr>
        </thead>
        <tbody>
          {presentedPaperDetails.map((item) => (
            <tr key={item?.["Paper ID"]}>
              <td style={{ textAlign: "center" }}>{item["Paper ID"]}</td>
              <td>{item["Paper Title"]}</td>
              <td>{item["Name of Authors"]}</td>
              <td className="table__data__presenting__author">
                {item["Name of Presenting Author"]}
              </td>
              <td>{item["Name of Organisation"]}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </BaseLayout>
  );
};
export default ICCCT2023;
