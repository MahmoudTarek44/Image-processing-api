// Modules
import path from "path";

// Functions
import { resizeImage, generateImagePath } from "../app/logic/imageProcessing";

describe("Resizing image process test", () => {
	const currentPath = path.resolve("public/images/fiji.png");
	const wrongPath = path.resolve("public/images/wrong.png");
	const resultPath = path.resolve(generateImagePath("image", 200, 200, "jpg"));

	it("error if the wrong filename is provided", async () => {
		await expectAsync(
			resizeImage(resultPath, wrongPath, 400, 400)
		).toBeRejected();
	});

	it("success if right extention filename, height and width parameters", async () => {
		await expectAsync(
			resizeImage(resultPath, currentPath, 400, 400)
		).toBeResolved();
	});
});
