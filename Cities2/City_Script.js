$(document).ready(function () {
	
	document.getElementById("close-btn").addEventListener("click", function () {
		window.parent.postMessage("close-iframe", "*");
	});
	  
});
