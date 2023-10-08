require('dotenv').config();
const axios = require('axios');
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const port = process.env.PORT || 5000;
const randomRouter = require('./routes/random.router');

/** ---------- MIDDLEWARE ---------- **/
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json()); // needed for angular requests
app.use(express.static('build'));

axios({
    method: 'GET',
    url: `api.giphy.com/v1/gifs/random?api_key=${process.env.GIPHY_API_KEY}&random_id=e826c9fc5c929e0d6c6d423841a282aa`
}).then((response) => {
    console.log(response.data);
    res.send(response.data);
})

/** ---------- START SERVER ---------- **/
app.listen(port, function () {
    console.log('Listening on port: ', port);
});
