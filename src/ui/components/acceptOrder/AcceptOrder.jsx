import { useContext, useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { Context } from '../../../core/Context';
import { Container } from '../HOC/Container';

export const AcceptOrder = () => {
  const { acceptOrder } = useContext(Context);
  const handlerAcceptOrder = async e => {
    e.preventDefault();
    const { target } = e;
    await acceptOrder(target.id.value, target.role.value);
  };
  return (
    <Container>
      <Form onSubmit={handlerAcceptOrder}>
        <Form.Label>Подтвердить заказ</Form.Label>
        <Form.Control name='id' type='text' className='mb-3' placeholder='Введите id продукта' />
        <Form.Label>Выберите решение</Form.Label>
        <Form.Select name='role' className='mb-3'>
          <option value='true'>Согласиться</option>
          <option value='false'>Отказаться</option>
        </Form.Select>
        <Button type='submit'>Отправить</Button>
      </Form>
    </Container>
  );
};
