"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["964406"],{621521:function(e,n,s){s.r(n),s.d(n,{default:()=>p,frontMatter:()=>a,metadata:()=>l,assets:()=>t,toc:()=>d,contentTitle:()=>c});var l=JSON.parse('{"id":"install/preparation/os-checking","title":"\u64CD\u4F5C\u7CFB\u7EDF\u68C0\u67E5","description":"\x3c!--","source":"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/install/preparation/os-checking.md","sourceDirName":"install/preparation","slug":"/install/preparation/os-checking","permalink":"/zh-CN/docs/dev/install/preparation/os-checking","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"title":"\u64CD\u4F5C\u7CFB\u7EDF\u68C0\u67E5","language":"zh-CN"},"sidebar":"docs","previous":{"title":"\u96C6\u7FA4\u89C4\u5212","permalink":"/zh-CN/docs/dev/install/preparation/cluster-planning"},"next":{"title":"\u624B\u52A8\u90E8\u7F72\u5B58\u7B97\u4E00\u4F53\u96C6\u7FA4","permalink":"/zh-CN/docs/dev/install/deploy-manually/integrated-storage-compute-deploy-manually"}}'),i=s("785893"),r=s("250065");let a={title:"\u64CD\u4F5C\u7CFB\u7EDF\u68C0\u67E5",language:"zh-CN"},c=void 0,t={},d=[{value:"\u5173\u95ED swap \u5206\u533A",id:"\u5173\u95ED-swap-\u5206\u533A",level:2},{value:"\u5173\u95ED\u7CFB\u7EDF\u900F\u660E\u5927\u9875",id:"\u5173\u95ED\u7CFB\u7EDF\u900F\u660E\u5927\u9875",level:2},{value:"\u589E\u52A0\u865A\u62DF\u5185\u5B58\u533A\u57DF",id:"\u589E\u52A0\u865A\u62DF\u5185\u5B58\u533A\u57DF",level:2},{value:"\u7981\u7528 CPU \u7701\u7535\u6A21\u5F0F",id:"\u7981\u7528-cpu-\u7701\u7535\u6A21\u5F0F",level:2},{value:"\u7F51\u7EDC\u8FDE\u63A5\u6EA2\u51FA\u65F6\u81EA\u52A8\u91CD\u7F6E\u65B0\u8FDE\u63A5",id:"\u7F51\u7EDC\u8FDE\u63A5\u6EA2\u51FA\u65F6\u81EA\u52A8\u91CD\u7F6E\u65B0\u8FDE\u63A5",level:2},{value:"\u76F8\u5173\u7AEF\u53E3\u7545\u901A",id:"\u76F8\u5173\u7AEF\u53E3\u7545\u901A",level:2},{value:"\u589E\u52A0\u7CFB\u7EDF\u7684\u6700\u5927\u6587\u4EF6\u53E5\u67C4\u6570",id:"\u589E\u52A0\u7CFB\u7EDF\u7684\u6700\u5927\u6587\u4EF6\u53E5\u67C4\u6570",level:2},{value:"\u5B89\u88C5\u5E76\u914D\u7F6E NTP \u670D\u52A1",id:"\u5B89\u88C5\u5E76\u914D\u7F6E-ntp-\u670D\u52A1",level:2}];function o(e){let n={code:"code",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,r.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.p,{children:"\u5728\u90E8\u7F72 Doris \u65F6\uFF0C\u9700\u8981\u5BF9\u4EE5\u4E0B\u64CD\u4F5C\u7CFB\u7EDF\u9879\u8FDB\u884C\u68C0\u67E5\uFF1A"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"\u786E\u4FDD\u5173\u95ED swap \u5206\u533A"}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"\u786E\u4FDD\u7CFB\u7EDF\u5173\u95ED\u900F\u660E\u5927\u9875"}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"\u786E\u4FDD\u7CFB\u7EDF\u6709\u8DB3\u591F\u5927\u7684\u865A\u62DF\u5185\u5B58\u533A\u57DF"}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"\u786E\u4FDD CPU \u4E0D\u4F7F\u7528\u7701\u7535\u6A21\u5F0F"}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"\u786E\u4FDD\u7F51\u7EDC\u8FDE\u63A5\u6EA2\u51FA\u65F6\u81EA\u52A8\u91CD\u7F6E\u65B0\u8FDE\u63A5"}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"\u786E\u4FDD Doris \u76F8\u5173\u7AEF\u53E3\u7545\u901A\u6216\u5173\u95ED\u7CFB\u7EDF\u9632\u706B\u5899"}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"\u786E\u4FDD\u7CFB\u7EDF\u6709\u8DB3\u591F\u5927\u7684\u6253\u5F00\u6587\u4EF6\u53E5\u67C4\u6570"}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"\u786E\u5B9A\u90E8\u7F72\u96C6\u7FA4\u673A\u5668\u5B89\u88C5 NTP \u670D\u52A1"}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"\u5173\u95ED-swap-\u5206\u533A",children:"\u5173\u95ED swap \u5206\u533A"}),"\n",(0,i.jsx)(n.p,{children:"\u5728\u90E8\u7F72 Doris \u65F6\uFF0C\u5EFA\u8BAE\u5173\u95ED swap \u5206\u533A\u3002swap \u5206\u533A\u662F\u5185\u6838\u53D1\u73B0\u5185\u5B58\u7D27\u5F20\u65F6\uFF0C\u4F1A\u6309\u7167\u81EA\u5DF1\u7684\u7B56\u7565\u5C06\u90E8\u5206\u5185\u5B58\u6570\u636E\u79FB\u52A8\u5230\u914D\u7F6E\u7684 swap \u5206\u533A\uFF0C\u7531\u4E8E\u5185\u6838\u7B56\u7565\u4E0D\u80FD\u5145\u5206\u4E86\u89E3\u5E94\u7528\u7684\u884C\u4E3A\uFF0C\u4F1A\u5BF9 Doris \u6027\u80FD\u9020\u6210\u8F83\u5927\u5F71\u54CD\u3002\u6240\u4EE5\u5EFA\u8BAE\u5173\u95ED\u3002"}),"\n",(0,i.jsx)(n.p,{children:"\u901A\u8FC7\u4EE5\u4E0B\u547D\u4EE4\u53EF\u4EE5\u4E34\u65F6\u6216\u8005\u6C38\u4E45\u5173\u95ED\u3002"}),"\n",(0,i.jsx)(n.p,{children:"\u4E34\u65F6\u5173\u95ED\uFF0C\u4E0B\u6B21\u673A\u5668\u542F\u52A8\u65F6\uFF0Cswap \u8FD8\u4F1A\u88AB\u6253\u5F00\u3002"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"swapoff -a\n"})}),"\n",(0,i.jsxs)(n.p,{children:["\u6C38\u4E45\u5173\u95ED\uFF0C\u4F7F\u7528 Linux root \u8D26\u6237\uFF0C\u6CE8\u91CA\u6389 ",(0,i.jsx)(n.code,{children:"/etc/fstab"})," \u4E2D\u7684 swap \u5206\u533A\uFF0C\u91CD\u542F\u5373\u53EF\u5F7B\u5E95\u5173\u95ED swap \u5206\u533A\u3002"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"# /etc/fstab\n# <file system>        <dir>         <type>    <options>             <dump> <pass>\ntmpfs                  /tmp          tmpfs     nodev,nosuid          0      0\n/dev/sda1              /             ext4      defaults,noatime      0      1\n# /dev/sda2              none          swap      defaults              0      0\n/dev/sda3              /home         ext4      defaults,noatime      0      2\n"})}),"\n",(0,i.jsx)(n.h2,{id:"\u5173\u95ED\u7CFB\u7EDF\u900F\u660E\u5927\u9875",children:"\u5173\u95ED\u7CFB\u7EDF\u900F\u660E\u5927\u9875"}),"\n",(0,i.jsx)(n.p,{children:"\u5728\u9AD8\u8D1F\u8F7D\u4F4E\u5EF6\u8FDF\u7684\u573A\u666F\u4E2D\uFF0C\u5EFA\u8BAE\u5173\u95ED\u64CD\u4F5C\u7CFB\u7EDF\u900F\u660E\u5927\u9875\uFF08Transparent Huge Pages, THP\uFF09\uFF0C\u907F\u514D\u5176\u5E26\u6765\u7684\u6027\u80FD\u6CE2\u52A8\u548C\u5185\u5B58\u788E\u7247\u95EE\u9898\uFF0C\u786E\u4FDD Doris \u80FD\u591F\u7A33\u5B9A\u9AD8\u6548\u5730\u4F7F\u7528\u5185\u5B58\u3002"}),"\n",(0,i.jsx)(n.p,{children:"\u4F7F\u7528\u4EE5\u4E0B\u547D\u4EE4\u4E34\u65F6\u5173\u95ED\u900F\u660E\u5927\u9875\uFF1A"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"echo madvise > /sys/kernel/mm/transparent_hugepage/enabled\necho madvise > /sys/kernel/mm/transparent_hugepage/defrag\n"})}),"\n",(0,i.jsx)(n.p,{children:"\u5982\u679C\u9700\u8981\u6C38\u4E45\u5173\u95ED\u900F\u660E\u5927\u9875\uFF0C\u53EF\u4EE5\u4F7F\u7528\u4EE5\u4E0B\u547D\u4EE4\uFF0C\u5728\u4E0B\u4E00\u6B21\u5BBF\u4E3B\u673A\u91CD\u542F\u540E\u751F\u6548\uFF1A"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"cat >> /etc/rc.d/rc.local << EOF\n   echo madvise > /sys/kernel/mm/transparent_hugepage/enabled\n   echo madvise > /sys/kernel/mm/transparent_hugepage/defrag\nEOF\nchmod +x /etc/rc.d/rc.local\n"})}),"\n",(0,i.jsx)(n.h2,{id:"\u589E\u52A0\u865A\u62DF\u5185\u5B58\u533A\u57DF",children:"\u589E\u52A0\u865A\u62DF\u5185\u5B58\u533A\u57DF"}),"\n",(0,i.jsxs)(n.p,{children:["\u4E3A\u4E86\u4FDD\u8BC1 Doris \u6709\u8DB3\u591F\u7684\u5185\u5B58\u6620\u5C04\u533A\u57DF\u6765\u5904\u7406\u5927\u91CF\u6570\u636E\uFF0C\u9700\u8981\u4FEE\u6539 VMA\uFF08\u865A\u62DF\u5185\u5B58\u533A\u57DF\uFF09\u3002\u5982\u679C\u6CA1\u6709\u8DB3\u591F\u7684\u5185\u5B58\u6620\u5C04\u533A\u57DF\uFF0CDoris \u5728\u542F\u52A8\u6216\u8FD0\u884C\u65F6\u53EF\u80FD\u4F1A\u9047\u5230 ",(0,i.jsx)(n.code,{children:"Too many open files"})," \u6216\u7C7B\u4F3C\u7684\u9519\u8BEF\u3002"]}),"\n",(0,i.jsx)(n.p,{children:"\u901A\u8FC7\u4EE5\u4E0B\u547D\u4EE4\u53EF\u4EE5\u6C38\u4E45\u4FEE\u6539\u865A\u62DF\u5185\u5B58\u533A\u57DF\u81F3\u5C11\u4E3A 2000000\uFF0C\u5E76\u7ACB\u5373\u751F\u6548\uFF1A"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"cat >> /etc/sysctl.conf << EOF\nvm.max_map_count = 2000000\nEOF\n\n# Take effect immediately\nsysctl -p\n"})}),"\n",(0,i.jsx)(n.h2,{id:"\u7981\u7528-cpu-\u7701\u7535\u6A21\u5F0F",children:"\u7981\u7528 CPU \u7701\u7535\u6A21\u5F0F"}),"\n",(0,i.jsx)(n.p,{children:"\u5728\u90E8\u7F72 Doris \u65F6\u68C0\u4FEE\u5173\u95ED CPU \u7684\u7701\u7535\u6A21\u5F0F\uFF0C\u4EE5\u786E\u4FDD Doris \u5728\u9AD8\u8D1F\u8F7D\u65F6\u63D0\u4F9B\u7A33\u5B9A\u7684\u9AD8\u6027\u80FD\uFF0C\u907F\u514D\u7531\u4E8E CPU \u9891\u7387\u964D\u4F4E\u5BFC\u81F4\u7684\u6027\u80FD\u6CE2\u52A8\u3001\u54CD\u5E94\u5EF6\u8FDF\u548C\u7CFB\u7EDF\u74F6\u9888\uFF0C\u63D0\u9AD8 Doris \u7684\u53EF\u9760\u6027\u548C\u541E\u5410\u91CF\u3002\u5982\u679C\u60A8\u7684 CPU \u4E0D\u652F\u6301 Scaling Governor\uFF0C\u53EF\u4EE5\u8DF3\u8FC7\u6B64\u9879\u914D\u7F6E\u3002"}),"\n",(0,i.jsx)(n.p,{children:"\u901A\u8FC7\u4EE5\u4E0B\u547D\u4EE4\u53EF\u4EE5\u5173\u95ED CPU \u7701\u7535\u6A21\u5F0F\uFF1A"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"echo 'performance' | sudo tee /sys/devices/system/cpu/cpu*/cpufreq/scaling_governor\n"})}),"\n",(0,i.jsx)(n.h2,{id:"\u7F51\u7EDC\u8FDE\u63A5\u6EA2\u51FA\u65F6\u81EA\u52A8\u91CD\u7F6E\u65B0\u8FDE\u63A5",children:"\u7F51\u7EDC\u8FDE\u63A5\u6EA2\u51FA\u65F6\u81EA\u52A8\u91CD\u7F6E\u65B0\u8FDE\u63A5"}),"\n",(0,i.jsx)(n.p,{children:"\u5728\u90E8\u7F72 Doris \u65F6\uFF0C\u9700\u8981\u786E\u4FDD\u5728 TCP \u8FDE\u63A5\u7684\u53D1\u9001\u7F13\u51B2\u533A\u6EA2\u51FA\u65F6\uFF0C\u8FDE\u63A5\u4F1A\u88AB\u7ACB\u5373\u4E2D\u65AD\uFF0C\u4EE5\u9632\u6B62 Doris \u5728\u9AD8\u8D1F\u8F7D\u6216\u9AD8\u5E76\u53D1\u60C5\u51B5\u4E0B\u51FA\u73B0\u7F13\u51B2\u533A\u963B\u585E\uFF0C\u907F\u514D\u8FDE\u63A5\u88AB\u957F\u65F6\u95F4\u6302\u8D77\uFF0C\u4ECE\u800C\u63D0\u9AD8\u7CFB\u7EDF\u7684\u54CD\u5E94\u6027\u548C\u7A33\u5B9A\u6027\u3002"}),"\n",(0,i.jsx)(n.p,{children:"\u901A\u8FC7\u4EE5\u4E0B\u547D\u4EE4\u53EF\u4EE5\u6C38\u4E45\u8BBE\u7F6E\u7CFB\u7EDF\u81EA\u52A8\u91CD\u7F6E\u65B0\u94FE\u63A5\uFF0C\u5E76\u7ACB\u5373\u751F\u6548\uFF1A"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"cat >> /etc/sysctl.conf << EOF\nnet.ipv4.tcp_abort_on_overflow=1\nEOF\n\n# Take effect immediately\nsysctl -p\n"})}),"\n",(0,i.jsx)(n.h2,{id:"\u76F8\u5173\u7AEF\u53E3\u7545\u901A",children:"\u76F8\u5173\u7AEF\u53E3\u7545\u901A"}),"\n",(0,i.jsx)(n.p,{children:"\u5982\u679C\u53D1\u73B0\u7AEF\u53E3\u4E0D\u901A\uFF0C\u53EF\u4EE5\u8BD5\u7740\u5173\u95ED\u9632\u706B\u5899\uFF0C\u786E\u8BA4\u662F\u5426\u662F\u672C\u673A\u9632\u706B\u5899\u9020\u6210\u3002\u5982\u679C\u662F\u9632\u706B\u5899\u9020\u6210\uFF0C\u53EF\u4EE5\u6839\u636E\u914D\u7F6E\u7684 Doris \u5404\u7EC4\u4EF6\u7AEF\u53E3\u6253\u5F00\u76F8\u5E94\u7684\u7AEF\u53E3\u901A\u4FE1\u3002"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"sudo systemctl stop firewalld.service\nsudo systemctl disable firewalld.service\n"})}),"\n",(0,i.jsx)(n.h2,{id:"\u589E\u52A0\u7CFB\u7EDF\u7684\u6700\u5927\u6587\u4EF6\u53E5\u67C4\u6570",children:"\u589E\u52A0\u7CFB\u7EDF\u7684\u6700\u5927\u6587\u4EF6\u53E5\u67C4\u6570"}),"\n",(0,i.jsx)(n.p,{children:"Doris \u7531\u4E8E\u4F9D\u8D56\u5927\u91CF\u6587\u4EF6\u6765\u7BA1\u7406\u8868\u6570\u636E\uFF0C\u6240\u4EE5\u9700\u8981\u5C06\u7CFB\u7EDF\u5BF9\u7A0B\u5E8F\u6253\u5F00\u6587\u4EF6\u6570\u7684\u9650\u5236\u8C03\u9AD8\u3002"}),"\n",(0,i.jsx)(n.p,{children:"\u901A\u8FC7\u4EE5\u4E0B\u547D\u4EE4\u53EF\u4EE5\u8C03\u6574\u6700\u5927\u6587\u4EF6\u53E5\u67C4\u6570\u3002\u5728\u8C03\u6574\u540E\uFF0C\u9700\u8981\u91CD\u542F\u4F1A\u8BDD\u4EE5\u751F\u6548\u914D\u7F6E\uFF1A"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"vi /etc/security/limits.conf \n* soft nofile 1000000\n* hard nofile 1000000\n"})}),"\n",(0,i.jsx)(n.h2,{id:"\u5B89\u88C5\u5E76\u914D\u7F6E-ntp-\u670D\u52A1",children:"\u5B89\u88C5\u5E76\u914D\u7F6E NTP \u670D\u52A1"}),"\n",(0,i.jsx)(n.p,{children:"Doris \u7684\u5143\u6570\u636E\u8981\u6C42\u65F6\u95F4\u7CBE\u5EA6\u8981\u5C0F\u4E8E 5000ms\uFF0C\u6240\u4EE5\u6240\u6709\u96C6\u7FA4\u6240\u6709\u673A\u5668\u8981\u8FDB\u884C\u65F6\u949F\u540C\u6B65\uFF0C\u907F\u514D\u56E0\u4E3A\u65F6\u949F\u95EE\u9898\u5F15\u53D1\u7684\u5143\u6570\u636E\u4E0D\u4E00\u81F4\u5BFC\u81F4\u670D\u52A1\u51FA\u73B0\u5F02\u5E38\u3002"}),"\n",(0,i.jsx)(n.p,{children:"\u901A\u5E38\u60C5\u51B5\u4E0B\uFF0C\u53EF\u4EE5\u901A\u8FC7\u914D\u7F6E NTP \u670D\u52A1\u4FDD\u8BC1\u5404\u8282\u70B9\u65F6\u949F\u540C\u6B65\u3002"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"sudo systemctl start_ntpd.service\nsudo systemctl enable_ntpd.service\n"})})]})}function p(e={}){let{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(o,{...e})}):o(e)}},250065:function(e,n,s){s.d(n,{Z:function(){return c},a:function(){return a}});var l=s(667294);let i={},r=l.createContext(i);function a(e){let n=l.useContext(r);return l.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:a(e.components),l.createElement(r.Provider,{value:n},e.children)}}}]);