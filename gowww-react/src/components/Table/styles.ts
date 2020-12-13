import styled from 'styled-components';

export const Container = styled.div`
  margin-top: 48px;

  table {
    border-spacing: 0;
    border-radius: 16px;
    background: #202442;

    thead {
      tr {
        border-radius: 16px;
      }
    }

    th {
      color: #666D9E;
      font-size: 18px;
    }

    th, td {
      padding: 16px;
    }

    tr {
      :last-child {
        td {
          border-bottom: 0;
        }
      }
    }

    td {
      background: #282D51;
      font-weight: 600;
      border-bottom: 2px solid #2D325A;
    }
  }
`;
