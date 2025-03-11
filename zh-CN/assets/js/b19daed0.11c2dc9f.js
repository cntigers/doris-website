"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["127409"],{63692:function(e,n,t){t.r(n),t.d(n,{default:()=>x,frontMatter:()=>d,metadata:()=>l,assets:()=>a,toc:()=>c,contentTitle:()=>r});var l=JSON.parse('{"id":"sql-manual/sql-statements/table-and-view/table/SHOW-TABLES","title":"SHOW TABLES","description":"\x3c!--","source":"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-3.0/sql-manual/sql-statements/table-and-view/table/SHOW-TABLES.md","sourceDirName":"sql-manual/sql-statements/table-and-view/table","slug":"/sql-manual/sql-statements/table-and-view/table/SHOW-TABLES","permalink":"/zh-CN/docs/3.0/sql-manual/sql-statements/table-and-view/table/SHOW-TABLES","draft":false,"unlisted":false,"tags":[],"version":"3.0","frontMatter":{"title":"SHOW TABLES","language":"zh-CN"},"sidebar":"docs","previous":{"title":"SHOW CREATE TABLE","permalink":"/zh-CN/docs/3.0/sql-manual/sql-statements/table-and-view/table/SHOW-CREATE-TABLE"},"next":{"title":"SHOW TABLE ID","permalink":"/zh-CN/docs/3.0/sql-manual/sql-statements/table-and-view/table/SHOW-TABLE-ID"}}'),s=t("785893"),i=t("250065");let d={title:"SHOW TABLES",language:"zh-CN"},r=void 0,a={},c=[{value:"\u63CF\u8FF0",id:"\u63CF\u8FF0",level:2},{value:"\u8BED\u6CD5",id:"\u8BED\u6CD5",level:2},{value:"\u53EF\u9009\u53C2\u6570",id:"\u53EF\u9009\u53C2\u6570",level:2},{value:"\u8FD4\u56DE\u503C",id:"\u8FD4\u56DE\u503C",level:2},{value:"\u6743\u9650\u63A7\u5236",id:"\u6743\u9650\u63A7\u5236",level:2},{value:"\u6CE8\u610F\u4E8B\u9879",id:"\u6CE8\u610F\u4E8B\u9879",level:2},{value:"\u793A\u4F8B",id:"\u793A\u4F8B",level:2}];function h(e){let n={blockquote:"blockquote",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h2,{id:"\u63CF\u8FF0",children:"\u63CF\u8FF0"}),"\n",(0,s.jsx)(n.p,{children:"\u8BE5\u8BED\u53E5\u7528\u4E8E\u5C55\u793A\u5F53\u524D db \u4E0B\u6240\u6709\u7684 table \u4EE5\u53CA view\u3002"}),"\n",(0,s.jsx)(n.h2,{id:"\u8BED\u6CD5",children:"\u8BED\u6CD5"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sql",children:"SHOW [ FULL ] TABLES [ FROM [ <catalog_name>.]<db_name> ][ LIKE <like_condition> ]\n"})}),"\n",(0,s.jsx)(n.h2,{id:"\u53EF\u9009\u53C2\u6570",children:"\u53EF\u9009\u53C2\u6570"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsxs)(n.strong,{children:["1. ",(0,s.jsx)(n.code,{children:"FULL"})]})}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsx)(n.p,{children:"\u8BED\u53E5\u4E2D\u52A0\u4E86\u6B64\u53C2\u6570\uFF0C\u8FD4\u56DE\u7ED3\u679C\u4F1A\u591A\u4E09\u5217\u503C\uFF0C\u5206\u522B\u4E3A Table_type\uFF08\u8868\u7C7B\u578B\uFF09\u3001Storage_format\uFF08\u5B58\u50A8\u683C\u5F0F\uFF09\u3001Inverted_index_storage_format\uFF08\u5012\u6392\u7D22\u5F15\u5B58\u50A8\u683C\u5F0F\uFF09\u3002"}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsxs)(n.strong,{children:["2. ",(0,s.jsx)(n.code,{children:"FROM [ <catalog_name>.]<db_name>"})]})}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsx)(n.p,{children:"FROM \u5B50\u53E5\u4E2D\u53EF\u4EE5\u6307\u5B9A\u67E5\u8BE2\u7684 catalog \u540D\u79F0\u4EE5\u53CA database \u7684\u540D\u79F0\u3002"}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsxs)(n.strong,{children:["2. ",(0,s.jsx)(n.code,{children:"LIKE <like_condition>"})]})}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsx)(n.p,{children:"LIKE \u5B50\u53E5\u4E2D\u53EF\u4EE5\u6309\u7167\u8868\u540D\u8FDB\u884C\u6A21\u7CCA\u67E5\u8BE2\u3002"}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"\u8FD4\u56DE\u503C",children:"\u8FD4\u56DE\u503C"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{style:{textAlign:"left"},children:"\u5217\u540D\uFF08Column\uFF09"}),(0,s.jsx)(n.th,{style:{textAlign:"left"},children:"\u7C7B\u578B\uFF08DataType\uFF09"}),(0,s.jsx)(n.th,{style:{textAlign:"left"},children:"\u8BF4\u660E\uFF08Notes\uFF09"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{style:{textAlign:"left"},children:"Tables_in_<db_name>"}),(0,s.jsx)(n.td,{style:{textAlign:"left"},children:"\u5B57\u7B26\u4E32"}),(0,s.jsxs)(n.td,{style:{textAlign:"left"},children:[(0,s.jsx)(n.code,{children:"<db_name>"}),"\u6240\u5728\u6570\u636E\u5E93\u4E0B\u9762\u6240\u6709\u7684\u8868\u4EE5\u53CA\u89C6\u56FE\u3002"]})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{style:{textAlign:"left"},children:"Table_type"}),(0,s.jsx)(n.td,{style:{textAlign:"left"},children:"\u5B57\u7B26\u4E32"}),(0,s.jsx)(n.td,{style:{textAlign:"left"},children:"\u8868\u4EE5\u53CA\u89C6\u56FE\u7C7B\u578B\u3002"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{style:{textAlign:"left"},children:"Storage_format"}),(0,s.jsx)(n.td,{style:{textAlign:"left"},children:"\u5B57\u7B26\u4E32"}),(0,s.jsx)(n.td,{style:{textAlign:"left"},children:"\u8868\u4EE5\u53CA\u89C6\u56FE\u5B58\u50A8\u683C\u5F0F\u3002"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{style:{textAlign:"left"},children:"Inverted_index_storage_format"}),(0,s.jsx)(n.td,{style:{textAlign:"left"},children:"\u5B57\u7B26\u4E32"}),(0,s.jsx)(n.td,{style:{textAlign:"left"},children:"\u8868\u4EE5\u53CA\u89C6\u56FE\u5012\u6392\u7D22\u5F15\u5B58\u50A8\u683C\u5F0F\u3002"})]})]})]}),"\n",(0,s.jsx)(n.h2,{id:"\u6743\u9650\u63A7\u5236",children:"\u6743\u9650\u63A7\u5236"}),"\n",(0,s.jsx)(n.p,{children:"\u6267\u884C\u6B64 SQL \u547D\u4EE4\u7684\u7528\u6237\u5FC5\u987B\u81F3\u5C11\u5177\u6709\u4EE5\u4E0B\u6743\u9650\uFF1A"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{style:{textAlign:"left"},children:"\u6743\u9650\uFF08Privilege\uFF09"}),(0,s.jsx)(n.th,{style:{textAlign:"left"},children:"\u5BF9\u8C61\uFF08Object\uFF09"}),(0,s.jsx)(n.th,{style:{textAlign:"left"},children:"\u8BF4\u660E\uFF08Notes\uFF09"})]})}),(0,s.jsx)(n.tbody,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{style:{textAlign:"left"},children:"SELECT_PRIV"}),(0,s.jsx)(n.td,{style:{textAlign:"left"},children:"\u8868\uFF08Table\uFF09, \u89C6\u56FE\uFF08View\uFF09"}),(0,s.jsx)(n.td,{style:{textAlign:"left"},children:"\u53EA\u80FD\u5C55\u793A\u5177\u6709\u67E5\u8BE2\u6743\u9650\u7684\u8868\u4EE5\u53CA\u89C6\u56FE\u3002"})]})})]}),"\n",(0,s.jsx)(n.h2,{id:"\u6CE8\u610F\u4E8B\u9879",children:"\u6CE8\u610F\u4E8B\u9879"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"\u8BED\u53E5\u4E2D\u4E0D\u6307\u5B9A FROM \u5B50\u53E5\u9700\u8981 use \u5230\u5BF9\u5E94\u7684 database \u4E0B\u9762\u6267\u884C\u3002"}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"\u793A\u4F8B",children:"\u793A\u4F8B"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"\u67E5\u770B DB \u4E0B\u6240\u6709\u8868"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sql",children:"SHOW TABLES;\n"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-text",children:"+---------------------------------+\n| Tables_in_demo                  |\n+---------------------------------+\n| ads_client_biz_aggr_di_20220419 |\n| cmy1                            |\n| cmy2                            |\n| intern_theme                    |\n| left_table                      |\n+---------------------------------+\n"})}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"\u6309\u7167\u8868\u540D\u8FDB\u884C\u6A21\u7CCA\u67E5\u8BE2"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sql",children:"SHOW TABLES LIKE '%cm%'\n"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-text",children:"+----------------+\n| Tables_in_demo |\n+----------------+\n| cmy1           |\n| cmy2           |\n+----------------+\n"})}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"\u4F7F\u7528 FULL \u6309\u7167\u67E5\u8BE2 db \u4E0B\u7684\u8868\u4EE5\u53CA\u89C6\u56FE"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sql",children:"SHOW FULL TABLES\n"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-text",children:"+----------------+------------+----------------+-------------------------------+\n| Tables_in_demo | Table_type | Storage_format | Inverted_index_storage_format |\n+----------------+------------+----------------+-------------------------------+\n| test_table     | BASE TABLE | V2             | V1                            |\n| test_view      | VIEW       | NONE           | NONE                          |\n+----------------+------------+----------------+-------------------------------+\n"})}),"\n"]}),"\n"]})]})}function x(e={}){let{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(h,{...e})}):h(e)}},250065:function(e,n,t){t.d(n,{Z:function(){return r},a:function(){return d}});var l=t(667294);let s={},i=l.createContext(s);function d(e){let n=l.useContext(i);return l.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:d(e.components),l.createElement(i.Provider,{value:n},e.children)}}}]);