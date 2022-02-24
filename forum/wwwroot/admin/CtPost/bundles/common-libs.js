! function(n, t) { "use strict"; "object" == typeof module && "object" == typeof module.exports ? module.exports = n.document ? t(n, !0) : function(n) { if (!n.document) throw new Error("jQuery requires a window with a document"); return t(n) } : t(n) }("undefined" != typeof window ? window : this, function(n, t) {
    "use strict";

    function hr(n, t, i) {
        var r, u = (t = t || f).createElement("script");
        if (u.text = n, i)
            for (r in df) i[r] && (u[r] = i[r]);
        t.head.appendChild(u).parentNode.removeChild(u)
    }

    function it(n) { return null == n ? n + "" : "object" == typeof n || "function" == typeof n ? bt[or.call(n)] || "object" : typeof n }

    function hi(n) {
        var t = !!n && "length" in n && n.length,
            i = it(n);
        return !u(n) && !tt(n) && ("array" === i || 0 === t || "number" == typeof t && t > 0 && t - 1 in n)
    }

    function v(n, t) { return n.nodeName && n.nodeName.toLowerCase() === t.toLowerCase() }

    function li(n, t, r) { return u(t) ? i.grep(n, function(n, i) { return !!t.call(n, i, n) !== r }) : t.nodeType ? i.grep(n, function(n) { return n === t !== r }) : "string" != typeof t ? i.grep(n, function(n) { return wt.call(t, n) > -1 !== r }) : i.filter(t, n, r) }

    function wr(n, t) { while ((n = n[t]) && 1 !== n.nodeType); return n }

    function ne(n) { var t = {}; return i.each(n.match(l) || [], function(n, i) { t[i] = !0 }), t }

    function ut(n) { return n }

    function dt(n) { throw n; }

    function br(n, t, i, r) { var f; try { n && u(f = n.promise) ? f.call(n).done(t).fail(i) : n && u(f = n.then) ? f.call(n, t, i) : t.apply(void 0, [n].slice(r)) } catch (n) { i.apply(void 0, [n]) } }

    function ni() {
        f.removeEventListener("DOMContentLoaded", ni);
        n.removeEventListener("load", ni);
        i.ready()
    }

    function re(n, t) { return t.toUpperCase() }

    function y(n) { return n.replace(te, "ms-").replace(ie, re) }

    function at() { this.expando = i.expando + at.uid++ }

    function ee(n) { return "true" === n || "false" !== n && ("null" === n ? null : n === +n + "" ? +n : ue.test(n) ? JSON.parse(n) : n) }

    function dr(n, t, i) {
        var r;
        if (void 0 === i && 1 === n.nodeType)
            if (r = "data-" + t.replace(fe, "-$&").toLowerCase(), "string" == typeof(i = n.getAttribute(r))) {
                try { i = ee(i) } catch (n) {}
                o.set(n, t, i)
            } else i = void 0;
        return i
    }

    function tu(n, t, r, u) {
        var s, h, c = 20,
            l = u ? function() { return u.cur() } : function() { return i.css(n, t, "") },
            o = l(),
            e = r && r[3] || (i.cssNumber[t] ? "" : "px"),
            f = (i.cssNumber[t] || "px" !== e && +o) && vt.exec(i.css(n, t));
        if (f && f[3] !== e) {
            for (o /= 2, e = e || f[3], f = +o || 1; c--;) i.style(n, t, f + e), (1 - h) * (1 - (h = l() / o || .5)) <= 0 && (c = 0), f /= h;
            f *= 2;
            i.style(n, t, f + e);
            r = r || []
        }
        return r && (f = +f || +o || 0, s = r[1] ? f + (r[1] + 1) * r[2] : +r[2], u && (u.unit = e, u.start = f, u.end = s)), s
    }

    function oe(n) {
        var r, f = n.ownerDocument,
            u = n.nodeName,
            t = ai[u];
        return t || (r = f.body.appendChild(f.createElement(u)), t = i.css(r, "display"), r.parentNode.removeChild(r), "none" === t && (t = "block"), ai[u] = t, t)
    }

    function ft(n, t) { for (var e, u, f = [], i = 0, o = n.length; i < o; i++)(u = n[i]).style && (e = u.style.display, t ? ("none" === e && (f[i] = r.get(u, "display") || null, f[i] || (u.style.display = "")), "" === u.style.display && ti(u) && (f[i] = oe(u))) : "none" !== e && (f[i] = "none", r.set(u, "display", e))); for (i = 0; i < o; i++) null != f[i] && (n[i].style.display = f[i]); return n }

    function s(n, t) { var r; return r = "undefined" != typeof n.getElementsByTagName ? n.getElementsByTagName(t || "*") : "undefined" != typeof n.querySelectorAll ? n.querySelectorAll(t || "*") : [], void 0 === t || t && v(n, t) ? i.merge([n], r) : r }

    function vi(n, t) { for (var i = 0, u = n.length; i < u; i++) r.set(n[i], "globalEval", !t || r.get(t[i], "globalEval")) }

    function eu(n, t, r, u, f) {
        for (var e, o, p, a, w, v, h = t.createDocumentFragment(), y = [], l = 0, b = n.length; l < b; l++)
            if ((e = n[l]) || 0 === e)
                if ("object" === it(e)) i.merge(y, e.nodeType ? [e] : e);
                else if (fu.test(e)) {
            for (o = o || h.appendChild(t.createElement("div")), p = (ru.exec(e) || ["", ""])[1].toLowerCase(), a = c[p] || c._default, o.innerHTML = a[1] + i.htmlPrefilter(e) + a[2], v = a[0]; v--;) o = o.lastChild;
            i.merge(y, o.childNodes);
            (o = h.firstChild).textContent = ""
        } else y.push(t.createTextNode(e));
        for (h.textContent = "", l = 0; e = y[l++];)
            if (u && i.inArray(e, u) > -1) f && f.push(e);
            else if (w = i.contains(e.ownerDocument, e), o = s(h.appendChild(e), "script"), w && vi(o), r)
            for (v = 0; e = o[v++];) uu.test(e.type || "") && r.push(e);
        return h
    }

    function ri() { return !0 }

    function et() { return !1 }

    function su() { try { return f.activeElement } catch (n) {} }

    function yi(n, t, r, u, f, e) {
        var o, s;
        if ("object" == typeof t) { "string" != typeof r && (u = u || r, r = void 0); for (s in t) yi(n, s, r, u, t[s], e); return n }
        if (null == u && null == f ? (f = r, u = r = void 0) : null == f && ("string" == typeof r ? (f = u, u = void 0) : (f = u, u = r, r = void 0)), !1 === f) f = et;
        else if (!f) return n;
        return 1 === e && (o = f, (f = function(n) { return i().off(n), o.apply(this, arguments) }).guid = o.guid || (o.guid = i.guid++)), n.each(function() { i.event.add(this, t, f, u, r) })
    }

    function hu(n, t) { return v(n, "table") && v(11 !== t.nodeType ? t : t.firstChild, "tr") ? i(n).children("tbody")[0] || n : n }

    function ye(n) { return n.type = (null !== n.getAttribute("type")) + "/" + n.type, n }

    function pe(n) { return "true/" === (n.type || "").slice(0, 5) ? n.type = n.type.slice(5) : n.removeAttribute("type"), n }

    function cu(n, t) {
        var u, c, f, s, h, l, a, e;
        if (1 === t.nodeType) {
            if (r.hasData(n) && (s = r.access(n), h = r.set(t, s), e = s.events)) {
                delete h.handle;
                h.events = {};
                for (f in e)
                    for (u = 0, c = e[f].length; u < c; u++) i.event.add(t, f, e[f][u])
            }
            o.hasData(n) && (l = o.access(n), a = i.extend({}, l), o.set(t, a))
        }
    }

    function we(n, t) { var i = t.nodeName.toLowerCase(); "input" === i && iu.test(n.type) ? t.checked = n.checked : "input" !== i && "textarea" !== i || (t.defaultValue = n.defaultValue) }

    function ot(n, t, f, o) {
        t = er.apply([], t);
        var l, w, a, v, h, b, c = 0,
            y = n.length,
            d = y - 1,
            p = t[0],
            k = u(p);
        if (k || y > 1 && "string" == typeof p && !e.checkClone && ae.test(p)) return n.each(function(i) {
            var r = n.eq(i);
            k && (t[0] = p.call(this, i, r.html()));
            ot(r, t, f, o)
        });
        if (y && (l = eu(t, n[0].ownerDocument, !1, n, o), w = l.firstChild, 1 === l.childNodes.length && (l = w), w || o)) {
            for (v = (a = i.map(s(l, "script"), ye)).length; c < y; c++) h = l, c !== d && (h = i.clone(h, !0, !0), v && i.merge(a, s(h, "script"))), f.call(n[c], h, c);
            if (v)
                for (b = a[a.length - 1].ownerDocument, i.map(a, pe), c = 0; c < v; c++) h = a[c], uu.test(h.type || "") && !r.access(h, "globalEval") && i.contains(b, h) && (h.src && "module" !== (h.type || "").toLowerCase() ? i._evalUrl && i._evalUrl(h.src) : hr(h.textContent.replace(ve, ""), b, h))
        }
        return n
    }

    function lu(n, t, r) { for (var u, e = t ? i.filter(t, n) : n, f = 0; null != (u = e[f]); f++) r || 1 !== u.nodeType || i.cleanData(s(u)), u.parentNode && (r && i.contains(u.ownerDocument, u) && vi(s(u, "script")), u.parentNode.removeChild(u)); return n }

    function yt(n, t, r) { var o, s, h, f, u = n.style; return (r = r || ui(n)) && ("" !== (f = r.getPropertyValue(t) || r[t]) || i.contains(n.ownerDocument, n) || (f = i.style(n, t)), !e.pixelBoxStyles() && pi.test(f) && be.test(t) && (o = u.width, s = u.minWidth, h = u.maxWidth, u.minWidth = u.maxWidth = u.width = f, f = r.width, u.width = o, u.minWidth = s, u.maxWidth = h)), void 0 !== f ? f + "" : f }

    function au(n, t) {
        return {
            get: function() {
                if (!n()) return (this.get = t).apply(this, arguments);
                delete this.get
            }
        }
    }

    function ge(n) {
        if (n in wu) return n;
        for (var i = n[0].toUpperCase() + n.slice(1), t = pu.length; t--;)
            if ((n = pu[t] + i) in wu) return n
    }

    function bu(n) { var t = i.cssProps[n]; return t || (t = i.cssProps[n] = ge(n) || n), t }

    function ku(n, t, i) { var r = vt.exec(t); return r ? Math.max(0, r[2] - (i || 0)) + (r[3] || "px") : t }

    function wi(n, t, r, u, f, e) {
        var o = "width" === t ? 1 : 0,
            h = 0,
            s = 0;
        if (r === (u ? "border" : "content")) return 0;
        for (; o < 4; o += 2) "margin" === r && (s += i.css(n, r + w[o], !0, f)), u ? ("content" === r && (s -= i.css(n, "padding" + w[o], !0, f)), "margin" !== r && (s -= i.css(n, "border" + w[o] + "Width", !0, f))) : (s += i.css(n, "padding" + w[o], !0, f), "padding" !== r ? s += i.css(n, "border" + w[o] + "Width", !0, f) : h += i.css(n, "border" + w[o] + "Width", !0, f));
        return !u && e >= 0 && (s += Math.max(0, Math.ceil(n["offset" + t[0].toUpperCase() + t.slice(1)] - e - s - h - .5))), s
    }

    function du(n, t, r) {
        var f = ui(n),
            u = yt(n, t, f),
            s = "border-box" === i.css(n, "boxSizing", !1, f),
            o = s;
        if (pi.test(u)) {
            if (!r) return u;
            u = "auto"
        }
        return o = o && (e.boxSizingReliable() || u === n.style[t]), ("auto" === u || !parseFloat(u) && "inline" === i.css(n, "display", !1, f)) && (u = n["offset" + t[0].toUpperCase() + t.slice(1)], o = !0), (u = parseFloat(u) || 0) + wi(n, t, r || (s ? "border" : "content"), o, f, u) + "px"
    }

    function h(n, t, i, r, u) { return new h.prototype.init(n, t, i, r, u) }

    function bi() { fi && (!1 === f.hidden && n.requestAnimationFrame ? n.requestAnimationFrame(bi) : n.setTimeout(bi, i.fx.interval), i.fx.tick()) }

    function tf() { return n.setTimeout(function() { st = void 0 }), st = Date.now() }

    function ei(n, t) {
        var u, r = 0,
            i = { height: n };
        for (t = t ? 1 : 0; r < 4; r += 2 - t) i["margin" + (u = w[r])] = i["padding" + u] = n;
        return t && (i.opacity = i.width = n), i
    }

    function rf(n, t, i) {
        for (var u, f = (a.tweeners[t] || []).concat(a.tweeners["*"]), r = 0, e = f.length; r < e; r++)
            if (u = f[r].call(i, t, n)) return u
    }

    function no(n, t, u) {
        var f, y, w, c, b, h, o, l, k = "width" in t || "height" in t,
            v = this,
            p = {},
            s = n.style,
            a = n.nodeType && ti(n),
            e = r.get(n, "fxshow");
        u.queue || (null == (c = i._queueHooks(n, "fx")).unqueued && (c.unqueued = 0, b = c.empty.fire, c.empty.fire = function() { c.unqueued || b() }), c.unqueued++, v.always(function() {
            v.always(function() {
                c.unqueued--;
                i.queue(n, "fx").length || c.empty.fire()
            })
        }));
        for (f in t)
            if (y = t[f], gu.test(y)) {
                if (delete t[f], w = w || "toggle" === y, y === (a ? "hide" : "show")) {
                    if ("show" !== y || !e || void 0 === e[f]) continue;
                    a = !0
                }
                p[f] = e && e[f] || i.style(n, f)
            }
        if ((h = !i.isEmptyObject(t)) || !i.isEmptyObject(p)) {
            k && 1 === n.nodeType && (u.overflow = [s.overflow, s.overflowX, s.overflowY], null == (o = e && e.display) && (o = r.get(n, "display")), "none" === (l = i.css(n, "display")) && (o ? l = o : (ft([n], !0), o = n.style.display || o, l = i.css(n, "display"), ft([n]))), ("inline" === l || "inline-block" === l && null != o) && "none" === i.css(n, "float") && (h || (v.done(function() { s.display = o }), null == o && (l = s.display, o = "none" === l ? "" : l)), s.display = "inline-block"));
            u.overflow && (s.overflow = "hidden", v.always(function() {
                s.overflow = u.overflow[0];
                s.overflowX = u.overflow[1];
                s.overflowY = u.overflow[2]
            }));
            h = !1;
            for (f in p) h || (e ? "hidden" in e && (a = e.hidden) : e = r.access(n, "fxshow", { display: o }), w && (e.hidden = !a), a && ft([n], !0), v.done(function() {
                a || ft([n]);
                r.remove(n, "fxshow");
                for (f in p) i.style(n, f, p[f])
            })), h = rf(a ? e[f] : 0, f, v), f in e || (e[f] = h.start, a && (h.end = h.start, h.start = 0))
        }
    }

    function to(n, t) {
        var r, f, e, u, o;
        for (r in n)
            if (f = y(r), e = t[f], u = n[r], Array.isArray(u) && (e = u[1], u = n[r] = u[0]), r !== f && (n[f] = u, delete n[r]), (o = i.cssHooks[f]) && "expand" in o) {
                u = o.expand(u);
                delete n[f];
                for (r in u) r in n || (n[r] = u[r], t[r] = e)
            } else t[f] = e
    }

    function a(n, t, r) {
        var o, s, h = 0,
            v = a.prefilters.length,
            e = i.Deferred().always(function() { delete l.elem }),
            l = function() { if (s) return !1; for (var o = st || tf(), t = Math.max(0, f.startTime + f.duration - o), i = 1 - (t / f.duration || 0), r = 0, u = f.tweens.length; r < u; r++) f.tweens[r].run(i); return e.notifyWith(n, [f, i, t]), i < 1 && u ? t : (u || e.notifyWith(n, [f, 1, 0]), e.resolveWith(n, [f]), !1) },
            f = e.promise({
                elem: n,
                props: i.extend({}, t),
                opts: i.extend(!0, { specialEasing: {}, easing: i.easing._default }, r),
                originalProperties: t,
                originalOptions: r,
                startTime: st || tf(),
                duration: r.duration,
                tweens: [],
                createTween: function(t, r) { var u = i.Tween(n, f.opts, t, r, f.opts.specialEasing[t] || f.opts.easing); return f.tweens.push(u), u },
                stop: function(t) {
                    var i = 0,
                        r = t ? f.tweens.length : 0;
                    if (s) return this;
                    for (s = !0; i < r; i++) f.tweens[i].run(1);
                    return t ? (e.notifyWith(n, [f, 1, 0]), e.resolveWith(n, [f, t])) : e.rejectWith(n, [f, t]), this
                }
            }),
            c = f.props;
        for (to(c, f.opts.specialEasing); h < v; h++)
            if (o = a.prefilters[h].call(f, n, c, f.opts)) return u(o.stop) && (i._queueHooks(f.elem, f.opts.queue).stop = o.stop.bind(o)), o;
        return i.map(c, rf, f), u(f.opts.start) && f.opts.start.call(n, f), f.progress(f.opts.progress).done(f.opts.done, f.opts.complete).fail(f.opts.fail).always(f.opts.always), i.fx.timer(i.extend(l, { elem: n, anim: f, queue: f.opts.queue })), f
    }

    function g(n) { return (n.match(l) || []).join(" ") }

    function nt(n) { return n.getAttribute && n.getAttribute("class") || "" }

    function ki(n) { return Array.isArray(n) ? n : "string" == typeof n ? n.match(l) || [] : [] }

    function tr(n, t, r, u) {
        var f;
        if (Array.isArray(t)) i.each(t, function(t, i) { r || io.test(n) ? u(n, i) : tr(n + "[" + ("object" == typeof i && null != i ? t : "") + "]", i, r, u) });
        else if (r || "object" !== it(t)) u(n, t);
        else
            for (f in t) tr(n + "[" + f + "]", t[f], r, u)
    }

    function af(n) {
        return function(t, i) {
            "string" != typeof t && (i = t, t = "*");
            var r, f = 0,
                e = t.toLowerCase().match(l) || [];
            if (u(i))
                while (r = e[f++]) "+" === r[0] ? (r = r.slice(1) || "*", (n[r] = n[r] || []).unshift(i)) : (n[r] = n[r] || []).push(i)
        }
    }

    function vf(n, t, r, u) {
        function e(s) { var h; return f[s] = !0, i.each(n[s] || [], function(n, i) { var s = i(t, r, u); return "string" != typeof s || o || f[s] ? o ? !(h = s) : void 0 : (t.dataTypes.unshift(s), e(s), !1) }), h }
        var f = {},
            o = n === ir;
        return e(t.dataTypes[0]) || !f["*"] && e("*")
    }

    function ur(n, t) { var r, u, f = i.ajaxSettings.flatOptions || {}; for (r in t) void 0 !== t[r] && ((f[r] ? n : u || (u = {}))[r] = t[r]); return u && i.extend(!0, n, u), n }

    function lo(n, t, i) {
        for (var e, u, f, o, s = n.contents, r = n.dataTypes;
            "*" === r[0];) r.shift(), void 0 === e && (e = n.mimeType || t.getResponseHeader("Content-Type"));
        if (e)
            for (u in s)
                if (s[u] && s[u].test(e)) { r.unshift(u); break }
        if (r[0] in i) f = r[0];
        else {
            for (u in i) {
                if (!r[0] || n.converters[u + " " + r[0]]) { f = u; break }
                o || (o = u)
            }
            f = f || o
        }
        if (f) return f !== r[0] && r.unshift(f), i[f]
    }

    function ao(n, t, i, r) {
        var h, u, f, s, e, o = {},
            c = n.dataTypes.slice();
        if (c[1])
            for (f in n.converters) o[f.toLowerCase()] = n.converters[f];
        for (u = c.shift(); u;)
            if (n.responseFields[u] && (i[n.responseFields[u]] = t), !e && r && n.dataFilter && (t = n.dataFilter(t, n.dataType)), e = u, u = c.shift())
                if ("*" === u) u = e;
                else if ("*" !== e && e !== u) {
            if (!(f = o[e + " " + u] || o["* " + u]))
                for (h in o)
                    if ((s = h.split(" "))[1] === u && (f = o[e + " " + s[0]] || o["* " + s[0]])) {!0 === f ? f = o[h] : !0 !== o[h] && (u = s[0], c.unshift(s[1])); break }
            if (!0 !== f)
                if (f && n.throws) t = f(t);
                else try { t = f(t) } catch (n) { return { state: "parsererror", error: f ? n : "No conversion from " + e + " to " + u } }
        }
        return { state: "success", data: t }
    }
    var k = [],
        f = n.document,
        bf = Object.getPrototypeOf,
        d = k.slice,
        er = k.concat,
        si = k.push,
        wt = k.indexOf,
        bt = {},
        or = bt.toString,
        kt = bt.hasOwnProperty,
        sr = kt.toString,
        kf = sr.call(Object),
        e = {},
        u = function(n) { return "function" == typeof n && "number" != typeof n.nodeType },
        tt = function(n) { return null != n && n === n.window },
        df = { type: !0, src: !0, noModule: !0 },
        i = function(n, t) { return new i.fn.init(n, t) },
        gf = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
        b, ci, ar, vr, yr, pr, l, kr, gt, lt, ai, fu, st, fi, gu, nf, uf, ht, ff, ef, of, di, gi, yf, ct, fr, oi, pf, wf;
    i.fn = i.prototype = {
        jquery: "3.3.1",
        constructor: i,
        length: 0,
        toArray: function() { return d.call(this) },
        get: function(n) { return null == n ? d.call(this) : n < 0 ? this[n + this.length] : this[n] },
        pushStack: function(n) { var t = i.merge(this.constructor(), n); return t.prevObject = this, t },
        each: function(n) { return i.each(this, n) },
        map: function(n) { return this.pushStack(i.map(this, function(t, i) { return n.call(t, i, t) })) },
        slice: function() { return this.pushStack(d.apply(this, arguments)) },
        first: function() { return this.eq(0) },
        last: function() { return this.eq(-1) },
        eq: function(n) {
            var i = this.length,
                t = +n + (n < 0 ? i : 0);
            return this.pushStack(t >= 0 && t < i ? [this[t]] : [])
        },
        end: function() { return this.prevObject || this.constructor() },
        push: si,
        sort: k.sort,
        splice: k.splice
    };
    i.extend = i.fn.extend = function() {
        var o, e, t, r, s, h, n = arguments[0] || {},
            f = 1,
            l = arguments.length,
            c = !1;
        for ("boolean" == typeof n && (c = n, n = arguments[f] || {}, f++), "object" == typeof n || u(n) || (n = {}), f === l && (n = this, f--); f < l; f++)
            if (null != (o = arguments[f]))
                for (e in o) t = n[e], n !== (r = o[e]) && (c && r && (i.isPlainObject(r) || (s = Array.isArray(r))) ? (s ? (s = !1, h = t && Array.isArray(t) ? t : []) : h = t && i.isPlainObject(t) ? t : {}, n[e] = i.extend(c, h, r)) : void 0 !== r && (n[e] = r));
        return n
    };
    i.extend({
        expando: "jQuery" + ("3.3.1" + Math.random()).replace(/\D/g, ""),
        isReady: !0,
        error: function(n) { throw new Error(n); },
        noop: function() {},
        isPlainObject: function(n) { var t, i; return !(!n || "[object Object]" !== or.call(n)) && (!(t = bf(n)) || "function" == typeof(i = kt.call(t, "constructor") && t.constructor) && sr.call(i) === kf) },
        isEmptyObject: function(n) { for (var t in n) return !1; return !0 },
        globalEval: function(n) { hr(n) },
        each: function(n, t) {
            var r, i = 0;
            if (hi(n)) {
                for (r = n.length; i < r; i++)
                    if (!1 === t.call(n[i], i, n[i])) break
            } else
                for (i in n)
                    if (!1 === t.call(n[i], i, n[i])) break; return n
        },
        trim: function(n) { return null == n ? "" : (n + "").replace(gf, "") },
        makeArray: function(n, t) { var r = t || []; return null != n && (hi(Object(n)) ? i.merge(r, "string" == typeof n ? [n] : n) : si.call(r, n)), r },
        inArray: function(n, t, i) { return null == t ? -1 : wt.call(t, n, i) },
        merge: function(n, t) { for (var u = +t.length, i = 0, r = n.length; i < u; i++) n[r++] = t[i]; return n.length = r, n },
        grep: function(n, t, i) { for (var f, u = [], r = 0, e = n.length, o = !i; r < e; r++)(f = !t(n[r], r)) !== o && u.push(n[r]); return u },
        map: function(n, t, i) {
            var e, u, r = 0,
                f = [];
            if (hi(n))
                for (e = n.length; r < e; r++) null != (u = t(n[r], r, i)) && f.push(u);
            else
                for (r in n) null != (u = t(n[r], r, i)) && f.push(u);
            return er.apply([], f)
        },
        guid: 1,
        support: e
    });
    "function" == typeof Symbol && (i.fn[Symbol.iterator] = k[Symbol.iterator]);
    i.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function(n, t) { bt["[object " + t + "]"] = t.toLowerCase() });
    b = function(n) {
        function u(n, t, r, u) {
            var s, p, l, a, w, d, g, y = t && t.ownerDocument,
                v = t ? t.nodeType : 9;
            if (r = r || [], "string" != typeof n || !n || 1 !== v && 9 !== v && 11 !== v) return r;
            if (!u && ((t ? t.ownerDocument || t : c) !== i && b(t), t = t || i, h)) {
                if (11 !== v && (w = cr.exec(n)))
                    if (s = w[1]) { if (9 === v) { if (!(l = t.getElementById(s))) return r; if (l.id === s) return r.push(l), r } else if (y && (l = y.getElementById(s)) && et(t, l) && l.id === s) return r.push(l), r } else { if (w[2]) return k.apply(r, t.getElementsByTagName(n)), r; if ((s = w[3]) && e.getElementsByClassName && t.getElementsByClassName) return k.apply(r, t.getElementsByClassName(s)), r }
                if (e.qsa && !lt[n + " "] && (!o || !o.test(n))) {
                    if (1 !== v) y = t, g = n;
                    else if ("object" !== t.nodeName.toLowerCase()) {
                        for ((a = t.getAttribute("id")) ? a = a.replace(vi, yi) : t.setAttribute("id", a = f), p = (d = ft(n)).length; p--;) d[p] = "#" + a + " " + yt(d[p]);
                        g = d.join(",");
                        y = ni.test(n) && ri(t.parentNode) || t
                    }
                    if (g) try { return k.apply(r, y.querySelectorAll(g)), r } catch (n) {} finally { a === f && t.removeAttribute("id") }
                }
            }
            return si(n.replace(at, "$1"), t, r, u)
        }

        function ti() {
            function n(r, u) { return i.push(r + " ") > t.cacheLength && delete n[i.shift()], n[r + " "] = u }
            var i = [];
            return n
        }

        function l(n) { return n[f] = !0, n }

        function a(n) {
            var t = i.createElement("fieldset");
            try { return !!n(t) } catch (n) { return !1 } finally {
                t.parentNode && t.parentNode.removeChild(t);
                t = null
            }
        }

        function ii(n, i) { for (var r = n.split("|"), u = r.length; u--;) t.attrHandle[r[u]] = i }

        function wi(n, t) {
            var i = t && n,
                r = i && 1 === n.nodeType && 1 === t.nodeType && n.sourceIndex - t.sourceIndex;
            if (r) return r;
            if (i)
                while (i = i.nextSibling)
                    if (i === t) return -1;
            return n ? 1 : -1
        }

        function ar(n) { return function(t) { return "input" === t.nodeName.toLowerCase() && t.type === n } }

        function vr(n) { return function(t) { var i = t.nodeName.toLowerCase(); return ("input" === i || "button" === i) && t.type === n } }

        function bi(n) { return function(t) { return "form" in t ? t.parentNode && !1 === t.disabled ? "label" in t ? "label" in t.parentNode ? t.parentNode.disabled === n : t.disabled === n : t.isDisabled === n || t.isDisabled !== !n && lr(t) === n : t.disabled === n : "label" in t && t.disabled === n } }

        function it(n) { return l(function(t) { return t = +t, l(function(i, r) { for (var u, f = n([], i.length, t), e = f.length; e--;) i[u = f[e]] && (i[u] = !(r[u] = i[u])) }) }) }

        function ri(n) { return n && "undefined" != typeof n.getElementsByTagName && n }

        function ki() {}

        function yt(n) { for (var t = 0, r = n.length, i = ""; t < r; t++) i += n[t].value; return i }

        function pt(n, t, i) {
            var r = t.dir,
                u = t.next,
                e = u || r,
                o = i && "parentNode" === e,
                s = di++;
            return t.first ? function(t, i, u) {
                while (t = t[r])
                    if (1 === t.nodeType || o) return n(t, i, u);
                return !1
            } : function(t, i, h) {
                var c, l, a, y = [v, s];
                if (h) {
                    while (t = t[r])
                        if ((1 === t.nodeType || o) && n(t, i, h)) return !0
                } else
                    while (t = t[r])
                        if (1 === t.nodeType || o)
                            if (a = t[f] || (t[f] = {}), l = a[t.uniqueID] || (a[t.uniqueID] = {}), u && u === t.nodeName.toLowerCase()) t = t[r] || t;
                            else { if ((c = l[e]) && c[0] === v && c[1] === s) return y[2] = c[2]; if (l[e] = y, y[2] = n(t, i, h)) return !0 } return !1
            }
        }

        function ui(n) {
            return n.length > 1 ? function(t, i, r) {
                for (var u = n.length; u--;)
                    if (!n[u](t, i, r)) return !1;
                return !0
            } : n[0]
        }

        function yr(n, t, i) { for (var r = 0, f = t.length; r < f; r++) u(n, t[r], i); return i }

        function wt(n, t, i, r, u) { for (var e, o = [], f = 0, s = n.length, h = null != t; f < s; f++)(e = n[f]) && (i && !i(e, r, u) || (o.push(e), h && t.push(f))); return o }

        function fi(n, t, i, r, u, e) {
            return r && !r[f] && (r = fi(r)), u && !u[f] && (u = fi(u, e)), l(function(f, e, o, s) {
                var l, c, a, p = [],
                    y = [],
                    w = e.length,
                    b = f || yr(t || "*", o.nodeType ? [o] : o, []),
                    v = !n || !f && t ? b : wt(b, p, n, o, s),
                    h = i ? u || (f ? n : w || r) ? [] : e : v;
                if (i && i(v, h, o, s), r)
                    for (l = wt(h, y), r(l, [], o, s), c = l.length; c--;)(a = l[c]) && (h[y[c]] = !(v[y[c]] = a));
                if (f) {
                    if (u || n) {
                        if (u) {
                            for (l = [], c = h.length; c--;)(a = h[c]) && l.push(v[c] = a);
                            u(null, h = [], l, s)
                        }
                        for (c = h.length; c--;)(a = h[c]) && (l = u ? nt(f, a) : p[c]) > -1 && (f[l] = !(e[l] = a))
                    }
                } else h = wt(h === e ? h.splice(w, h.length) : h), u ? u(null, e, h, s) : k.apply(e, h)
            })
        }

        function ei(n) {
            for (var o, u, r, s = n.length, h = t.relative[n[0].type], c = h || t.relative[" "], i = h ? 1 : 0, l = pt(function(n) { return n === o }, c, !0), a = pt(function(n) { return nt(o, n) > -1 }, c, !0), e = [function(n, t, i) { var r = !h && (i || t !== ht) || ((o = t).nodeType ? l(n, t, i) : a(n, t, i)); return o = null, r }]; i < s; i++)
                if (u = t.relative[n[i].type]) e = [pt(ui(e), u)];
                else {
                    if ((u = t.filter[n[i].type].apply(null, n[i].matches))[f]) {
                        for (r = ++i; r < s; r++)
                            if (t.relative[n[r].type]) break;
                        return fi(i > 1 && ui(e), i > 1 && yt(n.slice(0, i - 1).concat({ value: " " === n[i - 2].type ? "*" : "" })).replace(at, "$1"), u, i < r && ei(n.slice(i, r)), r < s && ei(n = n.slice(r)), r < s && yt(n))
                    }
                    e.push(u)
                }
            return ui(e)
        }

        function pr(n, r) {
            var f = r.length > 0,
                e = n.length > 0,
                o = function(o, s, c, l, a) {
                    var y, nt, d, g = 0,
                        p = "0",
                        tt = o && [],
                        w = [],
                        it = ht,
                        rt = o || e && t.find.TAG("*", a),
                        ut = v += null == it ? 1 : Math.random() || .1,
                        ft = rt.length;
                    for (a && (ht = s === i || s || a); p !== ft && null != (y = rt[p]); p++) {
                        if (e && y) {
                            for (nt = 0, s || y.ownerDocument === i || (b(y), c = !h); d = n[nt++];)
                                if (d(y, s || i, c)) { l.push(y); break }
                            a && (v = ut)
                        }
                        f && ((y = !d && y) && g--, o && tt.push(y))
                    }
                    if (g += p, f && p !== g) {
                        for (nt = 0; d = r[nt++];) d(tt, w, s, c);
                        if (o) {
                            if (g > 0)
                                while (p--) tt[p] || w[p] || (w[p] = nr.call(l));
                            w = wt(w)
                        }
                        k.apply(l, w);
                        a && !o && w.length > 0 && g + r.length > 1 && u.uniqueSort(l)
                    }
                    return a && (v = ut, ht = it), tt
                };
            return f ? l(o) : o
        }
        var rt, e, t, st, oi, ft, bt, si, ht, w, ut, b, i, s, h, o, d, ct, et, f = "sizzle" + 1 * new Date,
            c = n.document,
            v = 0,
            di = 0,
            hi = ti(),
            ci = ti(),
            lt = ti(),
            kt = function(n, t) { return n === t && (ut = !0), 0 },
            gi = {}.hasOwnProperty,
            g = [],
            nr = g.pop,
            tr = g.push,
            k = g.push,
            li = g.slice,
            nt = function(n, t) {
                for (var i = 0, r = n.length; i < r; i++)
                    if (n[i] === t) return i;
                return -1
            },
            dt = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
            r = "[\\x20\\t\\r\\n\\f]",
            tt = "(?:\\\\.|[\\w-]|[^\0-\\xa0])+",
            ai = "\\[" + r + "*(" + tt + ")(?:" + r + "*([*^$|!~]?=)" + r + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + tt + "))|)" + r + "*\\]",
            gt = ":(" + tt + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + ai + ")*)|.*)\\)|)",
            ir = new RegExp(r + "+", "g"),
            at = new RegExp("^" + r + "+|((?:^|[^\\\\])(?:\\\\.)*)" + r + "+$", "g"),
            rr = new RegExp("^" + r + "*," + r + "*"),
            ur = new RegExp("^" + r + "*([>+~]|" + r + ")" + r + "*"),
            fr = new RegExp("=" + r + "*([^\\]'\"]*?)" + r + "*\\]", "g"),
            er = new RegExp(gt),
            or = new RegExp("^" + tt + "$"),
            vt = { ID: new RegExp("^#(" + tt + ")"), CLASS: new RegExp("^\\.(" + tt + ")"), TAG: new RegExp("^(" + tt + "|[*])"), ATTR: new RegExp("^" + ai), PSEUDO: new RegExp("^" + gt), CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + r + "*(even|odd|(([+-]|)(\\d*)n|)" + r + "*(?:([+-]|)" + r + "*(\\d+)|))" + r + "*\\)|)", "i"), bool: new RegExp("^(?:" + dt + ")$", "i"), needsContext: new RegExp("^" + r + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + r + "*((?:-\\d)?\\d*)" + r + "*\\)|)(?=[^-]|$)", "i") },
            sr = /^(?:input|select|textarea|button)$/i,
            hr = /^h\d$/i,
            ot = /^[^{]+\{\s*\[native \w/,
            cr = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
            ni = /[+~]/,
            y = new RegExp("\\\\([\\da-f]{1,6}" + r + "?|(" + r + ")|.)", "ig"),
            p = function(n, t, i) { var r = "0x" + t - 65536; return r !== r || i ? t : r < 0 ? String.fromCharCode(r + 65536) : String.fromCharCode(r >> 10 | 55296, 1023 & r | 56320) },
            vi = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
            yi = function(n, t) { return t ? "\0" === n ? "�" : n.slice(0, -1) + "\\" + n.charCodeAt(n.length - 1).toString(16) + " " : "\\" + n },
            pi = function() { b() },
            lr = pt(function(n) { return !0 === n.disabled && ("form" in n || "label" in n) }, { dir: "parentNode", next: "legend" });
        try {
            k.apply(g = li.call(c.childNodes), c.childNodes);
            g[c.childNodes.length].nodeType
        } catch (n) {
            k = {
                apply: g.length ? function(n, t) { tr.apply(n, li.call(t)) } : function(n, t) {
                    for (var i = n.length, r = 0; n[i++] = t[r++];);
                    n.length = i - 1
                }
            }
        }
        e = u.support = {};
        oi = u.isXML = function(n) { var t = n && (n.ownerDocument || n).documentElement; return !!t && "HTML" !== t.nodeName };
        b = u.setDocument = function(n) {
            var v, u, l = n ? n.ownerDocument || n : c;
            return l !== i && 9 === l.nodeType && l.documentElement ? (i = l, s = i.documentElement, h = !oi(i), c !== i && (u = i.defaultView) && u.top !== u && (u.addEventListener ? u.addEventListener("unload", pi, !1) : u.attachEvent && u.attachEvent("onunload", pi)), e.attributes = a(function(n) { return n.className = "i", !n.getAttribute("className") }), e.getElementsByTagName = a(function(n) { return n.appendChild(i.createComment("")), !n.getElementsByTagName("*").length }), e.getElementsByClassName = ot.test(i.getElementsByClassName), e.getById = a(function(n) { return s.appendChild(n).id = f, !i.getElementsByName || !i.getElementsByName(f).length }), e.getById ? (t.filter.ID = function(n) { var t = n.replace(y, p); return function(n) { return n.getAttribute("id") === t } }, t.find.ID = function(n, t) { if ("undefined" != typeof t.getElementById && h) { var i = t.getElementById(n); return i ? [i] : [] } }) : (t.filter.ID = function(n) { var t = n.replace(y, p); return function(n) { var i = "undefined" != typeof n.getAttributeNode && n.getAttributeNode("id"); return i && i.value === t } }, t.find.ID = function(n, t) {
                if ("undefined" != typeof t.getElementById && h) {
                    var r, u, f, i = t.getElementById(n);
                    if (i) {
                        if ((r = i.getAttributeNode("id")) && r.value === n) return [i];
                        for (f = t.getElementsByName(n), u = 0; i = f[u++];)
                            if ((r = i.getAttributeNode("id")) && r.value === n) return [i]
                    }
                    return []
                }
            }), t.find.TAG = e.getElementsByTagName ? function(n, t) { return "undefined" != typeof t.getElementsByTagName ? t.getElementsByTagName(n) : e.qsa ? t.querySelectorAll(n) : void 0 } : function(n, t) {
                var i, r = [],
                    f = 0,
                    u = t.getElementsByTagName(n);
                if ("*" === n) { while (i = u[f++]) 1 === i.nodeType && r.push(i); return r }
                return u
            }, t.find.CLASS = e.getElementsByClassName && function(n, t) { if ("undefined" != typeof t.getElementsByClassName && h) return t.getElementsByClassName(n) }, d = [], o = [], (e.qsa = ot.test(i.querySelectorAll)) && (a(function(n) {
                s.appendChild(n).innerHTML = "<a id='" + f + "'><\/a><select id='" + f + "-\r\\' msallowcapture=''><option selected=''><\/option><\/select>";
                n.querySelectorAll("[msallowcapture^='']").length && o.push("[*^$]=" + r + "*(?:''|\"\")");
                n.querySelectorAll("[selected]").length || o.push("\\[" + r + "*(?:value|" + dt + ")");
                n.querySelectorAll("[id~=" + f + "-]").length || o.push("~=");
                n.querySelectorAll(":checked").length || o.push(":checked");
                n.querySelectorAll("a#" + f + "+*").length || o.push(".#.+[+~]")
            }), a(function(n) {
                n.innerHTML = "<a href='' disabled='disabled'><\/a><select disabled='disabled'><option/><\/select>";
                var t = i.createElement("input");
                t.setAttribute("type", "hidden");
                n.appendChild(t).setAttribute("name", "D");
                n.querySelectorAll("[name=d]").length && o.push("name" + r + "*[*^$|!~]?=");
                2 !== n.querySelectorAll(":enabled").length && o.push(":enabled", ":disabled");
                s.appendChild(n).disabled = !0;
                2 !== n.querySelectorAll(":disabled").length && o.push(":enabled", ":disabled");
                n.querySelectorAll("*,:x");
                o.push(",.*:")
            })), (e.matchesSelector = ot.test(ct = s.matches || s.webkitMatchesSelector || s.mozMatchesSelector || s.oMatchesSelector || s.msMatchesSelector)) && a(function(n) {
                e.disconnectedMatch = ct.call(n, "*");
                ct.call(n, "[s!='']:x");
                d.push("!=", gt)
            }), o = o.length && new RegExp(o.join("|")), d = d.length && new RegExp(d.join("|")), v = ot.test(s.compareDocumentPosition), et = v || ot.test(s.contains) ? function(n, t) {
                var r = 9 === n.nodeType ? n.documentElement : n,
                    i = t && t.parentNode;
                return n === i || !(!i || 1 !== i.nodeType || !(r.contains ? r.contains(i) : n.compareDocumentPosition && 16 & n.compareDocumentPosition(i)))
            } : function(n, t) {
                if (t)
                    while (t = t.parentNode)
                        if (t === n) return !0;
                return !1
            }, kt = v ? function(n, t) { if (n === t) return ut = !0, 0; var r = !n.compareDocumentPosition - !t.compareDocumentPosition; return r || (1 & (r = (n.ownerDocument || n) === (t.ownerDocument || t) ? n.compareDocumentPosition(t) : 1) || !e.sortDetached && t.compareDocumentPosition(n) === r ? n === i || n.ownerDocument === c && et(c, n) ? -1 : t === i || t.ownerDocument === c && et(c, t) ? 1 : w ? nt(w, n) - nt(w, t) : 0 : 4 & r ? -1 : 1) } : function(n, t) {
                if (n === t) return ut = !0, 0;
                var r, u = 0,
                    o = n.parentNode,
                    s = t.parentNode,
                    f = [n],
                    e = [t];
                if (!o || !s) return n === i ? -1 : t === i ? 1 : o ? -1 : s ? 1 : w ? nt(w, n) - nt(w, t) : 0;
                if (o === s) return wi(n, t);
                for (r = n; r = r.parentNode;) f.unshift(r);
                for (r = t; r = r.parentNode;) e.unshift(r);
                while (f[u] === e[u]) u++;
                return u ? wi(f[u], e[u]) : f[u] === c ? -1 : e[u] === c ? 1 : 0
            }, i) : i
        };
        u.matches = function(n, t) { return u(n, null, null, t) };
        u.matchesSelector = function(n, t) {
            if ((n.ownerDocument || n) !== i && b(n), t = t.replace(fr, "='$1']"), e.matchesSelector && h && !lt[t + " "] && (!d || !d.test(t)) && (!o || !o.test(t))) try { var r = ct.call(n, t); if (r || e.disconnectedMatch || n.document && 11 !== n.document.nodeType) return r } catch (n) {}
            return u(t, i, null, [n]).length > 0
        };
        u.contains = function(n, t) { return (n.ownerDocument || n) !== i && b(n), et(n, t) };
        u.attr = function(n, r) {
            (n.ownerDocument || n) !== i && b(n);
            var f = t.attrHandle[r.toLowerCase()],
                u = f && gi.call(t.attrHandle, r.toLowerCase()) ? f(n, r, !h) : void 0;
            return void 0 !== u ? u : e.attributes || !h ? n.getAttribute(r) : (u = n.getAttributeNode(r)) && u.specified ? u.value : null
        };
        u.escape = function(n) { return (n + "").replace(vi, yi) };
        u.error = function(n) { throw new Error("Syntax error, unrecognized expression: " + n); };
        u.uniqueSort = function(n) {
            var r, u = [],
                t = 0,
                i = 0;
            if (ut = !e.detectDuplicates, w = !e.sortStable && n.slice(0), n.sort(kt), ut) { while (r = n[i++]) r === n[i] && (t = u.push(i)); while (t--) n.splice(u[t], 1) }
            return w = null, n
        };
        st = u.getText = function(n) {
            var r, i = "",
                u = 0,
                t = n.nodeType;
            if (t) { if (1 === t || 9 === t || 11 === t) { if ("string" == typeof n.textContent) return n.textContent; for (n = n.firstChild; n; n = n.nextSibling) i += st(n) } else if (3 === t || 4 === t) return n.nodeValue } else
                while (r = n[u++]) i += st(r);
            return i
        };
        (t = u.selectors = {
            cacheLength: 50,
            createPseudo: l,
            match: vt,
            attrHandle: {},
            find: {},
            relative: { ">": { dir: "parentNode", first: !0 }, " ": { dir: "parentNode" }, "+": { dir: "previousSibling", first: !0 }, "~": { dir: "previousSibling" } },
            preFilter: { ATTR: function(n) { return n[1] = n[1].replace(y, p), n[3] = (n[3] || n[4] || n[5] || "").replace(y, p), "~=" === n[2] && (n[3] = " " + n[3] + " "), n.slice(0, 4) }, CHILD: function(n) { return n[1] = n[1].toLowerCase(), "nth" === n[1].slice(0, 3) ? (n[3] || u.error(n[0]), n[4] = +(n[4] ? n[5] + (n[6] || 1) : 2 * ("even" === n[3] || "odd" === n[3])), n[5] = +(n[7] + n[8] || "odd" === n[3])) : n[3] && u.error(n[0]), n }, PSEUDO: function(n) { var i, t = !n[6] && n[2]; return vt.CHILD.test(n[0]) ? null : (n[3] ? n[2] = n[4] || n[5] || "" : t && er.test(t) && (i = ft(t, !0)) && (i = t.indexOf(")", t.length - i) - t.length) && (n[0] = n[0].slice(0, i), n[2] = t.slice(0, i)), n.slice(0, 3)) } },
            filter: {
                TAG: function(n) { var t = n.replace(y, p).toLowerCase(); return "*" === n ? function() { return !0 } : function(n) { return n.nodeName && n.nodeName.toLowerCase() === t } },
                CLASS: function(n) { var t = hi[n + " "]; return t || (t = new RegExp("(^|" + r + ")" + n + "(" + r + "|$)")) && hi(n, function(n) { return t.test("string" == typeof n.className && n.className || "undefined" != typeof n.getAttribute && n.getAttribute("class") || "") }) },
                ATTR: function(n, t, i) { return function(r) { var f = u.attr(r, n); return null == f ? "!=" === t : !t || (f += "", "=" === t ? f === i : "!=" === t ? f !== i : "^=" === t ? i && 0 === f.indexOf(i) : "*=" === t ? i && f.indexOf(i) > -1 : "$=" === t ? i && f.slice(-i.length) === i : "~=" === t ? (" " + f.replace(ir, " ") + " ").indexOf(i) > -1 : "|=" === t && (f === i || f.slice(0, i.length + 1) === i + "-")) } },
                CHILD: function(n, t, i, r, u) {
                    var s = "nth" !== n.slice(0, 3),
                        o = "last" !== n.slice(-4),
                        e = "of-type" === t;
                    return 1 === r && 0 === u ? function(n) { return !!n.parentNode } : function(t, i, h) {
                        var p, d, y, c, a, w, b = s !== o ? "nextSibling" : "previousSibling",
                            k = t.parentNode,
                            nt = e && t.nodeName.toLowerCase(),
                            g = !h && !e,
                            l = !1;
                        if (k) {
                            if (s) {
                                while (b) {
                                    for (c = t; c = c[b];)
                                        if (e ? c.nodeName.toLowerCase() === nt : 1 === c.nodeType) return !1;
                                    w = b = "only" === n && !w && "nextSibling"
                                }
                                return !0
                            }
                            if (w = [o ? k.firstChild : k.lastChild], o && g) {
                                for (l = (a = (p = (d = (y = (c = k)[f] || (c[f] = {}))[c.uniqueID] || (y[c.uniqueID] = {}))[n] || [])[0] === v && p[1]) && p[2], c = a && k.childNodes[a]; c = ++a && c && c[b] || (l = a = 0) || w.pop();)
                                    if (1 === c.nodeType && ++l && c === t) { d[n] = [v, a, l]; break }
                            } else if (g && (l = a = (p = (d = (y = (c = t)[f] || (c[f] = {}))[c.uniqueID] || (y[c.uniqueID] = {}))[n] || [])[0] === v && p[1]), !1 === l)
                                while (c = ++a && c && c[b] || (l = a = 0) || w.pop())
                                    if ((e ? c.nodeName.toLowerCase() === nt : 1 === c.nodeType) && ++l && (g && ((d = (y = c[f] || (c[f] = {}))[c.uniqueID] || (y[c.uniqueID] = {}))[n] = [v, l]), c === t)) break;
                            return (l -= u) === r || l % r == 0 && l / r >= 0
                        }
                    }
                },
                PSEUDO: function(n, i) { var e, r = t.pseudos[n] || t.setFilters[n.toLowerCase()] || u.error("unsupported pseudo: " + n); return r[f] ? r(i) : r.length > 1 ? (e = [n, n, "", i], t.setFilters.hasOwnProperty(n.toLowerCase()) ? l(function(n, t) { for (var e, u = r(n, i), f = u.length; f--;) n[e = nt(n, u[f])] = !(t[e] = u[f]) }) : function(n) { return r(n, 0, e) }) : r }
            },
            pseudos: {
                not: l(function(n) {
                    var t = [],
                        r = [],
                        i = bt(n.replace(at, "$1"));
                    return i[f] ? l(function(n, t, r, u) { for (var e, o = i(n, null, u, []), f = n.length; f--;)(e = o[f]) && (n[f] = !(t[f] = e)) }) : function(n, u, f) { return t[0] = n, i(t, null, f, r), t[0] = null, !r.pop() }
                }),
                has: l(function(n) { return function(t) { return u(n, t).length > 0 } }),
                contains: l(function(n) {
                    return n = n.replace(y, p),
                        function(t) { return (t.textContent || t.innerText || st(t)).indexOf(n) > -1 }
                }),
                lang: l(function(n) {
                    return or.test(n || "") || u.error("unsupported lang: " + n), n = n.replace(y, p).toLowerCase(),
                        function(t) {
                            var i;
                            do
                                if (i = h ? t.lang : t.getAttribute("xml:lang") || t.getAttribute("lang")) return (i = i.toLowerCase()) === n || 0 === i.indexOf(n + "-");
                            while ((t = t.parentNode) && 1 === t.nodeType);
                            return !1
                        }
                }),
                target: function(t) { var i = n.location && n.location.hash; return i && i.slice(1) === t.id },
                root: function(n) { return n === s },
                focus: function(n) { return n === i.activeElement && (!i.hasFocus || i.hasFocus()) && !!(n.type || n.href || ~n.tabIndex) },
                enabled: bi(!1),
                disabled: bi(!0),
                checked: function(n) { var t = n.nodeName.toLowerCase(); return "input" === t && !!n.checked || "option" === t && !!n.selected },
                selected: function(n) { return n.parentNode && n.parentNode.selectedIndex, !0 === n.selected },
                empty: function(n) {
                    for (n = n.firstChild; n; n = n.nextSibling)
                        if (n.nodeType < 6) return !1;
                    return !0
                },
                parent: function(n) { return !t.pseudos.empty(n) },
                header: function(n) { return hr.test(n.nodeName) },
                input: function(n) { return sr.test(n.nodeName) },
                button: function(n) { var t = n.nodeName.toLowerCase(); return "input" === t && "button" === n.type || "button" === t },
                text: function(n) { var t; return "input" === n.nodeName.toLowerCase() && "text" === n.type && (null == (t = n.getAttribute("type")) || "text" === t.toLowerCase()) },
                first: it(function() { return [0] }),
                last: it(function(n, t) { return [t - 1] }),
                eq: it(function(n, t, i) { return [i < 0 ? i + t : i] }),
                even: it(function(n, t) { for (var i = 0; i < t; i += 2) n.push(i); return n }),
                odd: it(function(n, t) { for (var i = 1; i < t; i += 2) n.push(i); return n }),
                lt: it(function(n, t, i) { for (var r = i < 0 ? i + t : i; --r >= 0;) n.push(r); return n }),
                gt: it(function(n, t, i) { for (var r = i < 0 ? i + t : i; ++r < t;) n.push(r); return n })
            }
        }).pseudos.nth = t.pseudos.eq;
        for (rt in { radio: !0, checkbox: !0, file: !0, password: !0, image: !0 }) t.pseudos[rt] = ar(rt);
        for (rt in { submit: !0, reset: !0 }) t.pseudos[rt] = vr(rt);
        return ki.prototype = t.filters = t.pseudos, t.setFilters = new ki, ft = u.tokenize = function(n, i) {
            var e, f, s, o, r, h, c, l = ci[n + " "];
            if (l) return i ? 0 : l.slice(0);
            for (r = n, h = [], c = t.preFilter; r;) {
                (!e || (f = rr.exec(r))) && (f && (r = r.slice(f[0].length) || r), h.push(s = []));
                e = !1;
                (f = ur.exec(r)) && (e = f.shift(), s.push({ value: e, type: f[0].replace(at, " ") }), r = r.slice(e.length));
                for (o in t.filter)(f = vt[o].exec(r)) && (!c[o] || (f = c[o](f))) && (e = f.shift(), s.push({ value: e, type: o, matches: f }), r = r.slice(e.length));
                if (!e) break
            }
            return i ? r.length : r ? u.error(n) : ci(n, h).slice(0)
        }, bt = u.compile = function(n, t) {
            var r, u = [],
                e = [],
                i = lt[n + " "];
            if (!i) {
                for (t || (t = ft(n)), r = t.length; r--;)(i = ei(t[r]))[f] ? u.push(i) : e.push(i);
                (i = lt(n, pr(e, u))).selector = n
            }
            return i
        }, si = u.select = function(n, i, r, u) {
            var o, f, e, l, a, c = "function" == typeof n && n,
                s = !u && ft(n = c.selector || n);
            if (r = r || [], 1 === s.length) {
                if ((f = s[0] = s[0].slice(0)).length > 2 && "ID" === (e = f[0]).type && 9 === i.nodeType && h && t.relative[f[1].type]) {
                    if (!(i = (t.find.ID(e.matches[0].replace(y, p), i) || [])[0])) return r;
                    c && (i = i.parentNode);
                    n = n.slice(f.shift().value.length)
                }
                for (o = vt.needsContext.test(n) ? 0 : f.length; o--;) { if (e = f[o], t.relative[l = e.type]) break; if ((a = t.find[l]) && (u = a(e.matches[0].replace(y, p), ni.test(f[0].type) && ri(i.parentNode) || i))) { if (f.splice(o, 1), !(n = u.length && yt(f))) return k.apply(r, u), r; break } }
            }
            return (c || bt(n, s))(u, i, !h, r, !i || ni.test(n) && ri(i.parentNode) || i), r
        }, e.sortStable = f.split("").sort(kt).join("") === f, e.detectDuplicates = !!ut, b(), e.sortDetached = a(function(n) { return 1 & n.compareDocumentPosition(i.createElement("fieldset")) }), a(function(n) { return n.innerHTML = "<a href='#'><\/a>", "#" === n.firstChild.getAttribute("href") }) || ii("type|href|height|width", function(n, t, i) { if (!i) return n.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2) }), e.attributes && a(function(n) { return n.innerHTML = "<input/>", n.firstChild.setAttribute("value", ""), "" === n.firstChild.getAttribute("value") }) || ii("value", function(n, t, i) { if (!i && "input" === n.nodeName.toLowerCase()) return n.defaultValue }), a(function(n) { return null == n.getAttribute("disabled") }) || ii(dt, function(n, t, i) { var r; if (!i) return !0 === n[t] ? t.toLowerCase() : (r = n.getAttributeNode(t)) && r.specified ? r.value : null }), u
    }(n);
    i.find = b;
    i.expr = b.selectors;
    i.expr[":"] = i.expr.pseudos;
    i.uniqueSort = i.unique = b.uniqueSort;
    i.text = b.getText;
    i.isXMLDoc = b.isXML;
    i.contains = b.contains;
    i.escapeSelector = b.escape;
    var rt = function(n, t, r) {
            for (var u = [], f = void 0 !== r;
                (n = n[t]) && 9 !== n.nodeType;)
                if (1 === n.nodeType) {
                    if (f && i(n).is(r)) break;
                    u.push(n)
                }
            return u
        },
        cr = function(n, t) { for (var i = []; n; n = n.nextSibling) 1 === n.nodeType && n !== t && i.push(n); return i },
        lr = i.expr.match.needsContext;
    ci = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;
    i.filter = function(n, t, r) { var u = t[0]; return r && (n = ":not(" + n + ")"), 1 === t.length && 1 === u.nodeType ? i.find.matchesSelector(u, n) ? [u] : [] : i.find.matches(n, i.grep(t, function(n) { return 1 === n.nodeType })) };
    i.fn.extend({
        find: function(n) {
            var t, r, u = this.length,
                f = this;
            if ("string" != typeof n) return this.pushStack(i(n).filter(function() {
                for (t = 0; t < u; t++)
                    if (i.contains(f[t], this)) return !0
            }));
            for (r = this.pushStack([]), t = 0; t < u; t++) i.find(n, f[t], r);
            return u > 1 ? i.uniqueSort(r) : r
        },
        filter: function(n) { return this.pushStack(li(this, n || [], !1)) },
        not: function(n) { return this.pushStack(li(this, n || [], !0)) },
        is: function(n) { return !!li(this, "string" == typeof n && lr.test(n) ? i(n) : n || [], !1).length }
    });
    vr = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
    (i.fn.init = function(n, t, r) {
        var e, o;
        if (!n) return this;
        if (r = r || ar, "string" == typeof n) {
            if (!(e = "<" === n[0] && ">" === n[n.length - 1] && n.length >= 3 ? [null, n, null] : vr.exec(n)) || !e[1] && t) return !t || t.jquery ? (t || r).find(n) : this.constructor(t).find(n);
            if (e[1]) {
                if (t = t instanceof i ? t[0] : t, i.merge(this, i.parseHTML(e[1], t && t.nodeType ? t.ownerDocument || t : f, !0)), ci.test(e[1]) && i.isPlainObject(t))
                    for (e in t) u(this[e]) ? this[e](t[e]) : this.attr(e, t[e]);
                return this
            }
            return (o = f.getElementById(e[2])) && (this[0] = o, this.length = 1), this
        }
        return n.nodeType ? (this[0] = n, this.length = 1, this) : u(n) ? void 0 !== r.ready ? r.ready(n) : n(i) : i.makeArray(n, this)
    }).prototype = i.fn;
    ar = i(f);
    yr = /^(?:parents|prev(?:Until|All))/;
    pr = { children: !0, contents: !0, next: !0, prev: !0 };
    i.fn.extend({
        has: function(n) {
            var t = i(n, this),
                r = t.length;
            return this.filter(function() {
                for (var n = 0; n < r; n++)
                    if (i.contains(this, t[n])) return !0
            })
        },
        closest: function(n, t) {
            var r, f = 0,
                o = this.length,
                u = [],
                e = "string" != typeof n && i(n);
            if (!lr.test(n))
                for (; f < o; f++)
                    for (r = this[f]; r && r !== t; r = r.parentNode)
                        if (r.nodeType < 11 && (e ? e.index(r) > -1 : 1 === r.nodeType && i.find.matchesSelector(r, n))) { u.push(r); break }
            return this.pushStack(u.length > 1 ? i.uniqueSort(u) : u)
        },
        index: function(n) { return n ? "string" == typeof n ? wt.call(i(n), this[0]) : wt.call(this, n.jquery ? n[0] : n) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1 },
        add: function(n, t) { return this.pushStack(i.uniqueSort(i.merge(this.get(), i(n, t)))) },
        addBack: function(n) { return this.add(null == n ? this.prevObject : this.prevObject.filter(n)) }
    });
    i.each({ parent: function(n) { var t = n.parentNode; return t && 11 !== t.nodeType ? t : null }, parents: function(n) { return rt(n, "parentNode") }, parentsUntil: function(n, t, i) { return rt(n, "parentNode", i) }, next: function(n) { return wr(n, "nextSibling") }, prev: function(n) { return wr(n, "previousSibling") }, nextAll: function(n) { return rt(n, "nextSibling") }, prevAll: function(n) { return rt(n, "previousSibling") }, nextUntil: function(n, t, i) { return rt(n, "nextSibling", i) }, prevUntil: function(n, t, i) { return rt(n, "previousSibling", i) }, siblings: function(n) { return cr((n.parentNode || {}).firstChild, n) }, children: function(n) { return cr(n.firstChild) }, contents: function(n) { return v(n, "iframe") ? n.contentDocument : (v(n, "template") && (n = n.content || n), i.merge([], n.childNodes)) } }, function(n, t) { i.fn[n] = function(r, u) { var f = i.map(this, t, r); return "Until" !== n.slice(-5) && (u = r), u && "string" == typeof u && (f = i.filter(u, f)), this.length > 1 && (pr[n] || i.uniqueSort(f), yr.test(n) && f.reverse()), this.pushStack(f) } });
    l = /[^\x20\t\r\n\f]+/g;
    i.Callbacks = function(n) {
        n = "string" == typeof n ? ne(n) : i.extend({}, n);
        var f, r, c, e, t = [],
            s = [],
            o = -1,
            l = function() {
                for (e = e || n.once, c = f = !0; s.length; o = -1)
                    for (r = s.shift(); ++o < t.length;) !1 === t[o].apply(r[0], r[1]) && n.stopOnFalse && (o = t.length, r = !1);
                n.memory || (r = !1);
                f = !1;
                e && (t = r ? [] : "")
            },
            h = {
                add: function() { return t && (r && !f && (o = t.length - 1, s.push(r)), function f(r) { i.each(r, function(i, r) { u(r) ? n.unique && h.has(r) || t.push(r) : r && r.length && "string" !== it(r) && f(r) }) }(arguments), r && !f && l()), this },
                remove: function() {
                    return i.each(arguments, function(n, r) {
                        for (var u;
                            (u = i.inArray(r, t, u)) > -1;) t.splice(u, 1), u <= o && o--
                    }), this
                },
                has: function(n) { return n ? i.inArray(n, t) > -1 : t.length > 0 },
                empty: function() { return t && (t = []), this },
                disable: function() { return e = s = [], t = r = "", this },
                disabled: function() { return !t },
                lock: function() { return e = s = [], r || f || (t = r = ""), this },
                locked: function() { return !!e },
                fireWith: function(n, t) { return e || (t = [n, (t = t || []).slice ? t.slice() : t], s.push(t), f || l()), this },
                fire: function() { return h.fireWith(this, arguments), this },
                fired: function() { return !!c }
            };
        return h
    };
    i.extend({
        Deferred: function(t) {
            var f = [
                    ["notify", "progress", i.Callbacks("memory"), i.Callbacks("memory"), 2],
                    ["resolve", "done", i.Callbacks("once memory"), i.Callbacks("once memory"), 0, "resolved"],
                    ["reject", "fail", i.Callbacks("once memory"), i.Callbacks("once memory"), 1, "rejected"]
                ],
                o = "pending",
                e = {
                    state: function() { return o },
                    always: function() { return r.done(arguments).fail(arguments), this },
                    "catch": function(n) { return e.then(null, n) },
                    pipe: function() {
                        var n = arguments;
                        return i.Deferred(function(t) {
                            i.each(f, function(i, f) {
                                var e = u(n[f[4]]) && n[f[4]];
                                r[f[1]](function() {
                                    var n = e && e.apply(this, arguments);
                                    n && u(n.promise) ? n.promise().progress(t.notify).done(t.resolve).fail(t.reject) : t[f[0] + "With"](this, e ? [n] : arguments)
                                })
                            });
                            n = null
                        }).promise()
                    },
                    then: function(t, r, e) {
                        function s(t, r, f, e) {
                            return function() {
                                var h = this,
                                    c = arguments,
                                    a = function() {
                                        var n, i;
                                        if (!(t < o)) {
                                            if ((n = f.apply(h, c)) === r.promise()) throw new TypeError("Thenable self-resolution");
                                            i = n && ("object" == typeof n || "function" == typeof n) && n.then;
                                            u(i) ? e ? i.call(n, s(o, r, ut, e), s(o, r, dt, e)) : (o++, i.call(n, s(o, r, ut, e), s(o, r, dt, e), s(o, r, ut, r.notifyWith))) : (f !== ut && (h = void 0, c = [n]), (e || r.resolveWith)(h, c))
                                        }
                                    },
                                    l = e ? a : function() {
                                        try { a() } catch (n) {
                                            i.Deferred.exceptionHook && i.Deferred.exceptionHook(n, l.stackTrace);
                                            t + 1 >= o && (f !== dt && (h = void 0, c = [n]), r.rejectWith(h, c))
                                        }
                                    };
                                t ? l() : (i.Deferred.getStackHook && (l.stackTrace = i.Deferred.getStackHook()), n.setTimeout(l))
                            }
                        }
                        var o = 0;
                        return i.Deferred(function(n) {
                            f[0][3].add(s(0, n, u(e) ? e : ut, n.notifyWith));
                            f[1][3].add(s(0, n, u(t) ? t : ut));
                            f[2][3].add(s(0, n, u(r) ? r : dt))
                        }).promise()
                    },
                    promise: function(n) { return null != n ? i.extend(n, e) : e }
                },
                r = {};
            return i.each(f, function(n, t) {
                var i = t[2],
                    u = t[5];
                e[t[1]] = i.add;
                u && i.add(function() { o = u }, f[3 - n][2].disable, f[3 - n][3].disable, f[0][2].lock, f[0][3].lock);
                i.add(t[3].fire);
                r[t[0]] = function() { return r[t[0] + "With"](this === r ? void 0 : this, arguments), this };
                r[t[0] + "With"] = i.fireWith
            }), e.promise(r), t && t.call(r, r), r
        },
        when: function(n) {
            var e = arguments.length,
                t = e,
                o = Array(t),
                f = d.call(arguments),
                r = i.Deferred(),
                s = function(n) {
                    return function(t) {
                        o[n] = this;
                        f[n] = arguments.length > 1 ? d.call(arguments) : t;
                        --e || r.resolveWith(o, f)
                    }
                };
            if (e <= 1 && (br(n, r.done(s(t)).resolve, r.reject, !e), "pending" === r.state() || u(f[t] && f[t].then))) return r.then();
            while (t--) br(f[t], s(t), r.reject);
            return r.promise()
        }
    });
    kr = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
    i.Deferred.exceptionHook = function(t, i) { n.console && n.console.warn && t && kr.test(t.name) && n.console.warn("jQuery.Deferred exception: " + t.message, t.stack, i) };
    i.readyException = function(t) { n.setTimeout(function() { throw t; }) };
    gt = i.Deferred();
    i.fn.ready = function(n) { return gt.then(n)["catch"](function(n) { i.readyException(n) }), this };
    i.extend({
        isReady: !1,
        readyWait: 1,
        ready: function(n) {
            (!0 === n ? --i.readyWait : i.isReady) || (i.isReady = !0, !0 !== n && --i.readyWait > 0 || gt.resolveWith(f, [i]))
        }
    });
    i.ready.then = gt.then;
    "complete" === f.readyState || "loading" !== f.readyState && !f.documentElement.doScroll ? n.setTimeout(i.ready) : (f.addEventListener("DOMContentLoaded", ni), n.addEventListener("load", ni));
    var p = function(n, t, r, f, e, o, s) {
            var h = 0,
                l = n.length,
                c = null == r;
            if ("object" === it(r)) { e = !0; for (h in r) p(n, t, h, r[h], !0, o, s) } else if (void 0 !== f && (e = !0, u(f) || (s = !0), c && (s ? (t.call(n, f), t = null) : (c = t, t = function(n, t, r) { return c.call(i(n), r) })), t))
                for (; h < l; h++) t(n[h], r, s ? f : f.call(n[h], h, t(n[h], r)));
            return e ? n : c ? t.call(n) : l ? t(n[0], r) : o
        },
        te = /^-ms-/,
        ie = /-([a-z])/g;
    lt = function(n) { return 1 === n.nodeType || 9 === n.nodeType || !+n.nodeType };
    at.uid = 1;
    at.prototype = {
        cache: function(n) { var t = n[this.expando]; return t || (t = {}, lt(n) && (n.nodeType ? n[this.expando] = t : Object.defineProperty(n, this.expando, { value: t, configurable: !0 }))), t },
        set: function(n, t, i) {
            var r, u = this.cache(n);
            if ("string" == typeof t) u[y(t)] = i;
            else
                for (r in t) u[y(r)] = t[r];
            return u
        },
        get: function(n, t) { return void 0 === t ? this.cache(n) : n[this.expando] && n[this.expando][y(t)] },
        access: function(n, t, i) { return void 0 === t || t && "string" == typeof t && void 0 === i ? this.get(n, t) : (this.set(n, t, i), void 0 !== i ? i : t) },
        remove: function(n, t) {
            var u, r = n[this.expando];
            if (void 0 !== r) {
                if (void 0 !== t)
                    for (u = (t = Array.isArray(t) ? t.map(y) : (t = y(t)) in r ? [t] : t.match(l) || []).length; u--;) delete r[t[u]];
                (void 0 === t || i.isEmptyObject(r)) && (n.nodeType ? n[this.expando] = void 0 : delete n[this.expando])
            }
        },
        hasData: function(n) { var t = n[this.expando]; return void 0 !== t && !i.isEmptyObject(t) }
    };
    var r = new at,
        o = new at,
        ue = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
        fe = /[A-Z]/g;
    i.extend({ hasData: function(n) { return o.hasData(n) || r.hasData(n) }, data: function(n, t, i) { return o.access(n, t, i) }, removeData: function(n, t) { o.remove(n, t) }, _data: function(n, t, i) { return r.access(n, t, i) }, _removeData: function(n, t) { r.remove(n, t) } });
    i.fn.extend({
        data: function(n, t) {
            var f, u, e, i = this[0],
                s = i && i.attributes;
            if (void 0 === n) {
                if (this.length && (e = o.get(i), 1 === i.nodeType && !r.get(i, "hasDataAttrs"))) {
                    for (f = s.length; f--;) s[f] && 0 === (u = s[f].name).indexOf("data-") && (u = y(u.slice(5)), dr(i, u, e[u]));
                    r.set(i, "hasDataAttrs", !0)
                }
                return e
            }
            return "object" == typeof n ? this.each(function() { o.set(this, n) }) : p(this, function(t) { var r; if (i && void 0 === t) { if (void 0 !== (r = o.get(i, n)) || void 0 !== (r = dr(i, n))) return r } else this.each(function() { o.set(this, n, t) }) }, null, t, arguments.length > 1, null, !0)
        },
        removeData: function(n) { return this.each(function() { o.remove(this, n) }) }
    });
    i.extend({
        queue: function(n, t, u) { var f; if (n) return t = (t || "fx") + "queue", f = r.get(n, t), u && (!f || Array.isArray(u) ? f = r.access(n, t, i.makeArray(u)) : f.push(u)), f || [] },
        dequeue: function(n, t) {
            t = t || "fx";
            var r = i.queue(n, t),
                e = r.length,
                u = r.shift(),
                f = i._queueHooks(n, t),
                o = function() { i.dequeue(n, t) };
            "inprogress" === u && (u = r.shift(), e--);
            u && ("fx" === t && r.unshift("inprogress"), delete f.stop, u.call(n, o, f));
            !e && f && f.empty.fire()
        },
        _queueHooks: function(n, t) { var u = t + "queueHooks"; return r.get(n, u) || r.access(n, u, { empty: i.Callbacks("once memory").add(function() { r.remove(n, [t + "queue", u]) }) }) }
    });
    i.fn.extend({
        queue: function(n, t) {
            var r = 2;
            return "string" != typeof n && (t = n, n = "fx", r--), arguments.length < r ? i.queue(this[0], n) : void 0 === t ? this : this.each(function() {
                var r = i.queue(this, n, t);
                i._queueHooks(this, n);
                "fx" === n && "inprogress" !== r[0] && i.dequeue(this, n)
            })
        },
        dequeue: function(n) { return this.each(function() { i.dequeue(this, n) }) },
        clearQueue: function(n) { return this.queue(n || "fx", []) },
        promise: function(n, t) {
            var u, e = 1,
                o = i.Deferred(),
                f = this,
                s = this.length,
                h = function() {--e || o.resolveWith(f, [f]) };
            for ("string" != typeof n && (t = n, n = void 0), n = n || "fx"; s--;)(u = r.get(f[s], n + "queueHooks")) && u.empty && (e++, u.empty.add(h));
            return h(), o.promise(t)
        }
    });
    var gr = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
        vt = new RegExp("^(?:([+-])=|)(" + gr + ")([a-z%]*)$", "i"),
        w = ["Top", "Right", "Bottom", "Left"],
        ti = function(n, t) { return "none" === (n = t || n).style.display || "" === n.style.display && i.contains(n.ownerDocument, n) && "none" === i.css(n, "display") },
        nu = function(n, t, i, r) {
            var f, u, e = {};
            for (u in t) e[u] = n.style[u], n.style[u] = t[u];
            f = i.apply(n, r || []);
            for (u in t) n.style[u] = e[u];
            return f
        };
    ai = {};
    i.fn.extend({ show: function() { return ft(this, !0) }, hide: function() { return ft(this) }, toggle: function(n) { return "boolean" == typeof n ? n ? this.show() : this.hide() : this.each(function() { ti(this) ? i(this).show() : i(this).hide() }) } });
    var iu = /^(?:checkbox|radio)$/i,
        ru = /<([a-z][^\/\0>\x20\t\r\n\f]+)/i,
        uu = /^$|^module$|\/(?:java|ecma)script/i,
        c = { option: [1, "<select multiple='multiple'>", "<\/select>"], thead: [1, "<table>", "<\/table>"], col: [2, "<table><colgroup>", "<\/colgroup><\/table>"], tr: [2, "<table><tbody>", "<\/tbody><\/table>"], td: [3, "<table><tbody><tr>", "<\/tr><\/tbody><\/table>"], _default: [0, "", ""] };
    c.optgroup = c.option;
    c.tbody = c.tfoot = c.colgroup = c.caption = c.thead;
    c.th = c.td;
    fu = /<|&#?\w+;/;
    ! function() {
        var n = f.createDocumentFragment().appendChild(f.createElement("div")),
            t = f.createElement("input");
        t.setAttribute("type", "radio");
        t.setAttribute("checked", "checked");
        t.setAttribute("name", "t");
        n.appendChild(t);
        e.checkClone = n.cloneNode(!0).cloneNode(!0).lastChild.checked;
        n.innerHTML = "<textarea>x<\/textarea>";
        e.noCloneChecked = !!n.cloneNode(!0).lastChild.defaultValue
    }();
    var ii = f.documentElement,
        se = /^key/,
        he = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
        ou = /^([^.]*)(?:\.(.+)|)/;
    i.event = {
        global: {},
        add: function(n, t, u, f, e) {
            var p, v, k, y, w, h, s, c, o, b, d, a = r.get(n);
            if (a)
                for (u.handler && (u = (p = u).handler, e = p.selector), e && i.find.matchesSelector(ii, e), u.guid || (u.guid = i.guid++), (y = a.events) || (y = a.events = {}), (v = a.handle) || (v = a.handle = function(t) { if ("undefined" != typeof i && i.event.triggered !== t.type) return i.event.dispatch.apply(n, arguments) }), w = (t = (t || "").match(l) || [""]).length; w--;) o = d = (k = ou.exec(t[w]) || [])[1], b = (k[2] || "").split(".").sort(), o && (s = i.event.special[o] || {}, o = (e ? s.delegateType : s.bindType) || o, s = i.event.special[o] || {}, h = i.extend({ type: o, origType: d, data: f, handler: u, guid: u.guid, selector: e, needsContext: e && i.expr.match.needsContext.test(e), namespace: b.join(".") }, p), (c = y[o]) || ((c = y[o] = []).delegateCount = 0, s.setup && !1 !== s.setup.call(n, f, b, v) || n.addEventListener && n.addEventListener(o, v)), s.add && (s.add.call(n, h), h.handler.guid || (h.handler.guid = u.guid)), e ? c.splice(c.delegateCount++, 0, h) : c.push(h), i.event.global[o] = !0)
        },
        remove: function(n, t, u, f, e) {
            var y, k, h, v, p, s, c, a, o, b, d, w = r.hasData(n) && r.get(n);
            if (w && (v = w.events)) {
                for (p = (t = (t || "").match(l) || [""]).length; p--;)
                    if (h = ou.exec(t[p]) || [], o = d = h[1], b = (h[2] || "").split(".").sort(), o) {
                        for (c = i.event.special[o] || {}, a = v[o = (f ? c.delegateType : c.bindType) || o] || [], h = h[2] && new RegExp("(^|\\.)" + b.join("\\.(?:.*\\.|)") + "(\\.|$)"), k = y = a.length; y--;) s = a[y], !e && d !== s.origType || u && u.guid !== s.guid || h && !h.test(s.namespace) || f && f !== s.selector && ("**" !== f || !s.selector) || (a.splice(y, 1), s.selector && a.delegateCount--, c.remove && c.remove.call(n, s));
                        k && !a.length && (c.teardown && !1 !== c.teardown.call(n, b, w.handle) || i.removeEvent(n, o, w.handle), delete v[o])
                    } else
                        for (o in v) i.event.remove(n, o + t[p], u, f, !0);
                i.isEmptyObject(v) && r.remove(n, "handle events")
            }
        },
        dispatch: function(n) {
            var t = i.event.fix(n),
                u, h, c, e, f, l, s = new Array(arguments.length),
                a = (r.get(this, "events") || {})[t.type] || [],
                o = i.event.special[t.type] || {};
            for (s[0] = t, u = 1; u < arguments.length; u++) s[u] = arguments[u];
            if (t.delegateTarget = this, !o.preDispatch || !1 !== o.preDispatch.call(this, t)) {
                for (l = i.event.handlers.call(this, t, a), u = 0;
                    (e = l[u++]) && !t.isPropagationStopped();)
                    for (t.currentTarget = e.elem, h = 0;
                        (f = e.handlers[h++]) && !t.isImmediatePropagationStopped();) t.rnamespace && !t.rnamespace.test(f.namespace) || (t.handleObj = f, t.data = f.data, void 0 !== (c = ((i.event.special[f.origType] || {}).handle || f.handler).apply(e.elem, s)) && !1 === (t.result = c) && (t.preventDefault(), t.stopPropagation()));
                return o.postDispatch && o.postDispatch.call(this, t), t.result
            }
        },
        handlers: function(n, t) {
            var f, h, u, e, o, c = [],
                s = t.delegateCount,
                r = n.target;
            if (s && r.nodeType && !("click" === n.type && n.button >= 1))
                for (; r !== this; r = r.parentNode || this)
                    if (1 === r.nodeType && ("click" !== n.type || !0 !== r.disabled)) {
                        for (e = [], o = {}, f = 0; f < s; f++) void 0 === o[u = (h = t[f]).selector + " "] && (o[u] = h.needsContext ? i(u, this).index(r) > -1 : i.find(u, this, null, [r]).length), o[u] && e.push(h);
                        e.length && c.push({ elem: r, handlers: e })
                    }
            return r = this, s < t.length && c.push({ elem: r, handlers: t.slice(s) }), c
        },
        addProp: function(n, t) { Object.defineProperty(i.Event.prototype, n, { enumerable: !0, configurable: !0, get: u(t) ? function() { if (this.originalEvent) return t(this.originalEvent) } : function() { if (this.originalEvent) return this.originalEvent[n] }, set: function(t) { Object.defineProperty(this, n, { enumerable: !0, configurable: !0, writable: !0, value: t }) } }) },
        fix: function(n) { return n[i.expando] ? n : new i.Event(n) },
        special: { load: { noBubble: !0 }, focus: { trigger: function() { if (this !== su() && this.focus) return this.focus(), !1 }, delegateType: "focusin" }, blur: { trigger: function() { if (this === su() && this.blur) return this.blur(), !1 }, delegateType: "focusout" }, click: { trigger: function() { if ("checkbox" === this.type && this.click && v(this, "input")) return this.click(), !1 }, _default: function(n) { return v(n.target, "a") } }, beforeunload: { postDispatch: function(n) { void 0 !== n.result && n.originalEvent && (n.originalEvent.returnValue = n.result) } } }
    };
    i.removeEvent = function(n, t, i) { n.removeEventListener && n.removeEventListener(t, i) };
    i.Event = function(n, t) {
        if (!(this instanceof i.Event)) return new i.Event(n, t);
        n && n.type ? (this.originalEvent = n, this.type = n.type, this.isDefaultPrevented = n.defaultPrevented || void 0 === n.defaultPrevented && !1 === n.returnValue ? ri : et, this.target = n.target && 3 === n.target.nodeType ? n.target.parentNode : n.target, this.currentTarget = n.currentTarget, this.relatedTarget = n.relatedTarget) : this.type = n;
        t && i.extend(this, t);
        this.timeStamp = n && n.timeStamp || Date.now();
        this[i.expando] = !0
    };
    i.Event.prototype = {
        constructor: i.Event,
        isDefaultPrevented: et,
        isPropagationStopped: et,
        isImmediatePropagationStopped: et,
        isSimulated: !1,
        preventDefault: function() {
            var n = this.originalEvent;
            this.isDefaultPrevented = ri;
            n && !this.isSimulated && n.preventDefault()
        },
        stopPropagation: function() {
            var n = this.originalEvent;
            this.isPropagationStopped = ri;
            n && !this.isSimulated && n.stopPropagation()
        },
        stopImmediatePropagation: function() {
            var n = this.originalEvent;
            this.isImmediatePropagationStopped = ri;
            n && !this.isSimulated && n.stopImmediatePropagation();
            this.stopPropagation()
        }
    };
    i.each({ altKey: !0, bubbles: !0, cancelable: !0, changedTouches: !0, ctrlKey: !0, detail: !0, eventPhase: !0, metaKey: !0, pageX: !0, pageY: !0, shiftKey: !0, view: !0, char: !0, charCode: !0, key: !0, keyCode: !0, button: !0, buttons: !0, clientX: !0, clientY: !0, offsetX: !0, offsetY: !0, pointerId: !0, pointerType: !0, screenX: !0, screenY: !0, targetTouches: !0, toElement: !0, touches: !0, which: function(n) { var t = n.button; return null == n.which && se.test(n.type) ? null != n.charCode ? n.charCode : n.keyCode : !n.which && void 0 !== t && he.test(n.type) ? 1 & t ? 1 : 2 & t ? 3 : 4 & t ? 2 : 0 : n.which } }, i.event.addProp);
    i.each({ mouseenter: "mouseover", mouseleave: "mouseout", pointerenter: "pointerover", pointerleave: "pointerout" }, function(n, t) {
        i.event.special[n] = {
            delegateType: t,
            bindType: t,
            handle: function(n) {
                var u, f = this,
                    r = n.relatedTarget,
                    e = n.handleObj;
                return r && (r === f || i.contains(f, r)) || (n.type = e.origType, u = e.handler.apply(this, arguments), n.type = t), u
            }
        }
    });
    i.fn.extend({ on: function(n, t, i, r) { return yi(this, n, t, i, r) }, one: function(n, t, i, r) { return yi(this, n, t, i, r, 1) }, off: function(n, t, r) { var u, f; if (n && n.preventDefault && n.handleObj) return u = n.handleObj, i(n.delegateTarget).off(u.namespace ? u.origType + "." + u.namespace : u.origType, u.selector, u.handler), this; if ("object" == typeof n) { for (f in n) this.off(f, t, n[f]); return this } return !1 !== t && "function" != typeof t || (r = t, t = void 0), !1 === r && (r = et), this.each(function() { i.event.remove(this, n, r, t) }) } });
    var ce = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,
        le = /<script|<style|<link/i,
        ae = /checked\s*(?:[^=]|=\s*.checked.)/i,
        ve = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;
    i.extend({
        htmlPrefilter: function(n) { return n.replace(ce, "<$1><\/$2>") },
        clone: function(n, t, r) {
            var u, c, o, f, h = n.cloneNode(!0),
                l = i.contains(n.ownerDocument, n);
            if (!(e.noCloneChecked || 1 !== n.nodeType && 11 !== n.nodeType || i.isXMLDoc(n)))
                for (f = s(h), u = 0, c = (o = s(n)).length; u < c; u++) we(o[u], f[u]);
            if (t)
                if (r)
                    for (o = o || s(n), f = f || s(h), u = 0, c = o.length; u < c; u++) cu(o[u], f[u]);
                else cu(n, h);
            return (f = s(h, "script")).length > 0 && vi(f, !l && s(n, "script")), h
        },
        cleanData: function(n) {
            for (var u, t, f, s = i.event.special, e = 0; void 0 !== (t = n[e]); e++)
                if (lt(t)) {
                    if (u = t[r.expando]) {
                        if (u.events)
                            for (f in u.events) s[f] ? i.event.remove(t, f) : i.removeEvent(t, f, u.handle);
                        t[r.expando] = void 0
                    }
                    t[o.expando] && (t[o.expando] = void 0)
                }
        }
    });
    i.fn.extend({
        detach: function(n) { return lu(this, n, !0) },
        remove: function(n) { return lu(this, n) },
        text: function(n) { return p(this, function(n) { return void 0 === n ? i.text(this) : this.empty().each(function() { 1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = n) }) }, null, n, arguments.length) },
        append: function() { return ot(this, arguments, function(n) { 1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || hu(this, n).appendChild(n) }) },
        prepend: function() {
            return ot(this, arguments, function(n) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var t = hu(this, n);
                    t.insertBefore(n, t.firstChild)
                }
            })
        },
        before: function() { return ot(this, arguments, function(n) { this.parentNode && this.parentNode.insertBefore(n, this) }) },
        after: function() { return ot(this, arguments, function(n) { this.parentNode && this.parentNode.insertBefore(n, this.nextSibling) }) },
        empty: function() { for (var n, t = 0; null != (n = this[t]); t++) 1 === n.nodeType && (i.cleanData(s(n, !1)), n.textContent = ""); return this },
        clone: function(n, t) { return n = null != n && n, t = null == t ? n : t, this.map(function() { return i.clone(this, n, t) }) },
        html: function(n) {
            return p(this, function(n) {
                var t = this[0] || {},
                    r = 0,
                    u = this.length;
                if (void 0 === n && 1 === t.nodeType) return t.innerHTML;
                if ("string" == typeof n && !le.test(n) && !c[(ru.exec(n) || ["", ""])[1].toLowerCase()]) {
                    n = i.htmlPrefilter(n);
                    try {
                        for (; r < u; r++) 1 === (t = this[r] || {}).nodeType && (i.cleanData(s(t, !1)), t.innerHTML = n);
                        t = 0
                    } catch (n) {}
                }
                t && this.empty().append(n)
            }, null, n, arguments.length)
        },
        replaceWith: function() {
            var n = [];
            return ot(this, arguments, function(t) {
                var r = this.parentNode;
                i.inArray(this, n) < 0 && (i.cleanData(s(this)), r && r.replaceChild(t, this))
            }, n)
        }
    });
    i.each({ appendTo: "append", prependTo: "prepend", insertBefore: "before", insertAfter: "after", replaceAll: "replaceWith" }, function(n, t) { i.fn[n] = function(n) { for (var u, f = [], e = i(n), o = e.length - 1, r = 0; r <= o; r++) u = r === o ? this : this.clone(!0), i(e[r])[t](u), si.apply(f, u.get()); return this.pushStack(f) } });
    var pi = new RegExp("^(" + gr + ")(?!px)[a-z%]+$", "i"),
        ui = function(t) { var i = t.ownerDocument.defaultView; return i && i.opener || (i = n), i.getComputedStyle(t) },
        be = new RegExp(w.join("|"), "i");
    ! function() {
        function r() {
            if (t) {
                o.style.cssText = "position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0";
                t.style.cssText = "position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%";
                ii.appendChild(o).appendChild(t);
                var i = n.getComputedStyle(t);
                s = "1%" !== i.top;
                a = 12 === u(i.marginLeft);
                t.style.right = "60%";
                l = 36 === u(i.right);
                h = 36 === u(i.width);
                t.style.position = "absolute";
                c = 36 === t.offsetWidth || "absolute";
                ii.removeChild(o);
                t = null
            }
        }

        function u(n) { return Math.round(parseFloat(n)) }
        var s, h, c, l, a, o = f.createElement("div"),
            t = f.createElement("div");
        t.style && (t.style.backgroundClip = "content-box", t.cloneNode(!0).style.backgroundClip = "", e.clearCloneStyle = "content-box" === t.style.backgroundClip, i.extend(e, { boxSizingReliable: function() { return r(), h }, pixelBoxStyles: function() { return r(), l }, pixelPosition: function() { return r(), s }, reliableMarginLeft: function() { return r(), a }, scrollboxSize: function() { return r(), c } }))
    }();
    var ke = /^(none|table(?!-c[ea]).+)/,
        vu = /^--/,
        de = { position: "absolute", visibility: "hidden", display: "block" },
        yu = { letterSpacing: "0", fontWeight: "400" },
        pu = ["Webkit", "Moz", "ms"],
        wu = f.createElement("div").style;
    i.extend({
        cssHooks: { opacity: { get: function(n, t) { if (t) { var i = yt(n, "opacity"); return "" === i ? "1" : i } } } },
        cssNumber: { animationIterationCount: !0, columnCount: !0, fillOpacity: !0, flexGrow: !0, flexShrink: !0, fontWeight: !0, lineHeight: !0, opacity: !0, order: !0, orphans: !0, widows: !0, zIndex: !0, zoom: !0 },
        cssProps: {},
        style: function(n, t, r, u) {
            if (n && 3 !== n.nodeType && 8 !== n.nodeType && n.style) {
                var f, h, o, c = y(t),
                    l = vu.test(t),
                    s = n.style;
                if (l || (t = bu(c)), o = i.cssHooks[t] || i.cssHooks[c], void 0 === r) return o && "get" in o && void 0 !== (f = o.get(n, !1, u)) ? f : s[t];
                "string" == (h = typeof r) && (f = vt.exec(r)) && f[1] && (r = tu(n, t, f), h = "number");
                null != r && r === r && ("number" === h && (r += f && f[3] || (i.cssNumber[c] ? "" : "px")), e.clearCloneStyle || "" !== r || 0 !== t.indexOf("background") || (s[t] = "inherit"), o && "set" in o && void 0 === (r = o.set(n, r, u)) || (l ? s.setProperty(t, r) : s[t] = r))
            }
        },
        css: function(n, t, r, u) { var f, e, o, s = y(t); return vu.test(t) || (t = bu(s)), (o = i.cssHooks[t] || i.cssHooks[s]) && "get" in o && (f = o.get(n, !0, r)), void 0 === f && (f = yt(n, t, u)), "normal" === f && t in yu && (f = yu[t]), "" === r || r ? (e = parseFloat(f), !0 === r || isFinite(e) ? e || 0 : f) : f }
    });
    i.each(["height", "width"], function(n, t) {
        i.cssHooks[t] = {
            get: function(n, r, u) { if (r) return !ke.test(i.css(n, "display")) || n.getClientRects().length && n.getBoundingClientRect().width ? du(n, t, u) : nu(n, de, function() { return du(n, t, u) }) },
            set: function(n, r, u) {
                var s, f = ui(n),
                    h = "border-box" === i.css(n, "boxSizing", !1, f),
                    o = u && wi(n, t, u, h, f);
                return h && e.scrollboxSize() === f.position && (o -= Math.ceil(n["offset" + t[0].toUpperCase() + t.slice(1)] - parseFloat(f[t]) - wi(n, t, "border", !1, f) - .5)), o && (s = vt.exec(r)) && "px" !== (s[3] || "px") && (n.style[t] = r, r = i.css(n, t)), ku(n, r, o)
            }
        }
    });
    i.cssHooks.marginLeft = au(e.reliableMarginLeft, function(n, t) { if (t) return (parseFloat(yt(n, "marginLeft")) || n.getBoundingClientRect().left - nu(n, { marginLeft: 0 }, function() { return n.getBoundingClientRect().left })) + "px" });
    i.each({ margin: "", padding: "", border: "Width" }, function(n, t) { i.cssHooks[n + t] = { expand: function(i) { for (var r = 0, f = {}, u = "string" == typeof i ? i.split(" ") : [i]; r < 4; r++) f[n + w[r] + t] = u[r] || u[r - 2] || u[0]; return f } }; "margin" !== n && (i.cssHooks[n + t].set = ku) });
    i.fn.extend({
        css: function(n, t) {
            return p(this, function(n, t, r) {
                var f, e, o = {},
                    u = 0;
                if (Array.isArray(t)) { for (f = ui(n), e = t.length; u < e; u++) o[t[u]] = i.css(n, t[u], !1, f); return o }
                return void 0 !== r ? i.style(n, t, r) : i.css(n, t)
            }, n, t, arguments.length > 1)
        }
    });
    i.Tween = h;
    h.prototype = {
        constructor: h,
        init: function(n, t, r, u, f, e) {
            this.elem = n;
            this.prop = r;
            this.easing = f || i.easing._default;
            this.options = t;
            this.start = this.now = this.cur();
            this.end = u;
            this.unit = e || (i.cssNumber[r] ? "" : "px")
        },
        cur: function() { var n = h.propHooks[this.prop]; return n && n.get ? n.get(this) : h.propHooks._default.get(this) },
        run: function(n) { var t, r = h.propHooks[this.prop]; return this.pos = this.options.duration ? t = i.easing[this.easing](n, this.options.duration * n, 0, 1, this.options.duration) : t = n, this.now = (this.end - this.start) * t + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), r && r.set ? r.set(this) : h.propHooks._default.set(this), this }
    };
    h.prototype.init.prototype = h.prototype;
    h.propHooks = { _default: { get: function(n) { var t; return 1 !== n.elem.nodeType || null != n.elem[n.prop] && null == n.elem.style[n.prop] ? n.elem[n.prop] : (t = i.css(n.elem, n.prop, "")) && "auto" !== t ? t : 0 }, set: function(n) { i.fx.step[n.prop] ? i.fx.step[n.prop](n) : 1 !== n.elem.nodeType || null == n.elem.style[i.cssProps[n.prop]] && !i.cssHooks[n.prop] ? n.elem[n.prop] = n.now : i.style(n.elem, n.prop, n.now + n.unit) } } };
    h.propHooks.scrollTop = h.propHooks.scrollLeft = { set: function(n) { n.elem.nodeType && n.elem.parentNode && (n.elem[n.prop] = n.now) } };
    i.easing = { linear: function(n) { return n }, swing: function(n) { return .5 - Math.cos(n * Math.PI) / 2 }, _default: "swing" };
    i.fx = h.prototype.init;
    i.fx.step = {};
    gu = /^(?:toggle|show|hide)$/;
    nf = /queueHooks$/;
    i.Animation = i.extend(a, { tweeners: { "*": [function(n, t) { var i = this.createTween(n, t); return tu(i.elem, n, vt.exec(t), i), i }] }, tweener: function(n, t) { u(n) ? (t = n, n = ["*"]) : n = n.match(l); for (var i, r = 0, f = n.length; r < f; r++) i = n[r], a.tweeners[i] = a.tweeners[i] || [], a.tweeners[i].unshift(t) }, prefilters: [no], prefilter: function(n, t) { t ? a.prefilters.unshift(n) : a.prefilters.push(n) } });
    i.speed = function(n, t, r) {
        var f = n && "object" == typeof n ? i.extend({}, n) : { complete: r || !r && t || u(n) && n, duration: n, easing: r && t || t && !u(t) && t };
        return i.fx.off ? f.duration = 0 : "number" != typeof f.duration && (f.duration = f.duration in i.fx.speeds ? i.fx.speeds[f.duration] : i.fx.speeds._default), null != f.queue && !0 !== f.queue || (f.queue = "fx"), f.old = f.complete, f.complete = function() {
            u(f.old) && f.old.call(this);
            f.queue && i.dequeue(this, f.queue)
        }, f
    };
    i.fn.extend({
        fadeTo: function(n, t, i, r) { return this.filter(ti).css("opacity", 0).show().end().animate({ opacity: t }, n, i, r) },
        animate: function(n, t, u, f) {
            var s = i.isEmptyObject(n),
                o = i.speed(t, u, f),
                e = function() {
                    var t = a(this, i.extend({}, n), o);
                    (s || r.get(this, "finish")) && t.stop(!0)
                };
            return e.finish = e, s || !1 === o.queue ? this.each(e) : this.queue(o.queue, e)
        },
        stop: function(n, t, u) {
            var f = function(n) {
                var t = n.stop;
                delete n.stop;
                t(u)
            };
            return "string" != typeof n && (u = t, t = n, n = void 0), t && !1 !== n && this.queue(n || "fx", []), this.each(function() {
                var s = !0,
                    t = null != n && n + "queueHooks",
                    o = i.timers,
                    e = r.get(this);
                if (t) e[t] && e[t].stop && f(e[t]);
                else
                    for (t in e) e[t] && e[t].stop && nf.test(t) && f(e[t]);
                for (t = o.length; t--;) o[t].elem !== this || null != n && o[t].queue !== n || (o[t].anim.stop(u), s = !1, o.splice(t, 1));
                !s && u || i.dequeue(this, n)
            })
        },
        finish: function(n) {
            return !1 !== n && (n = n || "fx"), this.each(function() {
                var t, e = r.get(this),
                    u = e[n + "queue"],
                    o = e[n + "queueHooks"],
                    f = i.timers,
                    s = u ? u.length : 0;
                for (e.finish = !0, i.queue(this, n, []), o && o.stop && o.stop.call(this, !0), t = f.length; t--;) f[t].elem === this && f[t].queue === n && (f[t].anim.stop(!0), f.splice(t, 1));
                for (t = 0; t < s; t++) u[t] && u[t].finish && u[t].finish.call(this);
                delete e.finish
            })
        }
    });
    i.each(["toggle", "show", "hide"], function(n, t) {
        var r = i.fn[t];
        i.fn[t] = function(n, i, u) { return null == n || "boolean" == typeof n ? r.apply(this, arguments) : this.animate(ei(t, !0), n, i, u) }
    });
    i.each({ slideDown: ei("show"), slideUp: ei("hide"), slideToggle: ei("toggle"), fadeIn: { opacity: "show" }, fadeOut: { opacity: "hide" }, fadeToggle: { opacity: "toggle" } }, function(n, t) { i.fn[n] = function(n, i, r) { return this.animate(t, n, i, r) } });
    i.timers = [];
    i.fx.tick = function() {
        var r, n = 0,
            t = i.timers;
        for (st = Date.now(); n < t.length; n++)(r = t[n])() || t[n] !== r || t.splice(n--, 1);
        t.length || i.fx.stop();
        st = void 0
    };
    i.fx.timer = function(n) {
        i.timers.push(n);
        i.fx.start()
    };
    i.fx.interval = 13;
    i.fx.start = function() { fi || (fi = !0, bi()) };
    i.fx.stop = function() { fi = null };
    i.fx.speeds = { slow: 600, fast: 200, _default: 400 };
    i.fn.delay = function(t, r) {
            return t = i.fx ? i.fx.speeds[t] || t : t, r = r || "fx", this.queue(r, function(i, r) {
                var u = n.setTimeout(i, t);
                r.stop = function() { n.clearTimeout(u) }
            })
        },
        function() {
            var n = f.createElement("input"),
                t = f.createElement("select").appendChild(f.createElement("option"));
            n.type = "checkbox";
            e.checkOn = "" !== n.value;
            e.optSelected = t.selected;
            (n = f.createElement("input")).value = "t";
            n.type = "radio";
            e.radioValue = "t" === n.value
        }();
    ht = i.expr.attrHandle;
    i.fn.extend({ attr: function(n, t) { return p(this, i.attr, n, t, arguments.length > 1) }, removeAttr: function(n) { return this.each(function() { i.removeAttr(this, n) }) } });
    i.extend({
        attr: function(n, t, r) { var f, u, e = n.nodeType; if (3 !== e && 8 !== e && 2 !== e) return "undefined" == typeof n.getAttribute ? i.prop(n, t, r) : (1 === e && i.isXMLDoc(n) || (u = i.attrHooks[t.toLowerCase()] || (i.expr.match.bool.test(t) ? uf : void 0)), void 0 !== r ? null === r ? void i.removeAttr(n, t) : u && "set" in u && void 0 !== (f = u.set(n, r, t)) ? f : (n.setAttribute(t, r + ""), r) : u && "get" in u && null !== (f = u.get(n, t)) ? f : null == (f = i.find.attr(n, t)) ? void 0 : f) },
        attrHooks: { type: { set: function(n, t) { if (!e.radioValue && "radio" === t && v(n, "input")) { var i = n.value; return n.setAttribute("type", t), i && (n.value = i), t } } } },
        removeAttr: function(n, t) {
            var i, u = 0,
                r = t && t.match(l);
            if (r && 1 === n.nodeType)
                while (i = r[u++]) n.removeAttribute(i)
        }
    });
    uf = { set: function(n, t, r) { return !1 === t ? i.removeAttr(n, r) : n.setAttribute(r, r), r } };
    i.each(i.expr.match.bool.source.match(/\w+/g), function(n, t) {
        var r = ht[t] || i.find.attr;
        ht[t] = function(n, t, i) { var f, e, u = t.toLowerCase(); return i || (e = ht[u], ht[u] = f, f = null != r(n, t, i) ? u : null, ht[u] = e), f }
    });
    ff = /^(?:input|select|textarea|button)$/i;
    ef = /^(?:a|area)$/i;
    i.fn.extend({ prop: function(n, t) { return p(this, i.prop, n, t, arguments.length > 1) }, removeProp: function(n) { return this.each(function() { delete this[i.propFix[n] || n] }) } });
    i.extend({ prop: function(n, t, r) { var f, u, e = n.nodeType; if (3 !== e && 8 !== e && 2 !== e) return 1 === e && i.isXMLDoc(n) || (t = i.propFix[t] || t, u = i.propHooks[t]), void 0 !== r ? u && "set" in u && void 0 !== (f = u.set(n, r, t)) ? f : n[t] = r : u && "get" in u && null !== (f = u.get(n, t)) ? f : n[t] }, propHooks: { tabIndex: { get: function(n) { var t = i.find.attr(n, "tabindex"); return t ? parseInt(t, 10) : ff.test(n.nodeName) || ef.test(n.nodeName) && n.href ? 0 : -1 } } }, propFix: { "for": "htmlFor", "class": "className" } });
    e.optSelected || (i.propHooks.selected = {
        get: function(n) { var t = n.parentNode; return t && t.parentNode && t.parentNode.selectedIndex, null },
        set: function(n) {
            var t = n.parentNode;
            t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex)
        }
    });
    i.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() { i.propFix[this.toLowerCase()] = this });
    i.fn.extend({
        addClass: function(n) {
            var o, t, r, f, e, s, h, c = 0;
            if (u(n)) return this.each(function(t) { i(this).addClass(n.call(this, t, nt(this))) });
            if ((o = ki(n)).length)
                while (t = this[c++])
                    if (f = nt(t), r = 1 === t.nodeType && " " + g(f) + " ") {
                        for (s = 0; e = o[s++];) r.indexOf(" " + e + " ") < 0 && (r += e + " ");
                        f !== (h = g(r)) && t.setAttribute("class", h)
                    }
            return this
        },
        removeClass: function(n) {
            var o, r, t, f, e, s, h, c = 0;
            if (u(n)) return this.each(function(t) { i(this).removeClass(n.call(this, t, nt(this))) });
            if (!arguments.length) return this.attr("class", "");
            if ((o = ki(n)).length)
                while (r = this[c++])
                    if (f = nt(r), t = 1 === r.nodeType && " " + g(f) + " ") {
                        for (s = 0; e = o[s++];)
                            while (t.indexOf(" " + e + " ") > -1) t = t.replace(" " + e + " ", " ");
                        f !== (h = g(t)) && r.setAttribute("class", h)
                    }
            return this
        },
        toggleClass: function(n, t) {
            var f = typeof n,
                e = "string" === f || Array.isArray(n);
            return "boolean" == typeof t && e ? t ? this.addClass(n) : this.removeClass(n) : u(n) ? this.each(function(r) { i(this).toggleClass(n.call(this, r, nt(this), t), t) }) : this.each(function() {
                var t, o, u, s;
                if (e)
                    for (o = 0, u = i(this), s = ki(n); t = s[o++];) u.hasClass(t) ? u.removeClass(t) : u.addClass(t);
                else void 0 !== n && "boolean" !== f || ((t = nt(this)) && r.set(this, "__className__", t), this.setAttribute && this.setAttribute("class", t || !1 === n ? "" : r.get(this, "__className__") || ""))
            })
        },
        hasClass: function(n) {
            for (var t, r = 0, i = " " + n + " "; t = this[r++];)
                if (1 === t.nodeType && (" " + g(nt(t)) + " ").indexOf(i) > -1) return !0;
            return !1
        }
    });
    of = /\r/g;
    i.fn.extend({
        val: function(n) {
            var t, r, e, f = this[0];
            return arguments.length ? (e = u(n), this.each(function(r) {
                var u;
                1 === this.nodeType && (null == (u = e ? n.call(this, r, i(this).val()) : n) ? u = "" : "number" == typeof u ? u += "" : Array.isArray(u) && (u = i.map(u, function(n) { return null == n ? "" : n + "" })), (t = i.valHooks[this.type] || i.valHooks[this.nodeName.toLowerCase()]) && "set" in t && void 0 !== t.set(this, u, "value") || (this.value = u))
            })) : f ? (t = i.valHooks[f.type] || i.valHooks[f.nodeName.toLowerCase()]) && "get" in t && void 0 !== (r = t.get(f, "value")) ? r : "string" == typeof(r = f.value) ? r.replace(of, "") : null == r ? "" : r : void 0
        }
    });
    i.extend({
        valHooks: {
            option: { get: function(n) { var t = i.find.attr(n, "value"); return null != t ? t : g(i.text(n)) } },
            select: {
                get: function(n) {
                    for (var e, t, o = n.options, u = n.selectedIndex, f = "select-one" === n.type, s = f ? null : [], h = f ? u + 1 : o.length, r = u < 0 ? h : f ? u : 0; r < h; r++)
                        if (((t = o[r]).selected || r === u) && !t.disabled && (!t.parentNode.disabled || !v(t.parentNode, "optgroup"))) {
                            if (e = i(t).val(), f) return e;
                            s.push(e)
                        }
                    return s
                },
                set: function(n, t) { for (var r, u, f = n.options, e = i.makeArray(t), o = f.length; o--;)((u = f[o]).selected = i.inArray(i.valHooks.option.get(u), e) > -1) && (r = !0); return r || (n.selectedIndex = -1), e }
            }
        }
    });
    i.each(["radio", "checkbox"], function() {
        i.valHooks[this] = { set: function(n, t) { if (Array.isArray(t)) return n.checked = i.inArray(i(n).val(), t) > -1 } };
        e.checkOn || (i.valHooks[this].get = function(n) { return null === n.getAttribute("value") ? "on" : n.value })
    });
    e.focusin = "onfocusin" in n;
    di = /^(?:focusinfocus|focusoutblur)$/;
    gi = function(n) { n.stopPropagation() };
    i.extend(i.event, {
        trigger: function(t, e, o, s) {
            var k, c, l, d, v, y, a, p, w = [o || f],
                h = kt.call(t, "type") ? t.type : t,
                b = kt.call(t, "namespace") ? t.namespace.split(".") : [];
            if (c = p = l = o = o || f, 3 !== o.nodeType && 8 !== o.nodeType && !di.test(h + i.event.triggered) && (h.indexOf(".") > -1 && (h = (b = h.split(".")).shift(), b.sort()), v = h.indexOf(":") < 0 && "on" + h, t = t[i.expando] ? t : new i.Event(h, "object" == typeof t && t), t.isTrigger = s ? 2 : 3, t.namespace = b.join("."), t.rnamespace = t.namespace ? new RegExp("(^|\\.)" + b.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, t.result = void 0, t.target || (t.target = o), e = null == e ? [t] : i.makeArray(e, [t]), a = i.event.special[h] || {}, s || !a.trigger || !1 !== a.trigger.apply(o, e))) {
                if (!s && !a.noBubble && !tt(o)) {
                    for (d = a.delegateType || h, di.test(d + h) || (c = c.parentNode); c; c = c.parentNode) w.push(c), l = c;
                    l === (o.ownerDocument || f) && w.push(l.defaultView || l.parentWindow || n)
                }
                for (k = 0;
                    (c = w[k++]) && !t.isPropagationStopped();) p = c, t.type = k > 1 ? d : a.bindType || h, (y = (r.get(c, "events") || {})[t.type] && r.get(c, "handle")) && y.apply(c, e), (y = v && c[v]) && y.apply && lt(c) && (t.result = y.apply(c, e), !1 === t.result && t.preventDefault());
                return t.type = h, s || t.isDefaultPrevented() || a._default && !1 !== a._default.apply(w.pop(), e) || !lt(o) || v && u(o[h]) && !tt(o) && ((l = o[v]) && (o[v] = null), i.event.triggered = h, t.isPropagationStopped() && p.addEventListener(h, gi), o[h](), t.isPropagationStopped() && p.removeEventListener(h, gi), i.event.triggered = void 0, l && (o[v] = l)), t.result
            }
        },
        simulate: function(n, t, r) {
            var u = i.extend(new i.Event, r, { type: n, isSimulated: !0 });
            i.event.trigger(u, null, t)
        }
    });
    i.fn.extend({ trigger: function(n, t) { return this.each(function() { i.event.trigger(n, t, this) }) }, triggerHandler: function(n, t) { var r = this[0]; if (r) return i.event.trigger(n, t, r, !0) } });
    e.focusin || i.each({ focus: "focusin", blur: "focusout" }, function(n, t) {
        var u = function(n) { i.event.simulate(t, n.target, i.event.fix(n)) };
        i.event.special[t] = {
            setup: function() {
                var i = this.ownerDocument || this,
                    f = r.access(i, t);
                f || i.addEventListener(n, u, !0);
                r.access(i, t, (f || 0) + 1)
            },
            teardown: function() {
                var i = this.ownerDocument || this,
                    f = r.access(i, t) - 1;
                f ? r.access(i, t, f) : (i.removeEventListener(n, u, !0), r.remove(i, t))
            }
        }
    });
    var pt = n.location,
        sf = Date.now(),
        nr = /\?/;
    i.parseXML = function(t) { var r; if (!t || "string" != typeof t) return null; try { r = (new n.DOMParser).parseFromString(t, "text/xml") } catch (n) { r = void 0 } return r && !r.getElementsByTagName("parsererror").length || i.error("Invalid XML: " + t), r };
    var io = /\[\]$/,
        hf = /\r?\n/g,
        ro = /^(?:submit|button|image|reset|file)$/i,
        uo = /^(?:input|select|textarea|keygen)/i;
    i.param = function(n, t) {
        var r, f = [],
            e = function(n, t) {
                var i = u(t) ? t() : t;
                f[f.length] = encodeURIComponent(n) + "=" + encodeURIComponent(null == i ? "" : i)
            };
        if (Array.isArray(n) || n.jquery && !i.isPlainObject(n)) i.each(n, function() { e(this.name, this.value) });
        else
            for (r in n) tr(r, n[r], t, e);
        return f.join("&")
    };
    i.fn.extend({ serialize: function() { return i.param(this.serializeArray()) }, serializeArray: function() { return this.map(function() { var n = i.prop(this, "elements"); return n ? i.makeArray(n) : this }).filter(function() { var n = this.type; return this.name && !i(this).is(":disabled") && uo.test(this.nodeName) && !ro.test(n) && (this.checked || !iu.test(n)) }).map(function(n, t) { var r = i(this).val(); return null == r ? null : Array.isArray(r) ? i.map(r, function(n) { return { name: t.name, value: n.replace(hf, "\r\n") } }) : { name: t.name, value: r.replace(hf, "\r\n") } }).get() } });
    var fo = /%20/g,
        eo = /#.*$/,
        oo = /([?&])_=[^&]*/,
        so = /^(.*?):[ \t]*([^\r\n]*)$/gm,
        ho = /^(?:GET|HEAD)$/,
        co = /^\/\//,
        cf = {},
        ir = {},
        lf = "*/".concat("*"),
        rr = f.createElement("a");
    return rr.href = pt.href, i.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: { url: pt.href, type: "GET", isLocal: /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(pt.protocol), global: !0, processData: !0, async: !0, contentType: "application/x-www-form-urlencoded; charset=UTF-8", accepts: { "*": lf, text: "text/plain", html: "text/html", xml: "application/xml, text/xml", json: "application/json, text/javascript" }, contents: { xml: /\bxml\b/, html: /\bhtml/, json: /\bjson\b/ }, responseFields: { xml: "responseXML", text: "responseText", json: "responseJSON" }, converters: { "* text": String, "text html": !0, "text json": JSON.parse, "text xml": i.parseXML }, flatOptions: { url: !0, context: !0 } },
        ajaxSetup: function(n, t) { return t ? ur(ur(n, i.ajaxSettings), t) : ur(i.ajaxSettings, n) },
        ajaxPrefilter: af(cf),
        ajaxTransport: af(ir),
        ajax: function(t, r) {
            function b(t, r, f, c) {
                var v, rt, b, p, g, l = r;
                s || (s = !0, d && n.clearTimeout(d), a = void 0, k = c || "", e.readyState = t > 0 ? 4 : 0, v = t >= 200 && t < 300 || 304 === t, f && (p = lo(u, e, f)), p = ao(u, p, e, v), v ? (u.ifModified && ((g = e.getResponseHeader("Last-Modified")) && (i.lastModified[o] = g), (g = e.getResponseHeader("etag")) && (i.etag[o] = g)), 204 === t || "HEAD" === u.type ? l = "nocontent" : 304 === t ? l = "notmodified" : (l = p.state, rt = p.data, v = !(b = p.error))) : (b = l, !t && l || (l = "error", t < 0 && (t = 0))), e.status = t, e.statusText = (r || l) + "", v ? tt.resolveWith(h, [rt, l, e]) : tt.rejectWith(h, [e, l, b]), e.statusCode(w), w = void 0, y && nt.trigger(v ? "ajaxSuccess" : "ajaxError", [e, u, v ? rt : b]), it.fireWith(h, [e, l]), y && (nt.trigger("ajaxComplete", [e, u]), --i.active || i.event.trigger("ajaxStop")))
            }
            "object" == typeof t && (r = t, t = void 0);
            r = r || {};
            var a, o, k, v, d, c, s, y, g, p, u = i.ajaxSetup({}, r),
                h = u.context || u,
                nt = u.context && (h.nodeType || h.jquery) ? i(h) : i.event,
                tt = i.Deferred(),
                it = i.Callbacks("once memory"),
                w = u.statusCode || {},
                rt = {},
                ut = {},
                ft = "canceled",
                e = {
                    readyState: 0,
                    getResponseHeader: function(n) {
                        var t;
                        if (s) {
                            if (!v)
                                for (v = {}; t = so.exec(k);) v[t[1].toLowerCase()] = t[2];
                            t = v[n.toLowerCase()]
                        }
                        return null == t ? null : t
                    },
                    getAllResponseHeaders: function() { return s ? k : null },
                    setRequestHeader: function(n, t) { return null == s && (n = ut[n.toLowerCase()] = ut[n.toLowerCase()] || n, rt[n] = t), this },
                    overrideMimeType: function(n) { return null == s && (u.mimeType = n), this },
                    statusCode: function(n) {
                        var t;
                        if (n)
                            if (s) e.always(n[e.status]);
                            else
                                for (t in n) w[t] = [w[t], n[t]];
                        return this
                    },
                    abort: function(n) { var t = n || ft; return a && a.abort(t), b(0, t), this }
                };
            if (tt.promise(e), u.url = ((t || u.url || pt.href) + "").replace(co, pt.protocol + "//"), u.type = r.method || r.type || u.method || u.type, u.dataTypes = (u.dataType || "*").toLowerCase().match(l) || [""], null == u.crossDomain) {
                c = f.createElement("a");
                try {
                    c.href = u.url;
                    c.href = c.href;
                    u.crossDomain = rr.protocol + "//" + rr.host != c.protocol + "//" + c.host
                } catch (n) { u.crossDomain = !0 }
            }
            if (u.data && u.processData && "string" != typeof u.data && (u.data = i.param(u.data, u.traditional)), vf(cf, u, r, e), s) return e;
            (y = i.event && u.global) && 0 == i.active++ && i.event.trigger("ajaxStart");
            u.type = u.type.toUpperCase();
            u.hasContent = !ho.test(u.type);
            o = u.url.replace(eo, "");
            u.hasContent ? u.data && u.processData && 0 === (u.contentType || "").indexOf("application/x-www-form-urlencoded") && (u.data = u.data.replace(fo, "+")) : (p = u.url.slice(o.length), u.data && (u.processData || "string" == typeof u.data) && (o += (nr.test(o) ? "&" : "?") + u.data, delete u.data), !1 === u.cache && (o = o.replace(oo, "$1"), p = (nr.test(o) ? "&" : "?") + "_=" + sf++ + p), u.url = o + p);
            u.ifModified && (i.lastModified[o] && e.setRequestHeader("If-Modified-Since", i.lastModified[o]), i.etag[o] && e.setRequestHeader("If-None-Match", i.etag[o]));
            (u.data && u.hasContent && !1 !== u.contentType || r.contentType) && e.setRequestHeader("Content-Type", u.contentType);
            e.setRequestHeader("Accept", u.dataTypes[0] && u.accepts[u.dataTypes[0]] ? u.accepts[u.dataTypes[0]] + ("*" !== u.dataTypes[0] ? ", " + lf + "; q=0.01" : "") : u.accepts["*"]);
            for (g in u.headers) e.setRequestHeader(g, u.headers[g]);
            if (u.beforeSend && (!1 === u.beforeSend.call(h, e, u) || s)) return e.abort();
            if (ft = "abort", it.add(u.complete), e.done(u.success), e.fail(u.error), a = vf(ir, u, r, e)) {
                if (e.readyState = 1, y && nt.trigger("ajaxSend", [e, u]), s) return e;
                u.async && u.timeout > 0 && (d = n.setTimeout(function() { e.abort("timeout") }, u.timeout));
                try {
                    s = !1;
                    a.send(rt, b)
                } catch (n) {
                    if (s) throw n;
                    b(-1, n)
                }
            } else b(-1, "No Transport");
            return e
        },
        getJSON: function(n, t, r) { return i.get(n, t, r, "json") },
        getScript: function(n, t) { return i.get(n, void 0, t, "script") }
    }), i.each(["get", "post"], function(n, t) { i[t] = function(n, r, f, e) { return u(r) && (e = e || f, f = r, r = void 0), i.ajax(i.extend({ url: n, type: t, dataType: e, data: r, success: f }, i.isPlainObject(n) && n)) } }), i._evalUrl = function(n) { return i.ajax({ url: n, type: "GET", dataType: "script", cache: !0, async: !1, global: !1, throws: !0 }) }, i.fn.extend({
        wrapAll: function(n) { var t; return this[0] && (u(n) && (n = n.call(this[0])), t = i(n, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && t.insertBefore(this[0]), t.map(function() { for (var n = this; n.firstElementChild;) n = n.firstElementChild; return n }).append(this)), this },
        wrapInner: function(n) {
            return u(n) ? this.each(function(t) { i(this).wrapInner(n.call(this, t)) }) : this.each(function() {
                var t = i(this),
                    r = t.contents();
                r.length ? r.wrapAll(n) : t.append(n)
            })
        },
        wrap: function(n) { var t = u(n); return this.each(function(r) { i(this).wrapAll(t ? n.call(this, r) : n) }) },
        unwrap: function(n) { return this.parent(n).not("body").each(function() { i(this).replaceWith(this.childNodes) }), this }
    }), i.expr.pseudos.hidden = function(n) { return !i.expr.pseudos.visible(n) }, i.expr.pseudos.visible = function(n) { return !!(n.offsetWidth || n.offsetHeight || n.getClientRects().length) }, i.ajaxSettings.xhr = function() { try { return new n.XMLHttpRequest } catch (n) {} }, yf = { 0: 200, 1223: 204 }, ct = i.ajaxSettings.xhr(), e.cors = !!ct && "withCredentials" in ct, e.ajax = ct = !!ct, i.ajaxTransport(function(t) {
        var i, r;
        if (e.cors || ct && !t.crossDomain) return {
            send: function(u, f) {
                var o, e = t.xhr();
                if (e.open(t.type, t.url, t.async, t.username, t.password), t.xhrFields)
                    for (o in t.xhrFields) e[o] = t.xhrFields[o];
                t.mimeType && e.overrideMimeType && e.overrideMimeType(t.mimeType);
                t.crossDomain || u["X-Requested-With"] || (u["X-Requested-With"] = "XMLHttpRequest");
                for (o in u) e.setRequestHeader(o, u[o]);
                i = function(n) { return function() { i && (i = r = e.onload = e.onerror = e.onabort = e.ontimeout = e.onreadystatechange = null, "abort" === n ? e.abort() : "error" === n ? "number" != typeof e.status ? f(0, "error") : f(e.status, e.statusText) : f(yf[e.status] || e.status, e.statusText, "text" !== (e.responseType || "text") || "string" != typeof e.responseText ? { binary: e.response } : { text: e.responseText }, e.getAllResponseHeaders())) } };
                e.onload = i();
                r = e.onerror = e.ontimeout = i("error");
                void 0 !== e.onabort ? e.onabort = r : e.onreadystatechange = function() { 4 === e.readyState && n.setTimeout(function() { i && r() }) };
                i = i("abort");
                try { e.send(t.hasContent && t.data || null) } catch (n) { if (i) throw n; }
            },
            abort: function() { i && i() }
        }
    }), i.ajaxPrefilter(function(n) { n.crossDomain && (n.contents.script = !1) }), i.ajaxSetup({ accepts: { script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript" }, contents: { script: /\b(?:java|ecma)script\b/ }, converters: { "text script": function(n) { return i.globalEval(n), n } } }), i.ajaxPrefilter("script", function(n) {
        void 0 === n.cache && (n.cache = !1);
        n.crossDomain && (n.type = "GET")
    }), i.ajaxTransport("script", function(n) {
        if (n.crossDomain) {
            var r, t;
            return {
                send: function(u, e) {
                    r = i("<script>").prop({ charset: n.scriptCharset, src: n.url }).on("load error", t = function(n) {
                        r.remove();
                        t = null;
                        n && e("error" === n.type ? 404 : 200, n.type)
                    });
                    f.head.appendChild(r[0])
                },
                abort: function() { t && t() }
            }
        }
    }), fr = [], oi = /(=)\?(?=&|$)|\?\?/, i.ajaxSetup({ jsonp: "callback", jsonpCallback: function() { var n = fr.pop() || i.expando + "_" + sf++; return this[n] = !0, n } }), i.ajaxPrefilter("json jsonp", function(t, r, f) {
        var e, o, s, h = !1 !== t.jsonp && (oi.test(t.url) ? "url" : "string" == typeof t.data && 0 === (t.contentType || "").indexOf("application/x-www-form-urlencoded") && oi.test(t.data) && "data");
        if (h || "jsonp" === t.dataTypes[0]) return e = t.jsonpCallback = u(t.jsonpCallback) ? t.jsonpCallback() : t.jsonpCallback, h ? t[h] = t[h].replace(oi, "$1" + e) : !1 !== t.jsonp && (t.url += (nr.test(t.url) ? "&" : "?") + t.jsonp + "=" + e), t.converters["script json"] = function() { return s || i.error(e + " was not called"), s[0] }, t.dataTypes[0] = "json", o = n[e], n[e] = function() { s = arguments }, f.always(function() {
            void 0 === o ? i(n).removeProp(e) : n[e] = o;
            t[e] && (t.jsonpCallback = r.jsonpCallback, fr.push(e));
            s && u(o) && o(s[0]);
            s = o = void 0
        }), "script"
    }), e.createHTMLDocument = function() { var n = f.implementation.createHTMLDocument("").body; return n.innerHTML = "<form><\/form><form><\/form>", 2 === n.childNodes.length }(), i.parseHTML = function(n, t, r) { if ("string" != typeof n) return []; "boolean" == typeof t && (r = t, t = !1); var s, u, o; return t || (e.createHTMLDocument ? ((s = (t = f.implementation.createHTMLDocument("")).createElement("base")).href = f.location.href, t.head.appendChild(s)) : t = f), u = ci.exec(n), o = !r && [], u ? [t.createElement(u[1])] : (u = eu([n], t, o), o && o.length && i(o).remove(), i.merge([], u.childNodes)) }, i.fn.load = function(n, t, r) {
        var f, s, h, e = this,
            o = n.indexOf(" ");
        return o > -1 && (f = g(n.slice(o)), n = n.slice(0, o)), u(t) ? (r = t, t = void 0) : t && "object" == typeof t && (s = "POST"), e.length > 0 && i.ajax({ url: n, type: s || "GET", dataType: "html", data: t }).done(function(n) {
            h = arguments;
            e.html(f ? i("<div>").append(i.parseHTML(n)).find(f) : n)
        }).always(r && function(n, t) { e.each(function() { r.apply(this, h || [n.responseText, t, n]) }) }), this
    }, i.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(n, t) { i.fn[t] = function(n) { return this.on(t, n) } }), i.expr.pseudos.animated = function(n) { return i.grep(i.timers, function(t) { return n === t.elem }).length }, i.offset = {
        setOffset: function(n, t, r) {
            var v, o, s, h, f, c, y, l = i.css(n, "position"),
                a = i(n),
                e = {};
            "static" === l && (n.style.position = "relative");
            f = a.offset();
            s = i.css(n, "top");
            c = i.css(n, "left");
            (y = ("absolute" === l || "fixed" === l) && (s + c).indexOf("auto") > -1) ? (h = (v = a.position()).top, o = v.left) : (h = parseFloat(s) || 0, o = parseFloat(c) || 0);
            u(t) && (t = t.call(n, r, i.extend({}, f)));
            null != t.top && (e.top = t.top - f.top + h);
            null != t.left && (e.left = t.left - f.left + o);
            "using" in t ? t.using.call(n, e) : a.css(e)
        }
    }, i.fn.extend({
        offset: function(n) { if (arguments.length) return void 0 === n ? this : this.each(function(t) { i.offset.setOffset(this, n, t) }); var r, u, t = this[0]; if (t) return t.getClientRects().length ? (r = t.getBoundingClientRect(), u = t.ownerDocument.defaultView, { top: r.top + u.pageYOffset, left: r.left + u.pageXOffset }) : { top: 0, left: 0 } },
        position: function() {
            if (this[0]) {
                var n, r, u, t = this[0],
                    f = { top: 0, left: 0 };
                if ("fixed" === i.css(t, "position")) r = t.getBoundingClientRect();
                else {
                    for (r = this.offset(), u = t.ownerDocument, n = t.offsetParent || u.documentElement; n && (n === u.body || n === u.documentElement) && "static" === i.css(n, "position");) n = n.parentNode;
                    n && n !== t && 1 === n.nodeType && ((f = i(n).offset()).top += i.css(n, "borderTopWidth", !0), f.left += i.css(n, "borderLeftWidth", !0))
                }
                return { top: r.top - f.top - i.css(t, "marginTop", !0), left: r.left - f.left - i.css(t, "marginLeft", !0) }
            }
        },
        offsetParent: function() { return this.map(function() { for (var n = this.offsetParent; n && "static" === i.css(n, "position");) n = n.offsetParent; return n || ii }) }
    }), i.each({ scrollLeft: "pageXOffset", scrollTop: "pageYOffset" }, function(n, t) {
        var r = "pageYOffset" === t;
        i.fn[n] = function(i) {
            return p(this, function(n, i, u) {
                var f;
                if (tt(n) ? f = n : 9 === n.nodeType && (f = n.defaultView), void 0 === u) return f ? f[t] : n[i];
                f ? f.scrollTo(r ? f.pageXOffset : u, r ? u : f.pageYOffset) : n[i] = u
            }, n, i, arguments.length)
        }
    }), i.each(["top", "left"], function(n, t) { i.cssHooks[t] = au(e.pixelPosition, function(n, r) { if (r) return r = yt(n, t), pi.test(r) ? i(n).position()[t] + "px" : r }) }), i.each({ Height: "height", Width: "width" }, function(n, t) {
        i.each({ padding: "inner" + n, content: t, "": "outer" + n }, function(r, u) {
            i.fn[u] = function(f, e) {
                var o = arguments.length && (r || "boolean" != typeof f),
                    s = r || (!0 === f || !0 === e ? "margin" : "border");
                return p(this, function(t, r, f) { var e; return tt(t) ? 0 === u.indexOf("outer") ? t["inner" + n] : t.document.documentElement["client" + n] : 9 === t.nodeType ? (e = t.documentElement, Math.max(t.body["scroll" + n], e["scroll" + n], t.body["offset" + n], e["offset" + n], e["client" + n])) : void 0 === f ? i.css(t, r, s) : i.style(t, r, f, s) }, t, o ? f : void 0, o)
            }
        })
    }), i.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "), function(n, t) { i.fn[t] = function(n, i) { return arguments.length > 0 ? this.on(t, null, n, i) : this.trigger(t) } }), i.fn.extend({ hover: function(n, t) { return this.mouseenter(n).mouseleave(t || n) } }), i.fn.extend({ bind: function(n, t, i) { return this.on(n, null, t, i) }, unbind: function(n, t) { return this.off(n, null, t) }, delegate: function(n, t, i, r) { return this.on(t, n, i, r) }, undelegate: function(n, t, i) { return 1 === arguments.length ? this.off(n, "**") : this.off(t, n || "**", i) } }), i.proxy = function(n, t) { var f, e, r; if ("string" == typeof t && (f = n[t], t = n, n = f), u(n)) return e = d.call(arguments, 2), r = function() { return n.apply(t || this, e.concat(d.call(arguments))) }, r.guid = n.guid = n.guid || i.guid++, r }, i.holdReady = function(n) { n ? i.readyWait++ : i.ready(!0) }, i.isArray = Array.isArray, i.parseJSON = JSON.parse, i.nodeName = v, i.isFunction = u, i.isWindow = tt, i.camelCase = y, i.type = it, i.now = Date.now, i.isNumeric = function(n) { var t = i.type(n); return ("number" === t || "string" === t) && !isNaN(n - parseFloat(n)) }, "function" == typeof define && define.amd && define("jquery", [], function() { return i }), pf = n.jQuery, wf = n.$, i.noConflict = function(t) { return n.$ === i && (n.$ = wf), t && n.jQuery === i && (n.jQuery = pf), i }, t || (n.jQuery = n.$ = i), i
}),
function(n, t) { "object" == typeof exports && "undefined" != typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define(t) : n.Popper = t() }(this, function() {
    "use strict";

    function et(n) { return n && "[object Function]" === {}.toString.call(n) }

    function r(n, t) { if (1 !== n.nodeType) return []; var i = getComputedStyle(n, null); return t ? i[t] : i }

    function p(n) { return "HTML" === n.nodeName ? n : n.parentNode || n.host }

    function s(n) {
        if (!n) return document.body;
        switch (n.nodeName) {
            case "HTML":
            case "BODY":
                return n.ownerDocument.body;
            case "#document":
                return n.body
        }
        var t = r(n),
            i = t.overflow,
            u = t.overflowX,
            f = t.overflowY;
        return /(auto|scroll|overlay)/.test(i + f + u) ? n : s(p(n))
    }

    function u(n) { return 11 === n ? ui : 10 === n ? fi : ui || fi }

    function f(n) { var e, t, i; if (!n) return document.documentElement; for (e = u(10) ? document.body : null, t = n.offsetParent; t === e && n.nextElementSibling;) t = (n = n.nextElementSibling).offsetParent; return i = t && t.nodeName, i && "BODY" !== i && "HTML" !== i ? -1 !== ["TD", "TABLE"].indexOf(t.nodeName) && "static" === r(t, "position") ? f(t) : t : n ? n.ownerDocument.documentElement : document.documentElement }

    function oi(n) { var t = n.nodeName; return "BODY" !== t && ("HTML" === t || f(n.firstElementChild) === n) }

    function w(n) { return null === n.parentNode ? n : w(n.parentNode) }

    function c(n, t) {
        var i, u;
        if (!n || !n.nodeType || !t || !t.nodeType) return document.documentElement;
        var e = n.compareDocumentPosition(t) & Node.DOCUMENT_POSITION_FOLLOWING,
            o = e ? n : t,
            s = e ? t : n,
            r = document.createRange();
        return (r.setStart(o, 0), r.setEnd(s, 0), i = r.commonAncestorContainer, n !== i && t !== i || o.contains(s)) ? oi(i) ? i : f(i) : (u = w(n), u.host ? c(u.host, t) : c(n, w(t).host))
    }

    function e(n) {
        var f = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : "top",
            t = "top" === f ? "scrollTop" : "scrollLeft",
            i = n.nodeName,
            r, u;
        return "BODY" === i || "HTML" === i ? (r = n.ownerDocument.documentElement, u = n.ownerDocument.scrollingElement || r, u[t]) : n[t]
    }

    function si(n, t) {
        var f = 2 < arguments.length && void 0 !== arguments[2] && arguments[2],
            r = e(t, "top"),
            u = e(t, "left"),
            i = f ? -1 : 1;
        return n.top += r * i, n.bottom += r * i, n.left += u * i, n.right += u * i, n
    }

    function ot(n, t) {
        var i = "x" === t ? "Left" : "Top",
            r = "Left" == i ? "Right" : "Bottom";
        return parseFloat(n["border" + i + "Width"], 10) + parseFloat(n["border" + r + "Width"], 10)
    }

    function st(n, i, r, f) { return t(i["offset" + n], i["scroll" + n], r["client" + n], r["offset" + n], r["scroll" + n], u(10) ? r["offset" + n] + f["margin" + ("Height" === n ? "Top" : "Left")] + f["margin" + ("Height" === n ? "Bottom" : "Right")] : 0) }

    function ht() {
        var t = document.body,
            n = document.documentElement,
            i = u(10) && getComputedStyle(n);
        return { height: st("Height", t, n, i), width: st("Width", t, n, i) }
    }

    function i(t) { return n({}, t, { right: t.left + t.width, bottom: t.top + t.height }) }

    function b(n) {
        var t = {},
            o, s, l;
        try { u(10) ? (t = n.getBoundingClientRect(), o = e(n, "top"), s = e(n, "left"), t.top += o, t.left += s, t.bottom += o, t.right += s) : t = n.getBoundingClientRect() } catch (r) {}
        var f = { left: t.left, top: t.top, width: t.right - t.left, height: t.bottom - t.top },
            a = "HTML" === n.nodeName ? ht() : {},
            v = a.width || n.clientWidth || f.right - f.left,
            y = a.height || n.clientHeight || f.bottom - f.top,
            h = n.offsetWidth - v,
            c = n.offsetHeight - y;
        return (h || c) && (l = r(n), h -= ot(l, "x"), c -= ot(l, "y"), f.width -= h, f.height -= c), i(f)
    }

    function k(n, f) {
        var w = 2 < arguments.length && void 0 !== arguments[2] && arguments[2],
            k = u(10),
            d = "HTML" === f.nodeName,
            h = b(n),
            o = b(f),
            v = s(n),
            c = r(f),
            y = parseFloat(c.borderTopWidth, 10),
            p = parseFloat(c.borderLeftWidth, 10),
            e, l, a;
        return w && "HTML" === f.nodeName && (o.top = t(o.top, 0), o.left = t(o.left, 0)), e = i({ top: h.top - o.top - y, left: h.left - o.left - p, width: h.width, height: h.height }), (e.marginTop = 0, e.marginLeft = 0, !k && d) && (l = parseFloat(c.marginTop, 10), a = parseFloat(c.marginLeft, 10), e.top -= y - l, e.bottom -= y - l, e.left -= p - a, e.right -= p - a, e.marginTop = l, e.marginLeft = a), (k && !w ? f.contains(v) : f === v && "BODY" !== v.nodeName) && (e = si(e, f)), e
    }

    function hi(n) {
        var f = 1 < arguments.length && void 0 !== arguments[1] && arguments[1],
            r = n.ownerDocument.documentElement,
            u = k(n, r),
            o = t(r.clientWidth, window.innerWidth || 0),
            s = t(r.clientHeight, window.innerHeight || 0),
            h = f ? 0 : e(r),
            c = f ? 0 : e(r, "left"),
            l = { top: h - u.top + u.marginTop, left: c - u.left + u.marginLeft, width: o, height: s };
        return i(l)
    }

    function ct(n) { var t = n.nodeName; return "BODY" === t || "HTML" === t ? !1 : "fixed" === r(n, "position") || ct(p(n)) }

    function lt(n) { if (!n || !n.parentElement || u()) return document.documentElement; for (var t = n.parentElement; t && "none" === r(t, "transform");) t = t.parentElement; return t || document.documentElement }

    function d(n, t, i, r) {
        var o = 4 < arguments.length && void 0 !== arguments[4] && arguments[4],
            u = { top: 0, left: 0 },
            h = o ? lt(n) : c(n, t),
            e, f;
        if ("viewport" === r) u = hi(h, o);
        else if ("scrollParent" === r ? (e = s(p(t)), "BODY" === e.nodeName && (e = n.ownerDocument.documentElement)) : e = "window" === r ? n.ownerDocument.documentElement : r, f = k(e, h, o), "HTML" !== e.nodeName || ct(h)) u = f;
        else {
            var l = ht(),
                a = l.height,
                v = l.width;
            u.top += f.top - f.marginTop;
            u.bottom = a + f.top;
            u.left += f.left - f.marginLeft;
            u.right = v + f.left
        }
        return u.left += i, u.top += i, u.right -= i, u.bottom -= i, u
    }

    function ci(n) {
        var t = n.width,
            i = n.height;
        return t * i
    }

    function at(t, i, r, u, f) {
        var l = 5 < arguments.length && void 0 !== arguments[5] ? arguments[5] : 0;
        if (-1 === t.indexOf("auto")) return t;
        var e = d(r, u, l, f),
            o = { top: { width: e.width, height: i.top - e.top }, right: { width: e.right - i.right, height: e.height }, bottom: { width: e.width, height: e.bottom - i.bottom }, left: { width: i.left - e.left, height: e.height } },
            s = Object.keys(o).map(function(t) { return n({ key: t }, o[t], { area: ci(o[t]) }) }).sort(function(n, t) { return t.area - n.area }),
            h = s.filter(function(n) {
                var t = n.width,
                    i = n.height;
                return t >= r.clientWidth && i >= r.clientHeight
            }),
            a = 0 < h.length ? h[0].key : s[0].key,
            c = t.split("-")[1];
        return a + (c ? "-" + c : "")
    }

    function vt(n, t, i) {
        var r = 3 < arguments.length && void 0 !== arguments[3] ? arguments[3] : null,
            u = r ? lt(t) : c(t, i);
        return k(i, u, r)
    }

    function yt(n) {
        var t = getComputedStyle(n),
            i = parseFloat(t.marginTop) + parseFloat(t.marginBottom),
            r = parseFloat(t.marginLeft) + parseFloat(t.marginRight);
        return { width: n.offsetWidth + r, height: n.offsetHeight + i }
    }

    function l(n) { var t = { left: "right", right: "left", bottom: "top", top: "bottom" }; return n.replace(/left|right|bottom|top/g, function(n) { return t[n] }) }

    function pt(n, t, i) {
        i = i.split("-")[0];
        var r = yt(n),
            e = { width: r.width, height: r.height },
            u = -1 !== ["right", "left"].indexOf(i),
            o = u ? "top" : "left",
            f = u ? "left" : "top",
            s = u ? "height" : "width",
            h = u ? "width" : "height";
        return e[o] = t[o] + t[s] / 2 - r[s] / 2, e[f] = i === f ? t[f] - r[h] : t[l(f)], e
    }

    function h(n, t) { return Array.prototype.find ? n.find(t) : n.filter(t)[0] }

    function li(n, t, i) { if (Array.prototype.findIndex) return n.findIndex(function(n) { return n[t] === i }); var r = h(n, function(n) { return n[t] === i }); return n.indexOf(r) }

    function wt(n, t, r) {
        var u = void 0 === r ? n : n.slice(0, li(n, "name", r));
        return u.forEach(function(n) {
            n["function"] && console.warn("`modifier.function` is deprecated, use `modifier.fn`!");
            var r = n["function"] || n.fn;
            n.enabled && et(r) && (t.offsets.popper = i(t.offsets.popper), t.offsets.reference = i(t.offsets.reference), t = r(t, n))
        }), t
    }

    function ai() {
        if (!this.state.isDestroyed) {
            var n = { instance: this, styles: {}, arrowStyles: {}, attributes: {}, flipped: !1, offsets: {} };
            n.offsets.reference = vt(this.state, this.popper, this.reference, this.options.positionFixed);
            n.placement = at(this.options.placement, n.offsets.reference, this.popper, this.reference, this.options.modifiers.flip.boundariesElement, this.options.modifiers.flip.padding);
            n.originalPlacement = n.placement;
            n.positionFixed = this.options.positionFixed;
            n.offsets.popper = pt(this.popper, n.offsets.reference, n.placement);
            n.offsets.popper.position = this.options.positionFixed ? "fixed" : "absolute";
            n = wt(this.modifiers, n);
            this.state.isCreated ? this.options.onUpdate(n) : (this.state.isCreated = !0, this.options.onCreate(n))
        }
    }

    function bt(n, t) {
        return n.some(function(n) {
            var i = n.name,
                r = n.enabled;
            return r && i === t
        })
    }

    function g(n) {
        for (var i, r, u = [!1, "ms", "Webkit", "Moz", "O"], f = n.charAt(0).toUpperCase() + n.slice(1), t = 0; t < u.length; t++)
            if (i = u[t], r = i ? "" + i + f : n, "undefined" != typeof document.body.style[r]) return r;
        return null
    }

    function vi() { return this.state.isDestroyed = !0, bt(this.modifiers, "applyStyle") && (this.popper.removeAttribute("x-placement"), this.popper.style.position = "", this.popper.style.top = "", this.popper.style.left = "", this.popper.style.right = "", this.popper.style.bottom = "", this.popper.style.willChange = "", this.popper.style[g("transform")] = ""), this.disableEventListeners(), this.options.removeOnDestroy && this.popper.parentNode.removeChild(this.popper), this }

    function kt(n) { var t = n.ownerDocument; return t ? t.defaultView : window }

    function dt(n, t, i, r) {
        var f = "BODY" === n.nodeName,
            u = f ? n.ownerDocument.defaultView : n;
        u.addEventListener(t, i, { passive: !0 });
        f || dt(s(u.parentNode), t, i, r);
        r.push(u)
    }

    function yi(n, t, i, r) {
        i.updateBound = r;
        kt(n).addEventListener("resize", i.updateBound, { passive: !0 });
        var u = s(n);
        return dt(u, "scroll", i.updateBound, i.scrollParents), i.scrollElement = u, i.eventsEnabled = !0, i
    }

    function pi() { this.state.eventsEnabled || (this.state = yi(this.reference, this.options, this.state, this.scheduleUpdate)) }

    function wi(n, t) { return kt(n).removeEventListener("resize", t.updateBound), t.scrollParents.forEach(function(n) { n.removeEventListener("scroll", t.updateBound) }), t.updateBound = null, t.scrollParents = [], t.scrollElement = null, t.eventsEnabled = !1, t }

    function bi() { this.state.eventsEnabled && (cancelAnimationFrame(this.scheduleUpdate), this.state = wi(this.reference, this.state)) }

    function nt(n) { return "" !== n && !isNaN(parseFloat(n)) && isFinite(n) }

    function tt(n, t) {
        Object.keys(t).forEach(function(i) {
            var r = ""; - 1 !== ["width", "height", "top", "right", "bottom", "left"].indexOf(i) && nt(t[i]) && (r = "px");
            n.style[i] = t[i] + r
        })
    }

    function ki(n, t) { Object.keys(t).forEach(function(i) { var r = t[i];!1 === r ? n.removeAttribute(i) : n.setAttribute(i, t[i]) }) }

    function gt(n, t, i) {
        var u = h(n, function(n) { var i = n.name; return i === t }),
            f = !!u && n.some(function(n) { return n.name === i && n.enabled && n.order < u.order }),
            r;
        return f || (r = "`" + t + "`", console.warn("`" + i + "` modifier is required by " + r + " modifier in order to work, be sure to include it before " + r + "!")), f
    }

    function di(n) { return "end" === n ? "start" : "start" === n ? "end" : n }

    function ni(n) {
        var r = 1 < arguments.length && void 0 !== arguments[1] && arguments[1],
            t = ut.indexOf(n),
            i = ut.slice(t + 1).concat(ut.slice(0, t));
        return r ? i.reverse() : i
    }

    function gi(n, r, u, f) {
        var h = n.match(/((?:\-|\+)?\d*\.?\d*)(.*)/),
            o = +h[1],
            e = h[2],
            s, c, l;
        if (!o) return n;
        if (0 === e.indexOf("%")) {
            switch (e) {
                case "%p":
                    s = u;
                    break;
                case "%":
                case "%r":
                default:
                    s = f
            }
            return c = i(s), c[r] / 100 * o
        }
        return "vh" === e || "vw" === e ? (l = "vh" === e ? t(document.documentElement.clientHeight, window.innerHeight || 0) : t(document.documentElement.clientWidth, window.innerWidth || 0), l / 100 * o) : o
    }

    function nr(n, t, i, r) {
        var s = [0, 0],
            c = -1 !== ["right", "left"].indexOf(r),
            u = n.split(/(\+|\-)/).map(function(n) { return n.trim() }),
            f = u.indexOf(h(u, function(n) { return -1 !== n.search(/,|\s/) })),
            o, e;
        return u[f] && -1 === u[f].indexOf(",") && console.warn("Offsets separated by white space(s) are deprecated, use a comma (,) instead."), o = /\s*,\s*|\s+/, e = -1 === f ? [u] : [u.slice(0, f).concat([u[f].split(o)[0]]), [u[f].split(o)[1]].concat(u.slice(f + 1))], e = e.map(function(n, r) {
            var f = (1 === r ? !c : c) ? "height" : "width",
                u = !1;
            return n.reduce(function(n, t) { return "" === n[n.length - 1] && -1 !== ["+", "-"].indexOf(t) ? (n[n.length - 1] = t, u = !0, n) : u ? (n[n.length - 1] += t, u = !1, n) : n.concat(t) }, []).map(function(n) { return gi(n, f, t, i) })
        }), e.forEach(function(n, t) { n.forEach(function(i, r) { nt(i) && (s[t] += i * ("-" === n[r - 1] ? -1 : 1)) }) }), s
    }

    function tr(n, t) {
        var r, f = t.offset,
            o = n.placement,
            e = n.offsets,
            i = e.popper,
            s = e.reference,
            u = o.split("-")[0];
        return r = nt(+f) ? [+f, 0] : nr(f, i, s, u), "left" === u ? (i.top += r[0], i.left -= r[1]) : "right" === u ? (i.top += r[0], i.left += r[1]) : "top" === u ? (i.left += r[0], i.top -= r[1]) : "bottom" === u && (i.left += r[0], i.top += r[1]), n.popper = i, n
    }
    for (var ti = Math.min, it = Math.round, a = Math.floor, t = Math.max, v = "undefined" != typeof window && "undefined" != typeof document, ii = ["Edge", "Trident", "Firefox"], ri = 0, rt = 0; rt < ii.length; rt += 1)
        if (v && 0 <= navigator.userAgent.indexOf(ii[rt])) { ri = 1; break }
    var ir = v && window.Promise,
        rr = ir ? function(n) {
            var t = !1;
            return function() {
                t || (t = !0, window.Promise.resolve().then(function() {
                    t = !1;
                    n()
                }))
            }
        } : function(n) {
            var t = !1;
            return function() {
                t || (t = !0, setTimeout(function() {
                    t = !1;
                    n()
                }, ri))
            }
        },
        ui = v && !!(window.MSInputMethodContext && document.documentMode),
        fi = v && /MSIE 10/.test(navigator.userAgent),
        ur = function(n, t) { if (!(n instanceof t)) throw new TypeError("Cannot call a class as a function"); },
        fr = function() {
            function n(n, t) { for (var i, r = 0; r < t.length; r++) i = t[r], i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(n, i.key, i) }
            return function(t, i, r) { return i && n(t.prototype, i), r && n(t, r), t }
        }(),
        o = function(n, t, i) { return t in n ? Object.defineProperty(n, t, { value: i, enumerable: !0, configurable: !0, writable: !0 }) : n[t] = i, n },
        n = Object.assign || function(n) {
            for (var t, r, i = 1; i < arguments.length; i++)
                for (r in t = arguments[i], t) Object.prototype.hasOwnProperty.call(t, r) && (n[r] = t[r]);
            return n
        },
        ei = ["auto-start", "auto", "auto-end", "top-start", "top", "top-end", "right-start", "right", "right-end", "bottom-end", "bottom", "bottom-start", "left-end", "left", "left-start"],
        ut = ei.slice(3),
        ft = { FLIP: "flip", CLOCKWISE: "clockwise", COUNTERCLOCKWISE: "counterclockwise" },
        y = function() {
            function t(i, r) {
                var u = this,
                    f = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : {},
                    e;
                ur(this, t);
                this.scheduleUpdate = function() { return requestAnimationFrame(u.update) };
                this.update = rr(this.update.bind(this));
                this.options = n({}, t.Defaults, f);
                this.state = { isDestroyed: !1, isCreated: !1, scrollParents: [] };
                this.reference = i && i.jquery ? i[0] : i;
                this.popper = r && r.jquery ? r[0] : r;
                this.options.modifiers = {};
                Object.keys(n({}, t.Defaults.modifiers, f.modifiers)).forEach(function(i) { u.options.modifiers[i] = n({}, t.Defaults.modifiers[i] || {}, f.modifiers ? f.modifiers[i] : {}) });
                this.modifiers = Object.keys(this.options.modifiers).map(function(t) { return n({ name: t }, u.options.modifiers[t]) }).sort(function(n, t) { return n.order - t.order });
                this.modifiers.forEach(function(n) { n.enabled && et(n.onLoad) && n.onLoad(u.reference, u.popper, u.options, n, u.state) });
                this.update();
                e = this.options.eventsEnabled;
                e && this.enableEventListeners();
                this.state.eventsEnabled = e
            }
            return fr(t, [{ key: "update", value: function() { return ai.call(this) } }, { key: "destroy", value: function() { return vi.call(this) } }, { key: "enableEventListeners", value: function() { return pi.call(this) } }, { key: "disableEventListeners", value: function() { return bi.call(this) } }]), t
        }();
    return y.Utils = ("undefined" == typeof window ? global : window).PopperUtils, y.placements = ei, y.Defaults = {
        placement: "bottom",
        positionFixed: !1,
        eventsEnabled: !0,
        removeOnDestroy: !1,
        onCreate: function() {},
        onUpdate: function() {},
        modifiers: {
            shift: {
                order: 100,
                enabled: !0,
                fn: function(t) {
                    var u = t.placement,
                        l = u.split("-")[0],
                        f = u.split("-")[1];
                    if (f) {
                        var e = t.offsets,
                            r = e.reference,
                            s = e.popper,
                            h = -1 !== ["bottom", "top"].indexOf(l),
                            i = h ? "left" : "top",
                            c = h ? "width" : "height",
                            a = { start: o({}, i, r[i]), end: o({}, i, r[i] + r[c] - s[c]) };
                        t.offsets.popper = n({}, s, a[f])
                    }
                    return t
                }
            },
            offset: { order: 200, enabled: !0, fn: tr, offset: 0 },
            preventOverflow: {
                order: 300,
                enabled: !0,
                fn: function(i, r) {
                    var h = r.boundariesElement || f(i.instance.popper),
                        s;
                    i.instance.reference === h && (h = f(h));
                    var c = g("transform"),
                        e = i.instance.popper.style,
                        l = e.top,
                        a = e.left,
                        v = e[c];
                    e.top = "";
                    e.left = "";
                    e[c] = "";
                    s = d(i.instance.popper, i.instance.reference, r.padding, h, i.positionFixed);
                    e.top = l;
                    e.left = a;
                    e[c] = v;
                    r.boundaries = s;
                    var y = r.priority,
                        u = i.offsets.popper,
                        p = {
                            primary: function(n) { var i = u[n]; return u[n] < s[n] && !r.escapeWithReference && (i = t(u[n], s[n])), o({}, n, i) },
                            secondary: function(n) {
                                var t = "right" === n ? "left" : "top",
                                    i = u[t];
                                return u[n] > s[n] && !r.escapeWithReference && (i = ti(u[t], s[n] - ("right" === n ? u.width : u.height))), o({}, t, i)
                            }
                        };
                    return y.forEach(function(t) {
                        var i = -1 === ["left", "top"].indexOf(t) ? "secondary" : "primary";
                        u = n({}, u, p[i](t))
                    }), i.offsets.popper = u, i
                },
                priority: ["left", "right", "top", "bottom"],
                padding: 5,
                boundariesElement: "scrollParent"
            },
            keepTogether: {
                order: 400,
                enabled: !0,
                fn: function(n) {
                    var o = n.offsets,
                        u = o.popper,
                        i = o.reference,
                        s = n.placement.split("-")[0],
                        r = a,
                        f = -1 !== ["top", "bottom"].indexOf(s),
                        e = f ? "right" : "bottom",
                        t = f ? "left" : "top",
                        h = f ? "width" : "height";
                    return u[e] < r(i[t]) && (n.offsets.popper[t] = r(i[t]) - u[h]), u[t] > r(i[e]) && (n.offsets.popper[t] = r(i[e])), n
                }
            },
            arrow: {
                order: 500,
                enabled: !0,
                fn: function(n, u) {
                    var l, e;
                    if (!gt(n.instance.modifiers, "arrow", "keepTogether")) return n;
                    if (e = u.element, "string" == typeof e) { if (e = n.instance.popper.querySelector(e), !e) return n } else if (!n.instance.popper.contains(e)) return console.warn("WARNING: `arrow.element` must be child of its popper element!"), n;
                    var d = n.placement.split("-")[0],
                        b = n.offsets,
                        c = b.popper,
                        s = b.reference,
                        a = -1 !== ["left", "right"].indexOf(d),
                        y = a ? "height" : "width",
                        p = a ? "Top" : "Left",
                        f = p.toLowerCase(),
                        g = a ? "left" : "top",
                        v = a ? "bottom" : "right",
                        h = yt(e)[y];
                    s[v] - h < c[f] && (n.offsets.popper[f] -= c[f] - (s[v] - h));
                    s[f] + h > c[v] && (n.offsets.popper[f] += s[f] + h - c[v]);
                    n.offsets.popper = i(n.offsets.popper);
                    var nt = s[f] + s[y] / 2 - h / 2,
                        k = r(n.instance.popper),
                        tt = parseFloat(k["margin" + p], 10),
                        rt = parseFloat(k["border" + p + "Width"], 10),
                        w = nt - n.offsets.popper[f] - tt - rt;
                    return w = t(ti(c[y] - h, w), 0), n.arrowElement = e, n.offsets.arrow = (l = {}, o(l, f, it(w)), o(l, g, ""), l), n
                },
                element: "[x-arrow]"
            },
            flip: {
                order: 600,
                enabled: !0,
                fn: function(t, i) {
                    if (bt(t.instance.modifiers, "inner") || t.flipped && t.placement === t.originalPlacement) return t;
                    var e = d(t.instance.popper, t.instance.reference, i.padding, i.boundariesElement, t.positionFixed),
                        r = t.placement.split("-")[0],
                        o = l(r),
                        u = t.placement.split("-")[1] || "",
                        f = [];
                    switch (i.behavior) {
                        case ft.FLIP:
                            f = [r, o];
                            break;
                        case ft.CLOCKWISE:
                            f = ni(r);
                            break;
                        case ft.COUNTERCLOCKWISE:
                            f = ni(r, !0);
                            break;
                        default:
                            f = i.behavior
                    }
                    return f.forEach(function(s, h) {
                        if (r !== s || f.length === h + 1) return t;
                        r = t.placement.split("-")[0];
                        o = l(r);
                        var v = t.offsets.popper,
                            y = t.offsets.reference,
                            c = a,
                            w = "left" === r && c(v.right) > c(y.left) || "right" === r && c(v.left) < c(y.right) || "top" === r && c(v.bottom) > c(y.top) || "bottom" === r && c(v.top) < c(y.bottom),
                            b = c(v.left) < c(e.left),
                            k = c(v.right) > c(e.right),
                            d = c(v.top) < c(e.top),
                            g = c(v.bottom) > c(e.bottom),
                            nt = "left" === r && b || "right" === r && k || "top" === r && d || "bottom" === r && g,
                            p = -1 !== ["top", "bottom"].indexOf(r),
                            tt = !!i.flipVariations && (p && "start" === u && b || p && "end" === u && k || !p && "start" === u && d || !p && "end" === u && g);
                        (w || nt || tt) && (t.flipped = !0, (w || nt) && (r = f[h + 1]), tt && (u = di(u)), t.placement = r + (u ? "-" + u : ""), t.offsets.popper = n({}, t.offsets.popper, pt(t.instance.popper, t.offsets.reference, t.placement)), t = wt(t.instance.modifiers, t, "flip"))
                    }), t
                },
                behavior: "flip",
                padding: 5,
                boundariesElement: "viewport"
            },
            inner: {
                order: 700,
                enabled: !1,
                fn: function(n) {
                    var u = n.placement,
                        t = u.split("-")[0],
                        f = n.offsets,
                        r = f.popper,
                        o = f.reference,
                        e = -1 !== ["left", "right"].indexOf(t),
                        s = -1 === ["top", "left"].indexOf(t);
                    return r[e ? "left" : "top"] = o[t] - (s ? r[e ? "width" : "height"] : 0), n.placement = l(u), n.offsets.popper = i(r), n
                }
            },
            hide: {
                order: 800,
                enabled: !0,
                fn: function(n) {
                    if (!gt(n.instance.modifiers, "hide", "preventOverflow")) return n;
                    var t = n.offsets.reference,
                        i = h(n.instance.modifiers, function(n) { return "preventOverflow" === n.name }).boundaries;
                    if (t.bottom < i.top || t.left > i.right || t.top > i.bottom || t.right < i.left) {
                        if (!0 === n.hide) return n;
                        n.hide = !0;
                        n.attributes["x-out-of-boundaries"] = ""
                    } else {
                        if (!1 === n.hide) return n;
                        n.hide = !1;
                        n.attributes["x-out-of-boundaries"] = !1
                    }
                    return n
                }
            },
            computeStyle: {
                order: 850,
                enabled: !0,
                fn: function(t, i) {
                    var nt = i.x,
                        tt = i.y,
                        u = t.offsets.popper,
                        c = h(t.instance.modifiers, function(n) { return "applyStyle" === n.name }).gpuAcceleration,
                        w, k, d;
                    void 0 !== c && console.warn("WARNING: `gpuAcceleration` option moved to `computeStyle` modifier and will not be supported in future versions of Popper.js!");
                    var l, v, rt = void 0 === c ? i.gpuAcceleration : c,
                        ut = f(t.instance.popper),
                        y = b(ut),
                        r = { position: u.position },
                        s = { left: a(u.left), top: it(u.top), bottom: it(u.bottom), right: a(u.right) },
                        e = "bottom" === nt ? "top" : "bottom",
                        o = "right" === tt ? "left" : "right",
                        p = g("transform");
                    return (v = "bottom" == e ? -y.height + s.bottom : s.top, l = "right" == o ? -y.width + s.right : s.left, rt && p) ? (r[p] = "translate3d(" + l + "px, " + v + "px, 0)", r[e] = 0, r[o] = 0, r.willChange = "transform") : (w = "bottom" == e ? -1 : 1, k = "right" == o ? -1 : 1, r[e] = v * w, r[o] = l * k, r.willChange = e + ", " + o), d = { "x-placement": t.placement }, t.attributes = n({}, d, t.attributes), t.styles = n({}, r, t.styles), t.arrowStyles = n({}, t.offsets.arrow, t.arrowStyles), t
                },
                gpuAcceleration: !0,
                x: "bottom",
                y: "right"
            },
            applyStyle: {
                order: 900,
                enabled: !0,
                fn: function(n) { return tt(n.instance.popper, n.styles), ki(n.instance.popper, n.attributes), n.arrowElement && Object.keys(n.arrowStyles).length && tt(n.arrowElement, n.arrowStyles), n },
                onLoad: function(n, t, i, r, u) {
                    var f = vt(u, t, n, i.positionFixed),
                        e = at(i.placement, f, t, n, i.modifiers.flip.boundariesElement, i.modifiers.flip.padding);
                    return t.setAttribute("x-placement", e), tt(t, { position: i.positionFixed ? "fixed" : "absolute" }), i
                },
                gpuAcceleration: void 0
            }
        }
    }, y
});
! function(n, t) { "object" == typeof exports && "undefined" != typeof module ? t(exports, require("jquery"), require("popper.js")) : "function" == typeof define && define.amd ? define(["exports", "jquery", "popper.js"], t) : t((n = n || self).bootstrap = {}, n.jQuery, n.Popper) }(this, function(n, t, i) {
    "use strict";

    function uu(n, t) { for (var i, r = 0; r < t.length; r++) i = t[r], i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(n, i.key, i) }

    function l(n, t, i) { return t && uu(n.prototype, t), i && uu(n, i), n }

    function f(n) {
        for (var i, r, t = 1; t < arguments.length; t++) i = null != arguments[t] ? arguments[t] : {}, r = Object.keys(i), "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(i).filter(function(n) { return Object.getOwnPropertyDescriptor(i, n).enumerable }))), r.forEach(function(t) {
            var r, u, f;
            r = n;
            f = i[u = t];
            u in r ? Object.defineProperty(r, u, { value: f, enumerable: !0, configurable: !0, writable: !0 }) : r[u] = f
        });
        return n
    }

    function cf(n) {
        var u = this,
            i = !1;
        return t(this).one(r.TRANSITION_END, function() { i = !0 }), setTimeout(function() { i || r.triggerTransitionEnd(u) }, n), this
    }

    function wu(n, t, i) {
        if (0 === n.length) return n;
        if (i && "function" == typeof i) return i(n);
        for (var u = (new window.DOMParser).parseFromString(n, "text/html"), e = Object.keys(t), f = [].slice.call(u.body.querySelectorAll("*")), o = function(n) {
                var i = f[n],
                    o = i.nodeName.toLowerCase(),
                    r, u;
                if (-1 === e.indexOf(i.nodeName.toLowerCase())) return i.parentNode.removeChild(i), "continue";
                r = [].slice.call(i.attributes);
                u = [].concat(t["*"] || [], t[o] || []);
                r.forEach(function(n) {
                    (function(n, t) {
                        var i = n.nodeName.toLowerCase();
                        if (-1 !== t.indexOf(i)) return -1 === us.indexOf(i) || Boolean(n.nodeValue.match(fs) || n.nodeValue.match(es));
                        for (var u = t.filter(function(n) { return n instanceof RegExp }), r = 0, f = u.length; r < f; r++)
                            if (i.match(u[r])) return !0;
                        return !1
                    })(n, u) || i.removeAttribute(n.nodeName)
                })
            }, r = 0, s = f.length; r < s; r++) o(r);
        return u.body.innerHTML
    }
    var at, r;
    t = t && t.hasOwnProperty("default") ? t.default : t;
    i = i && i.hasOwnProperty("default") ? i.default : i;
    at = "transitionend";
    r = {
        TRANSITION_END: "bsTransitionEnd",
        getUID: function(n) { for (; n += ~~(1e6 * Math.random()), document.getElementById(n);); return n },
        getSelectorFromElement: function(n) {
            var t = n.getAttribute("data-target"),
                i;
            t && "#" !== t || (i = n.getAttribute("href"), t = i && "#" !== i ? i.trim() : "");
            try { return document.querySelector(t) ? t : null } catch (n) { return null }
        },
        getTransitionDurationFromElement: function(n) {
            if (!n) return 0;
            var i = t(n).css("transition-duration"),
                r = t(n).css("transition-delay"),
                u = parseFloat(i),
                f = parseFloat(r);
            return u || f ? (i = i.split(",")[0], r = r.split(",")[0], 1e3 * (parseFloat(i) + parseFloat(r))) : 0
        },
        reflow: function(n) { return n.offsetHeight },
        triggerTransitionEnd: function(n) { t(n).trigger(at) },
        supportsTransitionEnd: function() { return Boolean(at) },
        isElement: function(n) { return (n[0] || n).nodeType },
        typeCheckConfig: function(n, t, i) {
            var u, s;
            for (u in i)
                if (Object.prototype.hasOwnProperty.call(i, u)) {
                    var e = i[u],
                        f = t[u],
                        o = f && r.isElement(f) ? "element" : (s = f, {}.toString.call(s).match(/\s([a-z]+)/i)[1].toLowerCase());
                    if (!new RegExp(e).test(o)) throw new Error(n.toUpperCase() + ': Option "' + u + '" provided type "' + o + '" but expected type "' + e + '".');
                }
        },
        findShadowRoot: function(n) { if (!document.documentElement.attachShadow) return null; if ("function" != typeof n.getRootNode) return n instanceof ShadowRoot ? n : n.parentNode ? r.findShadowRoot(n.parentNode) : null; var t = n.getRootNode(); return t instanceof ShadowRoot ? t : null }
    };
    t.fn.emulateTransitionEnd = cf;
    t.event.special[r.TRANSITION_END] = { bindType: at, delegateType: at, handle: function(n) { if (t(n.target).is(this)) return n.handleObj.handler.apply(this, arguments) } };
    var vt = "alert",
        pi = "bs.alert",
        cr = "." + pi,
        lf = t.fn[vt],
        lr = { CLOSE: "close" + cr, CLOSED: "closed" + cr, CLICK_DATA_API: "click" + cr + ".data-api" },
        af = "alert",
        vf = "fade",
        yf = "show",
        it = function() {
            function n(n) { this._element = n }
            var i = n.prototype;
            return i.close = function(n) {
                var t = this._element;
                n && (t = this._getRootElement(n));
                this._triggerCloseEvent(t).isDefaultPrevented() || this._removeElement(t)
            }, i.dispose = function() {
                t.removeData(this._element, pi);
                this._element = null
            }, i._getRootElement = function(n) {
                var u = r.getSelectorFromElement(n),
                    i = !1;
                return u && (i = document.querySelector(u)), i || (i = t(n).closest("." + af)[0]), i
            }, i._triggerCloseEvent = function(n) { var i = t.Event(lr.CLOSE); return t(n).trigger(i), i }, i._removeElement = function(n) {
                var u = this,
                    i;
                (t(n).removeClass(yf), t(n).hasClass(vf)) ? (i = r.getTransitionDurationFromElement(n), t(n).one(r.TRANSITION_END, function(t) { return u._destroyElement(n, t) }).emulateTransitionEnd(i)) : this._destroyElement(n)
            }, i._destroyElement = function(n) { t(n).detach().trigger(lr.CLOSED).remove() }, n._jQueryInterface = function(i) {
                return this.each(function() {
                    var u = t(this),
                        r = u.data(pi);
                    r || (r = new n(this), u.data(pi, r));
                    "close" === i && r[i](this)
                })
            }, n._handleDismiss = function(n) {
                return function(t) {
                    t && t.preventDefault();
                    n.close(this)
                }
            }, l(n, null, [{ key: "VERSION", get: function() { return "4.3.1" } }]), n
        }();
    t(document).on(lr.CLICK_DATA_API, '[data-dismiss="alert"]', it._handleDismiss(new it));
    t.fn[vt] = it._jQueryInterface;
    t.fn[vt].Constructor = it;
    t.fn[vt].noConflict = function() { return t.fn[vt] = lf, it._jQueryInterface };
    var yt = "button",
        wi = "bs.button",
        ar = "." + wi,
        vr = ".data-api",
        pf = t.fn[yt],
        pt = "active",
        wf = "btn",
        bf = "focus",
        fu = '[data-toggle^="button"]',
        kf = '[data-toggle="buttons"]',
        df = 'input:not([type="hidden"])',
        gf = ".active",
        eu = ".btn",
        ou = { CLICK_DATA_API: "click" + ar + vr, FOCUS_BLUR_DATA_API: "focus" + ar + vr + " blur" + ar + vr },
        wt = function() {
            function n(n) { this._element = n }
            var i = n.prototype;
            return i.toggle = function() {
                var r = !0,
                    f = !0,
                    i = t(this._element).closest(kf)[0],
                    n, u;
                if (i && (n = this._element.querySelector(df), n)) {
                    if ("radio" === n.type && (n.checked && this._element.classList.contains(pt) ? r = !1 : (u = i.querySelector(gf), u && t(u).removeClass(pt))), r) {
                        if (n.hasAttribute("disabled") || i.hasAttribute("disabled") || n.classList.contains("disabled") || i.classList.contains("disabled")) return;
                        n.checked = !this._element.classList.contains(pt);
                        t(n).trigger("change")
                    }
                    n.focus();
                    f = !1
                }
                f && this._element.setAttribute("aria-pressed", !this._element.classList.contains(pt));
                r && t(this._element).toggleClass(pt)
            }, i.dispose = function() {
                t.removeData(this._element, wi);
                this._element = null
            }, n._jQueryInterface = function(i) {
                return this.each(function() {
                    var r = t(this).data(wi);
                    r || (r = new n(this), t(this).data(wi, r));
                    "toggle" === i && r[i]()
                })
            }, l(n, null, [{ key: "VERSION", get: function() { return "4.3.1" } }]), n
        }();
    t(document).on(ou.CLICK_DATA_API, fu, function(n) {
        n.preventDefault();
        var i = n.target;
        t(i).hasClass(wf) || (i = t(i).closest(eu));
        wt._jQueryInterface.call(t(i), "toggle")
    }).on(ou.FOCUS_BLUR_DATA_API, fu, function(n) {
        var i = t(n.target).closest(eu)[0];
        t(i).toggleClass(bf, /^focus(in)?$/.test(n.type))
    });
    t.fn[yt] = wt._jQueryInterface;
    t.fn[yt].Constructor = wt;
    t.fn[yt].noConflict = function() { return t.fn[yt] = pf, wt._jQueryInterface };
    var rt = "carousel",
        bt = "bs.carousel",
        o = "." + bt,
        su = ".data-api",
        ne = t.fn[rt],
        yr = { interval: 5e3, keyboard: !0, slide: !1, pause: "hover", wrap: !0, touch: !0 },
        te = { interval: "(number|boolean)", keyboard: "boolean", slide: "(boolean|string)", pause: "(string|boolean)", wrap: "boolean", touch: "boolean" },
        bi = "next",
        ki = "prev",
        ie = "left",
        re = "right",
        s = { SLIDE: "slide" + o, SLID: "slid" + o, KEYDOWN: "keydown" + o, MOUSEENTER: "mouseenter" + o, MOUSELEAVE: "mouseleave" + o, TOUCHSTART: "touchstart" + o, TOUCHMOVE: "touchmove" + o, TOUCHEND: "touchend" + o, POINTERDOWN: "pointerdown" + o, POINTERUP: "pointerup" + o, DRAG_START: "dragstart" + o, LOAD_DATA_API: "load" + o + su, CLICK_DATA_API: "click" + o + su },
        ue = "carousel",
        w = "active",
        fe = "slide",
        ee = "carousel-item-right",
        oe = "carousel-item-left",
        se = "carousel-item-next",
        he = "carousel-item-prev",
        ce = "pointer-event",
        le = ".active",
        pr = ".active.carousel-item",
        ae = ".carousel-item",
        ve = ".carousel-item img",
        ye = ".carousel-item-next, .carousel-item-prev",
        pe = ".carousel-indicators",
        we = '[data-ride="carousel"]',
        hu = { TOUCH: "touch", PEN: "pen" },
        ut = function() {
            function i(n, t) {
                this._items = null;
                this._interval = null;
                this._activeElement = null;
                this._isPaused = !1;
                this._isSliding = !1;
                this.touchTimeout = null;
                this.touchStartX = 0;
                this.touchDeltaX = 0;
                this._config = this._getConfig(t);
                this._element = n;
                this._indicatorsElement = this._element.querySelector(pe);
                this._touchSupported = "ontouchstart" in document.documentElement || 0 < navigator.maxTouchPoints;
                this._pointerEvent = Boolean(window.PointerEvent || window.MSPointerEvent);
                this._addEventListeners()
            }
            var n = i.prototype;
            return n.next = function() { this._isSliding || this._slide(bi) }, n.nextWhenVisible = function() {!document.hidden && t(this._element).is(":visible") && "hidden" !== t(this._element).css("visibility") && this.next() }, n.prev = function() { this._isSliding || this._slide(ki) }, n.pause = function(n) {
                n || (this._isPaused = !0);
                this._element.querySelector(ye) && (r.triggerTransitionEnd(this._element), this.cycle(!0));
                clearInterval(this._interval);
                this._interval = null
            }, n.cycle = function(n) {
                n || (this._isPaused = !1);
                this._interval && (clearInterval(this._interval), this._interval = null);
                this._config.interval && !this._isPaused && (this._interval = setInterval((document.visibilityState ? this.nextWhenVisible : this.next).bind(this), this._config.interval))
            }, n.to = function(n) {
                var u = this,
                    i, r;
                if (this._activeElement = this._element.querySelector(pr), i = this._getItemIndex(this._activeElement), !(n > this._items.length - 1 || n < 0))
                    if (this._isSliding) t(this._element).one(s.SLID, function() { return u.to(n) });
                    else {
                        if (i === n) return this.pause(), void this.cycle();
                        r = i < n ? bi : ki;
                        this._slide(r, this._items[n])
                    }
            }, n.dispose = function() {
                t(this._element).off(o);
                t.removeData(this._element, bt);
                this._items = null;
                this._config = null;
                this._element = null;
                this._interval = null;
                this._isPaused = null;
                this._isSliding = null;
                this._activeElement = null;
                this._indicatorsElement = null
            }, n._getConfig = function(n) { return n = f({}, yr, n), r.typeCheckConfig(rt, n, te), n }, n._handleSwipe = function() {
                var t = Math.abs(this.touchDeltaX),
                    n;
                t <= 40 || (n = t / this.touchDeltaX, 0 < n && this.prev(), n < 0 && this.next())
            }, n._addEventListeners = function() {
                var n = this;
                this._config.keyboard && t(this._element).on(s.KEYDOWN, function(t) { return n._keydown(t) });
                "hover" === this._config.pause && t(this._element).on(s.MOUSEENTER, function(t) { return n.pause(t) }).on(s.MOUSELEAVE, function(t) { return n.cycle(t) });
                this._config.touch && this._addTouchEventListeners()
            }, n._addTouchEventListeners = function() {
                var n = this,
                    i, r;
                this._touchSupported && (i = function(t) { n._pointerEvent && hu[t.originalEvent.pointerType.toUpperCase()] ? n.touchStartX = t.originalEvent.clientX : n._pointerEvent || (n.touchStartX = t.originalEvent.touches[0].clientX) }, r = function(t) {
                    n._pointerEvent && hu[t.originalEvent.pointerType.toUpperCase()] && (n.touchDeltaX = t.originalEvent.clientX - n.touchStartX);
                    n._handleSwipe();
                    "hover" === n._config.pause && (n.pause(), n.touchTimeout && clearTimeout(n.touchTimeout), n.touchTimeout = setTimeout(function(t) { return n.cycle(t) }, 500 + n._config.interval))
                }, t(this._element.querySelectorAll(ve)).on(s.DRAG_START, function(n) { return n.preventDefault() }), this._pointerEvent ? (t(this._element).on(s.POINTERDOWN, function(n) { return i(n) }), t(this._element).on(s.POINTERUP, function(n) { return r(n) }), this._element.classList.add(ce)) : (t(this._element).on(s.TOUCHSTART, function(n) { return i(n) }), t(this._element).on(s.TOUCHMOVE, function(t) {
                    var i;
                    n.touchDeltaX = (i = t).originalEvent.touches && 1 < i.originalEvent.touches.length ? 0 : i.originalEvent.touches[0].clientX - n.touchStartX
                }), t(this._element).on(s.TOUCHEND, function(n) { return r(n) })))
            }, n._keydown = function(n) {
                if (!/input|textarea/i.test(n.target.tagName)) switch (n.which) {
                    case 37:
                        n.preventDefault();
                        this.prev();
                        break;
                    case 39:
                        n.preventDefault();
                        this.next()
                }
            }, n._getItemIndex = function(n) { return this._items = n && n.parentNode ? [].slice.call(n.parentNode.querySelectorAll(ae)) : [], this._items.indexOf(n) }, n._getItemByDirection = function(n, t) {
                var u = n === bi,
                    f = n === ki,
                    i = this._getItemIndex(t),
                    e = this._items.length - 1,
                    r;
                return (f && 0 === i || u && i === e) && !this._config.wrap ? t : (r = (i + (n === ki ? -1 : 1)) % this._items.length, -1 === r ? this._items[this._items.length - 1] : this._items[r])
            }, n._triggerSlideEvent = function(n, i) {
                var u = this._getItemIndex(n),
                    f = this._getItemIndex(this._element.querySelector(pr)),
                    r = t.Event(s.SLIDE, { relatedTarget: n, direction: i, from: f, to: u });
                return t(this._element).trigger(r), r
            }, n._setActiveIndicatorElement = function(n) {
                var r, i;
                this._indicatorsElement && (r = [].slice.call(this._indicatorsElement.querySelectorAll(le)), t(r).removeClass(w), i = this._indicatorsElement.children[this._getItemIndex(n)], i && t(i).addClass(w))
            }, n._slide = function(n, i) {
                var e, o, h, a = this,
                    f = this._element.querySelector(pr),
                    p = this._getItemIndex(f),
                    u = i || f && this._getItemByDirection(n, f),
                    b = this._getItemIndex(u),
                    v = Boolean(this._interval),
                    c, l, y;
                (h = n === bi ? (e = oe, o = se, ie) : (e = ee, o = he, re), u && t(u).hasClass(w)) ? this._isSliding = !1: !this._triggerSlideEvent(u, h).isDefaultPrevented() && f && u && (this._isSliding = !0, v && this.pause(), this._setActiveIndicatorElement(u), c = t.Event(s.SLID, { relatedTarget: u, direction: h, from: p, to: b }), t(this._element).hasClass(fe) ? (t(u).addClass(o), r.reflow(u), t(f).addClass(e), t(u).addClass(e), l = parseInt(u.getAttribute("data-interval"), 10), this._config.interval = l ? (this._config.defaultInterval = this._config.defaultInterval || this._config.interval, l) : this._config.defaultInterval || this._config.interval, y = r.getTransitionDurationFromElement(f), t(f).one(r.TRANSITION_END, function() {
                    t(u).removeClass(e + " " + o).addClass(w);
                    t(f).removeClass(w + " " + o + " " + e);
                    a._isSliding = !1;
                    setTimeout(function() { return t(a._element).trigger(c) }, 0)
                }).emulateTransitionEnd(y)) : (t(f).removeClass(w), t(u).addClass(w), this._isSliding = !1, t(this._element).trigger(c)), v && this.cycle())
            }, i._jQueryInterface = function(n) {
                return this.each(function() {
                    var r = t(this).data(bt),
                        u = f({}, yr, t(this).data()),
                        e;
                    if ("object" == typeof n && (u = f({}, u, n)), e = "string" == typeof n ? n : u.slide, r || (r = new i(this, u), t(this).data(bt, r)), "number" == typeof n) r.to(n);
                    else if ("string" == typeof e) {
                        if ("undefined" == typeof r[e]) throw new TypeError('No method named "' + e + '"');
                        r[e]()
                    } else u.interval && u.ride && (r.pause(), r.cycle())
                })
            }, i._dataApiClickHandler = function(n) {
                var s = r.getSelectorFromElement(this),
                    u, o, e;
                s && (u = t(s)[0], u && t(u).hasClass(ue) && (o = f({}, t(u).data(), t(this).data()), e = this.getAttribute("data-slide-to"), e && (o.interval = !1), i._jQueryInterface.call(t(u), o), e && t(u).data(bt).to(e), n.preventDefault()))
            }, l(i, null, [{ key: "VERSION", get: function() { return "4.3.1" } }, { key: "Default", get: function() { return yr } }]), i
        }();
    t(document).on(s.CLICK_DATA_API, "[data-slide], [data-slide-to]", ut._dataApiClickHandler);
    t(window).on(s.LOAD_DATA_API, function() { for (var i, r = [].slice.call(document.querySelectorAll(we)), n = 0, u = r.length; n < u; n++) i = t(r[n]), ut._jQueryInterface.call(i, i.data()) });
    t.fn[rt] = ut._jQueryInterface;
    t.fn[rt].Constructor = ut;
    t.fn[rt].noConflict = function() { return t.fn[rt] = ne, ut._jQueryInterface };
    var ft = "collapse",
        b = "bs.collapse",
        kt = "." + b,
        be = t.fn[ft],
        wr = { toggle: !0, parent: "" },
        ke = { toggle: "boolean", parent: "(string|element)" },
        dt = { SHOW: "show" + kt, SHOWN: "shown" + kt, HIDE: "hide" + kt, HIDDEN: "hidden" + kt, CLICK_DATA_API: "click" + kt + ".data-api" },
        k = "show",
        gt = "collapse",
        di = "collapsing",
        br = "collapsed",
        cu = "width",
        de = "height",
        ge = ".show, .collapsing",
        lu = '[data-toggle="collapse"]',
        ni = function() {
            function i(n, t) {
                this._isTransitioning = !1;
                this._element = n;
                this._config = this._getConfig(t);
                this._triggerArray = [].slice.call(document.querySelectorAll('[data-toggle="collapse"][href="#' + n.id + '"],[data-toggle="collapse"][data-target="#' + n.id + '"]'));
                for (var f = [].slice.call(document.querySelectorAll(lu)), i = 0, o = f.length; i < o; i++) {
                    var e = f[i],
                        u = r.getSelectorFromElement(e),
                        s = [].slice.call(document.querySelectorAll(u)).filter(function(t) { return t === n });
                    null !== u && 0 < s.length && (this._selector = u, this._triggerArray.push(e))
                }
                this._parent = this._config.parent ? this._getParent() : null;
                this._config.parent || this._addAriaAndCollapsedClass(this._element, this._triggerArray);
                this._config.toggle && this.toggle()
            }
            var n = i.prototype;
            return n.toggle = function() { t(this._element).hasClass(k) ? this.hide() : this.show() }, n.show = function() {
                var n, e, u = this,
                    o, f, s, h;
                this._isTransitioning || t(this._element).hasClass(k) || (this._parent && 0 === (n = [].slice.call(this._parent.querySelectorAll(ge)).filter(function(n) { return "string" == typeof u._config.parent ? n.getAttribute("data-parent") === u._config.parent : n.classList.contains(gt) })).length && (n = null), n && (e = t(n).not(this._selector).data(b)) && e._isTransitioning) || (o = t.Event(dt.SHOW), (t(this._element).trigger(o), o.isDefaultPrevented()) || (n && (i._jQueryInterface.call(t(n).not(this._selector), "hide"), e || t(n).data(b, null)), f = this._getDimension(), t(this._element).removeClass(gt).addClass(di), this._element.style[f] = 0, this._triggerArray.length && t(this._triggerArray).removeClass(br).attr("aria-expanded", !0), this.setTransitioning(!0), s = "scroll" + (f[0].toUpperCase() + f.slice(1)), h = r.getTransitionDurationFromElement(this._element), t(this._element).one(r.TRANSITION_END, function() {
                    t(u._element).removeClass(di).addClass(gt).addClass(k);
                    u._element.style[f] = "";
                    u.setTransitioning(!1);
                    t(u._element).trigger(dt.SHOWN)
                }).emulateTransitionEnd(h), this._element.style[f] = this._element[s] + "px"))
            }, n.hide = function() {
                var s = this,
                    u, n, f, i, e, o, h;
                if (!this._isTransitioning && t(this._element).hasClass(k) && (u = t.Event(dt.HIDE), t(this._element).trigger(u), !u.isDefaultPrevented())) {
                    if (n = this._getDimension(), this._element.style[n] = this._element.getBoundingClientRect()[n] + "px", r.reflow(this._element), t(this._element).addClass(di).removeClass(gt).removeClass(k), f = this._triggerArray.length, 0 < f)
                        for (i = 0; i < f; i++) e = this._triggerArray[i], o = r.getSelectorFromElement(e), null !== o && (t([].slice.call(document.querySelectorAll(o))).hasClass(k) || t(e).addClass(br).attr("aria-expanded", !1));
                    this.setTransitioning(!0);
                    this._element.style[n] = "";
                    h = r.getTransitionDurationFromElement(this._element);
                    t(this._element).one(r.TRANSITION_END, function() {
                        s.setTransitioning(!1);
                        t(s._element).removeClass(di).addClass(gt).trigger(dt.HIDDEN)
                    }).emulateTransitionEnd(h)
                }
            }, n.setTransitioning = function(n) { this._isTransitioning = n }, n.dispose = function() {
                t.removeData(this._element, b);
                this._config = null;
                this._parent = null;
                this._element = null;
                this._triggerArray = null;
                this._isTransitioning = null
            }, n._getConfig = function(n) { return (n = f({}, wr, n)).toggle = Boolean(n.toggle), r.typeCheckConfig(ft, n, ke), n }, n._getDimension = function() { return t(this._element).hasClass(cu) ? cu : de }, n._getParent = function() {
                var n, e = this,
                    u, f;
                return r.isElement(this._config.parent) ? (n = this._config.parent, "undefined" != typeof this._config.parent.jquery && (n = this._config.parent[0])) : n = document.querySelector(this._config.parent), u = '[data-toggle="collapse"][data-parent="' + this._config.parent + '"]', f = [].slice.call(n.querySelectorAll(u)), t(f).each(function(n, t) { e._addAriaAndCollapsedClass(i._getTargetFromElement(t), [t]) }), n
            }, n._addAriaAndCollapsedClass = function(n, i) {
                var r = t(n).hasClass(k);
                i.length && t(i).toggleClass(br, !r).attr("aria-expanded", r)
            }, i._getTargetFromElement = function(n) { var t = r.getSelectorFromElement(n); return t ? document.querySelector(t) : null }, i._jQueryInterface = function(n) {
                return this.each(function() {
                    var u = t(this),
                        r = u.data(b),
                        e = f({}, wr, u.data(), "object" == typeof n && n ? n : {});
                    if (!r && e.toggle && /show|hide/.test(n) && (e.toggle = !1), r || (r = new i(this, e), u.data(b, r)), "string" == typeof n) {
                        if ("undefined" == typeof r[n]) throw new TypeError('No method named "' + n + '"');
                        r[n]()
                    }
                })
            }, l(i, null, [{ key: "VERSION", get: function() { return "4.3.1" } }, { key: "Default", get: function() { return wr } }]), i
        }();
    t(document).on(dt.CLICK_DATA_API, lu, function(n) {
        "A" === n.currentTarget.tagName && n.preventDefault();
        var i = t(this),
            u = r.getSelectorFromElement(this),
            f = [].slice.call(document.querySelectorAll(u));
        t(f).each(function() {
            var n = t(this),
                r = n.data(b) ? "toggle" : i.data();
            ni._jQueryInterface.call(n, r)
        })
    });
    t.fn[ft] = ni._jQueryInterface;
    t.fn[ft].Constructor = ni;
    t.fn[ft].noConflict = function() { return t.fn[ft] = be, ni._jQueryInterface };
    var et = "dropdown",
        ti = "bs.dropdown",
        y = "." + ti,
        kr = ".data-api",
        no = t.fn[et],
        to = new RegExp("38|40|27"),
        e = { HIDE: "hide" + y, HIDDEN: "hidden" + y, SHOW: "show" + y, SHOWN: "shown" + y, CLICK: "click" + y, CLICK_DATA_API: "click" + y + kr, KEYDOWN_DATA_API: "keydown" + y + kr, KEYUP_DATA_API: "keyup" + y + kr },
        gi = "disabled",
        h = "show",
        io = "dropup",
        ro = "dropright",
        uo = "dropleft",
        au = "dropdown-menu-right",
        fo = "position-static",
        nr = '[data-toggle="dropdown"]',
        dr = ".dropdown-menu",
        eo = ".navbar-nav",
        oo = ".dropdown-menu .dropdown-item:not(.disabled):not(:disabled)",
        so = "top-start",
        ho = "top-end",
        co = "bottom-start",
        lo = "bottom-end",
        ao = "right-start",
        vo = "left-start",
        yo = { offset: 0, flip: !0, boundary: "scrollParent", reference: "toggle", display: "dynamic" },
        po = { offset: "(number|string|function)", flip: "boolean", boundary: "(string|element)", reference: "(string|element)", display: "string" },
        p = function() {
            function n(n, t) {
                this._element = n;
                this._popper = null;
                this._config = this._getConfig(t);
                this._menu = this._getMenuElement();
                this._inNavbar = this._detectNavbar();
                this._addEventListeners()
            }
            var u = n.prototype;
            return u.toggle = function() {
                var u, c, o, s, f;
                if (!this._element.disabled && !t(this._element).hasClass(gi) && (u = n._getParentFromElement(this._element), c = t(this._menu).hasClass(h), (n._clearMenus(), !c) && (o = { relatedTarget: this._element }, s = t.Event(e.SHOW, o), t(u).trigger(s), !s.isDefaultPrevented()))) {
                    if (!this._inNavbar) {
                        if ("undefined" == typeof i) throw new TypeError("Bootstrap's dropdowns require Popper.js (https://popper.js.org/)");
                        f = this._element;
                        "parent" === this._config.reference ? f = u : r.isElement(this._config.reference) && (f = this._config.reference, "undefined" != typeof this._config.reference.jquery && (f = this._config.reference[0]));
                        "scrollParent" !== this._config.boundary && t(u).addClass(fo);
                        this._popper = new i(f, this._menu, this._getPopperConfig())
                    }
                    "ontouchstart" in document.documentElement && 0 === t(u).closest(eo).length && t(document.body).children().on("mouseover", null, t.noop);
                    this._element.focus();
                    this._element.setAttribute("aria-expanded", !0);
                    t(this._menu).toggleClass(h);
                    t(u).toggleClass(h).trigger(t.Event(e.SHOWN, o))
                }
            }, u.show = function() {
                if (!(this._element.disabled || t(this._element).hasClass(gi) || t(this._menu).hasClass(h))) {
                    var i = { relatedTarget: this._element },
                        r = t.Event(e.SHOW, i),
                        u = n._getParentFromElement(this._element);
                    t(u).trigger(r);
                    r.isDefaultPrevented() || (t(this._menu).toggleClass(h), t(u).toggleClass(h).trigger(t.Event(e.SHOWN, i)))
                }
            }, u.hide = function() {
                if (!this._element.disabled && !t(this._element).hasClass(gi) && t(this._menu).hasClass(h)) {
                    var i = { relatedTarget: this._element },
                        r = t.Event(e.HIDE, i),
                        u = n._getParentFromElement(this._element);
                    t(u).trigger(r);
                    r.isDefaultPrevented() || (t(this._menu).toggleClass(h), t(u).toggleClass(h).trigger(t.Event(e.HIDDEN, i)))
                }
            }, u.dispose = function() {
                t.removeData(this._element, ti);
                t(this._element).off(y);
                this._element = null;
                (this._menu = null) !== this._popper && (this._popper.destroy(), this._popper = null)
            }, u.update = function() {
                this._inNavbar = this._detectNavbar();
                null !== this._popper && this._popper.scheduleUpdate()
            }, u._addEventListeners = function() {
                var n = this;
                t(this._element).on(e.CLICK, function(t) {
                    t.preventDefault();
                    t.stopPropagation();
                    n.toggle()
                })
            }, u._getConfig = function(n) { return n = f({}, this.constructor.Default, t(this._element).data(), n), r.typeCheckConfig(et, n, this.constructor.DefaultType), n }, u._getMenuElement = function() {
                if (!this._menu) {
                    var t = n._getParentFromElement(this._element);
                    t && (this._menu = t.querySelector(dr))
                }
                return this._menu
            }, u._getPlacement = function() {
                var i = t(this._element.parentNode),
                    n = co;
                return i.hasClass(io) ? (n = so, t(this._menu).hasClass(au) && (n = ho)) : i.hasClass(ro) ? n = ao : i.hasClass(uo) ? n = vo : t(this._menu).hasClass(au) && (n = lo), n
            }, u._detectNavbar = function() { return 0 < t(this._element).closest(".navbar").length }, u._getOffset = function() {
                var t = this,
                    n = {};
                return "function" == typeof this._config.offset ? n.fn = function(n) { return n.offsets = f({}, n.offsets, t._config.offset(n.offsets, t._element) || {}), n } : n.offset = this._config.offset, n
            }, u._getPopperConfig = function() { var n = { placement: this._getPlacement(), modifiers: { offset: this._getOffset(), flip: { enabled: this._config.flip }, preventOverflow: { boundariesElement: this._config.boundary } } }; return "static" === this._config.display && (n.modifiers.applyStyle = { enabled: !1 }), n }, n._jQueryInterface = function(i) {
                return this.each(function() {
                    var r = t(this).data(ti);
                    if (r || (r = new n(this, "object" == typeof i ? i : null), t(this).data(ti, r)), "string" == typeof i) {
                        if ("undefined" == typeof r[i]) throw new TypeError('No method named "' + i + '"');
                        r[i]()
                    }
                })
            }, n._clearMenus = function(i) {
                var l, s;
                if (!i || 3 !== i.which && ("keyup" !== i.type || 9 === i.which))
                    for (var u = [].slice.call(document.querySelectorAll(nr)), r = 0, a = u.length; r < a; r++) {
                        var f = n._getParentFromElement(u[r]),
                            c = t(u[r]).data(ti),
                            o = { relatedTarget: u[r] };
                        (i && "click" === i.type && (o.clickEvent = i), c) && (l = c._menu, !t(f).hasClass(h) || i && ("click" === i.type && /input|textarea/i.test(i.target.tagName) || "keyup" === i.type && 9 === i.which) && t.contains(f, i.target) || (s = t.Event(e.HIDE, o), t(f).trigger(s), s.isDefaultPrevented() || ("ontouchstart" in document.documentElement && t(document.body).children().off("mouseover", null, t.noop), u[r].setAttribute("aria-expanded", "false"), t(l).removeClass(h), t(f).removeClass(h).trigger(t.Event(e.HIDDEN, o)))))
                    }
            }, n._getParentFromElement = function(n) { var t, i = r.getSelectorFromElement(n); return i && (t = document.querySelector(i)), t || n.parentNode }, n._dataApiKeydownHandler = function(i) {
                var f, e, u, r, o;
                (/input|textarea/i.test(i.target.tagName) ? 32 === i.which || 27 !== i.which && (40 !== i.which && 38 !== i.which || t(i.target).closest(dr).length) : !to.test(i.which)) || (i.preventDefault(), i.stopPropagation(), this.disabled || t(this).hasClass(gi)) || (f = n._getParentFromElement(this), e = t(f).hasClass(h), e && (!e || 27 !== i.which && 32 !== i.which) ? (u = [].slice.call(f.querySelectorAll(oo)), 0 !== u.length && (r = u.indexOf(i.target), 38 === i.which && 0 < r && r--, 40 === i.which && r < u.length - 1 && r++, r < 0 && (r = 0), u[r].focus())) : (27 === i.which && (o = f.querySelector(nr), t(o).trigger("focus")), t(this).trigger("click")))
            }, l(n, null, [{ key: "VERSION", get: function() { return "4.3.1" } }, { key: "Default", get: function() { return yo } }, { key: "DefaultType", get: function() { return po } }]), n
        }();
    t(document).on(e.KEYDOWN_DATA_API, nr, p._dataApiKeydownHandler).on(e.KEYDOWN_DATA_API, dr, p._dataApiKeydownHandler).on(e.CLICK_DATA_API + " " + e.KEYUP_DATA_API, p._clearMenus).on(e.CLICK_DATA_API, nr, function(n) {
        n.preventDefault();
        n.stopPropagation();
        p._jQueryInterface.call(t(this), "toggle")
    }).on(e.CLICK_DATA_API, ".dropdown form", function(n) { n.stopPropagation() });
    t.fn[et] = p._jQueryInterface;
    t.fn[et].Constructor = p;
    t.fn[et].noConflict = function() { return t.fn[et] = no, p._jQueryInterface };
    var ot = "modal",
        ii = "bs.modal",
        c = "." + ii,
        wo = t.fn[ot],
        gr = { backdrop: !0, keyboard: !0, focus: !0, show: !0 },
        bo = { backdrop: "(boolean|string)", keyboard: "boolean", focus: "boolean", show: "boolean" },
        u = { HIDE: "hide" + c, HIDDEN: "hidden" + c, SHOW: "show" + c, SHOWN: "shown" + c, FOCUSIN: "focusin" + c, RESIZE: "resize" + c, CLICK_DISMISS: "click.dismiss" + c, KEYDOWN_DISMISS: "keydown.dismiss" + c, MOUSEUP_DISMISS: "mouseup.dismiss" + c, MOUSEDOWN_DISMISS: "mousedown.dismiss" + c, CLICK_DATA_API: "click" + c + ".data-api" },
        ko = "modal-dialog-scrollable",
        go = "modal-scrollbar-measure",
        ns = "modal-backdrop",
        vu = "modal-open",
        st = "fade",
        tr = "show",
        ts = ".modal-dialog",
        is = ".modal-body",
        rs = '[data-dismiss="modal"]',
        yu = ".fixed-top, .fixed-bottom, .is-fixed, .sticky-top",
        pu = ".sticky-top",
        ri = function() {
            function i(n, t) {
                this._config = this._getConfig(t);
                this._element = n;
                this._dialog = n.querySelector(ts);
                this._backdrop = null;
                this._isShown = !1;
                this._isBodyOverflowing = !1;
                this._ignoreBackdropClick = !1;
                this._isTransitioning = !1;
                this._scrollbarWidth = 0
            }
            var n = i.prototype;
            return n.toggle = function(n) { return this._isShown ? this.hide() : this.show(n) }, n.show = function(n) {
                var i = this,
                    r;
                this._isShown || this._isTransitioning || (t(this._element).hasClass(st) && (this._isTransitioning = !0), r = t.Event(u.SHOW, { relatedTarget: n }), t(this._element).trigger(r), this._isShown || r.isDefaultPrevented() || (this._isShown = !0, this._checkScrollbar(), this._setScrollbar(), this._adjustDialog(), this._setEscapeEvent(), this._setResizeEvent(), t(this._element).on(u.CLICK_DISMISS, rs, function(n) { return i.hide(n) }), t(this._dialog).on(u.MOUSEDOWN_DISMISS, function() { t(i._element).one(u.MOUSEUP_DISMISS, function(n) { t(n.target).is(i._element) && (i._ignoreBackdropClick = !0) }) }), this._showBackdrop(function() { return i._showElement(n) })))
            }, n.hide = function(n) {
                var o = this,
                    i, f, e;
                (n && n.preventDefault(), this._isShown && !this._isTransitioning) && (i = t.Event(u.HIDE), (t(this._element).trigger(i), this._isShown && !i.isDefaultPrevented()) && (this._isShown = !1, f = t(this._element).hasClass(st), (f && (this._isTransitioning = !0), this._setEscapeEvent(), this._setResizeEvent(), t(document).off(u.FOCUSIN), t(this._element).removeClass(tr), t(this._element).off(u.CLICK_DISMISS), t(this._dialog).off(u.MOUSEDOWN_DISMISS), f) ? (e = r.getTransitionDurationFromElement(this._element), t(this._element).one(r.TRANSITION_END, function(n) { return o._hideModal(n) }).emulateTransitionEnd(e)) : this._hideModal()))
            }, n.dispose = function() {
                [window, this._element, this._dialog].forEach(function(n) { return t(n).off(c) });
                t(document).off(u.FOCUSIN);
                t.removeData(this._element, ii);
                this._config = null;
                this._element = null;
                this._dialog = null;
                this._backdrop = null;
                this._isShown = null;
                this._isBodyOverflowing = null;
                this._ignoreBackdropClick = null;
                this._isTransitioning = null;
                this._scrollbarWidth = null
            }, n.handleUpdate = function() { this._adjustDialog() }, n._getConfig = function(n) { return n = f({}, gr, n), r.typeCheckConfig(ot, n, bo), n }, n._showElement = function(n) {
                var i = this,
                    e = t(this._element).hasClass(st),
                    o, f, s;
                this._element.parentNode && this._element.parentNode.nodeType === Node.ELEMENT_NODE || document.body.appendChild(this._element);
                this._element.style.display = "block";
                this._element.removeAttribute("aria-hidden");
                this._element.setAttribute("aria-modal", !0);
                t(this._dialog).hasClass(ko) ? this._dialog.querySelector(is).scrollTop = 0 : this._element.scrollTop = 0;
                e && r.reflow(this._element);
                t(this._element).addClass(tr);
                this._config.focus && this._enforceFocus();
                o = t.Event(u.SHOWN, { relatedTarget: n });
                f = function() {
                    i._config.focus && i._element.focus();
                    i._isTransitioning = !1;
                    t(i._element).trigger(o)
                };
                e ? (s = r.getTransitionDurationFromElement(this._dialog), t(this._dialog).one(r.TRANSITION_END, f).emulateTransitionEnd(s)) : f()
            }, n._enforceFocus = function() {
                var n = this;
                t(document).off(u.FOCUSIN).on(u.FOCUSIN, function(i) { document !== i.target && n._element !== i.target && 0 === t(n._element).has(i.target).length && n._element.focus() })
            }, n._setEscapeEvent = function() {
                var n = this;
                this._isShown && this._config.keyboard ? t(this._element).on(u.KEYDOWN_DISMISS, function(t) { 27 === t.which && (t.preventDefault(), n.hide()) }) : this._isShown || t(this._element).off(u.KEYDOWN_DISMISS)
            }, n._setResizeEvent = function() {
                var n = this;
                this._isShown ? t(window).on(u.RESIZE, function(t) { return n.handleUpdate(t) }) : t(window).off(u.RESIZE)
            }, n._hideModal = function() {
                var n = this;
                this._element.style.display = "none";
                this._element.setAttribute("aria-hidden", !0);
                this._element.removeAttribute("aria-modal");
                this._isTransitioning = !1;
                this._showBackdrop(function() {
                    t(document.body).removeClass(vu);
                    n._resetAdjustments();
                    n._resetScrollbar();
                    t(n._element).trigger(u.HIDDEN)
                })
            }, n._removeBackdrop = function() { this._backdrop && (t(this._backdrop).remove(), this._backdrop = null) }, n._showBackdrop = function(n) {
                var i = this,
                    f = t(this._element).hasClass(st) ? st : "",
                    o, e, s;
                if (this._isShown && this._config.backdrop) {
                    if (this._backdrop = document.createElement("div"), this._backdrop.className = ns, f && this._backdrop.classList.add(f), t(this._backdrop).appendTo(document.body), t(this._element).on(u.CLICK_DISMISS, function(n) { i._ignoreBackdropClick ? i._ignoreBackdropClick = !1 : n.target === n.currentTarget && ("static" === i._config.backdrop ? i._element.focus() : i.hide()) }), f && r.reflow(this._backdrop), t(this._backdrop).addClass(tr), !n) return;
                    if (!f) return void n();
                    o = r.getTransitionDurationFromElement(this._backdrop);
                    t(this._backdrop).one(r.TRANSITION_END, n).emulateTransitionEnd(o)
                } else !this._isShown && this._backdrop ? (t(this._backdrop).removeClass(tr), e = function() {
                    i._removeBackdrop();
                    n && n()
                }, t(this._element).hasClass(st) ? (s = r.getTransitionDurationFromElement(this._backdrop), t(this._backdrop).one(r.TRANSITION_END, e).emulateTransitionEnd(s)) : e()) : n && n()
            }, n._adjustDialog = function() {
                var n = this._element.scrollHeight > document.documentElement.clientHeight;
                !this._isBodyOverflowing && n && (this._element.style.paddingLeft = this._scrollbarWidth + "px");
                this._isBodyOverflowing && !n && (this._element.style.paddingRight = this._scrollbarWidth + "px")
            }, n._resetAdjustments = function() {
                this._element.style.paddingLeft = "";
                this._element.style.paddingRight = ""
            }, n._checkScrollbar = function() {
                var n = document.body.getBoundingClientRect();
                this._isBodyOverflowing = n.left + n.right < window.innerWidth;
                this._scrollbarWidth = this._getScrollbarWidth()
            }, n._setScrollbar = function() {
                var n = this,
                    i, r, u, f;
                this._isBodyOverflowing && (i = [].slice.call(document.querySelectorAll(yu)), r = [].slice.call(document.querySelectorAll(pu)), t(i).each(function(i, r) {
                    var u = r.style.paddingRight,
                        f = t(r).css("padding-right");
                    t(r).data("padding-right", u).css("padding-right", parseFloat(f) + n._scrollbarWidth + "px")
                }), t(r).each(function(i, r) {
                    var u = r.style.marginRight,
                        f = t(r).css("margin-right");
                    t(r).data("margin-right", u).css("margin-right", parseFloat(f) - n._scrollbarWidth + "px")
                }), u = document.body.style.paddingRight, f = t(document.body).css("padding-right"), t(document.body).data("padding-right", u).css("padding-right", parseFloat(f) + this._scrollbarWidth + "px"));
                t(document.body).addClass(vu)
            }, n._resetScrollbar = function() {
                var r = [].slice.call(document.querySelectorAll(yu)),
                    n, i;
                t(r).each(function(n, i) {
                    var r = t(i).data("padding-right");
                    t(i).removeData("padding-right");
                    i.style.paddingRight = r || ""
                });
                n = [].slice.call(document.querySelectorAll("" + pu));
                t(n).each(function(n, i) { var r = t(i).data("margin-right"); "undefined" != typeof r && t(i).css("margin-right", r).removeData("margin-right") });
                i = t(document.body).data("padding-right");
                t(document.body).removeData("padding-right");
                document.body.style.paddingRight = i || ""
            }, n._getScrollbarWidth = function() {
                var n = document.createElement("div"),
                    t;
                return n.className = go, document.body.appendChild(n), t = n.getBoundingClientRect().width - n.clientWidth, document.body.removeChild(n), t
            }, i._jQueryInterface = function(n, r) {
                return this.each(function() {
                    var u = t(this).data(ii),
                        e = f({}, gr, t(this).data(), "object" == typeof n && n ? n : {});
                    if (u || (u = new i(this, e), t(this).data(ii, u)), "string" == typeof n) {
                        if ("undefined" == typeof u[n]) throw new TypeError('No method named "' + n + '"');
                        u[n](r)
                    } else e.show && u.show(r)
                })
            }, l(i, null, [{ key: "VERSION", get: function() { return "4.3.1" } }, { key: "Default", get: function() { return gr } }]), i
        }();
    t(document).on(u.CLICK_DATA_API, '[data-toggle="modal"]', function(n) {
        var i, e = this,
            o = r.getSelectorFromElement(this),
            s, h;
        o && (i = document.querySelector(o));
        s = t(i).data(ii) ? "toggle" : f({}, t(i).data(), t(this).data());
        "A" !== this.tagName && "AREA" !== this.tagName || n.preventDefault();
        h = t(i).one(u.SHOW, function(n) { n.isDefaultPrevented() || h.one(u.HIDDEN, function() { t(e).is(":visible") && e.focus() }) });
        ri._jQueryInterface.call(t(i), s, this)
    });
    t.fn[ot] = ri._jQueryInterface;
    t.fn[ot].Constructor = ri;
    t.fn[ot].noConflict = function() { return t.fn[ot] = wo, ri._jQueryInterface };
    var us = ["background", "cite", "href", "itemtype", "longdesc", "poster", "src", "xlink:href"],
        fs = /^(?:(?:https?|mailto|ftp|tel|file):|[^&:/?#]*(?:[/?#]|$))/gi,
        es = /^data:(?:image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp)|video\/(?:mpeg|mp4|ogg|webm)|audio\/(?:mp3|oga|ogg|opus));base64,[a-z0-9+/]+=*$/i;
    var d = "tooltip",
        ir = "bs.tooltip",
        a = "." + ir,
        os = t.fn[d],
        bu = "bs-tooltip",
        ss = new RegExp("(^|\\s)" + bu + "\\S+", "g"),
        hs = ["sanitize", "whiteList", "sanitizeFn"],
        cs = { animation: "boolean", template: "string", title: "(string|element|function)", trigger: "string", delay: "(number|object)", html: "boolean", selector: "(string|boolean)", placement: "(string|function)", offset: "(number|string|function)", container: "(string|element|boolean)", fallbackPlacement: "(string|array)", boundary: "(string|element)", sanitize: "boolean", sanitizeFn: "(null|function)", whiteList: "object" },
        ls = { AUTO: "auto", TOP: "top", RIGHT: "right", BOTTOM: "bottom", LEFT: "left" },
        as = { animation: !0, template: '<div class="tooltip" role="tooltip"><div class="arrow"><\/div><div class="tooltip-inner"><\/div><\/div>', trigger: "hover focus", title: "", delay: 0, html: !1, selector: !1, placement: "top", offset: 0, container: !1, fallbackPlacement: "flip", boundary: "scrollParent", sanitize: !0, sanitizeFn: null, whiteList: { "*": ["class", "dir", "id", "lang", "role", /^aria-[\w-]*$/i], a: ["target", "href", "title", "rel"], area: [], b: [], br: [], col: [], code: [], div: [], em: [], hr: [], h1: [], h2: [], h3: [], h4: [], h5: [], h6: [], i: [], img: ["src", "alt", "title", "width", "height"], li: [], ol: [], p: [], pre: [], s: [], small: [], span: [], sub: [], sup: [], strong: [], u: [], ul: [] } },
        ui = "show",
        nu = "out",
        vs = { HIDE: "hide" + a, HIDDEN: "hidden" + a, SHOW: "show" + a, SHOWN: "shown" + a, INSERTED: "inserted" + a, CLICK: "click" + a, FOCUSIN: "focusin" + a, FOCUSOUT: "focusout" + a, MOUSEENTER: "mouseenter" + a, MOUSELEAVE: "mouseleave" + a },
        fi = "fade",
        ei = "show",
        ys = ".tooltip-inner",
        ps = ".arrow",
        oi = "hover",
        tu = "focus",
        ws = "click",
        bs = "manual",
        g = function() {
            function u(n, t) {
                if ("undefined" == typeof i) throw new TypeError("Bootstrap's tooltips require Popper.js (https://popper.js.org/)");
                this._isEnabled = !0;
                this._timeout = 0;
                this._hoverState = "";
                this._activeTrigger = {};
                this._popper = null;
                this.element = n;
                this.config = this._getConfig(t);
                this.tip = null;
                this._setListeners()
            }
            var n = u.prototype;
            return n.enable = function() { this._isEnabled = !0 }, n.disable = function() { this._isEnabled = !1 }, n.toggleEnabled = function() { this._isEnabled = !this._isEnabled }, n.toggle = function(n) {
                if (this._isEnabled)
                    if (n) {
                        var r = this.constructor.DATA_KEY,
                            i = t(n.currentTarget).data(r);
                        i || (i = new this.constructor(n.currentTarget, this._getDelegateConfig()), t(n.currentTarget).data(r, i));
                        i._activeTrigger.click = !i._activeTrigger.click;
                        i._isWithActiveTrigger() ? i._enter(null, i) : i._leave(null, i)
                    } else {
                        if (t(this.getTipElement()).hasClass(ei)) return void this._leave(null, this);
                        this._enter(null, this)
                    }
            }, n.dispose = function() {
                clearTimeout(this._timeout);
                t.removeData(this.element, this.constructor.DATA_KEY);
                t(this.element).off(this.constructor.EVENT_KEY);
                t(this.element).closest(".modal").off("hide.bs.modal");
                this.tip && t(this.tip).remove();
                this._isEnabled = null;
                this._timeout = null;
                this._hoverState = null;
                (this._activeTrigger = null) !== this._popper && this._popper.destroy();
                this._popper = null;
                this.element = null;
                this.config = null;
                this.tip = null
            }, n.show = function() {
                var n = this,
                    f, e, c, u, o, l, s, a, h, v;
                if ("none" === t(this.element).css("display")) throw new Error("Please use show on visible elements");
                if (f = t.Event(this.constructor.Event.SHOW), this.isWithContent() && this._isEnabled) {
                    if (t(this.element).trigger(f), e = r.findShadowRoot(this.element), c = t.contains(null !== e ? e : this.element.ownerDocument.documentElement, this.element), f.isDefaultPrevented() || !c) return;
                    u = this.getTipElement();
                    o = r.getUID(this.constructor.NAME);
                    u.setAttribute("id", o);
                    this.element.setAttribute("aria-describedby", o);
                    this.setContent();
                    this.config.animation && t(u).addClass(fi);
                    l = "function" == typeof this.config.placement ? this.config.placement.call(this, u, this.element) : this.config.placement;
                    s = this._getAttachment(l);
                    this.addAttachmentClass(s);
                    a = this._getContainer();
                    t(u).data(this.constructor.DATA_KEY, this);
                    t.contains(this.element.ownerDocument.documentElement, this.tip) || t(u).appendTo(a);
                    t(this.element).trigger(this.constructor.Event.INSERTED);
                    this._popper = new i(this.element, u, { placement: s, modifiers: { offset: this._getOffset(), flip: { behavior: this.config.fallbackPlacement }, arrow: { element: ps }, preventOverflow: { boundariesElement: this.config.boundary } }, onCreate: function(t) { t.originalPlacement !== t.placement && n._handlePopperPlacementChange(t) }, onUpdate: function(t) { return n._handlePopperPlacementChange(t) } });
                    t(u).addClass(ei);
                    "ontouchstart" in document.documentElement && t(document.body).children().on("mouseover", null, t.noop);
                    h = function() {
                        n.config.animation && n._fixTransition();
                        var i = n._hoverState;
                        n._hoverState = null;
                        t(n.element).trigger(n.constructor.Event.SHOWN);
                        i === nu && n._leave(null, n)
                    };
                    t(this.tip).hasClass(fi) ? (v = r.getTransitionDurationFromElement(this.tip), t(this.tip).one(r.TRANSITION_END, h).emulateTransitionEnd(v)) : h()
                }
            }, n.hide = function(n) {
                var i = this,
                    u = this.getTipElement(),
                    f = t.Event(this.constructor.Event.HIDE),
                    e = function() {
                        i._hoverState !== ui && u.parentNode && u.parentNode.removeChild(u);
                        i._cleanTipClass();
                        i.element.removeAttribute("aria-describedby");
                        t(i.element).trigger(i.constructor.Event.HIDDEN);
                        null !== i._popper && i._popper.destroy();
                        n && n()
                    },
                    o;
                (t(this.element).trigger(f), f.isDefaultPrevented()) || ((t(u).removeClass(ei), "ontouchstart" in document.documentElement && t(document.body).children().off("mouseover", null, t.noop), this._activeTrigger[ws] = !1, this._activeTrigger[tu] = !1, this._activeTrigger[oi] = !1, t(this.tip).hasClass(fi)) ? (o = r.getTransitionDurationFromElement(u), t(u).one(r.TRANSITION_END, e).emulateTransitionEnd(o)) : e(), this._hoverState = "")
            }, n.update = function() { null !== this._popper && this._popper.scheduleUpdate() }, n.isWithContent = function() { return Boolean(this.getTitle()) }, n.addAttachmentClass = function(n) { t(this.getTipElement()).addClass(bu + "-" + n) }, n.getTipElement = function() { return this.tip = this.tip || t(this.config.template)[0], this.tip }, n.setContent = function() {
                var n = this.getTipElement();
                this.setElementContent(t(n.querySelectorAll(ys)), this.getTitle());
                t(n).removeClass(fi + " " + ei)
            }, n.setElementContent = function(n, i) { "object" != typeof i || !i.nodeType && !i.jquery ? this.config.html ? (this.config.sanitize && (i = wu(i, this.config.whiteList, this.config.sanitizeFn)), n.html(i)) : n.text(i) : this.config.html ? t(i).parent().is(n) || n.empty().append(i) : n.text(t(i).text()) }, n.getTitle = function() { var n = this.element.getAttribute("data-original-title"); return n || (n = "function" == typeof this.config.title ? this.config.title.call(this.element) : this.config.title), n }, n._getOffset = function() {
                var t = this,
                    n = {};
                return "function" == typeof this.config.offset ? n.fn = function(n) { return n.offsets = f({}, n.offsets, t.config.offset(n.offsets, t.element) || {}), n } : n.offset = this.config.offset, n
            }, n._getContainer = function() { return !1 === this.config.container ? document.body : r.isElement(this.config.container) ? t(this.config.container) : t(document).find(this.config.container) }, n._getAttachment = function(n) { return ls[n.toUpperCase()] }, n._setListeners = function() {
                var n = this;
                this.config.trigger.split(" ").forEach(function(i) {
                    if ("click" === i) t(n.element).on(n.constructor.Event.CLICK, n.config.selector, function(t) { return n.toggle(t) });
                    else if (i !== bs) {
                        var r = i === oi ? n.constructor.Event.MOUSEENTER : n.constructor.Event.FOCUSIN,
                            u = i === oi ? n.constructor.Event.MOUSELEAVE : n.constructor.Event.FOCUSOUT;
                        t(n.element).on(r, n.config.selector, function(t) { return n._enter(t) }).on(u, n.config.selector, function(t) { return n._leave(t) })
                    }
                });
                t(this.element).closest(".modal").on("hide.bs.modal", function() { n.element && n.hide() });
                this.config.selector ? this.config = f({}, this.config, { trigger: "manual", selector: "" }) : this._fixTitle()
            }, n._fixTitle = function() {
                var n = typeof this.element.getAttribute("data-original-title");
                (this.element.getAttribute("title") || "string" !== n) && (this.element.setAttribute("data-original-title", this.element.getAttribute("title") || ""), this.element.setAttribute("title", ""))
            }, n._enter = function(n, i) {
                var r = this.constructor.DATA_KEY;
                (i = i || t(n.currentTarget).data(r)) || (i = new this.constructor(n.currentTarget, this._getDelegateConfig()), t(n.currentTarget).data(r, i));
                n && (i._activeTrigger["focusin" === n.type ? tu : oi] = !0);
                t(i.getTipElement()).hasClass(ei) || i._hoverState === ui ? i._hoverState = ui : (clearTimeout(i._timeout), i._hoverState = ui, i.config.delay && i.config.delay.show ? i._timeout = setTimeout(function() { i._hoverState === ui && i.show() }, i.config.delay.show) : i.show())
            }, n._leave = function(n, i) {
                var r = this.constructor.DATA_KEY;
                (i = i || t(n.currentTarget).data(r)) || (i = new this.constructor(n.currentTarget, this._getDelegateConfig()), t(n.currentTarget).data(r, i));
                n && (i._activeTrigger["focusout" === n.type ? tu : oi] = !1);
                i._isWithActiveTrigger() || (clearTimeout(i._timeout), i._hoverState = nu, i.config.delay && i.config.delay.hide ? i._timeout = setTimeout(function() { i._hoverState === nu && i.hide() }, i.config.delay.hide) : i.hide())
            }, n._isWithActiveTrigger = function() {
                for (var n in this._activeTrigger)
                    if (this._activeTrigger[n]) return !0;
                return !1
            }, n._getConfig = function(n) { var i = t(this.element).data(); return Object.keys(i).forEach(function(n) {-1 !== hs.indexOf(n) && delete i[n] }), "number" == typeof(n = f({}, this.constructor.Default, i, "object" == typeof n && n ? n : {})).delay && (n.delay = { show: n.delay, hide: n.delay }), "number" == typeof n.title && (n.title = n.title.toString()), "number" == typeof n.content && (n.content = n.content.toString()), r.typeCheckConfig(d, n, this.constructor.DefaultType), n.sanitize && (n.template = wu(n.template, n.whiteList, n.sanitizeFn)), n }, n._getDelegateConfig = function() {
                var t = {},
                    n;
                if (this.config)
                    for (n in this.config) this.constructor.Default[n] !== this.config[n] && (t[n] = this.config[n]);
                return t
            }, n._cleanTipClass = function() {
                var i = t(this.getTipElement()),
                    n = i.attr("class").match(ss);
                null !== n && n.length && i.removeClass(n.join(""))
            }, n._handlePopperPlacementChange = function(n) {
                var t = n.instance;
                this.tip = t.popper;
                this._cleanTipClass();
                this.addAttachmentClass(this._getAttachment(n.placement))
            }, n._fixTransition = function() {
                var n = this.getTipElement(),
                    i = this.config.animation;
                null === n.getAttribute("x-placement") && (t(n).removeClass(fi), this.config.animation = !1, this.hide(), this.show(), this.config.animation = i)
            }, u._jQueryInterface = function(n) {
                return this.each(function() {
                    var i = t(this).data(ir),
                        r = "object" == typeof n && n;
                    if ((i || !/dispose|hide/.test(n)) && (i || (i = new u(this, r), t(this).data(ir, i)), "string" == typeof n)) {
                        if ("undefined" == typeof i[n]) throw new TypeError('No method named "' + n + '"');
                        i[n]()
                    }
                })
            }, l(u, null, [{ key: "VERSION", get: function() { return "4.3.1" } }, { key: "Default", get: function() { return as } }, { key: "NAME", get: function() { return d } }, { key: "DATA_KEY", get: function() { return ir } }, { key: "Event", get: function() { return vs } }, { key: "EVENT_KEY", get: function() { return a } }, { key: "DefaultType", get: function() { return cs } }]), u
        }();
    t.fn[d] = g._jQueryInterface;
    t.fn[d].Constructor = g;
    t.fn[d].noConflict = function() { return t.fn[d] = os, g._jQueryInterface };
    var ht = "popover",
        rr = "bs.popover",
        v = "." + rr,
        ks = t.fn[ht],
        ku = "bs-popover",
        ds = new RegExp("(^|\\s)" + ku + "\\S+", "g"),
        gs = f({}, g.Default, { placement: "right", trigger: "click", content: "", template: '<div class="popover" role="tooltip"><div class="arrow"><\/div><h3 class="popover-header"><\/h3><div class="popover-body"><\/div><\/div>' }),
        nh = f({}, g.DefaultType, { content: "(string|element|function)" }),
        th = "fade",
        ih = "show",
        rh = ".popover-header",
        uh = ".popover-body",
        fh = { HIDE: "hide" + v, HIDDEN: "hidden" + v, SHOW: "show" + v, SHOWN: "shown" + v, INSERTED: "inserted" + v, CLICK: "click" + v, FOCUSIN: "focusin" + v, FOCUSOUT: "focusout" + v, MOUSEENTER: "mouseenter" + v, MOUSELEAVE: "mouseleave" + v },
        ur = function(n) {
            function r() { return n.apply(this, arguments) || this }
            var u, f, i;
            return f = n, (u = r).prototype = Object.create(f.prototype), (u.prototype.constructor = u).__proto__ = f, i = r.prototype, i.isWithContent = function() { return this.getTitle() || this._getContent() }, i.addAttachmentClass = function(n) { t(this.getTipElement()).addClass(ku + "-" + n) }, i.getTipElement = function() { return this.tip = this.tip || t(this.config.template)[0], this.tip }, i.setContent = function() {
                var i = t(this.getTipElement()),
                    n;
                this.setElementContent(i.find(rh), this.getTitle());
                n = this._getContent();
                "function" == typeof n && (n = n.call(this.element));
                this.setElementContent(i.find(uh), n);
                i.removeClass(th + " " + ih)
            }, i._getContent = function() { return this.element.getAttribute("data-content") || this.config.content }, i._cleanTipClass = function() {
                var i = t(this.getTipElement()),
                    n = i.attr("class").match(ds);
                null !== n && 0 < n.length && i.removeClass(n.join(""))
            }, r._jQueryInterface = function(n) {
                return this.each(function() {
                    var i = t(this).data(rr),
                        u = "object" == typeof n ? n : null;
                    if ((i || !/dispose|hide/.test(n)) && (i || (i = new r(this, u), t(this).data(rr, i)), "string" == typeof n)) {
                        if ("undefined" == typeof i[n]) throw new TypeError('No method named "' + n + '"');
                        i[n]()
                    }
                })
            }, l(r, null, [{ key: "VERSION", get: function() { return "4.3.1" } }, { key: "Default", get: function() { return gs } }, { key: "NAME", get: function() { return ht } }, { key: "DATA_KEY", get: function() { return rr } }, { key: "Event", get: function() { return fh } }, { key: "EVENT_KEY", get: function() { return v } }, { key: "DefaultType", get: function() { return nh } }]), r
        }(g);
    t.fn[ht] = ur._jQueryInterface;
    t.fn[ht].Constructor = ur;
    t.fn[ht].noConflict = function() { return t.fn[ht] = ks, ur._jQueryInterface };
    var nt = "scrollspy",
        fr = "bs.scrollspy",
        er = "." + fr,
        eh = t.fn[nt],
        du = { offset: 10, method: "auto", target: "" },
        oh = { offset: "number", method: "string", target: "(string|element)" },
        iu = { ACTIVATE: "activate" + er, SCROLL: "scroll" + er, LOAD_DATA_API: "load" + er + ".data-api" },
        sh = "dropdown-item",
        tt = "active",
        hh = '[data-spy="scroll"]',
        gu = ".nav, .list-group",
        ru = ".nav-link",
        ch = ".nav-item",
        nf = ".list-group-item",
        lh = ".dropdown",
        ah = ".dropdown-item",
        vh = ".dropdown-toggle",
        yh = "offset",
        tf = "position",
        si = function() {
            function i(n, i) {
                var r = this;
                this._element = n;
                this._scrollElement = "BODY" === n.tagName ? window : n;
                this._config = this._getConfig(i);
                this._selector = this._config.target + " " + ru + "," + this._config.target + " " + nf + "," + this._config.target + " " + ah;
                this._offsets = [];
                this._targets = [];
                this._activeTarget = null;
                this._scrollHeight = 0;
                t(this._scrollElement).on(iu.SCROLL, function(n) { return r._process(n) });
                this.refresh();
                this._process()
            }
            var n = i.prototype;
            return n.refresh = function() {
                var n = this,
                    u = this._scrollElement === this._scrollElement.window ? yh : tf,
                    i = "auto" === this._config.method ? u : this._config.method,
                    f = i === tf ? this._getScrollTop() : 0;
                this._offsets = [];
                this._targets = [];
                this._scrollHeight = this._getScrollHeight();
                [].slice.call(document.querySelectorAll(this._selector)).map(function(n) {
                    var u, e = r.getSelectorFromElement(n),
                        o;
                    return (e && (u = document.querySelector(e)), u) && (o = u.getBoundingClientRect(), o.width || o.height) ? [t(u)[i]().top + f, e] : null
                }).filter(function(n) { return n }).sort(function(n, t) { return n[0] - t[0] }).forEach(function(t) {
                    n._offsets.push(t[0]);
                    n._targets.push(t[1])
                })
            }, n.dispose = function() {
                t.removeData(this._element, fr);
                t(this._scrollElement).off(er);
                this._element = null;
                this._scrollElement = null;
                this._config = null;
                this._selector = null;
                this._offsets = null;
                this._targets = null;
                this._activeTarget = null;
                this._scrollHeight = null
            }, n._getConfig = function(n) {
                if ("string" != typeof(n = f({}, du, "object" == typeof n && n ? n : {})).target) {
                    var i = t(n.target).attr("id");
                    i || (i = r.getUID(nt), t(n.target).attr("id", i));
                    n.target = "#" + i
                }
                return r.typeCheckConfig(nt, n, oh), n
            }, n._getScrollTop = function() { return this._scrollElement === window ? this._scrollElement.pageYOffset : this._scrollElement.scrollTop }, n._getScrollHeight = function() { return this._scrollElement.scrollHeight || Math.max(document.body.scrollHeight, document.documentElement.scrollHeight) }, n._getOffsetHeight = function() { return this._scrollElement === window ? window.innerHeight : this._scrollElement.getBoundingClientRect().height }, n._process = function() {
                var t = this._getScrollTop() + this._config.offset,
                    r = this._getScrollHeight(),
                    u = this._config.offset + r - this._getOffsetHeight(),
                    i, n;
                if (this._scrollHeight !== r && this.refresh(), u <= t) i = this._targets[this._targets.length - 1], this._activeTarget !== i && this._activate(i);
                else { if (this._activeTarget && t < this._offsets[0] && 0 < this._offsets[0]) return this._activeTarget = null, void this._clear(); for (n = this._offsets.length; n--;) this._activeTarget !== this._targets[n] && t >= this._offsets[n] && ("undefined" == typeof this._offsets[n + 1] || t < this._offsets[n + 1]) && this._activate(this._targets[n]) }
            }, n._activate = function(n) {
                this._activeTarget = n;
                this._clear();
                var r = this._selector.split(",").map(function(t) { return t + '[data-target="' + n + '"],' + t + '[href="' + n + '"]' }),
                    i = t([].slice.call(document.querySelectorAll(r.join(","))));
                i.hasClass(sh) ? (i.closest(lh).find(vh).addClass(tt), i.addClass(tt)) : (i.addClass(tt), i.parents(gu).prev(ru + ", " + nf).addClass(tt), i.parents(gu).prev(ch).children(ru).addClass(tt));
                t(this._scrollElement).trigger(iu.ACTIVATE, { relatedTarget: n })
            }, n._clear = function() {
                [].slice.call(document.querySelectorAll(this._selector)).filter(function(n) { return n.classList.contains(tt) }).forEach(function(n) { return n.classList.remove(tt) })
            }, i._jQueryInterface = function(n) {
                return this.each(function() {
                    var r = t(this).data(fr);
                    if (r || (r = new i(this, "object" == typeof n && n), t(this).data(fr, r)), "string" == typeof n) {
                        if ("undefined" == typeof r[n]) throw new TypeError('No method named "' + n + '"');
                        r[n]()
                    }
                })
            }, l(i, null, [{ key: "VERSION", get: function() { return "4.3.1" } }, { key: "Default", get: function() { return du } }]), i
        }();
    t(window).on(iu.LOAD_DATA_API, function() { for (var r, n = [].slice.call(document.querySelectorAll(hh)), i = n.length; i--;) r = t(n[i]), si._jQueryInterface.call(r, r.data()) });
    t.fn[nt] = si._jQueryInterface;
    t.fn[nt].Constructor = si;
    t.fn[nt].noConflict = function() { return t.fn[nt] = eh, si._jQueryInterface };
    var or = "bs.tab",
        hi = "." + or,
        ph = t.fn.tab,
        ci = { HIDE: "hide" + hi, HIDDEN: "hidden" + hi, SHOW: "show" + hi, SHOWN: "shown" + hi, CLICK_DATA_API: "click" + hi + ".data-api" },
        wh = "dropdown-menu",
        li = "active",
        bh = "disabled",
        rf = "fade",
        uf = "show",
        kh = ".dropdown",
        dh = ".nav, .list-group",
        ff = ".active",
        ef = "> li > .active",
        gh = ".dropdown-toggle",
        nc = "> .dropdown-menu .active",
        ai = function() {
            function n(n) { this._element = n }
            var i = n.prototype;
            return i.show = function() {
                var h = this,
                    u, n, i, f, c, e, o, s;
                this._element.parentNode && this._element.parentNode.nodeType === Node.ELEMENT_NODE && t(this._element).hasClass(li) || t(this._element).hasClass(bh) || (i = t(this._element).closest(dh)[0], f = r.getSelectorFromElement(this._element), i && (c = "UL" === i.nodeName || "OL" === i.nodeName ? ef : ff, n = (n = t.makeArray(t(i).find(c)))[n.length - 1]), e = t.Event(ci.HIDE, { relatedTarget: this._element }), o = t.Event(ci.SHOW, { relatedTarget: n }), (n && t(n).trigger(e), t(this._element).trigger(o), o.isDefaultPrevented() || e.isDefaultPrevented()) || (f && (u = document.querySelector(f)), this._activate(this._element, i), s = function() {
                    var i = t.Event(ci.HIDDEN, { relatedTarget: h._element }),
                        r = t.Event(ci.SHOWN, { relatedTarget: n });
                    t(n).trigger(i);
                    t(h._element).trigger(r)
                }, u ? this._activate(u, u.parentNode, s) : s()))
            }, i.dispose = function() {
                t.removeData(this._element, or);
                this._element = null
            }, i._activate = function(n, i, u) {
                var s = this,
                    f = (!i || "UL" !== i.nodeName && "OL" !== i.nodeName ? t(i).children(ff) : t(i).find(ef))[0],
                    h = u && f && t(f).hasClass(rf),
                    e = function() { return s._transitionComplete(n, f, u) },
                    o;
                f && h ? (o = r.getTransitionDurationFromElement(f), t(f).removeClass(uf).one(r.TRANSITION_END, e).emulateTransitionEnd(o)) : e()
            }, i._transitionComplete = function(n, i, u) {
                var f, e, o;
                i && (t(i).removeClass(li), f = t(i.parentNode).find(nc)[0], f && t(f).removeClass(li), "tab" === i.getAttribute("role") && i.setAttribute("aria-selected", !1));
                (t(n).addClass(li), "tab" === n.getAttribute("role") && n.setAttribute("aria-selected", !0), r.reflow(n), n.classList.contains(rf) && n.classList.add(uf), n.parentNode && t(n.parentNode).hasClass(wh)) && (e = t(n).closest(kh)[0], e && (o = [].slice.call(e.querySelectorAll(gh)), t(o).addClass(li)), n.setAttribute("aria-expanded", !0));
                u && u()
            }, n._jQueryInterface = function(i) {
                return this.each(function() {
                    var u = t(this),
                        r = u.data(or);
                    if (r || (r = new n(this), u.data(or, r)), "string" == typeof i) {
                        if ("undefined" == typeof r[i]) throw new TypeError('No method named "' + i + '"');
                        r[i]()
                    }
                })
            }, l(n, null, [{ key: "VERSION", get: function() { return "4.3.1" } }]), n
        }();
    t(document).on(ci.CLICK_DATA_API, '[data-toggle="tab"], [data-toggle="pill"], [data-toggle="list"]', function(n) {
        n.preventDefault();
        ai._jQueryInterface.call(t(this), "show")
    });
    t.fn.tab = ai._jQueryInterface;
    t.fn.tab.Constructor = ai;
    t.fn.tab.noConflict = function() { return t.fn.tab = ph, ai._jQueryInterface };
    var ct = "toast",
        sr = "bs.toast",
        vi = "." + sr,
        tc = t.fn[ct],
        lt = { CLICK_DISMISS: "click.dismiss" + vi, HIDE: "hide" + vi, HIDDEN: "hidden" + vi, SHOW: "show" + vi, SHOWN: "shown" + vi },
        ic = "fade",
        of = "hide",
        yi = "show",
        sf = "showing",
        rc = { animation: "boolean", autohide: "boolean", delay: "number" },
        hf = { animation: !0, autohide: !0, delay: 500 },
        uc = '[data-dismiss="toast"]',
        hr = function() {
            function i(n, t) {
                this._element = n;
                this._config = this._getConfig(t);
                this._timeout = null;
                this._setListeners()
            }
            var n = i.prototype;
            return n.show = function() {
                var n = this,
                    i, u;
                t(this._element).trigger(lt.SHOW);
                this._config.animation && this._element.classList.add(ic);
                i = function() {
                    n._element.classList.remove(sf);
                    n._element.classList.add(yi);
                    t(n._element).trigger(lt.SHOWN);
                    n._config.autohide && n.hide()
                };
                (this._element.classList.remove(of), this._element.classList.add(sf), this._config.animation) ? (u = r.getTransitionDurationFromElement(this._element), t(this._element).one(r.TRANSITION_END, i).emulateTransitionEnd(u)) : i()
            }, n.hide = function(n) {
                var i = this;
                this._element.classList.contains(yi) && (t(this._element).trigger(lt.HIDE), n ? this._close() : this._timeout = setTimeout(function() { i._close() }, this._config.delay))
            }, n.dispose = function() {
                clearTimeout(this._timeout);
                this._timeout = null;
                this._element.classList.contains(yi) && this._element.classList.remove(yi);
                t(this._element).off(lt.CLICK_DISMISS);
                t.removeData(this._element, sr);
                this._element = null;
                this._config = null
            }, n._getConfig = function(n) { return n = f({}, hf, t(this._element).data(), "object" == typeof n && n ? n : {}), r.typeCheckConfig(ct, n, this.constructor.DefaultType), n }, n._setListeners = function() {
                var n = this;
                t(this._element).on(lt.CLICK_DISMISS, uc, function() { return n.hide(!0) })
            }, n._close = function() {
                var n = this,
                    i = function() {
                        n._element.classList.add(of);
                        t(n._element).trigger(lt.HIDDEN)
                    },
                    u;
                (this._element.classList.remove(yi), this._config.animation) ? (u = r.getTransitionDurationFromElement(this._element), t(this._element).one(r.TRANSITION_END, i).emulateTransitionEnd(u)) : i()
            }, i._jQueryInterface = function(n) {
                return this.each(function() {
                    var u = t(this),
                        r = u.data(sr);
                    if (r || (r = new i(this, "object" == typeof n && n), u.data(sr, r)), "string" == typeof n) {
                        if ("undefined" == typeof r[n]) throw new TypeError('No method named "' + n + '"');
                        r[n](this)
                    }
                })
            }, l(i, null, [{ key: "VERSION", get: function() { return "4.3.1" } }, { key: "DefaultType", get: function() { return rc } }, { key: "Default", get: function() { return hf } }]), i
        }();
    t.fn[ct] = hr._jQueryInterface;
    t.fn[ct].Constructor = hr;
    t.fn[ct].noConflict = function() { return t.fn[ct] = tc, hr._jQueryInterface },
        function() { if ("undefined" == typeof t) throw new TypeError("Bootstrap's JavaScript requires jQuery. jQuery must be included before Bootstrap's JavaScript."); var n = t.fn.jquery.split(" ")[0].split("."); if (n[0] < 2 && n[1] < 9 || 1 === n[0] && 9 === n[1] && n[2] < 1 || 4 <= n[0]) throw new Error("Bootstrap's JavaScript requires at least jQuery v1.9.1 but less than v4.0.0"); }();
    n.Util = r;
    n.Alert = it;
    n.Button = wt;
    n.Carousel = ut;
    n.Collapse = ni;
    n.Dropdown = p;
    n.Modal = ri;
    n.Popover = ur;
    n.Scrollspy = si;
    n.Tab = ai;
    n.Toast = hr;
    n.Tooltip = g;
    Object.defineProperty(n, "__esModule", { value: !0 })
});
! function(n) {
    n(["jquery"], function(n) {
        return function() {
            function v(n, t, r) { return u({ type: f.error, iconClass: i().iconClasses.error, message: n, optionsOverride: r, title: t }) }

            function r(r, u) { return r || (r = i()), t = n("#" + r.containerId), t.length ? t : (u && (t = nt(r)), t) }

            function y(n, t, r) { return u({ type: f.info, iconClass: i().iconClasses.info, message: n, optionsOverride: r, title: t }) }

            function p(n) { o = n }

            function w(n, t, r) { return u({ type: f.success, iconClass: i().iconClasses.success, message: n, optionsOverride: r, title: t }) }

            function b(n, t, r) { return u({ type: f.warning, iconClass: i().iconClasses.warning, message: n, optionsOverride: r, title: t }) }

            function k(n) {
                var u = i();
                t || r(u);
                h(n, u) || g(u)
            }

            function d(u) { var f = i(); return t || r(f), u && 0 === n(":focus", u).length ? void e(u) : void(t.children().length && t.remove()) }

            function g(i) { for (var u = t.children(), r = u.length - 1; r >= 0; r--) h(n(u[r]), i) }

            function h(t, i) { return t && 0 === n(":focus", t).length ? (t[i.hideMethod]({ duration: i.hideDuration, easing: i.hideEasing, complete: function() { e(t) } }), !0) : !1 }

            function nt(i) { return t = n("<div/>").attr("id", i.containerId).addClass(i.positionClass).attr("aria-live", "polite").attr("role", "alert"), t.appendTo(n(i.target)), t }

            function tt() { return { tapToDismiss: !0, toastClass: "toast", containerId: "toast-container", debug: !1, showMethod: "fadeIn", showDuration: 300, showEasing: "swing", onShown: void 0, hideMethod: "fadeOut", hideDuration: 1e3, hideEasing: "swing", onHidden: void 0, extendedTimeOut: 1e3, iconClasses: { error: "toast-error", info: "toast-info", success: "toast-success", warning: "toast-warning" }, iconClass: "toast-info", positionClass: "toast-top-right", timeOut: 5e3, titleClass: "toast-title", messageClass: "toast-message", target: "body", closeHtml: '<button type="button">&times;<\/button>', newestOnTop: !0, preventDuplicates: !1, progressBar: !1 } }

            function c(n) { o && o(n) }

            function u(u) {
                function v(t) {
                    if (!n(":focus", o).length || t) return (clearTimeout(h.intervalId), o[f.hideMethod]({
                        duration: f.hideDuration,
                        easing: f.hideEasing,
                        complete: function() {
                            e(o);
                            f.onHidden && "hidden" !== a.state && f.onHidden();
                            a.state = "hidden";
                            a.endTime = new Date;
                            c(a)
                        }
                    }))
                }

                function g() {
                    (f.timeOut > 0 || f.extendedTimeOut > 0) && (w = setTimeout(v, f.extendedTimeOut), h.maxHideTime = parseFloat(f.extendedTimeOut), h.hideEta = (new Date).getTime() + h.maxHideTime)
                }

                function nt() {
                    clearTimeout(w);
                    h.hideEta = 0;
                    o.stop(!0, !0)[f.showMethod]({ duration: f.showDuration, easing: f.showEasing })
                }

                function tt() {
                    var n = (h.hideEta - (new Date).getTime()) / h.maxHideTime * 100;
                    b.width(n + "%")
                }
                var f = i(),
                    p = u.iconClass || f.iconClass;
                if ("undefined" != typeof u.optionsOverride && (f = n.extend(f, u.optionsOverride), p = u.optionsOverride.iconClass || p), f.preventDuplicates) {
                    if (u.message === s) return;
                    s = u.message
                }
                l++;
                t = r(f, !0);
                var w = null,
                    o = n("<div/>"),
                    k = n("<div/>"),
                    d = n("<div/>"),
                    b = n("<div/>"),
                    y = n(f.closeHtml),
                    h = { intervalId: null, hideEta: null, maxHideTime: null },
                    a = { toastId: l, state: "visible", startTime: new Date, options: f, map: u };
                return u.iconClass && o.addClass(f.toastClass).addClass(p), u.title && (k.append(u.title).addClass(f.titleClass), o.append(k)), u.message && (d.append(u.message).addClass(f.messageClass), o.append(d)), f.closeButton && (y.addClass("toast-close-button").attr("role", "button"), o.prepend(y)), f.progressBar && (b.addClass("toast-progress"), o.prepend(b)), o.hide(), f.newestOnTop ? t.prepend(o) : t.append(o), o[f.showMethod]({ duration: f.showDuration, easing: f.showEasing, complete: f.onShown }), f.timeOut > 0 && (w = setTimeout(v, f.timeOut), h.maxHideTime = parseFloat(f.timeOut), h.hideEta = (new Date).getTime() + h.maxHideTime, f.progressBar && (h.intervalId = setInterval(tt, 10))), o.hover(nt, g), !f.onclick && f.tapToDismiss && o.click(v), f.closeButton && y && y.click(function(n) {
                    n.stopPropagation ? n.stopPropagation() : void 0 !== n.cancelBubble && n.cancelBubble !== !0 && (n.cancelBubble = !0);
                    v(!0)
                }), f.onclick && o.click(function() {
                    f.onclick();
                    v()
                }), c(a), f.debug && console && console.log(a), o
            }

            function i() { return n.extend({}, tt(), a.options) }

            function e(n) {
                t || (t = r());
                n.is(":visible") || (n.remove(), n = null, 0 === t.children().length && (t.remove(), s = void 0))
            }
            var t, o, s, l = 0,
                f = { error: "error", info: "info", success: "success", warning: "warning" },
                a = { clear: k, remove: d, error: v, getContainer: r, info: y, options: {}, subscribe: p, success: w, version: "2.1.0", warning: b };
            return a
        }()
    })
}("function" == typeof define && define.amd ? define : function(n, t) { "undefined" != typeof module && module.exports ? module.exports = t(require("jquery")) : window.toastr = t(window.jQuery) });
! function(n) {
    "use strict";
    n.matchMedia = n.matchMedia || function(n) {
        var u, i = n.documentElement,
            f = i.firstElementChild || i.firstChild,
            r = n.createElement("body"),
            t = n.createElement("div");
        return t.id = "mq-test-1", t.style.cssText = "position:absolute;top:-100em", r.style.background = "none", r.appendChild(t),
            function(n) { return t.innerHTML = '&shy;<style media="' + n + '"> #mq-test-1 { width: 42px; }<\/style>', i.insertBefore(r, f), u = 42 === t.offsetWidth, i.removeChild(r), { matches: u, media: n } }
    }(n.document)
}(this),
function(n) {
    "use strict";

    function p() { y(!0) }
    var t = {};
    n.respond = t;
    t.update = function() {};
    var f = [],
        tt = function() { var t = !1; try { t = new n.XMLHttpRequest } catch (i) { t = new n.ActiveXObject("Microsoft.XMLHTTP") } return function() { return t } }(),
        w = function(n, t) {
            var i = tt();
            i && (i.open("GET", n, !0), i.onreadystatechange = function() { 4 !== i.readyState || 200 !== i.status && 304 !== i.status || t(i.responseText) }, 4 !== i.readyState && i.send(null))
        };
    if (t.ajax = w, t.queue = f, t.regex = { media: /@media[^\{]+\{([^\{\}]*\{[^\}\{]*\})+/gi, keyframes: /@(?:\-(?:o|moz|webkit)\-)?keyframes[^\{]+\{(?:[^\{\}]*\{[^\}\{]*\})+[^\}]*\}/gi, urls: /(url\()['"]?([^\/\)'"][^:\)'"]+)['"]?(\))/g, findStyles: /@media *([^\{]+)\{([\S\s]+?)$/, only: /(only\s+)?([a-zA-Z]+)\s?/, minw: /\([\s]*min\-width\s*:[\s]*([\s]*[0-9\.]+)(px|em)[\s]*\)/, maxw: /\([\s]*max\-width\s*:[\s]*([\s]*[0-9\.]+)(px|em)[\s]*\)/ }, t.mediaQueriesSupported = n.matchMedia && null !== n.matchMedia("only all") && n.matchMedia("only all").matches, !t.mediaQueriesSupported) {
        var c, b, l, i = n.document,
            r = i.documentElement,
            e = [],
            o = [],
            u = [],
            a = {},
            k = 30,
            s = i.getElementsByTagName("head")[0] || r,
            it = i.getElementsByTagName("base")[0],
            h = s.getElementsByTagName("link"),
            v = function() {
                var u, t = i.createElement("div"),
                    n = i.body,
                    o = r.style.fontSize,
                    e = n && n.style.fontSize,
                    f = !1;
                return t.style.cssText = "position:absolute;font-size:1em;width:1em", n || (n = f = i.createElement("body"), n.style.background = "none"), r.style.fontSize = "100%", n.style.fontSize = "100%", n.appendChild(t), f && r.insertBefore(n, r.firstChild), u = t.offsetWidth, f ? r.removeChild(n) : n.removeChild(t), r.style.fontSize = o, e && (n.style.fontSize = e), u = l = parseFloat(u)
            },
            y = function(t) {
                var rt = "clientWidth",
                    ut = r[rt],
                    ft = "CSS1Compat" === i.compatMode && ut || i.body[rt] || ut,
                    p = {},
                    ct = h[h.length - 1],
                    et = (new Date).getTime(),
                    tt, g, nt, f, it;
                if (t && c && k > et - c) return n.clearTimeout(b), b = n.setTimeout(y, k), void 0;
                c = et;
                for (tt in e)
                    if (e.hasOwnProperty(tt)) {
                        var a = e[tt],
                            w = a.minw,
                            d = a.maxw,
                            ot = null === w,
                            st = null === d,
                            ht = "em";
                        w && (w = parseFloat(w) * (w.indexOf(ht) > -1 ? l || v() : 1));
                        d && (d = parseFloat(d) * (d.indexOf(ht) > -1 ? l || v() : 1));
                        a.hasquery && (ot && st || !(ot || ft >= w) || !(st || d >= ft)) || (p[a.media] || (p[a.media] = []), p[a.media].push(o[a.rules]))
                    }
                for (g in u) u.hasOwnProperty(g) && u[g] && u[g].parentNode === s && s.removeChild(u[g]);
                u.length = 0;
                for (nt in p) p.hasOwnProperty(nt) && (f = i.createElement("style"), it = p[nt].join("\n"), f.type = "text/css", f.media = nt, s.insertBefore(f, ct.nextSibling), f.styleSheet ? f.styleSheet.cssText = it : f.appendChild(i.createTextNode(it)), u.push(f))
            },
            d = function(n, i, r) {
                var h = n.replace(t.regex.keyframes, "").match(t.regex.media),
                    c = h && h.length || 0,
                    l, a, f, v, u, p, w, s;
                for (i = i.substring(0, i.lastIndexOf("/")), l = function(n) { return n.replace(t.regex.urls, "$1" + i + "$2$3") }, a = !c && r, i.length && (i += "/"), a && (c = 1), f = 0; c > f; f++)
                    for (a ? (v = r, o.push(l(n))) : (v = h[f].match(t.regex.findStyles) && RegExp.$1, o.push(RegExp.$2 && l(RegExp.$2))), p = v.split(","), w = p.length, s = 0; w > s; s++) u = p[s], e.push({ media: u.split("(")[0].match(t.regex.only) && RegExp.$2 || "all", rules: o.length - 1, hasquery: u.indexOf("(") > -1, minw: u.match(t.regex.minw) && parseFloat(RegExp.$1) + (RegExp.$2 || ""), maxw: u.match(t.regex.maxw) && parseFloat(RegExp.$1) + (RegExp.$2 || "") });
                y()
            },
            g = function() {
                if (f.length) {
                    var t = f.shift();
                    w(t.href, function(i) {
                        d(i, t.href, t.media);
                        a[t.href] = !0;
                        n.setTimeout(function() { g() }, 0)
                    })
                }
            },
            nt = function() {
                for (var r = 0; r < h.length; r++) {
                    var i = h[r],
                        t = i.href,
                        u = i.media,
                        e = i.rel && "stylesheet" === i.rel.toLowerCase();
                    t && e && !a[t] && (i.styleSheet && i.styleSheet.rawCssText ? (d(i.styleSheet.rawCssText, t, u), a[t] = !0) : (!/^([a-zA-Z:]*\/\/)/.test(t) && !it || t.replace(RegExp.$1, "").split("/")[0] === n.location.host) && ("//" === t.substring(0, 2) && (t = n.location.protocol + t), f.push({ href: t, media: u })))
                }
                g()
            };
        nt();
        t.update = nt;
        t.getEmValue = v;
        n.addEventListener ? n.addEventListener("resize", p, !1) : n.attachEvent && n.attachEvent("onresize", p)
    }
}(this),
function(n, t, i) {
    function v(t, i) {
        var u, f;
        if (n.isArray(t)) {
            for (u = t.length - 1; u >= 0; u--) f = t[u], n.type(f) === "string" && r.transports[f] || (i.log("Invalid transport: " + f + ", removing it from the transports list."), t.splice(u, 1));
            t.length === 0 && (i.log("No transports remain within the specified transport array."), t = null)
        } else if (r.transports[t] || t === "auto") { if (t === "auto" && r._.ieVersion <= 8) return ["longPolling"] } else i.log("Invalid transport: " + t.toString() + "."), t = null;
        return t
    }

    function y(n) { return n === "http:" ? 80 : n === "https:" ? 443 : void 0 }

    function h(n, t) { return t.match(/:\d+$/) ? t : t + ":" + y(n) }

    function p(t, i) {
        var u = this,
            r = [];
        u.tryBuffer = function(i) { return t.state === n.signalR.connectionState.connecting ? (r.push(i), !0) : !1 };
        u.drain = function() {
            if (t.state === n.signalR.connectionState.connected)
                while (r.length > 0) i(r.shift())
        };
        u.clear = function() { r = [] }
    }
    var f = { nojQuery: "jQuery was not found. Please ensure jQuery is referenced before the SignalR client JavaScript file.", noTransportOnInit: "No transport could be initialized successfully. Try specifying a different transport or none at all for auto initialization.", errorOnNegotiate: "Error during negotiation request.", stoppedWhileLoading: "The connection was stopped during page load.", stoppedWhileNegotiating: "The connection was stopped during the negotiate request.", errorParsingNegotiateResponse: "Error parsing negotiate response.", errorRedirectionExceedsLimit: "Negotiate redirection limit exceeded.", errorDuringStartRequest: "Error during start request. Stopping the connection.", errorFromServer: "Error message received from the server: '{0}'.", stoppedDuringStartRequest: "The connection was stopped during the start request.", errorParsingStartResponse: "Error parsing start response: '{0}'. Stopping the connection.", invalidStartResponse: "Invalid start response: '{0}'. Stopping the connection.", protocolIncompatible: "You are using a version of the client that isn't compatible with the server. Client version {0}, server version {1}.", aspnetCoreSignalrServer: "Detected a connection attempt to an ASP.NET Core SignalR Server. This client only supports connecting to an ASP.NET SignalR Server. See https://aka.ms/signalr-core-differences for details.", sendFailed: "Send failed.", parseFailed: "Failed at parsing response: {0}", longPollFailed: "Long polling request failed.", eventSourceFailedToConnect: "EventSource failed to connect.", eventSourceError: "Error raised by EventSource", webSocketClosed: "WebSocket closed.", pingServerFailedInvalidResponse: "Invalid ping response when pinging server: '{0}'.", pingServerFailed: "Failed to ping server.", pingServerFailedStatusCode: "Failed to ping server.  Server responded with status code {0}, stopping the connection.", pingServerFailedParse: "Failed to parse ping server response, stopping the connection.", noConnectionTransport: "Connection is in an invalid state, there is no transport active.", webSocketsInvalidState: "The Web Socket transport is in an invalid state, transitioning into reconnecting.", reconnectTimeout: "Couldn't reconnect within the configured timeout of {0} ms, disconnecting.", reconnectWindowTimeout: "The client has been inactive since {0} and it has exceeded the inactivity timeout of {1} ms. Stopping the connection.", jsonpNotSupportedWithAccessToken: "The JSONP protocol does not support connections that require a Bearer token to connect, such as the Azure SignalR Service." };
    if (typeof n != "function") throw new Error(f.nojQuery);
    var r, c, o = t.document.readyState === "complete",
        e = n(t),
        l = "__Negotiate Aborted__",
        u = { onStart: "onStart", onStarting: "onStarting", onReceived: "onReceived", onError: "onError", onConnectionSlow: "onConnectionSlow", onReconnecting: "onReconnecting", onReconnect: "onReconnect", onStateChanged: "onStateChanged", onDisconnect: "onDisconnect" },
        w = function(n, i) {
            if (i !== !1) {
                var r;
                typeof t.console != "undefined" && (r = "[" + (new Date).toTimeString() + "] SignalR: " + n, t.console.debug ? t.console.debug(r) : t.console.log && t.console.log(r))
            }
        },
        s = function(t, i, r) { return i === t.state ? (t.state = r, n(t).triggerHandler(u.onStateChanged, [{ oldState: i, newState: r }]), !0) : !1 },
        b = function(n) { return n.state === r.connectionState.disconnected },
        a = function(n) { return n._.keepAliveData.activated && n.transport.supportsKeepAlive(n) },
        k = function(i) {
            var f, e;
            i._.configuredStopReconnectingTimeout || (e = function(t) {
                var i = r._.format(r.resources.reconnectTimeout, t.disconnectTimeout);
                t.log(i);
                n(t).triggerHandler(u.onError, [r._.error(i, "TimeoutException")]);
                t.stop(!1, !1)
            }, i.reconnecting(function() {
                var n = this;
                n.state === r.connectionState.reconnecting && (f = t.setTimeout(function() { e(n) }, n.disconnectTimeout))
            }), i.stateChanged(function(n) { n.oldState === r.connectionState.reconnecting && t.clearTimeout(f) }), i._.configuredStopReconnectingTimeout = !0)
        };
    if (r = function(n, t, i) { return new r.fn.init(n, t, i) }, r._ = {
            defaultContentType: "application/x-www-form-urlencoded; charset=UTF-8",
            ieVersion: function() { var i, n; return t.navigator.appName === "Microsoft Internet Explorer" && (n = /MSIE ([0-9]+\.[0-9]+)/.exec(t.navigator.userAgent), n && (i = t.parseFloat(n[1]))), i }(),
            error: function(n, t, i) { var r = new Error(n); return r.source = t, typeof i != "undefined" && (r.context = i), r },
            transportError: function(n, t, r, u) { var f = this.error(n, r, u); return f.transport = t ? t.name : i, f },
            format: function() { for (var t = arguments[0], n = 0; n < arguments.length - 1; n++) t = t.replace("{" + n + "}", arguments[n + 1]); return t },
            firefoxMajorVersion: function(n) { var t = n.match(/Firefox\/(\d+)/); return !t || !t.length || t.length < 2 ? 0 : parseInt(t[1], 10) },
            configurePingInterval: function(i) {
                var f = i._.config,
                    e = function(t) { n(i).triggerHandler(u.onError, [t]) };
                f && !i._.pingIntervalId && f.pingInterval && (i._.pingIntervalId = t.setInterval(function() { r.transports._logic.pingServer(i).fail(e) }, f.pingInterval))
            }
        }, r.events = u, r.resources = f, r.ajaxDefaults = { processData: !0, timeout: null, async: !0, global: !1, cache: !1 }, r.changeState = s, r.isDisconnecting = b, r.connectionState = { connecting: 0, connected: 1, reconnecting: 2, disconnected: 4 }, r.hub = { start: function() { throw new Error("SignalR: Error loading hubs. Ensure your hubs reference is correct, e.g. <script src='/signalr/js'><\/script>."); } }, typeof e.on == "function") e.on("load", function() { o = !0 });
    else e.load(function() { o = !0 });
    r.fn = r.prototype = {
        init: function(t, i, r) {
            var f = n(this);
            this.url = t;
            this.qs = i;
            this.lastError = null;
            this._ = { keepAliveData: {}, connectingMessageBuffer: new p(this, function(n) { f.triggerHandler(u.onReceived, [n]) }), lastMessageAt: (new Date).getTime(), lastActiveAt: (new Date).getTime(), beatInterval: 5e3, beatHandle: null, totalTransportConnectTimeout: 0 };
            typeof r == "boolean" && (this.logging = r)
        },
        _parseResponse: function(n) { var t = this; return n ? typeof n == "string" ? t.json.parse(n) : n : n },
        _originalJson: t.JSON,
        json: t.JSON,
        isCrossDomain: function(i, r) { var u; return (i = n.trim(i), r = r || t.location, i.indexOf("http") !== 0) ? !1 : (u = t.document.createElement("a"), u.href = i, u.protocol + h(u.protocol, u.host) !== r.protocol + h(r.protocol, r.host)) },
        ajaxDataType: "text",
        contentType: "application/json; charset=UTF-8",
        logging: !1,
        state: r.connectionState.disconnected,
        clientProtocol: "2.0",
        supportedProtocols: ["1.5", "2.0"],
        reconnectDelay: 2e3,
        transportConnectTimeout: 0,
        disconnectTimeout: 3e4,
        reconnectWindow: 3e4,
        keepAliveWarnAt: 2 / 3,
        start: function(i, h) {
            var c = this,
                y = { pingInterval: 3e5, waitForPageLoad: !0, transport: "auto", jsonp: !1 },
                g, p = c._deferral || n.Deferred(),
                w = t.document.createElement("a"),
                nt = function(i, u) { i.url === u && i.baseUrl || (i.url = u, w.href = i.url, w.protocol && w.protocol !== ":" ? (i.protocol = w.protocol, i.host = w.host) : (i.protocol = t.document.location.protocol, i.host = w.host || t.document.location.host), i.baseUrl = i.protocol + "//" + i.host, i.wsProtocol = i.protocol === "https:" ? "wss://" : "ws://", i.url.indexOf("//") === 0 && (i.url = t.location.protocol + i.url, i.log("Protocol relative URL detected, normalizing it to '" + i.url + "'.")), i.isCrossDomain(i.url) && (i.log("Auto detected cross domain url."), y.transport === "auto" && (y.transport = ["webSockets", "serverSentEvents", "longPolling"]), typeof i.withCredentials == "undefined" && (i.withCredentials = !0), n.support.cors || (i.ajaxDataType = "jsonp", i.log("Using jsonp because this browser doesn't support CORS.")), i.contentType = r._.defaultContentType)) },
                d, b;
            if (c.lastError = null, c._deferral = p, !c.json) throw new Error("SignalR: No JSON parser found. Please ensure json2.js is referenced before the SignalR.js file if you need to support clients without native JSON parsing support, e.g. IE<8.");
            if (n.type(i) === "function" ? h = i : n.type(i) === "object" && (n.extend(y, i), n.type(y.callback) === "function" && (h = y.callback)), y.transport = v(y.transport, c), !y.transport) throw new Error("SignalR: Invalid transport(s) specified, aborting start.");
            return (c._.config = y, !o && y.waitForPageLoad === !0) ? (c._.deferredStartHandler = function() { c.start(i, h) }, e.bind("load", c._.deferredStartHandler), p.promise()) : c.state === r.connectionState.connecting ? p.promise() : s(c, r.connectionState.disconnected, r.connectionState.connecting) === !1 ? (p.resolve(c), p.promise()) : (k(c), y.transport === "auto" && y.jsonp === !0 && (y.transport = "longPolling"), c.withCredentials = y.withCredentials, nt(c, c.url), c._originalUrl = c.url, c.ajaxDataType = y.jsonp ? "jsonp" : "text", n(c).bind(u.onStart, function() {
                n.type(h) === "function" && h.call(c);
                p.resolve(c)
            }), c._.initHandler = r.transports._logic.initHandler(c), g = function(i, o) {
                var l = r._.error(f.noTransportOnInit);
                if (o = o || 0, o >= i.length) {
                    o === 0 ? c.log("No transports supported by the server were selected.") : o === 1 ? c.log("No fallback transports were selected.") : c.log("Fallback transports exhausted.");
                    n(c).triggerHandler(u.onError, [l]);
                    p.reject(l);
                    c.stop();
                    return
                }
                if (c.state !== r.connectionState.disconnected) {
                    var y = i[o],
                        h = r.transports[y],
                        v = function() { g(i, o + 1) };
                    c.transport = h;
                    try {
                        c._.initHandler.start(h, function() {
                            var f = r._.firefoxMajorVersion(t.navigator.userAgent) >= 11,
                                i = !0;
                            c.log("The start request succeeded. Transitioning to the connected state.");
                            a(c) && r.transports._logic.monitorKeepAlive(c);
                            r.transports._logic.startHeartbeat(c);
                            r._.configurePingInterval(c);
                            s(c, r.connectionState.connecting, r.connectionState.connected) || c.log("WARNING! The connection was not in the connecting state.");
                            c._.connectingMessageBuffer.drain();
                            n(c).triggerHandler(u.onStart);
                            e.bind("unload", function() {
                                c.log("Window unloading, stopping the connection.");
                                c.stop(i)
                            });
                            f && e.bind("beforeunload", function() { t.setTimeout(function() { c.stop(i) }, 0) })
                        }, v)
                    } catch (w) {
                        c.log(h.name + " transport threw '" + w.message + "' when attempting to start.");
                        v()
                    }
                }
            }, d = c.url + "/negotiate", b = function(t, i) {
                var e = r._.error(f.errorOnNegotiate, t, i._.negotiateRequest);
                n(i).triggerHandler(u.onError, e);
                p.reject(e);
                i.stop()
            }, n(c).triggerHandler(u.onStarting), d = r.transports._logic.prepareQueryString(c, d), c.log("Negotiating with '" + d + "'."), c._.negotiateRequest = function() {
                var t, h = 0,
                    w = 100,
                    i, e, o = [],
                    s = [],
                    a = function(n, t) {
                        var u = r.transports._logic.prepareQueryString(n, n.url + "/negotiate"),
                            i;
                        return n.log("Negotiating with '" + u + "'."), i = { url: u, error: function(t, i) { i !== l ? b(t, n) : p.reject(r._.error(f.stoppedWhileNegotiating, null, n._.negotiateRequest)) }, success: t }, n.accessToken && (i.headers = { Authorization: "Bearer " + n.accessToken }), r.transports._logic.ajax(n, i)
                    },
                    v = function(l) {
                        try { t = c._parseResponse(l) } catch (k) { b(r._.error(f.errorParsingNegotiateResponse, k), c); return }
                        if (t.availableTransports) {
                            e = r._.error(f.aspnetCoreSignalrServer);
                            n(c).triggerHandler(u.onError, [e]);
                            p.reject(e);
                            return
                        }
                        if (!t.ProtocolVersion || c.supportedProtocols.indexOf(t.ProtocolVersion) === -1) {
                            e = r._.error(r._.format(f.protocolIncompatible, c.clientProtocol, t.ProtocolVersion));
                            n(c).triggerHandler(u.onError, [e]);
                            p.reject(e);
                            return
                        }
                        if (t.ProtocolVersion === "2.0") {
                            if (t.Error) {
                                e = r._.error(r._.format(f.errorFromServer, t.Error));
                                n(c).triggerHandler(u.onError, [e]);
                                p.reject(e);
                                return
                            }
                            if (t.RedirectUrl) {
                                if (h === w) { b(r._.error(f.errorRedirectionExceedsLimit), c); return }
                                if (y.transport === "auto" && (y.transport = ["webSockets", "serverSentEvents", "longPolling"]), c.log("Received redirect to: " + t.RedirectUrl), c.accessToken = t.AccessToken, nt(c, t.RedirectUrl), c.ajaxDataType === "jsonp" && c.accessToken) { b(r._.error(f.jsonpNotSupportedWithAccessToken), c); return }
                                h++;
                                a(c, v);
                                return
                            }
                        }
                        i = c._.keepAliveData;
                        c.appRelativeUrl = t.Url;
                        c.id = t.ConnectionId;
                        c.token = t.ConnectionToken;
                        c.webSocketServerUrl = t.WebSocketServerUrl;
                        c._.pollTimeout = t.ConnectionTimeout * 1e3 + 1e4;
                        c.disconnectTimeout = t.DisconnectTimeout * 1e3;
                        c._.totalTransportConnectTimeout = c.transportConnectTimeout + t.TransportConnectTimeout * 1e3;
                        t.KeepAliveTimeout ? (i.activated = !0, i.timeout = t.KeepAliveTimeout * 1e3, i.timeoutWarning = i.timeout * c.keepAliveWarnAt, c._.beatInterval = (i.timeout - i.timeoutWarning) / 3) : i.activated = !1;
                        c.reconnectWindow = c.disconnectTimeout + (i.timeout || 0);
                        n.each(r.transports, function(n) {
                            if (n.indexOf("_") === 0 || n === "webSockets" && !t.TryWebSockets) return !0;
                            s.push(n)
                        });
                        n.isArray(y.transport) ? n.each(y.transport, function(t, i) { n.inArray(i, s) >= 0 && o.push(i) }) : y.transport === "auto" ? o = s : n.inArray(y.transport, s) >= 0 && o.push(y.transport);
                        g(o)
                    };
                return a(c, v)
            }(), p.promise())
        },
        starting: function(t) { var i = this; return n(i).bind(u.onStarting, function() { t.call(i) }), i },
        send: function(n) { var t = this; if (t.state === r.connectionState.disconnected) throw new Error("SignalR: Connection must be started before data can be sent. Call .start() before .send()"); if (t.state === r.connectionState.connecting) throw new Error("SignalR: Connection has not been fully initialized. Use .start().done() or .start().fail() to run logic after the connection has started."); return t.transport.send(t, n), t },
        received: function(t) { var i = this; return n(i).bind(u.onReceived, function(n, r) { t.call(i, r) }), i },
        stateChanged: function(t) { var i = this; return n(i).bind(u.onStateChanged, function(n, r) { t.call(i, r) }), i },
        error: function(t) {
            var i = this;
            return n(i).bind(u.onError, function(n, r, u) {
                i.lastError = r;
                t.call(i, r, u)
            }), i
        },
        disconnected: function(t) { var i = this; return n(i).bind(u.onDisconnect, function() { t.call(i) }), i },
        connectionSlow: function(t) { var i = this; return n(i).bind(u.onConnectionSlow, function() { t.call(i) }), i },
        reconnecting: function(t) { var i = this; return n(i).bind(u.onReconnecting, function() { t.call(i) }), i },
        reconnected: function(t) { var i = this; return n(i).bind(u.onReconnect, function() { t.call(i) }), i },
        stop: function(i, h) {
            var c = this,
                v = c._deferral;
            if (c._.deferredStartHandler && e.unbind("load", c._.deferredStartHandler), delete c._.config, delete c._.deferredStartHandler, !o && (!c._.config || c._.config.waitForPageLoad === !0)) {
                c.log("Stopping connection prior to negotiate.");
                v && v.reject(r._.error(f.stoppedWhileLoading));
                return
            }
            if (c.state !== r.connectionState.disconnected) return c.log("Stopping connection."), t.clearTimeout(c._.beatHandle), t.clearInterval(c._.pingIntervalId), c.transport && (c.transport.stop(c), h !== !1 && c.transport.abort(c, i), a(c) && r.transports._logic.stopMonitoringKeepAlive(c), c.transport = null), c._.negotiateRequest && (c._.negotiateRequest.abort(l), delete c._.negotiateRequest), c._.initHandler && c._.initHandler.stop(), delete c._deferral, delete c.messageId, delete c.groupsToken, delete c.id, delete c._.pingIntervalId, delete c._.lastMessageAt, delete c._.lastActiveAt, c._.connectingMessageBuffer.clear(), n(c).unbind(u.onStart), delete c.accessToken, c.url = c._originalUrl, s(c, c.state, r.connectionState.disconnected), n(c).triggerHandler(u.onDisconnect), c
        },
        log: function(n) { w(n, this.logging) }
    };
    r.fn.init.prototype = r.fn;
    r.noConflict = function() { return n.connection === r && (n.connection = c), r };
    n.connection && (c = n.connection);
    n.connection = n.signalR = r
}(window.jQuery, window),
function(n, t, i) {
    function o(n) {
        n._.keepAliveData.monitoring && c(n);
        u.markActive(n) && (n._.beatHandle = t.setTimeout(function() { o(n) }, n._.beatInterval))
    }

    function c(t) {
        var i = t._.keepAliveData,
            u;
        t.state === r.connectionState.connected && (u = (new Date).getTime() - t._.lastMessageAt, u >= i.timeout ? (t.log("Keep alive timed out.  Notifying transport that connection has been lost."), t.transport.lostConnection(t)) : u >= i.timeoutWarning ? i.userNotified || (t.log("Keep alive has been missed, connection may be dead/slow."), n(t).triggerHandler(f.onConnectionSlow), i.userNotified = !0) : i.userNotified = !1)
    }

    function e(n, t) { var i = n.url + t; return n.transport && (i += "?transport=" + n.transport.name), u.prepareQueryString(n, i) }

    function s(n) {
        this.connection = n;
        this.startRequested = !1;
        this.startCompleted = !1;
        this.connectionStopped = !1
    }
    var r = n.signalR,
        f = n.signalR.events,
        l = n.signalR.changeState,
        h = "__Start Aborted__",
        u;
    r.transports = {};
    s.prototype = {
        start: function(n, r, u) {
            var f = this,
                e = f.connection,
                o = !1;
            if (f.startRequested || f.connectionStopped) { e.log("WARNING! " + n.name + " transport cannot be started. Initialization ongoing or completed."); return }
            e.log(n.name + " transport starting.");
            n.start(e, function() { o || f.initReceived(n, r) }, function(t) { return o || (o = !0, f.transportFailed(n, t, u)), !f.startCompleted || f.connectionStopped });
            f.transportTimeoutHandle = t.setTimeout(function() { o || (o = !0, e.log(n.name + " transport timed out when trying to connect."), f.transportFailed(n, i, u)) }, e._.totalTransportConnectTimeout)
        },
        stop: function() {
            this.connectionStopped = !0;
            t.clearTimeout(this.transportTimeoutHandle);
            r.transports._logic.tryAbortStartRequest(this.connection)
        },
        initReceived: function(n, i) {
            var u = this,
                f = u.connection;
            if (u.startRequested) { f.log("WARNING! The client received multiple init messages."); return }
            u.connectionStopped || (u.startRequested = !0, t.clearTimeout(u.transportTimeoutHandle), f.log(n.name + " transport connected. Initiating start request."), r.transports._logic.ajaxStart(f, function() {
                u.startCompleted = !0;
                i()
            }))
        },
        transportFailed: function(i, u, e) {
            var o = this.connection,
                h = o._deferral,
                s;
            this.connectionStopped || (t.clearTimeout(this.transportTimeoutHandle), this.startRequested ? this.startCompleted || (s = r._.error(r.resources.errorDuringStartRequest, u), o.log(i.name + " transport failed during the start request. Stopping the connection."), n(o).triggerHandler(f.onError, [s]), h && h.reject(s), o.stop()) : (i.stop(o), o.log(i.name + " transport failed to connect. Attempting to fall back."), e()))
        }
    };
    u = r.transports._logic = {
        ajax: function(t, i) { return n.ajax(n.extend(!0, {}, n.signalR.ajaxDefaults, { type: "GET", data: {}, xhrFields: { withCredentials: t.withCredentials }, contentType: t.contentType, dataType: t.ajaxDataType }, i)) },
        pingServer: function(t) {
            var e, f, i = n.Deferred();
            return t.transport ? (e = t.url + "/ping", e = u.addQs(e, t.qs), f = u.ajax(t, {
                url: e,
                headers: t.accessToken ? { Authorization: "Bearer " + t.accessToken } : {},
                success: function(n) {
                    var u;
                    try { u = t._parseResponse(n) } catch (e) {
                        i.reject(r._.transportError(r.resources.pingServerFailedParse, t.transport, e, f));
                        t.stop();
                        return
                    }
                    u.Response === "pong" ? i.resolve() : i.reject(r._.transportError(r._.format(r.resources.pingServerFailedInvalidResponse, n), t.transport, null, f))
                },
                error: function(n) { n.status === 401 || n.status === 403 ? (i.reject(r._.transportError(r._.format(r.resources.pingServerFailedStatusCode, n.status), t.transport, n, f)), t.stop()) : i.reject(r._.transportError(r.resources.pingServerFailed, t.transport, n, f)) }
            })) : i.reject(r._.transportError(r.resources.noConnectionTransport, t.transport)), i.promise()
        },
        prepareQueryString: function(n, i) { var r; return r = u.addQs(i, "clientProtocol=" + n.clientProtocol), r = u.addQs(r, n.qs), n.token && (r += "&connectionToken=" + t.encodeURIComponent(n.token)), n.data && (r += "&connectionData=" + t.encodeURIComponent(n.data)), r },
        addQs: function(t, i) {
            var r = t.indexOf("?") !== -1 ? "&" : "?",
                u;
            if (!i) return t;
            if (typeof i == "object") return t + r + n.param(i);
            if (typeof i == "string") return u = i.charAt(0), (u === "?" || u === "&") && (r = ""), t + r + i;
            throw new Error("Query string property must be either a string or object.");
        },
        getUrl: function(n, i, r, f, e) {
            var h = i === "webSockets" ? "" : n.baseUrl,
                o = h + n.appRelativeUrl,
                s = "transport=" + i;
            return !e && n.groupsToken && (s += "&groupsToken=" + t.encodeURIComponent(n.groupsToken)), r ? (o += f ? "/poll" : "/reconnect", !e && n.messageId && (s += "&messageId=" + t.encodeURIComponent(n.messageId))) : o += "/connect", o += "?" + s, o = u.prepareQueryString(n, o), n.transport && n.accessToken && (n.transport.name === "serverSentEvents" || n.transport.name === "webSockets") && (o += "&access_token=" + t.encodeURIComponent(n.accessToken)), e || (o += "&tid=" + Math.floor(Math.random() * 11)), o
        },
        maximizePersistentResponse: function(n) { return { MessageId: n.C, Messages: n.M, Initialized: typeof n.S != "undefined" ? !0 : !1, ShouldReconnect: typeof n.T != "undefined" ? !0 : !1, LongPollDelay: n.L, GroupsToken: n.G, Error: n.E } },
        updateGroups: function(n, t) { t && (n.groupsToken = t) },
        stringifySend: function(n, t) { return typeof t == "string" || typeof t == "undefined" || t === null ? t : n.json.stringify(t) },
        ajaxSend: function(t, i) {
            var h = u.stringifySend(t, i),
                c = e(t, "/send"),
                o, s = function(t, u) { n(u).triggerHandler(f.onError, [r._.transportError(r.resources.sendFailed, u.transport, t, o), i]) };
            return o = u.ajax(t, {
                url: c,
                type: t.ajaxDataType === "jsonp" ? "GET" : "POST",
                contentType: r._.defaultContentType,
                headers: t.accessToken ? { Authorization: "Bearer " + t.accessToken } : {},
                data: { data: h },
                success: function(n) {
                    var i;
                    if (n) {
                        try { i = t._parseResponse(n) } catch (r) {
                            s(r, t);
                            t.stop();
                            return
                        }
                        u.triggerReceived(t, i)
                    }
                },
                error: function(n, i) { i !== "abort" && i !== "parsererror" && s(n, t) }
            })
        },
        ajaxAbort: function(n, t) {
            if (typeof n.transport != "undefined") {
                t = typeof t == "undefined" ? !0 : t;
                var i = e(n, "/abort");
                u.ajax(n, { url: i, async: t, timeout: 1e3, type: "POST", headers: n.accessToken ? { Authorization: "Bearer " + n.accessToken } : {}, dataType: "text" });
                n.log("Fired ajax abort async = " + t + ".")
            }
        },
        ajaxStart: function(t, i) {
            var s = function(n) {
                    var i = t._deferral;
                    i && i.reject(n)
                },
                o = function(i) {
                    t.log("The start request failed. Stopping the connection.");
                    n(t).triggerHandler(f.onError, [i]);
                    s(i);
                    t.stop()
                };
            t._.startRequest = u.ajax(t, {
                url: e(t, "/start"),
                headers: t.accessToken ? { Authorization: "Bearer " + t.accessToken } : {},
                success: function(n, u, f) {
                    var e;
                    try { e = t._parseResponse(n) } catch (s) { o(r._.error(r._.format(r.resources.errorParsingStartResponse, n), s, f)); return }
                    e.Response === "started" ? i() : o(r._.error(r._.format(r.resources.invalidStartResponse, n), null, f))
                },
                error: function(n, i, u) { i !== h ? o(r._.error(r.resources.errorDuringStartRequest, u, n)) : (t.log("The start request aborted because connection.stop() was called."), s(r._.error(r.resources.stoppedDuringStartRequest, null, n))) }
            })
        },
        tryAbortStartRequest: function(n) { n._.startRequest && (n._.startRequest.abort(h), delete n._.startRequest) },
        tryInitialize: function(n, t, i) { t.Initialized && i ? i() : t.Initialized && n.log("WARNING! The client received an init message after reconnecting.") },
        triggerReceived: function(t, i) { t._.connectingMessageBuffer.tryBuffer(i) || n(t).triggerHandler(f.onReceived, [i]) },
        processMessages: function(t, i, f) {
            var e;
            if (i && typeof i.I != "undefined") { u.triggerReceived(t, i); return }
            u.markLastMessage(t);
            i && (e = u.maximizePersistentResponse(i), e.Error && (t.log("Received an error message from the server: " + i.E), n(t).triggerHandler(r.events.onError, [r._.error(i.E, "ServerError")]), t.stop(!1, !1)), u.updateGroups(t, e.GroupsToken), e.MessageId && (t.messageId = e.MessageId), e.Messages && (n.each(e.Messages, function(n, i) { u.triggerReceived(t, i) }), u.tryInitialize(t, e, f)))
        },
        monitorKeepAlive: function(t) {
            var i = t._.keepAliveData;
            i.monitoring ? t.log("Tried to monitor keep alive but it's already being monitored.") : (i.monitoring = !0, u.markLastMessage(t), t._.keepAliveData.reconnectKeepAliveUpdate = function() { u.markLastMessage(t) }, n(t).bind(f.onReconnect, t._.keepAliveData.reconnectKeepAliveUpdate), t.log("Now monitoring keep alive with a warning timeout of " + i.timeoutWarning + ", keep alive timeout of " + i.timeout + " and disconnecting timeout of " + t.disconnectTimeout))
        },
        stopMonitoringKeepAlive: function(t) {
            var i = t._.keepAliveData;
            i.monitoring && (i.monitoring = !1, n(t).unbind(f.onReconnect, t._.keepAliveData.reconnectKeepAliveUpdate), t._.keepAliveData = {}, t.log("Stopping the monitoring of the keep alive."))
        },
        startHeartbeat: function(n) {
            n._.lastActiveAt = (new Date).getTime();
            o(n)
        },
        markLastMessage: function(n) { n._.lastMessageAt = (new Date).getTime() },
        markActive: function(n) { return u.verifyLastActive(n) ? (n._.lastActiveAt = (new Date).getTime(), !0) : !1 },
        isConnectedOrReconnecting: function(n) { return n.state === r.connectionState.connected || n.state === r.connectionState.reconnecting },
        ensureReconnectingState: function(t) { return l(t, r.connectionState.connected, r.connectionState.reconnecting) === !0 && n(t).triggerHandler(f.onReconnecting), t.state === r.connectionState.reconnecting },
        clearReconnectTimeout: function(n) { n && n._.reconnectTimeout && (t.clearTimeout(n._.reconnectTimeout), delete n._.reconnectTimeout) },
        verifyLastActive: function(t) { if ((new Date).getTime() - t._.lastActiveAt >= t.reconnectWindow) { var i = r._.format(r.resources.reconnectWindowTimeout, new Date(t._.lastActiveAt), t.reconnectWindow); return t.log(i), n(t).triggerHandler(f.onError, [r._.error(i, "TimeoutException")]), t.stop(!1, !1), !1 } return !0 },
        reconnect: function(n, i) {
            var f = r.transports[i];
            if (u.isConnectedOrReconnecting(n) && !n._.reconnectTimeout) {
                if (!u.verifyLastActive(n)) return;
                n._.reconnectTimeout = t.setTimeout(function() { u.verifyLastActive(n) && (f.stop(n), u.ensureReconnectingState(n) && (n.log(i + " reconnecting."), f.start(n))) }, n.reconnectDelay)
            }
        },
        handleParseFailure: function(t, i, u, e, o) {
            var s = r._.transportError(r._.format(r.resources.parseFailed, i), t.transport, u, o);
            e && e(s) ? t.log("Failed to parse server response while attempting to connect.") : (n(t).triggerHandler(f.onError, [s]), t.stop())
        },
        initHandler: function(n) { return new s(n) },
        foreverFrame: { count: 0, connections: {} }
    }
}(window.jQuery, window),
function(n, t) {
    var i = n.signalR,
        u = n.signalR.events,
        f = n.signalR.changeState,
        r = i.transports._logic;
    i.transports.webSockets = {
        name: "webSockets",
        supportsKeepAlive: function() { return !0 },
        send: function(t, f) { var e = r.stringifySend(t, f); try { t.socket.send(e) } catch (o) { n(t).triggerHandler(u.onError, [i._.transportError(i.resources.webSocketsInvalidState, t.transport, o, t.socket), f]) } },
        start: function(e, o, s) {
            var h, c = !1,
                l = this,
                a = !o,
                v = n(e);
            if (!t.WebSocket) { s(); return }
            e.socket || (h = e.webSocketServerUrl ? e.webSocketServerUrl : e.wsProtocol + e.host, h += r.getUrl(e, this.name, a), e.log("Connecting to websocket endpoint '" + h + "'."), e.socket = new t.WebSocket(h), e.socket.onopen = function() {
                c = !0;
                e.log("Websocket opened.");
                r.clearReconnectTimeout(e);
                f(e, i.connectionState.reconnecting, i.connectionState.connected) === !0 && v.triggerHandler(u.onReconnect)
            }, e.socket.onclose = function(t) {
                var r;
                this === e.socket && (c && typeof t.wasClean != "undefined" && t.wasClean === !1 ? (r = i._.transportError(i.resources.webSocketClosed, e.transport, t), e.log("Unclean disconnect from websocket: " + (t.reason || "[no reason given]."))) : e.log("Websocket closed."), s && s(r) || (r && n(e).triggerHandler(u.onError, [r]), l.reconnect(e)))
            }, e.socket.onmessage = function(n) {
                var t;
                try { t = e._parseResponse(n.data) } catch (i) { r.handleParseFailure(e, n.data, i, s, n); return }
                t && r.processMessages(e, t, o)
            })
        },
        reconnect: function(n) { r.reconnect(n, this.name) },
        lostConnection: function(n) { this.reconnect(n) },
        stop: function(n) {
            r.clearReconnectTimeout(n);
            n.socket && (n.log("Closing the Websocket."), n.socket.close(), n.socket = null)
        },
        abort: function(n, t) { r.ajaxAbort(n, t) }
    }
}(window.jQuery, window),
function(n, t) {
    var i = n.signalR,
        u = n.signalR.events,
        e = n.signalR.changeState,
        r = i.transports._logic,
        f = function(n) {
            t.clearTimeout(n._.reconnectAttemptTimeoutHandle);
            delete n._.reconnectAttemptTimeoutHandle
        };
    i.transports.serverSentEvents = {
        name: "serverSentEvents",
        supportsKeepAlive: function() { return !0 },
        timeOut: 3e3,
        start: function(o, s, h) {
            var c = this,
                l = !1,
                a = n(o),
                v = !s,
                y;
            if (o.eventSource && (o.log("The connection already has an event source. Stopping it."), o.stop()), !t.EventSource) { h && (o.log("This browser doesn't support SSE."), h()); return }
            y = r.getUrl(o, this.name, v);
            try {
                o.log("Attempting to connect to SSE endpoint '" + y + "'.");
                o.eventSource = new t.EventSource(y, { withCredentials: o.withCredentials })
            } catch (p) {
                o.log("EventSource failed trying to connect with error " + p.Message + ".");
                h ? h() : (a.triggerHandler(u.onError, [i._.transportError(i.resources.eventSourceFailedToConnect, o.transport, p)]), v && c.reconnect(o));
                return
            }
            v && (o._.reconnectAttemptTimeoutHandle = t.setTimeout(function() { l === !1 && o.eventSource.readyState !== t.EventSource.OPEN && c.reconnect(o) }, c.timeOut));
            o.eventSource.addEventListener("open", function() {
                o.log("EventSource connected.");
                f(o);
                r.clearReconnectTimeout(o);
                l === !1 && (l = !0, e(o, i.connectionState.reconnecting, i.connectionState.connected) === !0 && a.triggerHandler(u.onReconnect))
            }, !1);
            o.eventSource.addEventListener("message", function(n) {
                var t;
                if (n.data !== "initialized") {
                    try { t = o._parseResponse(n.data) } catch (i) { r.handleParseFailure(o, n.data, i, h, n); return }
                    r.processMessages(o, t, s)
                }
            }, !1);
            o.eventSource.addEventListener("error", function(n) {
                var r = i._.transportError(i.resources.eventSourceError, o.transport, n);
                this === o.eventSource && (h && h(r) || (o.log("EventSource readyState: " + o.eventSource.readyState + "."), n.eventPhase === t.EventSource.CLOSED ? (o.log("EventSource reconnecting due to the server connection ending."), c.reconnect(o)) : (o.log("EventSource error."), a.triggerHandler(u.onError, [r]))))
            }, !1)
        },
        reconnect: function(n) { r.reconnect(n, this.name) },
        lostConnection: function(n) { this.reconnect(n) },
        send: function(n, t) { r.ajaxSend(n, t) },
        stop: function(n) {
            f(n);
            r.clearReconnectTimeout(n);
            n && n.eventSource && (n.log("EventSource calling close()."), n.eventSource.close(), n.eventSource = null, delete n.eventSource)
        },
        abort: function(n, t) { r.ajaxAbort(n, t) }
    }
}(window.jQuery, window),
function(n, t) {
    var r = n.signalR,
        e = n.signalR.events,
        o = n.signalR.changeState,
        i = r.transports._logic,
        u = function() { var n = t.document.createElement("iframe"); return n.setAttribute("style", "position:absolute;top:0;left:0;width:0;height:0;visibility:hidden;"), n },
        f = function() {
            var i = null,
                f = 1e3,
                n = 0;
            return {
                prevent: function() {
                    r._.ieVersion <= 8 && (n === 0 && (i = t.setInterval(function() {
                        var n = u();
                        t.document.body.appendChild(n);
                        t.document.body.removeChild(n);
                        n = null
                    }, f)), n++)
                },
                cancel: function() {
                    n === 1 && t.clearInterval(i);
                    n > 0 && n--
                }
            }
        }();
    r.transports.foreverFrame = {
        name: "foreverFrame",
        supportsKeepAlive: function() { return !0 },
        iframeClearThreshold: 50,
        start: function(n, r, e) {
            if (n.accessToken) { e && (n.log("Forever Frame does not support connections that require a Bearer token to connect, such as the Azure SignalR Service."), e()); return }
            var l = this,
                s = i.foreverFrame.count += 1,
                h, o = u(),
                c = function() {
                    n.log("Forever frame iframe finished loading and is no longer receiving messages.");
                    e && e() || l.reconnect(n)
                };
            if (t.EventSource) { e && (n.log("Forever Frame is not supported by SignalR on browsers with SSE support."), e()); return }
            o.setAttribute("data-signalr-connection-id", n.id);
            f.prevent();
            h = i.getUrl(n, this.name);
            h += "&frameId=" + s;
            t.document.documentElement.appendChild(o);
            n.log("Binding to iframe's load event.");
            o.addEventListener ? o.addEventListener("load", c, !1) : o.attachEvent && o.attachEvent("onload", c);
            o.src = h;
            i.foreverFrame.connections[s] = n;
            n.frame = o;
            n.frameId = s;
            r && (n.onSuccess = function() {
                n.log("Iframe transport started.");
                r()
            })
        },
        reconnect: function(n) {
            var r = this;
            i.isConnectedOrReconnecting(n) && i.verifyLastActive(n) && t.setTimeout(function() {
                if (i.verifyLastActive(n) && n.frame && i.ensureReconnectingState(n)) {
                    var u = n.frame,
                        t = i.getUrl(n, r.name, !0) + "&frameId=" + n.frameId;
                    n.log("Updating iframe src to '" + t + "'.");
                    u.src = t
                }
            }, n.reconnectDelay)
        },
        lostConnection: function(n) { this.reconnect(n) },
        send: function(n, t) { i.ajaxSend(n, t) },
        receive: function(t, u) {
            var f, e, o;
            if (t.json !== t._originalJson && (u = t._originalJson.stringify(u)), o = t._parseResponse(u), i.processMessages(t, o, t.onSuccess), t.state === n.signalR.connectionState.connected && (t.frameMessageCount = (t.frameMessageCount || 0) + 1, t.frameMessageCount > r.transports.foreverFrame.iframeClearThreshold && (t.frameMessageCount = 0, f = t.frame.contentWindow || t.frame.contentDocument, f && f.document && f.document.body)))
                for (e = f.document.body; e.firstChild;) e.removeChild(e.firstChild)
        },
        stop: function(n) {
            var r = null;
            if (f.cancel(), n.frame) {
                if (n.frame.stop) n.frame.stop();
                else try {
                    r = n.frame.contentWindow || n.frame.contentDocument;
                    r.document && r.document.execCommand && r.document.execCommand("Stop")
                } catch (u) { n.log("Error occurred when stopping foreverFrame transport. Message = " + u.message + ".") }
                n.frame.parentNode === t.document.documentElement && t.document.documentElement.removeChild(n.frame);
                delete i.foreverFrame.connections[n.frameId];
                n.frame = null;
                n.frameId = null;
                delete n.frame;
                delete n.frameId;
                delete n.onSuccess;
                delete n.frameMessageCount;
                n.log("Stopping forever frame.")
            }
        },
        abort: function(n, t) { i.ajaxAbort(n, t) },
        getConnection: function(n) { return i.foreverFrame.connections[n] },
        started: function(t) { o(t, r.connectionState.reconnecting, r.connectionState.connected) === !0 && n(t).triggerHandler(e.onReconnect) }
    }
}(window.jQuery, window),
function(n, t) {
    var r = n.signalR,
        u = n.signalR.events,
        e = n.signalR.changeState,
        f = n.signalR.isDisconnecting,
        i = r.transports._logic;
    r.transports.longPolling = {
        name: "longPolling",
        supportsKeepAlive: function() { return !1 },
        reconnectDelay: 3e3,
        start: function(o, s, h) {
            var a = this,
                v = function() {
                    v = n.noop;
                    o.log("LongPolling connected.");
                    s ? s() : o.log("WARNING! The client received an init message after reconnecting.")
                },
                y = function(n) { return h(n) ? (o.log("LongPolling failed to connect."), !0) : !1 },
                c = o._,
                l = 0,
                p = function(i) {
                    t.clearTimeout(c.reconnectTimeoutId);
                    c.reconnectTimeoutId = null;
                    e(i, r.connectionState.reconnecting, r.connectionState.connected) === !0 && (i.log("Raising the reconnect event"), n(i).triggerHandler(u.onReconnect))
                },
                w = 36e5;
            o.pollXhr && (o.log("Polling xhr requests already exists, aborting."), o.stop());
            o.messageId = null;
            c.reconnectTimeoutId = null;
            c.pollTimeoutId = t.setTimeout(function() {
                (function e(s, h) {
                    var g = s.messageId,
                        nt = g === null,
                        k = !nt,
                        tt = !h,
                        d = i.getUrl(s, a.name, k, tt, !0),
                        b = {};
                    (s.messageId && (b.messageId = s.messageId), s.groupsToken && (b.groupsToken = s.groupsToken), f(s) !== !0) && (o.log("Opening long polling request to '" + d + "'."), s.pollXhr = i.ajax(o, {
                        xhrFields: { onprogress: function() { i.markLastMessage(o) } },
                        url: d,
                        type: "POST",
                        contentType: r._.defaultContentType,
                        data: b,
                        timeout: o._.pollTimeout,
                        headers: o.accessToken ? { Authorization: "Bearer " + o.accessToken } : {},
                        success: function(r) {
                            var h, w = 0,
                                u, a;
                            o.log("Long poll complete.");
                            l = 0;
                            try { h = o._parseResponse(r) } catch (b) { i.handleParseFailure(s, r, b, y, s.pollXhr); return }(c.reconnectTimeoutId !== null && p(s), h && (u = i.maximizePersistentResponse(h)), i.processMessages(s, h, v), u && n.type(u.LongPollDelay) === "number" && (w = u.LongPollDelay), f(s) !== !0) && (a = u && u.ShouldReconnect, !a || i.ensureReconnectingState(s)) && (w > 0 ? c.pollTimeoutId = t.setTimeout(function() { e(s, a) }, w) : e(s, a))
                        },
                        error: function(f, h) {
                            var v = r._.transportError(r.resources.longPollFailed, o.transport, f, s.pollXhr);
                            if (t.clearTimeout(c.reconnectTimeoutId), c.reconnectTimeoutId = null, h === "abort") { o.log("Aborted xhr request."); return }
                            if (!y(v)) {
                                if (l++, o.state !== r.connectionState.reconnecting && (o.log("An error occurred using longPolling. Status = " + h + ".  Response = " + f.responseText + "."), n(s).triggerHandler(u.onError, [v])), (o.state === r.connectionState.connected || o.state === r.connectionState.reconnecting) && !i.verifyLastActive(o)) return;
                                if (!i.ensureReconnectingState(s)) return;
                                c.pollTimeoutId = t.setTimeout(function() { e(s, !0) }, a.reconnectDelay)
                            }
                        }
                    }), k && h === !0 && (c.reconnectTimeoutId = t.setTimeout(function() { p(s) }, Math.min(1e3 * (Math.pow(2, l) - 1), w))))
                })(o)
            }, 250)
        },
        lostConnection: function(n) { n.pollXhr && n.pollXhr.abort("lostConnection") },
        send: function(n, t) { i.ajaxSend(n, t) },
        stop: function(n) {
            t.clearTimeout(n._.pollTimeoutId);
            t.clearTimeout(n._.reconnectTimeoutId);
            delete n._.pollTimeoutId;
            delete n._.reconnectTimeoutId;
            n.pollXhr && (n.pollXhr.abort(), n.pollXhr = null, delete n.pollXhr)
        },
        abort: function(n, t) { i.ajaxAbort(n, t) }
    }
}(window.jQuery, window),
function(n) {
    function r(n) { return n + h }

    function e(n, t, i) { for (var f = n.length, u = [], r = 0; r < f; r += 1) n.hasOwnProperty(r) && (u[r] = t.call(i, n[r], r, n)); return u }

    function o(t) { return n.isFunction(t) ? null : n.type(t) === "undefined" ? null : t }

    function u(n) {
        for (var t in n)
            if (n.hasOwnProperty(t)) return !0;
        return !1
    }

    function f(n, t) {
        var i = n._.invocationCallbacks,
            r, f;
        u(i) && n.log("Clearing hub invocation callbacks with error: " + t + ".");
        n._.invocationCallbackId = 0;
        delete n._.invocationCallbacks;
        n._.invocationCallbacks = {};
        for (f in i) r = i[f], r.method.call(r.scope, { E: t })
    }

    function i(n, t) { return new i.fn.init(n, t) }

    function t(i, r) { var u = { qs: null, logging: !1, useDefaultPath: !0 }; return n.extend(u, r), (!i || u.useDefaultPath) && (i = (i || "") + "/signalr"), new t.fn.init(i, u) }
    var s = 0,
        h = ".hubProxy",
        c = n.signalR;
    i.fn = i.prototype = {
        init: function(n, t) {
            this.state = {};
            this.connection = n;
            this.hubName = t;
            this._ = { callbackMap: {} }
        },
        constructor: i,
        hasSubscriptions: function() { return u(this._.callbackMap) },
        on: function(t, i, u) {
            var h = this,
                c = h._.callbackMap,
                f, e, o, l;
            for (u = u || i, u._signalRGuid || (u._signalRGuid = s++), t = t.toLowerCase(), f = c[t], f || (f = [], c[t] = f), o = 0; o < f.length; o++) f[o].guid === u._signalRGuid && (e = f[o]);
            return e || (e = { guid: u._signalRGuid, eventHandlers: [] }, c[t].push(e)), l = function(n, t) { i.apply(h, t) }, e.eventHandlers.push(l), n(h).bind(r(t), l), h
        },
        off: function(t, i, u) {
            var o = this,
                c = o._.callbackMap,
                f, s, l, e, h;
            if (u = u || i, t = t.toLowerCase(), f = c[t], f)
                if (i) {
                    for (e = 0; e < f.length; e++) f[e].guid === u._signalRGuid && (l = e, s = f[e]);
                    if (s) {
                        for (h = 0; h < s.eventHandlers.length; h++) n(o).unbind(r(t), s.eventHandlers[h]);
                        f.splice(e, 1);
                        f.length === 0 && delete c[t]
                    }
                } else i || (n(o).unbind(r(t)), delete c[t]);
            return o
        },
        invoke: function(t) {
            var i = this,
                r = i.connection,
                s = n.makeArray(arguments).slice(1),
                h = e(s, o),
                f = { H: i.hubName, M: t, A: h, I: r._.invocationCallbackId },
                u = n.Deferred(),
                l = function(f) {
                    var e = i._maximizeHubResponse(f),
                        s, o;
                    n.extend(i.state, e.State);
                    e.Progress ? u.notifyWith ? u.notifyWith(i, [e.Progress.Data]) : r._.progressjQueryVersionLogged || (r.log("A hub method invocation progress update was received but the version of jQuery in use (" + n.prototype.jquery + ") does not support progress updates. Upgrade to jQuery 1.7+ to receive progress notifications."), r._.progressjQueryVersionLogged = !0) : e.Error ? (e.StackTrace && r.log(e.Error + "\n" + e.StackTrace + "."), s = e.IsHubException ? "HubException" : "Exception", o = c._.error(e.Error, s), o.data = e.ErrorData, r.log(i.hubName + "." + t + " failed to execute. Error: " + o.message), u.rejectWith(i, [o])) : (r.log("Invoked " + i.hubName + "." + t), u.resolveWith(i, [e.Result]))
                };
            return r._.invocationCallbacks[r._.invocationCallbackId.toString()] = { scope: i, method: l }, r._.invocationCallbackId += 1, n.isEmptyObject(i.state) || (f.S = i.state), r.log("Invoking " + i.hubName + "." + t), r.send(f), u.promise()
        },
        _maximizeHubResponse: function(n) { return { State: n.S, Result: n.R, Progress: n.P ? { Id: n.P.I, Data: n.P.D } : null, Id: n.I, IsHubException: n.H, Error: n.E, StackTrace: n.T, ErrorData: n.D } }
    };
    i.fn.init.prototype = i.fn;
    t.fn = t.prototype = n.connection();
    t.fn.init = function(t, i) {
        var e = { qs: null, logging: !1, useDefaultPath: !0 },
            u = this;
        n.extend(e, i);
        n.signalR.fn.init.call(u, t, e.qs, e.logging);
        u.proxies = {};
        u._.invocationCallbackId = 0;
        u._.invocationCallbacks = {};
        u.received(function(t) {
            var f, o, e, i, s, h;
            t && (typeof t.P != "undefined" ? (e = t.P.I.toString(), i = u._.invocationCallbacks[e], i && i.method.call(i.scope, t)) : typeof t.I != "undefined" ? (e = t.I.toString(), i = u._.invocationCallbacks[e], i && (u._.invocationCallbacks[e] = null, delete u._.invocationCallbacks[e], i.method.call(i.scope, t))) : (f = this._maximizeClientHubInvocation(t), u.log("Triggering client hub event '" + f.Method + "' on hub '" + f.Hub + "'."), s = f.Hub.toLowerCase(), h = f.Method.toLowerCase(), o = this.proxies[s], n.extend(o.state, f.State), n(o).triggerHandler(r(h), [f.Args])))
        });
        u.error(function(n, t) {
            var i, r;
            t && (i = t.I, r = u._.invocationCallbacks[i], r && (u._.invocationCallbacks[i] = null, delete u._.invocationCallbacks[i], r.method.call(r.scope, { E: n })))
        });
        u.reconnecting(function() { u.transport && u.transport.name === "webSockets" && f(u, "Connection started reconnecting before invocation result was received.") });
        u.disconnected(function() { f(u, "Connection was disconnected before invocation result was received.") })
    };
    t.fn._maximizeClientHubInvocation = function(n) { return { Hub: n.H, Method: n.M, Args: n.A, State: n.S } };
    t.fn._registerSubscribedHubs = function() {
        var t = this;
        t._subscribedToHubs || (t._subscribedToHubs = !0, t.starting(function() {
            var i = [];
            n.each(t.proxies, function(n) { this.hasSubscriptions() && (i.push({ name: n }), t.log("Client subscribed to hub '" + n + "'.")) });
            i.length === 0 && t.log("No hubs have been subscribed to.  The client will not receive data from hubs.  To fix, declare at least one client side function prior to connection start for each hub you wish to subscribe to.");
            t.data = t.json.stringify(i)
        }))
    };
    t.fn.createHubProxy = function(n) { n = n.toLowerCase(); var t = this.proxies[n]; return t || (t = i(this, n), this.proxies[n] = t), this._registerSubscribedHubs(), t };
    t.fn.init.prototype = t.fn;
    n.hubConnection = t
}(window.jQuery, window),
function(n) { n.signalR.version = "2.4.0" }(window.jQuery)