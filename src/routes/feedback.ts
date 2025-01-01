import express from 'express';
import Feedback from '../models/Feedback';

const router = express.Router();

router.post(
    '/', async (req, res) => {
        try {
            const { user_id, recepient_id, feedbackText, rating } = req.body;
            const feedback = new Feedback({ user_id, recepient_id, feedbackText, rating });
            await feedback.save();
            res.status(201).json({ message: 'Feedback submitted successfully' });
        } catch (error) {
            console.error('Error submitting feedback:', error);
            res.status(500).json({ error: 'Internal Server Error' });
        }
    }   
)

router.get(
    '/', async (req, res) => {
        try {
            const feedbackList = await Feedback.find();
            res.status(200).json(feedbackList);
        } catch (error) {
            console.error('Error fetching feedbacks:', error);
            res.status(500).json({ error: 'Internal Server Error' });
        }
    }
)

export default router;