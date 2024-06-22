import dotenv from "dotenv";
import path from "path";
const { NODE_ENV } = process.env;
dotenv.config({
  path:
    NODE_ENV === "local"
      ? path.join(__dirname, "..", ".env.local")
      : path.join(__dirname, "..", ".env.prod"),
});
