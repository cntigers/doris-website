"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["111324"],{309926:function(e,n,t){t.r(n),t.d(n,{default:()=>h,frontMatter:()=>i,metadata:()=>s,assets:()=>d,toc:()=>c,contentTitle:()=>r});var s=JSON.parse('{"id":"sql-manual/sql-statements/database/SHOW-DATABASE-ID","title":"SHOW-DATABASE-ID","description":"\x3c!--","source":"@site/versioned_docs/version-2.1/sql-manual/sql-statements/database/SHOW-DATABASE-ID.md","sourceDirName":"sql-manual/sql-statements/database","slug":"/sql-manual/sql-statements/database/SHOW-DATABASE-ID","permalink":"/docs/sql-manual/sql-statements/database/SHOW-DATABASE-ID","draft":false,"unlisted":false,"tags":[],"version":"2.1","frontMatter":{"title":"SHOW-DATABASE-ID","language":"en"},"sidebar":"docs","previous":{"title":"SHOW DATABASES","permalink":"/docs/sql-manual/sql-statements/database/SHOW-DATABASES"},"next":{"title":"CREATE TABLE","permalink":"/docs/sql-manual/sql-statements/table-and-view/table/CREATE-TABLE"}}'),l=t("785893"),a=t("250065");let i={title:"SHOW-DATABASE-ID",language:"en"},r=void 0,d={},c=[{value:"Description",id:"description",level:3},{value:"Syntax",id:"syntax",level:2},{value:"Required parameters",id:"required-parameters",level:2},{value:"Return Value",id:"return-value",level:2},{value:"Permission Control",id:"permission-control",level:2},{value:"Example",id:"example",level:2}];function o(e){let n={blockquote:"blockquote",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,a.a)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(n.h3,{id:"description",children:"Description"}),"\n",(0,l.jsx)(n.p,{children:"This statement is used to find the corresponding database name based on the database id (only used by administrators)"}),"\n",(0,l.jsx)(n.h2,{id:"syntax",children:"Syntax"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-sql",children:"SHOW DATABASE <database_id>\n"})}),"\n",(0,l.jsx)(n.h2,{id:"required-parameters",children:"Required parameters"}),"\n",(0,l.jsxs)(n.p,{children:["** 1. ",(0,l.jsx)(n.code,{children:"<database_id>"}),"**"]}),"\n",(0,l.jsxs)(n.blockquote,{children:["\n",(0,l.jsx)(n.p,{children:"Database corresponding id number"}),"\n"]}),"\n",(0,l.jsx)(n.h2,{id:"return-value",children:"Return Value"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,l.jsxs)(n.table,{children:[(0,l.jsx)(n.thead,{children:(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.th,{style:{textAlign:"left"},children:"Column"}),(0,l.jsx)(n.th,{style:{textAlign:"left"},children:"Description"})]})}),(0,l.jsx)(n.tbody,{children:(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{style:{textAlign:"left"},children:"DbName"}),(0,l.jsx)(n.td,{style:{textAlign:"left"},children:"Database Name"})]})})]}),"\n",(0,l.jsx)(n.h2,{id:"permission-control",children:"Permission Control"}),"\n",(0,l.jsx)(n.p,{children:"The user executing this SQL command must have at least the following permissions:"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,l.jsxs)(n.table,{children:[(0,l.jsx)(n.thead,{children:(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.th,{style:{textAlign:"left"},children:"Permissions"}),(0,l.jsx)(n.th,{style:{textAlign:"left"},children:"Object"}),(0,l.jsx)(n.th,{style:{textAlign:"left"},children:"Notes"})]})}),(0,l.jsx)(n.tbody,{children:(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{style:{textAlign:"left"},children:"ADMIN_PRIV"}),(0,l.jsx)(n.td,{style:{textAlign:"left"},children:"The entire cluster"}),(0,l.jsx)(n.td,{style:{textAlign:"left"},children:"Requires administrative privileges for the entire cluster"})]})})]}),"\n",(0,l.jsx)(n.h2,{id:"example",children:"Example"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsx)(n.p,{children:"Find the corresponding database name according to the database id"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-sql",children:"SHOW DATABASE 10396;\n"})}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-text",children:"+------------+\n| DbName     |\n+------------+\n| example_db |\n+------------+\n"})}),"\n"]}),"\n"]})]})}function h(e={}){let{wrapper:n}={...(0,a.a)(),...e.components};return n?(0,l.jsx)(n,{...e,children:(0,l.jsx)(o,{...e})}):o(e)}},250065:function(e,n,t){t.d(n,{Z:function(){return r},a:function(){return i}});var s=t(667294);let l={},a=s.createContext(l);function i(e){let n=s.useContext(a);return s.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:i(e.components),s.createElement(a.Provider,{value:n},e.children)}}}]);