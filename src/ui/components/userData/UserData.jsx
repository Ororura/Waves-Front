import * as React from 'react'
import { useContext } from 'react'
import { Context } from '../../../core/Context'
import { Container } from '../HOC/Container'

export const UserData = () => {
  const { user } = useContext(Context)
  return (
    <Container>
      <p style={{ textAlign: 'center' }}>Данные пользователя</p>
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
        <p>Логин: {user.login}</p>
        <p>Роль: {user.role}</p>
        <p>Компания: {user.companyName}</p>
        <p>Описание поставщика: {user.suppDesc}</p>
        <p>Номер телефона: {user.phone}</p>
        <p>Баланс: {user.balance}</p>
      </div>
    </Container>
  )
}
