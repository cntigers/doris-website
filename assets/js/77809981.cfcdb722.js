"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["533643"],{403936:function(e,n,t){t.r(n),t.d(n,{default:()=>u,frontMatter:()=>l,metadata:()=>i,assets:()=>c,toc:()=>o,contentTitle:()=>r});var i=JSON.parse('{"id":"sql-manual/sql-functions/scalar-functions/date-time-functions/unix-timestamp","title":"UNIX_TIMESTAMP","description":"\x3c!--","source":"@site/docs/sql-manual/sql-functions/scalar-functions/date-time-functions/unix-timestamp.md","sourceDirName":"sql-manual/sql-functions/scalar-functions/date-time-functions","slug":"/sql-manual/sql-functions/scalar-functions/date-time-functions/unix-timestamp","permalink":"/docs/dev/sql-manual/sql-functions/scalar-functions/date-time-functions/unix-timestamp","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"title":"UNIX_TIMESTAMP","language":"en"},"sidebar":"docs","previous":{"title":"FROM_ISO8601_DATE","permalink":"/docs/dev/sql-manual/sql-functions/scalar-functions/date-time-functions/from-iso8601-date"},"next":{"title":"UTC_TIMESTAMP","permalink":"/docs/dev/sql-manual/sql-functions/scalar-functions/date-time-functions/utc-timestamp"}}'),s=t("785893"),a=t("250065");let l={title:"UNIX_TIMESTAMP",language:"en"},r=void 0,c={},o=[{value:"unix_timestamp",id:"unix_timestamp",level:2},{value:"Description",id:"description",level:3},{value:"Syntax",id:"syntax",level:4},{value:"example",id:"example",level:3},{value:"keywords",id:"keywords",level:3}];function m(e){let n={code:"code",h2:"h2",h3:"h3",h4:"h4",p:"p",pre:"pre",...(0,a.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h2,{id:"unix_timestamp",children:"unix_timestamp"}),"\n",(0,s.jsx)(n.h3,{id:"description",children:"Description"}),"\n",(0,s.jsx)(n.h4,{id:"syntax",children:"Syntax"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.code,{children:"INT UNIX_TIMESTAMP([DATETIME date[, STRING fmt]])"})}),"\n",(0,s.jsx)(n.p,{children:"Converting a Date or Datetime type to a UNIX timestamp."}),"\n",(0,s.jsx)(n.p,{children:"If there are no parameters, the current time is converted into a timestamp."}),"\n",(0,s.jsx)(n.p,{children:"The parameter needs to be Date or Datetime type."}),"\n",(0,s.jsx)(n.p,{children:"Any date before 1970-01-01 00:00:00 or after 2038-01-19 03:14:07 will return 0."}),"\n",(0,s.jsxs)(n.p,{children:["See ",(0,s.jsx)(n.code,{children:"date_format"})," function to get Format explanation."]}),"\n",(0,s.jsx)(n.p,{children:"This function is affected by time zone."}),"\n",(0,s.jsx)(n.h3,{id:"example",children:"example"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"mysql> select unix_timestamp();\n+------------------+\n| unix_timestamp() |\n+------------------+\n|       1558589570 |\n+------------------+\n\nmysql> select unix_timestamp('2007-11-30 10:30:19');\n+---------------------------------------+\n| unix_timestamp('2007-11-30 10:30:19') |\n+---------------------------------------+\n|                            1196389819 |\n+---------------------------------------+\n\nmysql> select unix_timestamp('2007-11-30 10:30-19', '%Y-%m-%d %H:%i-%s');\n+---------------------------------------+\n| unix_timestamp('2007-11-30 10:30-19') |\n+---------------------------------------+\n|                            1196389819 |\n+---------------------------------------+\n\nmysql> select unix_timestamp('2007-11-30 10:30%3A19', '%Y-%m-%d %H:%i%%3A%s');\n+---------------------------------------+\n| unix_timestamp('2007-11-30 10:30%3A19') |\n+---------------------------------------+\n|                            1196389819 |\n+---------------------------------------+\n\nmysql> select unix_timestamp('1969-01-01 00:00:00');\n+---------------------------------------+\n| unix_timestamp('1969-01-01 00:00:00') |\n+---------------------------------------+\n|                                     0 |\n+---------------------------------------+\n"})}),"\n",(0,s.jsx)(n.h3,{id:"keywords",children:"keywords"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"UNIX_TIMESTAMP,UNIX,TIMESTAMP\n"})})]})}function u(e={}){let{wrapper:n}={...(0,a.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(m,{...e})}):m(e)}},250065:function(e,n,t){t.d(n,{Z:function(){return r},a:function(){return l}});var i=t(667294);let s={},a=i.createContext(s);function l(e){let n=i.useContext(a);return i.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:l(e.components),i.createElement(a.Provider,{value:n},e.children)}}}]);