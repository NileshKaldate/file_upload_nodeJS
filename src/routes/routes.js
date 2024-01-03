import express from "express";

const Routes = express.Router();

Routes.route("/file-upload").post();

export { Routes };
