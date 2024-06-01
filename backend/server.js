import express from 'express';
import cors from 'cors';
import { connectDB } from './config/db.js';
import foodRouter from './routes/foodRoute.js';
import userRouter from './routes/userRoute.js';
import 'dotenv/config.js';
import cartRouter from './routes/cartRoute.js';
import orderRouter from './routes/orderRoute.js';

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
app.use('/images', express.static('uploads')); // folder name // http://localhost:4000/images/1714939310824food_17.png
app.use('/api/user', userRouter);
app.use('/api/cart', cartRouter);
app.use('.api/order', orderRouter);

app.get('/', (req, res) => {
  res.send('API Work!');
});

// run to express server
app.listen(port, () => {
  console.log(`Server Start on http://localhost:${port}`);
});
