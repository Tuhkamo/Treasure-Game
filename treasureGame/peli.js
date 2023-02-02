'use strict';
(function() {

	const tyylit = ['kukka0', 'kukka1', 'aarrekukka0', 'aarrekukka1', 'ruoho2', 'aarreruoho', 'kaivettu3'];
	const taso = [
		[0, 1, 1, 1, 1, 1, 1, 1, 1, 1],
		[0, 0, 0, 0, 2, 3, 3, 3, 0, 0],
		[1, 1, 3, 0, 1, 1, 1, 1, 0, 2],
		[2, 3, 2, 0, 0, 0, 0, 0, 0, 2],
		[1, 1, 3, 0, 1, 1, 1, 1, 0, 2],
		[1, 1, 3, 0, 1, 1, 1, 1, 0, 2],
		[1, 1, 3, 0, 1, 1, 1, 1, 0, 2],
		[1, 1, 3, 0, 1, 1, 1, 1, 0, 2],
		[1, 1, 3, 0, 1, 1, 1, 1, 0, 2],
		[1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
	];

	let elementtitaulukko;
	let pelialue;
	let pisteet;
	let yritykset;
	let pistelkm;
	let yrityslkm;

	document.addEventListener('DOMContentLoaded', alusta);

	function alusta() {
		pelialue = document.getElementById('pelialue');
		pisteet = document.getElementById('pisteet');
		yritykset = document.getElementById('yritykset');
		pistelkm = 0;
		yrityslkm = 40;

		elementtitaulukko = luoTaulukko(taso);
	}


	function luoTaulukko(taso) {
		elementtitaulukko = [];
		for (let rivi = 0; rivi < taso.length; rivi++) {
			let tr = document.createElement('tr');
			let elementtirivi = [];
			for (let sarake = 0; sarake < taso[rivi].length; sarake++) {
				let td = document.createElement('td');
				taso[rivi][sarake] = Math.ceil(Math.random() * 6) - 1;
				td.addEventListener('click', e => paivitaTila(e.target, rivi, sarake));
				td.setAttribute('class', tyylit[taso[rivi][sarake]]);
				elementtirivi.push(td);
				tr.appendChild(td);
			}
			elementtitaulukko.push(elementtirivi);
			pelialue.appendChild(tr);
		}
		return elementtitaulukko;
	}

	function paivitaTila(elementti, rivi, sarake) {
		if (yrityslkm === 0) {
			return;
		} else if (elementti.classList == 'aarre') {
			return;
		} else {
			if ((taso[rivi][sarake] === 2) || (taso[rivi][sarake] === 3) || (taso[rivi][sarake] === 5)) {
				elementti.classList = '';
				elementti.classList.add('aarre');
				pistelkm++;
			} else {
				elementti.classList = '';
				elementti.classList.add('kaivettu3');
			}
			yrityslkm--;
			pisteet.textContent = pistelkm;
			yritykset.textContent = yrityslkm;
		}
	}


})();
