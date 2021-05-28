const readline = require("readline-sync");
console.log("Welcome you have now entered Azarath, in this realm mosters are many and heros are few, are you going to save us?");
const name = readline.question("What is your name traveler? ");
console.log(`Welcome, ${name}, you must be new to Azarath, you should be careful if you leave the city, mosters are everywhere outside these walls`);

const enemies = ["Dragon"," Giant Spider", "Basilisk", "Dire Wolf", "Giant Centipede"];
const treasure= ["Chainmail", "Elixer", "Gold", "Ancient Sword", "Philosopher's Stone"];
var loot = []
let playerHealth= 100;
const options = ["Walk", "Quit", "Player Menu"];
let found= treasure[Math.floor(Math.random()*treasure.length)];

function game(){

    const attack= [Math.floor(Math.random()* 30 + 40 - 20)];
   
    const foe= enemies[Math.floor(Math.random()* enemies.length)];
    let enemiesHealth= 100;
    const counterAttack= [Math.floor(Math.random()* 10 + 30 - 20 )];

    const index= readline.keyInSelect(options, "How will you venture forth?");
   
    if (options[index] == "Quit"){
    return playerHealth= 0
    }else if (options[index] == "Player Menu"){
    console.log(` Name: ${name} \n Health: ${playerHealth}`);
} else if (options[index] == "Walk"){
    let Key= Math.random();
    if (Key <= .4){
        console.log("Walking...");
        playerHealth>0
       
    }else if(Key >= .4){
        console.log("A " +foe+ " has appeared!");

while (enemiesHealth > 0 && playerHealth > 0){
    const user= readline.question('Will you stand and fight? "b" to battle and "e" to escape: ');
    

    switch(user){
        case "e":
             if (Key < .4){
            console.log(`${foe} is blocking you way and hits you with ${counterAttack} damage!`);
        }else{
            console.log("You have made a clean escape!");
            break;
        }
        const index= readline.keyInSelect(options, "How will you venture forth?");
    case "b":
        enemiesHealth -= attack;        
console.log(`${name} has attacked ${foe}, ${attack} damage was delt`)
playerHealth -= counterAttack
console.log(`${foe} has attacked ${name}, ${counterAttack} damage was delt`);
        if(enemiesHealth <= 0){
            console.log(`Well done ${name}, you have defeted ${foe} \n${foe} has dropped ${found}`);
        if(Key >= .2){
            loot.push(found)
           Boolean= playerHealth > 0; true;
            
                const index= readline.keyInSelect(options, "How will you venture forth?");
            
                if (options[index] == "Quit"){
                    return playerHealth= 0
                    }else if (options[index] == "Player Menu"){
                    console.log(` Name: ${name} \n Health: ${playerHealth}`);
                } else if (options[index] == "Walk"){
                    let Key= Math.random();
                    if (Key <= .4){
                        console.log("Walking...");
                    }else if(Key >= .4){
                        console.log("A " +foe+ " has appeared!");
                        const user= readline.question('Will you stand and fight? "b" to battle and "e" to escape: ');
    

                        switch(user){
                            case "e":
                                 if (Key < .4){
                                console.log(`${foe} is blocking you way and hits you with ${counterAttack} damage!`);
                            }else{
                                console.log("You have made a clean escape!");
                                break;
                            }
                            const index= readline.keyInSelect(options, "How will you venture forth?");
                        case "b":
                            enemiesHealth -= attack;        
                    console.log(`${name} has attacked ${foe}, ${attack} damage was delt`)
                    playerHealth -= counterAttack
                    console.log(`${foe} has attacked ${name}, ${counterAttack} damage was delt`);
                            if(enemiesHealth <= 0){
                                console.log(`Well done ${name}, you have defeted ${foe} \n${foe} has dropped ${found}`);
                            if(Key >= .2){
                                loot.push(found)
                               Boolean= playerHealth > 0; true;
}}
    }}
        }}
            }}
                }}
                    }}

game();