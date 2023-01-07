const landing = () =>{
  let landing = document.createElement("div");
  landing.id = "landing"
  let heading = document.createElement("h1");
  heading.innerText = "BATTLESHIP"
  heading.id = "heading"
  let playArea = document.createElement("div")
  playArea.id = "play-area"
  let playButtons = document.createElement("div")
  let chooseDifText = document.createElement("div");
  chooseDifText.innerText = "Choose a difficulty to play"
  playButtons.id = "play-buttons";
  let playAgainstComp = document.createElement("button");
  playAgainstComp.innerText = "Difficulty: Medium"
  playAgainstComp.classList.add("play-button")
  playAgainstComp.id = "play-medium"
  let playAgainstPlayer = document.createElement("button");
  playAgainstPlayer.innerText = "Difficulty: Hard";
  playAgainstPlayer.classList.add("play-button");
  playAgainstPlayer.id = "play-hard";
  landing.appendChild(heading);
  playArea.appendChild(chooseDifText)
  playButtons.appendChild(playAgainstComp);
  playButtons.appendChild(playAgainstPlayer);
  playArea.appendChild(playButtons)
  landing.appendChild(playArea)
  return landing;
}

export default landing;