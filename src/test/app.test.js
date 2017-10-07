const {main} = require('../controller/app')
const moment = require('moment')
test('checkcase single_Internet', () => {
    const input = ["4GB"]
    let data = {
        Internet:{ 
            type: "single", 
            value: "4", 
            unit: "GB" 
        }
    }
    expect(JSON.stringify(main(input))).toBe(JSON.stringify([data]))
})

test('checkcase single_Other', () => {
    const input = ["3 ประเทศ"]
    let data = {
        "Other": {
            "type": "single",
            "value": "3",
            "unit": "country"
        }
    } 
    expect(JSON.stringify(main(input))).toBe(JSON.stringify([data]))
})

test('checkcase singlePrice_Money', () => {
    const input = ["ราคา 399"]
    let data = {
        "Money": {
          "type": "single",
          "value": "399"
        }
      }
    expect(JSON.stringify(main(input))).toBe(JSON.stringify([data]))
})

test('checkcase single_Money', () => {
    const input = ["6 บาท"]
    let data = {
        "Money": {
            "type": "single",
            "value": "6",
            "unit": "bath"
        }
    }
    expect(JSON.stringify(main(input))).toBe(JSON.stringify([data]))
})

test('checkcase single_Date', () => {
    const input = ["10 วัน"]
    let data = {
        "Date_Time": {
            "type": "single",
            "value": "10",
            "unit": "day"
        }
    }
    expect(JSON.stringify(main(input))).toBe(JSON.stringify([data]))
})

test('checkcase singleNow_Date', () => {
    const input = ["ตอนนี้"]
    let data = {
        "Date_Time": {
          "type": "single",
          "value": moment().format('ddd,DD-MM-YYYY HH:mm'),
          "unit": "datetime"
        }
      }
    expect(JSON.stringify(main(input))).toBe(JSON.stringify([data]))
})

test('checkcase betweenWeek1_Date', () => {
    const input = ["สัปดาห์หน้า"]
    let data = {
        "Date_Time": {
          "type": "between",
          "start": {
            "value": moment().weekday(7).format('ddd,DD-MM-YYYY'),
            "unit": "week"
          },
          "end": {
            "value": moment().weekday(7+6).format('ddd,DD-MM-YYYY'),
            "unit": "week"
          }
        }
      }
    expect(JSON.stringify(main(input))).toBe(JSON.stringify([data]))
})

test('checkcase betweenWeek2_Date', () => {
    const input = ["อาทิตย์หน้า"]
    let data = {
        "Date_Time": {
          "type": "between",
          "start": {
            "value": moment().weekday(7).format('ddd,DD-MM-YYYY'),
            "unit": "week"
          },
          "end": {
            "value": moment().weekday(7+6).format('ddd,DD-MM-YYYY'),
            "unit": "week"
          }
        }
      }
    expect(JSON.stringify(main(input))).toBe(JSON.stringify([data]))
})

test('checkcase singleNextSat_Date', () => {
    const input = ["เสาร์หน้า"]
    let thisdayUnit = moment().day("Saturday")
    let day = thisdayUnit.format("e")
    let nextThisday = moment().weekday(7+parseInt(day))
    let data = {
        "Date_Time": {
          "type": "single",
          "value": nextThisday.format('ddd,DD-MM-YYYY'),
          "unit": "day"
        }
      }
    expect(JSON.stringify(main(input))).toBe(JSON.stringify([data]))
})

test('checkcase singleNextMonth_Date', () => {
    const input = ["เดือนหน้า"]
    let thismonth = moment().format("M")
    let data =  {
        "Date_Time": {
          "type": "single",
          "value": moment().month(parseInt(thismonth)).format("MMMM"),
          "unit": "month"
        }
      }
    expect(JSON.stringify(main(input))).toBe(JSON.stringify([data]))
})

test('checkcase singleWeek1_Date', () => {
    const input = ["1อาทิตย์"]
    let data =  {
        "Date_Time": {
          "type": "single",
          "value": "1",
          "unit": "week"
        }
      }
    expect(JSON.stringify(main(input))).toBe(JSON.stringify([data]))
})

test('checkcase singleMonth_Date', () => {
    const input = ["1เดือน"]
    let data =  {
        "Date_Time": {
          "type": "single",
          "value": "1",
          "unit": "month"
        }
      }
    expect(JSON.stringify(main(input))).toBe(JSON.stringify([data]))
})

