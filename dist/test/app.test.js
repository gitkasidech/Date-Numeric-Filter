'use strict';

var _stringify = require('babel-runtime/core-js/json/stringify');

var _stringify2 = _interopRequireDefault(_stringify);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _require = require('../controller/app'),
    main = _require.main;

var moment = require('moment');
test('checkcase single_Internet', function () {
    var input = ["4GB"];
    var data = {
        Internet: {
            type: "single",
            value: "4",
            unit: "GB"
        }
    };
    expect((0, _stringify2.default)(main(input))).toBe((0, _stringify2.default)([data]));
});

test('checkcase single_Other', function () {
    var input = ["3 ประเทศ"];
    var data = {
        "Other": {
            "type": "single",
            "value": "3",
            "unit": "country"
        }
    };
    expect((0, _stringify2.default)(main(input))).toBe((0, _stringify2.default)([data]));
});

test('checkcase singlePrice_Money', function () {
    var input = ["ราคา 399"];
    var data = {
        "Money": {
            "type": "single",
            "value": "399"
        }
    };
    expect((0, _stringify2.default)(main(input))).toBe((0, _stringify2.default)([data]));
});

test('checkcase single_Money', function () {
    var input = ["6 บาท"];
    var data = {
        "Money": {
            "type": "single",
            "value": "6",
            "unit": "bath"
        }
    };
    expect((0, _stringify2.default)(main(input))).toBe((0, _stringify2.default)([data]));
});

test('checkcase single_Date', function () {
    var input = ["10 วัน"];
    var data = {
        "Date_Time": {
            "type": "single",
            "value": "10",
            "unit": "day"
        }
    };
    expect((0, _stringify2.default)(main(input))).toBe((0, _stringify2.default)([data]));
});

test('checkcase singleNow_Date', function () {
    var input = ["ตอนนี้"];
    var data = {
        "Date_Time": {
            "type": "single",
            "value": moment().format('ddd,DD-MM-YYYY HH:mm'),
            "unit": "datetime"
        }
    };
    expect((0, _stringify2.default)(main(input))).toBe((0, _stringify2.default)([data]));
});

test('checkcase betweenWeek1_Date', function () {
    var input = ["สัปดาห์หน้า"];
    var data = {
        "Date_Time": {
            "type": "between",
            "start": {
                "value": moment().weekday(7).format('ddd,DD-MM-YYYY'),
                "unit": "week"
            },
            "end": {
                "value": moment().weekday(7 + 6).format('ddd,DD-MM-YYYY'),
                "unit": "week"
            }
        }
    };
    expect((0, _stringify2.default)(main(input))).toBe((0, _stringify2.default)([data]));
});

test('checkcase betweenWeek2_Date', function () {
    var input = ["อาทิตย์หน้า"];
    var data = {
        "Date_Time": {
            "type": "between",
            "start": {
                "value": moment().weekday(7).format('ddd,DD-MM-YYYY'),
                "unit": "week"
            },
            "end": {
                "value": moment().weekday(7 + 6).format('ddd,DD-MM-YYYY'),
                "unit": "week"
            }
        }
    };
    expect((0, _stringify2.default)(main(input))).toBe((0, _stringify2.default)([data]));
});

test('checkcase singleNextSat_Date', function () {
    var input = ["เสาร์หน้า"];
    var thisdayUnit = moment().day("Saturday");
    var day = thisdayUnit.format("e");
    var nextThisday = moment().weekday(7 + parseInt(day));
    var data = {
        "Date_Time": {
            "type": "single",
            "value": nextThisday.format('ddd,DD-MM-YYYY'),
            "unit": "day"
        }
    };
    expect((0, _stringify2.default)(main(input))).toBe((0, _stringify2.default)([data]));
});

test('checkcase singleNextMonth_Date', function () {
    var input = ["เดือนหน้า"];
    var thismonth = moment().format("M");
    var data = {
        "Date_Time": {
            "type": "single",
            "value": moment().month(parseInt(thismonth)).format("MMMM"),
            "unit": "month"
        }
    };
    expect((0, _stringify2.default)(main(input))).toBe((0, _stringify2.default)([data]));
});

test('checkcase singleWeek1_Date', function () {
    var input = ["1อาทิตย์"];
    var data = {
        "Date_Time": {
            "type": "single",
            "value": "1",
            "unit": "week"
        }
    };
    expect((0, _stringify2.default)(main(input))).toBe((0, _stringify2.default)([data]));
});

