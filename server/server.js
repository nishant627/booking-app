import express from "express";
import cors from "cors";
import "dotenv/config";

const app = express();

const port = 3000;

//middleware

app.use(express.json());
app.use(cors());

//first api routes

app.get("/", (req, res) => res.send("server is live"));

app.listen(port, () => console.log("server lisitning at port", port ));