test('checkcase singleThisSat_Date', () => {
    const input = ["วันเสาร์นี้"]
    let thisdayUnit = moment().day("Saturday")
    let data =  {
        "Date_Time": {
          "type": "single",
          "value": thisdayUnit.format('ddd,DD-MM-YYYY'),
          "unit": "day"
        }
    }
    expect(JSON.stringify(main(input))).toBe(JSON.stringify([data]))
})

test('checkcase singleTomorrow_Date', () => {
    const input = ["พรุ่งนี้"]
    let thisday = moment().date()
    let data =  {
        "Date_Time": {
          "type": "single",
          "value": moment().set('date', thisday+1).format('ddd,DD-MM-YYYY'),
          "unit": "day"
        }
    }
    expect(JSON.stringify(main(input))).toBe(JSON.stringify([data]))
})

test('checkcase conditionMoreThan_Date', () => {
    const input = ["หลายวัน"]
    let data =   {
        "Date_Time": {
          "type": "condition",
          "condition": "more_than",
          "value": "1",
          "unit": "day"
        }
      }
    expect(JSON.stringify(main(input))).toBe(JSON.stringify([data]))
})

test('checkcase singleWeek2_Date', () => {
    const input = ["3 สัปดาห์"]
    let data =   {
        "Date_Time": {
          "type": "single",
          "value": "3",
          "unit": "week"
        }
      }
    expect(JSON.stringify(main(input))).toBe(JSON.stringify([data]))
})

test('checkcase betweenDay_Date', () => {
    const input = ["4-5 วัน"]
    let data =   {
        "Date_Time": {
          "type": "between",
          "start": {
            "value": "4",
            "unit": "day"
          },
          "end": {
            "value": "5",
            "unit": "day"
          }
        }
      }
    expect(JSON.stringify(main(input))).toBe(JSON.stringify([data]))
})

test('checkcase betweenMoreLess_Date', () => {
    const input = ["20กว่าวัน"]
    let data =   {
        "Date_Time": {
          "type": "between",
          "start": {
            "value": "21",
            "unit": "day"
          },
          "end": {
            "value": "29",
            "unit": "day"
          }
        }
      }
    expect(JSON.stringify(main(input))).toBe(JSON.stringify([data]))
})

test('checkcase singlePriceComma_Money', () => {
    const input = ["ราคา1,990"]
    let data =   {
        "Money": {
          "type": "single",
          "value": "1,990"
        }
      }
    expect(JSON.stringify(main(input))).toBe(JSON.stringify([data]))
})

test('checkcase single_Number', () => {
    const input = ["899"]
    let data =    {
        "Number": {
          "type": "single",
          "value": "899"
        }
      }
    expect(JSON.stringify(main(input))).toBe(JSON.stringify([data]))
})

test('checkcase single*3*3#_Phone', () => {
    const input = ["*777*903#"]
    let data =   {
        "Phone": {
          "type": "single",
          "value": "*777*903#"
        }
      }
    expect(JSON.stringify(main(input))).toBe(JSON.stringify([data]))
})

test('checkcase ratioBath/Week_Money', () => {
    const input = ["144 บาท/อาทิตย์"]
    let data =   {
        "Money": {
          "type": "ratio",
          "first": {
            "value": "144",
            "unit": "bath"
          },
          "last": {
            "value": "1",
            "unit": "week"
          }
        }
      }
    expect(JSON.stringify(main(input))).toBe(JSON.stringify([data]))
})

test('checkcase ratioBath/Day_Money', () => {
    const input = ["15 บาท/วัน"]
    let data =   {
        "Money": {
          "type": "ratio",
          "first": {
            "value": "15",
            "unit": "bath"
          },
          "last": {
            "value": "1",
            "unit": "day"
          }
        }
      }
    expect(JSON.stringify(main(input))).toBe(JSON.stringify([data]))
})

test('checkcase singleMin_Date', () => {
    const input = ["60 นาที"]
    let data =   {
        "Date_Time": {
          "type": "single",
          "value": "60",
          "unit": "minute"
        }
      }
    expect(JSON.stringify(main(input))).toBe(JSON.stringify([data]))
})

test('checkcase singleMessage_Phone', () => {
    const input = ["50 ข้อความ"]
    let data =   {
        "Phone": {
          "type": "single",
          "value": "50",
          "unit": "message"
        }
      }
    expect(JSON.stringify(main(input))).toBe(JSON.stringify([data]))
})

