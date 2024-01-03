import { asyncHandler } from "../utils/asyncHandler.js";
import multer from "multer";
import multerS3 from "multer-s3";
import AWS from "aws-sdk";
const fileUpload = asyncHandler(async (req, res) => {
  AWS.config.update({
    accessKeyId: "your-access-key-id",
    secretAccessKey: "your-secret-access-key",
    region: "Asia Pacific (Mumbai) ap-south-1", // e.g., us-east-1
  });

  // Create an S3 instance
  const s3 = new AWS.S3();

  // Configure Multer to use S3 storage
  const upload = multer({
    storage: multerS3({
      s3: s3,
      bucket: "arn:aws:s3:::nodejstestingbucket",
      acl: "public-read",
      contentType: multerS3.AUTO_CONTENT_TYPE,
      key: function (req, file, cb) {
        cb(null, Date.now() + "-" + file.originalname);
      },
    }),
  });
});

export { fileUpload };
