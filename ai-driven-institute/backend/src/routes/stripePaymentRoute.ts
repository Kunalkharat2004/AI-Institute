import express from "express";
import stripePaymentController from "../controllers/stripePaymentController";
import { authentication } from "../middlewares/authentication";

const router = express.Router();

// Create Payment Intent
router.post("/create-payment-intent", 
  authentication,
  stripePaymentController.createPaymentIntent);

// Update Payment Status
router.post("/update-payment-status", 
  authentication,
  stripePaymentController.updatePaymentStatus);

router.get("/payment-status",
  authentication,
  stripePaymentController.getPaymentStatus
)

router.post("/get-receipt-url",
  authentication,
  stripePaymentController.getReceiptUrl
)

export default router;