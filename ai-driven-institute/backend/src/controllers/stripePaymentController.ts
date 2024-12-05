import { Request, Response } from "express";
import Stripe from "stripe";
import { config } from "../config/config";
import Institutions from "../models/instituteModel";
import { AuthRequest } from "../middlewares/authentication";

const stripePaymentController = {
  createPaymentIntent: async (req: Request, res: Response) => {
    const stripe = new Stripe(config.stripeSecretKey as string, {
      apiVersion: "2024-11-20.acacia",
    });
    const { amount } = req.body;
    const _req = req as AuthRequest;
    const userID = _req.userID;

    if (!amount) {
      return res.status(400).json({ message: "Amount is required." });
    }

    try {
      const paymentIntent = await stripe.paymentIntents.create({
        amount: amount * 100, // Stripe expects amount in the smallest currency unit (paisa for INR)
        currency: "inr",
        metadata: { userID },
      });

      res.status(200).json({
        clientSecret: paymentIntent.client_secret,
      });
    } catch (error) {
      console.error("Error creating payment intent:", error);
      res.status(500).json({ message: "Payment creation failed." });
    }
  },

  updatePaymentStatus: async (req: Request, res: Response) => {
    const { paymentStatus, paymentIntentId } = req.body;
    const _req = req as AuthRequest;
    const userId = _req.userID;
  
    if (!userId || !paymentStatus || !paymentIntentId) {
      return res.status(400).json({
        message: "User ID, payment status, and paymentIntentId are required.",
      });
    }
  
    try {
      const stripe = new Stripe(config.stripeSecretKey as string, {
        apiVersion: "2024-11-20.acacia",
      });
  
      // Retrieve the PaymentIntent
      const paymentIntent = await stripe.paymentIntents.retrieve(paymentIntentId, {
        expand: ["charges.data"],
      }) as Stripe.PaymentIntent;
  
      console.log("PaymentIntentID: ", paymentIntentId);
      console.log("PaymentIntent: ", paymentIntent);
  
      // Retrieve the latest charge if charges are not expanded
      const latestChargeId = paymentIntent.latest_charge as string;
  
      if (!latestChargeId) {
        return res.status(400).json({
          message: "No charge associated with this payment intent.",
        });
      }
  
      const charge = await stripe.charges.retrieve(latestChargeId);
  
      if (!charge || !charge.receipt_url) {
        return res.status(400).json({
          message: "Receipt URL not available for this charge.",
        });
      }
  
      const receiptUrl = charge.receipt_url;
  
      let institution = await Institutions.findOne({ user: userId });
  
      if (institution) {
        // Update payment status and receipt URL in the database
        institution.paymentStatus = paymentStatus;
        institution.receiptUrl = receiptUrl; // Store receipt URL
      } else {
        institution = new Institutions({
          user: userId,
          paymentStatus,
          receiptUrl, // Store receipt URL
        });
      }
  
      const updatedInstitution = await institution.save();
      // console.log("Updated Institution: ", updatedInstitution);
  
      res.status(200).json({
        message: "Payment status updated successfully.",
        receiptUrl, // Return the receipt URL
        updatedInstitution,
      });
    } catch (error) {
      console.error("Error updating payment status:", error);
      res.status(500).json({ message: "Payment status update failed." });
    }
  },

  getPaymentStatus: async (req: Request, res: Response) => {
    try {
      const _req = req as AuthRequest;
      const userID = _req.userID;

      const institution = await Institutions.findOne({ user: userID });

      if (!institution) {
        return res.status(404).json({ message: "Institution not found." });
      }

      const paymentStatus =
        institution.paymentStatus && institution.paymentStatus === "completed"
          ? true
          : false;

      return res.status(200).json({ paymentStatus, receiptUrl: institution.receiptUrl });
    } catch (err) {
      console.error("Error getting payment status:", err);
      res.status(500).json({ message: "Error getting payment status." });
    }
  },
  getReceiptUrl: async (req: Request, res: Response) => {
    const { paymentIntentId } = req.body;

    try {
      const stripe = new Stripe(config.stripeSecretKey as string, { apiVersion: "2024-11-20.acacia" });

      // Retrieve the PaymentIntent
      const paymentIntent = await stripe.paymentIntents.retrieve(paymentIntentId,{
        expand: ["charges.data"]
      }) as Stripe.Response<Stripe.PaymentIntent & { charges: { data: Stripe.Charge[] } }>;
      
      // Retrieve the receipt URL from the charge object
      const charge = paymentIntent.charges.data[0];
      if (!charge || !charge.receipt_url) {
        return res.status(400).json({ message: "Receipt not available for this payment." });
      }

      if (!paymentIntent || paymentIntent.status !== "succeeded") {
        return res.status(400).json({ message: "Invalid or incomplete payment." });
      }
      console.log("PaymentIntent: ", paymentIntent);
      


      res.status(200).json({ receiptUrl: charge.receipt_url });
    } catch (error) {
      console.error("Error fetching receipt URL:", error);
      res.status(500).json({ message: "Failed to retrieve receipt URL." });
    }
  },
};

export default stripePaymentController;
