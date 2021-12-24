// import React from 'react';

import { useEffect } from "react";

function PracticePromise() {
  useEffect(()=>{
    // class Animal {
    //   constructor(name, color) {
    //     this.name = name;
    //     this.color = color;
    //   }
    //   toString() {
    //     console.log('name:' + this.name + ',color:' + this.color);
    //   }
    // }

    // var animal = new Animal('dog', 'yellow');
    // animal.toString();
    // console.log(animal.name);
    // console.log(animal.color);

    // class Cat extends Animal {
    //   constructor(action) {
    //     super('cat', 'white');
    //     this.action = action;
    //   }

    //   toString() {
    //     console.log(super.toString, 'super.toString()');
    //   }
    // }

    // var cat = new Cat('catch');
    // cat.toString();
    // console.log(cat instanceof Cat, 'cat instanceof Cat');
    // console.log(cat instanceof Animal, 'cat instanceof Animal');

    // function fn1() {
    //   console.log('这是普通函数fn1');
    // }
    // fn1();

    // var fn2 = function() {
    //   console.log('这是匿名函数fn2');
    // }
    // fn2();

    // function fn3() {
    //   return function() {
    //     console.log('这是普通函数fn3里的匿名函数里打印的');
    //   }
    // }
    // fn3()();

    // var fn1 = (function() {
    //   return function fn2(name) {
    //     console.log(name);
    //   }
    // })();

    // var res = fn1;
    // res('hhh')
    // fn1('牌牌')

    // var fn3 = (function(a) {
    //   return function fn4(b) {
    //     console.log(a+b);
    //   }
    // })(111);

    // fn3(666)
    // var fn = function(hhh) {
    //   var name = '牌牌';
    //   var fn2 = function() {
    //     console.log(name,'name');
    //     console.log(hhh,'hhh');
    //   }
    //   return fn2;
    // }

    // var res = fn('麻将')
    // res()

    function fn(age) {
      var name = '猪牌'
      return function() {
        age ++;
        console.log(name, age);
      }
    }

    // fn(11)()
    var res = fn(11);
    res();
    res();
    res();
    




  })
  const clickOne=()=>{
    console.log('点击');
  };
    return (
        <button onClick = {clickOne}>点击</button>
    )
}

export default PracticePromise;