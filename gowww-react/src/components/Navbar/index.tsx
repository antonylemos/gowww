import React from 'react';
import { FiAirplay, FiGrid, FiLogOut, FiSidebar, FiUsers } from 'react-icons/fi';
import { NavLink } from 'react-router-dom';

import { useAuth } from '../../hooks/auth';

import { Container } from './styles';

const Navbar: React.FC = () => {
  const { signOut } = useAuth();

  return (
    <Container>
      <div>
        <div>
          <NavLink activeClassName="active" to="/dashboard">
            <FiGrid />
          </NavLink>
        </div>
        <div>
          <NavLink to="/test">
            <FiAirplay />
          </NavLink>
        </div>
        <div>
          <NavLink activeClassName="active" to="/standings">
            <FiSidebar />
          </NavLink>
        </div>
        <div>
          <NavLink to="/test">
            <FiUsers />
          </NavLink>
        </div>
      </div>

      <button type="button" onClick={signOut}>
        <FiLogOut />
      </button>
    </Container>
  );
};

export default Navbar;
