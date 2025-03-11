"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["286086"],{19089:function(e,n,t){t.r(n),t.d(n,{default:()=>d,frontMatter:()=>o,metadata:()=>s,assets:()=>r,toc:()=>c,contentTitle:()=>i});var s=JSON.parse('{"id":"sql-manual/sql-statements/function/DESC-FUNCTION","title":"DESC FUNCTION","description":"\x3c!--","source":"@site/docs/sql-manual/sql-statements/function/DESC-FUNCTION.md","sourceDirName":"sql-manual/sql-statements/function","slug":"/sql-manual/sql-statements/function/DESC-FUNCTION","permalink":"/docs/dev/sql-manual/sql-statements/function/DESC-FUNCTION","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"title":"DESC FUNCTION","language":"en"},"sidebar":"docs","previous":{"title":"SHOW CREATE FUNCTION","permalink":"/docs/dev/sql-manual/sql-statements/function/SHOW-CREATE-FUNCTION"},"next":{"title":"SHOW FUNCTIONS","permalink":"/docs/dev/sql-manual/sql-statements/function/SHOW-FUNCTIONS"}}'),a=t("785893"),l=t("250065");let o={title:"DESC FUNCTION",language:"en"},i=void 0,r={},c=[{value:"Description",id:"description",level:2},{value:"Syntax",id:"syntax",level:2},{value:"Required Parameters",id:"required-parameters",level:2},{value:"Examples",id:"examples",level:2}];function u(e){let n={a:"a",blockquote:"blockquote",code:"code",h2:"h2",p:"p",pre:"pre",strong:"strong",...(0,l.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,a.jsx)(n.p,{children:"Use the desc function table_valued_function to obtain the schema information for the corresponding table-valued function."}),"\n",(0,a.jsx)(n.h2,{id:"syntax",children:"Syntax"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-sql",children:"DESC FUNCTION <table_valued_function>\n"})}),"\n",(0,a.jsx)(n.h2,{id:"required-parameters",children:"Required Parameters"}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.strong,{children:"<table_valued_function>"})}),"\n",(0,a.jsxs)(n.blockquote,{children:["\n",(0,a.jsxs)(n.p,{children:['table_valued_function, the name of the table-valued function, such as CATALOGS. For a list of supported table-valued functions, please refer to the "',(0,a.jsx)(n.a,{href:"https://doris.apache.org/en/docs/dev/sql-manual/sql-functions/table-valued-functions/s3/",children:"Table-Valued Functions"}),'" section']}),"\n"]}),"\n",(0,a.jsx)(n.h2,{id:"examples",children:"Examples"}),"\n",(0,a.jsx)(n.p,{children:"Query the information of the table-valued function CATALOGS:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-sql",children:"DESC FUNCTION catalogs();\n"})}),"\n",(0,a.jsx)(n.p,{children:"The result is as follows:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-sql",children:"+-------------+--------+------+-------+---------+-------+\n| Field       | Type   | Null | Key   | Default | Extra |\n+-------------+--------+------+-------+---------+-------+\n| CatalogId   | bigint | No   | false | NULL    | NONE  |\n| CatalogName | text   | No   | false | NULL    | NONE  |\n| CatalogType | text   | No   | false | NULL    | NONE  |\n| Property    | text   | No   | false | NULL    | NONE  |\n| Value       | text   | No   | false | NULL    | NONE  |\n+-------------+--------+------+-------+---------+-------+\n"})})]})}function d(e={}){let{wrapper:n}={...(0,l.a)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(u,{...e})}):u(e)}},250065:function(e,n,t){t.d(n,{Z:function(){return i},a:function(){return o}});var s=t(667294);let a={},l=s.createContext(a);function o(e){let n=s.useContext(l);return s.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:o(e.components),s.createElement(l.Provider,{value:n},e.children)}}}]);