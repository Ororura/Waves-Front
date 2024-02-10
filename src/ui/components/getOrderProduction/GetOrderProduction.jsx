import * as React from 'react'
import { useContext, useEffect } from 'react'
import { Context } from '../../../core/Context'

export const GetOrderProduction = () => {
  const { getOrder, user, orders } = useContext(Context)
  useEffect(() => {
    ;(async () => {
      await getOrder(user.login)
    })()
  }, [])
  return (
    <div style={{ textAlign: 'center' }}>
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
    </div>
  )
}
