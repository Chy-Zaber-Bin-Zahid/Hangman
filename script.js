function check() {
  console.log(document.querySelector(".img").src);
  if (document.querySelector(".img").src === "http://127.0.0.1:5500/background-empty-png.png") {
    document.querySelector(".img").src = "http://127.0.0.1:5500/mistake-1.png";
  } else if (document.querySelector(".img").src === "http://127.0.0.1:5500/mistake-1.png") {
    document.querySelector(".img").src = "http://127.0.0.1:5500/mistake-2.png";
  } else if (document.querySelector(".img").src === "http://127.0.0.1:5500/mistake-2.png") {
    document.querySelector(".img").src = "http://127.0.0.1:5500/mistake-3.png";
  } else if (document.querySelector(".img").src === "http://127.0.0.1:5500/mistake-3.png") {
    document.querySelector(".img").src = "http://127.0.0.1:5500/mistake-4.png";
  } else if (document.querySelector(".img").src === "http://127.0.0.1:5500/mistake-4.png") {
    document.querySelector(".img").src = "http://127.0.0.1:5500/mistake-5.png";
  }
}

// buttons function

function btnA() {
  if (wordsArray[0].includes("A")) {
    let index = wordsArray[0].indexOf("A");
    const indexes = [];

    while (index !== -1) {
      indexes.push(index);
      index = wordsArray[0].indexOf("A", index + 1);
    }

    let temp = document.querySelector(".word").textContent;
    for (let i = 0; i < indexes.length; i++) {
      const index = indexes[i];
      const replaceChar = "A";
      temp = temp.substring(0, index) + replaceChar + temp.substring(index + 1);
    }
    document.querySelector(".word").textContent = temp;
    document.querySelector(".btnA").disabled = true;
  } else {
    let temp = document.querySelector(".num").textContent;
    let store = Number(temp) - 1;
    document.querySelector(".num").textContent = store;
    check();
    document.querySelector(".btnA").disabled = true;
  }
}

function btnB() {
  if (wordsArray[0].includes("B")) {
    let index = wordsArray[0].indexOf("B");
    const indexes = [];

    while (index !== -1) {
      indexes.push(index);
      index = wordsArray[0].indexOf("B", index + 1);
    }

    let temp = document.querySelector(".word").textContent;
    for (let i = 0; i < indexes.length; i++) {
      const index = indexes[i];
      const replaceChar = "B";
      temp = temp.substring(0, index) + replaceChar + temp.substring(index + 1);
    }
    document.querySelector(".word").textContent = temp;
    document.querySelector(".btnB").disabled = true;
  } else {
    let temp = document.querySelector(".num").textContent;
    let store = Number(temp) - 1;
    document.querySelector(".num").textContent = store;
    check();
    document.querySelector(".btnB").disabled = true;
  }
}

function btnC() {
  if (wordsArray[0].includes("C")) {
    let index = wordsArray[0].indexOf("C");
    const indexes = [];

    while (index !== -1) {
      indexes.push(index);
      index = wordsArray[0].indexOf("C", index + 1);
    }

    let temp = document.querySelector(".word").textContent;
    for (let i = 0; i < indexes.length; i++) {
      const index = indexes[i];
      const replaceChar = "C";
      temp = temp.substring(0, index) + replaceChar + temp.substring(index + 1);
    }
    document.querySelector(".word").textContent = temp;
    document.querySelector(".btnC").disabled = true;
  } else {
    let temp = document.querySelector(".num").textContent;
    let store = Number(temp) - 1;
    document.querySelector(".num").textContent = store;
    check();
    document.querySelector(".btnC").disabled = true;
  }
}

