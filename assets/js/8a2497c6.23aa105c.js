"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["191018"],{975924:function(e,n,t){t.r(n),t.d(n,{default:()=>h,frontMatter:()=>i,metadata:()=>s,assets:()=>d,toc:()=>c,contentTitle:()=>r});var s=JSON.parse('{"id":"sql-manual/sql-statements/database/SHOW-DATABASES","title":"SHOW DATABASES","description":"\x3c!--","source":"@site/versioned_docs/version-3.0/sql-manual/sql-statements/database/SHOW-DATABASES.md","sourceDirName":"sql-manual/sql-statements/database","slug":"/sql-manual/sql-statements/database/SHOW-DATABASES","permalink":"/docs/3.0/sql-manual/sql-statements/database/SHOW-DATABASES","draft":false,"unlisted":false,"tags":[],"version":"3.0","frontMatter":{"title":"SHOW DATABASES","language":"en"},"sidebar":"docs","previous":{"title":"SHOW CREATE DATABASE","permalink":"/docs/3.0/sql-manual/sql-statements/database/SHOW-CREATE-DATABASE"},"next":{"title":"SHOW DATABASE ID","permalink":"/docs/3.0/sql-manual/sql-statements/database/SHOW-DATABASE-ID"}}'),l=t("785893"),a=t("250065");let i={title:"SHOW DATABASES",language:"en"},r=void 0,d={},c=[{value:"Description",id:"description",level:2},{value:"Syntax",id:"syntax",level:2},{value:"Optional parameters",id:"optional-parameters",level:2},{value:"Return Value",id:"return-value",level:2},{value:"Permission Control",id:"permission-control",level:2},{value:"\u793A\u4F8B",id:"\u793A\u4F8B",level:2}];function o(e){let n={blockquote:"blockquote",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,a.a)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,l.jsx)(n.p,{children:"This statement is used to display the currently visible database."}),"\n",(0,l.jsx)(n.h2,{id:"syntax",children:"Syntax"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-sql",children:"SHOW DATABASES [FROM <catalog>] [<filter_expr>];\n"})}),"\n",(0,l.jsx)(n.h2,{id:"optional-parameters",children:"Optional parameters"}),"\n",(0,l.jsxs)(n.p,{children:["** 1. ",(0,l.jsx)(n.code,{children:"<catalog>"}),"**"]}),"\n",(0,l.jsxs)(n.blockquote,{children:["\n",(0,l.jsx)(n.p,{children:"Corresponding catalog"}),"\n"]}),"\n",(0,l.jsxs)(n.p,{children:["** 2. ",(0,l.jsx)(n.code,{children:"<filter_expr>"}),"**"]}),"\n",(0,l.jsxs)(n.blockquote,{children:["\n",(0,l.jsx)(n.p,{children:"Filter by specified conditions"}),"\n"]}),"\n",(0,l.jsx)(n.h2,{id:"return-value",children:"Return Value"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,l.jsxs)(n.table,{children:[(0,l.jsx)(n.thead,{children:(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.th,{style:{textAlign:"left"},children:"Column"}),(0,l.jsx)(n.th,{style:{textAlign:"left"},children:"Description"})]})}),(0,l.jsx)(n.tbody,{children:(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{style:{textAlign:"left"},children:"Database"}),(0,l.jsx)(n.td,{style:{textAlign:"left"},children:"Database Name"})]})})]}),"\n",(0,l.jsx)(n.h2,{id:"permission-control",children:"Permission Control"}),"\n",(0,l.jsx)(n.p,{children:"The user executing this SQL command must have at least the following permissions:"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,l.jsxs)(n.table,{children:[(0,l.jsx)(n.thead,{children:(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.th,{style:{textAlign:"left"},children:"Permissions"}),(0,l.jsx)(n.th,{style:{textAlign:"left"},children:"Object"}),(0,l.jsx)(n.th,{style:{textAlign:"left"},children:"Notes"})]})}),(0,l.jsx)(n.tbody,{children:(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{style:{textAlign:"left"},children:"SELECT_PRIV"}),(0,l.jsx)(n.td,{style:{textAlign:"left"},children:"Corresponding database"}),(0,l.jsx)(n.td,{style:{textAlign:"left"},children:"Requires read permission on the corresponding database"})]})})]}),"\n",(0,l.jsx)(n.h2,{id:"\u793A\u4F8B",children:"\u793A\u4F8B"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsx)(n.p,{children:"Displays the names of all current databases."}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-sql",children:"SHOW DATABASES;\n"})}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-text",children:"+--------------------+\n| Database           |\n+--------------------+\n| test               |\n| information_schema |\n+--------------------+\n"})}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsxs)(n.p,{children:["Will display all database names in ",(0,l.jsx)(n.code,{children:"hms_catalog"}),"."]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-sql",children:"SHOW DATABASES FROM hms_catalog;\n"})}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-text",children:"+---------------+\n| Database      |\n+---------------+\n| default       |\n| tpch          |\n+---------------+\n"})}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsxs)(n.p,{children:["Displays the names of all databases currently filtered by the expression ",(0,l.jsx)(n.code,{children:"like 'infor%'"}),"."]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-sql",children:"SHOW DATABASES like 'infor%';\n"})}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-text",children:"+--------------------+\n| Database           |\n+--------------------+\n| information_schema |\n+--------------------+\n"})}),"\n"]}),"\n"]})]})}function h(e={}){let{wrapper:n}={...(0,a.a)(),...e.components};return n?(0,l.jsx)(n,{...e,children:(0,l.jsx)(o,{...e})}):o(e)}},250065:function(e,n,t){t.d(n,{Z:function(){return r},a:function(){return i}});var s=t(667294);let l={},a=s.createContext(l);function i(e){let n=s.useContext(a);return s.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:i(e.components),s.createElement(a.Provider,{value:n},e.children)}}}]);