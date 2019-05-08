import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  background-color: #ccc;
`;

const Heading = styled.h1`
  font-size: 2rem;
`;

export default function App() {
  return (
    <Container>
      <Heading>
        This is the sandbox
      </Heading>
    </Container>
  );
}
