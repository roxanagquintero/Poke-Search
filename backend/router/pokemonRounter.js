// routers/pokemonRouter.js

import express from 'express';
import { getPokemonById } from '../controllers/pokemonController.ctrl';

const router = express.Router();

router.get('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const pokemonData = await getPokemonById(id);
    res.json(pokemonData);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

export default router;
