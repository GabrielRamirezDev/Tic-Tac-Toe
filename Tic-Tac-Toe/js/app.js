let gameBoard = {
  clearAll: document.querySelector('#clearAll'),
  cells: document.querySelectorAll('.game'),
  displayArea: document.getElementById('displayArea'),
  checkWin: (clickValue) => {
  // console.log(clickValue)
    const win = [["1","2","3"],["4","5","6"],["7","8","9"],["1","4","7"],["2","5","8"],["3","6","9"],["1","5","9"],["3","5","7"]];
    for(let condition of win){
      let hasWon = true;
      if(clickValue === 'X') {
        for(let i = 0; i < condition.length; i++){
          if (!xArray.includes(condition[i])){
            hasWon = false;
            break;
          }
        }
      } else {
        for(let i = 0; i < condition.length; i++){
        if (!oArray.includes(condition[i])){
          hasWon = false;
          break;
        }
      }
      }
      if (hasWon === true) {
        displayArea.innerHTML = clickValue + ' is the winner!'
        for(let i =0; i < gameBoard.cells.length; i++){
            gameBoard.cells[i].removeEventListener('click',clickAble,false);
          }
        return
      }
    }
  }
}
class Boxes {
  constructor(letter = "") {
    this.letter = letter;
    this.turn = 1;
    this.playerToggle = () => {
      let moves = 0;
      let clickValue="";
      while(moves<9){
        if(this.turn %2!==0){
          clickValue="X"
          moves++
          this.turn++
        }else{
          clickValue="O";
          moves++
          this.turn++
        }
        return clickValue
      }
    }
  }
};
const box = new Boxes("X")
box.letter
let xArray = []
let oArray = []
const clickAble = (event) =>{
  let n = 1
  if(event.target.innerHTML === ''){
    let clickValue = box.playerToggle()
    event.target.innerHTML = clickValue;
    if(clickValue === "X"){
      xArray.push(event.target.id);
      gameBoard.checkWin('X',xArray);
    }else if (clickValue === "O"){
      oArray.push(event.target.id);
      gameBoard.checkWin('O',oArray);
    }
  }
}
for(let i =0; i < gameBoard.cells.length; i++){
    gameBoard.cells[i].addEventListener('click', clickAble)
  };
gameBoard.clearAll.addEventListener("click",removeAll => {
  xArray = []
  oArray = []
  console.log(xArray)
  console.log(oArray)
  gameBoard.cells.forEach(cell => {
    cell.innerHTML =""
  });
});

clearAll.addEventListener("click",event => {
  // color.style.backgroundColor = "#C7CEEA";
  // color.style.backgroundColor = "#FF9AA2";
  let randomizer = Math.floor( (Math.random() * 6) + 1);
  console.log(randomizer);
  if (randomizer ===1) {
    color.style.backgroundColor = "#FF9AA2"
  } else if (randomizer ===2) {
    color.style.backgroundColor = "#C7CEEA";
  } else if (randomizer ===3) {
    color.style.backgroundColor = "#FF9AA2";
  } else if (randomizer ===4) {
    color.style.backgroundColor = "#FFDAC1";
  } else if (randomizer ===5) {
    color.style.backgroundColor = "#AEE7D3"
  }
});

let color = document.getElementById('hi');

// let color = document.querySelectorAll('#bOne, #bTwo, #bThree, #bFour')

//
// // change background color
// color.addEventListener('click', () =>
//   if(hasWon ===true){
//     color.style.backgroundColor = "#C7CEEA";
//     color.style.backgroundColor = "#FF9AA2";
//     color.style.backgroundColor = "#";
//   }
// });



// // const tableElement = document.querySelector('#tableElement');

// let clearAll = document.querySelector('#clearAll'),
// td = document.getElementsByTagName('td'),
// cells = document.querySelectorAll('.game'),
// displayArea = document.getElementById('displayArea');
//
// let xArray = []
// let oArray = []
//
// for(let i =0; i < cells.length; i++){
//   cells[i].addEventListener('click', function(event){
//     if(event.target.innerHTML === '#'){
//       let clickValue = playerToggle()
//       event.target.innerHTML = clickValue;
//       if(clickValue === "X"){
//         xArray.push(event.target.id);
//         checkWin('X',xArray);
//       }else if (clickValue === "O"){
//         oArray.push(event.target.id);
//         checkWin('O',oArray);
//       }
//     }
//   });
// }
//
//
// const win = [["1","2","3"],["4","5","6"],["1","4","7"],["2","5","8"],["3","6","9"],["1","5","9"],["3","5","7"]];
// function checkWin(clickValue, a){
//
//   for(let condition of win){
//     let hasWon = true
//     for(let i = 0; i < condition.length; i++){
//       if (!xArray.includes(condition[i])){
//         hasWon = false;
//         break;
//       }
//     }
//     if (hasWon === true) {
//       displayArea.innerHTML = clickValue + ' is the winner!'
//       return
//     }
//   }
// }
//
