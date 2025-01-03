import mongoose, { Schema, Document } from "mongoose";

export interface FeedbackDocument extends Document {
    user_id: string,
    recepient_id: string,
    feedbackText: string;
    rating: number;
    submittedAt: Date;
}

const feedbackSchema = new Schema({
    user_id: { type: String, required: true },
    recepient_id: { type: String, required: true },
    feedbackText: { type: String, required: true },
    rating: { type: Number, required: true, min: 1, max: 5 },
    submittedAt: { type: Date, default: Date.now },
});

export default mongoose.model<FeedbackDocument>("feeds", feedbackSchema);