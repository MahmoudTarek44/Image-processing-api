// Modules
import express, { Request, Response, Router } from "express";
import path from "path";

// Functions
import {
	resizeImage,
	generateImagePath,
	checkForExistingImage,
} from "../../logic/imageProcessing";

const imageResize: Router = express.Router();

imageResize.get("/", async (req: Request, res: Response) => {
	// extract query data:
	const name: string = req.query.name as unknown as string;
	const width: number = +(req.query.width as unknown as string);
	const height: number = +(req.query.height as unknown as string);

	// generate paths:
	const resolvedRequestPath: string = path.resolve(`src/public/${name}.jpg`);

	const generatedPath: string = generateImagePath(name, width, height, "jpg");
	const resolvedGeneratedPath: string = path.resolve(generatedPath);

	if (isNaN(width) || isNaN(height)) {
		res.status(400).send("Width and height must be numbers");
	} else if (!checkForExistingImage(resolvedGeneratedPath)) {
		res
			.status(404)
			.send(
				"Image is not found, Please check the name of the image and try again!"
			);
	} else if (checkForExistingImage(resolvedGeneratedPath)) {
		res.sendFile(resolvedGeneratedPath);
	} else {
		try {
			await resizeImage(
				resolvedRequestPath,
				resolvedGeneratedPath,
				width,
				height
			);
			res.sendFile(resolvedGeneratedPath);
		} catch (error) {
			console.log("Something went wrong while processing the image");
			res.send(error);
		}
	}
});

export default imageResize;
