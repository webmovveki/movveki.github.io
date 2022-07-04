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
var cneutral = ["Cosmopolitan","Marshmellow","Zucchero filato"];
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
var imgchappy = ["./Immagini/Happy/cibo/cioccolata calda.png","./Immagini/Happy/cibo/pancake.png","./Immagini/Happy/cibo/waffle.png"];
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
var imgmdisgust = ["./Immagini/Disgust/musica/falls of glory.png","./Immagini/Disgust/musica/Ivan Torrent.png","./Immagini/Disgust/musica/peter grundy.png"];
var imgmfear = ["./Immagini/Fear/musica/marilyn manson.png","./Immagini/Fear/musica/peter grundy.png","./Immagini/Fear/musica/rob zombie.png"];
var imgmhappy = ["./Immagini/Happy/musica/caleb hyles.png","./Immagini/Happy/musica/ed sheeran.png","./Immagini/Happy/musica/michael bublè.png"];
var imgmneutral = ["./Immagini/Neutral/musica/ed sheeran.png","./Immagini/Neutral/musica/michael bublè.png","./Immagini/Neutral/musica/ultimo.png"];
var imgmsad = ["./Immagini/Sad/musica/ic3 peak.png","./Immagini/Sad/musica/jozef van wissem.png","./Immagini/Sad/musica/peter grundy.png"];
var imgmsurprise = ["./Immagini/Surprise/musica/falls of glory.png","./Immagini/Surprise/musica/ivan torrent.png","./Immagini/Surprise/musica/sham stalin.png"];

//serie tv
var imgsangry = ["./Immagini/Angry/serie tv/hannibal.png","./Immagini/Angry/serie tv/ratched.png","./Immagini/Angry/serie tv/you.png"];
var imgsdisgust = ["./Immagini/Disgust/serie/gli ultimi zar.png","./Immagini/Disgust/serie/i medici.png","./Immagini/Disgust/serie/versailles.png"];
var imgsfear = ["./Immagini/Fear/serie tv/ahs.png","./Immagini/Fear/serie tv/hill house.png","./Immagini/Fear/serie tv/marianne.png"];
var imgshappy = ["./Immagini/Happy/serie/big bang theory.png","./Immagini/Happy/serie/friends.png","./Immagini/Happy/serie/two broke girls.png"];
var imgsneutral = ["./Immagini/Neutral/serie/bridgerton.png","./Immagini/Neutral/serie/le fate ignoranti.png","./Immagini/Neutral/serie/nana.png"];
var imgssad = ["./Immagini/Sad/serie tv/13.png","./Immagini/Sad/serie tv/squid game.png","./Immagini/Sad/serie tv/the end of the fucking world.png"];
var imgssurprise = ["./Immagini/Surprise/serie tv/locke e key.png","./Immagini/Surprise/serie tv/penny dreadful.png","./Immagini/Surprise/serie tv/shadowhunters.png"];





var film = Math.floor(Math.random() * 3);
var cibo = Math.floor(Math.random() * 3);
var libri = Math.floor(Math.random() * 3);
var musica = Math.floor(Math.random() * 3);
var serie = Math.floor(Math.random() * 3);

var emozione = sessionStorage.getItem("emozione");
var emozione= emozione[0];
console.log(emozione);


