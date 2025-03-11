"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["31345"],{681466:function(e,t,n){n.r(t),n.d(t,{default:()=>u,frontMatter:()=>a,metadata:()=>s,assets:()=>c,toc:()=>o,contentTitle:()=>i});var s=JSON.parse('{"id":"sql-manual/sql-statements/data-governance/DROP-SQL_BLOCK_RULE","title":"DROP SQL_BLOCK_RULE","description":"\x3c!--","source":"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-3.0/sql-manual/sql-statements/data-governance/DROP-SQL_BLOCK_RULE.md","sourceDirName":"sql-manual/sql-statements/data-governance","slug":"/sql-manual/sql-statements/data-governance/DROP-SQL_BLOCK_RULE","permalink":"/zh-CN/docs/3.0/sql-manual/sql-statements/data-governance/DROP-SQL_BLOCK_RULE","draft":false,"unlisted":false,"tags":[],"version":"3.0","frontMatter":{"title":"DROP SQL_BLOCK_RULE","language":"en"},"sidebar":"docs","previous":{"title":"ALTER SQL_BLOCK_RULE","permalink":"/zh-CN/docs/3.0/sql-manual/sql-statements/data-governance/ALTER-SQL_BLOCK_RULE"},"next":{"title":"SHOW SQL_BLOCK_RULE","permalink":"/zh-CN/docs/3.0/sql-manual/sql-statements/data-governance/SHOW-SQL_BLOCK_RULE"}}'),l=n("785893"),r=n("250065");let a={title:"DROP SQL_BLOCK_RULE",language:"en"},i=void 0,c={},o=[{value:"Description",id:"description",level:2},{value:"Syntax",id:"syntax",level:2},{value:"Required Parameters",id:"required-parameters",level:2},{value:"Access Control Requirements",id:"access-control-requirements",level:2},{value:"Example",id:"example",level:2}];function d(e){let t={code:"code",h2:"h2",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,r.a)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(t.h2,{id:"description",children:"Description"}),"\n",(0,l.jsx)(t.p,{children:"Deletes one or more SQL blocking rules. Multiple rules can be deleted at once by separating them with commas."}),"\n",(0,l.jsx)(t.h2,{id:"syntax",children:"Syntax"}),"\n",(0,l.jsx)(t.pre,{children:(0,l.jsx)(t.code,{className:"language-sql",children:"DROP SQL_BLOCK_RULE <rule_name>[, ...]\n"})}),"\n",(0,l.jsx)(t.h2,{id:"required-parameters",children:"Required Parameters"}),"\n",(0,l.jsx)(t.p,{children:"<rule_name>\nThe name of the SQL blocking rule to be deleted. Multiple rule names can be specified, separated by commas."}),"\n",(0,l.jsx)(t.h2,{id:"access-control-requirements",children:"Access Control Requirements"}),"\n",(0,l.jsx)(t.p,{children:"Users executing this SQL command must have at least the following privileges:"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,l.jsxs)(t.table,{children:[(0,l.jsx)(t.thead,{children:(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.th,{style:{textAlign:"left"},children:"Privilege"}),(0,l.jsx)(t.th,{style:{textAlign:"left"},children:"Object"}),(0,l.jsx)(t.th,{style:{textAlign:"left"},children:"Notes"})]})}),(0,l.jsx)(t.tbody,{children:(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"ADMIN"}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"User or Role"}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"Only users or roles with the ADMIN privilege can perform the DROP operation."})]})})]}),"\n",(0,l.jsx)(t.h2,{id:"example",children:"Example"}),"\n",(0,l.jsxs)(t.p,{children:["Delete ",(0,l.jsx)(t.code,{children:"test_rule1"})," and ",(0,l.jsx)(t.code,{children:"test_rule2"})," blocking rules"]}),"\n",(0,l.jsx)(t.pre,{children:(0,l.jsx)(t.code,{className:"language-sql",children:"DROP SQL_BLOCK_RULE test_rule1, test_rule2;\n"})})]})}function u(e={}){let{wrapper:t}={...(0,r.a)(),...e.components};return t?(0,l.jsx)(t,{...e,children:(0,l.jsx)(d,{...e})}):d(e)}},250065:function(e,t,n){n.d(t,{Z:function(){return i},a:function(){return a}});var s=n(667294);let l={},r=s.createContext(l);function a(e){let t=s.useContext(r);return s.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:a(e.components),s.createElement(r.Provider,{value:t},e.children)}}}]);