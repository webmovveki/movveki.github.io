//film
var fangry = ["Birdbox","Nightmare Alley","The Neon Demon"];
var fdisgust = ["Il Gladiatore","Les Miserables","Marie Antoinette"];
var ffear = ["It","La Madre","Lights Out"];
var fhappy = ["Attenti a quelle due","Festa col morto","Non è romantico"];
var fneutral = ["10 cose che odio di te","Call me by your name","Lei"];
var fsad = ["Giovani ribelli","Ragazze interrotte","Velvet buzzsaw"];
var fsurprise = ["Avatar","Harry Potter","The Hobbit"];

//cibo
var cangry = ["Dark cookies","Monster Energy","Pumkin spice latte"];
var cdisgust = ["Birra","Club sandwich","Patatine"];
var cfear = ["Bloody Mary","Candy corn","Pumkin Pie"];
var chappy = ["Cioccolata calda","Pancake","Waffle"];
var cneutral = ["Cosmopolitan","Marshmellow",">ucchero filato"];
var csad = ["Cioccolata calda","Pancake","Waffle"];
var csurprise = ["Gelato","Succo","Torta cioccolato"];

//libri
var langry = ["La psichiatra","Mindhunter","Rosemary's baby"];
var ldisgust = ["Guerra e Pace","Notre Dame","Piccole donne"];
var lfear = ["Lovecraft","Poe","Salems lot"];
var lhappy = ["Bridget Jones","I love shopping con mia sorella","I love shopping"];
var lneutral = ["Anna Karenina","Cime tempestose","Orgoglio e pregiudizio"];
var lsad = ["Dorian Gray","Dracula","Frankenstein"];
var lsurprise = ["Alice nel Paese delle meraviglie","Cronache del Mondo emerso","The Witcher"];

//musica
var mangry = ["Derek f","ic3 peak","Jozef Van Wissem"];
var mdisgust = ["Falls of glory","Ivan Torrent","Peter Grundy"];
var mfear = ["Marilyn Manson","Peter Grundy","Rob Zombie"];
var mhappy = ["Caleb Hyles","Ed Sheeran","Michael Bublè"];
var mneutral = ["Ed Sheeran","Michael Bublè","Ultimo"];
var msad = ["ic3 peak","Jozef Van Wissem","Peter Grundy"];
var msurprise = ["Falls of Glory","Ivan Torrent","Sham Stalin"];

//serie tv
var sangry = ["Hannibal","Ratched","You"];
var sdisgust = ["Gli ultimi Zar","I Medici","Versailles"];
var sfear = ["American Horror Story","Hill house","Marianne"];
var shappy = ["Big Bang Theory","Friends","Two broke girls"];
var sneutral = ["Bridgerton","Le fate ignoranti","Nana"];
var ssad = ["13","Squid Game","The end of the fucking world"];
var ssurprise = ["Locke e Key","Penny dreadful","Shadowhunters"];


var film = Math.floor(Math.random() * 3);
var cibo = Math.floor(Math.random() * 3);
var libri = Math.floor(Math.random() * 3);
var musica = Math.floor(Math.random() * 3);
var serietv = Math.floor(Math.random() * 3);

var emozione = sessionStorage.getItem("emozione");
var emozione= emozione[0];
console.log(emozione);


switch(emozione) {
    case 'a':
        document.getElementById("filmTxt").innerHTML= fangry[film];
        document.getElementById("ciboTxt").innerHTML= cangry[cibo];
        document.getElementById("libriTxt").innerHTML= langry[libri];
        document.getElementById("musicaTxt").innerHTML= mangry[musica];
        document.getElementById("serieTxt").innerHTML= sangry[serietv];
    break;

    case 'd' :
        document.getElementById("filmTxt").innerHTML= fdisgust [film];
        document.getElementById("ciboTxt").innerHTML= cdisgust [cibo];
        document.getElementById("libriTxt").innerHTML= ldisgust[libri];
        document.getElementById("musicaTxt").innerHTML= mdisgust[musica];
        document.getElementById("serieTxt").innerHTML= sdisgust[serietv];
    break;

    case 'i' :
        document.getElementById("filmTxt").innerHTML= ffear[film];
        document.getElementById("ciboTxt").innerHTML= cfear[cibo];
        document.getElementById("libriTxt").innerHTML= lfear[libri];
        document.getElementById("musicaTxt").innerHTML= mfear[musica];
        document.getElementById("serieTxt").innerHTML= sfear[serietv];
    break;

    case 'f' :
        document.getElementById("filmTxt").innerHTML= fhappy[film];
        document.getElementById("ciboTxt").innerHTML= chappy[cibo];
        document.getElementById("libriTxt").innerHTML= lhappy[libri];
        document.getElementById("musicaTxt").innerHTML= mhappy[musica];
        document.getElementById("serieTxt").innerHTML= shappy[serietv];
    break;

    case 'n' :
        document.getElementById("filmTxt").innerHTML= fneutral[film];
        document.getElementById("ciboTxt").innerHTML= cneutral[cibo];
        document.getElementById("libriTxt").innerHTML= lneutral[libri];
        document.getElementById("musicaTxt").innerHTML= mneutral[musica];
        document.getElementById("serieTxt").innerHTML= sneutral[serietv];
    break;

    case 't' :
        document.getElementById("filmTxt").innerHTML= fsad[film];
        document.getElementById("ciboTxt").innerHTML= csad[cibo];
        document.getElementById("libriTxt").innerHTML= lsad[libri];
        document.getElementById("musicaTxt").innerHTML= msad[musica];
        document.getElementById("serieTxt").innerHTML= ssad[serietv];
    break;

    case 's' :
        fsurprise[film];
        csurprise[cibo];
        lsurprise[libri];
        msurprise[musica];
        ssurprise[serietv];
        document.getElementById("filmTxt").innerHTML= fsurprise[film];
        document.getElementById("ciboTxt").innerHTML= csurprise[cibo];
        document.getElementById("libriTxt").innerHTML= lsurprise[libri];
        document.getElementById("musicaTxt").innerHTML= msurprise[musica];
        document.getElementById("serieTxt").innerHTML= ssurprise[serietv];
    break;
}