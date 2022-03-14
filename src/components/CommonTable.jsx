import { useMemo } from 'react';
import { Box } from '@chakra-ui/react';
import PropTypes from 'prop-types';
import DataTable from './DataTable';

const CommonTable = ({ data }) => {
  const columns = useMemo(
    () => [
      {
        Header: 'Name',
        accessor: 'Name',
      },
      {
        Header: 'Description',
        accessor: 'Description',
      },
      {
        Header: 'Email',
        accessor: 'Email',
      },
      {
        Header: 'Phone',
        accessor: 'Phone',
      },
      {
        Header: 'Address',
        accessor: 'Address',
      },
    ],
    [],
  );

  return (
    <Box overflowX="auto">
      <DataTable columns={columns} data={data} />
    </Box>
  );
};

CommonTable.propTypes = {
  data: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.any)).isRequired,
};

export default CommonTable;