test('checkcase singleMonth_Date', function () {
    var input = ["1เดือน"];
    var data = {
        "Date_Time": {
            "type": "single",
            "value": "1",
            "unit": "month"
        }
    };
    expect((0, _stringify2.default)(main(input))).toBe((0, _stringify2.default)([data]));
});

test('checkcase singleThisSat_Date', function () {
    var input = ["วันเสาร์นี้"];
    var thisdayUnit = moment().day("Saturday");
    var data = {
        "Date_Time": {
            "type": "single",
            "value": thisdayUnit.format('ddd,DD-MM-YYYY'),
            "unit": "day"
        }
    };
    expect((0, _stringify2.default)(main(input))).toBe((0, _stringify2.default)([data]));
});

test('checkcase singleTomorrow_Date', function () {
    var input = ["พรุ่งนี้"];
    var thisday = moment().date();
    var data = {
        "Date_Time": {
            "type": "single",
            "value": moment().set('date', thisday + 1).format('ddd,DD-MM-YYYY'),
            "unit": "day"
        }
    };
    expect((0, _stringify2.default)(main(input))).toBe((0, _stringify2.default)([data]));
});

test('checkcase conditionMoreThan_Date', function () {
    var input = ["หลายวัน"];
    var data = {
        "Date_Time": {
            "type": "condition",
            "condition": "more_than",
            "value": "1",
            "unit": "day"
        }
    };
    expect((0, _stringify2.default)(main(input))).toBe((0, _stringify2.default)([data]));
});

test('checkcase singleWeek2_Date', function () {
    var input = ["3 สัปดาห์"];
    var data = {
        "Date_Time": {
            "type": "single",
            "value": "3",
            "unit": "week"
        }
    };
    expect((0, _stringify2.default)(main(input))).toBe((0, _stringify2.default)([data]));
});

test('checkcase betweenDay_Date', function () {
    var input = ["4-5 วัน"];
    var data = {
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
    };
    expect((0, _stringify2.default)(main(input))).toBe((0, _stringify2.default)([data]));
});

test('checkcase betweenMoreLess_Date', function () {
    var input = ["20กว่าวัน"];
    var data = {
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
    };
    expect((0, _stringify2.default)(main(input))).toBe((0, _stringify2.default)([data]));
});

test('checkcase singlePriceComma_Money', function () {
    var input = ["ราคา1,990"];
    var data = {
        "Money": {
            "type": "single",
            "value": "1,990"
        }
    };
    expect((0, _stringify2.default)(main(input))).toBe((0, _stringify2.default)([data]));
});

test('checkcase single_Number', function () {
    var input = ["899"];
    var data = {
        "Number": {
            "type": "single",
            "value": "899"
        }
    };
    expect((0, _stringify2.default)(main(input))).toBe((0, _stringify2.default)([data]));
});

test('checkcase single*3*3#_Phone', function () {
    var input = ["*777*903#"];
    var data = {
        "Phone": {
            "type": "single",
            "value": "*777*903#"
        }
    };
    expect((0, _stringify2.default)(main(input))).toBe((0, _stringify2.default)([data]));
});

test('checkcase ratioBath/Week_Money', function () {
    var input = ["144 บาท/อาทิตย์"];
    var data = {
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
    };
    expect((0, _stringify2.default)(main(input))).toBe((0, _stringify2.default)([data]));
});

test('checkcase ratioBath/Day_Money', function () {
    var input = ["15 บาท/วัน"];
    var data = {
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
    };
    expect((0, _stringify2.default)(main(input))).toBe((0, _stringify2.default)([data]));
});

test('checkcase singleMin_Date', function () {
    var input = ["60 นาที"];
    var data = {
        "Date_Time": {
            "type": "single",
            "value": "60",
            "unit": "minute"
        }
    };
    expect((0, _stringify2.default)(main(input))).toBe((0, _stringify2.default)([data]));
});

test('checkcase singleMessage_Phone', function () {
    var input = ["50 ข้อความ"];
    var data = {
        "Phone": {
            "type": "single",
            "value": "50",
            "unit": "message"
        }
    };
    expect((0, _stringify2.default)(main(input))).toBe((0, _stringify2.default)([data]));
});

test('checkcase singleBaht_Money', function () {
    var input = ["19 Baht"];
    var data = {
        "Money": {
            "type": "single",
            "value": "19",
            "unit": "bath"
        }
    };
    expect((0, _stringify2.default)(main(input))).toBe((0, _stringify2.default)([data]));
});

