import React from 'react';
import { MemoryRouter } from 'react-router-dom';

import { Page } from './pages';

export const App = () => {
  return (
    <MemoryRouter>
      <Page />
    </MemoryRouter>
  );
};
