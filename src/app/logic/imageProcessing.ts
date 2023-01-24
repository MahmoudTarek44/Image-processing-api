// Modules
import sharp from "sharp";
import fs from "fs";

export const checkForExistingImage = (imagePath: string) => {
	if (fs.existsSync(imagePath)) return true;
	else return false;
};

export const generateImagePath = (
	imageName: string,
	width: number,
	height: number,
	fileExtension: string
): string => {
	return `src/public/thumbs/${imageName}_${width}_${height}.${fileExtension}`;
};

export const resizeImage = async (
	requestPath: string,
	generatedPath: string,
	width: number,
	height: number
) => {
	try {
		const result = await sharp(requestPath)
			.resize({
				width: width,
				height: height,
			})
			.toFile(generatedPath);
		return result;
	} catch (error) {
		console.log("Error :", error);
	}
};
