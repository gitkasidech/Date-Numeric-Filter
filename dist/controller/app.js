"use strict";

var _stringify = require("babel-runtime/core-js/json/stringify");

var _stringify2 = _interopRequireDefault(_stringify);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _require = require("./entities-amount.js"),
    inputData = _require.inputData;

var main = function main(input) {
    var len = input.length;
    var entity = [];
    for (var i = 0; i < len; i++) {
        var data = inputData(input[i]);
        entity.push(data);
    }
    console.log((0, _stringify2.default)(entity));
    return entity;
};

// export const mainX = async(req,res) => {
//     const inf = req.body.data
//     const len = inf.length
//     let entity = []
//     for (let i = 0; i < len; i++) {
//         let data = inputData(inf[i])
//         entity.push(data)
//     }
//     console.log(JSON.stringify(entity))
//     const output = entity 
//     res.json(output)
// }

module.exports.main = main;
//# sourceMappingURL=app.js.map