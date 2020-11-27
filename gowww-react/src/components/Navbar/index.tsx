import React from 'react';
import { FiAirplay, FiGrid, FiLogOut, FiSidebar, FiUsers } from 'react-icons/fi';

import { useAuth } from '../../hooks/auth';

import { Container } from './styles';

const Navbar: React.FC = () =>{
  const { signOut } = useAuth();

  return (
    <Container>
      <div>
        <FiGrid color="#7033FF" />
        <FiAirplay />
        <FiSidebar />
        <FiUsers />
      </div>

      <button type="button" onClick={signOut}>
        <FiLogOut />
      </button>
    </Container>
  );
};

export default Navbar;
