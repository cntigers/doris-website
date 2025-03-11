"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["343283"],{846780:function(e,n,l){l.r(n),l.d(n,{default:()=>t,frontMatter:()=>r,metadata:()=>s,assets:()=>h,toc:()=>a,contentTitle:()=>d});var s=JSON.parse('{"id":"compute-storage-decoupled/upgrade","title":"\u5347\u7EA7","description":"\x3c!--","source":"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-3.0/compute-storage-decoupled/upgrade.md","sourceDirName":"compute-storage-decoupled","slug":"/compute-storage-decoupled/upgrade","permalink":"/zh-CN/docs/3.0/compute-storage-decoupled/upgrade","draft":false,"unlisted":false,"tags":[],"version":"3.0","frontMatter":{"title":"\u5347\u7EA7","language":"zh-CN"},"sidebar":"docs","previous":{"title":"\u6570\u636E\u7F13\u5B58","permalink":"/zh-CN/docs/3.0/compute-storage-decoupled/file-cache"},"next":{"title":"Meta Service API \u53C2\u8003","permalink":"/zh-CN/docs/3.0/compute-storage-decoupled/meta-service-api"}}'),c=l("785893"),i=l("250065");let r={title:"\u5347\u7EA7",language:"zh-CN"},d=void 0,h={},a=[{value:"\u6982\u8FF0",id:"\u6982\u8FF0",level:2},{value:"Doris \u7248\u672C\u8BF4\u660E",id:"doris-\u7248\u672C\u8BF4\u660E",level:2},{value:"\u5347\u7EA7\u6B65\u9AA4",id:"\u5347\u7EA7\u6B65\u9AA4",level:2},{value:"\u5347\u7EA7\u8BF4\u660E",id:"\u5347\u7EA7\u8BF4\u660E",level:3},{value:"\u5347\u7EA7\u6D41\u7A0B\u6982\u89C8",id:"\u5347\u7EA7\u6D41\u7A0B\u6982\u89C8",level:3},{value:"\u5347\u7EA7\u524D\u7F6E\u5DE5\u4F5C",id:"\u5347\u7EA7\u524D\u7F6E\u5DE5\u4F5C",level:3},{value:"\u5347\u7EA7\u6D41\u7A0B",id:"\u5347\u7EA7\u6D41\u7A0B",level:3},{value:"1. \u5347\u7EA7 MetaService",id:"1-\u5347\u7EA7-metaservice",level:4},{value:"2. \u5347\u7EA7 Recycler\uFF08\u5982\u6709\uFF09",id:"2-\u5347\u7EA7-recycler\u5982\u6709",level:4},{value:"3. \u5347\u7EA7 BE",id:"3-\u5347\u7EA7-be",level:4},{value:"4. \u5347\u7EA7 FE",id:"4-\u5347\u7EA7-fe",level:4},{value:"FAQ",id:"faq",level:2}];function o(e){let n={a:"a",admonition:"admonition",blockquote:"blockquote",code:"code",h2:"h2",h3:"h3",h4:"h4",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.a)(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(n.h2,{id:"\u6982\u8FF0",children:"\u6982\u8FF0"}),"\n",(0,c.jsxs)(n.p,{children:["\u672C\u6307\u5357\u63D0\u4F9B\u4E86\u4F7F\u7528\u5B58\u50A8\u8BA1\u7B97\u89E3\u8026\uFF08\u5373\uFF0C\u5B58\u7B97\u5206\u79BB\uFF09\u67B6\u6784\u5347\u7EA7 Doris \u7684\u5206\u6B65\u8BF4\u660E\u3002\u5347\u7EA7\u8BF7\u4F7F\u7528\u672C\u7AE0\u8282\u4E2D\u63A8\u8350\u7684\u6B65\u9AA4\u8FDB\u884C\u96C6\u7FA4\u5347\u7EA7\uFF0CDoris \u96C6\u7FA4\u5347\u7EA7\u53EF\u4F7F\u7528",(0,c.jsx)(n.strong,{children:"\u6EDA\u52A8\u5347\u7EA7"}),"\u7684\u65B9\u5F0F\u8FDB\u884C\u5347\u7EA7\uFF0C\u65E0\u9700\u96C6\u7FA4\u8282\u70B9\u5168\u90E8\u505C\u673A\u5347\u7EA7\uFF0C\u6781\u5927\u7A0B\u5EA6\u4E0A\u964D\u4F4E\u5BF9\u4E0A\u5C42\u5E94\u7528\u7684\u5F71\u54CD\u3002"]}),"\n",(0,c.jsx)(n.h2,{id:"doris-\u7248\u672C\u8BF4\u660E",children:"Doris \u7248\u672C\u8BF4\u660E"}),"\n",(0,c.jsx)(n.p,{children:"Doris \u4F7F\u7528\u4E09\u4F4D\u6570\u7684\u7248\u672C\u53F7\u683C\u5F0F\uFF0C\u53EF\u4EE5\u4F7F\u7528\u5982\u4E0B SQL \u8FDB\u884C\u67E5\u770B\u7248\u672C\uFF1A"}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-sql",children:"MySQL [(none)]> select @@version_comment;\n+--------------------------------------------------------+\n| @@version_comment                                      |\n+--------------------------------------------------------+\n| Doris version doris-3.0.3-rc03-43f06a5e26 (Cloud Mode) |\n+--------------------------------------------------------+\n"})}),"\n",(0,c.jsxs)(n.blockquote,{children:["\n",(0,c.jsxs)(n.p,{children:["\u5176\u4E2D",(0,c.jsx)(n.code,{children:"3.0.3"}),"\u7684\u7B2C\u4E00\u4E2A\u6570\u5B57\u8868\u793A\u5927\u7248\u672C\u53F7\uFF0C\u7B2C\u4E8C\u4E2A\u6570\u5B57\u8868\u793A\u4E2D\u7248\u672C\u53F7\uFF0C\u7B2C\u4E09\u4E2A\u6570\u5B57\u8868\u793A\u5C0F\u7248\u672C\u53F7\uFF0C\u5728\u67D0\u4E9B\u60C5\u51B5\u4E0B\uFF0C\u7248\u672C\u53F7\u4F1A\u53D8\u6210 4 \u4F4D\uFF0C\u5982",(0,c.jsx)(n.code,{children:"2.0.2.1"}),"\uFF0C\u6B64\u65F6\u7684\u6700\u540E\u4E00\u4F4D\u6570\u5B57\u8868\u793A\u8FD9\u662F\u4E00\u4E2A\u7D27\u6025\u4FEE\u590D bug \u7684\u7248\u672C\uFF0C\u8FD9\u901A\u5E38\u610F\u5473\u7740\u8FD9\u4E2A\u5C0F\u7248\u672C\u6709\u4E00\u4E9B\u91CD\u5927\u7684 bug\u3002"]}),"\n",(0,c.jsxs)(n.p,{children:["Doris \u4ECE",(0,c.jsx)(n.code,{children:"3.0.0"}),"\u7248\u672C\u5F00\u59CB\u652F\u6301\u5B58\u7B97\u5206\u79BB\u6A21\u5F0F\u90E8\u7F72\uFF0C\u5F53\u4EE5\u8FD9\u79CD\u6A21\u5F0F\u90E8\u7F72\u540E\uFF0C\u7248\u672C\u53F7\u540E\u9762\u4F1A\u6709 Cloud Mode \u540E\u7F00\uFF0C\u4EE5\u5B58\u7B97\u4E00\u4F53\u6A21\u5F0F\u542F\u52A8\u7684\u8BDD\uFF0C\u5219\u6CA1\u6709\u8FD9\u4E2A\u540E\u7F00\u3002"]}),"\n"]}),"\n",(0,c.jsx)(n.p,{children:"Doris \u4EE5\u5B58\u7B97\u5206\u79BB\u6A21\u5F0F\u90E8\u7F72\u4E4B\u540E\uFF0C\u4E0D\u652F\u6301\u5207\u6362\u6210\u5B58\u7B97\u4E00\u4F53\u6A21\u5F0F\u3002\u540C\u6837\u7684\uFF0C\u5B58\u7B97\u4E00\u4F53\u6A21\u5F0F\u7684 Doris \u4E5F\u4E0D\u652F\u6301\u5207\u6362\u6210\u5B58\u7B97\u5206\u79BB\u6A21\u5F0F\u3002"}),"\n",(0,c.jsx)(n.p,{children:"Doris \u539F\u5219\u4E0A\u652F\u6301\u4ECE\u4F4E\u7248\u672C\u5347\u7EA7\u5230\u9AD8\u7248\u672C\uFF0C\u4EE5\u53CA\u5C0F\u7248\u672C\u964D\u7EA7\uFF0C\u5BF9\u4E8E\u4E2D\u7248\u672C\u6216\u5927\u7248\u672C\uFF0C\u5219\u4E0D\u652F\u6301\u964D\u7EA7\u3002"}),"\n",(0,c.jsx)(n.h2,{id:"\u5347\u7EA7\u6B65\u9AA4",children:"\u5347\u7EA7\u6B65\u9AA4"}),"\n",(0,c.jsx)(n.h3,{id:"\u5347\u7EA7\u8BF4\u660E",children:"\u5347\u7EA7\u8BF4\u660E"}),"\n",(0,c.jsxs)(n.ol,{children:["\n",(0,c.jsxs)(n.li,{children:["\u786E\u4FDD\u4F60\u7684 Doris \u662F\u4EE5\u5B58\u7B97\u5206\u79BB\u6A21\u5F0F\u542F\u52A8\u7684\uFF0C\u5982\u679C\u4F60\u4E0D\u6E05\u695A\u5F53\u524D\u7684 Doris \u662F\u4EC0\u4E48\u90E8\u7F72\u65B9\u5F0F\uFF0C\u53EF\u4EE5\u53C2\u8003",(0,c.jsx)(n.a,{href:"#doris-%E7%89%88%E6%9C%AC%E8%AF%B4%E6%98%8E",children:"\u4E0A\u4E00\u5C0F\u8282"}),"\u7684\u8BF4\u660E\u3002\n\u5BF9\u4E8E\u5B58\u7B97\u4E00\u4F53\u6A21\u5F0F\u7684 Doris\uFF0C\u5347\u7EA7\u6B65\u9AA4\u53EF\u53C2\u8003",(0,c.jsx)(n.a,{href:"../admin-manual/cluster-management/upgrade",children:"\u96C6\u7FA4\u5347\u7EA7"}),"\u3002"]}),"\n",(0,c.jsx)(n.li,{children:"\u786E\u4FDD\u4F60\u7684 Doris \u5BFC\u6570\u4EFB\u52A1\u5177\u5907\u91CD\u8BD5\u673A\u5236\uFF0C\u4EE5\u907F\u514D\u5347\u7EA7\u8FC7\u7A0B\u4E2D\uFF0C\u56E0\u8282\u70B9\u91CD\u542F\u800C\u5BFC\u81F4\u7684\u5BFC\u6570\u4EFB\u52A1\u5931\u8D25\u3002"}),"\n",(0,c.jsx)(n.li,{children:"\u5728\u5347\u7EA7\u4E4B\u524D\uFF0C\u6211\u4EEC\u5EFA\u8BAE\u4F60\u68C0\u67E5\u4E00\u4E0B\u5404\u4E2A Doris \u7EC4\u4EF6\uFF08MetaService\u3001Recycler\u3001Frontend\u3001Backend\uFF09\u7684\u72B6\u6001\u6B63\u5E38\u5E76\u4E14\u65E0\u5F02\u5E38\u65E5\u5FD7\uFF0C\u4EE5\u514D\u5347\u7EA7\u8FC7\u7A0B\u4E2D\u53D7\u5230\u5F71\u54CD\u3002"}),"\n"]}),"\n",(0,c.jsx)(n.h3,{id:"\u5347\u7EA7\u6D41\u7A0B\u6982\u89C8",children:"\u5347\u7EA7\u6D41\u7A0B\u6982\u89C8"}),"\n",(0,c.jsxs)(n.ol,{children:["\n",(0,c.jsx)(n.li,{children:"\u5143\u6570\u636E\u5907\u4EFD"}),"\n",(0,c.jsx)(n.li,{children:"\u5347\u7EA7 MetaService"}),"\n",(0,c.jsx)(n.li,{children:"\u5347\u7EA7 Recycler\uFF08\u5982\u6709\uFF09"}),"\n",(0,c.jsx)(n.li,{children:"\u5347\u7EA7 BE"}),"\n",(0,c.jsxs)(n.li,{children:["\u5347\u7EA7 FE\n",(0,c.jsxs)(n.ol,{children:["\n",(0,c.jsx)(n.li,{children:"\u5148\u5347\u7EA7 Observer \u89D2\u8272\u7684 FE"}),"\n",(0,c.jsx)(n.li,{children:"\u518D\u5347\u7EA7\u5176\u4ED6\u975E Master \u89D2\u8272\u7684 FE"}),"\n",(0,c.jsx)(n.li,{children:"\u6700\u540E\u5347\u7EA7 Master \u89D2\u8272\u7684 FE"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,c.jsx)(n.h3,{id:"\u5347\u7EA7\u524D\u7F6E\u5DE5\u4F5C",children:"\u5347\u7EA7\u524D\u7F6E\u5DE5\u4F5C"}),"\n",(0,c.jsxs)(n.ol,{children:["\n",(0,c.jsxs)(n.li,{children:["\u5907\u4EFD Master FE \u7684\u5143\u6570\u636E\u76EE\u5F55\uFF0C\u5143\u6570\u636E\u76EE\u5F55\u901A\u5E38\u662F FE \u76EE\u5F55\u4E0B doris-meta \u76EE\u5F55\uFF0C\u5982\u679C\u6B64\u76EE\u5F55\u4E3A\u7A7A\uFF0C\u90A3\u4E48\u53EF\u80FD\u662F\u4FEE\u6539\u4E86\u76EE\u5F55\u7684\u4F4D\u7F6E\uFF0C\u4F60\u53EF\u4EE5\u5230 FE \u7684\u914D\u7F6E\u6587\u4EF6\uFF08conf/fe.conf\uFF09\u4E2D\u641C\u7D22",(0,c.jsx)(n.code,{children:"meta_dir"}),"\u914D\u7F6E\u9879\u3002"]}),"\n",(0,c.jsxs)(n.li,{children:["\u4ECE Doris \u5B98\u65B9\u7F51\u7AD9",(0,c.jsx)(n.a,{href:"/download",children:"\u4E0B\u8F7D"}),"\u5B89\u88C5\u5305\uFF0C\u5EFA\u8BAE\u6821\u9A8C SHA-512 \u7801\uFF0C\u4FDD\u8BC1\u4E0B\u8F7D\u5230\u5230\u5B89\u88C5\u5305\u4E0E Doris \u5B98\u65B9\u63D0\u4F9B\u7684\u662F\u4E00\u81F4\u7684\u3002"]}),"\n"]}),"\n",(0,c.jsx)(n.h3,{id:"\u5347\u7EA7\u6D41\u7A0B",children:"\u5347\u7EA7\u6D41\u7A0B"}),"\n",(0,c.jsx)(n.h4,{id:"1-\u5347\u7EA7-metaservice",children:"1. \u5347\u7EA7 MetaService"}),"\n",(0,c.jsx)(n.p,{children:"\u5047\u8BBE\u4EE5\u4E0B\u73AF\u5883\u53D8\u91CF\uFF1A"}),"\n",(0,c.jsxs)(n.ul,{children:["\n",(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:"${MS_HOME}"}),"\uFF1AMetaService \u7684\u5DE5\u4F5C\u76EE\u5F55\u3002"]}),"\n",(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:"${MS_PACKAGE_DIR}"}),"\uFF1A\u5305\u542B\u65B0 MetaService \u5305\u7684\u76EE\u5F55\u3002"]}),"\n"]}),"\n",(0,c.jsx)(n.p,{children:"\u6309\u7167\u4EE5\u4E0B\u6B65\u9AA4\u5347\u7EA7\u6BCF\u4E2A MetaService \u5B9E\u4F8B\u3002"}),"\n",(0,c.jsx)(n.p,{children:"1.1. \u505C\u6B62\u5F53\u524D MetaService\uFF1A"}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-shell",children:"cd ${MS_HOME}\nsh bin/stop.sh\n"})}),"\n",(0,c.jsx)(n.p,{children:"1.2. \u5907\u4EFD\u73B0\u6709 MetaService \u4E8C\u8FDB\u5236\u6587\u4EF6\uFF1A"}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-shell",children:"mv ${MS_HOME}/bin bin_backup_$(date +%Y%m%d_%H%M%S)\nmv ${MS_HOME}/lib lib_backup_$(date +%Y%m%d_%H%M%S)\n"})}),"\n",(0,c.jsx)(n.p,{children:"1.3. \u90E8\u7F72\u65B0\u5305\uFF1A"}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-shell",children:"cp ${MS_PACKAGE_DIR}/bin ${MS_HOME}/bin\ncp ${MS_PACKAGE_DIR}/lib ${MS_HOME}/lib\n"})}),"\n",(0,c.jsx)(n.p,{children:"1.4. \u542F\u52A8\u65B0\u7684 MetaService\uFF1A"}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-shell",children:"sh ${MS_HOME}/bin/start.sh --daemon\n"})}),"\n",(0,c.jsx)(n.p,{children:"1.5. \u68C0\u67E5\u65B0 MetaService \u7684\u72B6\u6001\uFF1A"}),"\n",(0,c.jsxs)(n.p,{children:["\u786E\u4FDD\u65B0 MetaService \u6B63\u5728\u8FD0\u884C\uFF0C\u5E76\u4E14\u5728 ",(0,c.jsx)(n.code,{children:"${MS_HOME}/log/doris_cloud.out"})," \u4E2D\u6709\u65B0\u7684\u7248\u672C\u53F7\u3002"]}),"\n",(0,c.jsx)(n.h4,{id:"2-\u5347\u7EA7-recycler\u5982\u6709",children:"2. \u5347\u7EA7 Recycler\uFF08\u5982\u6709\uFF09"}),"\n",(0,c.jsx)(n.admonition,{type:"caution",children:(0,c.jsx)(n.p,{children:"\u5982\u679C\u4F60\u6CA1\u6709\u5355\u72EC\u90E8\u7F72 Recycler \u7EC4\u4EF6\uFF0C\u90A3\u4E48\u53EF\u4EE5\u8DF3\u8FC7\u8FD9\u4E00\u6B65\u3002"})}),"\n",(0,c.jsx)(n.p,{children:"\u5047\u8BBE\u4EE5\u4E0B\u73AF\u5883\u53D8\u91CF\uFF1A"}),"\n",(0,c.jsxs)(n.ul,{children:["\n",(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:"${RECYCLER_HOME}"}),"\uFF1ARecycler \u7684\u5DE5\u4F5C\u76EE\u5F55"]}),"\n",(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:"${MS_PACKAGE_DIR}"}),"\uFF1A\u5305\u542B\u65B0 MetaService \u5305\u7684\u76EE\u5F55\uFF0CMetaService \u548C Recycler \u4F7F\u7528\u76F8\u540C\u7684\u5305\u3002"]}),"\n"]}),"\n",(0,c.jsx)(n.p,{children:"\u6309\u7167\u4EE5\u4E0B\u6B65\u9AA4\u5347\u7EA7\u6BCF\u4E2A Recycler \u5B9E\u4F8B\u3002"}),"\n",(0,c.jsx)(n.p,{children:"2.1. \u505C\u6B62\u5F53\u524D Recycler\uFF1A"}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-shell",children:"cd ${RECYCLER_HOME}\nsh bin/stop.sh\n"})}),"\n",(0,c.jsx)(n.p,{children:"2.2. \u5907\u4EFD\u73B0\u6709 Recycler \u4E8C\u8FDB\u5236\u6587\u4EF6\uFF1A"}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-shell",children:"mv ${RECYCLER_HOME}/bin bin_backup_$(date +%Y%m%d_%H%M%S)\nmv ${RECYCLER_HOME}/lib lib_backup_$(date +%Y%m%d_%H%M%S)\n"})}),"\n",(0,c.jsx)(n.p,{children:"2.3. \u90E8\u7F72\u65B0\u5305\uFF1A"}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-shell",children:"cp ${RECYCLER_PACKAGE_DIR}/bin ${RECYCLER_HOME}/bin\ncp ${RECYCLER_PACKAGE_DIR}/lib ${RECYCLER_HOME}/lib\n"})}),"\n",(0,c.jsx)(n.p,{children:"2.4. \u542F\u52A8\u65B0\u7684 Recycler\uFF1A"}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-shell",children:"sh ${RECYCLER_HOME}/bin/start.sh --recycler --daemon\n"})}),"\n",(0,c.jsx)(n.p,{children:"2.5. \u68C0\u67E5\u65B0 Recycler \u7684\u72B6\u6001\uFF1A"}),"\n",(0,c.jsxs)(n.p,{children:["\u786E\u4FDD\u65B0 Recycler \u6B63\u5728\u8FD0\u884C\uFF0C\u5E76\u4E14\u5728 ",(0,c.jsx)(n.code,{children:"${RECYCLER_HOME}/log/doris_cloud.out"})," \u4E2D\u6709\u65B0\u7684\u7248\u672C\u53F7\u3002"]}),"\n",(0,c.jsx)(n.h4,{id:"3-\u5347\u7EA7-be",children:"3. \u5347\u7EA7 BE"}),"\n",(0,c.jsx)(n.p,{children:"\u9A8C\u8BC1\u6240\u6709 MetaService \u548C Recycler\uFF08\u5982\u679C\u5355\u72EC\u5B89\u88C5\uFF09\u5B9E\u4F8B\u5DF2\u5347\u7EA7\u3002"}),"\n",(0,c.jsx)(n.p,{children:"\u5047\u8BBE\u4EE5\u4E0B\u73AF\u5883\u53D8\u91CF\uFF1A"}),"\n",(0,c.jsxs)(n.ul,{children:["\n",(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:"${BE_HOME}"}),"\uFF1ABE \u7684\u5DE5\u4F5C\u76EE\u5F55\u3002"]}),"\n",(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:"${BE_PACKAGE_DIR}"}),"\uFF1A\u5305\u542B\u65B0 BE \u5305\u7684\u76EE\u5F55\u3002"]}),"\n"]}),"\n",(0,c.jsx)(n.p,{children:"\u6309\u7167\u4EE5\u4E0B\u6B65\u9AA4\u5347\u7EA7\u6BCF\u4E2A BE \u5B9E\u4F8B\u3002"}),"\n",(0,c.jsx)(n.p,{children:"3.1. \u505C\u6B62\u5F53\u524D BE\uFF1A"}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-shell",children:"cd ${BE_HOME}\nsh bin/stop_be.sh\n"})}),"\n",(0,c.jsx)(n.p,{children:"3.2. \u5907\u4EFD\u73B0\u6709 BE \u4E8C\u8FDB\u5236\u6587\u4EF6\uFF1A"}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-shell",children:"mv ${BE_HOME}/bin bin_backup_$(date +%Y%m%d_%H%M%S)\nmv ${BE_HOME}/lib lib_backup_$(date +%Y%m%d_%H%M%S)\n"})}),"\n",(0,c.jsx)(n.p,{children:"3.3. \u90E8\u7F72\u65B0\u5305\uFF1A"}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-shell",children:"cp ${BE_PACKAGE_DIR}/bin ${BE_HOME}/bin\ncp ${BE_PACKAGE_DIR}/lib ${BE_HOME}/lib\n"})}),"\n",(0,c.jsx)(n.p,{children:"3.4. \u542F\u52A8\u65B0\u7684 BE\uFF1A"}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-shell",children:"sh ${BE_HOME}/bin/start_be.sh --daemon\n"})}),"\n",(0,c.jsx)(n.p,{children:"3.5. \u68C0\u67E5\u65B0 BE \u7684\u72B6\u6001\uFF1A"}),"\n",(0,c.jsx)(n.p,{children:"\u786E\u8BA4\u65B0\u7684 BE \u662F\u5426\u6B63\u5728\u8FD0\u884C\uFF0C\u5E76\u4E14\u4F7F\u7528\u65B0\u7248\u672C\u6B63\u5E38\u8FD0\u884C\u3002\u53EF\u4EE5\u4F7F\u7528\u4EE5\u4E0B SQL \u83B7\u53D6\u72B6\u6001\u548C\u7248\u672C\u3002"}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-sql",children:"show backends;\n"})}),"\n",(0,c.jsx)(n.h4,{id:"4-\u5347\u7EA7-fe",children:"4. \u5347\u7EA7 FE"}),"\n",(0,c.jsx)(n.p,{children:"\u9A8C\u8BC1\u6240\u6709 BE \u5B9E\u4F8B\u5DF2\u5347\u7EA7\u3002"}),"\n",(0,c.jsx)(n.p,{children:"\u5047\u8BBE\u4EE5\u4E0B\u73AF\u5883\u53D8\u91CF\uFF1A"}),"\n",(0,c.jsxs)(n.ul,{children:["\n",(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:"${FE_HOME}"}),"\uFF1AFE \u7684\u5DE5\u4F5C\u76EE\u5F55\u3002"]}),"\n",(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:"${FE_PACKAGE_DIR}"}),"\uFF1A\u5305\u542B\u65B0 FE \u5305\u7684\u76EE\u5F55\u3002"]}),"\n"]}),"\n",(0,c.jsx)(n.p,{children:"\u6309\u4EE5\u4E0B\u987A\u5E8F\u5347\u7EA7 Frontend\uFF08FE\uFF09\u5B9E\u4F8B\uFF1A"}),"\n",(0,c.jsxs)(n.ol,{children:["\n",(0,c.jsx)(n.li,{children:"\u89C2\u5BDF\u8005 FE \u8282\u70B9"}),"\n",(0,c.jsx)(n.li,{children:"\u975E\u4E3B FE \u8282\u70B9"}),"\n",(0,c.jsx)(n.li,{children:"\u4E3B FE \u8282\u70B9"}),"\n"]}),"\n",(0,c.jsx)(n.p,{children:"\u6309\u7167\u4EE5\u4E0B\u6B65\u9AA4\u5347\u7EA7\u6BCF\u4E2A Frontend\uFF08FE\uFF09\u8282\u70B9\u3002"}),"\n",(0,c.jsx)(n.p,{children:"4.1. \u505C\u6B62\u5F53\u524D FE\uFF1A"}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-shell",children:"cd ${FE_HOME}\nsh bin/stop_fe.sh\n"})}),"\n",(0,c.jsx)(n.p,{children:"4.2. \u5907\u4EFD\u73B0\u6709 FE \u4E8C\u8FDB\u5236\u6587\u4EF6\uFF1A"}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-shell",children:"mv ${FE_HOME}/bin bin_backup_$(date +%Y%m%d_%H%M%S)\nmv ${FE_HOME}/lib lib_backup_$(date +%Y%m%d_%H%M%S)\n"})}),"\n",(0,c.jsx)(n.p,{children:"4.3. \u90E8\u7F72\u65B0\u5305\uFF1A"}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-shell",children:"cp ${FE_PACKAGE_DIR}/bin ${FE_HOME}/bin\ncp ${FE_PACKAGE_DIR}/lib ${FE_HOME}/lib\n"})}),"\n",(0,c.jsx)(n.p,{children:"4.4. \u542F\u52A8\u65B0\u7684 FE\uFF1A"}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-shell",children:"sh ${FE_HOME}/bin/start_fe.sh --daemon\n"})}),"\n",(0,c.jsx)(n.p,{children:"4.5. \u68C0\u67E5\u65B0 FE \u7684\u72B6\u6001\uFF1A"}),"\n",(0,c.jsx)(n.p,{children:"\u786E\u8BA4\u65B0\u7684 FE \u662F\u5426\u6B63\u5728\u8FD0\u884C\uFF0C\u5E76\u4E14\u4F7F\u7528\u65B0\u7248\u672C\u6B63\u5E38\u8FD0\u884C\u3002\u53EF\u4EE5\u4F7F\u7528\u4EE5\u4E0B SQL \u83B7\u53D6\u72B6\u6001\u548C\u7248\u672C\u3002"}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-sql",children:"show frontends;\n"})}),"\n",(0,c.jsx)(n.h2,{id:"faq",children:"FAQ"}),"\n",(0,c.jsxs)(n.ol,{children:["\n",(0,c.jsx)(n.li,{children:"\u5B58\u7B97\u4E00\u4F53\u6A21\u5F0F\u7684 Doris \u7684\u5347\u7EA7\u524D\u9700\u8981\u5173\u95ED\u526F\u672C\u5747\u8861\u529F\u80FD\uFF0C\u5B58\u7B97\u5206\u79BB\u6A21\u5F0F\u4E0B\u7684\u96C6\u7FA4\u9700\u8981\u5417\uFF1F"}),"\n"]}),"\n",(0,c.jsx)(n.p,{children:"\u4E0D\u9700\u8981\u3002\u56E0\u4E3A\u5B58\u7B97\u5206\u79BB\u6A21\u5F0F\u4E0B\uFF0CDoris \u7684\u6570\u636E\u5B58\u653E\u5728 HDFS \u6216 S3 \u670D\u52A1\u4E0A\uFF0C\u56E0\u6B64\u4E0D\u5B58\u5728\u526F\u672C\u5747\u8861\u7684\u9700\u6C42\u3002"}),"\n",(0,c.jsxs)(n.ol,{start:"2",children:["\n",(0,c.jsx)(n.li,{children:"\u6709\u4E86\u72EC\u7ACB\u7684 MetaService \u63D0\u4F9B\u5143\u6570\u636E\u670D\u52A1\uFF0C\u4E3A\u4EC0\u4E48 FE \u8FD8\u9700\u8981\u5907\u4EFD\u5143\u6570\u636E\uFF1F"}),"\n"]}),"\n",(0,c.jsx)(n.p,{children:"\u56E0\u4E3A\u76EE\u524D MetaService \u4FDD\u5B58\u4E86\u4E00\u90E8\u5206\u5143\u6570\u636E\uFF0CFE \u4E5F\u4FDD\u5B58\u4E86\u4E00\u90E8\u5206\u5143\u6570\u636E\uFF0C\u4E3A\u4E86\u7A33\u59A5\u8D77\u89C1\uFF0C\u6211\u4EEC\u5EFA\u8BAE\u5907\u4EFD FE \u7684\u5143\u6570\u636E\u3002"})]})}function t(e={}){let{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}},250065:function(e,n,l){l.d(n,{Z:function(){return d},a:function(){return r}});var s=l(667294);let c={},i=s.createContext(c);function r(e){let n=s.useContext(i);return s.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(c):e.components||c:r(e.components),s.createElement(i.Provider,{value:n},e.children)}}}]);