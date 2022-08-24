import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Route, Link, BrowserRouter as Router, Routes } from "react-router-dom";
import Home from "../pages/Home";
import CreateAccount from "../pages/CreateAcc";
import Data from "../pages/Data";
import Deposit from "../pages/Deposit";
import Withdraw from "../pages/Withdraw";
import { UserContext } from "../main";

export default function NavBar() {
  const style = {
    color: "black",
  };
  return (
    <div>
      <Router>
        <Navbar bg="light" expand="lg" className="p-3 navbar">
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

        <UserContext.Provider value={{ users: [] }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/createaccount" element={<CreateAccount />} />
            <Route path="/deposit" element={<Deposit />} />
            <Route path="/withdraw" element={<Withdraw />} />
            <Route path="/data" element={<Data />} />
          </Routes>
        </UserContext.Provider>
      </Router>
    </div>
  );
}
