
var express = require('express');
var router = express.Router();

var link = {
    back_to_start: { name: "/...", to: "/start" },
    algorithmic_drawing: { name: "/algorithmic drawing", to: "/algorithmic_drawing" },
    photography: { name: "/photography" },
    music_and_sound: { name: "/music & sound", to: "/music_and_sound" },
    lilian: { name: "/lilian ate a stone" , to: "/lilian_ate_a_stone", src: "/lilian_ate_a_stone"},
    metal_data_sounds: { name: "/metal, data, sounds" , to: "/metal_data_sounds", src: "/metal_data_sounds"},
    opensource: { name: "/open source", to: "/open_source" },
    bezier_forms: { name: "/bezier forms", to: "/bezier_forms", src: "/bezierforms" },
    georg_nees: { name: "/georg nees", to: "/georg_nees", src: "/georg_nees" },
    manfred_mohr: { name: "/manfred mohr", to: "/manfred_mohr", src: "/manfred_mohr" },
    dispogramm: { name: "/dispogramm"},
    science_poster_free_software: { name: "/science poster: free software", to: "/science_poster_free_software", src: "/science_poster_free_software" },
}

var answers = new Map(
    [
        [link.back_to_start.to, {
            answer: ["hi, i'm daniel. you found my portfolio! what parts of it are you interested in?"],
            links: [
                link.algorithmic_drawing,
                link.photography,
                { name: "/videos" },
                link.opensource,
                link.music_and_sound,
                { name: "/secret option", to: "/secret_option" },
            ]
        }],
        [link.algorithmic_drawing.to, {
            answer: ["these projects have been developed in computer art pioneer Frieder Nakes yearly algorithmic drawing course. we started by abstracting and imitating artworks from early artist in the field. all of it has been originally developed in <a href='https://processing.org/' target='_blank'>processing</a> and was later ported to web via <a href='https://p5js.org/' target='_blank'>p5.js</a> using a converter. "],
            links: [
                link.back_to_start,
                link.bezier_forms,
                link.georg_nees,
                link.manfred_mohr,
            ],
        }],
        [link.opensource.to, {
            answer: ["perfect, what subtopic would you like to see?"],
            links: [
                link.back_to_start,
                link.dispogramm,
                link.science_poster_free_software,
            ],
        }],
        [link.bezier_forms.to, {
            answer: ["press enter to generate a new piece!"],
            links: [
                { name: "/...", to: link.algorithmic_drawing.to },
                { name: "find the code on github ->", url: "https://github.com/niezuhaus/algorithmic-drawing/tree/main/bezierforms" }
            ],
            src: link.bezier_forms.src
        }],
        [link.georg_nees.to, {
            answer: ["this sketch can generate artworks similar to Georg Nees' »Graphik aus Dreiundzwanzigzackigen« (1967). it reacts to the movement of your mouse but what properties can you alter in the x/y dimension?"],
            links: [
                { name: "/...", to: link.algorithmic_drawing.to },
                { name: "find the code on github ->", url: "https://github.com/niezuhaus/algorithmic-drawing/tree/main/georg_nees" }
            ],
            src: link.georg_nees.src
        }],
        [link.manfred_mohr.to, {
            answer: ["this sketch can generate artworks similar to Manfred Mohrs »P021-G« (1970). press enter or click to generate a new version. find a video of it being printed below"],
            links: [
                { name: "/...", to: link.algorithmic_drawing.to },
                { name: "find the code on github ->", url: "https://github.com/niezuhaus/algorithmic-drawing/tree/main/manfred_mohr" }
            ],
            src: link.manfred_mohr.src
        }],
        [link.science_poster_free_software.to, {
            answer: ["this work is a critical reflection on the current state of the internet and the role of free software in it. it has been created completely with open source software and will be presented on this years side exhibition of the »MS Wissenschaft« exhibition ship, which will tour around during summer 2024."],
            links: [
                { name: "/...", to: link.opensource.to },
                { name: "find all ressources and an audioversion on codeberg ->", url: "https://codeberg.org/positronen/InfraPoster" },
                { name: "find out about the exhibition ->", url: "https://ms-wissenschaft.de/de/ausstellung/" }
            ],
            src: link.science_poster_free_software.src
        }],
        [link.dispogramm.name, {
            answer: ["this project has been my primary task between 2020 and 2022. <br>it's a web application for bike messenger companies and it has been developed by me and my colleague for our collective company 'fahrrad express kurier:innenkollektiv'.<br>since the collective intends to not have fixed hierarchies, the software could be seen as the result of a grassroots democratic development process. we included all affected people to discuss their necessities and the further development sprints. since this was a fully internal project, where we knew each other already, we could also remove possible hierarchies between developer and customer, that people usually experience in custom software projects like this. i documented and discussed this process in my bachelorthesis which was reviewed by Frieder Nake and Peter Maydell."],
            links: [
                { name: "/...", to: link.opensource.to },
                { name: "try the dispogramm demo version ->", url: "https://cloud.niezuhaus.de/" },
                { name: "find the code on github ->", url: "https://github.com/niezuhaus/fex-dispogramm" },
                { name: "read my bachelorthesis ->", url: "https://wolke.niezuhaus.de/s/Y7y3TDxi3s9Q9Er" }
            ],
        }],
        [link.music_and_sound.to, {
            answer: ["perfect, what subtopic of the music section would you like to see? there's some band content as well as sound synthesis projects"],
            links: [
                link.back_to_start,
                link.metal_data_sounds,
                link.lilian,
            ],
        }],
        [link.lilian.to, {
            answer: ["i played drums in a band years ago. we never managed to publish our album, because sadly enough most of our instruments got stolen during our recordings but three already recorded songs where later published in an ep you might enjoy."],
            links: [
                { name: "/...", to: link.music_and_sound.to },
                { name: "find the ep on bandcamp ->", url: "https://lilianateastone.bandcamp.com/album/der-atem-der-anderen-ep" }
            ],
            src: link.lilian.src
        }],
        [link.metal_data_sounds.to, {
            answer: ["this work was finished in a course of (electroacoustic) composer Kilian Schwoon. we received measuring data from <a href='https://www.uni-bremen.de/farbige-zustaende' target='_blank'>collaborative research centre 1232</a> at university bremen which did research on alloys. the dataset we received consisted mainly of microscopic images of their alloys. i decided to go for measuring grain size and control synthesizers depending on this data."],
            links: [
                { name: "/...", to: link.music_and_sound.to },
                { name: "find the code on github ->", url: "https://github.com/niezuhaus/" },
                // @todo: insert real link
            ],
            src: link.metal_data_sounds.src
        }],
        ["/secret_option", {
            answer: ["you found the secret option! just follow the path.."],
            links: [
                { name: "/follow the secret path...", to: "/secret_path" },
            ]
        }],
        ["/secret_path", {
            answer: ["ha got ya! now your ip is logged and i know who you are! just kidding, i do know your ip, it's '%ip%', but since this site is very basic and there are no tracking scripts you should be safe! what are you going to do?"],
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
        res.json({ answer: ["i am sorry, i didn't understand that. going back to start."], links: [], notFound: true });
    }
});

module.exports = router; 