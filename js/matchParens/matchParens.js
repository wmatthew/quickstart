// Are the parens matching in a string??

var partners = {
	'<': '>',
	'[': ']',
	'{': '}',
	'(': ')'
}

function isMatched(text) {
	// drop non-delims
	text = text.replace(/[a-zA-Z0-9 ]/g, ''); // TODO: select for parens, not other stuff...

	//console.log(text);

	var stack = [];
	for (c of text.split('')) {
		if (stack.length > 0 && c == partners[stack[0]]) {
			stack.shift();
		} else {
			stack.unshift(c);
		}
	}

	return stack.length == 0;
}



function assert(actual, expected, msg) {
	if (actual == expected) {
		console.log("ok.");
	} else {
		console.log("Uh-oh! " + msg + " (Expected:" + expected + " but actually got " + actual + ")")
	}
}

function assertMatched(str) {
	assert(isMatched(str), true, str + " should be matched!");
}

function assertNotMatched(str) {
	assert(isMatched(str), false, str + " should NOT be matched!");
}

assertMatched("(())");
assertMatched("a(a(a)a)a");
assertMatched("[]");
assertMatched("[sdfhsfh]");
assertMatched("({})");
assertMatched("<<<(())>>>");
assertMatched("");
assertMatched("abc");

assertNotMatched("<{>}");
assertNotMatched("({}");
assertNotMatched("({})))");
assertNotMatched("a(a{a}b");
assertNotMatched("{{");
