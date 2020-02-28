const squares = document.querySelectorAll(".square");
let playerChoice = "O";
const clear = document.getElementById("clearGame");

squares.forEach(function(currentSquare){
  currentSquare.addEventListener('click', (event) => {
    const element = event.target;
    if(element.innerHTML === "X"|| element.innerHTML === "O"){
      return;
    }
    element.innerHTML = playerChoice;
    const isWinner = checkWin();
    if (isWinner) {
      alert('WINNNNEEEEERRRRRRRRRR  🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉')
    } else {
    if(playerChoice === "O"){
      playerChoice = "X"
    }else{
      playerChoice = "O";
    }
  }
  })
})

function checkWin() {
  let win =[['square1','square2','square3'], ['square4','square5','square6'], ['square7','square8','square9'], ['square1','square4','square7'], ['square2','square5','square8'], ['square3','square6','square9'], ['square1','square5','square9'], ['square3','square5','square7'] ];

  for (let i = 0; i < win.length; i++){

    const currentCombo = win[i];

    const firstBox = document.getElementById(currentCombo[0]).innerHTML;
    const secondBox = document.getElementById(currentCombo[1]).innerHTML;
    const thirdBox = document.getElementById(currentCombo[2]).innerHTML;

    if(firstBox === "O" || firstBox === "X"){
      if(firstBox === secondBox && firstBox === thirdBox)
      {
        return true;
      }
    }
  }
  return false;
}

clear.addEventListener("click", function () {
    const tds = document.getElementsByTagName('td');
    for(let i = 0; i < tds.length; i++) {
        tds[i].innerHTML = ''
    }
});
