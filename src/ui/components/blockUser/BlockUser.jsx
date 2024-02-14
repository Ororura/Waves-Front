import * as React from 'react';
import { Container } from '../HOC/Container';
import { Button, Form } from 'react-bootstrap';
import { useContext, useState } from 'react';
import { Context } from '../../../core/Context';

export const BlockUser = () => {
  const [name, setName] = useState('');
  const [status, setStatus] = useState('true');
  const { blockUser } = useContext(Context);

  const handlerBan = async e => {
    e.preventDefault();
    await blockUser(name, status);
  };
  return (
    <div>
      <Container>
        <Form>
          <Form.Label>Заблокировать или разблокировать пользователя</Form.Label>
          <Form.Group className='mb-3' controlId='name'>
            <Form.Label>Пользователь</Form.Label>
            <Form.Control
              onChange={e => {
                setName(e.target.value);
              }}
              type='text'
              placeholder='Введите логин'
            />
          </Form.Group>
          <Form.Group className='mb-3' controlId='password'>
            <Form.Label>Статус</Form.Label>
            <Form.Select
              name='status'
              onClick={e => {
                setStatus(e.target.value);
              }}
            >
              <option value='true'>Заблокировать</option>
              <option value='false'>Разблокировать</option>
            </Form.Select>
          </Form.Group>
          <Button onClick={handlerBan}>Отправить</Button>
        </Form>
      </Container>
    </div>
  );
};
