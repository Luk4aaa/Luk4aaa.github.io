var slike= new Array();
slike[0]= "https://media.vandal.net/i/1200x630/4-2020/202042710591457_1.jpg";
slike[1]= "https://www.pcgamesn.com/wp-content/uploads/2020/05/valorant-next-agent-reyna-sabine.jpeg";
slike[2]= "https://i.ytimg.com/vi/PDaw5L-oIg8/maxresdefault.jpg";
slike[3]= "https://d1fs8ljxwyzba6.cloudfront.net/assets/editorial/2020/07/valorant-fan-art-corner-jett-excharny.jpg";
slike[4]= "https://images.wallpapersden.com/image/download/valorant-viper-art_bGhoZWmUmZqaraWkpJRmaWVlrW5lZQ.jpg";

var trenutnaSlika = 0;
var ukupnoSlika = slike.length;

function naredna() {
	trenutnaSlika++;
	if (trenutnaSlika == ukupnoSlika) {
		
		trenutnaSlika=0;
	}
	document.getElementById("slika1").src= slike[trenutnaSlika];
}

function prethodna() {
	trenutnaSlika--;
	if (trenutnaSlika == -1) {
		
		trenutnaSlika = ukupnoSlika - 1;
	}
	document.getElementById("slika1").src= slike[trenutnaSlika];
}

var uKrug;

function pokreni() {
	uKrug=setInterval(naredna,3000);
	document.getElementById("prethodna").disabled = true;
		document.getElementById("naredna").disabled = true;
			document.getElementById("pokreni").disabled = true;
			
}

function zaustavi() {
	clearInterval(uKrug);
	document.getElementById("prethodna").disabled = false;
		document.getElementById("naredna").disabled = false;
			document.getElementById("pokreni").disabled = false;
}

