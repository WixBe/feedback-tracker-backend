import express from "express"
import User from "../models/User";

const router = express.Router();

router.post(
    "/register", async (req, res) => {
        try {
            const { name, email, password } = req.body;
            const user = new User({ name, email, password });
            await user.save();
            res.status(201).json({ message: 'User registered successfully' });
        } catch (error) {
            console.error('Error registering user:', error);
            res.status(500).json({ error: 'Internal Server Error' });
        }
    }
)

router.post(
    "/login", async (req, res) => {
        try {
            const { email, password } = req.body;
            const user = await User.findOne({ email, password });
            if (user) {
                res.status(200).json({ message: 'Login successful', user });
            } else {
                res.status(401).json({ error: 'Invalid credentials' });
            }
        } catch (error) {
            console.error('Error logging in:', error);
            res.status(500).json({ error: 'Internal Server Error' });
        }
    }
)

export default router;