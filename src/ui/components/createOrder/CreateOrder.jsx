import * as React from 'react'
import { useContext, useState } from 'react'
import { Container } from '../HOC/Container'
import { Button, Form } from 'react-bootstrap'
import { Context } from '../../../core/Context'

export const CreateOrder = () => {
  const [id, setId] = useState(0)
  const [amount, setAmount] = useState(0)
  const [date, setDate] = useState('')
  const [price, setPrice] = useState(0)
  const [company, setCompany] = useState('')

  const { createOrder } = useContext(Context)

  const handlerCreateOrder = async e => {
    e.preventDefault()
    await createOrder(id, amount, date, price, company)
  }
  return (
    <div>
      <Container>
        <Form>
          <Form.Label>Заказать продукт</Form.Label>
          <Form.Group className='mb-3'>
            <Form.Label>Id продукта</Form.Label>
            <Form.Control
              onChange={e => {
                setId(e.target.value)
              }}
              type='number'
              placeholder='Введите id'
            />
          </Form.Group>
          <Form.Group className='mb-3'>
            <Form.Label>Кол-во продукта</Form.Label>
            <Form.Control
              onChange={e => {
                setAmount(e.target.value)
              }}
              type='number'
              placeholder='Введите кол-во продуктов'
            />
          </Form.Group>
          <Form.Group className='mb-3'>
            <Form.Label>Дата поставки</Form.Label>
            <Form.Control
              onChange={e => {
                setDate(e.target.value)
              }}
              type='text'
              placeholder='Введите дату'
            />
          </Form.Group>
          <Form.Group className='mb-3'>
            <Form.Label>price</Form.Label>
            <Form.Control
              onChange={e => {
                setPrice(e.target.value)
              }}
              type='number'
              placeholder='Введите желаемую цену'
            />
          </Form.Group>
          <Form.Group className='mb-3'>
            <Form.Label>Введите название компании</Form.Label>
            <Form.Control
              onChange={e => {
                setCompany(e.target.value)
              }}
              type='text'
              placeholder='Название компании'
            />
          </Form.Group>
          <Button onClick={handlerCreateOrder}>Отправить</Button>
        </Form>
      </Container>
    </div>
  )
}
