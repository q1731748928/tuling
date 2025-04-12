
var user = {}

user.name = '123'

Object.defineProperty(user, 'name', {
  value: 42,
  writable: false,
});



// console.log(user.name)

var names = 19
Object.defineProperty(user, 'age', {
  get: function () {
      return names
  },
  set: function (aa) {
      console.log(aa)
      names = aa
  }
});
console.log(user.age) // 获取 get

user.age = "18" // 赋值 set
console.log(user.age)
// cookie --> document

// document.cookie = "xxxx"

Object.defineProperty(document, 'cookie', {
  set: function (aa) {
      console.log("cookie-->", aa)
      debugger;
  }
});



// console.log(user.name);