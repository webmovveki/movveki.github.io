const giallo= "#FDDCA7";
const rosa= "#E389E3";
const lilla= "#9FB9F4";
const celeste= "#94F1FD";
const verde= "#A7D9A7";

var scelta; 
function reindirizzamento(choose)
{
    
    switch(choose){
        case 1:
            scelta=1;
            sessionStorage.setItem("colore", scelta);    
        break;

        case 2:
            scelta=2;
            sessionStorage.setItem("colore", scelta);
        break;

        case 3:
            scelta=3;
            sessionStorage.setItem("colore", scelta);
        break;

        case 4: 
            scelta=4;
            sessionStorage.setItem("colore", scelta);
        break;

        case 5:
            scelta=5;
            sessionStorage.setItem("colore", scelta);
        break;
    }
    location.replace("https://webmovveki.github.io/movveki.github.io/nome.html");
}

function cambia(){
    scelta=sessionStorage.getItem("colore");
    switch(scelta){
        case "1":
            background_giallo();
        break;

        case "2":
            background_rosa();
        break;

        case "3":
            background_lilla();
        break;

        case "4":
            background_celeste();
        break;

        case "5":
            background_verde();
        break;
    }
}

function background_giallo (){
    console.log("mi hanno chiamato",giallo)
    document.body.style.background = giallo;
}

function background_rosa (){
    document.body.style.background = rosa;
}

function background_lilla (){
    document.body.style.background = lilla;
}

function background_celeste (){
    document.body.style.background = celeste;
}

function background_verde (){
    document.body.style.background = verde;
}

var nome;


function setNome(){
    nome=document.nickname.usern.value;
    sessionStorage.setItem("utente", nome);
}



function slideremozione(){
    if(document.querySelector('#rangeslider').value <=3){
        var img = document.getElementById("emozioneimg");
        img.src = "Immagini/asseconda.png";
        document.getElementById("emozioneimg").innerHTML=img;

    } else {
        var img = document.getElementById("emozioneimg");
        img.src = "Immagini/contrasta.png";
        document.getElementById("emozioneimg").innerHTML=img;
    }

}
