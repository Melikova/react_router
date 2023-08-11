import React from 'react';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import { Cards } from '../reusables/Card';

export const Shop = () => {
  return (
    <Container fluid className="px-2 px-sm-5 py-5">
      <Row xs={1} md={4} className="g-4">
        <Cards />
        <Cards />
        <Cards />
        <Cards />
      </Row>
    </Container>
  )
}
