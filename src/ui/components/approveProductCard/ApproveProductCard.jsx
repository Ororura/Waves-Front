import * as React from 'react';
import { useContext, useEffect, useState } from 'react';
import { Context } from '../../../core/Context';
import { Container } from '../HOC/Container';
import { Button, Form } from 'react-bootstrap';

export const ApproveProductCard = () => {
  const { onCheckCard, getApproveCard, approveCard } = useContext(Context);
  const handlerApproveCard = async (e, idx) => {
    e.preventDefault();
    const { target } = e;
    await approveCard(onCheckCard[idx].companyName, idx, target.status.value, target.min.value, target.max.value, target.dist.value);
    setTimeout(async () => {
      await getApproveCard();
    }, 5000);
  };
  useEffect(() => {
    (async () => {
      await getApproveCard();
    })();
  }, []);

  return (
    <>
      {onCheckCard &&
        onCheckCard.map(
          (card, index) =>
            card &&
            card.status === 'onCheck' && (
              <Container key={index}>
                <p>Подтвердить карточки</p>
                <div>
                  <p>Название: {card.productName}</p>
                  <p>Описание: {card.productDesc}</p>
                  {card.regions.map((el, idx) => (
                    <span key={idx}>Регионы доставки: {el + ''}</span>
                  ))}
                </div>

                <Form
                  onSubmit={e => {
                    handlerApproveCard(e, index);
                  }}
                >
                  <Form.Select name='status' className='mb-3'>
                    <option value='true'>Подтвердить</option>
                    <option value='false'>Отказать</option>
                  </Form.Select>
                  <Form.Control name='min' className='mb-3' type='number' placeholder='Введите минимальное кол-во' />
                  <Form.Control name='max' className='mb-3' type='number' placeholder='Введите максимальное кол-во' />
                  <Form.Label className='mb-3'>Пример ввода: Egor,Lesha,Pasha</Form.Label>
                  <Form.Control name='dist' className='mb-3' type='text' placeholder='Введите поставщиков' />
                  <Button type='submit'>Отправить</Button>
                </Form>
              </Container>
            ),
        )}
    </>
  );
};
