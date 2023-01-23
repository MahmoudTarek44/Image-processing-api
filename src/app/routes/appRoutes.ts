// Modules
import express, { Request, Response } from "express";
import imageResize from "./subRoutes/imageRoutes";

const appRoutes = express.Router();

appRoutes.get("/", (req: Request, res: Response) => {
	res.send("App main routes");
});

appRoutes.use("/imageResize", imageResize);

export default appRoutes;
