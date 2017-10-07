"use strict";

var moment = require('moment');
var single = function single(value, asNumber, unit) {
    var data = void 0;
    if (asNumber) value = parseInt(asNumber[0]);
    if (unit == "price" || unit == null) {
        data = {
            type: "single",
            value: value
        };
    } else if (unit == "night" || unit == "morning_afternoon" || unit == "evening" || unit == "time") {
        if (unit == "morning_afternoon") {
            if (parseInt(value) <= 6) value = parseInt(value) + 12;
        } else if (unit == "evening") value = parseInt(value) + 18;
        data = {
            type: "single",
            value: moment().set('hour', parseInt(value)).set('minute', 0).format("kk:mm"),
            unit: "time"
        };
    } else {
        data = {
            type: "single",
            value: value + '',
            unit: unit
        };
    }

    return data;
};

module.exports.single = single;
//# sourceMappingURL=typeSingle.js.map