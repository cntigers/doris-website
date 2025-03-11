"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["953606"],{914383:function(e,n,t){t.r(n),t.d(n,{default:()=>u,frontMatter:()=>o,metadata:()=>i,assets:()=>r,toc:()=>c,contentTitle:()=>l});var i=JSON.parse('{"id":"ecosystem/bi/tableau","title":"Tableau","description":"\x3c!--","source":"@site/versioned_docs/version-3.0/ecosystem/bi/tableau.md","sourceDirName":"ecosystem/bi","slug":"/ecosystem/bi/tableau","permalink":"/docs/3.0/ecosystem/bi/tableau","draft":false,"unlisted":false,"tags":[],"version":"3.0","frontMatter":{"title":"Tableau","language":"en"},"sidebar":"docs","previous":{"title":"Power BI","permalink":"/docs/3.0/ecosystem/bi/powerbi"},"next":{"title":"QuickSight","permalink":"/docs/3.0/ecosystem/bi/quicksight"}}'),a=t("785893"),s=t("250065");let o={title:"Tableau",language:"en"},l=void 0,r={},c=[{value:"Introduction",id:"introduction",level:2},{value:"Precondition",id:"precondition",level:2},{value:"Driver installation",id:"driver-installation",level:2},{value:"Connection Configuration and Usage",id:"connection-configuration-and-usage",level:2}];function d(e){let n={a:"a",h2:"h2",img:"img",li:"li",ol:"ol",p:"p",...(0,s.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.h2,{id:"introduction",children:"Introduction"}),"\n",(0,a.jsx)(n.p,{children:"Tableau is a lightweight data visualization analysis platform that combines data operations with beautiful charts perfectly. It seamlessly combines data computation with visually appealing charts, requiring no coding from the user. By simply dragging and dropping, users can quickly gain insights into the data. They can explore different views and even easily combine multiple data sources to complete tasks such as data visualization, exploration, and analysis."}),"\n",(0,a.jsx)(n.h2,{id:"precondition",children:"Precondition"}),"\n",(0,a.jsxs)(n.p,{children:["Tableau Desktop via the following link to download: ",(0,a.jsx)(n.a,{href:"https://www.tableau.com/products/desktop/download",children:"https://www.tableau.com/products/desktop/download"})]}),"\n",(0,a.jsx)(n.h2,{id:"driver-installation",children:"Driver installation"}),"\n",(0,a.jsxs)(n.ol,{children:["\n",(0,a.jsxs)(n.li,{children:["Install iODBC\n",(0,a.jsxs)(n.ol,{children:["\n",(0,a.jsx)(n.li,{children:"Close the Tableau Desktop"}),"\n",(0,a.jsx)(n.li,{children:"Install iODBC Driver Manager. Obtain the latest version (mxkozzz.dmg) from iODBC.org"}),"\n",(0,a.jsx)(n.li,{children:"Click on the downloaded dmg file to install"}),"\n"]}),"\n"]}),"\n",(0,a.jsx)(n.li,{children:"Install the MySQL driver"}),"\n"]}),"\n",(0,a.jsx)(n.p,{children:'When choosing the ODBC driver for MySQL to connect to Doris, you should install the MySQL 5.x ODBC driver. Using the latest MySQL driver may result in an "Unsupported command" error when connecting to Doris.'}),"\n",(0,a.jsx)(n.h2,{id:"connection-configuration-and-usage",children:"Connection Configuration and Usage"}),"\n",(0,a.jsxs)(n.ol,{children:["\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsx)(n.p,{children:"Click the Tableau Desktop home page and select MySQL at the connection data source"}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.img,{alt:"main page",src:t(706327).Z+"",width:"2404",height:"1376"})}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsx)(n.p,{children:"Fill in the Doris server address, port and other relevant information, and click sigin in button after correctly filling"}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.img,{alt:"sign in page",src:t(705894).Z+"",width:"1004",height:"1000"})}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsx)(n.p,{children:"After entering Tableau, select the corresponding library table to carry out the relevant compass processing."}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.img,{alt:"usage page",src:t(477204).Z+"",width:"2880",height:"1800"})}),"\n"]}),"\n"]})]})}function u(e={}){let{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(d,{...e})}):d(e)}},706327:function(e,n,t){t.d(n,{Z:function(){return i}});let i=t.p+"assets/images/bi-tableau-en-1-57811445a76a97b937b0aad613323489.png"},705894:function(e,n,t){t.d(n,{Z:function(){return i}});let i=t.p+"assets/images/bi-tableau-en-2-4b1e57a39ebcbc741040d63e78cfe1fe.png"},477204:function(e,n,t){t.d(n,{Z:function(){return i}});let i=t.p+"assets/images/bi-tableau-en-3-3d39203cd29ca43f4d119af4d329be1d.png"},250065:function(e,n,t){t.d(n,{Z:function(){return l},a:function(){return o}});var i=t(667294);let a={},s=i.createContext(a);function o(e){let n=i.useContext(s);return i.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:o(e.components),i.createElement(s.Provider,{value:n},e.children)}}}]);