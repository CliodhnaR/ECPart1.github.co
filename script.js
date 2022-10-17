document.getElementById("button").onclick = function(){jump()};

function jump(){
	if(document.getElementById("button").innerHTML == "&lt; JUMP"){
		document.getElementById("button").innerHTML = "JUMP &gt;"
		swapTextRight();
	}
	else {
		document.getElementById("button").innerHTML = "&lt; JUMP"
		swapTextLeft();
	}
}

function swapTextLeft(){
	document.getElementById("textbox2").value = document.getElementById("textbox1").value;
	document.getElementById("textbox1").value = "";
}

function swapTextRight(){
	document.getElementById("textbox1").value = document.getElementById("textbox2").value;
	document.getElementById("textbox2").value = "";
}
