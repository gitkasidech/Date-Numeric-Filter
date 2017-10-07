const typeCond = (value,unit,cond) =>{
    let data
    if(!unit){
        data = {
            type: "condition",
            condition: cond,
            value: value
        }
    }
    else if(!value){
        data = {
            type: "condition",
            condition: cond,
            value: "1",
            unit: unit
        }
    }
    else{
        data = {
            type: "condition",
            condition: cond,
            value: value,
            unit: unit
        }
    }
    return data
}

module.exports.typeCond= typeCond