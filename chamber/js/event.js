const now = new Date();

const day = now.getDay();

	if (day = 1 || 2) {
		document.querySelector('#eventbanner').style.display = 'block';
	} 
	else {
		document.querySelector('#eventbanner').style.display = 'none';;
	}