// import the gql tagged template function
const { gql } = require("apollo-server-express");

// create our typeDefs
const typeDefs = gql`
  type User {
    _id: ID
    username: String
    email: String
    savedProducts: [Product]
  }

  type Product {
    _id: ID
    productPrice: Integral
    size: String
    colors: [String]
  }

  type Auth {
    token: ID!
    user: User
  }

  type Query {
    me: User
  }

  input savedProduct {
    description: String
    title: String
    bookId: String
    image: String
    link: String
    authors: [String]
  }

  type Mutation {
    login(email: String!, password: String!): Auth
    addUser(username: String!, email: String!, password: String!): Auth
    saveProduct(input: savedProducts!): User
    removeProduct(_id: ID!): User
  }
`;

module.exports = typeDefs;
