import React, {useState} from 'react';
import Link from 'next/link';
import {Box, Button, Flex} from "@chakra-ui/react";
import { useRouter } from "next/router";

const NavbarBody = () => {

    const router = useRouter();

    let homeFlag = true;
    let quizFlag = false;

    if (router.pathname === '/') {
        homeFlag = true;
        quizFlag = false;
    } else if (router.pathname === '/quiz') {
        homeFlag = false;
        quizFlag = true;
    } else {
        homeFlag = false;
        quizFlag = false;
    }

    return (
        <Flex mr='5' my='auto'>
            <Box color='cyan' p='4'>
                <Link href="/" passHref>
                    <Button
                        size='lg'
                        colorScheme='pink'
                        variant='solid'
                        isDisabled={homeFlag}
                    >Home</Button>
                </Link>
            </Box>
            <Box p='4' ml='2' color='cyan'>
                <Link href="/quiz" passHref>
                    <Button
                        size='lg'
                        colorScheme='pink'
                        variant='solid'
                        isDisabled={quizFlag}
                    >Quiz</Button>
                </Link>
            </Box>
        </Flex>
    );
};

export default NavbarBody;
