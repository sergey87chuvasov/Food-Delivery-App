import express from 'express';
import cors from 'cors';

// app config - init our app use express
const app = express();
const port = 4000;

// init middleware
app.use(express.json()); // get request front=>back
app.use(cors()); // access back from any front

app.get('/', (req, res) => {
  res.send('API Work!');
});

// run to express server
app.listen(port, () => {
  console.log(`Server Start on http://localhost:${port}`);
});
