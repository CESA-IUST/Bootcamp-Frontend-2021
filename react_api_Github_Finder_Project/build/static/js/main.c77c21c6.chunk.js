(this.webpackJsonpreact_api_workshop=this.webpackJsonpreact_api_workshop||[]).push([[0],[,,,,,,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},,function(e,t,n){},function(e,t,n){"use strict";n.r(t);var c=n(1),s=n.n(c),r=n(4),i=n.n(r),a=(n(9),n(2)),o=(n(10),n(11),n(0)),u=function(){return Object(o.jsxs)("div",{className:"skeleton-wrapper",children:[Object(o.jsx)("div",{className:"skeleton__img skeleton"}),Object(o.jsx)("div",{className:"skeleton__text skeleton"}),Object(o.jsx)("div",{className:"skeleton__text skeleton"}),Object(o.jsx)("div",{className:"skeleton__text skeleton"})]})},j=(n(13),function(e){var t=e.userItem;return Object(o.jsxs)("div",{className:"card",children:[Object(o.jsx)("img",{src:t.avatar_url}),Object(o.jsx)("p",{children:t.login})]})});var b=function(){var e=Object(c.useState)(!1),t=Object(a.a)(e,2),n=t[0],s=t[1],r=Object(c.useState)([]),i=Object(a.a)(r,2),b=i[0],l=i[1],h=Object(c.useState)(""),p=Object(a.a)(h,2),O=p[0],f=p[1];return Object(c.useEffect)((function(){s(!0),fetch("https://api.github.com/users").then((function(e){return e.json()})).then((function(e){l(e),s(!1)}))}),[]),Object(o.jsxs)("div",{className:"App",children:[Object(o.jsxs)("form",{onSubmit:function(e){e.preventDefault(),s(!0),fetch("https://api.github.com/search/users?q="+O).then((function(e){return e.json()})).then((function(e){l(e.items),s(!1)}))},children:[Object(o.jsx)("input",{type:"text",onChange:function(e){f(e.target.value)}}),Object(o.jsx)("button",{type:"submit",children:"Search..."})]}),n&&[1,2,3,4,5].map((function(e){return Object(o.jsx)(u,{},e)})),!n&&Object(o.jsx)("div",{className:"container",children:b.map((function(e,t){return Object(o.jsx)(j,{userItem:e},t)}))})]})};i.a.render(Object(o.jsx)(s.a.StrictMode,{children:Object(o.jsx)(b,{})}),document.getElementById("root"))}],[[14,1,2]]]);
//# sourceMappingURL=main.c77c21c6.chunk.js.map