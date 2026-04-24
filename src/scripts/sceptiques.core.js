import { documentReady } from "./libraries/helpers";
import { rainbowIslands } from "./libraries/games";
import { Browser } from "jsnes";


const driftTime = parseInt(getComputedStyle(document.documentElement).getPropertyValue('--drift-time').replace(/s$/gi, ''));
const delay = 0 - (Math.floor(Math.random() * (driftTime + 1)));
document.documentElement.style.setProperty('--drift-time-delay', `${delay}s`);


(async () => {
	await documentReady();
	const browser = new Browser({
		container: document.querySelector(".game"),
		romData: rainbowIslands,
		onError: e => console.error(e),
	});
	window.addEventListener("resize", async () => {
		await new Promise(requestAnimationFrame);
		browser.fitInParent();
	});
})();