switch(emozione) {
    case 'a' :
        document.getElementById("filmTxt").innerHTML= fangry[film];
        document.getElementById("ciboTxt").innerHTML= cangry[cibo];
        document.getElementById("libriTxt").innerHTML= langry[libri];
        document.getElementById("musicaTxt").innerHTML= mangry[musica];
        document.getElementById("serieTxt").innerHTML= sangry[serie];

        var img = document.getElementById("film");
        img.src = imgfangry[film];
        document.getElementById("film").innerHTML=img;

        var img = document.getElementById("cibo");
        img.src = imgcangry[cibo];
        document.getElementById("cibo").innerHTML=img;
        
        var img = document.getElementById("libri");
        img.src = imglangry[libri];
        document.getElementById("libri").innerHTML=img;

        var img = document.getElementById("musica");
        img.src = imgmangry[musica];
        document.getElementById("musica").innerHTML=img;

        var img = document.getElementById("serie");
        img.src = imgsangry[serie];
        document.getElementById("serie").innerHTML=img;
        
    break;

    case 'd' :
        document.getElementById("filmTxt").innerHTML= fdisgust [film];
        document.getElementById("ciboTxt").innerHTML= cdisgust [cibo];
        document.getElementById("libriTxt").innerHTML= ldisgust[libri];
        document.getElementById("musicaTxt").innerHTML= mdisgust[musica];
        document.getElementById("serieTxt").innerHTML= sdisgust[serie];

        var img = document.getElementById("film");
        img.src = imgfdisgust[film];
        document.getElementById("film").innerHTML=img;

        var img = document.getElementById("cibo");
        img.src = imgcdisgust[cibo];
        document.getElementById("cibo").innerHTML=img;
        
        var img = document.getElementById("libri");
        img.src = imgldisgust[libri];
        document.getElementById("libri").innerHTML=img;

        var img = document.getElementById("musica");
        img.src = imgmdisgust[musica];
        document.getElementById("musica").innerHTML=img;

        var img = document.getElementById("serie");
        img.src = imgsdisgust[serie];
        document.getElementById("serie").innerHTML=img;
    break;

    case 'i' :
        document.getElementById("filmTxt").innerHTML= ffear[film];
        document.getElementById("ciboTxt").innerHTML= cfear[cibo];
        document.getElementById("libriTxt").innerHTML= lfear[libri];
        document.getElementById("musicaTxt").innerHTML= mfear[musica];
        document.getElementById("serieTxt").innerHTML= sfear[serie];

        var img = document.getElementById("film");
        img.src = imgffear[film];
        document.getElementById("film").innerHTML=img;

        var img = document.getElementById("cibo");
        img.src = imgcfear[cibo];
        document.getElementById("cibo").innerHTML=img;
        
        var img = document.getElementById("libri");
        img.src = imglfear[libri];
        document.getElementById("libri").innerHTML=img;

        var img = document.getElementById("musica");
        img.src = imgmfear[musica];
        document.getElementById("musica").innerHTML=img;

        var img = document.getElementById("serie");
        img.src = imgsfear[serie];
        document.getElementById("serie").innerHTML=img;
    break;

    case 'f' :
        document.getElementById("filmTxt").innerHTML= fhappy[film];
        document.getElementById("ciboTxt").innerHTML= chappy[cibo];
        document.getElementById("libriTxt").innerHTML= lhappy[libri];
        document.getElementById("musicaTxt").innerHTML= mhappy[musica];
        document.getElementById("serieTxt").innerHTML= shappy[serie];

        var img = document.getElementById("film");
        img.src = imgfhappy[film];
        document.getElementById("film").innerHTML=img;

        var img = document.getElementById("cibo");
        img.src = imgchappy[cibo];
        document.getElementById("cibo").innerHTML=img;
        
        var img = document.getElementById("libri");
        img.src = imglhappy[libri];
        document.getElementById("libri").innerHTML=img;

        var img = document.getElementById("musica");
        img.src = imgmhappy[musica];
        document.getElementById("musica").innerHTML=img;

        var img = document.getElementById("serie");
        img.src = imgshappy[serie];
        document.getElementById("serie").innerHTML=img;
    break;

    case 'n' :
        document.getElementById("filmTxt").innerHTML= fneutral[film];
        document.getElementById("ciboTxt").innerHTML= cneutral[cibo];
        document.getElementById("libriTxt").innerHTML= lneutral[libri];
        document.getElementById("musicaTxt").innerHTML= mneutral[musica];
        document.getElementById("serieTxt").innerHTML= sneutral[serie];

        var img = document.getElementById("film");
        img.src = imgfneutral[film];
        document.getElementById("film").innerHTML=img;

        var img = document.getElementById("cibo");
        img.src = imgcneutral[cibo];
        document.getElementById("cibo").innerHTML=img;
        
        var img = document.getElementById("libri");
        img.src = imglneutral[libri];
        document.getElementById("libri").innerHTML=img;

        var img = document.getElementById("musica");
        img.src = imgmneutral[musica];
        document.getElementById("musica").innerHTML=img;

        var img = document.getElementById("serie");
        img.src = imgsneutral[serie];
        document.getElementById("serie").innerHTML=img;
    break;

    case 't' :
        document.getElementById("filmTxt").innerHTML= fsad[film];
        document.getElementById("ciboTxt").innerHTML= csad[cibo];
        document.getElementById("libriTxt").innerHTML= lsad[libri];
        document.getElementById("musicaTxt").innerHTML= msad[musica];
        document.getElementById("serieTxt").innerHTML= ssad[serie];

        var img = document.getElementById("film");
        img.src = imgfsad[film];
        document.getElementById("film").innerHTML=img;

        var img = document.getElementById("cibo");
        img.src = imgcsad[cibo];
        document.getElementById("cibo").innerHTML=img;
        
        var img = document.getElementById("libri");
        img.src = imglsad[libri];
        document.getElementById("libri").innerHTML=img;

        var img = document.getElementById("musica");
        img.src = imgmsad[musica];
        document.getElementById("musica").innerHTML=img;

        var img = document.getElementById("serie");
        img.src = imgssad[serie];
        document.getElementById("serie").innerHTML=img;

    break;

    case 's' :
        document.getElementById("filmTxt").innerHTML= fsurprise[film];
        document.getElementById("ciboTxt").innerHTML= csurprise[cibo];
        document.getElementById("libriTxt").innerHTML= lsurprise[libri];
        document.getElementById("musicaTxt").innerHTML= msurprise[musica];
        document.getElementById("serieTxt").innerHTML= ssurprise[serie];

        var img = document.getElementById("film");
        img.src = imgfsurprise[film];
        document.getElementById("film").innerHTML=img;

        var img = document.getElementById("cibo");
        img.src = imgcsurprise[cibo];
        document.getElementById("cibo").innerHTML=img;
        
        var img = document.getElementById("libri");
        img.src = imglsurprise[libri];
        document.getElementById("libri").innerHTML=img;

        var img = document.getElementById("musica");
        img.src = imgmsurprise[musica];
        document.getElementById("musica").innerHTML=img;

        var img = document.getElementById("serie");
        img.src = imgssurprise[serie];
        document.getElementById("serie").innerHTML=img;
    break;
}

