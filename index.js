import {errorIfNotFiniteNumber} from 'error-if-not-finite-number';
import {notInteger} from '@writetome51/is-integer-is-float';


export function errorIfNotInteger(arg) {
	errorIfNotFiniteNumber(arg);
	if (notInteger(arg)) throw new Error('Input must be integer');
}
