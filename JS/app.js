const logoText = document.querySelector('.animation');
const strText = logoText.textContent;

const splitText = strText.split("");

logoText.textContent = "";

for(let i=0; i < splitText.length; i++){

    logoText.innerHTML += "<span>" + splitText[i] + "</span>";    
}

let char = 0;
let timer = setInterval(onTick, 50);

function onTick(){

    const span = logoText.querySelectorAll('span')[char];
    span.classList.add('fade');
    char++;
    if(char === splitText.length){
        complete();
        return;
    }
}

function complete(){
    clearInterval(timer);
    timer = null;
}