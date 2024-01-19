import * as React from "react";
import { Button, Form } from "react-bootstrap";
import { useContext, useEffect, useState } from "react";
import Service from "../../services/Service";
import { Context } from "../../core/Context";

export const Ref = () => {
  const { addressContract, user, ref, getRef } = useContext(Context);
  const handlerCreateRef = async (e) => {
    e.preventDefault();
    await Service.post({
      endpoint: "transactions/signAndBroadcast",
      params: JSON.stringify({
        contractId: `${addressContract}`,
        fee: 10,
        sender: "3NjpGwi1pr4Soak5QGYGp6H6HYUmUcmeiHk",
        password: "iduWZ1Ljz3KsnXdNsjjp4g",
        type: 104,
        params: [
          {
            type: "string",
            value: "createRef",
            key: "action",
          },
          {
            type: "string",
            value: JSON.stringify({
              name: "PROFI",
              userLogin: user,
              discount: "0",
            }),
            key: "createRef",
          },
        ],
        version: 2,
        contractVersion: 1,
      }),
    });
    setTimeout(getRef(user), 5000);
  };

  useEffect(() => {
    (async () => {
      await getRef();
    })();
  }, []);

  return (
    <div>
      <p>Реферальный код: {ref.name} </p>
      <p>Процент скидки: {ref.discount} </p>
      {ref === "" && <Button type="submit">Создать новый реферал</Button>}
      <Button onClick={handlerCreateRef}>Создать реферал</Button>
    </div>
  );
};
