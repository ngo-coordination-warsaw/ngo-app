import { useMemo } from 'react';
import { Box, SimpleGrid, Heading } from '@chakra-ui/react';
import { getCategories } from '../api';
import useRequest from '../hooks/useRequest';
import CategoryCard from '../layouts/CategoryCard';

const Home = () => {
  const { response } = useRequest(getCategories);

  const categories = useMemo(() => {
    if (!response?.data?.categoriesData) return [];

    return response.data.categoriesData;
  }, [response]);

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
