let width;
let height;
let posicaox;
let posicaoy;
let vidasController = 1;
let controllerLife;
let tempo = 10;
let idTempo;


document.querySelector('#level').addEventListener('change', function (){
    this.style.display = 'none';
    document.querySelector('.painel').style.display = 'block';
    tempotoGame()
    lavels(this.value);
})

function ajustTamanhoPalcoView () {
    height = window.innerHeight;
    width = window.innerWidth;
}
function gerandoNaleatorios () {
    posicaox = Math.floor(Math.random()* (width - 0) + 0) - 90;
    posicaoy = Math.floor(Math.random()* (height - 0) + 0) - 90;

    posicaox = posicaox < 0 ? 0: posicaox;
    posicaoy = posicaoy < 0 ? 0 : posicaoy;
}
function tamanhoMosquito (){
    let t = Math.floor(Math.random() * 3 )
    
    switch (t) {
        case 0:
         return 'mosca';
        case 1:
            return 'mosca1';
        case 2:
            return 'mosca2';
    }
}
function createMosquito () {
    
    removeMosquito()
    let mosquito = document.createElement('img');
    mosquito.src = '../img/mosca.png';
    mosquito.className = tamanhoMosquito() + ' ' + viraMosqui();
    mosquito.id = 'mosquito'
    mosquito.style.left = `${posicaox}px`;
    mosquito.style.top = `${posicaoy}px`;
    mosquito.addEventListener('click', function() {
        this.remove();
    });
    document.body.appendChild(mosquito);
}
function removeMosquito () {
    let img = document.querySelector('#mosquito');
    if(img) {

        img.remove();

        document.getElementById(`v${vidasController}`).src = '../img/coracao_vazio.png';
        vidasController++;

        if(vidasController==6){
            clearInterval(controllerLife);
            window.location.href = '../outherHtml/perdeu.html';



        }
    }
}
function viraMosqui (){
    let t = Math.floor(Math.random() * 2 )
    
    switch (t) {
        case 0:
            return 'ladopadrao';
        case 1:
            return 'ladoModify';
    }
}
function lavels (l){
    switch (l) {
        case 'easy':
            controllerLife = setInterval(() => {
                ajustTamanhoPalcoView();
                gerandoNaleatorios();
                createMosquito()
            }, 2500);
            break;
            case 'normal':
                controllerLife = setInterval(() => {
                    ajustTamanhoPalcoView();
                    gerandoNaleatorios();
                    createMosquito()
                }, 1250);
                break;
            case 'hard':
                controllerLife = setInterval(() => {
                    ajustTamanhoPalcoView();
                    gerandoNaleatorios();
                    createMosquito()
                }, 750);
                break;
    }
}
function tempotoGame (){
    idTempo = setInterval(function(){
        if(tempo < 0){
            console.log('venceu...')
            clearInterval(idTempo);
            clearInterval(controllerLife);
        }else{
            document.getElementById('time').innerHTML = tempo;
            tempo -=1;
        }
    }, 1000)
}






