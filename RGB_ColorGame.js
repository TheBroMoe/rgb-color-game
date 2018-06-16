var squareNum = 6;
var colors = [];
var chosen;

var squares = document.querySelectorAll(".squares");
var rgb_display = document.getElementById("rgb_display");
var message = document.querySelector("#message");
var h1 = document.querySelector("h1");
var reset = document.querySelector("#Reset");
var difficultyButtons = document.querySelectorAll("#difficulty");

main();


function main(){
	setupDifficultyButtons();
	setupSquares();
	resetButton();
}

function setupDifficultyButtons(){
	for(var index = 0; index < difficultyButtons.length; index++){
		difficultyButtons[index].addEventListener("click", function(){
			difficultyButtons[0].classList.remove("select");
			difficultyButtons[1].classList.remove("select");
			this.classList.add("select");
			
			this.textContent === "Easy" ? squareNum = 3: squareNum = 6;
			resetButton();
		});
	}
}

function setupSquares(){
		for(var index = 0; index < squares.length; index++){
		// Display colors
		squares[index].style.backgroundColor = colors[index];

		// Event handlers
		squares[index].addEventListener("click", function(){
			// Store selected square
			var selected = this.style.backgroundColor;
			// Is color equivalent to chosen color?
			if(selected === chosen){
				message.textContent = "Good job!";
				changeColor(selected);
				h1.style.backgroundColor = selected;
				reset.textContent = "Play Again?"
			}
			else{
				this.style.backgroundColor = "#380056";
				message.textContent = "Nice Try!";
			}	
		})
	}
}
function resetButton(){
	// generate new colors
	colors = colorGenerator(squareNum);
	// pick a new color from array
	chosen = colorSelector();
	// Fix color display
	rgb_display.textContent = chosen;
	message.textContent = "";
	// change colors of squares
	for(var index = 0; index < squares.length; index++){
		// Display colors
		if(colors[index]){
			squares[index].style.display = "block";
			squares[index].style.backgroundColor = colors[index];
		}
		else{
			squares[index].style.display = "none";
		}

	}
	reset.textContent = "Reset";
	h1.style.backgroundColor = "#228b22";
}

reset.addEventListener("click", resetButton);

function colorGenerator(num){
	// initialize array
	var colorArray = [];
	// add num random colors to array
	for(var index = 0; index < num; index++){
		colorArray.push(randColor());
	}
	// Return array
	return colorArray;

}

function randColor(){
	var rand_red = Math.floor(Math.random() * 256);
	var rand_green = Math.floor(Math.random() * 256);
	var rand_blue = Math.floor(Math.random() * 256);
	return 'rgb(' + rand_red + ", " + rand_green + ", " + rand_blue + ")";

}
function colorSelector(){
	return colors[Math.floor(Math.random() * colors.length)];
}

// Change color of all squares to match given color
function changeColor(color){
	for(var i = 0; i < squares.length; i++){
		squares[i].style.backgroundColor = color;
	}
}



