import React from 'react';
import { Link } from 'react-router-dom';

import { SidebarStyled } from './styled';

export const Sidebar = () => {
  return (
    <SidebarStyled>
      Sidebar
      <div>Collapse</div>
      <Link to={'/'}>Home</Link>
      <Link to={'/test'}>Test</Link>
    </SidebarStyled>
  );
};
