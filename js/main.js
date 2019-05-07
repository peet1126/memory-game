/*----- constants -----*/ 




/*----- app's state (variables) -----*/ 




/*----- cached element references -----*/ 



/*----- event listeners -----*/ 




/*----- functions -----*/
// the cards aka array of objects 
const a = [
    {img: "king", identifier: 1,},
    {img: "king", identifier: 1,},
    {img: "queen", identifier: 2,},
    {img: "queen", identifier: 2,},
    {img: "hearts", identifier: 3,},
    {img: "hearts", identifier: 3,},
    {img: "jacks", identifier: 4,},
    {img: "jacks", identifier: 4,},
    {img: "ace", identifier: 5,},
    {img: "ace", identifier: 5,},
    {img: "ten", identifier: 6,},
    {img: "ten", identifier: 6,},
    {img: "nine", identifier: 7,},
    {img: "nine", identifier: 7,},
    {img: "eight", identifier: 8,},
    {img: "eight", identifier: 8,},
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

// sets up the board 
function cardSet(x) {
    let index = -1;
    x.forEach(element => {
        let newCard = document.createElement('ls');
        index += 1;
        newCard.textContent = x[index].img;
        newCard.setAttribute("id", x[index].identifier);
        newCard.setAttribute("class", "table");
        document.getElementById("info").appendChild(newCard); 
    });
}

cardSet(shuffle(a));

// create what happens after a click event
let arrayMatch = [];
document.getElementById('info').addEventListener('click', handleClick);

function handleClick(evt) {
    arrayMatch.push(evt.target.id);
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