test('checkcase single*3*3#_Phone', function () {
    var input = ["*777*148#"];
    var data = {
        "Phone": {
            "type": "single",
            "value": "*777*148#"
        }
    };
    expect((0, _stringify2.default)(main(input))).toBe((0, _stringify2.default)([data]));
});

test('checkcase single*3*3*6#_Phone', function () {
    var input = ["*777*784*151197#"];
    var data = {
        "Phone": {
            "type": "single",
            "value": "*777*784*151197#"
        }
    };
    expect((0, _stringify2.default)(main(input))).toBe((0, _stringify2.default)([data]));
});

test('checkcase betweenBath_Money', function () {
    var input = ["40 กว่าบาท"];
    var data = {
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
    };
    expect((0, _stringify2.default)(main(input))).toBe((0, _stringify2.default)([data]));
});

test('checkcase singleNoValue_Internet', function () {
    var input = ["เป็น GB"];
    var data = {
        "Internet": {
            "type": "single",
            "value": "1",
            "unit": "GB"
        }
    };
    expect((0, _stringify2.default)(main(input))).toBe((0, _stringify2.default)([data]));
});

test('checkcase conditionNotMoreThan_Number', function () {
    var input = ["ไม่เกิน 100"];
    var data = {
        "Number": {
            "type": "condition",
            "condition": "notmore_than",
            "value": "100"
        }
    };
    expect((0, _stringify2.default)(main(input))).toBe((0, _stringify2.default)([data]));
});

test('checkcase singleMapThaiWordGB_Internet', function () {
    var input = ["1กิ้ก"];
    var data = {
        "Internet": {
            "type": "single",
            "value": "1",
            "unit": "GB"
        }
    };
    expect((0, _stringify2.default)(main(input))).toBe((0, _stringify2.default)([data]));
});

test('checkcase singleMB_Internet', function () {
    var input = ["500MB"];
    var data = {
        "Internet": {
            "type": "single",
            "value": "500",
            "unit": "MB"
        }
    };
    expect((0, _stringify2.default)(main(input))).toBe((0, _stringify2.default)([data]));
});

test('checkcase ratioUnit/Month_Number', function () {
    var input = ["เดือนละ1500"];
    var data = {
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
    };
    expect((0, _stringify2.default)(main(input))).toBe((0, _stringify2.default)([data]));
});

test('checkcase 2 single_Date', function () {
    var input = ["1วัน", "3วัน"];
    var data = [{
        "Date_Time": {
            "type": "single",
            "value": "1",
            "unit": "day"
        }
    }, {
        "Date_Time": {
            "type": "single",
            "value": "3",
            "unit": "day"
        }
    }];
    expect((0, _stringify2.default)(main(input))).toBe((0, _stringify2.default)(data));
});

test('checkcase ratioBath/Day_Money & singleMessage_Phone', function () {
    var input = ["15 บาท/วัน", "50 ข้อความ"];
    var data = [{ "Money": { "type": "ratio", "first": { "value": "15", "unit": "bath" }, "last": { "value": "1", "unit": "day" } } }, { "Phone": { "type": "single", "value": "50", "unit": "message" } }];
    expect((0, _stringify2.default)(main(input))).toBe((0, _stringify2.default)(data));
});

test('checkcase conditionMoreThan5p.m_Date', function () {
    var input = ["หลัง 5 โมง"];
    var data = {
        "Date_Time": {
            "type": "condition",
            "condition": "more_than",
            "value": "17:00",
            "unit": "morning_afternoon"
        }
    };

    expect((0, _stringify2.default)(main(input))).toBe((0, _stringify2.default)([data]));
});

test('checkcase ratioBath/ManyDay_Money', function () {
    var input = ["5 บาท / 2 วัน"];
    var data = { "Money": { "type": "ratio", "first": { "value": "5", "unit": "bath" }, "last": { "value": "2", "unit": "day" } } };
    expect((0, _stringify2.default)(main(input))).toBe((0, _stringify2.default)([data]));
});

test('checkcase single*3*4#_Phone', function () {
    var input = ["*777*4005#"];
    var data = { "Phone": { "type": "single", "value": "*777*4005#" } };
    expect((0, _stringify2.default)(main(input))).toBe((0, _stringify2.default)([data]));
});

test('checkcase betweenTime_Date', function () {
    var input = ["05.00 - 17.00น."];
    var data = { "Date_Time": { "type": "between", "start": { "value": "05:00", "unit": "time" }, "end": { "value": "17:00", "unit": "time" } } };
    expect((0, _stringify2.default)(main(input))).toBe((0, _stringify2.default)([data]));
});