function btnD() {
  if (wordsArray[0].includes("D")) {
    let index = wordsArray[0].indexOf("D");
    const indexes = [];

    while (index !== -1) {
      indexes.push(index);
      index = wordsArray[0].indexOf("D", index + 1);
    }

    let temp = document.querySelector(".word").textContent;
    for (let i = 0; i < indexes.length; i++) {
      const index = indexes[i];
      const replaceChar = "D";
      temp = temp.substring(0, index) + replaceChar + temp.substring(index + 1);
    }
    document.querySelector(".word").textContent = temp;
    document.querySelector(".btnD").disabled = true;
  } else {
    let temp = document.querySelector(".num").textContent;
    let store = Number(temp) - 1;
    document.querySelector(".num").textContent = store;
    check();
    document.querySelector(".btnD").disabled = true;
  }
}

function btnE() {
  if (wordsArray[0].includes("E")) {
    let index = wordsArray[0].indexOf("E");
    const indexes = [];

    while (index !== -1) {
      indexes.push(index);
      index = wordsArray[0].indexOf("E", index + 1);
    }

    let temp = document.querySelector(".word").textContent;
    for (let i = 0; i < indexes.length; i++) {
      const index = indexes[i];
      const replaceChar = "E";
      temp = temp.substring(0, index) + replaceChar + temp.substring(index + 1);
    }
    document.querySelector(".word").textContent = temp;
    document.querySelector(".btnE").disabled = true;
  } else {
    let temp = document.querySelector(".num").textContent;
    let store = Number(temp) - 1;
    document.querySelector(".num").textContent = store;
    check();
    document.querySelector(".btnE").disabled = true;
  }
}

function btnF() {
  if (wordsArray[0].includes("F")) {
    let index = wordsArray[0].indexOf("F");
    const indexes = [];

    while (index !== -1) {
      indexes.push(index);
      index = wordsArray[0].indexOf("F", index + 1);
    }

    let temp = document.querySelector(".word").textContent;
    for (let i = 0; i < indexes.length; i++) {
      const index = indexes[i];
      const replaceChar = "F";
      temp = temp.substring(0, index) + replaceChar + temp.substring(index + 1);
    }
    document.querySelector(".word").textContent = temp;
    document.querySelector(".btnF").disabled = true;
  } else {
    let temp = document.querySelector(".num").textContent;
    let store = Number(temp) - 1;
    document.querySelector(".num").textContent = store;
    check();
    document.querySelector(".btnF").disabled = true;
  }
}

function btnG() {
  if (wordsArray[0].includes("G")) {
    let index = wordsArray[0].indexOf("G");
    const indexes = [];

    while (index !== -1) {
      indexes.push(index);
      index = wordsArray[0].indexOf("G", index + 1);
    }

    let temp = document.querySelector(".word").textContent;
    for (let i = 0; i < indexes.length; i++) {
      const index = indexes[i];
      const replaceChar = "G";
      temp = temp.substring(0, index) + replaceChar + temp.substring(index + 1);
    }
    document.querySelector(".word").textContent = temp;
    document.querySelector(".btnG").disabled = true;
  } else {
    let temp = document.querySelector(".num").textContent;
    let store = Number(temp) - 1;
    document.querySelector(".num").textContent = store;
    check();
    document.querySelector(".btnG").disabled = true;
  }
}

function btnH() {
  if (wordsArray[0].includes("H")) {
    let index = wordsArray[0].indexOf("H");
    const indexes = [];

    while (index !== -1) {
      indexes.push(index);
      index = wordsArray[0].indexOf("H", index + 1);
    }

    let temp = document.querySelector(".word").textContent;
    for (let i = 0; i < indexes.length; i++) {
      const index = indexes[i];
      const replaceChar = "H";
      temp = temp.substring(0, index) + replaceChar + temp.substring(index + 1);
    }
    document.querySelector(".word").textContent = temp;
    document.querySelector(".btnH").disabled = true;
  } else {
    let temp = document.querySelector(".num").textContent;
    let store = Number(temp) - 1;
    document.querySelector(".num").textContent = store;
    check();
    document.querySelector(".btnH").disabled = true;
  }
}

