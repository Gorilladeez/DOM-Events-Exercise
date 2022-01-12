var button = document.getElementById("enter");
var removeBtn = document.getElementById("remove");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");
var liList = document.querySelectorAll("li");
toggleList();


function inputLength() {
	return input.value.length;
}

// This creates a remove button which gets added to each li element.
function createRemoveButton (list) {
	var btn = document.createElement("button");
	btn.classList.add('btnStyle', 'steph');
	btn.innerHTML = "Remove";
	btn.onclick = function() {
		btn.parentElement.remove();
	}
	list.appendChild(btn);
};

function createListElement() {
	var li = document.createElement("li");
	li.appendChild(document.createTextNode(input.value));
	li.addEventListener('click', event => {
		li.classList.toggle("done");
	});
	ul.appendChild(li);
	createRemoveButton(li);
	input.value = "";
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

// Function that takes existing list elements and adds them in an array.
// The array adds an event listener and toggles the done class.
function toggleList() {
	liList.forEach(item => {
		createRemoveButton(item);
  		item.addEventListener('click', event => {
  			item.classList.toggle("done");
  		})
	});
};

button.addEventListener("click", addListAfterClick);
input.addEventListener("keypress", addListAfterKeypress);
