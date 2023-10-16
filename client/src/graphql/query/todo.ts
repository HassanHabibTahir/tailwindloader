import { gql } from "graphql-request";
export const getAllNotes = gql`
  query Query {
    GetNotes {
      note
      _id
      createdAt
      updatedAt
    }
  }
`;
