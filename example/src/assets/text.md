# 什么是原型

在声明了一个函数之后，浏览器会自动为这个函数创建一个对象，这个对象就是原型对象。每个函数都有一个`prototype`属性，该属性指向原型对象，这个原型对象中包含一个`constructor`属性，该属性指向函数本身。

```js
function Foo() {
  this.name = 'king';
}
let foo = new Foo();
console.log(Foo.prototype.constructor === Foo); //true
```

在给函数原型对象添加属性或者方法之后，实例对象会自动拥有其属性或者方法

```js
Foo.prototype.hi = function () {
  console.log('hi');
};
foo.hi(); //hi
```

## 显式原型和隐式原型

- 每个函数对象都有`prototype`属性，其指向显式原型属性
- 每个实例对象都有`__proto__`属性，其指向隐式原型属性
- 关系：**构造函数的显式原型的值等于实例对象隐式原型的值**，即`Foo.prototype===foo.__proto__`

## 原型链

- 在访问对象属性（方法）时：

1.  先在对象本身属性中找，找到返回
2.  如果找不到，再沿着`__proto__`属性链向上查找，找到返回
3.  最终没有找到，返回`undefined`

- 在设置对象属性时，不会查找原型链，如果本身有该属性，就更改值，如果没有，添加属性并赋值
