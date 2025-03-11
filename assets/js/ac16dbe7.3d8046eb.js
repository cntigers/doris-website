"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["935382"],{890187:function(e,n,t){t.r(n),t.d(n,{default:()=>h,frontMatter:()=>c,metadata:()=>s,assets:()=>d,toc:()=>a,contentTitle:()=>l});var s=JSON.parse('{"id":"sql-manual/sql-functions/scalar-functions/encrypt-digest-functions/sm4-decrypt","title":"SM4_DECRYPT","description":"\x3c!--","source":"@site/versioned_docs/version-2.1/sql-manual/sql-functions/scalar-functions/encrypt-digest-functions/sm4-decrypt.md","sourceDirName":"sql-manual/sql-functions/scalar-functions/encrypt-digest-functions","slug":"/sql-manual/sql-functions/scalar-functions/encrypt-digest-functions/sm4-decrypt","permalink":"/docs/sql-manual/sql-functions/scalar-functions/encrypt-digest-functions/sm4-decrypt","draft":false,"unlisted":false,"tags":[],"version":"2.1","frontMatter":{"title":"SM4_DECRYPT","language":"en"},"sidebar":"docs","previous":{"title":"SM4_ENCRYPT","permalink":"/docs/sql-manual/sql-functions/scalar-functions/encrypt-digest-functions/sm4-encrypt"},"next":{"title":"SM3","permalink":"/docs/sql-manual/sql-functions/scalar-functions/encrypt-digest-functions/sm3"}}'),i=t("785893"),r=t("250065");let c={title:"SM4_DECRYPT",language:"en"},l=void 0,d={},a=[{value:"Description",id:"description",level:2},{value:"Syntax",id:"syntax",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Return Value",id:"return-value",level:2},{value:"Examples",id:"examples",level:2},{value:"Decryption successful",id:"decryption-successful",level:3},{value:"Decryption failed",id:"decryption-failed",level:3}];function o(e){let n={admonition:"admonition",code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,r.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,i.jsxs)(n.p,{children:["SM4 is a national standard symmetric key encryption algorithm, widely used in finance, communications, e-commerce and other fields. The SM4_DECRYPT function is used to decrypt data using SM4. The default algorithm is ",(0,i.jsx)(n.code,{children:"SM4_128_ECB"}),"."]}),"\n",(0,i.jsxs)(n.admonition,{type:"warning",children:[(0,i.jsxs)(n.p,{children:["Until 2.1.6, function with two arguments will ignore session variable ",(0,i.jsx)(n.code,{children:"block_encryption_mode"})," and always use ",(0,i.jsx)(n.code,{children:"SM4_128_ECB"})," to do decryption."]}),(0,i.jsx)(n.p,{children:"Since 2.1.7, it works as expected."})]}),"\n",(0,i.jsx)(n.h2,{id:"syntax",children:"Syntax"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sql",children:"SM4_DECRYPT( <str>, <key_str>[, <init_vector>][, <encryption_mode>])\n"})}),"\n",(0,i.jsx)(n.h2,{id:"parameters",children:"Parameters"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"parameter"}),(0,i.jsx)(n.th,{children:"description"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"<str>"})}),(0,i.jsx)(n.td,{children:"The text to be decrypted"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"<key_str>"})}),(0,i.jsxs)(n.td,{children:["is the key. Note that this key is not a hexadecimal encoding, but an encoded string representation. For example, for 128-bit key encryption, the length of ",(0,i.jsx)(n.code,{children:"key_str"})," should be 16. If the key length is insufficient, use ",(0,i.jsx)(n.strong,{children:"zero padding"})," to make it complete. If the length exceeds, use circular XOR to find the final key. For example, if the 128-bit key used by the algorithm is ",(0,i.jsx)(n.code,{children:"key"}),", then ",(0,i.jsx)(n.code,{children:"key[i] = key_str[i] ^ key_str[i+128] ^ key_str[i+256] ^ ..."})]})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"<init_vector>"})}),(0,i.jsx)(n.td,{children:"It is the initial vector used in the algorithm. It is only effective under specific algorithms. If not specified, Doris uses the built-in vector"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"<encryption_mode>"})}),(0,i.jsx)(n.td,{children:"For encryption algorithms, optional values are given in variables"})]})]})]}),"\n",(0,i.jsx)(n.h2,{id:"return-value",children:"Return Value"}),"\n",(0,i.jsx)(n.p,{children:"If decryption is successful: Returns the decrypted data, usually a binary representation of the plaintext."}),"\n",(0,i.jsx)(n.p,{children:"If decryption fails: Returns NULL."}),"\n",(0,i.jsx)(n.h2,{id:"examples",children:"Examples"}),"\n",(0,i.jsx)(n.h3,{id:"decryption-successful",children:"Decryption successful"}),"\n",(0,i.jsx)(n.p,{children:"Using the default algorithm"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sql",children:"set block_encryption_mode='';\nselect SM4_DECRYPT(FROM_BASE64('aDjwRflBrDjhBZIOFNw3Tg=='),'F3229A0B371ED2D9441B830D21A390C3');\n"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-text",children:"+--------------------------------------------------------------------------------+\n| sm4_decrypt(from_base64('aDjwRflBrDjhBZIOFNw3Tg=='), '***', '', 'SM4_128_ECB') |\n+--------------------------------------------------------------------------------+\n| text                                                                           |\n+--------------------------------------------------------------------------------+\n"})}),"\n",(0,i.jsx)(n.p,{children:"Using SM4_128_CBC algorithm"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sql",children:"set block_encryption_mode=\"SM4_128_CBC\";\nselect SM4_DECRYPT(FROM_BASE64('FSYstvOmH2cXy7B/072Mug=='),'F3229A0B371ED2D9441B830D21A390C3');\n"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-text",children:"+--------------------------------------------------------------------------------+\n| sm4_decrypt(from_base64('FSYstvOmH2cXy7B/072Mug=='), '***', '', 'SM4_128_CBC') |\n+--------------------------------------------------------------------------------+\n| text                                                                           |\n+--------------------------------------------------------------------------------+\n"})}),"\n",(0,i.jsx)(n.p,{children:"Use SM4_128_CBC algorithm and initial vector"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sql",children:"select SM4_DECRYPT(FROM_BASE64('1Y4NGIukSbv9OrkZnRD1bQ=='),'F3229A0B371ED2D9441B830D21A390C3', '0123456789');\n"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-text",children:"+------------------------------------------------------------------------------------------+\n| sm4_decrypt(from_base64('1Y4NGIukSbv9OrkZnRD1bQ=='), '***', '0123456789', 'SM4_128_CBC') |\n+------------------------------------------------------------------------------------------+\n| text                                                                                     |\n+------------------------------------------------------------------------------------------+\n"})}),"\n",(0,i.jsx)(n.h3,{id:"decryption-failed",children:"Decryption failed"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sql",children:"set block_encryption_mode='';\nselect SM4_DECRYPT(FROM_BASE64('aDjwRflBrDjhBZIdOFNw3Tg=='),'F3229A0B371ED2D9441B830D21A390C3');\n"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-text",children:"+---------------------------------------------------------------------------------+\n| sm4_decrypt(from_base64('aDjwRflBrDjhBZIdOFNw3Tg=='), '***', '', 'SM4_128_ECB') |\n+---------------------------------------------------------------------------------+\n| NULL                                                                            |\n+---------------------------------------------------------------------------------+\n"})})]})}function h(e={}){let{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(o,{...e})}):o(e)}},250065:function(e,n,t){t.d(n,{Z:function(){return l},a:function(){return c}});var s=t(667294);let i={},r=s.createContext(i);function c(e){let n=s.useContext(r);return s.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:c(e.components),s.createElement(r.Provider,{value:n},e.children)}}}]);