"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["283078"],{140614:function(e,t,i){i.r(t),i.d(t,{default:()=>f,frontMatter:()=>c,metadata:()=>n,assets:()=>o,toc:()=>l,contentTitle:()=>s});var n=JSON.parse('{"id":"admin-manual/privilege-ldap/fe-certificate","title":"FE SSL Certificate","description":"\x3c!--","source":"@site/versioned_docs/version-2.0/admin-manual/privilege-ldap/fe-certificate.md","sourceDirName":"admin-manual/privilege-ldap","slug":"/admin-manual/privilege-ldap/fe-certificate","permalink":"/docs/2.0/admin-manual/privilege-ldap/fe-certificate","draft":false,"unlisted":false,"tags":[],"version":"2.0","frontMatter":{"title":"FE SSL Certificate","language":"en"},"sidebar":"docs","previous":{"title":"MySQL Client Certificate","permalink":"/docs/2.0/admin-manual/privilege-ldap/certificate"},"next":{"title":"LDAP","permalink":"/docs/2.0/admin-manual/privilege-ldap/ldap"}}'),a=i("785893"),r=i("250065");let c={title:"FE SSL Certificate",language:"en"},s=void 0,o={},l=[];function d(e){let t={code:"code",p:"p",...(0,r.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t.p,{children:"To enable SSL function on Doris FE interface, you need to configure key certificate as follows:"}),"\n",(0,a.jsx)(t.p,{children:"1.Purchase or generate a self-signed SSL certificate. It is advised to use CA certificate in Production environment"}),"\n",(0,a.jsxs)(t.p,{children:["2.Copy the SSL certificate to specified path. The default path is ",(0,a.jsx)(t.code,{children:"${DORIS_HOME}/conf/ssl/"}),", and user can also specify their own path"]}),"\n",(0,a.jsxs)(t.p,{children:["3.Modify FE configuration file ",(0,a.jsx)(t.code,{children:"conf/fe.conf"}),", and note that the following parameters are consistent with purchased or generated SSL certificate\nSet ",(0,a.jsx)(t.code,{children:"enable_https = true"})," to enable https function, default is ",(0,a.jsx)(t.code,{children:"false"}),"\nSet certificate path ",(0,a.jsx)(t.code,{children:"key_store_path"}),", default is ",(0,a.jsx)(t.code,{children:"${DORIS_HOME}/conf/ssl/doris_ssl_certificate.keystore"}),"\nSet certificate password ",(0,a.jsx)(t.code,{children:"key_store_password"}),", default is null\nSet certificate type ",(0,a.jsx)(t.code,{children:"key_store_type"}),", default is ",(0,a.jsx)(t.code,{children:"JKS"}),"\nSet certificate alias ",(0,a.jsx)(t.code,{children:"key_store_alias"}),", default is ",(0,a.jsx)(t.code,{children:"doris_ssl_certificate"})]})]})}function f(e={}){let{wrapper:t}={...(0,r.a)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(d,{...e})}):d(e)}},250065:function(e,t,i){i.d(t,{Z:function(){return s},a:function(){return c}});var n=i(667294);let a={},r=n.createContext(a);function c(e){let t=n.useContext(r);return n.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function s(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:c(e.components),n.createElement(r.Provider,{value:t},e.children)}}}]);