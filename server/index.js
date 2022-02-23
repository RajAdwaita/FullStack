import express from 'express';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import cors from 'cors';
import todosRoutes from './routes/todos.js';

const app = express();
dotenv.config();

app.use(bodyParser.json({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());


app.use('/todos', todosRoutes)


app.get('/', (req, res) => {
    res.send('Hello World');
})

const PORT = process.env.PORT || 5000;

// if(process.env.NODE_ENV === 'production'){
//     app.use(express.static('client/build'));
//     const path = require('path');

mongoose.connect(process.env.mongodb, { useUnifiedTopology: true }, { useNewUrlParser: true }).then(() => app.listen(PORT, () => console.log(`Server on ${PORT}`))).catch(err => console.log(err));


// mongoose.set('useFindAndModify', false);
mongoose.connect(process.env.mongodb).then(() => { console.log('...') })
