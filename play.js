document.getElementById('stop').addEventListener('click', function () {
    window.location.href = './index.html'
})

console.log('play.js connected')



// ? Functions 

function elClass(tag, className,) {
    const element = Object.assign(document.createElement(tag), { className });
    return document.body.appendChild(element);
}

function elClassCont(tag, className, content, parent) {
    const element = Object.assign(document.createElement(tag), { className });
    element.innerHTML = content;
    parent.appendChild(element);
    return element;
}

let timeLeft = 5;
let timeoutId = null;

function countdown() {
    const clickMe = document.getElementsByClassName('click-me')[0];

    document.getElementById("seconds").innerHTML = String(timeLeft);

    if (timeLeft > 0) {
        timeLeft--;
        // console.log(clickMe)

        clickMe.addEventListener('click', function () {

            clearTimeout(timeoutId)
            const seconds = document.getElementById('seconds')
            seconds.textContent = '0';
            console.log('stop')

        })
        // console.log("line 27")
        timeoutId = setTimeout(countdown, 1000);
    } else if (timeLeft === 0) {
        console.log("line 30")

        removeRestart()
        resetTimer(30)
        timeoutId = setTimeout(countdown, 1000);

        Array.from(document.getElementsByClassName('click-me')).forEach(el => {
            el.style.backgroundColor = 'white';
            el.style.color = 'black';
            el.innerText = "S T O P";

            el.addEventListener('mouseenter', function () {
                this.style.backgroundColor = 'red';
                this.style.color = '#FFFFFF';
                this.innerText = "S T O P";
            });

            el.addEventListener('mouseleave', function () {
                this.style.backgroundColor = 'white';
                this.style.color = 'black';
                this.innerText = "S T O P";
            });
        });
        console.log('line 35');

        const gameplayDescription = elClass('h3', 'description-gameplay')
        gameplayDescription.innerHTML = `Try to fill as much categories as you can, good luck!`;

        // Gameplay Section

        const roundTitle = elClassCont('DIV', 'small-rectangle round-title', `ROUND ${1}`, body);

        const gameplayContainer = elClassCont('DIV', 'gameplay-container', '', body);


        const headingsContainer = elClassCont('DIV', 'headings-container', '', gameplayContainer);

        const catContainer = elClassCont('DIV', 'cat-container', '', headingsContainer);
        const countryCat = elClassCont('DIV', 'small-rectangle categories', 'Country', catContainer);
        const sportCat = elClassCont('DIV', 'small-rectangle categories', 'Sport', catContainer);
        const professionCat = elClassCont('DIV', 'small-rectangle categories', 'Profession', catContainer);

        const nameScoreContainer = elClassCont('DIV', 'nameScore-container', '', headingsContainer);
        const playerName = elClassCont('DIV', 'small-rectangle nameScore', 'Player', nameScoreContainer);
        const score = elClassCont('DIV', 'small-rectangle nameScore', 'Score', nameScoreContainer);







    }

};

// ? HTML Structure

const title = document.querySelector('h1');
const main = elClass('MAIN', 'container');
const body = document.querySelector('body');

const generators = elClassCont('SECTION', 'generators', '', main)
elClassCont('DIV', 'small-rectangle', 'A', generators);

const sideContainer = elClassCont('DIV', 'side-container', '', generators)
elClassCont('DIV', 'small-rectangle click-me', 'Click Me!', sideContainer);


// Extract logic into its own function
function startSequence(sideContainer) {
    let currentIndex = 0;
    let loops = 0;
    const maxLoops = 2;
    const lettersArray = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');

    const intervalId = setInterval(() => {
        document.querySelector('.small-rectangle').innerText = lettersArray[currentIndex];
        currentIndex = (currentIndex + 1) % lettersArray.length;

        if (currentIndex === 0) {
            loops++;
        }

        if (loops === maxLoops) {
            clearInterval(intervalId);

            const randomIndex = Math.floor(Math.random() * lettersArray.length);
            document.querySelector('.small-rectangle').innerText = lettersArray[randomIndex];
            Array.from(document.getElementsByClassName('click-me')).forEach(el => {
                el.style.backgroundColor = '#D5D5D5';
                el.innerText = "<--------";
            });

            const restartBtn = document.getElementsByClassName('restart')[0];

            if (!restartBtn) {
                elClassCont('DIV', 'small-rectangle restart', 'Restart', sideContainer);
            }

            const timerCircle = document.getElementById('timer');
            if (!timerCircle) {
                const timer = document.createElement('DIV')
                timer.id = 'timer'

                const mainElement = document.querySelector('main');
                mainElement.parentNode.insertBefore(timer, mainElement);


                const timerSpan = elClassCont('SPAN', '', '10', timer);
                timerSpan.id = 'seconds';
                countdown();
            }

            document.getElementsByClassName('restart')[0].addEventListener('click', function () {
                console.log('restart')
                timeLeft = 6;
                startSequence(sideContainer);
            });
        }
    }, 50);
}

document.getElementsByClassName('click-me')[0].addEventListener('click', function () {
    if (this.disabled) {
        return;
    }

    this.disabled = true;
    startSequence(sideContainer);

});

function removeRestart() {
    let restartButton = document.getElementsByClassName('restart')[0]
    let parent = document.getElementsByClassName('side-container')[0]

    parent.removeChild(restartButton)
}

function resetTimer(seconds) {
    timeLeft = seconds;
}


elClass('hr', 'hr-main');
