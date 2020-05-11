window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());

gtag('config', 'UA-100758199-1');
var aidn = aidn || {};
aidn.constant = {
    album2ndJa: "/daniwell/cats/",
    album2ndEn: "/daniwell/cats/en/",
    advUrlJa: "/daniwell/",
    advUrlEn: "/daniwell/",
    advImg: "shared/img/adv.gif",
    advTex: "DANIWELL DISCOGRAPHY",
    advAlt: "DANIWELL (Nyan Cat Song Creator) DISCOGRAPHY"
};
try {
    for (var l = location.href.split("aidn")[1].split("/").length - 2, i = 0; i < l; i++) aidn.constant.advImg = "../" + aidn.constant.advImg
} catch(e) {}
aidn.init = {
    ver: 0,
    selectBasePath: function(e, t) {
        var n = parseInt(aidn.util.getCookie("baseid")),
        i = e;
        return (isNaN(n) || 1 == t) && (n = Math.floor(Math.random() * i.length), aidn.util.setCookie("baseid", n, 604800)),
        (i.length <= n || n < 0) && (n = 0),
        this.basepath = i[n],
        this.basepath
    },
    loadScript: function(n, i) {
        $.ajaxSetup({
            cache: !0
        });
        var a = function(e) {
            var t = n[e] + "?" + aidn.init.ver;
            aidn.init.usebase && 0 != t.indexOf("http") && (t = aidn.init.basepath + t),
            $.getScript(t,
            function() {
                e + 1 < n.length ? a(e + 1) : i && i()
            })
        };
        a(0)
    },
    basepath: "",
    usebase: !0
},
aidn.config = {
    init: function() {
        this.clWidth = document.documentElement.clientWidth,
        this.clHeight = document.documentElement.clientHeight,
        this.scWidth = screen.width,
        this.scHeight = screen.height,
        this.inWidth = window.innerWidth,
        this.inHeight = window.innerHeight,
        (this.clHeight <= 0 || this.clWidth <= 0) && (this.clWidth = this.scWidth, this.clHeight = this.scHeight),
        (this.inHeight <= 0 || this.inWidth <= 0) && (this.inWidth = this.clWidth, this.inHeight = this.clHeight)
    },
    clWidth: 0,
    clHeight: 0,
    scWidth: 0,
    scHeight: 0,
    inWidth: 0,
    inHeight: 0,
    touchEnabled: null != window.TouchEvent
},
aidn.audio = {
    init: function() {
        if (!this._inited) {
            this._inited = !0;
            try {
                this.audio = [],
                this.audio[0] = new Audio,
                this.availableAudio = !0,
                this.availableOgg = "" != this.audio[0].canPlayType("audio/ogg"),
                this.availableMP3 = "" != this.audio[0].canPlayType("audio/mpeg"),
                this.availableWav = "" != this.audio[0].canPlayType("audio/wav")
            } catch(e) {
                availableAudio = !1
            }
        }
    },
    setSrc: function(e, t) {
        this.audio[e] ? this.audio[e].src = t: this.audio[e] = new Audio(t)
    },
    load: function(e) {
        this.audio[e].load()
    },
    play: function(e) {
        this.audio[e].play()
    },
    pause: function(e) {
        this.audio[e].pause()
    },
    stop: function(e) {
        this.audio[e].ended || (this.audio[e].pause(), this.audio[e].currentTime = 0)
    },
    volume: function(e, t) {
        t < 0 && (t = 0),
        1 < t && (t = 1),
        this.audio[e].volume = t
    },
    getPath: function(e) {
        for (var t = e.length,
        n = 0; n < t; n++) {
            var i = e[n],
            a = i.toLowerCase();
            if (aidn.audio.availableMP3 && a.indexOf(".mp3")) break;
            if (aidn.audio.availableOgg && a.indexOf(".ogg")) break;
            if (aidn.audio.availableWav && a.indexOf(".wav")) break
        }
        return n == t && (i = null),
        i
    },
    _inited: !1,
    audio: [],
    availableAudio: !1,
    availableMP3: !1,
    availableWav: !1,
    availableOgg: !1
},
aidn.canvas = {
    create: function(e, t, n, i, a) {
        var o = '<canvas id="' + t + '" width="' + n + '" height="' + i + '"></canvas>';
        document.getElementById(e).innerHTML = o,
        this.canvas = document.getElementById(t),
        this.ctx = this.canvas.getContext("2d"),
        this.w = n,
        this.h = i,
        this.bgColor = a,
        this.clear(!0)
    },
    clear: function(e) {
        this.ctx.fillStyle = this.bgColor,
        this.ctx.fillRect(0, 0, this.w, this.h),
        e && this.ctx.fill()
    },
    canvas: null,
    ctx: null,
    w: 0,
    h: 0,
    bgColor: "#ffffff"
},
aidn.event = {
    addTouchEvent: function(e, t, n, i, a) {
        "string" == typeof e && (e = document.getElementById(e)),
        t && e.addEventListener("touchstart", t, !1),
        n && e.addEventListener("touchmove", n, !1),
        i && e.addEventListener("touchend", i, !1),
        a && e.addEventListener("touchcancel", a, !1)
    },
    removeTouchEvent: function(e, t, n, i, a) {
        "string" == typeof e && (e = document.getElementById(e)),
        t && e.removeEventListener("touchstart", t, !1),
        n && e.removeEventListener("touchmove", n, !1),
        i && e.removeEventListener("touchend", i, !1),
        a && e.removeEventListener("touchcancel", a, !1)
    },
    addMouseEvent: function(e, t, n, i, a) {
        "string" == typeof e && (e = document.getElementById(e)),
        t && e.addEventListener("mousedown", t, !1),
        n && e.addEventListener("mousemove", n, !1),
        i && e.addEventListener("mouseup", i, !1),
        a && e.addEventListener("mouseout", a, !1)
    },
    removeMouseEvent: function(e, t, n, i, a) {
        "string" == typeof e && (e = document.getElementById(e)),
        t && e.removeEventListener("mousedown", t, !1),
        n && e.removeEventListener("mousemove", n, !1),
        i && e.removeEventListener("mouseup", i, !1),
        a && e.removeEventListener("mouseout", a, !1)
    },
    add: function(e, t, n, i, a) { (aidn.config.touchEnabled ? this.addTouchEvent: this.addMouseEvent)(e, t, n, i, a)
    },
    remove: function(e, t, n, i, a) { (aidn.config.touchEnabled ? this.removeTouchEvent: this.removeMouseEvent)(e, t, n, i, a)
    },
    addMouseWheel: function(e, t) {
        var n = "onwheel" in document ? "wheel": "onmousewheel" in document ? "mousewheel": "DOMMouseScroll";
        "string" == typeof e && (e = document.getElementById(e)),
        e.addEventListener(n, t)
    },
    removeMouseWheel: function(e, t) {
        var n = "onwheel" in document ? "wheel": "onmousewheel" in document ? "mousewheel": "DOMMouseScroll";
        "string" == typeof e && (e = document.getElementById(e)),
        e.removeEventListener(n, t)
    },
    addDeviceOrientation: function(e) {
        window.addEventListener("deviceorientation", e)
    },
    removeDeviceOrientation: function(e) {
        window.removeEventListener("deviceorientation", e)
    },
    addDeviceMotion: function(e) {
        window.addEventListener("devicemotion", e)
    },
    removeDeviceMotion: function(e) {
        window.removeEventListener("devicemotion", e)
    },
    getWheelDelta: function(e) {
        return void 0 !== e.wheelDelta ? e.wheelDelta: e.detail
    },
    getPos: function(e) {
        return e.touches ? {
            x: e.touches[0].pageX,
            y: e.touches[0].pageY
        }: e.originalEvent && e.originalEvent.touches ? {
            x: e.originalEvent.touches[0].pageX,
            y: e.originalEvent.touches[0].pageY
        }: {
            x: e.clientX,
            y: e.clientY
        }
    }
},
aidn.ref = {
    init: function(e) {
        0 < this.__total && e != this.__interval && (clearInterval(this.__sid), this.__sid = setInterval(this.__update, e)),
        this.__interval = e
    },
    addInterval: function(e, t) {
        this.__list[this.__total] = {
            time: 0,
            delay: t,
            func: e
        },
        0 == this.__total && (this.__sid = setInterval(this.__update, this.__interval)),
        this.__total++
    },
    removeInterval: function(e) {
        for (var t = 0; t < this.__total; t++) this.__list[t].func == e && (delete this.__list[t], this.__list.splice(t, 1), this.__total--);
        0 == this.__total && clearInterval(this.__sid)
    },
    __update: function() {
        for (var e, t = aidn.ref.__list,
        n = aidn.ref.__total,
        i = aidn.ref.__interval,
        a = 0; a < n; a++)(e = t[a]).time += i,
        e.delay < e.time && (e.time -= e.delay, e.func())
    },
    __interval: 10,
    __sid: -1,
    __list: [],
    __total: 0
},
aidn.util = {
    initHideAddressBar: function(e, t) {
        e && window.addEventListener("load",
        function() {
            setTimeout(aidn.util.hideAddressBar, 100)
        },
        !1),
        t && window.addEventListener("orientationchange",
        function() {
            setTimeout(aidn.util.hideAddressBar, 100)
        },
        !1)
    },
    hideAddressBar: function() {
        window.pageYOffset <= 0 && window.scrollTo(0, 1)
    },
    hideAddressBarStart: function(e) {
        navigator.userAgent.match(/iphone|ipod/i) ? (this.m = parseInt(document.body.style.minHeight), isNaN(this.m) && (this.m = 0), document.body.style.minHeight = "2000px", window.addEventListener("scroll", this._scrolled), this.f = e, this.i = setInterval(function() {
            aidn.util.hideAddressBar()
        },
        50)) : e && e()
    },
    _scrolled: function() {
        var e = aidn.util;
        document.body.style.minHeight = Math.max(window.innerHeight, e.m) + "px",
        clearInterval(e.i),
        window.removeEventListener("scroll", e._scrolled),
        e.f && e.f()
    },
    lowerAndroid: function(e) {
        var t = !1,
        n = navigator.userAgent;
        return 0 < n.indexOf("Android") && parseFloat(n.substr(n.indexOf("Android") + 8, 3)) < e && (t = !0),
        t
    },
    getLanguage: function() {
        var e = this.getQuery();
        return e.lc ? e.lc: (navigator.browserLanguage || navigator.language || navigator.userLanguage).substr(0, 2)
    },
    stopScroll: function() {
        document.addEventListener("touchmove",
        function(e) {
            e.preventDefault()
        },
        !1)
    },
    checkJapanese: function() {
        this.getLanguage();
        return "ja" == this.getLanguage() || !!(this.lowerAndroid(2.4) && 0 < navigator.userAgent.toLowerCase().indexOf("ja-jp"))
    },
    useDummyDiv: function() {
        var e = aidn.util.getiOSVersion();
        return 0 < e && e < 10
    },
    getiOSVersion: function() {
        var e = navigator.userAgent,
        t = e.match(/iPhone OS (\d+_*\d*)/);
        return t && t[1] ? parseFloat(t[1].replace("_", ".")) : (t = e.match(/iPad; CPU OS (\d+_*\d*)/)) && t[1] ? parseFloat(t[1].replace("_", ".")) : -1
    },
    checkChrome: function() {
        var e = navigator.userAgent;
        return 0 <= e.indexOf("CriOS") || 0 <= e.indexOf("Chrome")
    },
    checkSafari: function() {
        var e = navigator.userAgent;
        return 0 <= e.indexOf("Version") && 0 <= e.indexOf("Safari")
    },
    checkAndroid: function() {
        return 0 <= navigator.userAgent.indexOf("Android")
    },
    checkiOS: function(e) {
        var t = navigator.userAgent,
        n = 0 <= t.indexOf("iPhone") || 0 <= t.indexOf("iPod");
        return 0 != e ? n || 0 <= t.indexOf("iPad") : n
    },
    checkMobile: function() {
        var e = navigator.userAgent;
        return 0 <= e.indexOf("iPhone") || 0 <= e.indexOf("iPad") || 0 <= e.indexOf("iPod") || 0 <= e.indexOf("Android") || 0 <= e.indexOf("BlackBerry") || 0 <= e.indexOf("Windows Phone")
    },
    checkApps: function() {
        return aidn.util.checkAppTwitter() || aidn.util.checkAppFacebook() || aidn.util.checkAppLine()
    },
    checkAppTwitter: function() {
        var e = navigator.userAgent;
        return ! (!aidn.util.checkSafari() || !aidn.util.checkMobile()) || 0 <= e.indexOf("Twitter for")
    },
    checkAppFacebook: function() {
        return 0 <= navigator.userAgent.indexOf("FBAV")
    },
    checkAppLine: function() {
        return 0 <= navigator.userAgent.indexOf("Line")
    },
    shuffleArray: function(e) {
        var t, n = e.length;
        for (t = 0; t < n; t++) {
            var i = e[t],
            a = Math.floor(Math.random() * n);
            e[t] = e[a],
            e[a] = i
        }
        return e
    },
    getQuery: function() {
        for (var e = [], t = window.location.search.slice(1).split("&"), n = t.length, i = 0; i < n; i++) {
            var a = t[i].split("=");
            e.push(a[0]),
            e[a[0]] = a[1]
        }
        return e
    },
    getTime: function() {
        return "undefined" == typeof performance ? Date.now() : void 0 === performance.now ? Date.now() : performance.now()
    },
    fullscreen: function(e) {
        aidn.util.checkFullscreen() ? document.webkitCancelFullScreen ? document.webkitCancelFullScreen() : document.mozCancelFullScreen ? document.mozCancelFullScreen() : document.msExitFullscreen ? document.msExitFullscreen() : document.cancelFullScreen ? document.cancelFullScreen() : document.exitFullscreen && document.exitFullscreen() : (e ? "string" == typeof e && (e = document.getElementById(e)) : e = document.body, e.webkitRequestFullscreen ? e.webkitRequestFullscreen() : e.mozRequestFullScreen ? e.mozRequestFullScreen() : e.msRequestFullscreen ? e.msRequestFullscreen() : e.requestFullscreen && e.requestFullscreen())
    },
    checkFullscreen: function() {
        return !! (document.webkitFullscreenElement || document.mozFullScreenElement || document.mozFullScreenElement || document.msFullscreenElement || document.fullscreenElement)
    },
    enabledFullscreen: function(e) {
        return (!e || !navigator.userAgent.match(/Firefox/i)) && (document.fullscreenEnabled || document.webkitFullscreenEnabled || document.mozFullScreenEnabled || document.msFullscreenEnabled || !1)
    },
    copyToClipboard: function(e) {
        var t = document.createElement("textarea");
        t.value = e,
        t.selectionStart = 0,
        t.selectionEnd = t.value.length;
        var n = t.style;
        n.position = "fixed",
        n.left = "-100%",
        document.body.appendChild(t),
        t.focus();
        var i = document.execCommand("copy");
        return t.blur(),
        document.body.removeChild(t),
        i
    },
    getCookie: function(e) {
        var t = null,
        n = e + "=",
        i = document.cookie,
        a = i.indexOf(n);
        if (0 <= a) {
            var o = a + n.length,
            d = i.indexOf(";", o); - 1 == d && (d = i.length),
            t = decodeURIComponent(i.substring(o, d))
        }
        return t
    },
    setCookie: function(e, t, n, i) {
        var a = e + "=" + encodeURIComponent(t) + ";";
        0 <= n && (a += " max-age=" + n + ";"),
        i && (a += " path=" + i + ";"),
        document.cookie = a
    },
    needExpandArea: function(e) {
        var t = navigator.userAgent,
        n = 0 <= t.indexOf("iPhone") || 0 <= t.indexOf("iPod");
        return (n = n && 0 <= t.indexOf("Version/") && Math.max(window.screen.width, window.screen.height) < 600) && 1 == e && ($("html,body").css("position", "static"), $(window).on("touchmove.noScroll",
        function(e) {
            e.preventDefault()
        }), window.scrollTo(0, 0), $("body").css("padding-bottom", 1), setInterval(function() {
            window.scrollTo(0, 0)
        },
        100)),
        n
    },
    checkStandAlone: function() {
        return "standalone" in window.navigator && window.navigator.standalone
    },
    initStandAlone: function() {
        aidn.util.checkStandAlone() && $("a").each(function(e, t) {
            var n = $(this),
            i = n.attr("target"),
            a = !0;
            i && 0 <= i.indexOf("blank") && (a = !1);
            var o = n.attr("href");
            a && o && "" != o && (n.click(function(e) {
                location.href = o,
                e.preventDefault()
            }), n.attr("href", ""))
        })
    },
    canvas: !!window.CanvasRenderingContext2D,
    webgl: function() {
        try {
            var e = document.createElement("canvas"),
            t = e.getContext("webgl") || e.getContext("experimental-webgl");
            return !! (window.WebGLRenderingContext && t && t.getShaderPrecisionFormat)
        } catch(e) {
            return ! 1
        }
    } (),
    webaudio: function() {
        for (var e = ["SO-03F", "SO-02F", "SO-01F"], t = e.length, n = navigator.userAgent, i = 0; i < t; i++) if (0 <= n.indexOf(e[i])) return ! 1;
        return ! (!window.AudioContext && !window.webkitAudioContext)
    } ()
},
// aidn.adv = {
//     show: function(e) {
//         if (aidn.adv._useAdv() && 1 != aidn.adv._e) if (aidn.adv._e) aidn.adv._e.show();
//         else {
//             0 <= e || (e = 0, window.innerHeight <= 570 && (e = 1));
//             var t = "";
//             aidn.util.getQuery().lc && (t = " background:rgba(64, 64, 64, 0.6);");
//             var n = "width: 320px;" + t;
//             switch (e) {
//             case 0:
//                 n += " height: 100px;";
//                 break;
//             default:
//                 n += " height:  50px;"
//             }
//             var i = "";
//             switch (i += '<div style="position: absolute; bottom: 0; width: 320px; z-index: 100000; left: 50%; transform: translateX(-50%);"><div id="close_adv" style="text-align: right; cursor:pointer;">', i += '<svg style="vertical-align:bottom; background:rgba(255, 255, 255, 0.6);" width="12" height="12" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd"><path d="M12 11.293l10.293-10.293.707.707-10.293 10.293 10.293 10.293-.707.707-10.293-10.293-10.293 10.293-.707-.707 10.293-10.293-10.293-10.293.707-.707 10.293 10.293z"/></svg>', i += "</div>", i += '<div style="' + n + '">', i += '<script async src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"><\/script>', e) {
//             case 0:
//                 i += '<ins class="adsbygoogle" style="display:inline-block;width:320px;height:100px" data-ad-client="ca-pub-2758302531676411" data-ad-slot="8440261214"></ins>';
//                 break;
//             default:
//                 i += '<ins class="adsbygoogle" style="display:inline-block;width:320px;height:50px" data-ad-client="ca-pub-2758302531676411" data-ad-slot="1050207427"></ins>'
//             }
//             i += "<script>(adsbygoogle = window.adsbygoogle || []).push({});<\/script>",
//             i += "</div>",
//             i += "</div>",
//             (aidn.adv._e = $(i)).children("#close_adv").on("click", aidn.adv.close),
//             $("body").append(aidn.adv._e)
//         }
//     },
//     hide: function() {
//         aidn.adv._e && 1 != aidn.adv._e && aidn.adv._e.hide()
//     },
//     close: function() {
//         aidn.adv.hide(),
//         aidn.adv._e = 1
//     },
//     showLink: function(e, t) {
//         if (aidn.adv._useAdv() && 1 != aidn.adv._el) if (aidn.adv._el) aidn.adv._el.show();
//         else {
//             var n = "";
//             n += '<div style="width:200px;"><div id="close_adv_link" style="text-align: right; cursor:pointer;">',
//             n += '<svg style="vertical-align:bottom;" width="12" height="12" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd"><path d="M12 11.293l10.293-10.293.707.707-10.293 10.293 10.293 10.293-.707.707-10.293-10.293-10.293 10.293-.707-.707 10.293-10.293-10.293-10.293.707-.707 10.293 10.293z"/></svg>',
//             n += "</div>";
//             var i = "";
//             aidn.util.getQuery().lc && (i = " background:rgba(0, 0, 0, 0.05);"),
//             n += '<div style="width:200px; height:90px;' + i + '">',
//             n += '<script async src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"><\/script>',
//             n += '<ins class="adsbygoogle" style="display:inline-block;width:200px;height:90px" data-ad-client="ca-pub-2758302531676411" data-ad-slot="3037968718"></ins>',
//             n += "<script>(adsbygoogle = window.adsbygoogle || []).push({});<\/script>",
//             n += "</div>",
//             n += "</div>";
//             var a = aidn.adv._el = $(n);
//             a.children("#close_adv_link").on("click", aidn.adv.closeLink),
//             0 != t ? 1 != t ? 2 != t ? e.append(a) : e.prepend(a) : e.after(a) : e.before(a)
//         }
//     },
//     hideLink: function() {
//         aidn.adv._el && 1 != aidn.adv._el && aidn.adv._el.hide()
//     },
//     closeLink: function() {
//         aidn.adv.hideLink(),
//         aidn.adv._el = 1
//     },
//     _useAdv: function() {
//         var e = aidn.util.getLanguage().toLowerCase();
//         return "ja" != e && "en" != e
//     },
//     _e: null,
//     _el: null
// },
aidn.window = {
    useDummyDiv: aidn.util.useDummyDiv,
    addDummyDiv: function() {
        if (aidn.window.useDummyDiv()) {
            var e = $("<div id='dummy'></div>");
            e.css({
                width: "100%",
                height: "100%",
                position: "fixed",
                zIndex: -1
            }),
            e.html('<p style="width:100%;height:100%;"></p>'),
            $("body").prepend(e),
            aidn.window._dummy = $("#dummy p")
        }
    },
    resize: function(e, t) {
        void 0 === (aidn.window._isFit = t) && (aidn.window._isFit = !0),
        aidn.window._resizeFunc = e,
        $(window).resize(aidn.window._resize),
        aidn.window._isFit && $(window).on("touchmove",
        function(e) {
            e.preventDefault()
        }),
        aidn.window._isTwitteriOS && aidn.window._resizeFix(),
        aidn.window._resize()
    },
    width: function() {
        return $(window).width()
    },
    height: function() {
        return aidn.window._isTwitteriOS ? window.innerHeight: aidn.window._dummy ? aidn.window._dummy.height() : $(window).height()
    },
    _resize: function() {
        aidn.window._isTwitteriOS && aidn.window._isFit && $("body").height(window.innerHeight + 20),
        aidn.window._isTwitteriOS ? setTimeout(aidn.window._resizeFix, 100) : aidn.window._resizeFix()
    },
    _resizeFix: function() {
        aidn.window._isTwitteriOS && aidn.window._isFit && $("body").height(window.innerHeight),
        aidn.window._resizeFunc && aidn.window._resizeFunc()
    },
    _isFit: !0,
    _isTwitteriOS: aidn.util.checkAppTwitter(),
    _dummy: null,
    _resizeFunc: null
},
aidn.math = {
    toRad: function(e) {
        return e * Math.PI / 180
    },
    toDeg: function(e) {
        return 180 * e / Math.PI
    },
    rand: function(e, t) {
        return Math.random() * (t - e) + e
    },
    randInt: function(e, t) {
        return Math.floor(Math.random() * (t + 1 - e) + e)
    }
},
aidn.social = {
    init: function() {
        this.initTw(),
        this.initFb(),
        this.initGp()
    },
    initTw: function() {
        var e, t, n, i, a;
        location.href.indexOf("http") < 0 || (e = document, t = "twitter-wjs", i = e.getElementsByTagName("script")[0], a = /^http:/.test(e.location) ? "http": "https", e.getElementById(t) || ((n = e.createElement("script")).id = t, n.src = a + "://platform.twitter.com/widgets.js", i.parentNode.insertBefore(n, i)))
    },
    initFb: function() {
        var e, t, n, i;
        location.href.indexOf("http") < 0 || (e = document, t = "facebook-jssdk", i = e.getElementsByTagName("script")[0], e.getElementById(t) || ((n = e.createElement("script")).id = t, n.src = "//connect.facebook.net/en_US/sdk.js#xfbml=1&version=v2.0", i.parentNode.insertBefore(n, i)))
    },
    initGp: function() {
        if (! (location.href.indexOf("http") < 0)) {
            var e = aidn.util.getLanguage();
            "en" != e && (window.___gcfg = {
                lang: e
            }),
            function() {
                var e = document.createElement("script");
                e.type = "text/javascript",
                e.async = !0,
                e.src = "https://apis.google.com/js/plusone.js";
                var t = document.getElementsByTagName("script")[0];
                t.parentNode.insertBefore(e, t)
            } ()
        }
    },
    reloadTw: function(e, t, n, i) {
        0 <= i.indexOf("http://aidn.jp") && (i = i.replace("http", "https")),
        0 < $("#twitter iframe").length && $("#twitter iframe").remove(),
        0 < $("#twitter-wjs").length && $("#twitter-wjs").remove();
        var a = '<a href="https://twitter.com/share" class="twitter-share-button"';
        e && (a += ' data-text="' + e + '"'),
        t && (a += 'data-related="' + t + '"'),
        n && (a += 'data-count="' + n + '"'),
        i && (a += 'data-url="' + i + '"'),
        a += ' data-lang="en">Tweet</a>',
        $("#twitter").append(a),
        this.initTw()
    },
    shareTw: function(e, t, n, i, a) {
        var o = "https://twitter.com/intent/tweet",
        d = {};
        e && (d.url = encodeURIComponent(e)),
        n && (d.text = encodeURIComponent(n)),
        i && (d.related = i),
        a && (d.hashtags = encodeURIComponent(a));
        var r = 0;
        for (var s in d) o += 0 == r ? "?" + s + "=" + d[s] : "&" + s + "=" + d[s],
        r++;
        t && !aidn.util.checkMobile() ? window.open(o, "tw", "width=730, height=460, personalbar=0,toolbar=0,scrollbars=1,resizable=1") : location.href = o
    },
    shareFb: function(e, t) {
        var n = "http://www.facebook.com/share.php?u=" + encodeURIComponent(e);
        t ? aidn.util.checkMobile() ? window.open(n) : window.open(n, "fb", "width=730, height=460, personalbar=0,toolbar=0,scrollbars=1,resizable=1") : location.href = n
    },
    shareGp: function(e, t) {
        var n = "https://plus.google.com/share?url=" + encodeURIComponent(e);
        t ? aidn.util.checkMobile() ? window.open(n) : window.open(n, "gp", "width=960, height=790, personalbar=0,toolbar=0,scrollbars=1,resizable=1") : location.href = n
    },
    shareLi: function(e, t) {
        var n = "http://line.me/R/msg/text/?" + encodeURIComponent(t) + " " + encodeURIComponent(e);
        location.href = n
    },
    setShareInfo: function(e, t) {
        $("title").text(e),
        $("h1").text(e),
        $("#twitter a").attr("data-text", e),
        $("#twitter a").attr("data-url", t),
        $($("#facebook").children()).attr("href", t),
        $($("#plusone").children()).attr("href", t)
    }
};
var _isJapanese = aidn.util.checkJapanese(),
_active = !1;
function __googleTranslateElementInit() {
    new google.translate.TranslateElement({
        pageLanguage: "ja",
        includedLanguages: "de,en,es,fr,it,ja,ko,pt,ru,zh-CN,zh-TW",
        layout: google.translate.TranslateElement.InlineLayout.SIMPLE,
        autoDisplay: !0
    },
    "google_translate_element")
}
function __checkInit() {
    "undefined" == typeof jQuery ? setTimeout(__checkInit, 10) : $(function() {
        if ($("meta:last").after('<meta name="theme-color" content="#000000">'), aidn.util.initStandAlone(), _isJapanese || null != document.getElementById("google_translate_element") && $.getScript("//translate.google.com/translate_a/element.js?cb=__googleTranslateElementInit",
        function() {
            var e = $(".aidn_sub").length,
            t = aidn.util.getQuery();
            setInterval(function() {
                $(".goog-te-banner-frame").length && ("none" == $(".skiptranslate").css("display") ? e && ("block" == $("#menu_sp").css("display") ? $("#menu, #menu_sp").css("top", 0) : $("#menu").css("top", 0)) : (e && ("block" == $("#menu_sp").css("display") ? $("#menu, #menu_sp").css("top", 39) : $("#menu").css("top", 39)), $(window).width() < 480 ? $("iframe:first").contents().find(".goog-te-button").css("display", "none") : $("iframe:first").contents().find(".goog-te-button").css("display", "block"), 0 != t.tw && $("#goog-gt-tt").css({
                    display: "none",
                    opacity: 0
                })))
            },
            100);
            var n = setInterval(function() {
                $(".goog-te-banner-frame").length && "none" != $(".skiptranslate").css("display") && ($(".goog-te-banner-frame").css({
                    "box-shadow": "none",
                    "-webkit-box-shadow": "none",
                    "border-bottom": "1px solid #000000"
                }), $("iframe:first").contents().find(".goog-te-banner").css("background", "#FFF"), $("div.skiptranslate").css("opacity", 1), clearInterval(n))
            },
            100)
        }), aidn.util.checkMobile()) {
            $("a[href='http://twitter.com/daniwell_aidn']").attr("target", "_self"),
            $("a[href='https://twitter.com/daniwell_aidn']").attr("target", "_self");
            try {
                for (var e in document.styleSheets) {
                    var t = document.styleSheets[e];
                    if (t.rules) for (var n = t.rules.length - 1; 0 <= n; n--) {
                        var i = t.rules[n].selectorText;
                        if (i && i.match(":hover")) {
                            for (var a = i.split(","), o = [], d = 0; d < a.length; d++) a[d].match(":hover") || o.push(a[d]);
                            0 < o.length ? t.rules[n].selectorText = o.join(",") : t.deleteRule(n)
                        }
                    }
                }
            } catch(e) {}
        }
        if (0 < $("#aidn").length && (_active = !1), 0 < $("#aidnx").length && (_active = !1, $("#bt_menu").on("click",
        function() {
            $("#menu").stop().slideToggle(150)
        })), !_active) {
            // var r = aidn.constant.advUrlEn;
            // aidn.util.checkJapanese() && (r = aidn.constant.advUrlJa);
            // var s = "";
            // if (s += '<a href="' + r + '" target="_blank"><div class="adv_con">', s += '<p class="text">' + aidn.constant.advTex + "</p>", s += '<p class="image"><img src="' + aidn.constant.advImg + '" alt="' + aidn.constant.advAlt + '" /></p>', s += "</div></a>", 0 < $("#adsen").length && aidn.adv.showLink($("#adsen")), 0 < $(".adv").length) $(".adv").html(s),
            $("body").css("overflow", "auto")
            // aidn.adv.showLink($(".adv"), 1);
            // else {
            //     var l = $("#common_back");
            //     0 < l.length && (s = '<div class="adv"><div class="hr_top"></div>' + s + "</div>", $("body").css("overflow", "auto"), l.after(s))
            // }
        }
    })
} (_active = "undefined" == typeof swfobject || swfobject.hasFlashPlayerVersion("9") && !aidn.util.checkMobile()) || (swffit.fit = function() {}),
__checkInit(),
aidn.extra = {
    Button: function(e, t) {
        var n = e,
        i = e;
        t && (i = t);
        var a = i.text(),
        o = a.length,
        d = -1,
        r = !1,
        s = 0,
        l = 0;
        function c() {
            r || (++s % 5 == 0 && l++, o <= l && (clearInterval(d), i.text(a)));
            for (var e = a.substr(0, l), t = l; t < o; t++) e += String.fromCharCode(65 + 26 * Math.random());
            i.text(e)
        }
        n.bind("mouseover",
        function(e) {
            clearInterval(d),
            s = l = 0,
            d = setInterval(c, 20),
            r = !0
        }),
        n.bind("mouseout",
        function(e) {
            r = !1
        })
    },
    initSnsButtons: function(t, n) {
        0 <= t.indexOf("http://aidn.jp") && (t = t.replace("http", "https")),
        $("#sns_tw").click(function(e) {
            aidn.social.shareTw(t, !0, n, "daniwell_aidn")
        }),
        $("#sns_fb").click(function(e) {
            aidn.social.shareFb(t, !0)
        }),
        $("#sns_gp").click(function(e) {
            aidn.social.shareGp(t, !0)
        })
    }
},
aidn.Audio = function() {
    aidn.audio.init();
    var o, d, r, i, s, t, l = this,
    c = new Audio,
    n = 1; (this._audio = c).addEventListener("playing",
    function() {
        0 < o && (c.currentTime = o, o = -1)
    }),
    c.addEventListener("timeupdate",
    function() {
        d <= c.currentTime && c.pause();
        0 < c.currentTime && s && (s(), s = null)
    }),
    c.addEventListener("ended",
    function() {
        t && t();
        r && (c.currentTime = 0, c.play(), c.playbackRate = n)
    }),
    c.addEventListener("canplaythrough",
    function() {
        0 < o && (c.currentTime = o, o = -1);
        i && (i(), i = null)
    }),
    this.load = function(e, t) {
        "string" == typeof e && (e = [e]);
        var n = aidn.audio.getPath(e);
        if (!n) return ! 1;
        i = t,
        c.src = n,
        c.load()
    },
    this.play = function(t, e, n, i, a) {
        void 0 === t && (t = 0),
        void 0 === e && (e = !1),
        void 0 === i && (i = 0),
        void 0 === a && (a = 1),
        s = n,
        r = e,
        d = 1e6;
        try {
            c.currentTime = t
        } catch(e) {
            aidn.log(e),
            o = t
        }
        c.play(),
        0 < i && "undefined" != typeof jQuery ? (l.volume = 0, $(l).stop().animate({
            volume: a
        },
        1e3 * i, "easeInSine")) : l.volume = a
    },
    this.pause = function() {
        c.pause()
    },
    this.playSprite = function(e, t) {
        c.currentTime = e,
        c.play(),
        d = t
    },
    this.addEndEvent = function(e) {
        t = e
    },
    Object.defineProperty(this, "speed", {
        get: function() {
            return n
        },
        set: function(e) {
            c.playbackRate = n = e
        }
    }),
    Object.defineProperty(this, "loop", {
        get: function() {
            return r
        },
        set: function(e) {
            r = e
        }
    }),
    Object.defineProperty(this, "time", {
        get: function() {
            return c.currentTime
        },
        set: function(e) {
            c.currentTime = e
        }
    }),
    Object.defineProperty(this, "volume", {
        get: function() {
            return c.volume
        },
        set: function(e) {
            c.volume = e
        }
    }),
    Object.defineProperty(this, "duration", {
        get: function() {
            return c.duration
        }
    })
},
aidn.WebAudio = function() {
    aidn.audio.init();
    var h, f, u, v, g, m, p, w, _, b, y, x, t, E = this,
    k = [],
    O = 0,
    A = 100,
    F = -1,
    T = !1,
    n = 1,
    I = 1;
    if (void 0 !== aidn.___waContext) this._context = h = aidn.___waContext;
    else {
        try {
            var e = window.AudioContext || window.webkitAudioContext;
            h = new e
        } catch(e) {}
        this._context = h,
        aidn.___waContext = h
    }
    function L() {
        u.onended = null,
        t && t()
    }
    this.load = function(e, u, t) {
        var n, i = T = !1;
        if (0 <= t && (F = t), "string" == typeof e) if (0 < e.indexOf("base64")) {
            i = !0;
            var a = atob(e.split(",")[1]),
            o = a.length;
            n = new Uint8Array(o);
            for (var d = 0; d < o; ++d) n[d] = a.charCodeAt(d)
        } else e = [e];
        if (0 < e[0].indexOf("blank.mp3")) {
            var r = new Audio(e[0]);
            document.body.appendChild(r)
        }
        if (!h) return ! 1;
        h.createBufferSource().start(0),
        f = null;
        var s = aidn.audio.getPath(e);
        if (!s && !i) return ! 1;
        function l() {
            var e;
            e = i ? n.buffer: c.response,
            h.decodeAudioData(e,
            function(e) {
                if (0 <= F) {
                    for (var t = F,
                    n = Number.MAX_VALUE,
                    i = e.numberOfChannels,
                    a = 0; a < i; a++) {
                        for (var o = e.getChannelData(a), d = o.length, r = 0; r < d && !(t < Math.abs(o[r])); r++);
                        r < n && (n = r)
                    }
                    d = e.length - n;
                    var s = h.createBuffer(i, d, h.sampleRate);
                    for (a = 0; a < i; a++) {
                        var l = e.getChannelData(a),
                        c = s.getChannelData(a);
                        for (r = 0; r < d; r++) c[r] = l[r + n]
                    }
                    e = s
                }
                A = (f = e).duration,
                u && u(f),
                T && (T = !1, E.play(p, w, _, b, y, x))
            },
            function() {})
        }
        if (i) l();
        else {
            var c = new XMLHttpRequest;
            c.open("GET", s, !0),
            c.responseType = "arraybuffer",
            c.onload = l,
            c.send()
        }
        return ! 0
    },
    this.play = function(e, t, n, i, a, o) {
        if (p = e, w = t, _ = n, b = i, y = a, x = o, !f) return T = !0,
        void console.log('call "load" method before "play"');
        void 0 === e && (e = 0),
        void 0 === t && (t = !1),
        void 0 === i && (i = 0),
        void 0 === a ? a = I: I = a,
        void 0 === o && (o = 0),
        (u = h.createBufferSource()).buffer = f,
        u.loop = t,
        u.onended = L,
        g || (g = h.createGain());
        var d = [u, g];
        d = d.concat(k),
        v && d.push(v),
        m && d.push(m);
        for (var r = 1; r < d.length; r++) {
            var s = d[r - 1],
            l = d[r];
            s.connect(l),
            r == d.length - 1 && l.connect(h.destination)
        }
        if (u.start ? u.start(h.currentTime + o, e) : u.noteOn(e), O = h.currentTime - e, this._source = u, this.nodeGain = g, 0 < i && "undefined" != typeof jQuery ? (E.volume = 0, $(E).stop().animate({
            volume: a
        },
        1e3 * i, "easeInSine")) : E.volume = a, n) var c = setInterval(function() {
            0 < E.time && (clearInterval(c), n())
        },
        10)
    },
    this.stop = function() {
        T = !1,
        u && (u.stop ? u.stop(0) : u.noteOff())
    },
    this.initPanner = function(e) {
        return (void 0 === e || e <= 0) && (e = "equalpower"),
        0 < e && (e = "HRTF"),
        (v = h.createPanner()).panningModel = e,
        this.nodePanner = v
    },
    this.initBiquadFilter = function(e) {
        return void 0 === e && (e = 0),
        (m = h.createBiquadFilter()).type = e,
        m
    },
    this.addNode = function(e) {
        k.push(e)
    },
    this.addEndEvent = function(e) {
        t = e
    },
    Object.defineProperty(this, "speed", {
        get: function() {
            return u.playbackRate.value
        },
        set: function(e) {
            try {
                O = h.currentTime - this.time / e
            } catch(e) {}
            u.playbackRate.value = n = e
        }
    }),
    Object.defineProperty(this, "loop", {
        get: function() {
            return u.loop
        },
        set: function(e) {
            u.loop = e
        }
    }),
    Object.defineProperty(this, "time", {
        get: function() {
            return (h.currentTime - O) * n % A
        },
        set: function(e) {
            u.stop(0),
            E.play(e, u.loop)
        }
    }),
    Object.defineProperty(this, "volume", {
        get: function() {
            return I
        },
        set: function(e) {
            I = e,
            g && (g.gain.value = e)
        }
    }),
    Object.defineProperty(this, "duration", {
        get: function() {
            return A
        }
    })
},
aidn.AutoAudio = function(e, t, n) {
    void 0 === e && (e = "../shared/swf/audio.swf"),
    aidn.audio.init();
    var i, a, o, d = 2;
    if ("undefined" != typeof swfobject && swfobject.hasFlashPlayerVersion(10) && null != e ? d = 0 : aidn.util.webaudio && (d = 1), 0 <= n && n <= 2 && (d = n), ___flash_audioLoadComplete = function() {
        a()
    },
    ___flash_audioPlay = function() {
        o()
    },
    0 == d) {
        var r = document.createElement("div");
        r.id = "flash_audio",
        document.body.appendChild(r);
        var s = {
            callback: t
        };
        swfobject.embedSWF(e, "flash_audio", "20", "20", "10.2.0", "", s, {
            menu: "false",
            scale: "noScale",
            wmode: "transparent",
            allowScriptAccess: "always",
            allowFullScreen: "true"
        },
        {
            id: "flash_audio",
            name: "flash_audio"
        });
        var l = setInterval(function() {
            document.getElementById("flash_audio").loadFunc && (clearInterval(l), i = document.getElementById("flash_audio"), t(d))
        },
        100)
    } else i = 1 == d ? new aidn.WebAudio: new aidn.Audio,
    this.audio = i,
    t && setTimeout(function() {
        t(d)
    },
    10);
    this.load = function() {
        var e;
        if ("string" == typeof arguments[0] && (arguments[0] = [arguments[0]]), 0 == d) {
            for (this.audio = i, e = 0; e < arguments[0].length; e++) if (0 <= arguments[0][e].indexOf(".swf")) {
                arguments[0] = arguments[0][e];
                break
            }
            arguments[1] && (a = arguments[1], arguments[1] = "___flash_audioLoadComplete")
        } else {
            var t = [];
            for (e = 0; e < arguments[0].length; e++) arguments[0][e].indexOf(".swf") < 0 && t.push(arguments[0][e]);
            arguments[0] = t
        } (i.loadFunc || i.load).apply(i, arguments)
    },
    this.play = function() {
        0 == d && arguments[2] && (o = arguments[2], arguments[2] = "___flash_audioPlay"),
        (i.playFunc || i.play).apply(i, arguments)
    },
    this.stop = function() { (i.stopFunc || i.stop || i.pause).apply(i, arguments)
    },
    this.addEndEvent = function(e) {
        0 == d || i.addEndEvent(e)
    },
    Object.defineProperty(this, "speed", {
        get: function() {
            return 0 == d ? -1 : i.speed
        },
        set: function(e) {
            0 == d || (i.speed = e)
        }
    }),
    Object.defineProperty(this, "time", {
        get: function() {
            return 0 == d ? i ? i.getTimeFunc() : -1 : i.time
        },
        set: function(e) {
            0 == d || (i.time = e)
        }
    }),
    Object.defineProperty(this, "volume", {
        get: function() {
            return 0 == d ? -1 : i.volume
        },
        set: function(e) {
            0 == d || (i.volume = e)
        }
    }),
    Object.defineProperty(this, "duration", {
        get: function() {
            return 0 == d ? -1 : i.duration
        }
    }),
    this.type = d
},
aidn.log = function() {
    window.console && console.log(arguments)
},
aidn.alert = function() {
    for (var e = "",
    t = arguments.length,
    n = 0; n < t - 1; n++) e += arguments[n] + ", ";
    0 < t && (e += arguments[n]),
    alert(e)
},
aidn.debug = function() {
    if ("undefined" != typeof jQuery) {
        for (var e = "",
        t = arguments.length,
        n = 0; n < t; n++) e += arguments[n] + ", ";
        0 == $("#__debugx").length && $("html").append("<div id='__debugx' style='pointer-events:none;text-align:left;position:fixed;z-index:10000000;top:0;font-weight:bold;background:rgba(255,255,255,0.5);'></div>"),
        $("#__debugx").prepend("<p>" + e + "</p>")
    }
},
window.requestAnimFrame = window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame ||
function(e) {
    window.setTimeout(e, 1e3 / 60)
};