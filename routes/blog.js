const express = require('express')
const path = require("path");
const router = express.Router(); //router


router.get('/', (req, res) => {
    console.log(__dirname,'../templates/index.html');
    res.sendFile(path.join(__dirname,'../templates/index.html'));
})

module.exports = router; //make export show it will be used in index.js

