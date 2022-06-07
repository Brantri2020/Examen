const express = require('express');
const connectDB = require('./config/db');
const cors = require('cors');

//crear servidor
const app = express();

//conectar a la base
connectDB();

app.use(cors());

app.use(express.json());

app.use('/api/tasks/provinces', require('./routes/province'));
app.use('/api/tasks/cities', require('./routes/city'));
app.use('/api/tasks/', require('./routes/task'));

app.listen(4000,()=>{
    console.log("Server works");
})