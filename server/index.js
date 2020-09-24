const express = require('express');
require('dotenv').config();

const db = require("./api/models/database.models");
db.mongoose.connect(
    db.url, {
        useCreateIndex: true,
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(() => {
        console.log("Connected to the database!");
    })
    .catch(err => {
        console.log("Cannot connect to the database!", err);
        process.exit();
    });

const router = require('./api/routes/router.routes');

const app = express();
app.use(express.json())
app.use('/api/v1', router);


const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
    console.log(`server listening at http://localhost:${PORT}`);
});
