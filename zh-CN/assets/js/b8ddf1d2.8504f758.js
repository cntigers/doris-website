"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["529346"],{741151:function(e,n,a){a.r(n),a.d(n,{default:()=>u,frontMatter:()=>c,metadata:()=>t,assets:()=>s,toc:()=>d,contentTitle:()=>l});var t=JSON.parse('{"id":"admin-manual/trouble-shooting/frontend-lock-manager","title":"FE \u9501\u7BA1\u7406","description":"\x3c!--","source":"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-3.0/admin-manual/trouble-shooting/frontend-lock-manager.md","sourceDirName":"admin-manual/trouble-shooting","slug":"/admin-manual/trouble-shooting/frontend-lock-manager","permalink":"/zh-CN/docs/3.0/admin-manual/trouble-shooting/frontend-lock-manager","draft":false,"unlisted":false,"tags":[],"version":"3.0","frontMatter":{"title":"FE \u9501\u7BA1\u7406","language":"zh-CN"},"sidebar":"docs","previous":{"title":"\u5143\u6570\u636E\u8FD0\u7EF4","permalink":"/zh-CN/docs/3.0/admin-manual/trouble-shooting/metadata-operation"},"next":{"title":"Tablet \u672C\u5730\u8C03\u8BD5","permalink":"/zh-CN/docs/3.0/admin-manual/trouble-shooting/tablet-local-debug"}}'),r=a("785893"),o=a("250065");let c={title:"FE \u9501\u7BA1\u7406",language:"zh-CN"},l=void 0,s={},d=[{value:"\u6B7B\u9501\u68C0\u6D4B",id:"\u6B7B\u9501\u68C0\u6D4B",level:2},{value:"\u914D\u7F6E\u53C2\u6570",id:"\u914D\u7F6E\u53C2\u6570",level:3},{value:"\u6162\u9501\u68C0\u6D4B",id:"\u6162\u9501\u68C0\u6D4B",level:2},{value:"\u914D\u7F6E\u53C2\u6570",id:"\u914D\u7F6E\u53C2\u6570-1",level:3}];function i(e){let n={admonition:"admonition",code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,o.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.p,{children:"FE \u9501\u7BA1\u7406\u7528\u4E8E\u68C0\u6D4B FE \u8FDB\u7A0B\u4E2D\u53EF\u80FD\u51FA\u73B0\u7684\u6B7B\u9501\u548C\u6162\u9501\u95EE\u9898\u3002\u65B9\u4FBF\u7528\u6237\u5B9A\u4F4D\u7EBF\u4E0A\u95EE\u9898\u4EE5\u53CA\u76D1\u63A7\u9501\u7684\u5360\u7528\u60C5\u51B5\u3002"}),"\n",(0,r.jsx)(n.admonition,{type:"tip",children:(0,r.jsx)(n.p,{children:"\u8BE5\u529F\u80FD\u4E3A\u5B9E\u9A8C\u529F\u80FD\uFF0C\u81EA 2.1.6 \u7248\u672C\u5F00\u59CB\u652F\u6301\u3002"})}),"\n",(0,r.jsx)(n.h2,{id:"\u6B7B\u9501\u68C0\u6D4B",children:"\u6B7B\u9501\u68C0\u6D4B"}),"\n",(0,r.jsx)(n.p,{children:"FE \u9501\u7BA1\u7406\u6A21\u5757\u63D0\u4F9B\u4E86\u6B7B\u9501\u68C0\u6D4B\u529F\u80FD\uFF0C\u7528\u4E8E\u81EA\u52A8\u68C0\u6D4B\u6B7B\u9501\uFF0C\u8BE5\u529F\u80FD\u9ED8\u8BA4\u5173\u95ED\uFF0C\u53EF\u4EE5\u901A\u8FC7\u914D\u7F6E\u53C2\u6570\u5F00\u542F\u3002"}),"\n",(0,r.jsxs)(n.p,{children:["\u5982\u679C\u5F00\u542F\u6B7B\u9501\u68C0\u6D4B\u529F\u80FD\uFF0C\u5219\u4F1A\u5468\u671F\u6027\u5730\u68C0\u6D4B\u6B7B\u9501\uFF0C\u9ED8\u8BA4\u5468\u671F\u4E3A 5 \u5206\u949F\uFF0C\u6211\u4EEC\u4E5F\u53EF\u4EE5\u8BBE\u7F6E ",(0,r.jsx)(n.code,{children:"deadlock_detection_interval_minute"}),"\n\u53C2\u6570\uFF0C\u6765\u8C03\u6574\u68C0\u6D4B\u5468\u671F\u3002"]}),"\n",(0,r.jsxs)(n.p,{children:["\u6211\u4EEC\u4F1A\u518D\u65E5\u5FD7\u4E2D\u8F93\u51FA\u6B7B\u9501\u68C0\u6D4B\u7684\u7ED3\u679C\uFF0C\u5982\u679C\u68C0\u6D4B\u5230\u6B7B\u9501\uFF0C\u5219\u4F1A\u8F93\u51FA\u5BF9\u5E94\u7684\u544A\u8B66\u65E5\u5FD7\u3002\u53EF\u4EE5\u641C\u7D22\u5173\u952E\u5B57 ",(0,r.jsx)(n.code,{children:"Deadlocks detected"})," \u6765\u67E5\u770B\u662F\u5426\u5B58\u5728\u6B7B\u9501\u3002"]}),"\n",(0,r.jsx)(n.p,{children:"\u65E5\u5FD7\u5185\u5BB9\u793A\u4F8B\uFF08\u539F\u59CB\u65E5\u5FD7\u4E3A\u4E00\u884C\u6587\u672C\uFF09\uFF1A"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-log",children:'2024-08-15 12:55:46  [ pool-1-thread-1:1034 ] - [ WARN ]  Find dead lock, info ["Thread-0" prio=5 Id=15 WAITING on java.util.concurrent.locks.ReentrantLock$NonfairSync@5b7e0fca owned by "Thread-1" Id=16\n	at java.base@17.0.6/jdk.internal.misc.Unsafe.park(Native Method)\n	-  waiting on java.util.concurrent.locks.ReentrantLock$NonfairSync@5b7e0fca\n	at java.base@17.0.6/java.util.concurrent.locks.LockSupport.park(LockSupport.java:211)\n	at java.base@17.0.6/java.util.concurrent.locks.AbstractQueuedSynchronizer.acquire(AbstractQueuedSynchronizer.java:715)\n	at java.base@17.0.6/java.util.concurrent.locks.AbstractQueuedSynchronizer.acquire(AbstractQueuedSynchronizer.java:938)\n	at java.base@17.0.6/java.util.concurrent.locks.ReentrantLock$Sync.lock(ReentrantLock.java:153)\n	at java.base@17.0.6/java.util.concurrent.locks.ReentrantLock.lock(ReentrantLock.java:322)\n	at app//org.example.lock.MonitoredReentrantLock.lock(MonitoredReentrantLock.java:22)\n	at app//org.example.Main.lambda$testDeadLock$3(Main.java:79)\n	...\n\n	Number of locked synchronizers = 1\n	- java.util.concurrent.locks.ReentrantLock$NonfairSync@9abbac5\n\n, "Thread-1" prio=5 Id=16 WAITING on java.util.concurrent.locks.ReentrantLock$NonfairSync@9abbac5 owned by "Thread-0" Id=15\n	at java.base@17.0.6/jdk.internal.misc.Unsafe.park(Native Method)\n	-  waiting on java.util.concurrent.locks.ReentrantLock$NonfairSync@9abbac5\n	at java.base@17.0.6/java.util.concurrent.locks.LockSupport.park(LockSupport.java:211)\n	at java.base@17.0.6/java.util.concurrent.locks.AbstractQueuedSynchronizer.acquire(AbstractQueuedSynchronizer.java:715)\n	at java.base@17.0.6/java.util.concurrent.locks.AbstractQueuedSynchronizer.acquire(AbstractQueuedSynchronizer.java:938)\n	at java.base@17.0.6/java.util.concurrent.locks.ReentrantLock$Sync.lock(ReentrantLock.java:153)\n	at java.base@17.0.6/java.util.concurrent.locks.ReentrantLock.lock(ReentrantLock.java:322)\n	at app//org.example.lock.MonitoredReentrantLock.lock(MonitoredReentrantLock.java:22)\n	at app//org.example.Main.lambda$testDeadLock$4(Main.java:93)\n	...\n\n	Number of locked synchronizers = 1\n	- java.util.concurrent.locks.ReentrantLock$NonfairSync@5b7e0fca\n\n]\n'})}),"\n",(0,r.jsx)(n.h3,{id:"\u914D\u7F6E\u53C2\u6570",children:"\u914D\u7F6E\u53C2\u6570"}),"\n",(0,r.jsx)(n.p,{children:"fe.conf \u914D\u7F6E\u6587\u4EF6\u4E2D\u7684\u6B7B\u9501\u68C0\u6D4B\u76F8\u5173\u53C2\u6570\u5982\u4E0B\uFF1A"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"\u53C2\u6570\u540D"}),(0,r.jsx)(n.th,{children:"\u53C2\u6570\u8BF4\u660E"}),(0,r.jsx)(n.th,{children:"\u9ED8\u8BA4\u503C"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"enable_deadlock_detection"}),(0,r.jsx)(n.td,{children:"\u662F\u5426\u5F00\u542F\u6B7B\u9501\u68C0\u6D4B\u529F\u80FD"}),(0,r.jsx)(n.td,{children:"false"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"deadlock_detection_interval_minute"}),(0,r.jsx)(n.td,{children:"\u6B7B\u9501\u68C0\u6D4B\u5468\u671F\uFF0C\u5355\u4F4D\u4E3A\u5206\u949F"}),(0,r.jsx)(n.td,{children:"5"})]})]})]}),"\n",(0,r.jsx)(n.h2,{id:"\u6162\u9501\u68C0\u6D4B",children:"\u6162\u9501\u68C0\u6D4B"}),"\n",(0,r.jsx)(n.p,{children:"FE \u9501\u7BA1\u7406\u6A21\u5757\u63D0\u4F9B\u4E86\u6162\u9501\u68C0\u6D4B\u529F\u80FD\uFF0C\u6211\u4EEC\u4F1A\u76D1\u63A7\u6240\u6709 DB\u3001Table\u3001Transaction \u76F8\u5173\u7684\u9501\uFF0C\u5982\u679C\u9501\u7684\u6301\u6709\u65F6\u95F4\u8D85\u8FC7\u4E00\u5B9A\u9608\u503C\uFF08\u9ED8\u8BA4\u4E3A 10\n\u79D2\uFF09\uFF0C\u5219\u4F1A\u8F93\u51FA\u5BF9\u5E94\u544A\u8B66\u65E5\u5FD7\u3002"}),"\n",(0,r.jsxs)(n.p,{children:["\u6211\u4EEC\u53EF\u4EE5\u641C\u7D22\u65E5\u5FD7\u5173\u952E\u5B57 ",(0,r.jsx)(n.code,{children:"Lock held for"})," \u6765\u67E5\u770B\u662F\u5426\u5B58\u5728\u6162\u9501\u3002"]}),"\n",(0,r.jsx)(n.p,{children:"\u65E5\u5FD7\u5185\u5BB9\u793A\u4F8B\uFF08\u539F\u59CB\u65E5\u5FD7\u4E3A\u4E00\u884C\u6587\u672C\uFF09\uFF1A"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-log",children:"2024-08-12 16:38:51,004 INFO (mysql-nio-pool-0|242) [StreamEncoder.writeBytes():234] 2024-08-12 16:38:51  [ mysql-nio-pool-0:47482 ] - [ WARN ]  Thread ID: 242, Thread Name: mysql-nio-pool-0 - Lock held for 1923 ms, exceeding hold timeout of 1923 ms Thread stack trace:	at java.base/java.lang.Thread.getStackTrace(Thread.java:1610)\n	at org.apache.doris.common.lock.AbstractMonitoredLock.afterUnlock(AbstractMonitoredLock.java:59)\n	at org.apache.doris.common.lock.MonitoredReentrantLock.unlock(MonitoredReentrantLock.java:59)\n	at org.apache.doris.datasource.InternalCatalog.unlock(InternalCatalog.java:370)\n	at org.apache.doris.datasource.InternalCatalog.createDb(InternalCatalog.java:443)\n	at org.apache.doris.catalog.Env.createDb(Env.java:3150)\n	at org.apache.doris.qe.DdlExecutor.execute(DdlExecutor.java:168)\n	at org.apache.doris.qe.StmtExecutor.handleDdlStmt(StmtExecutor.java:3066)\n	at org.apache.doris.qe.StmtExecutor.executeByLegacy(StmtExecutor.java:1059)\n	at org.apache.doris.qe.StmtExecutor.execute(StmtExecutor.java:644)\n	at org.apache.doris.qe.StmtExecutor.queryRetry(StmtExecutor.java:562)\n	at org.apache.doris.qe.StmtExecutor.execute(StmtExecutor.java:552)\n	at org.apache.doris.qe.ConnectProcessor.executeQuery(ConnectProcessor.java:385)\n	at org.apache.doris.qe.ConnectProcessor.handleQuery(ConnectProcessor.java:237)\n	at org.apache.doris.qe.MysqlConnectProcessor.handleQuery(MysqlConnectProcessor.java:272)\n	at org.apache.doris.qe.MysqlConnectProcessor.dispatch(MysqlConnectProcessor.java:300)\n	at org.apache.doris.qe.MysqlConnectProcessor.processOnce(MysqlConnectProcessor.java:359)\n	at org.apache.doris.mysql.ReadListener.lambda$handleEvent$0(ReadListener.java:52)\n	at java.base/java.util.concurrent.ThreadPoolExecutor.runWorker(ThreadPoolExecutor.java:1136)\n	at java.base/java.util.concurrent.ThreadPoolExecutor$Worker.run(ThreadPoolExecutor.java:635)\n	at java.base/java.lang.Thread.run(Thread.java:833)\n\n"})}),"\n",(0,r.jsx)(n.h3,{id:"\u914D\u7F6E\u53C2\u6570-1",children:"\u914D\u7F6E\u53C2\u6570"}),"\n",(0,r.jsx)(n.p,{children:"fe.conf \u914D\u7F6E\u6587\u4EF6\u4E2D\u7684\u6162\u9501\u68C0\u6D4B\u76F8\u5173\u53C2\u6570\u5982\u4E0B\uFF1A"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"\u53C2\u6570\u540D"}),(0,r.jsx)(n.th,{children:"\u53C2\u6570\u8BF4\u660E"}),(0,r.jsx)(n.th,{children:"\u9ED8\u8BA4\u503C"})]})}),(0,r.jsx)(n.tbody,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"max_lock_hold_threshold_seconds"}),(0,r.jsx)(n.td,{children:"\u6162\u9501\u544A\u8B66\u9608\u503C\uFF0C\u5355\u4F4D\u4E3A\u79D2"}),(0,r.jsx)(n.td,{children:"10"})]})})]})]})}function u(e={}){let{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(i,{...e})}):i(e)}},250065:function(e,n,a){a.d(n,{Z:function(){return l},a:function(){return c}});var t=a(667294);let r={},o=t.createContext(r);function c(e){let n=t.useContext(o);return t.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:c(e.components),t.createElement(o.Provider,{value:n},e.children)}}}]);