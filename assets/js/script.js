const close = document.querySelector('.btn-close');
		const open = document.querySelector('.btn-open');
		const navLinks = document.querySelector('#navLinks');

		close.addEventListener('click', () => {
			navLinks.style.display = "none";
		})
		open.addEventListener('click', () => {
			navLinks.style.display = "block";
		})