function filmredirect ()
{
    //Film Angry//
    if(document.getElementById ("filmTxt").innerText== "Birdbox"){
        location.replace("https://www.netflix.com/it/title/80196789?source=35");
    }

    if(document.getElementById ("filmTxt").innerText== "Nightmare Alley"){
        location.replace("https://www.disneyplus.com/it-it/movies/la-fiera-delle-illusioni-nightmare-alley/4W2fyAIKkAwE");
    }

    if(document.getElementById ("filmTxt").innerText== "The Neon Demon"){
        location.replace("https://tv.apple.com/it/movie/the-neon-demon/umc.cmc.34y94wuttq9lyfdlgz6xgzq4q");
    }

    //Film Disgust//
    if(document.getElementById ("filmTxt").innerText== "Il Gladiatore"){
        location.replace("https://www.netflix.com/it/title/60000929?source=35");
    }

    if(document.getElementById ("filmTxt").innerText== "Les Miserables"){
        location.replace("https://www.primevideo.com/region/eu/detail/0GM6XXIOGZB5RCGS3YWU4VNCR8/ref=atv_sr_fle_c_Tn74RA_1_1_1?sr=1-1&pageTypeIdSource=ASIN&pageTypeId=B01M9IFPVI&qid=1656429782");
    }

    if(document.getElementById ("filmTxt").innerText== "Marie Antoinette"){
        location.replace("https://www.netflix.com/watch/70044601?source=35");
    }

    //Film Fear//
    if(document.getElementById ("filmTxt").innerText== "It"){
        location.replace("https://www.netflix.com/watch/80177770?source=35");
    }

    if(document.getElementById ("filmTxt").innerText== "La Madre"){
        location.replace("https://tv.apple.com/it/movie/la-madre/umc.cmc.6yjyyvwv339eqnsgigz40g63j");
    }

    if(document.getElementById ("filmTxt").innerText== "Lights Out"){
        location.replace("https://www.primevideo.com/dp/amzn1.dv.gti.5cb92682-901b-3fa1-dd7a-6278d8a9fe9f?autoplay=0&ref_=atv_cf_strg_wb");
    }

    //Film Happy//
    if(document.getElementById ("filmTxt").innerText== "Festa col morto"){
        location.replace("https://www.primevideo.com/region/eu/detail/0IV9FX6E1IGWQXPVZDBVS45TCT/ref=atv_sr_fle_c_Tn74RA_1_1_1?sr=1-1&pageTypeIdSource=ASIN&pageTypeId=B07TFNK8RB&qid=1656429858");
    }

    if(document.getElementById ("filmTxt").innerText== "Attenti a quelle due"){
        location.replace("https://www.netflix.com/search?q=festa%20col%20morto&jbv=81209142");
    }

    if(document.getElementById ("filmTxt").innerText== "Non è romantico"){
        location.replace("https://www.netflix.com/search?q=non%20%C3%A8%20romantico&jbv=80200642");
    }

    //Film Neutral//
    if(document.getElementById ("filmTxt").innerText== "10 cose che odio di te"){
        location.replace("https://www.disneyplus.com/it-it/movies/10-cose-che-odio-di-te/10OzquDiTIJB");
    }

    if(document.getElementById ("filmTxt").innerText== "Call me by your name"){
        location.replace("https://www.netflix.com/watch/80169498?source=35");
    }

    if(document.getElementById ("filmTxt").innerText== "Lei"){
        location.replace("https://www.netflix.com/title/70278933");
    }

    //Film Sad//
    if(document.getElementById ("filmTxt").innerText== "Giovani ribelli"){
        location.replace("https://tv.apple.com/it/movie/giovani-ribelli-kill-your-darlings/umc.cmc.1bv32ulampp07s7i3p3h4faga?action=play");
    }

    if(document.getElementById ("filmTxt").innerText== "Ragazze interrotte"){
        location.replace("https://www.netflix.com/title/60000428");
    }

    if(document.getElementById ("filmTxt").innerText== "Velvet buzzsaw"){
        location.replace("https://www.netflix.com/title/80199689");
    }

    //Film Surprise//
     if(document.getElementById ("filmTxt").innerText== "Avatar"){
        location.replace("https://www.disneyplus.com/it-it/movies/avatar/2YOnkRN4LwZZ");
    }

    if(document.getElementById ("filmTxt").innerText== "Harry Potter"){
        location.replace("https://www.primevideo.com/dp/amzn1.dv.gti.50b4e520-051d-31a7-c3a2-d79e0b270adb?autoplay=0&ref_=atv_cf_strg_wb");
    }

    if(document.getElementById ("filmTxt").innerText== "The Hobbit"){
        location.replace("https://www.netflix.com/watch/70226288?source=35");
    }
}

    
function serieredirect ()
{
    //Serie Angry//
    if(document.getElementById ("filmTxt").innerText== "Hannibal"){
        location.replace("https://www.primevideo.com/dp/amzn1.dv.gti.226f86db-cdf0-42af-9e72-934fc98fc2a0?autoplay=0&ref_=atv_cf_strg_wb");
    }

    if(document.getElementById ("filmTxt").innerText== "Ratched"){
        location.replace("https://www.netflix.com/watch/80213445?source=35");
    }

    if(document.getElementById ("filmTxt").innerText== "You"){
        location.replace("https://www.netflix.com/title/80211991");
    }

    //Serie Disgust//
    if(document.getElementById ("filmTxt").innerText== "Gli ultimi Zar"){
        location.replace("https://www.netflix.com/title/80211648");
    }

    if(document.getElementById ("filmTxt").innerText== "I Medici"){
        location.replace("https://www.primevideo.com/dp/amzn1.dv.gti.30b75b73-0ebb-14eb-9cfa-8cb5ba30c45c?autoplay=0&ref_=atv_cf_strg_wbs");
    }

    if(document.getElementById ("filmTxt").innerText== "Versailles"){
        location.replace("https://www.netflix.com/title/80099753");
    }

    //Serie Fear//
    if(document.getElementById ("filmTxt").innerText== "American Horror Story"){
        location.replace("https://www.disneyplus.com/it-it/series/american-horror-story/4yFvVceupA9J");
    }

    if(document.getElementById ("filmTxt").innerText== "Hill House"){
        location.replace("https://www.netflix.com/title/80189221");
    }

    if(document.getElementById ("filmTxt").innerText== "Marianne"){
        location.replace("https://www.netflix.com/title/80217779");
    }

    //Serie Happy//
    if(document.getElementById ("filmTxt").innerText== "Big Bang Theory"){
        location.replace("https://www.netflix.com/title/70143830");
    }

    if(document.getElementById ("filmTxt").innerText== "Friends"){
        location.replace("https://www.netflix.com/title/70153404");
    }

    if(document.getElementById ("filmTxt").innerText== "Two broke girls"){
        location.replace("https://www.primevideo.com/detail/0RICM4CPJ1SWXDS986RR14GK6K/ref=atv_dp_season_select_s1?language=it_IT");
    }

    //Serie Neutral//
    if(document.getElementById ("filmTxt").innerText== "Bridgerton"){
        location.replace("https://www.netflix.com/watch/80232398?source=35");
    }

    if(document.getElementById ("filmTxt").innerText== "Le fate ignoranti"){
        location.replace("https://www.disneyplus.com/it-it/series/le-fate-ignoranti/6GEpSRhsYnYv");
    }

    if(document.getElementById ("filmTxt").innerText== "Nana"){
        location.replace("https://www.netflix.com/title/70205010");
    }

    //Serie Sad//
    if(document.getElementById ("filmTxt").innerText== "13"){
        location.replace("https://www.netflix.com/title/801174705");
    }

    if(document.getElementById ("filmTxt").innerText== "Squid Game"){
        location.replace("https://www.netflix.com/title/81040344");
    }

    if(document.getElementById ("filmTxt").innerText== "The end of the fucking world"){
        location.replace("https://www.netflix.com/search?q=the%20end%20of%20the%20fucking&jbv=80175722");
    }

    //Serie Surprise//
    if(document.getElementById ("filmTxt").innerText== "Locke e Key"){
        location.replace("https://www.netflix.com/title/80241239");
    }

    if(document.getElementById ("filmTxt").innerText== "Penny dreadful"){
        location.replace("https://www.nowtv.it/watch/home/asset/penny-dreadful/skyatlantic_fb6e7903d70141abb860f20606f38579");
    }

    if(document.getElementById ("filmTxt").innerText== "Shadowhunters"){
        location.replace("https://www.netflix.com/title/80084447");
    }
}


