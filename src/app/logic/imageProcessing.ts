// Modules
import sharp from "sharp";

export const resizeImage = async (
	resultPath: string,
	currentPath: string,
	width: number,
	height: number
) => {
	try {
		await sharp(currentPath)
			.resize({
				width: width,
				height: height,
			})
			.toFile(resultPath);
		return resultPath;
	} catch (error) {
		console.log("Error :", error);
	}
};

export const generateImagePath = (
	imageName: string,
	width: number,
	height: number,
	fileExtension: string
): string => {
	return `public/images/thumbs/${imageName}-${width}-${height}.${fileExtension}`;
};
