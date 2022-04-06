import express from 'express';
import ClienteRouter from './routes/ClienteRouter';

const router = express.Router();

router.use('/cliente', ClienteRouter)

export default router;
