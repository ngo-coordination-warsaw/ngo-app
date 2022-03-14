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
import { useCategoriesContext } from '../../contexts/categoriesContext';

const AppSidebar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = useRef();
  const { categories } = useCategoriesContext();

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
              <Link
                as={NavLink}
                to="/"
                _activeLink={{
                  color: 'teal',
                  borderBottom: '1px solid',
                  borderColor: 'teal',
                }}
                onClick={onClose}
              >
                Categories
              </Link>
              {categories.map((category) => (
                <Link
                  key={category.Name}
                  as={NavLink}
                  to={`/${category.Slug}`}
                  _activeLink={{
                    color: 'teal',
                    borderBottom: '1px solid',
                    borderColor: 'teal',
                  }}
                  onClick={onClose}
                >
                  {category.Name}
                </Link>
              ))}
            </Stack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default AppSidebar;
