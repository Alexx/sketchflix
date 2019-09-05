import React from 'react';
import logo from '../logo.svg';
import '../App.css';
import UserNav from './UserNav';
import Landing from './Landing';
import TvPanel from './TvPanel';
import TvPanelImage from './TvPanelImage';
import MobilePanelImage from './MobilePanelImage';
import MobilePanel from './MobilePanel';
import MultiPanelImage from './MultiPanelImage';
import MultiPanel from './MultiPanel';
import FaqPanel from './FaqPanel'


import { Container, Col, Row } from 'react-bootstrap'

function App() {

  return (
    <div className="App">
    <UserNav/>
    <Container>

    <Row>
      <Col md={12}>
        <Landing/>
      </Col>
    </Row>
    </Container>

    <hr/>
    <Container className="tv-panel">
    <Row>
      <Col md={6}>
        <TvPanel/>
      </Col>

      <Col md={6}>
        <TvPanelImage/>
      </Col>
    </Row>
    </Container>

    <hr/>
    <Container>
    <Row>
      <Col md={6}>
      <MobilePanelImage/>
      </Col>

      <Col md={6}>
      <MobilePanel/>
      </Col>
    </Row>
    </Container>
    <hr/>


    <Container className="multi-panel">
    <Row>
      <Col md={6}>
      <MultiPanel/>
      </Col>

      <Col md={6}>
      <MultiPanelImage/>
      </Col>
    </Row>
    </Container>
    <hr/>

    <Container>
    <Row>
      <Col md={12}>
      <FaqPanel/>
      </Col>
    </Row>
    </Container>

    </div>
  );
}

export default App;
