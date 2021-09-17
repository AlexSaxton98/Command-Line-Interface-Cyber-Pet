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
            loop: true
        }
    ]

    inquirer.prompt(dogInteraction).then((answer)=>{ //At the end of each If statement, prompt the function again
        if(answer.dogInter == "Feed"){
            pet.feed()
            console.log(pet)
        }
    })
}

// List Looping in inquirer - Look it up!


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
        // catFunc()
    } else if(answer.aniSelect == "Rabbit"){
        pet = new aniFuncs.Rabbit(answer.petName)
        console.log("You Chose Rabbits!")
        console.log(pet)
        // rabbitFunc()
    }
})
























// console.log(aniFuncs.Animal.hunger)

// let pet = new aniFuncs.Rabbit("Jasmine")

// console.log(pet)