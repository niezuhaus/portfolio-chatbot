
var express = require('express');
var router = express.Router();

var link = {
    back_to_start: { name: "/...", to: "/start" },
    algorithmic_drawing: { name: "/algorithmic drawing", to: "/algorithmic_drawing" },
    bezier_forms: { name: "/bezier forms", to: "/algorithmic_drawing/bezier_forms", src: "/algorithmic_drawing/bezierforms" },
    georg_nees: { name: "/georg nees", to: "/algorithmic_drawing/georg_nees", src: "/algorithmic_drawing/georg_nees" },
    manfred_mohr: { name: "/manfred mohr", to: "/algorithmic_drawing/manfred_mohr", src: "/algorithmic_drawing/manfred_mohr" },
    circle_2: { name: "/circle²", to: "/algorithmic_drawing/circle_2", src: "/algorithmic_drawing/circle_2" },
    videos: { name: "/videos" },
    der_vegetarist: { name: "/der vegetarist", to: "/videos/der_vegetarist", src: "/videos/der_vegetarist" },
    timelapse: { name: "/timelapse", to: "/videos/timelapse", src: "/videos/timelapse" },
    photography: { name: "/photography" },
    music_and_sound: { name: "/music & sound", to: "/music_and_sound" },
    midi_drums: { name: "/analog drums midi controller", to: "/music_and_sound/midi-drums", src: "/music_and_sound/midi-drums" },
    variete: { name: "/variete", to: "/music_and_sound/variete", src: "/music_and_sound/variete" },
    lilian: { name: "/lilian ate a stone", to: "/music_and_sound/lilian_ate_a_stone", src: "/music_and_sound/lilian_ate_a_stone" },
    metal_data_sounds: { name: "/metal, data, sounds", to: "/music_and_sound/metal_data_sounds", src: "/music_and_sound/metal_data_sounds" },
    opensource: { name: "/open source", to: "/open_source" },
    dispogramm: { name: "/dispogramm" },
    science_poster_free_software: { name: "/science poster: free software", to: "/science_poster_free_software", src: "/science_poster_free_software" },
    about_me: { name: "/about me", to: "/about_me", src: "/about_me" }
}

