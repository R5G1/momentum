const next = document.querySelector('.slide-next');
const prev = document.querySelector('.slide-prev');
const weatherIcon = document.querySelector('.weather-icon');
const temperature = document.querySelector('.temperature');
const weatherDescription = document.querySelector('.weather-description');
const city = document.querySelector('.city');
const wind = document.querySelector('.wind');
const humidity = document.querySelector('.humidity');
const changeQuote = document.querySelector('.change-quote')
const quoteText = document.querySelector('.quote');
const authorText = document.querySelector('.author');

const player = document.querySelector('button.play.player-icon');
const playPrevbtn = document.querySelector('.play-prev')
const playBtn = document.querySelector('.play');
const playNextbtn = document.querySelector('.play-next');
const playList = document.querySelector('.play-list')
const audio = new Audio();

//! time 
function showTime() {
	const time = document.querySelector('.time');
	const currentTime = new Date().toLocaleTimeString();
	time.textContent = currentTime;
	setTimeout(showTime, 1000);
};
showTime();
//! time end
//! date 
function showDate() {
	const date = document.querySelector('.date');
	const options = {weekday: 'long' ,month: 'long', day: 'numeric',  timeZone: 'UTC'};
	const currentDate = new Date().toLocaleDateString('en-US', options);
	date.textContent = currentDate;
	setTimeout(showDate, 1000);
};
showDate();
//! date end
//! hello 
function getHours() {
	const date = new Date();
	return  date.getHours();
	
};


function getTimeOfDay() {
	const hours = getHours();
	// const hours = 6;
	if (hours  < 12 ) {
		if (hours >= 6) {
			return  'morning';
		}else if (hours < 6) {
			return 'night';
		}
	} else if (hours  >= 12,hours < 18) {
		return'day';
	} else if (hours  >= 18,hours <= 24 ) {
		return 'evening';
	}
	setTimeout(getTimeOfDay, 1000);
};


function timeOfDay () {
	const timeOfDay = getTimeOfDay();
	const greeting = document.querySelector('.greeting');
	greeting.textContent = `Good ${timeOfDay}`;
};
timeOfDay ();
const day = timeOfDay ();
//!  end
//! save
const nameInput = document.querySelector('.name');
function setLocalStorage() {
	localStorage.setItem('name',nameInput.value);
	
};
window.addEventListener('beforeunload', setLocalStorage)

function getLocalStorage() {
	if(localStorage.getItem('name')) {
		nameInput.value = localStorage.getItem('name');
	}
};
window.addEventListener('load', getLocalStorage)
//!end
//!slaid

function getRandomNum() {
	let min = Math.ceil(0);
	let max = Math.floor(19);
	return Math.floor(Math.random() * (max - min + 1)) + min; //Максимум и минимум включаются
};
const randomNum = getRandomNum();


