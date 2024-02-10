import React, { useContext, useEffect } from "react";
import { Context } from "../../../core/Context";
import { Button, Form } from "react-bootstrap";

export const NewUsers = () => {
  const { getNewUsers, newUsers, user, approveCreateUser } =
    useContext(Context);

  useEffect(() => {
    (async () => {
      await getNewUsers();
    })();
  }, [getNewUsers]);

  const handleApproveNewUser = async (e, id) => {
    e.preventDefault();
    const { target } = e;
    await approveCreateUser(id, target.status.value);
  };

  return (
    <div>
      {user && user.role === "admin" && newUsers.status === "onCheck" && (
        <>
          <p style={{ textAlign: "center" }}>Новые пользователи</p>
          {newUsers.map((user, index) => (
            <div key={index}>
              <div
                style={{
                  backgroundColor: "purple",
                  color: "white",
                  fontSize: "25px",
                  borderRadius: "15px",
                  marginTop: "20px",
                  padding: "10px",
                  textAlign: "center",
                }}
              >
                <p>Логин: {user.login}</p>
                <p>Роль: {user.role}</p>
                <p>Компания: {user.companyName}</p>
                <p>Описание поставщика: {user.suppDesc}</p>
                <p>Номер телефона: {user.phone}</p>
                <p>Баланс: {user.balance}</p>
              </div>

              <Form
                onSubmit={(e) => {
                  handleApproveNewUser(e, index);
                }}
              >
                <Form.Group className="mb-3" controlId="status">
                  <Form.Select aria-label="Default select example">
                    <option value="true">Зарегистрировать</option>
                    <option value="false">Отказать</option>
                  </Form.Select>
                </Form.Group>
                <Button type="submit">Отправить</Button>
              </Form>
            </div>
          ))}
        </>
      )}
    </div>
  );
};
