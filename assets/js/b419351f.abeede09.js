"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["146947"],{999391:function(e,n,t){t.r(n),t.d(n,{default:()=>u,frontMatter:()=>d,metadata:()=>i,assets:()=>o,toc:()=>r,contentTitle:()=>l});var i=JSON.parse('{"id":"sql-manual/sql-functions/date-time-functions/timestampadd","title":"TIMESTAMPADD","description":"\x3c!--","source":"@site/versioned_docs/version-2.0/sql-manual/sql-functions/date-time-functions/timestampadd.md","sourceDirName":"sql-manual/sql-functions/date-time-functions","slug":"/sql-manual/sql-functions/date-time-functions/timestampadd","permalink":"/docs/2.0/sql-manual/sql-functions/date-time-functions/timestampadd","draft":false,"unlisted":false,"tags":[],"version":"2.0","frontMatter":{"title":"TIMESTAMPADD","language":"en"},"sidebar":"docs","previous":{"title":"TIMEDIFF","permalink":"/docs/2.0/sql-manual/sql-functions/date-time-functions/timediff"},"next":{"title":"TIMESTAMPDIFF","permalink":"/docs/2.0/sql-manual/sql-functions/date-time-functions/timestampdiff"}}'),s=t("785893"),a=t("250065");let d={title:"TIMESTAMPADD",language:"en"},l=void 0,o={},r=[{value:"timestampadd",id:"timestampadd",level:2},{value:"description",id:"description",level:3},{value:"Syntax",id:"syntax",level:4},{value:"example",id:"example",level:3},{value:"keywords",id:"keywords",level:3}];function c(e){let n={code:"code",h2:"h2",h3:"h3",h4:"h4",p:"p",pre:"pre",...(0,a.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h2,{id:"timestampadd",children:"timestampadd"}),"\n",(0,s.jsx)(n.h3,{id:"description",children:"description"}),"\n",(0,s.jsx)(n.h4,{id:"syntax",children:"Syntax"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.code,{children:"DATETIME TIMESTAMPADD(unit, interval, DATETIME datetime_expr)"})}),"\n",(0,s.jsx)(n.p,{children:"Adds the integer expression interval to the date or datetime expression datetime_expr."}),"\n",(0,s.jsx)(n.p,{children:"The unit for interval is given by the unit argument, which should be one of the following values:"}),"\n",(0,s.jsx)(n.p,{children:"SECOND, MINUTE, HOUR, DAY, WEEK, MONTH, or YEAR."}),"\n",(0,s.jsx)(n.h3,{id:"example",children:"example"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"\nmysql> SELECT TIMESTAMPADD(MINUTE,1,'2019-01-02');\n+------------------------------------------------+\n| timestampadd(MINUTE, 1, '2019-01-02 00:00:00') |\n+------------------------------------------------+\n| 2019-01-02 00:01:00                            |\n+------------------------------------------------+\n\nmysql> SELECT TIMESTAMPADD(WEEK,1,'2019-01-02');\n+----------------------------------------------+\n| timestampadd(WEEK, 1, '2019-01-02 00:00:00') |\n+----------------------------------------------+\n| 2019-01-09 00:00:00                          |\n+----------------------------------------------+\n"})}),"\n",(0,s.jsx)(n.h3,{id:"keywords",children:"keywords"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"TIMESTAMPADD\n"})})]})}function u(e={}){let{wrapper:n}={...(0,a.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}},250065:function(e,n,t){t.d(n,{Z:function(){return l},a:function(){return d}});var i=t(667294);let s={},a=i.createContext(s);function d(e){let n=i.useContext(a);return i.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:d(e.components),i.createElement(a.Provider,{value:n},e.children)}}}]);