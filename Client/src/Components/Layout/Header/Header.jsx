import React from 'react'
import {Container, Row, Col} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const Header = () => {
  return (
    <>
    <Container fluid className='bg-dark text-light p-2'>
      <Row>
        <Col>
          <h1>Header</h1>
        </Col>
      </Row>
    </Container>
    </>
  )
}

export default Header