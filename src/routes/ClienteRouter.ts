import { ClienteController } from "../controllers/ClienteController";
import express from "express";

const router = express.Router();

const controller = new ClienteController(
)

router.get('/', (req, res) => {
  return res.json({ message: 'Hello World!' })
})

export default router;