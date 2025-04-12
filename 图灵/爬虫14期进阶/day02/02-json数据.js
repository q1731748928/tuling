
// json  数据类型
// 对象格式  字典
// 数组格式  列表


aa = {
    'name': 'baichuan',
    'age': '18'
}
// console.log(aa)
// JSON.stringify对象数据转换成json数据
bb = JSON.stringify(aa)
// JSON.parse json数据转换对象
cc = JSON.parse(bb)
console.log(cc)