function btnI() {
  if (wordsArray[0].includes("I")) {
    let index = wordsArray[0].indexOf("I");
    const indexes = [];

    while (index !== -1) {
      indexes.push(index);
      index = wordsArray[0].indexOf("I", index + 1);
    }

    let temp = document.querySelector(".word").textContent;
    for (let i = 0; i < indexes.length; i++) {
      const index = indexes[i];
      const replaceChar = "I";
      temp = temp.substring(0, index) + replaceChar + temp.substring(index + 1);
    }
    document.querySelector(".word").textContent = temp;
    document.querySelector(".btnI").disabled = true;
  } else {
    let temp = document.querySelector(".num").textContent;
    let store = Number(temp) - 1;
    document.querySelector(".num").textContent = store;
    check();
    document.querySelector(".btnI").disabled = true;
  }
}

function btnJ() {
  if (wordsArray[0].includes("J")) {
    let index = wordsArray[0].indexOf("J");
    const indexes = [];

    while (index !== -1) {
      indexes.push(index);
      index = wordsArray[0].indexOf("J", index + 1);
    }

    let temp = document.querySelector(".word").textContent;
    for (let i = 0; i < indexes.length; i++) {
      const index = indexes[i];
      const replaceChar = "J";
      temp = temp.substring(0, index) + replaceChar + temp.substring(index + 1);
    }
    document.querySelector(".word").textContent = temp;
    document.querySelector(".btnJ").disabled = true;
  } else {
    let temp = document.querySelector(".num").textContent;
    let store = Number(temp) - 1;
    document.querySelector(".num").textContent = store;
    check();
    document.querySelector(".btnJ").disabled = true;
  }
}

function btnK() {
  if (wordsArray[0].includes("K")) {
    let index = wordsArray[0].indexOf("K");
    const indexes = [];

    while (index !== -1) {
      indexes.push(index);
      index = wordsArray[0].indexOf("K", index + 1);
    }

    let temp = document.querySelector(".word").textContent;
    for (let i = 0; i < indexes.length; i++) {
      const index = indexes[i];
      const replaceChar = "K";
      temp = temp.substring(0, index) + replaceChar + temp.substring(index + 1);
    }
    document.querySelector(".word").textContent = temp;
    document.querySelector(".btnK").disabled = true;
  } else {
    let temp = document.querySelector(".num").textContent;
    let store = Number(temp) - 1;
    document.querySelector(".num").textContent = store;
    check();
    document.querySelector(".btnK").disabled = true;
  }
}

function btnL() {
  if (wordsArray[0].includes("L")) {
    let index = wordsArray[0].indexOf("L");
    const indexes = [];

    while (index !== -1) {
      indexes.push(index);
      index = wordsArray[0].indexOf("L", index + 1);
    }

    let temp = document.querySelector(".word").textContent;
    for (let i = 0; i < indexes.length; i++) {
      const index = indexes[i];
      const replaceChar = "L";
      temp = temp.substring(0, index) + replaceChar + temp.substring(index + 1);
    }
    document.querySelector(".word").textContent = temp;
    document.querySelector(".btnL").disabled = true;
  } else {
    let temp = document.querySelector(".num").textContent;
    let store = Number(temp) - 1;
    document.querySelector(".num").textContent = store;
    check();
    document.querySelector(".btnL").disabled = true;
  }
}

function btnM() {
  if (wordsArray[0].includes("M")) {
    let index = wordsArray[0].indexOf("M");
    const indexes = [];

    while (index !== -1) {
      indexes.push(index);
      index = wordsArray[0].indexOf("M", index + 1);
    }

    let temp = document.querySelector(".word").textContent;
    for (let i = 0; i < indexes.length; i++) {
      const index = indexes[i];
      const replaceChar = "M";
      temp = temp.substring(0, index) + replaceChar + temp.substring(index + 1);
    }
    document.querySelector(".word").textContent = temp;
    document.querySelector(".btnM").disabled = true;
  } else {
    let temp = document.querySelector(".num").textContent;
    let store = Number(temp) - 1;
    document.querySelector(".num").textContent = store;
    check();
    document.querySelector(".btnM").disabled = true;
  }
}