test('checkcase singleAllDay_Date', function () {
    var input = ["ทั้งวัน"];
    var data = { "Date_Time": { "type": "single", "value": "1", "unit": "day" } };
    expect((0, _stringify2.default)(main(input))).toBe((0, _stringify2.default)([data]));
});

test('checkcase singleMbps_Date', function () {
    var input = ["1Mbps"];
    var data = { "Internet": { "type": "single", "value": "1", "unit": "Mbps" } };
    expect((0, _stringify2.default)(main(input))).toBe((0, _stringify2.default)([data]));
});

test('checkcase ratioSatang/Min_Date', function () {
    var input = ["นาทีละ 25 สต."];
    var data = { "Money": { "type": "ratio", "first": { "value": "25", "unit": "satang" }, "last": { "value": "1", "unit": "minute" } } };
    expect((0, _stringify2.default)(main(input))).toBe((0, _stringify2.default)([data]));
});

test('checkcase singleHour_Date & singleDay_Date', function () {
    var input = ["24 ชม.", "7 วัน"];
    var data = [{ "Date_Time": { "type": "single", "value": "24", "unit": "hour" } }, { "Date_Time": { "type": "single", "value": "7", "unit": "day" } }];
    expect((0, _stringify2.default)(main(input))).toBe((0, _stringify2.default)(data));
});

test('checkcase single1Day_Date', function () {
    var input = ["วันเดียว"];
    var data = { "Date_Time": { "type": "single", "value": "1", "unit": "day" } };
    expect((0, _stringify2.default)(main(input))).toBe((0, _stringify2.default)([data]));
});

test('checkcase single4digitBath_Money', function () {
    var input = ["1500บาท"];
    var data = { "Money": { "type": "single", "value": "1500", "unit": "bath" } };
    expect((0, _stringify2.default)(main(input))).toBe((0, _stringify2.default)([data]));
});

test('checkcase single1.5GB_Internet', function () {
    var input = ["1.5GB"];
    var data = { "Internet": { "type": "single", "value": "1.5", "unit": "GB" } };
    expect((0, _stringify2.default)(main(input))).toBe((0, _stringify2.default)([data]));
});

test('checkcase singleMB_Internet & singleHour_Date', function () {
    var input = ["500MB", "24ชั่วโมง"];
    var data = [{ "Internet": { "type": "single", "value": "500", "unit": "MB" } }, { "Date_Time": { "type": "single", "value": "24", "unit": "hour" } }];
    expect((0, _stringify2.default)(main(input))).toBe((0, _stringify2.default)(data));
});

test('checkcase singleBath_Money & singleMbps_Internet', function () {
    var input = ["99 บาท", "1mbps"];
    var data = [{ "Money": { "type": "single", "value": "99", "unit": "bath" } }, { "Internet": { "type": "single", "value": "1", "unit": "Mbps" } }];
    expect((0, _stringify2.default)(main(input))).toBe((0, _stringify2.default)(data));
});

test('checkcase singleNoValueWeek_Date', function () {
    var input = ["สัปดาห์"];
    var data = { "Date_Time": { "type": "single", "value": "1", "unit": "week" } };
    expect((0, _stringify2.default)(main(input))).toBe((0, _stringify2.default)([data]));
});

test('checkcase ratioBath/Week_Money2', function () {
    var input = ["59 บาท/สัปดาห์"];
    var data = { "Money": { "type": "ratio", "first": { "value": "59", "unit": "bath" }, "last": { "value": "1", "unit": "week" } } };
    expect((0, _stringify2.default)(main(input))).toBe((0, _stringify2.default)([data]));
});

test('checkcase conditionNotMoreThanBath_Money', function () {
    var input = ["ไม่เกิน5บาท"];
    var data = { "Money": { "type": "condition", "condition": "notmore_than", "value": "5", "unit": "bath" } };
    expect((0, _stringify2.default)(main(input))).toBe((0, _stringify2.default)([data]));
});

test('checkcase singleNoValueMonth_Date', function () {
    var input = ["เดือน"];
    var data = { "Date_Time": { "type": "single", "value": "1", "unit": "month" } };
    expect((0, _stringify2.default)(main(input))).toBe((0, _stringify2.default)([data]));
});

test('checkcase ratioNoValueBothBath/Min_Money', function () {
    var input = ["นาทีละบาท"];
    var data = { "Money": { "type": "ratio", "first": { "value": "1", "unit": "bath" }, "last": { "value": "1", "unit": "minute" } } };
    expect((0, _stringify2.default)(main(input))).toBe((0, _stringify2.default)([data]));
});

