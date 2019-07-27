var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");
var li = document.getElementsByTagName("li");

function inputLength() {
	return input.value.length;
}

function createListElement() {
	var li = document.createElement("li");
	li.appendChild(document.createTextNode(input.value + " "));
	ul.appendChild(li);
	input.value = "";

	// create DELETE buttons for each new list item
	var btn = document.createElement("button");
	btn.innerHTML = "Delete";
	li.appendChild(btn);

	// remove new list item when button is clicked
	btn.addEventListener("click", function() {
		this.parentNode.remove(this);
	});
	
}

function addListAfterClick() {
	if (inputLength() > 0) {
		createListElement();
	}
}

function addListAfterKeypress(event) {
	if (inputLength() > 0 && event.keyCode === 13) {
		createListElement();
	}
}

// create done toggle for items already on list
ul.onclick = function(event){
	var target = event.target;
	target.classList.toggle("done");
}

//create DELETE buttons for existing list items:
function createDeleteBtn() {
	for (var i = 0; i < li.length; i++) {
		var space = " ";
		var btn = document.createElement("button");
		btn.innerHTML = "Delete";
		li[i].appendChild(btn);
		// remove list item when button is clicked
		btn.addEventListener('click', function () {
			this.parentNode.remove(this);
		});
	}
}

button.addEventListener("click", addListAfterClick);
input.addEventListener("keypress", addListAfterKeypress);

createDeleteBtn();