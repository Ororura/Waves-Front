import React, { useContext, useEffect } from 'react';
import { Context } from '../../../core/Context';
import { Container } from '../HOC/Container';

export const Products = () => {
  const { userProducts, getUserProducts } = useContext(Context);

  useEffect(() => {
    (async () => {
      getUserProducts();
    })();
  }, []);

  return (
    <>
      {userProducts.length !== 0 && (
        <Container>
          <p>Ваши продукты</p>
          {userProducts.map((el, idx) => (
            <div style={{ backgroundColor: '#673e70', borderRadius: '15px' }} key={idx}>
              <p>Название продукта: {el.productName}</p>
              <p>Описание продукта: {el.productDesc}</p>
              <p>
                Регионы доставки:{' '}
                {el.regions.map((region, idx) => (
                  <span key={idx}>{region} </span>
                ))}
              </p>
            </div>
          ))}
        </Container>
      )}
    </>
  );
};
