// I was able to set up some back end functions but was having a hard time figuring out what i needed to to in the client folder to get them to show up in the front end.

let todoList = require('./db.json')
let globalId = 4

module.exports = {
    getCompliment: (req, res) => {
        const compliments = ["Gee, you're a smart cookie!",
                           "Cool shirt!",
                           "Your Javascript skills are stellar.",
        ];
      
        // choose random compliment
        let randomIndex = Math.floor(Math.random() * compliments.length);
        let randomCompliment = compliments[randomIndex];
      
        res.status(200).send(randomCompliment);
        
      },

    getFortune: (req, res) => {
        const fortune = ["A beautiful, smart, and loving person will be coming into your life.",
                           "A dubious friend may be an enemy in camouflage.",
                           "A faithful friend is a strong defense.",
                 "A feather in the hand is better than a bird in the air.",
                 "A fresh start will put you on your way."
      
        ];
      
        let randomIndex = Math.floor(Math.random() * fortune.length);
        let randomFortune = fortune[randomIndex];
      
        res.status(200).send(randomFortune);
        
      },
      getAllToDo: (req, res) => {
        res.status(200).send(todoList)
       },

       deleteTask: (req, res) => {
        let index = todoList.findIndex(elem => elem.id === +req.params.id)
        todoList.splice(index, 1)
        res.status(200).send(todoList)
    }, 
    
    createTask: (req, res) => {
        let {task} = req.body
        let newTask = {
            id: globalId,
            task
        }
        todoList.push(newTask)
        res.status(200).send(todoList)
        globalId++
    },

        
}