function btnN() {
  if (wordsArray[0].includes("N")) {
    let index = wordsArray[0].indexOf("N");
    const indexes = [];

    while (index !== -1) {
      indexes.push(index);
      index = wordsArray[0].indexOf("N", index + 1);
    }

    let temp = document.querySelector(".word").textContent;
    for (let i = 0; i < indexes.length; i++) {
      const index = indexes[i];
      const replaceChar = "N";
      temp = temp.substring(0, index) + replaceChar + temp.substring(index + 1);
    }
    document.querySelector(".word").textContent = temp;
    document.querySelector(".btnN").disabled = true;
  } else {
    let temp = document.querySelector(".num").textContent;
    let store = Number(temp) - 1;
    document.querySelector(".num").textContent = store;
    check();
    document.querySelector(".btnN").disabled = true;
  }
}

function btnO() {
  if (wordsArray[0].includes("O")) {
    let index = wordsArray[0].indexOf("O");
    const indexes = [];

    while (index !== -1) {
      indexes.push(index);
      index = wordsArray[0].indexOf("O", index + 1);
    }

    let temp = document.querySelector(".word").textContent;
    for (let i = 0; i < indexes.length; i++) {
      const index = indexes[i];
      const replaceChar = "O";
      temp = temp.substring(0, index) + replaceChar + temp.substring(index + 1);
    }
    document.querySelector(".word").textContent = temp;
    document.querySelector(".btnO").disabled = true;
  } else {
    let temp = document.querySelector(".num").textContent;
    let store = Number(temp) - 1;
    document.querySelector(".num").textContent = store;
    check();
    document.querySelector(".btnO").disabled = true;
  }
}

function btnP() {
  if (wordsArray[0].includes("P")) {
    let index = wordsArray[0].indexOf("P");
    const indexes = [];

    while (index !== -1) {
      indexes.push(index);
      index = wordsArray[0].indexOf("P", index + 1);
    }

    let temp = document.querySelector(".word").textContent;
    for (let i = 0; i < indexes.length; i++) {
      const index = indexes[i];
      const replaceChar = "P";
      temp = temp.substring(0, index) + replaceChar + temp.substring(index + 1);
    }
    document.querySelector(".word").textContent = temp;
    document.querySelector(".btnP").disabled = true;
  } else {
    let temp = document.querySelector(".num").textContent;
    let store = Number(temp) - 1;
    document.querySelector(".num").textContent = store;
    check();
    document.querySelector(".btnP").disabled = true;
  }
}

function btnQ() {
  if (wordsArray[0].includes("Q")) {
    let index = wordsArray[0].indexOf("Q");
    const indexes = [];

    while (index !== -1) {
      indexes.push(index);
      index = wordsArray[0].indexOf("Q", index + 1);
    }

    let temp = document.querySelector(".word").textContent;
    for (let i = 0; i < indexes.length; i++) {
      const index = indexes[i];
      const replaceChar = "Q";
      temp = temp.substring(0, index) + replaceChar + temp.substring(index + 1);
    }
    document.querySelector(".word").textContent = temp;
    document.querySelector(".btnQ").disabled = true;
  } else {
    let temp = document.querySelector(".num").textContent;
    let store = Number(temp) - 1;
    document.querySelector(".num").textContent = store;
    check();
    document.querySelector(".btnQ").disabled = true;
  }
}

function btnR() {
  if (wordsArray[0].includes("R")) {
    let index = wordsArray[0].indexOf("R");
    const indexes = [];

    while (index !== -1) {
      indexes.push(index);
      index = wordsArray[0].indexOf("R", index + 1);
    }

    let temp = document.querySelector(".word").textContent;
    for (let i = 0; i < indexes.length; i++) {
      const index = indexes[i];
      const replaceChar = "R";
      temp = temp.substring(0, index) + replaceChar + temp.substring(index + 1);
    }
    document.querySelector(".word").textContent = temp;
    document.querySelector(".btnR").disabled = true;
  } else {
    let temp = document.querySelector(".num").textContent;
    let store = Number(temp) - 1;
    document.querySelector(".num").textContent = store;
    check();
    document.querySelector(".btnR").disabled = true;
  }
}

