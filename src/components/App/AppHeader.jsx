import { Box, Flex, Container } from '@chakra-ui/react';
import AppSidebar from './AppSidebar';

const AppHeader = () => (
  <Box as="header" py={4} borderBottom="1px" borderColor="gray.200">
    <Container maxW="container.xl">
      <Flex justify="space-between" align="center">
        <Box>Logo</Box>
        <AppSidebar />
      </Flex>
    </Container>
  </Box>
);

export default AppHeader;
