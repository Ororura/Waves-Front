import * as React from 'react';
import { useContext, useEffect } from 'react';
import { Context } from '../../../core/Context';
import { Container } from '../HOC/Container';

export const GetOrderProduction = () => {
  const { getOrderProd, orders, user } = useContext(Context);
  useEffect(() => {
    (async () => {
      await getOrderProd();
    })();
  }, []);
  return (
    <>
      {orders &&
        orders.map(
          (order, idx) =>
            orders[idx].customer === user.login && (
              <Container key={idx}>
                <p style={{ textAlign: 'center' }}>Ваш заказ</p>
                <p>Название продукта: {order.productName}</p>
                <p>Кол-во продуктов в заказе: {order.amount}</p>
                <p>Ваш статус: {order.status}</p>
              </Container>
            ),
        )}
    </>
  );
};
