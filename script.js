const giallo= "#FDDCA7";
const rosa= "#E389E3";
const lilla= "#9FB9F4";
const celeste= "#94F1FD";
const verde= "#A7D9A7";

var scelta=0; 
var choose;
function reindirizzamento(choose)
{
    switch(choose){
        case 1:
            scelta=1;
            location.replace("file:///Users/chiarafranco/Desktop/Accademia/Web%20Design%202/movveki.github.io/nome.html");
        break;

        case 2:
            scelta=2;
            location.replace("file:///Users/chiarafranco/Desktop/Accademia/Web%20Design%202/movveki.github.io/nome.html");
        break;

        case 3:
            scelta=3;
            location.replace("file:///Users/chiarafranco/Desktop/Accademia/Web%20Design%202/movveki.github.io/nome.html");
        break;

        case 4: 
            scelta=4;
            location.replace("file:///Users/chiarafranco/Desktop/Accademia/Web%20Design%202/movveki.github.io/nome.html");
        break;

        case 5:
            scelta=5;
            location.replace("file:///Users/chiarafranco/Desktop/Accademia/Web%20Design%202/movveki.github.io/nome.html");
        break;
    }
}

function cambia(){
    console.log(scelta);
    switch(scelta){
        case 1:
            background_giallo();
        break;

        case 2:
            background_rosa();
        break;

        case 3:
            background_lilla();
        break;

        case 4:
            background_celeste();
        break;

        case 5:
            background_verde();
        break;
    }
}

function background_giallo (){
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