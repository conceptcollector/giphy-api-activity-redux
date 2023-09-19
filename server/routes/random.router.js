const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    axios({
        method: 'GET',
        url: 'api.giphy.com/v1/gifs/random'
    }).then((response) => {
        res.send(response.data);
    })
})

module.exports = router;
