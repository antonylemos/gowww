import React from 'react';
import { FiAirplay, FiGrid, FiSettings, FiSidebar, FiUsers } from 'react-icons/fi';

import { Container } from './styles';

const Navbar: React.FC = () => (
  <Container>
    <div>
      <FiGrid color="#7033FF" />
      <FiAirplay />
      <FiSidebar />
      <FiUsers />
    </div>

    <FiSettings />
  </Container>
);

export default Navbar;
