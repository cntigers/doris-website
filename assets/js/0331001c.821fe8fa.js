"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["965254"],{779599:function(e,n,t){t.r(n),t.d(n,{default:()=>h,frontMatter:()=>d,metadata:()=>s,assets:()=>c,toc:()=>o,contentTitle:()=>l});var s=JSON.parse('{"id":"lakehouse/database/clickhouse","title":"ClickHouse","description":"\x3c!--","source":"@site/versioned_docs/version-2.1/lakehouse/database/clickhouse.md","sourceDirName":"lakehouse/database","slug":"/lakehouse/database/clickhouse","permalink":"/docs/lakehouse/database/clickhouse","draft":false,"unlisted":false,"tags":[],"version":"2.1","frontMatter":{"title":"ClickHouse","language":"en"},"sidebar":"docs","previous":{"title":"IBM Db2","permalink":"/docs/lakehouse/database/ibm-db2"},"next":{"title":"SAP HANA","permalink":"/docs/lakehouse/database/sap-hana"}}'),i=t("785893"),r=t("250065");let d={title:"ClickHouse",language:"en"},l=void 0,c={},o=[{value:"Terms and Conditions",id:"terms-and-conditions",level:2},{value:"Connect to ClickHouse",id:"connect-to-clickhouse",level:2},{value:"Connection security",id:"connection-security",level:3},{value:"Hierarchical mapping",id:"hierarchical-mapping",level:2},{value:"Type mapping",id:"type-mapping",level:2},{value:"ClickHouse to Doris type mapping",id:"clickhouse-to-doris-type-mapping",level:3},{value:"Query optimization",id:"query-optimization",level:2},{value:"Predicate pushdown",id:"predicate-pushdown",level:3},{value:"Row limit",id:"row-limit",level:3},{value:"Escape characters",id:"escape-characters",level:3},{value:"FAQ",id:"faq",level:2}];function a(e){let n={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.p,{children:"Doris JDBC Catalog supports connection to the ClickHouse database through the standard JDBC interface. This document describes how to configure a ClickHouse database connection."}),"\n",(0,i.jsx)(n.h2,{id:"terms-and-conditions",children:"Terms and Conditions"}),"\n",(0,i.jsx)(n.p,{children:"To connect to the ClickHouse database you need"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"ClickHouse 23.x or higher (versions below this are not fully tested)."}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["JDBC driver for ClickHouse database, you can download the latest or specified version of ClickHouse JDBC driver from ",(0,i.jsx)(n.a,{href:"https://mvnrepository.com/artifact/com.clickhouse/clickhouse-jdbc",children:"Maven repository"}),". ",(0,i.jsx)(n.strong,{children:"ClickHouse JDBC Driver version 0.4.6 is recommended. "})]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Doris Network connection between each FE and BE node and the ClickHouse server, default port is 8123."}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"connect-to-clickhouse",children:"Connect to ClickHouse"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sql",children:'CREATE CATALOG clickhouse PROPERTIES (\n    "type"="jdbc",\n    "user"="default",\n    "password"="password",\n    "jdbc_url" = "jdbc:clickhouse://example.net:8123/",\n    "driver_url" = "clickhouse-jdbc-0.4.6-all.jar",\n    "driver_class" = "com.clickhouse.jdbc.ClickHouseDriver"\n)\n'})}),"\n",(0,i.jsx)(n.admonition,{title:"remarks",type:"info",children:(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"jdbc_url"})," defines the connection information and parameters to be passed to the ClickHouse JDBC driver.\nParameters for supported URLs can be found in ",(0,i.jsx)(n.a,{href:"https://clickhouse.com/docs/en/integrations/java#configuration",children:"ClickHouse JDBC Driver Configuration"}),"."]})}),"\n",(0,i.jsx)(n.h3,{id:"connection-security",children:"Connection security"}),"\n",(0,i.jsx)(n.p,{children:"If you configured TLS with a global trust certificate installed on the data source, you can enable TLS between the cluster and the data source by appending parameters to the JDBC connection string set in the jdbc_url property."}),"\n",(0,i.jsx)(n.p,{children:"For example, enable TLS by adding the ssl=true parameter to the jdbc_url configuration property:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sql",children:'"jdbc_url"="jdbc:clickhouse://example.net:8123/db?ssl=true"\n'})}),"\n",(0,i.jsxs)(n.p,{children:["For more information about TLS configuration options, see ",(0,i.jsx)(n.a,{href:"https://clickhouse.com/docs/en/integrations/java#connect-to-clickhouse-with-ssl",children:"Clickhouse JDBC Driver Documentation SSL Configuration Section"})]}),"\n",(0,i.jsx)(n.h2,{id:"hierarchical-mapping",children:"Hierarchical mapping"}),"\n",(0,i.jsx)(n.p,{children:"When mapping ClickHouse, a Database in Doris corresponds to a Database in ClickHouse. The Table under Doris' Database corresponds to the Tables under the Database in ClickHouse. That is, the mapping relationship is as follows:"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{style:{textAlign:"center"},children:"Doris"}),(0,i.jsx)(n.th,{style:{textAlign:"center"},children:"ClickHouse"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{style:{textAlign:"center"},children:"Catalog"}),(0,i.jsx)(n.td,{style:{textAlign:"center"},children:"ClickHouse Server"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{style:{textAlign:"center"},children:"Database"}),(0,i.jsx)(n.td,{style:{textAlign:"center"},children:"Database"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{style:{textAlign:"center"},children:"Table"}),(0,i.jsx)(n.td,{style:{textAlign:"center"},children:"Table"})]})]})]}),"\n",(0,i.jsx)(n.h2,{id:"type-mapping",children:"Type mapping"}),"\n",(0,i.jsx)(n.h3,{id:"clickhouse-to-doris-type-mapping",children:"ClickHouse to Doris type mapping"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"ClickHouse Type"}),(0,i.jsx)(n.th,{children:"Doris Type"}),(0,i.jsx)(n.th,{children:"Comment"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Bool"}),(0,i.jsx)(n.td,{children:"BOOLEAN"}),(0,i.jsx)(n.td,{})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"String"}),(0,i.jsx)(n.td,{children:"STRING"}),(0,i.jsx)(n.td,{})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Date/Date32"}),(0,i.jsx)(n.td,{children:"DATE"}),(0,i.jsx)(n.td,{})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"DateTime/DateTime64"}),(0,i.jsx)(n.td,{children:"DATETIME"}),(0,i.jsx)(n.td,{})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Float32"}),(0,i.jsx)(n.td,{children:"FLOAT"}),(0,i.jsx)(n.td,{})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Float64"}),(0,i.jsx)(n.td,{children:"DOUBLE"}),(0,i.jsx)(n.td,{})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Int8"}),(0,i.jsx)(n.td,{children:"TINYINT"}),(0,i.jsx)(n.td,{})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Int16/UInt8"}),(0,i.jsx)(n.td,{children:"SMALLINT"}),(0,i.jsx)(n.td,{children:"Doris does not have UNSIGNED data type, so expand by an order of magnitude"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Int32/UInt16"}),(0,i.jsx)(n.td,{children:"INT"}),(0,i.jsx)(n.td,{children:"Doris does not have UNSIGNED data type, so expand by an order of magnitude"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Int64/Uint32"}),(0,i.jsx)(n.td,{children:"BIGINT"}),(0,i.jsx)(n.td,{children:"Doris does not have UNSIGNED data type, so it is expanded by an order of magnitude"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Int128/UInt64"}),(0,i.jsx)(n.td,{children:"LARGEINT"}),(0,i.jsx)(n.td,{children:"Doris does not have UNSIGNED data type, so expand it by an order of magnitude"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Int256/UInt128/UInt256"}),(0,i.jsx)(n.td,{children:"STRING"}),(0,i.jsx)(n.td,{children:"Doris does not have a data type of this magnitude and uses STRING for processing"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"DECIMAL"}),(0,i.jsx)(n.td,{children:"DECIMALV3/STRING"}),(0,i.jsx)(n.td,{children:"Which type will be selected based on the (precision, scale) of the DECIMAL field"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Enum/IPv4/IPv6/UUID"}),(0,i.jsx)(n.td,{children:"STRING"}),(0,i.jsx)(n.td,{})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Array"}),(0,i.jsx)(n.td,{children:"ARRAY"}),(0,i.jsx)(n.td,{children:"Array's internal type adaptation logic refers to the above types"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Other"}),(0,i.jsx)(n.td,{children:"UNSUPPORTED"}),(0,i.jsx)(n.td,{})]})]})]}),"\n",(0,i.jsx)(n.h2,{id:"query-optimization",children:"Query optimization"}),"\n",(0,i.jsx)(n.h3,{id:"predicate-pushdown",children:"Predicate pushdown"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["When executing a query like ",(0,i.jsx)(n.code,{children:"where dt = '2022-01-01'"}),", Doris can push these filtering conditions down to the external data source, thereby directly excluding data that does not meet the conditions at the data source level, reducing unnecessary data acquisition and transmission. This greatly improves query performance while also reducing the load on external data sources."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["When the variable ",(0,i.jsx)(n.code,{children:"enable_ext_func_pred_pushdown"})," is set to true, the function conditions after where will also be pushed down to the external data source."]}),"\n",(0,i.jsx)(n.p,{children:"The functions that currently support push down to ClickHouse are:"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsx)(n.tr,{children:(0,i.jsx)(n.th,{style:{textAlign:"center"},children:"Function"})})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsx)(n.tr,{children:(0,i.jsx)(n.td,{style:{textAlign:"center"},children:"FROM_UNIXTIME"})}),(0,i.jsx)(n.tr,{children:(0,i.jsx)(n.td,{style:{textAlign:"center"},children:"UNIX_TIMESTAMP"})})]})]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"row-limit",children:"Row limit"}),"\n",(0,i.jsx)(n.p,{children:"If you have the limit keyword in the query, Doris will push the limit down to ClickHouse to reduce the amount of data transfer."}),"\n",(0,i.jsx)(n.h3,{id:"escape-characters",children:"Escape characters"}),"\n",(0,i.jsx)(n.p,{children:'Doris will automatically add the escape character ("") to the field names and table names in the query statements sent to ClickHouse to avoid conflicts between the field names and table names and ClickHouse internal keywords.'}),"\n",(0,i.jsx)(n.h2,{id:"faq",children:"FAQ"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"NoClassDefFoundError: net/jpountz/lz4/LZ4Factory"})," error message appears when reading Clickhouse data through ClickHouse Catalog"]}),"\n",(0,i.jsxs)(n.p,{children:["You can first download the ",(0,i.jsx)(n.a,{href:"https://repo1.maven.org/maven2/net/jpountz/lz4/lz4/1.3.0/lz4-1.3.0.jar",children:"lz4-1.3.0.jar"})," package and put it in every ",(0,i.jsx)(n.code,{children:"custom_lib/"})," directory under the FE and BE directories (if it does not exist, just create it manually)."]}),"\n"]}),"\n"]})]})}function h(e={}){let{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(a,{...e})}):a(e)}},250065:function(e,n,t){t.d(n,{Z:function(){return l},a:function(){return d}});var s=t(667294);let i={},r=s.createContext(i);function d(e){let n=s.useContext(r);return s.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:d(e.components),s.createElement(r.Provider,{value:n},e.children)}}}]);