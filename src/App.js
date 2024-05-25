import React from 'react';
import Header from './components/Header';
import ListComponent from './components/List';
import { Container } from '@mui/material';

function App() {
  return (
    <Container>
      <Header />
      <ListComponent />
    </Container>
  );
}

export default App;
