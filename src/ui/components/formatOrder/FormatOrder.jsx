import * as React from 'react'
import { Container } from '../HOC/Container'
import { Button, Form } from 'react-bootstrap'

//TODO Заказ успешко формируется в __orders, нужно доделать форму для апрува дистрибутора
export const FormatOrder = () => {
  return (
    <div>
      <Container>
        <Form>
          <Form.Label>Подготовить карточку с продуктом</Form.Label>
          <Form.Group className='mb-3'>
            <Form.Label>Название продукта</Form.Label>
            <Form.Control
              onChange={e => {
                setProductName(e.target.value)
              }}
              type='text'
              placeholder='Введите название продукта'
            />
          </Form.Group>
          <Form.Group className='mb-3'>
            <Form.Label>Описание продукта</Form.Label>
            <Form.Control
              onChange={e => {
                setProductDesc(e.target.value)
              }}
              type='text'
              placeholder='Введите описание продукта'
            />
          </Form.Group>
          <Form.Group className='mb-3'>
            <Form.Label>Регионы доставки</Form.Label>
            <Form.Control
              onChange={e => {
                setRegions(e.target.value)
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
  )
}
