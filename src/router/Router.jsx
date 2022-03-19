import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import ScrollToTop from './ScrollToTop';
// import ROUTER_CONFIG from './routerConfig';
import ComingSoon from '../pages/ComingSoon';

const Router = () => (
  <>
    <ScrollToTop />

    <Routes>
      {/* {ROUTER_CONFIG.map(({ path, component: Component }) => (
        <Route path={path} key={path} element={<Component />} />
      ))} */}
      <Route path="/" element={<ComingSoon />} />
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  </>
);

export default Router;
