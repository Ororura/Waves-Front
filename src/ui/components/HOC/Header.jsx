import * as React from "react";
import { useContext } from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import { Context } from "../../../core/Context";

export const Header = ({ children }) => {
  const { user, setUser } = useContext(Context);
  const nav = useHistory();
  const handlerPush = (e, path) => {
    e.preventDefault();
    nav.push(path);
  };
  return (
    <div>
      <Navbar style={{ backgroundColor: "#8d31b5", fontSize: "25px" }}>
        <Container>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              {user === "" && (
                <>
                  <Nav.Link
                    onClick={(e) => {
                      handlerPush(e, "/login");
                    }}
                  >
                    Авторизоваться
                  </Nav.Link>
                  <Nav.Link
                    onClick={(e) => {
                      handlerPush(e, "/registration");
                    }}
                  >
                    Зарегестрироваться
                  </Nav.Link>
                </>
              )}
              {user !== "" && (
                <Nav.Link
                  onClick={(e) => {
                    handlerPush(e, "/");
                    setUser("");
                  }}
                >
                  Выйти
                </Nav.Link>
              )}
              <Nav.Link
                onClick={(e) => {
                  handlerPush(e, "/personal");
                }}
              >
                Личный кабинет
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      {children}
    </div>
  );
};
