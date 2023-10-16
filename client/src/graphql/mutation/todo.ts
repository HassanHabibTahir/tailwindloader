import { request, gql } from "graphql-request";
export const CreateNoteMutation = gql`
  mutation Mutation($note: CreateNotes!) {
    CreateNote(note: $note) {
      note
    }
  }
`;
