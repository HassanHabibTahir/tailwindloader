import mongoose from "mongoose";

const MONGO_URL = process.env.MONGO_URL || "";
const dbConnection = () =>
    new Promise((res, rej) => {
        mongoose.set("strictQuery", false);
        mongoose.set("bufferCommands", false);
        mongoose
            .connect(MONGO_URL)
            .then(() => {
                console.log("DATABASE IS CONNECTED :)");
                res("ok.!");
            })
            .catch(rej);
    });

export default dbConnection;
