let githubLogo = document.querySelector('.projects .section_item img');
let contactsImages = document.querySelectorAll('.contacts .section_item img');
let headerBtn = document.querySelector('.header_btn');

githubLogo.addEventListener('click', () => location.assign('https://github.com/druzdaniil?tab=repositories'));
contactsImages[0].addEventListener('click', () => location.assign('https://www.instagram.com/dare.editor/'));
contactsImages[1].addEventListener('click', () => location.assign('https://t.me/DanyaDruz'));
contactsImages[2].addEventListener('click', () => location.assign('mailto:danyadruz2006@gmail.com'));

headerBtn.addEventListener('click', () => {
	window.scrollTo({
		top: window.innerHeight,
		behavior: "smooth"
	})
});