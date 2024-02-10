import React, { useContext, useEffect } from 'react'
import { Button, Form } from 'react-bootstrap'
import { Context } from '../../../core/Context'

export const NewUsers = () => {
  const { getNewUsers, user, newUsers, approveCreateUser } = useContext(Context)

  useEffect(() => {
    const fetchData = async () => {
      await getNewUsers()
    }
    fetchData()
  }, [getNewUsers])

  const handleApproveNewUser = async (e, id) => {
    e.preventDefault()
    const { target } = e
    await approveCreateUser(id, target.status.value)
  }

  return (
    <div>
      <p style={{ textAlign: 'center' }}>Новые пользователи</p>
      {newUsers.map(
        (elUser, index) =>
          elUser &&
          user.role === 'admin' &&
          elUser.status === 'onCheck' && (
            <div key={index}>
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
                <p>Логин: {elUser.login}</p>
                <p>Роль: {elUser.role}</p>
                <p>Компания: {elUser.companyName}</p>
                <p>Описание поставщика: {elUser.suppDesc}</p>
                <p>Номер телефона: {elUser.phone}</p>
                <p>Баланс: {elUser.balance}</p>
              </div>

              <Form
                onSubmit={e => {
                  handleApproveNewUser(e, index)
                }}
              >
                <Form.Group className='mb-3' controlId='status'>
                  <Form.Select aria-label='Default select example'>
                    <option value='true'>Зарегистрировать</option>
                    <option value='false'>Отказать</option>
                  </Form.Select>
                </Form.Group>
                <Button type='submit'>Отправить</Button>
              </Form>
            </div>
          ),
      )}
    </div>
  )
}
