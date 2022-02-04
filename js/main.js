//Functions

const cleanGame = () => {
    team1 = [];
    team2 = [];
    ganador = "";
}

const cambiaPantalla = (cambio) => {

    //We generate the concatenated variable that tells us to which screen 
    //we desire to go.
    let pantallaDeseada = "screen" + cambio;
    

    //Each time we enter the function, the array with all the screens is regenerated.  
    //as previously when filtering some of them were left out, so the process starts again.
    let arrayPantallas = ["screen1","screen2","screen3","screen4"];

    //Here we filter from the array the screen we want to go to, THAT IS,
    //we save all the screens except the one we want to go to,
    //since we want to give the display none property to the rest of the screens.
    arrayPantallas = arrayPantallas.filter(valor => !pantallaDeseada.includes(valor));

    //Before giving the display none property to the rest of the screens, we tell the one that we DO WANT 
    //to to have a display block, which will make it visible in the DOM (the web).
    document.getElementById(pantallaDeseada).style.display = "block";

    //We go through the array of screens and set the display property of all the screens to none
    for (let pantalla of arrayPantallas) {
        document.getElementById(pantalla).style.display = "none";
    }


}

//Algorithm