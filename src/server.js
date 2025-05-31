import express from "express";
import dotenv from 'dotenv'
import cors from 'cors'
import cookieParser from "cookie-parser";
import authRoutes from "./routes/authroute.js";
import userRoutes from "./routes/userRoute.js";
import chatRoutes from "./routes/chatRoute.js";
import { connectDB } from "./lib/db.js";


dotenv.config();

const app =express();
const PORT =process.env.PORT;

app.use(cors({
  origin:'https://chatapplication-frontend-xesc.onrender.com',
  credentials: true
}))

app.use(express.json());
app.use(cookieParser());  

app.use('/api/auth',authRoutes);
app.use('/api/users',userRoutes);
app.use('/api/chat',chatRoutes)





app.listen(PORT,()=>{
  console.log(`Server is running on port : http://localhost:${PORT}` );
  connectDB();
})
