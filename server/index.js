import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import bodyParser from 'body-parser';
import connection from './database/db.js';
import route from './routes/route.js';

dotenv.config();
const app = express();

const PORT = 8000;


connection();
app.listen(PORT, () => console.log(`Server is running successfully on PORT ${PORT}`));

app.use(cors());
app.use(bodyParser.json({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/',route);