import { Fragment } from "react";

import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
import {
  Box,
  Flex,
  HStack,
  IconButton,
  useDisclosure,
  Stack,
  Link as ChakraLink,
} from "@chakra-ui/react";

import { Link as ReactRouterLink, Outlet } from "react-router-dom";

const links = [
  { name: "Top Stories", path: "top-stories" },
  { name: "New Stories", path: "new-stories" },
];

export function Navbar() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Box bg="orange.400" px={4}>
        <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
          <Box>
            <ChakraLink as={ReactRouterLink} to={"/"} color={"white"}>
              Hacker News
            </ChakraLink>
          </Box>

          <IconButton
            size={"md"}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={"Open Menu"}
            display={{ md: "none" }}
            onClick={isOpen ? onClose : onOpen}
          />
          <HStack as={"nav"} spacing={4} display={{ base: "none", md: "flex" }}>
            {links.map((link) => (
              <Fragment key={link.path}>
                <ChakraLink as={ReactRouterLink} to={link.path}>
                  {link.name}
                </ChakraLink>
              </Fragment>
            ))}
          </HStack>
        </Flex>

        {isOpen ? (
          <Box pb={4} display={{ md: "none" }}>
            <Stack as={"nav"} spacing={4}>
              {links.map((link) => (
                <Fragment key={link.path}>
                  <ChakraLink as={ReactRouterLink} to={link.path}>
                    {link.name}
                  </ChakraLink>
                </Fragment>
              ))}
            </Stack>
          </Box>
        ) : null}
      </Box>

      <Outlet />
    </>
  );
}
