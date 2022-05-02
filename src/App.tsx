import React from 'react';
import Calculator from './components/Calculator';
import styled from 'styled-components'

const Container = styled.div`
  background-color: #323232;
  align-items: center;
  justify-content: center;
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  width: 100vw;
`
function App() {
  return (
    <div className="App">
      <Container>
        <Calculator />
      </Container>
    </div>
  );
}

export default App;
