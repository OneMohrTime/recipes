///**
// * Launch modal with url hash
// */
//
//const allDrinks = Array.prototype.slice.apply(
//	document.querySelectorAll('a.drink')
//);
//const allDrinkModals = Array.prototype.slice.apply(
//	document.querySelectorAll('.drink__modal')
//);
//// declare vars early
//let urlHash   = '';
//let drinkHash = '';
//
//for (let i = 0; i < allDrinks.length; ++i) {
//	allDrinks[i].addEventListener('click', (e) => {
//		// browser doesn't log hash early enough,
//		// don't let it do its thing
//		e.preventDefault();
//		// send ID of clicked element to url hash
//		let drinkHash = allDrinks[i].getAttribute('href');
//		drinkHash.slice(0, 25);
//		window.location.hash = drinkHash;
//		let urlHash = window.location.hash;
//		history.pushState(null, null, urlHash)
//	});
//}
//
//window.addEventListener('popstate', function(e) {
//	let urlHash      = e.target.location.hash ? e.target.location.hash : null;
//	let drinkModal   = document.querySelector(urlHash);
//	let drinkModalID = drinkModal ? drinkModal.getAttribute('id') : null;
//
//	// grab elements to be modified
//	let body    = document.querySelector('body');
//	let page    = document.querySelector('.page');
//	let overlay = document.querySelector('.page__overlay');
//
//	// add modal if the hash exists
//	if (urlHash) {
//		// add modal class to page elements to lock scrolling
//		body.classList.add('--is-modal')
//		page.classList.add('--is-modal');
//		overlay.classList.add('--is-modal');
//		// grab targeted drink by ID, add modal
//		var selectedDrink = document.querySelector('#' + drinkModalID);
//		selectedDrink.classList.add('--is-modal')
//	}
//	
//	if (urlHash == null) {
//		// remove modal class to page elements to resume behavior
//		body.classList.remove('--is-modal')
//		page.classList.remove('--is-modal');
//		overlay.classList.remove('--is-modal');
//		// grab targeted drink by ID, remove modal
//		for (let i = 0; i < allDrinkModals.length; ++i) {
//			allDrinkModals[i].classList.remove('--is-modal');
//		}
//	}
//});
//
//window.addEventListener('click', function(e) {
//	// grab elements to be modified
//	let body    = document.querySelector('body');
//	let page    = document.querySelector('.page');
//	let overlay = document.querySelector('.page__overlay');
//
//	if (e.target.getAttribute('id') == 'modalClose') {
//		// remove hash from url
//		window.location.hash = '';
//		let urlHash = window.location.hash;
//		history.pushState(null, null, urlHash);
//		// remove modal class to page elements to resume behavior
//		body.classList.remove('--is-modal');
//		page.classList.remove('--is-modal');
//		overlay.classList.remove('--is-modal');
//		// grab targeted drink by ID, remove modal
//		for (let i = 0; i < allDrinkModals.length; ++i) {
//			allDrinkModals[i].classList.remove('--is-modal');
//		}
//	}
//});
