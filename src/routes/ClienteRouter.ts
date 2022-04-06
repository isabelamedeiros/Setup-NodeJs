import { Router } from 'express';

const router = Router();

let posts = [];

router.get('/:idCliente', (req, res) => {
  res.json(posts);
})


router.post('/:nome/:cpf/:endereco', (req, res) => {
  try {
    const body = req.body;
    console.log("POST: ", body);
    posts.push(body);
    return res.status(200).json({message: "Os dados do cliente foram salvos com sucesso!"})
  } catch (error) {
    throw error;
  }
})

export default router;