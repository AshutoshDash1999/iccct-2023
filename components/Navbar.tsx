import { Button, Flex, HStack } from "@chakra-ui/react";
import Link from "next/link";
import NavLinkButton from "./NavLinkButton";

function Navbar() {
  return (
    <Flex p="4">
      <HStack gap="4">
        <Link href="/">
          <Button variant="ghost" _hover={{background:"blue.100"}} colorScheme="blue" color="black">ICCCT</Button>
        </Link>
        <Link href="/about">
          <Button variant="ghost" _hover={{background:"blue.100"}} colorScheme="blue" color="black">About</Button>
        </Link>
        <NavLinkButton
          MenuName="Attend"
          MenuItems={[
            {
              MenuItemName: "Code of Conduct",
              href: "codeofconduct",
            },
            {
              MenuItemName: "Why Attend",
              href: "whyattend",
            },
            {
              MenuItemName: "Registration",
              href: "registration",
            },
            {
              MenuItemName: "Satellite Events",
              href: "satelliteevents",
            },
            {
              MenuItemName: "Diversity and Inclusion Scholarship",
              href: "diversityandinclusionscholarship",
            },
            {
              MenuItemName: "Bridge to VR",
              href: "bridgetovr",
            },
            {
              MenuItemName: "Mentorship Program",
              href: "mentorshipprogram",
            },
            {
              MenuItemName: "Virbela Instructions",
              href: "virbelainstructions",
            },
            {
              MenuItemName: "Zoom Instructions",
              href: "zoominstructions",
            },
          ]}
        />
        <NavLinkButton
          MenuName="Program"
          MenuItems={[
            {
              MenuItemName: "Overview",
              href: "overview",
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
              MenuItemName: "3DUI Contest Entries",
              href: "3duicontestentries",
            },
            {
              MenuItemName: "3DUI Contest Entries",
              href: "3duicontestentries",
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
          <Button variant="ghost" _hover={{background:"blue.100"}} colorScheme="blue" color="black">Call for Papers</Button>
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
              href: "conferenceCommittee",
            },
            {
              MenuItemName: "Advisory Committee",
              href: "advisoryCommittee",
            },
            {
              MenuItemName: "Program Committee",
              href: "programCommittee",
            },
            {
              MenuItemName: "International Advisory Committee",
              href: "internationalAdvisoryCommittee",
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
      </HStack>
    </Flex>
  );
}
export default Navbar;
