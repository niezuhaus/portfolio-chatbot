
var express = require('express');
var router = express.Router();

var link = {
    back_to_start: { name: "/...", to: "/start" },
    algorithmic_drawing: { name: "/algorithmic drawing", to: "/algorithmic_drawing" },
    photography: { name: "/photography" },
    music: { name: "/music", src: "/music" },
    opensource: { name: "/open source", to: "/opensource" },
    bezier_forms: { name: "/bezier forms", to: "/bezier_forms", src: "/bezierforms" },
    georg_nees: { name: "/georg nees", to: "/georg_nees", src: "/georg_nees" },
    dispogramm: { name: "/dispogramm", to: "/dispogramm"},
    science_poster_free_software: { name: "/science poster: free software", to: "/science_poster_free_software", src: "/science_poster_free_software" },
}

var answers = new Map(
    [
        ["/start", {
            answer: "hi, i'm daniel. you found my portfolio! what parts of it are you interested in?",
            links: [
                link.algorithmic_drawing,
                link.photography,
                { name: "/videos" },
                link.opensource,
                link.music,
                { name: "/secret option", to: "/secret_option" },
                { name: "/secret option", to: "/secret_option" },
            ]
        }],
        ["/algorithmic_drawing", {
            answer: "perfect, what subtopic would you like to see?",
            links: [
                link.back_to_start,
                link.bezier_forms,
                link.georg_nees,
            ],
        }],
        ["/opensource", {
            answer: "perfect, what subtopic would you like to see?",
            links: [
                link.back_to_start,
                link.dispogramm,
                link.science_poster_free_software,
            ],
        }],
        ["/bezier_forms", {
            answer: "press enter to generate a new piece!",
            links: [
                { name: "/...", to: link.algorithmic_drawing.to },
                { name: "find the code on github ->", url: "https://github.com/niezuhaus/algorithmic-drawing" }
            ],
            src: link.bezier_forms.src
        }],
        ["/georg_nees", {
            answer: "this is a generator of georg nees' artwork »Graphik aus Dreiundzwanzigzackigen«. it reacts to the movement of your mouse but what properties can you alter in the x/y dimension?",
            links: [
                { name: "/...", to: link.algorithmic_drawing.to },
                { name: "find the code on github ->", url: "https://github.com/niezuhaus/algorithmic-drawing" }
            ],
            src: link.georg_nees.src
        }],
        ["/science_poster_free_software", {
            answer: "this work is a critical reflection on the current state of the internet and the role of free software in it. it has been created completely with open source software and will be presented on this years exhibition on the »MS Wissenschaft« exhibition ship, which will tour around during summer 2024.",
            links: [
                { name: "/...", to: link.opensource.to },
                { name: "find all ressources and an audioversion on codeberg ->", url: "https://codeberg.org/positronen/InfraPoster" },
                { name: "find out about the exhibition ->", url: "https://ms-wissenschaft.de/de/ausstellung/" }
            ],
            src: link.science_poster_free_software.src
        }],
        ["/dispogramm", {
            answer: "this is",
            links: [
                { name: "/...", to: link.opensource.to },
                { name: "dispogram demo version ->", url: "https://cloud.niezuhaus.de/" },
                { name: "find the code on github ->", url: "https://github.com/niezuhaus/fex-dispogramm" }
            ],
        }],
        ["/music", {
            answer: "i had a band years ago. we finished at least one ep before we split up, that you might enjoy",
            links: [
                { name: "/...", to: link.back_to_start.to },
                { name: "find the ep on bandcamp ->", url: "https://github.com/niezuhaus/algorithmic-drawing" }
            ],
            src: link.music.src
        }],
        ["/secret_option", {
            answer: "you found the secret option! just follow the path..",
            links: [
                { name: "/secret path...", to: "/secret_path" },
            ]
        }],

        ["/secret_path", {
            answer: "ha got ya! now your ip is logged and i know who you are! just kidding, i know your ip, it is %ip% but that's REALLY all.",
            links: [
                { name: "/secret path", to: "/secret_path" },
            ]
        },]
    ]);

router.post('/', (req, res) => {
    if (answers.has(req.body.msg)) {
        console.log("message received: " + req.body.msg);
        let response = answers.get(req.body.msg)
        if (response.answer.includes('%ip%')) {
            var ip = req.headers['x-forwarded-for'] || req.socket.remoteAddress
            if (response.answer.includes('%ip%')) {
                response.answer = response.answer.replace('%ip%', ip);
            }
        }
        res.json(response);
    }
    else {
        res.json({ answer: 'I am sorry, I do not understand that', links: [], notFound: true });
    }
});

module.exports = router; 