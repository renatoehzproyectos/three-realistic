import { startPinkSoldier } from "./scene.js"
import "./style.css"

startPinkSoldier({
	canvas: document.querySelector(".webgl"),
	controlsEl: document.querySelector("#orbitControlsDomElem"),
	loadingEl: document.querySelector("#loading")
})
