let fortuneArray = ["You will gain big brain", "You will have cool shoes", "You will love man, even if you are man", "Quit, dont quit... noodles", "Error 404: Fortune not found"]

module.exports = {
    getCompliment: (req, res) => {

            const compliments = ["Gee, you're a smart cookie!", "Cool shirt!", "Your Javascript skills are stellar."];
          
            // choose random compliment
            let randomIndex = Math.floor(Math.random() * compliments.length);
            let randomCompliment = compliments[randomIndex];
          
            res.status(200).send(randomCompliment);
    },

    getFortune: (req, res) => {
        res.status(200).send(fortuneArray);
    },

    addFortune: (req, res) => {
        let {name} = req.body

        console.log(name)

        fortuneArray.push(name)

        res.status(200).send(fortuneArray)
    },

    deleteFortune: (req, res) => {
        let index = req.params.id - 1

        fortuneArray.splice(index, 1)

        res.status(200).send(fortuneArray)
    }
}