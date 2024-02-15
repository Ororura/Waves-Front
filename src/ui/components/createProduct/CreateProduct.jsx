import * as React from 'react';
import { Container } from '../HOC/Container';
import { Button, Form } from 'react-bootstrap';
import { useContext } from 'react';
import { Context } from '../../../core/Context';

export const CreateProduct = () => {
  const { createCardProduct } = useContext(Context);
  const handlerCreateProduct = async e => {
    e.preventDefault();
    const { target } = e;
    await createCardProduct(target.productName.value, target.productDesc.value, target.regions.value);
  };
  return (
    <Container>
      <Form onSubmit={handlerCreateProduct}>
        <Form.Label>Создать карточку с продуктом</Form.Label>
        <Form.Control name='productName' className='mb-3' type='text' placeholder='Введите название продукта' />
        <Form.Control name='productDesc' className='mb-3' type='text' placeholder='Введите описание продукта' />
        <Form.Label>Пример формата: ИНДИЯ,США,КИТАЙ</Form.Label>
        <Form.Control name='regions' className='mb-3' type='text' placeholder='Введите регионы доставки' />
        <Button type='submit'>Отправить</Button>
      </Form>
    </Container>
  );
};
