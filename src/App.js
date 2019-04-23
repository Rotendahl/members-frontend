import React from 'react';
import Header from './components/header'
import { Container } from 'reactstrap';
import VolunteerView from './views/volunteer-view'
function App() {
  return (
    <div className="App">
      <Header/>
        <h3 className="text-center">
          Brugeroprettelse -- Til frivillige og forældre
        </h3>
      <Container className="shadow-lg p-3 mb-5 bg-white rounded">
        <div>
          <VolunteerView/>
        </div>
      </Container>

    </div>
  );
}

export default App;
