function showStacks() {
    Java.perform(function () {
      console.log(Java.use("android.util.Log").getStackTraceString(
        Java.use("java.lang.Throwable").$new()
    ));
})
}




Java.perform(function (){
    var Builder = Java.use("okhttp3.Request$Builder");
    Builder["addHeader"].implementation = function (str, str2) {
        console.log("key: " + str)
        console.log("val: " + str2)
        if (str == "Authorization"){
            showStacks()
        }
        var result = this["addHeader"](str, str2);
        console.log("result: " + result);
        return result;
    };

})


