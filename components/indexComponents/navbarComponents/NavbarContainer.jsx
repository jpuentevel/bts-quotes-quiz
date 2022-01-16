import React from 'react';
import {Box, Flex, HStack, Spacer} from "@chakra-ui/react";
import Logo from "./Logo";
import NavbarBody from "./NavbarBody";

const NavbarContainer = () => {
    return (
        <Flex
            w="100%"
            /*bgGradient='linear(to-l, #BC3AD0, #0055D6)'*/
            bg="cyan.400"
        >
            <Logo/>
            <Spacer />
            <NavbarBody/>
        </Flex>
    );
};

export default NavbarContainer;
