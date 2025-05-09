function onLoad(name, callback) {
    //void* android_dlopen_ext(const char* filename, int flag, const android_dlextinfo* extinfo);//原型
    const android_dlopen_ext = Module.findExportByName(null, "android_dlopen_ext");
    if (android_dlopen_ext != null) {
        Interceptor.attach(android_dlopen_ext, {
            onEnter: function (args) {
                if (args[0].readCString().indexOf(name) !== -1) {
                    this.hook = true;
                }
            }, onLeave: function (retval) {
                if (this.hook) {
                    callback();
                }
            }
        });
    }
}
Java.perform(function () {
        const soName = 'libsscronet.so';

        //方法3, hook SSL_CTX_set_custom_verify, 基本通杀
        onLoad(soName, () => {
            // void SSL_CTX_set_custom_verify(SSL_CTX *ctx, int mode, enum ssl_verify_result_t (*callback)(SSL *ssl, uint8_t *out_alert)) {
            //     ctx->verify_mode = mode;
            //     ctx->custom_verify_callback = callback;
            // }//原型
            let SSL_CTX_set_custom_verify = Module.getExportByName(soName, 'SSL_CTX_set_custom_verify');
            if (SSL_CTX_set_custom_verify != null) {
                Interceptor.attach(SSL_CTX_set_custom_verify, {
                    onEnter: function (args) {
                        Interceptor.attach(args[2], {
                            onLeave: function (retval) {
                                // enum ssl_verify_result_t BORINGSSL_ENUM_INT {
                                //     ssl_verify_ok,
                                //     ssl_verify_invalid,
                                //     ssl_verify_retry,
                                // };
                                //全部替换成 ssl_verify_ok
                                if (retval > 0x0) retval.replace(0x0);
                            }
                        });
                    }
                });
            }
        });

        //只需要选择其中一种即可, 推荐使用方法3
});


// frida -U -f com.ss.android.ugc.aweme -l Android/byteDance.js