"use strict";(self.webpackChunkmovies_type_script=self.webpackChunkmovies_type_script||[]).push([[616],{616:function(n,t,e){e.r(t),e.d(t,{default:function(){return m}});var c,r,a,o=e(439),i=e(791),u=e(59),f=e(168),s=e(444),l=e(87),p=s.ZP.ul(c||(c=(0,f.Z)(["\nmargin-bottom: 40px;\ndisplay: grid;\ngrid-template-columns: repeat(auto-fill, minmax(320px, 1fr));\nlist-style: none;\n\n"]))),g=s.ZP.h3(r||(r=(0,f.Z)(["\nfront-size:16px;\ntext-align: center;\ncolor: white;\n"]))),d=(0,s.ZP)(l.rU)(a||(a=(0,f.Z)(["\ndisplay: flex;\nflex-direction: column;\ngap: 10px;\ncursor: pointer;\npadding-bottom: 20px;\nbackground-color: black;\ntext-decoration: none;\nwidth: 70%;\nmargin-bottom: 40px;\n\n"]))),h=e(184),m=function(){var n=(0,i.useState)([]),t=(0,o.Z)(n,2),e=t[0],c=t[1];return(0,i.useEffect)((function(){(0,u.Df)().then((function(n){c(n.results)})).catch((function(n){return console.warn(n)}))}),[]),(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)("h2",{children:"Trending today"}),e&&(0,h.jsx)(p,{children:e.map((function(n){var t=n.id,e=n.original_title,c=n.poster_path;return(0,h.jsx)("li",{children:(0,h.jsxs)(d,{to:"movies/".concat(t),children:[(0,h.jsx)("img",{src:"https://image.tmdb.org/t/p/w500/".concat(c),alt:e}),(0,h.jsx)(g,{children:e})]})},t)}))})]})}},59:function(n,t,e){e.d(t,{Df:function(){return u},IQ:function(){return f},Jh:function(){return s},TP:function(){return i},XT:function(){return o}});var c=e(243),r="cebf74f2036e82ff6c32c96394fea389",a="https://api.themoviedb.org/3",o=function(n){return c.Z.get("".concat(a,"/search/movie?api_key=").concat(r,"&language=en-US&query=").concat(n)).then((function(n){return n.data}))},i=function(n){return c.Z.get("".concat(a,"/movie/").concat(n,"?api_key=").concat(r,"&language=en-US")).then((function(n){return n.data}))},u=function(){return c.Z.get("".concat(a,"/trending/movie/day?api_key=").concat(r,"&language=en-US&page=").concat(1)).then((function(n){return n.data}))},f=function(n){return c.Z.get("".concat(a,"/movie/").concat(n,"/credits?api_key=").concat(r,"&language=en-US")).then((function(n){return n.data}))},s=function(n){return c.Z.get("".concat(a,"/movie/").concat(n,"/reviews?api_key=").concat(r,"&language=en-US&page=1")).then((function(n){return n.data}))}}}]);
//# sourceMappingURL=616.7402e9b4.chunk.js.map