const imageMorning = [
	"url('https://raw.githubusercontent.com/rolling-scopes-school/stage1-tasks/assets/images/morning/01.jpg')",
	"url('https://raw.githubusercontent.com/rolling-scopes-school/stage1-tasks/assets/images/morning/02.jpg')",
	"url('https://raw.githubusercontent.com/rolling-scopes-school/stage1-tasks/assets/images/morning/03.jpg')",
	"url('https://raw.githubusercontent.com/rolling-scopes-school/stage1-tasks/assets/images/morning/04.jpg')",
	"url('https://raw.githubusercontent.com/rolling-scopes-school/stage1-tasks/assets/images/morning/05.jpg')",
	"url('https://raw.githubusercontent.com/rolling-scopes-school/stage1-tasks/assets/images/morning/06.jpg')",
	"url('https://raw.githubusercontent.com/rolling-scopes-school/stage1-tasks/assets/images/morning/07.jpg')",
	"url('https://raw.githubusercontent.com/rolling-scopes-school/stage1-tasks/assets/images/morning/08.jpg')",
	"url('https://raw.githubusercontent.com/rolling-scopes-school/stage1-tasks/assets/images/morning/09.jpg')",
	"url('https://raw.githubusercontent.com/rolling-scopes-school/stage1-tasks/assets/images/morning/10.jpg')",
	"url('https://raw.githubusercontent.com/rolling-scopes-school/stage1-tasks/assets/images/morning/11.jpg')",
	"url('https://raw.githubusercontent.com/rolling-scopes-school/stage1-tasks/assets/images/morning/12.jpg')",
	"url('https://raw.githubusercontent.com/rolling-scopes-school/stage1-tasks/assets/images/morning/13.jpg')",
	"url('https://raw.githubusercontent.com/rolling-scopes-school/stage1-tasks/assets/images/morning/14.jpg')",
	"url('https://raw.githubusercontent.com/rolling-scopes-school/stage1-tasks/assets/images/morning/15.jpg')",
	"url('https://raw.githubusercontent.com/rolling-scopes-school/stage1-tasks/assets/images/morning/16.jpg')",
	"url('https://raw.githubusercontent.com/rolling-scopes-school/stage1-tasks/assets/images/morning/17.jpg')",
	"url('https://raw.githubusercontent.com/rolling-scopes-school/stage1-tasks/assets/images/morning/18.jpg')",
	"url('https://raw.githubusercontent.com/rolling-scopes-school/stage1-tasks/assets/images/morning/19.jpg')",
	"url('https://raw.githubusercontent.com/rolling-scopes-school/stage1-tasks/assets/images/morning/20.jpg')",
	];

	const imageafternoon = [
	"url('https://raw.githubusercontent.com/rolling-scopes-school/stage1-tasks/assets/images/afternoon/01.jpg')",
	"url('https://raw.githubusercontent.com/rolling-scopes-school/stage1-tasks/assets/images/afternoon/02.jpg')",
	"url('https://raw.githubusercontent.com/rolling-scopes-school/stage1-tasks/assets/images/afternoon/03.jpg')",
	"url('https://raw.githubusercontent.com/rolling-scopes-school/stage1-tasks/assets/images/afternoon/04.jpg')",
	"url('https://raw.githubusercontent.com/rolling-scopes-school/stage1-tasks/assets/images/afternoon/05.jpg')",
	"url('https://raw.githubusercontent.com/rolling-scopes-school/stage1-tasks/assets/images/afternoon/06.jpg')",
	"url('https://raw.githubusercontent.com/rolling-scopes-school/stage1-tasks/assets/images/afternoon/07.jpg')",
	"url('https://raw.githubusercontent.com/rolling-scopes-school/stage1-tasks/assets/images/afternoon/08.jpg')",
	"url('https://raw.githubusercontent.com/rolling-scopes-school/stage1-tasks/assets/images/afternoon/09.jpg')",
	"url('https://raw.githubusercontent.com/rolling-scopes-school/stage1-tasks/assets/images/afternoon/10.jpg')",
	"url('https://raw.githubusercontent.com/rolling-scopes-school/stage1-tasks/assets/images/afternoon/11.jpg')",
	"url('https://raw.githubusercontent.com/rolling-scopes-school/stage1-tasks/assets/images/afternoon/12.jpg')",
	"url('https://raw.githubusercontent.com/rolling-scopes-school/stage1-tasks/assets/images/afternoon/13.jpg')",
	"url('https://raw.githubusercontent.com/rolling-scopes-school/stage1-tasks/assets/images/afternoon/14.jpg')",
	"url('https://raw.githubusercontent.com/rolling-scopes-school/stage1-tasks/assets/images/afternoon/15.jpg')",
	"url('https://raw.githubusercontent.com/rolling-scopes-school/stage1-tasks/assets/images/afternoon/16.jpg')",
	"url('https://raw.githubusercontent.com/rolling-scopes-school/stage1-tasks/assets/images/afternoon/17.jpg')",
	"url('https://raw.githubusercontent.com/rolling-scopes-school/stage1-tasks/assets/images/afternoon/18.jpg')",
	"url('https://raw.githubusercontent.com/rolling-scopes-school/stage1-tasks/assets/images/afternoon/19.jpg')",
	"url('https://raw.githubusercontent.com/rolling-scopes-school/stage1-tasks/assets/images/afternoon/20.jpg')",
		];
		

