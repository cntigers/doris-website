"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["509306"],{114908:function(e,n,t){t.r(n),t.d(n,{default:()=>u,frontMatter:()=>l,metadata:()=>s,assets:()=>a,toc:()=>o,contentTitle:()=>i});var s=JSON.parse('{"id":"sql-manual/sql-functions/scalar-functions/encrypt-digest-functions/crc32","title":"CRC32","description":"\x3c!--","source":"@site/versioned_docs/version-2.1/sql-manual/sql-functions/scalar-functions/encrypt-digest-functions/crc32.md","sourceDirName":"sql-manual/sql-functions/scalar-functions/encrypt-digest-functions","slug":"/sql-manual/sql-functions/scalar-functions/encrypt-digest-functions/crc32","permalink":"/docs/sql-manual/sql-functions/scalar-functions/encrypt-digest-functions/crc32","draft":false,"unlisted":false,"tags":[],"version":"2.1","frontMatter":{"title":"CRC32","language":"en"},"sidebar":"docs","previous":{"title":"AES_DECRYPT","permalink":"/docs/sql-manual/sql-functions/scalar-functions/encrypt-digest-functions/aes-decrypt"},"next":{"title":"MD5","permalink":"/docs/sql-manual/sql-functions/scalar-functions/encrypt-digest-functions/md5"}}'),c=t("785893"),r=t("250065");let l={title:"CRC32",language:"en"},i=void 0,a={},o=[{value:"Description",id:"description",level:2},{value:"Syntax",id:"syntax",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Return Value",id:"return-value",level:2},{value:"Examples",id:"examples",level:2}];function d(e){let n={code:"code",h2:"h2",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,r.a)(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,c.jsx)(n.p,{children:"Use CRC32 to compute the result."}),"\n",(0,c.jsx)(n.h2,{id:"syntax",children:"Syntax"}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-sql",children:"CRC32( <str> )\n"})}),"\n",(0,c.jsx)(n.h2,{id:"parameters",children:"Parameters"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,c.jsxs)(n.table,{children:[(0,c.jsx)(n.thead,{children:(0,c.jsxs)(n.tr,{children:[(0,c.jsx)(n.th,{children:"parameter"}),(0,c.jsx)(n.th,{children:"description"})]})}),(0,c.jsx)(n.tbody,{children:(0,c.jsxs)(n.tr,{children:[(0,c.jsx)(n.td,{children:(0,c.jsx)(n.code,{children:"<str>"})}),(0,c.jsx)(n.td,{children:"The value to be used for CRC calculation"})]})})]}),"\n",(0,c.jsx)(n.h2,{id:"return-value",children:"Return Value"}),"\n",(0,c.jsx)(n.p,{children:"Returns the Cyclic Redundancy Check value of this string."}),"\n",(0,c.jsx)(n.h2,{id:"examples",children:"Examples"}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-sql",children:'select crc32("abc"),crc32("\u4E2D\u56FD");\n'})}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-text",children:"+--------------+-----------------+\n| crc32('abc') | crc32('\u4E2D\u56FD')   |\n+--------------+-----------------+\n|    891568578 |       737014929 |\n+--------------+-----------------+\n"})})]})}function u(e={}){let{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(d,{...e})}):d(e)}},250065:function(e,n,t){t.d(n,{Z:function(){return i},a:function(){return l}});var s=t(667294);let c={},r=s.createContext(c);function l(e){let n=s.useContext(r);return s.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(c):e.components||c:l(e.components),s.createElement(r.Provider,{value:n},e.children)}}}]);