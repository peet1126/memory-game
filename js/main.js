// the cards aka array of objects
const a = [
  { img: `url(images/KH.png)`, identifier: 1 },
  { img: `url(images/KH.png)`, identifier: 1 },
  { img: `url(images/QH.png)`, identifier: 2 },
  { img: `url(images/QH.png)`, identifier: 2 },
  { img: `url(images/JH.png)`, identifier: 3 },
  { img: `url(images/JH.png)`, identifier: 3 },
  { img: `url(images/AH.png)`, identifier: 4 },
  { img: `url(images/AH.png)`, identifier: 4 },
  { img: `url(images/10H.png)`, identifier: 5 },
  { img: `url(images/10H.png)`, identifier: 5 },
  { img: `url(images/9H.png)`, identifier: 6 },
  { img: `url(images/9H.png)`, identifier: 6 },
  { img: `url(images/8H.png)`, identifier: 7 },
  { img: `url(images/8H.png)`, identifier: 7 },
  { img: `url(images/7H.png)`, identifier: 8 },
  { img: `url(images/7H.png)`, identifier: 8 }
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
    let newCard = document.createElement("li");
    index += 1;
    newCard.style.backgroundImage = `url(images/back.png)`;
    newCard.data = element.img;
    newCard.setAttribute("id", x[index].identifier);
    newCard.setAttribute("class", "table");
    newCard.addEventListener("click", handleClick);
    document.getElementById("info").appendChild(newCard);
  });
}

// create what happens after a click event
let arrayMatch = [];
let duration = 2000;
let playerTurns = 0;

function handleClick(evt) {
  evt.target.style.backgroundImage = evt.target.data;
  evt.target.classList.add("backOfCard");
  evt.target.classList.add("flipped-checker");
  evt.target.classList.add("match-checker");

  arrayMatch.push(evt.target.id);
  if (arrayMatch.length >= 2) {
    console.log("first : ", arrayMatch);
    document.getElementById("info").style.pointerEvents = "none";
    setTimeout(() => {
      document.getElementById("info").style.pointerEvents = "auto";
    }, 2000);
    if (matchLogic(arrayMatch) === true) {
      console.log("second : ", arrayMatch);
      document.getElementById("info").style.pointerEvents = "auto";
      document.querySelectorAll(".match-checker").forEach(itemMatch => {
        itemMatch.classList.remove("flipped-checker");
        itemMatch.disabled = "true";
        itemMatch.classList.remove("match-checker");
        playerTurns += 1;
        arrayMatch = [];
      });
    } else {
      setTimeout(() => {
        console.log("third : ", arrayMatch);
        document.querySelectorAll(".flipped-checker").forEach(item => {
          item.style.backgroundImage = `url(images/back.png)`;
          item.classList.remove(
            "flipped-checker",
            "match-checker",
            "backOfCard"
          );
          item.style.pointerEvents = "auto";
          playerTurns += 1;
          arrayMatch = [];
        });
      }, duration);
    }
  }
}

let match = 0;
function matchLogic(array) {
  if (array[0] === array[1]) {
    match += 1;
    console.log("match : ", match);
    win();
    return true;
  }
  return false;
}

function win() {
  if (match === 8) {
    setTimeout(() => {
      let message = document.createElement("div");
      message.style.zIndex = "1";
      message.setAttribute("class", "message");
      message.textContent = `YOU WON IN ${playerTurns} TURNS!`;
      document.getElementById("main-box").appendChild(message);
    }, 1000);
  }
}

// rest button
document.getElementById("reset-board").addEventListener("click", handleReset);
function handleReset() {
  document.location.reload(true);
}
