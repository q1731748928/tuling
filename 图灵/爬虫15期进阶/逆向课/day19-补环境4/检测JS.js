
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


Document.prototype.createElement.toString = function (){
    return 'function createElement() { [native code] }'
}

function main(){
    if (document.createElement.toString().indexOf('native code') != -1) {
        // 检测描述符
        var descriptor = Object.getOwnPropertyDescriptor(document.__proto__.__proto__, 'createElement');
        if(descriptor && descriptor.writable && descriptor.configurable && descriptor.enumerable) {
             console.log('环境通过')
          }else {
            console.log('描述符环境失败')
        }
    }else {
        console.log('toString环境失败')
    }
}


main()

