"use strict";

var ConditionRatio = function ConditionRatio(value, unitFirst, unitLast, cond) {
    var data = void 0;
    if (value.length == 1 && unitFirst == "price") {
        data = {
            type: "condition",
            condition: cond,
            first: {
                value: value[0]
            },
            last: {
                value: "1",
                unit: unitLast
            }
        };
    }
    return data;
};

module.exports.ConditionRatio = ConditionRatio;
//# sourceMappingURL=typeConditionRatio.js.map