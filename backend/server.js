// server.js

import express from 'express';
import pokemonRouter from './routers/pokemonRouter';

const app = express();
const port = 3001;

app.use('/api/pokemon', pokemonRouter);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
