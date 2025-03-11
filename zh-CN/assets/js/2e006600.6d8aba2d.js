"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["930485"],{24683:function(e,n,t){t.r(n),t.d(n,{default:()=>u,frontMatter:()=>l,metadata:()=>s,assets:()=>r,toc:()=>c,contentTitle:()=>d});var s=JSON.parse('{"id":"sql-manual/sql-data-types/date-time/TIME","title":"TIME","description":"\x3c!--","source":"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/sql-manual/sql-data-types/date-time/TIME.md","sourceDirName":"sql-manual/sql-data-types/date-time","slug":"/sql-manual/sql-data-types/date-time/TIME","permalink":"/zh-CN/docs/dev/sql-manual/sql-data-types/date-time/TIME","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"title":"TIME","language":"zh-CN"},"sidebar":"docs","previous":{"title":"DATE","permalink":"/zh-CN/docs/dev/sql-manual/sql-data-types/date-time/DATE"},"next":{"title":"DATETIME","permalink":"/zh-CN/docs/dev/sql-manual/sql-data-types/date-time/DATETIME"}}'),a=t("785893"),i=t("250065");let l={title:"TIME",language:"zh-CN"},d=void 0,r={},c=[{value:"TIME",id:"time",level:2},{value:"name",id:"name",level:3},{value:"\u63CF\u8FF0",id:"\u63CF\u8FF0",level:2},{value:"\u4E3E\u4F8B",id:"\u4E3E\u4F8B",level:2},{value:"keywords",id:"keywords",level:3}];function o(e){let n={code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",strong:"strong",...(0,i.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.h2,{id:"time",children:"TIME"}),"\n",(0,a.jsx)(n.h3,{id:"name",children:"name"}),"\n",(0,a.jsx)(n.p,{children:"TIME"}),"\n",(0,a.jsx)(n.h2,{id:"\u63CF\u8FF0",children:"\u63CF\u8FF0"}),"\n",(0,a.jsxs)(n.p,{children:["TIME \u7C7B\u578B\n\u65F6\u95F4\u7C7B\u578B\uFF0C\u53EF\u4EE5\u4F5C\u4E3A\u67E5\u8BE2\u7ED3\u679C\u51FA\u73B0\uFF0C\u6682\u65F6\u4E0D\u652F\u6301\u5EFA\u8868\u5B58\u50A8\u3002\u8868\u793A\u8303\u56F4\u4E3A ",(0,a.jsx)(n.code,{children:"[-838:59:59, 838:59:59]"}),"\u3002\n\u5F53\u524D Doris \u4E2D\uFF0CTIME \u4F5C\u4E3A\u8BA1\u7B97\u7ED3\u679C\u7684\u6B63\u786E\u6027\u662F\u6709\u4FDD\u8BC1\u7684\uFF08\u5982 ",(0,a.jsx)(n.code,{children:"timediff"})," \u7B49\u51FD\u6570\uFF09\uFF0C\u4F46",(0,a.jsx)(n.strong,{children:"\u4E0D\u63A8\u8350\u624B\u52A8 CAST \u4EA7\u751F TIME \u7C7B\u578B"}),"\u3002\nTIME \u7C7B\u578B\u4E0D\u4F1A\u5728\u5E38\u91CF\u6298\u53E0\u4E2D\u8FDB\u884C\u8BA1\u7B97\u3002"]}),"\n",(0,a.jsx)(n.h2,{id:"\u4E3E\u4F8B",children:"\u4E3E\u4F8B"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-sql",children:"mysql> select timediff('2020-01-01 12:05:03', '2020-01-01 08:02:15');\n+------------------------------------------------------------------------------------------------------+\n| timediff(cast('2020-01-01 12:05:03' as DATETIMEV2(0)), cast('2020-01-01 08:02:15' as DATETIMEV2(0))) |\n+------------------------------------------------------------------------------------------------------+\n| 04:02:48                                                                                             |\n+------------------------------------------------------------------------------------------------------+\n1 row in set (0.12 sec)\n\nmysql> select timediff('2020-01-01', '2000-01-01');\n+------------------------------------------------------------------------------------+\n| timediff(cast('2020-01-01' as DATETIMEV2(0)), cast('2000-01-01' as DATETIMEV2(0))) |\n+------------------------------------------------------------------------------------+\n| 838:59:59                                                                          |\n+------------------------------------------------------------------------------------+\n1 row in set (0.11 sec)\n"})}),"\n",(0,a.jsx)(n.h3,{id:"keywords",children:"keywords"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{children:"TIME\n"})})]})}function u(e={}){let{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(o,{...e})}):o(e)}},250065:function(e,n,t){t.d(n,{Z:function(){return d},a:function(){return l}});var s=t(667294);let a={},i=s.createContext(a);function l(e){let n=s.useContext(i);return s.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:l(e.components),s.createElement(i.Provider,{value:n},e.children)}}}]);