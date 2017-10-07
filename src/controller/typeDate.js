const moment = require('moment')
const typeDate = (value,unit,cond,asNumber) =>{
    let len,data
    if(value)
        len = value.length
    if(unit.indexOf("datetime") !=-1){
        if(unit.indexOf("morning_afternoon") !=-1){
            if (value[0] <= 6)
                value[0] += 12
            data = {
                type: "single",
                value: moment().format('ddd,DD-MM-YYYY')+" "+value[0]+":00",
                unit: "datetime"
            }

        }
        else{
            data = {
                type: "single",
                value: moment().format('ddd,DD-MM-YYYY HH:mm'),
                unit: unit
            }
        } 
    }
    else if(cond=="next" && unit=="month"){
        let thismonth = moment().format("M")
        if(len&&value[0]>1)
            thismonth = (parseInt(thismonth)+parseInt(value[0])-1)
        data = {
            type: "single",
            value: moment().month(parseInt(thismonth)).format("MMMM"),
            unit: unit
        }
    }
    else if(cond=="next" && unit=="week"){
        data = {
            type: "between",
            start:{
                value: moment().weekday(7).format('ddd,DD-MM-YYYY'),
                unit: unit
            },
            end:{
                value: moment().weekday(7+6).format('ddd,DD-MM-YYYY'),
                unit: unit
            }
        }
    }
    else if(cond=="next" && unit=="day"){
        let thisday = moment().date()
        data = {
            type: "single",
            value: moment().set('date', thisday+1).format('ddd,DD-MM-YYYY'),
            unit: unit
        }
    }
    else if(cond=="last" && unit=="day"){
        let thisday = moment().date()
        data = {
            type: "single",
            value: moment().set('date', thisday-1).format('ddd,DD-MM-YYYY'),
            unit: unit
        }
    }
    else if(cond=="last" && unit.indexOf("day") != -1 && unit.indexOf("morning") != -1){
        let thisday = moment().date()
        data = {
            type: "between",
            start: {
                value: moment().set('date', thisday - 1).format('ddd,DD-MM-YYYY')+" 6:00",
                unit: "dateTime"
            },
            end: {
                value: moment().set('date', thisday - 1).format('ddd,DD-MM-YYYY')+" 11:00",
                unit: "dateTime"
            }
        }
    }
    else if(len==2 && unit=="day"){
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
    else if(len==2 && unit=="time"){
        const timeStart = value[0].split(".")
        const timeEnd = value[1].split(".")
        data = {
            type: "between",
            start: {
                value: moment().set('hour', timeStart[0]).set('minute', timeStart[1]).format("kk:mm"),
                unit: unit
            },
            end: {
                value: moment().set('hour', timeEnd[0]).set('minute', timeEnd[1]).format("kk:mm"),
                unit: unit
            }
        }
    }
    else if(len==2 && unit.indexOf("month") !=-1){
        console.log(value[0],value[1],asNumber[0])
        data = {
            type: "single",
            value: moment().set({'year': parseInt(value[1])-543, 'month': parseInt(asNumber[0])-1,'date':parseInt(value[0])}).format("ddd,DD-MM-YYYY"),
            unit: "date"
        }
    }
    else if(len==2 && unit.length==2){
        value[0] = parseInt(value[0])
        value[1] = parseInt(value[1])
        if(unit[0]=="morning_afternoon"){
            if(value[0]<=6)
                value[0]+=12
        }
        else if(unit[0] == "evening") 
            value[0]+=18

        if(unit[1] == "morning_afternoon"){
            if (value[1] <= 6)
                value[1] += 12
        }
        else if(unit[1] == "evening") 
                value[1]+=18    
        data = {
            type: "between",
            start: {
                value: moment().set('hour', value[0]).set('minute', 0).format("kk:mm"),
                unit: "time"
            },
            end: {
                value: moment().set('hour', value[1]).set('minute', 0).format("kk:mm"),
                unit: "time"
            }
        }
    }
    else if(unit.length==2&&cond=="to"&&asNumber.length==2){  
        asNumber[0] = parseInt(asNumber[0])
        asNumber[1] = parseInt(asNumber[1])
        if(unit[0]=="morning_afternoon"){
            if(asNumber[0]<=6)
            asNumber[0]+=12
        }
        else if(unit[0] == "evening") 
            asNumber[0]+=18

        if(unit[1] == "morning_afternoon"){
            if (asNumber[1] <= 6)
            asNumber[1] += 12
        }
        else if(unit[1] == "evening") 
            asNumber[1]+=18
            data = {
                type: "between",
                start: {
                    value: moment().set('hour', asNumber[0]).set('minute', 0).format("kk:mm"),
                    unit: "time"
                },
                end: {
                    value: moment().set('hour', asNumber[1]).set('minute', 0).format("kk:mm"),
                    unit: "time"
                }
            }
    }
    else if(cond=="next"){
        let thisdayUnit = moment().day(unit)
        let day = thisdayUnit.format("e")
        let nextThisday = moment().weekday(7+parseInt(day))
        data = {
            type: "single",
            value: nextThisday.format('ddd,DD-MM-YYYY'),
            unit: "day"
        }
    }
    else if(cond=="last"){
        let thisdayUnit = moment().day(unit)
        let thisday = moment().day()
        let day = thisdayUnit.format("e")
        let lastThisday = moment().weekday(parseInt(thisday)-parseInt(day))
        data = {
            type: "single",
            value: lastThisday.format('ddd,DD-MM-YYYY'),
            unit: "day"
        }
    }
    else if(cond=="this"){
        let thisdayUnit = moment().day(unit)
        data = {
            type: "single",
            value: thisdayUnit.format('ddd,DD-MM-YYYY'),
            unit: "day"
        }
    }
    else if(cond=="between"){
        if(value){
            value[0] = (parseInt(value[0])+1)+''
            value[1] = (parseInt(value[0])+8)+'' 
        }
        else{
            value = []
            value[0] = "2"
            value[1] = "7"
        }
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
    else if(cond=="to"&&asNumber.length==1){
        data = {
            type: "between",
            start: {
                value: moment().set('hour',1).set('minute', 0).format("kk:mm"),
                unit: "time"
            },
            end: {
                value: moment().set('hour',parseInt(asNumber[0])).set('minute', 0).format("kk:mm"),
                unit: "time"
            }
        }
    }
    else if(unit=="night"&&cond=="notless_than"&&asNumber.length==1){  
        data = {
            type: "condition",
            condition: cond[0],
            value: moment().set('hour', parseInt(asNumber[0])).set('minute', 0).format("kk:mm"),
            unit: "time"
        }
    }
    else if(cond=="more_than"&&!value){
        data = {
            type: "condition",
            condition: cond,
            value: "1",
            unit: unit
        }
    }
    else if(cond=="more_than"&&unit=="morning_afternoon"){
        value[0] = parseInt(value[0])
        if(value[0]<=6)
            value[0]+=12
        data = {
            type: "condition",
            condition: cond,
            value: moment().set('hour',value[0]).set('minute', 0).format("kk:mm"),
            unit: unit
        }
    }
    else if(len==3){
        if(parseInt(value[2])/1000 <1)
             value[2] = parseInt(value[2])+2000+''
        data = {
            type: "single",
            value: moment(value[2]+"-"+value[1]+"-"+value[0]).format("ddd,DD-MM-YYYY"),
            unit: "date"
        }
    }
    else if(len==4){
        const h1 = parseInt(value[0])
        const m1 = parseInt(value[1])
        const h2 = parseInt(value[2])
        const m2 = parseInt(value[3])
        data = {
            type: "between",
            start: {
                value: moment().set('hour',h1).set('minute', m1).format("kk:mm"),
                unit: "time"
            },
            end: {
                value: moment().set('hour',h2).set('minute', m2).format("kk:mm"),
                unit: "time"
            }
        }
    }
    else if(len==2){
        const h = parseInt(value[0])
        const m = parseInt(value[1])
        data = {
            type: "single",
            value: moment().set('hour',h).set('minute', m).format("kk:mm"),
            unit: "time"
        }
    }
    return data
}

module.exports.typeDate= typeDate