function musicaredirect ()
{
    //Musica Angry//
    if(document.getElementById ("filmTxt").innerText== "Derek f"){
        location.replace("https://open.spotify.com/artist/1XPa3yIPMAIYeE8AXvXgtH");
    }

    if(document.getElementById ("filmTxt").innerText== "ic3 peak"){
        location.replace("https://open.spotify.com/artist/3luonLzvSOxdU8ytCaEIK8");
    }

    if(document.getElementById ("filmTxt").innerText== "Jozef van Wissem"){
        location.replace("https://open.spotify.com/artist/1mC0FqPLboQUFfxYuthfdn");
    }

    //Musica Disgust//
    if(document.getElementById ("filmTxt").innerText== "Falls of glory"){
        location.replace("https://open.spotify.com/artist/2uoaGj3psjlDwIQBpAeXNI");
    }

    if(document.getElementById ("filmTxt").innerText== "Ivan Torrent"){
        location.replace("https://open.spotify.com/artist/3C6hf9ZIza3e2f2Q3XwfcO");
    }

    if(document.getElementById ("filmTxt").innerText== "Peter Grundy"){
        location.replace("https://open.spotify.com/playlist/1aIWTDJ3eudkhtYQouBVJ9");
    }

    //Musica Fear//
    if(document.getElementById ("filmTxt").innerText== "Marilyn Manson"){
        location.replace("https://open.spotify.com/artist/2VYQTNDsvvKN9wmU5W7xpj");
    }

    if(document.getElementById ("filmTxt").innerText== "Peter Grundy"){
        location.replace("https://open.spotify.com/playlist/1aIWTDJ3eudkhtYQouBVJ9");
    }

    if(document.getElementById ("filmTxt").innerText== "Rob Zombie"){
        location.replace("https://open.spotify.com/artist/3HVdAiMNjYrQIKlOGxoGh5");
    }

    //Musica Happy//
    if(document.getElementById ("filmTxt").innerText== "Caleb Hyles"){
        location.replace("https://open.spotify.com/artist/6jDwZUFYUH1dC4xWzOd8QU");
    }

    if(document.getElementById ("filmTxt").innerText== "Ed Sheeran"){
        location.replace("https://open.spotify.com/artist/6eUKZXaKkcviH0Ku9w2n3V");
    }

    if(document.getElementById ("filmTxt").innerText== "Michael Bublè"){
        location.replace("https://open.spotify.com/album/2A9zV4HP5lrNP9b2PdpaG2");
    }

    //Musica Neutral//
    if(document.getElementById ("filmTxt").innerText== "Ultimo"){
        location.replace("https://open.spotify.com/artist/3hN3iJMbbBmqBSAMx5veDa");
    }

    if(document.getElementById ("filmTxt").innerText== "Ed Sheeran"){
        location.replace("https://open.spotify.com/artist/6eUKZXaKkcviH0Ku9w2n3V");
    }

    if(document.getElementById ("filmTxt").innerText== "Michael Bublè"){
        location.replace("https://open.spotify.com/album/2A9zV4HP5lrNP9b2PdpaG2");
    }

    //Musica Sad//
    if(document.getElementById ("filmTxt").innerText== "ic3 peak"){
        location.replace("https://open.spotify.com/artist/3luonLzvSOxdU8ytCaEIK8");
    }

    if(document.getElementById ("filmTxt").innerText== "Jozef van Wissem"){
        location.replace("https://open.spotify.com/artist/1mC0FqPLboQUFfxYuthfdn");
    }

    if(document.getElementById ("filmTxt").innerText== "Peter Grundy"){
        location.replace("https://open.spotify.com/playlist/1aIWTDJ3eudkhtYQouBVJ9");
    }

    //Musica Surprise//
    if(document.getElementById ("filmTxt").innerText== "Falls of glory"){
        location.replace("https://open.spotify.com/artist/2uoaGj3psjlDwIQBpAeXNI");
    }

    if(document.getElementById ("filmTxt").innerText== "Ivan Torrent"){
        location.replace("https://open.spotify.com/artist/3C6hf9ZIza3e2f2Q3XwfcO");
    }

    if(document.getElementById ("filmTxt").innerText== "Sham Stalin"){
        location.replace("https://open.spotify.com/artist/5eMSbMxRj2iFooDP4b6XEC");
    }
}


