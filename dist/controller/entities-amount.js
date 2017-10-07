"use strict";

var _slicedToArray2 = require("babel-runtime/helpers/slicedToArray");

var _slicedToArray3 = _interopRequireDefault(_slicedToArray2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _require = require("./convert"),
    convertUnit = _require.convertUnit,
    convertCond = _require.convertCond;

var _require2 = require("./typeSingle"),
    single = _require2.single;

var _require3 = require("./typeDate"),
    typeDate = _require3.typeDate;

var _require4 = require("./typeBetween"),
    typeBetween = _require4.typeBetween;

var _require5 = require("./regex"),
    regex = _require5.regex;

var _require6 = require("./typeRatio"),
    ratio = _require6.ratio;

var _require7 = require("./typeCondition"),
    typeCond = _require7.typeCond;

var _require8 = require("./typeMoney"),
    typeMoney = _require8.typeMoney;

var _require9 = require("./typeConditionRatio"),
    ConditionRatio = _require9.ConditionRatio;

var inputData = function inputData(input) {
    var internet = void 0,
        money = void 0,
        other = void 0,
        entity = void 0,
        data = void 0,
        len = void 0,
        lenunit = void 0;
    var inputUpper = input.toUpperCase();

    var _regex = regex(inputUpper),
        _regex2 = (0, _slicedToArray3.default)(_regex, 9),
        value = _regex2[0],
        value_asNumber = _regex2[1],
        unit_Internet = _regex2[2],
        unit_Phone = _regex2[3],
        unit_Money = _regex2[4],
        unit_Date = _regex2[5],
        unit_Cond = _regex2[6],
        unit_Other = _regex2[7],
        unit_Number = _regex2[8];

    if (unit_Internet) {
        unit_Internet[0] = convertUnit(unit_Internet[0]);
        if (value && unit_Cond) {
            unit_Cond[0] = convertCond(unit_Cond[0]);
            data = typeCond(value[0], unit_Internet[0], unit_Cond[0]);
        } else if (unit_Cond) {
            unit_Cond[0] = convertCond(unit_Cond[0]);
            data = typeCond(value, unit_Internet[0], unit_Cond[0]);
        } else if (value) data = single(value[0], value_asNumber, unit_Internet[0]);else if (!value) data = single("1", value_asNumber, unit_Internet[0]);
        entity = { Internet: data };
    } else if (unit_Phone) {
        var phone = unit_Phone[0];
        unit_Phone[0] = convertUnit(unit_Phone[0]);
        if (unit_Phone[0] == phone) data = single(unit_Phone[0], value_asNumber, null);else if (unit_Cond) {
            unit_Cond[0] = convertCond(unit_Cond[0]);
            data = typeCond(value[0], unit_Phone[0], unit_Cond[0]);
        } else data = single(value[0], value_asNumber, unit_Phone[0]);
        entity = { Phone: data };
    } else if (unit_Other) {
        unit_Other[0] = convertUnit(unit_Other[0]);
        data = single(value[0], value_asNumber, unit_Other[0]);
        entity = { Other: data };
    } else if (unit_Money && unit_Date != "บ่าย") {
        unit_Money[0] = convertUnit(unit_Money[0]);
        if (unit_Cond && unit_Date) {
            unit_Date[0] = convertUnit(unit_Date[0]);
            unit_Cond[0] = convertCond(unit_Cond[0]);
            data = ConditionRatio(value, unit_Money[0], unit_Date[0], unit_Cond[0]);
        } else if (unit_Date) {
            unit_Date[0] = convertUnit(unit_Date[0]);
            data = ratio(value, unit_Money[0], unit_Date[0], unit_Cond);
        } else if (value && unit_Cond) {
            unit_Cond[0] = convertCond(unit_Cond[0]);
            data = typeMoney(value, unit_Money[0], unit_Cond[0]);
        } else data = single(value[0], value_asNumber, unit_Money[0]);
        entity = { Money: data };
    } else if (unit_Date && !unit_Number) {
        unit_Date[0] = convertUnit(unit_Date[0]);
        if (value) len = value.length;
        if (unit_Date) lenunit = unit_Date.length;
        if (len == 2) {
            if (value_asNumber) {
                value_asNumber[0] = convertCond(value_asNumber[0]);
                data = typeDate(value, unit_Date, unit_Cond, value_asNumber);
            } else if (unit_Date.length == 1) data = typeDate(value, unit_Date[0], unit_Cond, value_asNumber);else {
                unit_Date[1] = convertUnit(unit_Date[1]);
                data = typeDate(value, unit_Date, unit_Cond, value_asNumber);
            }
        } else if (len == 3 || len == 4) data = typeDate(value, unit_Date, unit_Cond, value_asNumber);else if (value_asNumber && unit_Cond) {
            unit_Cond[0] = convertCond(unit_Cond[0]);
            value_asNumber[0] = convertCond(value_asNumber[0]);
            if (unit_Date.length == 2 && value_asNumber.length == 2) {
                unit_Date[1] = convertUnit(unit_Date[1]);
                value_asNumber[1] = convertCond(value_asNumber[1]);
            }
            data = typeDate(value, unit_Date, unit_Cond, value_asNumber);
        } else if (lenunit == 2 && unit_Cond) {
            unit_Date[1] = convertUnit(unit_Date[1]);
            unit_Cond[0] = convertCond(unit_Cond[0]);
            data = typeDate(value, unit_Date, unit_Cond[0], value_asNumber);
        } else if (value && unit_Cond) {
            unit_Cond[0] = convertCond(unit_Cond[0]);
            data = typeDate(value, unit_Date[0], unit_Cond[0], value_asNumber);
        } else if (value_asNumber) {
            value_asNumber[0] = convertCond(value_asNumber[0]);
            data = single(value, value_asNumber, unit_Date[0]);
        } else if (unit_Cond) {
            unit_Cond[0] = convertCond(unit_Cond[0]);
            data = typeDate(value, unit_Date[0], unit_Cond[0], value_asNumber);
        } else if (!value) data = single("1", value_asNumber, unit_Date[0]);else data = single(value[0], value_asNumber, unit_Date[0]);
        entity = { Date_Time: data };
    } else {
        if (value) len = value.length;
        if (len == 2) data = typeBetween(value, unit_Number, unit_Cond);else if (unit_Cond) {
            unit_Cond[0] = convertCond(unit_Cond[0]);
            if (unit_Cond[0] == "between") data = typeBetween(value, unit_Number, unit_Cond[0]);else data = typeCond(value[0], unit_Number, unit_Cond[0]);
        } else if (unit_Date) {
            unit_Date[0] = convertUnit(unit_Date[0]);
            data = data = ratio(value, null, unit_Date[0], unit_Cond);
        } else if (unit_Number) {
            unit_Number[0] = convertUnit(unit_Number[0]);
            data = single(value[0], value_asNumber, unit_Number[0]);
        } else data = single(value[0], value_asNumber, null);
        entity = { Number: data };
    }

    return entity;
};

module.exports.inputData = inputData;
//# sourceMappingURL=entities-amount.js.map