"use strict";(self.webpackChunktfcmt=self.webpackChunktfcmt||[]).push([[827],{3905:(e,t,n)=>{n.d(t,{Zo:()=>i,kt:()=>d});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),m=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},i=function(e){var t=m(e.components);return r.createElement(c.Provider,{value:t},e.children)},s="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,i=p(e,["components","mdxType","originalType","parentName"]),s=m(n),f=a,d=s["".concat(c,".").concat(f)]||s[f]||u[f]||o;return n?r.createElement(d,l(l({ref:t},i),{},{components:n})):r.createElement(d,l({ref:t},i))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=f;var p={};for(var c in t)hasOwnProperty.call(t,c)&&(p[c]=t[c]);p.originalType=e,p[s]="string"==typeof e?e:a,l[1]=p;for(var m=2;m<o;m++)l[m]=n[m];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},2175:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>s,frontMatter:()=>o,metadata:()=>p,toc:()=>m});var r=n(7462),a=(n(7294),n(3905));const o={sidebar_position:600},l="Command Usage",p={unversionedId:"usage",id:"usage",title:"Command Usage",description:"-var option",source:"@site/docs/usage.md",sourceDirName:".",slug:"/usage",permalink:"/tfcmt/usage",draft:!1,editUrl:"https://github.com/suzuki-shunsuke/tfcmt-docs/edit/main/docs/usage.md",tags:[],version:"current",sidebarPosition:600,frontMatter:{sidebar_position:600},sidebar:"tutorialSidebar",previous:{title:"Patch `tfcmt plan` comment",permalink:"/tfcmt/plan-patch"},next:{title:"GitHub Enterprise Support",permalink:"/tfcmt/github-enterprise"}},c={},m=[{value:"-var option",id:"-var-option",level:3},{value:"tfcmt plan",id:"tfcmt-plan",level:2},{value:"tfcmt apply",id:"tfcmt-apply",level:2},{value:"\u26a0\ufe0f Terraform&#39;s <code>-no-color</code> option is required to parse the result properly",id:"\ufe0f-terraforms--no-color-option-is-required-to-parse-the-result-properly",level:2}],i={toc:m};function s(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},i,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"command-usage"},"Command Usage"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-console"},"$ tfcmt --version\ntfcmt version 3.1.1 (6e6358b49ce95b52f3287c4376bf66a3c7bc13e8)\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-console"},"$ tfcmt help\nNAME:\n   tfcmt - Notify the execution result of terraform command\n\nUSAGE:\n   tfcmt [global options] command [command options] [arguments...]\n\nVERSION:\n   3.1.1 (6e6358b49ce95b52f3287c4376bf66a3c7bc13e8)\n\nCOMMANDS:\n   plan     Run terraform plan and post a comment to GitHub commit or pull request\n   apply    Run terraform apply and post a comment to GitHub commit or pull request\n   version  Show version\n   help, h  Shows a list of commands or help for one command\n\nGLOBAL OPTIONS:\n   --owner value      GitHub Repository owner name\n   --repo value       GitHub Repository name\n   --sha value        commit SHA (revision)\n   --build-url value  build url\n   --log-level value  log level\n   --pr value         pull request number (default: 0)\n   --config value     config path\n   --var value        template variables. The format of value is '<name>:<value>'  (accepts multiple inputs)\n   --help, -h         show help (default: false)\n   --version, -v      print the version (default: false)\n")),(0,a.kt)("h3",{id:"-var-option"},"-var option"),(0,a.kt)("p",null,"tfcmt supports passing variables by ",(0,a.kt)("inlineCode",{parentName:"p"},"-var")," option.\nThe format of the value should be ",(0,a.kt)("inlineCode",{parentName:"p"},"<name>:<value>"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-console"},"$ tfcmt -var name:foo plan -- terraform plan\n")),(0,a.kt)("p",null,"The variables can be referred in ",(0,a.kt)("inlineCode",{parentName:"p"},"template")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"label"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},'terraform:\n  plan:\n    template: |\n      {{.Vars.name}}\n      ...\n    when_add_or_update_only:\n      label: "{{.Vars.name}}/add-or-update"\n')),(0,a.kt)("h2",{id:"tfcmt-plan"},"tfcmt plan"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-console"},"$ tfcmt help plan\nNAME:\n   tfcmt plan - Run terraform plan and post a comment to GitHub commit or pull request\n\nUSAGE:\n   tfcmt plan [arguments...]\n")),(0,a.kt)("p",null,"e.g."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-console"},"$ tfcmt plan -- terraform plan -no-color\n")),(0,a.kt)("h2",{id:"tfcmt-apply"},"tfcmt apply"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-console"},"$ tfcmt help apply\nNAME:\n   tfcmt apply - Run terraform apply and post a comment to GitHub commit or pull request\n\nUSAGE:\n   tfcmt apply [arguments...]\n")),(0,a.kt)("p",null,"e.g."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-console"},"$ tfcmt apply -- terraform apply -auto-approve -no-color\n")),(0,a.kt)("h2",{id:"\ufe0f-terraforms--no-color-option-is-required-to-parse-the-result-properly"},"\u26a0\ufe0f Terraform's ",(0,a.kt)("inlineCode",{parentName:"h2"},"-no-color")," option is required to parse the result properly"),(0,a.kt)("p",null,"Please set ",(0,a.kt)("a",{parentName:"p",href:"https://www.terraform.io/cli/commands/plan#no-color"},"Terraform's -no-color option"),", otherwise tfcmt may fail to parse the result."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-console"},"$ tfcmt plan -- terraform plan -no-color\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-console"},"$ tfcmt apply -- terraform apply -auto-approve -no-color\n")))}s.isMDXComponent=!0}}]);