---

# Intro to

![GraphQL](https://cdn-images-1.medium.com/max/1000/1*IvCDlfi3vQfgyKO1eFv4jA.png)

---

## What is GraphQL?

GraphQL is a query language for your API and a runtime for fulfilling those queries with your existing data

---

## Describe your data

```graphql
type Store {
  id: ID!
  name: String
  coupons: [Coupon]
}
```

---

## Ask for what you want

```javascript
{
  store(id: "200") {
    name
  }
}
```

---

## Get predictable results

```javascript
{
  "store": {
    "name": "Macy's"
  }
}
```

---

The End :)
