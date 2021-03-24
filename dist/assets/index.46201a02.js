import {
    d as e,
    c as t,
    a,
    w as l,
    r as s,
    o as n,
    b as r,
    e as o,
    p as c,
    f as i,
    g as p,
    h as d,
    i as u,
} from "./vendor.818d4862.js";
!(function (e = ".", t = "__import__") {
    try {
        self[t] = new Function("u", "return import(u)");
    } catch (a) {
        const l = new URL(e, location),
            s = (e) => {
                URL.revokeObjectURL(e.src), e.remove();
            };
        (self[t] = (e) =>
            new Promise((a, n) => {
                const r = new URL(e, l);
                if (self[t].moduleMap[r]) return a(self[t].moduleMap[r]);
                const o = new Blob(
                        [
                            `import * as m from '${r}';`,
                            `${t}.moduleMap['${r}']=m;`,
                        ],
                        { type: "text/javascript" }
                    ),
                    c = Object.assign(document.createElement("script"), {
                        type: "module",
                        src: URL.createObjectURL(o),
                        onerror() {
                            n(new Error(`Failed to import: ${e}`)), s(c);
                        },
                        onload() {
                            a(self[t].moduleMap[r]), s(c);
                        },
                    });
                document.head.appendChild(c);
            })),
            (self[t].moduleMap = {});
    }
})("/assets/");
var m = e({ name: "App" });
const h = { class: "container mx-auto" },
    f = { class: "bg-gray-800 relative" },
    g = a(
        "div",
        { class: "lzh-header-bg pl-4 flex items-center gap-2 py-2" },
        [
            a("div", null, [
                a("img", {
                    class: "h-14 rounded-full",
                    alt: "logo",
                    src: "/assets/logo.0dd7b0e5.jpg",
                }),
            ]),
            a("div", { class: "my-2" }, [
                a("p", { class: "text-lg text-white" }, "AnYuanLzh"),
                a(
                    "p",
                    { class: "text-sm text-gray-300" },
                    " All things are difficulty before they are easy ! "
                ),
            ]),
        ],
        -1
    ),
    v = { class: "bg-gray-500 text-sm text-center py-1 text-gray-100" },
    b = r(" 首页 "),
    y = a("span", { class: "p-2" }, "|", -1),
    _ = r(" 计算器 "),
    w = a("span", { class: "p-2" }, "|", -1),
    x = r(" 日历 "),
    k = a("span", { class: "p-2" }, "|", -1),
    z = a(
        "div",
        { class: "bg-gray-500 text-gray-100 h-10" },
        [a("p", { class: "text-center leading-10" }, "footer")],
        -1
    );
let L;
m.render = function (e, r, o, c, i, p) {
    const d = s("router-link"),
        u = s("router-view");
    return (
        n(),
        t("div", h, [
            a("div", f, [
                g,
                a("div", v, [
                    a(
                        d,
                        { to: { name: "home" }, class: "lzh-link" },
                        { default: l(() => [b]), _: 1 }
                    ),
                    y,
                    a(
                        d,
                        { to: { name: "calc" }, class: "lzh-link" },
                        { default: l(() => [_]), _: 1 }
                    ),
                    w,
                    a(
                        d,
                        { to: { name: "calendar" }, class: "lzh-link" },
                        { default: l(() => [x]), _: 1 }
                    ),
                    k,
                ]),
            ]),
            a(u),
            z,
        ])
    );
};
const j = {},
    S = function (e, t) {
        if (!t) return e();
        if (void 0 === L) {
            const e = document.createElement("link").relList;
            L =
                e && e.supports && e.supports("modulepreload")
                    ? "modulepreload"
                    : "preload";
        }
        return Promise.all(
            t.map((e) => {
                if (e in j) return;
                j[e] = !0;
                const t = e.endsWith(".css"),
                    a = t ? '[rel="stylesheet"]' : "";
                if (document.querySelector(`link[href="${e}"]${a}`)) return;
                const l = document.createElement("link");
                return (
                    (l.rel = t ? "stylesheet" : L),
                    t || ((l.as = "script"), (l.crossOrigin = "")),
                    (l.href = e),
                    document.head.appendChild(l),
                    t
                        ? new Promise((e, t) => {
                              l.addEventListener("load", e),
                                  l.addEventListener("error", t);
                          })
                        : void 0
                );
            })
        ).then(() => e());
    };