test('checkcase singleBaht_Money', () => {
    const input = ["19 Baht"]
    let data =   {
        "Money": {
          "type": "single",
          "value": "19",
          "unit": "bath"
        }
      }
    expect(JSON.stringify(main(input))).toBe(JSON.stringify([data]))
})

test('checkcase single*3*3#_Phone', () => {
    const input = ["*777*148#"]
    let data =   {
        "Phone": {
          "type": "single",
          "value": "*777*148#"
        }
      }
    expect(JSON.stringify(main(input))).toBe(JSON.stringify([data]))
})

test('checkcase single*3*3*6#_Phone', () => {
    const input = ["*777*784*151197#"]
    let data =   {
        "Phone": {
          "type": "single",
          "value": "*777*784*151197#"
        }
      }
    expect(JSON.stringify(main(input))).toBe(JSON.stringify([data]))
})

test('checkcase betweenBath_Money', () => {
    const input = ["40 กว่าบาท"]
    let data =   {
        "Money": {
          "type": "between",
          "start": {
            "value": "41",
            "unit": "bath"
          },
          "end": {
            "value": "49",
            "unit": "bath"
          }
        }
      }
    expect(JSON.stringify(main(input))).toBe(JSON.stringify([data]))
})

test('checkcase singleNoValue_Internet', () => {
    const input = ["เป็น GB"]
    let data =   {
        "Internet": {
          "type": "single",
          "value": "1",
          "unit": "GB"
        }
      }
    expect(JSON.stringify(main(input))).toBe(JSON.stringify([data]))
})

test('checkcase conditionNotMoreThan_Number', () => {
    const input = ["ไม่เกิน 100"]
    let data =   {
        "Number": {
          "type": "condition",
          "condition": "notmore_than",
          "value": "100"
        }
      }
    expect(JSON.stringify(main(input))).toBe(JSON.stringify([data]))
})

test('checkcase singleMapThaiWordGB_Internet', () => {
    const input = ["1กิ้ก"]
    let data =   {
        "Internet": {
          "type": "single",
          "value": "1",
          "unit": "GB"
        }
      }
    expect(JSON.stringify(main(input))).toBe(JSON.stringify([data]))
})

test('checkcase singleMB_Internet', () => {
    const input = ["500MB"]
    let data =   {
        "Internet": {
          "type": "single",
          "value": "500",
          "unit": "MB"
        }
      }
    expect(JSON.stringify(main(input))).toBe(JSON.stringify([data]))
})

test('checkcase ratioUnit/Month_Number', () => {
    const input = ["เดือนละ1500"]
    let data =   {
        "Number": {
          "type": "ratio",
          "first": {
            "value": "1500"
          },
          "last": {
            "value": "1",
            "unit": "month"
          }
        }
      }
    expect(JSON.stringify(main(input))).toBe(JSON.stringify([data]))
})

test('checkcase 2 single_Date', () => {
    const input = ["1วัน","3วัน"]
    let data =   [{
        "Date_Time": {
          "type": "single",
          "value": "1",
          "unit": "day"
        }
      },
      {
        "Date_Time": {
          "type": "single",
          "value": "3",
          "unit": "day"
        }
      }]   
    expect(JSON.stringify(main(input))).toBe(JSON.stringify(data))
})

test('checkcase ratioBath/Day_Money & singleMessage_Phone', () => {
    const input = ["15 บาท/วัน","50 ข้อความ"]
    let data =   [{"Money":{"type":"ratio","first":{"value":"15","unit":"bath"},"last":{"value":"1","unit":"day"}}},{"Phone":{"type":"single","value":"50","unit":"message"}}]   
    expect(JSON.stringify(main(input))).toBe(JSON.stringify(data))
})

test('checkcase conditionMoreThan5p.m_Date', () => {
    const input = ["หลัง 5 โมง"]
    let data =   {
        "Date_Time": {
          "type": "condition",
          "condition": "more_than",
          "value": "17:00",
          "unit": "morning_afternoon"
        }
      }
    
    expect(JSON.stringify(main(input))).toBe(JSON.stringify([data]))
})

