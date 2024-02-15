import * as React from 'react';
import { useContext, useEffect } from 'react';
import { Context } from '../../../core/Context';
import { Container } from '../HOC/Container';

export const GetProductCards = () => {
  const { getProductCards, shopProducts } = useContext(Context);
  useEffect(() => {
    (async () => {
      await getProductCards();
    })();
  }, []);
  return (
    <>
      {shopProducts.map((el, idx) => (
        <Container key={idx}>
          <p>Продукты в продаже</p>
          <p>Название компании: {el.companyName}</p>
          <p>Товары в магазине</p>
          {el.companyShop.map((product, idx) => (
            <div style={{ backgroundColor: '#673e70', borderRadius: '15px' }} key={idx}>
              <p>Id продукта: {idx}</p>
              <p>Название товара: {product.productName}</p>
              <p>Минимальное кол-во товара: {product.minCount}</p>
              <p>Максимальное кол-во товара: {product.maxCount}</p>
              <p>Название товара: {product.productName}</p>
              <p>
                Поставщики:
                {product.distributors.map((dist, idx) => (
                  <span key={idx}>{' ' + dist + ' '}</span>
                ))}
              </p>
              <p>
                Регионы:
                {product.regions.map((reg, idx) => (
                  <span key={idx}>{' ' + reg + ' '}</span>
                ))}
              </p>
            </div>
          ))}
        </Container>
      ))}
    </>
  );
};
