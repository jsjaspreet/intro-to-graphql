---

# Intro to GraphQL

<img style="width: 200px; box-shadow: none; border: 0;" id="graphql-logo" src="http://graphql.org/img/logo.svg"/>

---

## Typical REST API

<img style="width: 700px; border: none; box-shadow: none;" src="https://olegilyenko.github.io/presentation-graphql-introduction/assets/img/rest-api.svg"/>

Note:  
- usually an arbitrary endpoint, in the wild most APIs are not truly RESTful
- no standard way to control output of the endpoint
    - do you make another endpoint? special query params?

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

Note:
- graphql itself is just a spec, countless implementations of graphql in many languages (python -> graphene)
    - main implementation just happens to be js 
    - GraphQL was originally created in 2012 at Facebook
---

## Describe your data

```
type Coupon {
  storeId: ID!
  code: String!
}

type Store {
  id: ID!
  name: String!
  coupons: [Coupon]
}
```

Note:
- `!` implies non-nullable
- square bracket notation implies array

---

## Ask for what you want

```javascript
{
  store(id: "200") {
    name
    coupons {
      code
    }
  }
}
```

---

## Get predictable results

```javascript
{
  "store": {
    "name": "Macy's"
    "coupons": [
      {
        code: "10-OFF"
      },
      {
        code: "20-OFF"
      }
    ]
  }
}
```

---

## Demo !

---

## Topics I didn't cover

- mutations
- caching
- authentication
- schema-stitching
- apollo / relay

