'use strict';

var typeMoney = function typeMoney(value, unit, cond) {
    var data = void 0;
    if (cond == "between") {
        value[0] = parseInt(value[0]) + 1 + '';
        value[1] = parseInt(value[0]) + 8 + '';
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
        };
    } else if (cond == "notmore_than") {
        data = {
            type: "condition",
            condition: cond,
            value: value[0],
            unit: unit
        };
    }

    return data;
};

module.exports.typeMoney = typeMoney;
//# sourceMappingURL=typeMoney.js.map