import { ApiError } from "../utils/ApiError.js";

const errorHandler = (err, req, res) => {
  if (err instanceof ApiError) {
    return res.status(err.statusCode).json(err);
  } else {
    return res.status(500).json({
      statusCode: 500,
      data: null,
      message: "Internal Server Error",
      success: false,
    });
  }
};

export { errorHandler };
