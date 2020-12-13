import styled from 'styled-components';

export const Container = styled.nav`
  position: fixed;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 88px;
  height: 100vh;
  padding: 32px;

  background: #202442;

  button {
    margin-left: auto;
    background: transparent;
    border: 0;
  }

  div {
    justify-content: center;
    align-items: center;

    div {
      & + div {
        margin-top: 32px;
      }

      a.active {
        svg {
          color: #7033FF;
        }
      }
    }
  }

  svg {
    color: #666D9E;
    height: 24px;
    width: 24px;
  }
`;
