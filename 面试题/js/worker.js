function calculate() {
	var ret = 0;
	for(var i = 1; i <= 1e9; i++) {
		ret += i;
	}
	return ret;
}

postMessage(calculate());