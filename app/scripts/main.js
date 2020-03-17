document.addEventListener("DOMContentLoaded", () => {
	const menu_ = document.querySelector('.nav-list');
	const scrollspy = new VanillaScrollspy(menu_);
	scrollspy.init();

	window.addEventListener('scroll', () => {
		let y = window.pageYOffset;
		const header = document.querySelectorAll(".header");

		if (y > 0) {
			header[0].classList.add('scroll');
		} else {
			header[0].classList.remove('scroll');
		}
	});
});