import React from 'react';
import { FiAirplay, FiGrid, FiSettings, FiSidebar, FiUsers } from 'react-icons/fi';

import Emoji from '../../components/Emoji';

import { Container, Navbar, Wrapper, Header, HeaderContent } from './styles';

import clubBrand from '../../assets/united.svg';

const Dashboard: React.FC = () => {
  return (
    <Container>
      <Navbar>
        <div>
          <FiGrid color="#7033FF" />
          <FiAirplay />
          <FiSidebar />
          <FiUsers />
        </div>

        <FiSettings />
      </Navbar>

      <Wrapper>
        <Header>
          <img src={clubBrand} alt="Manchester United"/>

          <HeaderContent>
            <p>
              <span>Vamos começar?</span><Emoji symbol="🔥" label="sheep"/>
            </p>

            <h1>Bem vindo de volta, Antony!</h1>

            <span>Sua área já está pronta com as informações do seu clube favorito</span>
          </HeaderContent>
        </Header>
      </Wrapper>
    </Container>
  );
};

export default Dashboard;
