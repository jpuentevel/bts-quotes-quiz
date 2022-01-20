import {Box, Container, Text} from '@chakra-ui/react'
import NavbarContainer from "../components/navbarComponents/NavbarContainer";
import HomeBody from "../components/homeComponents/HomeBody";

export default function Home() {

  return (
      <>
          <Box h='100%' w='100%' bg='bgPrimary' pb='5rem'>
              <NavbarContainer/>
              <Container maxW='container.xl' h="100%" w="100%" >
                  <HomeBody/>
              </Container>
          </Box>
      </>
  )
}
