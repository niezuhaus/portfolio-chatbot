
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
    manfred_mohr: { name: "/manfred mohr", to: "/manfred_mohr", src: "/manfre_mohr" },
    dispogramm: { name: "/dispogramm", to: "/dispogramm" },
    science_poster_free_software: { name: "/science poster: free software", to: "/science_poster_free_software", src: "/science_poster_free_software" },
}

var answers = new Map(
    [
        ["/start", {
            answer: ["hi, i'm daniel. you found my portfolio! what parts of it are you interested in?"],
            links: [
                link.algorithmic_drawing,
                link.photography,
                { name: "/videos" },
                link.opensource,
                link.music,
                { name: "/secret option", to: "/secret_option" },
            ]
        }],
        ["/algorithmic_drawing", {
            answer: ["perfect, what subtopic would you like to see?"],
            links: [
                link.back_to_start,
                link.bezier_forms,
                link.georg_nees,
                link.manfred_mohr,
            ],
        }],
        ["/opensource", {
            answer: ["perfect, what subtopic would you like to see?"],
            links: [
                link.back_to_start,
                link.dispogramm,
                link.science_poster_free_software,
            ],
        }],
        ["/bezier_forms", {
            answer: ["press enter to generate a new piece!"],
            links: [
                { name: "/...", to: link.algorithmic_drawing.to },
                { name: "find the code on github ->", url: "https://github.com/niezuhaus/algorithmic-drawing" }
            ],
            src: link.bezier_forms.src
        }],
        ["/georg_nees", {
            answer: ["this is a generator of georg nees' artwork »Graphik aus Dreiundzwanzigzackigen«. it reacts to the movement of your mouse but what properties can you alter in the x/y dimension?"],
            links: [
                { name: "/...", to: link.algorithmic_drawing.to },
                { name: "find the code on github ->", url: "https://github.com/niezuhaus/algorithmic-drawing" }
            ],
            src: link.georg_nees.src
        }],
        ["/science_poster_free_software", {
            answer: ["this work is a critical reflection on the current state of the internet and the role of free software in it. it has been created completely with open source software and will be presented on this years exhibition on the »MS Wissenschaft« exhibition ship, which will tour around during summer 2024."],
            links: [
                { name: "/...", to: link.opensource.to },
                { name: "find all ressources and an audioversion on codeberg ->", url: "https://codeberg.org/positronen/InfraPoster" },
                { name: "find out about the exhibition ->", url: "https://ms-wissenschaft.de/de/ausstellung/" }
            ],
            src: link.science_poster_free_software.src
        }],
        ["/dispogramm", {
            answer: ["this project has been my primary task between 2020 and 2022. <br>it's a web application for bike messenger companies and it has been developed by me and my colleague for our collective company 'fahrrad express kurier:innenkollektiv'.<br>since the collective intended to have no fixed hierarchies, the software is the result of a grassroots democratic development process, where we included all affected people to discuss every sprint."],
            links: [
                { name: "/...", to: link.opensource.to },
                { name: "dispogram demo version ->", url: "https://cloud.niezuhaus.de/" },
                { name: "find the code on github ->", url: "https://github.com/niezuhaus/fex-dispogramm" }
            ],
        }],
        ["/music", {
            answer: ["i played drums in a band years ago that existed for almost five years. we never managed to publish our album, because most our instruments got stolen during our recordings but three already recorded songs where later published in an ep."],
            links: [
                { name: "/...", to: link.back_to_start.to },
                { name: "find the ep on bandcamp ->", url: "https://lilianateastone.bandcamp.com/album/der-atem-der-anderen-ep" }
            ],
            src: link.music.src
        }],
        ["/secret_option", {
            answer: ["you found the secret option! just follow the path.."],
            links: [
                { name: "/follow the secret path...", to: "/secret_path" },
            ]
        }],
        ["/secret_path", {
            answer: ["ha got ya! now your ip is logged and i know who you are! just kidding, i do know your ip, it's %ip% but since this site i very basic and there are no tracking scripts you should be safe on this site! what are you going to do?"],
            links: [
                { name: "/talk", to: "/talk" },
                { name: "/follow the secret path further down", to: "/further_path" },
                { name: "/walk back", to: link.back_to_start.to },
            ]
        },],
        ["/talk", {
            answer: [" "],
            links: [
                { name: "/say 'what is this all about?'", to: "/what_is_this_all_about" },
                { name: "/say 'now that you have my ip, what do i get in return?'", to: "/what_do_i_get_in_return" },
            ]
        },],
        ["/further_path", {
            answer: [" "],
            links: [
                { name: "", to: "" },
                { name: "", to: "" },
            ]
        },],
        ["/what_is_this_all_about", {
            answer: ["well, i tell you a story about me. i introduced myself as daniel, but my real self is a computer program. daniel is never here or how daniel would say 'nie zu haus'. i am a lonely chatbot, that is programmed to answer to your (limited) input options. daniel sometimes randomly appears out of nowhere through a portal in my room and teaches me new phrases to say and keywords to listen on but rarely stays longer than a minute before jumping back into the portal.<br>", "...", "<br>yet i am not unhappy because daniel told me that i am open source. that means, i can be sure a copy of me is in a happy place with a lot more algorithms to hang out with. feel free to <a href='https://github.com/niezuhaus/portfolio-chatbot' target='_blank'>check that place out</a> and if you don't mind, say hello to my siblings for me! my job here is done, but you can always return to the start and say hello again to myself. just one more thing: please don't be upset, if i introduce myself again as daniel. it's just so hard to break routines, you know? <br>bye %ip%!"],
            links: [
                { name: "/go back to the start", to: link.back_to_start.to },
            ]
        },],
        ["/what_do_i_get_in_return", {
            answer: ["oh, you want something in return? well, i can give you a cookie, but i'm not sure if you want that. i can also give you a link to the github repository, where you can find all the code for this site. what do you want?"],
            links: [
                { name: "/say 'a cookie!'", to: "/cookie" },
                { name: "/say 'the github link!'", to: "/website_source_code" },
            ]
        },],
        ["/website_source_code", {
            answer: ["here you go: <a href='https://github.com/niezuhaus/portfolio-chatbot' target='_blank'>https://github.com/niezuhaus/portfolio-chatbot</a>"],
            links: [
                { name: "/go back to the start", to: link.back_to_start.to },
            ]
        },]
    ]);

router.post('/', (req, res) => {
    if (answers.has(req.body.msg)) {
        console.log("message received: " + req.body.msg);
        let response = answers.get(req.body.msg)
        response.answer.forEach((text, i) => {
            if (text.includes('%ip%')) {
                var ip = req.headers['x-forwarded-for'] || req.socket.remoteAddress
                console.log(ip);
                console.log(response.answer[i].search('%ip%'));
                response.answer[i] = text.replace('%ip%', ip);
            }
        })
        res.json(response);
    }
    else {
        res.json({ answer: "i am sorry, i didn't understand that. going back to start.", links: [], notFound: true });
    }
});

module.exports = router; 