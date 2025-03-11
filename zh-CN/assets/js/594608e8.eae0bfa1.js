"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["267782"],{326115:function(n,e,i){i.r(e),i.d(e,{default:()=>p,frontMatter:()=>d,metadata:()=>s,assets:()=>o,toc:()=>c,contentTitle:()=>a});var s=JSON.parse('{"id":"admin-manual/plugin-development-manual","title":"\u63D2\u4EF6\u5F00\u53D1","description":"\x3c!--","source":"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-2.0/admin-manual/plugin-development-manual.md","sourceDirName":"admin-manual","slug":"/admin-manual/plugin-development-manual","permalink":"/zh-CN/docs/2.0/admin-manual/plugin-development-manual","draft":false,"unlisted":false,"tags":[],"version":"2.0","frontMatter":{"title":"\u63D2\u4EF6\u5F00\u53D1","language":"zh-CN"},"sidebar":"docs","previous":{"title":"\u6062\u590D tablet","permalink":"/zh-CN/docs/2.0/admin-manual/be/tablet-restore"},"next":{"title":"\u6587\u4EF6\u7BA1\u7406\u5668","permalink":"/zh-CN/docs/2.0/admin-manual/small-file-mgr"}}'),l=i("785893"),r=i("250065");let d={title:"\u63D2\u4EF6\u5F00\u53D1",language:"zh-CN"},a=void 0,o={},c=[{value:"\u4ECB\u7ECD",id:"\u4ECB\u7ECD",level:2},{value:"\u63D2\u4EF6",id:"\u63D2\u4EF6",level:2},{value:"\u7F16\u5199\u63D2\u4EF6",id:"\u7F16\u5199\u63D2\u4EF6",level:2},{value:"\u521B\u5EFA\u63D2\u4EF6\u6A21\u5757",id:"\u521B\u5EFA\u63D2\u4EF6\u6A21\u5757",level:3},{value:"\u6DFB\u52A0 zip.xml",id:"\u6DFB\u52A0-zipxml",level:3},{value:"\u66F4\u65B0 pom.xml",id:"\u66F4\u65B0-pomxml",level:3},{value:"\u5B9E\u73B0\u63D2\u4EF6",id:"\u5B9E\u73B0\u63D2\u4EF6",level:3},{value:"\u7F16\u8BD1",id:"\u7F16\u8BD1",level:3},{value:"\u53E6\u4E00\u79CD\u5F00\u53D1\u65B9\u5F0F",id:"\u53E6\u4E00\u79CD\u5F00\u53D1\u65B9\u5F0F",level:3},{value:"\u90E8\u7F72",id:"\u90E8\u7F72",level:2},{value:"\u5B89\u88C5\u548C\u5378\u8F7D\u63D2\u4EF6",id:"\u5B89\u88C5\u548C\u5378\u8F7D\u63D2\u4EF6",level:2}];function t(n){let e={admonition:"admonition",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,r.a)(),...n.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(e.h2,{id:"\u4ECB\u7ECD",children:"\u4ECB\u7ECD"}),"\n",(0,l.jsx)(e.p,{children:"Doris \u7684\u63D2\u4EF6\u6846\u67B6\u652F\u6301\u5728\u8FD0\u884C\u65F6\u6DFB\u52A0/\u5378\u8F7D\u81EA\u5B9A\u4E49\u63D2\u4EF6\uFF0C\u800C\u4E0D\u9700\u8981\u91CD\u542F\u670D\u52A1\uFF0C\u7528\u6237\u53EF\u4EE5\u901A\u8FC7\u5F00\u53D1\u81EA\u5DF1\u7684\u63D2\u4EF6\u6765\u6269\u5C55 Doris \u7684\u529F\u80FD\u3002"}),"\n",(0,l.jsx)(e.p,{children:"\u4F8B\u5982\uFF0C\u5BA1\u8BA1\u63D2\u4EF6\u4F5C\u7528\u4E8E Doris \u8BF7\u6C42\u6267\u884C\u540E\uFF0C\u53EF\u4EE5\u83B7\u53D6\u5230\u4E00\u6B21\u8BF7\u6C42\u76F8\u5173\u7684\u4FE1\u606F\uFF08\u8BBF\u95EE\u7528\u6237\uFF0C\u8BF7\u6C42 IP\uFF0CSQL \u7B49...\uFF09\uFF0C\u5E76\u5C06\u4FE1\u606F\u5199\u5165\u5230\u6307\u5B9A\u7684\u8868\u4E2D\u3002"}),"\n",(0,l.jsx)(e.p,{children:"\u4E0E UDF \u7684\u533A\u522B\uFF1A"}),"\n",(0,l.jsxs)(e.ul,{children:["\n",(0,l.jsxs)(e.li,{children:["\n",(0,l.jsx)(e.p,{children:"UDF \u662F\u51FD\u6570\uFF0C\u7528\u4E8E\u5728 SQL \u6267\u884C\u65F6\u8FDB\u884C\u6570\u636E\u8BA1\u7B97\u3002\u63D2\u4EF6\u662F\u9644\u52A0\u529F\u80FD\uFF0C\u7528\u4E8E\u4E3A Doris \u6269\u5C55\u81EA\u5B9A\u4E49\u7684\u529F\u80FD\uFF0C\u4F8B\u5982\uFF1A\u652F\u6301\u4E0D\u540C\u7684\u5B58\u50A8\u5F15\u64CE\uFF0C\u652F\u6301\u4E0D\u540C\u7684\u5BFC\u5165\u65B9\u5F0F\uFF0C\u63D2\u4EF6\u5E76\u4E0D\u4F1A\u53C2\u4E0E\u6267\u884C SQL \u65F6\u7684\u6570\u636E\u8BA1\u7B97\u3002"}),"\n"]}),"\n",(0,l.jsxs)(e.li,{children:["\n",(0,l.jsx)(e.p,{children:"UDF \u7684\u6267\u884C\u5468\u671F\u4EC5\u9650\u4E8E\u4E00\u6B21 SQL \u6267\u884C\u3002\u63D2\u4EF6\u7684\u6267\u884C\u5468\u671F\u53EF\u80FD\u4E0E Doris \u8FDB\u7A0B\u76F8\u540C\u3002"}),"\n"]}),"\n",(0,l.jsxs)(e.li,{children:["\n",(0,l.jsx)(e.p,{children:"\u4F7F\u7528\u573A\u666F\u4E0D\u540C\u3002\u5982\u679C\u60A8\u9700\u8981\u6267\u884C SQL \u65F6\u652F\u6301\u7279\u6B8A\u7684\u6570\u636E\u7B97\u6CD5\uFF0C\u90A3\u4E48\u63A8\u8350\u4F7F\u7528 UDF\uFF0C\u5982\u679C\u60A8\u9700\u8981\u5728 Doris \u4E0A\u8FD0\u884C\u81EA\u5B9A\u4E49\u7684\u529F\u80FD\uFF0C\u6216\u8005\u662F\u542F\u52A8\u4E00\u4E2A\u540E\u53F0\u7EBF\u7A0B\u6267\u884C\u4EFB\u52A1\uFF0C\u90A3\u4E48\u63A8\u8350\u4F7F\u7528\u63D2\u4EF6\u3002"}),"\n"]}),"\n"]}),"\n",(0,l.jsx)(e.p,{children:"\u76EE\u524D\u63D2\u4EF6\u6846\u67B6\u4EC5\u652F\u6301\u5BA1\u8BA1\u7C7B\u63D2\u4EF6\u3002"}),"\n",(0,l.jsxs)(e.admonition,{type:"caution",children:[(0,l.jsx)(e.p,{children:"\u6CE8\u610F\uFF1A"}),(0,l.jsxs)(e.ul,{children:["\n",(0,l.jsxs)(e.li,{children:["Doris \u7684\u63D2\u4EF6\u6846\u67B6\u662F\u5B9E\u9A8C\u6027\u529F\u80FD\uFF0C\u76EE\u524D\u53EA\u652F\u6301 FE \u63D2\u4EF6\uFF0C\u4E14\u9ED8\u8BA4\u662F\u5173\u95ED\u7684\uFF0C\u53EF\u4EE5\u901A\u8FC7 FE \u914D\u7F6E",(0,l.jsx)(e.code,{children:"plugin_enable=true"}),"\u6253\u5F00"]}),"\n"]})]}),"\n",(0,l.jsx)(e.h2,{id:"\u63D2\u4EF6",children:"\u63D2\u4EF6"}),"\n",(0,l.jsxs)(e.p,{children:["\u4E00\u4E2A FE \u7684\u63D2\u4EF6\u53EF\u4EE5\u4F7F\u4E00\u4E2A",(0,l.jsx)(e.strong,{children:"zip \u538B\u7F29\u5305"}),"\u6216\u8005\u662F\u4E00\u4E2A",(0,l.jsx)(e.strong,{children:"\u76EE\u5F55"}),"\u3002\u5176\u5185\u5BB9\u81F3\u5C11\u5305\u542B\u4E24\u4E2A\u6587\u4EF6\uFF1A",(0,l.jsx)(e.code,{children:"plugin.properties"})," \u548C ",(0,l.jsx)(e.code,{children:".jar"})," \u6587\u4EF6\u3002",(0,l.jsx)(e.code,{children:"plugin.properties"}),"\u7528\u4E8E\u63CF\u8FF0\u63D2\u4EF6\u4FE1\u606F\u3002"]}),"\n",(0,l.jsx)(e.p,{children:"\u6587\u4EF6\u7ED3\u6784\u5982\u4E0B\uFF1A"}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{children:"# plugin .zip\nauditodemo.zip:\n    -plugin.properties\n    -auditdemo.jar\n    -xxx.config\n    -data/\n    -test_data/\n\n# plugin local directory\nauditodemo/:\n    -plugin.properties\n    -auditdemo.jar\n    -xxx.config\n    -data/\n    -test_data/\n"})}),"\n",(0,l.jsxs)(e.p,{children:[(0,l.jsx)(e.code,{children:"plugin.properties"})," \u5185\u5BB9\u793A\u4F8B\uFF1A"]}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-shell",children:'### required:\n#\n# the plugin name\nname = audit_plugin_demo\n#\n# the plugin type\ntype = AUDIT\n#\n# simple summary of the plugin\ndescription = just for test\n#\n# Doris\'s version, like: 0.11.0\nversion = 0.11.0\n\n### FE-Plugin optional:\n#\n# version of java the code is built against\n# use the command "java -version" value, like 1.8.0, 9.0.1, 13.0.4\njava.version = 1.8.31\n#\n# the name of the class to load, fully-qualified.\nclassname = AuditPluginDemo\n\n### BE-Plugin optional:\n# the name of the so to load\nsoName = example.so\n'})}),"\n",(0,l.jsx)(e.h2,{id:"\u7F16\u5199\u63D2\u4EF6",children:"\u7F16\u5199\u63D2\u4EF6"}),"\n",(0,l.jsx)(e.p,{children:"\u63D2\u4EF6\u7684\u5F00\u53D1\u73AF\u5883\u4F9D\u8D56 Doris \u7684\u5F00\u53D1\u7F16\u8BD1\u73AF\u5883\u3002\u6240\u4EE5\u8BF7\u5148\u786E\u4FDD Doris \u7684\u5F00\u53D1\u7F16\u8BD1\u73AF\u5883\u8FD0\u884C\u6B63\u5E38\u3002"}),"\n",(0,l.jsxs)(e.p,{children:[(0,l.jsx)(e.code,{children:"fe_plugins"})," \u76EE\u5F55\u662F FE \u63D2\u4EF6\u7684\u6839\u6A21\u5757\u3002\u8FD9\u4E2A\u6839\u6A21\u5757\u7EDF\u4E00\u7BA1\u7406\u63D2\u4EF6\u6240\u9700\u7684\u4F9D\u8D56\u3002\u6DFB\u52A0\u4E00\u4E2A\u65B0\u7684\u63D2\u4EF6\uFF0C\u76F8\u5F53\u4E8E\u5728\u8FD9\u4E2A\u6839\u6A21\u5757\u6DFB\u52A0\u4E00\u4E2A\u5B50\u6A21\u5757\u3002"]}),"\n",(0,l.jsx)(e.h3,{id:"\u521B\u5EFA\u63D2\u4EF6\u6A21\u5757",children:"\u521B\u5EFA\u63D2\u4EF6\u6A21\u5757"}),"\n",(0,l.jsxs)(e.p,{children:["\u6211\u4EEC\u53EF\u4EE5\u901A\u8FC7\u4EE5\u4E0B\u547D\u4EE4\u5728 ",(0,l.jsx)(e.code,{children:"fe_plugins"})," \u76EE\u5F55\u521B\u5EFA\u4E00\u4E2A\u5B50\u6A21\u5757\u7528\u6237\u5B9E\u73B0\u521B\u5EFA\u548C\u521B\u5EFA\u5DE5\u7A0B\u3002\u5176\u4E2D ",(0,l.jsx)(e.code,{children:"doris-fe-test"})," \u4E3A\u63D2\u4EF6\u540D\u79F0\u3002"]}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-shell",children:"mvn archetype: generate -DarchetypeCatalog = internal -DgroupId = org.apache -DartifactId = doris-fe-test -DinteractiveMode = false\n"})}),"\n",(0,l.jsxs)(e.p,{children:["\u8FD9\u4E2A\u547D\u4EE4\u4F1A\u521B\u5EFA\u4E00\u4E2A\u65B0\u7684 maven \u5DE5\u7A0B\uFF0C\u5E76\u4E14\u81EA\u52A8\u5411 ",(0,l.jsx)(e.code,{children:"fe_plugins/pom.xml"})," \u4E2D\u6DFB\u52A0\u4E00\u4E2A\u5B50\u6A21\u5757\uFF1A"]}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-shell",children:"\xa0\xa0\xa0\xa0.....\n\xa0\xa0\xa0\xa0<groupId>org.apache</groupId>\n\xa0\xa0\xa0\xa0<artifactId>doris-fe-plugins</artifactId>\n\xa0\xa0\xa0\xa0<packaging>pom</packaging>\n\xa0\xa0\xa0\xa0<version>1.0-SNAPSHOT</version>\n\xa0\xa0\xa0\xa0<modules>\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0<module>auditdemo</module>\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0# new plugin module\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0<module>doris-fe-test</module>\n\xa0\xa0\xa0\xa0</modules>\n\xa0\xa0\xa0\xa0.....\n"})}),"\n",(0,l.jsx)(e.p,{children:"\u65B0\u7684\u5DE5\u7A0B\u76EE\u5F55\u7ED3\u6784\u5982\u4E0B\uFF1A"}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-shell",children:"-doris-fe-test/\n-pom.xml\n-src/\n    ---- main/java/org/apache/\n    ------- App.java # mvn auto generate, ignore\n    ---- test/java/org/apache\n"})}),"\n",(0,l.jsxs)(e.p,{children:["\u63A5\u4E0B\u6765\u6211\u4EEC\u5728 ",(0,l.jsx)(e.code,{children:"main"})," \u76EE\u5F55\u4E0B\u6DFB\u52A0\u4E00\u4E2A ",(0,l.jsx)(e.code,{children:"assembly"})," \u76EE\u5F55\u6765\u5B58\u653E ",(0,l.jsx)(e.code,{children:"plugin.properties"})," \u548C ",(0,l.jsx)(e.code,{children:"zip.xml"}),"\u3002\u6700\u7EC8\u7684\u5DE5\u7A0B\u76EE\u5F55\u7ED3\u6784\u5982\u4E0B\uFF1A"]}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{children:"-doris-fe-test/\n-pom.xml\n-src/\n---- main/\n------ assembly/\n-------- plugin.properties\n-------- zip.xml\n------ java/org/apache/\n--------App.java # mvn auto generate, ignore\n---- test/java/org/apache\n"})}),"\n",(0,l.jsx)(e.h3,{id:"\u6DFB\u52A0-zipxml",children:"\u6DFB\u52A0 zip.xml"}),"\n",(0,l.jsxs)(e.p,{children:[(0,l.jsx)(e.code,{children:"zip.xml"})," \u7528\u4E8E\u63CF\u8FF0\u6700\u7EC8\u751F\u6210\u7684 zip \u538B\u7F29\u5305\u4E2D\u7684\u6587\u4EF6\u5185\u5BB9\u3002\uFF08\u5982 .jar file, plugin.properties \u7B49\u7B49\uFF09"]}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-xml",children:"<assembly>\n\xa0\xa0\xa0\xa0<id>plugin</id>\n\xa0\xa0\xa0\xa0<formats>\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0<format>zip</format>\n\xa0\xa0\xa0\xa0</formats>\n\xa0\xa0\xa0\xa0<!-IMPORTANT: must be false->\n\xa0\xa0\xa0\xa0<includeBaseDirectory>false</includeBaseDirectory>\n\xa0\xa0\xa0\xa0<fileSets>\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0<fileSet>\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0<directory>target</directory>\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0<includes>\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0<include>*.jar</include>\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0</ ncludes>\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0<outputDirectory>/</outputDirectory>\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0</fileSet>\n\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0<fileSet>\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0<directory>src/main/assembly</directory>\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0<includes>\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0<include>plugin.properties</include>\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0</includes>\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0<outputDirectory>/</outputDirectory>\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0</fileSet>\n\xa0\xa0\xa0\xa0</fileSets>\n</assembly>\n"})}),"\n",(0,l.jsx)(e.h3,{id:"\u66F4\u65B0-pomxml",children:"\u66F4\u65B0 pom.xml"}),"\n",(0,l.jsxs)(e.p,{children:["\u63A5\u4E0B\u6765\u6211\u4EEC\u9700\u8981\u66F4\u65B0\u5B50\u6A21\u5757\u7684 ",(0,l.jsx)(e.code,{children:"pom.xml"})," \u6587\u4EF6\uFF0C\u6DFB\u52A0 doris-fe \u4F9D\u8D56\uFF1A"]}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-xml",children:'<?xml version="1.0" encoding="UTF-8"?>\n<project xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"\n         xmlns="http://maven.apache.org/POM/4.0.0"\n         xsi:schemaLocation="http://maven.apache.org/POM/4.0.0 http://maven.apache.org/xsd/maven-4.0.0.xsd">\n    <parent>\n        <groupId>org.apache</groupId>\n        <artifactId>doris-fe-plugins</artifactId>\n        <version>1.0-SNAPSHOT</version>\n    </parent>\n    <modelVersion>4.0.0</modelVersion>\n\n    <artifactId>auditloader</artifactId>\n    <packaging>jar</packaging>\n\n    <dependencies>\n        \x3c!-- doris-fe dependencies --\x3e\n        <dependency>\n            <groupId>org.apache</groupId>\n            <artifactId>doris-fe</artifactId>\n        </dependency>\n\n        \x3c!-- other dependencies --\x3e\n        <dependency>\n            ...\n        </dependency>\n    </dependencies>\n\n    <build>\n        <finalName>auditloader</finalName>\n        <plugins>\n            <plugin>\n                <artifactId>maven-assembly-plugin</artifactId>\n                <version>2.4.1</version>\n                <configuration>\n                    <appendAssemblyId>false</appendAssemblyId>\n                    <descriptors>\n                        <descriptor>src/main/assembly/zip.xml</descriptor>\n                    </descriptors>\n                </configuration>\n                <executions>\n                    <execution>\n                        <id>make-assembly</id>\n                        <phase>package</phase>\n                        <goals>\n                            <goal>single</goal>\n                        </goals>\n                    </execution>\n                </executions>\n            </plugin>\n        </plugins>\n    </build>\n\n</project>\n'})}),"\n",(0,l.jsx)(e.h3,{id:"\u5B9E\u73B0\u63D2\u4EF6",children:"\u5B9E\u73B0\u63D2\u4EF6"}),"\n",(0,l.jsxs)(e.p,{children:["\u4E4B\u540E\u6211\u4EEC\u5C31\u53EF\u4EE5\u5F00\u59CB\u8FDB\u884C\u63D2\u4EF6\u529F\u80FD\u7684\u5F00\u53D1\u4E86\u3002\u63D2\u4EF6\u9700\u8981\u5B9E\u73B0 ",(0,l.jsx)(e.code,{children:"Plugin"})," \u63A5\u53E3\u3002\u5177\u4F53\u53EF\u4EE5\u53C2\u9605 Doris \u81EA\u5E26\u7684 ",(0,l.jsx)(e.code,{children:"auditdemo"})," \u63D2\u4EF6\u793A\u4F8B\u4EE3\u7801\u3002"]}),"\n",(0,l.jsx)(e.h3,{id:"\u7F16\u8BD1",children:"\u7F16\u8BD1"}),"\n",(0,l.jsxs)(e.p,{children:["\u5728\u7F16\u8BD1\u63D2\u4EF6\u4E4B\u524D\uFF0C\u9700\u8981\u5148\u6267\u884C ",(0,l.jsx)(e.code,{children:"sh build.sh --fe"})," \u8FDB\u884C Doris FE \u4EE3\u7801\u7684\u7F16\u8BD1\uFF0C\u5E76\u786E\u4FDD\u7F16\u8BD1\u6210\u529F\u3002"]}),"\n",(0,l.jsxs)(e.p,{children:["\u4E4B\u540E\uFF0C\u6267\u884C ",(0,l.jsx)(e.code,{children:"sh build_plugin.sh"})," \u7F16\u8BD1\u6240\u6709\u63D2\u4EF6\u3002\u6700\u7EC8\u7684\u4EA7\u51FA\u4F1A\u5B58\u653E\u5728 ",(0,l.jsx)(e.code,{children:"fe_plugins/output"})," \u76EE\u5F55\u4E2D\u3002"]}),"\n",(0,l.jsxs)(e.p,{children:["\u6216\u8005\u4E5F\u53EF\u4EE5\u6267\u884C ",(0,l.jsx)(e.code,{children:"sh build_plugin.sh --plugin your_plugin_name"})," \u6765\u4EC5\u7F16\u8BD1\u6307\u5B9A\u7684\u63D2\u4EF6\u3002"]}),"\n",(0,l.jsx)(e.h3,{id:"\u53E6\u4E00\u79CD\u5F00\u53D1\u65B9\u5F0F",children:"\u53E6\u4E00\u79CD\u5F00\u53D1\u65B9\u5F0F"}),"\n",(0,l.jsxs)(e.p,{children:["\u60A8\u53EF\u4EE5\u76F4\u63A5\u901A\u8FC7\u4FEE\u6539\u81EA\u5E26\u7684 ",(0,l.jsx)(e.code,{children:"auditdemo"})," \u63D2\u4EF6\u793A\u4F8B\u4EE3\u7801\u8FDB\u884C\u5F00\u53D1\u3002"]}),"\n",(0,l.jsx)(e.h2,{id:"\u90E8\u7F72",children:"\u90E8\u7F72"}),"\n",(0,l.jsx)(e.p,{children:"\u63D2\u4EF6\u53EF\u4EE5\u901A\u8FC7\u4EE5\u4E0B\u4E09\u79CD\u65B9\u5F0F\u90E8\u7F72\u3002"}),"\n",(0,l.jsxs)(e.ul,{children:["\n",(0,l.jsxs)(e.li,{children:["\n",(0,l.jsxs)(e.p,{children:["\u5C06 ",(0,l.jsx)(e.code,{children:".zip"})," \u6587\u4EF6\u653E\u5728 Http \u6216 Https \u670D\u52A1\u5668\u4E0A\u3002\u5982\uFF1A",(0,l.jsx)(e.code,{children:"http://xxx.xxx.com/data/my_plugin.zip"}),", Doris \u4F1A\u4E0B\u8F7D\u8FD9\u4E2A\u6587\u4EF6\u3002\u540C\u65F6\u9700\u8981\u5728 properties \u4E2D\u8BBE\u7F6E md5sum \u7684\u503C\uFF0C\u6216\u8005\u653E\u7F6E\u4E00\u4E2A\u548C ",(0,l.jsx)(e.code,{children:".zip"})," \u6587\u4EF6\u540C\u540D\u7684 md5 \u6587\u4EF6\uFF0C\u5982 ",(0,l.jsx)(e.code,{children:"http://xxx.xxxxxx.com/data/my_plugin.zip.md5"}),"\u3002\u5176\u4E2D\u5185\u5BB9\u4E3A .zip \u6587\u4EF6\u7684 MD5 \u503C\u3002"]}),"\n"]}),"\n",(0,l.jsxs)(e.li,{children:["\n",(0,l.jsxs)(e.p,{children:["\u672C\u5730 ",(0,l.jsx)(e.code,{children:".zip"})," \u6587\u4EF6\u3002\u5982\uFF1A",(0,l.jsx)(e.code,{children:"/home/work/data/plugin.zip"}),"\u3002\u5982\u679C\u8BE5\u63D2\u4EF6\u4EC5\u7528\u4E8E FE\uFF0C\u5219\u9700\u90E8\u7F72\u5728\u6240\u6709 FE \u8282\u70B9\u76F8\u540C\u7684\u76EE\u5F55\u4E0B\u3002\u5426\u5219\uFF0C\u9700\u8981\u5728\u6240\u6709 FE \u548C BE \u8282\u70B9\u90E8\u7F72\u3002"]}),"\n"]}),"\n",(0,l.jsxs)(e.li,{children:["\n",(0,l.jsxs)(e.p,{children:["\u672C\u5730\u76EE\u5F55\u3002\u5982\uFF1A",(0,l.jsx)(e.code,{children:"/home/work/data/plugin/"}),"\u3002\u76F8\u5F53\u4E8E ",(0,l.jsx)(e.code,{children:".zip"})," \u6587\u4EF6\u89E3\u538B\u540E\u7684\u76EE\u5F55\u3002\u5982\u679C\u8BE5\u63D2\u4EF6\u4EC5\u7528\u4E8E FE\uFF0C\u5219\u9700\u90E8\u7F72\u5728\u6240\u6709 FE \u8282\u70B9\u76F8\u540C\u7684\u76EE\u5F55\u4E0B\u3002\u5426\u5219\uFF0C\u9700\u8981\u5728\u6240\u6709 FE \u548C BE \u8282\u70B9\u90E8\u7F72\u3002"]}),"\n"]}),"\n"]}),"\n",(0,l.jsx)(e.p,{children:"\u6CE8\u610F\uFF1A\u9700\u4FDD\u8BC1\u90E8\u7F72\u8DEF\u5F84\u5728\u6574\u4E2A\u63D2\u4EF6\u751F\u547D\u5468\u671F\u5185\u6709\u6548\u3002"}),"\n",(0,l.jsx)(e.h2,{id:"\u5B89\u88C5\u548C\u5378\u8F7D\u63D2\u4EF6",children:"\u5B89\u88C5\u548C\u5378\u8F7D\u63D2\u4EF6"}),"\n",(0,l.jsxs)(e.p,{children:["\u901A\u8FC7\u5982\u4E0B\u547D\u4EE4\u5B89\u88C5\u548C\u5378\u8F7D\u63D2\u4EF6\u3002\u66F4\u591A\u5E2E\u52A9\u8BF7\u53C2\u9605 ",(0,l.jsx)(e.code,{children:"HELP INSTALL PLUGIN;"})," ",(0,l.jsx)(e.code,{children:"HELP UNINSTALL PLUGIN;"})," ",(0,l.jsx)(e.code,{children:"HELP SHOW PLUGINS;"})]}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-sql",children:'mysql> install plugin from "/home/users/doris/auditloader.zip";\nQuery OK, 0 rows affected (0.09 sec)\n\nmysql> show plugins\\G\n*************************** 1. row ***************************\n       Name: auditloader\n       Type: AUDIT\nDescription: load audit log to olap load, and user can view the statistic of queries\n    Version: 0.12.0\nJavaVersion: 1.8.31\n  ClassName: AuditLoaderPlugin\n     SoName: NULL\n    Sources: /home/users/doris/auditloader.zip\n     Status: INSTALLED\n Properties: {}\n*************************** 2. row ***************************\n       Name: AuditLogBuilder\n       Type: AUDIT\nDescription: builtin audit logger\n    Version: 0.12.0\nJavaVersion: 1.8.31\n  ClassName: org.apache.doris.qe.AuditLogBuilder\n     SoName: NULL\n    Sources: Builtin\n     Status: INSTALLED\n Properties: {}   \n2 rows in set (0.00 sec)\n\nmysql> uninstall plugin auditloader;\nQuery OK, 0 rows affected (0.05 sec)\n\nmysql> show plugins;\nEmpty set (0.00 sec)\n'})})]})}function p(n={}){let{wrapper:e}={...(0,r.a)(),...n.components};return e?(0,l.jsx)(e,{...n,children:(0,l.jsx)(t,{...n})}):t(n)}},250065:function(n,e,i){i.d(e,{Z:function(){return a},a:function(){return d}});var s=i(667294);let l={},r=s.createContext(l);function d(n){let e=s.useContext(r);return s.useMemo(function(){return"function"==typeof n?n(e):{...e,...n}},[e,n])}function a(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(l):n.components||l:d(n.components),s.createElement(r.Provider,{value:e},n.children)}}}]);