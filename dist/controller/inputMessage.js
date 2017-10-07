'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.regular1 = undefined;

var _stringify = require('babel-runtime/core-js/json/stringify');

var _stringify2 = _interopRequireDefault(_stringify);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var regex = require('./regexCheckInput');

var _require = require('./app'),
    main = _require.main;

var regular1 = exports.regular1 = function regular1(req, res) {
    var input = req.body.messageData;
    for (var n in regex) {
        var _newData = input.match(regex[n]);
        if (_newData != null) {
            console.log(_newData);
        }
    }
    var output = main(newData);
    console.log((0, _stringify2.default)(output));
    res.json(output);
};
//# sourceMappingURL=inputMessage.js.map