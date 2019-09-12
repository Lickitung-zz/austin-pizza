import { firebaseAction } from 'vuexfire'

const state = {
    orders: []
}

const getters = {
    getOrders: state => state.orders,
    numberOfOrders: state => state.orders.length
}

const mutations = {
    addOrder: (state, orders) => state.orders.push(orders)
}

const actions = {
    setOrdersRef: firebaseAction(({ bindFirebaseRef }, { ref }) => {
        // this will unbind any previously bound ref to 'todos'
        bindFirebaseRef('orders', ref)
        // you can unbind any ref easily
    })
}

export default {
    state,
    getters,
    mutations,
    actions
}