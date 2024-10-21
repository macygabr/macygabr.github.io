(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[663],{9182:function(e,r,t){Promise.resolve().then(t.bind(t,5218)),Promise.resolve().then(t.bind(t,352)),Promise.resolve().then(t.bind(t,1246)),Promise.resolve().then(t.bind(t,5090)),Promise.resolve().then(t.bind(t,5022)),Promise.resolve().then(t.bind(t,4453))},5090:function(e,r,t){"use strict";t.d(r,{AuthGuard:function(){return u}});var n=t(7437),o=t(2265),i=t(6463),a=t(8165),l=t(5240),s=t(4382),c=t(8692);function u(e){let{children:r}=e,t=(0,i.useRouter)(),{user:u,error:d,isLoading:x}=(0,c.a)(),[v,h]=o.useState(!0),p=async()=>{if(!x){if(d){h(!1),t.push(l.H.errors.notFound);return}if(!u){s.k.debug("[AuthGuard]: User is not logged in, redirecting to sign in"),t.replace(l.H.auth.signIn);return}h(!1)}};return(o.useEffect(()=>{p().catch(()=>{})},[u,d,x]),v)?null:d?(0,n.jsx)(a.Z,{color:"error",children:d}):(0,n.jsx)(o.Fragment,{children:r})}},5920:function(e,r,t){"use strict";t.d(r,{t:function(){return o}});var n=t(5240);let o=[{key:"overview",title:"Календарь",href:n.H.dashboard.overview,icon:"calendar"},{key:"customers",title:"Мои события",href:n.H.dashboard.customers,icon:"users"},{key:"settings",title:"Настройки",href:n.H.dashboard.settings,icon:"gear-six"},{key:"account",title:"Аккаунт",href:n.H.dashboard.account,icon:"user"}]},5022:function(e,r,t){"use strict";t.d(r,{MainNav:function(){return T}});var n=t(7437),o=t(2265),i=t(5349),a=t(2508),l=t(7999),s=t(335),c=t(8929),u=t(888),d=t(7860),x=t(8801),v=t(4252),h=t(3719),p=t(3814),m=t(6463),f=t(5240),b=t(7138),g=t(7318),j=t(8438),N=t(5569),Z=t(508),I=t(5920),k=t(1104);function y(e){let{open:r,onClose:t}=e,o=(0,m.usePathname)();return(0,n.jsxs)(j.ZP,{PaperProps:{sx:{"--MobileNav-background":"var(--mui-palette-neutral-950)","--MobileNav-color":"var(--mui-palette-common-white)","--NavItem-color":"var(--mui-palette-neutral-300)","--NavItem-hover-background":"rgba(255, 255, 255, 0.04)","--NavItem-active-background":"var(--mui-palette-primary-main)","--NavItem-active-color":"var(--mui-palette-primary-contrastText)","--NavItem-disabled-color":"var(--mui-palette-neutral-500)","--NavItem-icon-color":"var(--mui-palette-neutral-400)","--NavItem-icon-active-color":"var(--mui-palette-primary-contrastText)","--NavItem-icon-disabled-color":"var(--mui-palette-neutral-600)",bgcolor:"#1a2b3c",color:"var(--MobileNav-color)",display:"flex",flexDirection:"column",maxWidth:"100%",scrollbarWidth:"none",width:"var(--MobileNav-width)",zIndex:"var(--MobileNav-zIndex)","&::-webkit-scrollbar":{display:"none"}}},onClose:t,open:r,children:[(0,n.jsx)(c.Z,{spacing:2,sx:{p:2},children:(0,n.jsx)(l.Z,{component:b.default,href:f.H.home,sx:{display:"inline-flex"},children:(0,n.jsx)(Z.T,{color:"light",height:32,width:122})})}),(0,n.jsx)(g.Z,{sx:{borderColor:"var(--mui-palette-neutral-700)"}}),(0,n.jsx)(l.Z,{component:"nav",sx:{flex:"1 1 auto",p:"12px"},children:function(e){let{items:r=[],pathname:t}=e,o=r.reduce((e,r)=>{let{key:o,...i}=r;return e.push((0,n.jsx)(S,{pathname:t,...i},o)),e},[]);return(0,n.jsx)(c.Z,{component:"ul",spacing:1,sx:{listStyle:"none",m:0,p:0},children:o})}({pathname:o,items:I.t})}),(0,n.jsx)(g.Z,{sx:{borderColor:"var(--mui-palette-neutral-700)"}})]})}function S(e){let{disabled:r,external:t,href:o,icon:i,matcher:a,pathname:s,title:c}=e,u=(0,N.N)({disabled:r,external:t,href:o,matcher:a,pathname:s}),d=i?k.s[i]:null;return(0,n.jsx)("li",{children:(0,n.jsxs)(l.Z,{...o?{component:t?"a":b.default,href:o,target:t?"_blank":void 0,rel:t?"noreferrer":void 0}:{role:"button"},sx:{alignItems:"center",borderRadius:1,color:"var(--NavItem-color)",cursor:"pointer",display:"flex",flex:"0 0 auto",gap:1,p:"6px 16px",position:"relative",textDecoration:"none",whiteSpace:"nowrap",...r&&{bgcolor:"var(--NavItem-disabled-background)",color:"var(--NavItem-disabled-color)",cursor:"not-allowed"},...u&&{bgcolor:"var(--NavItem-active-background)",color:"var(--NavItem-active-color)"}},children:[(0,n.jsx)(l.Z,{sx:{alignItems:"center",display:"flex",justifyContent:"center",flex:"0 0 auto"},children:d?(0,n.jsx)(d,{fill:u?"var(--NavItem-icon-active-color)":"var(--NavItem-icon-color)",fontSize:"var(--icon-fontSize-md)",weight:u?"fill":void 0}):null}),(0,n.jsx)(l.Z,{sx:{flex:"1 1 auto"},children:(0,n.jsx)(h.Z,{component:"span",sx:{color:"inherit",fontSize:"0.875rem",fontWeight:500,lineHeight:"28px"},children:c})})]})})}var w=t(6917),C=t(2494),z=t(1313),H=t(8502),P=t(7301),R=t(5170),E=t(8813),_=t(4382),M=t(8692);function W(e){let{anchorEl:r,onClose:t,open:i}=e,[a,s]=o.useState(null),[c,u]=o.useState(null),{checkSession:d}=(0,M.a)(),x=(0,m.useRouter)();o.useEffect(()=>{!async function(){let{data:e,error:r}=await p.U.getUser();if(r){u(r);return}s(e||null)}()},[]);let v=o.useCallback(async()=>{try{let{error:e}=await p.U.signOut();if(e){_.k.error("Sign out error",e);return}await (null==d?void 0:d()),x.refresh()}catch(e){_.k.error("Sign out error",e)}},[d,x]);return c?(0,n.jsxs)(h.Z,{color:"error",children:["Error: ",c]}):(0,n.jsxs)(H.ZP,{anchorEl:r,anchorOrigin:{horizontal:"left",vertical:"bottom"},onClose:t,open:i,slotProps:{paper:{sx:{width:"240px"}}},children:[(0,n.jsxs)(l.Z,{sx:{p:"16px 20px "},children:[(0,n.jsxs)(h.Z,{variant:"subtitle1",children:[null==a?void 0:a.firstName," ",null==a?void 0:a.lastName]}),(0,n.jsx)(h.Z,{color:"text.secondary",variant:"body2",children:null==a?void 0:a.email})]}),(0,n.jsx)(g.Z,{}),(0,n.jsxs)(z.Z,{disablePadding:!0,sx:{p:"8px","& .MuiMenuItem-root":{borderRadius:1}},children:[(0,n.jsxs)(C.Z,{component:b.default,href:f.H.dashboard.settings,onClick:t,children:[(0,n.jsx)(w.Z,{children:(0,n.jsx)(P.H,{fontSize:"var(--icon-fontSize-md)"})}),"Настройки"]}),(0,n.jsxs)(C.Z,{component:b.default,href:f.H.dashboard.account,onClick:t,children:[(0,n.jsx)(w.Z,{children:(0,n.jsx)(E.n,{fontSize:"var(--icon-fontSize-md)"})}),"Профиль"]}),(0,n.jsxs)(C.Z,{onClick:v,children:[(0,n.jsx)(w.Z,{children:(0,n.jsx)(R.l,{fontSize:"var(--icon-fontSize-md)"})}),"Выход"]})]})]})}function T(){let[e,r]=o.useState(!1),t=function(){let e=o.useRef(null),[r,t]=o.useState(!1),n=o.useCallback(()=>{t(!0)},[]);return{anchorRef:e,handleClose:o.useCallback(()=>{t(!1)},[]),handleOpen:n,handleToggle:o.useCallback(()=>{t(e=>!e)},[]),open:r}}(),[b,g]=(0,o.useState)(null),[j,N]=o.useState(null),Z=(0,m.useRouter)();return(0,o.useEffect)(()=>{(async function(){let{data:e,error:r}=await p.U.getUser();if(r||!e){g("Failed to fetch user data"),Z.push(f.H.errors.notFound);return}N(e)})()},[Z]),(0,n.jsxs)(o.Fragment,{children:[(0,n.jsx)(l.Z,{component:"header",sx:{borderBottom:"1px solid var(--mui-palette-divider)",backgroundColor:"var(--mui-palette-background-paper)",position:"sticky",top:0,zIndex:"var(--mui-zIndex-appBar)"},children:(0,n.jsxs)(c.Z,{direction:"row",spacing:2,sx:{alignItems:"center",justifyContent:"space-between",minHeight:"64px",px:2},children:[(0,n.jsxs)(c.Z,{sx:{alignItems:"center"},direction:"row",spacing:2,children:[(0,n.jsx)(s.Z,{onClick:()=>{r(!0)},sx:{display:{lg:"none"}},children:(0,n.jsx)(x.a,{})}),(0,n.jsx)(u.Z,{title:"Search",children:(0,n.jsx)(s.Z,{children:(0,n.jsx)(v.Y,{})})})]}),(0,n.jsxs)(c.Z,{sx:{alignItems:"center"},direction:"row",spacing:2,children:[(0,n.jsx)(u.Z,{title:"Notifications",children:(0,n.jsx)(a.Z,{children:(0,n.jsx)(s.Z,{children:(0,n.jsx)(d.U,{})})})}),(0,n.jsx)(i.Z,{onClick:t.handleOpen,ref:t.anchorRef,src:(null==j?void 0:j.avatar)||"",sx:{cursor:"pointer"}})]})]})}),b&&(0,n.jsx)(h.Z,{color:"error",variant:"body2",sx:{mt:2,textAlign:"center"},children:b}),(0,n.jsx)(W,{anchorEl:t.anchorRef.current,onClose:t.handleClose,open:t.open}),(0,n.jsx)(y,{onClose:()=>{r(!1)},open:e})]})}},1104:function(e,r,t){"use strict";t.d(r,{s:function(){return c}});var n=t(3276),o=t(7301),i=t(3939),a=t(8813),l=t(9159),s=t(1097);let c={calendar:n.R,"gear-six":o.H,"plugs-connected":i.F,"x-square":s._,user:a.n,users:l.Q}},4453:function(e,r,t){"use strict";t.d(r,{SideNav:function(){return p}});var n=t(7437);t(2265);var o=t(7138),i=t(6463),a=t(7999),l=t(7318),s=t(8929),c=t(3719),u=t(5240),d=t(5569),x=t(508),v=t(5920),h=t(1104);function p(){let e=(0,i.usePathname)();return(0,n.jsxs)(a.Z,{sx:{"--SideNav-background":"var(--mui-palette-neutral-950)","--SideNav-color":"var(--mui-palette-common-white)","--NavItem-color":"var(--mui-palette-neutral-300)","--NavItem-hover-background":"rgba(255, 255, 255, 0.04)","--NavItem-active-background":"var(--mui-palette-primary-main)","--NavItem-active-color":"var(--mui-palette-primary-contrastText)","--NavItem-disabled-color":"var(--mui-palette-neutral-500)","--NavItem-icon-color":"var(--mui-palette-neutral-400)","--NavItem-icon-active-color":"var(--mui-palette-primary-contrastText)","--NavItem-icon-disabled-color":"var(--mui-palette-neutral-600)",bgcolor:"#1a2b3c",color:"var(--SideNav-color)",display:{xs:"none",lg:"flex"},flexDirection:"column",height:"100%",left:0,maxWidth:"100%",position:"fixed",scrollbarWidth:"none",top:0,width:"var(--SideNav-width)",zIndex:"var(--SideNav-zIndex)","&::-webkit-scrollbar":{display:"none"}},children:[(0,n.jsx)(s.Z,{spacing:2,sx:{p:2},children:(0,n.jsx)(a.Z,{component:o.default,href:u.H.home,sx:{display:"inline-flex"},children:(0,n.jsx)(x.T,{color:"light",height:32,width:122})})}),(0,n.jsx)(l.Z,{sx:{borderColor:"var(--mui-palette-neutral-700)"}}),(0,n.jsx)(a.Z,{component:"nav",sx:{flex:"1 1 auto",p:"12px"},children:function(e){let{items:r=[],pathname:t}=e,o=r.reduce((e,r)=>{let{key:o,...i}=r;return e.push((0,n.jsx)(m,{pathname:t,...i},o)),e},[]);return(0,n.jsx)(s.Z,{component:"ul",spacing:1,sx:{listStyle:"none",m:0,p:0,fontSize:"16px"},children:o})}({pathname:e,items:v.t})}),(0,n.jsx)(l.Z,{sx:{borderColor:"var(--mui-palette-neutral-700)"}})]})}function m(e){let{disabled:r,external:t,href:i,icon:l,matcher:s,pathname:u,title:x}=e,v=(0,d.N)({disabled:r,external:t,href:i,matcher:s,pathname:u}),p=l?h.s[l]:null;return(0,n.jsx)("li",{children:(0,n.jsxs)(a.Z,{...i?{component:t?"a":o.default,href:i,target:t?"_blank":void 0,rel:t?"noreferrer":void 0}:{role:"button"},sx:{alignItems:"center",borderRadius:1,color:"var(--NavItem-color)",cursor:"pointer",display:"flex",flex:"0 0 auto",gap:1,p:"6px 16px",position:"relative",textDecoration:"none",whiteSpace:"nowrap",...r&&{bgcolor:"var(--NavItem-disabled-background)",color:"var(--NavItem-disabled-color)",cursor:"not-allowed"},...v&&{bgcolor:"var(--NavItem-active-background)",color:"var(--NavItem-active-color)"}},children:[(0,n.jsx)(a.Z,{sx:{alignItems:"center",display:"flex",justifyContent:"center",flex:"0 0 auto"},children:p?(0,n.jsx)(p,{fill:v?"var(--NavItem-icon-active-color)":"var(--NavItem-icon-color)",fontSize:"var(--icon-fontSize-md)",weight:v?"fill":void 0}):null}),(0,n.jsx)(a.Z,{sx:{flex:"1 1 auto"},children:(0,n.jsx)(c.Z,{component:"span",sx:{color:"inherit",fontSize:"0.875rem",fontWeight:500,lineHeight:"28px"},children:x})})]})})}},5569:function(e,r,t){"use strict";function n(e){let{disabled:r,external:t,href:n,matcher:o,pathname:i}=e;return!r&&!!n&&!t&&(o?"startsWith"===o.type?i.startsWith(o.href):"equals"===o.type&&i===o.href:i===n)}t.d(r,{N:function(){return n}})}},function(e){e.O(0,[342,919,472,125,87,781,907,165,564,687,494,131,971,23,744],function(){return e(e.s=9182)}),_N_E=e.O()}]);