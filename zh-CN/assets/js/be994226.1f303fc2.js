"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["571469"],{760371:function(e,n,l){l.r(n),l.d(n,{default:()=>u,frontMatter:()=>c,metadata:()=>a,assets:()=>r,toc:()=>o,contentTitle:()=>i});var a=JSON.parse('{"id":"lakehouse/datalake-analytics/cloud-auth","title":"AWS \u8BA4\u8BC1\u63A5\u5165","description":"\x3c!--","source":"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-2.0/lakehouse/datalake-analytics/cloud-auth.md","sourceDirName":"lakehouse/datalake-analytics","slug":"/lakehouse/datalake-analytics/cloud-auth","permalink":"/zh-CN/docs/2.0/lakehouse/datalake-analytics/cloud-auth","draft":false,"unlisted":false,"tags":[],"version":"2.0","frontMatter":{"title":"AWS \u8BA4\u8BC1\u63A5\u5165","language":"zh-CN"},"sidebar":"docs","previous":{"title":"Paimon Catalog","permalink":"/zh-CN/docs/2.0/lakehouse/datalake-analytics/paimon"},"next":{"title":"JDBC Catalog","permalink":"/zh-CN/docs/2.0/lakehouse/database/jdbc"}}'),s=l("785893"),t=l("250065");let c={title:"AWS \u8BA4\u8BC1\u63A5\u5165",language:"zh-CN"},i=void 0,r={},o=[{value:"\u4F7F\u7528 Catalog \u5C5E\u6027\u8BA4\u8BC1",id:"\u4F7F\u7528-catalog-\u5C5E\u6027\u8BA4\u8BC1",level:2},{value:"\u4F7F\u7528\u7CFB\u7EDF\u5C5E\u6027\u8BA4\u8BC1",id:"\u4F7F\u7528\u7CFB\u7EDF\u5C5E\u6027\u8BA4\u8BC1",level:2}];function d(e){let n={a:"a",code:"code",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...(0,t.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.p,{children:"\u5F53\u8BBF\u95EE\u4E91\u4E0A\u7684\u670D\u52A1\u65F6\uFF0C\u6211\u4EEC\u9700\u8981\u63D0\u4F9B\u8BBF\u95EE\u670D\u52A1\u6240\u9700\u8981\u7684\u51ED\u8BC1\uFF0C\u4EE5\u4FBF\u670D\u52A1\u80FD\u591F\u901A\u8FC7\u5404\u4E91\u5382\u5546 IAM \u7684\u8BA4\u8BC1\u3002"}),"\n",(0,s.jsx)(n.p,{children:"\u73B0\u5728 Doris \u8BBF\u95EE AWS \u670D\u52A1\u65F6\uFF0C\u80FD\u591F\u652F\u6301\u4E24\u79CD\u7C7B\u578B\u7684\u8EAB\u4EFD\u8BA4\u8BC1\u3002"}),"\n",(0,s.jsx)(n.h2,{id:"\u4F7F\u7528-catalog-\u5C5E\u6027\u8BA4\u8BC1",children:"\u4F7F\u7528 Catalog \u5C5E\u6027\u8BA4\u8BC1"}),"\n",(0,s.jsx)(n.p,{children:"Catalog \u652F\u6301\u586B\u5199\u57FA\u672C\u7684 Credentials \u5C5E\u6027\uFF0C\u6BD4\u5982\uFF1A"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"\u8BBF\u95EE S3 \u65F6\uFF0C\u53EF\u4EE5\u4F7F\u7528 s3.endpoint\uFF0Cs3.access_key\uFF0Cs3.secret_key\u3002"}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"\u8BBF\u95EE Glue \u65F6\uFF0C\u53EF\u4EE5\u4F7F\u7528 glue.endpoint\uFF0Cglue.access_key\uFF0Cglue.secret_key\u3002"}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"\u4EE5 Iceberg Catalog \u8BBF\u95EE Glue \u4E3A\u4F8B\uFF0C\u6211\u4EEC\u53EF\u4EE5\u586B\u5199\u4EE5\u4E0B\u5C5E\u6027\u8BBF\u95EE\u5728 Glue \u4E0A\u6258\u7BA1\u7684\u8868\uFF1A"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sql",children:'CREATE CATALOG glue PROPERTIES (\n    "type"="iceberg",\n    "iceberg.catalog.type" = "glue",\n    "glue.endpoint" = "https://glue.us-east-1.amazonaws.com",\n    "glue.access_key" = "ak",\n    "glue.secret_key" = "sk"\n);\n'})}),"\n",(0,s.jsx)(n.h2,{id:"\u4F7F\u7528\u7CFB\u7EDF\u5C5E\u6027\u8BA4\u8BC1",children:"\u4F7F\u7528\u7CFB\u7EDF\u5C5E\u6027\u8BA4\u8BC1"}),"\n",(0,s.jsx)(n.p,{children:"\u7528\u4E8E\u8FD0\u884C\u5728 AWS \u8D44\u6E90 (\u5982 EC2 \u5B9E\u4F8B) \u4E0A\u7684\u5E94\u7528\u7A0B\u5E8F\u3002\u53EF\u4EE5\u907F\u514D\u786C\u7F16\u7801\u5199\u5165 Credentials\uFF0C\u80FD\u591F\u589E\u5F3A\u6570\u636E\u5B89\u5168\u6027\u3002"}),"\n",(0,s.jsx)(n.p,{children:"\u5F53\u6211\u4EEC\u5728\u521B\u5EFA Catalog \u65F6\uFF0C\u672A\u586B\u5199 Credentials \u5C5E\u6027\uFF0C\u90A3\u4E48\u6B64\u65F6\u4F1A\u4F7F\u7528 DefaultAWSCredentialsProviderChain\uFF0C\u5B83\u80FD\u591F\u8BFB\u53D6\u7CFB\u7EDF\u73AF\u5883\u53D8\u91CF\u6216\u8005 instance profile \u4E2D\u914D\u7F6E\u7684\u5C5E\u6027\u3002"}),"\n",(0,s.jsxs)(n.p,{children:["\u914D\u7F6E\u73AF\u5883\u53D8\u91CF\u548C\u7CFB\u7EDF\u5C5E\u6027\u7684\u65B9\u5F0F\u53EF\u4EE5\u53C2\u8003\uFF1A",(0,s.jsx)(n.a,{href:"https://docs.aws.amazon.com/cli/latest/userguide/cli-configure-envvars.html",children:"AWS CLI"})," \u3002"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["\u53EF\u4EE5\u9009\u62E9\u7684\u914D\u7F6E\u7684\u73AF\u5883\u53D8\u91CF\u6709\uFF1A",(0,s.jsx)(n.code,{children:"AWS_ACCESS_KEY_ID"}),"\u3001",(0,s.jsx)(n.code,{children:"AWS_SECRET_ACCESS_KEY"}),"\u3001",(0,s.jsx)(n.code,{children:"AWS_SESSION_TOKEN"}),"\u3001",(0,s.jsx)(n.code,{children:"AWS_ROLE_ARN"}),"\u3001",(0,s.jsx)(n.code,{children:"AWS_WEB_IDENTITY_TOKEN_FILE"}),"\u7B49"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["\u53E6\u5916\uFF0C\u8FD8\u53EF\u4EE5\u4F7F\u7528",(0,s.jsx)(n.a,{href:"https://docs.aws.amazon.com/cli/latest/userguide/cli-configure-files.html",children:"aws configure"}),"\u76F4\u63A5\u914D\u7F6E Credentials \u4FE1\u606F\uFF0C\u540C\u65F6\u5728",(0,s.jsx)(n.code,{children:"~/.aws"}),"\u76EE\u5F55\u4E0B\u751F\u6210 credentials \u6587\u4EF6\u3002"]}),"\n"]}),"\n"]})]})}function u(e={}){let{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},250065:function(e,n,l){l.d(n,{Z:function(){return i},a:function(){return c}});var a=l(667294);let s={},t=a.createContext(s);function c(e){let n=a.useContext(t);return a.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:c(e.components),a.createElement(t.Provider,{value:n},e.children)}}}]);