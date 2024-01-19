import "./App.css";
import { useEffect, useState } from "react";
import Service from "../../services/Service";
import { Button, Form } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.css";
import { Container } from "../HOC/Container";
import { Registration } from "../registration/Registration";
import { Ref } from "../ref/Ref";
import { Login } from "../login/Login";
import { ContextWrapper } from "../../core/Context";

function App() {
  const [suppData, setSuppData] = useState({});
  const [distData, setDistData] = useState({});

  return (
    <ContextWrapper>
      <Container>
        <div className="App">
          <Registration />
          <Ref />
          <Login />
        </div>
      </Container>
    </ContextWrapper>
  );
}

export default App;
