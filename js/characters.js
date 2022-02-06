class Fighter{

    constructor(name, picName, attack, defense, technique, speed){
        this.life = 300;
        this.luck = Math.floor(Math.random() *11);
        this.name = name;
        this.picName = picName
        this.attack = attack;
        this.defense = defense;
        this.technique = technique;
        this.speed = speed;
    }


    hit(enemy){
        enemy.life -= (this.attack - (enemy.defense * (enemy.luck / this.speed))).toFixed();
    }

    
    specialHit(enemy){
        enemy.life -= (( this.attack + this.technique ) - (enemy.defense * (enemy.luck / this.speed))).toFixed();
    }
};

let player1 = new Fighter("Spiderman", "spiderman", 30, 20, 30, 30);
let player2 = new Fighter("Batman", "batman", 30, 30, 40, 20);
let player3 = new Fighter("Hulk", "hulk", 50, 40, 30, 10);
let player4 = new Fighter("Wonderwoman", "wonderwoman", 40, 20, 20, 30);
let player5 = new Fighter("El Misterioso caminante del Norte", "el misterioso caminante del norte", 40, 30, 30, 20);
let player6 = new Fighter("Zeus", "zeus", 30, 20, 20, 20);


let allPlayers = {
    "1" : player1,
    "2" : player2,
    "3" : player3,
    "4" : player4,
    "5" : player5,
    "6" : player6,
}