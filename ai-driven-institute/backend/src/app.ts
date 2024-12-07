import express from "express";
import globalErrorHandler from "./middlewares/globalErrorHandler";
import usersRoute from "./routes/usersRoute"
import instituteDetailsRoute from "./routes/instituteDetailsRoute"
import stripePaymentRoute from "./routes/stripePaymentRoute"
import contactRoute from "./routes/contactRoute"
import feedBackRoute from "./routes/feedbackRoute"

import cors from "cors"
import { authentication } from "./middlewares/authentication";

const app = express();
app.use(cors({
    origin:"*"
    
}))
app.use(express.json())

app.use("/api/users",usersRoute)
// app.use("/api/admin",authorRoute)
app.use("/api/institute",instituteDetailsRoute)
app.use("/api/payment",stripePaymentRoute)
app.use("/api/query",authentication,contactRoute)
app.use("/api/feedback",authentication,feedBackRoute)


app.use(globalErrorHandler);

export default app;