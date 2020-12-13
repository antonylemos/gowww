import React, { useEffect, useMemo, useState } from 'react';

import api from '../../services/api';

import Navbar from '../../components/Navbar';
import Emoji from '../../components/Emoji';
import Table from '../../components/Table';

import { Container, Wrapper, Header, HeaderContent } from './styles';

import clubBrand from '../../assets/united.svg';

const Standings: React.FC = () => {
  const [table, setTable] = useState([]);

  useEffect(() => {
    api.get('competitions/PL/standings')
      .then(response => setTable(response.data.standings[0].table));
  }, []);

  const columns = useMemo(() => [
    {
      Header: 'Posição',
      accessor: 'position',
    },
    {
      Header: 'Clube',
      accessor: 'team.name',
    },
    {
      Header: 'Pontos',
      accessor: 'points',
    },
    {
      Header: 'Partidas jogadas',
      accessor: 'playedGames',
    },
    {
      Header: 'Vitórias',
      accessor: 'won',
    },
    {
      Header: 'Empates',
      accessor: 'draw',
    },
    {
      Header: 'Derrotas',
      accessor: 'lost',
    },
  ], []);

  return (
    <Container>
      <Navbar />

      <Wrapper>
        <Header>
          <img src={clubBrand} alt="Manchester United" />

          <HeaderContent>
            <p>
              <span>O campeonato já começou!</span><Emoji symbol="🔥" label="fire" />
            </p>

            <h1>Premier League</h1>

            <span>Acompanhe a classificação do campeonato</span>
          </HeaderContent>
        </Header>

        <Table columns={columns} data={table} />
      </Wrapper>
    </Container>
  );
};

export default Standings;
