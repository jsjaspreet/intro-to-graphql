const coupons = [
  {
    id: "1",
    code: "10-off",
    storeId: "200"
  },
  {
    id: "2",
    code: "20-off",
    storeId: "200"
  }
];

const stores = [
  {
    id: "200",
    name: "Macy's"
  }
];

const db = {
  getStoreById(id) {
    console.log("Getting store for id : ", id);
    return stores.find(store => store.id === id);
  },
  getCouponsForStore(storeId) {
    console.log("Getting coupons for storeId : ", storeId);
    return coupons.filter(coupon => coupon.storeId === storeId);
  }
};


module.exports = db
