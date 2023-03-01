const mongoose = require('mongoose');
const CONNECTION_STRING = 'mongodb://127.0.0.1:27017/task-manager-db'

const connectDB = (url) => {
    return mongoose.connect(url)
}

module.exports = connectDB;

// const secondArgumentObjectForConnectMethodForMongooseVersionsBelowSix = {
//     useNewUrlParser: true,
//     useCreateIndex: true,
//     useFindAndModify: false,
//     useUnifiedTopology: true
// }

// mongoose.connect(CONNECTION_STRING).then(() => console.log('CONNECTED TO DB...')).catch((err) => console.log(err));
