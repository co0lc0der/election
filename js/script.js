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
//	document.getElementById('popup-btn').addEventListener('click', () => {
		mainPage.style.display = 'none';
		overlay.style.display = 'none';
		customPage.style.display = 'flex';
		
		for (let i = 0; i < customPage.childNodes.length; i++) {
			if (customPage.childNodes[i].nodeType == 1) customPage.childNodes[i].style.display = 'block';	
		}
		showCustomCandidate();
//	});//createButton.click

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
		if (debug) console.log('show');
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
		if (debug) console.log('set');
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
			hairAllSlides = document.querySelectorAll('.hair>div'),
			hairSlideIndex = OurCandidate.hair - sexOffset;
			hairPrevButton = hairSlider.querySelector(".prev"),
			hairNextButton = hairSlider.querySelector(".next"),
			clothesSlider = document.querySelector(".clothes"),
			clothesSlides = document.querySelectorAll(".clothes-style"),
			clothesSlideIndex = OurCandidate.clothes - sexOffset;
			clothesPrevButton = clothesSlider.querySelector(".prev"),
			clothesNextButton = clothesSlider.querySelector(".next");

// skinSlider -----------------------------------
	showSkinSlides(skinSlideIndex + sexOffset);

	function showSkinSlides(n) {
		if (n > skinSlides.length) {
			skinSlideIndex = 1;
			//if (!OurCandidate.sex) { OurCandidate.skin += 3; }
		}//if

		if (n < 1) {
			skinSlideIndex = skinSlides.length;
			//if (!OurCandidate.sex) { OurCandidate.skin += 3; }
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
			//if (!OurCandidate.sex) { OurCandidate.skin += 3; }
		}//if

		if (n < 1) {
			hairSlideIndex = hairSlides.length;
			//if (!OurCandidate.sex) { OurCandidate.skin += 3; }
		}//if

		for (let i = 0; i < hairSlides.length; i++) {
			hairSlides[i].style.display = 'none';
		}//for

		hairSlides[hairSlideIndex - 1].style.display = 'flex';
	}//showHairSlides

	function plusHairSlides(n) {
		showHairSlides(hairSlideIndex += n);
		OurCandidate.hair = hairSlideIndex;// + hairOffset;
		setHair(OurCandidate.hair);
	}//plusHairSlides

	hairPrevButton.addEventListener('click', () => {
		if (OurCandidate.sex) {
			if (hairSlideIndex < 1) hairSlideIndex = 3;
		} else {
			if (hairSlideIndex < 4) hairSlideIndex = 6;
		}
		plusHairSlides(-1);
		if (debug) console.log('hairPrevButton hair=' + OurCandidate.hair + ', i=' + hairSlideIndex);
	});//hairPrevButton.click

	hairNextButton.addEventListener('click', () => {
		if (OurCandidate.sex) {
			if (hairSlideIndex > 3) hairSlideIndex = 0;
		} else {
			if (hairSlideIndex > 6) hairSlideIndex = 4;
		}
		plusHairSlides(1);
		if (debug) console.log('hairNextButton hair=' + OurCandidate.hair + ', i=' + hairSlideIndex);
	});//hairPrevButton.click

// clothesSlider -----------------------------------
/*	showClothesSlides(clothesSlideIndex + sexOffset);

	function showClothesSlides(n) {
		if (n > clothesSlides.length) {
			clothesSlideIndex = 1;
			//if (!OurCandidate.sex) { OurCandidate.skin += 3; }
		}//if

		if (n < 1) {
			clothesSlideIndex = clothesSlides.length;
			//if (!OurCandidate.sex) { OurCandidate.skin += 3; }
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
	});//clothesPrevButton.click*/

	function resetHair() {
		let hairDivs = document.querySelectorAll('.hair>div'),
				hair = document.querySelector('.hair');
		if (hairSlides.length < 10) {
			for (let j = 0; j < hairDivs.length; j++) {
				hairDivs[j].remove();
			}//for

			for (let j = 0; j < hairAllSlides.length; j++) {
				hair.appendChild(hairAllSlides[j]);
			}//for
		}//if
		if (debug) console.log('resetHair');
	}//resetHair

// sex change -----------------------------------
	let input = document.querySelectorAll(".radio>input");
	for (let i = 0; i < input.length; i++) {
		input[i].addEventListener('change', function() {
			OurCandidate.sex = sexMale.checked;
			if (OurCandidate.sex) {
				sexOffset = 0;
				hairOffset = 0;
				OurCandidate.skin = OurCandidate.skin - 3;
				OurCandidate.hair = OurCandidate.hair - 4;
				//OurCandidate.clothes = OurCandidate.clothes - 3;
				resetHair();
				/*for (let j = 0; j < hairSlides.length; j++) {
					if (j>=4) hairSlides[j].remove();
				}//for*/
				hairSlideIndex = 0;
				showHairSlides(OurCandidate.hair);
			} else {
				sexOffset = 3;
				hairOffset = 4;
				OurCandidate.skin = OurCandidate.skin + sexOffset;
				OurCandidate.hair = OurCandidate.hair + hairOffset;
				//OurCandidate.clothes = OurCandidate.clothes + 3;
				resetHair();
				/*for (let j = 0; j < hairSlides.length; j++) {
					if (j<4) hairSlides[j].remove();
				}//for*/
				hairSlideIndex = 6;
				showHairSlides(OurCandidate.hair);
			}//if
			showSkinSlides(skinSlideIndex);
			//showHairSlides(hairSlideIndex);
			setSkin(OurCandidate.skin);
			setClothes(OurCandidate.clothes);
			setHair(OurCandidate.hair);
			if (debug) console.log(hairSlides);
			if (debug) console.log(hairAllSlides);
			if (debug) console.log(this.getAttribute('value') + ' hair=' + OurCandidate.hair + ', i=' + hairSlideIndex);
			//console.log(this.getAttribute('value') + ' cloth=' + OurCandidate.clothes + ', i=' + clothesSlideIndex);
		});
	}//for
/*	document.querySelector(".radio").addEventListener('change', () => {
		sexOffset = 0;
		skinSlideIndex = OurCandidate.skin - sexOffset;
		setSkin(1);
		setClothes(1);
		setHair(1);
		showSkinSlides(skinSlideIndex);
		console.log('male radio ' + OurCandidate.skin + ', ' + skinSlideIndex);
	});
	sexFemale.addEventListener('change', () => {
		sexOffset = 3;
		setSkin(4);
		setClothes(4);
		setHair(4);
		skinSlideIndex = 1;
		showSkinSlides(skinSlideIndex);
		console.log('female radio ' + OurCandidate.skin + ', ' + skinSlideIndex);
	});*/

// ready button -----------------------------------
	document.getElementById('ready').addEventListener('click', () => {
		setCustomCandidate();
		showCustomCandidate();
		//console.log(skinSlider);
		
	});//readyButton.click

});//DOMContentLoaded