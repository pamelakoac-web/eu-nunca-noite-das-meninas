
const cards = [
["Eu nunca mandei nudes.", "picante"],
["Eu nunca fiquei com alguém só por curiosidade.", "picante"],
["Eu nunca usei brinquedinho na hora H.", "picante"],
["Eu nunca assisti algo adulto sozinha.", "picante"],
["Eu nunca fiz algo 'proibido' em lugar público.", "picante"],
["Eu nunca fiquei com alguém no trabalho ou faculdade.", "picante"],
["Eu nunca fantasiei com alguém que não devia.", "picante"],
["Eu nunca fiquei com duas pessoas no mesmo dia.", "picante"],
["Eu nunca recebi uma mensagem quente e gostei.", "picante"],
["Eu nunca enviei uma mensagem quente e me arrependi.", "picante"],
["Eu nunca fingi estar dormindo pra evitar algo.", "picante"],
["Eu nunca fiquei com alguém só pra se vingar.", "picante"],
["Eu nunca tive um crush comprometido.", "picante"],
["Eu nunca dormi sem roupa.", "picante"],
["Eu nunca fiz algo 'ousado' num carro.", "picante"],
["Eu nunca tive um sonho erótico com alguém conhecido.", "picante"],
["Eu nunca fiquei com alguém mais de 10 anos mais velho.", "picante"],
["Eu nunca experimentei uma posição diferente só por curiosidade.", "picante"],
["Eu nunca usei fantasia ou lingerie especial pra impressionar alguém.", "picante"],
["Eu nunca recebi um elogio ousado e gostei.", "picante"],

["Eu nunca ri tanto que comecei a chorar.", "engracada"],
["Eu nunca caí na frente de várias pessoas.", "engracada"],
["Eu nunca falei alguma coisa e me arrependi imediatamente.", "engracada"],
["Eu nunca enviei mensagem para a pessoa errada.", "engracada"],
["Eu nunca fiz careta no espelho e me assustei.", "engracada"],
["Eu nunca tentei dançar e derrubei algo.", "engracada"],
["Eu nunca falei sozinho e fui flagada.", "engracada"],
["Eu nunca ri em um momento totalmente sério.", "engracada"],
["Eu nunca inventei desculpa boba pra não ir a algum lugar.", "engracada"],
["Eu nunca confundi o nome de alguém importante.", "engracada"],

["Eu nunca fiquei bêbada numa festa e não lembrava de tudo.", "amigas"],
["Eu nunca briguei com uma amiga por besteira.", "amigas"],
["Eu nunca dormi na casa de amiga sem avisar os pais.", "amigas"],
["Eu nunca fiz uma viagem de última hora só com amigas.", "amigas"],
["Eu nunca paguei mico dançando em público com amigas.", "amigas"],
["Eu nunca troquei de roupa várias vezes antes de sair.", "amigas"],
["Eu nunca fiz promessa de amiga que depois não cumpri.", "amigas"],
["Eu nunca escondi um crush de uma amiga.", "amigas"],
["Eu nunca fui embora de festa sem avisar.", "amigas"],
["Eu nunca fiz uma pegadinha com uma amiga e me arrependi.", "amigas"]
];

let remaining = [...cards];
const cardDiv = document.getElementById("card");
const btn = document.getElementById("nextBtn");
const flipSound = document.getElementById("flipSound");

const startScreen = document.getElementById("start-screen");
const gameScreen = document.getElementById("game-screen");
const startBtn = document.getElementById("startBtn");

function getCategoryClass(category){
    if(category === "picante") return "category-picante";
    if(category === "engracada") return "category-engracada";
    if(category === "amigas") return "category-amigas";
}

function showCard(){
    if(remaining.length === 0){
        cardDiv.innerHTML = "🎉 Fim do baralho! <br> Noite das Meninas completa! 💅";
        return;
    }
    const idx = Math.floor(Math.random() * remaining.length);
    const [text, category] = remaining[idx];
    remaining.splice(idx,1);
    const categorySpan = '<span class="category '+getCategoryClass(category)+'">'+category.toUpperCase()+'</span>';
    cardDiv.innerHTML = text + "<br>" + categorySpan;
    cardDiv.classList.remove("show");
    void cardDiv.offsetWidth;
    cardDiv.classList.add("show");
    flipSound.play();
}

startBtn.addEventListener("click", ()=>{
    flipSound.play();
    startScreen.style.display = "none";
    gameScreen.style.display = "block";
});

cardDiv.addEventListener("click", showCard);
btn.addEventListener("click", showCard);
