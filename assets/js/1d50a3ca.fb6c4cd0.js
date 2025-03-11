"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["738820"],{242995:function(e,n,t){t.r(n),t.d(n,{default:()=>c,frontMatter:()=>l,metadata:()=>s,assets:()=>d,toc:()=>a,contentTitle:()=>r});var s=JSON.parse('{"id":"admin-manual/open-api/be-http/be-vlog","title":"Modify BE VLOG","description":"\x3c!--","source":"@site/versioned_docs/version-2.1/admin-manual/open-api/be-http/be-vlog.md","sourceDirName":"admin-manual/open-api/be-http","slug":"/admin-manual/open-api/be-http/be-vlog","permalink":"/docs/admin-manual/open-api/be-http/be-vlog","draft":false,"unlisted":false,"tags":[],"version":"2.1","frontMatter":{"title":"Modify BE VLOG","language":"en"},"sidebar":"docs","previous":{"title":"Restore Tablet","permalink":"/docs/admin-manual/open-api/be-http/tablet-restore"},"next":{"title":"Spark Doris Connector","permalink":"/docs/ecosystem/spark-doris-connector"}}'),o=t("785893"),i=t("250065");let l={title:"Modify BE VLOG",language:"en"},r=void 0,d={},a=[{value:"Request",id:"request",level:2},{value:"Description",id:"description",level:2},{value:"Query parameters",id:"query-parameters",level:2},{value:"Request body",id:"request-body",level:2},{value:"Response",id:"response",level:2},{value:"Examples",id:"examples",level:2}];function u(e){let n={code:"code",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,i.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.h2,{id:"request",children:"Request"}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.code,{children:"POST /api/glog/adjust?module=<module_name>&level=<level_number>"})}),"\n",(0,o.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,o.jsx)(n.p,{children:"This function is used to dynamically adjust the VLOG log on the BE side."}),"\n",(0,o.jsx)(n.h2,{id:"query-parameters",children:"Query parameters"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.code,{children:"module_name"}),"\nModule to set up VLOG, corresponding to BE without suffix filename"]}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.code,{children:"level_number"}),"\nVLOG level, from 1 to 10. And -1 for off"]}),"\n"]}),"\n"]}),"\n",(0,o.jsx)(n.h2,{id:"request-body",children:"Request body"}),"\n",(0,o.jsx)(n.p,{children:"None"}),"\n",(0,o.jsx)(n.h2,{id:"response",children:"Response"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{children:'```json\n{\n    msg: "adjust vlog of xxx from -1 to 10 succeed",\n    code: 0\n}\n```\n'})}),"\n",(0,o.jsx)(n.h2,{id:"examples",children:"Examples"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{children:'```bash\ncurl -X POST "http://127.0.0.1:8040/api/glog/adjust?module=vrow_distribution&level=-1"\n```\n'})})]})}function c(e={}){let{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(u,{...e})}):u(e)}},250065:function(e,n,t){t.d(n,{Z:function(){return r},a:function(){return l}});var s=t(667294);let o={},i=s.createContext(o);function l(e){let n=s.useContext(i);return s.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:l(e.components),s.createElement(i.Provider,{value:n},e.children)}}}]);