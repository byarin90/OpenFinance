import express, { Express, Request, Response } from "express";
import { config } from "dotenv";
import bodyParser from "body-parser";
import cors from "cors";
import { routesInit } from "./routes/routesConfig.routes";
import { SECRET } from "./configuration/secret";
import cookieParser from "cookie-parser";

const app: Express = express();

config();
app.use(
  cors({
    origin: "http://localhost:5173", 
    credentials: true,
  })
);

app.use(cookieParser())
app.use(
  bodyParser.urlencoded({
    extended: false,
  })
);

app.use(bodyParser.json());

routesInit(app)

app.listen(SECRET.APP_PORT, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${SECRET.APP_PORT}`);
});




