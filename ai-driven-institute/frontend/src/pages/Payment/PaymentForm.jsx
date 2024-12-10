import { Elements, PaymentElement, useStripe, useElements } from "@stripe/react-stripe-js";
import { useNavigate } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { getReceiptUrl, paymentIntent, updatePaymentStstus } from "../../http/api";
import { loadStripe } from "@stripe/stripe-js";
import config from "../../config/config";
import { toast } from "react-toastify";
import useTokenStore from "../../store/userTokenStore";
import { useState } from "react";

const stripePromise = loadStripe(config.stripePublicKey);

const PaymentForm = ({ clientSecret }) => {
  const stripe = useStripe();
  const elements = useElements();
  const navigate = useNavigate();
  const { setPaymentStatus } = useTokenStore();
  const [isProcessing,setIsProcessing] = useState(false)

  const handlePayment = async (e) => {
    e.preventDefault();

    if (!stripe || !elements) {
      toast.error("Stripe has not loaded yet. Please try again later.");
      return;
    }
    setIsProcessing(true)
    try {
      const result = await stripe.confirmPayment({
        elements,
        confirmParams: {
          return_url: "http://localhost:5173/inspection/timeline/form", // Replace with your desired redirect URL
        },
        redirect: "if_required",
      });
      console.log("Result: ",result.paymentIntent.id);
      const paymentIntentId = result.paymentIntent.id;
      if (result.error) {
        toast.error("Payment failed. Please check your details and try again.");
      } 
      else if (result.paymentIntent && result.paymentIntent.status === "succeeded") {
        console.log("Payment successful!");
        const data = await updatePaymentStstus({ paymentStatus: "completed",paymentIntentId }); // Update backend payment status
        console.log("Receipt URL: ",data.data.receiptUrl);
        setPaymentStatus(true); // Update Zustand store
        const receiptUrl = data.data.receiptUrl;
       window.open(receiptUrl,"_blank")
        navigate("/inspection/timeline/form");
      } else if (result.paymentIntent && result.paymentIntent.status === "requires_action") {
        toast.info("Additional action is required to complete the payment.");
      }
    } catch (error) {
      console.error("Error processing payment:", error);
      toast.error("An error occurred during payment. Please try again.");
    }
    finally{
      setIsProcessing(false)
    }
  };

  return (
    <form onSubmit={handlePayment} className="space-y-5">
      <div className="p-4 border border-gray-300 rounded-md bg-gray-50 focus-within:ring-2 focus-within:ring-blue-500">
        <PaymentElement
          options={{
            layout: "tabs",
            fields: {
              billingDetails: {
                address: "auto",
              },
            },
          }}
        />
      </div>
      <button
        type="submit"
        disabled={!stripe}
        className="w-full py-3 px-6 rounded-md bg-indigo-600 text-white font-semibold text-lg hover:bg-indigo-700 transition duration-300 disabled:opacity-50"
      >
        {
          isProcessing?(
            <div className="flex items-center justify-center">
            <span className="animate-spin h-5 w-5 mr-2 border-t-2 border-white rounded-full"></span>
            Processing...
          </div>
          ):"Pay ₹2000"
        }
      </button>
    </form>
  );
};

const PaymentPage = () => {
  const { data: clientSecret, isLoading, isError } = useQuery({
    queryKey: ["clientSecret"],
    queryFn: async () => {
      const response = await paymentIntent({ amount: 2000 }); // Replace with the appropriate amount
      return response.data.clientSecret;
    },
    retry: false,
    onError: (error) => {
      if (error.response?.status === 401) {
        toast.error("You need to log in to proceed.");
        navigate("/auth/login"); // Redirect to login page
      } else {
        toast.error("Failed to initialize payment. Please try again.");
      }
    },
  });

  if (isLoading) return <div>Loading payment details...</div>;
  if (isError || !clientSecret) return <div>Error initializing payment.</div>;

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-lg bg-white rounded-lg shadow-lg p-8">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">
          Secure Payment
        </h2>
        <p className="text-center text-gray-600 mb-6">
          Pay securely to complete your transaction. Amount:{" "}
          <span className="font-semibold text-gray-800">₹2000</span>.
        </p>
        <Elements stripe={stripePromise} options={{ clientSecret }}>
          <PaymentForm clientSecret={clientSecret} />
        </Elements>
      </div>
    </div>
  );
};

export default PaymentPage;
