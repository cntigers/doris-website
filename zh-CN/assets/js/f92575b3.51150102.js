"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["941647"],{350385:function(e,n,s){s.r(n),s.d(n,{default:()=>o,frontMatter:()=>c,metadata:()=>i,assets:()=>a,toc:()=>d,contentTitle:()=>l});var i=JSON.parse('{"id":"ecosystem/bi/apache-superset","title":"Apache Superset","description":"\x3c!--","source":"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/ecosystem/bi/apache-superset.md","sourceDirName":"ecosystem/bi","slug":"/ecosystem/bi/apache-superset","permalink":"/zh-CN/docs/dev/ecosystem/bi/apache-superset","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"title":"Apache Superset","language":"zh-CN"},"sidebar":"docs","previous":{"title":"Doris Streamloader","permalink":"/zh-CN/docs/dev/ecosystem/doris-streamloader"},"next":{"title":"FineBI","permalink":"/zh-CN/docs/dev/ecosystem/bi/finebi"}}'),r=s("785893"),t=s("250065");let c={title:"Apache Superset",language:"zh-CN"},l=void 0,a={},d=[{value:"\u4ECB\u7ECD",id:"\u4ECB\u7ECD",level:2},{value:"\u524D\u7F6E\u6761\u4EF6",id:"\u524D\u7F6E\u6761\u4EF6",level:2},{value:"\u6DFB\u52A0\u6570\u636E\u6E90",id:"\u6DFB\u52A0\u6570\u636E\u6E90",level:2}];function h(e){let n={a:"a",admonition:"admonition",code:"code",h2:"h2",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...(0,t.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h2,{id:"\u4ECB\u7ECD",children:"\u4ECB\u7ECD"}),"\n",(0,r.jsx)(n.p,{children:"Apache Superset \u662F\u4E00\u4E2A\u5F00\u6E90\u7684\u6570\u636E\u6316\u6398\u5E73\u53F0\uFF0C\u652F\u6301\u4E30\u5BCC\u7684\u6570\u636E\u6E90\u8FDE\u63A5\uFF0C\u591A\u79CD\u53EF\u89C6\u5316\u65B9\u5F0F\uFF0C\u5E76\u80FD\u591F\u5BF9\u7528\u6237\u5B9E\u73B0\u7EC6\u7C92\u5EA6\u7684\u6743\u9650\u63A7\u5236\u3002\u8BE5\u5DE5\u5177\u4E3B\u8981\u7279\u70B9\u662F\u53EF\u81EA\u52A9\u5206\u6790\u3001\u81EA\u5B9A\u4E49\u4EEA\u8868\u76D8\u3001\u5206\u6790\u7ED3\u679C\u53EF\u89C6\u5316\uFF08\u5BFC\u51FA\uFF09\u3001\u7528\u6237/\u89D2\u8272\u6743\u9650\u63A7\u5236\uFF0C\u8FD8\u96C6\u6210\u4E86\u4E00\u4E2A SQL \u7F16\u8F91\u5668\uFF0C\u53EF\u4EE5\u8FDB\u884C SQL \u7F16\u8F91\u67E5\u8BE2\u7B49\u3002"}),"\n",(0,r.jsx)(n.p,{children:"\u5728 Apache Superset 3.1 \u7248\u672C\u4E2D\u6B63\u5F0F\u652F\u6301\u4E86 Apache Doris \u7684\u5185\u90E8\u6570\u636E\u548C\u5916\u90E8\u6570\u636E\u8FDB\u884C\u67E5\u8BE2\u548C\u53EF\u89C6\u5316\u5904\u7406\u3002"}),"\n",(0,r.jsx)(n.h2,{id:"\u524D\u7F6E\u6761\u4EF6",children:"\u524D\u7F6E\u6761\u4EF6"}),"\n",(0,r.jsx)(n.p,{children:"\u786E\u4FDD\u60A8\u5DF2\u5B8C\u6210\u5982\u4E0B\u5DE5\u5177\u5B89\u88C5\uFF1A"}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"\u5728 Apache Superset \u670D\u52A1\u5668\u4E0A\u5B89\u88C5 Apache Doris \u7684 Python \u5BA2\u6237\u7AEF\u3002"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"pip install pydoris\n"})}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["\u5B89\u88C5 Apache Superset 3.1 \u53CA\u5176\u4EE5\u4E0A\u7684\u7248\u672C\u3002\u5177\u4F53\u53C2\u89C1 ",(0,r.jsx)(n.a,{href:"https://superset.apache.org/docs/installation/installing-superset-from-pypi",children:"\u5B89\u88C5 Superset \u4ECE PyPI \u5E93"})," \u6216\u8005 ",(0,r.jsx)(n.a,{href:"https://hub.docker.com/r/apache/superset",children:"\u901A\u8FC7 Docker \u5BB9\u5668\u7684\u65B9\u5F0F\u5B89\u88C5"}),"\u3002"]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"\u6DFB\u52A0\u6570\u636E\u6E90",children:"\u6DFB\u52A0\u6570\u636E\u6E90"}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"\u901A\u8FC7\u5BF9\u5E94\u7684\u542F\u52A8\u7AEF\u53E3\u5BF9 Apache Superset \u8FDB\u884C\u8BBF\u95EE\u3002"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{alt:"login page",src:s(891533).Z+"",width:"1280",height:"303"})}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"\u767B\u9646\u540E\u9009\u62E9\u6DFB\u52A0\u6570\u636E\u5E93\u8FDE\u63A5\u3002"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{alt:"add databases",src:s(828415).Z+"",width:"1280",height:"592"})}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"\u5728\u8FDE\u63A5\u7684\u5F39\u7A97\u9875\u9762\u4E2D\u9009\u62E9 Apache Doris\u3002"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{alt:"select databases",src:s(955158).Z+"",width:"734",height:"1280"})}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"\u5728\u8FDE\u63A5\u4FE1\u606F\u4E2D\u586B\u5199 SQLAlchemy URI\uFF0C\u5E76\u8FDB\u884C\u76F8\u5173\u7684\u8FDE\u63A5\u9A8C\u8BC1\u3002"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{alt:"test connection",src:s(324322).Z+"",width:"2082",height:"1450"})}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"\u5F53\u4F60\u5728 Apache Superset \u4E2D\u521B\u5EFA\u6570\u636E\u6E90\u65F6\uFF0C\u9700\u8981\u6CE8\u610F\u4EE5\u4E0B\u4E24\u70B9\uFF1A"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"\u5728 SUPPORTED DATABASES \u91CC\u9009\u62E9 Apache Doris \u4F5C\u4E3A\u6570\u636E\u6E90\u3002"}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"\u5728 SQLAlchemy URI \u91CC\uFF0C\u6309\u5982\u4E0B Apache Doris SQLAlchemy URI \u683C\u5F0F\u586B\u5199 URI\uFF1A"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.code,{children:"doris://<User>:<Password>@<Host>:<Port>/<Catalog>.<Database>"})}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"URI \u53C2\u6570\u8BF4\u660E\u5982\u4E0B\uFF1A"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"User\uFF1A\u7528\u4E8E\u767B\u5F55 Apache Doris \u96C6\u7FA4\u7684\u7528\u6237\u540D\uFF0C\u5982 Admin\u3002"}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Password\uFF1A\u7528\u4E8E\u767B\u5F55 Apache Doris \u96C6\u7FA4\u7684\u7528\u6237\u5BC6\u7801\u3002"}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Host\uFF1AApache Doris \u96C6\u7FA4\u7684 FE \u4E3B\u673A IP \u5730\u5740\u3002"}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Port\uFF1AApache Doris \u96C6\u7FA4\u7684 FE \u67E5\u8BE2\u7AEF\u53E3\uFF0C\u5982 9030\u3002"}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Catalog\uFF1AApache Doris \u96C6\u7FA4\u4E2D\u7684\u76EE\u6807 Catalog\u3002Internal Catalog \u548C External Catalog \u5747\u652F\u6301\u3002"}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Database\uFF1AApache Doris \u96C6\u7FA4\u4E2D\u7684\u76EE\u6807\u6570\u636E\u5E93\u3002\u5185\u90E8\u6570\u636E\u5E93\u548C\u5916\u90E8\u6570\u636E\u5E93\u5747\u652F\u6301\u3002"}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.admonition,{type:"tip",children:(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["\u5F53\u4F60\u4F7F\u7528\u6700\u65B0\u7684 Docker \u955C\u50CF\u90E8\u7F72 Superset \u65F6\uFF0C\u5982\u679C\u53D1\u73B0\u627E\u4E0D\u5230 Apache Doris \u6570\u636E\u6E90\uFF0C\u8FD9\u4E2A\u53EF\u80FD\u662F\u56E0\u4E3A Apache Superset Docker Image \u9ED8\u8BA4\u53EA\u5305\u542B\u57FA\u672C\u7684\u6570\u636E\u6E90\u6784\u5EFA\uFF0C\u9700\u8981\u624B\u52A8\u5C06 pydoris \u5305\u5B89\u88C5\u8FDB\u6765\uFF0C\u60A8\u53EF\u4EE5\u53C2\u8003 ",(0,r.jsx)(n.a,{href:"https://hub.docker.com/r/apache/superset",children:"Superset Docker \u6559\u7A0B"})," \u4E2D\u7684 How to extend this image \u6B65\u9AA4\u8FDB\u884C Apache Superset \u7684\u90E8\u7F72\u3002"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"\u63A8\u8350\u4F7F\u7528 Apache Doris 2.0.4 \u53CA\u4EE5\u4E0A\u7248\u672C\u3002"}),"\n"]}),"\n"]})})]})}function o(e={}){let{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(h,{...e})}):h(e)}},891533:function(e,n,s){s.d(n,{Z:function(){return i}});let i=s.p+"assets/images/bi-superset-en-1-87eec9d4bd909545f7e865b6bde2aec3.png"},828415:function(e,n,s){s.d(n,{Z:function(){return i}});let i=s.p+"assets/images/bi-superset-en-2-f1742e66856cfa06651793861e851213.png"},955158:function(e,n,s){s.d(n,{Z:function(){return i}});let i=s.p+"assets/images/bi-superset-en-3-1a3dd3ad89e52f70bd12396a71ce4451.png"},324322:function(e,n,s){s.d(n,{Z:function(){return i}});let i=s.p+"assets/images/bi-superset-en-4-027476546f2cf22034dd4fc1ec97bd15.png"},250065:function(e,n,s){s.d(n,{Z:function(){return l},a:function(){return c}});var i=s(667294);let r={},t=i.createContext(r);function c(e){let n=i.useContext(t);return i.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:c(e.components),i.createElement(t.Provider,{value:n},e.children)}}}]);