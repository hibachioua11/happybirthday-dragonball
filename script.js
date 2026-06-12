function nextScreen(number){

    let screens =
    document.querySelectorAll(".screen");

    screens.forEach(screen => {
        screen.classList.remove("active");
    });

    document
    .getElementById("screen" + number)
    .classList.add("active");

    // Confetti on Goku page
    if(number === 2){
        launchConfetti();
    }

    // Final message animation
    if(number === 4){
        typeMessage();
        launchFinalConfetti();
    }
}

function launchConfetti(){

    confetti({
        particleCount:150,
        spread:100,
        origin:{ y:0.6 }
    });

}

function launchFinalConfetti(){

    let duration = 3000;
    let end = Date.now() + duration;

    (function frame(){

        confetti({
            particleCount:5,
            angle:60,
            spread:55,
            origin:{ x:0 }
        });

        confetti({
            particleCount:5,
            angle:120,
            spread:55,
            origin:{ x:1 }
        });

        if(Date.now() < end){
            requestAnimationFrame(frame);
        }

    })();
}

function typeMessage(){

    let text =
    "Happy Birthday! We hope this year is filled with happiness, success, unforgettable moments, and many victories. Keep chasing your dreams, believing in yourself, and enjoying every moment of the journey. Have an incredible birthday and an amazing year ahead!";

    let box =
    document.getElementById("message");

    if(!box) return;

    box.innerHTML = "";

    let i = 0;

    let timer = setInterval(() => {

        box.innerHTML += text.charAt(i);

        i++;

        if(i >= text.length){
            clearInterval(timer);
        }

    }, 40);
}
