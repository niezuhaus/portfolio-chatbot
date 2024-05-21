    const delay = 1;
    const pauseBetweenLinks = 50;
    // link html refs
    var textref = document.getElementById('text');
    linkRefs = [
        document.getElementById('link1'),
        document.getElementById('link2'),
        document.getElementById('link3'),
        document.getElementById('link4'),
        document.getElementById('link5'),
    ];
    var frame = document.getElementById('frame');

    // creating the typewriters
    var typewriter = new Typewriter(textref, {
        loop: false,
        delay: delay,
        deleteSpeed: delay,
    });
    var linkwriter = [];
    for (let i = 0; i < linkRefs.length; i++) {
        linkwriter[i] = new Typewriter(linkRefs[i], {
            loop: false,
            delay: delay,
            deleteSpeed: delay,
            cursor: ''
        });
    }

    var response;
    var lastResponse;

    var fillLinks = function () {
        linkwriter.forEach((writer, i) => {
            linkRefs[i].removeAttribute("href");
            linkRefs[i].onclick = () => {}
            writer
                .deleteChars(lastResponse?.links[i]?.name?.length || 1)
                .pauseFor(pauseBetweenLinks)
                .typeString(response?.links[i]?.name || '')
                .start()
        });
        response.links.forEach((link, i) => {
            let linkRef = linkRefs[i];
            if (link.url) {
                linkRef.href = link.url;
                linkRef.target = '_blank'
                // linkRef.onclick = () => {
                //     // github, some website etc..
                //     window.open(link.url, '_blank').focus();
                // };
            } else {
                linkRef.onclick = () => {
                    // next talking step
                    talk(link.to || link.name);
                    if (link.src)
                        frame.src = link.src
                }
            }
        });
    };

    var linkIterator

    var talk = function (msg) {
        if (msg) {
            // Send POST request
            fetch('/talk/', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ msg: msg })
            })
                .then(response => response.json())
                .then(data => {
                    console.log(data);
                    if (data.answer) {
                        lastResponse = response;
                        response = data;

                        // delete everything
                        textref.innerHTML = ''
                        // typewriter.deleteChars(lastResponse?.answer?.length || 1)
                        typewriter = new Typewriter(textref, {
                            loop: false,
                            delay: delay,
                            deleteSpeed: delay,
                        });

                        typewriter
                            .pauseFor(500)
                            .typeString(data.answer)
                            .callFunction(() => {
                                fillLinks()

                            })
                            .start();
                    }
                })
                .catch(error => {
                    // Handle error
                    console.error(error);
                });
        }
    }
    talk('/start');