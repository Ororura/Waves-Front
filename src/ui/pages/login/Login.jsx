import * as React from 'react'
import { useContext, useEffect } from 'react'
import { Button, Form } from 'react-bootstrap'
import { useHistory } from 'react-router-dom'
import { Context } from '../../../core/Context'
import { Container } from '../../components/HOC/Container'

export const Login = () => {
  const { getProductCards, login, user } = useContext(Context)
  const nav = useHistory()
  useEffect(() => {
    if (user.length !== 0) nav.push('/personal')
  }, [user])

  useEffect(() => {
    ;(async () => {
      await getProductCards()
    })()
  }, [])
  const handlerLog = async e => {
    e.preventDefault()
    const { target } = e
    await login(target.name.value, target.password.value)
  }
  return (
    <Container>
      <div>
        <Form onSubmit={handlerLog}>
          <Form.Label>Авторизоваться</Form.Label>
          <Form.Group className='mb-3' controlId='name'>
            <Form.Label>Логин</Form.Label>
            <Form.Control type='text' placeholder='Введите логин' />
          </Form.Group>
          <Form.Group className='mb-3' controlId='password'>
            <Form.Label>Пароль</Form.Label>
            <Form.Control type='password' placeholder='Введите пароль' />
          </Form.Group>
          <Button type='submit'>Авторизоваться</Button>
        </Form>
      </div>
    </Container>
  )
}
