import express from 'express';
import 'dotenv/config';
import auth from './auth/auth.routes.js';
import tasks from './tasks/tasks.routes.js';

const app = express();
app.use(express.json());
const PORT = process.env.PORT || 8000;

app.use('/auth', auth);
app.use('/tasks', tasks);

app.listen(PORT, () => {
  console.log(`Server is running  on PORT: ${PORT}`);
});
