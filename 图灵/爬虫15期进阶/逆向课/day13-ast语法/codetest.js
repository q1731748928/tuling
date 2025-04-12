

const fs = require("fs");
// @babel/parser 用于将JavaScript代码转换为ast树
const parser = require("@babel/parser");
// @babel/traverse 用于遍历各个节点的函数
const traverse = require("@babel/traverse").default;
// @babel/types 节点的类型判断及构造等操作
const types = require("@babel/types");
// @babel/generator 将处理完毕的AST转换成JavaScript源代码
const generator = require("@babel/generator").default;

// JS 转 ast语法树
jscode = `var a = "\u0068\u0065\u006c\u006c\u006f\u002c\u0041\u0053\u0054"`
let ast = parser.parse(jscode);
// console.log(JSON.stringify(ast,null,'\t'))


// 写插件
vis = {
    StringLiteral(path){
        path.node.extra.raw =  path.node.rawValue
    }
}

vis1 = {
   VariableDeclarator(path){
       // console.log(path.node.id.name);
       // console.log(path.parent);

    //   console.log(path.parentPath.node == path.parent);
    //    console.log(path.container)
    //    console.log(path.type)
    //    console.log(path.toString()) // 获取源代码
       Par = path.parent

       console.log(Par.declarations[0].init.value)


   }
}



traverse(ast,vis1)

//  ast树转JS代码
let {code} = generator(ast);
// console.log(code)

