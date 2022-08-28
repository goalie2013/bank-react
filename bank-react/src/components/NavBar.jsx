import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Route, Link, BrowserRouter as Router, Routes } from "react-router-dom";
import Home from "../pages/Home";
import CreateAccount from "../pages/CreateAccount";
import Data from "../pages/Data";
import Deposit from "../pages/Deposit";
import DepositNew from "../pages/DepositNew";
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
                    <Link to="/createaccount" style={style} className="link">
                      Create Account
                    </Link>
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link>
                    <Link to="/deposit" style={style} className="link">
                      Deposit
                    </Link>
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link>
                    <Link to="/withdraw" style={style} className="link">
                      Withdraw
                    </Link>
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link>
                    <Link to="/data" style={style} className="link">
                      All Data
                    </Link>
                  </Nav.Link>
                </Nav.Item>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>

        <UserContext.Provider
          value={{
            users: [
              {
                name: "SampleUser",
                email: "email@address.com",
                password: "password",
                balance: 0,
                transactions: [],
              },
            ],
          }}
        >
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/createaccount" element={<CreateAccount />} />
            <Route path="/deposit" element={<DepositNew />} />
            <Route path="/withdraw" element={<Withdraw />} />
            <Route path="/data" element={<Data />} />
          </Routes>
        </UserContext.Provider>
      </Router>
    </div>
  );
}
