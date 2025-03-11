"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["133141"],{141867:function(e,n,t){t.r(n),t.d(n,{default:()=>h,frontMatter:()=>a,metadata:()=>i,assets:()=>c,toc:()=>l,contentTitle:()=>r});var i=JSON.parse('{"id":"ecosystem/bi/powerbi","title":"Power BI","description":"\x3c!--","source":"@site/versioned_docs/version-2.1/ecosystem/bi/powerbi.md","sourceDirName":"ecosystem/bi","slug":"/ecosystem/bi/powerbi","permalink":"/docs/ecosystem/bi/powerbi","draft":false,"unlisted":false,"tags":[],"version":"2.1","frontMatter":{"title":"Power BI","language":"en"},"sidebar":"docs","previous":{"title":"FineBI","permalink":"/docs/ecosystem/bi/finebi"},"next":{"title":"Tableau","permalink":"/docs/ecosystem/bi/tableau"}}'),o=t("785893"),s=t("250065");let a={title:"Power BI",language:"en"},r=void 0,c={},l=[{value:"Power BI Introduction",id:"power-bi-introduction",level:2},{value:"Precondition",id:"precondition",level:2},{value:"Connector configuration of Power BI and Doris",id:"connector-configuration-of-power-bi-and-doris",level:2},{value:"Load data locally and create models",id:"load-data-locally-and-create-models",level:2},{value:"Set  data refresh automatic",id:"set--data-refresh-automatic",level:2}];function d(e){let n={a:"a",admonition:"admonition",h2:"h2",img:"img",li:"li",ol:"ol",p:"p",...(0,s.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.h2,{id:"power-bi-introduction",children:"Power BI Introduction"}),"\n",(0,o.jsx)(n.p,{children:"Power BI is a collection of software services and application connectors that can connect to multiple data sources, including Excel, SQL Server, Azure, Google Analytics, etc., so that users can easily consolidate and clean their data. With Power BI's data modeling, users can create relational models, data analysis expressions, and data relationships to support advanced data analysis and visualization. Power BI offers a wealth of visualization options, including ICONS, maps, dashboards, and custom visualization tools to help users make a more intuitive sense of data."}),"\n",(0,o.jsx)(n.p,{children:"Apache Doris is highly compatible with MySQL protocol and can be connected to Power BI through MySQL Driver. At present, internal data modeling, data query and visualization processing of Apache Doris have been officially supported in Power BI."}),"\n",(0,o.jsx)(n.h2,{id:"precondition",children:"Precondition"}),"\n",(0,o.jsxs)(n.p,{children:["If you do not have Power BI desktop installed, you can download it from ",(0,o.jsx)(n.a,{href:"https://www.microsoft.com/en-us/power-platform/products/power-bi/desktop",children:"https://www.microsoft.com/en-us/power-platform/products/power-bi/desktop"})]}),"\n",(0,o.jsx)(n.h2,{id:"connector-configuration-of-power-bi-and-doris",children:"Connector configuration of Power BI and Doris"}),"\n",(0,o.jsx)(n.admonition,{title:"Note",type:"info",children:(0,o.jsx)(n.p,{children:"Currently verified using MySQL JDBC Connector version 8.0.26"})}),"\n",(0,o.jsxs)(n.p,{children:["Download and installation MySQL Connector\nDownload link: ",(0,o.jsx)(n.a,{href:"https://downloads.mysql.com/archives/c-net/",children:"https://downloads.mysql.com/archives/c-net/"}),". Select version 8.0.26. There are incompatibilities in higher versions"]}),"\n",(0,o.jsx)(n.h2,{id:"load-data-locally-and-create-models",children:"Load data locally and create models"}),"\n",(0,o.jsxs)(n.ol,{children:["\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsx)(n.p,{children:"Start the Power BI Desktop"}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsx)(n.p,{children:"Open the Power BI Desktop screen and click Create Report. If a local report exists, you can open it."}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.img,{alt:"start page",src:t(555395).Z+"",width:"1280",height:"763"})}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsx)(n.p,{children:"Click get data. In the dialog box that is displayed, select MySQL database."}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.img,{alt:"get data",src:t(878615).Z+"",width:"1280",height:"763"})}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsx)(n.p,{children:"Configure the database connection information and enter ip:port in the server text box. The default port number for Doris is 9030."}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.img,{alt:"connection information",src:t(394335).Z+"",width:"1052",height:"407"})}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsx)(n.p,{children:'Click OK in the previous step and select "Database" in the new connection window to connect, and fill in the connection information of Doris in the username and password.'}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.img,{alt:"uname and pwd",src:t(133209).Z+"",width:"1052",height:"570"})}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsx)(n.p,{children:"Load the selected table to the Power BI Desktop"}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.img,{alt:"load data",src:t(328159).Z+"",width:"1280",height:"1018"})}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsx)(n.p,{children:"Configure statistical compass"}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.img,{alt:"create compass",src:t(615390).Z+"",width:"1280",height:"763"})}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsx)(n.p,{children:"Save statistical compass to location"}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.img,{alt:"save file",src:t(186917).Z+"",width:"737",height:"700"})}),"\n"]}),"\n"]}),"\n",(0,o.jsx)(n.h2,{id:"set--data-refresh-automatic",children:"Set  data refresh automatic"}),"\n",(0,o.jsxs)(n.ol,{children:["\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:["Download the On-premises data gateway. Download address: ",(0,o.jsx)(n.a,{href:"https://learn.microsoft.com/en-us/power-bi/connect-data/service-gateway-personal-mode",children:"https://learn.microsoft.com/en-us/power-bi/connect-data/service-gateway-personal-mode"})]}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsx)(n.p,{children:"Install the On-premises data gateway"}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.img,{alt:"gateway install",src:t(18209).Z+"",width:"1276",height:"1014"})}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsx)(n.p,{children:"Log into Power BI Online and import the local model in your workspace"}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.img,{alt:"upload",src:t(818387).Z+"",width:"1541",height:"725"})}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsx)(n.p,{children:"Click the model to set the automatic refresh time"}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.img,{alt:"click module",src:t(758383).Z+"",width:"1122",height:"398"})}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsx)(n.p,{children:"The data refresh configuration requires a gataway connection. After the gateway is enabled locally, you can see the  started gateway in the gateway connection locally. Select the local gateway."}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.img,{alt:"config gateway",src:t(362700).Z+"",width:"1280",height:"786"})}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsx)(n.p,{children:"Configure the refresh schedule to complete the automatic data refresh on Power BI"}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.img,{alt:"make plan",src:t(39363).Z+"",width:"1158",height:"798"})}),"\n"]}),"\n"]})]})}function h(e={}){let{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(d,{...e})}):d(e)}},818387:function(e,n,t){t.d(n,{Z:function(){return i}});let i=t.p+"assets/images/bi-powerbi-en-10-zh-a1ef99b2fcfe2feb09e87526ac05ebf6.png"},758383:function(e,n,t){t.d(n,{Z:function(){return i}});let i=t.p+"assets/images/bi-powerbi-en-11-66817d3fa638a3e9ee8b1933dc690925.png"},362700:function(e,n,t){t.d(n,{Z:function(){return i}});let i=t.p+"assets/images/bi-powerbi-en-12-e23359c2f0f15b34b1b02601e7e9703b.png"},39363:function(e,n,t){t.d(n,{Z:function(){return i}});let i=t.p+"assets/images/bi-powerbi-en-13-7a9ee1867ef8cc24d8e1035fc9104c90.png"},555395:function(e,n,t){t.d(n,{Z:function(){return i}});let i=t.p+"assets/images/bi-powerbi-en-2-86c8a6187c67094641645e6f712fcc3e.png"},878615:function(e,n,t){t.d(n,{Z:function(){return i}});let i=t.p+"assets/images/bi-powerbi-en-3-2705e2048068e169882943869d7fb11b.png"},394335:function(e,n,t){t.d(n,{Z:function(){return i}});let i=t.p+"assets/images/bi-powerbi-en-4-ef0c87418aa69b09874142731e4d9688.png"},133209:function(e,n,t){t.d(n,{Z:function(){return i}});let i=t.p+"assets/images/bi-powerbi-en-5-97bf4c9350d57af2038a67a38df112ca.png"},328159:function(e,n,t){t.d(n,{Z:function(){return i}});let i=t.p+"assets/images/bi-powerbi-en-6-6ccb436b829901ecca22fce07a779cc6.png"},615390:function(e,n,t){t.d(n,{Z:function(){return i}});let i=t.p+"assets/images/bi-powerbi-en-7-5a9a7db0cf93e720dcca9dbc858c9f8d.png"},186917:function(e,n,t){t.d(n,{Z:function(){return i}});let i=t.p+"assets/images/bi-powerbi-en-8-2aa802d0739d20c506a6e0cfcbe557dc.png"},18209:function(e,n,t){t.d(n,{Z:function(){return i}});let i=t.p+"assets/images/bi-powerbi-en-9-c6e95be459cdb3200e08eb92a78746d1.png"},250065:function(e,n,t){t.d(n,{Z:function(){return r},a:function(){return a}});var i=t(667294);let o={},s=i.createContext(o);function a(e){let n=i.useContext(s);return i.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:a(e.components),i.createElement(s.Provider,{value:n},e.children)}}}]);