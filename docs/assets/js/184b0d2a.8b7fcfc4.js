"use strict";(self.webpackChunktfcmt=self.webpackChunktfcmt||[]).push([[377],{3905:function(t,e,n){n.d(e,{Zo:function(){return u},kt:function(){return h}});var o=n(7294);function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function r(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,o)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?r(Object(n),!0).forEach((function(e){a(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function c(t,e){if(null==t)return{};var n,o,a=function(t,e){if(null==t)return{};var n,o,a={},r=Object.keys(t);for(o=0;o<r.length;o++)n=r[o],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);for(o=0;o<r.length;o++)n=r[o],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}var p=o.createContext({}),l=function(t){var e=o.useContext(p),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},u=function(t){var e=l(t.components);return o.createElement(p.Provider,{value:e},t.children)},m={inlineCode:"code",wrapper:function(t){var e=t.children;return o.createElement(o.Fragment,{},e)}},s=o.forwardRef((function(t,e){var n=t.components,a=t.mdxType,r=t.originalType,p=t.parentName,u=c(t,["components","mdxType","originalType","parentName"]),s=l(n),h=a,f=s["".concat(p,".").concat(h)]||s[h]||m[h]||r;return n?o.createElement(f,i(i({ref:e},u),{},{components:n})):o.createElement(f,i({ref:e},u))}));function h(t,e){var n=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var r=n.length,i=new Array(r);i[0]=s;var c={};for(var p in e)hasOwnProperty.call(e,p)&&(c[p]=e[p]);c.originalType=t,c.mdxType="string"==typeof t?t:a,i[1]=c;for(var l=2;l<r;l++)i[l]=n[l];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}s.displayName="MDXCreateElement"},1443:function(t,e,n){n.r(e),n.d(e,{assets:function(){return u},contentTitle:function(){return p},default:function(){return h},frontMatter:function(){return c},metadata:function(){return l},toc:function(){return m}});var o=n(7462),a=n(3366),r=(n(7294),n(3905)),i=["components"],c={sidebar_position:600},p="Patch `tfcmt plan` comment",l={unversionedId:"plan-patch",id:"plan-patch",title:"Patch `tfcmt plan` comment",description:"tfcmt >= v3.2.0",source:"@site/docs/plan-patch.md",sourceDirName:".",slug:"/plan-patch",permalink:"/tfcmt/plan-patch",editUrl:"https://github.com/suzuki-shunsuke/tfcmt-docs/edit/main/docs/plan-patch.md",tags:[],version:"current",sidebarPosition:600,frontMatter:{sidebar_position:600},sidebar:"tutorialSidebar",previous:{title:"Compared with tfnotify v0.7.0",permalink:"/tfcmt/compared-with-tfnotify"},next:{title:"Command Usage",permalink:"/tfcmt/usage"}},u={},m=[{value:"Motivation",id:"motivation",level:3},{value:"Trouble shooting",id:"trouble-shooting",level:3},{value:"\u26a0\ufe0f Note to use  tfcmt plan&#39;s patch option with github-comment hide",id:"\ufe0f-note-to-use--tfcmt-plans-patch-option-with-github-comment-hide",level:3}],s={toc:m};function h(t){var e=t.components,n=(0,a.Z)(t,i);return(0,r.kt)("wrapper",(0,o.Z)({},s,n,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"patch-tfcmt-plan-comment"},"Patch ",(0,r.kt)("inlineCode",{parentName:"h1"},"tfcmt plan")," comment"),(0,r.kt)("p",null,"tfcmt >= ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/suzuki-shunsuke/tfcmt/releases/tag/v3.2.0"},"v3.2.0")),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/suzuki-shunsuke/tfcmt/issues/199"},"#199")," ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/suzuki-shunsuke/tfcmt/issues/245"},"#245")," ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/suzuki-shunsuke/tfcmt/issues/248"},"#248")," ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/suzuki-shunsuke/tfcmt/issues/249"},"#249")),(0,r.kt)("p",null,"The option ",(0,r.kt)("inlineCode",{parentName:"p"},"-patch")," has been added to ",(0,r.kt)("inlineCode",{parentName:"p"},"tfcmt plan")," command."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-console"},"tfcmt plan -patch -- terraform plan -no-color\n")),(0,r.kt)("p",null,"And the configuration option ",(0,r.kt)("inlineCode",{parentName:"p"},"plan_patch")," has been added."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"plan_patch: true\n")),(0,r.kt)("p",null,"The command line option ",(0,r.kt)("inlineCode",{parentName:"p"},"-patch")," takes precedence over configuration file option ",(0,r.kt)("inlineCode",{parentName:"p"},"plan_patch"),"."),(0,r.kt)("p",null,"If you want to disable patching although ",(0,r.kt)("inlineCode",{parentName:"p"},"plan_patch")," is true, please set ",(0,r.kt)("inlineCode",{parentName:"p"},"-patch=false"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-console"},"$ tfcmt plan -patch=false -- terraform plan -no-color\n")),(0,r.kt)("h3",{id:"motivation"},"Motivation"),(0,r.kt)("p",null,"By patching the comment instead of creating a new comment, you can keep the pull request comments clean."),(0,r.kt)("h3",{id:"trouble-shooting"},"Trouble shooting"),(0,r.kt)("p",null,"If the comment isn't patched expectedly, please set ",(0,r.kt)("inlineCode",{parentName:"p"},"-log-level=debug"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-console"},"$ tfcmt -log-level=debug plan -patch -- terraform plan -no-color\n")),(0,r.kt)("h3",{id:"\ufe0f-note-to-use--tfcmt-plans-patch-option-with-github-comment-hide"},"\u26a0\ufe0f Note to use  tfcmt plan's patch option with github-comment hide"),(0,r.kt)("p",null,"If you hide comments by ",(0,r.kt)("a",{parentName:"p",href:"https://suzuki-shunsuke.github.io/github-comment/hide"},"github-comment hide")," and enable tfcmt plan's patch option,\nyou should be careful not to hide tfcmt plan's comments."),(0,r.kt)("p",null,"There are some ways to fix the problem."),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Stop using ",(0,r.kt)("inlineCode",{parentName:"li"},"github-comment hide")),(0,r.kt)("li",{parentName:"ol"},"Fix github-comment hide's condition and exclude tfcmt's comments from the target ofgithub-comment hide"),(0,r.kt)("li",{parentName:"ol"},"Run github-comment hide after tfcmt")))}h.isMDXComponent=!0}}]);