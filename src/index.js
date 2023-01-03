import landing from "./landing"
import playAgainstComp from "./playAgainstComp"
import playAgainstPlayer from "./playAgainstPlayer"
import './styles.css'

let content = document.querySelector(".content")
content.appendChild(landing())
let landingDiv = document.querySelector("#landing");

let playbuttonComp = document.querySelector("#play-against-comp")
playbuttonComp.addEventListener("click", ()=>{
  landingDiv.remove()
  content.appendChild(playAgainstComp());
})