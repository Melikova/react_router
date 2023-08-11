import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import { BsCart3 } from 'react-icons/bs';
import { BiSearch } from 'react-icons/bi';
import { RiUser3Line } from 'react-icons/ri';
import { AiOutlineHeart, AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';
import { useState } from "react";


export const Header = () => {
  const [menu, setMenu] = useState(false);
  return (
    <Navbar collapseOnSelect expand="lg" className="shadow px-2 px-sm-4">
      <Container fluid>
        <Navbar.Brand as={Link} to="/"  className="pe-5">Online Shop</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" className="border-0 focus-ring focus-ring-light" onClick={() => setMenu(!menu)}>
          {(menu)?<AiOutlineClose/>:<AiOutlineMenu/>}
        </Navbar.Toggle>
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/">Home</Nav.Link>
            <Nav.Link as={Link} to="/shop">Shop</Nav.Link>
            <Nav.Link as={Link} to="/about">About Us</Nav.Link>
            <Nav.Link as={Link} to="/contact">Contact Us</Nav.Link>
          </Nav>
          <Form className="d-flex my-2">
            <InputGroup>
              <Form.Control type="search" placeholder="Search products" aria-label="Search"/>
              <Button variant="outline-secondary" id="button-addon2">
                <BiSearch size="1.5em" />
              </Button>
            </InputGroup>
          </Form>
          <Nav className="ms-0 ms-sm-3 d-flex flex-row">
            <Nav.Link as={Link} to="/user" className="me-3 me-sm-0">
              <RiUser3Line size="1.5em"/>
            </Nav.Link>
            <Nav.Link as={Link} to="/fav" className="me-3 me-sm-0">
              <AiOutlineHeart size="1.5em"/>
            </Nav.Link>
            <Nav.Link as={Link} to="/cart">
              <BsCart3 size="1.5em"/>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}
