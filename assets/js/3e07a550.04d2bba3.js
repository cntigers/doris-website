"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["790451"],{713537:function(n,e,r){r.r(e),r.d(e,{default:()=>j,frontMatter:()=>i,metadata:()=>d,assets:()=>c,toc:()=>h,contentTitle:()=>l});var d=JSON.parse('{"id":"benchmark/tpcds","title":"TPC-DS Benchmark","description":"\x3c!--","source":"@site/versioned_docs/version-2.0/benchmark/tpcds.md","sourceDirName":"benchmark","slug":"/benchmark/tpcds","permalink":"/docs/2.0/benchmark/tpcds","draft":false,"unlisted":false,"tags":[],"version":"2.0","frontMatter":{"title":"TPC-DS Benchmark","language":"zh-CN"},"sidebar":"docs","previous":{"title":"TPC-H Benchmark","permalink":"/docs/2.0/benchmark/tpch"},"next":{"title":"Spark Doris Connector","permalink":"/docs/2.0/ecosystem/spark-doris-connector"}}'),s=r("785893"),t=r("250065");let i={title:"TPC-DS Benchmark",language:"zh-CN"},l="TPC-DS Benchmark",c={},h=[{value:"1. Hardware Environment",id:"1-hardware-environment",level:2},{value:"2. Software Environment",id:"2-software-environment",level:2},{value:"3. Test Data Volume",id:"3-test-data-volume",level:2},{value:"4. Test SQL",id:"4-test-sql",level:2},{value:"5. Test Results",id:"5-test-results",level:2},{value:"6. Environmental Preparation",id:"6-environmental-preparation",level:2},{value:"7. Data Preparation",id:"7-data-preparation",level:2},{value:"7.1 Download and Install TPC-DS Data Generation Tool",id:"71-download-and-install-tpc-ds-data-generation-tool",level:3},{value:"7.2 Generating the TPC-DS Test Set",id:"72-generating-the-tpc-ds-test-set",level:3},{value:"7.3 Create Table",id:"73-create-table",level:3},{value:"7.3.1 Prepare the <code>doris-cluster.conf</code> File",id:"731-prepare-the-doris-clusterconf-file",level:4},{value:"Execute the Following Script to Generate and Create TPC-H Table",id:"execute-the-following-script-to-generate-and-create-tpc-h-table",level:4},{value:"7.4 Import Data",id:"74-import-data",level:3},{value:"7.5 Query Test",id:"75-query-test",level:3},{value:"7.5.1 Executing Query Scripts",id:"751-executing-query-scripts",level:4},{value:"7.5.2 Single SQL Execution",id:"752-single-sql-execution",level:4}];function x(n){let e={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",header:"header",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,t.a)(),...n.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(e.header,{children:(0,s.jsx)(e.h1,{id:"tpc-ds-benchmark",children:"TPC-DS Benchmark"})}),"\n",(0,s.jsx)(e.p,{children:"TPC-DS (Transaction Processing Performance Council Decision Support Benchmark) is a benchmark test that focuses on decision support and aims to evaluate the performance of data warehousing and analytics systems. It was developed by the Transaction Processing Performance Council (TPC) organization to compare the capabilities of different systems in handling complex queries and large-scale data analysis."}),"\n",(0,s.jsx)(e.p,{children:"The design goal of TPC-DS is to simulate complex decision support workloads in the real world. It tests the performance of systems through a series of complex queries and data operations, including joins, aggregations, sorting, filtering, subqueries, and more. These query patterns cover various scenarios ranging from simple to complex, such as report generation, data mining, and OLAP (Online Analytical Processing)."}),"\n",(0,s.jsx)(e.p,{children:"This document mainly introduces the performance of Doris on the TPC-DS 1000G test set."}),"\n",(0,s.jsx)(e.p,{children:"On 99 queries on the TPC-DS standard test data set, we conducted a comparison test based on Apache Doris 2.1.7-rc03 and Apache Doris 2.0.15.1 versions."}),"\n",(0,s.jsx)(e.p,{children:(0,s.jsx)(e.img,{alt:"TPCDS_1000G",src:r(877795).Z+"",width:"5916",height:"804"})}),"\n",(0,s.jsx)(e.h2,{id:"1-hardware-environment",children:"1. Hardware Environment"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(e.table,{children:[(0,s.jsx)(e.thead,{children:(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.th,{children:"Hardware"}),(0,s.jsx)(e.th,{children:"Configuration Instructions"})]})}),(0,s.jsxs)(e.tbody,{children:[(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"Number of Machines"}),(0,s.jsx)(e.td,{children:"4 Aliyun Virtual Machine (1FE\uFF0C3BEs)"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"CPU"}),(0,s.jsx)(e.td,{children:"Intel Xeon (Ice Lake) Platinum 8369B 32C"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"Memory"}),(0,s.jsx)(e.td,{children:"128G"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"Disk"}),(0,s.jsx)(e.td,{children:"Enterprise SSD (PL0)"})]})]})]}),"\n",(0,s.jsx)(e.h2,{id:"2-software-environment",children:"2. Software Environment"}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:"Doris Deployed 3BEs and 1FE"}),"\n",(0,s.jsx)(e.li,{children:"Kernel Version: Linux version 5.15.0-101-generic"}),"\n",(0,s.jsx)(e.li,{children:"OS version: Ubuntu 20.04 LTS (Focal Fossa)"}),"\n",(0,s.jsx)(e.li,{children:"Doris software version: Apache Doris 2.1.7-rc03, Apache Doris 2.0.15.1"}),"\n",(0,s.jsx)(e.li,{children:'JDK: openjdk version "1.8.0_352-352"'}),"\n"]}),"\n",(0,s.jsx)(e.h2,{id:"3-test-data-volume",children:"3. Test Data Volume"}),"\n",(0,s.jsx)(e.p,{children:"The TPC-DS 1000G data generated by the simulation of the entire test are respectively imported into Apache Doris 2.1.7-rc03 and Apache Doris 2.0.15.1 for testing. The following is the relevant description and data volume of the table."}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(e.table,{children:[(0,s.jsx)(e.thead,{children:(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.th,{children:"TPC-DS Table Name"}),(0,s.jsx)(e.th,{children:"Rows"})]})}),(0,s.jsxs)(e.tbody,{children:[(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"customer_demographics"}),(0,s.jsx)(e.td,{children:"1,920,800"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"reason"}),(0,s.jsx)(e.td,{children:"65"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"warehouse"}),(0,s.jsx)(e.td,{children:"20"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"date_dim"}),(0,s.jsx)(e.td,{children:"73,049"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"catalog_sales"}),(0,s.jsx)(e.td,{children:"1,439,980,416"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"call_center"}),(0,s.jsx)(e.td,{children:"42"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"inventory"}),(0,s.jsx)(e.td,{children:"783,000,000"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"catalog_returns"}),(0,s.jsx)(e.td,{children:"143,996,756"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"household_demographics"}),(0,s.jsx)(e.td,{children:"7,200"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"customer_address"}),(0,s.jsx)(e.td,{children:"6,000,000"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"income_band"}),(0,s.jsx)(e.td,{children:"20"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"catalog_page"}),(0,s.jsx)(e.td,{children:"30,000"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"item"}),(0,s.jsx)(e.td,{children:"300,000"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"web_returns"}),(0,s.jsx)(e.td,{children:"71,997,522"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"web_site"}),(0,s.jsx)(e.td,{children:"54"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"promotion"}),(0,s.jsx)(e.td,{children:"1,500"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"web_sales"}),(0,s.jsx)(e.td,{children:"720,000,376"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"store"}),(0,s.jsx)(e.td,{children:"1,002"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"web_page"}),(0,s.jsx)(e.td,{children:"3,000"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"time_dim"}),(0,s.jsx)(e.td,{children:"86,400"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"store_returns"}),(0,s.jsx)(e.td,{children:"287,999,764"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"store_sales"}),(0,s.jsx)(e.td,{children:"2,879,987,999"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"ship_mode"}),(0,s.jsx)(e.td,{children:"20"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"customer"}),(0,s.jsx)(e.td,{children:"12,000,000"})]})]})]}),"\n",(0,s.jsx)(e.h2,{id:"4-test-sql",children:"4. Test SQL"}),"\n",(0,s.jsxs)(e.p,{children:["TPC-DS 99 test query statements : ",(0,s.jsx)(e.a,{href:"https://github.com/apache/doris/tree/master/tools/tpcds-tools/queries/sf1000",children:"TPC-DS-Query-SQL"})]}),"\n",(0,s.jsx)(e.h2,{id:"5-test-results",children:"5. Test Results"}),"\n",(0,s.jsx)(e.p,{children:"Here we use Apache Doris 2.1.7-rc03 and Apache Doris 2.0.15.1 for comparative testing. In the test, we use Query Time(ms) as the main performance indicator.\nThe test results are as follows: (Apache Doris 2.0.15.1 q78 q79 failed to execute due to lack of latest memory optimization and was removed when calculating the total sum)"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(e.table,{children:[(0,s.jsx)(e.thead,{children:(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.th,{children:"Query"}),(0,s.jsx)(e.th,{children:"Apache Doris 2.1.7-rc03  (ms)"}),(0,s.jsx)(e.th,{children:"Apache Doris 2.0.15.1  (ms)"})]})}),(0,s.jsxs)(e.tbody,{children:[(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"query01"}),(0,s.jsx)(e.td,{children:"630"}),(0,s.jsx)(e.td,{children:"890"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"query02"}),(0,s.jsx)(e.td,{children:"4930"}),(0,s.jsx)(e.td,{children:"6930"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"query03"}),(0,s.jsx)(e.td,{children:"360"}),(0,s.jsx)(e.td,{children:"460"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"query04"}),(0,s.jsx)(e.td,{children:"11070"}),(0,s.jsx)(e.td,{children:"42320"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"query05"}),(0,s.jsx)(e.td,{children:"620"}),(0,s.jsx)(e.td,{children:"15360"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"query06"}),(0,s.jsx)(e.td,{children:"220"}),(0,s.jsx)(e.td,{children:"1020"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"query07"}),(0,s.jsx)(e.td,{children:"550"}),(0,s.jsx)(e.td,{children:"750"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"query08"}),(0,s.jsx)(e.td,{children:"330"}),(0,s.jsx)(e.td,{children:"670"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"query09"}),(0,s.jsx)(e.td,{children:"6830"}),(0,s.jsx)(e.td,{children:"7550"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"query10"}),(0,s.jsx)(e.td,{children:"370"}),(0,s.jsx)(e.td,{children:"2900"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"query11"}),(0,s.jsx)(e.td,{children:"6960"}),(0,s.jsx)(e.td,{children:"27380"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"query12"}),(0,s.jsx)(e.td,{children:"100"}),(0,s.jsx)(e.td,{children:"80"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"query13"}),(0,s.jsx)(e.td,{children:"790"}),(0,s.jsx)(e.td,{children:"2860"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"query14"}),(0,s.jsx)(e.td,{children:"13470"}),(0,s.jsx)(e.td,{children:"42340"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"query15"}),(0,s.jsx)(e.td,{children:"510"}),(0,s.jsx)(e.td,{children:"940"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"query16"}),(0,s.jsx)(e.td,{children:"520"}),(0,s.jsx)(e.td,{children:"550"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"query17"}),(0,s.jsx)(e.td,{children:"1310"}),(0,s.jsx)(e.td,{children:"2650"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"query18"}),(0,s.jsx)(e.td,{children:"560"}),(0,s.jsx)(e.td,{children:"820"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"query19"}),(0,s.jsx)(e.td,{children:"200"}),(0,s.jsx)(e.td,{children:"400"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"query20"}),(0,s.jsx)(e.td,{children:"100"}),(0,s.jsx)(e.td,{children:"190"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"query21"}),(0,s.jsx)(e.td,{children:"80"}),(0,s.jsx)(e.td,{children:"80"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"query22"}),(0,s.jsx)(e.td,{children:"2300"}),(0,s.jsx)(e.td,{children:"3070"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"query23"}),(0,s.jsx)(e.td,{children:"38240"}),(0,s.jsx)(e.td,{children:"75260"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"query24"}),(0,s.jsx)(e.td,{children:"8340"}),(0,s.jsx)(e.td,{children:"26580"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"query25"}),(0,s.jsx)(e.td,{children:"780"}),(0,s.jsx)(e.td,{children:"1190"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"query26"}),(0,s.jsx)(e.td,{children:"200"}),(0,s.jsx)(e.td,{children:"220"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"query27"}),(0,s.jsx)(e.td,{children:"530"}),(0,s.jsx)(e.td,{children:"750"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"query28"}),(0,s.jsx)(e.td,{children:"5940"}),(0,s.jsx)(e.td,{children:"7400"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"query29"}),(0,s.jsx)(e.td,{children:"940"}),(0,s.jsx)(e.td,{children:"1250"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"query30"}),(0,s.jsx)(e.td,{children:"270"}),(0,s.jsx)(e.td,{children:"490"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"query31"}),(0,s.jsx)(e.td,{children:"1890"}),(0,s.jsx)(e.td,{children:"2530"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"query32"}),(0,s.jsx)(e.td,{children:"60"}),(0,s.jsx)(e.td,{children:"70"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"query33"}),(0,s.jsx)(e.td,{children:"350"}),(0,s.jsx)(e.td,{children:"450"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"query34"}),(0,s.jsx)(e.td,{children:"750"}),(0,s.jsx)(e.td,{children:"1380"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"query35"}),(0,s.jsx)(e.td,{children:"1370"}),(0,s.jsx)(e.td,{children:"8970"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"query36"}),(0,s.jsx)(e.td,{children:"530"}),(0,s.jsx)(e.td,{children:"570"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"query37"}),(0,s.jsx)(e.td,{children:"60"}),(0,s.jsx)(e.td,{children:"60"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"query38"}),(0,s.jsx)(e.td,{children:"7520"}),(0,s.jsx)(e.td,{children:"8710"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"query39"}),(0,s.jsx)(e.td,{children:"560"}),(0,s.jsx)(e.td,{children:"1010"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"query40"}),(0,s.jsx)(e.td,{children:"150"}),(0,s.jsx)(e.td,{children:"180"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"query41"}),(0,s.jsx)(e.td,{children:"50"}),(0,s.jsx)(e.td,{children:"40"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"query42"}),(0,s.jsx)(e.td,{children:"100"}),(0,s.jsx)(e.td,{children:"140"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"query43"}),(0,s.jsx)(e.td,{children:"1150"}),(0,s.jsx)(e.td,{children:"1960"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"query44"}),(0,s.jsx)(e.td,{children:"2020"}),(0,s.jsx)(e.td,{children:"3220"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"query45"}),(0,s.jsx)(e.td,{children:"430"}),(0,s.jsx)(e.td,{children:"960"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"query46"}),(0,s.jsx)(e.td,{children:"1250"}),(0,s.jsx)(e.td,{children:"2760"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"query47"}),(0,s.jsx)(e.td,{children:"2660"}),(0,s.jsx)(e.td,{children:"5790"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"query48"}),(0,s.jsx)(e.td,{children:"630"}),(0,s.jsx)(e.td,{children:"2570"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"query49"}),(0,s.jsx)(e.td,{children:"730"}),(0,s.jsx)(e.td,{children:"800"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"query50"}),(0,s.jsx)(e.td,{children:"1640"}),(0,s.jsx)(e.td,{children:"2200"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"query51"}),(0,s.jsx)(e.td,{children:"6430"}),(0,s.jsx)(e.td,{children:"6270"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"query52"}),(0,s.jsx)(e.td,{children:"110"}),(0,s.jsx)(e.td,{children:"160"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"query53"}),(0,s.jsx)(e.td,{children:"250"}),(0,s.jsx)(e.td,{children:"490"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"query54"}),(0,s.jsx)(e.td,{children:"1280"}),(0,s.jsx)(e.td,{children:"7790"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"query55"}),(0,s.jsx)(e.td,{children:"110"}),(0,s.jsx)(e.td,{children:"160"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"query56"}),(0,s.jsx)(e.td,{children:"290"}),(0,s.jsx)(e.td,{children:"410"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"query57"}),(0,s.jsx)(e.td,{children:"1480"}),(0,s.jsx)(e.td,{children:"3510"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"query58"}),(0,s.jsx)(e.td,{children:"240"}),(0,s.jsx)(e.td,{children:"550"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"query59"}),(0,s.jsx)(e.td,{children:"7760"}),(0,s.jsx)(e.td,{children:"11870"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"query60"}),(0,s.jsx)(e.td,{children:"380"}),(0,s.jsx)(e.td,{children:"490"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"query61"}),(0,s.jsx)(e.td,{children:"540"}),(0,s.jsx)(e.td,{children:"670"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"query62"}),(0,s.jsx)(e.td,{children:"740"}),(0,s.jsx)(e.td,{children:"1560"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"query63"}),(0,s.jsx)(e.td,{children:"210"}),(0,s.jsx)(e.td,{children:"460"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"query64"}),(0,s.jsx)(e.td,{children:"5790"}),(0,s.jsx)(e.td,{children:"6840"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"query65"}),(0,s.jsx)(e.td,{children:"4900"}),(0,s.jsx)(e.td,{children:"7960"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"query66"}),(0,s.jsx)(e.td,{children:"480"}),(0,s.jsx)(e.td,{children:"810"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"query67"}),(0,s.jsx)(e.td,{children:"27320"}),(0,s.jsx)(e.td,{children:"46110"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"query68"}),(0,s.jsx)(e.td,{children:"1600"}),(0,s.jsx)(e.td,{children:"2380"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"query69"}),(0,s.jsx)(e.td,{children:"380"}),(0,s.jsx)(e.td,{children:"800"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"query70"}),(0,s.jsx)(e.td,{children:"3480"}),(0,s.jsx)(e.td,{children:"5330"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"query71"}),(0,s.jsx)(e.td,{children:"460"}),(0,s.jsx)(e.td,{children:"790"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"query72"}),(0,s.jsx)(e.td,{children:"3160"}),(0,s.jsx)(e.td,{children:"5390"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"query73"}),(0,s.jsx)(e.td,{children:"660"}),(0,s.jsx)(e.td,{children:"1250"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"query74"}),(0,s.jsx)(e.td,{children:"5990"}),(0,s.jsx)(e.td,{children:"16450"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"query75"}),(0,s.jsx)(e.td,{children:"4610"}),(0,s.jsx)(e.td,{children:"8410"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"query76"}),(0,s.jsx)(e.td,{children:"1590"}),(0,s.jsx)(e.td,{children:"2950"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"query77"}),(0,s.jsx)(e.td,{children:"300"}),(0,s.jsx)(e.td,{children:"480"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"query78"}),(0,s.jsx)(e.td,{children:"17970"}),(0,s.jsx)(e.td,{children:"-"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"query79"}),(0,s.jsx)(e.td,{children:"3040"}),(0,s.jsx)(e.td,{children:"-"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"query80"}),(0,s.jsx)(e.td,{children:"570"}),(0,s.jsx)(e.td,{children:"910"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"query81"}),(0,s.jsx)(e.td,{children:"460"}),(0,s.jsx)(e.td,{children:"760"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"query82"}),(0,s.jsx)(e.td,{children:"270"}),(0,s.jsx)(e.td,{children:"330"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"query83"}),(0,s.jsx)(e.td,{children:"220"}),(0,s.jsx)(e.td,{children:"290"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"query84"}),(0,s.jsx)(e.td,{children:"130"}),(0,s.jsx)(e.td,{children:"110"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"query85"}),(0,s.jsx)(e.td,{children:"520"}),(0,s.jsx)(e.td,{children:"470"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"query86"}),(0,s.jsx)(e.td,{children:"760"}),(0,s.jsx)(e.td,{children:"1220"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"query87"}),(0,s.jsx)(e.td,{children:"800"}),(0,s.jsx)(e.td,{children:"8760"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"query88"}),(0,s.jsx)(e.td,{children:"5560"}),(0,s.jsx)(e.td,{children:"9690"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"query89"}),(0,s.jsx)(e.td,{children:"430"}),(0,s.jsx)(e.td,{children:"750"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"query90"}),(0,s.jsx)(e.td,{children:"150"}),(0,s.jsx)(e.td,{children:"400"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"query91"}),(0,s.jsx)(e.td,{children:"150"}),(0,s.jsx)(e.td,{children:"120"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"query92"}),(0,s.jsx)(e.td,{children:"40"}),(0,s.jsx)(e.td,{children:"40"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"query93"}),(0,s.jsx)(e.td,{children:"2440"}),(0,s.jsx)(e.td,{children:"2670"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"query94"}),(0,s.jsx)(e.td,{children:"340"}),(0,s.jsx)(e.td,{children:"310"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"query95"}),(0,s.jsx)(e.td,{children:"350"}),(0,s.jsx)(e.td,{children:"1810"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"query96"}),(0,s.jsx)(e.td,{children:"660"}),(0,s.jsx)(e.td,{children:"1680"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"query97"}),(0,s.jsx)(e.td,{children:"5020"}),(0,s.jsx)(e.td,{children:"14990"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"query98"}),(0,s.jsx)(e.td,{children:"190"}),(0,s.jsx)(e.td,{children:"330"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"query99"}),(0,s.jsx)(e.td,{children:"1560"}),(0,s.jsx)(e.td,{children:"3230"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:(0,s.jsx)(e.strong,{children:"Total"})}),(0,s.jsx)(e.td,{children:(0,s.jsx)(e.strong,{children:"261320"})}),(0,s.jsx)(e.td,{children:(0,s.jsx)(e.strong,{children:"507380"})})]})]})]}),"\n",(0,s.jsx)(e.h2,{id:"6-environmental-preparation",children:"6. Environmental Preparation"}),"\n",(0,s.jsxs)(e.p,{children:["Please refer to the ",(0,s.jsx)(e.a,{href:"/docs/2.0/install/cluster-deployment/standard-deployment",children:"official document"})," to install and deploy Doris to obtain a normal running Doris cluster (at least 1 FE 1 BE, 1 FE 3 BE is recommended)."]}),"\n",(0,s.jsx)(e.h2,{id:"7-data-preparation",children:"7. Data Preparation"}),"\n",(0,s.jsx)(e.h3,{id:"71-download-and-install-tpc-ds-data-generation-tool",children:"7.1 Download and Install TPC-DS Data Generation Tool"}),"\n",(0,s.jsxs)(e.p,{children:["Execute the following script to download and compile the ",(0,s.jsx)(e.a,{href:"https://github.com/apache/doris/tree/master/tools/tpcds-tools",children:"tpcds-tools"})," tool."]}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-shell",children:"sh bin/build-tpcds-dbgen.sh\n"})}),"\n",(0,s.jsx)(e.h3,{id:"72-generating-the-tpc-ds-test-set",children:"7.2 Generating the TPC-DS Test Set"}),"\n",(0,s.jsx)(e.p,{children:"Execute the following script to generate the TPC-H dataset:"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-shell",children:"sh bin/gen-tpcds-data.sh -s 1000\n"})}),"\n",(0,s.jsxs)(e.blockquote,{children:["\n",(0,s.jsxs)(e.p,{children:["Note 1: Check the script help via ",(0,s.jsx)(e.code,{children:"sh gen-tpcds-data.sh -h"}),"."]}),"\n",(0,s.jsxs)(e.p,{children:["Note 2: The data will be generated under the ",(0,s.jsx)(e.code,{children:"tpcds-data/"})," directory with the suffix ",(0,s.jsx)(e.code,{children:".dat"}),". The total file size is about 1000GB and may need a few minutes to an hour to generate."]}),"\n",(0,s.jsx)(e.p,{children:"Note 3: A standard test data set of 100G is generated by default."}),"\n"]}),"\n",(0,s.jsx)(e.h3,{id:"73-create-table",children:"7.3 Create Table"}),"\n",(0,s.jsxs)(e.h4,{id:"731-prepare-the-doris-clusterconf-file",children:["7.3.1 Prepare the ",(0,s.jsx)(e.code,{children:"doris-cluster.conf"})," File"]}),"\n",(0,s.jsxs)(e.p,{children:["Before import the script, you need to write the FE\u2019s ip port and other information in the ",(0,s.jsx)(e.code,{children:"doris-cluster.conf"})," file."]}),"\n",(0,s.jsxs)(e.p,{children:["The file is located under ",(0,s.jsx)(e.code,{children:"${DORIS_HOME}/tools/tpcds-tools/conf/"})," ."]}),"\n",(0,s.jsx)(e.p,{children:"The content of the file includes FE's ip, HTTP port, user name, password and the DB name of the data to be imported:"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-shell",children:"# Any of FE host\nexport FE_HOST='127.0.0.1'\n# http_port in fe.conf\nexport FE_HTTP_PORT=8030\n# query_port in fe.conf\nexport FE_QUERY_PORT=9030\n# Doris username\nexport USER='root'\n# Doris password\nexport PASSWORD=''\n# The database where TPC-H tables located\nexport DB='tpcds'\n"})}),"\n",(0,s.jsx)(e.h4,{id:"execute-the-following-script-to-generate-and-create-tpc-h-table",children:"Execute the Following Script to Generate and Create TPC-H Table"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-shell",children:"sh bin/create-tpcds-tables.sh -s 1000\n"})}),"\n",(0,s.jsxs)(e.p,{children:["Or copy the table creation statement in ",(0,s.jsx)(e.a,{href:"https://github.com/apache/doris/blob/master/tools/tpcds-tools/ddl/create-tpcds-tables-sf1000",children:"create-tpcds-tables"})," and excute it in Doris."]}),"\n",(0,s.jsx)(e.h3,{id:"74-import-data",children:"7.4 Import Data"}),"\n",(0,s.jsx)(e.p,{children:"Please perform data import with the following command:"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-shell",children:"sh bin/load-tpcds-data.sh\n"})}),"\n",(0,s.jsx)(e.h3,{id:"75-query-test",children:"7.5 Query Test"}),"\n",(0,s.jsx)(e.h4,{id:"751-executing-query-scripts",children:"7.5.1 Executing Query Scripts"}),"\n",(0,s.jsx)(e.p,{children:"Execute the above test SQL or execute the following command"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{children:"sh bin/run-tpcds-queries.sh -s 1000\n"})}),"\n",(0,s.jsx)(e.h4,{id:"752-single-sql-execution",children:"7.5.2 Single SQL Execution"}),"\n",(0,s.jsxs)(e.p,{children:["You can also retrieve the latest SQL from the code repository. The address for the latest test query statements of ",(0,s.jsx)(e.a,{href:"https://github.com/apache/doris/tree/master/tools/tpcds-tools/queries/sf1000",children:"TPC-DS"}),"."]})]})}function j(n={}){let{wrapper:e}={...(0,t.a)(),...n.components};return e?(0,s.jsx)(e,{...n,children:(0,s.jsx)(x,{...n})}):x(n)}},877795:function(n,e,r){r.d(e,{Z:function(){return d}});let d=r.p+"assets/images/tpcds_2.1-a98817462a7ee00858125ea49d4fb5dc.png"},250065:function(n,e,r){r.d(e,{Z:function(){return l},a:function(){return i}});var d=r(667294);let s={},t=d.createContext(s);function i(n){let e=d.useContext(t);return d.useMemo(function(){return"function"==typeof n?n(e):{...e,...n}},[e,n])}function l(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(s):n.components||s:i(n.components),d.createElement(t.Provider,{value:e},n.children)}}}]);