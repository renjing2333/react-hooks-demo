import { useEffect } from "react";

function PracticeArrowFunction() {
	useEffect(()=>{
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
		// 	getFullName: function() {
		// 		console.log(this, 'this');
		// 		// var first = this.firstName;
		// 		var fn = () => {
		// 			console.log(this, 'fn里的this');
		// 			return this.firstName + this.lastName;
		// 		}
		// 		return fn()
		// 	}
		// }
		// Person.getFullName();

		var obj = {
			array : ['orange', 'pink'],
			// sum: () => {
			// 	console.log(this === window, 'this');
			// }
			sum : function() {
				console.log(this === obj, 'this');
			}
		}
		obj.sum();

		// 箭头函数简略写法
		// let multiply = (a, b) => b === undefined ? b => a * b : a * b;

		// 普通函
		let multiply2 = function(a, b) {
			if (b === undefined) {
				return function (b) {
					return a * b
				}
			}
			return a * b;
		}
		console.log(multiply2(2)(3)); // 6
		console.log(multiply2(2, 4)); // 8

	})
    return(
			<div>
				<h4>practice arrow function</h4>
			</div>
		)
}

export default PracticeArrowFunction;