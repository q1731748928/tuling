function hook_module() {
    var baseAddr = Module.findBaseAddress("libsscronet.so");
    console.log("baseAddr", baseAddr);
}
Java.perform(function () {
    hook_module()
});