import animateScrollTo from 'animated-scroll-to';

// Home SVG

// Get SVG's and LI

let home = document.getElementById('home');
let homeHover = document.getElementById('homeHover');
let homeSVG = document.getElementById('homeSVG');

// Attach Event Listener 
homeSVG.addEventListener('mouseover', homeOver);
home.addEventListener('mouseover', homeOver);
homeSVG.addEventListener('mouseout', homeOut);

// run hover function and hoverout function
function homeOver(x) {
	homeHover.classList.remove('vHiddenHome')
}

function homeOut(x) {
	homeHover.classList.add('vHiddenHome')
}

// Get form, if it exists run code
let form = document.getElementById('form');
if ( form ) {
	let meterInput = document.getElementsByClassName('meterInput');

	Array.from(meterInput).forEach(function(e) {
     e.addEventListener('input', meterWidth);
   });

	function meterWidth(x) {
		let input = this.value;
		let meter = this.nextElementSibling;
		meter.style.width = '100%';

		if (input.match(/\D/) == null) {
			meter.style.width = '0%';
		}

		let firstName = document.getElementById('firstName').value;
		let lastName = document.getElementById('lastName').value;
		let email = document.getElementById('email').value;
		let comments = document.getElementById('comments').value;
		let bCL = document.getElementById('buttonCoverL')
		let bCR = document.getElementById('buttonCoverR')
		let cB = document.getElementById('contactButton')

		if (firstName.match(/\D/) !== null && lastName.match(/\D/) !== null && email.match(/\D/) !== null && comments.match(/\D/) !== null ) {
			bCL.style.width = '0'
			bCL.style.left = '100px'
			bCR.style.width = '0'

		} else {
			bCL.style.width = '100px'
			bCL.style.left = '0px'
			bCR.style.width = '100.5px'
		}
	} 
};


burger.addEventListener('click', (e) => {
	burger.classList.toggle('open')
});

// never even runs...
function windowResize() {
	if (window.matchMedia("(min-width: 770px)").matches) {	
	
	} else {
		burger.classList.remove("vHidden");
		burger.addEventListener('click', (e) => {
			// if burger has class of open move menu up
			if (burger.classList.contains('open')) {
				leftColumn.style.top = '0'
			// else move it back
			} else {
				leftColumn.style.top = '-330px'
			}
		});
	}
}

let w = window.innerWidth;

function resize() { 
	w = window.innerWidth;

	let leftColumn = document.getElementById('leftColumn');

	if ( w <= 770 ) {
		burger.classList.remove("vHidden");
		leftColumn.classList.remove('under300L')

		burger.addEventListener('click', (e) => {
			// if burger has class of open move menu up
			if (burger.classList.contains('open')) {
				leftColumn.style.top = '0'
				leftColumn.style.left = '0'
			// else move it back
			} else {
				leftColumn.style.top = '-330px'
				leftColumn.style.left = '0'
			}
		});
		burger.classList.add('mobileBurger');
		leftColumn.style.top = '-330px'

	} else {
		burger.classList.remove('mobileBurger');
		burger.classList.add("vHidden");
		leftColumn.style.top = '0'
		burger.addEventListener('click', (e) => {
			// if burger has class of open move menu over
			if (burger.classList.contains('open')) {
				leftColumn.classList.remove('under300Lleft')
				leftColumn.style.top = '0'
			// else move it back
			} else {
				leftColumn.classList.add('under300Lleft')
				leftColumn.style.top = '0'
			}
		});
	}
}

resize();

window.onresize = resize;

// Scroll function for sidebar shrinking under 300px

window.onscroll=testScroll;

