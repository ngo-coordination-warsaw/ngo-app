import { useRef } from 'react';
import { NavLink } from 'react-router-dom';
import {
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Button,
  Link,
  Stack,
  useDisclosure,
} from '@chakra-ui/react';
import ROUTER_CONFIG from '../../router/routerConfig';

const AppSidebar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = useRef();

  return (
    <>
      <Button ref={btnRef} colorScheme="teal" onClick={onOpen}>
        Menu
      </Button>
      <Drawer
        isOpen={isOpen}
        placement="right"
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Menu</DrawerHeader>

          <DrawerBody>
            <Stack>
              {ROUTER_CONFIG.filter((el) => el.name !== 'Not Found').map(
                ({ name, path }) => (
                  <Link as={NavLink} key={name} to={path} onClick={onClose}>
                    {name}
                  </Link>
                ),
              )}
            </Stack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default AppSidebar;
