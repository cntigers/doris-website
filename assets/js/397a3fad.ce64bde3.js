"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["564938"],{252307:function(e,n,i){i.r(n),i.d(n,{default:()=>h,frontMatter:()=>d,metadata:()=>t,assets:()=>a,toc:()=>l,contentTitle:()=>o});var t=JSON.parse('{"id":"sql-manual/sql-functions/aggregate-functions/window-funnel","title":"WINDOW_FUNNEL","description":"\x3c!--  Licensed to the Apache Software Foundation (ASF) under one or more contributor license agreements.  See the NOTICE file distributed with this work for additional information regarding copyright ownership.  The ASF licenses this file to you under the Apache License, Version 2.0 (the \\"License\\"); you may not use this file except in compliance with the License.  You may obtain a copy of the License at","source":"@site/versioned_docs/version-3.0/sql-manual/sql-functions/aggregate-functions/window-funnel.md","sourceDirName":"sql-manual/sql-functions/aggregate-functions","slug":"/sql-manual/sql-functions/aggregate-functions/window-funnel","permalink":"/docs/3.0/sql-manual/sql-functions/aggregate-functions/window-funnel","draft":false,"unlisted":false,"tags":[],"version":"3.0","frontMatter":{"title":"WINDOW_FUNNEL","language":"en"},"sidebar":"docs","previous":{"title":"SUM0","permalink":"/docs/3.0/sql-manual/sql-functions/aggregate-functions/sum0"},"next":{"title":"BITMAP_INTERSECT","permalink":"/docs/3.0/sql-manual/sql-functions/aggregate-functions/bitmap-intersect"}}'),s=i("785893"),r=i("250065");let d={title:"WINDOW_FUNNEL",language:"en"},o=void 0,a={},l=[{value:"Description",id:"description",level:2},{value:"Syntax",id:"syntax",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Return Value",id:"return-value",level:2},{value:"Examples",id:"examples",level:2},{value:"example1: default mode",id:"example1-default-mode",level:3},{value:"example2: deduplication mode",id:"example2-deduplication-mode",level:3},{value:"example3: fixed mode",id:"example3-fixed-mode",level:3},{value:"example4: increase mode",id:"example4-increase-mode",level:3}];function c(e){let n={code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,s.jsx)(n.p,{children:"The WINDOW_FUNNEL function analyzes user behavior sequences by searching for event chains within a specified time window and calculating the maximum number of completed steps in the event chain. This function is particularly useful for conversion funnel analysis, such as analyzing user conversion from website visits to final purchases."}),"\n",(0,s.jsx)(n.p,{children:"The function works according to the algorithm:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"The function searches for data that triggers the first condition in the chain and sets the event counter to 1. This is the moment when the sliding window starts."}),"\n",(0,s.jsx)(n.li,{children:"If events from the chain occur sequentially within the window, the counter is incremented. If the sequence of events is disrupted, the counter is not incremented."}),"\n",(0,s.jsx)(n.li,{children:"If the data has multiple event chains at varying points of completion, the function will only output the size of the longest chain."}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"syntax",children:"Syntax"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sql",children:"WINDOW_FUNNEL(<window>, <mode>, <timestamp>, <event_1>[, event_2, ... , event_n])\n"})}),"\n",(0,s.jsx)(n.h2,{id:"parameters",children:"Parameters"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Parameter"}),(0,s.jsx)(n.th,{children:"Description"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"<window>"})}),(0,s.jsx)(n.td,{children:"window is the length of time window in seconds"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"<mode>"})}),(0,s.jsxs)(n.td,{children:["There are four modes in total, ",(0,s.jsx)(n.code,{children:"default"}),", ",(0,s.jsx)(n.code,{children:"deduplication"}),", ",(0,s.jsx)(n.code,{children:"fixed"}),", and ",(0,s.jsx)(n.code,{children:"increase"}),". For details, please refer to the ",(0,s.jsx)(n.strong,{children:"Mode"})," below."]})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"<timestamp>"})}),(0,s.jsx)(n.td,{children:"timestamp specifies column of DATETIME type, sliding time window works on it"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"<event_n>"})}),(0,s.jsx)(n.td,{children:"evnet_n is boolean expression like eventID = 1004"})]})]})]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Mode"}),"\n- ",(0,s.jsx)(n.code,{children:"default"}),": Defualt mode.\n- ",(0,s.jsx)(n.code,{children:"deduplication"}),": If the same event holds for the sequence of events, then such repeating event interrupts further processing. E.g. the array parameter is [event1='A', event2='B', event3='C', event4='D'], and the original event chain is \"A-B-C-B-D\". Since event B repeats, the filtered event chain can only be \"A-B-C\" and the max event level is 3.\n- ",(0,s.jsx)(n.code,{children:"fixed"}),": Don't allow interventions of other events. E.g. the array parameter is [event1='A', event2='B', event3='C', event4='D'], and the original event chain is A->B->D->C, it stops finding A->B->C at the D and the max event level is 2.\n- ",(0,s.jsx)(n.code,{children:"increase"}),": Apply conditions only to events with strictly increasing timestamps."]}),"\n",(0,s.jsx)(n.h2,{id:"return-value",children:"Return Value"}),"\n",(0,s.jsx)(n.p,{children:"Returns an integer representing the maximum number of consecutive steps completed within the specified time window."}),"\n",(0,s.jsx)(n.h2,{id:"examples",children:"Examples"}),"\n",(0,s.jsx)(n.h3,{id:"example1-default-mode",children:"example1: default mode"}),"\n",(0,s.jsxs)(n.p,{children:["Using the ",(0,s.jsx)(n.code,{children:"default"})," mode, find out the maximum number of consecutive events corresponding to different ",(0,s.jsx)(n.code,{children:"user_id"}),", with a time window of ",(0,s.jsx)(n.code,{children:"5"})," minutes:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sql",children:"CREATE TABLE events(\n    user_id BIGINT,\n    event_name VARCHAR(64),\n    event_timestamp datetime,\n    phone_brand varchar(64),\n    tab_num int\n) distributed by hash(user_id) buckets 3 properties(\"replication_num\" = \"1\");\n\nINSERT INTO\n    events\nVALUES\n    (100123, 'login', '2022-05-14 10:01:00', 'HONOR', 1),\n    (100123, 'visit', '2022-05-14 10:02:00', 'HONOR', 2),\n    (100123, 'order', '2022-05-14 10:04:00', 'HONOR', 3),\n    (100123, 'payment', '2022-05-14 10:10:00', 'HONOR', 4),\n    (100125, 'login', '2022-05-15 11:00:00', 'XIAOMI', 1),\n    (100125, 'visit', '2022-05-15 11:01:00', 'XIAOMI', 2),\n    (100125, 'order', '2022-05-15 11:02:00', 'XIAOMI', 6),\n    (100126, 'login', '2022-05-15 12:00:00', 'IPHONE', 1),\n    (100126, 'visit', '2022-05-15 12:01:00', 'HONOR', 2),\n    (100127, 'login', '2022-05-15 11:30:00', 'VIVO', 1),\n    (100127, 'visit', '2022-05-15 11:31:00', 'VIVO', 5);\n\nSELECT\n    user_id,\n    window_funnel(\n        300,\n        \"default\",\n        event_timestamp,\n        event_name = 'login',\n        event_name = 'visit',\n        event_name = 'order',\n        event_name = 'payment'\n    ) AS level\nFROM\n    events\nGROUP BY\n    user_id\norder BY\n    user_id;\n"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-text",children:"+---------+-------+\n| user_id | level |\n+---------+-------+\n|  100123 |     3 |\n|  100125 |     3 |\n|  100126 |     2 |\n|  100127 |     2 |\n+---------+-------+\n"})}),"\n",(0,s.jsxs)(n.p,{children:["For ",(0,s.jsx)(n.code,{children:"uesr_id=100123"}),", because the time when the ",(0,s.jsx)(n.code,{children:"payment"})," event occurred exceeds the time window, the matched event chain is ",(0,s.jsx)(n.code,{children:"login-visit-order"}),"."]}),"\n",(0,s.jsx)(n.h3,{id:"example2-deduplication-mode",children:"example2: deduplication mode"}),"\n",(0,s.jsxs)(n.p,{children:["Use the ",(0,s.jsx)(n.code,{children:"deduplication"})," mode to find out the maximum number of consecutive events corresponding to different user_ids, with a time window of 1 hour:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sql",children:"CREATE TABLE events(\n    user_id BIGINT,\n    event_name VARCHAR(64),\n    event_timestamp datetime,\n    phone_brand varchar(64),\n    tab_num int\n) distributed by hash(user_id) buckets 3 properties(\"replication_num\" = \"1\");\n\nINSERT INTO\n    events\nVALUES\n    (100123, 'login', '2022-05-14 10:01:00', 'HONOR', 1),\n    (100123, 'visit', '2022-05-14 10:02:00', 'HONOR', 2),\n    (100123, 'login', '2022-05-14 10:03:00', 'HONOR', 3),\n    (100123, 'order', '2022-05-14 10:04:00', \"HONOR\", 4),\n    (100123, 'payment', '2022-05-14 10:10:00', 'HONOR', 4),\n    (100125, 'login', '2022-05-15 11:00:00', 'XIAOMI', 1),\n    (100125, 'visit', '2022-05-15 11:01:00', 'XIAOMI', 2),\n    (100125, 'order', '2022-05-15 11:02:00', 'XIAOMI', 6),\n    (100126, 'login', '2022-05-15 12:00:00', 'IPHONE', 1),\n    (100126, 'visit', '2022-05-15 12:01:00', 'HONOR', 2),\n    (100127, 'login', '2022-05-15 11:30:00', 'VIVO', 1),\n    (100127, 'visit', '2022-05-15 11:31:00', 'VIVO', 5);\n\nSELECT\n    user_id,\n    window_funnel(\n        3600,\n        \"deduplication\",\n        event_timestamp,\n        event_name = 'login',\n        event_name = 'visit',\n        event_name = 'order',\n        event_name = 'payment'\n    ) AS level\nFROM\n    events\nGROUP BY\n    user_id\norder BY\n    user_id;\n"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-text",children:"+---------+-------+\n| user_id | level |\n+---------+-------+\n|  100123 |     2 |\n|  100125 |     3 |\n|  100126 |     2 |\n|  100127 |     2 |\n+---------+-------+\n"})}),"\n",(0,s.jsxs)(n.p,{children:["For ",(0,s.jsx)(n.code,{children:"uesr_id=100123"}),", after matching the ",(0,s.jsx)(n.code,{children:"visit"})," event, the ",(0,s.jsx)(n.code,{children:"login"})," event appears repeatedly, so the matched event chain is ",(0,s.jsx)(n.code,{children:"login-visit"}),"."]}),"\n",(0,s.jsx)(n.h3,{id:"example3-fixed-mode",children:"example3: fixed mode"}),"\n",(0,s.jsxs)(n.p,{children:["Use the ",(0,s.jsx)(n.code,{children:"fixed"})," mode to find out the maximum number of consecutive events corresponding to different ",(0,s.jsx)(n.code,{children:"user_id"}),", with a time window of ",(0,s.jsx)(n.code,{children:"1"})," hour:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sql",children:"CREATE TABLE events(\n    user_id BIGINT,\n    event_name VARCHAR(64),\n    event_timestamp datetime,\n    phone_brand varchar(64),\n    tab_num int\n) distributed by hash(user_id) buckets 3 properties(\"replication_num\" = \"1\");\n\nINSERT INTO\n    events\nVALUES\n    (100123, 'login', '2022-05-14 10:01:00', 'HONOR', 1),\n    (100123, 'visit', '2022-05-14 10:02:00', 'HONOR', 2),\n    (100123, 'order', '2022-05-14 10:03:00', \"HONOR\", 4),\n    (100123, 'login2', '2022-05-14 10:04:00', 'HONOR', 3),\n    (100123, 'payment', '2022-05-14 10:10:00', 'HONOR', 4),\n    (100125, 'login', '2022-05-15 11:00:00', 'XIAOMI', 1),\n    (100125, 'visit', '2022-05-15 11:01:00', 'XIAOMI', 2),\n    (100125, 'order', '2022-05-15 11:02:00', 'XIAOMI', 6),\n    (100126, 'login', '2022-05-15 12:00:00', 'IPHONE', 1),\n    (100126, 'visit', '2022-05-15 12:01:00', 'HONOR', 2),\n    (100127, 'login', '2022-05-15 11:30:00', 'VIVO', 1),\n    (100127, 'visit', '2022-05-15 11:31:00', 'VIVO', 5);\n\nSELECT\n    user_id,\n    window_funnel(\n        3600,\n        \"fixed\",\n        event_timestamp,\n        event_name = 'login',\n        event_name = 'visit',\n        event_name = 'order',\n        event_name = 'payment'\n    ) AS level\nFROM\n    events\nGROUP BY\n    user_id\norder BY\n    user_id;\n"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-text",children:"+---------+-------+\n| user_id | level |\n+---------+-------+\n|  100123 |     3 |\n|  100125 |     3 |\n|  100126 |     2 |\n|  100127 |     2 |\n+---------+-------+\n"})}),"\n",(0,s.jsxs)(n.p,{children:["For ",(0,s.jsx)(n.code,{children:"uesr_id=100123"}),", after matching the ",(0,s.jsx)(n.code,{children:"order"})," event, the event chain is interrupted by the ",(0,s.jsx)(n.code,{children:"login2"})," event, so the matched event chain is ",(0,s.jsx)(n.code,{children:"login-visit-order"}),"."]}),"\n",(0,s.jsx)(n.h3,{id:"example4-increase-mode",children:"example4: increase mode"}),"\n",(0,s.jsxs)(n.p,{children:["Use the ",(0,s.jsx)(n.code,{children:"increase"})," mode to find out the maximum number of consecutive events corresponding to different ",(0,s.jsx)(n.code,{children:"user_id"}),", with a time window of ",(0,s.jsx)(n.code,{children:"1"})," hour:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sql",children:"CREATE TABLE events(\n    user_id BIGINT,\n    event_name VARCHAR(64),\n    event_timestamp datetime,\n    phone_brand varchar(64),\n    tab_num int\n) distributed by hash(user_id) buckets 3 properties(\"replication_num\" = \"1\");\n\nINSERT INTO\n    events\nVALUES\n    (100123, 'login', '2022-05-14 10:01:00', 'HONOR', 1),\n    (100123, 'visit', '2022-05-14 10:02:00', 'HONOR', 2),\n    (100123, 'order', '2022-05-14 10:04:00', \"HONOR\", 4),\n    (100123, 'payment', '2022-05-14 10:04:00', 'HONOR', 4),\n    (100125, 'login', '2022-05-15 11:00:00', 'XIAOMI', 1),\n    (100125, 'visit', '2022-05-15 11:01:00', 'XIAOMI', 2),\n    (100125, 'order', '2022-05-15 11:02:00', 'XIAOMI', 6),\n    (100126, 'login', '2022-05-15 12:00:00', 'IPHONE', 1),\n    (100126, 'visit', '2022-05-15 12:01:00', 'HONOR', 2),\n    (100127, 'login', '2022-05-15 11:30:00', 'VIVO', 1),\n    (100127, 'visit', '2022-05-15 11:31:00', 'VIVO', 5);\n\nSELECT\n    user_id,\n    window_funnel(\n        3600,\n        \"increase\",\n        event_timestamp,\n        event_name = 'login',\n        event_name = 'visit',\n        event_name = 'order',\n        event_name = 'payment'\n    ) AS level\nFROM\n    events\nGROUP BY\n    user_id\norder BY\n    user_id;\n"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-text",children:"+---------+-------+\n| user_id | level |\n+---------+-------+\n|  100123 |     3 |\n|  100125 |     3 |\n|  100126 |     2 |\n|  100127 |     2 |\n+---------+-------+\n"})}),"\n",(0,s.jsxs)(n.p,{children:["For ",(0,s.jsx)(n.code,{children:"uesr_id=100123"}),", the timestamp of the ",(0,s.jsx)(n.code,{children:"payment"})," event and the timestamp of the ",(0,s.jsx)(n.code,{children:"order"})," event occur in the same second and are not incremented, so the matched event chain is ",(0,s.jsx)(n.code,{children:"login-visit-order"}),"."]})]})}function h(e={}){let{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}},250065:function(e,n,i){i.d(n,{Z:function(){return o},a:function(){return d}});var t=i(667294);let s={},r=t.createContext(s);function d(e){let n=t.useContext(r);return t.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:d(e.components),t.createElement(r.Provider,{value:n},e.children)}}}]);