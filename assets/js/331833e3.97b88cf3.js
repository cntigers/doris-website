"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["645234"],{959819:function(e,t,n){n.r(t),n.d(t,{default:()=>h,frontMatter:()=>i,metadata:()=>l,assets:()=>d,toc:()=>o,contentTitle:()=>r});var l=JSON.parse('{"id":"sql-manual/sql-statements/data-modification/load-and-export/CLEAN-LABEL","title":"CLEAN LABEL","description":"\x3c!--","source":"@site/versioned_docs/version-3.0/sql-manual/sql-statements/data-modification/load-and-export/CLEAN-LABEL.md","sourceDirName":"sql-manual/sql-statements/data-modification/load-and-export","slug":"/sql-manual/sql-statements/data-modification/load-and-export/CLEAN-LABEL","permalink":"/docs/3.0/sql-manual/sql-statements/data-modification/load-and-export/CLEAN-LABEL","draft":false,"unlisted":false,"tags":[],"version":"3.0","frontMatter":{"title":"CLEAN LABEL","language":"en"},"sidebar":"docs","previous":{"title":"OUTFILE","permalink":"/docs/3.0/sql-manual/sql-statements/data-modification/load-and-export/OUTFILE"},"next":{"title":"CREATE REPOSITORY","permalink":"/docs/3.0/sql-manual/sql-statements/data-modification/backup-and-restore/CREATE-REPOSITORY"}}'),a=n("785893"),s=n("250065");let i={title:"CLEAN LABEL",language:"en"},r=void 0,d={},o=[{value:"Description",id:"description",level:2},{value:"Syntax",id:"syntax",level:2},{value:"Required Parameters",id:"required-parameters",level:2},{value:"Optional Parameters",id:"optional-parameters",level:2},{value:"Access Control Requirements",id:"access-control-requirements",level:2},{value:"Examples",id:"examples",level:2}];function c(e){let t={br:"br",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,s.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t.h2,{id:"description",children:"Description"}),"\n",(0,a.jsx)(t.p,{children:"Used to manually clean up the labels of historical import jobs. After cleaning up, the labels can be reused.\nCommonly used in some automatic import tasks set by programs. When repeated execution, set the label of the imported fixed string.\nBefore each import task is initiated, execute the statement to clean up the label."}),"\n",(0,a.jsx)(t.h2,{id:"syntax",children:"Syntax"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-sql",children:"CLEAN LABEL [ <label> ] FROM <db_name>;\n"})}),"\n",(0,a.jsx)(t.h2,{id:"required-parameters",children:"Required Parameters"}),"\n",(0,a.jsxs)(t.p,{children:[(0,a.jsxs)(t.strong,{children:["1. ",(0,a.jsx)(t.code,{children:"<db_name>"})]}),(0,a.jsx)(t.br,{}),"\nlabel The name of the library."]}),"\n",(0,a.jsx)(t.h2,{id:"optional-parameters",children:"Optional Parameters"}),"\n",(0,a.jsxs)(t.p,{children:[(0,a.jsxs)(t.strong,{children:["1. ",(0,a.jsx)(t.code,{children:"<label>"})]}),(0,a.jsx)(t.br,{}),"\nThe label to be cleaned. If omitted, the default is all labels in the current database."]}),"\n",(0,a.jsx)(t.h2,{id:"access-control-requirements",children:"Access Control Requirements"}),"\n",(0,a.jsx)(t.p,{children:"The user executing this SQL command must have at least the following privileges:"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,a.jsxs)(t.table,{children:[(0,a.jsx)(t.thead,{children:(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.th,{style:{textAlign:"left"},children:"Privilege"}),(0,a.jsx)(t.th,{style:{textAlign:"left"},children:"Object"}),(0,a.jsx)(t.th,{style:{textAlign:"left"},children:"Notes"})]})}),(0,a.jsx)(t.tbody,{children:(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.td,{style:{textAlign:"left"},children:"ALTER_PRIV"}),(0,a.jsx)(t.td,{style:{textAlign:"left"},children:"Database"}),(0,a.jsx)(t.td,{style:{textAlign:"left"},children:"Requires modification access to the database."})]})})]}),"\n",(0,a.jsx)(t.h2,{id:"examples",children:"Examples"}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsxs)(t.li,{children:["\n",(0,a.jsx)(t.p,{children:"Clean label label1 from database db1"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-sql",children:"CLEAN LABEL label1 FROM db1;\n"})}),"\n"]}),"\n",(0,a.jsxs)(t.li,{children:["\n",(0,a.jsx)(t.p,{children:"Clean all labels from database db1"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-sql",children:"CLEAN LABEL FROM db1;\n"})}),"\n"]}),"\n"]})]})}function h(e={}){let{wrapper:t}={...(0,s.a)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(c,{...e})}):c(e)}},250065:function(e,t,n){n.d(t,{Z:function(){return r},a:function(){return i}});var l=n(667294);let a={},s=l.createContext(a);function i(e){let t=l.useContext(s);return l.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:i(e.components),l.createElement(s.Provider,{value:t},e.children)}}}]);