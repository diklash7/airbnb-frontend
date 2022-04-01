import { httpService } from './http-service'

const ENDPOINT = 'order'

export const orderService = {
  query,
  addOrder,
  getEmptyOrder,
}

async function query(filterBy) {
  return await httpService.get(ENDPOINT, filterBy)
}

async function addOrder(order) {
  return await httpService.post(ENDPOINT, order)
}

function getEmptyOrder(booker, imgUrl, stay, tripDates, nights, guests, amount) {
  return Promise.resolve({
    date: `${Date.now().getDay()}/${Date.now().getMonth()}/${Date.now().getFullYear()}`,
    booker: booker,
    imgUrl: imgUrl,
    stay: stay,
    tripDates: tripDates,
    nights: nights,
    guests: guests,
    amount: amount,
    status: 'pending'
  })
}
