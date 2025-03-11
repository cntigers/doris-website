"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["516886"],{719691:function(n,e,s){s.r(e),s.d(e,{default:()=>h,frontMatter:()=>l,metadata:()=>t,assets:()=>i,toc:()=>a,contentTitle:()=>d});var t=JSON.parse('{"id":"sql-manual/sql-functions/scalar-functions/encrypt-digest-functions/sm4-decrypt","title":"SM4_DECRYPT","description":"\x3c!--","source":"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/sql-manual/sql-functions/scalar-functions/encrypt-digest-functions/sm4-decrypt.md","sourceDirName":"sql-manual/sql-functions/scalar-functions/encrypt-digest-functions","slug":"/sql-manual/sql-functions/scalar-functions/encrypt-digest-functions/sm4-decrypt","permalink":"/zh-CN/docs/dev/sql-manual/sql-functions/scalar-functions/encrypt-digest-functions/sm4-decrypt","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"title":"SM4_DECRYPT","language":"zh-CN"},"sidebar":"docs","previous":{"title":"SM4_ENCRYPT","permalink":"/zh-CN/docs/dev/sql-manual/sql-functions/scalar-functions/encrypt-digest-functions/sm4-encrypt"},"next":{"title":"SM3","permalink":"/zh-CN/docs/dev/sql-manual/sql-functions/scalar-functions/encrypt-digest-functions/sm3"}}'),c=s("785893"),r=s("250065");let l={title:"SM4_DECRYPT",language:"zh-CN"},d=void 0,i={},a=[{value:"\u63CF\u8FF0",id:"\u63CF\u8FF0",level:2},{value:"\u8BED\u6CD5",id:"\u8BED\u6CD5",level:2},{value:"\u53C2\u6570",id:"\u53C2\u6570",level:2},{value:"\u8FD4\u56DE\u503C",id:"\u8FD4\u56DE\u503C",level:2},{value:"\u793A\u4F8B",id:"\u793A\u4F8B",level:2},{value:"\u89E3\u5BC6\u6210\u529F",id:"\u89E3\u5BC6\u6210\u529F",level:3},{value:"\u89E3\u5BC6\u5931\u8D25",id:"\u89E3\u5BC6\u5931\u8D25",level:3}];function o(n){let e={code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,r.a)(),...n.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(e.h2,{id:"\u63CF\u8FF0",children:"\u63CF\u8FF0"}),"\n",(0,c.jsxs)(e.p,{children:["SM4 \u662F\u4E00\u79CD\u56FD\u5BB6\u6807\u51C6\u7684\u5BF9\u79F0\u5BC6\u94A5\u52A0\u5BC6\u7B97\u6CD5\uFF0C\u5E7F\u6CDB\u5E94\u7528\u4E8E\u91D1\u878D\u3001\u901A\u4FE1\u3001\u7535\u5B50\u5546\u52A1\u7B49\u9886\u57DF\u3002SM4_DECRYPT \u51FD\u6570\u7528\u4E8E\u5BF9\u6570\u636E\u8FDB\u884C SM4 \u89E3\u5BC6\u3002\u9ED8\u8BA4\u91C7\u7528 ",(0,c.jsx)(e.code,{children:"SM4_128_ECB"})," \u7B97\u6CD5\u3002"]}),"\n",(0,c.jsx)(e.h2,{id:"\u8BED\u6CD5",children:"\u8BED\u6CD5"}),"\n",(0,c.jsx)(e.pre,{children:(0,c.jsx)(e.code,{className:"language-sql",children:"SM4_DECRYPT( <str>, <key_str>[, <init_vector>][, <encryption_mode>])\n"})}),"\n",(0,c.jsx)(e.h2,{id:"\u53C2\u6570",children:"\u53C2\u6570"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,c.jsxs)(e.table,{children:[(0,c.jsx)(e.thead,{children:(0,c.jsxs)(e.tr,{children:[(0,c.jsx)(e.th,{children:"\u53C2\u6570"}),(0,c.jsx)(e.th,{children:"\u8BF4\u660E"})]})}),(0,c.jsxs)(e.tbody,{children:[(0,c.jsxs)(e.tr,{children:[(0,c.jsx)(e.td,{children:(0,c.jsx)(e.code,{children:"<str>"})}),(0,c.jsx)(e.td,{children:"\u4E3A\u5F85\u89E3\u5BC6\u6587\u672C"})]}),(0,c.jsxs)(e.tr,{children:[(0,c.jsx)(e.td,{children:(0,c.jsx)(e.code,{children:"<key_str>"})}),(0,c.jsxs)(e.td,{children:["\u4E3A\u5BC6\u94A5\u3002\u6CE8\u610F\u6B64\u5BC6\u94A5\u5E76\u975E 16 \u8FDB\u5236\u7F16\u7801\uFF0C\u800C\u662F\u7F16\u7801\u540E\u7684\u5B57\u7B26\u4E32\u8868\u793A\u3002\u4F8B\u5982\u5BF9\u4E8E 128 \u4F4D\u5BC6\u94A5\u52A0\u5BC6\uFF0C",(0,c.jsx)(e.code,{children:"key_str"})," \u957F\u5EA6\u5E94\u4E3A 16\u3002\u5982\u679C\u5BC6\u94A5\u957F\u5EA6\u4E0D\u8DB3\uFF0C\u4F7F\u7528",(0,c.jsx)(e.strong,{children:"\u96F6\u586B\u5145"}),"\u8865\u9F50\u3002\u5982\u679C\u957F\u5EA6\u8D85\u51FA\uFF0C\u4F7F\u7528\u5FAA\u73AF\u5F02\u6216\u7684\u65B9\u5F0F\u6C42\u51FA\u6700\u7EC8\u5BC6\u94A5\u3002\u4F8B\u5982\u7B97\u6CD5\u4F7F\u7528\u7684 128 \u4F4D\u5BC6\u94A5\u4E3A ",(0,c.jsx)(e.code,{children:"key"}),"\uFF0C\u5219 ",(0,c.jsx)(e.code,{children:"key[i] = key_str[i] ^ key_str[i+128] ^ key_str[i+256] ^ ..."})]})]}),(0,c.jsxs)(e.tr,{children:[(0,c.jsx)(e.td,{children:(0,c.jsx)(e.code,{children:"<init_vector>"})}),(0,c.jsx)(e.td,{children:"\u4E3A\u7B97\u6CD5\u4E2D\u4F7F\u7528\u5230\u7684\u521D\u59CB\u5411\u91CF\uFF0C\u4EC5\u5728\u7279\u5B9A\u7B97\u6CD5\u4E0B\u751F\u6548\uFF0C\u5982\u4E0D\u6307\u5B9A\uFF0C\u5219 Doris \u4F7F\u7528\u5185\u7F6E\u5411\u91CF"})]}),(0,c.jsxs)(e.tr,{children:[(0,c.jsx)(e.td,{children:(0,c.jsx)(e.code,{children:"<encryption_mode>"})}),(0,c.jsx)(e.td,{children:"\u4E3A\u52A0\u5BC6\u7B97\u6CD5\uFF0C\u53EF\u9009\u503C\u89C1\u4E8E\u53D8\u91CF"})]})]})]}),"\n",(0,c.jsx)(e.h2,{id:"\u8FD4\u56DE\u503C",children:"\u8FD4\u56DE\u503C"}),"\n",(0,c.jsx)(e.p,{children:"\u5982\u679C\u89E3\u5BC6\u6210\u529F\uFF1A\u8FD4\u56DE\u89E3\u5BC6\u540E\u7684\u6570\u636E\uFF0C\u901A\u5E38\u662F\u660E\u6587\u7684\u4E8C\u8FDB\u5236\u8868\u793A\u3002"}),"\n",(0,c.jsx)(e.p,{children:"\u5982\u679C\u89E3\u5BC6\u5931\u8D25\uFF1A\u8FD4\u56DE NULL\u3002"}),"\n",(0,c.jsx)(e.h2,{id:"\u793A\u4F8B",children:"\u793A\u4F8B"}),"\n",(0,c.jsx)(e.h3,{id:"\u89E3\u5BC6\u6210\u529F",children:"\u89E3\u5BC6\u6210\u529F"}),"\n",(0,c.jsx)(e.p,{children:"\u4F7F\u7528\u9ED8\u8BA4\u7B97\u6CD5"}),"\n",(0,c.jsx)(e.pre,{children:(0,c.jsx)(e.code,{className:"language-sql",children:"set block_encryption_mode='';\nselect SM4_DECRYPT(FROM_BASE64('aDjwRflBrDjhBZIOFNw3Tg=='),'F3229A0B371ED2D9441B830D21A390C3');\n"})}),"\n",(0,c.jsx)(e.pre,{children:(0,c.jsx)(e.code,{className:"language-text",children:"+--------------------------------------------------------------------------------+\n| sm4_decrypt(from_base64('aDjwRflBrDjhBZIOFNw3Tg=='), '***', '', 'SM4_128_ECB') |\n+--------------------------------------------------------------------------------+\n| text                                                                           |\n+--------------------------------------------------------------------------------+\n"})}),"\n",(0,c.jsx)(e.p,{children:"\u4F7F\u7528 SM4_128_CBC \u7B97\u6CD5"}),"\n",(0,c.jsx)(e.pre,{children:(0,c.jsx)(e.code,{className:"language-sql",children:"set block_encryption_mode=\"SM4_128_CBC\";\nselect SM4_DECRYPT(FROM_BASE64('FSYstvOmH2cXy7B/072Mug=='),'F3229A0B371ED2D9441B830D21A390C3');\n"})}),"\n",(0,c.jsx)(e.pre,{children:(0,c.jsx)(e.code,{className:"language-text",children:"+--------------------------------------------------------------------------------+\n| sm4_decrypt(from_base64('FSYstvOmH2cXy7B/072Mug=='), '***', '', 'SM4_128_CBC') |\n+--------------------------------------------------------------------------------+\n| text                                                                           |\n+--------------------------------------------------------------------------------+\n"})}),"\n",(0,c.jsx)(e.p,{children:"\u4F7F\u7528 SM4_128_CBC \u7B97\u6CD5\u5E76\u521D\u59CB\u5411\u91CF"}),"\n",(0,c.jsx)(e.pre,{children:(0,c.jsx)(e.code,{className:"language-sql",children:"select SM4_DECRYPT(FROM_BASE64('1Y4NGIukSbv9OrkZnRD1bQ=='),'F3229A0B371ED2D9441B830D21A390C3', '0123456789');\n"})}),"\n",(0,c.jsx)(e.pre,{children:(0,c.jsx)(e.code,{className:"language-text",children:"+------------------------------------------------------------------------------------------+\n| sm4_decrypt(from_base64('1Y4NGIukSbv9OrkZnRD1bQ=='), '***', '0123456789', 'SM4_128_CBC') |\n+------------------------------------------------------------------------------------------+\n| text                                                                                     |\n+------------------------------------------------------------------------------------------+\n"})}),"\n",(0,c.jsx)(e.h3,{id:"\u89E3\u5BC6\u5931\u8D25",children:"\u89E3\u5BC6\u5931\u8D25"}),"\n",(0,c.jsx)(e.pre,{children:(0,c.jsx)(e.code,{className:"language-sql",children:"set block_encryption_mode='';\nselect SM4_DECRYPT(FROM_BASE64('aDjwRflBrDjhBZIdOFNw3Tg=='),'F3229A0B371ED2D9441B830D21A390C3');\n"})}),"\n",(0,c.jsx)(e.pre,{children:(0,c.jsx)(e.code,{className:"language-text",children:"+---------------------------------------------------------------------------------+\n| sm4_decrypt(from_base64('aDjwRflBrDjhBZIdOFNw3Tg=='), '***', '', 'SM4_128_ECB') |\n+---------------------------------------------------------------------------------+\n| NULL                                                                            |\n+---------------------------------------------------------------------------------+\n"})})]})}function h(n={}){let{wrapper:e}={...(0,r.a)(),...n.components};return e?(0,c.jsx)(e,{...n,children:(0,c.jsx)(o,{...n})}):o(n)}},250065:function(n,e,s){s.d(e,{Z:function(){return d},a:function(){return l}});var t=s(667294);let c={},r=t.createContext(c);function l(n){let e=t.useContext(r);return t.useMemo(function(){return"function"==typeof n?n(e):{...e,...n}},[e,n])}function d(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(c):n.components||c:l(n.components),t.createElement(r.Provider,{value:e},n.children)}}}]);