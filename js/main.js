/*----- constants -----*/ 




/*----- app's state (variables) -----*/ 




/*----- cached element references -----*/ 



/*----- event listeners -----*/ 




/*----- functions -----*/


const b = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
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




function cardSet(x) {
    let index = -1;
    x.forEach(element => {
        let newCard = document.createElement('button');
        index += 1;
        newCard.style.color = "red";
        newCard.textContent = x[index].img;
        newCard.setAttribute("id", x[index]);
        document.getElementById("info").appendChild(newCard);
        
    });
}

