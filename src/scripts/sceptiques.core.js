import { documentReady } from "./libraries/helpers";
import { rainbowIslands } from "./libraries/games";
import { Browser } from "jsnes";


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