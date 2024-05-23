
var express = require('express');
var router = express.Router();

var link = {
    back_to_start: { name: "/...", to: "/start" },
    algorithmic_drawing: { name: "/algorithmic drawing", to: "/algorithmic_drawing" },
    photography: { name: "/photography" },
    bezier_forms: { name: "/bezier forms", to: "/bezier_forms", src: "/bezierforms" },
}

var answers = new Map(
    [
        ["/start", {
            answer: "hi, i'm daniel. you found my portfolio! what parts of it are you interested in?",
            links: [
                link.algorithmic_drawing,
                link.photography,
                { name: "/videos" },
                { name: "/music", src: "/music" },
                { name: "/links" },
                { name: "/secret option", to: "/secret_option" },
            ]
        }],
        ["/algorithmic_drawing", {
            answer: "perfect, what subtopic would you like to see?",
            links: [
                link.back_to_start,
                link.bezier_forms,
                { name: "/georg nees", to: "georg_nees", src: "/georg_nees" }
            ],
        }],
        ["/bezier_forms", {
            answer: "press enter to generate a new piece!",
            links: [
                { name: "/...", to: link.algorithmic_drawing.to },
                { name: "/code on github", url: "https://github.com/niezuhaus/algorithmic-drawing" }
            ],
            src: link.bezier_forms.src
        }],
        ["/georg_nees", {
            answer: "this is a generator of georg nees' artwork »Graphik aus Dreiundzwanzigzackigen«. it reacts to the movement of your mouse but what properties can you alter in the x/y dimension?",
            links: [
                { name: "/...", to: link.algorithmic_drawing.to },
                { name: "/code on github", url: "https://github.com/niezuhaus/algorithmic-drawing" }
            ]
        }],
        ["/music", {
            answer: "i had a band years ago. we finished at least one ep before we split up, that you might enjoy",
            links: [
                { name: "/...", to: "/start" },
                { name: "/bandcamp", url: "https://github.com/niezuhaus/algorithmic-drawing" }
            ]
        }],

        ["/secret_option", {
            answer: "you found the secret option! just follow the path..",
            links: [
                { name: "/secret path...", to: "/secret_path" },
            ]
        }],

        ["/secret_path", {
            answer: "ha got ya! now your ip is logged and i know who you are! just kidding, you're safe. but you found the secret path! just follow the path..",
            links: [
                { name: "/secret path", to: "/secret_path" },
            ]
        },]
    ]);
var i = 0;
router.post('/', (req, res) => {
    console.log(`message from ip ${req.ip}: ${req.body.msg}, number: ${i++}`)
    if (answers.has(req.body.msg)) {
        res.json(answers.get(req.body.msg));
    }
    else {
        res.json({ answer: 'I am sorry, I do not understand that', links: [], notFound: true });
    }
});

module.exports = router; 