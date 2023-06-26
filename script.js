const data = [
    {
        category: "Reaction",
        score: 80,
        icon: "./images/icon-reaction.svg",
        color: 1,
    },
    {
        category: "Memory",
        score: 92,
        icon: "./images/icon-memory.svg",
        color: 2,
    },
    {
        category: "Verbal",
        score: 61,
        icon: "./images/icon-verbal.svg",
        color: 3,
    },
    {
        category: "Visual",
        score: 72,
        icon: "./images/icon-visual.svg",
        color: 4,
    },
];

let avg = document.querySelector('#number');
let percent = document.querySelector('#percent');
let lis = document.querySelectorAll('.scores li');
let categories = document.querySelectorAll('.scores li .category');
let imgs = document.querySelectorAll('.scores li img');
let myScores = document.querySelectorAll('.scores li .myScore');
let appreciation = document.querySelector('#appreciation');

let lengthOfResults = categories.length;
let totalScore = 0;

for (let i = 0; i < lengthOfResults; i++) {
    imgs[i].src = data[i].icon;
    imgs[i].setAttribute('alt',data[i].icon.split('/')[2]);
    lis[i].classList = `backgroundColor_${data[i].color}`;
    categories[i].innerText = data[i].category;
    myScores[i].innerText = data[i].score;
    totalScore += Number(data[i].score);
}

const newAvg = Math.round(totalScore / lengthOfResults);
avg.innerText = newAvg;
if (newAvg >= 85) {
    appreciation.innerText = 'Awesome';
    percent.innerText = '85%';
} else if (newAvg >= 65) {
    appreciation.innerText = 'Great';
    percent.innerText = '65%';
} else {
    appreciation.innerText = 'Well done';
    percent.innerText = "many";
}
