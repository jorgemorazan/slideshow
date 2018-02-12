var imgs = ['Images/img00.jpg','Images/img01.jpg', 'Images/img02.jpg', 'Images/img03.jpg', 
			'Images/img04.jpg','Images/img05.jpg', 'Images/img06.jpg', 'Images/img07.jpg',
			'Images/img08.jpg', 'Images/img09.png', 'Images/img10.png', 'Images/img11.jpg',
			'Images/img12.jpg', 'Images/img13.jpg', 'Images/img14.jpg'];

var indexMinusTwo = imgs.length-2;
	indexMinusOne = imgs.length-1;
	index = 0;
	indexPlusOne = 1;
	indexPlusTwo = 2;

function Carousel (container) {
	container.addEventListener('click', e =>{
		let iClick = e.target;
			LArrow = container.querySelector('#leftArrow');
			RArrow = container.querySelector('#rightArrow');
			imgM2 = container.querySelector('#imgMinusTwo');
			imgM1 = container.querySelector('#imgMinusOne');
			imgZ = container.querySelector('#imgZero');
			imgP1 = container.querySelector('#imgPlusOne');
			imgP2 = container.querySelector('#imgPlusTwo');

		if(iClick == LArrow || iClick == imgM1){
			moveOneLeft();	
		}

		if(iClick == RArrow || iClick == imgP1){
			moveOneRight();
		}

		if(iClick == imgM2){
			moveTwoLeft();
		}

		if(iClick == imgP2){
			moveTwoRight();
		}

		moveIt();
		displayIt();
	});
}

document.addEventListener("DOMContentLoaded", () =>{
	let container = document.querySelector('#Carousel');
	Carousel(container);
});

function moveOneLeft(){
	var changed = false;
	indexPlusTwo = indexPlusOne;
	indexPlusOne = index;
	index = indexMinusOne;
	
	if(indexMinusTwo == 0){
		indexMinusOne = indexMinusTwo;
		indexMinusTwo = imgs.length-1;
		changed = true;
	}

	if (!changed){
		if(indexMinusOne == 0){
			indexMinusOne = imgs.length-1;
			indexMinusTwo = indexMinusOne-1;
		} else {
			indexMinusOne--;
			indexMinusTwo--;
		}
	}

}

function moveTwoLeft(){
	var changed = false;
	indexPlusTwo = index;
	indexPlusOne = indexMinusOne;
	index = indexMinusTwo;

	if(indexMinusTwo == 0){
		indexMinusOne = imgs.length-1;
		indexMinusTwo = indexMinusOne-1;
		changed = true;
	}
	if(!changed){
		if(indexMinusOne == 0){
			indexMinusOne = imgs.length-2;
			indexMinusTwo = indexMinusOne-1;
		} else {
			indexMinusOne -= 2;
			if (indexMinusOne == 0){
				indexMinusTwo = imgs.length-1;
			} else {
				indexMinusTwo = indexMinusOne-1;
			}
		}
	}
}

function moveOneRight(){
	var changed = false;
	indexMinusTwo = indexMinusOne;
	indexMinusOne = index;
	index = indexPlusOne;

	if(indexPlusTwo == imgs.length-1){
		indexPlusOne = indexPlusTwo;
		indexPlusTwo = 0;
		changed = true;
	}

	if(!changed){		
		if(indexPlusOne == imgs.length-1){
			indexPlusOne = 0;
			indexPlusTwo = 1;
		} else {
			indexPlusOne++;
			indexPlusTwo = indexPlusOne+1;
		}
	}

}

function moveTwoRight(){
	var changed = false;
	indexMinusTwo = index;
	indexMinusOne = indexPlusOne;
	index = indexPlusTwo;

	if(indexPlusTwo == imgs.length-1){
		indexPlusOne = 0;
		indexPlusTwo = 1;
		changed = true;
	}

	if(!changed){
		if(indexPlusOne == imgs.length-1){
			indexPlusOne = 1;
			indexPlusTwo = 2;
		} else {
			indexPlusOne += 2;
			if(indexPlusOne == imgs.length-1){
				indexPlusTwo = 0;
			} else {
				indexPlusTwo = indexPlusOne+1;	
			}
		}
	}
}

function moveIt(){
	imgM2.src = imgs[indexMinusTwo];
	imgM1.src = imgs[indexMinusOne];
	imgZ.src = imgs[index];
	imgP1.src = imgs[indexPlusOne];
	imgP2.src = imgs[indexPlusTwo];
}

function displayIt(){
	let display = document.querySelector('#Theatre');
		displayer = document.querySelector('.displayMe');
		displayer.src = imgs[index];
}