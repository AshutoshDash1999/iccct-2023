import { Button, HStack, Stack, useMediaQuery } from "@chakra-ui/react";
import Link from "next/link";
import NavLinkButton from "./NavLinkButton";

function NavItemsGroup() {
  const [isMobile] = useMediaQuery("(max-width: 900px)");

  return (
    <Stack direction={isMobile?"column":"row"}>
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
      <NavLinkButton
        MenuName="Attend"
        MenuItems={[
          {
            MenuItemName: "Code of Conduct",
            href: "/codeofconduct",
          },
          {
            MenuItemName: "Why Attend",
            href: "/whyattend",
          },
          {
            MenuItemName: "Registration",
            href: "/registration",
          },
          {
            MenuItemName: "Satellite Events",
            href: "/satelliteevents",
          },
          {
            MenuItemName: "Diversity and Inclusion Scholarship",
            href: "/diversityandinclusionscholarship",
          },
          {
            MenuItemName: "Bridge to VR",
            href: "/bridgetovr",
          },
          {
            MenuItemName: "Mentorship Program",
            href: "/mentorshipprogram",
          },
          {
            MenuItemName: "Virbela Instructions",
            href: "/virbelainstructions",
          },
          {
            MenuItemName: "Zoom Instructions",
            href: "/zoominstructions",
          },
        ]}
      />
      <NavLinkButton
        MenuName="Program"
        MenuItems={[
          {
            MenuItemName: "Overview",
            href: "/program/overview",
          },
          {
            MenuItemName: "Keynote Speakers",
            href: "keynotespeakers",
          },
          {
            MenuItemName: "Papers",
            href: "papers",
          },
          {
            MenuItemName: "Workshops",
            href: "workshops",
          },
          {
            MenuItemName: "Tutorials",
            href: "tutorials",
          },
          {
            MenuItemName: "Panels",
            href: "panels",
          },
          {
            MenuItemName: "Posters",
            href: "posters",
          },
          {
            MenuItemName: "Demos",
            href: "demos",
          },
          {
            MenuItemName: "Doctoral Consortium",
            href: "doctoralconsortium",
          },
          {
            MenuItemName: "Social Events",
            href: "socialevents",
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
        MenuName="Awards"
        MenuItems={[
          {
            MenuItemName: "VGTC Awards",
            href: "vgtcawards",
          },
          {
            MenuItemName: "Conference Awards",
            href: "conferenceawards",
          },
        ]}
      />
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
      <NavLinkButton
        MenuName="Resources"
        MenuItems={[
          {
            MenuItemName: "Slide Templates",
            href: "slidetemplates",
          },
          {
            MenuItemName: "Zoom Backgrounds",
            href: "zoombackgrounds",
          },
          {
            MenuItemName: "Banners",
            href: "banners",
          },
          {
            MenuItemName: "Conference Logos",
            href: "conferencelogos",
          },
        ]}
      />
    </Stack>
  );
}
export default NavItemsGroup;
