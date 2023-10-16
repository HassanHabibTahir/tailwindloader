"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.types = void 0;
exports.types = `#graphql

   input CreateNotes {
     note: String!
    _id:String
     createdAt: String
     updatedAt: String
    }

     type Note {
     note:String
     _id:String
     createdAt: String
     updatedAt: String

    }

    
`;
