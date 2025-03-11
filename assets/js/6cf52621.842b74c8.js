"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["813040"],{997610:function(e,n,t){t.r(n),t.d(n,{default:()=>d,frontMatter:()=>r,metadata:()=>i,assets:()=>c,toc:()=>l,contentTitle:()=>o});var i=JSON.parse('{"id":"query-data/udf/alias-function","title":"Alias Function","description":"\x3c!--","source":"@site/versioned_docs/version-2.1/query-data/udf/alias-function.md","sourceDirName":"query-data/udf","slug":"/query-data/udf/alias-function","permalink":"/docs/query-data/udf/alias-function","draft":false,"unlisted":false,"tags":[],"version":"2.1","frontMatter":{"title":"Alias Function","language":"en"},"sidebar":"docs","previous":{"title":"Common Table Expression","permalink":"/docs/query-data/cte"},"next":{"title":"Java UDF, UDAF, UDTF","permalink":"/docs/query-data/udf/java-user-defined-function"}}'),s=t("785893"),a=t("250065");let r={title:"Alias Function",language:"en"},o=void 0,c={},l=[{value:"Introduction",id:"introduction",level:2},{value:"Use Case",id:"use-case",level:2},{value:"Assigning Aliases to Functions",id:"assigning-aliases-to-functions",level:3},{value:"Simplifying Query Statements",id:"simplifying-query-statements",level:3},{value:"Supported Scope",id:"supported-scope",level:2},{value:"Expression Requirements",id:"expression-requirements",level:3},{value:"Parameter Requirements",id:"parameter-requirements",level:3}];function u(e){let n={code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,a.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h2,{id:"introduction",children:"Introduction"}),"\n",(0,s.jsx)(n.p,{children:"An alias function refers to assigning an alias name to a function. By registering a new signature for a function or expression fragment in the system, it aims to enhance compatibility or increase convenience."}),"\n",(0,s.jsxs)(n.p,{children:["Alias functions, like other custom functions, support two scopes: ",(0,s.jsx)(n.code,{children:"LOCAL"})," and ",(0,s.jsx)(n.code,{children:"GLOBAL"}),"."]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"LOCAL"}),": Alias functions are registered under the current database scope. If the alias function needs to be used under other databases, its fully qualified name should be used, i.e., ",(0,s.jsx)(n.code,{children:"<Database Name>.<Function Name>"}),"."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"GLOBAL"}),": Alias functions are registered under the global scope. They can be directly accessed by their function names under any database."]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"use-case",children:"Use Case"}),"\n",(0,s.jsx)(n.h3,{id:"assigning-aliases-to-functions",children:"Assigning Aliases to Functions"}),"\n",(0,s.jsx)(n.p,{children:"This scenario is common in system migration. When users have existing queries targeting other database systems, there may be functions in these queries that have the same functionality as a function in Doris but different names. In this case, by defining a new alias function for this function, migration can be completed without users noticing any changes."}),"\n",(0,s.jsx)(n.h3,{id:"simplifying-query-statements",children:"Simplifying Query Statements"}),"\n",(0,s.jsx)(n.p,{children:"This scenario is often seen in complex analyses. When writing complex query statements, there may be a large number of repetitive expression fragments within a statement or across different statements. By creating an alias function for this complex expression fragment, the query statement can be simplified, enhancing writing convenience and maintainability."}),"\n",(0,s.jsx)(n.h2,{id:"supported-scope",children:"Supported Scope"}),"\n",(0,s.jsx)(n.h3,{id:"expression-requirements",children:"Expression Requirements"}),"\n",(0,s.jsx)(n.p,{children:"Currently, alias functions require that the root node of the actual expression they point to must be a function expression."}),"\n",(0,s.jsx)(n.p,{children:"Legal Examples:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sql",children:"-- Create an alias function named func with parameters INT, INT, actually pointing to the expression abs(foo + bar);  \nCREATE ALIAS FUNCTION func(INT, INT) WITH PARAMETER(foo, bar) AS abs(foo + bar);  \n-- Create an alias function named func with parameters DATETIMEV2(3), INT, actually pointing to the expression date_trunc(days_sub(foo, bar), 'day')  \nCREATE ALIAS FUNCTION func(DATETIMEV2(3), INT) WITH PARAMETER (foo, bar) AS date_trunc(days_sub(foo, bar), 'day')\n"})}),"\n",(0,s.jsx)(n.p,{children:"Illegal Example:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sql",children:"-- The root expression is not a function  \nCREATE ALIAS FUNCTION func(INT, INT) WITH PARAMETER(foo, bar) AS foo + bar;\n"})}),"\n",(0,s.jsx)(n.h3,{id:"parameter-requirements",children:"Parameter Requirements"}),"\n",(0,s.jsx)(n.p,{children:"Currently, alias functions do not support variable-length parameters and must have at least one parameter."})]})}function d(e={}){let{wrapper:n}={...(0,a.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(u,{...e})}):u(e)}},250065:function(e,n,t){t.d(n,{Z:function(){return o},a:function(){return r}});var i=t(667294);let s={},a=i.createContext(s);function r(e){let n=i.useContext(a);return i.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),i.createElement(a.Provider,{value:n},e.children)}}}]);