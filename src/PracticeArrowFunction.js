import { useEffect } from "react";

function PracticeArrowFunction() {
	useEffect(() => {
		console.log(666);
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

		var num1 = (function(){
			return function(bb) {
				console.log(bb, 'bb');
			}
		})();
		num1('hhh');

		

	})
	return (
		<div>
			<h4>practice arrow function</h4>
		</div>
	)
}

export default PracticeArrowFunction;