test('checkcase betweenToMidnight_Date', function () {
    var input = ["ถึงเที่ยงคืน"];
    var data = { "Date_Time": { "type": "between", "start": { "value": "01:00", "unit": "time" }, "end": { "value": "24:00", "unit": "time" } } };
    expect((0, _stringify2.default)(main(input))).toBe((0, _stringify2.default)([data]));
});

test('checkcase ratioBath/Day_Money & ratioSatang/Min_Money', function () {
    var input = ["7 บาท/วัน", "นาทีละ 7 สต"];
    var data = [{ "Money": { "type": "ratio", "first": { "value": "7", "unit": "bath" }, "last": { "value": "1", "unit": "day" } } }, { "Money": { "type": "ratio", "first": { "value": "7", "unit": "satang" }, "last": { "value": "1", "unit": "minute" } } }];
    expect((0, _stringify2.default)(main(input))).toBe((0, _stringify2.default)(data));
});

test('checkcase ratioBath/Day_Money & singleSatang_Money', function () {
    var input = ["7 บาท/วัน", "35 สต."];
    var data = [{ "Money": { "type": "ratio", "first": { "value": "7", "unit": "bath" }, "last": { "value": "1", "unit": "day" } } }, { "Money": { "type": "single", "value": "35", "unit": "satang" } }];
    expect((0, _stringify2.default)(main(input))).toBe((0, _stringify2.default)(data));
});

test('checkcase conditionNotMoreThanBath_Money & conditionNotLessThanGB_Internet', function () {
    var input = ["ไม่เกิน 50 บาท", "2GB ขึ้นไป"];
    var data = [{ "Money": { "type": "condition", "condition": "notmore_than", "value": "50", "unit": "bath" } }, { "Internet": { "type": "condition", "condition": "notless_than", "value": "2", "unit": "GB" } }];
    expect((0, _stringify2.default)(main(input))).toBe((0, _stringify2.default)(data));
});

test('checkcase conditionNotLessThanGB_Internet', function () {
    var input = ["3GB ขึ้น"];
    var data = { "Internet": { "type": "condition", "condition": "notless_than", "value": "3", "unit": "GB" } };
    expect((0, _stringify2.default)(main(input))).toBe((0, _stringify2.default)([data]));
});

test('checkcase singleAllWeek_Date', function () {
    var input = ["ทั้งสัปดาห์"];
    var data = { "Date_Time": { "type": "single", "value": "1", "unit": "week" } };
    expect((0, _stringify2.default)(main(input))).toBe((0, _stringify2.default)([data]));
});

test('checkcase ratioBath/Min_Money NoValue', function () {
    var input = ["นาที 20 บาท"];
    var data = { "Money": { "type": "ratio", "first": { "value": "20", "unit": "bath" }, "last": { "value": "1", "unit": "minute" } } };
    expect((0, _stringify2.default)(main(input))).toBe((0, _stringify2.default)([data]));
});

test('checkcase conditionSince_Date', function () {
    var input = ["ตั้งแต่ตีห้า"];
    var data = { "Date_Time": { "type": "condition", "condition": "notless_than", "value": "05:00", "unit": "time" } };
    expect((0, _stringify2.default)(main(input))).toBe((0, _stringify2.default)([data]));
});

test('checkcase conditionManyGB_Date NoValue+Thiaword', function () {
    var input = ["หลายๆกิ๊ก"];
    var data = { "Internet": { "type": "condition", "condition": "more_than", "value": "1", "unit": "GB" } };
    expect((0, _stringify2.default)(main(input))).toBe((0, _stringify2.default)([data]));
});

test('checkcase between2Unit_Date', function () {
    var input = ["ตี 5 - 5 โมงเย็น"];
    var data = { "Date_Time": { "type": "between", "start": { "value": "05:00", "unit": "time" }, "end": { "value": "17:00", "unit": "time" } } };
    expect((0, _stringify2.default)(main(input))).toBe((0, _stringify2.default)([data]));
});

test('checkcase between2Unit_Date NoValue', function () {
    var input = ["ตีห้าถึงห้าโมงเย็น"];
    var data = { "Date_Time": { "type": "between", "start": { "value": "05:00", "unit": "time" }, "end": { "value": "17:00", "unit": "time" } } };
    expect((0, _stringify2.default)(main(input))).toBe((0, _stringify2.default)([data]));
});

