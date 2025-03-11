"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["155639"],{279983:function(e,n,t){t.r(n),t.d(n,{default:()=>u,frontMatter:()=>r,metadata:()=>s,assets:()=>l,toc:()=>d,contentTitle:()=>a});var s=JSON.parse('{"id":"sql-manual/sql-functions/aggregate-functions/stddev","title":"STDDEV,STDDEV_POP","description":"\x3c!--","source":"@site/versioned_docs/version-2.0/sql-manual/sql-functions/aggregate-functions/stddev.md","sourceDirName":"sql-manual/sql-functions/aggregate-functions","slug":"/sql-manual/sql-functions/aggregate-functions/stddev","permalink":"/docs/2.0/sql-manual/sql-functions/aggregate-functions/stddev","draft":false,"unlisted":false,"tags":[],"version":"2.0","frontMatter":{"title":"STDDEV,STDDEV_POP","language":"en"},"sidebar":"docs","previous":{"title":"PERCENTILE_APPROX","permalink":"/docs/2.0/sql-manual/sql-functions/aggregate-functions/percentile-approx"},"next":{"title":"GROUP_CONCAT","permalink":"/docs/2.0/sql-manual/sql-functions/aggregate-functions/group-concat"}}'),o=t("785893"),i=t("250065");let r={title:"STDDEV,STDDEV_POP",language:"en"},a=void 0,l={},d=[{value:"STDDEV,STDDEV_POP",id:"stddevstddev_pop",level:2},{value:"Description",id:"description",level:3},{value:"Syntax",id:"syntax",level:4},{value:"example",id:"example",level:3},{value:"keywords",id:"keywords",level:3}];function c(e){let n={code:"code",h2:"h2",h3:"h3",h4:"h4",p:"p",pre:"pre",...(0,i.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.h2,{id:"stddevstddev_pop",children:"STDDEV,STDDEV_POP"}),"\n",(0,o.jsx)(n.h3,{id:"description",children:"Description"}),"\n",(0,o.jsx)(n.h4,{id:"syntax",children:"Syntax"}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.code,{children:"stddev (expl)"})}),"\n",(0,o.jsx)(n.p,{children:"Returns the standard deviation of the expr expression"}),"\n",(0,o.jsx)(n.h3,{id:"example",children:"example"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{children:"MySQL > select stddev(scan_rows) from log_statis group by datetime;\n+---------------------+\n| stddev(`scan_rows`) |\n+---------------------+\n|  2.3736656687790934 |\n+---------------------+\n\nMySQL > select stddev_pop(scan_rows) from log_statis group by datetime;\n+-------------------------+\n| stddev_pop(`scan_rows`) |\n+-------------------------+\n|      2.3722760595994914 |\n+-------------------------+\n"})}),"\n",(0,o.jsx)(n.h3,{id:"keywords",children:"keywords"}),"\n",(0,o.jsx)(n.p,{children:"STDDEV,STDDEV_POP,POP"})]})}function u(e={}){let{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(c,{...e})}):c(e)}},250065:function(e,n,t){t.d(n,{Z:function(){return a},a:function(){return r}});var s=t(667294);let o={},i=s.createContext(o);function r(e){let n=s.useContext(i);return s.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:r(e.components),s.createElement(i.Provider,{value:n},e.children)}}}]);