import * as React from 'react';
import { Container } from '../HOC/Container';
import { useContext } from 'react';
import { Context } from '../../../core/Context';
import { Button, Form } from 'react-bootstrap';

export const FormatOrder = () => {
  const { orders, formatOrder } = useContext(Context);
  const handlerFormat = async (e, idx) => {
    e.preventDefault();
    const { target } = e;
    await formatOrder(idx, target.amount.value, target.date.value);
  };
  return (
    <>
      {orders &&
        orders.map((orders, idx) => (
          <Container key={idx}>
            <p>Подтвердить заказ</p>
            <p>Название продукта: {orders.productName}</p>
            <p>Кол-во продуктов в заказе: {orders.amount}</p>
            <p>Ваш статус: {orders.status}</p>
            <Form
              onSubmit={e => {
                handlerFormat(e, idx);
              }}
            >
              <Form.Control name='amount' className='mb-3' type='number' placeholder='Кол-во' />
              <Form.Label>Формат: 22.04.2024</Form.Label>
              <Form.Control className='mb-3' name='date' type='text' placeholder='Дата' />
              <Button type='submit'>Отправить</Button>
            </Form>
          </Container>
        ))}
    </>
  );
};
