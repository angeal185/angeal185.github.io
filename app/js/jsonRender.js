function jsonRender_events(e) {
    for (var n = $(document.createElement("i")).html(e.html), t = 0; t < e.events.length; t++) {
        var r = e.events[t],
            i = $(n).find("[jsonRender-event-id-" + r.type + "='" + r.id + "']");
        if (0 === i.length) throw "unable to attach event " + r.id + " to DOM";
        $(i).removeAttr("jsonRender-event-id-" + r.type), $(i).on(r.type, r.data, function(e) {
            e.data.event = e, e.data.action.call($(this), e.data);
        });
    }
    return $(n).children();
}
var jsonRender = {
    transform: function(e, n, t) {
        var r = {
                events: [],
                html: ""
            },
            i = {
                events: !1
            };
        if (i = jsonRender._extend(i, t), void 0 !== n || void 0 !== e) {
            var s = "string" == typeof e ? JSON.parse(e) : e;
            r = jsonRender._transform(s, n, i);
        }
        return i.events ? r : r.html;
    },
    _extend: function(e, n) {
        var t = {};
        for (var r in e) t[r] = e[r];
        for (var r in n) t[r] = n[r];
        return t;
    },
    _append: function(e, n) {
        var t = {
            html: "",
            event: []
        };
        return "undefined" != typeof e && "undefined" != typeof n && (t.html = e.html + n.html, t.events = e.events.concat(n.events)), t;
    },
    _isArray: function(e) {
        return "[object Array]" === Object.prototype.toString.call(e);
    },
    _transform: function(e, n, t) {
        var r = {
            events: [],
            html: ""
        };
        if (jsonRender._isArray(e))
            for (var i = e.length, s = 0; i > s; ++s) r = jsonRender._append(r, jsonRender._apply(e[s], n, s, t));
        else "object" == typeof e && (r = jsonRender._append(r, jsonRender._apply(e, n, void 0, t)));
        return r;
    },
    _apply: function(e, n, t, r) {
        var i = {
            events: [],
            html: ""
        };
        if (jsonRender._isArray(n))
            for (var s = n.length, o = 0; s > o; ++o) i = jsonRender._append(i, jsonRender._apply(e, n[o], t, r));
        else if ("object" == typeof n) {
            var a = "<>";
            if (void 0 === n[a] && (a = "tag"), void 0 !== n[a]) {
                var d = jsonRender._getValue(e, n, a, t);
                i.html += "<" + d;
                var f, l = {
                    events: [],
                    html: ""
                };
                for (var u in n) switch (u) {
                    case "tag":
                    case "<>":
                        break;
                    case "children":
                    case "html":
                        var v = n[u];
                        if (jsonRender._isArray(v)) l = jsonRender._append(l, jsonRender._apply(e, v, t, r));
                        else if ("function" == typeof v) {
                            var c = v.call(e, e, t);
                            switch (typeof c) {
                                case "object":
                                    void 0 !== c.html && void 0 !== c.events && (l = jsonRender._append(l, c));
                                    break;
                                case "function":
                                case "undefined":
                                    break;
                                default:
                                    l.html += c;
                            }
                        } else f = jsonRender._getValue(e, n, u, t);
                        break;
                    default:
                        var h = !1;
                        if (u.length > 2 && "on" == u.substring(0, 2).toLowerCase()) {
                            if (r.events) {
                                var p = {
                                        action: n[u],
                                        obj: e,
                                        data: r.eventData,
                                        index: t
                                    },
                                    j = jsonRender._guid();
                                i.events[i.events.length] = {
                                    id: j,
                                    type: u.substring(2),
                                    data: p
                                }, i.html += " jsonRender-event-id-" + u.substring(2) + "='" + j + "'";
                            }
                            h = !0;
                        }
                        if (!h) {
                            var m = jsonRender._getValue(e, n, u, t);
                            if (void 0 !== m) {
                                var R;
                                R = "string" == typeof m ? '"' + m.replace(/"/g, "&quot;") + '"' : m, i.html += " " + u + "=" + R;
                            }
                        }
                }
                i.html += ">", f && (i.html += f), i = jsonRender._append(i, l), i.html += "</" + d + ">";
            }
        }
        return i;
    },
    _guid: function() {
        var e = function() {
            return (65536 * (1 + Math.random()) | 0).toString(16).substring(1);
        };
        return e() + e() + "-" + e() + e() + "-" + e() + e();
    },
    _getValue: function(e, n, t, r) {
        var i = "",
            s = n[t],
            o = typeof s;
        if ("function" === o) return s.call(e, e, r);
        if ("string" === o) {
            var a = new jsonRender._tokenizer([/\$\{([^\}\{]+)\}/], function(n, t, r) {
                return t ? n.replace(r, function(n, t) {
                    for (var r = t.split("."), i = e, s = "", o = r.length, a = 0; o > a; ++a)
                        if (r[a].length > 0) {
                            var d = i[r[a]];
                            if (i = d, null === i || void 0 === i) break;
                        }
                    return null !== i && void 0 !== i && (s = i), s;
                }) : n;
            });
            i = a.parse(s).join("");
        } else i = s;
        return i;
    },
    _tokenizer: function(e, n) {
        return this instanceof jsonRender._tokenizer ? (this.tokenizers = e.splice ? e : [e], n && (this.doBuild = n), this.parse = function(e) {
            this.src = e, this.ended = !1, this.tokens = [];
            do this.next(); while (!this.ended);
            return this.tokens;
        }, this.build = function(e, n) {
            e && this.tokens.push(this.doBuild ? this.doBuild(e, n, this.tkn) : e);
        }, this.next = function() {
            var e, n = this;
            n.findMin(), e = n.src.slice(0, n.min), n.build(e, !1), n.src = n.src.slice(n.min).replace(n.tkn, function(e) {
                return n.build(e, !0), "";
            }), n.src || (n.ended = !0);
        }, void(this.findMin = function() {
            var e, n, t = this,
                r = 0;
            for (t.min = -1, t.tkn = ""; void 0 !== (e = t.tokenizers[r++]);) n = t.src[e.test ? "search" : "indexOf"](e), -1 != n && (-1 == t.min || n < t.min) && (t.tkn = e, t.min = n); - 1 == t.min && (t.min = t.src.length);
        })) : new jsonRender._tokenizer(e, n);
    }
};
! function(e) {
    e.jsonRender = function(n, t, r) {
        if ("undefined" == typeof jsonRender) return void 0;
        var i = {
            output: "jsonRender"
        };
        switch (void 0 !== r && e.extend(i, r), i.output) {
            case "jsonRender":
                return i.events = !0, jsonRender.transform(n, t, i);
            case "html":
                return i.events = !1, jsonRender.transform(n, t, i);
            case "jquery":
                i.events = !1;
                var s = jsonRender_events(jsonRender.transform(n, t, i));
                return s;
        }
    }, e.fn.jsonRender = function(n, t, r) {
        if ("undefined" == typeof jsonRender) return void 0;
        var i = {
            append: !0,
            replace: !1,
            prepend: !1,
            eventData: {}
        };
        return void 0 !== r && e.extend(i, r), i.events = !0, this.each(function() {
            var r = jsonRender_events(jsonRender.transform(n, t, i));
            i.replace ? e.fn.replaceWith.call(e(this), r) : i.prepend ? e.fn.prepend.call(e(this), r) : e.fn.append.call(e(this), r);
        });
    };
}(jQuery);