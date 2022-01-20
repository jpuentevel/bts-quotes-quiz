import React, {useState} from 'react';
import {Button, Flex, Text} from "@chakra-ui/react";
import QuoteCard from "./QuoteCard";

const HomeBody = () => {

    const [isClicked, setIsClicked] = useState(false);

    const [clickedFirstTime, setClickedFirstTime] = useState(false);

    const handleClick = () => {
        setIsClicked(!isClicked);
        setClickedFirstTime(true);
    };

    return (
        <>
            <Flex>
                <div>
                    <section>
                        <Text
                            bgClip='text'
                            fontSize='6xl'
                            fontWeight='extrabold'
                            color='textColor'
                            align='left'
                            width='100%'
                            mb='3rem'
                            mt='2rem'
                            fontFamily='Titillium Web, sans-serif'
                        >
                            Welcome to the BTS Random Quote
                        </Text>
                    </section>
                    <section>
                        <Text
                            bgClip='text'
                            fontSize='3xl'
                            fontWeight='light'
                            color='textColor'
                            align='left'
                            width='50%'
                            fontFamily='Karla, sans-serif'
                            mb='3rem'
                        >
                            Please click on the button below to get a random quote
                        </Text>
                        <Button colorScheme='pink' variant='solid' size='lg' onClick={() => handleClick()}>
                            Click me!
                        </Button>
                    </section>
                </div>

                <div>
                    {clickedFirstTime ? <QuoteCard click={isClicked}/> : <div></div>}
                </div>
            </Flex>
        </>
    );
};

export default HomeBody;
