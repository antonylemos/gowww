import styled from 'styled-components';

export const Container = styled.div`
  background: #2D325A;
  border-radius: 16px;
  padding: 16px;
  width: 100%;

  color: #666D9E;

  display: flex;
  align-items: center;

  input {
    flex: 1;
    background: transparent;
    border: 0;
    color: #fff;
    &::placeholder {
      color: #666D9E;
    }
  }
  svg {
    margin-right: 16px;
  }
`;
