import React, { ReactElement } from 'react';
import { Route, Routes } from 'react-router-dom';

import { Sidebar } from '../../components/organisms';
import { HomePage, TestPage } from '../../pages';
import { PageStyled } from './styled';

export const Page = (): ReactElement => {
  return (
    <PageStyled>
      <Sidebar />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/test' element={<TestPage />} />
      </Routes>
    </PageStyled>
  );
};
