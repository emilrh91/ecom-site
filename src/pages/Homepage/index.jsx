import React from 'react';
import ProductsComponent from '../../components/ProductsComponent';
import { Container, Row, Col } from 'react-bootstrap';

const Homepage = () => {
  return (
    <Container>
      <Row className="justify-content-center mb-4">
        <Col xs={12} className="text-center">
          <h1>Welcome To Our Store</h1>
        </Col>
      </Row>
      <ProductsComponent />
    </Container>
  );
};

export default Homepage;