"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["492493"],{141835:function(e,t,n){n.d(t,{Ne:()=>C,wj:()=>s,cH:()=>j,iZ:()=>h,nO:()=>c,ci:()=>N,n4:()=>u});var r=n("785893"),l=n("667294"),a=n("285346"),i=n("478312");function s(){let e=(0,i.Z)(),t=e?.data?.blogMetadata;if(!t)throw Error("useBlogMetadata() can't be called on the current route because the blog metadata could not be found in route context");return t}let o=l.createContext(null);function u(e){let{children:t,content:n,isBlogPostPage:a=!1}=e,i=function(e){let{content:t,isBlogPostPage:n}=e;return(0,l.useMemo)(()=>({metadata:t.metadata,frontMatter:t.frontMatter,assets:t.assets,toc:t.toc,isBlogPostPage:n}),[t,n])}({content:n,isBlogPostPage:a});return(0,r.jsx)(o.Provider,{value:i,children:t})}function c(){let e=(0,l.useContext)(o);if(null===e)throw new a.i6("BlogPostProvider");return e}var m=n("904757"),d=n("402933");let f=e=>new Date(e).toISOString();function h(){let e=s(),{assets:t,metadata:n}=c(),{siteConfig:r}=(0,d.Z)(),{withBaseUrl:l}=(0,m.Cg)(),{date:a,title:i,description:o,frontMatter:u,lastUpdatedAt:h}=n,v=t.image??u.image,p=u.keywords??[],b=h?f(h):void 0,x=`${r.url}${n.permalink}`;return{"@context":"https://schema.org","@type":"BlogPosting","@id":x,mainEntityOfPage:x,url:x,headline:i,name:i,description:o,datePublished:a,...b?{dateModified:b}:{},...function(e){let t=e.map(g);return{author:1===t.length?t[0]:t}}(n.authors),...v?{image:function(e){let{imageUrl:t,caption:n}=e;return{"@type":"ImageObject","@id":t,url:t,contentUrl:t,caption:n}}({imageUrl:l(v,{absolute:!0}),caption:`title image for the blog post: ${i}`})}:{},...p?{keywords:p}:{},isPartOf:{"@type":"Blog","@id":`${r.url}${e.blogBasePath}`,name:e.blogTitle}}}function g(e){return{"@type":"Person",...e.name?{name:e.name}:{},...e.title?{description:e.title}:{},...e.url?{url:e.url}:{},...e.email?{email:e.email}:{},...e.imageURL?{image:e.imageURL}:{}}}var v=n("616550"),p=n("83012"),b=n("38341"),x=n("579246");function j(e){let{pathname:t}=(0,v.TH)();return(0,l.useMemo)(()=>e.filter(e=>!e.unlisted||!!(0,x.Mg)(e.permalink,t)),[e,t])}function N(e){let t=Object.entries((0,b.vM)(e,e=>`${new Date(e.date).getFullYear()}`));return t.reverse(),t}function C(e){let{items:t,ulClassName:n,liClassName:l,linkClassName:a,linkActiveClassName:i}=e;return(0,r.jsx)("ul",{className:n,children:t.map(e=>(0,r.jsx)("li",{className:l,children:(0,r.jsx)(p.Z,{isNavLink:!0,to:e.permalink,className:a,activeClassName:i,children:e.title})},e.permalink))})}},469825:function(e,t,n){n.d(t,{Z:()=>x});var r=n("785893"),l=n("667294"),a=n("854704"),i=n("74904"),s=n("96025"),o=n("141835"),u=n("30140"),c=n("134403");function m(e){let{year:t,yearGroupHeadingClassName:n,children:l}=e;return(0,r.jsxs)("div",{role:"group",children:[(0,r.jsx)(c.Z,{as:"h3",className:n,children:t}),l]})}let d=(0,l.memo)(function(e){let{items:t,yearGroupHeadingClassName:n,ListComponent:l}=e;if(!(0,u.L)().blog.sidebar.groupByYear)return(0,r.jsx)(l,{items:t});{let e=(0,o.ci)(t);return(0,r.jsx)(r.Fragment,{children:e.map(e=>{let[t,a]=e;return(0,r.jsx)(m,{year:t,yearGroupHeadingClassName:n,children:(0,r.jsx)(l,{items:a})},t)})})}}),f=e=>{let{items:t}=e;return(0,r.jsx)(o.Ne,{items:t,ulClassName:(0,i.Z)("sidebarItemList_Yudw","clean-list"),liClassName:"sidebarItem__DBe",linkClassName:"sidebarItemLink_mo7H",linkActiveClassName:"sidebarItemLinkActive_I1ZP"})},h=(0,l.memo)(function(e){let{sidebar:t}=e,n=(0,o.cH)(t.items);return(0,r.jsx)("aside",{className:"col col--3",children:(0,r.jsxs)("nav",{className:(0,i.Z)("sidebar_re4s","thin-scrollbar"),"aria-label":(0,s.I)({id:"theme.blog.sidebar.navAriaLabel",message:"Blog recent posts navigation",description:"The ARIA label for recent posts in the blog sidebar"}),children:[(0,r.jsx)("div",{className:(0,i.Z)("sidebarItemTitle_pO2u","margin-bottom--md"),children:t.title}),(0,r.jsx)(d,{items:n,ListComponent:f,yearGroupHeadingClassName:"yearGroupHeading_rMGB"})]})})});var g=n("111179");let v=e=>{let{items:t}=e;return(0,r.jsx)(o.Ne,{items:t,ulClassName:"menu__list",liClassName:"menu__list-item",linkClassName:"menu__link",linkActiveClassName:"menu__link--active"})};function p(e){let{sidebar:t}=e,n=(0,o.cH)(t.items);return(0,r.jsx)(d,{items:n,ListComponent:v,yearGroupHeadingClassName:"yearGroupHeading_QT03"})}let b=(0,l.memo)(function(e){return(0,r.jsx)(g.Zo,{component:p,props:e})});function x(e){let{sidebar:t}=e,n=(0,a.i)();return t?.items.length?"mobile"===n?(0,r.jsx)(b,{sidebar:t}):(0,r.jsx)(h,{sidebar:t}):null}},238813:function(e,t,n){n.d(t,{Z:()=>c});var r=n("785893");n("667294");var l=n("74904"),a=n("130202"),i=n("784681"),s=n("132322");function o(e){let{className:t}=e;return(0,r.jsx)(s.Z,{type:"caution",title:(0,r.jsx)(a.ht,{}),className:(0,l.Z)(t,i.k.common.draftBanner),children:(0,r.jsx)(a.xo,{})})}var u=n("915133");function c(e){let{metadata:t}=e,{unlisted:n,frontMatter:l}=t;return(0,r.jsxs)(r.Fragment,{children:[(n||l.unlisted)&&(0,r.jsx)(u.Z,{}),l.draft&&(0,r.jsx)(o,{})]})}},276365:function(e,t,n){n.d(t,{Z:()=>u});var r=n("785893"),l=n("667294"),a=n("30140");function i(e){let t=e.getBoundingClientRect();return t.top===t.bottom?i(e.parentNode):t}var s=n("83012");let o=l.memo(function e(t){let{toc:n,className:l,linkClassName:a,isChild:i}=t;return n.length?(0,r.jsx)("ul",{className:i?void 0:l,children:n.map(t=>(0,r.jsxs)("li",{children:[(0,r.jsx)(s.Z,{to:`#${t.id}`,className:a??void 0,dangerouslySetInnerHTML:{__html:t.value}}),(0,r.jsx)(e,{isChild:!0,toc:t.children,className:l,linkClassName:a})]},t.id))}):null});function u(e){let{toc:t,className:n="table-of-contents table-of-contents__left-border",linkClassName:s="table-of-contents__link",linkActiveClassName:u,minHeadingLevel:c,maxHeadingLevel:m,...d}=e,f=(0,a.L)(),h=c??f.tableOfContents.minHeadingLevel,g=m??f.tableOfContents.maxHeadingLevel,v=function(e){let{toc:t,minHeadingLevel:n,maxHeadingLevel:r}=e;return(0,l.useMemo)(()=>(function e(t){let{toc:n,minHeadingLevel:r,maxHeadingLevel:l}=t;return n.flatMap(t=>{let n=e({toc:t.children,minHeadingLevel:r,maxHeadingLevel:l});return t.level>=r&&t.level<=l?[{...t,children:n}]:n})})({toc:function(e){let t=e.map(e=>({...e,parentIndex:-1,children:[]})),n=Array(7).fill(-1);t.forEach((e,t)=>{let r=n.slice(2,e.level);e.parentIndex=Math.max(...r),n[e.level]=t});let r=[];return t.forEach(e=>{let{parentIndex:n,...l}=e;n>=0?t[n].children.push(l):r.push(l)}),r}(t),minHeadingLevel:n,maxHeadingLevel:r}),[t,n,r])}({toc:t,minHeadingLevel:h,maxHeadingLevel:g});return!function(e){let t=(0,l.useRef)(void 0),n=function(){let e=(0,l.useRef)(0),{navbar:{hideOnScroll:t}}=(0,a.L)();return(0,l.useEffect)(()=>{e.current=t?0:document.querySelector(".navbar").clientHeight},[t]),e}();(0,l.useEffect)(()=>{if(!e)return()=>{};let{linkClassName:r,linkActiveClassName:l,minHeadingLevel:a,maxHeadingLevel:s}=e;function o(){let e=Array.from(document.getElementsByClassName(r)),o=function(e,t){let{anchorTopOffset:n}=t,r=e.find(e=>i(e).top>=n);if(r){var l;return(l=i(r)).top>0&&l.bottom<window.innerHeight/2?r:e[e.indexOf(r)-1]??null}return e[e.length-1]??null}(function(e){let{minHeadingLevel:t,maxHeadingLevel:n}=e,r=[];for(let e=t;e<=n;e+=1)r.push(`h${e}.anchor`);return Array.from(document.querySelectorAll(r.join()))}({minHeadingLevel:a,maxHeadingLevel:s}),{anchorTopOffset:n.current}),u=e.find(e=>o&&o.id===decodeURIComponent(e.href.substring(e.href.indexOf("#")+1)));e.forEach(e=>{e===u?(t.current&&t.current!==e&&t.current.classList.remove(l),e.classList.add(l),t.current=e):e.classList.remove(l)})}return document.addEventListener("scroll",o),document.addEventListener("resize",o),o(),()=>{document.removeEventListener("scroll",o),document.removeEventListener("resize",o)}},[e,n])}((0,l.useMemo)(()=>{if(s&&u)return{linkClassName:s,linkActiveClassName:u,minHeadingLevel:h,maxHeadingLevel:g}},[s,u,h,g])),(0,r.jsx)(o,{toc:v,className:n,linkClassName:s,...d})}}}]);