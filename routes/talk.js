
var express = require('express');
var router = express.Router();

var answers = new Map(
    [
        ["/start", {
            "answer": "hi, i'm daniel. you found my portfolio! what parts of it are you interested in?",
            "links": [
                { "name": "/algorithmic drawing" },
                { "name": "/photography" },
                { "name": "/videos" },
                { "name": "/music", "src": "/music" },
                { "name": "/links" }
            ]
        }],
        ["/algorithmic drawing", {
            "answer": "perfect, what subtopic do you like to see?",
            "links": [
                { "name": "/...", "to": "/start" },
                { "name": "/bezier forms", "src": "/bezierforms" },
                { "name": "/georg nees", "src": "/georg_nees" }
            ]
        }],
        ["/bezier forms", {
            "answer": "press enter to generate more art!",
            "links": [
                { "name": "/...", "to": "/algorithmic drawing" },
                { "name": "/code on github", "url": "https://github.com/niezuhaus/algorithmic-drawing" }
            ]
        }],
        ["/georg nees", {
            "answer": "this is a generator of georg nees' artwork »Graphik aus Dreiundzwanzigzackigen«. it reacts to the movement of your mouse but what properties can you alter in the x/y dimension?",
            "links": [
                { "name": "/...", "to": "/algorithmic drawing" },
                { "name": "/code on github", "url": "https://github.com/niezuhaus/algorithmic-drawing" }
            ]
        }],
        ["/music", {
            "answer": "i had a band years ago. we finished at least one ep before we split up, that you might enjoy",
            "links": [
                { "name": "/...", "to": "/start" },
                { "name": "/bandcamp", "url": "https://github.com/niezuhaus/algorithmic-drawing" }
            ]
        }],
    ]
);

router.post('/', (req, res) => {
    console.log("received message: " + req.body.msg)
    if (answers.has(req.body.msg)) {
        res.json(answers.get(req.body.msg));
    }
    else {
        res.json({ answer: 'I am sorry, I do not understand that', "links": [] });
    }
});

module.exports = router; 