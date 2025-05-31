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

const allowedOrigins = [
  'https://chatapplication-frontend-xesc.onrender.com',
  'http://localhost:5173'
];

app.use(cors({
  origin: function(origin, callback) {
    // allow requests with no origin (like mobile apps or curl requests)
    if (!origin) return callback(null, true);
    if (allowedOrigins.indexOf(origin) === -1) {
      const msg = 'CORS policy: This origin is not allowed.';
      return callback(new Error(msg), false);
    }
    return callback(null, true);
  },
  credentials: true,
}));


app.use(express.json());
app.use(cookieParser());  

app.use('/api/auth',authRoutes);
app.use('/api/users',userRoutes);
app.use('/api/chat',chatRoutes)





app.listen(PORT,()=>{
  console.log(`Server is running on port : http://localhost:${PORT}` );
  connectDB();
})
