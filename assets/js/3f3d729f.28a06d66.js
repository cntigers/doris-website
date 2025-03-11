"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["165020"],{173394:function(e,n,t){t.r(n),t.d(n,{default:()=>u,frontMatter:()=>l,metadata:()=>s,assets:()=>c,toc:()=>o,contentTitle:()=>r});var s=JSON.parse('{"id":"sql-manual/sql-functions/scalar-functions/bitmap-functions/bitmap-from-base64","title":"BITMAP_FROM_BASE64","description":"\x3c!--","source":"@site/versioned_docs/version-3.0/sql-manual/sql-functions/scalar-functions/bitmap-functions/bitmap-from-base64.md","sourceDirName":"sql-manual/sql-functions/scalar-functions/bitmap-functions","slug":"/sql-manual/sql-functions/scalar-functions/bitmap-functions/bitmap-from-base64","permalink":"/docs/3.0/sql-manual/sql-functions/scalar-functions/bitmap-functions/bitmap-from-base64","draft":false,"unlisted":false,"tags":[],"version":"3.0","frontMatter":{"title":"BITMAP_FROM_BASE64","language":"en"},"sidebar":"docs","previous":{"title":"BITMAP_HASH64","permalink":"/docs/3.0/sql-manual/sql-functions/scalar-functions/bitmap-functions/bitmap-hash64"},"next":{"title":"BITMAP_TO_BASE64","permalink":"/docs/3.0/sql-manual/sql-functions/scalar-functions/bitmap-functions/bitmap-to-base64"}}'),a=t("785893"),i=t("250065");let l={title:"BITMAP_FROM_BASE64",language:"en"},r=void 0,c={},o=[{value:"Description",id:"description",level:2},{value:"Syntax",id:"syntax",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Return Value",id:"return-value",level:2},{value:"Examples",id:"examples",level:2}];function d(e){let n={code:"code",h2:"h2",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,a.jsxs)(n.p,{children:["Convert a base64 string (which can be converted by ",(0,a.jsx)(n.code,{children:"bitmap_to_base64"})," function) to a BITMAP. Returns NULL when the input string is invalid."]}),"\n",(0,a.jsx)(n.h2,{id:"syntax",children:"Syntax"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-sql",children:" BITMAP_FROM_BASE64(<base64_str>)\n"})}),"\n",(0,a.jsx)(n.h2,{id:"parameters",children:"Parameters"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,a.jsxs)(n.table,{children:[(0,a.jsx)(n.thead,{children:(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.th,{children:"Parameter"}),(0,a.jsx)(n.th,{children:"Description"})]})}),(0,a.jsx)(n.tbody,{children:(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:(0,a.jsx)(n.code,{children:"<base64_str>"})}),(0,a.jsxs)(n.td,{children:["base64 string (can be converted by ",(0,a.jsx)(n.code,{children:"bitmap_to_base64"})," function)"]})]})})]}),"\n",(0,a.jsx)(n.h2,{id:"return-value",children:"Return Value"}),"\n",(0,a.jsx)(n.p,{children:"Returns a BITMAP"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:"When the input field is invalid, the result is NULL"}),"\n"]}),"\n",(0,a.jsx)(n.h2,{id:"examples",children:"Examples"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-sql",children:'select bitmap_to_string(bitmap_from_base64("AA==")) bts;\n'})}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-text",children:"+------+\n| bts  |\n+------+\n|      |\n+------+\n"})}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-sql",children:'select bitmap_to_string(bitmap_from_base64("AQEAAAA=")) bts;\n'})}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-text",children:"+------+\n| bts  |\n+------+\n| 1    |\n+------+\n"})}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-sql",children:'select bitmap_to_string(bitmap_from_base64("AjowAAACAAAAAAAAAJgAAAAYAAAAGgAAAAEAf5Y=")) bts;\n'})}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-text",children:"+-----------+\n| bts       |\n+-----------+\n| 1,9999999 |\n+-----------+\n"})})]})}function u(e={}){let{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(d,{...e})}):d(e)}},250065:function(e,n,t){t.d(n,{Z:function(){return r},a:function(){return l}});var s=t(667294);let a={},i=s.createContext(a);function l(e){let n=s.useContext(i);return s.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:l(e.components),s.createElement(i.Provider,{value:n},e.children)}}}]);