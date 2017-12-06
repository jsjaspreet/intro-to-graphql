const db = require('./database');

const resolvers = {
  Store: {
    coupons: (store) => db.getCouponsForStore(store.id)
  },
  Query: {
    store: (_, { id }) => db.getStoreById(id),
  }
}

module.exports = resolvers