function testScroll(){
	const burger = document.getElementById('burger');
	const leftColumn = document.getElementById('leftColumn');
	const rightColumn = document.getElementById('rightColumn');
	const burgerMenu = document.getElementById('burgerMenu');
	const responsiveTitle = document.getElementById('responsiveTitle');
	const hideSidebar = document.getElementById('hideSidebar');
	const socialMediaTwo = document.getElementById('socialMediaTwo');
	const aboutTop = document.querySelector('.aboutTopContent');

	// If screen is wider than 768px run if statement below
	if (window.matchMedia("(min-width: 770px)").matches && hideSidebar) {
		// burger on click move left column over to see menu options
		burger.addEventListener('click', (e) => {
			// if burger has class of open move menu over
			if (burger.classList.contains('open')) {
				rightColumn.classList.remove('under300R');
			// else move it back
			} else {
				rightColumn.classList.add('under300R');
			}
		});	
		// if the scroll is lower than 250px from top

		if(window.pageYOffset>250 && hideSidebar) {
			// if the scroll is lower than 250px from top move left sidebar over and make skinny, and make right sidebar wider, and add burger menu
			leftColumn.classList.add('under300L');
			leftColumn.classList.add('under300Lleft');
			rightColumn.classList.add('under300R');
			burger.classList.add('under300Burger');
			burger.classList.remove('vHidden');
		} else {
			// if the scroll isn't lower than 250px from top move back to normal setup and make right sidebar normal 
			leftColumn.classList.remove('under300L');
			rightColumn.classList.remove('under300R');
			burger.classList.add('vHidden');
			burger.classList.remove('under300Burger');
			leftColumn.classList.remove('under300Lleft');
		}
	} 
}

// search input show/hide

// check if on blog page

let blogSearch = document.getElementById('blogSearch')

if (blogSearch) {
	// get elements 

	let blogSearchInput = document.getElementById('blogSearchInput')
	let blogSearchContainer = document.getElementById('blogSearchContainer')
	let blogSearchMeter = document.getElementById('blogSearchMeter')
	let blogSearchBar = document.getElementById('blogSearchBar')
	let blogSearchImg = document.querySelector('#blogSearchImg')

	blogSearchImg.addEventListener('click', blogSearchWidth);
	
	function blogSearchWidth() {
		blogSearch.style.width = "calc(100% - 38px)";
		blogSearchContainer.style.width = "300px";
		blogSearchInput.style.width = "100%";
		blogSearchInput.style.padding = "1px 1px 1px 0";
		blogSearchMeter.style.width = "calc(100% - 10px)";
		blogSearchBar.style.width = "calc(100% - 10px)";

		if (blogSearchContainer.offsetWidth >= 80) {
			blogSearch.style.width = "0";
			blogSearchContainer.style.width = "38px";
			blogSearchInput.style.padding = "0";
			blogSearchInput.style.width = "0";
			blogSearchMeter.style.width = "0";
			blogSearchBar.style.width = "0";
		}
	}
}

let mailLink = document.querySelector('.mailLink');

if (mailLink) {
	// var index = mailLink.stringify.indexOf('@')
}

// Keep height fixed for blog page so scroll function doesn't mess up at bottom

let socialMedia = document.getElementById('socialMedia');

if (socialMedia) {
	let rightColumnRender = document.getElementById('rightColumn');
	let rightColumnHeight = document.getElementById('rightColumn').scrollHeight;

	rightColumnRender.style.minHeight = `${rightColumnHeight}px !important`
}

// About page

const aboutPage = document.querySelector('.rightColumnAbout');

