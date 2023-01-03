
import './App.css';
import Footer from './components/Footer';
import NavBar from './components/NavBar';
import { Container, Col, Row } from 'react-bootstrap';

function App() {
  return (
    <>
      <Container className="page-container">
        <Row>
          <Col>
            <NavBar />
          </Col>
        </Row>
        <Row>
          <Col>
            <Footer />
          </Col>
        </Row>
      </Container>


    </>
  );
}

export default App;
