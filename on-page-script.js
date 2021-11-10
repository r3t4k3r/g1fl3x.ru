var onPageScript = () => {
    let links = ["https://webm.red/RIKM.webm","https://webm.red/JCZI.webm","https://webm.red/s1D9.webm","https://webm.red/csnJ.webm","https://webm.red/dTiN.webm","https://webm.red/KIm4.webm","https://webm.red/6KXH.webm", "https://webm.red/dJLN.webm", "https://webm.red/Af9M.webm", "https://webm.red/jgax.webm", "https://webm.red/NbI7.webm"];
    let video = document.querySelector('source');
    video.src = links[Math.floor(Math.random() * links.length)];
    document.querySelector('video').load();
	document
		.querySelector('button')
		.addEventListener('click', function () {
			document.querySelector('video').play();
			this.parentElement.parentElement.remove();
		});
};

onPageScript();
