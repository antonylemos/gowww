import styled from 'styled-components';

export const Container = styled.nav`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 88px;
  height: 100vh;
  padding: 32px;
  margin-right: 16px;

  background: #202442;

  div {
    justify-content: center;
    align-items: center;

    svg {
      & + svg {
        margin-top: 32px;
      }
    }
  }

  svg {
    color: #666D9E;
    height: 24px;
    width: 24px;
  }
`;
