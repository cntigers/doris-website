"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["742608"],{148513:function(e,n,s){s.r(n),s.d(n,{default:()=>h,frontMatter:()=>l,metadata:()=>t,assets:()=>i,toc:()=>a,contentTitle:()=>d});var t=JSON.parse('{"id":"sql-manual/sql-functions/scalar-functions/encrypt-digest-functions/aes-decrypt","title":"AES_DECRYPT","description":"\x3c!--","source":"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-3.0/sql-manual/sql-functions/scalar-functions/encrypt-digest-functions/aes-decrypt.md","sourceDirName":"sql-manual/sql-functions/scalar-functions/encrypt-digest-functions","slug":"/sql-manual/sql-functions/scalar-functions/encrypt-digest-functions/aes-decrypt","permalink":"/zh-CN/docs/3.0/sql-manual/sql-functions/scalar-functions/encrypt-digest-functions/aes-decrypt","draft":false,"unlisted":false,"tags":[],"version":"3.0","frontMatter":{"title":"AES_DECRYPT","language":"zh-CN"},"sidebar":"docs","previous":{"title":"AES_ENCRYPT","permalink":"/zh-CN/docs/3.0/sql-manual/sql-functions/scalar-functions/encrypt-digest-functions/aes-encrypt"},"next":{"title":"CRC32","permalink":"/zh-CN/docs/3.0/sql-manual/sql-functions/scalar-functions/encrypt-digest-functions/crc32"}}'),c=s("785893"),r=s("250065");let l={title:"AES_DECRYPT",language:"zh-CN"},d=void 0,i={},a=[{value:"\u63CF\u8FF0",id:"\u63CF\u8FF0",level:2},{value:"\u8BED\u6CD5",id:"\u8BED\u6CD5",level:2},{value:"\u53C2\u6570",id:"\u53C2\u6570",level:2},{value:"\u8FD4\u56DE\u503C",id:"\u8FD4\u56DE\u503C",level:2},{value:"\u793A\u4F8B",id:"\u793A\u4F8B",level:2},{value:"\u89E3\u5BC6\u6210\u529F",id:"\u89E3\u5BC6\u6210\u529F",level:3},{value:"\u89E3\u5BC6\u5931\u8D25",id:"\u89E3\u5BC6\u5931\u8D25",level:3}];function o(e){let n={admonition:"admonition",code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,r.a)(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(n.h2,{id:"\u63CF\u8FF0",children:"\u63CF\u8FF0"}),"\n",(0,c.jsxs)(n.p,{children:["AES \u89E3\u5BC6\u51FD\u6570\u3002\u8BE5\u51FD\u6570\u4E0E MySQL \u4E2D\u7684 ",(0,c.jsx)(n.code,{children:"AES_DECRYPT"})," \u51FD\u6570\u884C\u4E3A\u4E00\u81F4\u3002\u9ED8\u8BA4\u91C7\u7528 ",(0,c.jsx)(n.code,{children:"AES_128_ECB"})," \u7B97\u6CD5\uFF0Cpadding \u6A21\u5F0F\u4E3A ",(0,c.jsx)(n.code,{children:"PKCS7"}),"\u3002"]}),"\n",(0,c.jsxs)(n.admonition,{type:"warning",children:[(0,c.jsxs)(n.p,{children:["\u622A\u6B62 3.0.2\uFF0C\u4E24\u53C2\u6570\u7248\u672C\uFF0C\u4F1A\u65E0\u89C6 session variable ",(0,c.jsx)(n.code,{children:"block_encryption_mode"}),"\uFF0C\u59CB\u7EC8\u4F7F\u7528 ",(0,c.jsx)(n.code,{children:"AES_128_ECB"})," \u7B97\u6CD5\u8FDB\u884C\u89E3\u5BC6\u3002\u56E0\u6B64\u4E0D\u63A8\u8350\u8C03\u7528\u3002"]}),(0,c.jsx)(n.p,{children:"3.0.3 \u8D77\uFF0C\u8BE5\u884C\u4E3A\u6062\u590D\u6B63\u5E38\u3002"})]}),"\n",(0,c.jsx)(n.h2,{id:"\u8BED\u6CD5",children:"\u8BED\u6CD5"}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-sql",children:"AES_DECRYPT( <str>, <key_str>[, <init_vector>][, <encryption_mode>])\n"})}),"\n",(0,c.jsx)(n.h2,{id:"\u53C2\u6570",children:"\u53C2\u6570"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,c.jsxs)(n.table,{children:[(0,c.jsx)(n.thead,{children:(0,c.jsxs)(n.tr,{children:[(0,c.jsx)(n.th,{children:"\u53C2\u6570"}),(0,c.jsx)(n.th,{children:"\u8BF4\u660E"})]})}),(0,c.jsxs)(n.tbody,{children:[(0,c.jsxs)(n.tr,{children:[(0,c.jsx)(n.td,{children:(0,c.jsx)(n.code,{children:"<str>"})}),(0,c.jsx)(n.td,{children:"\u4E3A\u5F85\u89E3\u5BC6\u6587\u672C"})]}),(0,c.jsxs)(n.tr,{children:[(0,c.jsx)(n.td,{children:(0,c.jsx)(n.code,{children:"<key_str>"})}),(0,c.jsxs)(n.td,{children:["\u4E3A\u5BC6\u94A5\u3002\u6CE8\u610F\u6B64\u5BC6\u94A5\u5E76\u975E 16 \u8FDB\u5236\u7F16\u7801\uFF0C\u800C\u662F\u7F16\u7801\u540E\u7684\u5B57\u7B26\u4E32\u8868\u793A\u3002\u4F8B\u5982\u5BF9\u4E8E 128 \u4F4D\u5BC6\u94A5\u52A0\u5BC6\uFF0C",(0,c.jsx)(n.code,{children:"key_str"})," \u957F\u5EA6\u5E94\u4E3A 16\u3002\u5982\u679C\u5BC6\u94A5\u957F\u5EA6\u4E0D\u8DB3\uFF0C\u4F7F\u7528",(0,c.jsx)(n.strong,{children:"\u96F6\u586B\u5145"}),"\u8865\u9F50\u3002\u5982\u679C\u957F\u5EA6\u8D85\u51FA\uFF0C\u4F7F\u7528\u5FAA\u73AF\u5F02\u6216\u7684\u65B9\u5F0F\u6C42\u51FA\u6700\u7EC8\u5BC6\u94A5\u3002\u4F8B\u5982\u7B97\u6CD5\u4F7F\u7528\u7684 128 \u4F4D\u5BC6\u94A5\u4E3A ",(0,c.jsx)(n.code,{children:"key"}),"\uFF0C\u5219 ",(0,c.jsx)(n.code,{children:"key[i] = key_str[i] ^ key_str[i+128] ^ key_str[i+256] ^ ..."})]})]}),(0,c.jsxs)(n.tr,{children:[(0,c.jsx)(n.td,{children:(0,c.jsx)(n.code,{children:"<init_vector>"})}),(0,c.jsx)(n.td,{children:"\u4E3A\u7B97\u6CD5\u4E2D\u4F7F\u7528\u5230\u7684\u521D\u59CB\u5411\u91CF\uFF0C\u4EC5\u5728\u7279\u5B9A\u7B97\u6CD5\u4E0B\u751F\u6548\uFF0C\u5982\u4E0D\u6307\u5B9A\uFF0C\u5219 Doris \u4F7F\u7528\u5185\u7F6E\u5411\u91CF"})]}),(0,c.jsxs)(n.tr,{children:[(0,c.jsx)(n.td,{children:(0,c.jsx)(n.code,{children:"<encryption_mode>"})}),(0,c.jsx)(n.td,{children:"\u4E3A\u52A0\u5BC6\u7B97\u6CD5\uFF0C\u53EF\u9009\u503C\u89C1\u4E8E\u53D8\u91CF"})]})]})]}),"\n",(0,c.jsx)(n.h2,{id:"\u8FD4\u56DE\u503C",children:"\u8FD4\u56DE\u503C"}),"\n",(0,c.jsx)(n.p,{children:"\u5982\u679C\u89E3\u5BC6\u6210\u529F\uFF1A\u8FD4\u56DE\u89E3\u5BC6\u540E\u7684\u6570\u636E\uFF0C\u901A\u5E38\u662F\u660E\u6587\u7684\u4E8C\u8FDB\u5236\u8868\u793A\u3002"}),"\n",(0,c.jsx)(n.p,{children:"\u5982\u679C\u89E3\u5BC6\u5931\u8D25\uFF1A\u8FD4\u56DE NULL\u3002"}),"\n",(0,c.jsx)(n.h2,{id:"\u793A\u4F8B",children:"\u793A\u4F8B"}),"\n",(0,c.jsx)(n.h3,{id:"\u89E3\u5BC6\u6210\u529F",children:"\u89E3\u5BC6\u6210\u529F"}),"\n",(0,c.jsx)(n.p,{children:"\u4F7F\u7528\u9ED8\u8BA4\u7B97\u6CD5"}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-sql",children:"set block_encryption_mode='';\nselect aes_decrypt(from_base64('wr2JEDVXzL9+2XtRhgIloA=='),'F3229A0B371ED2D9441B830D21A390C3');\n"})}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-text",children:"+--------------------------------------------------------------------------------+\n| aes_decrypt(from_base64('wr2JEDVXzL9+2XtRhgIloA=='), '***', '', 'AES_128_ECB') |\n+--------------------------------------------------------------------------------+\n| text                                                                           |\n+--------------------------------------------------------------------------------+\n"})}),"\n",(0,c.jsx)(n.p,{children:"\u4F7F\u7528 AES_256_CBC \u7B97\u6CD5"}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-sql",children:"set block_encryption_mode=\"AES_256_CBC\";\nselect aes_decrypt(from_base64('3dym0E7/+1zbrLIaBVNHSw=='),'F3229A0B371ED2D9441B830D21A390C3');\n"})}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-text",children:"+--------------------------------------------------------------------------------+\n| aes_decrypt(from_base64('3dym0E7/+1zbrLIaBVNHSw=='), '***', '', 'AES_256_CBC') |\n+--------------------------------------------------------------------------------+\n| text                                                                           |\n+--------------------------------------------------------------------------------+\n"})}),"\n",(0,c.jsx)(n.p,{children:"\u4F7F\u7528 AES_256_CBC \u7B97\u6CD5\u5E76\u8BBE\u7F6E\u521D\u59CB\u5411\u91CF"}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-sql",children:"select AES_DECRYPT(FROM_BASE64('tsmK1HzbpnEdR2//WhO+MA=='),'F3229A0B371ED2D9441B830D21A390C3', '0123456789');\n"})}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-text",children:"+------------------------------------------------------------------------------------------+\n| aes_decrypt(from_base64('tsmK1HzbpnEdR2//WhO+MA=='), '***', '0123456789', 'AES_256_CBC') |\n+------------------------------------------------------------------------------------------+\n| text                                                                                     |\n+------------------------------------------------------------------------------------------+\n"})}),"\n",(0,c.jsx)(n.h3,{id:"\u89E3\u5BC6\u5931\u8D25",children:"\u89E3\u5BC6\u5931\u8D25"}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-sql",children:"select AES_DECRYPT(FROM_BASE64('tsmK1H3zbpnEdR2//WhO+MA=='),'F3229A0B371ED2D9441B830D21A390C3', '0123456789');\n"})}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-text",children:"+-------------------------------------------------------------------------------------------+\n| aes_decrypt(from_base64('tsmK1H3zbpnEdR2//WhO+MA=='), '***', '0123456789', 'AES_256_CBC') |\n+-------------------------------------------------------------------------------------------+\n| NULL                                                                                      |\n+-------------------------------------------------------------------------------------------+\n"})})]})}function h(e={}){let{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}},250065:function(e,n,s){s.d(n,{Z:function(){return d},a:function(){return l}});var t=s(667294);let c={},r=t.createContext(c);function l(e){let n=t.useContext(r);return t.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(c):e.components||c:l(e.components),t.createElement(r.Provider,{value:n},e.children)}}}]);