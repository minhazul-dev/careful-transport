import React from "react";
import { Navbar, Nav, Form, FormControl, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <Navbar bg="dark" expand="lg">
      <Navbar.Brand className="text-white" href="/home">
        CareFul Transport
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <div className="ml-5">
          <Link className="" to="/destination/:id">
            Destination
          </Link>
        </div>
        <div className="ml-5">
          <Link className="" to="/home">
            Home
          </Link>
        </div>
        <Nav.Link href="#home">Blog</Nav.Link>
        <Nav.Link href="#home">News</Nav.Link>
        <Nav.Link to="#home"></Nav.Link>

        <Form inline>
          <FormControl
            type="text"
            placeholder="Search"
            className="mr-sm-2 ml-5"
          />
          <Button variant="outline-success">Search</Button>
        </Form>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Header;
