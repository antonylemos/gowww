import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
`;

export const Wrapper = styled.main`
  display: flex;
  flex-direction: column;
  margin-top: 32px;
  margin-bottom: 32px;
  margin-left: 104px;
`;

export const Header = styled.header`
  display: flex;
  align-items: center;

  img {
    height: 88px;
    width: 88px;
    margin-right: 16px;
  }
`;

export const HeaderContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  p {
    margin-bottom: 8px;

    span {
      font-weight: 600;
      font-size: 12px;
      text-transform: uppercase;
      color: #666D9E;
    }
  }

  h1 {
    font-size: 32px;
    line-height: 48px;
    margin-bottom: 8px;
  }

  span {
    font-weight: 600;
    font-size: 14px;
    line-height: 21px;
    color: #666D9E;
  }
`;
