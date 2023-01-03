const landing = () =>{
  let landing = document.createElement("div");
  landing.id = "landing"
  let heading = document.createElement("h1");
  heading.innerText = "BATTLESHIP"
  heading.id = "heading"
  let playButtons = document.createElement("div")
  playButtons.id = "play-buttons";
  let playAgainstComp = document.createElement("button");
  playAgainstComp.innerText = "Play Against Computer"
  playAgainstComp.classList.add("play-button")
  playAgainstComp.id = "play-against-comp"
  let playAgainstPlayer = document.createElement("button");
  playAgainstPlayer.innerText = "Play Against Player";
  playAgainstPlayer.classList.add("play-button");
  playAgainstPlayer.id = "play-against-player";
  landing.appendChild(heading);
  playButtons.appendChild(playAgainstComp);
  playButtons.appendChild(playAgainstPlayer);
  landing.appendChild(playButtons)
  return landing;
}

export default landing;