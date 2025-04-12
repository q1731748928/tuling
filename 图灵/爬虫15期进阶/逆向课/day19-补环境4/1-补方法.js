

// document = {}
// document.createElement = function (){}

// console.log(Object.getOwnPropertyDescriptor(document, 'createElement'));


Document = function Document(){}
// Object.defineProperty 直接在一个对象上定义一个新属性，或修改其现有属性，并返回此对象。
Object.defineProperty(Document.prototype,'createElement',{
    configurable: true,
    enumerable: true,
    value: function createElement(){},
    writable: true,
})
HTMLDocument = function HTMLDocument(){}
Object.setPrototypeOf(HTMLDocument.prototype,Document.prototype)
document = new HTMLDocument()
console.log(document.__proto__.__proto__)

// document = new Document()

console.log(Object.getOwnPropertyDescriptor(document.__proto__.__proto__, 'createElement'));

// 补到原型上

Document.prototype.createElement = function createElement(){}
document = new Document;
console.log(Object.getOwnPropertyDescriptor(document, 'createElement'));

Document.prototype.createElement.toString = function (){
    return 'function createElement() { [native code] }'
}

// console.log(document.createElement.toString())

