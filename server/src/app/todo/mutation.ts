export const mutations = `#graphql
   CreateNote(note: CreateNotes!): Note
   DeleteNote(_id: ID!): Boolean
   updateNote(_id: ID!,input:CreateNotes!): Note
`;
