import * as React from 'react'
import { useContext, useEffect } from 'react'
import { Context } from '../../../core/Context'
import { Container } from '../HOC/Container'

export const GetOrderProduction = () => {
  const { getOrderProd, orders } = useContext(Context)
  useEffect(() => {
    ;(async () => {
      await getOrderProd()
    })()
  }, [])
  return (
    <div>
      {orders &&
        orders.map((orders, idx) => (
          <Container key={idx}>
            <>
              <p>Ваши заказы</p>
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
              </div>
            </>
          </Container>
        ))}
    </div>
  )
}
