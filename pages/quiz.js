import React from 'react';
import NavbarContainer from "../components/navbarComponents/NavbarContainer";
import {Box, Container, Text} from "@chakra-ui/react";

const Quiz = () => {

    return (
        <>
            <Box h='100%' w='100%' bg='bgPrimary'>
                <NavbarContainer/>
                <Container maxW='container.xl' h="100%" w="100%" >
                    <Text
                        bgGradient='linear(to-l, #7928CA, #FF0080)'
                        bgClip='text'
                        fontSize='6xl'
                        fontWeight='extrabold'
                        color='text'
                    >
                        Welcome to BTS Quotes Quiz
                    </Text>
                </Container>
            </Box>
        </>
    );
};

export default Quiz;
