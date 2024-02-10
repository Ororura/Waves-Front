import { Main } from "../ui/pages/main/Main";
import { Personal } from "../ui/pages/personal/Personal";
import { Login } from "../ui/pages/login/Login";
import { Registration } from "../ui/pages/registration/Registration";

export const routes = [
  {
    path: "/",
    component: Main,
  },
  { path: "/personal", component: Personal },
  { path: "/login", component: Login },
  { path: "/registration", component: Registration },
];