test('checkcase singleB_Money & singlekbps_Internet', function () {
    var input = ["89B", "512Kbps"];
    var data = [{ "Money": { "type": "single", "value": "89", "unit": "bath" } }, { "Internet": { "type": "single", "value": "512", "unit": "kbps" } }];
    expect((0, _stringify2.default)(main(input))).toBe((0, _stringify2.default)(data));
});

test('checkcase singleHr_Money & singleBath_Internet', function () {
    var input = ["24 ชม", "299 บาท"];
    var data = [{ "Date_Time": { "type": "single", "value": "24", "unit": "hour" } }, { "Money": { "type": "single", "value": "299", "unit": "bath" } }];
    expect((0, _stringify2.default)(main(input))).toBe((0, _stringify2.default)(data));
});

test('checkcase single1Year_Date', function () {
    var input = ["1 ปี"];
    var data = { "Date_Time": { "type": "single", "value": "1", "unit": "year" } };
    expect((0, _stringify2.default)(main(input))).toBe((0, _stringify2.default)([data]));
});

test('checkcase single_Number & singleMin_Date & singleGB_Internet', function () {
    var input = ["349", "400 นาที", "27 gb"];
    var data = [{ "Number": { "type": "single", "value": "349" } }, { "Date_Time": { "type": "single", "value": "400", "unit": "minute" } }, { "Internet": { "type": "single", "value": "27", "unit": "GB" } }];
    expect((0, _stringify2.default)(main(input))).toBe((0, _stringify2.default)(data));
});

test('checkcase conditionratioPrice/Month_Money Cheap', function () {
    var input = ["ถูกๆกว่า399 /เดือน"];
    var data = { "Money": { "type": "condition", "condition": "less_than", "first": { "value": "399" }, "last": { "value": "1", "unit": "month" } } };
    expect((0, _stringify2.default)(main(input))).toBe((0, _stringify2.default)([data]));
});

test('checkcase singleMin_Date & singleBath_Money', function () {
    var input = ["2,560 นาที", "999 บาท"];
    var data = [{ "Date_Time": { "type": "single", "value": "2,560", "unit": "minute" } }, { "Money": { "type": "single", "value": "999", "unit": "bath" } }];
    expect((0, _stringify2.default)(main(input))).toBe((0, _stringify2.default)(data));
});

test('checkcase conditionMessage_Phone notmore_than', function () {
    var input = ["ไม่เกิน 5 ข้อความ"];
    var data = { "Phone": { "type": "condition", "condition": "notmore_than", "value": "5", "unit": "message" } };
    expect((0, _stringify2.default)(main(input))).toBe((0, _stringify2.default)([data]));
});

test('checkcase conditionMessage_Phone more_than', function () {
    var input = ["เกิน10ข้อความ"];
    var data = { "Phone": { "type": "condition", "condition": "more_than", "value": "10", "unit": "message" } };
    expect((0, _stringify2.default)(main(input))).toBe((0, _stringify2.default)([data]));
});

test('checkcase singleBath_Money บ', function () {
    var input = ["488 บ"];
    var data = { "Money": { "type": "single", "value": "488", "unit": "bath" } };
    expect((0, _stringify2.default)(main(input))).toBe((0, _stringify2.default)([data]));
});

test('checkcase singlekbps_Internet ', function () {
    var input = ["512 kbps"];
    var data = { "Internet": { "type": "single", "value": "512", "unit": "kbps" } };
    expect((0, _stringify2.default)(main(input))).toBe((0, _stringify2.default)([data]));
});

test('checkcase conditionMessage_Phone more_than', function () {
    var input = ["มากกว่า 100 ข้อความ"];
    var data = { "Phone": { "type": "condition", "condition": "more_than", "value": "100", "unit": "message" } };
    expect((0, _stringify2.default)(main(input))).toBe((0, _stringify2.default)([data]));
});

test('checkcase betweenTime_Date โมง-ทุ่ม', function () {
    var input = ["5 โมงเย็น - 4 ทุ่ม"];
    var data = { "Date_Time": { "type": "between", "start": { "value": "17:00", "unit": "time" }, "end": { "value": "22:00", "unit": "time" } } };
    expect((0, _stringify2.default)(main(input))).toBe((0, _stringify2.default)([data]));
});

test('checkcase conditionGB_Internet หลายๆ', function () {
    var input = ["หลายๆGB"];
    var data = { "Internet": { "type": "condition", "condition": "more_than", "value": "1", "unit": "GB" } };
    expect((0, _stringify2.default)(main(input))).toBe((0, _stringify2.default)([data]));
});

