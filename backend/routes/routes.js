import express from "express";
import { uploadImage, downloadImage } from "../controllers/image-controller.js";
import upload from "../utils/upload.js";

const route = express.Router();

route.post("/upload", upload.single("file"), uploadImage);
route.get("/file/:file_id", downloadImage);
export default route;
