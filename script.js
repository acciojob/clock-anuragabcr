//your JS code here. If required.
let timer = document.getElementById("timer")

let time = new Date()

setInterval(
	function () {
		time = new Date()
		timer.innerHTML = time.toLocaleString()
	}, 1000
)