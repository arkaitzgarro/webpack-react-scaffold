webpackJsonp([0], { 176(e, t, n) {
  Object.defineProperty(t, '__esModule', { value: !0 }); let r = n(28),
    o = n.n(r),
    a = n(51),
    c = n.n(a),
    u = n(177); c.a.render(o.a.createElement(u.a, null), document.getElementById('root'));
},
177(e, t, n) {
  function r(e, t) { if (!(e instanceof t)) throw new TypeError('Cannot call a class as a function'); } function o(e, t) { if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return !t || typeof t !== 'object' && typeof t !== 'function' ? e : t; } function a(e, t) { if (typeof t !== 'function' && t !== null) throw new TypeError(`Super expression must either be null or a function, not ${typeof t}`); e.prototype = Object.create(t && t.prototype, { constructor: { value: e, enumerable: !1, writable: !0, configurable: !0 } }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t); } let c = n(28),
    u = n.n(c),
    i = (function () { function e(e, t) { for (let n = 0; n < t.length; n++) { const r = t[n]; r.enumerable = r.enumerable || !1, r.configurable = !0, 'value' in r && (r.writable = !0), Object.defineProperty(e, r.key, r); } } return function (t, n, r) { return n && e(t.prototype, n), r && e(t, r), t; }; }()),
    l = (function (e) { function t() { return r(this, t), o(this, (t.__proto__ || Object.getPrototypeOf(t)).apply(this, arguments)); } return a(t, e), i(t, [{ key: 'render', value() { return u.a.createElement('div', { className: 'App' }, u.a.createElement('div', { className: 'App-header' }, u.a.createElement('h2', null, 'Welcome to React')), u.a.createElement('p', { className: 'App-intro' }, 'To get started, edit ', u.a.createElement('code', null, 'src/App.js'), ' and save to reload.')); } }]), t; }(c.Component)); t.a = l;
} }, [176]);
