import { Box, Flex, Container, Link } from '@chakra-ui/react';
import { NavLink } from 'react-router-dom';
import AppSidebar from './AppSidebar';

const AppHeader = () => (
  <Box as="header" py={4} borderBottom="1px" borderColor="gray.200">
    <Container maxW="container.xl">
      <Flex justify="space-between" align="center">
        <Link
          as={NavLink}
          to="/"
          fontWeight={700}
          _hover={{
            textDecoration: 'none',
            color: 'teal',
          }}
          _activeLink={{
            color: 'teal',
          }}
        >
          Home
        </Link>
        <AppSidebar />
      </Flex>
    </Container>
  </Box>
);

export default AppHeader;
