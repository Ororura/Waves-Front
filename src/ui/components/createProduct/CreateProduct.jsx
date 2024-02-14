import * as React from 'react';
import { Container } from '../HOC/Container';
import { Button, Form } from 'react-bootstrap';
import { useContext, useState } from 'react';
import { Context } from '../../../core/Context';

export const CreateProduct = () => {
  const [productName, setProductName] = useState();
  const [productDesc, setProductDesc] = useState();
  const [regions, setRegions] = useState();
  const { createCardProduct } = useContext(Context);

  const handlerCreateProduct = async e => {
    e.preventDefault();
    await createCardProduct(productName, productDesc, regions);
  };
  return (
    <div>
      <Container>
        <Form>
          <Form.Label>Создать карточку с продуктом</Form.Label>
          <Form.Group className='mb-3'>
            <Form.Label>Название продукта</Form.Label>
            <Form.Control
              onChange={e => {
                setProductName(e.target.value);
              }}
              type='text'
              placeholder='Введите название продукта'
            />
          </Form.Group>
          <Form.Group className='mb-3'>
            <Form.Label>Описание продукта</Form.Label>
            <Form.Control
              onChange={e => {
                setProductDesc(e.target.value);
              }}
              type='text'
              placeholder='Введите описание продукта'
            />
          </Form.Group>
          <Form.Group className='mb-3'>
            <Form.Label>Регионы доставки</Form.Label>
            <Form.Control
              onChange={e => {
                setRegions(e.target.value);
              }}
              type='text'
              placeholder='Введите регионы доставки'
            />
            <Form.Text>Пример формата: ИНДИЯ,США,КИТАЙ</Form.Text>
          </Form.Group>
          <Button onClick={handlerCreateProduct}>Отправить</Button>
        </Form>
      </Container>
    </div>
  );
};