function libriredirect ()
{
    //Libri Angry//
    if(document.getElementById ("libriTxt").innerText== "La psichiatra"){
        location.replace("https://www.lafeltrinelli.it/psichiatra-libro-wulf-dorn/e/9788850226719?queryId=2dee048595c2f59b7680d188c458941c");
    }

    if(document.getElementById ("libriTxt").innerText== "Mindhunter"){
        location.replace("https://www.lafeltrinelli.it/mindhunter-storia-vera-del-primo-libro-john-douglas-mark-olshaker/e/9788850259434%22");
    }

    if(document.getElementById ("libriTxt").innerText== "Rosemary's baby"){
        location.replace("https://www.lafeltrinelli.it/rosemary-s-baby-libro-ira-levin/e/9788869980008");
    }

    //Libri Disgust//
    if(document.getElementById ("libriTxt").innerText== "Guerra e Pace"){
        location.replace("https://www.lafeltrinelli.it/guerra-pace-libro-lev-tolstoj/e/9788817117388?queryId=854eda1897cb4d4ef1b3bd7c15529c20");
    }

    if(document.getElementById ("libriTxt").innerText== "Notre Dame"){
        location.replace("https://www.lafeltrinelli.it/notre-dame-de-paris-libro-victor-hugo/e/9788807901232");
    }

    if(document.getElementById ("libriTxt").innerText== "Piccole donne"){
        location.replace("https://www.lafeltrinelli.it/piccole-donne-libro-louisa-may-alcott/e/9788809872066?queryId=4a3b2737e679b0a5af5a9f070134db19");
    }

    //Libri Fear//
    if(document.getElementById ("libriTxt").innerText== "Lovecraft"){
        location.replace("https://www.lafeltrinelli.it/cthulhu-racconti-del-mito-libro-howard-p-lovecraft/e/9788804669449?queryId=f02f66128f96a369d302bf23c24489c3");
    }

    if(document.getElementById ("libriTxt").innerText== "Poe"){
        location.replace("https://www.lafeltrinelli.it/racconti-del-mistero-ediz-illustrata-libro-edgar-allan-poe/e/9788817077439?queryId=87ee5b87e5bcd07eafd36c1c515ee800");
    }

    if(document.getElementById ("libriTxt").innerText== "Salems lot"){
        location.replace("https://www.lafeltrinelli.it/notti-di-salem-ebook-stephen-king/e/9788873398844?queryId=f8a15c8c7bc6975afcab1abc8f685178");
    }

    //Libri Happy//
    if(document.getElementById ("libriTxt").innerText== "Bridget Jones"){
        location.replace("https://www.lafeltrinelli.it/diario-di-bridget-jones-libro-helen-fielding/e/9788817070140");
    }

    if(document.getElementById ("libriTxt").innerText== "I love shopping con mia sorella"){
        location.replace("https://www.lafeltrinelli.it/love-shopping-con-mia-sorella-libro-sophie-kinsella/e/9788804718772?queryId=c4d241db4dbff346c874c894c34e803d");
    }

    if(document.getElementById ("libriTxt").innerText== "I love shopping"){
        location.replace("https://www.lafeltrinelli.it/love-shopping-libro-sophie-kinsella/e/9788804718789?queryId=3edbc8b03986164776f54411e8009b5d");
    }

    //Libri Neutral//
    if(document.getElementById ("libriTxt").innerText== "Anna Karenina"){
        location.replace("https://www.lafeltrinelli.it/anna-karenina-libro-lev-tolstoj/e/9788807900006");
    }

    if(document.getElementById ("libriTxt").innerText== "Cime tempestose"){
        location.replace("https://www.lafeltrinelli.it/cime-tempestose-libro-emily-bronte/e/9788807900129?queryId=82fdb5efc1244f5ed7805d4181ea50d1%22");
    }

    if(document.getElementById ("libriTxt").innerText== "Orgoglio e pregiudizio"){
        location.replace("https://www.lafeltrinelli.it/orgoglio-pregiudizio-libro-jane-austen/e/9788807900846?queryId=e2e46a0509b1137c8c0bbd9b3c62095f");
    }

    //Libri Sad//
    if(document.getElementById ("libriTxt").innerText== "Dorian Gray"){
        location.replace("https://www.lafeltrinelli.it/ritratto-di-dorian-gray-libro-oscar-wilde/e/9788807900587");
    }

    if(document.getElementById ("libriTxt").innerText== "Dracula"){
        location.replace("https://www.lafeltrinelli.it/dracula-libro-bram-stoker/e/9788807901836?queryId=d9195d81020313220e9c86da6ccbef54");
    }

    if(document.getElementById ("libriTxt").innerText== "Frankenstein"){
        location.replace("https://www.lafeltrinelli.it/frankenstein-libro-mary-shelley/e/2000000095295");
    }

    //Libri Surprise//
    if(document.getElementById ("libriTxt").innerText== "Alice nel Paese delle meraviglie"){
        location.replace("https://www.lafeltrinelli.it/alice-nel-paese-delle-meraviglie-libro-lewis-carroll/e/9788807900150");
    }

    if(document.getElementById ("libriTxt").innerText== "Cronache del Mondo emerso"){
        location.replace("https://www.lafeltrinelli.it/cronache-del-mondo-emerso-saga-libro-licia-troisi/e/9788804669920");
    }

    if(document.getElementById ("libriTxt").innerText== "The Witcher"){
        location.replace("https://www.lafeltrinelli.it/guardiano-degli-innocenti-the-witcher-libro-andrzej-sapkowski/e/9788842932413?queryId=524d38bf5366858e82e307256a7a4f63");
    }
}


