Object.defineProperty(document, "cookie", {
    set: function name(params) {
        if (params.indexOf("acw_sc__v2") != -1) {
            debugger;
        }
    }
})