import React from 'react';
import {Box, Flex, Image, Text} from "@chakra-ui/react";

const QuoteCard = (prop) => {

    if (prop.click) {
        console.log("Esto llegó a la tarjeta", prop.click);
    }

    return (
        <>
            <div className='card'>
                <Flex justify='space-between' p='2rem' my='auto'>
                    <Box>
                        <Image
                            borderRadius='20%'
                            boxSize='8rem'
                            src='https://bit.ly/dan-abramov'
                            alt='Dan Abramov'
                        />
                        <Text fontSize='md' mt='1rem' fontWeight='bold'>
                            - Kim Jong Un
                        </Text>
                    </Box>
                    <Box m='auto' maxW='20rem'>
                        <Text as='cite' fontSize='md' fontWeight='bold'>
                            <blockquote>
                                I'm not a great programmer; I'm just a good programmer with great habits. I'm not a great programmer; I'm just a good programmer with great habits. I'm not a great programmer; I'm just a good programmer with great habits. I'm not a great programmer; I'm just a good programmer with great habits.
                            </blockquote>
                        </Text>
                    </Box>
                </Flex>
            </div>
        </>
    );
};

export default QuoteCard;
