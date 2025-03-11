"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["887224"],{966876:function(e,n,t){t.r(n),t.d(n,{default:()=>h,frontMatter:()=>c,metadata:()=>s,assets:()=>l,toc:()=>d,contentTitle:()=>o});var s=JSON.parse('{"id":"lakehouse/catalogs/jdbc-clickhouse-catalog","title":"Clickhouse JDBC Catalog","description":"\x3c!--","source":"@site/docs/lakehouse/catalogs/jdbc-clickhouse-catalog.md","sourceDirName":"lakehouse/catalogs","slug":"/lakehouse/catalogs/jdbc-clickhouse-catalog","permalink":"/docs/dev/lakehouse/catalogs/jdbc-clickhouse-catalog","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"title":"Clickhouse JDBC Catalog","language":"en"},"sidebar":"docs","previous":{"title":"IBM Db2 JDBC Catalog","permalink":"/docs/dev/lakehouse/catalogs/jdbc-ibmdb2-catalog"},"next":{"title":"SAP HANA JDBC Catalog","permalink":"/docs/dev/lakehouse/catalogs/jdbc-saphana-catalog"}}'),i=t("785893"),r=t("250065");let c={title:"Clickhouse JDBC Catalog",language:"en"},o=void 0,l={},d=[{value:"Usage Notes",id:"usage-notes",level:2},{value:"Connecting to ClickHouse",id:"connecting-to-clickhouse",level:2},{value:"Connection Security",id:"connection-security",level:3},{value:"Hierarchical Mapping",id:"hierarchical-mapping",level:2},{value:"Column Type Mapping",id:"column-type-mapping",level:2},{value:"Common Issues",id:"common-issues",level:2}];function a(e){let n={a:"a",code:"code",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.p,{children:"The Doris JDBC Catalog supports connecting to the ClickHouse database via the standard JDBC interface. This document describes how to configure the ClickHouse database connection."}),"\n",(0,i.jsxs)(n.p,{children:["For an overview of the JDBC Catalog, please refer to: ",(0,i.jsx)(n.a,{href:"/docs/dev/lakehouse/catalogs/jdbc-catalog-overview",children:"JDBC Catalog Overview"})]}),"\n",(0,i.jsx)(n.h2,{id:"usage-notes",children:"Usage Notes"}),"\n",(0,i.jsx)(n.p,{children:"To connect to the ClickHouse database, you need"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"ClickHouse version 23.x or higher (versions below this have not been fully tested)."}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["The JDBC driver for the ClickHouse database, which you can download from the ",(0,i.jsx)(n.a,{href:"https://mvnrepository.com/artifact/com.clickhouse/clickhouse-jdbc",children:"Maven Repository"})," for the latest or specified version of the ClickHouse JDBC driver. It is recommended to use version 0.4.6 of the ClickHouse JDBC Driver."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Network connection between each FE and BE node of Doris and the ClickHouse server, with the default port being 8123."}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"connecting-to-clickhouse",children:"Connecting to ClickHouse"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sql",children:"CREATE CATALOG clickhouse PROPERTIES (\n    'type' = 'jdbc',\n    'user' = 'username',\n    'password' = 'pwd',\n    'jdbc_url' = 'jdbc:clickhouse://example.net:8123/',\n    'driver_url' = 'clickhouse-jdbc-0.4.6-all.jar',\n    'driver_class' = 'com.clickhouse.jdbc.ClickHouseDriver'\n)\n"})}),"\n",(0,i.jsxs)(n.p,{children:["The ",(0,i.jsx)(n.code,{children:"jdbc_url"})," defines the connection information and parameters to be passed to the ClickHouse JDBC driver. Supported URL parameters can be found in the ",(0,i.jsx)(n.a,{href:"https://clickhouse.com/docs/en/integrations/java#configuration",children:"ClickHouse JDBC Driver Configuration"}),"."]}),"\n",(0,i.jsx)(n.h3,{id:"connection-security",children:"Connection Security"}),"\n",(0,i.jsx)(n.p,{children:"If you have configured TLS with a globally trusted certificate installed on the data source, you can enable TLS between the cluster and the data source by appending parameters to the JDBC connection string set in the jdbc_url property."}),"\n",(0,i.jsx)(n.p,{children:"For example, enable TLS by adding the ssl=true parameter to the jdbc_url configuration property:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sql",children:"'jdbc_url' = 'jdbc:clickhouse://example.net:8123/db?ssl=true'\n"})}),"\n",(0,i.jsxs)(n.p,{children:["For more information on TLS configuration options, please refer to the ",(0,i.jsx)(n.a,{href:"https://clickhouse.com/docs/en/integrations/java#connect-to-clickhouse-with-ssl",children:"Clickhouse JDBC Driver Documentation SSL Configuration Section"})]}),"\n",(0,i.jsx)(n.h2,{id:"hierarchical-mapping",children:"Hierarchical Mapping"}),"\n",(0,i.jsx)(n.p,{children:"When mapping ClickHouse, a Database in Doris corresponds to a Database in ClickHouse. And a Table under a Database in Doris corresponds to Tables under that Database in ClickHouse. The mapping relationship is as follows:"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Doris"}),(0,i.jsx)(n.th,{children:"ClickHouse"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Catalog"}),(0,i.jsx)(n.td,{children:"ClickHouse Server"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Database"}),(0,i.jsx)(n.td,{children:"Database"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Table"}),(0,i.jsx)(n.td,{children:"Table"})]})]})]}),"\n",(0,i.jsx)(n.h2,{id:"column-type-mapping",children:"Column Type Mapping"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"ClickHouse Type"}),(0,i.jsx)(n.th,{children:"Doris Type"}),(0,i.jsx)(n.th,{children:"Comment"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"bool"}),(0,i.jsx)(n.td,{children:"boolean"}),(0,i.jsx)(n.td,{})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"string"}),(0,i.jsx)(n.td,{children:"string"}),(0,i.jsx)(n.td,{})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"date/date32"}),(0,i.jsx)(n.td,{children:"date"}),(0,i.jsx)(n.td,{})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"datetime(S)/datetime64(S)"}),(0,i.jsx)(n.td,{children:"datetime(S)"}),(0,i.jsx)(n.td,{})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"float32"}),(0,i.jsx)(n.td,{children:"float"}),(0,i.jsx)(n.td,{})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"float64"}),(0,i.jsx)(n.td,{children:"double"}),(0,i.jsx)(n.td,{})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"int8"}),(0,i.jsx)(n.td,{children:"tinyint"}),(0,i.jsx)(n.td,{})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"int16/uint8"}),(0,i.jsx)(n.td,{children:"smallint"}),(0,i.jsx)(n.td,{children:"Doris does not have UNSIGNED data types, so it is scaled up by one magnitude"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"int32/uInt16"}),(0,i.jsx)(n.td,{children:"int"}),(0,i.jsx)(n.td,{children:"Same as above"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"int64/uint32"}),(0,i.jsx)(n.td,{children:"bigint"}),(0,i.jsx)(n.td,{children:"Same as above"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"int128/uint64"}),(0,i.jsx)(n.td,{children:"largeint"}),(0,i.jsx)(n.td,{children:"Same as above"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"int256/uint128/uint256"}),(0,i.jsx)(n.td,{children:"string"}),(0,i.jsx)(n.td,{children:"Doris does not have data types of this magnitude, so it is handled with STRING"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"decimal(P, S)"}),(0,i.jsx)(n.td,{children:"decimal(P, S) or string"}),(0,i.jsx)(n.td,{children:"If it exceeds the maximum precision supported by Doris, use string to handle it"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"enum/ipv4/ipv6/uuid"}),(0,i.jsx)(n.td,{children:"string"}),(0,i.jsx)(n.td,{})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"array"}),(0,i.jsx)(n.td,{children:"array"}),(0,i.jsx)(n.td,{})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"other"}),(0,i.jsx)(n.td,{children:"UNSUPPORTED"}),(0,i.jsx)(n.td,{})]})]})]}),"\n",(0,i.jsx)(n.h2,{id:"common-issues",children:"Common Issues"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Encountering ",(0,i.jsx)(n.code,{children:"NoClassDefFoundError: net/jpountz/lz4/LZ4Factory"})," error message when reading Clickhouse data"]}),"\n",(0,i.jsxs)(n.p,{children:["You can first download the ",(0,i.jsx)(n.a,{href:"https://repo1.maven.org/maven2/net/jpountz/lz4/lz4/1.3.0/lz4-1.3.0.jar",children:"lz4-1.3.0.jar"})," package and place it in the ",(0,i.jsx)(n.code,{children:"custom_lib/"})," directory under each FE and BE directory (if it does not exist, create it manually)."]}),"\n"]}),"\n"]})]})}function h(e={}){let{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(a,{...e})}):a(e)}},250065:function(e,n,t){t.d(n,{Z:function(){return o},a:function(){return c}});var s=t(667294);let i={},r=s.createContext(i);function c(e){let n=s.useContext(r);return s.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:c(e.components),s.createElement(r.Provider,{value:n},e.children)}}}]);