(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[48],{61100:function(e,r,t){Promise.resolve().then(t.bind(t,25218)),Promise.resolve().then(t.bind(t,5415)),Promise.resolve().then(t.bind(t,82591)),Promise.resolve().then(t.t.bind(t,231,23)),Promise.resolve().then(t.bind(t,15821)),Promise.resolve().then(t.bind(t,85215)),Promise.resolve().then(t.bind(t,80508))},15821:function(e,r,t){"use strict";t.d(r,{GuestGuard:function(){return c}});var n=t(57437),s=t(2265),o=t(16463),i=t(68165),a=t(85240),l=t(48727),u=t(68692);function c(e){let{children:r}=e,t=(0,o.useRouter)(),{user:c,error:d,isLoading:h}=(0,u.a)(),[g,m]=s.useState(!0),f=async()=>{if(!h){if(d){m(!1);return}if(c){l.k.debug("[GuestGuard]: User is logged in, redirecting to dashboard"),t.replace(a.H.dashboard.overview);return}m(!1)}};return(s.useEffect(()=>{f().catch(()=>{})},[c,d,h]),g)?null:d?(0,n.jsx)(i.Z,{color:"error",children:d}):(0,n.jsx)(s.Fragment,{children:r})}},85215:function(e,r,t){"use strict";t.d(r,{ResetPasswordForm:function(){return R}});var n=t(57437),s=t(2265),o=t(31014),i=t(68165),a=t(75519),l=t(28549),u=t(10437),c=t(56065),d=t(55677),h=t(88929),g=t(83719),m=t(39343),f=t(59772),v=t(93814);let w=f.z.object({email:f.z.string().min(1,{message:"Email is required"}).email()}),b={email:""};function R(){let[e,r]=s.useState(!1),{control:t,handleSubmit:f,setError:R,formState:{errors:p}}=(0,m.cI)({defaultValues:b,resolver:(0,o.F)(w)}),E=s.useCallback(async e=>{r(!0);let{error:t}=await v.U.resetPassword(e);if(t){R("root",{type:"server",message:t}),r(!1);return}r(!1)},[R]);return(0,n.jsxs)(h.Z,{spacing:4,children:[(0,n.jsx)(g.Z,{variant:"h5",children:"Reset password"}),(0,n.jsx)("form",{onSubmit:f(E),children:(0,n.jsxs)(h.Z,{spacing:2,children:[(0,n.jsx)(m.Qr,{control:t,name:"email",render:e=>{let{field:r}=e;return(0,n.jsxs)(l.Z,{error:!!p.email,children:[(0,n.jsx)(c.Z,{children:"Email address"}),(0,n.jsx)(d.Z,{...r,label:"Email address",type:"email"}),p.email?(0,n.jsx)(u.Z,{children:p.email.message}):null]})}}),p.root?(0,n.jsx)(i.Z,{color:"error",children:p.root.message}):null,(0,n.jsx)(a.Z,{disabled:e,type:"submit",variant:"contained",children:"Send recovery link"})]})})]})}},80508:function(e,r,t){"use strict";t.d(r,{DynamicLogo:function(){return c},T:function(){return u}});var n=t(57437),s=t(2265),o=t(7999),i=t(98598),a=t(38017);function l(e){let{children:r,defer:t=!1,fallback:o=null}=e,[i,l]=s.useState(!1);return(0,a.Z)(()=>{t||l(!0)},[t]),s.useEffect(()=>{t&&l(!0)},[t]),(0,n.jsx)(s.Fragment,{children:i?r:o})}function u(e){let r,{color:t="dark",emblem:s,height:i=60,width:a=60}=e;return r=s?"light"===t?"/assets/logo-emblem.svg":"/assets/logo-emblem--dark.svg":"light"===t?"/assets/logo.svg":"/assets/logo--dark.svg",(0,n.jsx)(o.Z,{alt:"logo",component:"img",height:i,src:r,width:a})}function c(e){let{colorDark:r="light",colorLight:t="dark",height:s=60,width:a=60,...c}=e,{colorScheme:d}=(0,i.tv)();return(0,n.jsx)(l,{fallback:(0,n.jsx)(o.Z,{sx:{height:"".concat(s,"px"),width:"".concat(a,"px")}}),children:(0,n.jsx)(u,{color:"dark"===d?r:t,height:s,width:a,...c})})}},22298:function(e,r,t){"use strict";t.d(r,{S:function(){return a},UserProvider:function(){return l}});var n=t(57437),s=t(2265),o=t(93814),i=t(48727);let a=s.createContext(void 0);function l(e){let{children:r}=e,[t,l]=s.useState({user:null,error:null,isLoading:!0}),u=s.useCallback(async()=>{try{let{data:e,error:r}=await o.U.getUser();if(r){i.k.error(r),l(e=>({...e,user:null,error:"Something went wrong",isLoading:!1}));return}l(r=>({...r,user:null!=e?e:null,error:null,isLoading:!1}))}catch(e){i.k.error(e),l(e=>({...e,user:null,error:"Something went wrong",isLoading:!1}))}},[]);return s.useEffect(()=>{u().catch(e=>{i.k.error(e)})},[]),(0,n.jsx)(a.Provider,{value:{...t,checkSession:u},children:r})}a.Consumer},68692:function(e,r,t){"use strict";t.d(r,{a:function(){return o}});var n=t(2265),s=t(22298);function o(){let e=n.useContext(s.S);if(!e)throw Error("useUser must be used within a UserProvider");return e}},93814:function(e,r,t){"use strict";function n(){let e=new Uint8Array(12);return window.crypto.getRandomValues(e),Array.from(e,e=>e.toString(16).padStart(2,"0")).join("")}t.d(r,{U:function(){return i}});let s={id:"USR-000",avatar:"/assets/avatar.png",firstName:"Sofia",lastName:"Rivers",email:"sofia@devias.io"};class o{async signUp(e){let r=n();return localStorage.setItem("custom-auth-token",r),{}}async signInWithOAuth(e){return{error:"Social authentication not implemented"}}async signInWithPassword(e){let{email:r,password:t}=e;if("sofia@devias.io"!==r||"Secret1"!==t)return{error:"Invalid credentials"};let s=n();return localStorage.setItem("custom-auth-token",s),{}}async resetPassword(e){return{error:"Password reset not implemented"}}async updatePassword(e){return{error:"Update reset not implemented"}}async getUser(){return localStorage.getItem("custom-auth-token")?{data:s}:{data:null}}async signOut(){return localStorage.removeItem("custom-auth-token"),{}}}let i=new o},48727:function(e,r,t){"use strict";let n;t.d(r,{k:function(){return h}});var s,o,i,a=t(20357);let l={ERROR:"ERROR",WARN:"WARN",DEBUG:"DEBUG",ALL:"ALL"},u={NONE:0,ERROR:1,WARN:2,DEBUG:3,ALL:4};class c{canWrite(e){return this.levelNumber>=u[e]}write(e){for(var r=arguments.length,t=Array(r>1?r-1:0),n=1;n<r;n++)t[n-1]=arguments[n];let s=this.prefix;this.showLevel&&(s="- ".concat(e," ").concat(s)),e===l.ERROR?console.error(s,...t):console.log(s,...t)}constructor({prefix:e="",level:r=l.ALL,showLevel:t=!0}){var n=this;this.debug=function(){for(var e=arguments.length,r=Array(e),t=0;t<e;t++)r[t]=arguments[t];n.canWrite(l.DEBUG)&&n.write(l.DEBUG,...r)},this.warn=function(){for(var e=arguments.length,r=Array(e),t=0;t<e;t++)r[t]=arguments[t];n.canWrite(l.WARN)&&n.write(l.WARN,...r)},this.error=function(){for(var e=arguments.length,r=Array(e),t=0;t<e;t++)r[t]=arguments[t];n.canWrite(l.ERROR)&&n.write(l.ERROR,...r)},this.prefix=e,this.level=r,this.levelNumber=u[this.level],this.showLevel=t}}var d=t(20357);let h=function(){let{prefix:e,level:r}=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return new c({prefix:e,level:r})}({level:{site:{name:"Devias Kit",description:"",themeColor:"#090a0b",url:n=(n=(n=null!==(o=null!==(s=a.env.NEXT_PUBLIC_SITE_URL)&&void 0!==s?s:a.env.NEXT_PUBLIC_VERCEL_URL)&&void 0!==o?o:"http://localhost:3000/").includes("http")?n:"https://".concat(n)).endsWith("/")?n:"".concat(n,"/")},logLevel:null!==(i=d.env.NEXT_PUBLIC_LOG_LEVEL)&&void 0!==i?i:l.ALL}.logLevel})},85240:function(e,r,t){"use strict";t.d(r,{H:function(){return n}});let n={home:"/",auth:{signIn:"/auth/sign-in",signUp:"/auth/sign-up",resetPassword:"/auth/reset-password"},dashboard:{overview:"/dashboard",account:"/dashboard/account",customers:"/dashboard/customers",integrations:"/dashboard/integrations",settings:"/dashboard/settings"},errors:{notFound:"/errors/not-found"}}}},function(e){e.O(0,[64,805,19,990,87,274,171,165,146,971,23,744],function(){return e(e.s=61100)}),_N_E=e.O()}]);