import { createContext, useState } from "react";
import Service from "../services/Service";

export const Context = createContext({});

export const ContextWrapper = ({ children }) => {
  const [user, setUser] = useState("");
  const [addressContract, setAddressContract] = useState(
    "FyYjv2vyaQ3a5PA293TiRJM1vDKsuismUBUTquVJDtao",
  );
  const [ref, setRef] = useState("");
  console.log(addressContract);

  const getRef = async (name) => {
    await Service.get({
      endpoint: `contracts/${addressContract}/REF_${name}`,
    }).then((el) => {
      console.log(el);
      if (el.error !== 304) {
        setRef(JSON.parse(el.value));
      }
    });
  };

  const login = async (name, password) => {
    const data = await Service.get({
      endpoint: `contracts/${addressContract}/USERS_${name}`,
    });
    console.log(data);
    if (
      JSON.parse(data.value).login === name &&
      JSON.parse(data.value).password === password
    ) {
      setUser(JSON.parse(data.value).login);
      getRef(JSON.parse(data.value).login);
    } else {
      alert("Неверные данные");
    }
  };

  const registration = async (name, password) => {
    await Service.post({
      endpoint: `transactions/signAndBroadcast`,
      params: JSON.stringify({
        contractId: `${addressContract}`,
        fee: 10,
        sender: "3NjpGwi1pr4Soak5QGYGp6H6HYUmUcmeiHk",
        password: "iduWZ1Ljz3KsnXdNsjjp4g",
        type: 104,
        params: [
          {
            type: "string",
            value: "addUser",
            key: "action",
          },
          {
            type: "string",
            value: JSON.stringify({
              login: name,
              password: password,
            }),
            key: "addUser",
          },
        ],
        version: 1,
        contractVersion: 1,
      }),
    });
  };
  const values = { login, addressContract, registration, user, ref, getRef };
  return <Context.Provider value={values}>{children}</Context.Provider>;
};
