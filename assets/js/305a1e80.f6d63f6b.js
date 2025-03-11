"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["191727"],{696121:function(e,n,t){t.r(n),t.d(n,{default:()=>h,frontMatter:()=>r,metadata:()=>s,assets:()=>c,toc:()=>l,contentTitle:()=>a});var s=JSON.parse('{"id":"ecosystem/bi/apache-superset","title":"Apache Superset","description":"\x3c!--","source":"@site/versioned_docs/version-2.0/ecosystem/bi/apache-superset.md","sourceDirName":"ecosystem/bi","slug":"/ecosystem/bi/apache-superset","permalink":"/docs/2.0/ecosystem/bi/apache-superset","draft":false,"unlisted":false,"tags":[],"version":"2.0","frontMatter":{"title":"Apache Superset","language":"en"},"sidebar":"docs","previous":{"title":"Doris Streamloader","permalink":"/docs/2.0/ecosystem/doris-streamloader"},"next":{"title":"FineBI","permalink":"/docs/2.0/ecosystem/bi/finebi"}}'),i=t("785893"),o=t("250065");let r={title:"Apache Superset",language:"en"},a=void 0,c={},l=[{value:"Introduction",id:"introduction",level:2},{value:"Preconditions",id:"preconditions",level:2},{value:"Add data source",id:"add-data-source",level:2}];function d(e){let n={a:"a",admonition:"admonition",code:"code",h2:"h2",img:"img",li:"li",ol:"ol",p:"p",ul:"ul",...(0,o.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h2,{id:"introduction",children:"Introduction"}),"\n",(0,i.jsx)(n.p,{children:"Apache Superset is an open-source data exploration platform. It supports a rich variety of data source connections and numerous visualization methods. It also enables fine-grained access control for users. The main features of this tool include self-service analysis, customizable dashboards, visualization of analytical results (with export functionality), and user/role permission control. Moreover, it integrates an SQL editor for conducting SQL editing and queries."}),"\n",(0,i.jsx)(n.p,{children:"In Apache Superset version 3.1 official support has been introduced for querying and visualizing both internal and external data from Apache Doris."}),"\n",(0,i.jsx)(n.h2,{id:"preconditions",children:"Preconditions"}),"\n",(0,i.jsx)(n.p,{children:"Ensure you have completed the following tool installations:"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsx)(n.li,{children:"Install the Python client for Apache Doris on the Apache Superset server.\npip install pydoris"}),"\n",(0,i.jsxs)(n.li,{children:["Install Apache Superset version 3.1 or above. For detailed instructions, refer to ",(0,i.jsx)(n.a,{href:"https://superset.apache.org/docs/installation/installing-superset-from-pypi/",children:"Installing Superset from PyPI"})," or ",(0,i.jsx)(n.a,{href:"https://hub.docker.com/r/apache/superset",children:"Installing Superset Locally Using Docker Compose"}),"."]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"add-data-source",children:"Add data source"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"You can access Superset by visiting the corresponding startup port."}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"login page",src:t(891533).Z+"",width:"1280",height:"303"})}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:'Select the "Add Database Connection" option after logging into Superset.'}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"add databases",src:t(828415).Z+"",width:"1280",height:"592"})}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:'In the connection page, select the "Apache Doris" option.'}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"select databases",src:t(955158).Z+"",width:"734",height:"1280"})}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Fill in the SQLAlchemy URI information in the connection details and proceed with the relevant connectivity verification."}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"test connection",src:t(324322).Z+"",width:"2082",height:"1450"})}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"When creating a data source in Apache Superset, please pay attention to the following two points:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Choose Apache Doris as the data source in SUPPORTED DATABASES."}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"In the SQLAlchemy URI, fill in the URI following the Apache Doris SQLAlchemy URI format as shown below."}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.code,{children:"doris://<User>:<Password>@<Host>:<Port>/<Catalog>.<Database>"})}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"URI parameters are explained as follows:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"User: The username for logging into the Apache Doris cluster, e.g., admin."}),"\n",(0,i.jsx)(n.li,{children:"Password: The password for logging into the Apache Doris cluster."}),"\n",(0,i.jsx)(n.li,{children:"Host: The IP address of the FE (Frontend) host in the Apache Doris cluster."}),"\n",(0,i.jsx)(n.li,{children:"Port: The query port of the FE in the Apache Doris cluster, e.g. 9030."}),"\n",(0,i.jsx)(n.li,{children:"Catalog: The target Catalog in the Apache Doris cluster. Both Internal Catalog and External Catalog are supported."}),"\n",(0,i.jsx)(n.li,{children:"Database: The target database in the Apache Doris cluster. Both internal and external databases are supported."}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.admonition,{type:"tip",children:(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["When deploying Apache Superset using the latest Docker image, if you encounter the issue of not finding the Apache Doris data source, it may be because the default ",(0,i.jsx)(n.a,{href:"https://hub.docker.com/r/apache/superset",children:"Apache Superset Docker image"})," includes only basic data source builds. You need to manually install the pydoris package. You can refer to the 'How to extend this image' section in the Apache Superset Docker tutorial for the deployment steps of Apache Superset."]}),"\n",(0,i.jsx)(n.li,{children:"It is recommended to use Apache Doris 2.0.4 and above."}),"\n"]})})]})}function h(e={}){let{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},891533:function(e,n,t){t.d(n,{Z:function(){return s}});let s=t.p+"assets/images/bi-superset-en-1-87eec9d4bd909545f7e865b6bde2aec3.png"},828415:function(e,n,t){t.d(n,{Z:function(){return s}});let s=t.p+"assets/images/bi-superset-en-2-f1742e66856cfa06651793861e851213.png"},955158:function(e,n,t){t.d(n,{Z:function(){return s}});let s=t.p+"assets/images/bi-superset-en-3-1a3dd3ad89e52f70bd12396a71ce4451.png"},324322:function(e,n,t){t.d(n,{Z:function(){return s}});let s=t.p+"assets/images/bi-superset-en-4-027476546f2cf22034dd4fc1ec97bd15.png"},250065:function(e,n,t){t.d(n,{Z:function(){return a},a:function(){return r}});var s=t(667294);let i={},o=s.createContext(i);function r(e){let n=s.useContext(o);return s.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),s.createElement(o.Provider,{value:n},e.children)}}}]);