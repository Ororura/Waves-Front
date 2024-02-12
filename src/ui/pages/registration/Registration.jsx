import * as React from 'react'
import { useContext, useState } from 'react'
import { Button, Form } from 'react-bootstrap'
import { Context } from '../../../core/Context'
import { Container } from '../../components/HOC/Container'

export const Registration = () => {
  const { registration } = useContext(Context)
  const [checkBox, setCheckBox] = useState(false)
  const [supplier, setSupplier] = useState('user')
  const [regions, setRegions] = useState('null')
  const [company, setCompany] = useState('null')
  const [suppDesc, setSuppDesc] = useState('')

  const handlerReg = async e => {
    e.preventDefault()
    const { target } = e
    await registration(
      target.name.value,
      target.password.value,
      target.role.value,
      target.region.value,
      regions,
      target.phone.value,
      company,
      suppDesc,
    )
    setCheckBox(true)
  }

  return (
    <Container>
      <div>
        {checkBox === false ? (
          <Form onSubmit={handlerReg}>
            <Form.Group className='mb-3' controlId='name'>
              <Form.Label>Логин</Form.Label>
              <Form.Control name='name' type='text' placeholder='Введите логин' />
            </Form.Group>
            <Form.Group className='mb-3' controlId='password'>
              <Form.Label>Пароль</Form.Label>
              <Form.Control name='password' type='password' placeholder='Введите пароль' />
            </Form.Group>
            <Form.Group className='mb-3' controlId='region'>
              <Form.Label>Регион</Form.Label>
              <Form.Control name='region' type='text' placeholder='Введите ваш регион доставки' />
              <Form.Text>Пример ввода: США</Form.Text>
            </Form.Group>
            <Form.Group className='mb-3' controlId='phone'>
              <Form.Label>Номер телефона</Form.Label>
              <Form.Control name='phone' type='phone' placeholder='Введите ваш номер телефона' />
            </Form.Group>
            <Form.Group className='mb-3' controlId='role'>
              <Form.Label>Выберите роль</Form.Label>
              <Form.Select
                name='role'
                onChange={e => {
                  setSupplier(e.target.value)
                }}
              >
                <option value='user'>Пользователь</option>
                <option value='distributor'>Дистрибутор</option>
                <option value='supplier'>Поставщик</option>
              </Form.Select>
            </Form.Group>
            {supplier === 'distributor' && (
              <Form.Group className='mb-3' controlId='regions'>
                <Form.Label>Регионы </Form.Label>
                <Form.Control
                  onChange={e => setRegions(e.target.value)}
                  name='regions'
                  type='text'
                  placeholder='Введите регионы доставки'
                />
                <Form.Text>Пример ввода: ИНДИЯ,США,КИТАЙ</Form.Text>
              </Form.Group>
            )}
            {(supplier === 'distributor' || supplier === 'supplier') && (
              <>
                <Form.Group className='mb-3' controlId='company'>
                  <Form.Label>Компания </Form.Label>
                  <Form.Control
                    onChange={e => setCompany(e.target.value)}
                    name='company'
                    type='text'
                    placeholder='Введите название компании'
                  />
                </Form.Group>

                <Form.Group className='mb-3' controlId='suppDesc'>
                  <Form.Label>Описание компании </Form.Label>
                  <Form.Control
                    onChange={e => setSuppDesc(e.target.value)}
                    name='suppDesc'
                    type='text'
                    placeholder='Введите описание компании'
                  />
                </Form.Group>
              </>
            )}
            <Button type='submit'>Зарегистрироваться</Button>
          </Form>
        ) : (
          <p>Ожидайте одобрения регистрации от оператора</p>
        )}
      </div>
    </Container>
  )
}
