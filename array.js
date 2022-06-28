//film
var fangry = ["Birdbox","Nightmare Alley","The Neon Demon"];
var fdisgust = ["Il Gladiatore","Les Miserables","Marie Antoinette"];
var ffear = ["It","La Madre","Lights Out"];
var fhappy = ["Attenti a quelle due","Festa col morto","Non è romantico"];
var fneutral = ["10 cose che odio di te","Call me by your name","Lei"];
var fsad = ["Giovani ribelli","Ragazze interrotte","Velvet buzzsaw"];
var fsurprise = ["Avatar","Harry Potter","The Hobbit"];

//cibo
var cangry = ["Dark cookies","Monster Energy","Pumpkin spice latte"];
var cdisgust = ["Birra","Club sandwich","Patatine"];
var cfear = ["Bloody Mary","Candy corn","Pumpkin Pie"];
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






/*
var img = document.getElementById("emozioneimg");
        img.src = "Immagini/asseconda.png";
        document.getElementById("emozioneimg").innerHTML=img;
*/

var percorso;

//film
var imgfangry = ["./Immagini/Angry/film/birdbox.png","./Immagini/Angry/film/nightmare alley.png","./Immagini/Angry/film/the neon demon.png"];
var imgfdisgust = ["./Immagini/Disgust/film/il gladiatore.png","./Immagini/Disgust/film/les miserables.png","./Immagini/Disgust/film/marie antoinette.png"];
var imgffear = ["./Immagini/Fear/film/it.png","./Immagini/Fear/film/la madre.png","./Immagini/Fear/film/lights out.png"];
var imgfhappy = ["./Immagini/Happy/film/attenti a quelle due.png","./Immagini/Happy/film/festa col morto.png","./Immagini/Happy/film/non è romantico.png"];
var imgfneutral = ["./Immagini/Neutral/film/10 cose che odio di te.png","./Immagini/Neutral/film/call me by your name.png","./Immagini/Neutral/film/lei.png"];
var imgfsad = ["./Immagini/Sad/film/giovani ribelli.png","./Immagini/Sad/film/ragazze interrotte.png","./Immagini/Sad/film/velvet buzzsaw.png"];
var imgfsurprise = ["./Immagini/Surprise/film/avatar.png","./Immagini/Surprise/film/harry potter.png","./Immagini/Surprise/film/the hobbit.png"];
      
//cibo
var imgcangry = ["./Immagini/Angry/cibo/dark cookies.png","./Immagini/Angry/cibo/monster energy.png","./Immagini/Angry/cibo/pumpkin spice latte.png"];
var imgcdisgust = ["./Immagini/Disgust/cibo/birra.png","./Immagini/Disgust/cibo/club sandwich.png","./Immagini/Disgust/cibo/patatine.png"];
var imgcfear = ["./Immagini/Fear/cibo/bloody mary.png","./Immagini/Fear/cibo/candy corn.png","./Immagini/Fear/cibo/pumpkin pie.png"];
var imgchappy = ["./Immagini/Happy/cibo/cioccolata calda.png","./Immagini/Fear/cibo/pancake.png","./Immagini/Fear/cibo/waffle.png"];
var imgcneutral = ["./Immagini/Neutral/cibo/cosmopolitan.png","./Immagini/Neutral/cibo/marshmellow.png","./Immagini/Neutral/cibo/zucchero filato.png"];
var imgcsad = ["./Immagini/Sad/cibo/cioccolata calda.png","./Immagini/Sad/cibo/pancake.png","./Immagini/Sad/cibo/waffle.png"];
var imgcsurprise = ["./Immagini/Surprise/cibo/gelato.png","./Immagini/Surprise/cibo/succo.png","./Immagini/Surprise/cibo/torta cioccolato.png"];

//libri
var imglangry = ["./Immagini/Angry/libri/la psichiatra.png","./Immagini/Angry/libri/mindhunter.png","./Immagini/Angry/libri/rosemarys baby.png"];
var imgldisgust = ["./Immagini/Disgust/libri/guerra e pace.png","./Immagini/Disgust/libri/notre dame.png","./Immagini/Disgust/libri/piccole donne.png"];
var imglfear = ["./Immagini/Fear/libri/lovecraft.png","./Immagini/Fear/libri/poe.png","./Immagini/Fear/libri/salems lot.png"];
var imglhappy = ["./Immagini/Happy/libri/bridget jones.png","./Immagini/Happy/libri/i love shopping con mia sorella.png","./Immagini/Happy/libri/i love shopping.png"];
var imglneutral = ["./Immagini/Neutral/libri/anna karenina.png","./Immagini/Neutral/libri/cime tempestose.png","./Immagini/Neutral/libri/orgoglio e pregiudizio.png"];
var imglsad = ["./Immagini/Sad/libri/dorian gray.png","./Immagini/Sad/libri/dracula.png","./Immagini/Sad/libri/frankenstein.png"];
var imglsurprise = ["./Immagini/Surprise/libri/alice nel paese delle meraviglie.png","./Immagini/Surprise/libri/cronache del mondo emerso.png","./Immagini/Surprise/libri/the witcher.png"];

