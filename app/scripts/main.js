document.addEventListener("DOMContentLoaded", () => {
	const menu_ = document.querySelector('.header');
	const scrollspy = new VanillaScrollspy(menu_);
	scrollspy.init();

	const languages = document.querySelectorAll(".header__lang button");
	const navList = document.querySelectorAll(".nav-list a");
	const h2 = document.querySelectorAll("h2");
	const h3 = document.querySelectorAll("h3");
	const p = document.querySelectorAll("p:not(form p)");
	const inputs = document.querySelectorAll("form input");
	const buttons = document.querySelectorAll("button:not(.lang)");

	let languageTexts = [];

	window.addEventListener('scroll', () => {
		let y = window.pageYOffset;
		const header = document.querySelectorAll(".header");

		if (y > 0) {
			header[0].classList.add('scroll');
		} else {
			header[0].classList.remove('scroll');
		}
	});

	const getData = async function (url) {
        const response = await fetch(url);

        if (!response.ok) {
            throw new Error(
                `Ошибка по адресу ${url}, статус ошибки ${response.status}!`
            );
        }
        return await response.json();
    };

	getData("data/languages.json").then(function (data) {
        languageTexts = data;
    });

	function replaceWords(mass, lang, name) {
		mass.forEach((item, index) => {
			item.textContent = languageTexts[lang][name][index];
		});
	}

	//СМЕНА ЯЗЫКА
	languages[0].addEventListener("click", () => {
		console.log("English");
		replaceWords(navList, 0, "nav");
		replaceWords(h2, 0, "h2");
		replaceWords(h3, 0, "h3");
		replaceWords(p, 0, "p");
		inputs.forEach((item, index) => {
			item.placeholder = languageTexts[0].placeholders[index];
		});
		replaceWords(buttons, 0, "buttons");
	});

	languages[1].addEventListener("click", () => {
		console.log("Русский");
		replaceWords(navList, 1, "nav");
		replaceWords(h2, 1, "h2");
		replaceWords(h3, 1, "h3");
		replaceWords(p, 1, "p");
		inputs.forEach((item, index) => {
			item.placeholder = languageTexts[1].placeholders[index];
		});
		replaceWords(buttons, 1, "buttons");
	});

});