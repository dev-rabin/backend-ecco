const express = require('express');
const router = express.Router();

router.post('/post',(req,res) =>{
    res.send('POST API')
})
module.exports = router;