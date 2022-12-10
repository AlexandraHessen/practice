function isValid(s) {
	const stack = [];
	const brackets = {
		')': '(',
		']': '[',
		'}': '{',
	};

	for (const current of s) {
		if (current in brackets) {
			if (brackets[current] !== stack.pop()) return false;
		} else {
			stack.push(current);
		}
	}

	return !stack.length;
}