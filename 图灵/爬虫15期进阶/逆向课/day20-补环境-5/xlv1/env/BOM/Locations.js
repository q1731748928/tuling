

Location = function Location(){

}
location = {}
Object.setPrototypeOf(location,Location.prototype)
// location.__proto__ = Location.prototype;
Object.defineProperty(location, "valueOf", {
    configurable: false,
    enumerable: false,
    writable: false,
    value: function valueOf() {
        return "function valueOf(){}"
    }
});
Object.defineProperty(location, "ancestorOrigins", {
    configurable: false,
    enumerable: true,
    get: function ancestorOrigins() {
        return ""
    },
    set: undefined
});
Object.defineProperty(location, "href", {
    configurable: false,
    enumerable: true,
    get: function href() {
        h_log("href get ","arg",arguments)
        return "www.xxxx.com"
    },
    set: function href() {
        return ""
    }
});
Object.defineProperty(location, "origin", {
    configurable: false,
    enumerable: true,
    get: function origin() {
        return ""
    },
    set: undefined
});
Object.defineProperty(location, "protocol", {
    configurable: false,
    enumerable: true,
    get: function protocol() {
        return ""
    },
    set: function protocol() {
        return ""
    }
});
Object.defineProperty(location, "host", {
    configurable: false,
    enumerable: true,
    get: function host() {
        return ""
    },
    set: function host() {
        return ""
    }
});
Object.defineProperty(location, "hostname", {
    configurable: false,
    enumerable: true,
    get: function hostname() {
        return ""
    },
    set: function hostname() {
        return ""
    }
});
Object.defineProperty(location, "port", {
    configurable: false,
    enumerable: true,
    get: function port() {
        return ""
    },
    set: function port() {
        return ""
    }
});
Object.defineProperty(location, "pathname", {
    configurable: false,
    enumerable: true,
    get: function pathname() {
        return ""
    },
    set: function pathname() {
        return ""
    }
});
Object.defineProperty(location, "search", {
    configurable: false,
    enumerable: true,
    get: function search() {
        return ""
    },
    set: function search() {
        return ""
    }
});
Object.defineProperty(location, "hash", {
    configurable: false,
    enumerable: true,
    get: function hash() {
        return ""
    },
    set: function hash() {
        return ""
    }
});
Object.defineProperty(location, "assign", {
    configurable: false,
    enumerable: true,
    writable: false,
    value: function assign() {
        return "function assign(){}"
    }
});
Object.defineProperty(location, "reload", {
    configurable: false,
    enumerable: true,
    writable: false,
    value: function reload() {
        return "function reload(){}"
    }
});
Object.defineProperty(location, "replace", {
    configurable: false,
    enumerable: true,
    writable: false,
    value: function replace() {
        return "function replace(){}"
    }
});
Object.defineProperty(location, "toString", {
    configurable: false,
    enumerable: true,
    writable: false,
    value: function toString() {
        return "function toString(){}"
    }
});