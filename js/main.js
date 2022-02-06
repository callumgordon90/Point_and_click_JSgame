let fighter1 = "";
let fighter2 = "";

// CAMBIA NIVEL

const changeStage = (destination) => {

    let arrStage = ["stage1", "stage2", "stage3", "stage4"];

    arrStage = arrStage.filter(val => !destination.includes(val));

    document.getElementById(destination).style.display = "block";

    for(let _stage of arrStage){
        document.getElementById(_stage).style.display = "none";
    }
}


// ELIGE DOS LUCHADORES

const chooseFighter = (character) => {

    if ( fighter1 == "" ) {

        fighter1 = allPlayers[character];

        document.getElementById(character).className = "fighterSelected1";

        //AHORA A BLOQUEAR EL LUCHADOR ELIGIDO:
        document.getElementById(character).onclick = ""; 

        img1 = document.getElementById("imgFighterSelected1");

        img1.innerHTML = `<img class="imgFighter1" src="img/${fighter1.picName}.png" alt="fighter1" >`;
        
        

    } else if ( fighter2 == "" ) {

        fighter2 = allPlayers[character];
    
        document.getElementById(character).className = "fighterSelected2";

        // AHORA A BLOQUEAR EL LUCHADOR ELIGIDO:
        document.getElementById(character).onclick = ""; 

        img2 = document.getElementById("imgFighterSelected2");
        img2.innerHTML = `<img class="imgFighter2" src="img/${fighter2.picName}.png" alt="fighter2">`;
        

        fillPlayers();
   
        setTimeout(() => {
           changeStage("stage3");
        }, 10000); 
    }

}


// STAGE 3:

const fillPlayers = () => {

    let players = document.getElementById("players");

    players.innerHTML = `
    <div class="fighterOne" >
         <div class="lifeBar"><div id="lifeBar1"></div></div>
         <div class="picFighter1"><img class="imgFighter1" src="img/${fighter1.picName}.png" alt="fighter1" ></div>
    </div>
    <div class="centralDiv">
        <div id="infoContainer"><p class="vs">vs</p></div>
        <button class="attackButton" onclick="fighting()">Fight!!!</button>
        
    </div>
    <div class="fighterTwo">
         <div class="lifeBar"><div id="lifeBar2"></div></div>
         <div class="picFighter2"><img class="imgFighter2" src="img/${fighter2.picName}.png" alt="fighter2"></div>
    </div>`
}


// LA PELEA

const fighting = () => {

    // Div Fight Information

    document.getElementById("infoContainer").innerHTML= `<div id="infoFight"></div>`

    // Random Fight
    //console.log("begin fight");

    let turn = Math.floor(Math.random() * 2);
    let specialAttack = Math.floor(Math.random() * 4);
    let infoFight = document.getElementById("infoFight");
    let life1 = document.getElementById("lifeBar1");
    let life2 = document.getElementById("lifeBar2");


    if ( (fighter1.life > 0 ) && (fighter2.life > 0 )) {
        if (turn == 0) {
            if ( specialAttack == 3 ) {
                fighter1.specialHit(fighter2);
                infoFight.innerHTML = `${fighter1.name} Special Hit`;
            } else {
                fighter1.hit(fighter2);
                infoFight.innerHTML = `${fighter1.name} hits ${fighter2.name}`;
            }
        } else {
            if ( specialAttack == 1 ) {
                fighter2.specialHit(fighter1);
                infoFight.innerHTML = `${fighter2.name} Special Hit`;
            } else {
                fighter2.hit(fighter1);
                infoFight.innerHTML = `${fighter2.name} hits ${fighter1.name}`;
            }
        }
    };

 
    updateLife();
    Winner();
}

// ICONO DE SALUD:

const updateLife = () => {

    if ((fighter1.life > 0 ) && (fighter2.life > 0 )) {
        let lifePlayer1 = fighter1.life;
        let lifePlayer2 = fighter2.life;
            lifePlayer1 = (lifePlayer1 * 100)/300;
            document.getElementById("lifeBar1").style.width = lifePlayer1+"%";
            lifePlayer2 = (lifePlayer2 * 100)/300;
            document.getElementById("lifeBar2").style.width = lifePlayer2+"%";
    } else if (fighter1.life <= 0) {
        document.getElementById("lifeBar1").style.width = 0;
    } else {
        document.getElementById("lifeBar2").style.width = 0;
    }
}

// GANADOR:

const Winner = () => {
    
    if(fighter1.life <= 0){

        document.getElementById("infoContainer").innerHTML= `<div id="infoFight"></div>`
        infoFight.innerHTML = `KO!!!`;

        fillWinner(fighter2);

        setTimeout(() => {
            changeStage("stage4");
         }, 2000); 

    } else if(fighter2.life <= 0){

        document.getElementById("infoContainer").innerHTML= `<div id="infoFight"></div>`
        infoFight.innerHTML = `KO!!!`;
        fillWinner(fighter1);

        setTimeout(() => {
            changeStage("stage4");
         }, 2000); 

    }
}


// Fill PANTALLA 4(GANADOR)

const fillWinner = (winner) => {

    let winnerContainer = document.getElementById("winner");

    winnerContainer.innerHTML = `
    <div><img class="winnerPic" src="img/${winner.picName}.png" alt="winner" ></div>
    <div class="winnerButton">
          <div class="winnerText">${winner.name} is Victorious!!!</div>
          <button onclick="reset()" class="resetButton">..Continue??</button>
    </div>      
   `
};


// VUELVE AL PRINCIPIO

const reset = () => {
    window.location.reload();
}



