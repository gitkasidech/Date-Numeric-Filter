const ratio = (value,unitFirst,unitLast,cond) =>{
    let data
    if(!value){
        data = {
            type: "ratio",
            first: {
                value: "1",
                unit: unitFirst
            },
            last: {
                value: "1",
                unit: unitLast
            }
        }
    }
    else if(value.length==1&&unitFirst==null){
        data = {
            type: "ratio",
            first: {
                value: value[0]
            },
            last: {
                value: "1",
                unit: unitLast
            }
        }
    }
    else if(value.length==1){
        data = {
            type: "ratio",
            first: {
                value: value[0],
                unit: unitFirst
            },
            last: {
                value: "1",
                unit: unitLast
            }
        }
    }
    else{
        data = {
            type: "ratio",
            first: {
                value: value[0],
                unit: unitFirst
            },
            last: {
                value: value[1],
                unit: unitLast
            }
        }
    }
    return data
    
}

module.exports.ratio = ratio
