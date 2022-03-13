import { useNavigate } from 'react-router-dom';
import { PropTypes } from 'prop-types';
import { Flex, Box, Heading } from '@chakra-ui/react';

const CategoryCard = ({ slug, icon, name }) => {
  const navigate = useNavigate();

  return (
    <Flex
      border="solid 1px"
      borderColor="gray.200"
      borderRadius="md"
      direction="column"
      align="center"
      cursor="pointer"
      _hover={{
        transform: `transateY('20px')`,
      }}
      onClick={() => navigate(`/${slug}`)}
    >
      <Box p={4} fontSize="5xl">
        {icon}
      </Box>
      <Box
        p={2}
        w="100%"
        textAlign="center"
        backgroundColor="teal"
        color="white"
        flex="1 0 auto"
        borderBottomRadius="md"
      >
        <Heading size="sm">{name}</Heading>
      </Box>
    </Flex>
  );
};

CategoryCard.propTypes = {
  slug: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};

export default CategoryCard;
