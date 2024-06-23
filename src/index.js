import express from 'express';
import 'dotenv/config';

const app = express();
const PORT = process.env.PORT || 8000;

app.get('/', (reg, res) => {
  return res.json({ message: 'Our server is woriking' });
});

app.listen(PORT, () => {
  console.log(`Server is running  on PORT: ${PORT}`);
});
