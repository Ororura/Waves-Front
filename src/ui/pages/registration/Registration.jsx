import * as React from 'react';
import { useContext, useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { Context } from '../../../core/Context';
import { Container } from '../../components/HOC/Container';

export const Registration = () => {
  const { registration } = useContext(Context);
  const [checkBox, setCheckBox] = useState(false);
  const [role, setRole] = useState('user');
  const handlerReg = async e => {
    e.preventDefault();
    const { target } = e;
    await registration(
      target.name.value,
      target.password.value,
      target.role.value,
      target.region.value,
      target.company?.value || 'null',
      target.phone.value,
      target.company?.value || 'null',
      target.companyDesc?.value || 'null',
    );
    setCheckBox(true);
  };

  return (
    <Container>
      <div>
        {checkBox === false ? (
          <Form onSubmit={handlerReg}>
            <Form.Label>Зарегестрироваться</Form.Label>
            <Form.Control className='mb-3' name='name' placeholder='Введите логин' />
            <Form.Control className='mb-3' name='password' type='password' placeholder='Введите пароль' />
            <Form.Label>Пример ввода: США</Form.Label>
            <Form.Control className='mb-3' name='region' placeholder='Введите ваш регион доставки' />
            <Form.Control className='mb-3' name='phone' type='phone' placeholder='Введите ваш номер телефона' />
            <Form.Label>Выберите роль</Form.Label>
            <Form.Select
              className='mb-3'
              name='role'
              onChange={e => {
                setRole(e.target.value);
              }}
            >
              <option value='user'>Пользователь</option>
              <option value='distributor'>Дистрибутор</option>
              <option value='supplier'>Поставщик</option>
            </Form.Select>
            {role === 'distributor' && (
              <>
                <Form.Label>Пример ввода: ИНДИЯ,США,КИТАЙ</Form.Label>
                <Form.Control className='mb-3' name='regions' placeholder='Введите регионы доставки' />
              </>
            )}
            {(role === 'distributor' || role === 'supplier') && (
              <>
                <Form.Control className='mb-3' name='company' placeholder='Введите название компании' />
                <Form.Control className='mb-3' name='companyDesc' placeholder='Введите описание компании' />
              </>
            )}
            <Button type='submit'>Зарегистрироваться</Button>
          </Form>
        ) : (
          <p>Ожидайте одобрения регистрации от оператора</p>
        )}
      </div>
    </Container>
  );
};
