const express = require('express');
const cors = require('cors');
const routes = require('./routes');

const app = express();

const port = process.env.PORT || 3000;

// middlewares
app.use(cors())
app.use(express.json());
app.use(express.urlencoded({
    extended: true
}));

// routes
app.use(routes);

// server confgurations
app.listen(port, () =>
{
    console.log(`Server started Listening on port:${ port }`)
})