var answers = new Map(
    [
        [link.back_to_start.to, {
            name: "/start",
            answer: ["hi, i'm daniel. a <span class='high'>software developer</span>, <span class='high'>musician</span>, and prospective <span class='high'>media artist</span> based in bremen. you found my portfolio! what parts of it are you interested in?"],
            links: [
                link.music_and_sound,
                link.opensource,
                link.algorithmic_drawing,
                link.videos,
                // link.photography,
                link.about_me
            ]
        }],
        [link.algorithmic_drawing.to, {
            name: link.algorithmic_drawing.name,
            answer: ["these projects have been developed in computer art pioneer <span class='high'>Frieder Nakes</span> course about algorithmic drawing. we started by abstracting and imitating artworks from early artist in the field. all of it has been originally developed in <a href='https://processing.org/' target='_blank'>processing</a> and was later ported to web via <a href='https://p5js.org/' target='_blank'>p5.js</a> using a converter. "],
            links: [
                link.back_to_start,
                link.bezier_forms,
                link.georg_nees,
                link.manfred_mohr,
                link.circle_2
            ],
        }],
        [link.bezier_forms.to, {
            name: link.bezier_forms.name,
            answer: ["press <span class='high'>enter</span> to generate a new piece!"],
            links: [
                { name: "/...", to: link.algorithmic_drawing.to },
                { name: "find the code on github ->", url: "https://github.com/niezuhaus/algorithmic-drawing/tree/main/bezierforms" }
            ],
            src: link.bezier_forms.src
        }],
        [link.georg_nees.to, {
            name: link.georg_nees.name,
            answer: ["this sketch can generate artworks similar to <span class='high'>Georg Nees</span>' »Graphik aus Dreiundzwanzigzackigen« (1967). it reacts to the movement of your mouse but what properties can you alter in the x/y dimension?"],
            links: [
                { name: "/...", to: link.algorithmic_drawing.to },
                { name: "find the code on github ->", url: "https://github.com/niezuhaus/algorithmic-drawing/tree/main/georg_nees" }
            ],
            src: link.georg_nees.src
        }],
        [link.manfred_mohr.to, {
            name: link.manfred_mohr.name,
            answer: ["this sketch can generate artworks similar to <span class='high'>Manfred Mohrs</span> »P021-G« (1970). press enter or click to generate a new version. find a video of it being printed below"],
            links: [
                { name: "/...", to: link.algorithmic_drawing.to },
                { name: "find the code on github ->", url: "https://github.com/niezuhaus/algorithmic-drawing/tree/main/manfred_mohr" }
            ],
            src: link.manfred_mohr.src
        }],
        [link.circle_2.to, {
            name: link.circle_2.name,
            answer: ["some interactions between a circle and a square"],
            links: [
                { name: "/...", to: link.algorithmic_drawing.to },
            ],
            src: link.circle_2.src
        }],
        [link.videos.name, {
            name: link.videos.name,
            answer: ["during my bachelor i managed to get some videos done."],
            links: [
                link.back_to_start,
                link.der_vegetarist,
                link.timelapse,
            ],
        }],
        [link.der_vegetarist.to, {
            name: link.der_vegetarist.name,
            answer: ["this was one of my first semester projects during my bachelor studies. i made it in 2017 during Nuri Ovüecs course 'Mediengestaltung 1'. at that time, i felt like i needed to make fun of some typical discussions i was facing as a vegetarian. times have changed ever since though.."],
            links: [
                { name: "/...", to: link.videos.name },
            ],
            src: link.der_vegetarist.src
        }],
        [link.timelapse.to, {
            name: link.timelapse.name,
            answer: ["in 2016 i participated in a timelapse video competition using some of my timelapse footage i had shot during my volunteering year in colombia 2015. timelapsing has a lot to do with just waiting. waiting sometimes hours for the shot to be done (espacially for slow movements to capture like stars). the good thing about it is, that i remember all of those places very well, which is why this video has more of a personal value for me."],
            links: [
                { name: "/...", to: link.videos.name },
            ],
            src: link.timelapse.src
        }],
        [link.opensource.to, {
            name: link.opensource.name,
            answer: ["this category features two works that are very different from each other but one difference is just tiny: the first is <span class='high'>about</span> open source (resp. »free software«) the other <span class='high'>is</span> open source."],
            links: [
                link.back_to_start,
                link.science_poster_free_software,
                link.dispogramm,
            ],
        }],
        [link.science_poster_free_software.to, {
            name: link.science_poster_free_software.name,
            answer: ["this work is a critical reflection on the current state of the internet and the crucial role of free software (e.g. open source software) in it. designed (of course) in inkscape by me with texts and research from nate wessalowski. it will be presented on this years side exhibition of the »MS Wissenschaft« in münster."],
            links: [
                { name: "/...", to: link.opensource.to },
                { name: "find all ressources and an audioversion on codeberg ->", url: "https://codeberg.org/positronen/InfraPoster" },
                { name: "find out about the exhibition ->", url: "https://ms-wissenschaft.de/de/ausstellung/" }
            ],
            src: link.science_poster_free_software.src
        }],
        [link.dispogramm.name, {
            name: link.dispogramm.name,
            answer: ["this project has been my primary task between 2020 and 2022. <br>it's a <span class='high'>web application for bike messenger companies</span> and it has been developed by me and my colleague for our collective company 'fahrrad express kurier:innenkollektiv'.<br>since the collective intends to not have fixed hierarchies, the software could be seen as the result of a <span class='high'>grassroots democratic development process</span>. we included all affected people to discuss their necessities and the further development sprints. since this was a fully internal project, where we knew each other already, we could also remove possible hierarchies between developer and customer, that people usually experience in custom software projects like this. i documented and discussed this process in my bachelorthesis which was reviewed by <span class='high'>Frieder Nake</span> and <span class='high'>Peter Maydell</span>."],
            links: [
                { name: "/...", to: link.opensource.to },
                { name: "try the dispogramm demo version ->", url: "https://cloud.niezuhaus.de/" },
                { name: "find the code on github ->", url: "https://github.com/niezuhaus/fex-dispogramm" },
                { name: "read my bachelorthesis ->", url: "https://wolke.niezuhaus.de/s/Y7y3TDxi3s9Q9Er" }
            ],
        }],
        [link.music_and_sound.to, {
            name: link.music_and_sound.name,
            answer: ["perfect, what subtopic of the music section would you like to see? there's some band content as well as sound synthesis projects"],
            links: [
                link.back_to_start,
                link.midi_drums,
                link.metal_data_sounds,
                link.variete,
                link.lilian,
            ],
        }],
        [link.midi_drums.to, {
            name: link.midi_drums.name,
            answer: ["the analog drums midi controller is one of my most recent projects. i love to play the drums, but i also like to work with midi, which is why i got myself some e-drums in 2022. this extension will give an accoustic drum set a standard midi interface to connect to while preserving the joy of playing on a real drumset.", "<br><br>it's made of an arduino and some piezo contact microphones. watch the video below, to find out, what this device is capable of..and what it's not (yet).", "also i recently found out that <span class='high'>David Unland</span> has made a <a href='http://davidunland.de/muscle/'>similar but way more sophisticated project</a> as master thesis. i guess, following the rules of open source, i'll take it as an inspiration, to build my own project upon as i am still standing in the beginning"],
            links: [
                { name: "/...", to: link.music_and_sound.to },
                { name: "find the arduino code on github ->", url: "https://github.com/niezuhaus/analog-drums-midi-controller" },
            ],
            src: link.midi_drums.src
        }],
        [link.variete.to, {
            name: link.variete.name,
            answer: ["the »varieté« is a <span class='high'>self-organized</span> circus show that takes place every may in schaulust, güterbahnhof, bremen. i had the honor to be part of this years band. the story behind it was about <span class='high'>gaming</span>. my job besides being the drummer was to play all the necessary sounds, that i had sampled before onto different e-drum pads or via a small midi-keyboard."],
            links: [
                { name: "/...", to: link.music_and_sound.to },
            ],
            src: link.variete.src
        }],
        [link.lilian.to, {
            name: link.lilian.name,
            answer: ["i played drums in a band years ago. we never managed to publish our album, because sadly enough most of our instruments got stolen during our recordings but three already recorded songs where later published in an ep you might enjoy."],
            links: [
                { name: "/...", to: link.music_and_sound.to },
                { name: "find the ep on bandcamp ->", url: "https://lilianateastone.bandcamp.com/album/der-atem-der-anderen-ep" }
            ],
            src: link.lilian.src
        }],
        [link.metal_data_sounds.to, {
            name: link.metal_data_sounds.name,
            answer: ["this work was finished in a course of (electroacoustic) composer Kilian Schwoon. we received measuring data from <a href='https://www.uni-bremen.de/farbige-zustaende' target='_blank'>collaborative research centre 1232</a> at university bremen which did research on alloys. the dataset we received consisted mainly of microscopic images of their alloys. (examples below) i decided to go for <span class='high'>pre-processing</span> some of the grain images measuring their size and controlling some synthesizers adsr-values depending on this <span class='high'>extracted data</span>. <br>note: this project is not ported to web yet. you can run the processing sketch found on github or watch the demovideo below"],
            links: [
                { name: "/...", to: link.music_and_sound.to },
                { name: "find the code on github ->", url: "https://github.com/niezuhaus/metal-data-sounds" },
            ],
            src: link.metal_data_sounds.src
        }],
        ["/about_me", {
            name: link.about_me.name,
            answer: ["well, if you discovered all the other options on this website already you know quite a bit about me. i'd say at this point you might just <a onclick = 'openMailer(this)'>get in touch via e-mail</a> or...", "<br><br>...OR", "<br><br>", "<a onclick='%secret%'>CLICK HERE</a>"],
            links: [
                link.back_to_start,
            ]
        }
        ],
        ["/secret_option", {
            name: "secret option",
            answer: ["you found the secret option! just follow the path.."],
            links: [
                { name: "/follow the secret path...", to: "/secret_path", secret: true },
                { name: "/go back", to: "/start" },
            ]
        }],
        ["/secret_path", {
            name: "secret path",
            answer: ["ha got ya! now your ip is logged and i know who you are! just kidding, i do know your ip, it's '%ip%', but since this site is very basic and there are no tracking scripts you should be safe! what are you going to do?"],
            links: [
                { name: "/talk", to: "/talk", secret: true },
                { name: "/follow the secret path further down", to: "/further_path", secret: true },
                { name: "/walk back", to: link.back_to_start.to },
            ]
        }],
        ["/talk", {
            name: "talk",
            answer: [" "],
            links: [
                { name: "/say 'now that you have my ip, what do i get in return?'", to: "/what_do_i_get_in_return", secret: true },
                { name: "/say 'what is this all about?'", to: "/what_is_this_all_about", secret: true },
            ]
        }],
        ["/further_path", {
            name: "further path",
            answer: ["seems like this path is going in a circle..."],
            links: [
                { name: "/follow the path further along", to: "/further_path", secret: true,},
            ],
        }],
        ["/what_is_this_all_about", {
            name: "what is this all about?",
            answer: ["well, i tell you a story about me. i introduced myself as daniel, but my real self is a computer program. daniel is never here or how daniel would say 'nie zu haus'. i am a lonely chatbot, that is programmed to answer to your (limited) input options. daniel sometimes randomly appears out of nowhere through a portal in my room and teaches me new phrases to say and keywords to listen on but rarely stays longer than a minute before jumping back into the portal.<br>", "...", "<br>yet i am not unhappy because daniel told me that i am open source. that means, i can be sure a copy of me is in a happy place with a lot more algorithms to hang out with. feel free to <a href='https://github.com/niezuhaus/portfolio-chatbot' target='_blank'>check that place out</a> and if you don't mind, say hello to my siblings for me! my job here is done, but you can always return to the start and say hello again to myself. just one more thing: please don't be upset, if i introduce myself again as daniel. it's just so hard to break routines, you know? <br>bye %ip%!"],
            links: [
                { name: "/go back to the start", to: link.back_to_start.to },
            ]
        }],
        ["/what_do_i_get_in_return", {
            name: "what do i get in return?",
            answer: ["oh, you want something in return? well, i can give you a cookie, but i'm not sure if you want that. i can also give you a link to the github repository, where you can find all the code for this site. what do you want?"],
            links: [
                { name: "/say 'a cookie!'", to: "/cookie", secret: true },
                { name: "/say 'the github link!'", to: "/website_source_code", secret: true },
            ]
        }],
        ["/website_source_code", {
            name: "website source code",
            answer: ["here you go: <a href='https://github.com/niezuhaus/portfolio-chatbot' target='_blank'>https://github.com/niezuhaus/portfolio-chatbot</a>"],
            links: [
                { name: "/go back to the start", to: link.back_to_start.to },
            ]
        }],
    ]);

router.post('/', (req, res) => {
    if (answers.has(req.body.msg)) {
        console.log("message received: " + req.body.msg);
        let response = answers.get(req.body.msg)
        response.answer.forEach((text, i) => {
            if (text.includes('%ip%')) {
                var ip = req.headers['x-forwarded-for'] || req.socket.remoteAddress
                console.log(ip);
                response.answer[i] = text.replace('%ip%', ip);
            }
            if (text.includes('%secret%')) {
                response.answer[i] = text.replace('%secret%', 'talk("/secret_option", true)');
            }
        })
        res.json(response);
    }
    else {
        res.json({ answer: ["i am sorry, i didn't understand that. going back to start."], links: [], notFound: true });
    }
});

module.exports = router; 