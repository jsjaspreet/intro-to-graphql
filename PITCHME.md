---

# Intro to GraphQL

<img style="width: 200px; box-shadow: none; border: 0;" id="graphql-logo" src="http://graphql.org/img/logo.svg"/>

---

## Typical REST API

<img style="width: 700px; border: none; box-shadow: none;" src="https://olegilyenko.github.io/presentation-graphql-introduction/assets/img/rest-api.svg"/>

---

## Problems

- Over / Under Fetch |
  - endpoints giving too much/little data
- Documentation |
  - Swagger, RAML
  - code comments?
- Rigid |
    - versioning
    - frontend / backend coupling
    
---

## What is GraphQL?

GraphQL is a query language for your API and a runtime for fulfilling those queries with your existing data

---

## Describe your data

```
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
