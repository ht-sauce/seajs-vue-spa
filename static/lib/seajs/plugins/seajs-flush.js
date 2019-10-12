﻿//通过 combo 插件，我们可以对同一数组中的加载项进行合并加载。通过 flush 插件，我们可以更进一步减少 HTTP 请求数。
//flush 插件一般和 combo 插件一起使用。
!function () { function a(a) { var b = a.length; if (0 !== b) { for (var c = a.splice(0, b), d = [], e = 0; b > e; e++) d = d.concat(c[e].resolve()); d = f(d); var j = g.get(i.cwd + "_flush_" + i.cid(), d); j.load = h, j._entry.push(j), j.history = {}, j.remain = 1, j.callback = function () { for (var a = 0; b > a; a++) c[a].onload(); delete j.callback, delete j.history, delete j.remain, delete j._entry }, j.load() } } function b(a) { return d(a) || c(a) || e(a) } function c(a) { return !l && a.status === g.STATUS.SAVED } function d(a) { return 0 === a.dependencies.length } function e(a) { return n.test(a.uri) } function f(a) { for (var b, c = [], d = {}, e = 0, f = a.length; f > e; e++) b = a[e], b && !d[b] && (d[b] = !0, (!seajs.cache[b] || seajs.cache[b].status < g.STATUS.SAVED) && c.push(b)); return c } var g = seajs.Module, h = g.prototype.load, i = seajs.data, j = i.flushUseStack = [], k = i.flushDepStack = [], l = !1, m = !1; g.prototype.load = function () { var a = this; b(a) ? h.call(a) : m ? j.push(a) : k.push(a) }, seajs.use = function (a, b) { return m = !0, g.use(a, b, i.cwd + "_use_" + i.cid()), m = !1, seajs }, seajs.flush = function () { a(j) }, seajs.on("request", function (b) { var c = b.onRequest; b.onRequest = function () { l = !0, c(), l = !1, a(k) } }); var n = /\.js_async_\d+$/; define("seajs/seajs-flush/1.1.0/seajs-flush", [], {}) }();
/*
seajs.use('a');
seajs.use('b');
seajs.use('c');
seajs.flush(); // 在此处触发前面的 use 下载：http://path/to/??a.js,b,js,c,js
 */