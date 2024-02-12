import * as React from 'react'
import { Container } from '../HOC/Container'
import { useContext } from 'react'
import { Context } from '../../../core/Context'
import { Button, Form } from 'react-bootstrap'

//TODO Заказ успешко формируется в __orders, нужно доделать форму для апрува дистрибутора
export const FormatOrder = () => {
  const { orders, formatOrder } = useContext(Context)
  const handlerFormat = async (e, idx) => {
    e.preventDefault()
    const { target } = e
    await formatOrder(idx, target.amount.value, target.date.value)
  }
  return (
    <div>
      <p style={{ textAlign: 'center' }}>Подтвердить заказ</p>
      {orders &&
        orders.map((orders, idx) => (
          <Container key={idx}>
            <>
              <p>Заказы</p>
              <div
                style={{
                  backgroundColor: 'purple',
                  color: 'white',
                  fontSize: '25px',
                  borderRadius: '15px',
                  marginTop: '20px',
                  padding: '10px',
                  textAlign: 'center',
                }}
              >
                <p>Название продукта: {orders.productName}</p>
                <p>Кол-во продуктов в заказе: {orders.amount}</p>
                <p>Ваш статус: {orders.status}</p>
                <Form
                  onSubmit={e => {
                    handlerFormat(e, idx)
                  }}
                >
                  <Form.Group className='mb-3' controlId='amount'>
                    <Form.Label>Кол-во товара</Form.Label>
                    <Form.Control type='number' placeholder='Кол-во' />
                  </Form.Group>
                  <Form.Group className='mb-3' controlId='date'>
                    <Form.Label>Дата доставки</Form.Label>
                    <Form.Control type='text' placeholder='Дата' />
                    <Form.Text>Формат: 22.04.2024</Form.Text>
                  </Form.Group>
                  <Button variant='primary' type='submit'>
                    Отправить
                  </Button>
                </Form>
              </div>
            </>
          </Container>
        ))}
    </div>
  )
}
