import { useCallback } from 'react';
import { Menu, MenuButton, MenuList, MenuItem, Button } from '@chakra-ui/react';
import { ChevronDownIcon } from '@chakra-ui/icons';
import { useTranslation } from 'react-i18next';
import { useLocation, useNavigate } from 'react-router-dom';

const LANGUAGES = {
  pl: '🇵🇱 PL',
  ua: '🇺🇦 UA',
};

const AppLanguageSwitcher = () => {
  const { i18n } = useTranslation();
  const location = useLocation();
  const navigate = useNavigate();

  const changeLanguage = useCallback(
    (nextLang) => {
      // TODO: Refactor. Try to use match
      i18n.changeLanguage(nextLang, () => {
        const URLArr = location.pathname.split('/');
        URLArr[1] = i18n.resolvedLanguage;
        const newURL = URLArr.join('/');
        navigate(newURL);
      });
    },
    [location],
  );

  return (
    <Menu placement="bottom-end">
      <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
        {LANGUAGES[i18n.resolvedLanguage]}
      </MenuButton>
      <MenuList>
        {Object.entries(LANGUAGES).map((entry) => (
          <MenuItem key={entry[0]} onClick={() => changeLanguage(entry[0])}>
            {entry[1]}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default AppLanguageSwitcher;
