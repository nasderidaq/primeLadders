'use strict';

const win = window;
const {
	Map,
	Math: {floor},
	Set,
} = win;

const primes = new Set([2, 3]);
let maxPrime = 3;

const generatePrimesUpTo = (n) => {
	for (let i = maxPrime + 2; i <= n; i += 2) {
		for (const prime of primes) {
			if (prime === 2) {
				continue;
			}

			const square = prime ** 2;
			if (square < i) {
				if (i % prime === 0) {
					break;
				}
			} else if (square === i) {
				break;
			} else if (square > i) {
				primes.add(i);
				maxPrime = i;
				break;
			}
		}
	}

	return primes;
};

const getRungs = (options = {}) => {
	const {
		digits = 2,
		base = 10,
		leadingZeros = false,
	} = options;

	const min = base ** (digits - 1);
	const max = min * base;
	const primes = generatePrimesUpTo(max);

	const rungs = new Map();
	for (const prime of primes) {
		if (!leadingZeros && (prime < min)) {
			continue;
		}
		if (prime >= max) {
			break;
		}

		const connections = [];
		rungs.set(prime, connections);

		for (let d = 0; d < digits; d++) {
			const mask = base ** d;
			const currentN = floor(prime / mask) % base;
			const masked = prime - (mask * currentN);
			for (let n = 0; n < base; n++) {
				const test = masked + (mask * n);
				if (test === prime) {
					continue;
				}
				if (!leadingZeros && (test < min)) {
					continue;
				}

				if (primes.has(test)) {
					connections.push(test);
				}
			}
		}
	}

	return rungs;
};

const getLongestLadder = (options = {}) => {
	const rungs = getRungs(options);
	let longest = 0;
	let ladders = [];

	for (const [start] of rungs) {
		let distance = 0;
		const visited = new Set();
		let expandingNow = new Map();
		let expandingNext = new Map([[start, [start]]]);
		while (expandingNext.size > 0) {
			distance++;
			expandingNow = expandingNext;
			expandingNext = new Map();
			for (const [prime] of expandingNow) {
				visited.add(prime);
			}

			for (const [prime, path] of expandingNow) {
				const connections = rungs.get(prime);
				for (const connection of connections) {
					if (!visited.has(connection)) {
						expandingNext.set(connection, path.concat(connection));
					}
				}
			}
		}

		if (distance >= longest) {
			if (distance > longest) {
				longest = distance;
				ladders = [];
			}

			for (const [end, path] of expandingNow) {
				if (end > start) {
					ladders.push(path);
				}
			}
		}
	}

	return {
		length: longest,
		ladders,
	};
};

window.primes = primes;
window.generatePrimesUpTo = generatePrimesUpTo;
window.getRungs = getRungs;
window.getLongestLadder = getLongestLadder;
