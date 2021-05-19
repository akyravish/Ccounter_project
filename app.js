// jshint esversion:6

const counters = document.querySelectorAll('.counter');

counters.forEach((counter) => {
	counter.innerText = '0';

	const update = () => {
		const data = +counter.getAttribute('data-target');
		const c = +counter.innerText;
		const counting = data / 200;

		if (c < data) {
			counter.innerText = `${Math.ceil(c + counting)}`;
			setTimeout(update, 1);
		}
	};

	update();
});
