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


let randomLetter = '';
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
        resetTimer(60)
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
        gameplayDescription.id = 'descriptionID';
        gameplayDescription.innerHTML = `Try to fill as much categories as you can, good luck!`;

        // ** Gameplay Structure Section

        // * No. of Round - HEADING
        const roundTitle = elClassCont('DIV', 'small-rectangle round-title', `ROUND ${1}`, body);


        // * Container for all
        const gameplayContainer = elClassCont('DIV', 'gameplay-container', '', body);

        // * Headings & Categories
        const headingsContainer = elClassCont('DIV', 'headings-container', '', gameplayContainer);

        const catContainer = elClassCont('DIV', 'cat-container', '', headingsContainer);
        const countryCat = elClassCont('DIV', 'small-rectangle categories', 'Country', catContainer);
        const sportCat = elClassCont('DIV', 'small-rectangle categories', 'Sport', catContainer);
        const professionCat = elClassCont('DIV', 'small-rectangle categories', 'Profession', catContainer);

        const nameScoreContainer = elClassCont('DIV', 'nameScore-container', '', headingsContainer);
        const playerName = elClassCont('DIV', 'small-rectangle nameScore', 'Player', nameScoreContainer);
        const score = elClassCont('DIV', 'small-rectangle nameScore', 'Score', nameScoreContainer);

        // * Inputs, Names & Score
        const inputsContainer = elClassCont('DIV', 'inputs-container', '', body);
        elClassCont('hr', 'player-division', '', body);

        const inputsCatContainer = elClassCont('DIV', 'inputCatContainer', '', inputsContainer);
        const inputCountry = elClassCont('textarea', 'inputsCat input-country', '', inputsCatContainer);
        inputCountry.id = 'input-country'

        const inputSport = elClassCont('textarea', 'inputsCat input-sport', '', inputsCatContainer);
        inputSport.id = 'input-sport'

        const inputProfession = elClassCont('textarea', 'inputsCat input-profession', '', inputsCatContainer);
        inputProfession.id = 'input-profession'


        const inputNameScore = elClassCont('DIV', 'inputNameScore', '', inputsContainer);
        const inputName = elClassCont('DIV', 'small-rectangle input-name', 'Name', inputNameScore);
        inputName.id = 'inputName';

        const scoreName = document.getElementById('inputName');
        const storedName = localStorage.getItem('userName');

        if (storedName) {
            scoreName.innerText = storedName;
        } else {
            console.log("No name stored");
        }



        const inputScore = elClassCont('DIV', 'small-rectangle input-score', '00', inputNameScore);

        // ** Inputs Alerts ** //

        const inputCountrySelector = document.getElementsByClassName('input-country')
        const inputSportSelector = document.getElementsByClassName('input-sport')
        const inputProfessionSelector = document.getElementsByClassName('input-profession')

        // ** Country
        Array.from(inputCountrySelector).forEach(input => {
            input.addEventListener('input', function () {
                if (this.value.length > 20) {
                    gameplayDescription.innerHTML = `<p style="color: red;"> Max Country Length Reach</p>`
                    this.value = this.value.slice(0, 20);
                } else if (/\d/.test(this.value)) {
                    gameplayDescription.innerHTML = "<p style='color: red;'>Numbers are not permited!</p>";
                } else {
                    gameplayDescription.innerHTML = "Try to fill as much categories as you can, good luck!";
                }
            });
        });

        // * Country Validation

        Array.from(inputCountrySelector).forEach(input => {
            let debounceTimeout = null;

            input.addEventListener('input', function () {
                clearTimeout(debounceTimeout);

                debounceTimeout = setTimeout(() => {
                    const inputCountry = this.value;
                    console.log('Input Country:', inputCountry);

                    const startingLetter = `${randomLetter}`;
                    console.log('Starting letter:', startingLetter);

                    const verificationResult = verifyCountry(inputCountry, startingLetter);
                    console.log('Verification Result:', verificationResult);

                }, 500);
            });
        });

        // ** Sports
        Array.from(inputSportSelector).forEach(input => {
            input.addEventListener('input', function () {
                if (this.value.length > 20) {
                    gameplayDescription.innerHTML = `<p style="color: red;"> Max Sport Length Reach</p>`
                    this.value = this.value.slice(0, 20);
                } else if (/\d/.test(this.value)) {
                    gameplayDescription.innerHTML = "<p style='color: red;'>Numbers are not permited!</p>";
                } else {
                    gameplayDescription.innerHTML = "Try to fill as much categories as you can, good luck!";
                }
            });
        });

        // * Sport Validation

        Array.from(inputSportSelector).forEach(input => {
            let debounceTimeout = null;

            input.addEventListener('input', function () {
                clearTimeout(debounceTimeout);

                debounceTimeout = setTimeout(() => {
                    const inputSport = this.value;
                    console.log('Input Sport:', inputSport);

                    const startingLetter = `${randomLetter}`;
                    console.log('Starting letter:', startingLetter);

                    const verificationResult = verifySport(inputSport, startingLetter);
                    console.log('Verification Result:', verificationResult);

                }, 500);
            });
        });

        // ** Profession
        Array.from(inputProfessionSelector).forEach(input => {
            input.addEventListener('input', function () {
                if (this.value.length > 20) {
                    gameplayDescription.innerHTML = `<p style="color: red;"> Max Profession Length Reach</p>`
                    this.value = this.value.slice(0, 20);
                } else if (/\d/.test(this.value)) {
                    gameplayDescription.innerHTML = "<p style='color: red;'>Numbers are not permited!</p>";
                } else {
                    gameplayDescription.innerHTML = "Try to fill as much categories as you can, good luck!";
                }
            });
        });

        // * Sport Validation

        Array.from(inputProfessionSelector).forEach(input => {
            let debounceTimeout = null;

            input.addEventListener('input', function () {
                clearTimeout(debounceTimeout);

                debounceTimeout = setTimeout(() => {
                    const inputProfession = this.value;
                    console.log('Input Profession:', inputProfession);

                    const startingLetter = `${randomLetter}`;
                    console.log('Starting letter:', startingLetter);

                    const verificationResult = verifyProfession(inputProfession, startingLetter);
                    console.log('Verification Result:', verificationResult);

                }, 500);
            });
        });
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
    const lettersArray = 'ABCDEFGHIJKLMNOPQRSTUVYZ'.split('');

    const intervalId = setInterval(() => {
        document.querySelector('.small-rectangle').innerText = lettersArray[currentIndex];
        currentIndex = (currentIndex + 1) % lettersArray.length;

        if (currentIndex === 0) {
            loops++;
        }

        if (loops === maxLoops) {
            clearInterval(intervalId);

            const randomIndex = Math.floor(Math.random() * lettersArray.length);

            randomLetter = lettersArray[randomIndex];
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