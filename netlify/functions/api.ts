import express, { Request, Response } from "express";
import serverless from "serverless-http";
import cors from "cors";

const app = express();
app.use(cors({ origin: "*" }));
app.use(express.json());

app.get("/health", (_req: Request, res: Response) => {
	res.json({ ok: true, service: "api", time: new Date().toISOString() });
});

app.get("/", (_req: Request, res: Response) => {
	res.json({ message: "Welcome to the API. Try GET /health" });
});

export const handler = serverless(app);