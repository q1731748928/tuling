function showStacks() {
    Java.perform(function () {
      console.log(Java.use("android.util.Log").getStackTraceString(
        Java.use("java.lang.Throwable").$new()
    ));
})
}

function hook1_Collections(){
      var Collections = Java.use('java.util.Collections');
  // Hook sort() 方法
  Collections.sort.overload("java.util.List").implementation = function(list) {
    console.log('Hooked Collections.sort()');
    console.log('List: ' + list.toString());
    // 可在此处对参数进行修改或记录
   // 使用 Java.cast 进行类型转换 将list转换成ArrayList类型
    var res = Java.cast(list,Java.use("java.util.ArrayList"))
    console.log('List list-->',res)
      if (res.toString().includes("userPwd")){
            // showStacks()
      }
      // 调用原始的 sort() 方法
      return this.sort(list);
  };

  Collections.sort.overload("java.util.List","java.util.Comparator").implementation = function(a,b) {
    console.log('Hooked Collections.sort()');

    var res = Java.cast(a,Java.use("java.util.ArrayList"))
    console.log('Comparator list-->',res)
      //  if (res.toString().includes("userPwd")){
      //       showStacks()
      // }

      return    this.sort(a,b);
  };
}

function hook_String(){
    var StringClass = Java.use('java.lang.String');
    // Hook String 类的构造函数
    StringClass.getBytes.overload().implementation = function () {
        console.log('Original Value');
        // 可在此处修改传入的字符串参数
        var res =  this.getBytes();
        var newString = StringClass.$new(res)
        // 输出修改后的值
        console.log('Modified Value: ' + newString);
        // if (newString.toString().includes("username")){
        //     showStacks()
        // }
        return res;
    };

   // Hook String 类的静态方法
    StringClass.getBytes.overload('java.lang.String').implementation = function (obj) {
        console.log('Hooked String.valueOf()');
        // 可在此处修改传入的对象参数

        var res =  this.getBytes(obj);
        var newString = StringClass.$new(res,obj)
        // 输出修改后的结果
        console.log('getBytes:-->' + newString)
        return res
    }

}

function hook_StringBuilder(){

 var stringBuilderClass = Java.use("java.lang.StringBuilder");
    stringBuilderClass.toString.implementation = function (){
    var res = this.toString.apply(this,arguments)
    console.log("StringBuilder-->" + res.toString())
        if (res.toString().includes("_sig")){
            showStacks();
        }
    return res
}
}

function hook_click_ID(){
    var btn_login_id = Java.use("com.dodonew.online.R$id").btn_login.value;
    console.log(btn_login_id,'1111111111111');
    var View = Java.use('android.view.View');
    console.log("hook start")
    View.setOnClickListener.implementation = function(listener) {
        console.log(listener)
        console.log('hook')
        console.log(this.getId(),"22222222222")
        if (this.getId() === btn_login_id){
            showStacks()

        }
        // 调用原始的setOnClickListener方法
        return  this.setOnClickListener(listener);
    }

}

function hook_1(){
    let ApiSignatureHelper = Java.use("com.douban.frodo.network.ApiSignatureHelper");
ApiSignatureHelper["a"].overload('java.lang.String', 'java.lang.String', 'java.lang.String').implementation = function (str, str2, str3) {
    console.log(`ApiSignatureHelper.a is called: str=${str}, str2=${str2}, str3=${str3}`);
    let result = this["a"](str, str2, str3);
    console.log(`ApiSignatureHelper.a result=${result}`);
    return result;
};
}

function hook_2(){
    let HMACHash1 = Java.use("com.douban.frodo.utils.crypto.HMACHash1");
HMACHash1["a"].implementation = function (str, str2) {
    console.log(`HMACHash1.a is called: str=${str}`)
    console.log(`str2=${str2}`)

    let result = this["a"](str, str2);
    console.log(`HMACHash1.a result=${result}`);
    return result;
};
}

/*
* ApiSignatureHelper.a is called: str=https://frodo.douban.com/api/v2/movie/rank_list?, str2=GET, str3=null
ApiSignatureHelper.a result=Pair{EyvJ+geOeLmrd4lNpValpn+q0LM= 1714050895}
ApiSignatureHelper.a is called: str=https://frodo.douban.com/api/v2/movie/rank_list?udid=970bc487286535ebe372003e54330d152d45f66a&rom=android&apikey=0dad551ec0f84ed02907ff5c42e8ec70&s=rexxar_new&channel=Yingyongbao_Market&_sig=EyvJ%2BgeOeLmrd4lNpValpn%2Bq0LM%3D&_ts=1714050895&timezone=Asia%2FShanghai&device_id=970bc487286535ebe372003e54330d152d45f66a&os_rom=android&apple=de05a549b30c51a13f6bfdda87504894&sugar=0&loc_id=108288, str2=GET, str3=null
ApiSignatureHelper.a result=Pair{EyvJ+geOeLmrd4lNpValpn+q0LM= 1714050895}

*
*
* */

Java.perform(function() {
    hook1_Collections()
    // hook_String()
    // hook_StringBuilder()
    // hook_click()
    // hook_1()
    // hook_2()
});