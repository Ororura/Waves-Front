import { createContext, useState } from 'react'
import Service from '../services/Service'

export const Context = createContext({})

export const ContextWrapper = ({ children }) => {
  const addressContract = 'Eb5N82zAm48vfCEBihenCmEXrRdC8ETyLPmKcsQsecLp'
  //win 3Nd2TPQntAvrXN3TyCY1KQr5dYJRtm9akKW CxpkVeA3E1Rx-2lShWmqEg
  //mac 3NwAugvmn1pP9go99QKhcDaJEbEaKkG5KsY f8K7X6klVnBC_hSl3D7w9g
  const sender = '3NwAugvmn1pP9go99QKhcDaJEbEaKkG5KsY'
  const passwordSender = 'f8K7X6klVnBC_hSl3D7w9g'
  const contractId = 1
  const [user, setUser] = useState([])
  const [orders, setOrders] = useState([])
  const [newUsers, setNewUsers] = useState([])
  const [onCheckCard, setOnCheckCard] = useState([])
  const [products, setProducts] = useState([])

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

  const getProductCards = async () => {
    const data = await Service.get({ endpoint: `contracts/${addressContract}/__companyNames` })
    const parseData = JSON.parse(data.value)
    const productPromises = parseData.map(async el => {
      const response = await Service.get({ endpoint: `contracts/${addressContract}/COMPANY_${el}` })
      return JSON.parse(response.value)
    })
    const productsArray = await Promise.all(productPromises)
    setProducts(productsArray)
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

  const getOrderProd = async () => {
    await Service.get({
      endpoint: `contracts/${addressContract}/__orders`,
    }).then(data => {
      if (data.error !== 304) {
        setOrders(JSON.parse(data.value))
      }
    })
  }

  const formatOrder = async (id, amount, date) => {
    await Service.post({
      endpoint: 'transactions/signAndBroadcast',
      body: JSON.stringify({
        contractId: `${addressContract}`,
        fee: 0,
        sender: `${sender}`,
        password: `${passwordSender}`,
        type: 104,
        params: [
          {
            type: 'string',
            value: 'formatOrder',
            key: 'action',
          },
          {
            type: 'string',
            value: 'pasha',
            key: 'requester',
          },
          {
            type: 'string',
            value: `${id}`,
            key: 'id',
          },
          {
            type: 'string',
            value: `${amount}`,
            key: 'amount',
          },
          {
            type: 'string',
            value: `${date}`,
            key: 'date',
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
  const registration = async (name, password, role, region, supplyRegions, phone, company, suppDesc) => {
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
            value: `{ "login": "${name}", "password": "${password}", "role": "${role}", "balance": "100000", "phone": "${phone}", "region" : "${region}", "companyName": "${company}", "suppDesc": "${suppDesc}" }`,
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

  const blockUser = async (name, status) => {
    await Service.post({
      endpoint: 'transactions/signAndBroadcast',
      params: JSON.stringify({
        contractId: `${addressContract}`,
        fee: 0,
        sender: `${sender}`,
        password: `${passwordSender}`,
        type: 104,
        params: [
          {
            type: 'string',
            value: 'blockUser',
            key: 'action',
          },
          {
            type: 'string',
            value: `${name}`,
            key: 'userName',
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

  const createOrder = async (id, amount, date, price, company) => {
    await Service.post({
      endpoint: 'transactions/signAndBroadcast',
      params: JSON.stringify({
        contractId: `${addressContract}`,
        fee: 0,
        sender: `${sender}`,
        password: `${passwordSender}`,
        type: 104,
        params: [
          {
            type: 'string',
            value: 'createOrderProduction',
            key: 'action',
          },
          {
            type: 'string',
            value: `{"id": "${id}", "amount": "${amount}", "date": "${date}", "price": "${price}", "customer": "${user.login}", "company": "${company}"}`,
            key: 'product',
          },
        ],
        version: 2,
        contractVersion: contractId,
      }),
    })
  }

  const getApproveCard = async () => {
    await Service.get({ endpoint: `contracts/${addressContract}/onCheck_products` }).then(data => {
      if (data.error !== 304) {
        setOnCheckCard(JSON.parse(data.value))
      }
    })
  }

  const approveCard = async (company, id, approveStatus, min, max, dist) => {
    await Service.post({
      endpoint: 'transactions/signAndBroadcast',
      params: JSON.stringify({
        contractId: `${addressContract}`,
        fee: 0,
        sender: `${sender}`,
        password: `${passwordSender}`,
        type: 104,
        params: [
          {
            type: 'string',
            value: 'approveCard',
            key: 'action',
          },
          {
            type: 'string',
            value: `${company}`,
            key: 'product',
          },
          {
            type: 'string',
            value: `${id}`,
            key: 'regions',
          },
          {
            type: 'string',
            value: `${approveStatus}`,
            key: 'status',
          },
          {
            type: 'string',
            value: `${min}`,
            key: 'min',
          },
          {
            type: 'string',
            value: `${max}`,
            key: 'max',
          },
          {
            type: 'string',
            value: `${dist}`,
            key: 'distributors',
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

  const createCardProduct = async (productName, productDesc, regions) => {
    await Service.post({
      endpoint: 'transactions/signAndBroadcast',
      params: JSON.stringify({
        contractId: `${addressContract}`,
        fee: 0,
        sender: `${sender}`,
        password: `${passwordSender}`,
        type: 104,
        params: [
          {
            type: 'string',
            value: 'createShopCard',
            key: 'action',
          },
          {
            type: 'string',
            value: `{ "productName": "${productName}", "productDesc": "${productDesc}"}`,
            key: 'product',
          },
          {
            type: 'string',
            value: `${regions}`,
            key: 'regions',
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

  const approveCreateUser = async (id, status) => {
    return await Service.post({
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
    getProductCards,
    getApproveCard,
    approveCard,
    createCardProduct,
    createOrder,
    blockUser,
    approveCreateUser,
    getNewUsers,
    newUsers,
    getOrderProd,
    login,
    addressContract,
    registration,
    user,
    setUser,
    orders,
    onCheckCard,
    products,
    formatOrder,
  }
  return <Context.Provider value={values}>{children}</Context.Provider>
}
