import { createContext, useContext, useMemo } from 'react';
import PropTypes from 'prop-types';
import { getCategories } from '../api';
import useRequest from '../hooks/useRequest';

const CategoriesContext = createContext({ categories: [] });
CategoriesContext.displayName = 'CategoriesContext';

const useCategoriesContext = () => {
  const context = useContext(CategoriesContext);

  if (!Object.keys(context).length) {
    throw new Error('useCategoriesContext must be in CategoriesProvider');
  }

  return context;
};

const CategoriesProvider = ({ children }) => {
  const { response } = useRequest(getCategories);

  const categories = useMemo(() => {
    if (!response?.data?.categoriesData) return [];

    return response.data.categoriesData;
  }, [response]);

  const value = useMemo(
    () => ({
      categories,
    }),
    [categories],
  );

  return (
    <CategoriesContext.Provider value={value}>
      {children}
    </CategoriesContext.Provider>
  );
};

CategoriesProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export { CategoriesProvider, useCategoriesContext };
