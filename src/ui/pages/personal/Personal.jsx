import * as React from 'react'
import { GetOrderProduction } from '../../components/getOrderProduction/GetOrderProduction'
import { NewUsers } from '../../components/newUsers/NewUsers'
import { Products } from '../../components/products/Products'
import { UserData } from '../../components/userData/UserData'
import { BlockUser } from '../../components/blockUser/BlockUser'
import { useContext } from 'react'
import { Context } from '../../../core/Context'
import { CreateOrder } from '../../components/createOrder/CreateOrder'
import { CreateProduct } from '../../components/createProduct/CreateProduct'

export const Personal = () => {
  const { user } = useContext(Context)
  console.log(user.role)
  return (
    <div>
      <UserData></UserData>
      <CreateOrder></CreateOrder>
      <Products></Products>
      <GetOrderProduction></GetOrderProduction>
      {user.role === 'admin' && <NewUsers></NewUsers>}
      {user.role === 'admin' && <BlockUser></BlockUser>}
      {user.role === 'supplier' && <CreateProduct></CreateProduct>}
    </div>
  )
}
