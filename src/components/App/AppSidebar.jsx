import { useRef } from 'react';
import { NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
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
  const { t, i18n } = useTranslation();
  const { resolvedLanguage } = i18n;

  return (
    <>
      <Button ref={btnRef} colorScheme="teal" onClick={onOpen}>
        {t('menu')}
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
                _hover={{
                  textDecoration: 'none',
                }}
                _activeLink={{
                  color: 'teal',
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
                  _hover={{
                    color: 'teal',
                    textDecoration: 'none',
                  }}
                  _activeLink={{
                    color: 'teal',
                  }}
                  onClick={onClose}
                >
                  {resolvedLanguage === 'ua' && category.NameUA
                    ? category.NameUA
                    : category.Name}
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
