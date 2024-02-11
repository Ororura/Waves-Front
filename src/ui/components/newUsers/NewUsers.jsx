import React, { useContext, useEffect } from 'react'
import { Button, Form } from 'react-bootstrap'
import { Context } from '../../../core/Context'
import { Container } from '../HOC/Container'

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
            <Container key={index}>
              <div key={index}>
                <div>
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
            </Container>
          ),
      )}
    </div>
  )
}
