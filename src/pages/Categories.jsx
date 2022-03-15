import { Box, SimpleGrid, Heading } from '@chakra-ui/react';
import { useTranslation } from 'react-i18next';
import { useCategoriesContext } from '../contexts/categoriesContext';
import CategoryCard from '../layouts/CategoryCard';

const Home = () => {
  const { categories } = useCategoriesContext();
  const { t, i18n } = useTranslation();
  const { resolvedLanguage } = i18n;

  return (
    <Box>
      <Heading as="h1" mb={10}>
        {t('categories')}
      </Heading>

      <SimpleGrid minChildWidth="200px" columns={5} spacing={10}>
        {categories.map((category) => (
          <CategoryCard
            key={category.Slug}
            slug={category.Slug}
            icon={category.Icon}
            name={
              resolvedLanguage === 'ua' && category.NameUA
                ? category.NameUA
                : category.Name
            }
          />
        ))}
      </SimpleGrid>
    </Box>
  );
};

export default Home;
