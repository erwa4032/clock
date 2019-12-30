function h12() {
	var today = new Date();
	if (today.getHours() > 12) {
		return today.getHours() - 12;
	} else {
		return today.getHours();
	}
}

function myFunction() {
	var today = new Date();
	if (today.getHours() > 12) {
		return 'pm';
	} else {
		return 'am';
	}
}

function startTime() {
	var today = new Date();
	var y = today.getYear() + 1900; //every time after year, add 1900
	var mo = today.getMonth() + 1; //they always starts from 0 insted of JAN. so u needs to + 1
	var d = today.getDate();
	var h = today.getHours();
	var m = today.getMinutes();
	var s = today.getSeconds();
	var p_a = myFunction();
	y = checkTime(y);
	mo = checkTime(mo);
	d = checkTime(d);
	h = h12();
	h = checkTime(h);
	m = checkTime(m);
	s = checkTime(s);
	document.getElementById('number').innerHTML =
		y +
		'&nbsp-&nbsp' +
		mo +
		'&nbsp-&nbsp' +
		d +
		'&nbsp-&nbsp' +
		h +
		'&nbsp:&nbsp' +
		m +
		'&nbsp:&nbsp' +
		s +
		'&nbsp&nbsp' +
		p_a;
	var t = setTimeout(startTime, 500);
}
function checkTime(ch) {
	if (ch < 10) {
		ch = '0' + ch;
	}
	return ch;
}
