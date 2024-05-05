import express from 'express';
import cors from 'cors';
import { connectDB } from './config/db.js';
import foodRouter from './routes/foodRoute.js';

// app config - init our app use express
const app = express();
const port = 4000;

// init middleware
app.use(express.json()); // get request front=>back
app.use(cors()); // access back from any front

//db conn
connectDB();

// api endpoint
app.use('/api/food', foodRouter);

app.get('/', (req, res) => {
  res.send('API Work!');
});

// run to express server
app.listen(port, () => {
  console.log(`Server Start on http://localhost:${port}`);
});
