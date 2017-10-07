const regex = require('./regexCheckInput');
const {main} = require('./app')
export const regular1 = (req,res) =>{
    let newData,data
    const input = req.body.messageData
    for (let n in regex) {
        newData = input.match(regex[n])
        if(newData)
            data =  newData
    }
    console.log(data)
    const output = main(data)
    console.log(JSON.stringify(output))
    res.json(output)
}