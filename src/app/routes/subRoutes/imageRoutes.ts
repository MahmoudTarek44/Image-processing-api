// Modules
import express, { Request, Response, Router } from "express";
import path from "path";
import fs from "fs";

// Functions
import { resizeImage, generateImagePath } from "../../logic/imageProcessing";

const imageResize: Router = express.Router();

imageResize.get("/", async (req: Request, res: Response) => {
	// extract query data:
	const name: string = req.query.name as unknown as string;
	const width: number = req.query.width as unknown as number;
	const height: number = req.query.width as unknown as number;

	// generate paths:
	const resolvedRequestPath: string = path.resolve(`public/images/${name}.jpg`);
	const generatedPath: string = generateImagePath(name, width, height, "jpg");
	const resolvedGeneratedPath: string = path.resolve(generatedPath);

	if (fs.existsSync(resolvedGeneratedPath)) {
		res.sendFile("Image already exists: ", resolvedGeneratedPath);
	} else {
		try {
			await resizeImage(
				resolvedGeneratedPath,
				resolvedRequestPath,
				width,
				height
			);
			res.sendFile("Image resized: ", resolvedGeneratedPath);
		} catch (error) {
			console.log("Something went wrong while processing the image");
			res.send(error);
		}
	}
});

export default imageResize;
