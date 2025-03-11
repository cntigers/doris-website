"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["675097"],{654403:function(e,n,t){t.r(n),t.d(n,{default:()=>h,frontMatter:()=>a,metadata:()=>i,assets:()=>c,toc:()=>l,contentTitle:()=>o});var i=JSON.parse('{"id":"ecosystem/bi/dbeaver","title":"DBeaver","description":"\x3c!--","source":"@site/versioned_docs/version-2.0/ecosystem/bi/dbeaver.md","sourceDirName":"ecosystem/bi","slug":"/ecosystem/bi/dbeaver","permalink":"/docs/2.0/ecosystem/bi/dbeaver","draft":false,"unlisted":false,"tags":[],"version":"2.0","frontMatter":{"title":"DBeaver","language":"en"},"sidebar":"docs","previous":{"title":"Smartbi","permalink":"/docs/2.0/ecosystem/bi/smartbi"},"next":{"title":"DataGrip","permalink":"/docs/2.0/ecosystem/bi/datagrip"}}'),s=t("785893"),r=t("250065");let a={title:"DBeaver",language:"en"},o=void 0,c={},l=[{value:"introduce",id:"introduce",level:2},{value:"Preconditions",id:"preconditions",level:2},{value:"Add data source",id:"add-data-source",level:2},{value:"Function support",id:"function-support",level:2}];function d(e){let n={a:"a",admonition:"admonition",h2:"h2",img:"img",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,r.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h2,{id:"introduce",children:"introduce"}),"\n",(0,s.jsx)(n.p,{children:"DBeaver is a cross-platform database tool for developers, database administrators, analysts and anyone who works with data."}),"\n",(0,s.jsx)(n.p,{children:"Apache Doris is highly compatible with the MySQL protocol. You can use DBeaver's MySQL driver to connect to Apache Doris and query data in the internal catalog and external catalog."}),"\n",(0,s.jsx)(n.h2,{id:"preconditions",children:"Preconditions"}),"\n",(0,s.jsxs)(n.p,{children:["Dbeaver installed\nYou can visit ",(0,s.jsx)(n.a,{href:"https://dbeaver.io",children:"https://dbeaver.io"})," to download and install DBeaver"]}),"\n",(0,s.jsx)(n.h2,{id:"add-data-source",children:"Add data source"}),"\n",(0,s.jsx)(n.admonition,{title:"Note",type:"info",children:(0,s.jsx)(n.p,{children:"Currently verified using DBeaver version 24.0.0"})}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Start DBeaver"}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["Click the plus sign (",(0,s.jsx)(n.strong,{children:"+"}),") icon in the upper left corner of the DBeaver window, or select ",(0,s.jsx)(n.strong,{children:"Database > New Database Connection"})," in the menu bar to open the ",(0,s.jsx)(n.strong,{children:"Connect to a database"})," interface."]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"add connection 1",src:t(159899).Z+"",width:"1280",height:"756"})}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"add connection 2",src:t(579316).Z+"",width:"1280",height:"585"})}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Select the MySQL driver"}),"\n",(0,s.jsxs)(n.p,{children:["In the ",(0,s.jsx)(n.strong,{children:"Select your database"})," window, select ",(0,s.jsx)(n.strong,{children:"MySQL"}),"."]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"chose driver",src:t(348704).Z+"",width:"1280",height:"1268"})}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Configure Doris connection"}),"\n",(0,s.jsxs)(n.p,{children:["In the ",(0,s.jsx)(n.strong,{children:"main"})," tab of the ",(0,s.jsx)(n.strong,{children:"Connection Settings"})," window, configure the following connection information:"]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Server Host: FE host IP address of the Doris cluster."}),"\n",(0,s.jsx)(n.li,{children:"Port: FE query port of Doris cluster, such as 9030."}),"\n",(0,s.jsx)(n.li,{children:"Database: The target database in the Doris cluster."}),"\n",(0,s.jsx)(n.li,{children:"Username: The username used to log in to the Doris cluster, such as admin."}),"\n",(0,s.jsx)(n.li,{children:"Password: User password used to log in to the Doris cluster."}),"\n"]}),"\n",(0,s.jsx)(n.admonition,{type:"tip",children:(0,s.jsx)(n.p,{children:"Database can be used to distinguish between internal catalog and external catalog. If only the Database name is filled in, the current data source will be connected to the internal catalog by default. If the format is catalog.db, the current data source will be connected to the catalog filled in Database by default, as shown in DBeaver The database tables are also database tables in the connected catalog, so you can use DBeaver's MySQL driver to create multiple Doris data sources to manage different Catalogs in Doris."})}),"\n",(0,s.jsx)(n.admonition,{title:"Note",type:"info",children:(0,s.jsx)(n.p,{children:"Managing the external catalog connected to Doris through the Database form of catalog.db requires Doris version 2.1.0 and above."})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["internal catalog\n",(0,s.jsx)(n.img,{alt:"connect internal catalog",src:t(931025).Z+"",width:"1280",height:"1248"})]}),"\n",(0,s.jsxs)(n.li,{children:["external catalog\n",(0,s.jsx)(n.img,{alt:"connect external catalog",src:t(184706).Z+"",width:"1280",height:"1248"})]}),"\n"]}),"\n",(0,s.jsxs)(n.ol,{start:"5",children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Test data source connection"}),"\n",(0,s.jsxs)(n.p,{children:["After filling in the connection information, click Test Connection in the lower left corner to verify the accuracy of the database connection information. DBeaver returns to the following dialog box to confirm the configuration of the connection information. Click OK to confirm that the configured connection information is correct. Then click Finish in the lower right corner to complete the connection configuration.\n",(0,s.jsx)(n.img,{alt:"test connection",src:t(157359).Z+"",width:"1280",height:"1248"})]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Connect to database"}),"\n",(0,s.jsxs)(n.p,{children:["After the database connection is established, you can see the created data source connection in the database connection navigation on the left, and you can connect and manage the database through DBeaver.\n",(0,s.jsx)(n.img,{alt:"create connection",src:t(462976).Z+"",width:"1280",height:"756"})]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"function-support",children:"Function support"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"fully support"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Visual viewing class\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Databases\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Tables"}),"\n",(0,s.jsx)(n.li,{children:"Views"}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["Users\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Administer"}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.li,{children:"Session Manager"}),"\n",(0,s.jsxs)(n.li,{children:["System Info\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Session Variables"}),"\n",(0,s.jsx)(n.li,{children:"Global Variables"}),"\n",(0,s.jsx)(n.li,{children:"Engines"}),"\n",(0,s.jsx)(n.li,{children:"Charsets"}),"\n",(0,s.jsx)(n.li,{children:"User Priviages"}),"\n",(0,s.jsx)(n.li,{children:"Plugin"}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["Operation class\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"SQL editor"}),"\n",(0,s.jsx)(n.li,{children:"SQL console"}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"basic support"}),"\n",(0,s.jsx)(n.p,{children:"The basic support part means that you can click to view without error, but due to protocol compatibility issues, there may be incomplete display."}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Visual viewing class\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"dash board"}),"\n",(0,s.jsx)(n.li,{children:"Users/user/properties"}),"\n",(0,s.jsx)(n.li,{children:"Session Status"}),"\n",(0,s.jsx)(n.li,{children:"Global Status"}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"not support"}),"\n",(0,s.jsx)(n.p,{children:"The unsupported part means that when using DBeaver to manage Doris, errors may be reported when performing certain visual operations, or some visual operations are not verified.\nSuch as visual creation of database tables, schema change, addition, deletion and modification of data, etc."}),"\n"]}),"\n"]})]})}function h(e={}){let{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},159899:function(e,n,t){t.d(n,{Z:function(){return i}});let i=t.p+"assets/images/dbeaver1-08e265526a12a1b560d84b179eac1238.png"},579316:function(e,n,t){t.d(n,{Z:function(){return i}});let i=t.p+"assets/images/dbeaver2-a7f26e8015598024cb730df1f3f341d2.png"},348704:function(e,n,t){t.d(n,{Z:function(){return i}});let i=t.p+"assets/images/dbeaver3-599f75b71d72b8454f6641c2e575f96c.png"},931025:function(e,n,t){t.d(n,{Z:function(){return i}});let i=t.p+"assets/images/dbeaver4-9b79f13badba5713605d6647f4648ed9.png"},184706:function(e,n,t){t.d(n,{Z:function(){return i}});let i=t.p+"assets/images/dbeaver5-f92fa21b93bffc3ce13dfb830da8dd13.png"},157359:function(e,n,t){t.d(n,{Z:function(){return i}});let i=t.p+"assets/images/dbeaver6-fac1178b7798f028a57c79991dd9a036.png"},462976:function(e,n,t){t.d(n,{Z:function(){return i}});let i=t.p+"assets/images/dbeaver7-68de28fe0f0fe59c23972aa3bc39c354.png"},250065:function(e,n,t){t.d(n,{Z:function(){return o},a:function(){return a}});var i=t(667294);let s={},r=i.createContext(s);function a(e){let n=i.useContext(r);return i.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),i.createElement(r.Provider,{value:n},e.children)}}}]);