const express = require('express');
const app = express();
require('dotenv').config()
const tasks = require('./routes/tasks');
const notFound = require('./middlewares/not-found')
const errorHandler = require('./middlewares/errorHandler')
const PORT = process.env.PORT || 5000;
// require('./db/connect');                      // connect to db without a unction
const connectDB = require('./db/connect');       // connect to db with a unction

// middlewares
app.use(express.static('./public'));
app.use(express.json());

// routes
app.use('/api/v1/tasks', tasks);
app.use(notFound);
app.use(errorHandler);

const start = async () => {
    try {
        await connectDB(process.env.MONGO_URI);
        app.listen(PORT, () => console.log(`server is listening on port ${PORT}`));
    } catch (error) {
        console.log(error)
    }
}

start();
