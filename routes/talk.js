
var express = require('express');
var router = express.Router();

var answers = new Map();

answers.set(
    "/start", { 
        answer: "welcome, what part of daniel niehaus\' portfolio are you interested in?",
        links: ["/drawings", "/photography", "/videos", "/cv"]
    });

router.post('/', (req, res) => {
    console.log("received message: " + req.body.msg)
    if (answers.has(req.body.msg)) {
        res.json({ answer: answers.get(req.body.msg) });
    }
    else {
        res.json({ answer: 'I am sorry, I do not understand that' });
    }
});

module.exports = router; 