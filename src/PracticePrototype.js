import { useEffect } from "react";

function PracticePrototype() {
  useEffect(()=>{
    // 每个函数对象都有一个对象属性prototype——每个构造函数都有一个prototype属性,这个属性的值是对象
    // 原型的作用：让每一个构造函数都共享原型上的属性和方法
    // 也就是说：可以不在构造函数上添加属性和方法, 而是将这些直接添加到原型对象中

    // function Cat(){}
    // Cat.prototype.size = 'small';
    // Cat.prototype.catch = function(toy) {
    //   console.log('修猫咪会抓' + toy);
    // }

    // var paiPai = new Cat();
    // var maJiang = new Cat();
    // console.log(paiPai.catch === maJiang.catch);
    // paiPai.catch('球球')

    // function Person(name, age) {
    //   this.name = name || 'Person';
    //   this.age = age || 18;
    //   this.run = function(name) {
    //     console.log(name + '开始跑步');
    //   }
    //   this.colors = ['yellow', 'pink'];
    // }
    // Person.prototype.skin = '黄皮肤';
    // Person.prototype.sleep = function() {
    //   console.log('晚上要睡觉');
    // }

    // function Teacher(name, age, height) {
    //   Person.call(this, name, age);  // 借用构造函数模式
    //   this.height = height;
    // }
    // function Teacher() {};
    // Teacher.prototype = new Person();  //原型链继承
    // var teacher1 = new Teacher();
    // var teacher2 = new Teacher();
    // console.log(teacher1);
    // console.log(teacher2);
    // teacher1.colors.push('orange');
    // console.log(teacher1.colors, '111');
    // console.log(teacher2.colors, '222');
    // var teacher = new Teacher('女老师', 23, 160);
    // console.log(teacher);  // name:'女老师'; height: 160; age: 23 (继承了构造函数属性)
    // console.log(teacher.skin);  // 黄皮肤 (继承的父类原型上的属性)
    // teacher.sleep();  // 晚上要睡觉  (继承的父类原型上的方法)
    // teacher.run('静静')


    // function Person(name, age) {
    //   this.name = name;
    //   this.age = age;
    //   this.colors = ['pink', 'orange'];
    // }

    // function CreateObj(instance) {
    //   function F() {};
    //   F.prototype = instance;
    //   console.log(F.prototype.constructor, 'F.prototype.constructor');  // Object
    //   console.log(instance._proto_ === Object.prototype, 'instance._proto_ === Object.prototype');  //false
    //   console.log(F.prototype.constructor === Object, 'F.prototype.constructor === Object');   //true
    //   return new F();
    // }

    // var person = {
    //   name: '牌牌',
    //   friends: ['哈哈', '嘻嘻'],
    // }

    // var person1 = CreateObj(person);
    // var person2 = CreateObj(person);
    // person1.name = '猪猪';
    // console.log(person1); // person1.name是猪猪,但是person1.prototype.name还是牌牌
    // console.log(person2.name, 'person2.name'); //牌牌 person2.name
    // person1.friends.push('静静');  // person2.friends也被修改了
    // console.log(person2.friends, 'person2.friends'); // ['哈哈', '嘻嘻', '静静'] 'person2.friends'


    // var person = {
    //   name: 'person',
    //   age: 10,
    // }

    // function CreateObj(instance) {
    //   function F() {}; // 创建一个构造函数
    //   F.prototype = instance;
    //   return new F();
    // }

    // var person1 = CreateObj(person);
    // var person2 = Object.create(person); //和上一行所做的事情一样,ES5中的新写法,Object.create写法一样
    // console.log(person1, 'person1');
    // console.log(person2, 'person2');

    // function CreateOb(person) {
    //   var newPerson = Object.create(person); //创建对象  也可以用var newPerson = CreateObj(person)
    //   newPerson.sleep = function() {  // 增强对象, 给对象添加新的方法
    //     console.log('每天要睡觉');
    //   }
    //   return newPerson;  // 指定对象(增强后的对象)
    // }

    // var person3 = CreateOb(person);
    // console.log(person3);
    // person3.sleep();  // 每天要睡觉

    // function inherit(child, parent) {
    //   var instanceObj = Object.create(parent.prototype);
    //   instanceObj.constructor = child;
    //   child.prototype = instanceObj;
    // }

    // function Person(name, age) {  // 父类
    //   this.name = name || '还没取名';
    //   this.age = age || 0;
    // }

    // function Employee(name, age, height) {  // 子类
    //   Person.call(this, name, age);  // 借用构造函数
    //   this.height = height;
    // }

    // inherit(Employee, Person);  // 先继承
    // Employee.prototype.run = function() {  // 再给子类添加私有方法
    //   console.log('我爱跑步');
    // }

    // var employee1 = new Employee('牌牌', 1, 20);
    // console.log(employee1, 'employee1');
    // employee1.run();  // 我爱跑步

    function Animal() {
      this.name = 'Animal';
      this.showName = function() {
        console.log(this.name);
      }
    }

    function Cat() {
      this.name = 'Cat';
      this._super = new Animal();  // 使得 this._super.name === Animal
      this.showName1 = function() {
        console.log(this.name);
      }

      this.showName2 = function() {
        console.log(this.name);
      }

      this.showName3 = function() {
        console.log(this._super.name + "=>" + this.name);
      }
    }
    Cat.prototype = new Animal();  // 让Animal成为Cat的父类  那么cat instanceof Animal为true,cat.showName1() = Cat
    var cat = new Cat();
    console.log(cat, 'cat');
    console.log(cat instanceof Animal ); // true
    cat.showName1();     // "Cat" (需要读到Cat中的name属性) 
    // call ——> 继承父类的属性 name == Animal
    cat.showName2.call(Cat.prototype)    //  "Animal" (需要读到Animal中的name属性) 
    cat.showName3();    //  "Animal" => "Cat" (需要同时读到Cat中的name和Animal中的name)



  })

    return(
        <div>
            <h3>Practice Prototype chain</h3>
        </div>
    )
}

export default PracticePrototype;