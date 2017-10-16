"use strict";

var _require = require("./entities-amount.js"),
    inputData = _require.inputData;

var main = function main(input) {
    var entity = [];
    if (input) {
        var len = input.length;
        for (var i = 0; i < len; i++) {
            var data = inputData(input[i]);
            entity.push(data);
        }
    }
    return entity;
};

module.exports.main = main;
//# sourceMappingURL=app.js.map