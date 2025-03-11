"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["843402"],{434248:function(e,n,t){t.r(n),t.d(n,{default:()=>u,frontMatter:()=>a,metadata:()=>i,assets:()=>c,toc:()=>o,contentTitle:()=>r});var i=JSON.parse('{"id":"sql-manual/sql-functions/digital-masking","title":"DIGITAL_MASKING","description":"\x3c!--","source":"@site/versioned_docs/version-2.0/sql-manual/sql-functions/digital-masking.md","sourceDirName":"sql-manual/sql-functions","slug":"/sql-manual/sql-functions/digital-masking","permalink":"/docs/2.0/sql-manual/sql-functions/digital-masking","draft":false,"unlisted":false,"tags":[],"version":"2.0","frontMatter":{"title":"DIGITAL_MASKING","language":"en"},"sidebar":"docs","previous":{"title":"CAST","permalink":"/docs/2.0/sql-manual/sql-functions/cast"},"next":{"title":"WIDTH_BUCKET","permalink":"/docs/2.0/sql-manual/sql-functions/width-bucket"}}'),s=t("785893"),l=t("250065");let a={title:"DIGITAL_MASKING",language:"en"},r=void 0,c={},o=[{value:"description",id:"description",level:3},{value:"Syntax",id:"syntax",level:3},{value:"example",id:"example",level:3}];function d(e){let n={code:"code",h3:"h3",p:"p",pre:"pre",...(0,l.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h3,{id:"description",children:"description"}),"\n",(0,s.jsxs)(n.p,{children:["An alias function with the original function being ",(0,s.jsx)(n.code,{children:"CONCAT(LEFT(id,3),'****',RIGHT(id,4))"}),". Performs data masking on the input ",(0,s.jsx)(n.code,{children:"digital_number"})," and returns the masked result."]}),"\n",(0,s.jsx)(n.h3,{id:"syntax",children:"Syntax"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sql",children:"digital_masking(digital_number)\n"})}),"\n",(0,s.jsx)(n.h3,{id:"example",children:"example"}),"\n",(0,s.jsx)(n.p,{children:"Desensitize the cell phone number"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sql",children:"select digital_masking(13812345678);\n"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"+------------------------------+\n| digital_masking(13812345678) |\n+------------------------------+\n| 138****5678                  |\n+------------------------------+\n"})})]})}function u(e={}){let{wrapper:n}={...(0,l.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},250065:function(e,n,t){t.d(n,{Z:function(){return r},a:function(){return a}});var i=t(667294);let s={},l=i.createContext(s);function a(e){let n=i.useContext(l);return i.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),i.createElement(l.Provider,{value:n},e.children)}}}]);