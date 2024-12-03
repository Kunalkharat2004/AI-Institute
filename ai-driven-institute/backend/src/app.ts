import express from "express";
import globalErrorHandler from "./middlewares/globalErrorHandler";
import usersRoute from "./routes/usersRoute"
import authRoute from "./routes/authRoute"
import cors from "cors"

const app = express();
app.use(cors({
    origin:"http://localhost:5173"
    
}))
app.use(express.json())

app.use("/api/users",usersRoute)
// app.use("/api/admin",authorRoute)
app.use("/api/auth",authRoute)

app.use(globalErrorHandler);

export default app;