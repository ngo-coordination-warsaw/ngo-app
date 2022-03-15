import { useMemo } from 'react';
import { Box } from '@chakra-ui/react';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';
import DataTable from './DataTable';

const CommonTable = ({ data }) => {
  const { i18n } = useTranslation();
  const { resolvedLanguage } = i18n;

  const columns = useMemo(
    () => [
      {
        Header: 'Name',
        accessor: resolvedLanguage === 'ua' ? 'NameUA' : 'Name',
        Cell: ({ value, row }) => value || row.original.Name,
      },
      {
        Header: 'Description',
        accessor: resolvedLanguage === 'ua' ? 'DescriptionUA' : 'Description',
        Cell: ({ value, row }) => value || row.original.Description,
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
    [resolvedLanguage],
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