if (aboutPage) {
	// click arrow in header to scroll down page
	let topArrow = document.querySelector(".aboutTopArrow");
	topArrow.addEventListener('click',function(){
		const options = {
		  speed: 3000,
		}
		let h = window.innerHeight;

		if (window.matchMedia("(min-width: 770px)").matches) {
			animateScrollTo(document.querySelector('.aboutHeader'),options)
		} else {
			let height = h - 5;
			animateScrollTo( height ,options)
		}
	})

	// Add event listener to icon to run 
	const icons = document.querySelectorAll('.aboutProcessIcon');
	const corners = document.querySelectorAll('.corner');

	if (window.matchMedia("(min-width: 730px)").matches) { } else {
		corners[0].style.display = 'block';
	}

	let i;
	for (i = 0; i < icons.length; i++) {
		icons[i].addEventListener('mouseover', iconMouseOver);
		icons[i].addEventListener('click', iconMouseOver);
	}

	let interval;

	// runs on yellow rectangle hover
	function iconMouseOver() {
		// Reset slideshow when the mouse hovers
		// window.clearInterval(interval);

		// add + remove the shadow/corner hover effect to icons
		for (let i = 0; i < icons.length; i++) {
			icons[i].classList.remove('descSelected');
			corners[i].style.display = 'none';
		}

		window.matchMedia("(min-width: 730px)").matches ? this.classList.add('descSelected') : this.querySelector('.corner').style.display = "block";

		// Get the margin of aboutProcessContent
		let aboutProcessContent = document.querySelector('.aboutProcessContent');
		let description = document.querySelectorAll('.aboutProcessDescription');
		let processMargin = Number(window.getComputedStyle(aboutProcessContent).getPropertyValue('margin-right').slice(0,-2));
		// if firefox fix left margin
		if(navigator.userAgent.indexOf("Firefox") != -1 ) {
		   processMargin = aboutProcessContent.getBoundingClientRect().left;
		}
		// Get the width of aboutProcessDescriptions
		let descriptions = document.querySelector('.aboutProcessDescriptions');
		let descriptionsWidth = Number(window.getComputedStyle(descriptions).getPropertyValue('width').slice(0,-2));

		let rightOffset;
		let moveOffset;

		for (i = 0; i < description.length; i++) {
			// Set the margin left on the description to the aboutProcessContent margin
			description[i].style.marginRight = `${processMargin}px`;

			// Set the data-left of icon hovered equal to the margin-left + the width of the aboutProcessDesriptions * i - initial width
			moveOffset = processMargin + descriptionsWidth;
			rightOffset = (processMargin + descriptionsWidth) * (i + 1) - (processMargin + descriptionsWidth);
			
			if (window.matchMedia("(min-width: 730px)").matches) {

			} else {
				description[i].style.marginRight = `80px`;
				rightOffset = (descriptionsWidth + 80) * (i + 1) - 80;
			}
			icons[i].dataset.right = rightOffset;
		}

		// Move the descriptions container
		let rightData = this.dataset.right;
		descriptions.style.left = `-${rightData}px`;

		// Run slideshow function every 3.5s
		// interval = window.setInterval(() => {
		// 	moveRight();
		// },2800);

		// // Calculate how far to move the item every 2 seconds
		// let totalOffset = rightData;
		// function moveRight() {
		// 	if (window.matchMedia("(min-width: 730px)").matches) {
		// 		// Set the right offset amount based off of the data attribute
		// 		totalOffset = Number(totalOffset) + Number(moveOffset);
		// 		if (totalOffset >= (moveOffset * 5)) {
		// 			totalOffset = 0;
		// 		}

		// 		// Add shadow to rectangle
		// 		for (let i = 0; i < icons.length; i++) {
		// 			icons[i].classList.remove('descSelected');
		// 			corners[i].style.display = 'none';
		// 		}
		// 		let rectangle = document.querySelector(`[data-right='${totalOffset}']`);
		// 		rectangle.classList.add('descSelected')

		// 		// Move descriptions element
		// 		descriptions.style.left = `-${totalOffset}px`;
		// 	} else {
		// 		// Set the right offset amount based off of the data attribute
		// 		totalOffset = Number(totalOffset) + Number(moveOffset) + 80;
		// 		if (totalOffset >= (moveOffset * 6)) {
		// 			totalOffset = moveOffset;
		// 		}

		// 		// Add corner to rectangle
		// 		for (let i = 0; i < icons.length; i++) {
		// 			corners[i].style.display = 'none';
		// 			icons[i].classList.remove('descSelected');
		// 		}

		// 		let rectangle = document.querySelector(`[data-right='${totalOffset}']`);
		// 		let thisCorner = rectangle.querySelector('.corner');
		// 		thisCorner.style.display = "block";

		// 		// Move descriptions element
		// 		descriptions.style.left = `-${totalOffset}px`;
		// 	}
		// }
	}
}