//musica
var imgmangry = ["./Immagini/Angry/musica/derek f.png","./Immagini/Angry/musica/ic3 peak.png","./Immagini/Angry/musica/jozef van wissem.png"];
var imgmdisgust = ["./Immagini/Disgust/musica/falls of glory.png","./Immagini/Disgust/musica/ivan torrent.png","./Immagini/Disgust/musica/peter grundy.png"];
var imgmfear = ["./Immagini/Fear/musica/marilyn manson.png","./Immagini/Fear/musica/peter grundy.png","./Immagini/Fear/musica/rob zombie.png"];
var imgmhappy = ["./Immagini/Happy/musica/caleb hyles.png","./Immagini/Happy/musica/ed sheeran.png","./Immagini/Happy/musica/michael bublè.png"];
var imgmneutral = ["./Immagini/Neutral/musica/ed sheeran.png","./Immagini/Neutral/musica/michael bublè.png","./Immagini/Neutral/musica/ultimo.png"];
var imgmsad = ["./Immagini/Sad/musica/ic3 peak.png","./Immagini/Neutral/musica/jozef van wissem.png","./Immagini/Neutral/musica/peter grundy.png"];
var imgmsurprise = ["./Immagini/Surprise/musica/falls of glory.png","./Immagini/Surprise/musica/ivan torrent.png","./Immagini/Surprise/musica/sham stalin.png"];

//serie tv
var imgsangry = ["./Immagini/Angry/serie/hannibal.png","./Immagini/Angry/serie/ratched.png","./Immagini/Angry/serie/you.png"];
var imgsdisgust = ["./Immagini/Disgust/serie/gli ultimi zar.png","./Immagini/Disgust/serie/i medici.png","./Immagini/Disgust/serie/versailles.png"];
var imgsfear = ["./Immagini/Fear/serie/ahs.png","./Immagini/Fear/serie/hill house.png","./Immagini/Fear/serie/marianne.png"];
var imgshappy = ["./Immagini/Happy/serie/big bang theory.png","./Immagini/Happy/serie/friends.png","./Immagini/Happy/serie/two broke girls.png"];
var imgsneutral = ["./Immagini/Neutral/serie/bridgerton.png","./Immagini/Neutral/serie/le fate ignoranti.png","./Immagini/Neutral/serie/nana.png"];
var imgssad = ["./Immagini/Sad/serie/13.png","./Immagini/Sad/serie/squid game.png","./Immagini/Sad/serie/the end of the fucking world.png"];
var imgssurprise = ["./Immagini/Surprise/serie/locke e key.png","./Immagini/Surprise/serie/penny dreadful.png","./Immagini/Surprise/serie/shadowhunters.png"];





var film = Math.floor(Math.random() * 3);
var cibo = Math.floor(Math.random() * 3);
var libri = Math.floor(Math.random() * 3);
var musica = Math.floor(Math.random() * 3);
var serietv = Math.floor(Math.random() * 3);

var emozione = sessionStorage.getItem("emozione");
var emozione= emozione[0];
console.log(emozione);




switch () {
    case 'a':
        var img = document.getElementById("film");
        img.src = imgffear[film];
        document.getElementById("film").innerHTML=img;
    break;

    case 'd':
        var img = document.getElementById("film");
        img.src = imgffear[film];
        document.getElementById("film").innerHTML=img;
    break;

    case 'i':
        var img = document.getElementById("film");
        img.src = imgffear[film];
        document.getElementById("film").innerHTML=img;
    break;

    case 'f':
        var img = document.getElementById("film");
        img.src = imgffear[film];
        document.getElementById("film").innerHTML=img;
    break;

    case 'n':
        var img = document.getElementById("film");
        img.src = imgffear[film];
        document.getElementById("film").innerHTML=img;
    break;

    case 't':
        var img = document.getElementById("film");
        img.src = imgffear[film];
        document.getElementById("film").innerHTML=img;
    break;

    case 's':
        var img = document.getElementById("film");
        img.src = imgffear[film];
        document.getElementById("film").innerHTML=img;
    break;

}

var img = document.getElementById("film");
img.src = imgffear[film];
document.getElementById("film").innerHTML=img;

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
        document.getElementById("filmTxt").innerHTML= fsurprise[film];
        document.getElementById("ciboTxt").innerHTML= csurprise[cibo];
        document.getElementById("libriTxt").innerHTML= lsurprise[libri];
        document.getElementById("musicaTxt").innerHTML= msurprise[musica];
        document.getElementById("serieTxt").innerHTML= ssurprise[serietv];
    break;
}

