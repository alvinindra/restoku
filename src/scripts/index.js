import 'regenerator-runtime'
import '../styles/main.scss'
import './views/pages/resto-list'

document.querySelector("#openNav").addEventListener("click", function () {
  document.getElementById("sideNav").style.width = "250px"
})

document.querySelector("#closeNav").addEventListener("click", function () {
  document.getElementById("sideNav").style.width = "0"
})