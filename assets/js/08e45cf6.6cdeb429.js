"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["416683"],{953697:function(e,n,t){t.r(n),t.d(n,{default:()=>h,frontMatter:()=>i,metadata:()=>s,assets:()=>o,toc:()=>c,contentTitle:()=>r});var s=JSON.parse('{"id":"sql-manual/sql-functions/table-valued-functions/catalogs","title":"CATALOGS","description":"\x3c!--","source":"@site/versioned_docs/version-2.1/sql-manual/sql-functions/table-valued-functions/catalogs.md","sourceDirName":"sql-manual/sql-functions/table-valued-functions","slug":"/sql-manual/sql-functions/table-valued-functions/catalogs","permalink":"/docs/sql-manual/sql-functions/table-valued-functions/catalogs","draft":false,"unlisted":false,"tags":[],"version":"2.1","frontMatter":{"title":"CATALOGS","language":"en"},"sidebar":"docs","previous":{"title":"FRONTENDS_DISKS","permalink":"/docs/sql-manual/sql-functions/table-valued-functions/frontends_disks"},"next":{"title":"JOBS","permalink":"/docs/sql-manual/sql-functions/table-valued-functions/jobs"}}'),a=t("785893"),l=t("250065");let i={title:"CATALOGS",language:"en"},r=void 0,o={},c=[{value:"Description",id:"description",level:2},{value:"Syntax",id:"syntax",level:2},{value:"Return Value",id:"return-value",level:2},{value:"Examples",id:"examples",level:2}];function d(e){let n={code:"code",h2:"h2",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,l.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,a.jsxs)(n.p,{children:["The ",(0,a.jsx)(n.code,{children:"CATALOGS()"})," function generates a temporary ",(0,a.jsx)(n.code,{children:"catalogs"})," table, allowing you to view information about all the catalogs created in the current Doris instance. The result combines the information from ",(0,a.jsx)(n.code,{children:"show catalogs"})," and ",(0,a.jsx)(n.code,{children:"show catalog xxx"}),"."]}),"\n",(0,a.jsxs)(n.p,{children:["This function is used in the ",(0,a.jsx)(n.code,{children:"FROM"})," clause, making it easier to query and analyze catalog data in Doris."]}),"\n",(0,a.jsx)(n.h2,{id:"syntax",children:"Syntax"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-sql",children:"CATALOGS()\n"})}),"\n",(0,a.jsx)(n.h2,{id:"return-value",children:"Return Value"}),"\n",(0,a.jsx)(n.p,{children:"View the returned fields of the catalogs() function"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-sql",children:"desc function catalogs();\n"})}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-text",children:"+-------------+--------+------+-------+---------+-------+\n| Field       | Type   | Null | Key   | Default | Extra |\n+-------------+--------+------+-------+---------+-------+\n| CatalogId   | BIGINT | No   | false | NULL    | NONE  |\n| CatalogName | TEXT   | No   | false | NULL    | NONE  |\n| CatalogType | TEXT   | No   | false | NULL    | NONE  |\n| Property    | TEXT   | No   | false | NULL    | NONE  |\n| Value       | TEXT   | No   | false | NULL    | NONE  |\n+-------------+--------+------+-------+---------+-------+\n"})}),"\n",(0,a.jsx)(n.p,{children:"The field meanings are as follows:"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,a.jsxs)(n.table,{children:[(0,a.jsx)(n.thead,{children:(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.th,{children:"Field"}),(0,a.jsx)(n.th,{children:"Type"}),(0,a.jsx)(n.th,{children:"Description"})]})}),(0,a.jsxs)(n.tbody,{children:[(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:(0,a.jsx)(n.code,{children:"CatalogId"})}),(0,a.jsx)(n.td,{children:"BIGINT"}),(0,a.jsx)(n.td,{children:"A unique identifier for each catalog. It is used to distinguish different catalogs."})]}),(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:(0,a.jsx)(n.code,{children:"CatalogName"})}),(0,a.jsx)(n.td,{children:"TEXT"}),(0,a.jsx)(n.td,{children:"The name of the catalog. This is the identifier for the catalog within Doris."})]}),(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:(0,a.jsx)(n.code,{children:"CatalogType"})}),(0,a.jsx)(n.td,{children:"TEXT"}),(0,a.jsx)(n.td,{children:"The type of the catalog (e.g., database, data source). It indicates the kind of catalog."})]}),(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:(0,a.jsx)(n.code,{children:"Property"})}),(0,a.jsx)(n.td,{children:"TEXT"}),(0,a.jsx)(n.td,{children:"The name of a property related to the catalog (e.g., a configuration setting)."})]}),(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:(0,a.jsx)(n.code,{children:"Value"})}),(0,a.jsx)(n.td,{children:"TEXT"}),(0,a.jsx)(n.td,{children:"The value of the corresponding property for the catalog. It provides specific details about the catalog's configuration."})]})]})]}),"\n",(0,a.jsx)(n.h2,{id:"examples",children:"Examples"}),"\n",(0,a.jsx)(n.p,{children:"View all catalog information of the doris cluster"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-sql",children:"select * from catalogs()\n"})}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-text",children:"+-----------+-------------+-------------+--------------------------------------------+---------------------------------------------------------------------------+\n| CatalogId | CatalogName | CatalogType | Property                                   | Value                                                                     |\n+-----------+-------------+-------------+--------------------------------------------+---------------------------------------------------------------------------+\n|     16725 | hive        | hms         | dfs.client.failover.proxy.provider.HANN    | org.apache.hadoop.hdfs.server.namenode.ha.ConfiguredFailoverProxyProvider |\n|     16725 | hive        | hms         | dfs.ha.namenodes.HANN                      | nn1,nn2                                                                   |\n|     16725 | hive        | hms         | create_time                                | 2023-07-13 16:24:38.968                                                   |\n|     16725 | hive        | hms         | ipc.client.fallback-to-simple-auth-allowed | true                                                                      |\n|     16725 | hive        | hms         | dfs.namenode.rpc-address.HANN.nn1          | nn1_host:rpc_port                                                         |\n|     16725 | hive        | hms         | hive.metastore.uris                        | thrift://127.0.0.1:7004                                                   |\n|     16725 | hive        | hms         | dfs.namenode.rpc-address.HANN.nn2          | nn2_host:rpc_port                                                         |\n|     16725 | hive        | hms         | type                                       | hms                                                                       |\n|     16725 | hive        | hms         | dfs.nameservices                           | HANN                                                                      |\n|         0 | internal    | internal    | NULL                                       | NULL                                                                      |\n|     16726 | es          | es          | create_time                                | 2023-07-13 16:24:44.922                                                   |\n|     16726 | es          | es          | type                                       | es                                                                        |\n|     16726 | es          | es          | hosts                                      | http://127.0.0.1:9200                                                     |\n+-----------+-------------+-------------+--------------------------------------------+---------------------------------------------------------------------------+\n"})})]})}function h(e={}){let{wrapper:n}={...(0,l.a)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(d,{...e})}):d(e)}},250065:function(e,n,t){t.d(n,{Z:function(){return r},a:function(){return i}});var s=t(667294);let a={},l=s.createContext(a);function i(e){let n=s.useContext(l);return s.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:i(e.components),s.createElement(l.Provider,{value:n},e.children)}}}]);