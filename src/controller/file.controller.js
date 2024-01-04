import { asyncHandler } from "../utils/asyncHandler.js";

const uploadFile = asyncHandler(async (err, req, res) => {
  console.log(req, err);
});

const deleteFile = asyncHandler(async (req, res) => {
  return "";
});

export { uploadFile, deleteFile };
