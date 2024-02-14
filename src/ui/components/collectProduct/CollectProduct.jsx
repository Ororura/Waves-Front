import * as React from 'react';
import { Container } from '../HOC/Container';
import { Button, Form } from 'react-bootstrap';
import { useContext, useState } from 'react';
import { Context } from '../../../core/Context';

export const CollectProduct = () => {
  const [id, setId] = useState(0);
  const { collectProduct } = useContext(Context);

  const handlerCollectProduct = async () => {
    const currentTime = new Date();
    const day = String(currentTime.getDate()).padStart(2, '0');
    const month = String(currentTime.getMonth() + 1).padStart(2, '0'); // Месяцы в JavaScript начинаются с 0, поэтому добавляем 1
    const year = currentTime.getFullYear();
    await collectProduct(id, `${day}.${month}.${year}`);
  };
  return (
    <div>
      <Container>
        <Form>
          <Form.Label>Забрать заказ</Form.Label>
          <Form.Group className='mb-3'>
            <Form.Label>Id заказа</Form.Label>
            <Form.Control
              onChange={e => {
                setId(e.target.value);
              }}
              type='text'
              placeholder='Введите id продукта'
            />
          </Form.Group>
          <Form.Group className='mb-3' controlId='role'>
            <Form.Label>Выберите решение</Form.Label>
            <Form.Control
              onChange={e => {
                setTime(e.target.value);
              }}
              type='text'
              placeholder='Введите дату продукта'
            />
          </Form.Group>

          <Button onClick={handlerCollectProduct}>Отправить</Button>
        </Form>
      </Container>
    </div>
  );
};
