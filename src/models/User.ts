import mongoose from "mongoose";

export interface UsersDocument extends Document {
    name: string,
    email: string,
    password: string,
    createdAt: Date,
    updatedAt: Date
}

const userSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now }
});

export default mongoose.model<UsersDocument>("users", userSchema)