function ciboredirect ()
{
    //Cibo Angry//
    if(document.getElementById ("ciboTxt").innerText== "Dark cookies"){
        location.replace("https://ricette.giallozafferano.it/Biscotti-al-cioccolato.html");
    }

    if(document.getElementById ("ciboTxt").innerText== "Pumpkin spice latte"){
        location.replace("https://blog.giallozafferano.it/cucinavistamare/pumpkin-spice-latte/");
    }

    //Cibo Disgust//
    if(document.getElementById ("ciboTxt").innerText== "Club sandwich"){
        location.replace("https://ricette.giallozafferano.it/Madame-club-sandwich.html");
    }

    //Cibo Fear//
    if(document.getElementById ("ciboTxt").innerText== "Bloody Mary"){
        location.replace("https://www.cucchiaio.it/ricetta/bloody-mary/");
    }

    if(document.getElementById ("ciboTxt").innerText== "Pumpkin Pie"){
        location.replace("https://ricette.giallozafferano.it/Pumpkin-pie.html");
    }

    //Cibo Happy//
    if(document.getElementById ("ciboTxt").innerText== "Cioccolata calda"){
        location.replace("https://ricette.giallozafferano.it/Cioccolata-calda.html");
    }

    if(document.getElementById ("ciboTxt").innerText== "Pancake"){
        location.replace("https://ricette.giallozafferano.it/Pancakes-allo-sciroppo-d-acero.html");
    }

    if(document.getElementById ("ciboTxt").innerText== "Waffle"){
        location.replace("https://ricette.giallozafferano.it/Waffle.html");
    }

    //Cibo Neutral//
    if(document.getElementById ("ciboTxt").innerText== "Cosmopolitan"){
        location.replace("https://ricette.giallozafferano.it/Cosmopolitan.html");
    }

    //Cibo Sad//
    if(document.getElementById ("ciboTxt").innerText== "Cioccolata calda"){
        location.replace("https://ricette.giallozafferano.it/Cioccolata-calda.html");
    }

    if(document.getElementById ("ciboTxt").innerText== "Pancake"){
        location.replace("https://ricette.giallozafferano.it/Pancakes-allo-sciroppo-d-acero.html");
    }

    if(document.getElementById ("ciboTxt").innerText== "Waffle"){
        location.replace("https://ricette.giallozafferano.it/Waffle.html");
    }

    //Cibo Surprise//
    if(document.getElementById ("ciboTxt").innerText== "Gelato"){
        location.replace("https://ricette.giallozafferano.it/Gelato-bites.html");
    }

    if(document.getElementById ("ciboTxt").innerText== "Torta cioccolato"){
        location.replace("https://ricette.giallozafferano.it/Torta-al-cioccolato.html");
    }
}