var E = e({ name: "CompName", components: {}, setup: () => ({}) });
const C = o("data-v-53878174");
c("data-v-53878174");
const R = { class: "bg-gray-50 py-6 px-2" },
    T = a(
        "div",
        { class: "my" },
        [
            a(
                "p",
                null,
                " 最近在学习一些web技术和框架，比如: js, es, ts, css, tailwindcss, vue, vuex, nodejs ... "
            ),
            a(
                "p",
                null,
                " 弄这么个静态主页，可以展示一下学习到的一些小例子小demo什么。 "
            ),
            a(
                "p",
                null,
                " 选择托管在gitee上（而不是放在github还是觉得gitee在国内访问还是要快一点）。 "
            ),
            a("p", null, [
                r("如果对这个主面的工程感觉兴趣可以点击："),
                a(
                    "a",
                    {
                        href: "https://gitee.com/anyuanlzh/anyuanlzh",
                        "target:": "",
                        _blank: "",
                    },
                    "源码"
                ),
                r(" 查看。"),
            ]),
        ],
        -1
    ),
    A = a("h2", { class: "mt-6 font-bold" }, "这里主要使用的web技术：", -1),
    N = a("hr", { class: "my-2" }, null, -1),
    O = a(
        "ul",
        null,
        [
            a("li", null, [
                a(
                    "a",
                    {
                        "target:": "",
                        _blank: "",
                        href: "https://v3.cn.vuejs.org/",
                        class: "lzh-a",
                    },
                    "Vue3"
                ),
                a("p", null, " 当然也用来到了它的 vue-router, vuex。 "),
            ]),
            a("li", null, [
                a(
                    "a",
                    {
                        "target:": "",
                        _blank: "",
                        class: "lzh-a",
                        href: "https://vitejs.dev/",
                    },
                    "Vite"
                ),
                a(
                    "p",
                    null,
                    " 现在主要在Notion上作笔记，也推荐大家使用，个人觉得是个不错的工具。 "
                ),
            ]),
            a("li", null, [
                a(
                    "a",
                    {
                        "target:": "",
                        _blank: "",
                        class: "lzh-a",
                        href: "https://tailwindcss.com/",
                    },
                    "Tailwindcss"
                ),
                a(
                    "p",
                    null,
                    " Tailwind CSS 是一个工具集 CSS 框架，这个真的是不要太香，推荐使用。 "
                ),
            ]),
            a("li", null, [
                a(
                    "a",
                    {
                        "target:": "",
                        _blank: "",
                        class: "lzh-a",
                        href: "https://www.typescriptlang.org/",
                    },
                    "TypeScript"
                ),
                a(
                    "p",
                    null,
                    " TypeScript 是 JavaScript 的超集，是 JavaScript 的强类型版本。我认为 TypeScript 是一项非常值得学习的技术。 "
                ),
            ]),
        ],
        -1
    ),
    U = a("h2", { class: "mt-6 font-bold" }, "个人博客：", -1),
    $ = a("hr", { class: "my-2" }, null, -1),
    M = a(
        "ul",
        null,
        [
            a("li", null, [
                a(
                    "a",
                    {
                        class: "lzh-a",
                        "target:": "",
                        _blank: "",
                        href: "https://blog.csdn.net/AnYuanLzh",
                    },
                    "在CSDN上的博客"
                ),
                a(
                    "p",
                    null,
                    " 这个就是注册的比较早，后面也没有换其它的平台，当然现在不用了，在上面的东西也不愿意转移了,就留个链接在这个吧. 以后应该不会上csdn上写东西了，以后主要用下面说的那个Notion了。 "
                ),
                a("p"),
            ]),
            a("li", null, [
                a(
                    "a",
                    {
                        class: "lzh-a",
                        "target:": "",
                        _blank: "",
                        href:
                            "https://www.notion.so/Web-3af47ec871664539bf9efdeb6924daad",
                    },
                    "在Notion上的笔记"
                ),
                a(
                    "p",
                    null,
                    " 现在主要在Notion上作笔记，也推荐大家使用，个人觉得是个不错的工具。 "
                ),
            ]),
        ],
        -1
    );
i();
const P = C((e, a, l, s, r, o) => (n(), t("div", R, [T, A, N, O, U, $, M])));
(E.render = P), (E.__scopeId = "data-v-53878174");
const V = [
        { path: "/", name: "home", component: E },
        {
            path: "/calc",
            name: "calc",
            component: () =>
                S(() => __import__("./Calculator.2bec9c81.js"), [
                    "/assets/Calculator.2bec9c81.js",
                    "/assets/Calculator.b410c030.css",
                    "/assets/vendor.818d4862.js",
                ]),
        },
        {
            path: "/calendar",
            name: "calendar",
            component: () =>
                S(() => __import__("./Calendar.c24c53bf.js"), [
                    "/assets/Calendar.c24c53bf.js",
                    "/assets/Calendar.ebbefaec.css",
                    "/assets/vendor.818d4862.js",
                ]),
        },
    ],
    D = p({ history: d(), routes: V });
const I = u(m);
I.directive("xx", {}), I.use(D), I.mount("#app");
