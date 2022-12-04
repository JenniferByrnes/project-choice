const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type Category {
    _id: ID
    name: String
  }

  type Product {
    _id: ID
    name: String
    description: String
    image: String
    quantity: Int
    price: Float
    category: Category
  }

  type Order {
    _id: ID
    purchaseDate: String
    products: [Product]
  }

  type User {
    _id: ID
    email: String
    orders: [Order]
  }

  type StateMinor {
    state: String
    parental_consent_required: Boolean
    judicial_bypass_available: Boolean
    below_age: Int
    parents_required: Int
    allow_minor_to_consent: Boolean
  }

  type StateGestational {
    state: String
    banned_after_weeks_since_LMP: Int
    exception_life: Boolean
    exception_health: String
    exception_rape_or_incest: Boolean
    exception_fetal: String
  }

  type StateWaitingPeriod {
    state: String
    waiting_period_hours: Int
    counseling_visits: Int
    exception_health: String
    waiting_period_notes: String
  }

  type StateInsurance {
    state: String
    requires_coverage: Boolean
    private_coverage_no_restriction: Boolean
    private_exception_life: Boolean
    private_exception_health: String
    private_exception_fetal: String
    private_exception_rape_or_incest: Boolean
    exchange_coverage_no_restrictions: Boolean
    medicaid_coverage_provider_patient_decision: Boolean
    exchange_forbids_coverage: Boolean
    exchange_exception_rape_or_incest: Boolean
    medicaid_exception_rape_or_incest: Boolean
    medicaid_exception_life: Boolean
    exchange_exception_life: Boolean
    exchange_exception_health: String
    medicaid_exception_fetal: String
  }

  type Checkout {
    session: ID
  }

  type Auth {
    token: ID
    user: User
  }

  type Query {
    categories: [Category]
    products(category: ID, name: String): [Product]
    product(_id: ID!): Product
    user: User
    order(_id: ID!): Order
    checkout(products: [ID]!): Checkout
    stateminor: [StateMinor]
    stategestational: [StateGestational]
    statewaitingperiod: [StateWaitingPeriod]
    stateinsurance: [StateInsurance]
  }

  type Mutation {
    addUser(email: String!, password: String!): Auth
    addOrder(products: [ID]!): Order
    updateUser(email: String, password: String): User
    updateProduct(_id: ID!, quantity: Int!): Product
    login(email: String!, password: String!): Auth
  }
`;

module.exports = typeDefs;
