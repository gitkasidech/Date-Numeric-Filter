const {inputData} = require("./entities-amount.js")

const main = (input) => {
    let entity = []
    if(input){
        const len = input.length
        for (let i = 0; i < len; i++) {
            let data = inputData(input[i])
            entity.push(data)
        }
    }
    return entity
}

module.exports.main = main
