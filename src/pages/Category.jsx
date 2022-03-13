import { useMemo } from 'react';
import { useParams } from 'react-router-dom';
import { Box, Heading } from '@chakra-ui/react';
import { getCategoryList } from '../api';
import useRequest from '../hooks/useRequest';
import CommonTable from '../components/CommonTable';

const Category = () => {
  const { slug } = useParams();
  const { response, isLoading } = useRequest(() => getCategoryList(slug));

  const title = useMemo(() => {
    if (!response?.data?.orgs) return 'No data';

    return response.data.orgs[0].CategoryName.join(', ');
  }, [response]);

  const data = useMemo(() => {
    if (!response?.data?.orgs) return [];

    return response.data.orgs;
  }, [response]);

  return (
    <Box>
      {isLoading ? null : (
        <>
          <Heading as="h1" mb={10}>
            {title}
          </Heading>

          <CommonTable data={data} />
        </>
      )}
    </Box>
  );
};

export default Category;
