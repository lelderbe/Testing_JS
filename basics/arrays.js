function ex_arrays_1() {
	console.log('\n-------------- array -----------------');
	var arr = [
		[1, 2, 3],
		[4, 5, 6],
	]

	console.log('arr = ', arr);
	console.log('arr.length :', arr.length);
	console.log('arr[0] :', arr[0]);
	console.log('arr[1][1] :', arr[1][1]);
	arr[4] = [1, 2];
	console.log('arr = ', arr);

	arr.push([3, 3, 3]);
	console.log('arr = ', arr);

	var a = 11;
	console.log(a);
	console.log(this);

	for (let x of arr) {
		console.log(x);
	}

	arr2 = [11, 21, 33];
	console.log('arr2:', arr2);
	console.log('forEach:')
	arr2.forEach(console.log);

	let arr3 = [44, ...arr2];
	console.log('arr3:', arr3);

	let [first, ...rest] = 'Hello';
	console.log('first:', first, 'rest:', rest);
}

// ex_arrays_1();

function ex_arrays_2() {
	function sum_by_index(array) {
		let sum = 0;
		for (let i in array) {
			sum += array[i];
		}
		return (sum);
	}

	function sum_by_element(array) {
		let sum = 0;
		for (let x of array) {
			sum += x;
		}
		return (sum);
	}

	console.log(sum_by_index([1, 2, 3, 4]));
	console.log(sum_by_element([1, 2, 3, 4]));
}

// ex_arrays_2();

/**
 * Deep sort
 */
function ex03() {
	const sortObjectArrays = (object) => {
		for (const key in object) {
			if (Array.isArray(object[key])) {
				object[key].forEach((element) => {
					if (Array.isArray(element)) {
						element.sort((a, b) => a - b);
					} else if (element && typeof element === 'object') {
						sortObjectArrays(element);
					}
				});
				object[key].sort((a, b) => a - b);
			} else if (object[key] && typeof object[key] === 'object') {
				sortObjectArrays(object[key]);
			}
		}
	};

	const o = {'1': [1, 4, null, 0], '2': {'3': [7, 0, [2, 1], 1], '4': ['3', '1' , '0', '11']}};
	console.log(o);
	sortObjectArrays(o);
	console.log(o);
}

// ex03();

function ex04() {
	{
		const arr = ['Apple', 'Tomato', 'Orange'];
		arr.test = 2;
		console.log('arr:', arr);

		console.log('\n-------------- iterate for ... i -----------------');
		for (let i = 0; i < arr.length; i++) {
			console.log(`arr[${i}]:`, arr[i]);
		}

		console.log('\n-------------- iterate for ... in -----------------');
		for (let key in arr) {
			console.log(key, ':', arr[key]);
		}

		console.log('\n-------------- iterate for ... of -----------------');
		for (let value of arr) {
			console.log(value);
		}

		console.log('\n-------------- iterate forEach -----------------');
		arr.forEach(value => console.log(value));

		console.log('\n------------------ length ---------------------');
		console.log('arr.length:', arr.length);
		arr.length = 0;	// empty array
		console.log('arr.length = 0; arr:', arr);
		arr.length = 2;
		console.log('arr.length = 2; arr:', arr);
	}

	console.log('\n-------------- <- push, pop -> -----------------');
	{
		let arr = [1, 2, 3];
		console.log('arr:', arr);
		arr.push(5);
		console.log('arr.push(5); arr:', arr);
		console.log('arr.pop():', arr.pop());
		console.log('arr:', arr);
	}
	console.log('\n-------------- <- shift, unshift -> -----------------');
	{
		let arr = [1, 2, 3];
		console.log('arr:', arr);
		arr.unshift(5);
		console.log('arr.unshift(5); arr:', arr);
		console.log('arr.shift():', arr.shift());
		console.log('arr:', arr);
	}
}

// ex04();	// iterate: for i, for in, for of, forEach; length, push/pop, shift/unshift

