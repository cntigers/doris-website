"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["2818"],{109570:function(e,t,n){n.r(t),n.d(t,{default:()=>h,frontMatter:()=>r,metadata:()=>s,assets:()=>d,toc:()=>c,contentTitle:()=>a});var s=JSON.parse('{"id":"sql-manual/sql-statements/security/SHOW-FILE","title":"SHOW FILE","description":"\x3c!--","source":"@site/versioned_docs/version-2.1/sql-manual/sql-statements/security/SHOW-FILE.md","sourceDirName":"sql-manual/sql-statements/security","slug":"/sql-manual/sql-statements/security/SHOW-FILE","permalink":"/docs/sql-manual/sql-statements/security/SHOW-FILE","draft":false,"unlisted":false,"tags":[],"version":"2.1","frontMatter":{"title":"SHOW FILE","language":"en"},"sidebar":"docs","previous":{"title":"DROP FILE","permalink":"/docs/sql-manual/sql-statements/security/DROP-FILE"},"next":{"title":"CREATE ENCRYPTKEY","permalink":"/docs/sql-manual/sql-statements/security/CREATE-ENCRYPTKEY"}}'),l=n("785893"),i=n("250065");let r={title:"SHOW FILE",language:"en"},a=void 0,d={},c=[{value:"Description",id:"description",level:2},{value:"Syntax",id:"syntax",level:2},{value:"Optional Parameters",id:"optional-parameters",level:2},{value:"Return Value",id:"return-value",level:2},{value:"Access Control Requirements",id:"access-control-requirements",level:2},{value:"Example",id:"example",level:2}];function o(e){let t={blockquote:"blockquote",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.a)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(t.h2,{id:"description",children:"Description"}),"\n",(0,l.jsx)(t.p,{children:"This statement is used to display a file created in a database."}),"\n",(0,l.jsx)(t.h2,{id:"syntax",children:"Syntax"}),"\n",(0,l.jsx)(t.pre,{children:(0,l.jsx)(t.code,{className:"language-sql",children:"SHOW FILE { [ FROM | IN ] <database_name>}\n"})}),"\n",(0,l.jsx)(t.h2,{id:"optional-parameters",children:"Optional Parameters"}),"\n",(0,l.jsx)(t.p,{children:(0,l.jsxs)(t.strong,{children:["1. ",(0,l.jsx)(t.code,{children:"<database_name>"})]})}),"\n",(0,l.jsxs)(t.blockquote,{children:["\n",(0,l.jsx)(t.p,{children:"Specifies the database to which the file belongs. Uses the current session's database if not specified."}),"\n"]}),"\n",(0,l.jsx)(t.h2,{id:"return-value",children:"Return Value"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,l.jsxs)(t.table,{children:[(0,l.jsx)(t.thead,{children:(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.th,{style:{textAlign:"left"},children:"Column"}),(0,l.jsx)(t.th,{style:{textAlign:"left"},children:"Description"})]})}),(0,l.jsxs)(t.tbody,{children:[(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"left"},children:(0,l.jsx)(t.code,{children:"FileId"})}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"Globally unique file identifier"})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"left"},children:(0,l.jsx)(t.code,{children:"DbName"})}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"Name of the owning database"})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"left"},children:(0,l.jsx)(t.code,{children:"Catalog"})}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"User-defined classification"})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"left"},children:(0,l.jsx)(t.code,{children:"FileName"})}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"Name of the file"})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"left"},children:(0,l.jsx)(t.code,{children:"FileSize"})}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"File size in bytes"})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"left"},children:(0,l.jsx)(t.code,{children:"IsContent"})}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"Content existence flag"})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"left"},children:(0,l.jsx)(t.code,{children:"MD5"})}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"MD5 checksum of the file"})]})]})]}),"\n",(0,l.jsx)(t.h2,{id:"access-control-requirements",children:"Access Control Requirements"}),"\n",(0,l.jsx)(t.p,{children:"The user executing this SQL command must possess the following minimum privileges:"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,l.jsxs)(t.table,{children:[(0,l.jsx)(t.thead,{children:(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.th,{style:{textAlign:"left"},children:"Privilege"}),(0,l.jsx)(t.th,{style:{textAlign:"left"},children:"Object"}),(0,l.jsx)(t.th,{style:{textAlign:"left"},children:"Notes"})]})}),(0,l.jsx)(t.tbody,{children:(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"left"},children:(0,l.jsx)(t.code,{children:"ADMIN_PRIV"})}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"User / Role"}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"The user or role must have access privileges to the database where the file resides to execute this command"})]})})]}),"\n",(0,l.jsx)(t.h2,{id:"example",children:"Example"}),"\n",(0,l.jsxs)(t.ul,{children:["\n",(0,l.jsxs)(t.li,{children:["\n",(0,l.jsx)(t.p,{children:"View uploaded files in the current session database"}),"\n",(0,l.jsx)(t.pre,{children:(0,l.jsx)(t.code,{className:"language-sql",children:"SHOW FILE;\n"})}),"\n",(0,l.jsx)(t.pre,{children:(0,l.jsx)(t.code,{className:"language-text",children:"+-------+--------+----------+--------------------------+----------+-----------+----------------------------------+\n| Id    | DbName | Catalog  | FileName                 | FileSize | IsContent | MD5                              |\n+-------+--------+----------+--------------------------+----------+-----------+----------------------------------+\n| 12006 | testdb | doris_be | doris_be_metadata_layout | 89349    | true      | 9a3f68160b4106b0e923a0aa2fc05599 |\n+-------+--------+----------+--------------------------+----------+-----------+----------------------------------+\n"})}),"\n"]}),"\n",(0,l.jsxs)(t.li,{children:["\n",(0,l.jsx)(t.p,{children:"View uploaded files in specified database"}),"\n",(0,l.jsx)(t.pre,{children:(0,l.jsx)(t.code,{className:"language-sql",children:"SHOW FILE FROM example_db;\n"})}),"\n",(0,l.jsx)(t.pre,{children:(0,l.jsx)(t.code,{className:"language-text",children:"+-------+------------+----------+--------------------------+----------+-----------+----------------------------------+\n| Id    | DbName     | Catalog  | FileName                 | FileSize | IsContent | MD5                              |\n+-------+------------+----------+--------------------------+----------+-----------+----------------------------------+\n| 12007 | example_db | doris_fe | doris_fe_metadata_layout | 569373   | true      | 10385505d3c0d03f085fea6f8d51adfa |\n| 12008 | example_db | doris_be | doris_be_metadata_layout | 89349    | true      | 9a3f68160b4106b0e923a0aa2fc05599 |\n+-------+------------+----------+--------------------------+----------+-----------+----------------------------------+\n"})}),"\n"]}),"\n"]})]})}function h(e={}){let{wrapper:t}={...(0,i.a)(),...e.components};return t?(0,l.jsx)(t,{...e,children:(0,l.jsx)(o,{...e})}):o(e)}},250065:function(e,t,n){n.d(t,{Z:function(){return a},a:function(){return r}});var s=n(667294);let l={},i=s.createContext(l);function r(e){let t=s.useContext(i);return s.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:r(e.components),s.createElement(i.Provider,{value:t},e.children)}}}]);