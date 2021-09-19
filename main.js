let main = document.querySelector('.main'),
container = document.querySelector('.container'),
codeColor = document.querySelector('.codeColor'),
changeColorBtn = document.querySelector('.changeColorBtn');

changeColorBtn.addEventListener('click', function(e) {
	let symbols = '0123456789ABCDEF';
	let color = '#';
	for (let i=0; i<6; i++) {
		color += symbols[Math.floor(Math.random() * 16)];
	}
  container.style.borderColor = color;
	changeColorBtn.style.backgroundColor = color;
	codeColor.innerText = color;
})
