import * as React from "react";
import { Products } from "../../components/products/Products";
import { UserData } from "../../components/userData/UserData";
import { GetOrderProduction } from "../../components/getOrderProduction/GetOrderProduction";
import { NewUsers } from "../../components/newUsers/NewUsers";

export const Personal = () => {
  return (
    <div>
      <UserData></UserData>
      <Products></Products>
      <GetOrderProduction></GetOrderProduction>
      <NewUsers></NewUsers>
    </div>
  );
};
