"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mutations = void 0;
exports.mutations = `#graphql
   CreateNote(note: CreateNotes!): Note
   DeleteNote(_id: ID!): Boolean
   updateNote(_id: ID!,input:CreateNotes!): Note
`;