test('checkcase ratioBath/ManyDay_Money', () => {
    const input = ["5 บาท / 2 วัน"]
    let data = {"Money":{"type":"ratio","first":{"value":"5","unit":"bath"},"last":{"value":"2","unit":"day"}}}
    expect(JSON.stringify(main(input))).toBe(JSON.stringify([data]))
})

test('checkcase single*3*4#_Phone', () => {
    const input = ["*777*4005#"]
    let data = {"Phone":{"type":"single","value":"*777*4005#"}}
    expect(JSON.stringify(main(input))).toBe(JSON.stringify([data]))
})

test('checkcase betweenTime_Date', () => {
    const input = ["05.00 - 17.00น."]
    let data = {"Date_Time":{"type":"between","start":{"value":"05:00","unit":"time"},"end":{"value":"17:00","unit":"time"}}}
    expect(JSON.stringify(main(input))).toBe(JSON.stringify([data]))
})

test('checkcase singleAllDay_Date', () => {
    const input = ["ทั้งวัน"]
    let data = {"Date_Time":{"type":"single","value":"1","unit":"day"}}
    expect(JSON.stringify(main(input))).toBe(JSON.stringify([data]))
})

test('checkcase singleMbps_Date', () => {
    const input = ["1Mbps"]
    let data = {"Internet":{"type":"single","value":"1","unit":"Mbps"}}
    expect(JSON.stringify(main(input))).toBe(JSON.stringify([data]))
})

test('checkcase ratioSatang/Min_Date', () => {
    const input = ["นาทีละ 25 สต."]
    let data = {"Money":{"type":"ratio","first":{"value":"25","unit":"satang"},"last":{"value":"1","unit":"minute"}}}
    expect(JSON.stringify(main(input))).toBe(JSON.stringify([data]))
})

test('checkcase singleHour_Date & singleDay_Date', () => {
    const input = ["24 ชม.","7 วัน"]
    let data = [{"Date_Time":{"type":"single","value":"24","unit":"hour"}},{"Date_Time":{"type":"single","value":"7","unit":"day"}}]
    expect(JSON.stringify(main(input))).toBe(JSON.stringify(data))
})

test('checkcase single1Day_Date', () => {
    const input = ["วันเดียว"]
    let data = {"Date_Time":{"type":"single","value":"1","unit":"day"}}
    expect(JSON.stringify(main(input))).toBe(JSON.stringify([data]))
})

test('checkcase single4digitBath_Money', () => {
    const input = ["1500บาท"]
    let data = {"Money":{"type":"single","value":"1500","unit":"bath"}}
    expect(JSON.stringify(main(input))).toBe(JSON.stringify([data]))
})

test('checkcase single1.5GB_Internet', () => {
    const input = ["1.5GB"]
    let data = {"Internet":{"type":"single","value":"1.5","unit":"GB"}}
    expect(JSON.stringify(main(input))).toBe(JSON.stringify([data]))
})

test('checkcase singleMB_Internet & singleHour_Date', () => {
    const input = ["500MB","24ชั่วโมง"]
    let data = [{"Internet":{"type":"single","value":"500","unit":"MB"}},{"Date_Time":{"type":"single","value":"24","unit":"hour"}}]
    expect(JSON.stringify(main(input))).toBe(JSON.stringify(data))
})

test('checkcase singleBath_Money & singleMbps_Internet', () => {
    const input = ["99 บาท","1mbps"]
    let data = [{"Money":{"type":"single","value":"99","unit":"bath"}},{"Internet":{"type":"single","value":"1","unit":"Mbps"}}]
    expect(JSON.stringify(main(input))).toBe(JSON.stringify(data))
})

test('checkcase singleNoValueWeek_Date', () => {
    const input = ["สัปดาห์"]
    let data = {"Date_Time":{"type":"single","value":"1","unit":"week"}}
    expect(JSON.stringify(main(input))).toBe(JSON.stringify([data]))
})

test('checkcase ratioBath/Week_Money2', () => {
    const input = ["59 บาท/สัปดาห์"]
    let data = {"Money":{"type":"ratio","first":{"value":"59","unit":"bath"},"last":{"value":"1","unit":"week"}}}
    expect(JSON.stringify(main(input))).toBe(JSON.stringify([data]))
})

test('checkcase conditionNotMoreThanBath_Money', () => {
    const input = ["ไม่เกิน5บาท"]
    let data = {"Money":{"type":"condition","condition":"notmore_than","value":"5","unit":"bath"}}
    expect(JSON.stringify(main(input))).toBe(JSON.stringify([data]))
})

