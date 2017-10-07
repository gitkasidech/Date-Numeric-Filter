const regex = (inputUpper) => {
    const key_Number = /\d{2}[.]\d{2}|\d{2}[.]\d{1}|\d{1}[.]\d{2}|\d{1}[.]\d{1}|\d{1}[,]\d{3}|\d{4}|\d{3}|\d{2}|\d{1}/g
    const key_asNumber = /มิถุนายน|เที่ยงวัน|เที่ยงคืน|เที่ยง|ศูนย์|หนึ่ง|สอง|สาม|สี่|ห้า|หก|เจ็ด|แปด|เก้า|สิบ/g
    const keyUnit_Internet = /GB|KBPS|MBPS|MB|กิ้ก|กิ๊ก|G/g
    const keyUnit_Phone = /[*]\d{3}[*]\d{3}[*]\d{6}[#]|[*]\d{3}[*]\d{4}[#]|[*]\d{3}[*]\d{3}[#]|[*]\d{3}[*]\d{2}[#]|[*]\d{3}[#]|[*]\d{3}|MMS|ข้อความ|เบอร์/g
    const keyUnit_Money = /ราคา|บาท|BATH|BAHT|สตาง|สต|B|฿|ถูก|บ|ลด/g
    const keyUnit_Date = /มิถุนายน|\d{2}[/]\d{2}[/]\d{4}|\d{2}[/]\d{2}[/]\d{2}|\d{2}[:]\d{2}|วันเสาร์|เที่ยงคืน|เที่ยงวัน|ตอนเช้า|เที่ยง|วัน|ตอน|นาที|สัปดาห์|อาทิตย์|ปี|เดือน|ชั่วโมง|ชม|เสาร์|เมื่อวาน|พรุ่งนี้|บ่าย|ทุ่ม|ตี|โมง|น[.]|D/g
    const keyUnit_Cond = /พรุ่ง|เมื่อวาน|ที่ผ่านมา|ไม่เกิน|ตั้งแต่|ไม่กี่|ขึ้น|มากกว่า|น้อยกว่า|ถูกๆกว่า|ถูกกว่า|ถึง|หลาย|กว่า|เกิน|นี้|หน้า|หลัง/g
    const keyUnit_Other = /ประเทศ|ใบ/g
    const keyUnit_Number = /เดือนละ|[%]/g

    let value = inputUpper.match(key_Number)
    let value_asNumber = inputUpper.match(key_asNumber)
    let unit_Internet = inputUpper.match(keyUnit_Internet)
    let unit_Phone = inputUpper.match(keyUnit_Phone)
    let unit_Money = inputUpper.match(keyUnit_Money)
    let unit_Date = inputUpper.match(keyUnit_Date)
    let unit_Cond = inputUpper.match(keyUnit_Cond)
    let unit_Other = inputUpper.match(keyUnit_Other)
    let unit_Number = inputUpper.match(keyUnit_Number)
    return [value,value_asNumber,unit_Internet,unit_Phone,unit_Money,unit_Date,unit_Cond,unit_Other,unit_Number]
}

module.exports.regex = regex