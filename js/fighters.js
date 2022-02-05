//Declaration of the class 'fighter'
class Fighter {

    constructor(name, stamina, strength, speed, agility) {
        this.name = name;
        this.health = 500;
        this.stamina = stamina;
        this.strength = strength;
        this.speed = speed;
        this.agility = agility;
        this.parHazard = Math.floor(Math.random() * 9);
    }

    attack(enemy) {
       enemy.life -= (this.strength - (enemy.stamina * (enemy.parHazard / this.speed))).toFixed();
    }

    superattack(enemy) {
        enemy.life -= ((this.strength + this.agility) - (enemy.stamina * (enemy.parHazard / this.speed))).toFixed();
    }

};

//Making instances of the fighters

let Spiderman = new Fighter("Spiderman", 90, 90, 90, 90 )
let Batman = new Fighter("Batman", 90, 90, 90, 90 );
let Hulk = new Fighter("Hulk", 90, 90, 90, 90 );
let Wonderwoman = new Fighter("Wonderwoman",90, 90, 90, 90 );
let Caminante = new Fighter("El Misterioso Caminante del Norte", 90, 90, 90, 90);
let Zeus = new Fighter("Zeus", 100, 100, 100, 100);


//Generating basic variable of the environment

let allFighters = {
    "One": player1,
    "Two": player2,
    "Three": player3,
    "Four": player4,
    "Five": player5,
    "Six": player6
}
