const { prompt } = require("inquirer")
const inquirer = require("inquirer")
const aniFuncs = require("./animalsCLI")

let pet = ""

const animalSelect = [
    {
        type: "list",
        name: "aniSelect",
        message:"Which animal would you like?",
        choices: ["Dog", "Cat", "Rabbit"]
    },
    {
        type: "input",
        name: "petName",
        message: "What is your pets name",// Template literal for pet type?
    }
]

function dogFunc(){
    const dogInteraction = [
        {
            type: "list",
            name: "dogInter",
            message: `What will you do with ${pet.name}?`,
            choices: ["Feed", "Drink", "Toilet", "Sleep", "Clean", "Play", "Walk", "Sit", "Roll Over"],
            // loop: true
        }
    ]

    inquirer.prompt(dogInteraction).then((answer)=>{ //At the end of each If statement, prompt the function again
        if(answer.dogInter == "Feed"){
            pet.feed()
            console.log(pet)
            dogFunc()
        } else if(answer.dogInter == "Drink"){
            pet.drink()
            console.log(pet)
            dogFunc()
        } else if(answer.dogInter == "Toilet"){
            pet.toiletFunc()
            console.log(pet)
            dogFunc()
        } else if(answer.dogInter == "Sleep"){
            pet.sleep()
            console.log(pet)
            dogFunc()
        } else if(answer.dogInter == "Clean"){
            pet.clean()
            console.log(pet)
            dogFunc()
        } else if(answer.dogInter == "Play"){
            pet.dogPlayFunc()
            console.log(pet)
            dogFunc()
        } else if(answer.dogInter == "Walk"){
            pet.walkies()
            console.log(pet)
            dogFunc()
        } else if(answer.dogInter == "Sit"){
            pet.sit()
            console.log(pet)
            dogFunc()
        } else if(answer.dogInter == "Roll Over"){
            pet.rollOver()
            console.log(pet)
            dogFunc()
        }
    })
}

function catFunc(){
    const catInteraction = [
        {
            type: "list",
            name: "catInter",
            message: `What will you do with ${pet.name}?`,
            choices: ["Feed", "Drink", "Toilet", "Sleep", "Clean", "Play", "Hunt", "Climb", "Scratch"],
            // loop: true
        }
    ]

    inquirer.prompt(catInteraction).then((answer)=>{ //At the end of each If statement, prompt the function again
        if(answer.catInter == "Feed"){
            pet.feed()
            console.log(pet)
            catFunc()
        } else if(answer.catInter == "Drink"){
            pet.drink()
            console.log(pet)
            catFunc()
        } else if(answer.catInter == "Toilet"){
            pet.toiletFunc()
            console.log(pet)
            catFunc()
        } else if(answer.catInter == "Sleep"){
            pet.sleep()
            console.log(pet)
            catFunc()
        } else if(answer.catInter == "Clean"){
            pet.clean()
            console.log(pet)
            catFunc()
        } else if(answer.catInter == "Play"){
            pet.catPlayFunc()
            console.log(pet)
            catFunc()
        } else if(answer.catInter == "Hunt"){
            pet.hunt()
            console.log(pet)
            catFunc()
        } else if(answer.catInter == "Climb"){
            pet.climb()
            console.log(pet)
            catFunc()
        } else if(answer.catInter == "Scratch"){
            pet.scratch()
            console.log(pet)
            catFunc()
        }
    })
}

function rabbitFunc(){
    const rabbitInteraction = [
        {
            type: "list",
            name: "rabInter",
            message: `What will you do with ${pet.name}?`,
            choices: ["Feed", "Drink", "Toilet", "Sleep", "Clean", "Play", "Hop", "Cuddle", "Groom"],
            // loop: true
        }
    ]

    inquirer.prompt(rabbitInteraction).then((answer)=>{ //At the end of each If statement, prompt the function again
        if(answer.rabInter == "Feed"){
            pet.feed()
            console.log(pet)
            rabbitFunc()
        } else if(answer.rabInter == "Drink"){
            pet.drink()
            console.log(pet)
            rabbitFunc()
        } else if(answer.rabInter == "Toilet"){
            pet.toiletFunc()
            console.log(pet)
            rabbitFunc()
        } else if(answer.rabInter == "Sleep"){
            pet.sleep()
            console.log(pet)
            rabbitFunc()
        } else if(answer.rabInter == "Clean"){
            pet.clean()
            console.log(pet)
            rabbitFunc()
        } else if(answer.rabInter == "Play"){
            pet.rabPlayFunc()
            console.log(pet)
            rabbitFunc()
        } else if(answer.rabInter == "Hop"){
            pet.hop()
            console.log(pet)
            rabbitFunc()
        } else if(answer.rabInter == "Cuddle"){
            pet.cuddle()
            console.log(pet)
            rabbitFunc()
        } else if(answer.rabInter == "Groom"){
            pet.groom()
            console.log(pet)
            rabbitFunc()
        }
    })
}




inquirer.prompt(animalSelect).then((answer) =>{
    if(answer.aniSelect == "Dog"){
        pet = new aniFuncs.Dog(answer.petName)
        console.log("You Chose Dogs!")
        console.log(pet)
        dogFunc()
    } else if(answer.aniSelect == "Cat"){
        pet = new aniFuncs.Cat(answer.petName)
        console.log("You Chose Cats!")
        console.log(pet)
        catFunc()
    } else if(answer.aniSelect == "Rabbit"){
        pet = new aniFuncs.Rabbit(answer.petName)
        console.log("You Chose Rabbits!")
        console.log(pet)
        rabbitFunc()
    }
})
























// console.log(aniFuncs.Animal.hunger)

// let pet = new aniFuncs.Rabbit("Jasmine")

// console.log(pet)