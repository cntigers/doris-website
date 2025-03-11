"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["12663"],{218152:function(e,n,t){t.r(n),t.d(n,{default:()=>p,frontMatter:()=>r,metadata:()=>l,assets:()=>o,toc:()=>d,contentTitle:()=>a});var l=JSON.parse('{"id":"sql-manual/sql-statements/plugin/INSTALL-PLUGIN","title":"INSTALL PLUGIN","description":"\x3c!--","source":"@site/versioned_docs/version-3.0/sql-manual/sql-statements/plugin/INSTALL-PLUGIN.md","sourceDirName":"sql-manual/sql-statements/plugin","slug":"/sql-manual/sql-statements/plugin/INSTALL-PLUGIN","permalink":"/docs/3.0/sql-manual/sql-statements/plugin/INSTALL-PLUGIN","draft":false,"unlisted":false,"tags":[],"version":"3.0","frontMatter":{"title":"INSTALL PLUGIN","language":"en"},"sidebar":"docs","previous":{"title":"CANCEL TASK","permalink":"/docs/3.0/sql-manual/sql-statements/job/CANCEL-TASK"},"next":{"title":"UNINSTALL PLUGIN","permalink":"/docs/3.0/sql-manual/sql-statements/plugin/UNINSTALL-PLUGIN"}}'),s=t("785893"),i=t("250065");let r={title:"INSTALL PLUGIN",language:"en"},a=void 0,o={},d=[{value:"Description",id:"description",level:2},{value:"Syntax",id:"syntax",level:2},{value:"Required parameters",id:"required-parameters",level:2},{value:"Optional parameters",id:"optional-parameters",level:2},{value:"Permission Control",id:"permission-control",level:2},{value:"Precautions",id:"precautions",level:2},{value:"Example",id:"example",level:2}];function c(e){let n={a:"a",blockquote:"blockquote",code:"code",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,s.jsx)(n.p,{children:"This statement is used to install a plug-in"}),"\n",(0,s.jsx)(n.h2,{id:"syntax",children:"Syntax"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sql",children:'INSTALL PLUGIN FROM <source> [PROPERTIES ("<key>"="<value>", ...)]\n'})}),"\n",(0,s.jsx)(n.h2,{id:"required-parameters",children:"Required parameters"}),"\n",(0,s.jsxs)(n.p,{children:["** 1. ",(0,s.jsx)(n.code,{children:"<source>"}),"**"]}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsx)(n.p,{children:"The plugin path to be installed, supports three types\uFF1A"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsx)(n.li,{children:"An absolute path to a zip file"}),"\n",(0,s.jsx)(n.li,{children:"An absolute path to a plugin directory"}),"\n",(0,s.jsx)(n.li,{children:"Points to a zip file download path with http or https protocol"}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"optional-parameters",children:"Optional parameters"}),"\n",(0,s.jsxs)(n.p,{children:["** 1. ",(0,s.jsx)(n.code,{children:'[PROPERTIES ("<key>"="<value>", ...)]'}),"**"]}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsx)(n.p,{children:"Used to specify properties or parameters when installing a plug-in"}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"permission-control",children:"Permission Control"}),"\n",(0,s.jsx)(n.p,{children:"The user executing this SQL command must have at least the following permissions:"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{style:{textAlign:"left"},children:"Permissions"}),(0,s.jsx)(n.th,{style:{textAlign:"left"},children:"Object"}),(0,s.jsx)(n.th,{style:{textAlign:"left"},children:"Notes"})]})}),(0,s.jsx)(n.tbody,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{style:{textAlign:"left"},children:"ADMIN_PRIV"}),(0,s.jsx)(n.td,{style:{textAlign:"left"},children:"The entire cluster"}),(0,s.jsx)(n.td,{style:{textAlign:"left"},children:"Requires administrative privileges for the entire cluster"})]})})]}),"\n",(0,s.jsx)(n.h2,{id:"precautions",children:"Precautions"}),"\n",(0,s.jsxs)(n.p,{children:["Note that you need to place an md5 file with the same name as the .zip file, such as ",(0,s.jsx)(n.a,{href:"http://mywebsite.com/plugin.zip.md5",children:"http://mywebsite.com/plugin.zip.md5"})," . The content is the MD5 value of the .zip file."]}),"\n",(0,s.jsx)(n.h2,{id:"example",children:"Example"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Install a local zip file plugin:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sql",children:'INSTALL PLUGIN FROM "/home/users/doris/auditdemo.zip";\n'})}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Install the plugin in a local directory:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sql",children:'INSTALL PLUGIN FROM "/home/users/doris/auditdemo/";\n'})}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Download and install a plugin:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sql",children:'INSTALL PLUGIN FROM "http://mywebsite.com/plugin.zip";\n'})}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Download and install a plugin, and set the md5sum value of the zip file:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sql",children:'INSTALL PLUGIN FROM "http://mywebsite.com/plugin.zip" PROPERTIES("md5sum" = "73877f6029216f4314d712086a146570");\n'})}),"\n"]}),"\n"]})]})}function p(e={}){let{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}},250065:function(e,n,t){t.d(n,{Z:function(){return a},a:function(){return r}});var l=t(667294);let s={},i=l.createContext(s);function r(e){let n=l.useContext(i);return l.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),l.createElement(i.Provider,{value:n},e.children)}}}]);