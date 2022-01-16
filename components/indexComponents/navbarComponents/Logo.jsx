import React from 'react';
import {Box} from "@chakra-ui/react";

const Logo = () => {
    return (
        <Box p='4' ml='5'>
            <img src={require('../../../public/img/bts-quotes-quiz-logo.png')} alt="logo" />
        </Box>
    );
};

export default Logo;
