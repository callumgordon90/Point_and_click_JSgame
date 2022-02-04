//Declaration of the class 'fighter'
class Fighter {

    constructor(health, stamina, strength, speed, agility) {
        this.health = health;
        this.stamina = stamina;
        this.strength = strength;
        this.speed = speed;
        this.agility = agility;
    }

    attack() {
        return this.velocidad += 30;
    }

    defend() {
        return this.velocidad = 0;
    }

};

//Making instances of the fighters

let Spiderman = new Fighter(100, 89, 34, 56, 87 )
let Batman = new Fighter(100, 34, 100, 45, 55 );
let Hulk = new Fighter(100, 100, 100, 23, 43 );
let Wonderwoman = new Fighter(100,67, 75, 23, 57 );
let Callum = new Fighter(100, 75 , 67, 54, 89);
let Zeus = new Fighter(100, 100, 100, 100, 100);


//Generating basic variable of the environment

let allFighters = [Spiderman, Batman, Hulk, Wonderwoman, Callum, Zeus];

let team1 = [];

let team2 = [];

let ganador = "";