test('checkcase singleNoValueMonth_Date', () => {
    const input = ["เดือน"]
    let data = {"Date_Time":{"type":"single","value":"1","unit":"month"}}
    expect(JSON.stringify(main(input))).toBe(JSON.stringify([data]))
})

test('checkcase ratioNoValueBothBath/Min_Money', () => {
    const input = ["นาทีละบาท"]
    let data = {"Money":{"type":"ratio","first":{"value":"1","unit":"bath"},"last":{"value":"1","unit":"minute"}}}
    expect(JSON.stringify(main(input))).toBe(JSON.stringify([data]))
})

test('checkcase betweenToMidnight_Date', () => {
    const input = ["ถึงเที่ยงคืน"]
    let data = {"Date_Time":{"type":"between","start":{"value":"01:00","unit":"time"},"end":{"value":"24:00","unit":"time"}}}
    expect(JSON.stringify(main(input))).toBe(JSON.stringify([data]))
})

test('checkcase ratioBath/Day_Money & ratioSatang/Min_Money', () => {
    const input = ["7 บาท/วัน","นาทีละ 7 สต"]
    let data = [{"Money":{"type":"ratio","first":{"value":"7","unit":"bath"},"last":{"value":"1","unit":"day"}}},{"Money":{"type":"ratio","first":{"value":"7","unit":"satang"},"last":{"value":"1","unit":"minute"}}}]
    expect(JSON.stringify(main(input))).toBe(JSON.stringify(data))
})

test('checkcase ratioBath/Day_Money & singleSatang_Money', () => {
    const input = ["7 บาท/วัน","35 สต."]
    let data = [{"Money":{"type":"ratio","first":{"value":"7","unit":"bath"},"last":{"value":"1","unit":"day"}}},{"Money":{"type":"single","value":"35","unit":"satang"}}]
    expect(JSON.stringify(main(input))).toBe(JSON.stringify(data))
})

test('checkcase conditionNotMoreThanBath_Money & conditionNotLessThanGB_Internet', () => {
    const input = ["ไม่เกิน 50 บาท","2GB ขึ้นไป"]
    let data = [{"Money":{"type":"condition","condition":"notmore_than","value":"50","unit":"bath"}},{"Internet":{"type":"condition","condition":"notless_than","value":"2","unit":"GB"}}]
    expect(JSON.stringify(main(input))).toBe(JSON.stringify(data))
})

test('checkcase conditionNotLessThanGB_Internet', () => {
    const input = ["3GB ขึ้น"]
    let data = {"Internet":{"type":"condition","condition":"notless_than","value":"3","unit":"GB"}}
    expect(JSON.stringify(main(input))).toBe(JSON.stringify([data]))
})

test('checkcase singleAllWeek_Date', () => {
    const input = ["ทั้งสัปดาห์"]
    let data = {"Date_Time":{"type":"single","value":"1","unit":"week"}}
    expect(JSON.stringify(main(input))).toBe(JSON.stringify([data]))
})

test('checkcase ratioBath/Min_Money NoValue', () => {
    const input = ["นาที 20 บาท"]
    let data = {"Money":{"type":"ratio","first":{"value":"20","unit":"bath"},"last":{"value":"1","unit":"minute"}}}
    expect(JSON.stringify(main(input))).toBe(JSON.stringify([data]))
})

test('checkcase conditionSince_Date', () => {
    const input = ["ตั้งแต่ตีห้า"]
    let data = {"Date_Time":{"type":"condition","condition":"notless_than","value":"05:00","unit":"time"}}
    expect(JSON.stringify(main(input))).toBe(JSON.stringify([data]))
})

test('checkcase conditionManyGB_Date NoValue+Thiaword', () => {
    const input = ["หลายๆกิ๊ก"]
    let data = {"Internet":{"type":"condition","condition":"more_than","value":"1","unit":"GB"}}
    expect(JSON.stringify(main(input))).toBe(JSON.stringify([data]))
})

test('checkcase between2Unit_Date', () => {
    const input = ["ตี 5 - 5 โมงเย็น"]
    let data = {"Date_Time":{"type":"between","start":{"value":"05:00","unit":"time"},"end":{"value":"17:00","unit":"time"}}}
    expect(JSON.stringify(main(input))).toBe(JSON.stringify([data]))
})

