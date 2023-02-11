import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { UserContext } from "../Contexts/userContext";
import { useContext, useEffect, useState } from "react";

const NavComponent = ({ user }) => {
  const userValue = useContext(UserContext);

  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Container>
        <Navbar.Brand href="/">NC News</Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />

        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/articles">Articles</Nav.Link>
            <NavDropdown title="Topics" id="basic-nav-dropdown">
              <NavDropdown.Item href="/topics/football">
                Football
              </NavDropdown.Item>
              <NavDropdown.Item href="/topics/coding">Coding</NavDropdown.Item>
              <NavDropdown.Item href="/topics/cooking">
                Cooking
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
        <Navbar.Text>
          Signed in as: <a href="/users">{user.loggedInUser?.username}</a>
        </Navbar.Text>
      </Container>
    </Navbar>
  );
};

export default NavComponent;
