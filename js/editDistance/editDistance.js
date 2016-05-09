// Distance between two strings
function editDistance(stringA, stringB) {
	return stringA.length + stringB.length - 2 * maxOverlap(stringA, stringB).length;
}

assertDistance("A", "", 1)
assertDistance("ABC", "CBA", 4)
assertDistance("X", "XXX", 2)

assertDistance("ABCDEF", "ACE", 3)
assertDistance("ACE", "ABCDEF", 3)

// Largest substring (maybe noncontiguous) that appears in both strings
function maxOverlap(stringA, stringB) {
	var bestSoFar = [];
	bestSoFar[0] = "";

	for (var i=1; i<=stringA.length; i++) {
		bestSoFar[i] = "";
		for (var j=0; j<i; j++) {
			var current = stringA[i-1];
			var prev = bestSoFar[j];
			var candidate = prev + current;
			if (isSubset(candidate, stringB) && candidate.length > bestSoFar[i].length) {
				//console.log(i + ": " + candidate);
				bestSoFar[i] = candidate;
			} else if (prev.length > bestSoFar[i].length) {
				//console.log(i + ": " + prev);
				bestSoFar[i] = prev;
			}
		}
	}
	return bestSoFar[stringA.length];
}

assertOverlap("", "", "")
assertOverlap("ABC", "BCD", "BC")
assertOverlap("ABCDEF", "ACE", "ACE") // PROBLEM
assertOverlap("ACE", "ABCDEF", "ACE")
assertOverlap("BBB", "BBBB", "BBB")

function isSubset(smallString, bigString) {
	var index = 0;
	for (c of smallString) {
		var matched = false
		for (var i=index; i<bigString.length; i++) {
			if (c == bigString[i]) {
				matched = true
				index = i+1
				break;
			}
		}
		if (!matched) return false
	}
	return true
}

assert(isSubset("", ""), true, "subset test");
assert(isSubset("A", "ABC"), true, "subset test");
assert(isSubset("AC", "ABC"), true, "subset test");
assert(isSubset("CAT", "CAT"), true, "subset test");

assert(isSubset("AB", "B"), false, "subset test");
assert(isSubset("A", ""), false, "subset test");
assert(isSubset("F", "Q"), false, "subset test");

//=============================================
// Testing Functions

function assertOverlap(stringA, stringB, expectedOverlap) {
	assert(maxOverlap(stringA, stringB), expectedOverlap, "Testing overlap between [" + stringA + "] and [" + stringB + "].")
}

function assertDistance(stringA, stringB, expectedDistance) {
	assert(editDistance(stringA, stringB), expectedDistance, "Testing distance between [" + stringA + "] and [" + stringB + "].")
}

function assert(actual, expected, msg) {
	if (actual == expected) {
		console.log("ok")
	} else {
		console.log("uh-oh! " + msg + "(expected [" + expected + "], actually got [" + actual + "])")
	}
}