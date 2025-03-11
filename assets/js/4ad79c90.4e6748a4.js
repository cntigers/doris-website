"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["781148"],{939043:function(e,n,t){t.r(n),t.d(n,{default:()=>d,frontMatter:()=>c,metadata:()=>s,assets:()=>i,toc:()=>o,contentTitle:()=>u});var s=JSON.parse('{"id":"sql-manual/sql-functions/struct-functions/struct-element","title":"STRUCT_ELEMENT","description":"\x3c!--","source":"@site/versioned_docs/version-2.0/sql-manual/sql-functions/struct-functions/struct-element.md","sourceDirName":"sql-manual/sql-functions/struct-functions","slug":"/sql-manual/sql-functions/struct-functions/struct-element","permalink":"/docs/2.0/sql-manual/sql-functions/struct-functions/struct-element","draft":false,"unlisted":false,"tags":[],"version":"2.0","frontMatter":{"title":"STRUCT_ELEMENT","language":"en"},"sidebar":"docs","previous":{"title":"NAMED_STRUCT","permalink":"/docs/2.0/sql-manual/sql-functions/struct-functions/named-struct"},"next":{"title":"STATE","permalink":"/docs/2.0/sql-manual/sql-functions/combinators/state"}}'),l=t("785893"),r=t("250065");let c={title:"STRUCT_ELEMENT",language:"en"},u=void 0,i={},o=[{value:"struct_element",id:"struct_element",level:2},{value:"description",id:"description",level:3},{value:"Syntax",id:"syntax",level:4},{value:"Arguments",id:"arguments",level:4},{value:"Returned value",id:"returned-value",level:4},{value:"example",id:"example",level:3},{value:"keywords",id:"keywords",level:3}];function a(e){let n={code:"code",h2:"h2",h3:"h3",h4:"h4",p:"p",pre:"pre",...(0,r.a)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(n.h2,{id:"struct_element",children:"struct_element"}),"\n",(0,l.jsx)(n.p,{children:"struct_element"}),"\n",(0,l.jsx)(n.h3,{id:"description",children:"description"}),"\n",(0,l.jsx)(n.p,{children:"Function allows getting a field from a struct."}),"\n",(0,l.jsx)(n.h4,{id:"syntax",children:"Syntax"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{children:"struct_element(struct, n/s)\n"})}),"\n",(0,l.jsx)(n.h4,{id:"arguments",children:"Arguments"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{children:"struct - The input struct column. If null, null will be returned.\nn - The position of field\uFF0Cstarting from 1\uFF0Conly supports constants.\ns - The name of field\uFF0Conly supports constants.\n"})}),"\n",(0,l.jsx)(n.h4,{id:"returned-value",children:"Returned value"}),"\n",(0,l.jsx)(n.p,{children:"Returns the specified field column, of any type."}),"\n",(0,l.jsx)(n.h3,{id:"example",children:"example"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{children:"mysql> select struct_element(named_struct('f1', 1, 'f2', 'a'), 'f2');\n+--------------------------------------------------------+\n| struct_element(named_struct('f1', 1, 'f2', 'a'), 'f2') |\n+--------------------------------------------------------+\n| a                                                      |\n+--------------------------------------------------------+\n1 row in set (0.03 sec)\n\nmysql> select struct_element(named_struct('f1', 1, 'f2', 'a'), 1);\n+-----------------------------------------------------+\n| struct_element(named_struct('f1', 1, 'f2', 'a'), 1) |\n+-----------------------------------------------------+\n|                                                   1 |\n+-----------------------------------------------------+\n1 row in set (0.02 sec)\n\nmysql> select struct_col, struct_element(struct_col, 'f1') from test_struct;\n+-------------------------------------------------+-------------------------------------+\n| struct_col                                      | struct_element(`struct_col `, 'f1') |\n+-------------------------------------------------+-------------------------------------+\n| {1, 2, 3, 4, 5}                                 |                                   1 |\n| {1, 1000, 10000000, 100000000000, 100000000000} |                                   1 |\n| {5, 4, 3, 2, 1}                                 |                                   5 |\n| NULL                                            |                                NULL |\n| {1, NULL, 3, NULL, 5}                           |                                   1 |\n+-------------------------------------------------+-------------------------------------+\n9 rows in set (0.01 sec)\n"})}),"\n",(0,l.jsx)(n.h3,{id:"keywords",children:"keywords"}),"\n",(0,l.jsx)(n.p,{children:"STRUCT, ELEMENT, STRUCT_ELEMENT"})]})}function d(e={}){let{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,l.jsx)(n,{...e,children:(0,l.jsx)(a,{...e})}):a(e)}},250065:function(e,n,t){t.d(n,{Z:function(){return u},a:function(){return c}});var s=t(667294);let l={},r=s.createContext(l);function c(e){let n=s.useContext(r);return s.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function u(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:c(e.components),s.createElement(r.Provider,{value:n},e.children)}}}]);