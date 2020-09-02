import {notInteger} from '@writetome51/is-integer-is-float';


export function errorIfNotInteger(arg) {
	if (notInteger(arg)) throw new Error("Input must be integer of type 'number'");
}
