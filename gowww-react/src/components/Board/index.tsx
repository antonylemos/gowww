import React from 'react';
import { FiArrowRight } from 'react-icons/fi';

import Emoji from '../Emoji';

import { Container, BoardContent, Header, HeaderInfo } from './styles';

interface BoardProps {
  title: string;
  emoji: string;
  emojiLabel: string;
  boardTitle: string;
  handleStandings?(): void;
}

const Board: React.FC<BoardProps> = ({ title, emoji, emojiLabel, boardTitle, handleStandings, children }) => (
  <Container>
    <h2>{title}</h2>

    <BoardContent>
      <Header>
        <HeaderInfo>
          <Emoji symbol={emoji} label={emojiLabel} />
          <span>{boardTitle}</span>
        </HeaderInfo>

        {handleStandings ? <button onClick={handleStandings}><FiArrowRight /></button> : null}
      </Header>
      {children}
    </BoardContent>
  </Container>
);

export default Board;
