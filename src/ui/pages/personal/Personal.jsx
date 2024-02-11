import * as React from 'react'
import { GetOrderProduction } from '../../components/getOrderProduction/GetOrderProduction'
import { NewUsers } from '../../components/newUsers/NewUsers'
import { Products } from '../../components/products/Products'
import { UserData } from '../../components/userData/UserData'
import { BlockUser } from '../../components/blockUser/BlockUser'
import { useContext } from 'react'
import { Context } from '../../../core/Context'

export const Personal = () => {
  const { user } = useContext(Context)
  return (
    <div>
      <UserData></UserData>
      <Products></Products>
      <GetOrderProduction></GetOrderProduction>
      {user.role === 'admin' && <NewUsers></NewUsers>}
      {user.role === 'admin' && <BlockUser></BlockUser>}
    </div>
  )
}
