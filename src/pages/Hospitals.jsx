import { useMemo } from 'react';
import { Box, Heading } from '@chakra-ui/react';
import { getCategoryList } from '../api';
import useRequest from '../hooks/useRequest';
import CommonTable from '../components/CommonTable';

const Hospitals = () => {
  const { response } = useRequest(() => getCategoryList('recVR18WSc0BhIFao'));

  const data = useMemo(() => {
    if (!response?.data?.orgs) return [];

    return response.data.orgs;
  }, [response]);

  return (
    <Box>
      <Heading as="h1" mb={10}>
        Hospitals
      </Heading>

      <CommonTable data={data} />
    </Box>
  );
};

export default Hospitals;
