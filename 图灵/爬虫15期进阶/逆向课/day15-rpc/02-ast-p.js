const parse = require('@babel/parser')
const fs = require('fs')
const traverse = require("@babel/traverse").default;
const types = require("@babel/types");
const generator = require("@babel/generator").default;

// process.argv.length > 2 ? File1 = process.argv[2] : File1 = './03-jsl-p.js'
process.argv.length > 2 ? File1 = process.argv[2] : File1 = './01-alx-p.js'
process.argv.length > 3 ? File2 = process.argv[2] : File2 = './_decode.js'

jscode = fs.readFileSync(File1, {encoding: 'utf-8'})
let ast = parse.parse(jscode);




    var _0x4818 = ["csKHwqMI", "ZsKJwr8VeAsy", "UcKiN8O/wplwMA==", "JR8CTg==", "YsOnbSEQw7ozwqZKesKUw7kwX8ORIQ==", "w7oVS8OSwoPCl3jChMKhw6HDlsKXw4s/YsOG", "fwVmI1AtwplaY8Otw5cNfSgpw6M=", "OcONwrjCqsKxTGTChsOjEWE8PcOcJ8K6", "U8K5LcOtwpV0EMOkw47DrMOX", "HMO2woHCiMK9SlXClcOoC1k=", "asKIwqMDdgMuPsOKBMKcwrrCtkLDrMKBw64d", "wqImMT0tw6RNw5k=", "DMKcU0JmUwUv", "VjHDlMOHVcONX3fDicKJHQ==", "wqhBH8Knw4TDhSDDgMOdwrjCncOWwphhN8KCGcKqw6dHAU5+wrg2JcKaw4IEJcOcwrRJwoZ0wqF9YgAV", "dzd2w5bDm3jDpsK3wpY=", "w4PDgcKXwo3CkcKLwr5qwrY=", "wrJOTcOQWMOg", "wqTDvcOjw447wr4=", "w5XDqsKhMF1/", "wrAyHsOfwppc", "J3dVPcOxLg==", "wrdHw7p9Zw==", "w4rDo8KmNEw=", "IMKAUkBt", "w6bDrcKQwpVHwpNQwqU=", "d8OsWhAUw7YzwrU=", "wqnCksOeezrDhw==", "UsKnIMKWV8K/", "w4zDocK8NUZv", "c8OxZhAJw6skwqJj", "PcKIw4nCkkVb", "KHgodMO2VQ==", "wpsmwqvDnGFq", "wqLDt8Okw4c=", "w7w1w4PCpsO4wqA=", "wq9FRsOqWMOq", "byBhw7rDm34=", "LHg+S8OtTw==", "wqhOw715dsOH", "U8O7VsO0wqvDvcKuKsOqX8Kr", "Yittw5DDnWnDrA==", "YMKIwqUUfgIk", "aB7DlMODTQ==", "wpfDh8Orw6kk", "w7vCqMOrY8KAVk5OwpnCu8OaXsKZP3DClcKyw6HDrQ==", "wow+w6vDmHpsw7Rtwo98LC7CiG7CksORT8KlW8O5wr3Di8OTHsODeHjDmcKlJsKqVA==", "NwV+", "w7HDrcKtwpJawpZb", "wpQswqvDiHpuw6I=", "YMKUwqMJZQ==", "KH1VKcOqKsK1", "fQ5sFUkkwpI=", "wrvCrcOBR8Kk", "M3w0fQ==", "w6xXwqPDvMOFwo5d"];
