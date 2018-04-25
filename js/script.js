let debug = true;

window.addEventListener('DOMContentLoaded', function() {
	/*class Candidate {
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
	}//Candidate*/

	let //OurCandidate = new Candidate(),
			OurCandidate = {
				name: 'Иванов Иван Иванович',
				age: '40',
				sex: true,
				politics: 'Левые',
				bio: 'Суперкандидат!',
				skin: 2,
				clothes: 2,
				hair: 2
			},
			/*OurCandidate = {
				name: '',
				age: '',
				sex: true,
				politics: '',
				bio: '',
				skin: 1,
				clothes: 1,
				hair: 1
			},*/
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
			clothesOffset = 0,//смещение в одежде по полу
			mes = document.createElement('div');

// div for messages -----------------------------------
 mes.id = 'message';
	mes.style.cssText = `width: 100%; \
											border: 1px solid red;
											text-align: center;
											display: none;`;
	mes.innerHTML = 'сообщение';
	document.body.appendChild(mes);

	function showMes(text) {
		mes = document.querySelector('#message');
		mes.innerHTML = text;
		mes.style.display = 'block';
	}//showMes

	function hideMes() {
		mes = document.querySelector('#message');
		mes.innerHTML = '';
		mes.style.display = 'none';
	}//showMes

// create button -----------------------------------
	document.getElementById('popup-btn').addEventListener('click', () => {
		mainPage.style.display = 'none';
		overlay.style.display = 'none';
		customPage.style.display = 'flex';
		
		for (let i = 0; i < customPage.childNodes.length; i++) {
			if (customPage.childNodes[i].nodeType == 1) customPage.childNodes[i].style.display = 'block';	
		}
		showCustomCandidate();
		if (debug) console.log('createButton.click');
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
		OurCandidate.name = document.getElementById('name').value;
		OurCandidate.age = document.getElementById('age').value;
		OurCandidate.sex = document.getElementById('male').checked;
		if (OurCandidate.sex) {
			sexOffset = 0;
			hairOffset = 0;
			clothesOffset = 0;
		} else {
			sexOffset = 3;
			hairOffset = 4;
			clothesOffset = 3;
		}
		OurCandidate.politics = document.getElementById('select').value;
		OurCandidate.bio = document.getElementById('bio').value;
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

let cards = document.querySelectorAll('.main-cards-item'),
		mainCards = document.querySelector('.main-cards'),
		newCard = cards[0].cloneNode(true),
		resetButton = document.getElementById('reset'),
		votingButton = document.getElementById('voting'),
		crimeButton = document.getElementById('crime'),
		myCard = newCard;

// ready button -----------------------------------
	document.getElementById('ready').addEventListener('click', () => {
		setCustomCandidate();
		if (OurCandidate.name!='' && OurCandidate.politics!='') {
			if (OurCandidate.age!='' && !isNaN(OurCandidate.age) && OurCandidate.age.length < 3) {
				if (OurCandidate.bio!='') {
					showCustomCandidate();
					mainPage.style.display = 'block';
					//overlay.style.display = 'none';
					customPage.style.display = 'none';

					newCard.setAttribute('id', 'our-candidate');
					mainCards.appendChild(newCard);

					cards = document.querySelectorAll('.main-cards-item');
					for (let i = 0; i < cards.length; i++) {
						cards[i].classList.remove('main-cards-item-active');
					}//for
					resetResults();

					myCard = document.getElementById('our-candidate');
					if (debug) console.log('OurCandidate');
					if (debug) console.log(OurCandidate);

					if (debug) console.log('myCard');
					if (debug) console.log(myCard);

					loadCandidate();

					myCard.querySelector('.photo').classList.remove('photo-1');
					myCard.querySelector('.photo').innerHTML = document.querySelector('.custom-char').innerHTML;
					myCard.querySelector('.btn').remove();

					hideMes();
					console.log(myCard.querySelector('.photo'));
				} else {
					showMes('Нужно заплонить биографию');
					bioInput.focus();
				}
			} else {
				showMes('Неверно введен возраст');
				ageInput.focus();
			}
		} else {
			showMes('Не введено имя');
			nameInput.focus();
		}

		if (debug) console.log('readyButton.click');
	});//readyButton.click

	//console.log('!!!');
// main page -----------------------------------
	let result = [0, 0, 0],
			counters = document.getElementsByClassName('result-count'),
			progBars = document.getElementsByClassName('progress-bar');

	function loadCandidate() {
		//setCustomCandidate();
		myCard.querySelector('.name').innerHTML = OurCandidate.name;
		//myCard.querySelector('.name').innerHTML = document.getElementById('name').value;
		//console.log(OurCandidate.age.slice(OurCandidate.age.length-1));
		let lastDig = +OurCandidate.age.slice(OurCandidate.age.length-1),
				years = '';
		switch (lastDig) {
			case 1:
				years = ' год';
				break;
			case 2:
				years = ' года';
				break;
			case 3:
				years = ' года';
				break;
			case 4:
				years = ' года';
				break;
			default:
				years = ' лет';
				break;
		}
		if (OurCandidate.age.substring(0,1)=='1') years = ' лет';
		myCard.querySelector('.age').innerHTML = OurCandidate.age + years;
		//myCard.querySelector('.age').innerHTML = document.getElementById('age').value;
		if (OurCandidate.sex) 
			myCard.querySelector('.sex').innerHTML = 'Мужской';
		else
			myCard.querySelector('.sex').innerHTML = 'Женский';
		myCard.querySelector('.views').innerHTML = OurCandidate.politics;
		myCard.querySelector('.bio').innerHTML = OurCandidate.bio;
		if (debug) console.log('loadCandidate');
	}//loadCandidate

	loadCandidate();

	function randomInt(min, max) {
    var rand = min + Math.random() * (max + 1 - min);
    rand = Math.floor(rand);
    return rand;
  }//randomInt

	function resetResults() {
		result = [0, 0, 0];
		updateResults(false);
		for (let i = 0; i < cards.length; i++) {
			cards[i].classList.remove('main-cards-item-active');
		}//for
		if (debug) console.log('resetResults');
	}//resetResults

	function updateResults(show) {
		let bigBoss = 0;
		for (let i = 0; i < result.length; i++) {
			counters[i].innerHTML = result[i] + '%';
			progBars[i].style.height = result[i] + '%';
			if (result[i] > result[bigBoss]) bigBoss = i;
		}//for
		if (show) cards[bigBoss].classList.add('main-cards-item-active');
		if (debug) console.log('updateResults');
		if (debug) console.log('bigBoss=' + bigBoss);
	}//updateResults

	function votingResults(rnd = false, addn = 0) {
		if (rnd) {
			result[2] = randomInt(1, 100-addn) + addn;
			result[1] = randomInt(1, 100 - result[2]);
			result[0] = 100 - result[2] - result[1];
			for (let i = 0; i < result.length; i++) {
				if (result[i] < 1) result[i] = 1;
			}
		} else {
			result = [25, 26, 49+addn];
		}
		if (debug) console.log('votingResults');
		if (debug) console.log(result);
		if (debug) console.log('result summ='+(result[0]+result[1]+result[2]));
	}//votingResults

// reset button -----------------------------------
	resetButton.addEventListener('click', () => {
		resetResults();
		
		OurCandidate = {
			name: '',
			age: '',
			sex: true,
			politics: '',
			bio: '',
			skin: 1,
			clothes: 1,
			hair: 1
		};

		for (let i = 0; i < skinSlides.length; i++) {
			skinSlides[i].style.display = 'none';
		}//for
		skinSlides[0].style.display = 'flex';

		for (let i = 0; i < hairSlides.length; i++) {
			hairSlides[i].style.display = 'none';
		}//for
		hairSlides[0].style.display = 'flex';

		for (let i = 0; i < clothesSlides.length; i++) {
			clothesSlides[i].style.display = 'none';
		}//for
		clothesSlides[0].style.display = 'flex';

		myCard.remove();

		mainPage.style.display = 'none';
		overlay.style.display = 'none';
		customPage.style.display = 'flex';
		
		for (let i = 0; i < customPage.childNodes.length; i++) {
			if (customPage.childNodes[i].nodeType == 1) customPage.childNodes[i].style.display = 'block';	
		}
		showCustomCandidate();
		if (debug) console.log('resetButton.click');
	});//resetButton.click

// voting button -----------------------------------
	votingButton.addEventListener('click', () => {
		resetResults();
		votingResults(true);
		updateResults(true);
		
		votingButton.innerHTML = 'повторное голосование';
		if (debug) console.log('votingButton.click');
	});//votingButton.click

// crime button -----------------------------------
	crimeButton.addEventListener('click', () => {
		resetResults();
		votingResults(true, 25);
		updateResults(true);
		
		if (debug) console.log('crimeButton.click');
	});//crimeButton.click

	if (debug) console.log('myCard');
	if (debug) console.log(myCard);

});//DOMContentLoaded