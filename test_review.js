// Edsen Casintahan
// 11.23.16
//javascript test review

var knight = "Arthur";
var maiden = "Morgana";
var monster = "Dragon";

var weaponChest = ["Mace", "Sorcerer's Stone", "Excalibur"];

var hero {
	wizard = "Merlin";
	weapon = weaponChest[2];
	pwr = 32;
}

function swordInTheStone(worthy){
	if (worthy == "Arthur"){
		console.log("We have found our king" + worthy + ".");
	}else{
		console.log("We must keep searching for " + worthy + " is unworthy.")
	}
}

swordInTheStone(knight);

//Hail the King

function trueLove(king, queen){
	if (queen == "Guinevere" && king == "Arthur"){
		console.log("On this day, our " + king + " and " + queen + " shall rule happily ever after.");
	}else{
		console.log("We must keep searching, for true love must reign over Camelot.");
	}
}

trueLove(maiden, knight);

//Merlin and Monster

function epicBattle(wizard, enemy, power){
	if (power <= 15){
		console.log("Our " + wizard + " has fallen.");
	}
	else if (power >= 16 && power <= 40){
		console.log(wizard + " has almost slain " + enemy + ".");
	}else{
		console.log("Our " + wizard + " has slain the " + enemy + "!");
	}
}

epicBattle(hero.wizard, monster, hero.pwr);