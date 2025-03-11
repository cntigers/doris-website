"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["134445"],{338654:function(e,n,r){r.r(n),r.d(n,{default:()=>h,frontMatter:()=>l,metadata:()=>i,assets:()=>a,toc:()=>d,contentTitle:()=>s});var i=JSON.parse('{"id":"developer-guide/mac-dev/dev-prepare","title":"Dev & Debug prepare on Mac","description":"\x3c!--","source":"@site/community/developer-guide/mac-dev/dev-prepare.md","sourceDirName":"developer-guide/mac-dev","slug":"/developer-guide/mac-dev/dev-prepare","permalink":"/community/developer-guide/mac-dev/dev-prepare","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"title":"Dev & Debug prepare on Mac","language":"en"},"sidebar":"community","previous":{"title":"Development and Debugging of Apache Doris BE -- Clion","permalink":"/community/developer-guide/be-clion-dev"},"next":{"title":"Setting Up Dev Env on Mac for Doris BE - CLion","permalink":"/community/developer-guide/mac-dev/be-clion-dev"}}'),o=r("785893"),t=r("250065");let l={title:"Dev & Debug prepare on Mac",language:"en"},s=void 0,a={},d=[{value:"Install environment dependency",id:"install-environment-dependency",level:2},{value:"Install thrift",id:"install-thrift",level:2},{value:"pull your own code",id:"pull-your-own-code",level:2},{value:"Download Doris compilation dependencies",id:"download-doris-compilation-dependencies",level:2},{value:"Set <code>file descriptors</code>",id:"set-file-descriptors",level:2},{value:"compile Doris",id:"compile-doris",level:2},{value:"Compilation Error with Higher Version of Node.js",id:"compilation-error-with-higher-version-of-nodejs",level:2},{value:"Configure Debug environment",id:"configure-debug-environment",level:2},{value:"Start Debugging with IDE",id:"start-debugging-with-ide",level:2}];function c(e){let n={a:"a",code:"code",em:"em",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,t.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.h2,{id:"install-environment-dependency",children:"Install environment dependency"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-shell",children:"brew install automake autoconf libtool pkg-config texinfo coreutils gnu-getopt \\\npython@3 cmake ninja ccache bison byacc gettext wget pcre maven llvm@16 openjdk@17 npm\n"})}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.em,{children:"The version of jdk installed using brew is 17, because on macOS, the arm64 version of brew does not have version 8 of jdk by default"}),"\n",(0,o.jsx)(n.em,{children:"Currently, Doris only supports jdk8 and jdk17"})]}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.strong,{children:"Dependency description:"})}),"\n",(0,o.jsxs)(n.ol,{children:["\n",(0,o.jsxs)(n.li,{children:["Java, Maven, etc. can be downloaded separately for easy management\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["Mac recommend ",(0,o.jsx)(n.a,{href:"https://www.azul.com/downloads/?version=java-8-lts&os=macos&package=jdk#zulu",children:"Zulu JDK8"})]}),"\n",(0,o.jsxs)(n.li,{children:["Maven Download from ",(0,o.jsx)(n.a,{href:"https://maven.apache.org/download.cgi",children:"Maven website"})," is ok\n- Self-downloaded Java and Maven need to configure environment variables"]}),"\n"]}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["Other dependent environment variables (example for Apple Silicon Macs)\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["llvm: ",(0,o.jsx)(n.code,{children:'export PATH="/opt/homebrew/opt/llvm/bin:$PATH"'})]}),"\n",(0,o.jsxs)(n.li,{children:["bison: ",(0,o.jsx)(n.code,{children:'export PATH = "/opt/homebrew/opt/bison/bin:$PATH'})]}),"\n",(0,o.jsxs)(n.li,{children:["texinfo: ",(0,o.jsx)(n.code,{children:'export PATH = "/opt/homebrew/opt/texinfo/bin:$PATH'})]}),"\n",(0,o.jsxs)(n.li,{children:["python: ",(0,o.jsx)(n.code,{children:"ln -s -f /opt/homebrew/bin/python3 /opt/homebrew/bin/python"})]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,o.jsx)(n.h2,{id:"install-thrift",children:"Install thrift"}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.strong,{children:"Note\uFF1A"})," Thrift needs to be installed only when debugging FE only. When debugging BE and FE at the same time, the three-party library of BE contains thrift"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-shell",children:"MacOS: \n    1. Download\uFF1A`brew install thrift@0.16.0`\n    2. Create a soft link\uFF1A \n        `mkdir -p ./thirdparty/installed/bin`\n        # Apple Silicon CPU macOS\n        `ln -s /opt/homebrew/Cellar/thrift@0.16.0/0.16.0/bin/thrift ./thirdparty/installed/bin/thrift`\n        # Intel CPU macOS\n        `ln -s /usr/local/Cellar/thrift@0.16.0/0.16.0/bin/thrift ./thirdparty/installed/bin/thrift`\n    \nNote\uFF1AmacOS implement `brew install thrift@0.16.0` it may report an error that the version cannot be found. The solution is as follows, execute in the terminal:\n    1. `brew tap homebrew/core --force`\n    2. `brew tap-new $USER/local-tap`\n    3. `brew extract --version='0.16.0' thrift $USER/local-tap`\n    4. `brew install thrift@0.16.0`\nreference link: `https://gist.github.com/tonydeng/02e571f273d6cce4230dc8d5f394493c`\n"})}),"\n",(0,o.jsx)(n.h2,{id:"pull-your-own-code",children:"pull your own code"}),"\n",(0,o.jsxs)(n.ol,{children:["\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsx)(n.p,{children:"pull code"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-shell",children:"cd ~\nmkdir DorisDev\ncd DorisDev\ngit clone https://github.com/GitHubID/doris.git\n"})}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsx)(n.p,{children:"set environment variables"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-shell",children:"export DORIS_HOME=~/DorisDev/doris\nexport PATH=$DORIS_HOME/bin:$PATH\n"})}),"\n"]}),"\n"]}),"\n",(0,o.jsx)(n.h2,{id:"download-doris-compilation-dependencies",children:"Download Doris compilation dependencies"}),"\n",(0,o.jsxs)(n.ol,{children:["\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:["The ",(0,o.jsx)(n.a,{href:"https://github.com/apache/doris-thirdparty/releases/tag/automation",children:"Apache Doris Third Party Prebuilt"})," page contains the source code of all third-party libraries. You can download ",(0,o.jsx)(n.a,{href:"https://github.com/apache/doris-thirdparty/releases/download/automation/doris-thirdparty-source.tgz",children:"doris-thirdparty-source.tgz"})," to obtain them."]}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:["You can download the ",(0,o.jsx)(n.em,{children:(0,o.jsx)(n.strong,{children:"precompiled"})})," third party library from the ",(0,o.jsx)(n.a,{href:"https://github.com/apache/doris-thirdparty/releases/tag/automation",children:"Apache Doris Third Party Prebuilt"})," page. You may refer to the following commands:"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-shell",children:"cd thirdparty\nrm -rf installed\n\n# Intel chips\ncurl -L https://github.com/apache/doris-thirdparty/releases/download/automation/doris-thirdparty-prebuilt-darwin-x86_64.tar.xz \\\n    -o - | tar -Jxf -\n\n# Apple Silicon chips\ncurl -L https://github.com/apache/doris-thirdparty/releases/download/automation/doris-thirdparty-prebuilt-darwin-arm64.tar.xz \\\n    -o - | tar -Jxf -\n\n# Make sure that protoc and thrift can run successfully.\ncd installed/bin\n\n./protoc --version\n./thrift --version\n"})}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:["When running ",(0,o.jsx)(n.code,{children:"protoc"})," or ",(0,o.jsx)(n.code,{children:"thrift"}),", you may meet an error which says ",(0,o.jsx)(n.strong,{children:"the app can not be opened because the developer cannot be verified"}),". Go to ",(0,o.jsx)(n.code,{children:"Security & Privacy"}),". Click the ",(0,o.jsx)(n.code,{children:"Open Anyway"})," button in the ",(0,o.jsx)(n.code,{children:"General"})," pane to confirm your intent to open the app. See ",(0,o.jsx)(n.a,{href:"https://support.apple.com/en-us/HT202491",children:"https://support.apple.com/en-us/HT202491"}),"."]}),"\n"]}),"\n"]}),"\n",(0,o.jsxs)(n.h2,{id:"set-file-descriptors",children:["Set ",(0,o.jsx)(n.code,{children:"file descriptors"})]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-shell",children:"# bash\necho 'ulimit -n 65536' >>~/.bashrc\n    \n# zsh\necho 'ulimit -n 65536' >>~/.zshrc\n"})}),"\n",(0,o.jsx)(n.h2,{id:"compile-doris",children:"compile Doris"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-shell",children:"cd $DORIS_HOME\nsh build.sh\n"})}),"\n",(0,o.jsx)(n.h2,{id:"compilation-error-with-higher-version-of-nodejs",children:"Compilation Error with Higher Version of Node.js"}),"\n",(0,o.jsx)(n.p,{children:"During the compilation process, errors may occur due to a higher version of Node.js."}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["opensslErrorStack: [ 'error:03000086:digital envelope routines::initialization error' ]\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:"library: 'digital envelope routines'"}),"\n",(0,o.jsx)(n.li,{children:"reason: 'unsupported'"}),"\n",(0,o.jsx)(n.li,{children:"code: 'ERR_OSSL_EVP_UNSUPPORTED'"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,o.jsxs)(n.p,{children:["For more information and a possible solution, you can refer to this ",(0,o.jsx)(n.a,{href:"https://stackoverflow.com/questions/74726224/opensslerrorstack-error03000086digital-envelope-routinesinitialization-e",children:"Stack Overflow post"}),"."]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-shell",children:"## Instruct Node.js to use an older version of the OpenSSL provider.\nexport NODE_OPTIONS=--openssl-legacy-provider\n"})}),"\n",(0,o.jsx)(n.h2,{id:"configure-debug-environment",children:"Configure Debug environment"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-shell",children:"# cp out the compiled package\n    \ncp -r output ../doris-run\n    \n# Configure FE/BE's conf\n1\u3001IP\u3001directory\n2\u3001BE additional configuration min_file_descriptor_number = 10000\n"})}),"\n",(0,o.jsx)(n.h2,{id:"start-debugging-with-ide",children:"Start Debugging with IDE"}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.a,{href:"/community/developer-guide/mac-dev/be-clion-dev",children:"CLion Debug BE On Mac"})}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.a,{href:"/community/developer-guide/mac-dev/fe-idea-dev",children:"IntelliJ IDEA Debug FE On Mac"})})]})}function h(e={}){let{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(c,{...e})}):c(e)}},250065:function(e,n,r){r.d(n,{Z:function(){return s},a:function(){return l}});var i=r(667294);let o={},t=i.createContext(o);function l(e){let n=i.useContext(t);return i.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:l(e.components),i.createElement(t.Provider,{value:n},e.children)}}}]);