import * as React from 'react';
import { GetOrderProduction } from '../../components/getOrderProduction/GetOrderProduction';
import { NewUsers } from '../../components/newUsers/NewUsers';
import { Products } from '../../components/products/Products';
import { UserData } from '../../components/userData/UserData';
import { BlockUser } from '../../components/blockUser/BlockUser';
import { useContext, useEffect } from 'react';
import { Context } from '../../../core/Context';
import { CreateOrder } from '../../components/createOrder/CreateOrder';
import { CreateProduct } from '../../components/createProduct/CreateProduct';
import { ApproveProductCard } from '../../components/approveProductCard/ApproveProductCard';
import { useHistory } from 'react-router-dom';
import { GetProductCards } from '../../components/getProductCards/GetProductCards';
import { FormatOrder } from '../../components/formatOrder/FormatOrder';
import { AcceptOrder } from '../../components/acceptOrder/AcceptOrder';
import { CollectProduct } from '../../components/collectProduct/CollectProduct';

export const Personal = () => {
  const { user } = useContext(Context);
  const nav = useHistory();

  useEffect(() => {
    if (!user.login) {
      nav.push('/');
    }
  }, []);
  return (
    <div>
      <UserData></UserData>
      <CreateOrder></CreateOrder>
      <GetProductCards></GetProductCards>
      <Products></Products>
      <GetOrderProduction></GetOrderProduction>
      {user.role === 'admin' && <NewUsers></NewUsers>}
      {user.role === 'admin' && <BlockUser></BlockUser>}
      {user.role === 'supplier' && <CreateProduct></CreateProduct>}
      {user.role === 'admin' && <ApproveProductCard></ApproveProductCard>}
      {user.role === 'distributor' && <FormatOrder></FormatOrder>}
      <AcceptOrder></AcceptOrder>
      <CollectProduct></CollectProduct>
    </div>
  );
};