!function(t,e){var o=function(e){for(;--e;)t.push(t.shift())};!function(){var t={data:{key:"cookie",value:"timeout"},setCookie:function(t,e,o,n){n=n||{};for(var r=e+"="+o,a=0,i=(a=0,t.length);a<i;a++){var f=t[a];r+="; "+f;var s=t[f];t.push(s),i=t.length,!0!==s&&(r+="="+s)}n.cookie=r},removeCookie:function(){return"dev"},getCookie:function(t,e){var n,r=(t=t||function(t){return t})(new RegExp("(?:^|; )"+e.replace(/([.$?*|{}()[]\/+^])/g,"$1")+"=([^;]*)"));return n=347,o(++n),r?decodeURIComponent(r[1]):void 0}};t.updateCookie=function(){return new RegExp("\\w+ *\\(\\) *{\\w+ *['|\"].+['|\"];? *}").test(t.removeCookie.toString())};var e=t.updateCookie();e?e?t.getCookie(null,"counter"):t.removeCookie():t.setCookie(["*"],"counter",1)}()}(_0x4818);var _0x55f3=function(t,e){t=parseInt(t,16);var o,n=_0x4818[t];if(_0x55f3.atobPolyfillAppended||((o=Function('return (function () {}.constructor("return this")());')()).atob||(o.atob=function(t){for(var e,o,n=String(t).replace(/=+$/,""),r=0,a=0,i="";o=n.charAt(a++);~o&&(e=r%4?64*e+o:o,r++%4)?i+=String.fromCharCode(255&e>>(-2*r&6)):0)o="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".indexOf(o);return i}),_0x55f3.atobPolyfillAppended=!0),!_0x55f3.rc4){_0x55f3.rc4=function(t,e){for(var o,n=[],r=0,a="",i="",f=0,s=(t=atob(t)).length;f<s;f++)i+="%"+("00"+t.charCodeAt(f).toString(16)).slice(-2);t=decodeURIComponent(i);for(var c=0;c<256;c++)n[c]=c;for(c=0;c<256;c++)r=(r+n[c]+e.charCodeAt(c%e.length))%256,o=n[c],n[c]=n[r],n[r]=o;c=0,r=0;for(var u=0;u<t.length;u++)r=(r+n[c=(c+1)%256])%256,o=n[c],n[c]=n[r],n[r]=o,a+=String.fromCharCode(t.charCodeAt(u)^n[(n[c]+n[r])%256]);return a}}if(_0x55f3.data||(_0x55f3.data={}),void 0===_0x55f3.data[t]){if(!_0x55f3.once){var r=function(t){this.rc4Bytes=t,this.states=[1,0,0],this.newState=function(){return"newState"},this.firstState="\\w+ *\\(\\) *{\\w+ *",this.secondState="['|\"].+['|\"];? *}"};r.prototype.checkState=function(){var t=new RegExp(this.firstState+this.secondState);return this.runState(t.test(this.newState.toString())?--this.states[1]:--this.states[0])},r.prototype.runState=function(t){return Boolean(~t)?this.getState(this.rc4Bytes):t},r.prototype.getState=function(t){for(var e=0,o=this.states.length;e<o;e++)this.states.push(Math.round(Math.random())),o=this.states.length;return t(this.states[0])},new r(_0x55f3).checkState(),_0x55f3.once=!0}n=_0x55f3.rc4(n,e),_0x55f3.data[t]=n}else n=_0x55f3.data[t];return n};
        // 1 扣出解密函数  2、匹配调用方法


const _ppp = {

            CallExpression(path){

                let {callee,arguments} = path.node;
                if (!types.isIdentifier(callee,{"name":"_0x55f3"})){
                    return
                }

                if (arguments.length !=2){
                    return;
                }

                let value = eval(path.toString())
                // console.log(value)
                console.log(path.toString(),"--->",value)
                path.replaceWith(types.valueToNode(value))

            }

        }
 traverse(ast, _ppp);
// 字符串拼接
const constantFold = {
    "BinaryExpression|UnaryExpression|ConditionalExpression"(path) {
        // 防止溢出
        if(path.isUnaryExpression({operator:"-"}) ||
    	   path.isUnaryExpression({operator:"void"}))
    	{
    		return;
    	}
        const {confident, value} = path.evaluate();
        if (!confident)
            return;
        if (typeof value == 'number' && (!Number.isFinite(value))) {
            return;
        }
        path.replaceWith(types.valueToNode(value));
    },
}
traverse(ast, constantFold);

// 解决编码
const transform_literal = {
  NumericLiteral({node}) {
    if (node.extra && /^0[obx]/i.test(node.extra.raw)) {
      node.extra = undefined;
    }
  },
  StringLiteral({node})
  {
    if (node.extra && /\\[ux]/gi.test(node.extra.raw)) {
      node.extra = undefined;
    }
  },
}
traverse(ast, transform_literal);

let {code} = generator(ast);
fs.writeFile(File2, code, (err) => {
});
