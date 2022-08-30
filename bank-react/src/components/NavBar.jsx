import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Route, Link, BrowserRouter as Router, Routes } from "react-router-dom";
import Home from "../pages/Home";
import CreateAccount from "../pages/CreateAccount";
import Data from "../pages/Data";
import DepositNew from "../pages/DepositNew";
import WithdrawWrap from "../pages/WithdrawWrap";

export default function NavBar() {
  const [expanded, setExpanded] = useState(false);

  const style = {
    color: "black",
  };

  return (
    <div>
      <Router>
        <Navbar
          variant="light"
          expand="md"
          expanded={expanded}
          className="p-3 navbar"
        >
          <Container>
            <Navbar.Brand>
              <Link to="/" style={style} onClick={() => setExpanded(false)}>
                Bad Bank
              </Link>
            </Navbar.Brand>
            <Navbar.Toggle
              aria-controls="responsive-navbar-nav"
              onClick={() => setExpanded(expanded ? false : "expanded")}
            />
            <Navbar.Collapse
              id="basic-navbar-nav"
              className="justify-content-end"
            >
              <Nav>
                <Nav.Item>
                  <Nav.Link>
                    <Link
                      to="/createaccount"
                      style={style}
                      className="link"
                      onClick={() => setExpanded(false)}
                    >
                      Create Account
                    </Link>
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link>
                    <Link
                      to="/deposit"
                      style={style}
                      className="link"
                      onClick={() => setExpanded(false)}
                    >
                      Deposit
                    </Link>
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link>
                    <Link
                      to="/withdraw"
                      style={style}
                      className="link"
                      onClick={() => setExpanded(false)}
                    >
                      Withdraw
                    </Link>
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link>
                    <Link
                      to="/data"
                      style={style}
                      className="link"
                      onClick={() => setExpanded(false)}
                    >
                      All Data
                    </Link>
                  </Nav.Link>
                </Nav.Item>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/createaccount" element={<CreateAccount />} />
          <Route path="/deposit" element={<DepositNew />} />
          <Route path="/withdraw" element={<WithdrawWrap />} />
          <Route path="/data" element={<Data />} />
        </Routes>
      </Router>
    </div>
  );
}
