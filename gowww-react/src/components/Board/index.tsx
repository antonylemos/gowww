import React from 'react';

import Emoji from '../Emoji';

import { Container, BoardContent, Header } from './styles';

interface BoardProps {
  title: string;
  emoji: string;
  emojiLabel: string;
  boardTitle: string;
}

const Board: React.FC<BoardProps> = ({ title, emoji, emojiLabel, boardTitle, children }) => (
  <Container>
    <h2>{title}</h2>

    <BoardContent>
      <Header>
        <Emoji symbol={emoji} label={emojiLabel} />
        <span>{boardTitle}</span>
      </Header>
      {children}
    </BoardContent>
  </Container>
);

export default Board;
