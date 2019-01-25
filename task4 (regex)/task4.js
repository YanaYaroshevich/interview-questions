/*
* Problem:
* Return the number (count) of vowels in the given string.
* We will consider a, e, i, o, and u as vowels for this Kata.
* The input string will only consist of lower case letters and/or spaces.
* */


/*
* The g modifier is used to perform a global match (find all matches rather than stopping after the first match).
* Tip: To perform a global, case-insensitive search, use this modifier together with the "i" modifier.
* */

function getCount(str) {
	return (str.match(/[aeiou]/ig) || []).length;
}

console.log(getCount('alAlOooI'));
