import express from "express";
import { deleteFile, uploadFile } from "../controller/file.controller.js";
import { upload } from "../middleware/multer.middleware.js";

const Routes = express.Router();

Routes.route("/upload-files").post(upload.array("files"), uploadFile);
Routes.route("/delete-file").post(deleteFile);

export { Routes };
