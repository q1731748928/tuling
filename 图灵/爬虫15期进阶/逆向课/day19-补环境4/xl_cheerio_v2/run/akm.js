var _cf = _cf || [],
  bmaka = bmaka && bmaka.hasOwnProperty("ver") && bmaka.hasOwnProperty("sed") ? bmaka : {
    ver: 1.7,
    ke_cnt_lmt: 150,
    mme_cnt_lmt: 100,
    mduce_cnt_lmt: 75,
    pme_cnt_lmt: 25,
    pduce_cnt_lmt: 25,
    tme_cnt_lmt: 25,
    tduce_cnt_lmt: 25,
    doe_cnt_lmt: 10,
    dme_cnt_lmt: 10,
    vc_cnt_lmt: 100,
    doa_throttle: 0,
    dma_throttle: 0,
    session_id: "default_session",
    js_post: !1,
    loc: "",
    cf_url: "https:" === 'https:' ? "https://" : "http://",
    params_url: ("https:" === 'https:' ? "https://" : "http://") + 'www.换成自己的.com' + "/get_params",
    auth: "",
    api_public_key: "afSbep8yjnZUjq3aL010jO15Sawj2VZfdYK8uY90uxq",
    aj_lmt_doact: 1,
    aj_lmt_dmact: 1,
    aj_lmt_tact: 1,
    ce_js_post: 0,
    init_time: 0,
    informinfo: "",
    prevfid: -1,
    fidcnt: 0,
    sensor_data: 0,
    ins: null,
    cns: null,
    enGetLoc: 0,
    enReadDocUrl: 1,
    disFpCalOnTimeout: 0,
    xagg: -1,
    pen: -1,
    brow: "",
    browver: "",
    psub: "-",
    lang: "-",
    prod: "-",
    plen: -1,
    doadma_en: 0,
    sdfn: [],
    d2: 0,
    d3: 0,
    thr: 0,
    cs: "0a46G5m17Vrp4o4c",
    hn: "unk",
    z1: 0,
    o9: 0,
    vc: "",
    y1: 2016,
    ta: 0,
    tst: -1,
    t_tst: 0,
    ckie: "_abck",
    n_ck: "0",
    ckurl: 0,
    bm: !1,
    mr: "-1",
    altFonts: !1,
    rst: !1,
    runFonts: !1,
    fsp: !1,
    firstLoad: !0,
    pstate: !1,
    mn_mc_lmt: 10,
    mn_state: 0,
    mn_mc_indx: 0,
    mn_sen: 0,
    mn_tout: 100,
    mn_stout: 1e3,
    mn_ct: 1,
    mn_cc: "",
    mn_cd: 1e4,
    mn_lc: [],
    mn_ld: [],
    mn_lcl: 0,
    mn_al: [],
    mn_il: [],
    mn_tcl: [],
    mn_r: [],
    mn_rt: 0,
    mn_wt: 0,
    mn_abck: "",
    mn_psn: "",
    mn_ts: "",
    mn_lg: [],
    loap: 1,
    dcs: 0,
    ir: function() {
      bmaka.start_ts = Date.now ? Date.now() : +new Date(), bmaka.kact = "", bmaka.ke_cnt = 0, bmaka.ke_vel = 0, bmaka.mact = "", bmaka.mme_cnt = 0, bmaka.mduce_cnt = 0, bmaka.me_vel = 0, bmaka.pact = "", bmaka.pme_cnt = 0, bmaka.pduce_cnt = 0, bmaka.pe_vel = 0, bmaka.tact = "", bmaka.tme_cnt = 0, bmaka.tduce_cnt = 0, bmaka.te_vel = 0, bmaka.doact = "", bmaka.doe_cnt = 0, bmaka.doe_vel = 0, bmaka.dmact = "", bmaka.dme_cnt = 0, bmaka.dme_vel = 0, bmaka.vcact = "", bmaka.vc_cnt = 0, bmaka.aj_indx = 0, bmaka.aj_ss = 0, bmaka.aj_type = -1, bmaka.aj_indx_doact = 0, bmaka.aj_indx_dmact = 0, bmaka.aj_indx_tact = 0, bmaka.me_cnt = 0, bmaka.pe_cnt = 0, bmaka.te_cnt = 0, bmaka.nav_perm = "", bmaka.brv = 0, bmaka.hbCalc = !1, bmaka.fmh = "", bmaka.fmz = "", bmaka.ssh = "", bmaka.wv = "", bmaka.wr = "", bmaka.weh = "", bmaka.wl = 0;
    },
    get_cf_date: function() {
      return Date.now ? Date.now() : +new Date();
    },
    sd_debug: function(t) {
      if (!bmaka.js_post) {
        var a = t;
        "string" == typeof _sd_trace ? _sd_trace += a : _sd_trace = a;
      }
    },
    pi: function(t) {
      return parseInt(t);
    },
    uar: function() {
      return window.navigator.userAgent.replace(/\\|"/g, "");
    },
    gd: function() {
      var t = bmaka.uar(),
        a = "" + bmaka.ab(t),
        e = bmaka.start_ts / 2,
        n = -1,
        o = -1,
        m = -1,
        r = -1,
        i = -1,
        c = -1,
        b = -1;

      try {
        n = window.screen ? window.screen.availWidth : -1;
      } catch (t) {
        n = -1;
      }

      try {
        o = window.screen ? window.screen.availHeight : -1;
      } catch (t) {
        o = -1;
      }

      try {
        m = window.screen ? window.screen.width : -1;
      } catch (t) {
        m = -1;
      }

      try {
        r = window.screen ? window.screen.height : -1;
      } catch (t) {
        r = -1;
      }

      try {
        i = window.innerHeight || (document.body && "clientHeight" in document.body ? document.body.clientHeight : document.documentElement && "clientHeight" in document.documentElement ? document.documentElement.clientHeight : -1);
      } catch (t) {
        i = -1;
      }

      try {
        c = window.innerWidth || (document.body && "clientWidth" in document.body ? document.body.clientWidth : document.documentElement && "clientWidth" in document.documentElement ? document.documentElement.clientWidth : -1);
      } catch (t) {
        c = -1;
      }

      try {
        b = "outerWidth" in window && void 0 !== window.outerWidth ? window.outerWidth : -1;
      } catch (t) {
        b = -1;
      }

      bmaka.z1 = bmaka.pi(bmaka.start_ts / (bmaka.y1 * bmaka.y1));
      var d = Math.random(),
        s = bmaka.pi(1e3 * d / 2),
        k = d + "";
      return k = k.slice(0, 11) + s, bmaka.gbrv(), bmaka.get_browser(), bmaka.bc(), bmaka.bmisc(), t + ",uaend," + bmaka.xagg + "," + bmaka.psub + "," + bmaka.lang + "," + bmaka.prod + "," + bmaka.plen + "," + bmaka.pen + "," + bmaka.wen + "," + bmaka.den + "," + bmaka.z1 + "," + bmaka.d3 + "," + n + "," + o + "," + m + "," + r + "," + c + "," + i + "," + b + "," + bmaka.bd() + "," + a + "," + k + "," + e + "," + bmaka.brv + ",loc:" + bmaka.loc;
    },
    get_browser: function() {
      navigator.productSub && (bmaka.psub = navigator.productSub), navigator.language && (bmaka.lang = navigator.language), navigator.product && (bmaka.prod = navigator.product), bmaka.plen = void 0 !== navigator.plugins ? navigator.plugins.length : -1;
    },
    gbrv: function() {
      // navigator.brave && navigator.brave.isBrave().then(function(t) {
      //   bmaka.brv = t ? 1 : 0;
      // }).catch(function(t) {
      //   bmaka.brv = 0;
      // });
      bmaka.brv = 0;
    },
    bc: function() {
      var t = window.addEventListener ? 1 : 0,
        a = window.XMLHttpRequest ? 1 : 0,
        e = window.XDomainRequest ? 1 : 0,
        n = window.emit ? 1 : 0,
        o = window.DeviceOrientationEvent ? 1 : 0,
        m = window.DeviceMotionEvent ? 1 : 0,
        r = window.TouchEvent ? 1 : 0,
        i = window.spawn ? 1 : 0,
        c = window.chrome ? 1 : 0,
        b = Function.prototype.bind ? 1 : 0,
        d = window.Buffer ? 1 : 0,
        s = window.PointerEvent ? 1 : 0;

      try {
        var k = window.innerWidth ? 1 : 0;
      } catch (t) {
        var k = 0;
      }

      try {
        var l = window.outerWidth ? 1 : 0;
      } catch (t) {
        var l = 0;
      }

      bmaka.xagg = t + (a << 1) + (e << 2) + (n << 3) + (o << 4) + (m << 5) + (r << 6) + (i << 7) + (k << 8) + (l << 9) + (c << 10) + (b << 11) + (d << 12) + (s << 13);
    },
    bmisc: function() {
      bmaka.pen = window._phantom ? 1 : 0, bmaka.wen = window.webdriver ? 1 : 0, bmaka.den = window.domAutomation ? 1 : 0;
    },
    bd: function() {
      var t = [],
        a = window.callPhantom ? 1 : 0;
      t.push(",cpen:" + a);
      var e = 0;
      window.ActiveXObject && "ActiveXObject" in window && (e = 1), t.push("i1:" + e);
      var n = "number" == typeof document.documentMode ? 1 : 0;
      t.push("dm:" + n);
      var o = window.chrome && window.chrome.webstore ? 1 : 0;
      t.push("cwen:" + o);
      var m = navigator.onLine ? 1 : 0;
      t.push("non:" + m);
      var r = window.opera ? 1 : 0;
      t.push("opc:" + r);
      var i = "undefined" != typeof InstallTrigger ? 1 : 0;
      t.push("fc:" + i);
      var c = window.HTMLElement && Object.prototype.toString.call(window.HTMLElement).indexOf("Constructor") > 0 ? 1 : 0;
      t.push("sc:" + c);
      var b = "function" == typeof window.RTCPeerConnection || "function" == typeof window.mozRTCPeerConnection || "function" == typeof window.webkitRTCPeerConnection ? 1 : 0;
      t.push("wrc:" + b);
      var d = "mozInnerScreenY" in window ? window.mozInnerScreenY : 0;
      t.push("isc:" + d), bmaka.d2 = bmaka.pi(bmaka.z1 / 23);
      var s = "function" == typeof navigator.vibrate ? 1 : 0;
      t.push("vib:" + s);
      var k = "function" == typeof navigator.getBattery ? 1 : 0;
      t.push("bat:" + k);
      var l = Array.prototype.forEach ? 0 : 1;
      t.push("x11:" + l);
      var u = "FileReader" in window ? 1 : 0;
      return t.push("x12:" + u), t.join(",");
    },
    fas: function() {
      try {
        return Boolean(navigator.credentials) + (Boolean(navigator.appMinorVersion) << 1) + (Boolean(navigator.bluetooth) << 2) + (Boolean(navigator.storage) << 3) + (Boolean(Math.imul) << 4) + (Boolean(navigator.getGamepads) << 5) + (Boolean(navigator.getStorageUpdates) << 6) + (Boolean(navigator.hardwareConcurrency) << 7) + (Boolean(navigator.mediaDevices) << 8) + (Boolean(navigator.mozAlarms) << 9) + (Boolean(navigator.mozConnection) << 10) + (Boolean(navigator.mozIsLocallyAvailable) << 11) + (Boolean(navigator.mozPhoneNumberService) << 12) + (Boolean(navigator.msManipulationViewsEnabled) << 13) + (Boolean(navigator.permissions) << 14) + (Boolean(navigator.registerProtocolHandler) << 15) + (Boolean(navigator.requestMediaKeySystemAccess) << 16) + (Boolean(navigator.requestWakeLock) << 17) + (Boolean(navigator.sendBeacon) << 18) + (Boolean(navigator.serviceWorker) << 19) + (Boolean(navigator.storeWebWideTrackingException) << 20) + (Boolean(navigator.webkitGetGamepads) << 21) + (Boolean(navigator.webkitTemporaryStorage) << 22) + (Boolean(Number.parseInt) << 23) + (Boolean(Math.hypot) << 24);
      } catch (t) {
        return 0;
      }
    },
    getmr: function() {
      try {
        if ("undefined" == typeof performance || void 0 === performance.now || "undefined" == typeof JSON) return void(bmaka.mr = "undef");

        for (var t = "", a = 1e3, e = [Math.abs, Math.acos, Math.asin, Math.atanh, Math.cbrt, Math.exp, Math.random, Math.round, Math.sqrt, isFinite, isNaN, parseFloat, parseInt, JSON.parse], n = 0; n < e.length; n++) {
          var o = [],
            m = 0,
            r = performance.now(),
            i = 0,
            c = 0;

          if (void 0 !== e[n]) {
            for (i = 0; i < a && m < .6; i++) {
              for (var b = performance.now(), d = 0; d < 4e3; d++) e[n](3.14);

              var s = performance.now();
              o.push(Math.round(1e3 * (s - b))), m = s - r;
            }

            var k = o.sort();
            c = k[Math.floor(k.length / 2)] / 5;
          }

          t = t + c + ",";
        }

        bmaka.mr = t;
      } catch (t) {
        bmaka.mr = "exception";
      }
    },
    sed: function() {
      var t;
      t = "0";
      var a;
      a = "0";
      var e;
      e = "0";
      var n;
      n = "0";
      var o;
      o = '1'
      var m;
      m = "0";
      var r;
      return r = null != null ? "1" : "0", [t, a, e, n, o, m, r].join(",");
      //return '0,0,0,0,1,0,0'
    },
    cma: function(t, a) {
      try {
        if (1 == a && bmaka.mme_cnt < bmaka.mme_cnt_lmt || 1 != a && bmaka.mduce_cnt < bmaka.mduce_cnt_lmt) {
          var e = t || window.event,
            n = -1,
            o = -1;
          e && e.pageX && e.pageY ? (n = Math.floor(e.pageX), o = Math.floor(e.pageY)) : e && e.clientX && e.clientY && (n = Math.floor(e.clientX), o = Math.floor(e.clientY));
          var m = e.toElement;
          null == m && (m = e.target);
          var r = bmaka.gf(m),
            i = bmaka.get_cf_date() - bmaka.start_ts,
            c = bmaka.me_cnt + "," + a + "," + i + "," + n + "," + o;

          if (1 != a) {
            c = c + "," + r;
            var b = void 0 !== e.which ? e.which : e.button;
            null != b && 1 != b && (c = c + "," + b);
          }

          void 0 !== true && !1 === true && (c += ",it0"), c += ";", bmaka.me_vel = bmaka.me_vel + bmaka.me_cnt + a + i + n + o, bmaka.mact = bmaka.mact + c, bmaka.ta += i;
        }

        1 == a ? bmaka.mme_cnt++ : bmaka.mduce_cnt++, bmaka.me_cnt++, bmaka.js_post && 3 == a && (bmaka.aj_type = 1, bmaka.bpd(), bmaka.pd(!0), bmaka.ce_js_post = 1);
      } catch (t) {}
    },
    x2: function() {
      var t = bmaka.ff,
        a = t(98) + t(109) + t(97) + t(107),
        e = t(103) + t(101) + t(116) + t(95) + t(99) + t(102) + t(95) + t(100) + t(97) + t(116) + t(101),
        n = window[a][e],
        o = 0;
      return "function" == typeof n && (o = n()), o;
    },
    np: function() {
      var t = [],
        a = ["geolocation", "notifications", "push", "midi", "camera", "microphone", "speaker", "device-info", "background-sync", "bluetooth", "persistent-storage", "ambient-light-sensor", "accelerometer", "gyroscope", "magnetometer", "clipboard", "accessibility-events", "clipboard-read", "clipboard-write", "payment-handler"];

      try {
        if (!navigator.permissions) return void(bmaka.nav_perm = 6);
        bmaka.nav_perm = 8;

        var e = function(a, e) {
            return navigator.permissions.query({
              name: a
            }).then(function(a) {
              switch (a.state) {
                case "prompt":
                  t[e] = 1;
                  break;

                case "granted":
                  t[e] = 2;
                  break;

                case "denied":
                  t[e] = 0;
                  break;

                default:
                  t[e] = 5;
              }
            }).catch(function(a) {
              t[e] = -1 !== a.message.indexOf("is not a valid enum value of type PermissionName") ? 4 : 3;
            });
          },
          n = a.map(function(t, a) {
            return e(t, a);
          });

        Promise.all(n).then(function() {
          bmaka.nav_perm = t.join("");
        });
      } catch (t) {
        bmaka.nav_perm = 7;
      }
    },
    cpa: function(t, a) {
      try {
        var e = !1;

        if (1 == a && bmaka.pme_cnt < bmaka.pme_cnt_lmt || 1 != a && bmaka.pduce_cnt < bmaka.pduce_cnt_lmt) {
          var n = t || window.event;

          if (n && "mouse" != n.pointerType) {
            e = !0;
            var o = -1,
              m = -1;
            n && n.pageX && n.pageY ? (o = Math.floor(n.pageX), m = Math.floor(n.pageY)) : n && n.clientX && n.clientY && (o = Math.floor(n.clientX), m = Math.floor(n.clientY));
            var r = bmaka.get_cf_date() - bmaka.start_ts,
              i = bmaka.pe_cnt + "," + a + "," + r + "," + o + "," + m;
            void 0 !== true && !1 === true && (i += ",0"), bmaka.pe_vel = bmaka.pe_vel + bmaka.pe_cnt + a + r + o + m, bmaka.pact = bmaka.pact + i + ";", bmaka.ta += r, 1 == a ? bmaka.pme_cnt++ : bmaka.pduce_cnt++;
          }
        }

        1 == a ? bmaka.pme_cnt++ : bmaka.pduce_cnt++, bmaka.pe_cnt++, bmaka.js_post && 3 == a && e && (bmaka.aj_type = 2, bmaka.bpd(), bmaka.pd(!0), bmaka.ce_js_post = 1);
      } catch (t) {}
    },
    ab: function(t) {
      if (null == t) return -1;

      try {
        for (var a = 0, e = 0; e < t.length; e++) {
          var n = t.charCodeAt(e);
          n < 128 && (a += n);
        }

        return a;
      } catch (t) {
        return -2;
      }
    },
    ff: function(t) {
      return String.fromCharCode(t);
    },
    cal_dis: function(t) {
      var a = t[0] - t[1],
        e = t[2] - t[3],
        n = t[4] - t[5],
        o = Math.sqrt(a * a + e * e + n * n);
      return Math.floor(o);
    },
    to: function() {
      var t = bmaka.x2() % 1e7;
      bmaka.d3 = t;

      for (var a = t, e = bmaka.pi(bmaka.ff(51)), n = 0; n < 5; n++) {
        var o = bmaka.pi(t / Math.pow(10, n)) % 10,
          m = o + 1;
        op = bmaka.cc(o), a = op(a, m);
      }

      bmaka.o9 = a * e;
    },
    jrs: function(t) {
      for (var a = Math.floor(1e5 * Math.random() + 1e4), e = String(t * a), n = 0, o = [], m = e.length >= 18; o.length < 6;) o.push(parseInt(e.slice(n, n + 2))), n = m ? n + 3 : n + 2;

      return [a, bmaka.cal_dis(o)];
    },
    fm: function() {
      var t = ["Monospace", "Wingdings 2", "ITC Bodoni 72 Bold", "Menlo", "Gill Sans MT", "Lucida Sans", "Bodoni 72", "Serif", "Shree Devanagari 714", "Microsoft Tai Le", "Nimbus Roman No 9 L", "Candara", "Press Start 2P", "Waseem"],
        a = document.createElement("span");
      a.innerHTML = "mmmmmmmmlli", a.style.fontSize = "192px";
      var e = "",
        n = document.getElementsByTagName("body")[0];

      if (n) {
        for (var o in t) a.style.fontFamily = t[o], n.appendChild(a), e += t[o] + ":" + a.offsetWidth + "," + a.offsetHeight + ";", n.removeChild(a);

        bmaka.fmh = bmaka.ats(bmaka.mn_s(e));
      } else bmaka.fmh = "";

      bmaka.fmz = "devicePixelRatio" in window && void 0 !== window.devicePixelRatio ? window.devicePixelRatio : -1;
    },
    wgl: function() {
      try {
        var t = document.createElement("canvas"),
          a = t.getContext("webgl");
        bmaka.wv = "n", bmaka.wr = "n", bmaka.weh = "n", bmaka.wl = 0, a && (bmaka.wv = "b", bmaka.wr = "b", bmaka.weh = "b", a.getSupportedExtensions() && (bmaka.weh = bmaka.ats(bmaka.mn_s(JSON.stringify(a.getSupportedExtensions().sort()))), bmaka.wl = a.getSupportedExtensions().length, a.getSupportedExtensions().indexOf("WEBGL_debug_renderer_info") >= 0 && (bmaka.wv = a.getParameter(a.getExtension("WEBGL_debug_renderer_info").UNMASKED_VENDOR_WEBGL), bmaka.wr = a.getParameter(a.getExtension("WEBGL_debug_renderer_info").UNMASKED_RENDERER_WEBGL))));
      } catch (t) {
        bmaka.wv = "e", bmaka.wr = "e", bmaka.weh = "e", bmaka.wl = 0;
      }
    },
    csh: function() {
      if (window.speechSynthesis) {
        var t = window.speechSynthesis.getVoices();

        if (t.length > 0) {
          for (var a = "", e = 0; e < t.length; e++) a += t[e].voiceURI + "_" + t[e].lang;

          bmaka.ssh = bmaka.ats(bmaka.mn_s(a));
        } else bmaka.ssh = "0";
      } else bmaka.ssh = "n";
    },
    hbs: function() {
      try {
        return 0
         //Boolean(window.__nightmare) + (Boolean(window.cdc_adoQpoasnfa76pfcZLmcfl_Array) << 1) + (Boolean(window.cdc_adoQpoasnfa76pfcZLmcfl_Promise) << 2) + (Boolean(window.cdc_adoQpoasnfa76pfcZLmcfl_Symbol) << 3) + (Boolean(window.OSMJIF) << 4) + (Boolean(window._Selenium_IDE_Recorder) << 5) + (Boolean(window.__$webdriverAsyncExecutor) << 6) + (Boolean(window.__driver_evaluate) << 7) + (Boolean(window.__driver_unwrapped) << 8) + (Boolean(window.__fxdriver_evaluate) << 9) + (Boolean(window.__fxdriver_unwrapped) << 10) + (Boolean(window.__lastWatirAlert) << 11) + (Boolean(window.__lastWatirConfirm) << 12) + (Boolean(window.__lastWatirPrompt) << 13) + (Boolean(window.__phantomas) << 14) + (Boolean(window.__selenium_evaluate) << 15) + (Boolean(window.__selenium_unwrapped) << 16) + (Boolean(window.__webdriverFuncgeb) << 17) + (Boolean(window.__webdriver__chr) << 18) + (Boolean(window.__webdriver_evaluate) << 19) + (Boolean(window.__webdriver_script_fn) << 20) + (Boolean(window.__webdriver_script_func) << 21) + (Boolean(window.__webdriver_script_function) << 22) + (Boolean(window.__webdriver_unwrapped) << 23) + (Boolean(window.awesomium) << 24) + (Boolean(window.callSelenium) << 25) + (Boolean(window.calledPhantom) << 26) + (Boolean(window.calledSelenium) << 27) + (Boolean(window.domAutomationController) << 28) + (Boolean(window.watinExpressionError) << 29) + (Boolean(window.watinExpressionResult) << 30) + (Boolean(window.spynner_additional_js_loaded) << 31) + (Boolean(document.$chrome_asyncScriptInfo) << 32) + (Boolean(window.fmget_targets) << 33) + (Boolean(window.geb) << 34);
      } catch (t) {
        return 0;
      }
    },
    gwd: function() {
      try {
        return false ? false : -1;
      } catch (t) {
        return 0;
      }
    },
    gf: function(t) {
      var a;
      if (a = null == t ? document.activeElement : t, null == document.activeElement) return -1;
      var e = a.getAttribute("name");

      if (null == e) {
        var n = a.getAttribute("id");
        return null == n ? -1 : bmaka.ab(n);
      }

      return bmaka.ab(e);
    },
    cc: function(t) {
      var a = t % 4;
      2 == a && (a = 3);

      var e = 42 + a,
        n = function(t, a) {
          return 0;
        };

      if (42 == e) var n = function(t, a) {
        return t * a;
      };
      else if (43 == e) var n = function(t, a) {
        return t + a;
      };
      else var n = function(t, a) {
        return t - a;
      };
      return n;
    },
    isIgn: function(t) {
      var a = document.activeElement;
      if (null == document.activeElement) return 0;
      var e = a.getAttribute("type");
      return 1 == (null == e ? -1 : bmaka.get_type(e)) && bmaka.fidcnt > 12 && -2 == t ? 1 : 0;
    },
    cka: function(t, a) {
      try {
        var e = t || window.event,
          n = -1,
          o = 1;

        if (bmaka.ke_cnt < bmaka.ke_cnt_lmt && e) {
          n = e.keyCode;
          var m = e.charCode,
            r = e.shiftKey ? 1 : 0,
            i = e.ctrlKey ? 1 : 0,
            c = e.metaKey ? 1 : 0,
            b = e.altKey ? 1 : 0,
            d = 8 * r + 4 * i + 2 * c + b,
            s = bmaka.get_cf_date() - bmaka.start_ts,
            k = bmaka.gf(null),
            l = 0;
          m && n && (n = 0 != m && 0 != n && m != n ? -1 : 0 != n ? n : m), 0 == i && 0 == c && 0 == b && n >= 32 && (n = 3 == a && n >= 32 && n <= 126 ? -2 : n >= 33 && n <= 47 ? -3 : n >= 112 && n <= 123 ? -4 : -2), k != bmaka.prevfid ? (bmaka.fidcnt = 0, bmaka.prevfid = k) : bmaka.fidcnt = bmaka.fidcnt + 1;

          if (0 == bmaka.isIgn(n)) {
            var u = bmaka.ke_cnt + "," + a + "," + s + "," + n + "," + l + "," + d + "," + k;
            void 0 !== true && !1 === true && (u += ",0"), u += ";", bmaka.kact = bmaka.kact + u, bmaka.ke_vel = bmaka.ke_vel + bmaka.ke_cnt + a + s + n + d + k, bmaka.ta += s;
          } else o = 0;
        }

        o && e && bmaka.ke_cnt++, !bmaka.js_post || 1 != a || 13 != n && 9 != n || (bmaka.aj_type = 3, bmaka.bpd(), bmaka.pd(!0), bmaka.ce_js_post = 1);
      } catch (t) {}
    },
    cta: function(t, a) {
      try {
        if (1 == a && bmaka.tme_cnt < bmaka.tme_cnt_lmt || 1 != a && bmaka.tduce_cnt < bmaka.tduce_cnt_lmt) {
          var e = t || window.event,
            n = -1,
            o = -1;
          e && e.pageX && e.pageY ? (n = Math.floor(e.pageX), o = Math.floor(e.pageY)) : e && e.clientX && e.clientY && (n = Math.floor(e.clientX), o = Math.floor(e.clientY));
          var m = bmaka.get_cf_date() - bmaka.start_ts,
            r = bmaka.te_cnt + "," + a + "," + m + "," + n + "," + o;
          void 0 !== true && !1 === true && (r += ",0"), bmaka.tact = bmaka.tact + r + ";", bmaka.ta += m, bmaka.te_vel = bmaka.te_vel + bmaka.te_cnt + a + m + n + o, bmaka.doa_throttle = 0, bmaka.dma_throttle = 0;
        }

        1 == a ? bmaka.tme_cnt++ : bmaka.tduce_cnt++, bmaka.te_cnt++, bmaka.js_post && 2 == a && bmaka.aj_indx_tact < bmaka.aj_lmt_tact && (bmaka.aj_type = 5, bmaka.bpd(), bmaka.pd(!0), bmaka.ce_js_post = 1, bmaka.aj_indx_tact++);
      } catch (t) {}
    },
    getFloatVal: function(t) {
      try {
        if (-1 != bmaka.chknull(t) && !isNaN(t)) {
          var a = parseFloat(t);
          if (!isNaN(a)) return a.toFixed(2);
        }
      } catch (t) {}

      return -1;
    },
    cdoa: function(t) {
      try {
        if (bmaka.doe_cnt < bmaka.doe_cnt_lmt && bmaka.doa_throttle < 2 && t) {
          var a = bmaka.get_cf_date() - bmaka.start_ts,
            e = bmaka.getFloatVal(t.alpha),
            n = bmaka.getFloatVal(t.beta),
            o = bmaka.getFloatVal(t.gamma),
            m = bmaka.doe_cnt + "," + a + "," + e + "," + n + "," + o;
          void 0 !== true && !1 === true && (m += ",0"), bmaka.doact = bmaka.doact + m + ";", bmaka.ta += a, bmaka.doe_vel = bmaka.doe_vel + bmaka.doe_cnt + a, bmaka.doe_cnt++;
        }

        bmaka.js_post && bmaka.doe_cnt > 1 && bmaka.aj_indx_doact < bmaka.aj_lmt_doact && (bmaka.aj_type = 6, bmaka.bpd(), bmaka.pd(!0), bmaka.ce_js_post = 1, bmaka.aj_indx_doact++), bmaka.doa_throttle++;
      } catch (t) {}
    },
    cdma: function(t) {
      try {
        if (bmaka.dme_cnt < bmaka.dme_cnt_lmt && bmaka.dma_throttle < 2 && t) {
          var a = bmaka.get_cf_date() - bmaka.start_ts,
            e = -1,
            n = -1,
            o = -1;
          t.acceleration && (e = bmaka.getFloatVal(t.acceleration.x), n = bmaka.getFloatVal(t.acceleration.y), o = bmaka.getFloatVal(t.acceleration.z));
          var m = -1,
            r = -1,
            i = -1;
          t.accelerationIncludingGravity && (m = bmaka.getFloatVal(t.accelerationIncludingGravity.x), r = bmaka.getFloatVal(t.accelerationIncludingGravity.y), i = bmaka.getFloatVal(t.accelerationIncludingGravity.z));
          var c = -1,
            b = -1,
            d = 1;
          t.rotationRate && (c = bmaka.getFloatVal(t.rotationRate.alpha), b = bmaka.getFloatVal(t.rotationRate.beta), d = bmaka.getFloatVal(t.rotationRate.gamma));
          var s = bmaka.dme_cnt + "," + a + "," + e + "," + n + "," + o + "," + m + "," + r + "," + i + "," + c + "," + b + "," + d;
          void 0 !== true && !1 === true && (s += ",0"), bmaka.dmact = bmaka.dmact + s + ";", bmaka.ta += a, bmaka.dme_vel = bmaka.dme_vel + bmaka.dme_cnt + a, bmaka.dme_cnt++;
        }

        bmaka.js_post && bmaka.dme_cnt > 1 && bmaka.aj_indx_dmact < bmaka.aj_lmt_dmact && (bmaka.aj_type = 7, bmaka.bpd(), bmaka.pd(!0), bmaka.ce_js_post = 1, bmaka.aj_indx_dmact++), bmaka.dma_throttle++;
      } catch (t) {}
    },
    get_type: function(t) {
      return t = t.toLowerCase(), "text" == t || "search" == t || "url" == t || "email" == t || "tel" == t || "number" == t ? 0 : "password" == t ? 1 : 2;
    },
    chknull: function(t) {
      return null == t ? -1 : t;
    },
    getforminfo: function() {
      for (var t = "", a = "", e = document.getElementsByTagName("input"), n = -1, o = 0; o < e.length; o++) {
        var m = e[o],
          r = bmaka.ab(m.getAttribute("name")),
          i = bmaka.ab(m.getAttribute("id")),
          c = m.getAttribute("required"),
          b = null == c ? 0 : 1,
          d = m.getAttribute("type"),
          s = null == d ? -1 : bmaka.get_type(d),
          k = m.getAttribute("autocomplete");
        null == k ? n = -1 : (k = k.toLowerCase(), n = "off" == k ? 0 : "on" == k ? 1 : 2);
        var l = m.defaultValue,
          u = m.value,
          _ = 0,
          f = 0;
        l && 0 != l.length && (f = 1), !u || 0 == u.length || f && u == l || (_ = 1), 2 != s && (t = t + s + "," + n + "," + _ + "," + b + "," + i + "," + r + "," + f + ";"), a = a + _ + ";";
      }

      return null == bmaka.ins && (bmaka.ins = a), bmaka.cns = a, t;
    },
    startdoadma: function() {
      0 == bmaka.doadma_en && window.addEventListener && (window.addEventListener("deviceorientation", bmaka.cdoa, !0), window.addEventListener("devicemotion", bmaka.cdma, !0), bmaka.doadma_en = 1), bmaka.doa_throttle = 0, bmaka.dma_throttle = 0;
    },
    updatet: function() {
      return bmaka.get_cf_date() - bmaka.start_ts;
    },
    htm: function(t) {
      bmaka.cta(t, 1);
    },
    hts: function(t) {
      bmaka.cta(t, 2);
    },
    hte: function(t) {
      bmaka.cta(t, 3);
    },
    htc: function(t) {
      bmaka.cta(t, 4);
    },
    hmm: function(t) {
      bmaka.cma(t, 1);
    },
    hc: function(t) {
      bmaka.cma(t, 2);
    },
    hmd: function(t) {
      bmaka.cma(t, 3);
    },
    hmu: function(t) {
      bmaka.cma(t, 4);
    },
    hpd: function(t) {
      bmaka.cpa(t, 3);
    },
    hpu: function(t) {
      bmaka.cpa(t, 4);
    },
    hkd: function(t) {
      bmaka.cka(t, 1);
    },
    hku: function(t) {
      bmaka.cka(t, 2);
    },
    hkp: function(t) {
      bmaka.cka(t, 3);
    },
    form_submit: function() {
      try {
        if (bmaka.bpd(), 0 == bmaka.sdfn.length) {
          if (document.getElementById("bm-telemetry") && (document.getElementById("bm-telemetry").value = bmaka.sensor_data), void 0 !== document.getElementsByName("bm-telemetry"))
            for (var t = document.getElementsByName("bm-telemetry"), a = 0; a < t.length; a++) t[a].value = bmaka.sensor_data;
        } else
          for (var a = 0; a < bmaka.sdfn.length; a++) document.getElementById(bmaka.sdfn[a]) && (document.getElementById(bmaka.sdfn[a]).value = bmaka.sensor_data);
      } catch (t) {
        bmaka.sd_debug(",s7:" + t + "," + bmaka.sensor_data);
      }
    },
    get_telemetry: function() {
      return bmaka.bpd(), bmaka.ir(), bmaka.sensor_data;
    },
    getdurl: function() {
      return bmaka.enReadDocUrl ? 'https://www.换成自己的.com/' : "";
    },
    x1: function() {
      return Math.floor(16777216 * (1 + Math.random())).toString(36);
    },
    gck: function() {
      var t = bmaka.x1() + bmaka.x1() + bmaka.x1() + bmaka.x1();
      return bmaka.set_cookie(bmaka.ckie, t + "_" + bmaka.ab(t)), t;
    },
    set_cookie: function(t, a) {
      void 0 !== document.cookie && (document.cookie = t + "=" + a + "; path=/; expires=Fri, 01 Feb 2025 08:00:00 GMT;");
    },
    get_cookie: function() {
      var t = "0";

      try {
        var t = bmaka.cookie_chk_read(bmaka.ckie);
        t || (bmaka.n_ck = 1, t = bmaka.bm ? "2" : "1");
      } catch (t) {}

      return t;
    },
    cookie_chk_read: function(t) {
      if (document.cookie)
        for (var a = t + "=", e = document.cookie.split("; "), n = 0; n < e.length; n++) {
          var o = e[n];

          if (0 === o.indexOf(a)) {
            var m = o.substring(a.length, o.length);
            if (-1 != m.indexOf("~") || -1 != decodeURIComponent(m).indexOf("~")) return m;
          }
        }
      return !1;
    },
    bpd: function() {
      bmaka.sd_debug("<bpd>");
      var t = 0;

      try {
        t = bmaka.get_cf_date();
        var a = bmaka.updatet(),
          e = "3";
        bmaka.ckie && (e = bmaka.get_cookie());
        var n = bmaka.gd(),
          o = window.DeviceOrientationEvent ? "do_en" : "do_dis",
          m = window.DeviceMotionEvent ? "dm_en" : "dm_dis",
          r = window.TouchEvent ? "t_en" : "t_dis",
          i = o + "," + m + "," + r,
          c = bmaka.getforminfo(),
          b = bmaka.getdurl(),
          d = bmaka.aj_type + "," + bmaka.aj_indx;
        !bmaka.fpcf.fpValCalculated && (0 == bmaka.js_post || bmaka.aj_indx > 0) && bmaka.fpcf.fpVal();

        var s = bmaka.ke_vel + bmaka.me_vel + bmaka.doe_vel + bmaka.dme_vel + bmaka.te_vel + bmaka.pe_vel,
          k = bmaka.ff,
          l = k(80) + k(105) + k(90) + k(116) + k(69),
          u = bmaka.jrs(bmaka.start_ts),
          _ = bmaka.get_cf_date() - bmaka.start_ts,
          f = bmaka.pi(bmaka.d2 / 6),
          p = bmaka.fas(),
          v = bmaka.hbs(),
          h = bmaka.gwd(),
          g = [bmaka.ke_vel + 1, bmaka.me_vel + 32, bmaka.te_vel + 32, bmaka.doe_vel, bmaka.dme_vel, bmaka.pe_vel, s, a, bmaka.init_time, bmaka.start_ts, bmaka.fpcf.td, bmaka.d2, bmaka.ke_cnt, bmaka.me_cnt, f, bmaka.pe_cnt, bmaka.te_cnt, _, bmaka.ta, bmaka.n_ck, e, bmaka.ab(e), bmaka.fpcf.rVal, bmaka.fpcf.rCFP, p, l, u[0], u[1], v, h],
          w = g.join(","),
          y = "" + bmaka.ab(bmaka.fpcf.fpValstr);

        bmaka.firstLoad ? bmaka.np() : bmaka.csh(), !bmaka.hbCalc && (0 == bmaka.js_post || bmaka.aj_indx > 0) && (bmaka.fm(), bmaka.wgl(), bmaka.hbCalc = !0);
        var E = "";
        bmaka.hbCalc && (E = bmaka.fmh + "," + bmaka.fmz + "," + bmaka.ssh + "," + bmaka.wv + "," + bmaka.wr + "," + bmaka.weh + "," + bmaka.wl);
        var S = bmaka.sed(),
          C = bmaka.mn_get_current_challenges(),
          B = "",
          x = "",
          M = "";

        if (void 0 !== C[1]) {
          var j = C[1];
          void 0 !== bmaka.mn_r[j] && (B = bmaka.mn_r[j]);
        }

        if (void 0 !== C[2]) {
          var A = C[2];
          void 0 !== bmaka.mn_r[A] && (x = bmaka.mn_r[A]);
        }

        if (void 0 !== C[3]) {
          var L = C[3];
          void 0 !== bmaka.mn_r[L] && (M = bmaka.mn_r[L]);
        }
        console.log(bmaka.mact)
        bmaka.sensor_data = bmaka.ver + "-1,2,-94,-100," + n + "-1,2,-94,-101," + i + "-1,2,-94,-105," + bmaka.informinfo + "-1,2,-94,-102," + c + "-1,2,-94,-108," + bmaka.kact + "-1,2,-94,-110," + bmaka.mact + "-1,2,-94,-117," + bmaka.tact + "-1,2,-94,-111," + bmaka.doact + "-1,2,-94,-109," + bmaka.dmact + "-1,2,-94,-114," + bmaka.pact + "-1,2,-94,-103," + bmaka.vcact + "-1,2,-94,-112," + b + "-1,2,-94,-115," + w + "-1,2,-94,-106," + d, bmaka.sensor_data = bmaka.sensor_data + "-1,2,-94,-119," + bmaka.mr + "-1,2,-94,-122," + S + "-1,2,-94,-123," + B + "-1,2,-94,-124," + x + "-1,2,-94,-126," + M + "-1,2,-94,-127," + bmaka.nav_perm;
        var P = 24 ^ bmaka.ab(bmaka.sensor_data);
        bmaka.sensor_data = bmaka.sensor_data + "-1,2,-94,-70," + bmaka.fpcf.fpValstr + "-1,2,-94,-80," + y + "-1,2,-94,-116," + bmaka.o9 + "-1,2,-94,-118," + P + "-1,2,-94,-129," + E + "-1,2,-94,-121,", bmaka.sd_debug(",s1:" + bmaka.sensor_data.slice(0, 10));
      } catch (t) {
        var T = "";

        try {
          t.stack && "string" == typeof t.stack ? T = t.stack.replace(/\"/g, "\\'") : "string" == typeof t && (T = t.replace(/\"/g, "\\'")), T = T.slice(0, 1e3), bmaka.sd_debug(",s2:" + T), bmaka.sensor_data = bmaka.ver + "-1,2,-94,-100," + bmaka.uar() + "-1,2,-94,-120," + T;
        } catch (t) {
          t.stack && "string" == typeof t.stack ? T = t.stack.replace(/\"/g, "\\'") : "string" == typeof t && (T = t.replace(/\"/g, "\\'")), T = T.slice(0, 1e3), bmaka.sd_debug(",s3:" + T), bmaka.sensor_data = bmaka.ver + bmaka.sensor_data + ",s3:" + T;
        }
      }

      try {
        var F = bmaka.od(bmaka.cs, bmaka.api_public_key).slice(0, 16),
          D = Math.floor(bmaka.get_cf_date() / 36e5),
          R = bmaka.get_cf_date(),
          N = F + bmaka.od(D, F) + bmaka.sensor_data;
        bmaka.sensor_data = N + ";" + (bmaka.get_cf_date() - t) + ";" + bmaka.tst + ";" + (bmaka.get_cf_date() - R);
      } catch (t) {}

      bmaka.sd_debug("</bpd>");
    },
    od: function(t, a) {
      try {
        t = String(t), a = String(a);
        var e = [],
          n = a.length;

        if (n > 0) {
          for (var o = 0; o < t.length; o++) {
            var m = t.charCodeAt(o),
              r = t.charAt(o),
              i = a.charCodeAt(o % n);
            m = bmaka.rir(m, 47, 57, i), m != t.charCodeAt(o) && (r = String.fromCharCode(m)), e.push(r);
          }

          if (e.length > 0) return e.join("");
        }
      } catch (t) {}

      return t;
    },
    rir: function(t, a, e, n) {
      return t > a && t <= e && (t += n % (e - a)) > e && (t = t - e + a), t;
    },
    lvc: function(t) {
      try {
        if (bmaka.vc_cnt < bmaka.vc_cnt_lmt) {
          var a = bmaka.get_cf_date() - bmaka.start_ts,
            e = t + "," + a + ";";
          bmaka.vcact = bmaka.vcact + e;
        }

        bmaka.vc_cnt++;
      } catch (t) {}
    },
    hvc: function() {
      try {
        var t = 1;
        document[bmaka.hn] && (t = 0), bmaka.lvc(t);
      } catch (t) {}
    },
    hb: function(t) {
      bmaka.lvc(2);
    },
    hf: function(t) {
      bmaka.lvc(3);
    },
    rve: function() {
      void 0 !== document.hidden ? (bmaka.hn = "hidden", bmaka.vc = "visibilitychange") : void 0 !== document.mozHidden ? (bmaka.hn = "mozHidden", bmaka.vc = "mozvisibilitychange") : void 0 !== document.msHidden ? (bmaka.hn = "msHidden", bmaka.vc = "msvisibilitychange") : void 0 !== document.webkitHidden && (bmaka.hn = "webkitHidden", bmaka.vc = "webkitvisibilitychange"), document.addEventListener ? "unk" != bmaka.hn && document.addEventListener(bmaka.vc, bmaka.hvc, !0) : document.attachEvent && "unk" != bmaka.hn && document.attachEvent(bmaka.vc, bmaka.hvc), window.onblur = bmaka.hb, window.onfocus = bmaka.hf;
    },
    startTracking: function() {
      bmaka.startdoadma();

      try {
        bmaka.to();
      } catch (t) {
        bmaka.o9 = -654321;
      }

      setInterval(function() {
        bmaka.startdoadma();
      }, 3e3), document.addEventListener ? (document.addEventListener("touchmove", bmaka.htm, !0), document.addEventListener("touchstart", bmaka.hts, !0), document.addEventListener("touchend", bmaka.hte, !0), document.addEventListener("touchcancel", bmaka.htc, !0), document.addEventListener("mousemove", bmaka.hmm, !0), document.addEventListener("click", bmaka.hc, !0), document.addEventListener("mousedown", bmaka.hmd, !0), document.addEventListener("mouseup", bmaka.hmu, !0), document.addEventListener("pointerdown", bmaka.hpd, !0), document.addEventListener("pointerup", bmaka.hpu, !0), document.addEventListener("keydown", bmaka.hkd, !0), document.addEventListener("keyup", bmaka.hku, !0), document.addEventListener("keypress", bmaka.hkp, !0)) : document.attachEvent && (document.attachEvent("touchmove", bmaka.htm), document.attachEvent("touchstart", bmaka.hts), document.attachEvent("touchend", bmaka.hte), document.attachEvent("touchcancel", bmaka.htc), document.attachEvent("onmousemove", bmaka.hmm), document.attachEvent("onclick", bmaka.hc), document.attachEvent("onmousedown", bmaka.hmd), document.attachEvent("onmouseup", bmaka.hmu), document.attachEvent("onpointerdown", bmaka.hpd), document.attachEvent("onpointerup", bmaka.hpu), document.attachEvent("onkeydown", bmaka.hkd), document.attachEvent("onkeyup", bmaka.hku), document.attachEvent("onkeypress", bmaka.hkp)), bmaka.rve(), bmaka.informinfo = bmaka.getforminfo(), bmaka.js_post && (bmaka.aj_type = 0, bmaka.bpd(), bmaka.pd(!0)), bmaka.firstLoad = !1;
    },
    gb: function(t, a) {
      var e = t.charCodeAt(a);
      return e = e > 255 ? 0 : e;
    },
    encode: function(t) {
      if ("undefined" != typeof btoa) return btoa(t);

      for (var a, e, n, o, m, r, i, c = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", b = "", d = 3 * Math.floor(t.length / 3), s = 0; s < d; s += 3) a = bmaka.gb(t, s), e = bmaka.gb(t, s + 1), n = bmaka.gb(t, s + 2), o = a >> 2, m = ((3 & a) << 4) + (e >> 4), r = ((15 & e) << 2) + (n >> 6), i = 63 & n, b = b + c.charAt(o) + c.charAt(m) + c.charAt(r) + c.charAt(i);

      return t.length % 3 == 1 && (a = bmaka.gb(t, s), o = a >> 2, m = (3 & a) << 4, b = b + c.charAt(o) + c.charAt(m) + "=="), t.length % 3 == 2 && (a = bmaka.gb(t, s), e = bmaka.gb(t, s + 1), o = a >> 2, m = ((3 & a) << 4) + (e >> 4), r = (15 & e) << 2, b = b + c.charAt(o) + c.charAt(m) + c.charAt(r) + "="), b;
    },
    ie9OrLower: function() {
      try {
        if ("string" == typeof navigator.appVersion && -1 != navigator.appVersion.indexOf("MSIE")) {
          if (parseFloat(navigator.appVersion.split("MSIE")[1]) <= 9) return !0;
        }
      } catch (t) {}

      return !1;
    },
    parse_gp: function(t) {},
    call_gp: function() {
      var t;
      void 0 !== window.XMLHttpRequest ? t = new XMLHttpRequest() : void 0 !== window.XDomainRequest ? (t = new XDomainRequest(), t.onload = function() {
        this.readyState = 4, this.onreadystatechange instanceof Function && this.onreadystatechange();
      }) : t = new ActiveXObject("Microsoft.XMLHTTP"), t.open("GET", bmaka.params_url, !0), t.onreadystatechange = function() {
        t.readyState > 3 && bmaka.parse_gp && bmaka.parse_gp(t);
      }, t.send();
    },
    apicall: function(t, a) {
      var e;
      e = window.XDomainRequest ? new XDomainRequest() : window.XMLHttpRequest ? new XMLHttpRequest() : new ActiveXObject("Microsoft.XMLHTTP"), e.open("POST", t, a);
      var n = bmaka.encode(bmaka.api_public_key + ":");
      bmaka.auth = ",\"auth\" : \"" + n + "\"", e.setRequestHeader && (e.setRequestHeader("Content-type", "application/json"), e.setRequestHeader("Authorization", "Basic " + n), bmaka.auth = "");
      var o = "{\"session_id\" : \"" + bmaka.session_id + "\",\"sensor_data\" : \"" + bmaka.sensor_data + "\"" + bmaka.auth + "}";
      e.send(o);
    },
    apicall_bm: function(t, a, e) {
      var n;
      void 0 !== window.XMLHttpRequest ? n = new XMLHttpRequest() : void 0 !== window.XDomainRequest ? (n = new XDomainRequest(), n.onload = function() {
        this.readyState = 4, this.onreadystatechange instanceof Function && this.onreadystatechange();
      }) : n = new ActiveXObject("Microsoft.XMLHTTP"), n.open("POST", t, a), void 0 !== n.withCredentials && (n.withCredentials = !0);
      var o = "{\"sensor_data\":\"" + bmaka.sensor_data + "\"}";
      n.onreadystatechange = function() {
        n.readyState > 3 && e && e(n);
      }, n.send(o), bmaka.dcs = 0;
    },
    pd: function(t) {
      bmaka.check_stop_protocol() ? (bmaka.apicall_bm(bmaka.cf_url, t, bmaka.patp), bmaka.aj_indx = bmaka.aj_indx + 1) : bmaka.loap && bmaka.dcs && bmaka.apicall_bm(bmaka.cf_url, t, bmaka.patp);
    },
    check_stop_protocol: function() {
      var t = bmaka.get_stop_signals(),
        a = t[0];
      !bmaka.rst && a > -1 && (bmaka.ir(), bmaka.rst = !0);
      var e = t[1];
      return -1 == e || bmaka.aj_ss < e;
    },
    get_stop_signals: function() {
      var t = [-1, -1],
        a = bmaka.cookie_chk_read(bmaka.ckie);
      if (!1 !== a) try {
        var e = decodeURIComponent(a).split("~");

        if (e.length >= 4) {
          var n = bmaka.pi(e[1]),
            o = bmaka.pi(e[3]);
          n = isNaN(n) ? -1 : n, o = isNaN(o) ? -1 : o, t = [o, n];
        }
      } catch (t) {}
      return t;
    },
    patp: function(t) {
      bmaka.aj_ss++, bmaka.rst = !1;
    },
    get_mn_params_from_abck: function() {
      var t = [
        []
      ];

      try {
        var a = bmaka.cookie_chk_read(bmaka.ckie);

        if (!1 !== a) {
          var e = decodeURIComponent(a).split("~");

          if (e.length >= 5) {
            var n = e[0],
              o = e[4],
              m = o.split("||");
            if (m.length > 0)
              for (var r = 0; r < m.length; r++) {
                var i = m[r],
                  c = i.split("-");

                if (c.length >= 5) {
                  var b = bmaka.pi(c[0]),
                    d = c[1],
                    s = bmaka.pi(c[2]),
                    k = bmaka.pi(c[3]),
                    l = bmaka.pi(c[4]),
                    u = 1;
                  c.length >= 6 && (u = bmaka.pi(c[5]));
                  var _ = [b, n, d, s, k, l, u];
                  2 == u ? t.splice(0, 0, _) : t.push(_);
                }
              }
          }
        }
      } catch (t) {}

      return t;
    },
    mn_get_current_challenges: function() {
      var t = bmaka.get_mn_params_from_abck(),
        a = [];
      if (null != t)
        for (var e = 0; e < t.length; e++) {
          var n = t[e];

          if (n.length > 0) {
            var o = n[1] + n[2],
              m = n[6];
            a[m] = o;
          }
        }
      return a;
    },
    mn_update_challenge_details: function(t) {
      bmaka.mn_sen = t[0], bmaka.mn_abck = t[1], bmaka.mn_psn = t[2], bmaka.mn_cd = t[3], bmaka.mn_tout = t[4], bmaka.mn_stout = t[5], bmaka.mn_ct = t[6], bmaka.mn_ts = bmaka.start_ts, bmaka.mn_cc = bmaka.mn_abck + bmaka.start_ts + bmaka.mn_psn;
    },
    mn_get_new_challenge_params: function(t) {
      var a = null,
        e = null,
        n = null;
      if (null != t)
        for (var o = 0; o < t.length; o++) {
          var m = t[o];

          if (m.length > 0) {
            for (var r = m[0], i = bmaka.mn_abck + bmaka.start_ts + m[2], c = (m[3], m[6]), b = 0; b < bmaka.mn_lcl && 1 == r && bmaka.mn_lc[b] != i; b++);

            b == bmaka.mn_lcl && (a = o, 2 == c && (e = o), 3 == c && (n = o));
          }
        }
      return null != n && bmaka.pstate ? t[n] : null == e || bmaka.pstate ? null == a || bmaka.pstate ? null : t[a] : t[e];
    },
    mn_poll: function() {
      if (0 == bmaka.mn_state) {
        var t = bmaka.get_mn_params_from_abck(),
          a = bmaka.mn_get_new_challenge_params(t);
        null != a && (bmaka.mn_update_challenge_details(a), bmaka.mn_sen && (bmaka.mn_state = 1, bmaka.mn_mc_indx = 0, bmaka.mn_al = [], bmaka.mn_il = [], bmaka.mn_tcl = [], bmaka.mn_lg = [], bmaka.mn_rts = bmaka.get_cf_date(), bmaka.mn_rt = bmaka.mn_rts - bmaka.start_ts, bmaka.mn_wt = 0, setTimeout(bmaka.mn_w, bmaka.mn_tout)));
      }
    },
    rotate_right: function(t, a) {
      return t >>> a | t << 32 - a;
    },
    encode_utf8: function(t) {
      return unescape(encodeURIComponent(t));
    },
    mn_s: function(t) {
      var a = [1116352408, 1899447441, 3049323471, 3921009573, 961987163, 1508970993, 2453635748, 2870763221, 3624381080, 310598401, 607225278, 1426881987, 1925078388, 2162078206, 2614888103, 3248222580, 3835390401, 4022224774, 264347078, 604807628, 770255983, 1249150122, 1555081692, 1996064986, 2554220882, 2821834349, 2952996808, 3210313671, 3336571891, 3584528711, 113926993, 338241895, 666307205, 773529912, 1294757372, 1396182291, 1695183700, 1986661051, 2177026350, 2456956037, 2730485921, 2820302411, 3259730800, 3345764771, 3516065817, 3600352804, 4094571909, 275423344, 430227734, 506948616, 659060556, 883997877, 958139571, 1322822218, 1537002063, 1747873779, 1955562222, 2024104815, 2227730452, 2361852424, 2428436474, 2756734187, 3204031479, 3329325298],
        e = 1779033703,
        n = 3144134277,
        o = 1013904242,
        m = 2773480762,
        r = 1359893119,
        i = 2600822924,
        c = 528734635,
        b = 1541459225,
        d = bmaka.encode_utf8(t),
        s = 8 * d.length;
      d += String.fromCharCode(128);

      for (var k = d.length / 4 + 2, l = Math.ceil(k / 16), u = new Array(l), _ = 0; _ < l; _++) {
        u[_] = new Array(16);

        for (var f = 0; f < 16; f++) u[_][f] = d.charCodeAt(64 * _ + 4 * f) << 24 | d.charCodeAt(64 * _ + 4 * f + 1) << 16 | d.charCodeAt(64 * _ + 4 * f + 2) << 8 | d.charCodeAt(64 * _ + 4 * f + 3) << 0;
      }

      var p = s / Math.pow(2, 32);
      u[l - 1][14] = Math.floor(p), u[l - 1][15] = s;

      for (var v = 0; v < l; v++) {
        for (var h, g = new Array(64), w = e, y = n, E = o, S = m, C = r, h = i, B = c, x = b, _ = 0; _ < 64; _++) {
          var M, j, A, L, P, T;
          _ < 16 ? g[_] = u[v][_] : (M = bmaka.rotate_right(g[_ - 15], 7) ^ bmaka.rotate_right(g[_ - 15], 18) ^ g[_ - 15] >>> 3, j = bmaka.rotate_right(g[_ - 2], 17) ^ bmaka.rotate_right(g[_ - 2], 19) ^ g[_ - 2] >>> 10, g[_] = g[_ - 16] + M + g[_ - 7] + j), j = bmaka.rotate_right(C, 6) ^ bmaka.rotate_right(C, 11) ^ bmaka.rotate_right(C, 25), A = C & h ^ ~C & B, L = x + j + A + a[_] + g[_], M = bmaka.rotate_right(w, 2) ^ bmaka.rotate_right(w, 13) ^ bmaka.rotate_right(w, 22), P = w & y ^ w & E ^ y & E, T = M + P, x = B, B = h, h = C, C = S + L >>> 0, S = E, E = y, y = w, w = L + T >>> 0;
        }

        e += w, n += y, o += E, m += S, r += C, i += h, c += B, b += x;
      }

      return [e >> 24 & 255, e >> 16 & 255, e >> 8 & 255, 255 & e, n >> 24 & 255, n >> 16 & 255, n >> 8 & 255, 255 & n, o >> 24 & 255, o >> 16 & 255, o >> 8 & 255, 255 & o, m >> 24 & 255, m >> 16 & 255, m >> 8 & 255, 255 & m, r >> 24 & 255, r >> 16 & 255, r >> 8 & 255, 255 & r, i >> 24 & 255, i >> 16 & 255, i >> 8 & 255, 255 & i, c >> 24 & 255, c >> 16 & 255, c >> 8 & 255, 255 & c, b >> 24 & 255, b >> 16 & 255, b >> 8 & 255, 255 & b];
    },
    mn_init: function() {
      var t = 200;
      bmaka.pstate && (t = 100), setInterval(bmaka.mn_poll, t);
    },
    bdm: function(t, a) {
      for (var e = 0, n = 0; n < t.length; ++n) e = (e << 8 | t[n]) >>> 0, e %= a;

      return e;
    },
    mn_w: function() {
      try {
        for (var t = 0, a = 0, e = 0, n = "", o = bmaka.get_cf_date(), m = bmaka.mn_cd + bmaka.mn_mc_indx; 0 == t;) {
          n = Math.random().toString(16);
          var r = bmaka.mn_cc + m.toString() + n,
            i = bmaka.mn_s(r);
          if (0 == bmaka.bdm(i, m)) t = 1, e = bmaka.get_cf_date() - o, bmaka.mn_al.push(n), bmaka.mn_tcl.push(e), bmaka.mn_il.push(a), 0 == bmaka.mn_mc_indx && (bmaka.mn_lg.push(bmaka.mn_abck), bmaka.mn_lg.push(bmaka.mn_ts), bmaka.mn_lg.push(bmaka.mn_psn), bmaka.mn_lg.push(bmaka.mn_cc), bmaka.mn_lg.push(bmaka.mn_cd.toString()), bmaka.mn_lg.push(m.toString()), bmaka.mn_lg.push(n), bmaka.mn_lg.push(r), bmaka.mn_lg.push(i), bmaka.mn_lg.push(bmaka.mn_rt));
          else if ((a += 1) % 1e3 == 0 && (e = bmaka.get_cf_date() - o) > bmaka.mn_stout) return bmaka.mn_wt += e, void setTimeout(bmaka.mn_w, bmaka.mn_stout);
        }

        bmaka.mn_mc_indx += 1, bmaka.mn_mc_indx < bmaka.mn_mc_lmt ? setTimeout(bmaka.mn_w, e) : (bmaka.mn_mc_indx = 0, bmaka.mn_lc[bmaka.mn_lcl] = bmaka.mn_cc, bmaka.mn_ld[bmaka.mn_lcl] = bmaka.mn_cd, bmaka.mn_lcl = bmaka.mn_lcl + 1, bmaka.mn_state = 0, bmaka.mn_lg.push(bmaka.mn_wt), bmaka.mn_lg.push(bmaka.get_cf_date()), bmaka.mn_r[bmaka.mn_abck + bmaka.mn_psn] = bmaka.mn_pr(), bmaka.js_post && (bmaka.aj_type = 8, 2 == bmaka.mn_ct && (bmaka.dcs = 1), bmaka.bpd(), bmaka.pd(!0)));
      } catch (t) {
        bmaka.sd_debug(",mn_w:" + t);
      }
    },
    mn_pr: function() {
      return bmaka.mn_al.join(",") + ";" + bmaka.mn_tcl.join(",") + ";" + bmaka.mn_il.join(",") + ";" + bmaka.mn_lg.join(",") + ";";
    },
    ats: function(t) {
      for (var a = "", e = 0; e < t.length; e++) a += 2 == t[e].toString(16).length ? t[e].toString(16) : "0" + t[e].toString(16);

      return a;
    },
    calc_fp: function() {
      bmaka.fpcf.fpVal(), bmaka.js_post && (bmaka.aj_type = 9, bmaka.bpd(), bmaka.pd(!0));
    },
    listFunctions: {
      _setJsPost: function(t) {
        bmaka.js_post = t, bmaka.js_post && (bmaka.enReadDocUrl = 1);
      },
      _setSessionId: function(t) {
        bmaka.session_id = t;
      },
      _setJavaScriptKey: function(t) {
        bmaka.api_public_key = t;
      },
      _setEnAddHidden: function(t) {
        bmaka.enAddHidden = t;
      },
      _setInitTime: function(t) {
        bmaka.init_time = t;
      },
      _setApiUrl: function(t) {
        bmaka.cf_url = t;
      },
      _setEnGetLoc: function(t) {
        bmaka.enGetLoc = t;
      },
      _setEnReadDocUrl: function(t) {
        bmaka.enReadDocUrl = t;
      },
      _setDisFpCalOnTimeout: function(t) {
        bmaka.disFpCalOnTimeout = t;
      },
      _setCookie: function(t) {
        bmaka.ckie = t;
      },
      _setCS: function(t) {
        bmaka.cs = (String(t) + bmaka.cs).slice(0, 16);
      },
      _setFsp: function(t) {
        bmaka.fsp = t, bmaka.fsp && (bmaka.cf_url = bmaka.cf_url.replace(/^http:\/\//i, "https://"));
      },
      _setBm: function(t) {
        bmaka.bm = t, bmaka.bm ? (bmaka.cf_url = (bmaka.fsp ? "https:" : 'https:') + "//" + 'www.ti.com' + "/_bm/_data", bmaka.js_post = !0) : bmaka.params_url = (bmaka.fsp ? "https:" : 'https:') + "//" + 'www.ti.com' + "/get_params";
      },
      _setAu: function(t) {
        "string" == typeof t && (0 === t.lastIndexOf("/", 0) ? bmaka.cf_url = (bmaka.fsp ? "https:" : 'https:') + "//" + 'www.ti.com' + t : bmaka.cf_url = t);
      },
      _setSDFieldNames: function() {
        try {
          var t;

          for (t = 0; t < arguments.length; t += 1) bmaka.sdfn.push(arguments[t]);
        } catch (t) {
          bmaka.sd_debug(",setSDFN:" + t);
        }
      },
      _setUseAltFonts: function(t) {
        bmaka.altFonts = t;
      },
      _setPowState: function(t) {
        bmaka.pstate = t;
      },
      _setPow: function(t) {
        bmaka.pstate = t;
      },
      _setLOAP: function(t) {
        bmaka.loap = t;
      }
    },
    applyFunc: function() {
      var t, a, e;

      for (t = 0; t < arguments.length; t += 1) e = arguments[t];

      a = e.shift(), bmaka.listFunctions[a] && bmaka.listFunctions[a].apply(bmaka.listFunctions, e);
    },
    getStateField: function(t) {
      for (var a = "", e = "aeiouy13579", n = 0, o = t.toLowerCase(); n < o.length;) e.indexOf(o[n]) >= 0 || e.indexOf(o[n + 1]) >= 0 ? a += 1 : a += 0, n += 2;

      return a;
    }
  };

if (function(t) {
    var a = {};
    t.fpcf = a, a.sf4 = function() {
      var t = bmaka.uar();
      return !(!~t.indexOf("Version/4.0") || !(~t.indexOf("iPad;") || ~t.indexOf("iPhone") || ~t.indexOf("Mac OS X 10_5")));
    }, a.fpValstr = "-1", a.fpValCalculated = !1, a.rVal = "-1", a.rCFP = "-1", a.cache = {}, a.td = -999999, a.clearCache = function() {
      a.cache = {};
    }, a.fpVal = function() {
      a.fpValCalculated = !0;

      try {
        var t = 0;
        t = Date.now ? Date.now() : +new Date();
        var e = a.data();
        a.fpValstr = e.replace(/\"/g, "\\\\\"");
        var n = 0;
        n = Date.now ? Date.now() : +new Date(), a.td = n - t;
      } catch (t) {}
    }, a.timezoneOffsetKey = function() {
      return new Date().getTimezoneOffset();
    }, a.data = function() {
      var t = screen.colorDepth ? screen.colorDepth : -1,
        e = screen.pixelDepth ? screen.pixelDepth : -1,
        n = navigator.cookieEnabled ? navigator.cookieEnabled : -1,
        o = navigator.javaEnabled ? navigator.javaEnabled() : -1,
        m = navigator.doNotTrack ? navigator.doNotTrack : -1,
        r = "default";
      r = bmaka.runFonts ? bmaka.altFonts ? a.fonts_optm() : a.fonts() : "dis";
      return [a.canvas("<@nv45. F1n63r,Pr1n71n6!"), a.canvas("m,Ev!xV67BaU> eh2m<f3AG3@"), r, a.pluginInfo(), a.sessionStorageKey(), a.localStorageKey(), a.indexedDbKey(), a.timezoneOffsetKey(), a.webrtcKey(), t, e, n, o, m].join(";");
    }, a.PLUGINS = ["WebEx64 General Plugin Container", "YouTube Plug-in", "Java Applet Plug-in", "Shockwave Flash", "iPhotoPhotocast", "SharePoint Browser Plug-in", "Chrome Remote Desktop Viewer", "Chrome PDF Viewer", "Native Client", "Unity Player", "WebKit-integrierte PDF", "QuickTime Plug-in", "RealPlayer Version Plugin", "RealPlayer(tm) G2 LiveConnect-Enabled Plug-In (32-bit)", "Mozilla Default Plug-in", "Adobe Acrobat", "AdobeAAMDetect", "Google Earth Plug-in", "Java Plug-in 2 for NPAPI Browsers", "Widevine Content Decryption Module", "Microsoft Office Live Plug-in", "Windows Media Player Plug-in Dynamic Link Library", "Google Talk Plugin Video Renderer", "Edge PDF Viewer", "Shockwave for Director", "Default Browser Helper", "Silverlight Plug-In"], a.pluginInfo = function() {
      if (void 0 === navigator.plugins) return null;

      for (var t = a.PLUGINS.length, e = "", n = 0; n < t; n++) {
        var o = a.PLUGINS[n];
        void 0 !== navigator.plugins[o] && (e = e + "," + n);
      }

      return e;
    }, a.canvas = function(t) {
      try {
        if (void 0 !== a.cache.canvas) return a.cache.canvas;
        var e = -1;

        if (!a.sf4()) {
          var n = document.createElement("canvas");

          if (n.width = 280, n.height = 60, n.style.display = "none", "function" == typeof n.getContext) {
            var o = n.getContext("2d");
            o.fillStyle = "rgb(102, 204, 0)", o.fillRect(100, 5, 80, 50), o.fillStyle = "#f60", o.font = "16pt Arial", o.fillText(t, 10, 40), o.strokeStyle = "rgb(120, 186, 176)", o.arc(80, 10, 20, 0, Math.PI, !1), o.stroke();
            var m = n.toDataURL();
            e = 0;

            for (var r = 0; r < m.length; r++) {
              e = (e << 5) - e + m.charCodeAt(r), e &= e;
            }

            e = e.toString();
            var i = document.createElement("canvas");
            i.width = 16, i.height = 16;
            var c = i.getContext("2d");
            c.font = "6pt Arial", a.rVal = Math.floor(1e3 * Math.random()).toString(), c.fillText(a.rVal, 1, 12);

            for (var b = i.toDataURL(), d = 0, s = 0; s < b.length; s++) {
              d = (d << 5) - d + b.charCodeAt(s), d &= d;
            }

            a.rCFP = d.toString();
          }
        }

        return e;
      } catch (t) {
        return "exception";
      }
    }, a.fonts_optm = function() {
      var t = 200,
        e = bmaka.get_cf_date(),
        n = [];

      if (!a.sf4() && document.body) {
        var o = ["sans-serif", "monospace"],
          m = [0, 0],
          r = [0, 0],
          i = document.createElement("div");
        i.style.cssText = "position: relative; left: -9999px; visibility: hidden; display: block !important";
        var c;

        for (c = 0; c < o.length; c++) {
          var b = document.createElement("span");
          b.innerHTML = "abcdefhijklmnopqrstuvxyz1234567890;+-.", b.style.fontSize = "90px", b.style.fontFamily = o[c], i.appendChild(b);
        }

        for (document.body.appendChild(i), c = 0; c < i.childNodes.length; c++) b = i.childNodes[c], m[c] = b.offsetWidth, r[c] = b.offsetHeight;

        if (document.body.removeChild(i), bmaka.get_cf_date() - e > t) return "";
        var d = ["Geneva", "Lobster", "New York", "Century", "Apple Gothic", "Minion Pro", "Apple LiGothic", "Century Gothic", "Monaco", "Lato", "Fantasque Sans Mono", "Adobe Braille", "Cambria", "Futura", "Bell MT", "Courier", "Courier New", "Calibri", "Avenir Next", "Birch Std", "Palatino", "Ubuntu Regular", "Oswald", "Batang", "Ubuntu Medium", "Cantarell", "Droid Serif", "Roboto", "Helvetica Neue", "Corsiva Hebrew", "Adobe Hebrew", "TI-Nspire", "Comic Neue", "Noto", "AlNile", "Palatino-Bold", "ArialHebrew-Light", "Avenir", "Papyrus", "Open Sans", "Times", "Quicksand", "Source Sans Pro", "Damascus", "Microsoft Sans Serif"],
          s = document.createElement("div");
        s.style.cssText = "position: relative; left: -9999px; visibility: hidden; display: block !important";

        for (var k = [], l = 0; l < d.length; l++) {
          var u = document.createElement("div");

          for (c = 0; c < o.length; c++) {
            var b = document.createElement("span");
            b.innerHTML = "abcdefhijklmnopqrstuvxyz1234567890;+-.", b.style.fontSize = "90px", b.style.fontFamily = d[l] + "," + o[c], u.appendChild(b);
          }

          s.appendChild(u);
        }

        if (bmaka.get_cf_date() - e > t) return "";
        document.body.appendChild(s);

        for (var l = 0; l < s.childNodes.length; l++) {
          var _ = !1,
            u = s.childNodes[l];

          for (c = 0; c < u.childNodes.length; c++) {
            var b = u.childNodes[c];

            if (b.offsetWidth !== m[c] || b.offsetHeight !== r[c]) {
              _ = !0;
              break;
            }
          }

          if (_ && k.push(l), bmaka.get_cf_date() - e > t) break;
        }

        document.body.removeChild(s), n = k.sort();
      }

      return n.join(",");
    }, a.fonts = function() {
      var t = [];

      if (!a.sf4() && document.body) {
        var e = ["serif", "sans-serif", "monospace"],
          n = [0, 0, 0],
          o = [0, 0, 0],
          m = document.createElement("span");
        m.innerHTML = "abcdefhijklmnopqrstuvxyz1234567890;+-.", m.style.fontSize = "90px";
        var r;

        for (r = 0; r < e.length; r++) m.style.fontFamily = e[r], document.body.appendChild(m), n[r] = m.offsetWidth, o[r] = m.offsetHeight, document.body.removeChild(m);

        for (var i = ["Geneva", "Lobster", "New York", "Century", "Apple Gothic", "Minion Pro", "Apple LiGothic", "Century Gothic", "Monaco", "Lato", "Fantasque Sans Mono", "Adobe Braille", "Cambria", "Futura", "Bell MT", "Courier", "Courier New", "Calibri", "Avenir Next", "Birch Std", "Palatino", "Ubuntu Regular", "Oswald", "Batang", "Ubuntu Medium", "Cantarell", "Droid Serif", "Roboto", "Helvetica Neue", "Corsiva Hebrew", "Adobe Hebrew", "TI-Nspire", "Comic Neue", "Noto", "AlNile", "Palatino-Bold", "ArialHebrew-Light", "Avenir", "Papyrus", "Open Sans", "Times", "Quicksand", "Source Sans Pro", "Damascus", "Microsoft Sans Serif"], c = [], b = 0; b < i.length; b++) {
          var d = !1;

          for (r = 0; r < e.length; r++)
            if (m.style.fontFamily = i[b] + "," + e[r], document.body.appendChild(m), m.offsetWidth === n[r] && m.offsetHeight === o[r] || (d = !0), document.body.removeChild(m), d) {
              c.push(b);
              break;
            }
        }

        t = c.sort();
      }

      return t.join(",");
    }, a.webrtcKey = function() {
      return "function" == typeof window.RTCPeerConnection || "function" == typeof window.mozRTCPeerConnection || "function" == typeof window.webkitRTCPeerConnection;
    }, a.indexedDbKey = function() {
      return !!a.hasIndexedDB();
    }, a.sessionStorageKey = function() {
      return !!a.hasSessionStorage();
    }, a.localStorageKey = function() {
      return !!a.hasLocalStorage();
    }, a.hasSessionStorage = function() {
      try {
        return !!window.sessionStorage;
      } catch (t) {
        return !1;
      }
    }, a.hasLocalStorage = function() {
      try {
        return !!window.localStorage;
      } catch (t) {
        return !1;
      }
    }, a.hasIndexedDB = function() {
      return !!window.indexedDB;
    };
  }(bmaka), bmaka.firstLoad) {
  if (bmaka.sd_debug("<init/>"), _cf.length > 0) {
    for (var bm_counter = 0; bm_counter < _cf.length; bm_counter++) bmaka.applyFunc(_cf[bm_counter]);

    bmaka.sd_debug("<setSDFN>" + bmaka.sdfn.join() + "</setSDFN>"), _cf = {
      push: bmaka.applyFunc
    };
  } else {
    var bm_script;

    if (document.currentScript && (bm_script = document.currentScript), !bm_script) {
      var scripts = document.getElementsByTagName("script");
      scripts.length && (bm_script = scripts[scripts.length - 1]);
    }

    if (bm_script.src) {
      var bm_url = 'https://www.换成自己的.com',
        url_split = bm_url.split("/"),
        obfus_state_field;

      if (url_split.length >= 4 && (obfus_state_field = bm_url.split("/").slice(-4)[0]), obfus_state_field && obfus_state_field.length % 2 == 0) {
        var state_field_str = bmaka.getStateField(obfus_state_field);
        state_field_str.length >= 3 && (bmaka.listFunctions._setFsp("1" == state_field_str[0]), bmaka.listFunctions._setBm("1" == state_field_str[1]), bmaka.listFunctions._setPowState("1" == state_field_str[2]), bmaka.listFunctions._setAu(bm_url));
      }
    }
  }

  try {
    bmaka.ir(), bmaka.t_tst = bmaka.get_cf_date(), bmaka.startTracking(), bmaka.tst = bmaka.get_cf_date() - bmaka.t_tst, bmaka.disFpCalOnTimeout || setTimeout(bmaka.calc_fp, 500);

    for (var bm_counter = 0; bm_counter < 3; bm_counter++) setTimeout(bmaka.getmr, 400 + 5e3 * bm_counter);

    bmaka.mn_init();
  } catch (t) {}
}
bmaka.bpd()
console.log('{"'+'sensor_data'+'":"'+bmaka.sensor_data+'"}')

function gen(){
  return '{"'+'sensor_data'+'":"'+bmaka.sensor_data+'"}'
}


// function gen(){
//     return jhy_akamai_result;
// }

