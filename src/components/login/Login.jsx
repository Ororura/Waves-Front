import * as React from "react";
import Service from "../../services/Service";
import { Button, Form } from "react-bootstrap";
import { useContext } from "react";
import { Context } from "../../core/Context";

export const Login = () => {
  const { login, getRef } = useContext(Context);
  const handlerLog = async (e) => {
    e.preventDefault();
    const { target } = e;
    await login(target.name.value, target.password.value);
  };
  return (
    <div>
      <Form onSubmit={handlerLog}>
        <Form.Label>Авторизоваться</Form.Label>
        <Form.Group className="mb-3" controlId="name">
          <Form.Label>Логин</Form.Label>
          <Form.Control type="text" placeholder="Введите логин" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="password">
          <Form.Label>Пароль</Form.Label>
          <Form.Control type="password" placeholder="Введите пароль" />
        </Form.Group>
        <Button type="submit">Авторизоваться</Button>
      </Form>
    </div>
  );
};
