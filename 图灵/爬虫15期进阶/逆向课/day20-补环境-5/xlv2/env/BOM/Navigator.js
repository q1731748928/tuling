
var Navigator = function Navigator() {
    throw new TypeError("Illegal constructor");
};
bodavm.toolsFunc.safeProto(Navigator,"Navigator");
// navigator对象
Object.setPrototypeOf(Navigator.prototype, Navigator);

bodavm.toolsFunc.defineProperty(Navigator,"vendorSub",{configurable:true, enumerable:true, get:function(){return bodavm.toolsFunc.dispatch(this,Navigator,"Navigator","vendorSub_get",arguments);}, set:undefined});
bodavm.toolsFunc.defineProperty(Navigator,"productSub",{configurable:true, enumerable:true, get:function(){return bodavm.toolsFunc.dispatch(this,Navigator,"Navigator","productSub_get",arguments);}, set:undefined});
bodavm.toolsFunc.defineProperty(Navigator,"vendor",{configurable:true, enumerable:true, get:function(){return bodavm.toolsFunc.dispatch(this,Navigator,"Navigator","vendor_get",arguments);}, set:undefined});
bodavm.toolsFunc.defineProperty(Navigator,"maxTouchPoints",{configurable:true, enumerable:true, get:function(){return bodavm.toolsFunc.dispatch(this,Navigator,"Navigator","maxTouchPoints_get",arguments);}, set:undefined});
bodavm.toolsFunc.defineProperty(Navigator,"scheduling",{configurable:true, enumerable:true, get:function(){return bodavm.toolsFunc.dispatch(this,Navigator,"Navigator","scheduling_get",arguments);}, set:undefined});
bodavm.toolsFunc.defineProperty(Navigator,"userActivation",{configurable:true, enumerable:true, get:function(){return bodavm.toolsFunc.dispatch(this,Navigator,"Navigator","userActivation_get",arguments);}, set:undefined});
bodavm.toolsFunc.defineProperty(Navigator,"doNotTrack",{configurable:true, enumerable:true, get:function(){return bodavm.toolsFunc.dispatch(this,Navigator,"Navigator","doNotTrack_get",arguments);}, set:undefined});
bodavm.toolsFunc.defineProperty(Navigator,"geolocation",{configurable:true, enumerable:true, get:function(){return bodavm.toolsFunc.dispatch(this,Navigator,"Navigator","geolocation_get",arguments);}, set:undefined});
bodavm.toolsFunc.defineProperty(Navigator,"connection",{configurable:true, enumerable:true, get:function(){return bodavm.toolsFunc.dispatch(this,Navigator,"Navigator","connection_get",arguments);}, set:undefined});
bodavm.toolsFunc.defineProperty(Navigator,"plugins",{configurable:true, enumerable:true, get:function(){return bodavm.toolsFunc.dispatch(this,Navigator,"Navigator","plugins_get",arguments);}, set:undefined});
bodavm.toolsFunc.defineProperty(Navigator,"mimeTypes",{configurable:true, enumerable:true, get:function(){return bodavm.toolsFunc.dispatch(this,Navigator,"Navigator","mimeTypes_get",arguments);}, set:undefined});
bodavm.toolsFunc.defineProperty(Navigator,"pdfViewerEnabled",{configurable:true, enumerable:true, get:function(){return bodavm.toolsFunc.dispatch(this,Navigator,"Navigator","pdfViewerEnabled_get",arguments);}, set:undefined});
bodavm.toolsFunc.defineProperty(Navigator,"webkitTemporaryStorage",{configurable:true, enumerable:true, get:function(){return bodavm.toolsFunc.dispatch(this,Navigator,"Navigator","webkitTemporaryStorage_get",arguments);}, set:undefined});
bodavm.toolsFunc.defineProperty(Navigator,"webkitPersistentStorage",{configurable:true, enumerable:true, get:function(){return bodavm.toolsFunc.dispatch(this,Navigator,"Navigator","webkitPersistentStorage_get",arguments);}, set:undefined});
bodavm.toolsFunc.defineProperty(Navigator,"windowControlsOverlay",{configurable:true, enumerable:true, get:function(){return bodavm.toolsFunc.dispatch(this,Navigator,"Navigator","windowControlsOverlay_get",arguments);}, set:undefined});
bodavm.toolsFunc.defineProperty(Navigator,"hardwareConcurrency",{configurable:true, enumerable:true, get:function(){return bodavm.toolsFunc.dispatch(this,Navigator,"Navigator","hardwareConcurrency_get",arguments);}, set:undefined});
bodavm.toolsFunc.defineProperty(Navigator,"cookieEnabled",{configurable:true, enumerable:true, get:function(){return bodavm.toolsFunc.dispatch(this,Navigator,"Navigator","cookieEnabled_get",arguments);}, set:undefined});
bodavm.toolsFunc.defineProperty(Navigator,"appCodeName",{configurable:true, enumerable:true, get:function(){return bodavm.toolsFunc.dispatch(this,Navigator,"Navigator","appCodeName_get",arguments);}, set:undefined});
bodavm.toolsFunc.defineProperty(Navigator,"appName",{configurable:true, enumerable:true, get:function(){return bodavm.toolsFunc.dispatch(this,Navigator,"Navigator","appName_get",arguments);}, set:undefined});
bodavm.toolsFunc.defineProperty(Navigator,"appVersion",{configurable:true, enumerable:true, get:function(){return bodavm.toolsFunc.dispatch(this,Navigator,"Navigator","appVersion_get",arguments);}, set:undefined});
bodavm.toolsFunc.defineProperty(Navigator,"platform",{configurable:true, enumerable:true, get:function(){return bodavm.toolsFunc.dispatch(this,Navigator,"Navigator","platform_get",arguments);}, set:undefined});
bodavm.toolsFunc.defineProperty(Navigator,"product",{configurable:true, enumerable:true, get:function(){return bodavm.toolsFunc.dispatch(this,Navigator,"Navigator","product_get",arguments);}, set:undefined});
bodavm.toolsFunc.defineProperty(Navigator,"userAgent",{configurable:true, enumerable:true, get:function(){return bodavm.toolsFunc.dispatch(this,Navigator,"Navigator","userAgent_get",arguments);}, set:undefined});
bodavm.toolsFunc.defineProperty(Navigator,"language",{configurable:true, enumerable:true, get:function(){return bodavm.toolsFunc.dispatch(this,Navigator,"Navigator","language_get",arguments);}, set:undefined});
bodavm.toolsFunc.defineProperty(Navigator,"languages",{configurable:true, enumerable:true, get:function(){return bodavm.toolsFunc.dispatch(this,Navigator,"Navigator","languages_get",arguments);}, set:undefined});
bodavm.toolsFunc.defineProperty(Navigator,"onLine",{configurable:true, enumerable:true, get:function(){return bodavm.toolsFunc.dispatch(this,Navigator,"Navigator","onLine_get",arguments);}, set:undefined});
bodavm.toolsFunc.defineProperty(Navigator,"webdriver",{configurable:true, enumerable:true, get:function(){return bodavm.toolsFunc.dispatch(this,Navigator,"Navigator","webdriver_get",arguments);}, set:undefined});
bodavm.toolsFunc.defineProperty(Navigator,"getGamepads",{configurable:true, enumerable:true, writable:true, value:function(){return bodavm.toolsFunc.dispatch(this,Navigator,"Navigator","getGamepads",arguments);}});
bodavm.toolsFunc.defineProperty(Navigator,"javaEnabled",{configurable:true, enumerable:true, writable:true, value:function(){return bodavm.toolsFunc.dispatch(this,Navigator,"Navigator","javaEnabled",arguments);}});
bodavm.toolsFunc.defineProperty(Navigator,"sendBeacon",{configurable:true, enumerable:true, writable:true, value:function(){return bodavm.toolsFunc.dispatch(this,Navigator,"Navigator","sendBeacon",arguments);}});
bodavm.toolsFunc.defineProperty(Navigator,"vibrate",{configurable:true, enumerable:true, writable:true, value:function(){return bodavm.toolsFunc.dispatch(this,Navigator,"Navigator","vibrate",arguments);}});
bodavm.toolsFunc.defineProperty(Navigator,"constructor",{configurable:true, enumerable:false, writable:true, value:function(){return bodavm.toolsFunc.dispatch(this,Navigator,"Navigator","constructor",arguments);}});
bodavm.toolsFunc.defineProperty(Navigator,"deprecatedRunAdAuctionEnforcesKAnonymity",{configurable:true, enumerable:true, get:function(){return bodavm.toolsFunc.dispatch(this,Navigator,"Navigator","deprecatedRunAdAuctionEnforcesKAnonymity_get",arguments);}, set:undefined});
bodavm.toolsFunc.defineProperty(Navigator,"protectedAudience",{configurable:true, enumerable:true, get:function(){return bodavm.toolsFunc.dispatch(this,Navigator,"Navigator","protectedAudience_get",arguments);}, set:undefined});
bodavm.toolsFunc.defineProperty(Navigator,"bluetooth",{configurable:true, enumerable:true, get:function(){return bodavm.toolsFunc.dispatch(this,Navigator,"Navigator","bluetooth_get",arguments);}, set:undefined});
bodavm.toolsFunc.defineProperty(Navigator,"storageBuckets",{configurable:true, enumerable:true, get:function(){return bodavm.toolsFunc.dispatch(this,Navigator,"Navigator","storageBuckets_get",arguments);}, set:undefined});
bodavm.toolsFunc.defineProperty(Navigator,"clipboard",{configurable:true, enumerable:true, get:function(){return bodavm.toolsFunc.dispatch(this,Navigator,"Navigator","clipboard_get",arguments);}, set:undefined});
bodavm.toolsFunc.defineProperty(Navigator,"credentials",{configurable:true, enumerable:true, get:function(){return bodavm.toolsFunc.dispatch(this,Navigator,"Navigator","credentials_get",arguments);}, set:undefined});
bodavm.toolsFunc.defineProperty(Navigator,"keyboard",{configurable:true, enumerable:true, get:function(){return bodavm.toolsFunc.dispatch(this,Navigator,"Navigator","keyboard_get",arguments);}, set:undefined});
bodavm.toolsFunc.defineProperty(Navigator,"managed",{configurable:true, enumerable:true, get:function(){return bodavm.toolsFunc.dispatch(this,Navigator,"Navigator","managed_get",arguments);}, set:undefined});
bodavm.toolsFunc.defineProperty(Navigator,"mediaDevices",{configurable:true, enumerable:true, get:function(){return bodavm.toolsFunc.dispatch(this,Navigator,"Navigator","mediaDevices_get",arguments);}, set:undefined});
bodavm.toolsFunc.defineProperty(Navigator,"storage",{configurable:true, enumerable:true, get:function(){return bodavm.toolsFunc.dispatch(this,Navigator,"Navigator","storage_get",arguments);}, set:undefined});
bodavm.toolsFunc.defineProperty(Navigator,"serviceWorker",{configurable:true, enumerable:true, get:function(){return bodavm.toolsFunc.dispatch(this,Navigator,"Navigator","serviceWorker_get",arguments);}, set:undefined});
bodavm.toolsFunc.defineProperty(Navigator,"virtualKeyboard",{configurable:true, enumerable:true, get:function(){return bodavm.toolsFunc.dispatch(this,Navigator,"Navigator","virtualKeyboard_get",arguments);}, set:undefined});
bodavm.toolsFunc.defineProperty(Navigator,"wakeLock",{configurable:true, enumerable:true, get:function(){return bodavm.toolsFunc.dispatch(this,Navigator,"Navigator","wakeLock_get",arguments);}, set:undefined});
bodavm.toolsFunc.defineProperty(Navigator,"deviceMemory",{configurable:true, enumerable:true, get:function(){return bodavm.toolsFunc.dispatch(this,Navigator,"Navigator","deviceMemory_get",arguments);}, set:undefined});
bodavm.toolsFunc.defineProperty(Navigator,"userAgentData",{configurable:true, enumerable:true, get:function(){return bodavm.toolsFunc.dispatch(this,Navigator,"Navigator","userAgentData_get",arguments);}, set:undefined});
bodavm.toolsFunc.defineProperty(Navigator,"login",{configurable:true, enumerable:true, get:function(){return bodavm.toolsFunc.dispatch(this,Navigator,"Navigator","login_get",arguments);}, set:undefined});
bodavm.toolsFunc.defineProperty(Navigator,"ink",{configurable:true, enumerable:true, get:function(){return bodavm.toolsFunc.dispatch(this,Navigator,"Navigator","ink_get",arguments);}, set:undefined});
bodavm.toolsFunc.defineProperty(Navigator,"mediaCapabilities",{configurable:true, enumerable:true, get:function(){return bodavm.toolsFunc.dispatch(this,Navigator,"Navigator","mediaCapabilities_get",arguments);}, set:undefined});
bodavm.toolsFunc.defineProperty(Navigator,"hid",{configurable:true, enumerable:true, get:function(){return bodavm.toolsFunc.dispatch(this,Navigator,"Navigator","hid_get",arguments);}, set:undefined});
bodavm.toolsFunc.defineProperty(Navigator,"locks",{configurable:true, enumerable:true, get:function(){return bodavm.toolsFunc.dispatch(this,Navigator,"Navigator","locks_get",arguments);}, set:undefined});
bodavm.toolsFunc.defineProperty(Navigator,"gpu",{configurable:true, enumerable:true, get:function(){return bodavm.toolsFunc.dispatch(this,Navigator,"Navigator","gpu_get",arguments);}, set:undefined});
bodavm.toolsFunc.defineProperty(Navigator,"mediaSession",{configurable:true, enumerable:true, get:function(){return bodavm.toolsFunc.dispatch(this,Navigator,"Navigator","mediaSession_get",arguments);}, set:undefined});
bodavm.toolsFunc.defineProperty(Navigator,"permissions",{configurable:true, enumerable:true, get:function(){return bodavm.toolsFunc.dispatch(this,Navigator,"Navigator","permissions_get",arguments);}, set:undefined});
bodavm.toolsFunc.defineProperty(Navigator,"presentation",{configurable:true, enumerable:true, get:function(){return bodavm.toolsFunc.dispatch(this,Navigator,"Navigator","presentation_get",arguments);}, set:undefined});
bodavm.toolsFunc.defineProperty(Navigator,"usb",{configurable:true, enumerable:true, get:function(){return bodavm.toolsFunc.dispatch(this,Navigator,"Navigator","usb_get",arguments);}, set:undefined});
bodavm.toolsFunc.defineProperty(Navigator,"xr",{configurable:true, enumerable:true, get:function(){return bodavm.toolsFunc.dispatch(this,Navigator,"Navigator","xr_get",arguments);}, set:undefined});
bodavm.toolsFunc.defineProperty(Navigator,"serial",{configurable:true, enumerable:true, get:function(){return bodavm.toolsFunc.dispatch(this,Navigator,"Navigator","serial_get",arguments);}, set:undefined});
bodavm.toolsFunc.defineProperty(Navigator,"adAuctionComponents",{configurable:true, enumerable:true, writable:true, value:function(){return bodavm.toolsFunc.dispatch(this,Navigator,"Navigator","adAuctionComponents",arguments);}});
bodavm.toolsFunc.defineProperty(Navigator,"runAdAuction",{configurable:true, enumerable:true, writable:true, value:function(){return bodavm.toolsFunc.dispatch(this,Navigator,"Navigator","runAdAuction",arguments);}});
bodavm.toolsFunc.defineProperty(Navigator,"canLoadAdAuctionFencedFrame",{configurable:true, enumerable:true, writable:true, value:function(){return bodavm.toolsFunc.dispatch(this,Navigator,"Navigator","canLoadAdAuctionFencedFrame",arguments);}});
bodavm.toolsFunc.defineProperty(Navigator,"canShare",{configurable:true, enumerable:true, writable:true, value:function(){return bodavm.toolsFunc.dispatch(this,Navigator,"Navigator","canShare",arguments);}});
bodavm.toolsFunc.defineProperty(Navigator,"share",{configurable:true, enumerable:true, writable:true, value:function(){return bodavm.toolsFunc.dispatch(this,Navigator,"Navigator","share",arguments);}});
bodavm.toolsFunc.defineProperty(Navigator,"clearAppBadge",{configurable:true, enumerable:true, writable:true, value:function(){return bodavm.toolsFunc.dispatch(this,Navigator,"Navigator","clearAppBadge",arguments);}});
bodavm.toolsFunc.defineProperty(Navigator,"getBattery",{configurable:true, enumerable:true, writable:true, value:function(){return bodavm.toolsFunc.dispatch(this,Navigator,"Navigator","getBattery",arguments);}});
bodavm.toolsFunc.defineProperty(Navigator,"getUserMedia",{configurable:true, enumerable:true, writable:true, value:function(){return bodavm.toolsFunc.dispatch(this,Navigator,"Navigator","getUserMedia",arguments);}});
bodavm.toolsFunc.defineProperty(Navigator,"requestMIDIAccess",{configurable:true, enumerable:true, writable:true, value:function(){return bodavm.toolsFunc.dispatch(this,Navigator,"Navigator","requestMIDIAccess",arguments);}});
bodavm.toolsFunc.defineProperty(Navigator,"requestMediaKeySystemAccess",{configurable:true, enumerable:true, writable:true, value:function(){return bodavm.toolsFunc.dispatch(this,Navigator,"Navigator","requestMediaKeySystemAccess",arguments);}});
bodavm.toolsFunc.defineProperty(Navigator,"setAppBadge",{configurable:true, enumerable:true, writable:true, value:function(){return bodavm.toolsFunc.dispatch(this,Navigator,"Navigator","setAppBadge",arguments);}});
bodavm.toolsFunc.defineProperty(Navigator,"webkitGetUserMedia",{configurable:true, enumerable:true, writable:true, value:function(){return bodavm.toolsFunc.dispatch(this,Navigator,"Navigator","webkitGetUserMedia",arguments);}});
bodavm.toolsFunc.defineProperty(Navigator,"clearOriginJoinedAdInterestGroups",{configurable:true, enumerable:true, writable:true, value:function(){return bodavm.toolsFunc.dispatch(this,Navigator,"Navigator","clearOriginJoinedAdInterestGroups",arguments);}});
bodavm.toolsFunc.defineProperty(Navigator,"createAuctionNonce",{configurable:true, enumerable:true, writable:true, value:function(){return bodavm.toolsFunc.dispatch(this,Navigator,"Navigator","createAuctionNonce",arguments);}});
bodavm.toolsFunc.defineProperty(Navigator,"deprecatedReplaceInURN",{configurable:true, enumerable:true, writable:true, value:function(){return bodavm.toolsFunc.dispatch(this,Navigator,"Navigator","deprecatedReplaceInURN",arguments);}});
bodavm.toolsFunc.defineProperty(Navigator,"deprecatedURNToURL",{configurable:true, enumerable:true, writable:true, value:function(){return bodavm.toolsFunc.dispatch(this,Navigator,"Navigator","deprecatedURNToURL",arguments);}});
bodavm.toolsFunc.defineProperty(Navigator,"getInstalledRelatedApps",{configurable:true, enumerable:true, writable:true, value:function(){return bodavm.toolsFunc.dispatch(this,Navigator,"Navigator","getInstalledRelatedApps",arguments);}});
bodavm.toolsFunc.defineProperty(Navigator,"joinAdInterestGroup",{configurable:true, enumerable:true, writable:true, value:function(){return bodavm.toolsFunc.dispatch(this,Navigator,"Navigator","joinAdInterestGroup",arguments);}});
bodavm.toolsFunc.defineProperty(Navigator,"leaveAdInterestGroup",{configurable:true, enumerable:true, writable:true, value:function(){return bodavm.toolsFunc.dispatch(this,Navigator,"Navigator","leaveAdInterestGroup",arguments);}});
bodavm.toolsFunc.defineProperty(Navigator,"updateAdInterestGroups",{configurable:true, enumerable:true, writable:true, value:function(){return bodavm.toolsFunc.dispatch(this,Navigator,"Navigator","updateAdInterestGroups",arguments);}});
bodavm.toolsFunc.defineProperty(Navigator,"registerProtocolHandler",{configurable:true, enumerable:true, writable:true, value:function(){return bodavm.toolsFunc.dispatch(this,Navigator,"Navigator","registerProtocolHandler",arguments);}});
bodavm.toolsFunc.defineProperty(Navigator,"unregisterProtocolHandler",{configurable:true, enumerable:true, writable:true, value:function(){return bodavm.toolsFunc.dispatch(this,Navigator,"Navigator","unregisterProtocolHandler",arguments);}});


// navigator对象
var navigator = {}
navigator.__proto__=Navigator.prototype;
// clientInformation对象
var clientInformation = {}
clientInformation.__proto__=Navigator.prototype;