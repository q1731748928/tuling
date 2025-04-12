

const JavaScriptObfuscator = require('javascript-obfuscator');

const sourceCode = `
function myFunction() {
  var myVariable = 'Hello, World!';
  console.log(myVariable);
}
myFunction();
`;

const options = {
  compact: true, // 启用压缩
  controlFlowFlattening: true, // 控制流 平坦化
  controlFlowFlatteningThreshold: 0.75, // 控制流平坦化阈值
  deadCodeInjection: true, // 使死代码注入
  deadCodeInjectionThreshold: 0.4, // 死代码注入阈值
  identifierNamesGenerator: 'hexadecimal', // 生成标识符的方式
  log: false, // 关闭日志
  rotateStringArray: true, // 旋转字符串数组
  selfDefending: true, // 启用自我防御
  stringArray: true, // 启用字符串数组
  stringArrayThreshold: 0.75, // 字符串数组阈值
  // domainLock: ['example.com'], // 锁定域名
  debugProtection: true, // 调试保护
  disableConsoleOutput: true, // 禁用控制台输出
  unicodeEscapeSequence: false, // 禁用 Unicode 转义序列
  rotateUnicodeArray: true, // 旋转 Unicode 数组
};

const obfuscatedCode = JavaScriptObfuscator.obfuscate(sourceCode, options).getObfuscatedCode();

console.log(obfuscatedCode);


