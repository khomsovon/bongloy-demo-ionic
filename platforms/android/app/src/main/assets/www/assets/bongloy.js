! function(e) {
    function n(o) {
        if (t[o]) return t[o].exports;
        var r = t[o] = {
            exports: {},
            id: o,
            loaded: !1
        };
        return e[o].call(r.exports, r, r.exports, n), r.loaded = !0, r.exports
    }
    var t = {};
    return n.m = e, n.c = t, n.p = "", n(0)
}([function(e, n, t) {
    "use strict";
    Object.defineProperty(n, "__esModule", {
        value: !0
    });
    var o = t(1),
        r = new o.Client;
    window.Bongloy || (window.Bongloy = r)
}, function(e, n, t) {
    "use strict";
    Object.defineProperty(n, "__esModule", {
        value: !0
    }), t(3);
    var o = t(2),
        r = function() {
            function e() {
                this.config = o.config, this.setPublishableKey = this.setPublicKey.bind(this), this.easyXDM = easyXDM.noConflict("Bongloy");
                var e = this;
                this.card = {
                    createToken: function() {
                        var n = [].slice.call(arguments);
                        e.createToken.apply(e, ["card"].concat(n))
                    }
                }
            }
            return e.prototype.createRpc = function(e) {
                if (this.rpc) return this.rpc;
                var n = setTimeout(function() {
                    this.rpc && "function" == typeof this.rpc.destroy && (this.rpc.destroy(), this.rpc = null), "function" == typeof e && e()
                }, 1e4);
                return this.rpc = new this.easyXDM.Rpc({
                    remote: this.config.vaultUrl + "/provider",
                    swf: this.config.assetUrl + "/easyxdm.swf",
                    onReady: function() {
                        clearTimeout(n)
                    }
                }, {
                    remote: {
                        createToken: {}
                    }
                }), this.rpc
            }, e.prototype.setPublicKey = function(e) {
                return this.publicKey = e, this.publicKey
            }, e.prototype.createToken = function(e, n, t) {
                var o = {};
                o[e] = n, this.createRpc(function() {
                    t(0, {
                        code: "rpc_error",
                        message: "unable to connect to provider after timeout"
                    })
                }).createToken(this.publicKey, o, function(e) {
                    t(e.status, e.data)
                }, function(e) {
                    t(e.data.status, e.data.data)
                })
            }, e
        }();
    n.Client = r
}, function(e, n) {
    "use strict";
    Object.defineProperty(n, "__esModule", {
        value: !0
    }), n.config = {
        vaultUrl: "https://api.bongloy.com",
        assetUrl: "https://js.bongloy.com"
    }
}, function(e, n) {
    ! function(e, n, t, o, r, a) {
        function i(e, n) {
            var t = typeof e[n];
            return "function" == t || !("object" != t || !e[n]) || "unknown" == t
        }

        function c(e, n) {
            return !("object" != typeof e[n] || !e[n])
        }

        function s(e) {
            return "[object Array]" === Object.prototype.toString.call(e)
        }

        function l() {
            var e = "Shockwave Flash",
                n = "application/x-shockwave-flash";
            if (!w(navigator.plugins) && "object" == typeof navigator.plugins[e]) {
                var t = navigator.plugins[e].description;
                t && !w(navigator.mimeTypes) && navigator.mimeTypes[n] && navigator.mimeTypes[n].enabledPlugin && (R = t.match(/\d+/g))
            }
            if (!R) {
                var o;
                try {
                    o = new ActiveXObject("ShockwaveFlash.ShockwaveFlash"), R = Array.prototype.slice.call(o.GetVariable("$version").match(/(\d+),(\d+),(\d+),(\d+)/), 1), o = null
                } catch (e) {}
            }
            if (!R) return !1;
            var r = parseInt(R[0], 10),
                a = parseInt(R[1], 10);
            return S = r > 9 && a > 0, !0
        }

        function u() {
            if (!W) {
                W = !0;
                for (var e = 0; e < z.length; e++) z[e]();
                z.length = 0
            }
        }

        function p(e, n) {
            return W ? void e.call(n) : void z.push(function() {
                e.call(n)
            })
        }

        function f() {
            var e = parent;
            if ("" !== L)
                for (var n = 0, t = L.split("."); n < t.length; n++) e = e[t[n]];
            return e.easyXDM
        }

        function d(n) {
            return e.easyXDM = A, L = n, L && (I = "easyXDM_" + L.replace(".", "_") + "_"), J
        }

        function h(e) {
            return e.match(H)[3]
        }

        function m(e) {
            return e.match(H)[4] || ""
        }

        function g(e) {
            var n = e.toLowerCase().match(H),
                t = n[2],
                o = n[3],
                r = n[4] || "";
            return ("http:" == t && ":80" == r || "https:" == t && ":443" == r) && (r = ""), t + "//" + o + r
        }

        function v(e) {
            if (e = e.replace(B, "$1/"), !e.match(/^(http||https):\/\//)) {
                var n = "/" === e.substring(0, 1) ? "" : t.pathname;
                "/" !== n.substring(n.length - 1) && (n = n.substring(0, n.lastIndexOf("/") + 1)), e = t.protocol + "//" + t.host + n + e
            }
            for (; j.test(e);) e = e.replace(j, "");
            return e
        }

        function y(e, n) {
            var t = "",
                o = e.indexOf("#");
            o !== -1 && (t = e.substring(o), e = e.substring(0, o));
            var r = [];
            for (var i in n) n.hasOwnProperty(i) && r.push(i + "=" + a(n[i]));
            return e + (X ? "#" : e.indexOf("?") == -1 ? "?" : "&") + r.join("&") + t
        }

        function w(e) {
            return "undefined" == typeof e
        }

        function b(e, n, t) {
            var o;
            for (var r in n) n.hasOwnProperty(r) && (r in e ? (o = n[r], "object" == typeof o ? b(e[r], o, t) : t || (e[r] = n[r])) : e[r] = n[r]);
            return e
        }

        function k() {
            var e = n.body.appendChild(n.createElement("form")),
                t = e.appendChild(n.createElement("input"));
            t.name = I + "TEST" + N, P = t !== e.elements[t.name], n.body.removeChild(e)
        }

        function _(e) {
            w(P) && k();
            var t;
            P ? t = n.createElement('<iframe name="' + e.props.name + '"/>') : (t = n.createElement("IFRAME"), t.name = e.props.name), t.id = t.name = e.props.name, delete e.props.name, "string" == typeof e.container && (e.container = n.getElementById(e.container)), e.container || (b(t.style, {
                position: "absolute",
                top: "-2000px",
                left: "0px"
            }), e.container = n.body);
            var o = e.props.src;
            if (e.props.src = "javascript:false", b(t, e.props), t.border = t.frameBorder = 0, t.allowTransparency = !0, e.container.appendChild(t), e.onLoad && C(t, "load", e.onLoad), e.usePost) {
                var r, a = e.container.appendChild(n.createElement("form"));
                if (a.target = t.name, a.action = o, a.method = "POST", "object" == typeof e.usePost)
                    for (var i in e.usePost) e.usePost.hasOwnProperty(i) && (P ? r = n.createElement('<input name="' + i + '"/>') : (r = n.createElement("INPUT"), r.name = i), r.value = e.usePost[i], a.appendChild(r));
                a.submit(), a.parentNode.removeChild(a)
            } else t.src = o;
            return e.props.src = o, t
        }

        function x(e, n) {
            "string" == typeof e && (e = [e]);
            for (var t, o = e.length; o--;)
                if (t = e[o], t = new RegExp("^" == t.substr(0, 1) ? t : "^" + t.replace(/(\*)/g, ".$1").replace(/\?/g, ".") + "$"), t.test(n)) return !0;
            return !1
        }

        function O(o) {
            var r, a = o.protocol;
            if (o.isHost = o.isHost || w(q.xdm_p), X = o.hash || !1, o.props || (o.props = {}), o.isHost) o.remote = v(o.remote), o.channel = o.channel || "default" + N++, o.secret = Math.random().toString(16).substring(2), w(a) && (a = g(t.href) == g(o.remote) ? "4" : i(e, "postMessage") || i(n, "postMessage") ? "1" : o.swf && i(e, "ActiveXObject") && l() ? "6" : "Gecko" === navigator.product && "frameElement" in e && navigator.userAgent.indexOf("WebKit") == -1 ? "5" : o.remoteHelper ? "2" : "0");
            else if (o.channel = q.xdm_c.replace(/["'<>\\]/g, ""), o.secret = q.xdm_s, o.remote = q.xdm_e.replace(/["'<>\\]/g, ""), a = q.xdm_p, o.acl && !x(o.acl, o.remote)) throw new Error("Access denied for " + o.remote);
            switch (o.protocol = a, a) {
                case "0":
                    if (b(o, {
                            interval: 100,
                            delay: 2e3,
                            useResize: !0,
                            useParent: !1,
                            usePolling: !1
                        }, !0), o.isHost) {
                        if (!o.local) {
                            for (var c, s = t.protocol + "//" + t.host, u = n.body.getElementsByTagName("img"), p = u.length; p--;)
                                if (c = u[p], c.src.substring(0, s.length) === s) {
                                    o.local = c.src;
                                    break
                                } o.local || (o.local = e)
                        }
                        var f = {
                            xdm_c: o.channel,
                            xdm_p: 0
                        };
                        o.local === e ? (o.usePolling = !0, o.useParent = !0, o.local = t.protocol + "//" + t.host + t.pathname + t.search, f.xdm_e = o.local, f.xdm_pa = 1) : f.xdm_e = v(o.local), o.container && (o.useResize = !1, f.xdm_po = 1), o.remote = y(o.remote, f)
                    } else b(o, {
                        channel: q.xdm_c,
                        remote: q.xdm_e,
                        useParent: !w(q.xdm_pa),
                        usePolling: !w(q.xdm_po),
                        useResize: !o.useParent && o.useResize
                    });
                    r = [new J.stack.HashTransport(o), new J.stack.ReliableBehavior({}), new J.stack.QueueBehavior({
                        encode: !0,
                        maxLength: 4e3 - o.remote.length
                    }), new J.stack.VerifyBehavior({
                        initiate: o.isHost
                    })];
                    break;
                case "1":
                    r = [new J.stack.PostMessageTransport(o)];
                    break;
                case "2":
                    o.isHost && (o.remoteHelper = v(o.remoteHelper)), r = [new J.stack.NameTransport(o), new J.stack.QueueBehavior, new J.stack.VerifyBehavior({
                        initiate: o.isHost
                    })];
                    break;
                case "3":
                    r = [new J.stack.NixTransport(o)];
                    break;
                case "4":
                    r = [new J.stack.SameOriginTransport(o)];
                    break;
                case "5":
                    r = [new J.stack.FrameElementTransport(o)];
                    break;
                case "6":
                    R || l(), r = [new J.stack.FlashTransport(o)]
            }
            return r.push(new J.stack.QueueBehavior({
                lazy: o.lazy,
                remove: !0
            })), r
        }

        function M(e) {
            for (var n, t = {
                    incoming: function(e, n) {
                        this.up.incoming(e, n)
                    },
                    outgoing: function(e, n) {
                        this.down.outgoing(e, n)
                    },
                    callback: function(e) {
                        this.up.callback(e)
                    },
                    init: function() {
                        this.down.init()
                    },
                    destroy: function() {
                        this.down.destroy()
                    }
                }, o = 0, r = e.length; o < r; o++) n = e[o], b(n, t, !0), 0 !== o && (n.down = e[o - 1]), o !== r - 1 && (n.up = e[o + 1]);
            return n
        }

        function T(e) {
            e.up.down = e.down, e.down.up = e.up, e.up = e.down = null
        }
        var P, R, S, C, E, F = this,
            N = Math.floor(1e4 * Math.random()),
            D = Function.prototype,
            H = /^((http.?:)\/\/([^:\/\s]+)(:\d+)*)/,
            j = /[\-\w]+\/\.\.\//,
            B = /([^:])\/\//g,
            L = "",
            J = {},
            A = e.easyXDM,
            I = "easyXDM_",
            X = !1;
        if (i(e, "addEventListener")) C = function(e, n, t) {
            e.addEventListener(n, t, !1)
        }, E = function(e, n, t) {
            e.removeEventListener(n, t, !1)
        };
        else {
            if (!i(e, "attachEvent")) throw new Error("Browser not supported");
            C = function(e, n, t) {
                e.attachEvent("on" + n, t)
            }, E = function(e, n, t) {
                e.detachEvent("on" + n, t)
            }
        }
        var U, W = !1,
            z = [];
        if ("readyState" in n ? (U = n.readyState, W = "complete" == U || ~navigator.userAgent.indexOf("AppleWebKit/") && ("loaded" == U || "interactive" == U)) : W = !!n.body, !W) {
            if (i(e, "addEventListener")) C(n, "DOMContentLoaded", u);
            else if (C(n, "readystatechange", function() {
                    "complete" == n.readyState && u()
                }), n.documentElement.doScroll && e === top) {
                var K = function() {
                    if (!W) {
                        try {
                            n.documentElement.doScroll("left")
                        } catch (e) {
                            return void o(K, 1)
                        }
                        u()
                    }
                };
                K()
            }
            C(e, "load", u)
        }
        var q = function(e) {
                e = e.substring(1).split("&");
                for (var n, t = {}, o = e.length; o--;) n = e[o].split("="), t[n[0]] = r(n[1]);
                return t
            }(/xdm_e=/.test(t.search) ? t.search : t.hash),
            V = function() {
                var e = {},
                    n = {
                        a: [1, 2, 3]
                    },
                    t = '{"a":[1,2,3]}';
                return "undefined" != typeof JSON && "function" == typeof JSON.stringify && JSON.stringify(n).replace(/\s/g, "") === t ? JSON : (Object.toJSON && Object.toJSON(n).replace(/\s/g, "") === t && (e.stringify = Object.toJSON), "function" == typeof String.prototype.evalJSON && (n = t.evalJSON(), n.a && 3 === n.a.length && 3 === n.a[2] && (e.parse = function(e) {
                    return e.evalJSON()
                })), e.stringify && e.parse ? (V = function() {
                    return e
                }, e) : null)
            };
        b(J, {
                version: "2.4.19.3",
                query: q,
                stack: {},
                apply: b,
                getJSONObject: V,
                whenReady: p,
                noConflict: d
            }), J.DomHelper = {
                on: C,
                un: E,
                requiresJSON: function(t) {
                    c(e, "JSON") || n.write('<script type="text/javascript" src="' + t + '"></script>')
                }
            },
            function() {
                var e = {};
                J.Fn = {
                    set: function(n, t) {
                        e[n] = t
                    },
                    get: function(n, t) {
                        if (e.hasOwnProperty(n)) {
                            var o = e[n];
                            return t && delete e[n], o
                        }
                    }
                }
            }(), J.Socket = function(e) {
                var n = M(O(e).concat([{
                        incoming: function(n, t) {
                            e.onMessage(n, t)
                        },
                        callback: function(n) {
                            e.onReady && e.onReady(n)
                        }
                    }])),
                    t = g(e.remote);
                this.origin = g(e.remote), this.destroy = function() {
                    n.destroy()
                }, this.postMessage = function(e) {
                    n.outgoing(e, t)
                }, n.init()
            }, J.Rpc = function(e, n) {
                if (n.local)
                    for (var t in n.local)
                        if (n.local.hasOwnProperty(t)) {
                            var o = n.local[t];
                            "function" == typeof o && (n.local[t] = {
                                method: o
                            })
                        } var r = M(O(e).concat([new J.stack.RpcBehavior(this, n), {
                    callback: function(n) {
                        e.onReady && e.onReady(n)
                    }
                }]));
                this.origin = g(e.remote), this.destroy = function() {
                    r.destroy()
                }, r.init()
            }, J.stack.SameOriginTransport = function(e) {
                var n, r, a, i;
                return n = {
                    outgoing: function(e, n, t) {
                        a(e), t && t()
                    },
                    destroy: function() {
                        r && (r.parentNode.removeChild(r), r = null)
                    },
                    onDOMReady: function() {
                        i = g(e.remote), e.isHost ? (b(e.props, {
                            src: y(e.remote, {
                                xdm_e: t.protocol + "//" + t.host + t.pathname,
                                xdm_c: e.channel,
                                xdm_p: 4
                            }),
                            name: I + e.channel + "_provider"
                        }), r = _(e), J.Fn.set(e.channel, function(e) {
                            return a = e, o(function() {
                                    n.up.callback(!0)
                                }, 0),
                                function(e) {
                                    n.up.incoming(e, i)
                                }
                        })) : (a = f().Fn.get(e.channel, !0)(function(e) {
                            n.up.incoming(e, i)
                        }), o(function() {
                            n.up.callback(!0)
                        }, 0))
                    },
                    init: function() {
                        p(n.onDOMReady, n)
                    }
                }
            }, J.stack.FlashTransport = function(e) {
                function r(e, n) {
                    o(function() {
                        c.up.incoming(e, l)
                    }, 0)
                }

                function i(t) {
                    var o = e.swf + "?host=" + e.isHost,
                        r = "easyXDM_swf_" + Math.floor(1e4 * Math.random());
                    J.Fn.set("flash_loaded" + t.replace(/[\-.]/g, "_"), function() {
                        J.stack.FlashTransport[t].swf = u = f.firstChild;
                        for (var e = J.stack.FlashTransport[t].queue, n = 0; n < e.length; n++) e[n]();
                        e.length = 0
                    }), e.swfContainer ? f = "string" == typeof e.swfContainer ? n.getElementById(e.swfContainer) : e.swfContainer : (f = n.createElement("div"), b(f.style, S && e.swfNoThrottle ? {
                        height: "20px",
                        width: "20px",
                        position: "fixed",
                        right: 0,
                        top: 0
                    } : {
                        height: "1px",
                        width: "1px",
                        position: "absolute",
                        overflow: "hidden",
                        right: 0,
                        top: 0
                    }), n.body.appendChild(f));
                    var i = "callback=flash_loaded" + a(t.replace(/[\-.]/g, "_")) + "&proto=" + F.location.protocol + "&domain=" + a(h(F.location.href)) + "&port=" + a(m(F.location.href)) + "&ns=" + a(L);
                    f.innerHTML = "<object height='20' width='20' type='application/x-shockwave-flash' id='" + r + "' data='" + o + "'><param name='allowScriptAccess' value='always'></param><param name='wmode' value='transparent'><param name='movie' value='" + o + "'></param><param name='flashvars' value='" + i + "'></param><embed type='application/x-shockwave-flash' FlashVars='" + i + "' allowScriptAccess='always' wmode='transparent' src='" + o + "' height='1' width='1'></embed></object>"
                }
                var c, s, l, u, f;
                return c = {
                    outgoing: function(n, t, o) {
                        u.postMessage(e.channel, n.toString()), o && o()
                    },
                    destroy: function() {
                        try {
                            u.destroyChannel(e.channel)
                        } catch (e) {}
                        u = null, s && (s.parentNode.removeChild(s), s = null)
                    },
                    onDOMReady: function() {
                        l = e.remote, J.Fn.set("flash_" + e.channel + "_init", function() {
                            o(function() {
                                c.up.callback(!0)
                            })
                        }), J.Fn.set("flash_" + e.channel + "_onMessage", r), e.swf = v(e.swf);
                        var n = h(e.swf),
                            a = function() {
                                J.stack.FlashTransport[n].init = !0, u = J.stack.FlashTransport[n].swf, u.createChannel(e.channel, e.secret, g(e.remote), e.isHost), e.isHost && (S && e.swfNoThrottle && b(e.props, {
                                    position: "fixed",
                                    right: 0,
                                    top: 0,
                                    height: "20px",
                                    width: "20px"
                                }), b(e.props, {
                                    src: y(e.remote, {
                                        xdm_e: g(t.href),
                                        xdm_c: e.channel,
                                        xdm_p: 6,
                                        xdm_s: e.secret
                                    }),
                                    name: I + e.channel + "_provider"
                                }), s = _(e))
                            };
                        J.stack.FlashTransport[n] && J.stack.FlashTransport[n].init ? a() : J.stack.FlashTransport[n] ? J.stack.FlashTransport[n].queue.push(a) : (J.stack.FlashTransport[n] = {
                            queue: [a]
                        }, i(n))
                    },
                    init: function() {
                        p(c.onDOMReady, c)
                    }
                }
            }, J.stack.PostMessageTransport = function(n) {
                function r(e) {
                    if (e.origin) return g(e.origin);
                    if (e.uri) return g(e.uri);
                    if (e.domain) return t.protocol + "//" + e.domain;
                    throw "Unable to retrieve the origin of the event"
                }

                function a(e) {
                    var t = r(e);
                    t == l && e.data.substring(0, n.channel.length + 1) == n.channel + " " && i.up.incoming(e.data.substring(n.channel.length + 1), t)
                }
                var i, c, s, l;
                return i = {
                    outgoing: function(e, t, o) {
                        s.postMessage(n.channel + " " + e, t || l), o && o()
                    },
                    destroy: function() {
                        E(e, "message", a), c && (s = null, c.parentNode.removeChild(c), c = null)
                    },
                    onDOMReady: function() {
                        if (l = g(n.remote), n.isHost) {
                            var r = function(t) {
                                t.data == n.channel + "-ready" && (s = "postMessage" in c.contentWindow ? c.contentWindow : c.contentWindow.document, E(e, "message", r), C(e, "message", a), o(function() {
                                    i.up.callback(!0)
                                }, 0))
                            };
                            C(e, "message", r), b(n.props, {
                                src: y(n.remote, {
                                    xdm_e: g(t.href),
                                    xdm_c: n.channel,
                                    xdm_p: 1
                                }),
                                name: I + n.channel + "_provider"
                            }), c = _(n)
                        } else C(e, "message", a), s = "postMessage" in e.parent ? e.parent : e.parent.document, s.postMessage(n.channel + "-ready", l), o(function() {
                            i.up.callback(!0)
                        }, 0)
                    },
                    init: function() {
                        p(i.onDOMReady, i)
                    }
                }
            }, J.stack.FrameElementTransport = function(r) {
                var a, i, c, s;
                return a = {
                    outgoing: function(e, n, t) {
                        c.call(this, e), t && t()
                    },
                    destroy: function() {
                        i && (i.parentNode.removeChild(i), i = null)
                    },
                    onDOMReady: function() {
                        s = g(r.remote), r.isHost ? (b(r.props, {
                            src: y(r.remote, {
                                xdm_e: g(t.href),
                                xdm_c: r.channel,
                                xdm_p: 5
                            }),
                            name: I + r.channel + "_provider"
                        }), i = _(r), i.fn = function(e) {
                            return delete i.fn, c = e, o(function() {
                                    a.up.callback(!0)
                                }, 0),
                                function(e) {
                                    a.up.incoming(e, s)
                                }
                        }) : (n.referrer && g(n.referrer) != q.xdm_e && (e.top.location = q.xdm_e), c = e.frameElement.fn(function(e) {
                            a.up.incoming(e, s)
                        }), a.up.callback(!0))
                    },
                    init: function() {
                        p(a.onDOMReady, a)
                    }
                }
            }, J.stack.NameTransport = function(e) {
                function n(n) {
                    var t = e.remoteHelper + (c ? "#_3" : "#_2") + e.channel;
                    s.contentWindow.sendMessage(n, t)
                }

                function t() {
                    c ? 2 !== ++u && c || i.up.callback(!0) : (n("ready"), i.up.callback(!0))
                }

                function r(e) {
                    i.up.incoming(e, d)
                }

                function a() {
                    f && o(function() {
                        f(!0)
                    }, 0)
                }
                var i, c, s, l, u, f, d, h;
                return i = {
                    outgoing: function(e, t, o) {
                        f = o, n(e)
                    },
                    destroy: function() {
                        s.parentNode.removeChild(s), s = null, c && (l.parentNode.removeChild(l), l = null)
                    },
                    onDOMReady: function() {
                        c = e.isHost, u = 0, d = g(e.remote), e.local = v(e.local), c ? (J.Fn.set(e.channel, function(n) {
                            c && "ready" === n && (J.Fn.set(e.channel, r), t())
                        }), h = y(e.remote, {
                            xdm_e: e.local,
                            xdm_c: e.channel,
                            xdm_p: 2
                        }), b(e.props, {
                            src: h + "#" + e.channel,
                            name: I + e.channel + "_provider"
                        }), l = _(e)) : (e.remoteHelper = e.remote, J.Fn.set(e.channel, r));
                        var n = function() {
                            var r = s || this;
                            E(r, "load", n), J.Fn.set(e.channel + "_load", a),
                                function e() {
                                    "function" == typeof r.contentWindow.sendMessage ? t() : o(e, 50)
                                }()
                        };
                        s = _({
                            props: {
                                src: e.local + "#_4" + e.channel
                            },
                            onLoad: n
                        })
                    },
                    init: function() {
                        p(i.onDOMReady, i)
                    }
                }
            }, J.stack.HashTransport = function(n) {
                function t(e) {
                    if (m) {
                        var t = n.remote + "#" + d++ + "_" + e;
                        (s || !v ? m.contentWindow : m).location = t
                    }
                }

                function r(e) {
                    f = e, c.up.incoming(f.substring(f.indexOf("_") + 1), y)
                }

                function a() {
                    if (h) {
                        var e = h.location.href,
                            n = "",
                            t = e.indexOf("#");
                        t != -1 && (n = e.substring(t)), n && n != f && r(n)
                    }
                }

                function i() {
                    l = setInterval(a, u)
                }
                var c, s, l, u, f, d, h, m, v, y;
                return c = {
                    outgoing: function(e, n) {
                        t(e)
                    },
                    destroy: function() {
                        e.clearInterval(l), !s && v || m.parentNode.removeChild(m), m = null
                    },
                    onDOMReady: function() {
                        if (s = n.isHost, u = n.interval, f = "#" + n.channel, d = 0, v = n.useParent, y = g(n.remote), s) {
                            if (b(n.props, {
                                    src: n.remote,
                                    name: I + n.channel + "_provider"
                                }), v) n.onLoad = function() {
                                h = e, i(), c.up.callback(!0)
                            };
                            else {
                                var t = 0,
                                    r = n.delay / 50;
                                ! function e() {
                                    if (++t > r) throw new Error("Unable to reference listenerwindow");
                                    try {
                                        h = m.contentWindow.frames[I + n.channel + "_consumer"]
                                    } catch (e) {}
                                    h ? (i(), c.up.callback(!0)) : o(e, 50)
                                }()
                            }
                            m = _(n)
                        } else h = e, i(), v ? (m = parent, c.up.callback(!0)) : (b(n, {
                            props: {
                                src: n.remote + "#" + n.channel + new Date,
                                name: I + n.channel + "_consumer"
                            },
                            onLoad: function() {
                                c.up.callback(!0)
                            }
                        }), m = _(n))
                    },
                    init: function() {
                        p(c.onDOMReady, c)
                    }
                }
            }, J.stack.ReliableBehavior = function(e) {
                var n, t, o = 0,
                    r = 0,
                    a = "";
                return n = {
                    incoming: function(e, i) {
                        var c = e.indexOf("_"),
                            s = e.substring(0, c).split(",");
                        e = e.substring(c + 1), s[0] == o && (a = "", t && t(!0)), e.length > 0 && (n.down.outgoing(s[1] + "," + o + "_" + a, i), r != s[1] && (r = s[1], n.up.incoming(e, i)))
                    },
                    outgoing: function(e, i, c) {
                        a = e, t = c, n.down.outgoing(r + "," + ++o + "_" + e, i)
                    }
                }
            }, J.stack.QueueBehavior = function(e) {
                function n() {
                    if (e.remove && 0 === c.length) return void T(t);
                    if (!s && 0 !== c.length && !i) {
                        s = !0;
                        var r = c.shift();
                        t.down.outgoing(r.data, r.origin, function(e) {
                            s = !1, r.callback && o(function() {
                                r.callback(e)
                            }, 0), n()
                        })
                    }
                }
                var t, i, c = [],
                    s = !0,
                    l = "",
                    u = 0,
                    p = !1,
                    f = !1;
                return t = {
                    init: function() {
                        w(e) && (e = {}), e.maxLength && (u = e.maxLength, f = !0), e.lazy ? p = !0 : t.down.init()
                    },
                    callback: function(e) {
                        s = !1;
                        var o = t.up;
                        n(), o.callback(e)
                    },
                    incoming: function(n, o) {
                        if (f) {
                            var a = n.indexOf("_"),
                                i = parseInt(n.substring(0, a), 10);
                            l += n.substring(a + 1), 0 === i && (e.encode && (l = r(l)), t.up.incoming(l, o), l = "")
                        } else t.up.incoming(n, o)
                    },
                    outgoing: function(o, r, i) {
                        e.encode && (o = a(o));
                        var s, l = [];
                        if (f) {
                            for (; 0 !== o.length;) s = o.substring(0, u), o = o.substring(s.length), l.push(s);
                            for (; s = l.shift();) c.push({
                                data: l.length + "_" + s,
                                origin: r,
                                callback: 0 === l.length ? i : null
                            })
                        } else c.push({
                            data: o,
                            origin: r,
                            callback: i
                        });
                        p ? t.down.init() : n()
                    },
                    destroy: function() {
                        i = !0, t.down.destroy()
                    }
                }
            }, J.stack.VerifyBehavior = function(e) {
                function n() {
                    o = Math.random().toString(16).substring(2), t.down.outgoing(o)
                }
                var t, o, r;
                return t = {
                    incoming: function(a, i) {
                        var c = a.indexOf("_");
                        c === -1 ? a === o ? t.up.callback(!0) : r || (r = a, e.initiate || n(), t.down.outgoing(a)) : a.substring(0, c) === r && t.up.incoming(a.substring(c + 1), i)
                    },
                    outgoing: function(e, n, r) {
                        t.down.outgoing(o + "_" + e, n, r)
                    },
                    callback: function(t) {
                        e.initiate && n()
                    }
                }
            }, J.stack.RpcBehavior = function(e, n) {
                function t(e) {
                    e.jsonrpc = "2.0", a.down.outgoing(i.stringify(e))
                }

                function o(e, n) {
                    var o = Array.prototype.slice;
                    return function() {
                        var r, a = arguments.length,
                            i = {
                                method: n
                            };
                        a > 0 && "function" == typeof arguments[a - 1] ? (a > 1 && "function" == typeof arguments[a - 2] ? (r = {
                            success: arguments[a - 2],
                            error: arguments[a - 1]
                        }, i.params = o.call(arguments, 0, a - 2)) : (r = {
                            success: arguments[a - 1]
                        }, i.params = o.call(arguments, 0, a - 1)), l["" + ++c] = r, i.id = c) : i.params = o.call(arguments, 0), e.namedParams && 1 === i.params.length && (i.params = i.params[0]), t(i)
                    }
                }

                function r(e, n, o, r) {
                    if (!o) return void(n && t({
                        id: n,
                        error: {
                            code: -32601,
                            message: "Procedure not found."
                        }
                    }));
                    var a, i;
                    n ? (a = function(e) {
                        a = D, t({
                            id: n,
                            result: e
                        })
                    }, i = function(e, o) {
                        i = D;
                        var r = {
                            id: n,
                            error: {
                                code: -32099,
                                message: e
                            }
                        };
                        o && (r.error.data = o), t(r)
                    }) : a = i = D, s(r) || (r = [r]);
                    try {
                        var c = o.method.apply(o.scope, r.concat([a, i]));
                        w(c) || a(c)
                    } catch (e) {
                        i(e.message)
                    }
                }
                var a, i = n.serializer || V(),
                    c = 0,
                    l = {};
                return a = {
                    incoming: function(e, o) {
                        var a = i.parse(e);
                        if (a.method) n.handle ? n.handle(a, t) : r(a.method, a.id, n.local[a.method], a.params);
                        else {
                            var c = l[a.id];
                            a.error ? c.error && c.error(a.error) : c.success && c.success(a.result), delete l[a.id]
                        }
                    },
                    init: function() {
                        if (n.remote)
                            for (var t in n.remote) n.remote.hasOwnProperty(t) && (e[t] = o(n.remote[t], t));
                        a.down.init()
                    },
                    destroy: function() {
                        for (var t in n.remote) n.remote.hasOwnProperty(t) && e.hasOwnProperty(t) && delete e[t];
                        a.down.destroy()
                    }
                }
            }, F.easyXDM = J
    }(window, document, location, window.setTimeout, decodeURIComponent, encodeURIComponent)
}]);

Bongloy.config = {
    vaultUrl: "https://api.bongloy.com",
    assetUrl: "https://js.bongloy.com"
};
