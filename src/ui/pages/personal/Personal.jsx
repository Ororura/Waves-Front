import * as React from 'react'
import { GetOrderProduction } from '../../components/getOrderProduction/GetOrderProduction'
import { NewUsers } from '../../components/newUsers/NewUsers'
import { Products } from '../../components/products/Products'
import { UserData } from '../../components/userData/UserData'

export const Personal = () => {
  return (
    <div>
      <UserData></UserData>
      <Products></Products>
      <GetOrderProduction></GetOrderProduction>
      <NewUsers></NewUsers>
    </div>
  )
}
