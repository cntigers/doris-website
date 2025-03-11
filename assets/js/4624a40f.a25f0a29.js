"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["377329"],{646595:function(e,n,s){s.r(n),s.d(n,{default:()=>u,frontMatter:()=>d,metadata:()=>i,assets:()=>c,toc:()=>a,contentTitle:()=>o});var i=JSON.parse('{"id":"sql-manual/sql-functions/date-time-functions/milliseconds-add","title":"MILLISECONDS_ADD","description":"\x3c!--","source":"@site/versioned_docs/version-2.0/sql-manual/sql-functions/date-time-functions/milliseconds-add.md","sourceDirName":"sql-manual/sql-functions/date-time-functions","slug":"/sql-manual/sql-functions/date-time-functions/milliseconds-add","permalink":"/docs/2.0/sql-manual/sql-functions/date-time-functions/milliseconds-add","draft":false,"unlisted":false,"tags":[],"version":"2.0","frontMatter":{"title":"MILLISECONDS_ADD","language":"en"},"sidebar":"docs","previous":{"title":"MICROSECONDS_SUB","permalink":"/docs/2.0/sql-manual/sql-functions/date-time-functions/microseconds-sub"},"next":{"title":"MILLISECONDS_DIFF","permalink":"/docs/2.0/sql-manual/sql-functions/date-time-functions/milliseconds-diff"}}'),t=s("785893"),l=s("250065");let d={title:"MILLISECONDS_ADD",language:"en"},o=void 0,c={},a=[{value:"milliseconds_add",id:"milliseconds_add",level:2},{value:"description",id:"description",level:3},{value:"Syntax",id:"syntax",level:4},{value:"example",id:"example",level:3},{value:"keywords",id:"keywords",level:3}];function r(e){let n={code:"code",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",pre:"pre",ul:"ul",...(0,l.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h2,{id:"milliseconds_add",children:"milliseconds_add"}),"\n",(0,t.jsx)(n.h3,{id:"description",children:"description"}),"\n",(0,t.jsx)(n.h4,{id:"syntax",children:"Syntax"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.code,{children:"DATETIMEV2 milliseconds_add(DATETIMEV2 basetime, INT delta)"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"basetime: Base time whose type is DATETIMEV2"}),"\n",(0,t.jsx)(n.li,{children:"delta:Milliseconds to add to basetime"}),"\n",(0,t.jsx)(n.li,{children:"Return type of this function is DATETIMEV2"}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"example",children:"example"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"mysql> select milliseconds_add('2023-09-08 16:02:08.435123', 1);\n+--------------------------------------------------------------------------+\n| milliseconds_add(cast('2023-09-08 16:02:08.435123' as DATETIMEV2(6)), 1) |\n+--------------------------------------------------------------------------+\n| 2023-09-08 16:02:08.436123                                               |\n+--------------------------------------------------------------------------+\n1 row in set (0.04 sec)\n"})}),"\n",(0,t.jsx)(n.h3,{id:"keywords",children:"keywords"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"milliseconds_add\n\n"})})]})}function u(e={}){let{wrapper:n}={...(0,l.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(r,{...e})}):r(e)}},250065:function(e,n,s){s.d(n,{Z:function(){return o},a:function(){return d}});var i=s(667294);let t={},l=i.createContext(t);function d(e){let n=i.useContext(l);return i.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:d(e.components),i.createElement(l.Provider,{value:n},e.children)}}}]);