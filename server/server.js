import express from "express";
import cors from "cors";
import "dotenv/config";
import connectDB from "./configs/db.js";
import { clerkMiddleware } from "@clerk/express";
import { serve } from "inngest/express";
import { inngest, functions } from "./inngest/index.js";

const app = express();

const port = 3000;
await connectDB();

//middleware

app.use(clerkMiddleware());

app.use(express.json());
app.use(cors());

//first api routes

app.get("/", (req, res) => res.send("server is live"));

app.use("/api/inngest", serve({ client: inngest, functions }));

app.listen(port, () => console.log("server lisitning at port", port));