function btnS() {
  if (wordsArray[0].includes("S")) {
    let index = wordsArray[0].indexOf("S");
    const indexes = [];

    while (index !== -1) {
      indexes.push(index);
      index = wordsArray[0].indexOf("S", index + 1);
    }

    let temp = document.querySelector(".word").textContent;
    for (let i = 0; i < indexes.length; i++) {
      const index = indexes[i];
      const replaceChar = "S";
      temp = temp.substring(0, index) + replaceChar + temp.substring(index + 1);
    }
    document.querySelector(".word").textContent = temp;
    document.querySelector(".btnS").disabled = true;
  } else {
    let temp = document.querySelector(".num").textContent;
    let store = Number(temp) - 1;
    document.querySelector(".num").textContent = store;
    check();
    document.querySelector(".btnS").disabled = true;
  }
}

function btnT() {
  if (wordsArray[0].includes("T")) {
    let index = wordsArray[0].indexOf("T");
    const indexes = [];

    while (index !== -1) {
      indexes.push(index);
      index = wordsArray[0].indexOf("T", index + 1);
    }

    let temp = document.querySelector(".word").textContent;
    for (let i = 0; i < indexes.length; i++) {
      const index = indexes[i];
      const replaceChar = "T";
      temp = temp.substring(0, index) + replaceChar + temp.substring(index + 1);
    }
    document.querySelector(".word").textContent = temp;
    document.querySelector(".btnT").disabled = true;
  } else {
    let temp = document.querySelector(".num").textContent;
    let store = Number(temp) - 1;
    document.querySelector(".num").textContent = store;
    check();
    document.querySelector(".btnT").disabled = true;
  }
}

function btnU() {
  if (wordsArray[0].includes("U")) {
    let index = wordsArray[0].indexOf("U");
    const indexes = [];

    while (index !== -1) {
      indexes.push(index);
      index = wordsArray[0].indexOf("U", index + 1);
    }

    let temp = document.querySelector(".word").textContent;
    for (let i = 0; i < indexes.length; i++) {
      const index = indexes[i];
      const replaceChar = "U";
      temp = temp.substring(0, index) + replaceChar + temp.substring(index + 1);
    }
    document.querySelector(".word").textContent = temp;
    document.querySelector(".btnU").disabled = true;
  } else {
    let temp = document.querySelector(".num").textContent;
    let store = Number(temp) - 1;
    document.querySelector(".num").textContent = store;
    check();
    document.querySelector(".btnU").disabled = true;
  }
}

function btnV() {
  if (wordsArray[0].includes("V")) {
    let index = wordsArray[0].indexOf("V");
    const indexes = [];

    while (index !== -1) {
      indexes.push(index);
      index = wordsArray[0].indexOf("V", index + 1);
    }

    let temp = document.querySelector(".word").textContent;
    for (let i = 0; i < indexes.length; i++) {
      const index = indexes[i];
      const replaceChar = "V";
      temp = temp.substring(0, index) + replaceChar + temp.substring(index + 1);
    }
    document.querySelector(".word").textContent = temp;
    document.querySelector(".btnV").disabled = true;
  } else {
    let temp = document.querySelector(".num").textContent;
    let store = Number(temp) - 1;
    document.querySelector(".num").textContent = store;
    check();
    document.querySelector(".btnV").disabled = true;
  }
}

function btnW() {
  if (wordsArray[0].includes("W")) {
    let index = wordsArray[0].indexOf("W");
    const indexes = [];

    while (index !== -1) {
      indexes.push(index);
      index = wordsArray[0].indexOf("W", index + 1);
    }

    let temp = document.querySelector(".word").textContent;
    for (let i = 0; i < indexes.length; i++) {
      const index = indexes[i];
      const replaceChar = "W";
      temp = temp.substring(0, index) + replaceChar + temp.substring(index + 1);
    }
    document.querySelector(".word").textContent = temp;
    document.querySelector(".btnW").disabled = true;
  } else {
    let temp = document.querySelector(".num").textContent;
    let store = Number(temp) - 1;
    document.querySelector(".num").textContent = store;
    check();
    document.querySelector(".btnW").disabled = true;
  }
}

