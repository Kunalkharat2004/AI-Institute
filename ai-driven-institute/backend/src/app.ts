import express from "express";
import globalErrorHandler from "./middlewares/globalErrorHandler";
import usersRoute from "./routes/usersRoute"
import instituteDetailsRoute from "./routes/instituteDetailsRoute"

import cors from "cors"

const app = express();
app.use(cors({
    origin:"*"
    
}))
app.use(express.json())

app.use("/api/users",usersRoute)
// app.use("/api/admin",authorRoute)
app.use("/api/institute",instituteDetailsRoute)



app.use(globalErrorHandler);

export default app;