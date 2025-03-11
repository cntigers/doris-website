"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["393916"],{811297:function(n,e,s){s.r(e),s.d(e,{default:()=>h,frontMatter:()=>r,metadata:()=>t,assets:()=>d,toc:()=>c,contentTitle:()=>l});var t=JSON.parse('{"id":"sql-manual/sql-data-types/semi-structured/VARIANT","title":"VARIANT","description":"\x3c!--","source":"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-3.0/sql-manual/sql-data-types/semi-structured/VARIANT.md","sourceDirName":"sql-manual/sql-data-types/semi-structured","slug":"/sql-manual/sql-data-types/semi-structured/VARIANT","permalink":"/zh-CN/docs/3.0/sql-manual/sql-data-types/semi-structured/VARIANT","draft":false,"unlisted":false,"tags":[],"version":"3.0","frontMatter":{"title":"VARIANT","language":"zh-CN"},"sidebar":"docs","previous":{"title":"JSON","permalink":"/zh-CN/docs/3.0/sql-manual/sql-data-types/semi-structured/JSON"},"next":{"title":"HLL(HyperLogLog)","permalink":"/zh-CN/docs/3.0/sql-manual/sql-data-types/aggregate/HLL"}}'),i=s("785893"),a=s("250065");let r={title:"VARIANT",language:"zh-CN"},l=void 0,d={},c=[{value:"\u63CF\u8FF0",id:"\u63CF\u8FF0",level:2},{value:"Note",id:"note",level:3},{value:"\u4E3E\u4F8B",id:"\u4E3E\u4F8B",level:2},{value:"\u57FA\u4E8E github events \u6570\u636E\u96C6\u793A\u4F8B",id:"\u57FA\u4E8E-github-events-\u6570\u636E\u96C6\u793A\u4F8B",level:3},{value:"\u5D4C\u5957\u6570\u7EC4\u7C7B\u578B",id:"\u5D4C\u5957\u6570\u7EC4\u7C7B\u578B",level:3},{value:"\u4F7F\u7528\u9650\u5236\u548C\u6700\u4F73\u5B9E\u8DF5",id:"\u4F7F\u7528\u9650\u5236\u548C\u6700\u4F73\u5B9E\u8DF5",level:3},{value:"FAQ",id:"faq",level:3}];function o(n){let e={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,a.a)(),...n.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(e.h2,{id:"\u63CF\u8FF0",children:"\u63CF\u8FF0"}),"\n",(0,i.jsx)(e.p,{children:"\u5728 Doris 2.1 \u4E2D\u5F15\u5165\u4E00\u79CD\u65B0\u7684\u6570\u636E\u7C7B\u578B VARIANT\uFF0C\u5B83\u53EF\u4EE5\u5B58\u50A8\u534A\u7ED3\u6784\u5316 JSON \u6570\u636E\u3002\u5B83\u5141\u8BB8\u5B58\u50A8\u5305\u542B\u4E0D\u540C\u6570\u636E\u7C7B\u578B\uFF08\u5982\u6574\u6570\u3001\u5B57\u7B26\u4E32\u3001\u5E03\u5C14\u503C\u7B49\uFF09\u7684\u590D\u6742\u6570\u636E\u7ED3\u6784\uFF0C\u800C\u65E0\u9700\u5728\u8868\u7ED3\u6784\u4E2D\u63D0\u524D\u5B9A\u4E49\u5177\u4F53\u7684\u5217\u3002VARIANT \u7C7B\u578B\u7279\u522B\u9002\u7528\u4E8E\u5904\u7406\u590D\u6742\u7684\u5D4C\u5957\u7ED3\u6784\uFF0C\u800C\u8FD9\u4E9B\u7ED3\u6784\u53EF\u80FD\u968F\u65F6\u4F1A\u53D1\u751F\u53D8\u5316\u3002\u5728\u5199\u5165\u8FC7\u7A0B\u4E2D\uFF0C\u8BE5\u7C7B\u578B\u53EF\u4EE5\u81EA\u52A8\u6839\u636E\u5217\u7684\u7ED3\u6784\u3001\u7C7B\u578B\u63A8\u65AD\u5217\u4FE1\u606F\uFF0C\u52A8\u6001\u5408\u5E76\u5199\u5165\u7684 schema\uFF0C\u5E76\u901A\u8FC7\u5C06 JSON \u952E\u53CA\u5176\u5BF9\u5E94\u7684\u503C\u5B58\u50A8\u4E3A\u5217\u548C\u52A8\u6001\u5B50\u5217\u3002"}),"\n",(0,i.jsx)(e.h3,{id:"note",children:"Note"}),"\n",(0,i.jsx)(e.p,{children:"\u76F8\u6BD4 JSON \u7C7B\u578B\u6709\u4EE5\u4E0B\u4F18\u52BF\uFF1A"}),"\n",(0,i.jsxs)(e.ol,{children:["\n",(0,i.jsx)(e.li,{children:"\u5B58\u50A8\u65B9\u5F0F\u4E0D\u540C\uFF0CJSON \u7C7B\u578B\u662F\u4EE5\u4E8C\u8FDB\u5236 JSONB \u683C\u5F0F\u8FDB\u884C\u5B58\u50A8\uFF0C\u6574\u884C JSON \u4EE5\u884C\u5B58\u7684\u5F62\u5F0F\u5B58\u50A8\u5230 segment \u6587\u4EF6\u4E2D\u3002\u800C VARIANT \u7C7B\u578B\u5728\u5199\u5165\u7684\u65F6\u5019\u8FDB\u884C\u7C7B\u578B\u63A8\u65AD\uFF0C\u5C06\u5199\u5165\u7684 JSON \u5217\u5B58\u5316\u3002\u6BD4 JSON \u7C7B\u578B\u6709\u66F4\u9AD8\u7684\u538B\u7F29\u6BD4\uFF0C\u5B58\u50A8\u7A7A\u95F4\u66F4\u5C0F\u3002"}),"\n",(0,i.jsx)(e.li,{children:"\u67E5\u8BE2\u65B9\u5F0F\u4E0D\u540C\uFF0C\u67E5\u8BE2\u4E0D\u9700\u8981\u8FDB\u884C\u89E3\u6790\u3002VARIANT \u5145\u5206\u5229\u7528 Doris \u4E2D\u5217\u5F0F\u5B58\u50A8\u3001\u5411\u91CF\u5316\u5F15\u64CE\u3001\u4F18\u5316\u5668\u7B49\u7EC4\u4EF6\u7ED9\u7528\u6237\u5E26\u6765\u6781\u9AD8\u7684\u67E5\u8BE2\u6027\u80FD\u3002\n\u4E0B\u9762\u662F\u57FA\u4E8E clickbench \u6570\u636E\u6D4B\u8BD5\u7684\u7ED3\u679C\uFF1A"}),"\n"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(e.table,{children:[(0,i.jsx)(e.thead,{children:(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.th,{}),(0,i.jsx)(e.th,{children:"\u5B58\u50A8\u7A7A\u95F4"})]})}),(0,i.jsxs)(e.tbody,{children:[(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{children:"\u9884\u5B9A\u4E49\u9759\u6001\u5217"}),(0,i.jsx)(e.td,{children:"12.618 GB"})]}),(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{children:"VARIANT \u7C7B\u578B"}),(0,i.jsx)(e.td,{children:"12.718 GB"})]}),(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{children:"JSON \u7C7B\u578B"}),(0,i.jsx)(e.td,{children:"35.711 GB"})]})]})]}),"\n",(0,i.jsx)(e.p,{children:(0,i.jsx)(e.strong,{children:"\u8282\u7701\u7EA6 65% \u5B58\u50A8\u5BB9\u91CF"})}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(e.table,{children:[(0,i.jsx)(e.thead,{children:(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.th,{children:"\u67E5\u8BE2\u6B21\u6570"}),(0,i.jsx)(e.th,{children:"\u9884\u5B9A\u4E49\u9759\u6001\u5217"}),(0,i.jsx)(e.th,{children:"VARIANT \u7C7B\u578B"}),(0,i.jsx)(e.th,{children:"JSON \u7C7B\u578B"})]})}),(0,i.jsxs)(e.tbody,{children:[(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{children:"\u7B2C\u4E00\u6B21\u67E5\u8BE2 (cold)"}),(0,i.jsx)(e.td,{children:"233.79s"}),(0,i.jsx)(e.td,{children:"248.66s"}),(0,i.jsx)(e.td,{children:(0,i.jsx)(e.strong,{children:"\u5927\u90E8\u5206\u67E5\u8BE2\u8D85\u65F6"})})]}),(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{children:"\u7B2C\u4E8C\u6B21\u67E5\u8BE2 (hot)"}),(0,i.jsx)(e.td,{children:"86.02s"}),(0,i.jsx)(e.td,{children:"94.82s"}),(0,i.jsx)(e.td,{children:"789.24s"})]}),(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{children:"\u7B2C\u4E09\u6B21\u67E5\u8BE2 (hot)"}),(0,i.jsx)(e.td,{children:"83.03s"}),(0,i.jsx)(e.td,{children:"92.29s"}),(0,i.jsx)(e.td,{children:"743.69s"})]})]})]}),"\n",(0,i.jsxs)(e.p,{children:[(0,i.jsx)(e.a,{href:"https://github.com/ClickHouse/ClickBench/blob/main/doris/queries.sql",children:"\u6D4B\u8BD5\u96C6"})," \u4E00\u5171 43 \u4E2A\u67E5\u8BE2\u8BED\u53E5"]}),"\n",(0,i.jsx)(e.p,{children:(0,i.jsx)(e.strong,{children:"\u67E5\u8BE2\u63D0\u901F 8+ \u500D\uFF0C\u67E5\u8BE2\u6027\u80FD\u4E0E\u9759\u6001\u5217\u76F8\u5F53"})}),"\n",(0,i.jsx)(e.h2,{id:"\u4E3E\u4F8B",children:"\u4E3E\u4F8B"}),"\n",(0,i.jsx)(e.p,{children:"\u7528\u4E00\u4E2A\u4ECE\u5EFA\u8868\u3001\u5BFC\u6570\u636E\u3001\u67E5\u8BE2\u5168\u5468\u671F\u7684\u4F8B\u5B50\u8BF4\u660E VARIANT \u7684\u529F\u80FD\u548C\u7528\u6CD5\u3002"}),"\n",(0,i.jsx)(e.p,{children:(0,i.jsx)(e.strong,{children:"\u5EFA\u8868\u8BED\u6CD5"})}),"\n",(0,i.jsx)(e.p,{children:"\u5EFA\u8868\u8BED\u6CD5\u5173\u952E\u5B57 VARIANT"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-sql",children:'-- \u65E0\u7D22\u5F15\nCREATE TABLE IF NOT EXISTS ${table_name} (\n    k BIGINT,\n    v VARIANT\n)\ntable_properties;\n\n-- \u5728v\u5217\u521B\u5EFA\u7D22\u5F15\uFF0C\u53EF\u9009\u6307\u5B9A\u5206\u8BCD\u65B9\u5F0F\uFF0C\u9ED8\u8BA4\u4E0D\u5206\u8BCD\nCREATE TABLE IF NOT EXISTS ${table_name} (\n    k BIGINT,\n    v VARIANT,\n    INDEX idx_var(v) USING INVERTED [PROPERTIES("parser" = "english|unicode|chinese")] [COMMENT \'your comment\']\n)\ntable_properties;\n\n-- \u5728v\u5217\u521B\u5EFAbloom filter\nCREATE TABLE IF NOT EXISTS ${table_name} (\n    k BIGINT,\n    v VARIANT\n)\n...\nproperties("replication_num" = "1", "bloom_filter_columns" = "v");\n'})}),"\n",(0,i.jsx)(e.p,{children:(0,i.jsx)(e.strong,{children:"\u67E5\u8BE2\u8BED\u6CD5"})}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-sql",children:"-- \u4F7F\u7528 v['a']['b'] \u5F62\u5F0F\u5982\u4E0B\uFF0Cv['properties']['title']\u7C7B\u578B\u662FVARIANT\nSELECT v['properties']['title'] from ${table_name}\n"})}),"\n",(0,i.jsx)(e.h3,{id:"\u57FA\u4E8E-github-events-\u6570\u636E\u96C6\u793A\u4F8B",children:"\u57FA\u4E8E github events \u6570\u636E\u96C6\u793A\u4F8B"}),"\n",(0,i.jsx)(e.p,{children:"\u8FD9\u91CC\u7528 github events \u6570\u636E\u5C55\u793A VARIANT \u7684\u5EFA\u8868\u3001\u5BFC\u5165\u3001\u67E5\u8BE2\u3002\n\u4E0B\u9762\u662F\u683C\u5F0F\u5316\u540E\u7684\u4E00\u884C\u6570\u636E"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-json",children:'{\n  "id": "14186154924",\n  "type": "PushEvent",\n  "actor": {\n    "id": 282080,\n    "login": "brianchandotcom",\n    "display_login": "brianchandotcom",\n    "gravatar_id": "",\n    "url": "https://api.github.com/users/brianchandotcom",\n    "avatar_url": "https://avatars.githubusercontent.com/u/282080?"\n  },\n  "repo": {\n    "id": 1920851,\n    "name": "brianchandotcom/liferay-portal",\n    "url": "https://api.github.com/repos/brianchandotcom/liferay-portal"\n  },\n  "payload": {\n    "push_id": 6027092734,\n    "size": 4,\n    "distinct_size": 4,\n    "ref": "refs/heads/master",\n    "head": "91edd3c8c98c214155191feb852831ec535580ba",\n    "before": "abb58cc0db673a0bd5190000d2ff9c53bb51d04d",\n    "commits": [""]\n  },\n  "public": true,\n  "created_at": "2020-11-13T18:00:00Z"\n}\n'})}),"\n",(0,i.jsx)(e.p,{children:(0,i.jsx)(e.strong,{children:"\u5EFA\u8868"})}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsxs)(e.li,{children:["\u521B\u5EFA\u4E86\u4E09\u4E2A VARIANT \u7C7B\u578B\u7684\u5217\uFF0C ",(0,i.jsx)(e.code,{children:"actor"}),"\uFF0C",(0,i.jsx)(e.code,{children:"repo"})," \u548C ",(0,i.jsx)(e.code,{children:"payload"})]}),"\n",(0,i.jsxs)(e.li,{children:["\u521B\u5EFA\u8868\u7684\u540C\u65F6\u521B\u5EFA\u4E86 ",(0,i.jsx)(e.code,{children:"payload"})," \u5217\u7684\u5012\u6392\u7D22\u5F15 ",(0,i.jsx)(e.code,{children:"idx_payload"})]}),"\n",(0,i.jsx)(e.li,{children:"USING INVERTED \u6307\u5B9A\u7D22\u5F15\u7C7B\u578B\u662F\u5012\u6392\u7D22\u5F15\uFF0C\u7528\u4E8E\u52A0\u901F\u5B50\u5217\u7684\u6761\u4EF6\u8FC7\u6EE4"}),"\n",(0,i.jsxs)(e.li,{children:[(0,i.jsx)(e.code,{children:'PROPERTIES("parser" = "english")'})," \u6307\u5B9A\u91C7\u7528 english \u5206\u8BCD"]}),"\n"]}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-sql",children:'CREATE DATABASE test_variant;\nUSE test_variant;\nCREATE TABLE IF NOT EXISTS github_events (\n    id BIGINT NOT NULL,\n    type VARCHAR(30) NULL,\n    actor VARIANT NULL,\n    repo VARIANT NULL,\n    payload VARIANT NULL,\n    public BOOLEAN NULL,\n    created_at DATETIME NULL,\n    INDEX idx_payload (`payload`) USING INVERTED PROPERTIES("parser" = "english") COMMENT \'inverted index for payload\'\n)\nDUPLICATE KEY(`id`)\nDISTRIBUTED BY HASH(id) BUCKETS 10\nproperties("replication_num" = "1");\n'})}),"\n",(0,i.jsx)(e.p,{children:(0,i.jsx)(e.strong,{children:"\u9700\u8981\u6CE8\u610F\u7684\u662F\uFF1A"})}),"\n",(0,i.jsx)(e.admonition,{type:"tip",children:(0,i.jsxs)(e.ol,{children:["\n",(0,i.jsx)(e.li,{children:"\u5728 VARIANT \u5217\u4E0A\u521B\u5EFA\u7D22\u5F15\uFF0C\u6BD4\u5982 payload \u7684\u5B50\u5217\u5F88\u591A\u65F6\uFF0C\u53EF\u80FD\u4F1A\u9020\u6210\u7D22\u5F15\u5217\u8FC7\u591A\uFF0C\u5F71\u54CD\u5199\u5165\u6027\u80FD"}),"\n",(0,i.jsx)(e.li,{children:"\u540C\u4E00\u4E2A VARIANT \u5217\u7684\u5206\u8BCD\u5C5E\u6027\u662F\u76F8\u540C\u7684\uFF0C\u5982\u679C\u60A8\u6709\u4E0D\u540C\u7684\u5206\u8BCD\u9700\u6C42\uFF0C\u90A3\u4E48\u53EF\u4EE5\u521B\u5EFA\u591A\u4E2A VARIANT \u7136\u540E\u5206\u522B\u6307\u5B9A\u7D22\u5F15\u5C5E\u6027"}),"\n"]})}),"\n",(0,i.jsx)(e.p,{children:(0,i.jsx)(e.strong,{children:"\u4F7F\u7528 streamload \u5BFC\u5165"})}),"\n",(0,i.jsx)(e.p,{children:"\u5BFC\u5165 gh_2022-11-07-3.json\uFF0C\u8FD9\u662F github events \u4E00\u4E2A\u5C0F\u65F6\u7684\u6570\u636E"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-shell",children:'wget https://qa-build.oss-cn-beijing.aliyuncs.com/regression/variant/gh_2022-11-07-3.json\n\ncurl --location-trusted -u root:  -T gh_2022-11-07-3.json -H "read_json_by_line:true" -H "format:json"  http://127.0.0.1:18148/api/test_variant/github_events/_strea\nm_load\n\n{\n    "TxnId": 2,\n    "Label": "086fd46a-20e6-4487-becc-9b6ca80281bf",\n    "Comment": "",\n    "TwoPhaseCommit": "false",\n    "Status": "Success",\n    "Message": "OK",\n    "NumberTotalRows": 139325,\n    "NumberLoadedRows": 139325,\n    "NumberFilteredRows": 0,\n    "NumberUnselectedRows": 0,\n    "LoadBytes": 633782875,\n    "LoadTimeMs": 7870,\n    "BeginTxnTimeMs": 19,\n    "StreamLoadPutTimeMs": 162,\n    "ReadDataTimeMs": 2416,\n    "WriteDataTimeMs": 7634,\n    "CommitAndPublishTimeMs": 55\n}\n'})}),"\n",(0,i.jsx)(e.p,{children:"\u786E\u8BA4\u5BFC\u5165\u6210\u529F"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-sql",children:'-- \u67E5\u770B\u884C\u6570\nmysql> select count() from github_events;\n+----------+\n| count(*) |\n+----------+\n|   139325 |\n+----------+\n1 row in set (0.25 sec)\n\n-- \u968F\u673A\u770B\u4E00\u6761\u6570\u636E\nmysql> select * from github_events limit 1;\n+-------------+-----------+-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+----------------------------------------------------------------------------------------------------------------------------------------------------------+--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+--------+---------------------+\n| id          | type      | actor                                                                                                                                                                                                                       | repo                                                                                                                                                     | payload                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                | public | created_at          |\n+-------------+-----------+-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+----------------------------------------------------------------------------------------------------------------------------------------------------------+--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+--------+---------------------+\n| 25061821748 | PushEvent | {"gravatar_id":"","display_login":"jfrog-pipelie-intg","url":"https://api.github.com/users/jfrog-pipelie-intg","id":98024358,"login":"jfrog-pipelie-intg","avatar_url":"https://avatars.githubusercontent.com/u/98024358?"} | {"url":"https://api.github.com/repos/jfrog-pipelie-intg/jfinte2e_1667789956723_16","id":562683829,"name":"jfrog-pipelie-intg/jfinte2e_1667789956723_16"} | {"commits":[{"sha":"334433de436baa198024ef9f55f0647721bcd750","author":{"email":"98024358+jfrog-pipelie-intg@users.noreply.github.com","name":"jfrog-pipelie-intg"},"message":"commit message 10238493157623136117","distinct":true,"url":"https://api.github.com/repos/jfrog-pipelie-intg/jfinte2e_1667789956723_16/commits/334433de436baa198024ef9f55f0647721bcd750"}],"before":"f84a26792f44d54305ddd41b7e3a79d25b1a9568","head":"334433de436baa198024ef9f55f0647721bcd750","size":1,"push_id":11572649828,"ref":"refs/heads/test-notification-sent-branch-10238493157623136113","distinct_size":1} |      1 | 2022-11-07 11:00:00 |\n+-------------+-----------+-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+----------------------------------------------------------------------------------------------------------------------------------------------------------+--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+--------+---------------------+\n1 row in set (0.23 sec)\n'})}),"\n",(0,i.jsx)(e.p,{children:"desc \u67E5\u770B schema \u4FE1\u606F\uFF0C\u5B50\u5217\u4F1A\u5728\u5B58\u50A8\u5C42\u81EA\u52A8\u6269\u5C55\u3001\u5E76\u8FDB\u884C\u7C7B\u578B\u63A8\u5BFC"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-sql",children:"mysql> desc github_events;\n+------------------------------------------------------------+------------+------+-------+---------+-------+\n| Field                                                      | Type       | Null | Key   | Default | Extra |\n+------------------------------------------------------------+------------+------+-------+---------+-------+\n| id                                                         | BIGINT     | No   | true  | NULL    |       |\n| type                                                       | VARCHAR(*) | Yes  | false | NULL    | NONE  |\n| actor                                                      | VARIANT    | Yes  | false | NULL    | NONE  |\n| created_at                                                 | DATETIME   | Yes  | false | NULL    | NONE  |\n| payload                                                    | VARIANT    | Yes  | false | NULL    | NONE  |\n| public                                                     | BOOLEAN    | Yes  | false | NULL    | NONE  |\n+------------------------------------------------------------+------------+------+-------+---------+-------+\n6 rows in set (0.07 sec)\n\nmysql> set describe_extend_variant_column = true;\nQuery OK, 0 rows affected (0.01 sec)\n\nmysql> desc github_events;\n+------------------------------------------------------------+------------+------+-------+---------+-------+\n| Field                                                      | Type       | Null | Key   | Default | Extra |\n+------------------------------------------------------------+------------+------+-------+---------+-------+\n| id                                                         | BIGINT     | No   | true  | NULL    |       |\n| type                                                       | VARCHAR(*) | Yes  | false | NULL    | NONE  |\n| actor                                                      | VARIANT    | Yes  | false | NULL    | NONE  |\n| actor.avatar_url                                           | TEXT       | Yes  | false | NULL    | NONE  |\n| actor.display_login                                        | TEXT       | Yes  | false | NULL    | NONE  |\n| actor.id                                                   | INT        | Yes  | false | NULL    | NONE  |\n| actor.login                                                | TEXT       | Yes  | false | NULL    | NONE  |\n| actor.url                                                  | TEXT       | Yes  | false | NULL    | NONE  |\n| created_at                                                 | DATETIME   | Yes  | false | NULL    | NONE  |\n| payload                                                    | VARIANT    | Yes  | false | NULL    | NONE  |\n| payload.action                                             | TEXT       | Yes  | false | NULL    | NONE  |\n| payload.before                                             | TEXT       | Yes  | false | NULL    | NONE  |\n| payload.comment.author_association                         | TEXT       | Yes  | false | NULL    | NONE  |\n| payload.comment.body                                       | TEXT       | Yes  | false | NULL    | NONE  |\n....\n+------------------------------------------------------------+------------+------+-------+---------+-------+\n406 rows in set (0.07 sec)\n"})}),"\n",(0,i.jsx)(e.p,{children:"desc \u53EF\u4EE5\u6307\u5B9A partition \u67E5\u770B\u67D0\u4E2A partition \u7684 schema\uFF0C\u8BED\u6CD5\u5982\u4E0B"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{children:"DESCRIBE ${table_name} PARTITION ($partition_name);\n"})}),"\n",(0,i.jsx)(e.p,{children:(0,i.jsx)(e.strong,{children:"\u67E5\u8BE2"})}),"\n",(0,i.jsx)(e.admonition,{type:"tip",children:(0,i.jsxs)(e.p,{children:[(0,i.jsx)(e.strong,{children:"\u6CE8\u610F"}),"\n\u5982\u4F7F\u7528\u8FC7\u6EE4\u548C\u805A\u5408\u7B49\u529F\u80FD\u6765\u67E5\u8BE2\u5B50\u5217\uFF0C\u9700\u8981\u5BF9\u5B50\u5217\u8FDB\u884C\u989D\u5916\u7684 cast \u64CD\u4F5C\uFF08\u56E0\u4E3A\u5B58\u50A8\u7C7B\u578B\u4E0D\u4E00\u5B9A\u662F\u56FA\u5B9A\u7684\uFF0C\u9700\u8981\u6709\u4E00\u4E2A SQL \u7EDF\u4E00\u7684\u7C7B\u578B\uFF09\u3002\n\u4F8B\u5982 SELECT * FROM tbl where CAST(var['titile'] as text) MATCH \"hello world\"\n\u4EE5\u4E0B\u7B80\u5316\u7684\u793A\u4F8B\u8BF4\u660E\u4E86\u5982\u4F55\u4F7F\u7528 VARIANT \u8FDB\u884C\u67E5\u8BE2"]})}),"\n",(0,i.jsx)(e.p,{children:"\u4E0B\u9762\u662F\u5178\u578B\u7684\u4E09\u4E2A\u67E5\u8BE2\u573A\u666F\uFF1A"}),"\n",(0,i.jsxs)(e.ol,{children:["\n",(0,i.jsx)(e.li,{children:"\u4ECE github_events \u8868\u4E2D\u83B7\u53D6 top 5 star \u6570\u7684\u4EE3\u7801\u5E93"}),"\n"]}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-sql",children:"mysql> SELECT\n    ->     cast(repo['name'] as text) as repo_name, count() AS stars\n    -> FROM github_events\n    -> WHERE type = 'WatchEvent'\n    -> GROUP BY repo_name\n    -> ORDER BY stars DESC LIMIT 5;\n+--------------------------+-------+\n| repo_name                | stars |\n+--------------------------+-------+\n| aplus-framework/app      |    78 |\n| lensterxyz/lenster       |    77 |\n| aplus-framework/database |    46 |\n| stashapp/stash           |    42 |\n| aplus-framework/image    |    34 |\n+--------------------------+-------+\n5 rows in set (0.03 sec)\n"})}),"\n",(0,i.jsxs)(e.ol,{start:"2",children:["\n",(0,i.jsx)(e.li,{children:"\u83B7\u53D6\u8BC4\u8BBA\u4E2D\u5305\u542B doris \u7684\u6570\u91CF"}),"\n"]}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-sql",children:"-- implicit cast `payload['comment']['body']` to string type\nmysql> SELECT\n    ->     count() FROM github_events\n    ->     WHERE payload['comment']['body'] MATCH 'doris';\n+---------+\n| count() |\n+---------+\n|       3 |\n+---------+\n1 row in set (0.04 sec)\n"})}),"\n",(0,i.jsxs)(e.ol,{start:"3",children:["\n",(0,i.jsx)(e.li,{children:"\u67E5\u8BE2 comments \u6700\u591A\u7684 issue \u53F7\u4EE5\u53CA\u5BF9\u5E94\u7684\u5E93"}),"\n"]}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-sql",children:"mysql> SELECT \n    ->   cast(repo['name'] as string) as repo_name, \n    ->   cast(payload['issue']['number'] as int) as issue_number, \n    ->   count() AS comments, \n    ->   count(\n    ->     distinct cast(actor['login'] as string)\n    ->   ) AS authors \n    -> FROM  github_events \n    -> WHERE type = 'IssueCommentEvent' AND (cast(payload['action'] as string) = 'created') AND (cast(payload['issue']['number'] as int) > 10) \n    -> GROUP BY repo_name, issue_number \n    -> HAVING authors >= 4\n    -> ORDER BY comments DESC, repo_name \n    -> LIMIT 50;\n+--------------------------------------+--------------+----------+---------+\n| repo_name                            | issue_number | comments | authors |\n+--------------------------------------+--------------+----------+---------+\n| facebook/react-native                |        35228 |        5 |       4 |\n| swsnu/swppfall2022-team4             |           27 |        5 |       4 |\n| belgattitude/nextjs-monorepo-example |         2865 |        4 |       4 |\n+--------------------------------------+--------------+----------+---------+\n3 rows in set (0.03 sec)\n"})}),"\n",(0,i.jsx)(e.h3,{id:"\u5D4C\u5957\u6570\u7EC4\u7C7B\u578B",children:"\u5D4C\u5957\u6570\u7EC4\u7C7B\u578B"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-json",children:'{\n  "nested" : [{"field1" : 123, "field11" : "123"}, {"field2" : 456, "field22" : "456"}]\n}\n'})}),"\n",(0,i.jsx)(e.p,{children:"\u5728\u4E0A\u9762\u7684 JSON \u4E2D\uFF0C\u6570\u7EC4 nested \u5305\u542B\u7684\u5BF9\u8C61\uFF08object\uFF09\u88AB\u79F0\u4E3A\u5D4C\u5957\u6570\u7EC4\u7C7B\u578B\u3002\u9700\u8981\u6CE8\u610F\u7684\u662F\uFF0C\u76EE\u524D\u4EC5\u652F\u6301\u4E00\u5C42\u6570\u7EC4\u7684\u5C55\u5F00\u3002\u4EE5\u4E0B\u662F\u4E00\u4E2A\u793A\u4F8B\uFF1A"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-sql",children:'-- \u6CE8\u610F\uFF1A\u8BBE\u7F6E variant_enable_flatten_nested \u4E3A true\n-- \u8FD9\u6837\u53EF\u4EE5\u5C55\u5F00\u5D4C\u5957\u6570\u7EC4\uFF0C\u5C06\u6570\u7EC4\u4E2D\u7684\u5143\u7D20\u4EE5\u5217\u5F0F\u5B58\u50A8\n-- \u5982\u679C\u8BBE\u7F6E\u4E3A false\uFF0C\u5D4C\u5957\u6570\u7EC4\u4F1A\u5B58\u50A8\u4E3A JSON \u7C7B\u578B\nCREATE TABLE `simple_nested_test` (\n  `k` bigint NULL,\n  `v` variant NULL\n) ENGINE=OLAP\nDUPLICATE KEY(`k`)\nDISTRIBUTED BY HASH(`k`) BUCKETS 8\nPROPERTIES (\n"file_cache_ttl_seconds" = "0",\n"is_being_synced" = "false",\n"storage_medium" = "hdd",\n"storage_format" = "V2",\n"inverted_index_storage_format" = "V2",\n"light_schema_change" = "true",\n"disable_auto_compaction" = "false",\n"variant_enable_flatten_nested" = "true",\n"enable_single_replica_compaction" = "false",\n"group_commit_interval_ms" = "10000",\n"group_commit_data_bytes" = "134217728"\n);\n\ninsert into simple_nested_test values(1, \'{\n  "eventId": 1,\n  "firstName": "Name1",\n  "lastName": "Eric",\n  "body": {\n    "phoneNumbers": [\n      {\n        "number": "1111111111",\n        "type": "GSM",\n        "callLimit": 5\n      },\n      {\n        "number": "222222222",\n        "type": "HOME",\n        "callLimit": 3\n      },\n      {\n        "number": "33333333",\n        "callLimit": 2,\n        "type": "WORK"\n      }\n    ]\n  }\n}\');\n\n-- \u8BBE\u7F6E\u4E3A\u5C55\u793A\u6269\u5C55\u5217\u7684\u63CF\u8FF0\u4FE1\u606F\nset describe_extend_variant_column = true;  \n\n-- \u4F7F\u7528 DESC \u547D\u4EE4\u5C06\u5C55\u793A\u5982\u4E0B\u7684\u6269\u5C55\u5217\uFF0Cv.body.phoneNumbers.callLimit, v.body.phoneNumbers.number, v.body.phoneNumbers.type\n-- \u662F\u4ECE v.body.phoneNumbers \u4E2D\u5C55\u5F00\u7684\u5B57\u6BB5\nmysql> desc simple_nested_test;\n+-------------------------------+----------------+------+-------+---------+-------+\n| Field                         | Type           | Null | Key   | Default | Extra |\n+-------------------------------+----------------+------+-------+---------+-------+\n| k                             | bigint         | Yes  | true  | NULL    |       |\n| v                             | variant        | Yes  | false | NULL    | NONE  |\n| v.body.phoneNumbers.callLimit | array<tinyint> | Yes  | false | NULL    | NONE  |\n| v.body.phoneNumbers.number    | array<text>    | Yes  | false | NULL    | NONE  |\n| v.body.phoneNumbers.type      | array<text>    | Yes  | false | NULL    | NONE  |\n| v.eventId                     | tinyint        | Yes  | false | NULL    | NONE  |\n| v.firstName                   | text           | Yes  | false | NULL    | NONE  |\n| v.lastName                    | text           | Yes  | false | NULL    | NONE  |\n+-------------------------------+----------------+------+-------+---------+-------+\n8 rows in set (0.00 sec)\n\n-- \u4F7F\u7528 lateral view (explode_variant_array) \u6765\u5C55\u5F00\u6570\u7EC4\uFF0C\u5E76\u67E5\u8BE2\u7B26\u5408\u6761\u4EF6\u7684\u7535\u8BDD\u53F7\u7801\u53CA\u4E8B\u4EF6 ID\nmysql> select v[\'eventId\'], phone_numbers\n    from simple_nested_test lateral view explode_variant_array(v[\'body\'][\'phoneNumbers\']) tmp1 as phone_numbers\n    where phone_numbers[\'type\'] = \'GSM\' OR phone_numbers[\'type\'] = \'HOME\' and phone_numbers[\'callLimit\'] > 2;                                                                                                               \n+--------------------------+----------------------------------------------------+\n| element_at(v, \'eventId\') | phone_numbers                                      |\n+--------------------------+----------------------------------------------------+\n| 1                        | {"callLimit":5,"number":"1111111111","type":"GSM"} |\n| 1                        | {"callLimit":3,"number":"222222222","type":"HOME"} |\n+--------------------------+----------------------------------------------------+\n2 rows in set (0.02 sec)\n'})}),"\n",(0,i.jsx)(e.h3,{id:"\u4F7F\u7528\u9650\u5236\u548C\u6700\u4F73\u5B9E\u8DF5",children:"\u4F7F\u7528\u9650\u5236\u548C\u6700\u4F73\u5B9E\u8DF5"}),"\n",(0,i.jsxs)(e.p,{children:[(0,i.jsx)(e.strong,{children:"VARIANT \u7C7B\u578B\u7684\u4F7F\u7528\u6709\u4EE5\u4E0B\u9650\u5236\uFF1A"}),"\nVARIANT \u52A8\u6001\u5217\u4E0E\u9884\u5B9A\u4E49\u9759\u6001\u5217\u51E0\u4E4E\u4E00\u6837\u9AD8\u6548\u3002\u5904\u7406\u8BF8\u5982\u65E5\u5FD7\u4E4B\u7C7B\u7684\u6570\u636E\uFF0C\u5728\u8FD9\u7C7B\u6570\u636E\u4E2D\uFF0C\u7ECF\u5E38\u901A\u8FC7\u52A8\u6001\u5C5E\u6027\u6DFB\u52A0\u5B57\u6BB5\uFF08\u4F8B\u5982 Kubernetes \u4E2D\u7684\u5BB9\u5668\u6807\u7B7E\uFF09\u3002\u4F46\u662F\u89E3\u6790 JSON \u548C\u63A8\u65AD\u7C7B\u578B\u4F1A\u5728\u5199\u5165\u65F6\u4EA7\u751F\u989D\u5916\u5F00\u9500\u3002\u56E0\u6B64\uFF0C\u6211\u4EEC\u5EFA\u8BAE\u4FDD\u6301\u5355\u6B21\u5BFC\u5165\u5217\u6570\u5728 1000 \u4EE5\u4E0B\u3002"]}),"\n",(0,i.jsx)(e.p,{children:"\u5C3D\u53EF\u80FD\u4FDD\u8BC1\u7C7B\u578B\u4E00\u81F4\uFF0CDoris \u4F1A\u81EA\u52A8\u8FDB\u884C\u5982\u4E0B\u517C\u5BB9\u7C7B\u578B\u8F6C\u6362\uFF0C\u5F53\u5B57\u6BB5\u65E0\u6CD5\u8FDB\u884C\u517C\u5BB9\u7C7B\u578B\u8F6C\u6362\u65F6\u4F1A\u7EDF\u4E00\u8F6C\u6362\u6210 JSONB \u7C7B\u578B\u3002JSONB \u5217\u7684\u6027\u80FD\u4E0E int\u3001text \u7B49\u5217\u6027\u80FD\u4F1A\u6709\u6240\u9000\u5316\u3002"}),"\n",(0,i.jsxs)(e.ol,{children:["\n",(0,i.jsx)(e.li,{children:"tinyint->smallint->int->bigint\uFF0C\u6574\u5F62\u53EF\u4EE5\u6309\u7167\u7BAD\u5934\u505A\u7C7B\u578B\u63D0\u5347"}),"\n",(0,i.jsx)(e.li,{children:"float->double\uFF0C\u6D6E\u70B9\u6570\u6309\u7167\u7BAD\u5934\u505A\u7C7B\u578B\u63D0\u5347"}),"\n",(0,i.jsx)(e.li,{children:"text\uFF0C\u5B57\u7B26\u4E32\u7C7B\u578B"}),"\n",(0,i.jsx)(e.li,{children:"JSON\uFF0C\u4E8C\u8FDB\u5236 JSON \u7C7B\u578B"}),"\n"]}),"\n",(0,i.jsx)(e.p,{children:"\u4E0A\u8BC9\u7C7B\u578B\u65E0\u6CD5\u517C\u5BB9\u65F6\uFF0C\u4F1A\u53D8\u6210 JSON \u7C7B\u578B\u9632\u6B62\u7C7B\u578B\u4FE1\u606F\u4E22\u5931\uFF0C\u5982\u679C\u60A8\u9700\u8981\u5728 VARIANT \u4E2D\u8BBE\u7F6E\u4E25\u683C\u7684 schema\uFF0C\u5373\u5C06\u63A8\u51FA VARIANT MAPPING \u673A\u5236"}),"\n",(0,i.jsx)(e.p,{children:"\u5176\u5B83\u9650\u5236\u5982\u4E0B\uFF1A"}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsx)(e.li,{children:"VARIANT \u5217\u53EA\u80FD\u521B\u5EFA\u5012\u6392\u7D22\u5F15\u6216\u8005 bloom filter \u6765\u52A0\u901F\u8FC7\u6EE4"}),"\n",(0,i.jsx)(e.li,{children:(0,i.jsxs)(e.strong,{children:["\u63A8\u8350\u4F7F\u7528 RANDOM \u6A21\u5F0F\u548C",(0,i.jsx)(e.a,{href:"/zh-CN/docs/3.0/data-operate/import/group-commit-manual",children:"Group Commit"})," \u6A21\u5F0F\uFF0C\u5199\u5165\u6027\u80FD\u66F4\u9AD8\u6548"]})}),"\n",(0,i.jsx)(e.li,{children:"\u65E5\u671F\u3001decimal \u7B49\u975E\u6807\u51C6 JSON \u7C7B\u578B\u4F1A\u88AB\u9ED8\u8BA4\u63A8\u65AD\u6210\u5B57\u7B26\u4E32\u7C7B\u578B\uFF0C\u6240\u4EE5\u5C3D\u53EF\u80FD\u4ECE VARIANT \u4E2D\u63D0\u53D6\u51FA\u6765\uFF0C\u7528\u9759\u6001\u7C7B\u578B\uFF0C\u6027\u80FD\u66F4\u597D"}),"\n",(0,i.jsx)(e.li,{children:"2 \u7EF4\u53CA\u5176\u4EE5\u4E0A\u7684\u6570\u7EC4\u5217\u5B58\u5316\u4F1A\u88AB\u5B58\u6210 JSONB \u7F16\u7801\uFF0C\u6027\u80FD\u4E0D\u5982\u539F\u751F\u6570\u7EC4"}),"\n",(0,i.jsx)(e.li,{children:"\u4E0D\u652F\u6301\u4F5C\u4E3A\u4E3B\u952E\u6216\u8005\u6392\u5E8F\u952E"}),"\n",(0,i.jsx)(e.li,{children:"\u67E5\u8BE2\u8FC7\u6EE4\u3001\u805A\u5408\u9700\u8981\u5E26 cast\uFF0C\u5B58\u50A8\u5C42\u4F1A\u6839\u636E\u5B58\u50A8\u7C7B\u578B\u548C cast \u76EE\u6807\u7C7B\u578B\u6765\u6D88\u9664 cast \u64CD\u4F5C\uFF0C\u52A0\u901F\u67E5\u8BE2\u3002"}),"\n"]}),"\n",(0,i.jsx)(e.h3,{id:"faq",children:"FAQ"}),"\n",(0,i.jsxs)(e.ol,{children:["\n",(0,i.jsxs)(e.li,{children:["Stream Load \u62A5\u9519\uFF1A [CANCELLED][INTERNAL_ERROR]tablet error: [DATA_QUALITY_ERROR]Reached max column size limit 2048\u3002\n\u7531\u4E8E Compaction \u548C\u5143\u4FE1\u606F\u5B58\u50A8\u9650\u5236\uFF0CVARIANT \u7C7B\u578B\u4F1A\u9650\u5236\u5217\u6570\uFF0C\u9ED8\u8BA4 2048 \u5217\uFF0C\u53EF\u4EE5\u9002\u5F53\u8C03\u6574 BE \u914D\u7F6E ",(0,i.jsx)(e.code,{children:"variant_max_merged_tablet_schema_size"})," \uFF0C\u4F46\u662F\u4E0D\u5EFA\u8BAE\u8D85\u8FC7 4096"]}),"\n"]})]})}function h(n={}){let{wrapper:e}={...(0,a.a)(),...n.components};return e?(0,i.jsx)(e,{...n,children:(0,i.jsx)(o,{...n})}):o(n)}},250065:function(n,e,s){s.d(e,{Z:function(){return l},a:function(){return r}});var t=s(667294);let i={},a=t.createContext(i);function r(n){let e=t.useContext(a);return t.useMemo(function(){return"function"==typeof n?n(e):{...e,...n}},[e,n])}function l(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(i):n.components||i:r(n.components),t.createElement(a.Provider,{value:e},n.children)}}}]);