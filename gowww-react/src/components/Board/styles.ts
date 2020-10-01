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
  height: 76px;
  margin-left: 16px;

  span {
    font-size: 24px;
    font-weight: 600;

    & + span {
      font-size: 18px;
      margin-left: 16px;
    }
  }
`;
