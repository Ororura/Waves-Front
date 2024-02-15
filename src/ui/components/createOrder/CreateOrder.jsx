import * as React from 'react';
import { useContext } from 'react';
import { Container } from '../HOC/Container';
import { Button, Form } from 'react-bootstrap';
import { Context } from '../../../core/Context';

export const CreateOrder = () => {
  const { createOrder } = useContext(Context);
  const handlerCreateOrder = async e => {
    e.preventDefault();
    const { target } = e;
    await createOrder(
      target.id.value,
      target.amount.value,
      target.date.value,
      target.price.value,
      target.company.value,
      target.preOrder.value,
    );
  };
  return (
    <div>
      <Container>
        <Form onSubmit={handlerCreateOrder}>
          <Form.Label>Заказать продукт</Form.Label>
          <Form.Control className='mb-3' name='id' type='number' placeholder='Введите id' />
          <Form.Control className='mb-3' name='amount' type='number' placeholder='Введите кол-во продуктов' />
          <Form.Control name='date' className='mb-3' type='text' placeholder='Введите дату' />
          <Form.Control name='price' className='mb-3' type='number' placeholder='Введите желаемую цену' />
          <Form.Control type='text' name='company' placeholder='Название компании' className='mb-3' />
          <Form.Label>Предоплата</Form.Label>
          <Form.Select className='mb-3' name='preOrder'>
            <option value='true'>Да</option>
            <option value='false'>Нет</option>
          </Form.Select>
          <Button type={'submit'}>Отправить</Button>
        </Form>
      </Container>
    </div>
  );
};
