const {convertUnit,convertCond} = require("./convert")
const {single} = require("./typeSingle")
const {typeDate} = require("./typeDate")
const {typeBetween} = require("./typeBetween")
const {regex} = require("./regex")
const {ratio} = require("./typeRatio")
const {typeCond} = require("./typeCondition")
const {typeMoney} = require("./typeMoney")
const {ConditionRatio} = require("./typeConditionRatio")

const inputData = (input) => {
    let internet, money,other,entity,data,len,lenunit
    let inputUpper = input.toUpperCase()

    let [value,value_asNumber,unit_Internet,unit_Phone,unit_Money,unit_Date,unit_Cond,unit_Other,unit_Number] = regex(inputUpper)

    if (unit_Internet) {
        unit_Internet[0] = convertUnit(unit_Internet[0])
        if(value&&unit_Cond){
            unit_Cond[0] = convertCond(unit_Cond[0])
            data = typeCond(value[0],unit_Internet[0],unit_Cond[0])
        }   
        else if(unit_Cond){
            unit_Cond[0] = convertCond(unit_Cond[0])
            data = typeCond(value,unit_Internet[0],unit_Cond[0])
        }    
        else if(value)
            data = single(value[0],value_asNumber,unit_Internet[0])
        else if(!value)
            data = single("1",value_asNumber,unit_Internet[0])
        entity = {Internet: data}
    }
    else if(unit_Phone){
        const phone = unit_Phone[0]
        unit_Phone[0] = convertUnit(unit_Phone[0])
        if(unit_Phone[0]==phone)
            data = single(unit_Phone[0],value_asNumber,null)
        else if(unit_Cond){
            unit_Cond[0] = convertCond(unit_Cond[0])
            data = typeCond(value[0],unit_Phone[0],unit_Cond[0])
        }   
        else
            data = single(value[0],value_asNumber,unit_Phone[0])
        entity = {Phone: data} 
    }
    else if (unit_Other) {
        unit_Other[0] = convertUnit(unit_Other[0])
        data = single(value[0],value_asNumber,unit_Other[0])
        entity = {Other: data}
    } 
    else if (unit_Money&&unit_Date!="บ่าย") {
        unit_Money[0] = convertUnit(unit_Money[0])
        if(unit_Cond&&unit_Date){
            unit_Date[0] = convertUnit(unit_Date[0])
            unit_Cond[0] = convertCond(unit_Cond[0])
            data = ConditionRatio(value,unit_Money[0],unit_Date[0],unit_Cond[0])
        }
        else if(unit_Date){
            unit_Date[0] = convertUnit(unit_Date[0])
            data = ratio(value,unit_Money[0],unit_Date[0],unit_Cond)
        }
        else if(value&&unit_Cond){
            unit_Cond[0] = convertCond(unit_Cond[0])
            data = typeMoney(value,unit_Money[0],unit_Cond[0])
        }     
        else
            data = single(value[0],value_asNumber,unit_Money[0])
        entity = {Money: data} 
    }
    
    else if (unit_Date&&!unit_Number) {
        unit_Date[0] = convertUnit(unit_Date[0])
        if(value)
            len = value.length
        if(unit_Date)
            lenunit = unit_Date.length
        if(len==2){
            if(value_asNumber){
                value_asNumber[0] = convertCond(value_asNumber[0])
                data = typeDate(value,unit_Date,unit_Cond,value_asNumber)
            } 
            else if(unit_Date.length==1)
                data = typeDate(value,unit_Date[0],unit_Cond,value_asNumber)
               
            else{
                unit_Date[1] = convertUnit(unit_Date[1])
                data = typeDate(value,unit_Date,unit_Cond,value_asNumber)
            }
        }
        else if(len==3||len==4)
            data = typeDate(value,unit_Date,unit_Cond,value_asNumber)
        else if(value_asNumber&&unit_Cond){
            unit_Cond[0] = convertCond(unit_Cond[0])
            value_asNumber[0] = convertCond(value_asNumber[0])
            if(unit_Date.length==2&&value_asNumber.length==2){
                unit_Date[1] = convertUnit(unit_Date[1])
                value_asNumber[1] = convertCond(value_asNumber[1])
            }    
            data = typeDate(value,unit_Date,unit_Cond,value_asNumber)
        }
        else if(lenunit==2&&unit_Cond){
            unit_Date[1] = convertUnit(unit_Date[1])
            unit_Cond[0] = convertCond(unit_Cond[0])
            data = typeDate(value,unit_Date,unit_Cond[0],value_asNumber)
        }  
        else if(value&&unit_Cond){
            unit_Cond[0] = convertCond(unit_Cond[0])
            data = typeDate(value,unit_Date[0],unit_Cond[0],value_asNumber)
        } 
        
        else if(value_asNumber){
            value_asNumber[0] = convertCond(value_asNumber[0])
            data = single(value,value_asNumber,unit_Date[0])
        }
        
        else if(unit_Cond){
            unit_Cond[0] = convertCond(unit_Cond[0])
            data = typeDate(value,unit_Date[0],unit_Cond[0],value_asNumber)
        }  
        else if(!value)
            data = single("1",value_asNumber,unit_Date[0])
        else
            data = single(value[0],value_asNumber,unit_Date[0])
        entity = {Date_Time: data} 
    }
    else{
        if(value)
            len = value.length
        if(len==2) 
            data = typeBetween(value,unit_Number,unit_Cond)   
        else if(unit_Cond){
            unit_Cond[0] = convertCond(unit_Cond[0])
            if(unit_Cond[0]=="between")
                data = typeBetween(value,unit_Number,unit_Cond[0])
            else
                data = typeCond(value[0],unit_Number,unit_Cond[0])
        }
        else if(unit_Date){
            unit_Date[0] = convertUnit(unit_Date[0])
            data = data = ratio(value,null,unit_Date[0],unit_Cond) 
        }
        else if(unit_Number){
            unit_Number[0] = convertUnit(unit_Number[0])
            data = single(value[0],value_asNumber,unit_Number[0])
        }
        else
            data = single(value[0],value_asNumber,null)
        entity = {Number: data} 
    }

    return entity
}

module.exports.inputData = inputData