test('checkcase singlePercent_Number %', function () {
    var input = ["50%"];
    var data = { "Number": { "type": "single", "value": "50", "unit": "percent" } };
    expect((0, _stringify2.default)(main(input))).toBe((0, _stringify2.default)([data]));
});

test('checkcase single*3_Phone', function () {
    var input = ["*138"];
    var data = { "Phone": { "type": "single", "value": "*138" } };
    expect((0, _stringify2.default)(main(input))).toBe((0, _stringify2.default)([data]));
});

test('checkcase betweenTime_Date ทุ่ม-โมง', function () {
    var input = ["3 ทุ่ม - 4 โมงเย็น"];
    var data = { "Date_Time": { "type": "between", "start": { "value": "21:00", "unit": "time" }, "end": { "value": "16:00", "unit": "time" } } };
    expect((0, _stringify2.default)(main(input))).toBe((0, _stringify2.default)([data]));
});

test('checkcase between_Number กว่า', function () {
    var input = ["10กว่า"];
    var data = { "Number": { "type": "between", "start": { "value": "11" }, "end": { "value": "19" } } };
    expect((0, _stringify2.default)(main(input))).toBe((0, _stringify2.default)([data]));
});

test('checkcase conditionGB_Internet more_than & condition_Number notmore_than', function () {
    var input = ["หลายๆGB", "ไม่เกิน1,000"];
    var data = [{ "Internet": { "type": "condition", "condition": "more_than", "value": "1", "unit": "GB" } }, { "Number": { "type": "condition", "condition": "notmore_than", "value": "1,000" } }];
    expect((0, _stringify2.default)(main(input))).toBe((0, _stringify2.default)(data));
});

test('checkcase singleTime_Date ตี', function () {
    var input = ["ตี 4"];
    var data = { "Date_Time": { "type": "single", "value": "04:00", "unit": "time" } };
    expect((0, _stringify2.default)(main(input))).toBe((0, _stringify2.default)([data]));
});

test('checkcase between_Number', function () {
    var input = ["4.00-7.00"];
    var data = { "Number": { "type": "between", "start": { "value": "4.00" }, "end": { "value": "7.00" } } };
    expect((0, _stringify2.default)(main(input))).toBe((0, _stringify2.default)([data]));
});

test('checkcase singleDay_Date asNumber', function () {
    var input = ["สามวัน"];
    var data = { "Date_Time": { "type": "single", "value": "3", "unit": "day" } };
    expect((0, _stringify2.default)(main(input))).toBe((0, _stringify2.default)([data]));
});

test('checkcase singleGB_Internet G', function () {
    var input = ["32G"];
    var data = { "Internet": { "type": "single", "value": "32", "unit": "GB" } };
    expect((0, _stringify2.default)(main(input))).toBe((0, _stringify2.default)([data]));
});

test('checkcase singleMonth_Date หน้า', function () {
    var input = ["10 เดือนหน้า"];
    var data = { "Date_Time": { "type": "single", "value": "August", "unit": "month" } };
    expect((0, _stringify2.default)(main(input))).toBe((0, _stringify2.default)([data]));
});

test('checkcase single_Date มิถุนายน', function () {
    var input = ["13 มิถุนายน 2560"];
    var data = { "Date_Time": { "type": "single", "value": "Tue,13-06-2017", "unit": "date" } };
    expect((0, _stringify2.default)(main(input))).toBe((0, _stringify2.default)([data]));
});

test('checkcase singlePercent_Number % & singleBath_Money ฿', function () {
    var input = ["50%", "499฿"];
    var data = [{ "Number": { "type": "single", "value": "50", "unit": "percent" } }, { "Money": { "type": "single", "value": "499", "unit": "bath" } }];
    expect((0, _stringify2.default)(main(input))).toBe((0, _stringify2.default)(data));
});

test('checkcase single_Date ../../.. & betweenTime_Date ..:..', function () {
    var input = ["03/09/17", "04:00-07:00"];
    var data = [{ "Date_Time": { "type": "single", "value": "Sun,03-09-2017", "unit": "date" } }, { "Date_Time": { "type": "between", "start": { "value": "04:00", "unit": "time" }, "end": { "value": "07:00", "unit": "time" } } }];
    expect((0, _stringify2.default)(main(input))).toBe((0, _stringify2.default)(data));
});

