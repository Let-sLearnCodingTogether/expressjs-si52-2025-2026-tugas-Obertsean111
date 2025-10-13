import express from "express";

import web from "./routes/web.js";
import api from "./routes/api.js";
import { database } from "./config/database.js";

const app = express();

app.use(express.json());

app.use(express.static("public"));

app.get("/", (req, res) => {});

app.use(web);
app.use("/api", api);

app.listen(3000, () => {
    database();
    console.log(`Aplikasi sedang berjalan di http://localhost:3000`);
});