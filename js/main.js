/*----- constants -----*/ 




/*----- app's state (variables) -----*/ 




/*----- cached element references -----*/ 



/*----- event listeners -----*/ 




/*----- functions -----*/
// the cards aka array of objects 
const a = [
    {img: `url(images/KH.png)`, identifier: 1,},
    {img: `url(images/KH.png)`, identifier: 1,},
    {img: `url(images/QH.png)`, identifier: 2,},
    {img: `url(images/QH.png)`, identifier: 2,},
    {img: `url(images/JH.png)`, identifier: 3,},
    {img: `url(images/JH.png)`, identifier: 3,},
    {img: `url(images/AH.png)`, identifier: 4,},
    {img: `url(images/AH.png)`, identifier: 4,},
    {img: `url(images/10H.png)`, identifier: 5,},
    {img: `url(images/10H.png)`, identifier: 5,},
    {img: `url(images/9H.png)`, identifier: 6,},
    {img: `url(images/9H.png)`, identifier: 6,},
    {img: `url(images/8H.png)`, identifier: 7,},
    {img: `url(images/8H.png)`, identifier: 7,},
    {img: `url(images/7H.png)`, identifier: 8,},
    {img: `url(images/7H.png)`, identifier: 8,},
];

// shuffles an array 
function shuffle(a) {
    var j, x, i;
    for (i = a.length - 1; i > 0; i--) {
        j = Math.floor(Math.random() * (i + 1));
        x = a[i];
        a[i] = a[j];
        a[j] = x;
    }
    return a;
}
cardSet(shuffle(a));

// sets up the board 
function cardSet(x) {
    let index = -1;
    x.forEach(element => {
        let newCard = document.createElement('li');
        index += 1;
        // newCard.innerHTML = '<img src="images/back.png">'
        newCard.style.backgroundImage = `url(images/back.png)`
        newCard.style.width = "175px";
        newCard.style.height = "279px";
        newCard.data = element.img
        newCard.setAttribute("id", x[index].identifier);
        newCard.setAttribute("class", "table");
        newCard.addEventListener('click', handleClick)
        document.getElementById("info").appendChild(newCard); 
    });
}


// create what happens after a click event
let arrayMatch = [];
// document.getElementById('info').addEventListener('click', handleClick);

function handleClick(evt) {
    // this is either a string of inner html or the src att of the HTML element
    evt.target.style.backgroundImage = evt.target.data;
    arrayMatch.push(evt.target.id);
    console.log(arrayMatch);
    if (arrayMatch.length === 2) {
        // run win logic 
        winLogic();
        arrayMatch = [];
    }  
};

function winLogic() {
    if (arrayMatch[0] === arrayMatch[1]) {
        console.log('match');
    }
};
// if match remove event listener 



// rest button 
document.getElementById('reset-board').addEventListener('click', handleReset);
function handleReset() {
    document.location.reload(true);
};