"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.initServer = void 0;
const server_1 = require("@apollo/server");
const express4_1 = require("@apollo/server/express4");
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
const cors_1 = __importDefault(require("cors"));
const types_1 = require("./todo/types");
const queries_1 = require("./todo/queries");
const models_1 = require("./models");
const mutation_1 = require("./todo/mutation");
let initServer = () => __awaiter(void 0, void 0, void 0, function* () {
    const app = (0, express_1.default)();
    app.use(body_parser_1.default.json());
    app.use((0, cors_1.default)());
    const graphqlServer = new server_1.ApolloServer({
        typeDefs: `
    ${types_1.types}
    type Query{
     ${queries_1.queries}
    }
    type Mutation {
    ${mutation_1.mutations}
    }
    `,
        resolvers: {
            Query: {
                GetNotes: (parent) => __awaiter(void 0, void 0, void 0, function* () {
                    try {
                        let allNotes = yield models_1.Note.find({});
                        return allNotes;
                    }
                    catch (e) {
                        console.log(e, "===>");
                    }
                }),
            },
            Mutation: {
                CreateNote: (parent, args) => __awaiter(void 0, void 0, void 0, function* () {
                    try {
                        if (args) {
                            const { note } = args;
                            const newNote = yield models_1.Note.create(note);
                            return newNote;
                        }
                    }
                    catch (error) {
                        console.error("Error creating note:", error);
                        throw new Error("An error occurred while creating the note.");
                    }
                }),
                DeleteNote: (parent, args) => __awaiter(void 0, void 0, void 0, function* () {
                    const { _id } = args;
                    const newNote = yield models_1.Note.findByIdAndDelete(_id);
                    return true;
                }),
                updateNote: (parent, args) => __awaiter(void 0, void 0, void 0, function* () {
                    const { _id, input } = args;
                    const noteUpdate = yield models_1.Note.findByIdAndUpdate(_id, input, { new: true });
                    return noteUpdate;
                }),
            },
        },
    });
    yield graphqlServer.start();
    app.use("/graphql", (0, express4_1.expressMiddleware)(graphqlServer, {}));
    return app;
});
exports.initServer = initServer;