test('checkcase between2Unit_Date NoValue', () => {
    const input = ["ตีห้าถึงห้าโมงเย็น"]
    let data = {"Date_Time":{"type":"between","start":{"value":"05:00","unit":"time"},"end":{"value":"17:00","unit":"time"}}}
    expect(JSON.stringify(main(input))).toBe(JSON.stringify([data]))
})

test('checkcase singleB_Money & singlekbps_Internet', () => {
    const input = ["89B","512Kbps"]
    let data = [{"Money":{"type":"single","value":"89","unit":"bath"}},{"Internet":{"type":"single","value":"512","unit":"kbps"}}]
    expect(JSON.stringify(main(input))).toBe(JSON.stringify(data))
})

test('checkcase singleHr_Money & singleBath_Internet', () => {
    const input = ["24 ชม","299 บาท"]
    let data = [{"Date_Time":{"type":"single","value":"24","unit":"hour"}},{"Money":{"type":"single","value":"299","unit":"bath"}}]
    expect(JSON.stringify(main(input))).toBe(JSON.stringify(data))
})

test('checkcase single1Year_Date', () => {
    const input = ["1 ปี"]
    let data = {"Date_Time":{"type":"single","value":"1","unit":"year"}}
    expect(JSON.stringify(main(input))).toBe(JSON.stringify([data]))
})

test('checkcase single_Number & singleMin_Date & singleGB_Internet', () => {
    const input = ["349","400 นาที","27 gb"]
    let data = [{"Number":{"type":"single","value":"349"}},{"Date_Time":{"type":"single","value":"400","unit":"minute"}},{"Internet":{"type":"single","value":"27","unit":"GB"}}]
    expect(JSON.stringify(main(input))).toBe(JSON.stringify(data))
})

test('checkcase conditionratioPrice/Month_Money Cheap', () => {
    const input = ["ถูกๆกว่า399 /เดือน"]
    let data = {"Money":{"type":"condition","condition":"less_than","first":{"value":"399"},"last":{"value":"1","unit":"month"}}}
    expect(JSON.stringify(main(input))).toBe(JSON.stringify([data]))
})

test('checkcase singleMin_Date & singleBath_Money', () => {
    const input = ["2,560 นาที","999 บาท"]
    let data = [{"Date_Time":{"type":"single","value":"2,560","unit":"minute"}},{"Money":{"type":"single","value":"999","unit":"bath"}}]
    expect(JSON.stringify(main(input))).toBe(JSON.stringify(data))
})

test('checkcase conditionMessage_Phone notmore_than', () => {
    const input = ["ไม่เกิน 5 ข้อความ"]
    let data = {"Phone":{"type":"condition","condition":"notmore_than","value":"5","unit":"message"}}
    expect(JSON.stringify(main(input))).toBe(JSON.stringify([data]))
})

test('checkcase conditionMessage_Phone more_than', () => {
    const input = ["เกิน10ข้อความ"]
    let data = {"Phone":{"type":"condition","condition":"more_than","value":"10","unit":"message"}}
    expect(JSON.stringify(main(input))).toBe(JSON.stringify([data]))
})

test('checkcase singleBath_Money บ', () => {
    const input = ["488 บ"]
    let data = {"Money":{"type":"single","value":"488","unit":"bath"}}
    expect(JSON.stringify(main(input))).toBe(JSON.stringify([data]))
})

test('checkcase singlekbps_Internet ', () => {
    const input = ["512 kbps"]
    let data = {"Internet":{"type":"single","value":"512","unit":"kbps"}}
    expect(JSON.stringify(main(input))).toBe(JSON.stringify([data]))
})

test('checkcase conditionMessage_Phone more_than', () => {
    const input = ["มากกว่า 100 ข้อความ"]
    let data = {"Phone":{"type":"condition","condition":"more_than","value":"100","unit":"message"}}
    expect(JSON.stringify(main(input))).toBe(JSON.stringify([data]))
})

test('checkcase betweenTime_Date โมง-ทุ่ม', () => {
    const input = ["5 โมงเย็น - 4 ทุ่ม"]
    let data = {"Date_Time":{"type":"between","start":{"value":"17:00","unit":"time"},"end":{"value":"22:00","unit":"time"}}}
    expect(JSON.stringify(main(input))).toBe(JSON.stringify([data]))
})

