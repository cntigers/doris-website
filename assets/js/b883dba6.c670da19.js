"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["991112"],{728248:function(n,e,r){r.r(e),r.d(e,{default:()=>d,frontMatter:()=>s,metadata:()=>a,assets:()=>o,toc:()=>_,contentTitle:()=>i});var a=JSON.parse('{"id":"sql-manual/sql-functions/array-functions/array-join","title":"ARRAY_JOIN","description":"\x3c!--","source":"@site/versioned_docs/version-2.0/sql-manual/sql-functions/array-functions/array-join.md","sourceDirName":"sql-manual/sql-functions/array-functions","slug":"/sql-manual/sql-functions/array-functions/array-join","permalink":"/docs/2.0/sql-manual/sql-functions/array-functions/array-join","draft":false,"unlisted":false,"tags":[],"version":"2.0","frontMatter":{"title":"ARRAY_JOIN","language":"en"},"sidebar":"docs","previous":{"title":"ARRAY_UNION","permalink":"/docs/2.0/sql-manual/sql-functions/array-functions/array-union"},"next":{"title":"ARRAY_WITH_CONSTANT","permalink":"/docs/2.0/sql-manual/sql-functions/array-functions/array-with-constant"}}'),t=r("785893"),l=r("250065");let s={title:"ARRAY_JOIN",language:"en"},i=void 0,o={},_=[{value:"array_join",id:"array_join",level:2},{value:"description",id:"description",level:3},{value:"Syntax",id:"syntax",level:4},{value:"example",id:"example",level:3},{value:"keywords",id:"keywords",level:3}];function c(n){let e={code:"code",h2:"h2",h3:"h3",h4:"h4",p:"p",pre:"pre",...(0,l.a)(),...n.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(e.h2,{id:"array_join",children:"array_join"}),"\n",(0,t.jsx)(e.p,{children:"array_join"}),"\n",(0,t.jsx)(e.h3,{id:"description",children:"description"}),"\n",(0,t.jsx)(e.h4,{id:"syntax",children:"Syntax"}),"\n",(0,t.jsx)(e.p,{children:(0,t.jsx)(e.code,{children:"VARCHAR array_join(ARRAY<T> arr, VARCHAR sep[, VARCHAR null_replace])"})}),"\n",(0,t.jsx)(e.p,{children:"Combines all elements in the array to generate a new string according to the separator (sep)\nand the string to replace NULL (null_replace).\nIf sep is NULL, return NULL.\nIf null_replace is NULL, return NULL.\nIf sep is an empty string, no delimiter is applied.\nIf null_replace is an empty string or not specified, the NULL elements in the array are discarded directly."}),"\n",(0,t.jsx)(e.h3,{id:"example",children:"example"}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{children:"mysql> select k1, k2, array_join(k2, '_', 'null') from array_test order by k1;\n+------+-----------------------------+------------------------------------+\n| k1   | k2                          | array_join(`k2`, '_', 'null')      |\n+------+-----------------------------+------------------------------------+\n|  1   | [1, 2, 3, 4, 5]             | 1_2_3_4_5                          |\n|  2   | [6, 7, 8]                   | 6_7_8                              |\n|  3   | []                          |                                    |\n|  4   | NULL                        | NULL                               |\n|  5   | [1, 2, 3, 4, 5, 4, 3, 2, 1] | 1_2_3_4_5_4_3_2_1                  |\n|  6   | [1, 2, 3, NULL]             | 1_2_3_null                         |\n|  7   | [4, 5, 6, NULL, NULL]       | 4_5_6_null_null                    |\n+------+-----------------------------+------------------------------------+\n\nmysql> select k1, k2, array_join(k2, '_', 'null') from array_test01 order by k1;\n+------+-----------------------------------+------------------------------------+\n| k1   | k2                                | array_join(`k2`, '_', 'null')      |\n+------+-----------------------------------+------------------------------------+\n|  1   | ['a', 'b', 'c', 'd']              | a_b_c_d                            |\n|  2   | ['e', 'f', 'g', 'h']              | e_f_g_h                            |\n|  3   | [NULL, 'a', NULL, 'b', NULL, 'c'] | null_a_null_b_null_c               |\n|  4   | ['d', 'e', NULL, ' ']             | d_e_null_                          |\n|  5   | [' ', NULL, 'f', 'g']             |  _null_f_g                         |\n+------+-----------------------------------+------------------------------------+\n\nmysql> select k1, k2, array_join(k2, '_') from array_test order by k1;\n+------+-----------------------------+----------------------------+\n| k1   | k2                          | array_join(`k2`, '_')      |\n+------+-----------------------------+----------------------------+\n|  1   | [1, 2, 3, 4, 5]             | 1_2_3_4_5                  |\n|  2   | [6, 7, 8]                   | 6_7_8                      |\n|  3   | []                          |                            |\n|  4   | NULL                        | NULL                       |\n|  5   | [1, 2, 3, 4, 5, 4, 3, 2, 1] | 1_2_3_4_5_4_3_2_1          |\n|  6   | [1, 2, 3, NULL]             | 1_2_3                      |\n|  7   | [4, 5, 6, NULL, NULL]       | 4_5_6                      |\n+------+-----------------------------+----------------------------+\n\nmysql> select k1, k2, array_join(k2, '_') from array_test01 order by k1;\n+------+-----------------------------------+----------------------------+\n| k1   | k2                                | array_join(`k2`, '_')      |\n+------+-----------------------------------+----------------------------+\n|  1   | ['a', 'b', 'c', 'd']              | a_b_c_d                    |\n|  2   | ['e', 'f', 'g', 'h']              | e_f_g_h                    |\n|  3   | [NULL, 'a', NULL, 'b', NULL, 'c'] | a_b_c                      |\n|  4   | ['d', 'e', NULL, ' ']             | d_e_                       |\n|  5   | [' ', NULL, 'f', 'g']             |  _f_g                      |\n+------+-----------------------------------+----------------------------+\n"})}),"\n",(0,t.jsx)(e.h3,{id:"keywords",children:"keywords"}),"\n",(0,t.jsx)(e.p,{children:"ARRAY, JOIN, ARRAY_JOIN"})]})}function d(n={}){let{wrapper:e}={...(0,l.a)(),...n.components};return e?(0,t.jsx)(e,{...n,children:(0,t.jsx)(c,{...n})}):c(n)}},250065:function(n,e,r){r.d(e,{Z:function(){return i},a:function(){return s}});var a=r(667294);let t={},l=a.createContext(t);function s(n){let e=a.useContext(l);return a.useMemo(function(){return"function"==typeof n?n(e):{...e,...n}},[e,n])}function i(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(t):n.components||t:s(n.components),a.createElement(l.Provider,{value:e},n.children)}}}]);