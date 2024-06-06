"use strict";(self.webpackChunkmy_portfolio=self.webpackChunkmy_portfolio||[]).push([[42],{448:(t,e,a)=>{a.d(e,{A:()=>p});var i=a(5043),r=a(8254),o=a(1605),s=a(1318),n=a(579);const c=t=>{let{id:e,title:a,category:i,image:r}=t;return(0,n.jsx)(o.P.div,{initial:{opacity:0},animate:{opacity:1,delay:1},transition:{ease:"easeInOut",duration:.7,delay:.15},children:(0,n.jsx)(s.N_,{to:"/projects/".concat(e),"aria-label":a,children:(0,n.jsxs)("div",{className:"rounded-xl shadow-lg hover:shadow-xl cursor-pointer mb-10 sm:mb-0 bg-secondary-light dark:bg-ternary-dark",children:[(0,n.jsx)("div",{children:(0,n.jsx)("img",{src:r,className:"rounded-t-xl border-none",alt:"Single Project"})}),(0,n.jsxs)("div",{className:"text-center px-4 py-6",children:[(0,n.jsx)("p",{className:"font-general-medium text-lg md:text-xl text-ternary-dark dark:text-ternary-light mb-2",children:a}),(0,n.jsx)("span",{className:"text-lg text-ternary-dark dark:text-ternary-light",children:i})]})]})})})};var l=a(3175);const d=["Unity VR Application","Unity AR Application","Unity Non-XR Application","IoT Project"],m=t=>{let{setSelectProject:e}=t;return(0,n.jsxs)("select",{onChange:t=>{e(t.target.value)},className:"font-general-medium \r px-4\r sm:px-6\r py-2\r border\r dark:border-secondary-dark\r rounded-lg\r text-sm\r sm:text-md\r dark:font-medium\r bg-secondary-light\r dark:bg-ternary-dark\r text-primary-dark\r dark:text-ternary-light\r ",children:[(0,n.jsx)("option",{className:"text-sm sm:text-md",children:"All Projects"}),d.map((t=>(0,n.jsx)("option",{className:"text-normal sm:text-md",children:t},t)))]})},p=()=>{const{projects:t,searchProject:e,setSearchProject:a,searchProjectsByTitle:o,selectProject:s,setSelectProject:d,selectProjectsByCategory:p}=(0,i.useContext)(l.Y);return(0,n.jsxs)("section",{className:"py-5 sm:py-10 mt-5 sm:mt-10",children:[(0,n.jsx)("div",{className:"text-center",children:(0,n.jsx)("p",{className:"font-general-medium text-2xl sm:text-4xl mb-1 text-ternary-dark dark:text-ternary-light",children:"Projects portfolio"})}),(0,n.jsxs)("div",{className:"mt-10 sm:mt-16",children:[(0,n.jsx)("h3",{className:"font-general-regular \r text-center text-secondary-dark\r dark:text-ternary-light\r text-md\r sm:text-xl\r mb-3\r ",children:"Search projects by title or filter by category"}),(0,n.jsxs)("div",{className:"\r flex\r justify-between\r border-b border-primary-light\r dark:border-secondary-dark\r pb-3\r gap-3\r ",children:[(0,n.jsxs)("div",{className:"flex justify-between gap-2",children:[(0,n.jsx)("span",{className:"\r hidden\r sm:block\r bg-primary-light\r dark:bg-ternary-dark\r p-2.5\r shadow-sm\r rounded-xl\r cursor-pointer\r ",children:(0,n.jsx)(r.CKj,{className:"text-ternary-dark dark:text-ternary-light w-5 h-5"})}),(0,n.jsx)("input",{onChange:t=>{a(t.target.value)},className:"font-general-medium \r pl-3\r pr-1\r sm:px-4\r py-2\r border \r border-gray-200\r dark:border-secondary-dark\r rounded-lg\r text-sm\r sm:text-md\r bg-secondary-light\r dark:bg-ternary-dark\r text-primary-dark\r dark:text-ternary-light\r ",id:"name",name:"name",type:"search",required:"",placeholder:"Search Projects","aria-label":"Name"})]}),(0,n.jsx)(m,{setSelectProject:d})]})]}),(0,n.jsx)("div",{className:"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mt-6 sm:gap-10",children:s?p.map((t=>(0,n.jsx)(c,{id:t.id,title:t.title,category:t.category,image:t.img},t.id))):e?o.map((t=>(0,n.jsx)(c,{id:t.id,title:t.title,category:t.category,image:t.img},t.id))):t.map((t=>(0,n.jsx)(c,{id:t.id,title:t.title,category:t.category,image:t.img},t.id)))})]})}},3175:(t,e,a)=>{a.d(e,{Y:()=>P,S:()=>w});var i=a(5043),r=a(1117),o=a(3418),s=a(537),n=a(5635),c=a(722),l=a(2201),d=a(9281),m=a(5613),p=a(3765),g=a(546),x=a(5537),y=a(3953),h=a(254),u=a(9978),b=a(2433),j=a(9697),f=a(5944),k=a(5517),v=a(3023),A=a(2308);const R=[{id:"xr-presentation-rooms",title:"XR Presentation Rooms",category:"Unity VR Application",img:a(621)},{id:"vr-ship-and-bridge-simulator",title:"VR Ship and Bridge Simulator",category:"Unity VR Application",img:A},{id:"itrollheimen",title:"iTrollheimen AR",category:"Unity AR Application",img:m},{id:"vr-locomotion-system",title:"Hands-only Locomotion System for Oculus Quest",category:"Unity VR Application",img:l},{id:"vr-hand-keypad",title:"VR Hand Keypad",category:"Unity VR Application",img:v},{id:"magistack-ar",title:"MagiStack AR",category:"Unity AR Application",img:x},{id:"magipaint-ar",title:"MagiPaint AR",category:"Unity AR Application",img:g},{id:"emergency-search-rescue-drone",title:"Emergency Search and Rescue Hexacopter",category:"IoT Project",img:n},{id:"salmon-farm-showcase",title:"Salmon Farm Showcase App",category:"Unity Non-XR Application",img:u},{id:"vr-architecture-visualization",title:"VR Architecture Visualization App",category:"Unity VR Application",img:f},{id:"multi-touch-product-showcase",title:"Multi-touch supported Product showcase App with Object Recognition",category:"Unity Non-XR Application",img:p},{id:"gesture-recognition-glove",title:"Real-time Numerical Gesture Recognition using MPU 9250 Motion Sensor",category:"Unity Non-XR Application",img:c},{id:"vr-dev-toolkit",title:"VR Development Toolkit",category:"Unity VR Application",img:k},{id:"tuio-client-package",title:"Unity Tuio Client and TouchScript Integration",category:"Unity Non-XR Application",img:j},{id:"storybits",title:"Storybits AR",category:"Unity AR Application",img:b},{id:"manomotion-addon-plugins",title:"Manomotion SDK Add-On Plugins",category:"Unity AR Application",img:h},{id:"manomotion-sdk-showcase",title:"Manomotion SDK Showcase App",category:"Unity AR Application",img:y},{id:"hull-cleaning-robot-simulator",title:"Hull Cleaner Robot Simulator",category:"Unity Non-XR Application",img:d},{id:"multi-touch-supported-browsers",title:"Multi-touch supported browsers in Unity",category:"Unity Non-XR Application",img:s},{id:"pongal-greetings",title:"AR Pongal Greetings",category:"Unity AR Application",img:o},{id:"ar-digital-twin",title:"AR Digital Twin",category:"Unity AR Application",img:r}];var N=a(579);const P=(0,i.createContext)(),w=t=>{const[e,a]=(0,i.useState)(R),[r,o]=(0,i.useState)(""),[s,n]=(0,i.useState)(""),c=e.filter((t=>t.title.toLowerCase().includes(r.toLowerCase())||""===r?t:"")),l=e.filter((t=>(t.category.charAt(0).toUpperCase()+t.category.slice(1)).includes(s)));return(0,N.jsx)(P.Provider,{value:{projects:e,setProjects:a,searchProject:r,setSearchProject:o,searchProjectsByTitle:c,selectProject:s,setSelectProject:n,selectProjectsByCategory:l},children:t.children})}},8042:(t,e,a)=>{a.r(e),a.d(e,{default:()=>g});var i=a(1318),r=a(3364);a(5043);const o=a.p+"static/media/developer.2f084608158c1db6dcc0b2c76a2806f7.svg";const s=a.p+"static/media/developer-dark.aa2700b57c0b14ead116acc39d478609.svg";var n=a(1605),c=a(579);const l=()=>{const[t]=(0,r.A)();return(0,c.jsxs)(n.P.section,{initial:{opacity:0},animate:{opacity:1},transition:{ease:"easeInOut",duration:.9,delay:.2},className:"flex flex-col sm:justify-between items-center sm:flex-row mt-12 md:mt-2",children:[(0,c.jsxs)("div",{className:"w-full md:w-1/3 text-left",children:[(0,c.jsx)(n.P.h1,{initial:{opacity:0},animate:{opacity:1},transition:{ease:"easeInOut",duration:.9,delay:.1},className:"font-general-semibold text-2xl lg:text-3xl xl:text-4xl text-center sm:text-left text-ternary-dark dark:text-primary-light",children:"Hi, I am Sathish\ud83d\udc4b"}),(0,c.jsxs)(n.P.p,{initial:{opacity:0},animate:{opacity:1},transition:{ease:"easeInOut",duration:.9,delay:.2},className:"font-general-medium mt-4 text-lg md:text-xl lg:text-2xl xl:text-3xl text-center sm:text-left leading-normal text-gray-500 dark:text-gray-200",children:["Unity XR Developer | ",(0,c.jsx)("br",{}),"\u2002Full-Stack .NET Developer"]})]}),(0,c.jsx)(n.P.div,{initial:{opacity:0,y:-180},animate:{opacity:1,y:0},transition:{ease:"easeInOut",duration:.9,delay:.2},className:"w-full sm:w-2/3 text-right float-right mt-8 sm:mt-0",children:(0,c.jsx)("img",{src:"dark"===t?o:s,alt:"Developer"})})]})};var d=a(448),m=a(3175),p=a(6089);const g=()=>(0,c.jsxs)("div",{className:"container mx-auto",children:[(0,c.jsx)(l,{}),(0,c.jsx)(m.S,{children:(0,c.jsx)(d.A,{})}),(0,c.jsx)("div",{className:"mt-8 sm:mt-10 flex justify-center",children:(0,c.jsx)(i.N_,{to:"/projects",className:"font-general-medium flex items-center px-6 py-3 rounded-lg shadow-lg hover:shadow-xl bg-indigo-500 hover:bg-indigo-600 focus:ring-1 focus:ring-indigo-900 text-white text-lg sm:text-xl duration-300","aria-label":"More Projects",children:(0,c.jsx)(p.A,{title:"More Projects"})})})]})},1117:(t,e,a)=>{t.exports=a.p+"static/media/ar-digital-twin-3.d26ce989db33ac4b8e05.png"},3418:(t,e,a)=>{t.exports=a.p+"static/media/pongal-1.33f5a0a9f9b7a6d30bb1.png"},537:(t,e,a)=>{t.exports=a.p+"static/media/vuplex-brower.cefa829e8cea479c7c6a.png"},5635:(t,e,a)=>{t.exports=a.p+"static/media/drone-3.4f31d62293faff61a1cb.png"},722:(t,e,a)=>{t.exports=a.p+"static/media/glove-gesture-2.8c48c5f5c64aebd14fcb.png"},2201:(t,e,a)=>{t.exports=a.p+"static/media/locomotion-1.03d6a630a81349c984a6.png"},9281:(t,e,a)=>{t.exports=a.p+"static/media/hull-cleaner-1.f2d41bd124473ad68311.png"},5613:(t,e,a)=>{t.exports=a.p+"static/media/itrollheimen-1.907f959af3ac900f07f0.png"},3765:(t,e,a)=>{t.exports=a.p+"static/media/kongsberg-1.eb22b34fc91e40b5b13e.jpeg"},546:(t,e,a)=>{t.exports=a.p+"static/media/magipaint-2.c7b90216bfdefefc4d48.png"},5537:(t,e,a)=>{t.exports=a.p+"static/media/stack-3.070eac608025f3b2e3e1.png"},3953:(t,e,a)=>{t.exports=a.p+"static/media/manomotion-internship-1.54fc7f3a131f117cbcc7.png"},254:(t,e,a)=>{t.exports=a.p+"static/media/manomotion-addon.0fe904e54e9abd14b436.png"},9978:(t,e,a)=>{t.exports=a.p+"static/media/salmon-1.a40124ef810e60c4d641.png"},2433:(t,e,a)=>{t.exports=a.p+"static/media/storybits.e637579b69f8a0e11d3a.png"},9697:(t,e,a)=>{t.exports=a.p+"static/media/tuio-client-package.d68475c18bae2370641b.png"},5944:(t,e,a)=>{t.exports=a.p+"static/media/vr-architecture-1.729e8a07e48af4c798f3.png"},5517:(t,e,a)=>{t.exports=a.p+"static/media/vr-dev-toolkit.c77b7e5776bb9a1a2c44.png"},3023:(t,e,a)=>{t.exports=a.p+"static/media/vr-hand-keypad-1.7175148afa053e48296d.png"},2308:(t,e,a)=>{t.exports=a.p+"static/media/vr-ship-1.68679bbabc116d2fa5be.png"},621:(t,e,a)=>{t.exports=a.p+"static/media/xr-presentations-1.141f783d0226af3fa570.png"}}]);
//# sourceMappingURL=42.1bf6c35d.chunk.js.map