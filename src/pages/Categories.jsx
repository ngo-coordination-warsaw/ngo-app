import { Box, SimpleGrid, Heading } from '@chakra-ui/react';
import { useCategoriesContext } from '../contexts/categoriesContext';
import CategoryCard from '../layouts/CategoryCard';

const Home = () => {
  const { categories } = useCategoriesContext();

  return (
    <Box>
      <Heading as="h1" mb={10}>
        Categories
      </Heading>

      <SimpleGrid columns={5} spacing={10}>
        {categories.map((category) => (
          <CategoryCard
            key={category.Slug}
            slug={category.Slug}
            icon={category.Icon}
            name={category.Name}
          />
        ))}
      </SimpleGrid>
    </Box>
  );
};

export default Home;
