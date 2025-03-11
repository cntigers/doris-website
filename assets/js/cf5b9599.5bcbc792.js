"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["649988"],{327485:function(e,n,s){s.r(n),s.d(n,{default:()=>p,frontMatter:()=>r,metadata:()=>t,assets:()=>o,toc:()=>c,contentTitle:()=>l});var t=JSON.parse('{"id":"install/preparation/os-checking","title":"OS Checking","description":"\x3c!--","source":"@site/versioned_docs/version-2.1/install/preparation/os-checking.md","sourceDirName":"install/preparation","slug":"/install/preparation/os-checking","permalink":"/docs/install/preparation/os-checking","draft":false,"unlisted":false,"tags":[],"version":"2.1","frontMatter":{"title":"OS Checking","language":"en"},"sidebar":"docs","previous":{"title":"Cluster Planning","permalink":"/docs/install/preparation/cluster-planning"},"next":{"title":"Deploy Integrated Storage Compute Cluster Manually","permalink":"/docs/install/deploy-manually/integrated-storage-compute-deploy-manually"}}'),a=s("785893"),i=s("250065");let r={title:"OS Checking",language:"en"},l=void 0,o={},c=[{value:"Disable Swap Partition",id:"disable-swap-partition",level:2},{value:"Disable Transparent Huge Pages",id:"disable-transparent-huge-pages",level:2},{value:"Ensure Sufficient Virtual Memory Area",id:"ensure-sufficient-virtual-memory-area",level:2},{value:"Disable CPU Power-Saving Mode",id:"disable-cpu-power-saving-mode",level:2},{value:"Reset New Connections on Network Overflow",id:"reset-new-connections-on-network-overflow",level:2},{value:"Open Doris-related Ports",id:"open-doris-related-ports",level:2},{value:"Increase System&#39;s Open File Descriptors Limit",id:"increase-systems-open-file-descriptors-limit",level:2},{value:"Ensure NTP Service is Installed on Cluster Deployment Machines",id:"ensure-ntp-service-is-installed-on-cluster-deployment-machines",level:2}];function d(e){let n={code:"code",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,i.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.p,{children:"When deploying Doris, ensure the following operating system configurations:"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:"Disable the swap partition"}),"\n",(0,a.jsx)(n.li,{children:"Disable transparent huge pages"}),"\n",(0,a.jsx)(n.li,{children:"Ensure the system has enough virtual memory space"}),"\n",(0,a.jsx)(n.li,{children:"Disable CPU power-saving mode"}),"\n",(0,a.jsx)(n.li,{children:"Ensure new network connections are reset on overflow"}),"\n",(0,a.jsx)(n.li,{children:"Ensure Doris-related ports are open or the firewall is disabled"}),"\n",(0,a.jsx)(n.li,{children:"Ensure the system allows a sufficient number of open file descriptors"}),"\n",(0,a.jsx)(n.li,{children:"Install and configure NTP service for clock synchronization"}),"\n"]}),"\n",(0,a.jsx)(n.h2,{id:"disable-swap-partition",children:"Disable Swap Partition"}),"\n",(0,a.jsx)(n.p,{children:"It is recommended to disable the swap partition when deploying Doris. The kernel may move memory data to the swap area when it detects memory pressure, but this can negatively impact Doris performance due to the kernel\u2019s limited understanding of application behavior."}),"\n",(0,a.jsx)(n.p,{children:"To disable swap temporarily (swap will be re-enabled after a restart):"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"swapoff -a\n"})}),"\n",(0,a.jsxs)(n.p,{children:["To permanently disable swap, edit ",(0,a.jsx)(n.code,{children:"/etc/fstab"})," and comment out the swap partition entry, then restart the machine:"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"# /etc/fstab\n# <file system>        <dir>         <type>    <options>             <dump> <pass>\ntmpfs                  /tmp          tmpfs     nodev,nosuid          0      0\n/dev/sda1              /             ext4      defaults,noatime      0      1\n# /dev/sda2              none          swap      defaults              0      0\n/dev/sda3              /home         ext4      defaults,noatime      0      2\n"})}),"\n",(0,a.jsx)(n.h2,{id:"disable-transparent-huge-pages",children:"Disable Transparent Huge Pages"}),"\n",(0,a.jsx)(n.p,{children:"In high-load, low-latency scenarios, disabling Transparent Huge Pages (THP) is recommended to avoid performance degradation and memory fragmentation, ensuring stable memory usage for Doris."}),"\n",(0,a.jsx)(n.p,{children:"Use the following commands to disable THP temporarily:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"echo madvise > /sys/kernel/mm/transparent_hugepage/enabled\necho madvise > /sys/kernel/mm/transparent_hugepage/defrag\n"})}),"\n",(0,a.jsxs)(n.p,{children:["To permanently disable THP, add the following commands to ",(0,a.jsx)(n.code,{children:"/etc/rc.d/rc.local"})," to ensure it takes effect after a restart:"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"cat >> /etc/rc.d/rc.local << EOF\n   echo madvise > /sys/kernel/mm/transparent_hugepage/enabled\n   echo madvise > /sys/kernel/mm/transparent_hugepage/defrag\nEOF\nchmod +x /etc/rc.d/rc.local\n"})}),"\n",(0,a.jsx)(n.h2,{id:"ensure-sufficient-virtual-memory-area",children:"Ensure Sufficient Virtual Memory Area"}),"\n",(0,a.jsx)(n.p,{children:"To allow Doris to handle large datasets, the system must have enough virtual memory space. Without adequate memory mapping, Doris may encounter errors like Too many open files during startup or runtime."}),"\n",(0,a.jsx)(n.p,{children:"You can permanently modify the virtual memory area to at least 2000000 with the following command, and it will take effect immediately:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"cat >> /etc/sysctl.conf << EOF\nvm.max_map_count = 2000000\nEOF\n\n# Take effect immediately\nsysctl -p\n"})}),"\n",(0,a.jsx)(n.h2,{id:"disable-cpu-power-saving-mode",children:"Disable CPU Power-Saving Mode"}),"\n",(0,a.jsx)(n.p,{children:"Disabling CPU power-saving mode ensures stable high performance during high load, preventing fluctuations and delays caused by reduced CPU frequency."}),"\n",(0,a.jsx)(n.p,{children:'Use the following command to set the CPU governor to "performance," disabling power-saving modes:'}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"echo 'performance' | sudo tee /sys/devices/system/cpu/cpu*/cpufreq/scaling_governor\n"})}),"\n",(0,a.jsx)(n.h2,{id:"reset-new-connections-on-network-overflow",children:"Reset New Connections on Network Overflow"}),"\n",(0,a.jsx)(n.p,{children:"Ensure that when TCP connection buffers overflow, new connections are reset immediately. This prevents buffer blocking during high load and improves responsiveness and stability."}),"\n",(0,a.jsx)(n.p,{children:"You can permanently configure the system to automatically reset new connections with the following commands, and it will take effect immediately:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"cat >> /etc/sysctl.conf << EOF\nnet.ipv4.tcp_abort_on_overflow=1\nEOF\n\n# Take effect immediately\nsysctl -p\n"})}),"\n",(0,a.jsx)(n.h2,{id:"open-doris-related-ports",children:"Open Doris-related Ports"}),"\n",(0,a.jsx)(n.p,{children:"If Doris-related ports are blocked, you can try disabling the firewall to verify whether it is the cause. If the firewall is the issue, open the relevant ports for Doris components."}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"sudo systemctl stop firewalld.service\nsudo systemctl disable firewalld.service\n"})}),"\n",(0,a.jsx)(n.h2,{id:"increase-systems-open-file-descriptors-limit",children:"Increase System's Open File Descriptors Limit"}),"\n",(0,a.jsx)(n.p,{children:"Since Doris manages a large number of files, you need to increase the system's file descriptor limit."}),"\n",(0,a.jsxs)(n.p,{children:["To change the maximum number of open files, add the following to ",(0,a.jsx)(n.code,{children:"/etc/security/limits.conf"}),":"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"vi /etc/security/limits.conf \n* soft nofile 1000000\n* hard nofile 1000000\n"})}),"\n",(0,a.jsx)(n.h2,{id:"ensure-ntp-service-is-installed-on-cluster-deployment-machines",children:"Ensure NTP Service is Installed on Cluster Deployment Machines"}),"\n",(0,a.jsx)(n.p,{children:"Doris requires the metadata's timestamp accuracy to be within 5000ms. To ensure consistent time across all nodes in the cluster and avoid metadata inconsistencies, you need to synchronize clocks across all machines using the NTP service."}),"\n",(0,a.jsx)(n.p,{children:"Use the following commands to start and enable the NTP service:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"sudo systemctl start ntpd.service\nsudo systemctl enable ntpd.service\n"})})]})}function p(e={}){let{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(d,{...e})}):d(e)}},250065:function(e,n,s){s.d(n,{Z:function(){return l},a:function(){return r}});var t=s(667294);let a={},i=t.createContext(a);function r(e){let n=t.useContext(i);return t.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:r(e.components),t.createElement(i.Provider,{value:n},e.children)}}}]);