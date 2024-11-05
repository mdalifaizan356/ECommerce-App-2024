import React from 'react';
import { Container, Row, Col, Form } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./SignUp.css";
import Layout from '../../Components/Layout/Layout/Layout';

const SignUp = () => {
    const ContainerBtsrpClasses ='#';
    const RowBtsrpClasses = 'd-flex justify-content-center align-items-center';
    const ColBtsrpClasses = '#';


  return (
    <Layout>
      <Container fluid className={`${ContainerBtsrpClasses} Container-Style`}>
        <Row className={`${RowBtsrpClasses} Row-Style`}>
          <Col className={`${ColBtsrpClasses} Col-Style fixed-col`}>
          <Form>
            <Form.Group className="mb-3 w-100" controlId="formGroupEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="Enter email" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formGroupPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" />
            </Form.Group>
          </Form>
          </Col>
        </Row>
      </Container>
    </Layout>
  );
}

export default SignUp;
