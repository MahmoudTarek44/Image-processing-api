// Modules
import path from "path";

// Functions
import {
	resizeImage,
	generateImagePath,
	checkForExistingImage,
} from "../app/logic/imageProcessing";

describe("Resizing image process test", () => {
	const requestPath = path.resolve("src/public/fiji.png");
	const wrongPath = path.resolve("src/public/wrong.png");
	const resultPath = path.resolve(
		generateImagePath("fiji", "200", "200", "jpg")
	);

	it("Check for wrong file name", async () => {
		await expectAsync(
			resizeImage(resultPath, wrongPath, "400", "400")
		).toBeRejected();
	});

	it("Check for existing image", async () => {
		await expectAsync(checkForExistingImage(resultPath)).toBeResolved();
	});

	it("Check for processing the image correctly", async () => {
		await expectAsync(
			resizeImage(requestPath, resultPath, "400", "400")
		).toBeResolved();
	});
});
