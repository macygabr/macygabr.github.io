(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[301],{5783:function(e,r,n){Promise.resolve().then(n.bind(n,5218)),Promise.resolve().then(n.bind(n,3555)),Promise.resolve().then(n.t.bind(n,231,23)),Promise.resolve().then(n.bind(n,5821)),Promise.resolve().then(n.bind(n,1225)),Promise.resolve().then(n.bind(n,508))},8038:function(e,r,n){"use strict";n.d(r,{Z:function(){return k}});var t=n(3950),o=n(2988),a=n(2265),l=n(4839),s=n(6259),i=n(8875),c=n(8929),u=n(3719),d=n(2272),m=n(8024),b=n(9281),p=n(4535),h=n(7542);function f(e){return(0,h.ZP)("MuiFormControlLabel",e)}let Z=(0,p.Z)("MuiFormControlLabel",["root","labelPlacementStart","labelPlacementTop","labelPlacementBottom","disabled","label","error","required","asterisk"]);var x=n(8868),v=n(7437);let g=["checked","className","componentsProps","control","disabled","disableTypography","inputRef","label","labelPlacement","name","onChange","required","slotProps","value"],j=e=>{let{classes:r,disabled:n,labelPlacement:t,error:o,required:a}=e,l={root:["root",n&&"disabled","labelPlacement".concat((0,d.Z)(t)),o&&"error",a&&"required"],label:["label",n&&"disabled"],asterisk:["asterisk",o&&"error"]};return(0,s.Z)(l,f,r)},y=(0,m.ZP)("label",{name:"MuiFormControlLabel",slot:"Root",overridesResolver:(e,r)=>{let{ownerState:n}=e;return[{["& .".concat(Z.label)]:r.label},r.root,r["labelPlacement".concat((0,d.Z)(n.labelPlacement))]]}})(e=>{let{theme:r,ownerState:n}=e;return(0,o.Z)({display:"inline-flex",alignItems:"center",cursor:"pointer",verticalAlign:"middle",WebkitTapHighlightColor:"transparent",marginLeft:-11,marginRight:16,["&.".concat(Z.disabled)]:{cursor:"default"}},"start"===n.labelPlacement&&{flexDirection:"row-reverse",marginLeft:16,marginRight:-11},"top"===n.labelPlacement&&{flexDirection:"column-reverse",marginLeft:16},"bottom"===n.labelPlacement&&{flexDirection:"column",marginLeft:16},{["& .".concat(Z.label)]:{["&.".concat(Z.disabled)]:{color:(r.vars||r).palette.text.disabled}}})}),P=(0,m.ZP)("span",{name:"MuiFormControlLabel",slot:"Asterisk",overridesResolver:(e,r)=>r.asterisk})(e=>{let{theme:r}=e;return{["&.".concat(Z.error)]:{color:(r.vars||r).palette.error.main}}});var k=a.forwardRef(function(e,r){var n,s;let d=(0,b.Z)({props:e,name:"MuiFormControlLabel"}),{className:m,componentsProps:p={},control:h,disabled:f,disableTypography:Z,label:k,labelPlacement:w="end",required:N,slotProps:C={}}=d,F=(0,t.Z)(d,g),L=(0,i.Z)(),S=null!=(n=null!=f?f:h.props.disabled)?n:null==L?void 0:L.disabled,R=null!=N?N:h.props.required,D={disabled:S,required:R};["checked","name","onChange","value","inputRef"].forEach(e=>{void 0===h.props[e]&&void 0!==d[e]&&(D[e]=d[e])});let M=(0,x.Z)({props:d,muiFormControl:L,states:["error"]}),q=(0,o.Z)({},d,{disabled:S,labelPlacement:w,required:R,error:M.error}),A=j(q),E=null!=(s=C.typography)?s:p.typography,z=k;return null==z||z.type===u.Z||Z||(z=(0,v.jsx)(u.Z,(0,o.Z)({component:"span"},E,{className:(0,l.Z)(A.label,null==E?void 0:E.className),children:z}))),(0,v.jsxs)(y,(0,o.Z)({className:(0,l.Z)(A.root,m),ownerState:q,ref:r},F,{children:[a.cloneElement(h,D),R?(0,v.jsxs)(c.Z,{display:"block",children:[z,(0,v.jsxs)(P,{ownerState:q,"aria-hidden":!0,className:A.asterisk,children:[" ","*"]})]}):z]}))})},1665:function(e,r,n){"use strict";n.d(r,{Z:function(){return C}});var t=n(3950),o=n(2988),a=n(2265),l=n(4839),s=n(6259),i=n(2272),c=n(8024),u=n(9281),d=n(9261),m=n(909),b=n(3719),p=n(4535),h=n(7542);function f(e){return(0,h.ZP)("MuiLink",e)}let Z=(0,p.Z)("MuiLink",["root","underlineNone","underlineHover","underlineAlways","button","focusVisible"]);var x=n(5166),v=n(317);let g={primary:"primary.main",textPrimary:"text.primary",secondary:"secondary.main",textSecondary:"text.secondary",error:"error.main"},j=e=>g[e]||e;var y=e=>{let{theme:r,ownerState:n}=e,t=j(n.color),o=(0,x.DW)(r,"palette.".concat(t),!1)||n.color,a=(0,x.DW)(r,"palette.".concat(t,"Channel"));return"vars"in r&&a?"rgba(".concat(a," / 0.4)"):(0,v.Fq)(o,.4)},P=n(7437);let k=["className","color","component","onBlur","onFocus","TypographyClasses","underline","variant","sx"],w=e=>{let{classes:r,component:n,focusVisible:t,underline:o}=e,a={root:["root","underline".concat((0,i.Z)(o)),"button"===n&&"button",t&&"focusVisible"]};return(0,s.Z)(a,f,r)},N=(0,c.ZP)(b.Z,{name:"MuiLink",slot:"Root",overridesResolver:(e,r)=>{let{ownerState:n}=e;return[r.root,r["underline".concat((0,i.Z)(n.underline))],"button"===n.component&&r.button]}})(e=>{let{theme:r,ownerState:n}=e;return(0,o.Z)({},"none"===n.underline&&{textDecoration:"none"},"hover"===n.underline&&{textDecoration:"none","&:hover":{textDecoration:"underline"}},"always"===n.underline&&(0,o.Z)({textDecoration:"underline"},"inherit"!==n.color&&{textDecorationColor:y({theme:r,ownerState:n})},{"&:hover":{textDecorationColor:"inherit"}}),"button"===n.component&&{position:"relative",WebkitTapHighlightColor:"transparent",backgroundColor:"transparent",outline:0,border:0,margin:0,borderRadius:0,padding:0,cursor:"pointer",userSelect:"none",verticalAlign:"middle",MozAppearance:"none",WebkitAppearance:"none","&::-moz-focus-inner":{borderStyle:"none"},["&.".concat(Z.focusVisible)]:{outline:"auto"}})});var C=a.forwardRef(function(e,r){let n=(0,u.Z)({props:e,name:"MuiLink"}),{className:s,color:i="primary",component:c="a",onBlur:b,onFocus:p,TypographyClasses:h,underline:f="always",variant:Z="inherit",sx:x}=n,v=(0,t.Z)(n,k),{isFocusVisibleRef:j,onBlur:y,onFocus:C,ref:F}=(0,d.Z)(),[L,S]=a.useState(!1),R=(0,m.Z)(r,F),D=(0,o.Z)({},n,{color:i,component:c,focusVisible:L,underline:f,variant:Z}),M=w(D);return(0,P.jsx)(N,(0,o.Z)({color:i,className:(0,l.Z)(M.root,s),classes:h,component:c,onBlur:e=>{y(e),!1===j.current&&S(!1),b&&b(e)},onFocus:e=>{C(e),!0===j.current&&S(!0),p&&p(e)},ref:R,ownerState:D,variant:Z,sx:[...Object.keys(g).includes(i)?[]:[{color:i}],...Array.isArray(x)?x:[x]]},v))})},7138:function(e,r,n){"use strict";n.d(r,{default:function(){return o.a}});var t=n(231),o=n.n(t)},5821:function(e,r,n){"use strict";n.d(r,{GuestGuard:function(){return u}});var t=n(7437),o=n(2265),a=n(6463),l=n(8165),s=n(5240),i=n(4382),c=n(8692);function u(e){let{children:r}=e,n=(0,a.useRouter)(),{user:u,error:d,isLoading:m}=(0,c.a)(),[b,p]=o.useState(!0),h=async()=>{if(!m){if(d){p(!1),n.push(s.H.errors.notFound);return}if(u){i.k.debug("[GuestGuard]: User is logged in, redirecting to dashboard"),n.replace(s.H.dashboard.overview);return}p(!1)}};return(o.useEffect(()=>{h().catch(()=>{})},[u,d,m]),b)?null:d?(0,t.jsx)(l.Z,{color:"error",children:d}):(0,t.jsx)(o.Fragment,{children:r})}},1225:function(e,r,n){"use strict";n.d(r,{SignUpForm:function(){return N}});var t=n(7437),o=n(2265),a=n(7138),l=n(6463),s=n(1014),i=n(8165),c=n(5519),u=n(5786),d=n(8644),m=n(8038),b=n(437),p=n(6065),h=n(1665),f=n(866),Z=n(8929),x=n(3719),v=n(9343),g=n(9772),j=n(5240),y=n(3814),P=n(8692);let k=g.z.object({firstName:g.z.string().min(1,{message:"First name is required"}),lastName:g.z.string().min(1,{message:"Last name is required"}),email:g.z.string().min(1,{message:"Email is required"}).email(),password:g.z.string().min(6,{message:"Password should be at least 6 characters"}),terms:g.z.boolean().refine(e=>e,"You must accept the terms and conditions")}),w={firstName:"",lastName:"",email:"",password:"",terms:!1};function N(){let e=(0,l.useRouter)(),{checkSession:r}=(0,P.a)(),[n,g]=o.useState(!1),{control:N,handleSubmit:C,setError:F,formState:{errors:L}}=(0,v.cI)({defaultValues:w,resolver:(0,s.F)(k)}),S=o.useCallback(async n=>{g(!0);let{error:t}=await y.U.signUp(n);if(t){F("root",{type:"server",message:t}),g(!1);return}await (null==r?void 0:r()),e.refresh()},[r,e,F]);return(0,t.jsxs)(Z.Z,{spacing:3,children:[(0,t.jsxs)(Z.Z,{spacing:1,children:[(0,t.jsx)(x.Z,{variant:"h4",children:"Sign up"}),(0,t.jsxs)(x.Z,{color:"text.secondary",variant:"body2",children:["Already have an account?"," ",(0,t.jsx)(h.Z,{component:a.default,href:j.H.auth.signIn,underline:"hover",variant:"subtitle1",color:"#212636",children:"Sign in"})]})]}),(0,t.jsx)("form",{onSubmit:C(S),children:(0,t.jsxs)(Z.Z,{spacing:2,children:[(0,t.jsx)(v.Qr,{control:N,name:"firstName",render:e=>{let{field:r}=e;return(0,t.jsxs)(d.Z,{error:!!L.firstName,children:[(0,t.jsx)(p.Z,{children:"First name"}),(0,t.jsx)(f.Z,{...r,label:"First name"}),L.firstName?(0,t.jsx)(b.Z,{children:L.firstName.message}):null]})}}),(0,t.jsx)(v.Qr,{control:N,name:"lastName",render:e=>{let{field:r}=e;return(0,t.jsxs)(d.Z,{error:!!L.firstName,children:[(0,t.jsx)(p.Z,{children:"Last name"}),(0,t.jsx)(f.Z,{...r,label:"Last name"}),L.firstName?(0,t.jsx)(b.Z,{children:L.firstName.message}):null]})}}),(0,t.jsx)(v.Qr,{control:N,name:"email",render:e=>{let{field:r}=e;return(0,t.jsxs)(d.Z,{error:!!L.email,children:[(0,t.jsx)(p.Z,{children:"Email address"}),(0,t.jsx)(f.Z,{...r,label:"Email address",type:"email"}),L.email?(0,t.jsx)(b.Z,{children:L.email.message}):null]})}}),(0,t.jsx)(v.Qr,{control:N,name:"password",render:e=>{let{field:r}=e;return(0,t.jsxs)(d.Z,{error:!!L.password,children:[(0,t.jsx)(p.Z,{children:"Password"}),(0,t.jsx)(f.Z,{...r,label:"Password",type:"password"}),L.password?(0,t.jsx)(b.Z,{children:L.password.message}):null]})}}),(0,t.jsx)(v.Qr,{control:N,name:"terms",render:e=>{let{field:r}=e;return(0,t.jsxs)("div",{children:[(0,t.jsx)(m.Z,{control:(0,t.jsx)(u.Z,{...r}),label:(0,t.jsxs)(o.Fragment,{children:["I have read the ",(0,t.jsx)(h.Z,{variant:"subtitle1",color:"#212636",children:"terms and conditions"})]})}),L.terms?(0,t.jsx)(b.Z,{error:!0,children:L.terms.message}):null]})}}),L.root?(0,t.jsx)(i.Z,{color:"error",children:L.root.message}):null,(0,t.jsx)(c.Z,{disabled:n,type:"submit",variant:"contained",sx:{backgroundColor:"#1b3a69","&:hover":{backgroundColor:"#0f1e3c"}},children:"Sign up"})]})})]})}}},function(e){e.O(0,[342,919,472,125,87,781,907,296,165,704,786,131,971,23,744],function(){return e(e.s=5783)}),_N_E=e.O()}]);