import { createContext, useState } from 'react'
import Service from '../services/Service'

export const Context = createContext({})

export const ContextWrapper = ({ children }) => {
  const addressContract = 'EQEqZQAok3Abdbx3zRCC6GRbQCV1wiBfGNQPGdbkUcxi'
  //win 3Nd2TPQntAvrXN3TyCY1KQr5dYJRtm9akKW CxpkVeA3E1Rx-2lShWmqEg
  //mac 3NwAugvmn1pP9go99QKhcDaJEbEaKkG5KsY f8K7X6klVnBC_hSl3D7w9g
  const sender = '3Nd2TPQntAvrXN3TyCY1KQr5dYJRtm9akKW'
  const passwordSender = 'CxpkVeA3E1Rx-2lShWmqEg'
  const contractId = 1
  const [user, setUser] = useState([])
  const [orders, setOrders] = useState([])
  const [newUsers, setNewUsers] = useState([])

  const login = async (name, password) => {
    await Service.get({
      endpoint: `contracts/${addressContract}/USERS_${name}`,
    }).then(el => {
      if (el.error !== 304) {
        el = JSON.parse(el.value)
        if (el.login === name && el.password === password) {
          setUser(el)
        } else {
          alert('Неверные данные')
        }
      } else {
        alert('Такого пользователя нет')
      }
    })
  }

  const registration = async (name, password, role, region, supplyRegions) => {
    await Service.post({
      endpoint: `transactions/signAndBroadcast`,
      params: JSON.stringify({
        contractId: `${addressContract}`,
        fee: 0,
        sender: `${sender}`,
        password: `${passwordSender}`,
        type: 104,
        params: [
          {
            type: 'string',
            value: 'createAccount',
            key: 'action',
          },
          {
            type: 'string',
            value: `{ "login": "${name}", "password": "${password}", "role": "${role}", "balance": "100000", "phone": "+78005553535", "region" : "${region}" }`,
            key: 'user',
          },
          {
            type: 'string',
            value: `${supplyRegions}`,
            key: 'supplyRegions',
          },
        ],
        version: 2,
        contractVersion: contractId,
      }),
    })
  }

  const getOrder = async login => {
    await Service.get({
      endpoint: `contracts/${addressContract}/ORDER_PRODUCTION_${login}`,
    }).then(el => {
      if (el.error !== 304) {
        setOrders(JSON.parse(el.value))
      }
    })
  }

  const getNewUsers = async () => {
    await Service.get({
      endpoint: `contracts/${addressContract}/__USERS`,
    }).then(el => {
      if (el.error !== 304) {
        setNewUsers(JSON.parse(el.value))
      }
    })
  }

  const approveCreateUser = async (id, status) => {
    await Service.post({
      endpoint: `transactions/signAndBroadcast`,
      params: JSON.stringify({
        contractId: `${addressContract}`,
        fee: 0,
        sender: `${sender}`,
        password: `${passwordSender}`,
        type: 104,
        params: [
          {
            type: 'string',
            value: 'approveCreateUser',
            key: 'action',
          },
          {
            type: 'string',
            value: `${id}`,
            key: 'id',
          },
          {
            type: 'string',
            value: `${status}`,
            key: 'status',
          },
          {
            type: 'string',
            value: `${user.login}`,
            key: 'sender',
          },
        ],
        version: 2,
        contractVersion: contractId,
      }),
    })
  }

  const values = {
    approveCreateUser,
    getNewUsers,
    newUsers,
    getOrder,
    login,
    addressContract,
    registration,
    user,
    setUser,
    orders,
  }
  return <Context.Provider value={values}>{children}</Context.Provider>
}
