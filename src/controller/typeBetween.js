const typeBetween = (value,unit,cond) => {
    let data
    if(cond=="between"){
        value[0] = (parseInt(value[0])+1)+''
        value[1] = (parseInt(value[0])+8)+'' 
    }
    if(!unit){
        data = {
            type: "between",
            start:{
                value: value[0]
            },
            end:{
                value: value[1]
            }
        }
    }
    else{
        data = {
            type: "between",
            start: {
                value: value[0],
                unit: unit
            },
            end: {
                value: value[1],
                unit: unit
            }
        }
    }
    
    return data
}

module.exports.typeBetween= typeBetween