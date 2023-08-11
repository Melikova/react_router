import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Carousel from 'react-bootstrap/Carousel';
import { Cards } from './reusables/Card';

export const Home = () => {
  return (
    <>
      <Container fluid className="px-2 px-sm-5 py-5">
        <Carousel data-bs-theme="dark">
          <Carousel.Item>
            <img
              className="d-block w-100 rounded"
              src="https://picsum.photos/id/429/1200/300"
              alt="First slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100 rounded"
              src="https://picsum.photos/id/30/1200/300"
              alt="Second slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100 rounded"
              src="https://picsum.photos/id/225/1200/300"
              alt="Third slide"
            />
          </Carousel.Item>
        </Carousel>
        <Row>
          <Col className="h2 mt-5 mb-4">
            Most Popular Items
          </Col>
        </Row>
        <Row xs={1} md={4} className="g-4">
            <Cards />
            <Cards />
            <Cards />
            <Cards />
        </Row>
      </Container>
    </>
  )
}
