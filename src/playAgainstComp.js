const playAgainstComp = () =>{
  let mainContent = document.createElement("div")
  let header = document.createElement("header");
  let heading = document.createElement("h1");
  heading.innerText = "BATTLESHIP"
  heading.id = "heading"
  let guideDiv = document.createElement("div");
  guideDiv.id = "guide-div"
  guideDiv.innerText = "To place your ship, hover over your board and click on a coordinate. Press z to rotate your ship or click on the rotate button.Press tab on desktop to cycle over any valid placements."
  header.appendChild(heading);
  header.appendChild(guideDiv);
  mainContent.appendChild(header)

  let resetButton = document.createElement("button");


  let gameContent = document.createElement("div");
  let player1Stats = document.createElement("div");
  let player1Name = document.createElement("h3");
  player1Name.classList.add("player-name");
  let player1Score = document.createElement("div");
  



  return mainContent;
}

export default playAgainstComp;