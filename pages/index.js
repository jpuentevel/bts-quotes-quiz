import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import {Box, Container, Text} from '@chakra-ui/react'
import NavbarContainer from "../components/indexComponents/navbarComponents/NavbarContainer";

export default function Home() {
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
                      Welcome to the BTS Random Quotes
                  </Text>
              </Container>
          </Box>
      </>
  )
}
