document.getElementById('stop').addEventListener('click', function () {
    window.location.href = './index.html'
})

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

let timeLeft = 10;

function countdown() {
    timeLeft--;
    document.getElementById("seconds").innerHTML = String(timeLeft);
    if (timeLeft > 0) {
        setTimeout(countdown, 1000);
    }
};

// ? HTML Structure

const title = document.querySelector('h1');
const main = elClass('MAIN', 'container')

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

                startSequence(sideContainer);
                timeLeft = 10;
            });
        }
    }, 50);
}

document.getElementsByClassName('click-me')[0].addEventListener('click', function () {
    console.log('btn click - test');



    if (this.disabled) {
        return;
    }

    this.disabled = true;
    startSequence(sideContainer);
});
