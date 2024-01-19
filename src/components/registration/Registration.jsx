import * as React from "react";
import { Button, Form } from "react-bootstrap";
import Service from "../../services/Service";

export const Registration = () => {
  const handlerReg = async (e) => {
    e.preventDefault();
    const { target } = e;
    console.log(target.name.value);
    console.log(target.password.value);
    await Service.createUser(target.name.value, target.password.value);
  };
  return (
    <div>
      <Form onSubmit={handlerReg}>
        <Form.Group className="mb-3" controlId="name">
          <Form.Label>Логин</Form.Label>
          <Form.Control type="text" placeholder="Введите логин" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="password">
          <Form.Label>Пароль</Form.Label>
          <Form.Control type="password" placeholder="Введите пароль" />
        </Form.Group>
        <Button type="submit">Зарегестрироваться</Button>
      </Form>
    </div>
  );
};
