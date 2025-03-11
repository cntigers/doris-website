"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["404419"],{128720:function(e,n,t){t.r(n),t.d(n,{default:()=>d,frontMatter:()=>i,metadata:()=>r,assets:()=>c,toc:()=>o,contentTitle:()=>l});var r=JSON.parse('{"id":"sql-manual/sql-functions/scalar-functions/string-functions/extract-url-parameter","title":"EXTRACT_URL_PARAMETER","description":"\x3c!--","source":"@site/versioned_docs/version-2.1/sql-manual/sql-functions/scalar-functions/string-functions/extract-url-parameter.md","sourceDirName":"sql-manual/sql-functions/scalar-functions/string-functions","slug":"/sql-manual/sql-functions/scalar-functions/string-functions/extract-url-parameter","permalink":"/docs/sql-manual/sql-functions/scalar-functions/string-functions/extract-url-parameter","draft":false,"unlisted":false,"tags":[],"version":"2.1","frontMatter":{"title":"EXTRACT_URL_PARAMETER","language":"en"},"sidebar":"docs","previous":{"title":"URL_ENCODE","permalink":"/docs/sql-manual/sql-functions/scalar-functions/string-functions/url-encode"},"next":{"title":"UUID","permalink":"/docs/sql-manual/sql-functions/scalar-functions/string-functions/uuid"}}'),s=t("785893"),a=t("250065");let i={title:"EXTRACT_URL_PARAMETER",language:"en"},l=void 0,c={},o=[{value:"Description",id:"description",level:2},{value:"Syntax",id:"syntax",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Return Value",id:"return-value",level:2},{value:"Example",id:"example",level:2}];function u(e){let n={a:"a",code:"code",h2:"h2",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,a.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,s.jsxs)(n.p,{children:["Returns the value of the ",(0,s.jsx)(n.code,{children:"name"})," parameter in the URL, if it exists, or an empty string otherwise."]}),"\n",(0,s.jsx)(n.p,{children:"If there are multiple parameters with this name, the first one that occurs is returned."}),"\n",(0,s.jsx)(n.p,{children:"This function works assuming that the parameter name is encoded in the URL exactly as it is in the passed parameter."}),"\n",(0,s.jsxs)(n.p,{children:["If you want to get other parts of the URL, you can use ",(0,s.jsx)(n.a,{href:"/docs/sql-manual/sql-functions/scalar-functions/string-functions/parse-url",children:"parse_url"})]}),"\n",(0,s.jsx)(n.h2,{id:"syntax",children:"Syntax"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sql",children:"EXTRACT_URL_PARAMETER ( <url> , <name> )\n"})}),"\n",(0,s.jsx)(n.h2,{id:"parameters",children:"Parameters"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Parameters"}),(0,s.jsx)(n.th,{children:"Description"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"<url>"})}),(0,s.jsx)(n.td,{children:"The url string of the parameter to be returned"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"<name>"})}),(0,s.jsx)(n.td,{children:"The name of the parameter to be returned"})]})]})]}),"\n",(0,s.jsx)(n.h2,{id:"return-value",children:"Return Value"}),"\n",(0,s.jsxs)(n.p,{children:["The value of the parameter ",(0,s.jsx)(n.code,{children:"<name>"})," in ",(0,s.jsx)(n.code,{children:"<url>"})]}),"\n",(0,s.jsx)(n.h2,{id:"example",children:"Example"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sql",children:'SELECT EXTRACT_URL_PARAMETER("http://doris.apache.org?k1=aa&k2=bb&test=cc#999", "k2")\n'})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-text",children:"+--------------------------------------------------------------------------------+\n| extract_url_parameter('http://doris.apache.org?k1=aa&k2=bb&test=cc#999', 'k2') |\n+--------------------------------------------------------------------------------+\n| bb                                                                             |\n+--------------------------------------------------------------------------------+\n"})})]})}function d(e={}){let{wrapper:n}={...(0,a.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(u,{...e})}):u(e)}},250065:function(e,n,t){t.d(n,{Z:function(){return l},a:function(){return i}});var r=t(667294);let s={},a=r.createContext(s);function i(e){let n=r.useContext(a);return r.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),r.createElement(a.Provider,{value:n},e.children)}}}]);