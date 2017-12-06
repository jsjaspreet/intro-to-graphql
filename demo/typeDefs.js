const typeDefs = `
  type Coupon {
    # coupon id
    id: ID!
    # coupon code
    code: String!
    # store this coupon will work on
    storeId: ID!
  }
  
  type Store {
    # store id
    id: ID!
    # store name
    name: String!
    # list of active coupons that work for this store
    coupons: [Coupon]
  }
  
  type Query {
    # retrieves a store by store id
    store(id: ID!): Store
  }
`

module.exports = typeDefs