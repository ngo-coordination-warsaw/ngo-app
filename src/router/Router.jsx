import { useMemo } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import ScrollToTop from './ScrollToTop';
import { ROUTER_CONFIG } from './routerConfig';

const Router = () => {
  const { i18n } = useTranslation();

  const resolvedLanguage = useMemo(() => i18n.resolvedLanguage, [i18n]);

  return (
    <>
      <ScrollToTop />

      <Routes>
        <Route
          path="/"
          element={<Navigate to={`/${resolvedLanguage}`} />}
          exact
        />
        {ROUTER_CONFIG.map(({ path, component: Component }) => (
          <Route path={path} key={path} element={<Component />} />
        ))}
        <Route
          path="*"
          element={<Navigate to={`${resolvedLanguage}/not-found`} />}
        />
      </Routes>
    </>
  );
};

export default Router;
