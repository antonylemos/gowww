import React, { useCallback, useState } from 'react';

import { useAuth } from '../../hooks/auth';

import Navbar from '../../components/Navbar';
import Emoji from '../../components/Emoji';
import Board from '../../components/Board';

import { Container, Wrapper, Header, HeaderContent, BoardContainer } from './styles';

import clubBrand from '../../assets/united.svg';

const Dashboard: React.FC = () => {
  const { user } = useAuth();

  const [standings,] = useState([
    {
      id: 0,
      name: 'Premier League',
    },
    {
      id: 1,
      name: 'UEFA Champions League',
    },
  ]);

  const [selectStandings, setSelectStandings] = useState(0);

  const handleStandings = useCallback(() => {
    if (selectStandings === 0) {
      setSelectStandings(1);
    } else {
      setSelectStandings(0);
    }
  }, [selectStandings]);

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

            <h1>Bem vindo de volta, {user.name}!</h1>

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
            boardTitle={standings[selectStandings].name}
            handleStandings={handleStandings}
          />
        </BoardContainer>
      </Wrapper>
    </Container>
  );
};

export default Dashboard;