test('checkcase conditionGB_Internet หลายๆ', () => {
    const input = ["หลายๆGB"]
    let data = {"Internet":{"type":"condition","condition":"more_than","value":"1","unit":"GB"}}
    expect(JSON.stringify(main(input))).toBe(JSON.stringify([data]))
})

test('checkcase singlePercent_Number %', () => {
    const input = ["50%"]
    let data = {"Number":{"type":"single","value":"50","unit":"percent"}}
    expect(JSON.stringify(main(input))).toBe(JSON.stringify([data]))
})

test('checkcase single*3_Phone', () => {
    const input = ["*138"]
    let data = {"Phone":{"type":"single","value":"*138"}}
    expect(JSON.stringify(main(input))).toBe(JSON.stringify([data]))
})

test('checkcase betweenTime_Date ทุ่ม-โมง', () => {
    const input = ["3 ทุ่ม - 4 โมงเย็น"]
    let data = {"Date_Time":{"type":"between","start":{"value":"21:00","unit":"time"},"end":{"value":"16:00","unit":"time"}}}
    expect(JSON.stringify(main(input))).toBe(JSON.stringify([data]))
})

test('checkcase between_Number กว่า', () => {
    const input = ["10กว่า"]
    let data = {"Number":{"type":"between","start":{"value":"11"},"end":{"value":"19"}}}
    expect(JSON.stringify(main(input))).toBe(JSON.stringify([data]))
})

test('checkcase conditionGB_Internet more_than & condition_Number notmore_than', () => {
    const input = ["หลายๆGB","ไม่เกิน1,000"]
    let data = [{"Internet":{"type":"condition","condition":"more_than","value":"1","unit":"GB"}},{"Number":{"type":"condition","condition":"notmore_than","value":"1,000"}}]
    expect(JSON.stringify(main(input))).toBe(JSON.stringify(data))
})

test('checkcase singleTime_Date ตี', () => {
    const input = ["ตี 4"]
    let data = {"Date_Time":{"type":"single","value":"04:00","unit":"time"}}
    expect(JSON.stringify(main(input))).toBe(JSON.stringify([data]))
})

test('checkcase between_Number', () => {
    const input = ["4.00-7.00"]
    let data = {"Number":{"type":"between","start":{"value":"4.00"},"end":{"value":"7.00"}}}
    expect(JSON.stringify(main(input))).toBe(JSON.stringify([data]))
})

test('checkcase singleDay_Date asNumber', () => {
    const input = ["สามวัน"]
    let data = {"Date_Time":{"type":"single","value":"3","unit":"day"}}
    expect(JSON.stringify(main(input))).toBe(JSON.stringify([data]))
})

test('checkcase singleGB_Internet G', () => {
    const input = ["32G"]
    let data = {"Internet":{"type":"single","value":"32","unit":"GB"}}
    expect(JSON.stringify(main(input))).toBe(JSON.stringify([data]))
})

test('checkcase singleMonth_Date หน้า', () => {
    const input = ["10 เดือนหน้า"]
    let data = {"Date_Time":{"type":"single","value":"August","unit":"month"}}
    expect(JSON.stringify(main(input))).toBe(JSON.stringify([data]))
})

test('checkcase single_Date มิถุนายน', () => {
    const input = ["13 มิถุนายน 2560"]
    let data = {"Date_Time":{"type":"single","value":"Tue,13-06-2017","unit":"date"}}
    expect(JSON.stringify(main(input))).toBe(JSON.stringify([data]))
})

test('checkcase singlePercent_Number % & singleBath_Money ฿', () => {
    const input = ["50%","499฿"]
    let data = [{"Number":{"type":"single","value":"50","unit":"percent"}},{"Money":{"type":"single","value":"499","unit":"bath"}}]
    expect(JSON.stringify(main(input))).toBe(JSON.stringify(data))
})

test('checkcase single_Date ../../.. & betweenTime_Date ..:..', () => {
    const input = ["03/09/17","04:00-07:00"]
    let data = [{"Date_Time":{"type":"single","value":"Sun,03-09-2017","unit":"date"}},{"Date_Time":{"type":"between","start":{"value":"04:00","unit":"time"},"end":{"value":"07:00","unit":"time"}}}]
    expect(JSON.stringify(main(input))).toBe(JSON.stringify(data))
})

