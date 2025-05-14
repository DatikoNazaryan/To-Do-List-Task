import styled from 'styled-components';

const NotFoundTitle = styled.h1`
  margin-top: 20rem;
  color: #000;
  text-align: center;
`;

function NotFound() {
  return (
    <NotFoundTitle>
      <h1>404 | Not Found!</h1>
    </NotFoundTitle>
  );
}


export default NotFound;