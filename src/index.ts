import express from 'express';
import cors from 'cors';
import { conectedDatabase } from './data-source';
import routes from './routes/user.routes';

  const app = express();

  app.use(express.json());

  app.use(cors());

  app.get('/', (req, res) => {
    res.send('Esta Funcionando 😉👌')
  })

  app.post('/users', routes)

  app.listen(38000, () => {
    console.log("Iniciando na porta https://localhost:38000");
    conectedDatabase.initialize().then(() => console.log("Banco iniciado"))
  });


