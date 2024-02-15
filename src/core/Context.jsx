import { createContext, useState } from 'react';
import Service from '../services/Service';

export const Context = createContext({});

export const ContextWrapper = ({ children }) => {
  const [user, setUser] = useState([]);
  const [orders, setOrders] = useState([]);
  const [newUsers, setNewUsers] = useState([]);
  const [onCheckCard, setOnCheckCard] = useState([]);
  const [shopProducts, setShopProducts] = useState([]);
  const [userProducts, setUserProducts] = useState([]);

  const login = async (name, password) => {
    await Service.get(`USERS_${name}`).then(el => {
      if (el.error !== 304) {
        el = JSON.parse(el.value);
        if (el.login === name && el.password === password) {
          setUser(el);
        } else {
          alert('Неверные данные');
        }
      } else {
        alert('Такого пользователя нет');
      }
    });
  };

  const getProductCards = async () => {
    const data = await Service.get('__companyNames');
    const parseData = JSON.parse(data.value);
    const productPromises = parseData.map(async el => {
      const response = await Service.get(`COMPANY_${el}`);
      return JSON.parse(response.value);
    });
    const productsArray = await Promise.all(productPromises);
    setShopProducts(productsArray);
  };

  const getUserProducts = async () => {
    await Service.get(`USERS_PRODUCT_${user.login}`).then(data => {
      if (data.error !== 304) {
        setUserProducts(JSON.parse(data.value));
      }
    });
  };
  const getNewUsers = async () => {
    await Service.get('__USERS').then(el => {
      if (el.error !== 304) {
        setNewUsers(JSON.parse(el.value));
      }
    });
  };
  const getApproveCard = async () => {
    await Service.get('onCheck_products').then(data => {
      if (data.error !== 304) {
        setOnCheckCard(JSON.parse(data.value));
      }
    });
  };

  const getOrderProd = async () => {
    await Service.get('__orders').then(data => {
      if (data.error !== 304) {
        setOrders(JSON.parse(data.value));
      }
    });
  };

  const acceptOrder = async (orderId, statusOrder) => {
    await Service.post([
      {
        type: 'string',
        value: 'acceptOrder',
        key: 'action',
      },
      {
        type: 'string',
        value: `${orderId}`,
        key: 'order',
      },
      {
        type: 'string',
        value: `${statusOrder}`,
        key: 'status',
      },
      {
        type: 'string',
        value: `${user.login}`,
        key: 'sender',
      },
    ]);
  };

  const formatOrder = async (id, amount, date) => {
    await Service.post([
      {
        type: 'string',
        value: 'formatOrder',
        key: 'action',
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
    ]);
  };
  const registration = async (
    name,
    password,
    role,
    region,
    supplyRegions = 'null',
    phone,
    company = 'null',
    suppDesc = 'null',
  ) => {
    await Service.post([
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
        value: supplyRegions,
        key: 'supplyRegions',
      },
    ]);
  };

  const blockUser = async (name, status) => {
    await Service.post([
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
    ]);
  };

  const createOrder = async (id, amount, date, price, company, preorder) => {
    await Service.post([
      {
        type: 'string',
        value: 'createOrderProduction',
        key: 'action',
      },
      {
        type: 'string',
        value: `{"id": "${id}", "amount": "${amount}", "date": "${date}", "price": "${price}", "customer": "${user.login}", "company": "${company}", "preOrder": "${preorder}"}`,
        key: 'product',
      },
    ]);
  };

  const approveCard = async (company, id, approveStatus, min, max, dist) => {
    await Service.post([
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
    ]);
  };

  const createCardProduct = async (productName, productDesc, regions) => {
    await Service.post([
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
    ]);
  };

  const approveCreateUser = async (id, status) => {
    return await Service.post([
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
    ]);
  };

  const collectProduct = async orderId => {
    await Service.post([
      {
        type: 'string',
        value: 'collectProduct',
        key: 'action',
      },
      {
        type: 'string',
        value: `${orderId}`,
        key: 'orderId',
      },
      {
        type: 'string',
        value: `${user.login}`,
        key: 'sender',
      },
    ]);
  };

  const values = {
    getUserProducts,
    acceptOrder,
    getProductCards,
    getApproveCard,
    approveCard,
    createCardProduct,
    createOrder,
    blockUser,
    approveCreateUser,
    getNewUsers,
    getOrderProd,
    login,
    registration,
    formatOrder,
    collectProduct,
    user,
    newUsers,
    setUser,
    orders,
    onCheckCard,
    shopProducts,
    userProducts,
  };
  return <Context.Provider value={values}>{children}</Context.Provider>;
};
