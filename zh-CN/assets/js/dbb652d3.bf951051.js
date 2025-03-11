"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["367732"],{425443:function(n,s,e){e.r(s),e.d(s,{default:()=>d,frontMatter:()=>i,metadata:()=>t,assets:()=>o,toc:()=>c,contentTitle:()=>r});var t=JSON.parse('{"id":"sql-manual/sql-functions/string-functions/mask/mask-last-n","title":"MASK_LAST_N","description":"\x3c!--","source":"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-2.0/sql-manual/sql-functions/string-functions/mask/mask-last-n.md","sourceDirName":"sql-manual/sql-functions/string-functions/mask","slug":"/sql-manual/sql-functions/string-functions/mask/mask-last-n","permalink":"/zh-CN/docs/2.0/sql-manual/sql-functions/string-functions/mask/mask-last-n","draft":false,"unlisted":false,"tags":[],"version":"2.0","frontMatter":{"title":"MASK_LAST_N","language":"zh-CN"},"sidebar":"docs","previous":{"title":"MASK_FIRST_N","permalink":"/zh-CN/docs/2.0/sql-manual/sql-functions/string-functions/mask/mask-first-n"},"next":{"title":"LIKE","permalink":"/zh-CN/docs/2.0/sql-manual/sql-functions/string-functions/like/"}}'),l=e("785893"),a=e("250065");let i={title:"MASK_LAST_N",language:"zh-CN"},r=void 0,o={},c=[{value:"mask_last_n",id:"mask_last_n",level:2},{value:"\u63CF\u8FF0",id:"\u63CF\u8FF0",level:2},{value:"\u8BED\u6CD5",id:"\u8BED\u6CD5",level:2},{value:"\u4E3E\u4F8B",id:"\u4E3E\u4F8B",level:2},{value:"keywords",id:"keywords",level:3}];function u(n){let s={code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",...(0,a.a)(),...n.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(s.h2,{id:"mask_last_n",children:"mask_last_n"}),"\n",(0,l.jsx)(s.h2,{id:"\u63CF\u8FF0",children:"\u63CF\u8FF0"}),"\n",(0,l.jsx)(s.h2,{id:"\u8BED\u6CD5",children:"\u8BED\u6CD5"}),"\n",(0,l.jsx)(s.p,{children:(0,l.jsx)(s.code,{children:"VARCHAR mask_last_n(VARCHAR str[, INT n])"})}),"\n",(0,l.jsx)(s.p,{children:'\u8FD4\u56DE str \u7684\u63A9\u7801\u7248\u672C\uFF0C\u5176\u4E2D\u6700\u540E n \u4E2A\u5B57\u7B26\u88AB\u8F6C\u6362\u4E3A\u63A9\u7801\u3002 \u5927\u5199\u5B57\u6BCD\u8F6C\u6362\u4E3A\u201CX\u201D\uFF0C\u5C0F\u5199\u5B57\u6BCD\u8F6C\u6362\u4E3A\u201Cx\u201D\uFF0C\u6570\u5B57\u8F6C\u6362\u4E3A\u201Cn\u201D\u3002 \u4F8B\u5982\uFF0Cmask_last_n("1234-5678-8765-4321", 4) \u7ED3\u679C\u4E3A 1234-5678-8765-nnnn\u3002'}),"\n",(0,l.jsx)(s.h2,{id:"\u4E3E\u4F8B",children:"\u4E3E\u4F8B"}),"\n",(0,l.jsx)(s.pre,{children:(0,l.jsx)(s.code,{children:"// table test\n+-----------+\n| name      |\n+-----------+\n| abc123EFG |\n| NULL      |\n| 456AbCdEf |\n+-----------+\n\nmysql> select mask_last_n(name, 5) from test;\n+------------------------+\n| mask_last_n(`name`, 5) |\n+------------------------+\n| abc1nnXXX              |\n| NULL                   |\n| 456AxXxXx              |\n+------------------------+\n"})}),"\n",(0,l.jsx)(s.h3,{id:"keywords",children:"keywords"}),"\n",(0,l.jsx)(s.pre,{children:(0,l.jsx)(s.code,{children:"mask_last_n\n"})})]})}function d(n={}){let{wrapper:s}={...(0,a.a)(),...n.components};return s?(0,l.jsx)(s,{...n,children:(0,l.jsx)(u,{...n})}):u(n)}},250065:function(n,s,e){e.d(s,{Z:function(){return r},a:function(){return i}});var t=e(667294);let l={},a=t.createContext(l);function i(n){let s=t.useContext(a);return t.useMemo(function(){return"function"==typeof n?n(s):{...s,...n}},[s,n])}function r(n){let s;return s=n.disableParentContext?"function"==typeof n.components?n.components(l):n.components||l:i(n.components),t.createElement(a.Provider,{value:s},n.children)}}}]);