import { useEffect } from "react";

function PracticeArrowFunction() {
	useEffect(() => {
		// var fn = function(a, b) {
		// 	return a + b;
		// }
		// var fn = (a, b) => {
		// 	return a + b;
		// }
		// console.log(fn(2, 8)); // 10

		// function fn2(a, b) {
		// 	return a + b;
		// }
		// console.log(fn2(66, 11));
		// console.log(((a, b) => a + b)(22, 33));
		// console.log((a=>{a = a + 10086; return a})(11));

		// var Person = {
		// 	firstName: 'hello',
		// 	lastName: 'world',
		// 	getFullName: function () {
		// 		console.log(this, '非箭头函数里的this');
		// 		var fn = function(){
		// 			console.log(this, 'fn箭头函数里的this');
		// 			return this.firstName + this.lastName;
		// 		}
		// 		return fn()
		// 	}
		// }
		// Person.getFullName();

		// var obj = {
		// 	name: '哈哈哈',
		// 	array: ['orange', 'pink'],
		// 	// sum: () => {
		// 	// 	console.log(this === window, 'this箭头函数指向');  // true
		// 	// }
		// 	sum: function () {
		// 		console.log(this === obj, 'this普通函数指向');  // true
		// 	}
		// }
		// obj.sum();

		// 箭头函数简略写法
		// let multiply = (a, b) => b === undefined ? b => a * b : a * b;

		// 普通函
		// let multiply2 = function (a, b) {
		// 	if (b === undefined) {
		// 		return function (b) {
		// 			return a * b
		// 		}
		// 	}
		// 	return a * b;
		// }
		// console.log(multiply2(2)(3)); // 6
		// console.log(multiply2(2, 4)); // 8

		// var name = 1;
		// function test() {
		// 	console.log(this, 'this');
		// 	var name = 2;
		// 	console.log(this.name, 'this.name');

		// 	return function inner() {
		// 		console.log(name, 'name');
		// 	}
		// }
		// test();
		// test()();

		// var b = {
		// 	name: 3
		// }

		// b.test = test;
		// b.test();

		// var c = b.test;
		// c();

		// new test();
		// var target = function () {
		// 	console.log(this);
		// }

		// var testObj = {
		// 	name: 'hhh'
		// };
		// testObj.test = target;
		// target();  // 结果是target对象
		// testObj.test();  // 结果是obj对象

		// function aa() {
		// 	console.log('aa');
		// 	return function bb() {
		// 		console.log('bb');
		// 	}
		// }

		// aa();
		// aa()();

		var num1 = (function () {
			return function (bb) {
				console.log(bb, 'bb');
			}
		})();
		num1('hhh');

		// 找最长公共前缀——字符串: 先将数组第一个字符串赋值给一个变量
		// 然后和数组里每个字符串相比较

		// function longestCommonPrefix(strArr) {
		// 	if(strArr.length === 0) {
		// 		return '';
		// 	}
		// 	let res = strArr[0];
		// 	// 循环数组里的字符串
		// 	for(let i = 1; i < strArr.length; i++) {
		// 		// 循环数组字符串的字母
		// 		let j = 0;
		// 		for( ; j < strArr[i].length && j < res.length; j++) {
		// 			if(res[j] !== strArr[i][j]) 
		// 			break;
		// 		}
		// 		res = res.substr(0, j);
		// 		if(res === '') {
		// 			return res
		// 		}
		// 	}
		// 	return res;
		// }
		// var res = longestCommonPrefix(['flower', 'flat', 'flow']);
		// console.log(res);

		// 最长字符串匹配前缀
		function longestCommonPrefix(strArr) {
			if (strArr.length === 0) {
				return '';
			}
			let res = strArr[0];
			for (let i = 1; i < strArr.length; i++) {
				let j = 0;
				for (; j < strArr[i].length && j < res.length; j++) {
					if (res[j] !== strArr[i][j]) {
						break;
					}
				}
				res = res.substr(0, j);
				if (res === '') {
					return res;
				}
			}
			return res;
		}
		var res = longestCommonPrefix(['flower', 'flat', 'flow']);
		console.log(res);



	})
	return (
		<div>
			<h4>practice arrow function</h4>
		</div>
	)
}

export default PracticeArrowFunction;