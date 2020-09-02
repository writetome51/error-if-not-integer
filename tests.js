import {errorIfNotInteger} from './index.js';


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
	errorIfNotInteger(true);
} catch (e) {
	errorTriggered = true;
}
if (errorTriggered) console.log('test 2A passed');
else console.log('test 2A FAILED');


errorTriggered = false;
try {
	errorIfNotInteger(0.00000001);
} catch (e) {
	errorTriggered = true;
}
if (errorTriggered) console.log('test 3 passed');
else console.log('test 3 FAILED');


errorTriggered = false;
try {
	errorIfNotInteger(1.000000000000001);
} catch (e) {
	errorTriggered = true;
}
if (errorTriggered) console.log('test 3A passed');
else console.log('test 3A FAILED');


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
