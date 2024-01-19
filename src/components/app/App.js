import "./App.css";
import { useEffect, useState } from "react";
import Service from "../../services/Service";
import { Button, Form } from "react-bootstrap";

function App() {
  const [suppData, setSuppData] = useState({});
  const [distData, setDistData] = useState({});
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

  const handlerReg = async (e) => {
    e.preventDefault();
    const { target } = e;
    await Service.createUser(target.name.value);
  };
  return (
    <div className="App">
      <p>Реферальный код: {ref} </p>

      <Form onSubmit={handlerReg}>
        <Form.Group className="mb-3" controlId="name">
          <Form.Label>Имя пользователя</Form.Label>
          <Form.Control type="text" placeholder="Введите имя" />
          <Button type="submit">Зарегестрироваться</Button>
        </Form.Group>
      </Form>
    </div>
  );
}

export default App;
