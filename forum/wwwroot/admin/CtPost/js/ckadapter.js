(function(n) {
    if (typeof n == "undefined") throw new Error("jQuery should be loaded before CKEditor jQuery adapter.");
    if (typeof CKEDITOR == "undefined") throw new Error("CKEditor should be loaded before CKEditor jQuery adapter.");
    CKEDITOR.config.jqueryOverrideVal = typeof CKEDITOR.config.jqueryOverrideVal == "undefined" ? !0 : CKEDITOR.config.jqueryOverrideVal;
    n.extend(n.fn, {
        ckeditorGet: function() { var n = this.eq(0).data("ckeditorInstance"); if (!n) throw "CKEditor is not initialized yet, use ckeditor() with a callback."; return n },
        ckeditor: function(t, i) {
            var f, r, u;
            if (!CKEDITOR.env.isCompatible) throw new Error("The environment is incompatible.");
            return n.isFunction(t) || (f = i, i = t, t = f), r = [], i = i || {}, this.each(function() {
                var u = n(this),
                    e = u.data("ckeditorInstance"),
                    s = u.data("_ckeditorInstanceLock"),
                    f = this,
                    o = new n.Deferred;
                if (r.push(o.promise()), e && !s) t && t.apply(e, [this]), o.resolve();
                else if (s) e.once("instanceReady", function() {
                    setTimeout(function() {
                        if (!e.element) { setTimeout(arguments.callee, 100); return }
                        e.element.$ == f && t && t.apply(e, [f]);
                        o.resolve()
                    }, 0)
                }, null, null, 9999);
                else {
                    (i.autoUpdateElement || typeof i.autoUpdateElement == "undefined" && CKEDITOR.config.autoUpdateElement) && (i.autoUpdateElementJquery = !0);
                    i.autoUpdateElement = !1;
                    u.data("_ckeditorInstanceLock", !0);
                    e = n(this).is("textarea") ? CKEDITOR.replace(f, i) : CKEDITOR.inline(f, i);
                    u.data("ckeditorInstance", e);
                    e.on("instanceReady", function(i) {
                        var r = i.editor;
                        setTimeout(function() {
                            if (!r.element) { setTimeout(arguments.callee, 100); return }
                            i.removeListener();
                            r.on("dataReady", function() { u.trigger("dataReady.ckeditor", [r]) });
                            r.on("setData", function(n) { u.trigger("setData.ckeditor", [r, n.data]) });
                            r.on("getData", function(n) { u.trigger("getData.ckeditor", [r, n.data]) }, 999);
                            r.on("destroy", function() { u.trigger("destroy.ckeditor", [r]) });
                            r.on("save", function() { return n(f.form).submit(), !1 }, null, null, 20);
                            if (r.config.autoUpdateElementJquery && u.is("textarea") && n(f.form).length) {
                                var e = function() { u.ckeditor(function() { r.updateElement() }) };
                                n(f.form).submit(e);
                                n(f.form).bind("form-pre-serialize", e);
                                u.bind("destroy.ckeditor", function() {
                                    n(f.form).unbind("submit", e);
                                    n(f.form).unbind("form-pre-serialize", e)
                                })
                            }
                            r.on("destroy", function() { u.removeData("ckeditorInstance") });
                            u.removeData("_ckeditorInstanceLock");
                            u.trigger("instanceReady.ckeditor", [r]);
                            t && t.apply(r, [f]);
                            o.resolve()
                        }, 0)
                    }, null, null, 9999)
                }
            }), u = new n.Deferred, this.promise = u.promise(), n.when.apply(this, r).then(function() { u.resolve() }), this.editor = this.eq(0).data("ckeditorInstance"), this
        }
    });
    CKEDITOR.config.jqueryOverrideVal && (n.fn.val = CKEDITOR.tools.override(n.fn.val, function(t) {
        return function(i) {
            var f, r, e;
            if (arguments.length) {
                var o = this,
                    u = [],
                    s = this.each(function() {
                        var r = n(this),
                            e = r.data("ckeditorInstance"),
                            f;
                        return r.is("textarea") && e ? (f = new n.Deferred, e.setData(i, function() { f.resolve() }), u.push(f.promise()), !0) : t.call(r, i)
                    });
                return u.length ? (f = new n.Deferred, n.when.apply(this, u).done(function() { f.resolveWith(o) }), f.promise()) : s
            }
            return r = n(this).eq(0), e = r.data("ckeditorInstance"), r.is("textarea") && e ? e.getData() : t.call(r)
        }
    }))
})(window.jQuery)