const imageevening = [
	"url('https://raw.githubusercontent.com/rolling-scopes-school/stage1-tasks/assets/images/evening/01.jpg')",
	"url('https://raw.githubusercontent.com/rolling-scopes-school/stage1-tasks/assets/images/evening/02.jpg')",
	"url('https://raw.githubusercontent.com/rolling-scopes-school/stage1-tasks/assets/images/evening/03.jpg')",
	"url('https://raw.githubusercontent.com/rolling-scopes-school/stage1-tasks/assets/images/evening/04.jpg')",
	"url('https://raw.githubusercontent.com/rolling-scopes-school/stage1-tasks/assets/images/evening/05.jpg')",
	"url('https://raw.githubusercontent.com/rolling-scopes-school/stage1-tasks/assets/images/evening/06.jpg')",
	"url('https://raw.githubusercontent.com/rolling-scopes-school/stage1-tasks/assets/images/evening/07.jpg')",
	"url('https://raw.githubusercontent.com/rolling-scopes-school/stage1-tasks/assets/images/evening/08.jpg')",
	"url('https://raw.githubusercontent.com/rolling-scopes-school/stage1-tasks/assets/images/evening/09.jpg')",
	"url('https://raw.githubusercontent.com/rolling-scopes-school/stage1-tasks/assets/images/evening/10.jpg')",
	"url('https://raw.githubusercontent.com/rolling-scopes-school/stage1-tasks/assets/images/evening/11.jpg')",
	"url('https://raw.githubusercontent.com/rolling-scopes-school/stage1-tasks/assets/images/evening/12.jpg')",
	"url('https://raw.githubusercontent.com/rolling-scopes-school/stage1-tasks/assets/images/evening/13.jpg')",
	"url('https://raw.githubusercontent.com/rolling-scopes-school/stage1-tasks/assets/images/evening/14.jpg')",
	"url('https://raw.githubusercontent.com/rolling-scopes-school/stage1-tasks/assets/images/evening/15.jpg')",
	"url('https://raw.githubusercontent.com/rolling-scopes-school/stage1-tasks/assets/images/evening/16.jpg')",
	"url('https://raw.githubusercontent.com/rolling-scopes-school/stage1-tasks/assets/images/evening/17.jpg')",
	"url('https://raw.githubusercontent.com/rolling-scopes-school/stage1-tasks/assets/images/evening/18.jpg')",
	"url('https://raw.githubusercontent.com/rolling-scopes-school/stage1-tasks/assets/images/evening/19.jpg')",
	"url('https://raw.githubusercontent.com/rolling-scopes-school/stage1-tasks/assets/images/evening/20.jpg')",
	];

const imagenight = [
	"url('https://raw.githubusercontent.com/rolling-scopes-school/stage1-tasks/assets/images/night/01.jpg')",
	"url('https://raw.githubusercontent.com/rolling-scopes-school/stage1-tasks/assets/images/night/02.jpg')",
	"url('https://raw.githubusercontent.com/rolling-scopes-school/stage1-tasks/assets/images/night/03.jpg')",
	"url('https://raw.githubusercontent.com/rolling-scopes-school/stage1-tasks/assets/images/night/04.jpg')",
	"url('https://raw.githubusercontent.com/rolling-scopes-school/stage1-tasks/assets/images/night/05.jpg')",
	"url('https://raw.githubusercontent.com/rolling-scopes-school/stage1-tasks/assets/images/night/06.jpg')",
	"url('https://raw.githubusercontent.com/rolling-scopes-school/stage1-tasks/assets/images/night/07.jpg')",
	"url('https://raw.githubusercontent.com/rolling-scopes-school/stage1-tasks/assets/images/night/08.jpg')",
	"url('https://raw.githubusercontent.com/rolling-scopes-school/stage1-tasks/assets/images/night/09.jpg')",
	"url('https://raw.githubusercontent.com/rolling-scopes-school/stage1-tasks/assets/images/night/10.jpg')",
	"url('https://raw.githubusercontent.com/rolling-scopes-school/stage1-tasks/assets/images/night/11.jpg')",
	"url('https://raw.githubusercontent.com/rolling-scopes-school/stage1-tasks/assets/images/night/12.jpg')",
	"url('https://raw.githubusercontent.com/rolling-scopes-school/stage1-tasks/assets/images/night/13.jpg')",
	"url('https://raw.githubusercontent.com/rolling-scopes-school/stage1-tasks/assets/images/night/14.jpg')",
	"url('https://raw.githubusercontent.com/rolling-scopes-school/stage1-tasks/assets/images/night/15.jpg')",
	"url('https://raw.githubusercontent.com/rolling-scopes-school/stage1-tasks/assets/images/night/16.jpg')",
	"url('https://raw.githubusercontent.com/rolling-scopes-school/stage1-tasks/assets/images/night/17.jpg')",
	"url('https://raw.githubusercontent.com/rolling-scopes-school/stage1-tasks/assets/images/night/18.jpg')",
	"url('https://raw.githubusercontent.com/rolling-scopes-school/stage1-tasks/assets/images/night/19.jpg')",
	"url('https://raw.githubusercontent.com/rolling-scopes-school/stage1-tasks/assets/images/night/20.jpg')",
	];
	

