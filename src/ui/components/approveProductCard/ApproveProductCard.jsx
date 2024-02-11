import * as React from 'react'
import { useContext, useEffect, useState } from 'react'
import { Context } from '../../../core/Context'
import { Container } from '../HOC/Container'
import { Button } from 'react-bootstrap'

export const ApproveProductCard = () => {
  const [min, setMin] = useState(0)
  const [max, setMax] = useState(0)
  const [status, setStatus] = useState('true')
  const [dist, setDist] = useState('')
  const { onCheckCard, getApproveCard, approveCard } = useContext(Context)

  //TODO: Сделать выборку по компаниям, иначе не будут работать апрувы по idx
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
              <div key={index}>
                <div>
                  <p>Название продукта: {card.productName}</p>
                  <p>Описание продукта: {card.productDesc}</p>
                  {card.regions.map((el, idx) => (
                    <p key={idx}>Регионы доставки: {el}</p>
                  ))}
                </div>

                <Form
                  onSubmit={e => {
                    handleApproveNewUser(e, index)
                  }}
                >
                  <Form.Group className='mb-3' controlId='status'>
                    <Form.Select
                      onClick={e => {
                        setStatus(e.target.value)
                      }}
                    >
                      <option value='true'>Зарегистрировать</option>
                      <option value='false'>Отказать</option>
                    </Form.Select>
                  </Form.Group>
                  <Button type='submit'>Отправить</Button>
                </Form>
              </div>
            </Container>
          ),
      )}
    </div>
  )
}
