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
	// home.classList.add('vHiddenHome')
	homeHover.classList.remove('vHiddenHome')
}

function homeOut(x) {
	// home.classList.remove('vHiddenHome')
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
				// burger.classList.add('open')
			}
		});
	}
}

var w = window.innerWidth;

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
				// burger.classList.remove('open')
			// else move it back
			} else {
				leftColumn.style.top = '-330px'
				leftColumn.style.left = '0'
				// burger.classList.add('open')
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

				// burger.classList.remove('open')
			// else move it back
			} else {
				leftColumn.classList.add('under300Lleft')
				leftColumn.style.top = '0'


				// burger.classList.add('open')
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
				// leftColumn.style.left = '0'
				// leftColumn.style.top = '0'

				rightColumn.classList.remove('under300R');
				aboutTop.classList.remove('under300About');

				// burger.classList.remove('open')
			// else move it back
			} else {
				// leftColumn.style.left = '-22.5%'
				// leftColumn.style.top = '0'

				aboutTop.classList.add('under300About');
				rightColumn.classList.add('under300R');

				// burger.classList.add('open')
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
			aboutTop.classList.add('under300About');

			// leftColumn.style.left = '-22.5%'

		} else {
			// if the scroll isn't lower than 250px from top move back to normal setup and make right sidebar normal 
			leftColumn.classList.remove('under300L');
			rightColumn.classList.remove('under300R');
			burger.classList.add('vHidden');
			burger.classList.remove('under300Burger');
			leftColumn.classList.remove('under300Lleft');
			aboutTop.classList.remove('under300About');
			
			// leftColumn.style.left = '0'
			// responsiveTitle.classList.add('hidden')
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
	var index = mailLink.stringify.indexOf('@')
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
	const learnMore = document.querySelector('.learnMore');
	const icons = document.querySelectorAll('.aboutProcessIcon');
	let description = document.querySelectorAll('.aboutProcessDescription');

	let i;
	for (i = 0; i < icons.length; i++) {
		icons[i].addEventListener('click', iconClicked);
	}

	function iconClicked() {
		if (!learnMore.classList.contains('aboutHidden')){
			learnMore.classList.add('aboutHidden')
		}

		let i;
		for (i = 0; i < icons.length; i++) {
			icons[i].classList.remove('descSelected');
		}

		this.classList.add('descSelected');

		for (i = 0; i < description.length; i++) {
			description[i].classList.add('aboutHidden');
		}

		if (this.classList.contains('aPI1')){
			description[0].classList.remove('aboutHidden');
		} else if (this.classList.contains('aPI2')) {
			description[1].classList.remove('aboutHidden');
		} else if (this.classList.contains('aPI3')) {
			description[2].classList.remove('aboutHidden');
		} else if (this.classList.contains('aPI4')) {
			description[3].classList.remove('aboutHidden');
		} else if (this.classList.contains('aPI5')) {
			description[4].classList.remove('aboutHidden');
		}
	}
}