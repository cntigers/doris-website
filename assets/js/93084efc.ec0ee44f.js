"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["601070"],{681490:function(e,n,t){t.r(n),t.d(n,{default:()=>h,frontMatter:()=>a,metadata:()=>l,assets:()=>c,toc:()=>o,contentTitle:()=>r});var l=JSON.parse('{"id":"sql-manual/sql-statements/catalog/ALTER-CATALOG","title":"ALTER CATALOG","description":"\x3c!--","source":"@site/versioned_docs/version-3.0/sql-manual/sql-statements/catalog/ALTER-CATALOG.md","sourceDirName":"sql-manual/sql-statements/catalog","slug":"/sql-manual/sql-statements/catalog/ALTER-CATALOG","permalink":"/docs/3.0/sql-manual/sql-statements/catalog/ALTER-CATALOG","draft":false,"unlisted":false,"tags":[],"version":"3.0","frontMatter":{"title":"ALTER CATALOG","language":"en"},"sidebar":"docs","previous":{"title":"CREATE CATALOG","permalink":"/docs/3.0/sql-manual/sql-statements/catalog/CREATE-CATALOG"},"next":{"title":"DROP CATALOG","permalink":"/docs/3.0/sql-manual/sql-statements/catalog/DROP-CATALOG"}}'),s=t("785893"),i=t("250065");let a={title:"ALTER CATALOG",language:"en"},r=void 0,c={},o=[{value:"Description",id:"description",level:2},{value:"Syntax",id:"syntax",level:2},{value:"Required Parameters",id:"required-parameters",level:2},{value:"Access Control Requirements",id:"access-control-requirements",level:2},{value:"Usage Notes",id:"usage-notes",level:2},{value:"Example",id:"example",level:2}];function d(e){let n={code:"code",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,s.jsx)(n.p,{children:"This statement is used to set properties of the specified catalog."}),"\n",(0,s.jsx)(n.h2,{id:"syntax",children:"Syntax"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Rename the catalog"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sql",children:"ALTER CATALOG <catalog_name> RENAME <new_catalog_name>;\n"})}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Modify / Add properties for the catalog"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sql",children:"ALTER CATALOG <catalog_name> SET PROPERTIES ('<key>' = '<value>' [, ... ]);  \n"})}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Modify comment for the catalog"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sql",children:'ALTER CATALOG <catalog_name> MODIFY COMMENT "<new catalog comment>";\n'})}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"required-parameters",children:"Required Parameters"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsxs)(n.strong,{children:["1. ",(0,s.jsx)(n.code,{children:"<catalog_name>"})]})}),"\n",(0,s.jsx)(n.p,{children:"The name of the catalog that should be modified"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsxs)(n.strong,{children:["2. ",(0,s.jsx)(n.code,{children:"<new_catalog_name>"})]})}),"\n",(0,s.jsx)(n.p,{children:"New catalog name after modification"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsxs)(n.strong,{children:["3. ",(0,s.jsx)(n.code,{children:"'<key>' = '<value>'"})]})}),"\n",(0,s.jsx)(n.p,{children:"The key and value of the catalog properties that need to be modified / added"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsxs)(n.strong,{children:["4. ",(0,s.jsx)(n.code,{children:"<new catalog comment>"})]})}),"\n",(0,s.jsx)(n.p,{children:"Modified catalog comment"}),"\n",(0,s.jsx)(n.h2,{id:"access-control-requirements",children:"Access Control Requirements"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{style:{textAlign:"left"},children:"Privilege"}),(0,s.jsx)(n.th,{style:{textAlign:"left"},children:"Object"}),(0,s.jsx)(n.th,{style:{textAlign:"left"},children:"Notes"})]})}),(0,s.jsx)(n.tbody,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{style:{textAlign:"left"},children:"ALTER_PRIV"}),(0,s.jsx)(n.td,{style:{textAlign:"left"},children:"Catalog"}),(0,s.jsx)(n.td,{style:{textAlign:"left"},children:"The ALTER_PRIV of the catalog is required"})]})})]}),"\n",(0,s.jsx)(n.h2,{id:"usage-notes",children:"Usage Notes"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsx)(n.li,{children:"Rename the catalog"}),"\n"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["The builtin catalog ",(0,s.jsx)(n.code,{children:"internal"})," cannot be renamed"]}),"\n",(0,s.jsx)(n.li,{children:"Only the one who has at least Alter privilege can rename a catalog"}),"\n",(0,s.jsx)(n.li,{children:"After renaming the catalog, use the REVOKE and GRANT commands to modify the appropriate user permissions"}),"\n"]}),"\n",(0,s.jsxs)(n.ol,{start:"2",children:["\n",(0,s.jsx)(n.li,{children:"Modify / Add properties for the catalog"}),"\n"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["property ",(0,s.jsx)(n.code,{children:"type"})," cannot be modified."]}),"\n",(0,s.jsxs)(n.li,{children:["properties of builtin catalog ",(0,s.jsx)(n.code,{children:"internal"})," cannot be modified."]}),"\n",(0,s.jsx)(n.li,{children:"Update values of specified keys. If a key does not exist in the catalog properties, it will be added."}),"\n"]}),"\n",(0,s.jsxs)(n.ol,{start:"3",children:["\n",(0,s.jsx)(n.li,{children:"Modify comment for the catalog"}),"\n"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["The builtin catalog ",(0,s.jsx)(n.code,{children:"internal"})," cannot be modified"]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"example",children:"Example"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"rename catalog ctlg_hive to hive"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sql",children:"ALTER CATALOG ctlg_hive RENAME hive;\n"})}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["modify property ",(0,s.jsx)(n.code,{children:"hive.metastore.uris"})," of catalog hive"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sql",children:"ALTER CATALOG hive SET PROPERTIES ('hive.metastore.uris'='thrift://172.21.0.1:9083');\n"})}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"modify comment of catalog hive"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sql",children:'ALTER CATALOG hive MODIFY COMMENT "new catalog comment";\n'})}),"\n"]}),"\n"]})]})}function h(e={}){let{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},250065:function(e,n,t){t.d(n,{Z:function(){return r},a:function(){return a}});var l=t(667294);let s={},i=l.createContext(s);function a(e){let n=l.useContext(i);return l.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),l.createElement(i.Provider,{value:n},e.children)}}}]);