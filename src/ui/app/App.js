import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import { Container } from "../components/HOC/Container";
import { ContextWrapper } from "../../core/Context";
import { Header } from "../components/HOC/Header";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { routes } from "../../constants/routes";

function App() {
  return (
    <BrowserRouter>
      <ContextWrapper>
        <Header>
          <Container>
            <Switch>
              {routes.map((el, idx) => (
                <Route
                  key={idx}
                  path={el.path}
                  component={el.component}
                  exact
                ></Route>
              ))}
            </Switch>
          </Container>
        </Header>
      </ContextWrapper>
    </BrowserRouter>
  );
}

export default App;