function moning () {
	window.onload = function moning() {
		document.body.style.backgroundImage = imageMorning[randomNum];
		var i=randomNum;
		let slider = document.body.style.backgroundImage;
			slider = imageMorning;

			function imgsrc() {
				i++;
				i %= slider.length;
				document.body.style.backgroundImage = slider[i];
			}
			function imgsrb() {
				if (i == 0) {
					i = 20;
				}
				i--;
				i %= slider.length;
				document.body.style.backgroundImage = slider[i];
			}
			next.onclick = function () {
				imgsrc();
			}
			prev.onclick = function () {
				imgsrb();
			};
			
	};
	
};
function nitgh() {
	window.onload = function() {
		document.body.style.backgroundImage = imagenight[randomNum];

		var i=randomNum;
		let slider = document.body.style.backgroundImage;
			slider = imagenight;
			
		function imgsrc() {
			i++;
			i %= slider.length;
			document.body.style.backgroundImage = slider[i];
		}
		function imgsrb() {
			if (i == 0) {
				i = 20;
			}
			i--;
			i %= slider.length;
			document.body.style.backgroundImage = slider[i];
		}
		next.onclick = function () {
			imgsrc();
		}
		prev.onclick = function () {
			imgsrb();
		};
	};
};
function afternoon() {
	window.onload = function() {
			document.body.style.backgroundImage = imageafternoon[randomNum];
		var i=randomNum;
		let slider = document.body.style.backgroundImage;
			slider = imageafternoon;
			
		function imgsrc() {
			i++;
			i %= slider.length;
			document.body.style.backgroundImage = slider[i];
		}
		function imgsrb() {
			if (i == 0) {
				i = 20;
			}
			i--;
			i %= slider.length;
			document.body.style.backgroundImage = slider[i];
		}

		
		next.onclick = function sayHi () {
			imgsrc(); 
		}
		prev.onclick = function  () {
			imgsrb();
		}
	} 
	
}


function evening () {
	window.onload = function() {
		document.body.style.backgroundImage = imageevening[randomNum];
		var i=randomNum;
		let slider = document.body.style.backgroundImage;
			slider = imageevening;
			
		function imgsrc() {
			i++;
			i %= slider.length;
			document.body.style.backgroundImage = slider[i];
		}
		function imgsrb() {
			if (i == 0) {
				i = 20;
			}
			i--;
			i %= slider.length;
			document.body.style.backgroundImage = slider[i];
		}
		next.onclick = function () {
			imgsrc();
			
		}
		prev.onclick = function () {
			imgsrb();
		};
	};
	
};


function setBg() {
	const hours = getHours();
	
	if (hours  < 12 ) {
		if (hours >= 6) {
			
			moning ();
			
		}else if (hours < 6) {
			nitgh();

		}
	} else if (hours  >= 12,hours < 18) {
		afternoon();
	} else if (hours  >= 18,hours <= 24 ) {
		evening ();
		
	}
	
}
setBg()

