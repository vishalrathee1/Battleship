const playMedium = () =>{
  let mainContent = document.createElement("div")
  mainContent.classList.add("main-content")
  let header = document.createElement("header");
  let heading = document.createElement("h1");
  heading.innerText = "BATTLESHIP"
  heading.id = "game-heading"
  let guideDiv = document.createElement("div");
  guideDiv.id = "guide-div"
  guideDiv.innerText = "To place your ship, hover over your board and click on a coordinate. Press z to rotate your ship or click on the rotate button.Press tab on desktop to cycle over any valid placements."
  header.appendChild(heading);
  header.appendChild(guideDiv);
  mainContent.appendChild(header)

  let resetButton = document.createElement("button");
  resetButton.innerText = "Reset";
  resetButton.classList.add("reset-button")
  

  let gamecontentWrapper = document.createElement("div")
  gamecontentWrapper.classList.add("game-content-wrapper")

  let gameContent1 = document.createElement("div");
  gameContent1.classList.add("game-content-1")
  let player1Stats = document.createElement("div");
  player1Stats.classList.add("player-stats")
  let player1Name = document.createElement("h3");
  player1Name.innerText = "Player"
  player1Name.classList.add("player-name");
  let player1Score = document.createElement("div");
  player1Score.classList.add("player-info")
  let pointer = document.createElement("h4");
  pointer.innerText = "place your pieces"
  pointer.id = "pointer"
  let ships = document.createElement("div")
  ships.classList.add("ships-div")
  let rotateButton = document.createElement("button");
  rotateButton.innerText = "Rotation: Horizontal"; //default
  rotateButton.id = "rotate-button"
  let shipsLeft = document.createElement("p");
  shipsLeft.innerText = "5 ships left to place";

  ships.appendChild(rotateButton)
  ships.appendChild(shipsLeft)


  player1Score.appendChild(pointer)
  player1Score.appendChild(ships)


  player1Stats.appendChild(player1Name);
  player1Stats.appendChild(player1Score)

  //creating game grid
  let containerGrid = document.createElement("div");
  containerGrid.classList.add("container-grid");
  //create 10*10 grid
  for(let i =0; i<10; i++){
    for(let j = 0; j <10; j++){
      let grid = document.createElement("div");
      containerGrid.appendChild(grid)
      grid.classList.add("game-grid")
    }
  }

  //appending everything in gamecontent1
  gameContent1.appendChild(player1Stats)
  gameContent1.appendChild(containerGrid)
  

  //creating game content for comp
  let gameContent2 = document.createElement("div");
  gameContent2.classList.add("game-content-2")
  let player2Stats = document.createElement("div");
  player2Stats.classList.add("player-stats")
  let player2Name = document.createElement("h3");
  player2Name.innerText = "Computer"
  player2Name.classList.add("player-name");
  let player2Score = document.createElement("div");
  player2Score.classList.add("player-info")
  let pointer2 = document.createElement("h4");
  pointer2.innerText = "Waiting"
  let waiter = document.createElement("p");
  waiter.innerText = "Waiting for you to place your ships";



  player2Score.appendChild(pointer2)
  player2Score.appendChild(waiter)


  player2Stats.appendChild(player2Name);
  player2Stats.appendChild(player2Score)

  //creating game grid
  let containerGrid2 = document.createElement("div");
  containerGrid2.classList.add("container-grid");
  //create 10*10 grid
  for(let i =0; i<10; i++){
    for(let j = 0; j <10; j++){
      let grid = document.createElement("div");
      containerGrid2.appendChild(grid)
      grid.classList.add("game-grid")
    }
  }

  //appending everything in gamecontent1
  gameContent2.appendChild(player2Stats)
  gameContent2.appendChild(containerGrid2)

  gamecontentWrapper.appendChild(gameContent1)
  gamecontentWrapper.appendChild(gameContent2)

  // appending everything in main content
  mainContent.appendChild(resetButton);
  mainContent.appendChild(gamecontentWrapper)


  return mainContent;
}

export default playMedium;