function ex05() {
	console.log('\n-------------- operations speed -----------------');
	const LIMIT = 1e5;
	console.log('elements:', LIMIT);
	let t0 = new Date();
	let arr = [];
	for (let i = 1; i < LIMIT; i++) {
		arr.push(i);
	}
	console.log(`push: ${new Date() - t0}ms`);

	t0 = new Date();
	for (let i = 1; i < LIMIT; i++) {
		arr.pop(i);
	}
	console.log(`pop: ${new Date() - t0}ms`);

	t0 = new Date();
	for (let i = 1; i < LIMIT; i++) {
		arr.unshift(i);
	}
	console.log(`unshift: ${new Date() - t0}ms`);

	t0 = new Date();
	for (let i = 1; i < LIMIT; i++) {
		arr.shift(i);
	}
	console.log(`shift: ${new Date() - t0}ms`);
}

// ex05();	// operations speed

function ex06() {
	console.log('\n-------------- ???????????????? ?? ?????????????????? -----------------');
	{
		const styles = ['Jazz', 'Blues'];
		console.log(styles);
		styles.push('R-N-R');
		console.log(styles);
		if (styles.length) {
			let pos = Math.floor(styles.length / 2);
			styles[pos] = 'Classic';
		}
		console.log(styles);
		console.log(styles.shift());
		console.log(styles);
		styles.unshift('Rap', 'Raggy');
		console.log(styles);
	}

	console.log('\n-------------- ?????????? ?? ?????????????????? ?????????????? -----------------');
	{
		let arr = ["a", "b"];

		arr.push(function() {
			console.log(this);
		})

		arr[2](); // ?
		console.log(arr);
	}

	console.log('\n-------------- ?????????? ?????????????????? ?????????? -----------------');
	{
		function getMaxSubSum(arr) {
			let peak = 0;
			let sum = 0;
			for (const value of arr) {
				sum = (sum + value <= 0) ? 0 : sum + value;
				peak = (sum > peak) ? sum : peak;
			}
			return peak;
		}

		console.log(getMaxSubSum([-1, 2, 3, -9]));// = 5 (?????????? ????????????????????)
		console.log(getMaxSubSum([2, -1, 2, 3, -9]));// = 6
		console.log(getMaxSubSum([-1, 2, 3, -9, 11]));// = 11
		console.log(getMaxSubSum([-2, -1, 1, 2]));// = 3
		console.log(getMaxSubSum([100, -9, 2, -3, 5]));// = 100
		console.log(getMaxSubSum([1, 2, 3]));// = 6 (?????????? ??????)
		console.log(getMaxSubSum([-1, -2, -3]));// = 0
	}
}

// ex06();

function ex07() {
	console.log('\n-------------- NOT splice -----------------');
	{
		const arr = [1, 2, 3];
		console.log('arr:', arr);
		console.log('delete arr[1];'); delete arr[1];
		console.log('arr:', arr);
	}

	console.log('\n-------------- splice: delete elements -----------------');
	{
		const arr = [1, 2, 3];
		console.log('arr:', arr);
		console.log('arr.splice(1, 1);'); arr.splice(1, 1);
		console.log('arr:', arr);
	}

	console.log('\n-------------- splice: insert -----------------');
	{
		const arr = [1, 2, 3];
		console.log('arr:', arr);
		arr.splice(1, 0, 11, 12);
		console.log('arr:', arr);
	}

	console.log('\n-------------- splice: delete & insert -----------------');
	{
		const arr = [1, 2, 3];
		console.log('arr:', arr);
		let removed = arr.splice(1, 1, 11, 12);
		console.log('arr:', arr);
		console.log('removed elements:', removed);
	}

	console.log('\n-------------- slice: get copy of arr (part) -----------------');
	{
		const arr = [1, 2, 3, 4, 5];
		console.log('arr:', arr);
		console.log('arr.slice(1, 3):', arr.slice(1, 3));
	}

	console.log('\n-------------- concat: create new from ... -----------------');
	{
		const arr = [1, 2];
		console.log('arr:', arr);
		console.log('arr.concat([3, 4], 5, [6, 7]):', arr.concat([3, 4], 5, [6, 7]));
	}

	console.log('\n-------------- keys sort order -----------------');
	{
		const obj = {};
		obj[4] = '42';
		obj[1] = '1';
		obj[11] = '11';
		obj['12'] = '12';
		obj[0] = 'zero';
		obj[2] = '22';
		console.log(obj);
	}
}

