const cookie = document.getElementById('toClick');
const result = document.getElementById('result');
const smallClicker = document.getElementById('smallClicker');
const mediumClicker = document.getElementById('mediumClicker');
const hugeClicker = document.getElementById('hugeClicker'); 

let score = 0;
let isSmallClickable = false;
let isMediumClickable = false;
let isHugeClickable = false;
let numberOfSmall = 0;
let numberOfMedium = 0;
let numberOfHuge = 0;


const sleep = (delay) => {
    let start = new Date().getTime();
    while (new Date().getTime() < start + delay);
};

const displayScore = () => {
    result.innerHTML = `${score}`;
};

const addCookie = () => {
    score++;
    displayScore();
    displayClicker();
};

const displayClicker = () => {
    if (score >= 10000) {
        hugeClicker.style.filter = 'grayscale(0%) blur(0px)';
        isHugeClickable = true;
    };
    if (score >= 1000) {
        mediumClicker.style.filter = 'grayscale(0%) blur(0px)';
        isMediumClickable = true;
    };
    if (score >= 50) {
        smallClicker.style.filter = 'grayscale(0%) blur(0px)';
        isSmallClickable = true;
    };
    if (score < 50) {
        smallClicker.style.filter = 'grayscale(100%) blur(1px)';
        isSmallClickable = false;
    };
    if (score < 1000) {
        mediumClicker.style.filter = 'grayscale(100%) blur(1px)';
        isMediumClickable = false;
    };
    if (score < 10000) {
        hugeClicker.style.filter = 'grayscale(100%) blur(1px)';
        isHugeClickable = false; 
    };
};

const displayAutoClicker = (size) => {
    if (isHugeClickable === true && size === 'huge') {
        numberOfHuge++;
        score -= 10000;
        displayClicker();
        setInterval(function(){autoClicker('huge', numberOfHuge)}, 25000);
        hugeClicker.innerHTML = `
            <p>One huge clicker : Cost 10 000 Cookies</p><br/>
            <p>${numberOfHuge}</p>
            `;
    } else if (isMediumClickable === true && size === 'medium') {
        numberOfMedium++;
        score -= 1000;
        displayClicker();
        setInterval(function(){autoClicker('medium', numberOfMedium)}, 5000);
        mediumClicker.innerHTML = `
            <p>One medium clicker : Cost 1 000 Cookies</p><br/>
            <p>${numberOfMedium}</p>
        `;
    } else if (isSmallClickable === true && size === 'small') {
        numberOfSmall++;
        score -= 50;
        displayClicker();
        setInterval(function(){autoClicker('small', numberOfSmall)}, 1000);
        smallClicker.innerHTML = `
            <p>One small clicker : Cost 50 Cookies</p><br/>
            <p>${numberOfSmall}</p>
        `;
    };
};

const autoClicker = (taille, number) => {
    if (taille === 'small') {
        score += number;
        displayScore();
        displayClicker();
    } else if (taille === 'medium') {
        score += number * 100;
        displayScore();
        displayClicker();
    } else if (taille === 'huge') {
        score += number * 1000,
        displayScore();
        displayClicker();
    };
};


cookie.addEventListener('click', addCookie);
smallClicker.addEventListener('click', function(){displayAutoClicker('small')});
mediumClicker.addEventListener('click', function(){displayAutoClicker('medium')});
hugeClicker.addEventListener('click', function(){displayAutoClicker('huge')});

