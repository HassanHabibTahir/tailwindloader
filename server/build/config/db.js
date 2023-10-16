"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const MONGO_URL = process.env.MONGO_URL || "";
const dbConnection = () => new Promise((res, rej) => {
    mongoose_1.default.set("strictQuery", false);
    mongoose_1.default.set("bufferCommands", false);
    mongoose_1.default
        .connect(MONGO_URL)
        .then(() => {
        console.log("DATABASE IS CONNECTED :)");
        res("ok.!");
    })
        .catch(rej);
});
exports.default = dbConnection;
