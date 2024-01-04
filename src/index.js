import express from "express";
import dotenv from "dotenv";
import { Routes } from "./routes/routes.js";
import { errorHandler } from "./middleware/error.middleware.js";
dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(Routes);

app.use(errorHandler);
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
// app.delete("/delete/:fileKey", async (req, res) => {
//   try {
//     const { fileKey } = req.params;
//     const bucketName = process.env.AWS_BUCKET_NAME;

//     const params = {
//       Bucket: bucketName,
//       Key: fileKey,
//     };

//     await s3Client.send(new DeleteObjectCommand(params));

//     res.status(200).json({
//       message: `File "${fileKey}" deleted successfully from S3 bucket "${bucketName}"`,
//     });
//   } catch (error) {
//     console.error("Error deleting file:", error);
//     res.status(500).json({ error: "Failed to delete file from S3" });
//   }
// });
