import * as React from "react";
import { useContext, useState } from "react";
import { Button, Form } from "react-bootstrap";
import { Context } from "../../../core/Context";

export const Registration = () => {
  const { registration } = useContext(Context);
  const [checkBox, setCheckBox] = useState(false);
  const handlerReg = async (e) => {
    e.preventDefault();
    const { target } = e;
    await registration(
      target.name.value,
      target.password.value,
      target.role.value,
    );
    setCheckBox(true);
  };
  return (
    <div>
      {checkBox === false ? (
        <Form onSubmit={handlerReg}>
          <Form.Group className="mb-3" controlId="name">
            <Form.Label>Логин</Form.Label>
            <Form.Control type="text" placeholder="Введите логин" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="password">
            <Form.Label>Пароль</Form.Label>
            <Form.Control type="password" placeholder="Введите пароль" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="role">
            <Form.Label>Выберите роль</Form.Label>
            <Form.Select aria-label="Default select example">
              <option value="user">Пользователь</option>
              <option value="distributor">Дистрибутор</option>
              <option value="supplier">Поставщик</option>
            </Form.Select>
          </Form.Group>

          <Button type="submit">Зарегестрироваться</Button>
        </Form>
      ) : (
        <p>Ожидайте одобрения регистрации от оператора</p>
      )}
    </div>
  );
};
