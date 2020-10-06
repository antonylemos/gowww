import styled from 'styled-components';

export const Container = styled.section`
  margin-top: 48px;
  width: 400px;
  /* height: 100%; */

  h2 {
    font-size: 24px;
    font-weight: 600;
  }
`;

export const BoardContent = styled.div`
  display: flex;
  border-radius: 16px;
  margin-top: 24px;
  background: #282D51;

  height: 500px;
`;

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 76px;
  width: 100%;
  margin-left: 16px;
  margin-right: 16px;

  button {
    display: flex;
    align-items: center;
    border: 0;
    background: none;

    svg {
      color: #666D9E;
      height: 24px;
      width: 24px;
    }
  }

`;

export const HeaderInfo = styled.div`
  display: flex;
  align-items: center;

  span {
    font-size: 24px;
    font-weight: 600;

    & + span {
      font-size: 18px;
      margin-left: 16px;
    }
  }
`;
