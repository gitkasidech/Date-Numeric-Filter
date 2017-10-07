const convertUnit = (unit) => {
    const entity = {
        "price": ["ราคา","ถูก"],
        "piece": ["ใบ"],
        "bath": ["บาท","BAHT","BATH","B","บ","฿"],
        "satang": ["สต","สตาง"],
        "country": ["ประเทศ"],
        "datetime": ["ตอน"],
        "day": ["วัน","พรุ่งนี้","เมื่อวาน","d"],
        "Saturday": ["เสาร์","วันเสาร์"],
        "year": ["ปี"],
        "week": ["สัปดาห์","อาทิตย์"],
        "month": ["เดือน","มิถุนายน"],
        "number": ["เบอร์"],
        "hour": ["ชม","ชั่วโมง"],
        "minute": ["นาที"],
        "message": ["ข้อความ","MMS"],
        "GB": ["กิ้ก","กิ๊ก","G"],
        "time": ["น.","เที่ยงคืน","เที่ยง","เที่ยงวัน"],
        "kbps": ["KBPS"],
        "Mbps": ["MBPS"],
        "night": ["ตี"],
        "morning": ["ตอนเช้า"],
        "morning_afternoon": ["โมง","บ่าย"],
        "evening": ["ทุ่ม"],
        "percent": ["%"]
    }
    const len = Object.keys(entity).length
    let key, value
    for (let i = 0; i < len; i++) {
        key = Object.keys(entity)[i]
        value = entity[key]
        if (value.indexOf(unit) != -1)
            unit = key
    }
    return unit
}

const convertCond = (cond) => {
    const entity = {
        "next": ["หน้า","พรุ่ง"],
        "last": ["เมื่อวาน","ที่ผ่านมา"],
        "this": ["นี้"],
        "more_than": ["มากกว่า","หลาย","หลัง","เกิน"],
        "less_than": ["น้อยกว่า","ถูกกว่า","ถูกๆกว่า"],
        "notmore_than": ["ไม่เกิน"],
        "notless_than": ["ขึ้น","ตั้งแต่"],
        "between": ["กว่า","ไม่กี่"],
        "to": ["ถึง"],
        "12": ["เที่ยง","เที่ยงวัน"],
        "0": ["ศูนย์", "เที่ยงคืน"],
        "1": ["หนึ่ง"],
        "2": ["สอง"],
        "3": ["สาม"],
        "4": ["สี่"],
        "5": ["ห้า"],
        "6": ["หก","มิถุนายน"],
        "7": ["เจ็ด"],
        "8": ["แปด"],
        "9": ["เก้า"],
        "10": ["สิบ"]
    }
    const len = Object.keys(entity).length
    let key, value
    for (let i = 0; i < len; i++) {
        key = Object.keys(entity)[i]
        value = entity[key]
        if (value.indexOf(cond) != -1)
            cond = key
    }
    return cond
}

module.exports.convertUnit = convertUnit
module.exports.convertCond = convertCond