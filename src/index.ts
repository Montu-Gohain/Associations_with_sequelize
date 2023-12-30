import http from "http";
import express, { Request, Response } from "express";
import cors from "cors";
import bodyParser from "body-parser";
import compression from "compression";
import * as dotenv from "dotenv";
import db_connect from "./db/connection_&_models";
import routes from "./routes";
import morgan from "morgan";

dotenv.config();
db_connect();

const app = express();

app.use(cors({ credentials: true }));
app.use(compression());
app.use(bodyParser.json());
app.use(morgan("tiny"));

const server = http.createServer(app);

const PORT = process.env.PORT;

server.listen(PORT, () =>
  console.log(`Server is running at http://127.0.0.1:${PORT}`)
);

// Todo : Let's attach some routes

app.get("/", (req: Request, res: Response) => {
  res.send({
    success: true,
    msg: "Welcome to My Express Server 🏠🚀🔥",
  });
});

app.use("/api", routes());
