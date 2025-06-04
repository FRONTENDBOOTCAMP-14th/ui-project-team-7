const tabGroups = document.querySelectorAll('.tab-list');
const dayIdx = new Date().getDay() === 0 ? 6 : new Date().getDay() - 1;

tabGroups[dayIdx].classList.add('active');
const tabContent = document.querySelectorAll('.wrap-tab-contents > .tab-contents')[dayIdx];
tabContent.classList.add('active');

tabGroups.forEach((el, idx) => {
	el.addEventListener('click', () => {
		document.querySelector('li.active').classList.remove('active');
		el.classList.add('active');
		document
			.querySelector('.wrap-tab-contents > .tab-contents.active')
			.classList.remove('active');
		document
			.querySelectorAll('.wrap-tab-contents > .tab-contents')
			[idx].classList.add('active');
	});
});
