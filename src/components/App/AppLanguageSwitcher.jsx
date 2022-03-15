import { Menu, MenuButton, MenuList, MenuItem, Button } from '@chakra-ui/react';
import { ChevronDownIcon } from '@chakra-ui/icons';
import { useTranslation } from 'react-i18next';

const LANGUAGES = {
  pl: '🇵🇱 PL',
  ua: '🇺🇦 UA',
};

const AppLanguageSwitcher = () => {
  const { i18n } = useTranslation();

  return (
    <Menu placement="bottom-end">
      <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
        {LANGUAGES[i18n.resolvedLanguage]}
      </MenuButton>
      <MenuList>
        {Object.entries(LANGUAGES).map((entry) => (
          <MenuItem
            key={entry[0]}
            onClick={() => i18n.changeLanguage(entry[0])}
          >
            {entry[1]}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default AppLanguageSwitcher;
