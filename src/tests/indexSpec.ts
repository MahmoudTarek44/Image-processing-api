// Modules
import path from "path";

// Functions
import {
	resizeImage,
	generateImagePath,
	checkForExistingImage,
} from "../app/logic/imageProcessing";

describe("Resizing image process test", () => {
	const requestPath = path.resolve("src/public/fiji.jpg");
	const wrongPath = path.resolve("src/public/wrong.jpg");
	const resultPath = path.resolve(generateImagePath("image", 200, 200, "jpg"));

	it("Check for wrong file name", async () => {
		await expectAsync(
			resizeImage(wrongPath, resultPath, 400, 400)
		).toBeRejected();
	});

	it("Check for existing image", async () => {
		await expectAsync(checkForExistingImage(resultPath)).toBeResolved();
	});

	it("Check for processing the image correctly", async () => {
		await expectAsync(
			resizeImage(requestPath, resultPath, 400, 400)
		).toBeResolved();
	});
});