test('checkcase ratioBath/Week_Money บาทต่อสัปดาห์', function () {
    var input = ["99 บาทต่อสัปดาห์"];
    var data = { "Money": { "type": "ratio", "first": { "value": "99", "unit": "bath" }, "last": { "value": "1", "unit": "week" } } };
    expect((0, _stringify2.default)(main(input))).toBe((0, _stringify2.default)([data]));
});

test('checkcase singleTime_Date โมง', function () {
    var input = ["9 โมง"];
    var data = { "Date_Time": { "type": "single", "value": "09:00", "unit": "time" } };
    expect((0, _stringify2.default)(main(input))).toBe((0, _stringify2.default)([data]));
});

test('checkcase singleDay_Date เมื่อวาน', function () {
    var input = ["เมื่อวาน"];
    var thisday = moment().date();
    var data = { "Date_Time": { "type": "single", "value": moment().set('date', thisday - 1).format('ddd,DD-MM-YYYY'), "unit": "day" } };
    expect((0, _stringify2.default)(main(input))).toBe((0, _stringify2.default)([data]));
});

test('checkcase singleMessage_Phone MMS', function () {
    var input = ["30 MMS"];
    var data = { "Phone": { "type": "single", "value": "30", "unit": "message" } };
    expect((0, _stringify2.default)(main(input))).toBe((0, _stringify2.default)([data]));
});

test('checkcase singlePiece_Other ใบ', function () {
    var input = ["1 ใบ"];
    var data = { "Other": { "type": "single", "value": "1", "unit": "piece" } };
    expect((0, _stringify2.default)(main(input))).toBe((0, _stringify2.default)([data]));
});

test('checkcase singleTime_Date บ่าย,NoValue', function () {
    var input = ["บ่ายสาม"];
    var data = { "Date_Time": { "type": "single", "value": "15:00", "unit": "time" } };
    expect((0, _stringify2.default)(main(input))).toBe((0, _stringify2.default)([data]));
});

test('checkcase betweenDay_Date ไม่กี่', function () {
    var input = ["ไม่กี่วัน"];
    var data = { "Date_Time": { "type": "between", "start": { "value": "2", "unit": "day" }, "end": { "value": "7", "unit": "day" } } };
    expect((0, _stringify2.default)(main(input))).toBe((0, _stringify2.default)([data]));
});

test('checkcase singleDay_Date ที่ผ่านมา', function () {
    var input = ["วันเสาร์ที่ผ่านมา"];
    var thisdayUnit = moment().day("Saturday");
    var thisday = moment().day();
    var day = thisdayUnit.format("e");
    var data = { "Date_Time": { "type": "single", "value": moment().weekday(parseInt(thisday) - parseInt(day)).format('ddd,DD-MM-YYYY'), "unit": "day" } };
    expect((0, _stringify2.default)(main(input))).toBe((0, _stringify2.default)([data]));
});

test('checkcase singleNumber_Phone เบอร์', function () {
    var input = ["1เบอร์"];
    var data = { "Phone": { "type": "single", "value": "1", "unit": "number" } };
    expect((0, _stringify2.default)(main(input))).toBe((0, _stringify2.default)([data]));
});

test('checkcase betweenDateTime_Date เมื่อวานตอนเช้า', function () {
    var input = ["เมื่อวานตอนเช้า"];
    var thisday = moment().date();
    var data = { "Date_Time": { "type": "between", "start": { "value": moment().set('date', thisday - 1).format('ddd,DD-MM-YYYY') + " 6:00", "unit": "dateTime" }, "end": { "value": moment().set('date', thisday - 1).format('ddd,DD-MM-YYYY') + " 11:00", "unit": "dateTime" } } };
    expect((0, _stringify2.default)(main(input))).toBe((0, _stringify2.default)([data]));
});

test('checkcase singleDateTime_Date ตอนนี้,โมง', function () {
    var input = ["ตอนนี้ 9 โมง"];
    var data = { "Date_Time": { "type": "single", "value": moment().format('ddd,DD-MM-YYYY ') + "9:00", "unit": "datetime" } };
    expect((0, _stringify2.default)(main(input))).toBe((0, _stringify2.default)([data]));
});

test('checkcase single_Date ../../.... & singleTime_Date ..:..ตี', function () {
    var input = ["17/07/2016", "08:34"];
    var data = [{ "Date_Time": { "type": "single", "value": "Sun,17-07-2016", "unit": "date" } }, { "Date_Time": { "type": "single", "value": "08:34", "unit": "time" } }];
    expect((0, _stringify2.default)(main(input))).toBe((0, _stringify2.default)(data));
});
//# sourceMappingURL=app.test.js.map