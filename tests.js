"use strict";
Object.defineProperty(exports, "__esModule", {value: true});
var errorIfNotInteger = require("./index").errorIfNotInteger;


errorIfNotInteger(Number.MAX_VALUE); // no error.
errorIfNotInteger(1);
errorIfNotInteger(Number.MIN_SAFE_INTEGER);
console.log('test 1 passed');


let errorTriggered = false;
try {
	errorIfNotInteger('1');
} catch (e) {
	errorTriggered = true;
}
if (errorTriggered) console.log('test 2 passed');
else console.log('test 2 FAILED');


errorTriggered = false;
try {
	errorIfNotInteger(1.0000000001);
} catch (e) {
	errorTriggered = true;
}
if (errorTriggered) console.log('test 3 passed');
else console.log('test 3 FAILED');


errorTriggered = false;
try {
	errorIfNotInteger('');
} catch (e) {
	errorTriggered = true;
}
if (errorTriggered) console.log('test 4 passed');
else console.log('test 4 FAILED');


errorTriggered = false;
try {
	errorIfNotInteger([]);
} catch (e) {
	errorTriggered = true;
}
if (errorTriggered) console.log('test 5 passed');
else console.log('test 5 FAILED');