// ex07();	// splice, slice, concat

function ex08() {
	// ?????????? arr.forEach ?????????????????? ?????????????????? ?????????????? ?????? ?????????????? ???????????????? ??????????????.
	// arr.forEach(function(item, index, array) {
	// 	// ... ???????????? ??????-???? ?? item
	// });
	console.log('\n-------------- ??????????????: [].forEach() -----------------');
	{
		['a', 'b', 'c'].forEach(console.log);
	}

	{
		['a', 'b', 'c'].forEach((item, index, arr) => {
			console.log(`item: ${item}, index: ${index}, arr: ${arr}`);
		});
	}

	{
		const arr = [1, 2, 3];
		console.log('arr:', arr);
		const arr2 = arr.forEach((item, index, arr) => {
			console.log(`item: ${item}, index: ${index}, arr: ${arr}`);
			item = item * 2;
			return item;
		});
		console.log('arr:', arr);
		console.log('arr2:', arr2);
	}

	console.log('\n-------------- ??????????: [].indexOf() === -----------------');
	{
		const arr = [1, 0, false];
		console.log('arr:', arr);
		console.log('arr.indexOf(0):', arr.indexOf(0));
		console.log('arr.indexOf(false):', arr.indexOf(false));
		console.log('arr.indexOf(null):', arr.indexOf(null));
	}

	console.log('\n-------------- ??????????: [].includes() === -----------------');
	{
		console.log("['a', 'b', 'c'].includes('z'):", ['a', 'b', 'c'].includes('z'));
		console.log("['a', 'b', 'c'].includes(2):", ['a', 'b', 'c'].includes(2));
		console.log("['a', 'b', 'c'].includes('c'):", ['a', 'b', 'c'].includes('c'));
		console.log("['a', 'b', 'c'].includes('1', 'c'):", ['a', 'b', 'c'].includes('1', 'c'));
		console.log("['a', 'b', 'c'].includes('a', 'c'):", ['a', 'b', 'c'].includes('a', 'c'));
	}

	console.log('\n-------------- ??????????: [].find() ???????? ???????? (???????????? ????????????????????) ?????????????? -----------------');
	{
		const users = [
			{id: 1, name: 'Anna'},
			{id: 2, name: 'Jack'},
			{id: 3, name: 'Steve'},
		]
		console.log('users:', users);

		let obj = users.find((item, index, arr) => {
			return item.id == 1;
		});
		console.log(obj);

		obj = users.find((item) => item.id == 3);
		console.log(obj);

		obj = users.find((item) => item.id == 4);
		console.log(obj);
	}

	console.log('\n-------------- ??????????: [].findIndex() -----------------');
	{
		const users = [
			{id: 1, name: 'Anna'},
			{id: 2, name: 'Jack'},
			{id: 3, name: 'Steve'},
		]
		console.log('users:', users);

		let index = users.findIndex((item, index, arr) => {
			return item.id == 1;
		});
		console.log(index);

		index = users.findIndex((item) => item.id == 3);
		console.log(index);

		index = users.findIndex((item) => item.id == 4);
		console.log(index);
	}


	console.log('\n-------------- ??????????: [].filter() ???????????????????? ???????????? ???? ???????? ???????????????????? ?????????????????? -----------------');
	{
		const users = [
			{id: 1, name: 'Anna', sex:'F'},
			{id: 2, name: 'Jack', sex:'M'},
			{id: 3, name: 'Steve', sex:'M'},
		]
		console.log('users:', users);

		let arr = users.filter((item, index, arr) => {
			return item.sex === 'M';
		});
		console.log(arr);

		arr = users.filter((item) => item.sex === 'F');
		console.log(arr);

		arr = users.filter((item) => item.sex === 'Z');
		console.log(arr);
	}

	console.log('\n-------------- ????????????????????????????: [].map() ???????????????? ?????????????? ?????? ?????????????? ???????????????? ?????????????? ?? ???????????????????? ???????????? ?????????????????????? ???????????????????? ???????? ??????????????. -----------------');
	{
		const arr = [1, 2, 3];
		console.log('arr:', arr);
		const arr2 = arr.map((item, index, arr) => {
			console.log(`item: ${item}, index: ${index}, arr: ${arr}`);
			item = item * 2;
			return item;
		});
		console.log('arr:', arr);
		console.log('arr2:', arr2);
	}

	console.log('\n-------------- ????????????????????????????: [].sort(fn) ?????????????????? ???????????? ???? ?????????? -----------------');
	{
		const arr = [1, 2, 15];
		console.log('arr:', arr);
		console.log('arr.sort();'); arr.sort(); // ???? ?????????????????? ???????????????? ?????????????????????? ?????? ????????????.
		console.log('arr:', arr);
		console.log('arr.sort((a, b) => a - b);'); arr.sort((a, b) => a - b);
		console.log('arr:', arr);
	}

	console.log('\n-------------- ????????????????????????????: [].sort(fn) ?????????????????? ???????????? ???? ?????????? -----------------');
	{
		const arr = [1, -2, 15, 2, 0, 8];
		console.log(arr);
		arr.sort(function(a, b) {
			console.log( a + " <> " + b );
			return a - b;
		});
		console.log(arr);
	}

	console.log('\n-------------- ????????????????????????????: [].reverse() - ???? ?????????? -----------------');
	{
		console.log('[1, 2, 3].reverse():', [1, 2, 3].reverse());
	}

	console.log('\n-------------- ????????????????????????????: "".split() => [] -----------------');
	{
		console.log('one, two, three'.split(',').map(item => item.trim()));
		console.log('abcde'.split(''));
		console.log('abcde'.split('').map(item => item.codePointAt(0).toString(2)));
	}

	console.log('\n-------------- ????????????????????????????: [].join() -----------------');
	{
		console.log(['a', 'b', 'c'].join('-'));
		console.log(['a', undefined, 'b', null, 'c'].join('-'));
	}

	console.log('\n-------------- ????????????????????????????: [].reduce() ?????????????????? ???????? ???????????????? ???? ???????????? ?????????? ??????????????, ?????????????? func ?????? ?????????????? ???????????????? ?? ?????????????????? ?????????????????????????? ?????????????????? ?????????? ???????????????? -----------------');
	{
		let arr = [2, 4, 10, 8, 0, -2];

		console.log(arr.reduce((acc, item, index, arr) => {
			return acc && !(item % 2);
		}, true));
	}

	console.log('\n------------- reduce: sum elements ----------------');
	{
		const arr = [1, 2, 3, 4, 5];
		console.log(arr.reduce((sum, current) => sum + current, 0));
	}

	console.log('\n------------- reduce: check odd elements only ----------------');
	{
		const arr = [2, 4, 10, 3, 0, -2];

		console.log(arr.reduce((acc, item, index, arr) => {
			// console.log(acc, item, index, arr);
			return acc && !(item % 2);
		}, true));
	}

	console.log('\n-------------- reduce: check array sorted -----------------');
	{
		const arr = [1, 2, 3, 2, 5];
		if (arr.reduce((prev, item) => {
			if (prev === undefined) {
				return undefined;
			}
			if (prev <= item) {
				return item;
			}
			return undefined;
		}, arr[0])) {
			console.log('array sorted');
		} else {
			console.log('array NOT sorted');
		}
	}
}

