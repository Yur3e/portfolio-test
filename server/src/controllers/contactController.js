import asyncHandler from "../utils/asyncHandler.js";
import { handleContactMessage } from "../services/contactService.js";

export const sendContactMessage = asyncHandler(async (req, res) => {
  const result = await handleContactMessage(req.body);

  res.status(200).json({
    success: true,
    message: result.message,
    data: result.data
  });
});
