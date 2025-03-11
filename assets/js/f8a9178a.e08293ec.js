"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["741821"],{660381:function(r,a,e){e.r(a),e.d(a,{default:()=>d,frontMatter:()=>i,metadata:()=>n,assets:()=>o,toc:()=>l,contentTitle:()=>c});var n=JSON.parse('{"id":"sql-manual/sql-functions/array-functions/array-exists","title":"ARRAY_EXISTS","description":"\x3c!--","source":"@site/versioned_docs/version-2.0/sql-manual/sql-functions/array-functions/array-exists.md","sourceDirName":"sql-manual/sql-functions/array-functions","slug":"/sql-manual/sql-functions/array-functions/array-exists","permalink":"/docs/2.0/sql-manual/sql-functions/array-functions/array-exists","draft":false,"unlisted":false,"tags":[],"version":"2.0","frontMatter":{"title":"ARRAY_EXISTS","language":"en"},"sidebar":"docs","previous":{"title":"ARRAY_CUM_SUM","permalink":"/docs/2.0/sql-manual/sql-functions/array-functions/array-cum-sum"},"next":{"title":"ARRAY_FIRST_INDEX","permalink":"/docs/2.0/sql-manual/sql-functions/array-functions/array-first-index"}}'),s=e("785893"),t=e("250065");let i={title:"ARRAY_EXISTS",language:"en"},c=void 0,o={},l=[{value:"array_exists",id:"array_exists",level:2},{value:"description",id:"description",level:3},{value:"Syntax",id:"syntax",level:4},{value:"example",id:"example",level:3},{value:"keywords",id:"keywords",level:3}];function y(r){let a={code:"code",h2:"h2",h3:"h3",h4:"h4",p:"p",pre:"pre",...(0,t.a)(),...r.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(a.h2,{id:"array_exists",children:"array_exists"}),"\n",(0,s.jsx)(a.p,{children:"array_exists(lambda,array1,array2....)\narray_exists(array1)"}),"\n",(0,s.jsx)(a.h3,{id:"description",children:"description"}),"\n",(0,s.jsx)(a.h4,{id:"syntax",children:"Syntax"}),"\n",(0,s.jsx)(a.pre,{children:(0,s.jsx)(a.code,{className:"language-sql",children:"BOOLEAN array_exists(lambda, ARRAY<T> arr1, ARRAY<T> arr2, ... )\nBOOLEAN array_exists(ARRAY<T> arr)\n"})}),"\n",(0,s.jsx)(a.p,{children:"Use an optional lambda expression as an input parameter to perform corresponding expression calculations on the internal data of other input ARRAY parameters. Returns 1 when the calculation returns something other than 0; otherwise returns 0.\nThere are one or more parameters input in the lambda expression, which must be consistent with the number of input array columns later. Legal scalar functions can be executed in lambda, aggregate functions, etc. are not supported.\nWhen lambda expression is not used as a parameter, array1 is used as the calculation result."}),"\n",(0,s.jsx)(a.pre,{children:(0,s.jsx)(a.code,{children:"array_exists(x->x, array1);\narray_exists(x->(x%2 = 0), array1);\narray_exists(x->(abs(x)-1), array1);\narray_exists((x,y)->(x = y), array1, array2);\narray_exists(array1);\n"})}),"\n",(0,s.jsx)(a.h3,{id:"example",children:"example"}),"\n",(0,s.jsx)(a.pre,{children:(0,s.jsx)(a.code,{className:"language-sql",children:"\nmysql [test]>select *, array_exists(x->x>1,[1,2,3]) from array_test2 order by id;\n+------+-----------------+-------------------------+-----------------------------------------------+\n| id   | c_array1        | c_array2                | array_exists([x] -> x(0) > 1, ARRAY(1, 2, 3)) |\n+------+-----------------+-------------------------+-----------------------------------------------+\n|    1 | [1, 2, 3, 4, 5] | [10, 20, -40, 80, -100] | [0, 1, 1]                                     |\n|    2 | [6, 7, 8]       | [10, 12, 13]            | [0, 1, 1]                                     |\n|    3 | [1]             | [-100]                  | [0, 1, 1]                                     |\n|    4 | NULL            | NULL                    | [0, 1, 1]                                     |\n+------+-----------------+-------------------------+-----------------------------------------------+\n4 rows in set (0.02 sec)\n\nmysql [test]>select c_array1, c_array2, array_exists(x->x%2=0,[1,2,3]) from array_test2 order by id;\n+-----------------+-------------------------+---------------------------------------------------+\n| c_array1        | c_array2                | array_exists([x] -> x(0) % 2 = 0, ARRAY(1, 2, 3)) |\n+-----------------+-------------------------+---------------------------------------------------+\n| [1, 2, 3, 4, 5] | [10, 20, -40, 80, -100] | [0, 1, 0]                                         |\n| [6, 7, 8]       | [10, 12, 13]            | [0, 1, 0]                                         |\n| [1]             | [-100]                  | [0, 1, 0]                                         |\n| NULL            | NULL                    | [0, 1, 0]                                         |\n+-----------------+-------------------------+---------------------------------------------------+\n4 rows in set (0.02 sec)\n\nmysql [test]>select c_array1, c_array2, array_exists(x->abs(x)-1,[1,2,3]) from array_test2 order by id;\n+-----------------+-------------------------+----------------------------------------------------+\n| c_array1        | c_array2                | array_exists([x] -> abs(x(0)) - 1, ARRAY(1, 2, 3)) |\n+-----------------+-------------------------+----------------------------------------------------+\n| [1, 2, 3, 4, 5] | [10, 20, -40, 80, -100] | [0, 1, 1, 1, 1]                                    |\n| [6, 7, 8]       | [10, 12, 13]            | [1, 1, 1]                                          |\n| [1, NULL]       | [-100]                  | [0, NULL]                                          |\n| NULL            | NULL                    | NULL                                               |\n+-----------------+-------------------------+----------------------------------------------------+\n4 rows in set (0.02 sec)\n\nmysql [test]>select c_array1, c_array2, array_exists((x,y)->x>y,c_array1,c_array2) from array_test2 order by id;\n+-----------------+-------------------------+-------------------------------------------------------------+\n| c_array1        | c_array2                | array_exists([x, y] -> x(0) > y(1), `c_array1`, `c_array2`) |\n+-----------------+-------------------------+-------------------------------------------------------------+\n| [1, 2, 3, 4, 5] | [10, 20, -40, 80, -100] | [0, 0, 1, 0, 1]                                             |\n| [6, 7, 8]       | [10, 12, 13]            | [0, 0, 0]                                                   |\n| [1]             | [-100]                  | [1]                                                         |\n| NULL            | NULL                    | NULL                                                        |\n+-----------------+-------------------------+-------------------------------------------------------------+\n4 rows in set (0.02 sec)\n\nmysql [test]>select *, array_exists(c_array1) from array_test2 order by id;\n+------+-----------------+-------------------------+--------------------------+\n| id   | c_array1        | c_array2                | array_exists(`c_array1`) |\n+------+-----------------+-------------------------+--------------------------+\n|    1 | [1, 2, 3, 0, 5] | [10, 20, -40, 80, -100] | [1, 1, 1, 0, 1]          |\n|    2 | [6, 7, 8]       | [10, 12, 13]            | [1, 1, 1]                |\n|    3 | [0, NULL]       | [-100]                  | [0, NULL]                |\n|    4 | NULL            | NULL                    | NULL                     |\n+------+-----------------+-------------------------+--------------------------+\n4 rows in set (0.02 sec)\n\n"})}),"\n",(0,s.jsx)(a.h3,{id:"keywords",children:"keywords"}),"\n",(0,s.jsx)(a.p,{children:"ARRAY,ARRAY_EXISTS"})]})}function d(r={}){let{wrapper:a}={...(0,t.a)(),...r.components};return a?(0,s.jsx)(a,{...r,children:(0,s.jsx)(y,{...r})}):y(r)}},250065:function(r,a,e){e.d(a,{Z:function(){return c},a:function(){return i}});var n=e(667294);let s={},t=n.createContext(s);function i(r){let a=n.useContext(t);return n.useMemo(function(){return"function"==typeof r?r(a):{...a,...r}},[a,r])}function c(r){let a;return a=r.disableParentContext?"function"==typeof r.components?r.components(s):r.components||s:i(r.components),n.createElement(t.Provider,{value:a},r.children)}}}]);