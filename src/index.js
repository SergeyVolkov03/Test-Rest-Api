import express from 'express';
import 'dotenv/config';
import auth from './auth/auth.routes.js';

const app = express();
app.use(express.json());
const PORT = process.env.PORT || 8000;

app.post('/', (req, res) => {
  console.log(req.body);
  return res.json({ body });
});

app.use('/auth', auth);

app.listen(PORT, () => {
  console.log(`Server is running  on PORT: ${PORT}`);
});
