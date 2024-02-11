import * as React from 'react'
import { useContext, useEffect, useState } from 'react'
import { Context } from '../../../core/Context'
import { Container } from '../HOC/Container'
import { Button, Form } from 'react-bootstrap'

export const ApproveProductCard = () => {
  const [min, setMin] = useState(0)
  const [max, setMax] = useState(0)
  const [status, setStatus] = useState('true')
  const [dist, setDist] = useState('')
  const { onCheckCard, getApproveCard, approveCard } = useContext(Context)

  const handlerApproveCard = async (e, idx) => {
    e.preventDefault()
    await approveCard(onCheckCard[idx].companyName, idx, status, min, max, dist)
  }
  useEffect(() => {
    ;(async () => {
      await getApproveCard()
    })()
  }, [getApproveCard])

  return (
    <div>
      <p style={{ textAlign: 'center' }}>Подтвердить карточки</p>
      {onCheckCard.map(
        (card, index) =>
          card &&
          card.status === 'onCheck' && (
            <Container key={index}>
              <div
                key={index}
                style={{ backgroundColor: 'purple', padding: '20px', color: 'white', borderRadius: '15px' }}
              >
                <div>
                  <p>Название продукта: {card.productName}</p>
                  <p>Описание продукта: {card.productDesc}</p>
                  {card.regions.map((el, idx) => (
                    <p key={idx}>Регионы доставки: {el}</p>
                  ))}
                </div>

                <Form
                  onSubmit={e => {
                    handlerApproveCard(e, index)
                  }}
                >
                  <Form.Group className='mb-3' controlId='status'>
                    <Form.Select
                      onClick={e => {
                        setStatus(e.target.value)
                      }}
                    >
                      <option value='true'>Подтвердить</option>
                      <option value='false'>Отказать</option>
                    </Form.Select>
                  </Form.Group>
                  <Form.Group className='mb-3' controlId='name'>
                    <Form.Label>Минимальное кол-во товаров</Form.Label>
                    <Form.Control
                      onChange={e => {
                        setMin(e.target.value)
                      }}
                      type='number'
                      placeholder='Введите минимальное кол-во товаров'
                    />
                  </Form.Group>
                  <Form.Group className='mb-3' controlId='name'>
                    <Form.Label>Макисмальное кол-во товаров</Form.Label>
                    <Form.Control
                      onChange={e => {
                        setMax(e.target.value)
                      }}
                      type='text'
                      placeholder='Введите максимальное кол-во товаров'
                    />
                  </Form.Group>
                  <Form.Group className='mb-3' controlId='name'>
                    <Form.Label>Поставщики</Form.Label>
                    <Form.Control
                      onChange={e => {
                        setDist(e.target.value)
                      }}
                      type='text'
                      placeholder='Введите поставщиков'
                    />
                    <Form.Text>Пример ввода: Egor,Lesha,Pasha</Form.Text>
                  </Form.Group>
                  <Button type={'submit'}>Отправить</Button>
                </Form>
              </div>
            </Container>
          ),
      )}
    </div>
  )
}
