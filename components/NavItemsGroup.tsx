import { Button, HStack, Stack, useMediaQuery } from "@chakra-ui/react";
import Link from "next/link";
import NavLinkButton from "./NavLinkButton";

function NavItemsGroup() {
  const [isMobile] = useMediaQuery("(max-width: 900px)");

  return (
    <Stack direction={isMobile ? "column" : "row"}>
      <Link href="/registration">
        <Button
          variant="ghost"
          _hover={{ background: "blue.100" }}
          colorScheme="blue"
          color="black"
        >
          Registration
        </Button>
      </Link>
      <NavLinkButton
        MenuName="Program"
        MenuItems={[
          {
            MenuItemName: "Keynote Speakers",
            href: "/program/keynotespeakers",
          },
          {
            MenuItemName: "Important Dates",
            href: "/program/importantdates",
          },
        ]}
      />
      <Link href="/callForPapers">
        <Button
          variant="ghost"
          _hover={{ background: "blue.100" }}
          colorScheme="blue"
          color="black"
        >
          Call for Papers
        </Button>
      </Link>
      <NavLinkButton
        MenuName="Committees"
        MenuItems={[
          {
            MenuItemName: "Advisory Committee",
            href: "/committee/advisoryCommittee",
          },
          {
            MenuItemName: "Conference Committee",
            href: "/committee/conferenceCommittee",
          },
          {
            MenuItemName: "International Advisory Committee",
            href: "/committee/internationalAdvisoryCommittee",
          },
          {
            MenuItemName: "Program Committee",
            href: "/committee/programCommittee",
          },
          {
            MenuItemName: "Publicity Committee",
            href: "/committee/publicityCommittee",
          },
        ]}
      />
      <Link href="/resources">
        <Button
          variant="ghost"
          _hover={{ background: "blue.100" }}
          colorScheme="blue"
          color="black"
        >
          Resources
        </Button>
      </Link>
      <Link href="/iccct2023">
        <Button
          variant="ghost"
          _hover={{ background: "blue.100" }}
          colorScheme="blue"
          color="black"
        >
          ICCCT 2023
        </Button>
      </Link>
    </Stack>
  );
}
export default NavItemsGroup;
