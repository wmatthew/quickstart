// is this a palindrome?

function isPalindrome(sentence) {
	sentence = sentence.toLowerCase();
	sentence = sentence.replace(/[^a-z]/g, '');
	return sentence == sentence.split('').reverse().join('')
}

// Tests
assertPalindrome("racecar");
assertPalindrome("race car");
assertPalindrome("A man? a plan, a canal: ...panama!");
assertPalindrome("");
assertPalindrome("1111");

assertNotPalindrome("racecars");
assertNotPalindrome("r a c e");
assertNotPalindrome("cows");


function assertPalindrome(str) {
  assert(isPalindrome(str), true, "Is '" + str + "' a palindrome?");
}

function assertNotPalindrome(str) {
  assert(isPalindrome(str), false, "Is '" + str + "' a palindrome? sure hope not...");
}

function assert(expected, actual, message) {
	if (expected != actual) {
		console.log("Uh-oh: " + message + " (Expected: " + expected + ". Actual: " + actual + ")");
	} else {
		console.log("ok");
	}
}