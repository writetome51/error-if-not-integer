"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var notInteger = require("@writetome51/is-integer-is-float").notInteger;
var errorIfNotFiniteNumber = require("error-if-not-finite-number").errorIfNotFiniteNumber;


function errorIfNotInteger(arg) {
	errorIfNotFiniteNumber(arg);
	if (notInteger(arg))  throw new Error('Input must be integer');
}
exports.errorIfNotInteger = errorIfNotInteger;
