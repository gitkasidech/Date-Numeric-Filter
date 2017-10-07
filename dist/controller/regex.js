"use strict";

var regex = function regex(inputUpper) {
    var key_Number = /\d{2}[.]\d{2}|\d{2}[.]\d{1}|\d{1}[.]\d{2}|\d{1}[.]\d{1}|\d{1}[,]\d{3}|\d{4}|\d{3}|\d{2}|\d{1}/g;
    var key_asNumber = /มิถุนายน|เที่ยงวัน|เที่ยงคืน|เที่ยง|ศูนย์|หนึ่ง|สอง|สาม|สี่|ห้า|หก|เจ็ด|แปด|เก้า|สิบ/g;
    var keyUnit_Internet = /GB|KBPS|MBPS|MB|กิ้ก|กิ๊ก|G/g;
    var keyUnit_Phone = /[*]\d{3}[*]\d{3}[*]\d{6}[#]|[*]\d{3}[*]\d{4}[#]|[*]\d{3}[*]\d{3}[#]|[*]\d{3}[*]\d{2}[#]|[*]\d{3}[#]|[*]\d{3}|MMS|ข้อความ|เบอร์/g;
    var keyUnit_Money = /ราคา|บาท|BATH|BAHT|สตาง|สต|B|฿|ถูก|บ|ลด/g;
    var keyUnit_Date = /มิถุนายน|\d{2}[/]\d{2}[/]\d{4}|\d{2}[/]\d{2}[/]\d{2}|\d{2}[:]\d{2}|วันเสาร์|เที่ยงคืน|เที่ยงวัน|ตอนเช้า|เที่ยง|วัน|ตอน|นาที|สัปดาห์|อาทิตย์|ปี|เดือน|ชั่วโมง|ชม|เสาร์|เมื่อวาน|พรุ่งนี้|บ่าย|ทุ่ม|ตี|โมง|น[.]|D/g;
    var keyUnit_Cond = /พรุ่ง|เมื่อวาน|ที่ผ่านมา|ไม่เกิน|ตั้งแต่|ไม่กี่|ขึ้น|มากกว่า|น้อยกว่า|ถูกๆกว่า|ถูกกว่า|ถึง|หลาย|กว่า|เกิน|นี้|หน้า|หลัง/g;
    var keyUnit_Other = /ประเทศ|ใบ/g;
    var keyUnit_Number = /เดือนละ|[%]/g;

    var value = inputUpper.match(key_Number);
    var value_asNumber = inputUpper.match(key_asNumber);
    var unit_Internet = inputUpper.match(keyUnit_Internet);
    var unit_Phone = inputUpper.match(keyUnit_Phone);
    var unit_Money = inputUpper.match(keyUnit_Money);
    var unit_Date = inputUpper.match(keyUnit_Date);
    var unit_Cond = inputUpper.match(keyUnit_Cond);
    var unit_Other = inputUpper.match(keyUnit_Other);
    var unit_Number = inputUpper.match(keyUnit_Number);
    return [value, value_asNumber, unit_Internet, unit_Phone, unit_Money, unit_Date, unit_Cond, unit_Other, unit_Number];
};

module.exports.regex = regex;
//# sourceMappingURL=regex.js.map