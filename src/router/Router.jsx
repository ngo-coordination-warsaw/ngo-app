import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import ScrollToTop from './ScrollToTop';
import ROUTER_CONFIG from './routerConfig';

const Router = () => (
  <>
    <ScrollToTop />

    <Routes>
      {ROUTER_CONFIG.map(({ path, component: Component }) => (
        <Route path={path} key={path} element={<Component />} />
      ))}
      <Route path="*" element={<Navigate to="/not-found" />} />
    </Routes>
  </>
);

export default Router;
