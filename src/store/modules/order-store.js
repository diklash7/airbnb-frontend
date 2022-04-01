import { orderService } from '../../services/order-service'

export default {
    state: {
        orders: null,
    },
    getters: {
        orders(state) {
            return state.orders
        },
    },
    mutations: {
        setOrders(state, { orders }) {
            state.orders = orders
        },
        addOrder(state, { order }) {
            state.orders.unshift(order)
        },
    },
    actions: {
        async getOrders({ commit }, { filterBy }) {
            try {
                const orders = await orderService.query(filterBy)
                commit({ type: 'setOrders', orders })
                console.log('orders from Store:', orders);
                return orders
            } catch (err) {
                // console.log('err :>> ', err)
            }
        },
        async addOrder({ commit }, { order }) {
            try {
                const addedOrder = await orderService.addOrder(order)
                commit({ type: 'addOrder', order: addedOrder })
            } catch (err) {
                console.log('err :>> ', err)
            }
        },
    },
}