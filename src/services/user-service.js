import { httpService } from './http-service.js'
const ENDPOINT = 'auth'

export const userService = {
  login,
  signup,
  logout,
  addOrder,
  changeOrderStatus,
  getGuestUser,
  getHostUser,
}


async function login(cred) {
  return await httpService.post(ENDPOINT + '/login', cred)
}

async function signup(cred) {
  return await httpService.post(ENDPOINT + '/signup', cred)
}

async function logout() {
  return await httpService.post(ENDPOINT + '/logout')
}

function addOrder(order) {
  const user = getLoggedinUser();
  user.orders.unshift(order)
  debugger
  user.balance -= order.total
  storageService.store(STORAGE_KEY, user) 
  return Promise.resolve(order)
}

function changeOrderStatus(orderId, status) {
  const user = getLoggedinUser();
  const order = user.orders.find(order => order._id === orderId)
  order.status = status
  storageService.store(STORAGE_KEY, user) 
  return Promise.resolve(order)
}

function getGuestUser() {
  return {
    fullname: 'Guest User',
    username: 'guest',
    password: 'guest',
    isAdmin: true,
  }
}

function getHostUser() {
  return {
    fullname: 'Shaila & Alex',
    imgUrl: 'https://a0.muscache.com/im/users/6334250/profile_pic/1368287493/original.jpg?aki_policy=profile_small',
    username: 'guest',
    password: 'guest',
    isAdmin: true,
  }
}