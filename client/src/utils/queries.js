import { gql } from "@apollo/client";

export const QUERY_PRODUCTS = gql`
  query getProducts($category: ID) {
    products(category: $category) {
      _id
      name
      description
      price
      quantity
      image
      category {
        _id
      }
    }
  }
`;

export const QUERY_MINOR = gql`
  query MinorRegs($state: String!) {
    minorRegs(state: $state) {
      _id
      state
      minorRegulations {
        parental_consent_required
        judicial_bypass_available
        below_age
        parents_required
        allow_minor_to_consent
      }
    }
  }
`;

export const QUERY_GESTATION = gql`
  query GestationRegs($state: String!) {
    gestationRegs(state: $state) {
      _id
      state
      gestationalRegulations {
        banned_after_weeks_since_LMP
        exception_life
        exception_health
        exception_rape_or_incest
        exception_fetal
      }
    }
  }
`;

export const QUERY_WAITING = gql`
  query WaitingRegs($state: String!) {
    waitingRegs(state: $state) {
      _id
      state
      waitingPeriodRegulations {
        waiting_period_hours
        counseling_visits
        exception_health
        waiting_period_notes
      }
    }
  }
`;

export const QUERY_INSURANCE = gql`
  query InsuranceRegs($state: String!) {
    insuranceRegs(state: $state) {
      _id
      state
      insuranceRegulations {
        requires_coverage
        private_coverage_no_restriction
        private_exception_life
        private_exception_health
        private_exception_fetal
        private_exception_rape_or_incest
        exchange_coverage_no_restrictions
        medicaid_coverage_provider_patient_decision
        exchange_forbids_coverage
        exchange_exception_rape_or_incest
        medicaid_exception_rape_or_incest
        medicaid_exception_life
        exchange_exception_life
        exchange_exception_health
        medicaid_exception_fetal
      }
    }
  }
`;

export const QUERY_CHECKOUT = gql`
  query getCheckout($products: [ID]!) {
    checkout(products: $products) {
      session
    }
  }
`;

export const QUERY_ALL_PRODUCTS = gql`
  {
    products {
      _id
      name
      description
      price
      quantity
      category {
        name
      }
    }
  }
`;

export const QUERY_CATEGORIES = gql`
  {
    categories {
      _id
      name
    }
  }
`;

export const QUERY_USER = gql`
  {
    user {
      firstName
      lastName
      orders {
        _id
        purchaseDate
        products {
          _id
          name
          description
          price
          quantity
          image
        }
      }
    }
  }
`;
