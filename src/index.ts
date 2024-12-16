import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import connectDB from "./db";
import feedbackRoutes from "./routes/feedback";

const app = express();
connectDB();

app.use(cors());
app.use(bodyParser.json());

app.use('/feedback', feedbackRoutes);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});