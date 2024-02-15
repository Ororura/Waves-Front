import * as React from 'react';
import { useContext, useEffect } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import { Context } from '../../../core/Context';
import { Container } from '../../components/HOC/Container';

export const Login = () => {
  const { getProductCards, login, user } = useContext(Context);
  const nav = useHistory();
  useEffect(() => {
    if (user.length !== 0) nav.push('/personal');
  }, [user]);

  useEffect(() => {
    (async () => {
      await getProductCards();
    })();
  }, []);
  const handlerLog = async e => {
    e.preventDefault();
    const { target } = e;
    await login(target.name.value, target.password.value);
  };
  return (
    <Container>
      <div>
        <Form onSubmit={handlerLog}>
          <Form.Label>Авторизоваться</Form.Label>
          <Form.Control name='name' className='mb-3' type='text' placeholder='Введите логин' />
          <Form.Control className='mb-3' name='password' type='password' placeholder='Введите пароль' />
          <Button type='submit'>Авторизоваться</Button>
        </Form>
      </div>
    </Container>
  );
};
