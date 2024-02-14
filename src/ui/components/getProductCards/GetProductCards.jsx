import * as React from 'react';
import { useContext, useEffect } from 'react';
import { Context } from '../../../core/Context';
import { Container } from '../HOC/Container';

export const GetProductCards = () => {
  const { getProductCards, products } = useContext(Context);
  useEffect(() => {
    (async () => {
      await getProductCards();
    })();
  }, []);
  return (
    <div>
      <p style={{ textAlign: 'center' }}>Продукты в продаже</p>
      {products.map((el, idx) => (
        <Container key={idx}>
          <div style={{ backgroundColor: 'purple', padding: '20px', color: 'white', borderRadius: '15px' }}>
            <p>Название компании: {el.companyName}</p>
            <p>Пользователи в компании: </p>
            {el.usersInCompany.map((user, idx) => (
              <span key={idx}>{user}</span>
            ))}
            <p>Товары в магазине</p>
            {el.companyShop.map((product, idx) => (
              <div key={idx}>
                <p>Id продукта: {idx}</p>
                <p>Название товара:{product.productName}</p>
                <p>Минимальное кол-во товара:{product.minCount}</p>
                <p>Максимальное кол-во товара:{product.maxCount}</p>
                <p>Название товара:{product.productName}</p>
                <p>Поставщики:</p>
                {product.distributors.map((dist, idx) => (
                  <p key={idx}>{dist}</p>
                ))}
                <p>Регионы:</p>
                {product.regions.map((reg, idx) => (
                  <p key={idx}>{reg}</p>
                ))}
              </div>
            ))}
          </div>
        </Container>
      ))}
    </div>
  );
};
