import "./libraries/helpers";
import { Browser } from "jsnes";


console.log('asdf');

// console.log();


(async () => {

await documentReady();





const browser = new Browser({
	container: document.querySelector(".game"),
	onError: function (e) {
		console.error(e);
	},
});
Browser.loadROMFromURL("./roms/rainbow-islands.nes", function (err, data) {
	if (err) {
		console.error(err);
		return;
	}
	browser.loadROM(data);
});


window.addEventListener("resize", async () => {
	await new Promise(requestAnimationFrame);
	browser.fitInParent();


});


})();

