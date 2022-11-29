import {
  Box,
  Button,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  useDisclosure,
} from "@chakra-ui/react";
import { NextPage } from "next";
import Link from "next/link";

interface Props {
  MenuName?: string;
  MenuItems?: any;
}

const NavLinkButton: NextPage<Props> = ({ MenuName, MenuItems }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  // console.log(MenuItems);

  return (
    <Box onMouseLeave={onClose} onMouseEnter={onOpen}>
      <Menu isOpen={isOpen}>
        <MenuButton variant="ghost" colorScheme="blue" color="black" as={Button} rightIcon={"▾"} >
          {MenuName}
        </MenuButton>
        <MenuList>
          {MenuItems.map((item: any) => (
            <Link href={item.href} key={item.href}>
              <MenuItem>{item.MenuItemName}</MenuItem>
            </Link>
          ))}
        </MenuList>
      </Menu>
    </Box>
  );
};
export default NavLinkButton;