async function getWeather() {  
	const url = `https://api.openweathermap.org/data/2.5/weather?q=${city.value}&lang=ru&appid=d838445b636eba15f7316f3b6c36339d&units=metric`;
	const res = await fetch(url);
	const data = await res.json(); 
	weatherIcon.classList.add(`owf-${data.weather[0].id}`);
	temperature.textContent = `${data.main.temp.toFixed(0)}°C`;
	weatherDescription.textContent = data.weather[0].description;
	wind.textContent = `Wind speed: ${data.wind.speed.toFixed(0)} m/c`;
	humidity.textContent = `Humidity: ${data.clouds.all} %`;
}
getWeather()
function setCity(event) {
	if (event.code === 'Enter') {
	getWeather();
	city.blur();
	}
}

document.addEventListener('DOMContentLoaded', getWeather);
city.addEventListener('keypress', setCity);

async function getQuotes() {  
	const quotes = '/js/data.json';
	const res = await fetch(quotes);
	const data = await res.json(); 

	var numPool = [ 0, 1, 2,3,4,5 ],	
	rand = numPool[Math.floor(Math.random() * numPool.length)];
	quoteText.textContent = `${data[rand].text}`;
	authorText.textContent = `${data[rand].author}`;
	
	let i= 0;
	function next() {
		if (i == 5) {
			i = 0;
		}
		i++;
		i %= quoteText.textContent.length;
		quoteText.textContent = `${data[i].text}`;
		i %= authorText.textContent.length;
		authorText.textContent = `${data[i].author}`;
	}
	changeQuote.onclick = function () {
		next()
	}

}
getQuotes();

// naimsong


const playList2 = [
	{      
	title: 'Nico Staf-Brooklyn',
	src: './voice/Nico Staf-Brooklyn and the Bridge.mp3',
	duration: '02:58'
	},  
	{      
	title: 'Chocolate Cookie Jam',
	src: './voice/y2mate.com - An Jone  Chocolate Cookie Jam.mp3',
	duration: '02:50'
	},
	{      
	title: 'Cumbia City',
	src: './voice/y2mate.com - An Jone  Cumbia City.mp3',
	duration: '01:58'
	},  
	{      
	title: 'Night Run Away',
	src: './voice/y2mate.com - An Jone  Night Run Away.mp3',
	duration: '02:50'
	}
]

let songIndex = 0;

//!play
function playAudio() {
	player.classList.add('pause')
	audio.src = playList2[songIndex].src;
	audio.currentTime = 0;
	audio.play();
}
function pauseAudio() {
	player.classList.remove('pause')
	audio.pause();
}


playBtn.onclick = function () {
	const isPlay = player.classList.contains('pause')
	if (isPlay) {
		pauseAudio();
	} else if (isPlay == false) {
		playAudio();
	}
}

// nextsong

function nextSong() {
	if (songIndex > playList2.length-2) {
		songIndex = -1;
	}
	songIndex++
}
function prevtSong() {
	if (songIndex == 0 ) {
		songIndex = 4;
	}
	songIndex--
	
	console.log(songIndex)
}


/* Устанавливаем стартовый индекс слайда по умолчанию: */
let slideIndex = 1;
/* Вызываем функцию, которая реализована ниже: */
showSlides(slideIndex);

/* Увеличиваем индекс на 1 — показываем следующий слайд: */
function nextSlide() {
    showSlides(slideIndex += 1);
}
/* Уменьшаем индекс на 1 — показываем предыдущий слайд: */
function previousSlide() {
    showSlides(slideIndex -= 1);  
}

/* Устанавливаем текущий слайд: */
function currentSlide(n) {
    showSlides(slideIndex = n);
}

/* Функция перелистывания: */
function showSlides(n) {
    /* Обращаемся к элементам с названием класса "item", то есть к картинкам: */
    let slides = document.getElementsByClassName("play-item");
    
    /* Проверяем количество слайдов: */
    if (n > slides.length) {
      slideIndex = 1
    }
    if (n < 1) {
        slideIndex = slides.length
    }
  
    /* Проходим по каждому слайду в цикле for: */
    for (let slide of slides) {
        slide.classList.remove('item-active');
    }
    /* Делаем элемент блочным: */
    slides[slideIndex - 1].classList.add('item-active');    
}

playNextbtn.onclick = function () {
	nextSong();
	nextSlide();
	playAudio();
}

playPrevbtn.onclick = function () {
	prevtSong();
	previousSlide();
	playAudio();
}