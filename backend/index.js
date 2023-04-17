import express from 'express';
import router from './routes/routes.js';
import cors from 'cors';
import DBConnection from './databases/db.js';

const app = express();
app.use(cors());
app.use('/',router);
DBConnection();
const PORT = 5000;
app.listen(PORT, (req,res) => {
    console.log(`server is running success port:${PORT}`)
})