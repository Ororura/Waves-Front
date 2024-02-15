import * as React from 'react';
import { Container } from '../HOC/Container';
import { Button, Form } from 'react-bootstrap';
import { useContext, useState } from 'react';
import { Context } from '../../../core/Context';

export const BlockUser = () => {
  const { blockUser } = useContext(Context);
  const handlerBan = async e => {
    e.preventDefault();
    const { target } = e;
    await blockUser(target.login.value, target.status.value);
  };
  return (
    <Container>
      <Form>
        <Form.Label>Заблокировать или разблокировать пользователя</Form.Label>
        <Form.Control name='login' className='mb-3' type='text' placeholder='Введите логин' />
        <Form.Label>Статус</Form.Label>
        <Form.Select name='status' className='mb-3'>
          <option value='true'>Заблокировать</option>
          <option value='false'>Разблокировать</option>
        </Form.Select>
        <Button onClick={handlerBan}>Отправить</Button>
      </Form>
    </Container>
  );
};
