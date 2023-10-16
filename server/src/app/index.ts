import { ApolloServer, BaseContext } from "@apollo/server";
import { expressMiddleware } from "@apollo/server/express4";
import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import { types } from "./todo/types";
import { queries } from "./todo/queries";
import { Note } from "./models";
import { mutations } from "./todo/mutation";
export let initServer = async () => {
    const app = express();
    app.use(bodyParser.json());
    app.use(cors());

    const graphqlServer = new ApolloServer({
        typeDefs: `
    ${types}
    type Query{
     ${queries}
    }
    type Mutation {
    ${mutations}
    }
    `,
        resolvers: {
            Query: {
                GetNotes: async (parent: any) => {
                    try {
                        let allNotes = await Note.find({});
                        return allNotes;
                    } catch (e) {
                        console.log(e, "===>");
                    }
                },
            },
            Mutation: {
                CreateNote: async (parent: any, args: any) => {
                    try {
                        if (args) {
                            const { note } = args;

                            const newNote = await Note.create(note);
                            return newNote;
                        }
                    } catch (error) {
                        console.error("Error creating note:", error);
                        throw new Error("An error occurred while creating the note.");
                    }
                },
                DeleteNote: async (parent: any, args: any) => {
                    const { _id } = args;
                    const newNote = await Note.findByIdAndDelete(_id);
                    return true;
                },
                updateNote: async (parent: any, args: any) => {
                    const { _id, input } = args;
                    const noteUpdate = await Note.findByIdAndUpdate(_id, input, { new: true });
                    return noteUpdate;
                },
            },
        },
    });
    await graphqlServer.start();
    app.use("/graphql", expressMiddleware(graphqlServer, {}));
    return app;
};
