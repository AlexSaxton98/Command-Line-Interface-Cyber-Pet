


class Animal{
    constructor(name){
    this.name = name;
    this.hunger = 100; //done
    this.thirst = 100; //done
    this.happiness = 100; //done
    this.energy = 100; //done
    // this.sleeping = false; //done
    this.toilet = 100; //done
    this.hygiene = 100; //done
    }

    feed(){
        this.hunger += 20;
        this.toilet -= 15;
        this.energy += 10;
    }
    drink(){
        this.thirst += 15;
        this.toilet -= 10;
        this.energy += 5;
    }
    toiletFunc(){
        this.toilet += 50;
        this.hunger -= 20;
        this.thirst -=10;
    }
    sleep(){
        this.energy += 40;
        this.hunger -= 20;
        this.thirst -= 20;
        this.toilet -= 35;
        this.hygiene -= 30;
    }
    clean(){
        this.hygiene += 60;
        this.happiness -= 50;
        this.energy -= 30;
    }
    checkStatus(){
        return `Name - ${this.name}, Hunger - ${this.hunger}, Thirst - ${this.thirst}, Sleep - ${this.sleep}, Toilet - ${this.toilet}, Happiness - ${this.happiness}, Hygiene - ${this.hygiene}`
    }
}

class Dog extends Animal{
    constructor(name){
    super(name)
    this.dogWalk = 0; //done
    this.dogSit = 0;//done
    this.dogRollOver = 0;//done
    this.dogPlay = 0; //done
    }
    dogPlayFunc(){
        this.dogPlay ++;
        this.happiness += 15;
        this.energy -= 10;
        this.thirst -= 2;
        this.hunger -= 4;

    }
    walkies(){
        this.dogWalk ++;
        this.happiness += 50;
        this.energy -= 25;
        this.hygiene -= 15;
        this.thirst -= 30;
        this.hunger -= 10;
    }
    sit(){
        this.dogSit ++;
        this.energy += 5;
        this.happiness += 5;
    }
    rollOver(){
        this.dogRollOver  ++;
        this.energy -= 8;
        this. hygiene -= 2; 
        this.happiness += 10;
    }
}
class Cat extends Animal{
    constructor(name){
        super(name)
        this.catPlay = 0;
        this.catHunt = 0;
        this.catScratch =0;
        this.catClimb = 0;
    }
    catPlayFunc(){
        this.catPlay ++;
        this.happiness += 10;
        this.energy -= 15;
        this.thirst -= 5;
        this.hunger -= 3;
    }
    hunt(){
        this.happiness += 20;
        this.hygiene -=15;
        this.hunger -= 20;
        this.thirst -= 15;
        this.energy -= 18;
    }
    climb(){
        this.catClimb ++;
        this.happiness += 25;
        this.energy -= 20;
        this.hygiene -= 5;
        this.thirst -= 5;
        this.hunger -= 3;
    }
    scratch(){
        this.catScratch ++;
        this.happiness += 35;
        this.energy -= 10;
        this.thirst -= 5;
        this.hunger -= 3;

    }
}
class Rabbit extends Animal{
    constructor(name){
        super(name)
        this.rabbitHop = 0;
        this.rabbitPlay = 0;
        this.rabbitCuddle = 0;
        this.rabbitGroom = 0;
    }
    rabPlayFunc(){
        this.rabbitPlay ++;
        this.happiness += 15;
        this.energy -= 12;
        this.thirst -= 8;
        this.hunger -= 5;
    }

    hop(){
        this.rabbitHop ++;
        this.happiness += 2;
        this.energy --;
        this.thirst -= 3;
        this.hunger --;
    }
    cuddle(){
        this.rabbitCuddle ++;
        this.happiness += 20;
        this.energy += 5;
        this.thirst -= 5;
        this.hunger -= 10;
    }
    groom(){
        this.rabbitGroom ++;
        this.happiness += 30;
        this.energy -= 10;
        this.thirst -= 10;
        this.hunger -= 15;
        this.hygiene += 15;
    }

}
function statLower(){
    pet.hunger -=1  
    hunStat.textContent = pet.hunger
    pet.thirst -=1
    thirStat.textContent = pet.thirst
    pet.happiness -=1
    hapStat.textContent = pet.happiness
    pet.energy -=1
    enerStat.textContent = pet.energy
    pet.toilet -=1
    toiStat.textContent = pet.toilet
    pet.hygiene -=1
    hygStat.textContent = pet.hygiene
}

module.exports = {
    Animal,
    Dog,
    Cat,
    Rabbit,
    statLower
}
console.log(Dog)

// Add name input for pet
//clean up eventListeners, ask a tutor for help with loops?