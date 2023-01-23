// Modules
import express, { Request, Response } from "express";
import path from "path";
import fs from "fs";

// Functions 
import { resizeImage, resolveImagePath } from "../../logic/imageProcessing";

const imageResize = express.Router()


imageResize.get('/', async (req: Request, res: Response)=> {
    const { width, height, name } = req.query ;

    res.send('image route is accessed')
})




export default imageResize