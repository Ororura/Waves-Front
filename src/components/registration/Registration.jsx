import * as React from "react";
import { Button, Form } from "react-bootstrap";
import Service from "../../services/Service";
import { useContext } from "react";
import { Context } from "../../core/Context";

export const Registration = () => {
  const { registration } = useContext(Context);
  const handlerReg = async (e) => {
    e.preventDefault();
    const { target } = e;
    console.log(target.name.value);
    console.log(target.password.value);
    await registration(target.name.value, target.password.value);
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
