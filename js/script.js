let debug = true;

class Candidate {
	constructor(name = 'Иванов Иван Иванович', age = 40, sex = true, politics = 'Левые', bio = 'Суперкандидат!', skin = 2, clothes = 1, hair = 2) {
		this.name = name;
		this.age = age;
		this.sex = sex;
		this.politics = politics;
		this.bio = bio;
		this.skin = skin;
		this.clothes = clothes;
		this.hair = hair;
	}//constructor

}//Candidate

window.addEventListener('DOMContentLoaded', function() {
	let OurCandidate = new Candidate();
			customPage = document.getElementsByClassName('custom')[0],
			mainPage = document.getElementsByClassName('main')[0],
			overlay = document.getElementsByClassName('overlay')[0],
			nameInput = document.getElementById('name'),
			ageInput = document.getElementById('age'),
			sexMale = document.getElementById('male'),
			sexFemale = document.getElementById('female'),
			polInput = document.getElementById('select'),
			bioInput = document.getElementById('bio'),
			skin = document.getElementById('person-skin'),
			clothes = document.getElementById('person-clothes'),
			hair = document.getElementById('person-hair'),
			sexOffset = 0,//смещение в картинках по полу
			hairOffset = 0,//смещение в волосах по полу
			clothesOffset = 0;//смещение в одежде по полу

// create button -----------------------------------
	document.getElementById('popup-btn').addEventListener('click', () => {
		mainPage.style.display = 'none';
		overlay.style.display = 'none';
		customPage.style.display = 'flex';
		
		for (let i = 0; i < customPage.childNodes.length; i++) {
			if (customPage.childNodes[i].nodeType == 1) customPage.childNodes[i].style.display = 'block';	
		}
		showCustomCandidate();
	});//createButton.click

// customizer -----------------------------------
	function setSkin(n) {
		skin.style.backgroundImage = 'url("img/skin/skin-'+n+'.png")';
		OurCandidate.skin = n;
	}//setSkin
	
	function setClothes(n) {
		clothes.style.backgroundImage = 'url("img/clothes/construct/clothes-'+n+'.png")';
		OurCandidate.clothes = n;
	}//setSkin

	function setHair(n) {
		hair.style.backgroundImage = 'url("img/hair/construct/hair-'+n+'.png")';
		OurCandidate.hair = n;
	}//setSkin

	function showCustomCandidate() {
		nameInput.value = OurCandidate.name;
		ageInput.value = OurCandidate.age;
		if (OurCandidate.sex) {
			sexMale.setAttribute('checked', '');
		} else {
			sexFemale.setAttribute('checked', '');
		}
		polInput.value = OurCandidate.politics;
		bioInput.value = OurCandidate.bio;
		setSkin(OurCandidate.skin);
		setClothes(OurCandidate.clothes);
		setHair(OurCandidate.hair);
		if (debug) console.log('showCustomCandidate');
		if (debug) console.log(OurCandidate);
	}//showCustomCandidate

	function setCustomCandidate() {
		OurCandidate.name = nameInput.value;
		OurCandidate.age = ageInput.value;
		OurCandidate.sex = sexMale.checked;
		if (OurCandidate.sex) {
			sexOffset = 0;
		} else {
			sexOffset = 3;
		}
		OurCandidate.politics = polInput.value;
		OurCandidate.bio = bioInput.value;
		//setSkin(OurCandidate.skin);
		//setClothes(OurCandidate.clothes);
		//setHair(OurCandidate.hair);
		if (debug) console.log('setCustomCandidate');
		if (debug) console.log(OurCandidate);
	}//setCustomCandidate

// customizer sliders -----------------------------------
	let skinSlider = document.querySelector(".skin"),
			skinSlides = document.querySelectorAll(".skin-color"),
			skinSlideIndex = OurCandidate.skin - sexOffset;
			skinPrevButton = skinSlider.querySelector(".prev"),
			skinNextButton = skinSlider.querySelector(".next"),
			hairSlider = document.querySelector(".hair"),
			hairSlides = document.querySelectorAll(".hair-style"),
			hairAllDivs = document.querySelectorAll('.hair>div'),
			hairSlideIndex = OurCandidate.hair - hairOffset;
			hairPrevButton = hairSlider.querySelector(".prev"),
			hairNextButton = hairSlider.querySelector(".next"),
			clothesSlider = document.querySelector(".clothes"),
			clothesSlides = document.querySelectorAll(".clothes-style"),
			clothesAllDivs = document.querySelectorAll('.clothes>div'),
			clothesSlideIndex = OurCandidate.clothes - clothesOffset;
			clothesPrevButton = clothesSlider.querySelector(".prev"),
			clothesNextButton = clothesSlider.querySelector(".next");

// skinSlider -----------------------------------
	showSkinSlides(skinSlideIndex + sexOffset);

	function showSkinSlides(n) {
		if (n > skinSlides.length) {
			skinSlideIndex = 1;
		}//if

		if (n < 1) {
			skinSlideIndex = skinSlides.length;
		}//if

		for (let i = 0; i < skinSlides.length; i++) {
			skinSlides[i].style.display = 'none';
		}//for

		skinSlides[skinSlideIndex - 1].style.display = 'flex';
	}//showSkinSlides

	function plusSkinSlides(n) {
		showSkinSlides(skinSlideIndex += n);
		OurCandidate.skin = skinSlideIndex + sexOffset;
		setSkin(OurCandidate.skin);
	}//plusSkinSlides

	skinPrevButton.addEventListener('click', () => {
		plusSkinSlides(-1);
		if (debug) console.log('skinPrevButton skin=' + OurCandidate.skin + ', i=' + skinSlideIndex);
	});//skinPrevButton.click

	skinNextButton.addEventListener('click', () => {
		plusSkinSlides(1);
		if (debug) console.log('skinNextButton skin=' + OurCandidate.skin + ', i=' + skinSlideIndex);
	});//skinPrevButton.click

// hairSlider -----------------------------------
	showHairSlides(hairSlideIndex + hairOffset);

	function showHairSlides(n) {
		if (n > hairSlides.length) {
			hairSlideIndex = 1;
		}//if

		if (n < 1) {
			hairSlideIndex = hairSlides.length;
		}//if

		for (let i = 0; i < hairSlides.length; i++) {
			hairSlides[i].style.display = 'none';
		}//for

		hairSlides[hairSlideIndex - 1].style.display = 'flex';
	}//showHairSlides

	function plusHairSlides(n) {
		showHairSlides(hairSlideIndex += n);
		OurCandidate.hair = hairSlideIndex + hairOffset;
		setHair(OurCandidate.hair);
	}//plusHairSlides

	hairPrevButton.addEventListener('click', () => {
		plusHairSlides(-1);
		if (debug) console.log('hairPrevButton hair=' + OurCandidate.hair + ', i=' + hairSlideIndex);
	});//hairPrevButton.click

	hairNextButton.addEventListener('click', () => {
		plusHairSlides(1);
		if (debug) console.log('hairNextButton hair=' + OurCandidate.hair + ', i=' + hairSlideIndex);
	});//hairPrevButton.click

// clothesSlider -----------------------------------
	showClothesSlides(clothesSlideIndex + clothesOffset);

	function showClothesSlides(n) {
		if (n > clothesSlides.length) {
			clothesSlideIndex = 1;
		}//if

		if (n < 1) {
			clothesSlideIndex = clothesSlides.length;
		}//if

		for (let i = 0; i < clothesSlides.length; i++) {
			clothesSlides[i].style.display = 'none';
		}//for

		clothesSlides[clothesSlideIndex - 1].style.display = 'flex';
	}//showClothesSlides

	function plusClothesSlides(n) {
		showClothesSlides(clothesSlideIndex += n);
		OurCandidate.clothes = clothesSlideIndex + sexOffset;
		setClothes(OurCandidate.clothes);
	}//plusClothesSlides

	clothesPrevButton.addEventListener('click', () => {
		plusClothesSlides(-1);
		console.log('clothesPrevButton cloth=' + OurCandidate.clothes + ', i=' + clothesSlideIndex);
	});//clothesPrevButton.click

	clothesNextButton.addEventListener('click', () => {
		plusClothesSlides(1);
		console.log('clothesNextButton cloth=' + OurCandidate.clothes + ', i=' + clothesSlideIndex);
	});//clothesPrevButton.click

	function resetHair() {
		let hairDivs = document.querySelectorAll('.hair>div'),
				hair = document.querySelector('.hair');
		if (hairSlides.length < 10) {
			for (let j = 0; j < hairDivs.length; j++) {
				hairDivs[j].remove();
			}//for

			for (let j = 0; j < hairAllDivs.length; j++) {
				hair.appendChild(hairAllDivs[j]);
			}//for
		}//if
		if (debug) console.log('resetHair');
		//hairSlideIndex = 0;
	}//resetHair

	function resetClothes() {
		let clothesDivs = document.querySelectorAll('.clothes>div'),
				clothes = document.querySelector('.clothes');
		if (clothesSlides.length < 10) {
			for (let j = 0; j < clothesDivs.length; j++) {
				clothesDivs[j].remove();
			}//for

			for (let j = 0; j < clothesAllDivs.length; j++) {
				clothes.appendChild(clothesAllDivs[j]);
			}//for
		}//if
		if (debug) console.log('resetClothes');
		//clothesSlideIndex = 0;
	}//resetClothes

	function setSliders(sex) {
		resetHair();
		resetClothes();
		hairSlides = document.querySelectorAll(".hair-style");
		clothesSlides = document.querySelectorAll(".clothes-style");

		for (let i = 0; i < hairSlides.length; i++) {	
			if (sex) {
				if (i > 3) hairSlides[i].remove();	
			} else {
				if (i < 4) hairSlides[i].remove();
			}//if	
		}//for

		for (let i = 0; i < clothesSlides.length; i++) {	
			if (sex) {
				if (i > 2) clothesSlides[i].remove();
			} else {
				if (i < 3) clothesSlides[i].remove();
			}//if	
		}//for
		
		hairSlides = document.querySelectorAll(".hair-style");
		clothesSlides = document.querySelectorAll(".clothes-style");
		showHairSlides(hairSlideIndex);
		showClothesSlides(clothesSlideIndex);
		if (debug) console.log('setSliders');
	}//setSliders
	
	setSliders(OurCandidate.sex);

// sex change -----------------------------------
	let input = document.querySelectorAll(".radio>input");
	for (let i = 0; i < input.length; i++) {
		input[i].addEventListener('change', function() {
			OurCandidate.sex = sexMale.checked;
			if (OurCandidate.sex) {
				sexOffset = 0;
				hairOffset = 0;
				clothesOffset = 0;
				OurCandidate.skin = OurCandidate.skin - 3;
				OurCandidate.hair = OurCandidate.hair - 4;
				OurCandidate.clothes = OurCandidate.clothes - 3;
				hairSlideIndex = OurCandidate.hair;
				clothesSlideIndex = OurCandidate.clothes;
			} else {
				sexOffset = 3;
				hairOffset = 4;
				clothesOffset = 3;
				OurCandidate.skin = OurCandidate.skin + sexOffset;
				OurCandidate.hair = OurCandidate.hair + hairOffset;
				OurCandidate.clothes = OurCandidate.clothes + 3;
				hairSlideIndex = OurCandidate.hair - hairOffset;
				clothesSlideIndex = OurCandidate.clothes - clothesOffset;
			}//if
			setSliders(OurCandidate.sex);
			showSkinSlides(skinSlideIndex);
			showHairSlides(hairSlideIndex);
			showClothesSlides(clothesSlideIndex);
			setSkin(OurCandidate.skin);
			setClothes(OurCandidate.clothes);
			setHair(OurCandidate.hair);
			//if (debug) console.log(hairSlides);
			//if (debug) console.log(hairAllDivs);
			//if (debug) console.log(this.getAttribute('value') + ' hair=' + OurCandidate.hair + ', i=' + hairSlideIndex);
			if (debug) console.log(this.getAttribute('value') + ' cloth=' + OurCandidate.clothes + ', i=' + clothesSlideIndex);
		});
	}//for

// ready button -----------------------------------
	document.getElementById('ready').addEventListener('click', () => {
		setCustomCandidate();
		showCustomCandidate();
		mainPage.style.display = 'block';
		//overlay.style.display = 'none';
		customPage.style.display = 'none';
	});//readyButton.click

// main page -----------------------------------
	let cards = document.querySelectorAll('.main-cards-item'),
			mainCards = document.querySelector('.main-cards'),
			newCard = cards[0].cloneNode(true),
			resetButton = document.getElementById('reset'),
			votingButton = document.getElementById('voting'),
			crimeButton = document.getElementById('crime');

	newCard.setAttribute('id', 'our-candidate');
	mainCards.appendChild(newCard);

	cards = document.querySelectorAll('.main-cards-item');
	for (let i = 0; i < cards.length; i++) {
		cards[i].classList.remove('main-cards-item-active');
	}//for

	let myCard = document.getElementById('our-candidate');

	myCard.querySelector('.name').innerHTML = OurCandidate.name;
	myCard.querySelector('.age').innerHTML = OurCandidate.age;
	if (OurCandidate.sex) 
		myCard.querySelector('.sex').innerHTML = 'Мужской';
	else
		myCard.querySelector('.sex').innerHTML = 'Женский';
	myCard.querySelector('.views').innerHTML = OurCandidate.politics;
	myCard.querySelector('.bio').innerHTML = OurCandidate.bio;

	function resetResults() {
		let counters = document.getElementsByClassName('result-count');
				progBars = document.getElementsByClassName('progress-bar');
		for (let i = 0; i < counters.length; i++) {
			counters[i].innerHTML = 0 + '%';
		}
		
		for (let i = 0; i < progBars.length; i++) {
			progBars[i].style.height = 0 + '%';
		}
	}//resetResults

// reset button -----------------------------------
	resetButton.addEventListener('click', () => {
		resetResults();
		
		myCard.remove();

		mainPage.style.display = 'none';
		overlay.style.display = 'none';
		customPage.style.display = 'flex';
		
		for (let i = 0; i < customPage.childNodes.length; i++) {
			if (customPage.childNodes[i].nodeType == 1) customPage.childNodes[i].style.display = 'block';	
		}
		showCustomCandidate();
	});//resetButton.click

	if (debug) console.log('myCard');
	if (debug) console.log(myCard.innerHTML);

});//DOMContentLoaded