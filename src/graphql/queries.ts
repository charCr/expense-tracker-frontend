// graphql/queries.js

import { gql } from "@apollo/client";

export const GET_EXPENSES = gql`
  query GetExpenses {
    expenses {
      id
      amount
      description
      date
      category {
        id
        name
      }
    }
  }
`;
