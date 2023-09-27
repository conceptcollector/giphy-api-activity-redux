const express = require('express');
const axios = require('axios');
const router = express.Router();

router.get('/', (req, res) => {
    axios({
        method: 'GET',
        url: `api.giphy.com/v1/gifs/random?api_key=${process.env.GIPHY_API_KEY}&random_id=e826c9fc5c929e0d6c6d423841a282aa`
    }).then((response) => {
        console.log(response.data);
        res.send(response.data);
    })
})

module.exports = router;