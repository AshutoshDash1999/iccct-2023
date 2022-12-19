import { Button, HStack, Stack, useMediaQuery } from "@chakra-ui/react";
import Link from "next/link";
import NavLinkButton from "./NavLinkButton";

function NavItemsGroup() {
  const [isMobile] = useMediaQuery("(max-width: 900px)");

  return (
    <Stack direction={isMobile ? "column" : "row"}>
      <Link href="/about">
        <Button
          variant="ghost"
          _hover={{ background: "blue.100" }}
          colorScheme="blue"
          color="black"
        >
          About
        </Button>
      </Link>
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
            MenuItemName: "Conference Committee",
            href: "/committee/conferenceCommittee",
          },
          {
            MenuItemName: "Advisory Committee",
            href: "/committee/advisoryCommittee",
          },
          {
            MenuItemName: "Program Committee",
            href: "/committee/programCommittee",
          },
          {
            MenuItemName: "International Advisory Committee",
            href: "/committee/internationalAdvisoryCommittee",
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
    </Stack>
  );
}
export default NavItemsGroup;
