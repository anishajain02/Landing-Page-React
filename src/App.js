import React from 'react';
import styled, { keyframes } from 'styled-components';

const gradient = keyframes`
  0% {background-position: 0% 50%;}
  50% {background-position: 100% 50%;}
  100% {background-position: 0% 50%;}
`;

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 100vh;
  color: #EAE7E2;
  background: linear-gradient(-45deg, #405958, #5A7974, #87938D, #AFA086, #99B6B6, #547572, #95B5AD, #6C8D84, #6D8D8B);
  background-size: 1800% 1800%;
  animation: ${gradient} 15s ease infinite;
`;

const Title = styled.h1`
  font-size: 3em;
  margin-bottom: 20px;
  color: #EAE7E2;
`;

const Subtitle = styled.p`
  font-size: 1.5em;
  color: #EAE7E2;
`;

const Tagline = styled.p`
  font-size: 1em;
  font-style: italic;
  color: #EAE7E2;
`;

const App = () => (
  <Container>
    <Title>Six Pockets</Title>
    <Subtitle>Coming Soon...</Subtitle>
    <Tagline>The ultimate destination for snooker club owners and managers</Tagline>
  </Container>
);

export default App;