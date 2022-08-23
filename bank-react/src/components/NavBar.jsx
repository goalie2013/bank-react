import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Route, Link, BrowserRouter as Router, Routes } from "react-router-dom";
import App from "../App";
import CreateAccount from "../pages/CreateAccount";
import Data from "../pages/Data";
import Deposit from "../pages/Deposit";
import Withdraw from "../pages/Withdraw";

export default function NavBar() {
  const style = {
    color: "black",
  };
  return (
    <div>
      <Router>
        <Navbar bg="light" expand="lg" className="p-3">
          <Container>
            <Navbar.Brand>
              <Link to="/" style={style}>
                Bad Bank
              </Link>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse
              id="basic-navbar-nav"
              className="justify-content-end"
            >
              <Nav>
                <Nav.Item>
                  <Nav.Link>
                    <Link to="/createaccount" style={style}>
                      Create Account
                    </Link>
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link>
                    <Link to="/deposit" style={style}>
                      Deposit
                    </Link>
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link>
                    <Link to="/withdraw" style={style}>
                      Withdraw
                    </Link>
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link>
                    <Link to="/data" style={style}>
                      All Data
                    </Link>
                  </Nav.Link>
                </Nav.Item>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>

        <Routes>
          <Route path="/" exact component={<App />} />
          <Route path="/createaccount" element={<CreateAccount />} />
          <Route path="/deposit" element={<Deposit />} />
          <Route path="/withdraw" element={<Withdraw />} />
          <Route path="/data" element={<Data />} />
        </Routes>
      </Router>
    </div>
  );
}
