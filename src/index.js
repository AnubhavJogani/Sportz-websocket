import express from 'express';

const app = express();
const PORT = 8080;

app.use(express.json());

app.get('/', (req, res) => {
  res.send('Welcome to the Sportz API!');
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});