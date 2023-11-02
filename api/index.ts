import express from 'express';

const app = express();
const port = process.env.API_PORT;

app.get('/', (req, res) => {
  res.send('Hello! This is typescript express api of MENS stack!');
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
