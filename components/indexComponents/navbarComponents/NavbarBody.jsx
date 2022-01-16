import React from 'react';
import Link from 'next/link';
import {Box, Button, Flex, HStack} from "@chakra-ui/react";

const NavbarBody = () => {
    return (
        <Flex mr='5'>
            <Box color='cyan' p='4'>
                <Link href="/" passHref>
                    <Button colorScheme='whiteAlpha' variant='solid'>Home</Button>
                </Link>
            </Box>
            <Box p='4' ml='2' color='cyan'>
                <Link href="/quiz" passHref>
                    <Button colorScheme='whiteAlpha' variant='solid'>Quiz</Button>
                </Link>
            </Box>
        </Flex>
    );
};

export default NavbarBody;
