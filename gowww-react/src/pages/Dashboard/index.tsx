import React from 'react';

import Navbar from '../../components/Navbar';
import Emoji from '../../components/Emoji';
import Board from '../../components/Board';

import { Container, Wrapper, Header, HeaderContent, BoardContainer } from './styles';

import clubBrand from '../../assets/united.svg';

const Dashboard: React.FC = () => {
  return (
    <Container>
      <Navbar />

      <Wrapper>
        <Header>
          <img src={clubBrand} alt="Manchester United"/>

          <HeaderContent>
            <p>
              <span>Vamos começar?</span><Emoji symbol="🔥" label="fire"/>
            </p>

            <h1>Bem vindo de volta, Antony!</h1>

            <span>Sua área já está pronta com as informações do seu clube favorito</span>
          </HeaderContent>
        </Header>

        <BoardContainer>
          <Board
            title="Últimos jogos"
            emoji="⚽"
            emojiLabel="bola de futebol"
            boardTitle="Manchester United"
          />

          <Board
            title="Classificação"
            emoji="🏆"
            emojiLabel="troféu"
            boardTitle="Premier League"
          />
        </BoardContainer>
      </Wrapper>
    </Container>
  );
};

export default Dashboard;
