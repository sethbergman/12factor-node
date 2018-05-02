/*{"version":"4598141","mac":"1:bb9a6bbb93bea415e48661628b672b8f18b8d1f3a4125e959d6d3ec13a711234","k":"0.10.0","created":"2011-10-20T21:46:07Z"}*/
;(function(window, document, undefined) {
    var j = true
      , o = null
      , q = false;
    function r(a) {
        return function(c) {
            this[a] = c
        }
    }
    function s(a) {
        return function() {
            return this[a]
        }
    }
    var t;
    function u(a, c) {
        var b = arguments.length > 2 ? Array.prototype.slice.call(arguments, 2) : [];
        return function() {
            b.push.apply(b, arguments);
            return c.apply(a, b)
        }
    }
    function v(a, c) {
        this.p = a;
        this.f = c
    }
    t = v.prototype;
    t.createElement = function(a, c, b) {
        a = this.p.createElement(a);
        if (c)
            for (var d in c)
                if (c.hasOwnProperty(d))
                    if (d == "style" && this.f.getName() == "MSIE")
                        a.style.cssText = c[d];
                    else
                        a.setAttribute(d, c[d]);
        b && a.appendChild(this.p.createTextNode(b));
        return a
    }
    ;
    t.insertInto = function(a, c) {
        var b = this.p.getElementsByTagName(a)[0];
        if (!b)
            b = document.documentElement;
        if (b && b.lastChild) {
            b.insertBefore(c, b.lastChild);
            return j
        }
        return q
    }
    ;
    t.whenBodyExists = function(a) {
        function c() {
            document.body ? a() : setTimeout(c, 0)
        }
        c()
    }
    ;
    t.removeElement = function(a) {
        if (a.parentNode) {
            a.parentNode.removeChild(a);
            return j
        }
        return q
    }
    ;
    t.createCssLink = function(a) {
        return this.createElement("link", {
            rel: "stylesheet",
            href: a
        })
    }
    ;
    t.appendClassName = function(a, c) {
        for (var b = a.className.split(/\s+/), d = 0, e = b.length; d < e; d++)
            if (b[d] == c)
                return;
        b.push(c);
        a.className = b.join(" ").replace(/^\s+/, "")
    }
    ;
    t.removeClassName = function(a, c) {
        for (var b = a.className.split(/\s+/), d = [], e = 0, g = b.length; e < g; e++)
            b[e] != c && d.push(b[e]);
        a.className = d.join(" ").replace(/^\s+/, "").replace(/\s+$/, "")
    }
    ;
    t.hasClassName = function(a, c) {
        for (var b = a.className.split(/\s+/), d = 0, e = b.length; d < e; d++)
            if (b[d] == c)
                return j;
        return q
    }
    ;
    function w(a, c, b, d, e, g, k, h) {
        this.Q = a;
        this.Pa = c;
        this.ya = b;
        this.xa = d;
        this.Ja = e;
        this.Ia = g;
        this.wa = k;
        this.Ta = h
    }
    t = w.prototype;
    t.getName = s("Q");
    t.getVersion = s("Pa");
    t.getEngine = s("ya");
    t.getEngineVersion = s("xa");
    t.getPlatform = s("Ja");
    t.getPlatformVersion = s("Ia");
    t.getDocumentMode = s("wa");
    function x(a, c) {
        this.f = a;
        this.u = c
    }
    var aa = new w("Unknown","Unknown","Unknown","Unknown","Unknown","Unknown",undefined,q);
    x.prototype.parse = function() {
        var a;
        if (this.f.indexOf("MSIE") != -1) {
            a = y(this, this.f, /(MSIE [\d\w\.]+)/, 1);
            if (a != "") {
                var c = a.split(" ");
                a = c[0];
                c = c[1];
                a = new w(a,c,a,c,z(this),A(this),B(this, this.u),C(this, c) >= 6)
            } else
                a = new w("MSIE","Unknown","MSIE","Unknown",z(this),A(this),B(this, this.u),q)
        } else {
            if (this.f.indexOf("Opera") != -1)
                a: {
                    c = a = "Unknown";
                    var b = y(this, this.f, /(Presto\/[\d\w\.]+)/, 1);
                    if (b != "") {
                        c = b.split("/");
                        a = c[0];
                        c = c[1]
                    } else {
                        if (this.f.indexOf("Gecko") != -1)
                            a = "Gecko";
                        b = y(this, this.f, /rv:([^\)]+)/,
                        1);
                        if (b != "")
                            c = b
                    }
                    if (this.f.indexOf("Version/") != -1) {
                        b = y(this, this.f, /Version\/([\d\.]+)/, 1);
                        if (b != "") {
                            a = new w("Opera",b,a,c,z(this),A(this),B(this, this.u),C(this, b) >= 10);
                            break a
                        }
                    }
                    b = y(this, this.f, /Opera[\/ ]([\d\.]+)/, 1);
                    a = b != "" ? new w("Opera",b,a,c,z(this),A(this),B(this, this.u),C(this, b) >= 10) : new w("Opera","Unknown",a,c,z(this),A(this),B(this, this.u),q)
                }
            else {
                if (this.f.indexOf("AppleWebKit") != -1) {
                    a = z(this);
                    c = A(this);
                    b = y(this, this.f, /AppleWebKit\/([\d\.]+)/, 1);
                    if (b == "")
                        b = "Unknown";
                    var d = "Unknown";
                    if (this.f.indexOf("Chrome") != -1)
                        d = "Chrome";
                    else if (this.f.indexOf("Safari") != -1)
                        d = "Safari";
                    else if (this.f.indexOf("AdobeAIR") != -1)
                        d = "AdobeAIR";
                    var e = "Unknown";
                    if (this.f.indexOf("Version/") != -1)
                        e = y(this, this.f, /Version\/([\d\.\w]+)/, 1);
                    else if (d == "Chrome")
                        e = y(this, this.f, /Chrome\/([\d\.]+)/, 1);
                    else if (d == "AdobeAIR")
                        e = y(this, this.f, /AdobeAIR\/([\d\.]+)/, 1);
                    var g = q;
                    if (d == "AdobeAIR") {
                        g = y(this, e, /\d+\.(\d+)/, 1);
                        g = C(this, e) > 2 || C(this, e) == 2 && parseInt(g, 10) >= 5
                    } else {
                        g = y(this, b, /\d+\.(\d+)/, 1);
                        g = C(this, b) >=
                        526 || C(this, b) >= 525 && parseInt(g, 10) >= 13
                    }
                    a = new w(d,e,"AppleWebKit",b,a,c,B(this, this.u),g)
                } else {
                    if (this.f.indexOf("Gecko") != -1) {
                        c = a = "Unknown";
                        d = q;
                        if (this.f.indexOf("Firefox") != -1) {
                            a = "Firefox";
                            b = y(this, this.f, /Firefox\/([\d\w\.]+)/, 1);
                            if (b != "") {
                                d = y(this, b, /\d+\.(\d+)/, 1);
                                c = b;
                                d = b != "" && C(this, b) >= 3 && parseInt(d, 10) >= 5
                            }
                        } else if (this.f.indexOf("Mozilla") != -1)
                            a = "Mozilla";
                        b = y(this, this.f, /rv:([^\)]+)/, 1);
                        if (b == "")
                            b = "Unknown";
                        else if (!d) {
                            d = C(this, b);
                            e = parseInt(y(this, b, /\d+\.(\d+)/, 1), 10);
                            g = parseInt(y(this,
                            b, /\d+\.\d+\.(\d+)/, 1), 10);
                            d = d > 1 || d == 1 && e > 9 || d == 1 && e == 9 && g >= 2 || b.match(/1\.9\.1b[123]/) != o || b.match(/1\.9\.1\.[\d\.]+/) != o
                        }
                        a = new w(a,c,"Gecko",b,z(this),A(this),B(this, this.u),d)
                    } else
                        a = aa;
                    a = a
                }
                a = a
            }
            a = a
        }
        return a
    }
    ;
    function z(a) {
        var c = y(a, a.f, /(iPod|iPad|iPhone|Android)/, 1);
        if (c != "")
            return c;
        a = y(a, a.f, /(Linux|Mac_PowerPC|Macintosh|Windows)/, 1);
        if (a != "") {
            if (a == "Mac_PowerPC")
                a = "Macintosh";
            return a
        }
        return "Unknown"
    }
    function A(a) {
        var c = y(a, a.f, /(OS X|Windows NT|Android) ([^;)]+)/, 2);
        if (c)
            return c;
        if (c = y(a, a.f, /(iPhone )?OS ([\d_]+)/, 2))
            return c;
        if (a = y(a, a.f, /Linux ([i\d]+)/, 1))
            return a;
        return "Unknown"
    }
    function C(a, c) {
        var b = y(a, c, /(\d+)/, 1);
        if (b != "")
            return parseInt(b, 10);
        return -1
    }
    function y(a, c, b, d) {
        if ((a = c.match(b)) && a[d])
            return a[d];
        return ""
    }
    function B(a, c) {
        if (c.documentMode)
            return c.documentMode
    }
    function ba(a, c, b, d) {
        this.c = a;
        this.j = c;
        this.T = b;
        this.n = d || "wf";
        this.l = new D("-")
    }
    function E(a) {
        a.c.removeClassName(a.j, a.l.k(a.n, "loading"));
        a.c.hasClassName(a.j, a.l.k(a.n, "active")) || a.c.appendClassName(a.j, a.l.k(a.n, "inactive"));
        F(a, "inactive")
    }
    function F(a, c, b, d) {
        a.T[c] && a.T[c](b, d)
    }
    function G(a, c, b, d, e) {
        this.c = a;
        this.A = c;
        this.C = b;
        this.s = d;
        this.M = e;
        this.W = 0;
        this.sa = this.fa = q
    }
    G.prototype.watch = function(a, c, b, d) {
        for (var e = a.length, g = 0; g < e; g++) {
            var k = a[g];
            c[k] || (c[k] = ["n4"]);
            this.W += c[k].length
        }
        if (d)
            this.fa = d;
        for (g = 0; g < e; g++) {
            k = a[g];
            d = c[k];
            for (var h = b[k], f = 0, l = d.length; f < l; f++) {
                var n = d[f]
                  , p = this.A
                  , i = k
                  , m = n;
                p.c.appendClassName(p.j, p.l.k(p.n, i, m, "loading"));
                F(p, "fontloading", i, m);
                p = u(this, this.za);
                i = u(this, this.Aa);
                new H(p,i,this.c,this.C,this.s,this.M,k,n,h)
            }
        }
    }
    ;
    G.prototype.za = function(a, c) {
        var b = this.A;
        b.c.removeClassName(b.j, b.l.k(b.n, a, c, "loading"));
        b.c.removeClassName(b.j, b.l.k(b.n, a, c, "inactive"));
        b.c.appendClassName(b.j, b.l.k(b.n, a, c, "active"));
        F(b, "fontactive", a, c);
        this.sa = j;
        I(this)
    }
    ;
    G.prototype.Aa = function(a, c) {
        var b = this.A;
        b.c.removeClassName(b.j, b.l.k(b.n, a, c, "loading"));
        b.c.hasClassName(b.j, b.l.k(b.n, a, c, "active")) || b.c.appendClassName(b.j, b.l.k(b.n, a, c, "inactive"));
        F(b, "fontinactive", a, c);
        I(this)
    }
    ;
    function I(a) {
        if (--a.W == 0 && a.fa)
            if (a.sa) {
                a = a.A;
                a.c.removeClassName(a.j, a.l.k(a.n, "loading"));
                a.c.removeClassName(a.j, a.l.k(a.n, "inactive"));
                a.c.appendClassName(a.j, a.l.k(a.n, "active"));
                F(a, "active")
            } else
                E(a.A)
    }
    function H(a, c, b, d, e, g, k, h, f) {
        this.ua = a;
        this.Da = c;
        this.c = b;
        this.C = d;
        this.s = e;
        this.M = g;
        this.Ha = new J;
        this.Ca = new ca;
        this.$ = k;
        this.Z = h;
        this.Ba = f || "BESs";
        this.ha = da(this, "arial,'URW Gothic L',sans-serif");
        this.ia = da(this, "Georgia,'Century Schoolbook L',serif");
        this.da = this.ha;
        this.ea = this.ia;
        this.na = K(this, "arial,'URW Gothic L',sans-serif");
        this.oa = K(this, "Georgia,'Century Schoolbook L',serif");
        this.Na = g();
        this.U()
    }
    H.prototype.U = function() {
        var a = this.C.N(this.na)
          , c = this.C.N(this.oa);
        if ((this.ha != a || this.ia != c) && this.da == a && this.ea == c)
            ea(this, this.ua);
        else if (this.M() - this.Na >= 5E3)
            ea(this, this.Da);
        else {
            this.da = a;
            this.ea = c;
            fa(this)
        }
    }
    ;
    function fa(a) {
        a.s(function(c, b) {
            return function() {
                b.call(c)
            }
        }(a, a.U), 25)
    }
    function ea(a, c) {
        a.c.removeElement(a.na);
        a.c.removeElement(a.oa);
        c(a.$, a.Z)
    }
    function da(a, c) {
        var b = K(a, c, j)
          , d = a.C.N(b);
        a.c.removeElement(b);
        return d
    }
    function K(a, c, b) {
        var d = a.Ca.expand(a.Z);
        c = a.c.createElement("span", {
            style: "position:absolute;top:-999px;left:-999px;font-size:300px;width:auto;height:auto;line-height:normal;margin:0;padding:0;font-variant:normal;font-family:" + (b ? "" : a.Ha.quote(a.$) + ",") + c + ";" + d
        }, a.Ba);
        a.c.insertInto("body", c);
        return c
    }
    function D(a) {
        this.Fa = a || "-"
    }
    D.prototype.k = function() {
        for (var a = [], c = 0; c < arguments.length; c++)
            a.push(arguments[c].replace(/[\W_]+/g, "").toLowerCase());
        return a.join(this.Fa)
    }
    ;
    function J() {
        this.ma = "'"
    }
    J.prototype.quote = function(a) {
        var c = [];
        a = a.split(/,\s*/);
        for (var b = 0; b < a.length; b++) {
            var d = a[b].replace(/['"]/g, "");
            d.indexOf(" ") == -1 ? c.push(d) : c.push(this.ma + d + this.ma)
        }
        return c.join(",")
    }
    ;
    function ca() {
        this.ka = ga;
        this.D = ha
    }
    var ga = ["font-style", "font-weight"]
      , ha = {
        "font-style": [["n", "normal"], ["i", "italic"], ["o", "oblique"]],
        "font-weight": [["1", "100"], ["2", "200"], ["3", "300"], ["4", "400"], ["5", "500"], ["6", "600"], ["7", "700"], ["8", "800"], ["9", "900"], ["4", "normal"], ["7", "bold"]]
    };
    function ia(a, c, b) {
        this.Ea = a;
        this.Ka = c;
        this.D = b
    }
    ia.prototype.expand = function(a, c) {
        for (var b = 0; b < this.D.length; b++)
            if (c == this.D[b][0]) {
                a[this.Ea] = this.Ka + ":" + this.D[b][1];
                break
            }
    }
    ;
    ca.prototype.expand = function(a) {
        if (a.length != 2)
            return o;
        for (var c = [o, o], b = 0, d = this.ka.length; b < d; b++) {
            var e = this.ka[b];
            (new ia(b,e,this.D[e])).expand(c, a.substr(b, 1))
        }
        return c[0] && c[1] ? c.join(";") + ";" : o
    }
    ;
    function M(a, c) {
        this.p = a;
        this.f = c
    }
    M.prototype = v.prototype;
    M.prototype.isHttps = function() {
        return this.p.location.protocol == "https:"
    }
    ;
    M.prototype.getHostName = function() {
        return this.p.location.hostname
    }
    ;
    M.prototype.loadScript = function(a, c) {
        var b = this.p.getElementsByTagName("head")[0];
        if (b) {
            var d = this.p.createElement("script");
            d.src = a;
            var e = q;
            d.onload = d.onreadystatechange = function() {
                if (!e && (!this.readyState || this.readyState == "loaded" || this.readyState == "complete")) {
                    e = j;
                    c && c();
                    d.onload = d.onreadystatechange = o;
                    d.parentNode.tagName == "HEAD" && b.removeChild(d)
                }
            }
            ;
            b.appendChild(d)
        }
    }
    ;
    M.prototype.createStyle = function(a) {
        var c = this.p.createElement("style");
        c.setAttribute("type", "text/css");
        if (c.styleSheet)
            c.styleSheet.cssText = a;
        else
            c.appendChild(document.createTextNode(a));
        return c
    }
    ;
    function ja(a, c) {
        this.La = a;
        this.X = c
    }
    function ka(a) {
        for (var c = a.La.join(","), b = [], d = 0; d < a.X.length; d++) {
            var e = a.X[d];
            b.push(e.name + ":" + e.value + ";")
        }
        return c + "{" + b.join("") + "}"
    }
    function N(a, c, b, d) {
        this.B = a;
        this.H = c;
        this.v = b;
        this.Sa = d;
        this.aa = {};
        this.Y = {}
    }
    N.prototype.w = function(a) {
        return a ? (this.aa[a.getStylesheetFormatId()] || this.H).slice(0) : this.H.slice(0)
    }
    ;
    N.prototype.getId = s("v");
    function la(a, c, b) {
        for (var d = [], e = a.B.split(",")[0].replace(/"|'/g, ""), g = a.w(), k, h = [], f = {}, l = 0; l < g.length; l++) {
            k = g[l];
            if (k.length > 0 && !f[k]) {
                f[k] = j;
                h.push(k)
            }
        }
        b = b.la ? b.la(e, h, d) : h;
        c = c.getStylesheetFormatId();
        a.aa[c] = b;
        a.Y[c] = d
    }
    N.prototype.watch = function(a, c, b) {
        var d = []
          , e = {};
        ma(this, c, d, e);
        a.watch(d, e, {}, b)
    }
    ;
    function ma(a, c, b, d) {
        b.push(a.B);
        d[a.B] = a.w(c);
        a = a.Y[c.getStylesheetFormatId()] || [];
        for (c = 0; c < a.length; c++) {
            for (var e = a[c], g = e.B, k = q, h = 0; h < b.length; h++)
                if (b[h] == g)
                    k = j;
            if (!k) {
                b.push(g);
                d[g] = e.w()
            }
        }
    }
    function na(a, c) {
        this.B = a;
        this.H = c
    }
    na.prototype.w = s("H");
    function O(a, c, b) {
        this.Ma = a;
        this.O = c;
        this.pa = b
    }
    O.prototype.buildUrl = function(a, c) {
        var b = this.Ma && a ? "https:" : "http:"
          , d = typeof this.O == "function" ? this.O(b) : this.O;
        return b + "//" + d + (this.pa == "/" ? "" : this.pa) + c
    }
    ;
    function oa(a, c) {
        var b = new Image(1,1);
        b.src = c;
        b.onload = function() {
            b.onload = o
        }
    }
    function P(a, c, b) {
        this.v = a;
        this.ra = c;
        this.ca = b
    }
    P.prototype.getId = s("v");
    P.prototype.getStylesheetFormatId = s("ra");
    P.prototype.isUserAgent = function(a) {
        return this.ca ? this.ca(a.getName(), a.getVersion(), a.getEngine(), a.getEngineVersion(), a.getPlatform(), a.getPlatformVersion(), a.getDocumentMode()) : q
    }
    ;
    P.prototype.buildCssUrl = function(a, c, b, d) {
        b = "/" + b + "-" + this.ra + ".css";
        if (d)
            b += "?" + d;
        return c.buildUrl(a, b)
    }
    ;
    function Q() {
        this.t = []
    }
    Q.prototype.addBrowser = function(a) {
        this.getBrowserById(a.getId()) || this.t.push(a)
    }
    ;
    Q.prototype.getBrowserById = function(a) {
        for (var c = 0; c < this.t.length; c++) {
            var b = this.t[c];
            if (a === b.getId())
                return b
        }
        return o
    }
    ;
    Q.prototype.findBrowser = function(a) {
        for (var c = 0; c < this.t.length; c++) {
            var b = this.t[c];
            if (b.isUserAgent(a))
                return b
        }
        return o
    }
    ;
    Q.prototype.addBrowsersToBrowserSet = function(a) {
        for (var c = 0; c < this.t.length; c++)
            a.addBrowser(this.t[c])
    }
    ;
    function pa(a) {
        this.v = a;
        this.J = new Q;
        this.m = [];
        this.K = [];
        this.L = this.V = this.z = o
    }
    t = pa.prototype;
    t.getId = s("v");
    t.setSecurityToken = r("qa");
    t.setNestedUrl = r("ga");
    t.setFontFilterSet = r("L");
    t.setKitOptions = r("P");
    t.addBrowser = function(a) {
        this.J.addBrowser(a)
    }
    ;
    t.addFontFamily = function(a) {
        this.m.push(a)
    }
    ;
    t.addCssRule = function(a) {
        this.K.push(a)
    }
    ;
    t.supportsBrowser = function(a) {
        return !!this.J.getBrowserById(a.getId())
    }
    ;
    t.addBrowsersToBrowserSet = function(a) {
        this.J.addBrowsersToBrowserSet(a)
    }
    ;
    t.init = function(a) {
        for (var c = [], b = 0; b < this.K.length; b++)
            c.push(ka(this.K[b]));
        a.insertInto("head", a.createStyle(c.join("")))
    }
    ;
    t.load = function(a, c, b, d) {
        if (this.L)
            for (var e = qa(this.L, b.getStylesheetFormatId()), g = 0; g < this.m.length; g++)
                la(this.m[g], b, e);
        if (this.z && this.V) {
            this.z.va(new ra(b.getStylesheetFormatId()));
            g = new sa(a,this.F,this.m);
            e = ta(this.V, b.getStylesheetFormatId(), g);
            for (g = 0; g < e.length; g++)
                this.z.va(e[g]);
            this.z.Ra(this.qa);
            g = this.z.buildUrl(a.isHttps(), this.ga)
        } else
            g = b.buildCssUrl(a.isHttps(), this.ga, this.v, this.qa);
        a.insertInto("head", a.createCssLink(g));
        c && a.whenBodyExists(function(k, h, f, l) {
            return function() {
                for (var n =
                0; n < k.m.length; n++)
                    k.m[n].watch(h, f, l && n == k.m.length - 1)
            }
        }(this, c, b, d))
    }
    ;
    t.collectFontFamilies = function(a, c, b) {
        for (var d = 0; d < this.m.length; d++)
            ma(this.m[d], a, c, b)
    }
    ;
    t.performOptionalActions = function(a, c, b) {
        this.P && b.whenBodyExists(function(d, e, g, k) {
            return function() {
                var h = d.P;
                h.ja && oa(h, h.ja.buildUrl(k.isHttps()));
                var f = d.P;
                h = d.v;
                if (f.S) {
                    f = f.S.k(h, g, k);
                    f.setAttribute("id", "typekit-badge-" + h);
                    k.insertInto("body", f)
                }
            }
        }(this, a, c, b))
    }
    ;
    function R(a, c, b, d, e) {
        this.Ga = a;
        this.c = c;
        this.f = b;
        this.j = d;
        this.s = e;
        this.o = []
    }
    R.prototype.I = function(a) {
        this.o.push(a)
    }
    ;
    R.prototype.load = function(a, c) {
        var b = a
          , d = c || {};
        if (typeof b == "string")
            b = [b];
        else if (b && b.length)
            b = b;
        else {
            d = b || {};
            b = []
        }
        if (b.length)
            for (var e = this, g = b.length, k = 0; k < b.length; k++)
                this.ta(b[k], function() {
                    --g == 0 && e.R(d)
                });
        else
            this.R(d)
    }
    ;
    R.prototype.ta = function(a, c) {
        this.c.loadScript(this.Ga.buildUrl(this.c.isHttps(), "/" + a + ".js"), c)
    }
    ;
    R.prototype.R = function(a) {
        if (a.userAgent)
            this.f = (new x(a.userAgent,document)).parse();
        a = new ba(this.c,this.j,a);
        for (var c = new Q, b = 0; b < this.o.length; b++)
            this.o[b].addBrowsersToBrowserSet(c);
        c = c.findBrowser(this.f);
        for (b = 0; b < this.o.length; b++)
            this.o[b].init(this.c);
        if (c) {
            a.c.appendClassName(a.j, a.l.k(a.n, "loading"));
            F(a, "loading");
            ua(this, c, a)
        } else
            E(a);
        this.o = []
    }
    ;
    function ua(a, c, b) {
        b = new G(a.c,b,{
            N: function(g) {
                return g.offsetWidth
            }
        },a.s,function() {
            return +new Date
        }
        );
        for (var d = 0; d < a.o.length; d++) {
            var e = a.o[d];
            if (e.supportsBrowser(c)) {
                e.load(a.c, b, c, d == a.o.length - 1);
                e.performOptionalActions(window, a.f, a.c)
            }
        }
    }
    function S(a, c, b) {
        this.ba = a;
        this.c = c;
        this.s = b;
        this.o = []
    }
    S.prototype.I = function(a) {
        this.o.push(a)
    }
    ;
    S.prototype.load = function() {
        var a = this.ba.__webfonttypekitmodule__;
        if (a)
            for (var c = 0; c < this.o.length; c++) {
                var b = this.o[c]
                  , d = a[b.getId()];
                if (d) {
                    var e = this.c
                      , g = this.s;
                    d(function(k, h, f) {
                        var l = new Q;
                        b.addBrowsersToBrowserSet(l);
                        h = [];
                        var n = {};
                        if (l = l.findBrowser(k)) {
                            b.init(e);
                            b.load(e, o, l, g);
                            b.collectFontFamilies(l, h, n);
                            b.performOptionalActions(window, k, e, g)
                        }
                        f(!!l, h, n)
                    })
                }
            }
    }
    ;
    function T(a, c) {
        this.Q = a;
        this.la = c
    }
    T.prototype.getName = s("Q");
    function U(a, c) {
        for (var b = 0; b < a.G.length; b++) {
            var d = a.G[b];
            if (c === d.getName())
                return d
        }
        return o
    }
    function qa(a, c) {
        var b = a.q[c];
        return b ? U(a, b) : o
    }
    function ta(a, c, b) {
        var d = [];
        a = a.r[c] || [];
        for (c = 0; c < a.length; c++) {
            var e;
            a: switch (a[c]) {
            case "observeddomain":
                e = new va(b.c);
                break a;
            case "fontmask":
                e = new wa(b.F,b.m);
                break a;
            default:
                e = o
            }
            e && d.push(e)
        }
        return d
    }
    function sa(a, c, b) {
        this.c = a;
        this.F = c;
        this.m = b
    }
    function ra(a) {
        this.Oa = a
    }
    ra.prototype.toString = s("Oa");
    function va(a) {
        this.c = a
    }
    va.prototype.toString = function() {
        var a;
        a = this.c.getHostName ? this.c.getHostName() : document.location.hostname;
        return encodeURIComponent(a)
    }
    ;
    function wa(a, c) {
        this.F = a;
        this.m = c
    }
    wa.prototype.toString = function() {
        for (var a = [], c = 0; c < this.m.length; c++) {
            var b = this.m[c]
              , d = b.w();
            b = b.w(this.F);
            for (var e = 0; e < d.length; e++) {
                var g;
                a: {
                    for (g = 0; g < b.length; g++)
                        if (d[e] === b[g]) {
                            g = j;
                            break a
                        }
                    g = q
                }
                a.push(g ? 1 : 0)
            }
        }
        a = a.join("");
        a = a.replace(/^0+/, "");
        c = [];
        for (d = a.length; d > 0; d -= 4) {
            b = a.slice(d - 4 < 0 ? 0 : d - 4, d);
            c.unshift(parseInt(b, 2).toString(16))
        }
        return c.join("")
    }
    ;
    var V = new Q;
    V.addBrowser(new P("ie9plus-win7plus-winvista","d",function(a, c, b, d, e, g, k) {
        var h = q;
        h = (h = h || function(l, n, p, i, m, L) {
            l = /^([0-9]+).([0-9]+)/.exec(L);
            if (m == "Windows" && l) {
                m = parseInt(l[1], 10);
                l = parseInt(l[2], 10);
                return m > 6 || m == 6 && l >= 1
            } else
                return q
        }(a, c, b, d, e, g, k)) || (e == "Windows" && g == "6.0" ? j : q);
        if (!h)
            return q;
        var f;
        if (a == "MSIE")
            f = k >= 9;
        return f
    }
    ));
    V.addBrowser(new P("chrome4to5-linux-osx-win2003-win7plus-winvista-winxp","a",function(a, c, b, d, e, g, k) {
        var h = q;
        h = (h = (h = (h = (h = (h = h || (e == "Windows" && g == "5.1" ? j : q)) || (e == "Windows" && g == "5.2" ? j : q)) || (e == "Windows" && g == "6.0" ? j : q)) || function(f, l, n, p, i, m) {
            f = /^([0-9]+).([0-9]+)/.exec(m);
            if (i == "Windows" && f) {
                i = parseInt(f[1], 10);
                f = parseInt(f[2], 10);
                return i > 6 || i == 6 && f >= 1
            } else
                return q
        }(a, c, b, d, e, g, k)) || function(f, l, n, p, i, m) {
            f = /^([0-9]+)(_|.)([0-9]+)/.exec(m);
            if (i == "Macintosh" && f) {
                i = parseInt(f[1], 10);
                m = parseInt(f[3],
                10);
                return i > 10 || i == 10 && m >= 4
            } else
                return i == "Macintosh" && m == "Unknown" ? j : q
        }(a, c, b, d, e, g, k)) || (e == "Ubuntu" || e == "Linux" ? j : q);
        if (!h)
            return q;
        return function(f, l) {
            if (f == "Chrome") {
                var n = /([0-9]+.[0-9]+).([0-9]+).([0-9]+)/.exec(l);
                if (n) {
                    var p = parseFloat(n[1])
                      , i = parseInt(n[2], 10);
                    n = parseInt(n[3], 10);
                    if (p >= 6)
                        return q;
                    else if (p > 4)
                        return j;
                    else if (p == 4 && i > 249)
                        return j;
                    else if (p == 4 && i == 249 && n >= 4)
                        return j
                }
            }
            return q
        }(a, c, b, d, e, g, k)
    }
    ));
    V.addBrowser(new P("air-linux-osx-win","a",function(a, c, b, d, e, g, k) {
        var h = q;
        h = (h = (h = h || function(f, l, n, p, i, m) {
            f = /^([0-9]+)(_|.)([0-9]+)/.exec(m);
            if (i == "Macintosh" && f) {
                i = parseInt(f[1], 10);
                m = parseInt(f[3], 10);
                return i > 10 || i == 10 && m >= 4
            } else
                return i == "Macintosh" && m == "Unknown" ? j : q
        }(a, c, b, d, e, g, k)) || (e == "Ubuntu" || e == "Linux" ? j : q)) || (e == "Windows" && g == "Unknown" ? j : q);
        if (!h)
            return q;
        return function(f, l) {
            if (f == "AdobeAIR") {
                var n = /([0-9]+.[0-9]+)/.exec(l);
                if (n)
                    return parseFloat(n[1]) >= 2.5
            }
            return q
        }(a, c, b, d, e, g, k)
    }
    ));
    V.addBrowser(new P("ff36plus-linux-osx-win2003-win7plus-winvista-winxp","d",function(a, c, b, d, e, g, k) {
        var h = q;
        h = (h = (h = (h = (h = (h = h || (e == "Windows" && g == "5.1" ? j : q)) || (e == "Windows" && g == "5.2" ? j : q)) || (e == "Windows" && g == "6.0" ? j : q)) || function(f, l, n, p, i, m) {
            f = /^([0-9]+).([0-9]+)/.exec(m);
            if (i == "Windows" && f) {
                i = parseInt(f[1], 10);
                f = parseInt(f[2], 10);
                return i > 6 || i == 6 && f >= 1
            } else
                return q
        }(a, c, b, d, e, g, k)) || function(f, l, n, p, i, m) {
            f = /^([0-9]+)(_|.)([0-9]+)/.exec(m);
            if (i == "Macintosh" && f) {
                i = parseInt(f[1], 10);
                m = parseInt(f[3],
                10);
                return i > 10 || i == 10 && m >= 4
            } else
                return i == "Macintosh" && m == "Unknown" ? j : q
        }(a, c, b, d, e, g, k)) || (e == "Ubuntu" || e == "Linux" ? j : q);
        if (!h)
            return q;
        return function(f, l, n, p) {
            if (n == "Gecko")
                if (l = /([0-9]+.[0-9]+)(.([0-9]+)|)/.exec(p)) {
                    f = parseFloat(l[1]);
                    l = parseInt(l[3], 10);
                    return f > 1.9 || f >= 1.9 && l > 1
                }
            return q
        }(a, c, b, d, e, g, k)
    }
    ));
    V.addBrowser(new P("ie6to8-win2003-win7plus-winvista-winxp","i",function(a, c, b, d, e, g, k) {
        var h = q;
        h = (h = (h = (h = h || (e == "Windows" && g == "5.1" ? j : q)) || (e == "Windows" && g == "5.2" ? j : q)) || (e == "Windows" && g == "6.0" ? j : q)) || function(f, l, n, p, i, m) {
            f = /^([0-9]+).([0-9]+)/.exec(m);
            if (i == "Windows" && f) {
                i = parseInt(f[1], 10);
                f = parseInt(f[2], 10);
                return i > 6 || i == 6 && f >= 1
            } else
                return q
        }(a, c, b, d, e, g, k);
        if (!h)
            return q;
        return function(f, l, n, p, i, m, L) {
            if (f == "MSIE") {
                if (f = /([0-9]+.[0-9]+)/.exec(l))
                    return parseFloat(f[1]) >= 6 && (L === undefined ||
                    L < 9);
                return q
            }
        }(a, c, b, d, e, g, k)
    }
    ));
    V.addBrowser(new P("ff35-osx","b",function(a, c, b, d, e, g, k) {
        var h = q;
        h = h || function(f, l, n, p, i, m) {
            f = /^([0-9]+)(_|.)([0-9]+)/.exec(m);
            if (i == "Macintosh" && f) {
                i = parseInt(f[1], 10);
                m = parseInt(f[3], 10);
                return i > 10 || i == 10 && m >= 4
            } else
                return i == "Macintosh" && m == "Unknown" ? j : q
        }(a, c, b, d, e, g, k);
        if (!h)
            return q;
        return function(f, l, n, p) {
            if (n == "Gecko") {
                f = /1.9.1b[1-3]{1}/;
                return /1.9.1/.test(p) && !f.test(p)
            }
            return q
        }(a, c, b, d, e, g, k)
    }
    ));
    V.addBrowser(new P("chrome6plus-linux-osx-win2003-win7plus-winvista-winxp","d",function(a, c, b, d, e, g, k) {
        var h = q;
        h = (h = (h = (h = (h = (h = h || (e == "Windows" && g == "5.1" ? j : q)) || (e == "Windows" && g == "5.2" ? j : q)) || (e == "Windows" && g == "6.0" ? j : q)) || function(f, l, n, p, i, m) {
            f = /^([0-9]+).([0-9]+)/.exec(m);
            if (i == "Windows" && f) {
                i = parseInt(f[1], 10);
                f = parseInt(f[2], 10);
                return i > 6 || i == 6 && f >= 1
            } else
                return q
        }(a, c, b, d, e, g, k)) || function(f, l, n, p, i, m) {
            f = /^([0-9]+)(_|.)([0-9]+)/.exec(m);
            if (i == "Macintosh" && f) {
                i = parseInt(f[1], 10);
                m = parseInt(f[3],
                10);
                return i > 10 || i == 10 && m >= 4
            } else
                return i == "Macintosh" && m == "Unknown" ? j : q
        }(a, c, b, d, e, g, k)) || (e == "Ubuntu" || e == "Linux" ? j : q);
        if (!h)
            return q;
        return function(f, l) {
            if (f == "Chrome") {
                var n = /([0-9]+.[0-9]+).([0-9]+).([0-9]+)/.exec(l);
                if (n)
                    if (parseFloat(n[1]) >= 6)
                        return j
            }
        }(a, c, b, d, e, g, k)
    }
    ));
    V.addBrowser(new P("ff35-linux-win2003-win7plus-winvista-winxp","a",function(a, c, b, d, e, g, k) {
        var h = q;
        h = (h = (h = (h = (h = h || (e == "Windows" && g == "5.1" ? j : q)) || (e == "Windows" && g == "5.2" ? j : q)) || (e == "Windows" && g == "6.0" ? j : q)) || function(f, l, n, p, i, m) {
            f = /^([0-9]+).([0-9]+)/.exec(m);
            if (i == "Windows" && f) {
                i = parseInt(f[1], 10);
                f = parseInt(f[2], 10);
                return i > 6 || i == 6 && f >= 1
            } else
                return q
        }(a, c, b, d, e, g, k)) || (e == "Ubuntu" || e == "Linux" ? j : q);
        if (!h)
            return q;
        return function(f, l, n, p) {
            if (n == "Gecko") {
                f = /1.9.1b[1-3]{1}/;
                return /1.9.1/.test(p) &&
                !f.test(p)
            }
            return q
        }(a, c, b, d, e, g, k)
    }
    ));
    V.addBrowser(new P("safari-osx","b",function(a, c, b, d, e, g, k) {
        var h = q;
        h = h || function(f, l, n, p, i, m) {
            f = /^([0-9]+)(_|.)([0-9]+)/.exec(m);
            if (i == "Macintosh" && f) {
                i = parseInt(f[1], 10);
                m = parseInt(f[3], 10);
                return i > 10 || i == 10 && m >= 4
            } else
                return i == "Macintosh" && m == "Unknown" ? j : q
        }(a, c, b, d, e, g, k);
        if (!h)
            return q;
        return function(f, l, n, p, i) {
            if (f == "Safari" && n == "AppleWebKit" || f == "Unknown" && n == "AppleWebKit" && (i == "iPhone" || i == "iPad"))
                if (f = /([0-9]+.[0-9]+)/.exec(p))
                    return parseFloat(f[1]) >= 525.13;
            return q
        }(a, c, b, d, e, g, k)
    }
    ));
    V.addBrowser(new P("opera-osx","b",function(a, c, b, d, e, g, k) {
        var h = q;
        h = h || function(f, l, n, p, i, m) {
            f = /^([0-9]+)(_|.)([0-9]+)/.exec(m);
            if (i == "Macintosh" && f) {
                i = parseInt(f[1], 10);
                m = parseInt(f[3], 10);
                return i > 10 || i == 10 && m >= 4
            } else
                return i == "Macintosh" && m == "Unknown" ? j : q
        }(a, c, b, d, e, g, k);
        if (!h)
            return q;
        a = a == "Opera" ? parseFloat(c) >= 10.54 : q;
        return a
    }
    ));
    V.addBrowser(new P("safari-android-ipad-iphone-win2003-win7plus-winvista-winxp","a",function(a, c, b, d, e, g, k) {
        var h = q;
        h = (h = (h = (h = (h = (h = (h = h || (e == "Windows" && g == "5.1" ? j : q)) || (e == "Windows" && g == "5.2" ? j : q)) || (e == "Windows" && g == "6.0" ? j : q)) || function(f, l, n, p, i, m) {
            f = /^([0-9]+).([0-9]+)/.exec(m);
            if (i == "Windows" && f) {
                i = parseInt(f[1], 10);
                f = parseInt(f[2], 10);
                return i > 6 || i == 6 && f >= 1
            } else
                return q
        }(a, c, b, d, e, g, k)) || function(f, l, n, p, i, m) {
            f = /([0-9]+).([0-9]+)/.exec(m);
            if (i == "Android" && f) {
                i = parseInt(f[1]);
                f = parseInt(f[2]);
                return i > 2 || i == 2 && f >= 2
            } else
                return q
        }(a, c, b, d, e, g, k)) || function(f, l, n, p, i, m) {
            if (i == "iPad")
                if (l = /^([0-9]+)_([0-9]+)/.exec(m)) {
                    f = parseInt(l[1], 10);
                    l = parseInt(l[2], 10);
                    return f > 4 || f == 4 && l >= 2
                } else
                    return q;
            else
                return q
        }(a, c, b, d, e, g, k)) || function(f, l, n, p, i, m) {
            if (i == "iPhone" || i == "iPod")
                if (l = /^([0-9]+)_([0-9]+)/.exec(m)) {
                    f = parseInt(l[1], 10);
                    l = parseInt(l[2], 10);
                    return f > 4 || f == 4 && l >= 2
                } else
                    return q;
            else
                return q
        }(a, c, b, d, e, g, k);
        if (!h)
            return q;
        return function(f, l, n, p, i) {
            if (f == "Safari" && n == "AppleWebKit" || f ==
            "Unknown" && n == "AppleWebKit" && (i == "iPhone" || i == "iPad"))
                if (f = /([0-9]+.[0-9]+)/.exec(p))
                    return parseFloat(f[1]) >= 525.13;
            return q
        }(a, c, b, d, e, g, k)
    }
    ));
    V.addBrowser(new P("opera-linux-win2003-win7plus-winvista-winxp","a",function(a, c, b, d, e, g, k) {
        var h = q;
        h = (h = (h = (h = (h = h || (e == "Windows" && g == "5.1" ? j : q)) || (e == "Windows" && g == "5.2" ? j : q)) || (e == "Windows" && g == "6.0" ? j : q)) || function(f, l, n, p, i, m) {
            f = /^([0-9]+).([0-9]+)/.exec(m);
            if (i == "Windows" && f) {
                i = parseInt(f[1], 10);
                f = parseInt(f[2], 10);
                return i > 6 || i == 6 && f >= 1
            } else
                return q
        }(a, c, b, d, e, g, k)) || (e == "Ubuntu" || e == "Linux" ? j : q);
        if (!h)
            return q;
        a = a == "Opera" ? parseFloat(c) >= 10.54 : q;
        return a
    }
    ));
    var W = new function() {
        this.G = [];
        this.q = {}
    }
      , xa = new T("AllFonts",function(a, c) {
        return c
    }
    );
    U(W, xa.getName()) || W.G.push(xa);
    var ya = new T("DefaultFourFontsWithSingleFvdFamilies",function(a, c, b) {
        for (var d = 0; d < c.length; d++) {
            var e = c[d]
              , g = a.replace(/(-1|-2)$/, "").slice(0, 28) + "-" + e;
            b.push(new na(g,[e]))
        }
        a = {};
        for (e = 0; e < c.length; e++) {
            b = c[e];
            d = b.charAt(1);
            (a[d] || (a[d] = [])).push(b)
        }
        b = [[4, 3, 2, 1, 5, 6, 7, 8, 9], [7, 8, 9, 6, 5, 4, 3, 2, 1]];
        d = [];
        for (e = 0; e < b.length; e++) {
            g = b[e];
            for (var k = 0; k < g.length; k++) {
                var h = g[k];
                if (a[h]) {
                    d = d.concat(a[h]);
                    break
                }
            }
        }
        b = d;
        d = {};
        a = [];
        for (e = 0; e < b.length; e++) {
            g = b[e];
            if (!d[g]) {
                d[g] = j;
                a.push(g)
            }
        }
        b = [];
        for (d = 0; d < c.length; d++) {
            e =
            c[d];
            for (g = 0; g < a.length; g++) {
                k = a[g];
                k == e && b.push(k)
            }
        }
        return b
    }
    );
    U(W, ya.getName()) || W.G.push(ya);
    W.q.a = "AllFonts";
    W.q.b = "AllFonts";
    W.q.d = "AllFonts";
    W.q.e = "AllFonts";
    W.q.g = "AllFonts";
    W.q.h = "AllFonts";
    W.q.i = "DefaultFourFontsWithSingleFvdFamilies";
    var X = new function() {
        this.r = {}
    }
    ;
    X.r.a = [];
    X.r.b = [];
    X.r.d = [];
    X.r.e = [];
    X.r.g = ["observeddomain"];
    X.r.h = ["observeddomain"];
    X.r.i = ["observeddomain", "fontmask"];
    if (!window.Typekit) {
        var za = new O(j,"use.typekit.com","/")
          , Aa = (new x(navigator.userAgent,document)).parse()
          , Ba = new M(document,Aa)
          , Ca = function(a, c) {
            setTimeout(a, c)
        }
          , Y = new R(za,Ba,Aa,document.documentElement,Ca)
          , Z = new S(window,Ba,Ca);
        window.Typekit = Y;
        window.Typekit.load = Y.load;
        window.Typekit.addKit = Y.I
    }
    var Da, Ea, $;
    Da = new O(j,"use.typekit.com","/k");
    Ea = new function(a, c, b) {
        this.S = a;
        this.Qa = o;
        this.ja = b
    }
    (o,o,o);
    $ = new pa("rsq7tro");
    $.setSecurityToken("3bb2a6e53c9684ffdc9a9bf31b5b2a62f8640158474e9a4e257a33798f928d126071f039c906c9be624c169893439c814894e5c235bb611ee04df0edb30ffe47fdb8d13b06764f75197b9e67f5960778d3a299d24aeacd38d9a0e6ac959466cf980381297b214232e0722af6a6b2a70b539f0b6deb4c51118d6b78008b2601c88b112b6a9e60165693fae58ca31cc46c3dc8fb0ca929e1");
    $.setNestedUrl(Da);
    $.setKitOptions(Ea);
    $.addFontFamily(new N("apolline-sc-1,apolline-sc-2",["n5"]));
    $.addFontFamily(new N("sirba-web-1,sirba-web-2",["n4", "i4", "n7", "i7"]));
    $.addCssRule(new ja([".tk-apolline-sc", "h1"],[{
        value: "apolline-sc-1,apolline-sc-2,serif",
        name: "font-family"
    }]));
    $.addCssRule(new ja([".tk-sirba-web", "body"],[{
        value: "sirba-web-1,sirba-web-2,serif",
        name: "font-family"
    }]));
    $.addBrowser(V.getBrowserById("air-linux-osx-win"));
    $.addBrowser(V.getBrowserById("chrome4to5-linux-osx-win2003-win7plus-winvista-winxp"));
    $.addBrowser(V.getBrowserById("chrome6plus-linux-osx-win2003-win7plus-winvista-winxp"));
    $.addBrowser(V.getBrowserById("ff35-linux-win2003-win7plus-winvista-winxp"));
    $.addBrowser(V.getBrowserById("ff35-osx"));
    $.addBrowser(V.getBrowserById("ff36plus-linux-osx-win2003-win7plus-winvista-winxp"));
    $.addBrowser(V.getBrowserById("ie6to8-win2003-win7plus-winvista-winxp"));
    $.addBrowser(V.getBrowserById("ie9plus-win7plus-winvista"));
    $.addBrowser(V.getBrowserById("opera-linux-win2003-win7plus-winvista-winxp"));
    $.addBrowser(V.getBrowserById("opera-osx"));
    $.addBrowser(V.getBrowserById("safari-android-ipad-iphone-win2003-win7plus-winvista-winxp"));
    $.addBrowser(V.getBrowserById("safari-osx"));
    $.setFontFilterSet(W);
    if (Z && Z.ba.__webfonttypekitmodule__) {
        Z.I($);
        Z.load()
    } else
        window.Typekit.addKit($);
})(this, document);
window.Typekit.config = {
    "p": "//p.typekit.net/p.gif?s=1&k=rsq7tro&ht=tk&h={host}&f=1870.9578.9577.9576.9579&a=488218&_={_}"
};
;(function(window, document, undefined) {
    if (!document.querySelector) {
        document.documentElement.className += " wf-inactive";
        return;
    }
    function f(a) {
        this.b = a
    }
    f.prototype.toString = function() {
        return encodeURIComponent(h(this.b))
    }
    ;
    function k(a, b) {
        this.b = b
    }
    k.prototype.toString = function() {
        for (var a = [], b = 0; b < this.b.length; b++)
            for (var d = this.b[b], c = d.f, d = d.f, g = 0; g < c.length; g++) {
                var e;
                a: {
                    for (e = 0; e < d.length; e++)
                        if (c[g] === d[e]) {
                            e = !0;
                            break a
                        }
                    e = !1
                }
                a.push(e ? 1 : 0)
            }
        a = a.join("");
        a = a.replace(/^0+/, "");
        b = [];
        for (c = a.length; 0 < c; c -= 4)
            b.unshift(parseInt(a.slice(0 > c - 4 ? 0 : c - 4, c), 2).toString(16));
        return b.join("")
    }
    ;
    var l = {};
    l.a = l.d = l.l = l.j = function() {
        return []
    }
    ;
    l.i = function(a, b, d) {
        return [new f(a), new k(0,d)]
    }
    ;
    l.k = function(a) {
        return [new f(a)]
    }
    ;
    function m(a) {
        this.c = a
    }
    m.prototype.b = function() {
        var a = {
            host: n,
            _: (+new Date).toString()
        }
          , b = this.c.replace(/\{\/?([^*}]*)(\*?)\}/g, function(b, c, g) {
            return g && a[c] ? "/" + a[c].join("/") : a[c] || ""
        });
        b.match(/^\/\//) && (b = "https:" + b);
        return b.replace(/\/*\?*($|\?)/, "$1")
    }
    ;
    function p() {
        var a = window;
        this.b = this.c = a
    }
    function h(a) {
        return a.b.location.hostname || a.c.location.hostname
    }
    ;window.Typekit || (window.Typekit = {});
    var q = window.Typekit.config;
    if (q.p) {
        var r = new m(q.p)
          , n = encodeURIComponent(h(new p))
          , t = new Image(1,1)
          , u = !1;
        t.src = r.b();
        t.onload = function() {
            u = !0;
            t.onload = null
        }
        ;
        setTimeout(function() {
            u || (t.src = "about:blank",
            t.onload = null )
        }, 3E3)
    }
    ;
}(this, document));
