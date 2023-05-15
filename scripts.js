var animation = document.getElementById("loading");

function direct(){
	if (animation.style.display == "none"){
		animation.style.display = "flex";
	}
	else{
		animation.style.display = "none";
	}
}