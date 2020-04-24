if(document.getElementById('particles-js') != null) {
    particlesJS.load('particles-js', 'asset/particlesjs-config.json', function() {
        console.log('callback - particles.js config loaded');
    });
}


/*Change image pour la bloc PRO TEAM*/
function changeImage() {
    document.getElementById("imgProOne").style.display = "none";
    document.getElementById("imgProTwo").style.display = "block";
}
function normalImage() {
    document.getElementById("imgProOne").style.display = "block";
    document.getElementById("imgProTwo").style.display = "none";
}
function changeImageBis() {
    document.getElementById("imgProOneBis").style.display = "none";
    document.getElementById("imgProTwoBis").style.display = "block";
}
function normalImageBis() {
    document.getElementById("imgProOneBis").style.display = "block";
    document.getElementById("imgProTwoBis").style.display = "none";
}


/*Vidéo*/
document.addEventListener("DOMContentLoaded", function() {
    const video = document.querySelector('.video');
    if (video != null) {
        const play = document.querySelector('.fa-play');
        const pause = document.querySelector('.fa-pause');
        const reset = document.querySelector('.fa-undo');
        const volumeUp = document.querySelector('.fa-volume-up');
        const volumeMute = document.querySelector('.fa-volume-mute');

        video.play();
        play.style.display = "none";
        volumeUp.style.display = "none";

        video.addEventListener('click', function () {
            if (video.paused) {
                video.play();
                play.style.display = "none";
                pause.style.display = "inline";
            } else {
                video.pause();
                play.style.display = "inline";
                pause.style.display = "none";
            }
        });

        play.addEventListener('click', function () {
            video.play();
            play.style.display = "none";
            pause.style.display = "inline";
        });
        pause.addEventListener('click', function () {
            video.pause();
            play.style.display = "inline";
            pause.style.display = "none";
        });
        reset.addEventListener('click', function () {
            video.currentTime = 0;
        });
        volumeMute.addEventListener('click', function () {
            video.muted = false;
            volumeUp.style.display = "inline";
            volumeMute.style.display = "none";
        });
        volumeUp.addEventListener('click', function () {
            video.muted = true;
            volumeUp.style.display = "none";
            volumeMute.style.display = "inline";
        });
    }
});
/*logo*/
const logo = document.querySelector('.logo');
logo.addEventListener('click', function () {
    window.location.href = "index.html";
});

/*Formulaire*/
const send = document.querySelector('#send');
const name = document.querySelector('#name');

if (send != null) {
    send.addEventListener('click',function () {
        const data = {
            "name": name.value
        };

        fetch('https://reqres.in/api/users',{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        }).then(function (result) {
            if (result.status == 201) {
                console.log('OK')
                window.location.href = "validation.html";
            }
        });
    });
}

/*Progress bar */
fetch('https://reqres.in/api/users').then(function (result) {

    return result.json();

}).then(function (data) {

    const subscriber = 500 + data.total;

    let objectiveBar = document.querySelector('.objective-bar');
    let progressBar = document.querySelector('.progress-bar');

    if (subscriber > 500) {

        objectiveBar.style.display = "block";
        progressBar.style.width = (subscriber/1000)*100 + '%';
        progressBar.innerHTML = subscriber + " " + "/ 1000 Inscrits";

    } else {

        objectiveBar.style.display = "none";
    }
});

document.addEventListener('scroll', function (event) {
    console.log(event);

});


if(document.getElementById('comparaison') != null) {
    document.addEventListener('DOMContentLoaded', function () {
        var beforeAfterExample = new BeforeAfter(document.querySelector('#comparaison'));
    });
}

