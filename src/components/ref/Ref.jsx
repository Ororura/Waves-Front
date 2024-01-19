import * as React from "react";
import { Button, Form } from "react-bootstrap";
import { useEffect, useState } from "react";
import Service from "../../services/Service";

export const Ref = () => {
  const [ref, setRef] = useState("");

  useEffect(() => {
    (async () => {
      await Service.getRef(
        "contracts",
        "H984HFW3o2Ku3hzU3TQGmUKXnMeKrHdNMgsx6XURBB6V",
        "Egor",
      ).then((el) => {
        if (el !== undefined) {
          setRef(el.data.value);
        }
      });
    })();
  }, []);

  return (
    <p>
      <p>Реферальный код: {ref} </p>
      <Form>
        <Form.Group className="mb-3" controlId="name">
          <Form.Label>Имя пользователя</Form.Label>
          <Form.Control type="text" placeholder="Введите имя" />
          <Button type="submit">asd</Button>
        </Form.Group>
      </Form>
    </p>
  );
};
