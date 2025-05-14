import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  padding: 0;
  max-width: 1190px;
  margin: 0 auto;
  position: relative;
`;

export const TaskTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  background-color: #fff;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.05);
  border-radius: 6px;
  overflow: hidden;

  @media screen and (orientation: landscape) {
    font-size: 15px;

    thead th,
    tbody td {
      padding: 12px 14px;
    }
  }
`;

export const Thead = styled.thead`
  background-color: #f5f7fa;
  text-align: left;
`;

export const Th = styled.th`
  padding: 16px;
  font-weight: 600;
  font-size: 14px;
  color: #333;
  border-bottom: 1px solid #e0e6ed;
`;

export const Tbody = styled.tbody`
  tr {
    transition: background-color 0.2s ease;
    background-color: ${({ $isDone }) => ($isDone && '#99ff99')};
    transition: background-color 0.5s ease, font-weight 0.5s ease;
  }
`;

export const Td = styled.td`
  padding: 14px 16px;
  border-bottom: 1px solid #f0f0f0;
  font-size: 14px;
  color: #555;
  width: 150px;
  word-wrap: break-word;

  &.description {
    white-space: normal;
    max-width: 300px;
  }

  &.status {
    font-weight: 600;

    &.complete {
      color: #2ecc71;
    }

    &.pending {
      color: #f1c40f;
    }

    &.overdue {
      color: #e74c3c;
    }
  }
`;

export const DarkTaskTable = styled(TaskTable)`
  background-color: #2a2a2a;
  color: #ddd;
  table-layout: fixed;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.3);
  
  thead {
    background-color: #333;

    th {
      color: #f0f0f0;
      border-bottom: 1px solid #444;
      text-overflow: ellipsis;
    }
  }

  tbody {
    transition: background-color 0.5s ease, font-weight 0.5s ease;
    }

    td {
      color: #ccc;
      border-bottom: 1px solid #444;
      background-color: ${({ $isDone }) => ($isDone && '#fc7d0b')};

      &.description {
        white-space: normal;
        max-width: 300px;
      }

      &.status {
        &.complete {
          color: #2ecc71;
        }

        &.pending {
          color: #f1c40f;
        }

        &.overdue {
          color: #e74c3c;
        }
      }
    }
  }
`;
