import * as React from 'react';
import { useContext } from 'react';
import { Context } from '../../../core/Context';
import { Container } from '../HOC/Container';

export const UserData = () => {
  const { user } = useContext(Context);
  return (
    <Container>
      <div>
        <p>Данные пользователя</p>
        <p>Логин: {user.login}</p>
        <p>Роль: {user.role}</p>
        <p>Компания: {user.companyName}</p>
        <p>Описание компании: {user.suppDesc}</p>
        <p>Номер телефона: {user.phone}</p>
        <p>Баланс: {user.balance}</p>
      </div>
    </Container>
  );
};
