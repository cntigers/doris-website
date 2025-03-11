"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["726566"],{98602:function(e,n,t){t.r(n),t.d(n,{default:()=>f,frontMatter:()=>a,metadata:()=>s,assets:()=>o,toc:()=>c,contentTitle:()=>l});var s=JSON.parse('{"id":"sql-manual/sql-functions/date-time-functions/days-diff","title":"DAYS_DIFF","description":"\x3c!--","source":"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-2.0/sql-manual/sql-functions/date-time-functions/days-diff.md","sourceDirName":"sql-manual/sql-functions/date-time-functions","slug":"/sql-manual/sql-functions/date-time-functions/days-diff","permalink":"/zh-CN/docs/2.0/sql-manual/sql-functions/date-time-functions/days-diff","draft":false,"unlisted":false,"tags":[],"version":"2.0","frontMatter":{"title":"DAYS_DIFF","language":"zh-CN"},"sidebar":"docs","previous":{"title":"DAYS_ADD","permalink":"/zh-CN/docs/2.0/sql-manual/sql-functions/date-time-functions/days-add"},"next":{"title":"DAYS_SUB","permalink":"/zh-CN/docs/2.0/sql-manual/sql-functions/date-time-functions/days-sub"}}'),i=t("785893"),d=t("250065");let a={title:"DAYS_DIFF",language:"zh-CN"},l=void 0,o={},c=[{value:"days_diff",id:"days_diff",level:2},{value:"\u63CF\u8FF0",id:"\u63CF\u8FF0",level:2},{value:"\u8BED\u6CD5",id:"\u8BED\u6CD5",level:2},{value:"\u4E3E\u4F8B",id:"\u4E3E\u4F8B",level:2},{value:"keywords",id:"keywords",level:3}];function r(e){let n={code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",...(0,d.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h2,{id:"days_diff",children:"days_diff"}),"\n",(0,i.jsx)(n.h2,{id:"\u63CF\u8FF0",children:"\u63CF\u8FF0"}),"\n",(0,i.jsx)(n.h2,{id:"\u8BED\u6CD5",children:"\u8BED\u6CD5"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.code,{children:"INT days_diff(DATETIME enddate, DATETIME startdate)"})}),"\n",(0,i.jsx)(n.p,{children:"\u5F00\u59CB\u65F6\u95F4\u5230\u7ED3\u675F\u65F6\u95F4\u76F8\u5DEE\u51E0\u5929\uFF0C\u5BF9\u65E5\u671F\u7684\u5224\u65AD\u7CBE\u786E\u5230\u79D2\uFF0C\u5E76\u5411\u4E0B\u53D6\u6574\u6570\u3002\n\u533A\u522B\u4E8Edatediff\uFF0Cdatediff\u51FD\u6570\u5BF9\u65E5\u671F\u7684\u5224\u65AD\u7CBE\u786E\u5230\u5929\u3002"}),"\n",(0,i.jsx)(n.h2,{id:"\u4E3E\u4F8B",children:"\u4E3E\u4F8B"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"mysql> select days_diff('2020-12-25 22:00:00','2020-12-24 22:00:00');\n+---------------------------------------------------------+\n| days_diff('2020-12-25 22:00:00', '2020-12-24 22:00:00') |\n+---------------------------------------------------------+\n|                                                       1 |\n+---------------------------------------------------------+\n\nmysql> select days_diff('2020-12-25 22:00:00','2020-12-24 22:00:01');\n+---------------------------------------------------------+\n| days_diff('2020-12-24 22:00:01', '2020-12-25 22:00:00') |\n+---------------------------------------------------------+\n|                                                       0 |\n+---------------------------------------------------------+\n"})}),"\n",(0,i.jsx)(n.h3,{id:"keywords",children:"keywords"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"days_diff\n"})})]})}function f(e={}){let{wrapper:n}={...(0,d.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(r,{...e})}):r(e)}},250065:function(e,n,t){t.d(n,{Z:function(){return l},a:function(){return a}});var s=t(667294);let i={},d=s.createContext(i);function a(e){let n=s.useContext(d);return s.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:a(e.components),s.createElement(d.Provider,{value:n},e.children)}}}]);