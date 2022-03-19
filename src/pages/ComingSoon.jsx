import { Flex, Heading } from '@chakra-ui/react';
import { useTranslation } from 'react-i18next';

const ComingSoon = () => {
  const { t } = useTranslation();

  return (
    <Flex>
      <Heading>{t('comingSoon')}</Heading>
    </Flex>
  );
};

export default ComingSoon;
