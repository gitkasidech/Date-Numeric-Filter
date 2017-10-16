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
    var newData = void 0,
        data = void 0;
    var input = req.body.messageData;
    for (var n in regex) {
        newData = input.match(regex[n]);
        if (newData) data = newData;
    }
    console.log(data);
    var output = main(data);
    console.log((0, _stringify2.default)(output));
    res.json(output);
};
//# sourceMappingURL=inputMessage.js.map