window.addEventListener('DOMContentLoaded', function() {
	let customPage = document.getElementsByClassName('custom')[0],
			mainPage = document.getElementsByClassName('main')[0],
			overlay = document.getElementsByClassName('overlay')[0];

// create button -----------------------------------
	document.getElementById('popup-btn').addEventListener('click', () => {
		mainPage.style.display = 'none';
		overlay.style.display = 'none';
		customPage.style.display = 'flex';
		
		for (let i = 0; i < customPage.childNodes.length; i++) {
			if (customPage.childNodes[i].nodeType == 1) customPage.childNodes[i].style.display = 'block';	
		}
	});//createButton_click

});//DOMContentLoaded