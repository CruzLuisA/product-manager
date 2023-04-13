const express = require('express');
const app = express();

const dotenv = require('dotenv');
dotenv.config();

const cors = require('cors');
app.use(cors(), express.json());

const connectDB = require('./config/mongoose.config')
connectDB();

const itemRouter = require('./routes/item.routes');
app.use('/api', itemRouter);

const port = process.env.PORT || 8000;
app.listen(port, () => console.log(`Listening on port: ${port}`) );