test('checkcase ratioBath/Week_Money บาทต่อสัปดาห์', () => {
    const input = ["99 บาทต่อสัปดาห์"]
    let data = {"Money":{"type":"ratio","first":{"value":"99","unit":"bath"},"last":{"value":"1","unit":"week"}}}
    expect(JSON.stringify(main(input))).toBe(JSON.stringify([data]))
})

test('checkcase singleTime_Date โมง', () => {
    const input = ["9 โมง"]
    let data = {"Date_Time":{"type":"single","value":"09:00","unit":"time"}}
    expect(JSON.stringify(main(input))).toBe(JSON.stringify([data]))
})

test('checkcase singleDay_Date เมื่อวาน', () => {
    const input = ["เมื่อวาน"]
    let thisday = moment().date()
    let data = {"Date_Time":{"type":"single","value":moment().set('date', thisday-1).format('ddd,DD-MM-YYYY'),"unit":"day"}}
    expect(JSON.stringify(main(input))).toBe(JSON.stringify([data]))
})

test('checkcase singleMessage_Phone MMS', () => {
    const input = ["30 MMS"]
    let data = {"Phone":{"type":"single","value":"30","unit":"message"}}
    expect(JSON.stringify(main(input))).toBe(JSON.stringify([data]))
})

test('checkcase singlePiece_Other ใบ', () => {
    const input = ["1 ใบ"]
    let data = {"Other":{"type":"single","value":"1","unit":"piece"}}
    expect(JSON.stringify(main(input))).toBe(JSON.stringify([data]))
})

test('checkcase singleTime_Date บ่าย,NoValue', () => {
    const input = ["บ่ายสาม"]
    let data = {"Date_Time":{"type":"single","value":"15:00","unit":"time"}}
    expect(JSON.stringify(main(input))).toBe(JSON.stringify([data]))
})

test('checkcase betweenDay_Date ไม่กี่', () => {
    const input = ["ไม่กี่วัน"]
    let data = {"Date_Time":{"type":"between","start":{"value":"2","unit":"day"},"end":{"value":"7","unit":"day"}}}
    expect(JSON.stringify(main(input))).toBe(JSON.stringify([data]))
})

test('checkcase singleDay_Date ที่ผ่านมา', () => {
    const input = ["วันเสาร์ที่ผ่านมา"]
    let thisdayUnit = moment().day("Saturday")
    let thisday = moment().day()
    let day = thisdayUnit.format("e")
    let data = {"Date_Time":{"type":"single","value": moment().weekday(parseInt(thisday)-parseInt(day)).format('ddd,DD-MM-YYYY'),"unit":"day"}}
    expect(JSON.stringify(main(input))).toBe(JSON.stringify([data]))
})

test('checkcase singleNumber_Phone เบอร์', () => {
    const input = ["1เบอร์"]
    let data = {"Phone":{"type":"single","value":"1","unit":"number"}}
    expect(JSON.stringify(main(input))).toBe(JSON.stringify([data]))
})

test('checkcase betweenDateTime_Date เมื่อวานตอนเช้า', () => {
    const input = ["เมื่อวานตอนเช้า"]
    let thisday = moment().date()
    let data = {"Date_Time":{"type":"between","start":{"value":moment().set('date', thisday - 1).format('ddd,DD-MM-YYYY')+" 6:00","unit":"dateTime"},"end":{"value":moment().set('date', thisday - 1).format('ddd,DD-MM-YYYY')+" 11:00","unit":"dateTime"}}}
    expect(JSON.stringify(main(input))).toBe(JSON.stringify([data]))
})

test('checkcase singleDateTime_Date ตอนนี้,โมง', () => {
    const input = ["ตอนนี้ 9 โมง"]
    let data = {"Date_Time":{"type":"single","value": moment().format('ddd,DD-MM-YYYY ')+"9:00","unit":"datetime"}}
    expect(JSON.stringify(main(input))).toBe(JSON.stringify([data]))
})

test('checkcase single_Date ../../.... & singleTime_Date ..:..ตี', () => {
    const input = ["17/07/2016","08:34"]
    let data = [{"Date_Time":{"type":"single","value":"Sun,17-07-2016","unit":"date"}},{"Date_Time":{"type":"single","value":"08:34","unit":"time"}}]
    expect(JSON.stringify(main(input))).toBe(JSON.stringify(data))
})