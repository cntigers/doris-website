"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["620752"],{23285:function(e,n,s){s.r(n),s.d(n,{default:()=>u,frontMatter:()=>a,metadata:()=>t,assets:()=>i,toc:()=>o,contentTitle:()=>c});var t=JSON.parse('{"id":"sql-manual/sql-functions/aggregate-functions/group-concat","title":"GROUP_CONCAT","description":"\x3c!--","source":"@site/versioned_docs/version-2.1/sql-manual/sql-functions/aggregate-functions/group-concat.md","sourceDirName":"sql-manual/sql-functions/aggregate-functions","slug":"/sql-manual/sql-functions/aggregate-functions/group-concat","permalink":"/docs/sql-manual/sql-functions/aggregate-functions/group-concat","draft":false,"unlisted":false,"tags":[],"version":"2.1","frontMatter":{"title":"GROUP_CONCAT","language":"en"},"sidebar":"docs","previous":{"title":"GROUP_BIT_XOR","permalink":"/docs/sql-manual/sql-functions/aggregate-functions/group-bit-xor"},"next":{"title":"HLL_UNION_AGG","permalink":"/docs/sql-manual/sql-functions/aggregate-functions/hll-union-agg"}}'),l=s("785893"),r=s("250065");let a={title:"GROUP_CONCAT",language:"en"},c=void 0,i={},o=[{value:"Description",id:"description",level:2},{value:"Syntax",id:"syntax",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Return Value",id:"return-value",level:2},{value:"Example",id:"example",level:2}];function d(e){let n={code:"code",h2:"h2",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,r.a)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,l.jsx)(n.p,{children:"The GROUP_CONCAT function concatenates multiple rows of results in the result set into a string."}),"\n",(0,l.jsx)(n.h2,{id:"syntax",children:"Syntax"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-sql",children:"GROUP_CONCAT([DISTINCT] <str>[, <sep>] [ORDER BY { <col_name> | <expr>} [ASC | DESC]])\n"})}),"\n",(0,l.jsx)(n.h2,{id:"parameters",children:"Parameters"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,l.jsxs)(n.table,{children:[(0,l.jsx)(n.thead,{children:(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.th,{children:"Parameters"}),(0,l.jsx)(n.th,{children:"Description"})]})}),(0,l.jsxs)(n.tbody,{children:[(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:(0,l.jsx)(n.code,{children:"<str>"})}),(0,l.jsx)(n.td,{children:"Required. The expression of the value to be concatenated."})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:(0,l.jsx)(n.code,{children:"<sep>"})}),(0,l.jsx)(n.td,{children:"Optional. The separator between strings."})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:(0,l.jsx)(n.code,{children:"<col_name>"})}),(0,l.jsx)(n.td,{children:"Optional. The column used for sorting."})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:(0,l.jsx)(n.code,{children:"<expr>"})}),(0,l.jsx)(n.td,{children:"Optional. The expression used for sorting."})]})]})]}),"\n",(0,l.jsx)(n.h2,{id:"return-value",children:"Return Value"}),"\n",(0,l.jsx)(n.p,{children:"Returns a value of type VARCHAR."}),"\n",(0,l.jsx)(n.h2,{id:"example",children:"Example"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-sql",children:"select value from test;\n"})}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-text",children:"+-------+\n| value |\n+-------+\n| a     |\n| b     |\n| c     |\n| c     |\n+-------+\n"})}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-sql",children:"select GROUP_CONCAT(value) from test;\n"})}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-text",children:"+-----------------------+\n| GROUP_CONCAT(`value`) |\n+-----------------------+\n| a, b, c, c            |\n+-----------------------+\n"})}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-sql",children:"select GROUP_CONCAT(DISTINCT value) from test;\n"})}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-text",children:"+-----------------------+\n| GROUP_CONCAT(`value`) |\n+-----------------------+\n| a, b, c               |\n+-----------------------+\n"})}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-sql",children:'select GROUP_CONCAT(value, " ") from test;\n'})}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-text",children:"+----------------------------+\n| GROUP_CONCAT(`value`, ' ') |\n+----------------------------+\n| a b c c                    |\n+----------------------------+\n"})}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-sql",children:"select GROUP_CONCAT(value, NULL) from test;\n"})}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-text",children:"+----------------------------+\n| GROUP_CONCAT(`value`, NULL)|\n+----------------------------+\n| NULL                       |\n+----------------------------+\n"})})]})}function u(e={}){let{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,l.jsx)(n,{...e,children:(0,l.jsx)(d,{...e})}):d(e)}},250065:function(e,n,s){s.d(n,{Z:function(){return c},a:function(){return a}});var t=s(667294);let l={},r=t.createContext(l);function a(e){let n=t.useContext(r);return t.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:a(e.components),t.createElement(r.Provider,{value:n},e.children)}}}]);