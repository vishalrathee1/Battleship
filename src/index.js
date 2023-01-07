import landing from "./landing"
import playMedium from "./playMedium"
import './styles.css'

let body = document.querySelector("body")
let content = document.querySelector(".content")
content.appendChild(landing())
let landingDiv = document.querySelector("#landing");

let playmedium = document.querySelector("#play-medium")
playmedium.addEventListener("click", ()=>{
  landingDiv.remove()
  content.appendChild(playMedium());
  body.style.backgroundColor = "beige"
})

let playHard = document.querySelector("#play-hard")
playHard.addEventListener("click", ()=>{
  landingDiv.remove()
  content.appendChild(playMedium());
  body.style.backgroundColor = "beige"
})

let resetButton = document.querySelector(".reset-button")
resetButton.addEventListener("click", ()=>{
  playMedium.remove()
  content.appendChild(landingDiv());
  body.style.backgroundColor = "aquamarine"
})
// content.appendChild(playAgainstComp());