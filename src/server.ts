import dotenv from 'dotenv';
import app from './app';

dotenv.config();

const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`Magic Transporters API running at http://localhost:${port}`);
});