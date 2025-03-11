"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["403377"],{610292:function(e,t,n){n.r(t),n.d(t,{default:()=>f,frontMatter:()=>r,metadata:()=>i,assets:()=>s,toc:()=>d,contentTitle:()=>o});var i=JSON.parse('{"id":"admin-manual/auth/fe-certificate","title":"FE SSL Certificate","description":"\x3c!--","source":"@site/docs/admin-manual/auth/fe-certificate.md","sourceDirName":"admin-manual/auth","slug":"/admin-manual/auth/fe-certificate","permalink":"/docs/dev/admin-manual/auth/fe-certificate","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"title":"FE SSL Certificate","language":"en"},"sidebar":"docs","previous":{"title":"MySQL Client Certificate","permalink":"/docs/dev/admin-manual/auth/certificate"},"next":{"title":"Encryption and Masking Function ","permalink":"/docs/dev/admin-manual/auth/encryption-function"}}'),a=n("785893"),c=n("250065");let r={title:"FE SSL Certificate",language:"en"},o="Certificate Configuration",s={},d=[];function l(e){let t={code:"code",h1:"h1",header:"header",p:"p",...(0,c.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t.header,{children:(0,a.jsx)(t.h1,{id:"certificate-configuration",children:"Certificate Configuration"})}),"\n",(0,a.jsx)(t.p,{children:"Certificate Configuration"}),"\n",(0,a.jsx)(t.p,{children:"To enable SSL function on Doris FE interface, you need to configure key certificate as follows:"}),"\n",(0,a.jsx)(t.p,{children:"1.Purchase or generate a self-signed SSL certificate. It is advised to use CA certificate in Production environment"}),"\n",(0,a.jsxs)(t.p,{children:["2.Copy the SSL certificate to specified path. The default path is ",(0,a.jsx)(t.code,{children:"${DORIS_HOME}/conf/ssl/"}),", and user can also specify their own path"]}),"\n",(0,a.jsxs)(t.p,{children:["3.Modify FE configuration file ",(0,a.jsx)(t.code,{children:"conf/fe.conf"}),", and note that the following parameters are consistent with purchased or generated SSL certificate\nSet ",(0,a.jsx)(t.code,{children:"enable_https = true"})," to enable https function, default is ",(0,a.jsx)(t.code,{children:"false"}),"\nSet certificate path ",(0,a.jsx)(t.code,{children:"key_store_path"}),", default is ",(0,a.jsx)(t.code,{children:"${DORIS_HOME}/conf/ssl/doris_ssl_certificate.keystore"}),"\nSet certificate password ",(0,a.jsx)(t.code,{children:"key_store_password"}),", default is null\nSet certificate type ",(0,a.jsx)(t.code,{children:"key_store_type"}),", default is ",(0,a.jsx)(t.code,{children:"JKS"}),"\nSet certificate alias ",(0,a.jsx)(t.code,{children:"key_store_alias"}),", default is ",(0,a.jsx)(t.code,{children:"doris_ssl_certificate"})]})]})}function f(e={}){let{wrapper:t}={...(0,c.a)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(l,{...e})}):l(e)}},250065:function(e,t,n){n.d(t,{Z:function(){return o},a:function(){return r}});var i=n(667294);let a={},c=i.createContext(a);function r(e){let t=i.useContext(c);return i.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:r(e.components),i.createElement(c.Provider,{value:t},e.children)}}}]);