function btnX() {
  if (wordsArray[0].includes("X")) {
    let index = wordsArray[0].indexOf("X");
    const indexes = [];

    while (index !== -1) {
      indexes.push(index);
      index = wordsArray[0].indexOf("X", index + 1);
    }

    let temp = document.querySelector(".word").textContent;
    for (let i = 0; i < indexes.length; i++) {
      const index = indexes[i];
      const replaceChar = "X";
      temp = temp.substring(0, index) + replaceChar + temp.substring(index + 1);
    }
    document.querySelector(".word").textContent = temp;
    document.querySelector(".btnX").disabled = true;
  } else {
    let temp = document.querySelector(".num").textContent;
    let store = Number(temp) - 1;
    document.querySelector(".num").textContent = store;
    check();
    document.querySelector(".btnX").disabled = true;
  }
}

function btnY() {
  if (wordsArray[0].includes("Y")) {
    let index = wordsArray[0].indexOf("Y");
    const indexes = [];

    while (index !== -1) {
      indexes.push(index);
      index = wordsArray[0].indexOf("Y", index + 1);
    }

    let temp = document.querySelector(".word").textContent;
    for (let i = 0; i < indexes.length; i++) {
      const index = indexes[i];
      const replaceChar = "Y";
      temp = temp.substring(0, index) + replaceChar + temp.substring(index + 1);
    }
    document.querySelector(".word").textContent = temp;
    document.querySelector(".btnY").disabled = true;
  } else {
    let temp = document.querySelector(".num").textContent;
    let store = Number(temp) - 1;
    document.querySelector(".num").textContent = store;
    check();
    document.querySelector(".btnY").disabled = true;
  }
}

function btnZ() {
  console.log(wordsArray[0]);
  if (wordsArray[0].includes("Z")) {
    let index = wordsArray[0].indexOf("Z");
    const indexes = [];

    while (index !== -1) {
      indexes.push(index);
      index = wordsArray[0].indexOf("Z", index + 1);
    }

    let temp = document.querySelector(".word").textContent;
    for (let i = 0; i < indexes.length; i++) {
      const index = indexes[i];
      const replaceChar = "Z";
      temp = temp.substring(0, index) + replaceChar + temp.substring(index + 1);
    }
    document.querySelector(".word").textContent = temp;
    document.querySelector(".btnZ").disabled = true;
  } else {
    let temp = document.querySelector(".num").textContent;
    let store = Number(temp) - 1;
    document.querySelector(".num").textContent = store;
    check();
    document.querySelector(".btnZ").disabled = true;
  }
}

// fetch("https://random-word-api.herokuapp.com/word")
//   .then((response) => response.text())
//   .then((data) => {
//     store = data.slice(2, data.length - 2);
//     document.querySelector(".word").textContent = "_".repeat(store.length);
//   });

const wordsArray = [];

for (let i = 0; i < 1; i++) {
  fetch("https://random-word-api.herokuapp.com/word")
    .then((response) => response.text())
    .then((data) => {
      const word = data.slice(2, data.length - 2);
      document.querySelector(".word").textContent = "_".repeat(word.length);
      wordsArray.push(word.toUpperCase());
    });
}

function set() {
  if (document.querySelector(".num").textContent === "0") {
    document.querySelector(".main-h1").textContent = "You Lose!";
    let buttons = document.querySelectorAll("button");

    for (let i = 0; i < buttons.length; i++) {
      buttons[i].disabled = true;
    }
  }

  if (wordsArray[0] === document.querySelector(".word").textContent) {
    document.querySelector(".main-h1").textContent = "You Won!";
    let buttons = document.querySelectorAll("button");

    for (let i = 0; i < buttons.length; i++) {
      buttons[i].disabled = true;
    }
  }
}
setInterval(set, 100);
