import "dotenv/config";
import { initServer } from "./app";
import dbConnection from "./config/db";

const { PORT } = process.env;

async function init() {
    await dbConnection();
    const app = initServer();

    (await app).listen(PORT, () => console.log(`server is started at PORT:${PORT}`));
}
init();
