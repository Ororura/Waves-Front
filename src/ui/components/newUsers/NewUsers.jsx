import React, { useContext, useEffect } from 'react';
import { Button, Card, Form } from 'react-bootstrap';
import { Context } from '../../../core/Context';
import { Container } from '../HOC/Container';

export const NewUsers = () => {
  const { getNewUsers, user, newUsers, approveCreateUser } = useContext(Context);

  const handleApproveNewUser = async (e, id) => {
    e.preventDefault();
    const { target } = e;
    const data = await approveCreateUser(id, target.status.value);
    if (data) {
      setTimeout(async () => {
        await getNewUsers();
      }, 5000);
    }
  };

  useEffect(() => {
    (async () => {
      await getNewUsers();
    })();
  }, []);

  return (
    <>
      {newUsers.map(
        (elUser, index) =>
          elUser &&
          user.role === 'admin' &&
          elUser.status === 'onCheck' && (
            <Container key={index}>
              <p style={{ textAlign: 'center' }}>Новый пользователь</p>
              <p>Логин: {elUser.login}</p>
              <p>Роль: {elUser.role}</p>
              <p>Компания: {elUser.companyName}</p>
              <p>Описание поставщика: {elUser.suppDesc}</p>
              <p>Номер телефона: {elUser.phone}</p>
              <p>Баланс: {elUser.balance}</p>
              <Form
                onSubmit={e => {
                  handleApproveNewUser(e, index);
                }}
              >
                <Form.Select className='mb-3' name='status'>
                  <option value='true'>Зарегистрировать</option>
                  <option value='false'>Отказать</option>
                </Form.Select>
                <Button type='submit'>Отправить</Button>
              </Form>
            </Container>
          ),
      )}
    </>
  );
};
