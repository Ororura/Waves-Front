import "./App.css";
import { useEffect, useState } from "react";
import Service from "../../services/Service";
import { Button, Form } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.css";
import { Container } from "../HOC/Container";
import { Registration } from "../registration/Registration";
import { Ref } from "../ref/Ref";

function App() {
  const [suppData, setSuppData] = useState({});
  const [distData, setDistData] = useState({});

  return (
    <Container>
      <div className="App">
        <Registration />
        <Ref />
      </div>
    </Container>
  );
}

export default App;
