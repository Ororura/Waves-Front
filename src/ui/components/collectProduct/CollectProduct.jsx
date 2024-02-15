import * as React from 'react';
import { useContext } from 'react';
import { Button, Form } from 'react-bootstrap';
import { Context } from '../../../core/Context';
import { Container } from '../HOC/Container';

export const CollectProduct = () => {
  const { collectProduct } = useContext(Context);

  const handlerCollectProduct = async e => {
    const { target } = e;
    await collectProduct(target.id.value);
  };
  return (
    <Container>
      <Form onSubmit={handlerCollectProduct}>
        <Form.Label>Забрать заказ</Form.Label>
        <Form.Control name='id' type='number' className='mb-3' placeholder='Введите id продукта' />
        <Button type='submit'>Отправить</Button>
      </Form>
    </Container>
  );
};
