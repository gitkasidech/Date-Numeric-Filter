const ConditionRatio = (value,unitFirst,unitLast,cond) =>{
    let data
    if(value.length==1&&unitFirst=="price"){
        data = {
            type: "condition",
            condition: cond,
            first: {
                value: value[0]
            },
            last: {
                value: "1",
                unit: unitLast
            }
        }
    }
    return data
    
}

module.exports.ConditionRatio = ConditionRatio
