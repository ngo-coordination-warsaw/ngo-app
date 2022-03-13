import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { ChakraProvider, Flex, Container } from '@chakra-ui/react';
import AppHeader from './AppHeader';
import AppFooter from './AppFooter';
import Router from '../../router';

const App = () => (
  <ChakraProvider>
    <Flex height="100vh" direction="column">
      <BrowserRouter>
        <AppHeader />
        <Flex flex="1 0 auto" py={10}>
          <Container maxW="container.xl">
            <Router />
          </Container>
        </Flex>
      </BrowserRouter>
      <AppFooter />
    </Flex>
  </ChakraProvider>
);

export default App;
