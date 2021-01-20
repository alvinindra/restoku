import 'regenerator-runtime'
import '../styles/main.scss'
import './views/resto-list'

document.querySelector("#openNav").addEventListener("click", function () {
  document.getElementById("sideNav").style.width = "250px"
  event.stopPropagation();
})

document.querySelector("#closeNav").addEventListener("click", function () {
  document.getElementById("sideNav").style.width = "0"
  event.stopPropagation();
})

const mainElement = document.querySelector("main");
 
mainElement.addEventListener("click", event => {
  document.getElementById("sideNav").style.width = "0"
  event.stopPropagation();
})