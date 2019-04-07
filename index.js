"use strict";
Object.defineProperty(exports, "__esModule", {value: true});
var notInteger_1 = require("@writetome51/is-integer-is-float");
var errIfNotFintNum_1 = require("error-if-not-finite-number");


function errorIfNotInteger(arg) {
	errIfNotFintNum_1.errorIfNotFiniteNumber(arg);
	if (notInteger_1.notInteger(arg)) throw new Error('Input must be integer');
}
exports.errorIfNotInteger = errorIfNotInteger;
