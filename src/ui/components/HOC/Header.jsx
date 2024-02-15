import * as React from 'react';
import { useContext } from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import { Context } from '../../../core/Context';

export const Header = ({ children }) => {
  const { user, setUser } = useContext(Context);
  const nav = useHistory();
  const handlerPush = (e, path) => {
    e.preventDefault();
    nav.push(path);
  };
  return (
    <>
      <Navbar style={{ backgroundColor: '#8d31b5', fontSize: '25px' }}>
        <Container>
          <Navbar.Toggle />
          <Navbar.Collapse>
            <Nav className='me-auto'>
              {user.length === 0 && (
                <>
                  <Nav.Link
                    onClick={e => {
                      handlerPush(e, '/login');
                    }}
                  >
                    Авторизоваться
                  </Nav.Link>
                  <Nav.Link
                    onClick={e => {
                      handlerPush(e, '/registration');
                    }}
                  >
                    Зарегистрироваться
                  </Nav.Link>
                </>
              )}
              {user.login && (
                <>
                  <Nav.Link
                    onClick={e => {
                      handlerPush(e, '/');
                      setUser([]);
                    }}
                  >
                    Выйти
                  </Nav.Link>
                  <Nav.Link
                    onClick={e => {
                      handlerPush(e, '/personal');
                    }}
                  >
                    Личный кабинет
                  </Nav.Link>
                </>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      {children}
    </>
  );
};
