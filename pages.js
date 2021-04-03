document.addEventListener("DOMContentLoaded", function(event) {
	let editables = document.querySelectorAll(".pg-edit");
	for (let i = 0; i < editables.length; i++) {
		editables[i].setAttribute("contenteditable", "true")
	}
});