// ex08();

function ex09() {
	console.log('\n-------------- border-left-width ?? borderLeftWidth -----------------');
	{
		function camelize(str) {
			return str.split('-')
				.map((item, index) => index == 0 ? item : item[0].toUpperCase() + item.slice(1))
				.join('');
		}

		console.log(camelize("background-color")); // == 'backgroundColor';
		console.log(camelize("list-style-image")); // == 'listStyleImage';
		console.log(camelize("-webkit-transition")); // == 'WebkitTransition';
	}

	console.log('\n-------------- ???????????????????? ???? ?????????????????? -----------------');
	{
		function filterRange(arr, a, b) {
			return arr.filter(item => item >= a && item <= b);
		}

		const arr = [5, 3, 8, 1];
		const filtered = filterRange(arr, 1, 4);
		console.log(filtered); // 3,1 (?????????????????????? ????????????????)
		console.log(arr); // 5,3,8,1 (?????? ??????????????????)
	}

	console.log('\n-------------- ???????????????????? ???? ?????????????????? "???? ??????????" -----------------');
	{
		function filterRangeInPlace(arr, a, b) {
			for (let i = 0; i < arr.length; i++) {
				if (arr[i] < a || arr[i] > b) {
					arr.splice(i, 1);
					i--;
				}
			}
		}

		const arr = [5, 3, 8, 1];
		filterRangeInPlace(arr, 1, 4); // ?????????????? ?????????? ?????? ?????????????????? 1..4
		console.log(arr); // [3, 1]
	}

	console.log('\n-------------- ?????????????????????? ?? ?????????????? ???? ???????????????? -----------------');
	{
		const arr = [5, 2, 1, -10, 8];
		// ... ?????? ?????? ?????? ???????????????????? ???? ????????????????
		arr.sort((a, b) => b - a);
		console.log(arr); // 8, 5, 2, 1, -10
	}

	console.log('\n-------------- ?????????????????????? ?? ?????????????????????????? ???????????? -----------------');
	{
		function copySorted(arr) {
			return arr.slice().sort();
		}

		const arr = ["HTML", "JavaScript", "CSS"];
		const sorted = copySorted(arr);

		console.log(sorted); // CSS, HTML, JavaScript
		console.log(arr); // HTML, JavaScript, CSS (?????? ??????????????????)
	}

	console.log('\n-------------- ?????????????? ?????????????????????? ?????????????????????? -----------------');
	{
		function Calculator() {
			this.ops = {
				'+': (a, b) => +a + +b,
				'-': (a, b) => a - b,
				// '-': function(a, b) { return a - b; },
			};

			this.calculate = (str) => {
				const arr = str.split(' ');
				if (arr[1] && arr[1] in this.ops) {
					return this.ops[arr[1]](arr[0], arr[2]);
				}
				return NaN;
			};

			this.addMethod = function(op, f) {
				this.ops[op] = f;
			};
		}

		const calc = new Calculator();
		console.log('3 + 7:', calc.calculate("3 + 7")); // 10
		console.log('3 - 7:', calc.calculate("3 - 7")); // 10

		const powerCalc = new Calculator();
		powerCalc.addMethod("*", (a, b) => a * b);
		powerCalc.addMethod("/", (a, b) => a / b);
		powerCalc.addMethod("**", (a, b) => a ** b);

		console.log('2 * 3:', powerCalc.calculate("2 * 3")); // 6
		console.log('20 / 3:', powerCalc.calculate("20 / 3")); // 6.(6)
		console.log('2 ** 5:', powerCalc.calculate("2 ** 5")); // 32
	}

	console.log('\n-------------- ???????????????????????????????? ?? ???????????? ???????? -----------------');
	{
		const vasya = { name: "????????", age: 25 };
		const petya = { name: "????????", age: 30 };
		const masha = { name: "????????", age: 28 };

		const users = [ vasya, petya, masha ];

		const names = users.map((item) => item.name);

		console.log(names); // ????????, ????????, ????????
	}

	console.log('\n-------------- ???????????????????????????????? ?? ?????????????? -----------------');
	{
		const vasya = { name: "????????", surname: "????????????", id: 1 };
		const petya = { name: "????????", surname: "????????????", id: 2 };
		const masha = { name: "????????", surname: "??????????????", id: 3 };

		const users = [ vasya, petya, masha ];

		const usersMapped = users.map((user) => (
			{ fullName: `${user.name} ${user.surname}`, id: user.id }
		));

			/*
			usersMapped = [
			  { fullName: "???????? ????????????", id: 1 },
			  { fullName: "???????? ????????????", id: 2 },
			  { fullName: "???????? ??????????????", id: 3 }
			]
			*/

		console.log(usersMapped[0].id) // 1
		console.log(usersMapped[0].fullName) // ???????? ????????????
		// console.log(usersMapped);
	}

	console.log('\n-------------- ?????????????????????????? ?????????????????????????? ???? ???????????????? -----------------');
	{
		function sortByAge(users) {
			users.sort((a, b) => a.age - b.age);
		}

		const vasya = { name: "????????", age: 25 };
		const petya = { name: "????????", age: 30 };
		const masha = { name: "????????", age: 28 };

		const arr = [ vasya, petya, masha ];

		console.log(arr);
		sortByAge(arr);
		console.log(arr);

		// ????????????: [vasya, masha, petya]
		console.log(arr[0].name); // ????????
		console.log(arr[1].name); // ????????
		console.log(arr[2].name); // ????????
	}

	console.log('\n-------------- ?????????????????????? ???????????? -----------------');
	{
		// ???????????????? ?????? ?????????????????? ?????????????????? ???????????? ??? ??????????
		function shuffle(array) {
			for (let i = array.length - 1; i > 0; i--) {
				let j = Math.floor(Math.random() * (i + 1)); // ?????????????????? ???????????? ???? 0 ???? i
				[array[i], array[j]] = [array[j], array[i]];
			}
		}

		const arr = [1, 2, 3];
		shuffle(arr); console.log(arr);
		shuffle(arr); console.log(arr);
		shuffle(arr); console.log(arr);
	}

	{
		// function shuffle(array) {
		// 	array.sort(() => Math.random() - 0.5);
		// }

		// ???????????????? ?????? ?????????????????? ?????????????????? ???????????? ??? ??????????
		function shuffle(array) {
			for (let i = array.length - 1; i > 0; i--) {
				let j = Math.floor(Math.random() * (i + 1)); // ?????????????????? ???????????? ???? 0 ???? i
				[array[i], array[j]] = [array[j], array[i]];
			}
		}

		// ?????????????? ?????????????????????? ?????? ???????? ?????????????????? ??????????????????
		let count = {
			'123': 0,
			'132': 0,
			'213': 0,
			'231': 0,
			'321': 0,
			'312': 0
		};

		for (let i = 0; i < 100000; i++) {
			let array = [1, 2, 3];
			shuffle(array);
			count[array.join('')]++;
		}

		// ???????????????? ???????????????????? ???????? ?????????????????? ??????????????????
		for (let key in count) {
			console.log(`${key}: ${count[key]}`);
		}
	}

	console.log('\n-------------- ???????????????? ?????????????? ?????????????? -----------------');
	{
		function getAverageAge(users) {
			return users.reduce((acc, item) => acc + item.age, 0) / users.length;
		}

		const vasya = { name: "????????", age: 25 };
		const petya = { name: "????????", age: 30 };
		const masha = { name: "????????", age: 29 };

		const arr = [ vasya, petya, masha ];

		console.log('getAverageAge(arr):', getAverageAge(arr)); // (25 + 30 + 29) / 3 = 28
	}

	console.log('\n-------------- ???????????????? ???????????????????? ???????????????? ?????????????? -----------------');
	{
		function unique(arr) {
			const result = [];
			for (const item of arr) {
				if (!result.includes(item)) {
					result.push(item);
				}
			}
			return result;
		}

		let strings = ["????????????", "????????????", "????????", "????????",
			"????????", "????????", "????????????", "????????????", ":-O"
		];

		console.log(unique(strings)); // ????????????, ????????, :-O
	}
}

ex09();
