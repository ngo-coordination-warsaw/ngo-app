import { useMemo } from 'react';
import { Box, Heading } from '@chakra-ui/react';
import { getCategoryList } from '../api';
import useRequest from '../hooks/useRequest';
import CommonTable from '../components/CommonTable';

const Vet = () => {
  const { response } = useRequest(() => getCategoryList('recb8EGXjgDWAaPRE'));

  const data = useMemo(() => {
    if (!response?.data?.orgs) return [];

    return response.data.orgs;
  }, [response]);

  return (
    <Box>
      <Heading as="h1" mb={10}>
        Vet
      </Heading>

      <CommonTable data={data} />
    </Box>
  );
};

export default Vet;
