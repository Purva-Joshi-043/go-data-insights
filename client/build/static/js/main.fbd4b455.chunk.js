(this["webpackJsonpgdi-assignment"]=this["webpackJsonpgdi-assignment"]||[]).push([[0],{127:function(e,t,a){"use strict";a.r(t);var n=a(0),s=a.n(n),r=a(11),i=a.n(r),c=(a(59),a(17)),o=a(185),l=a(174),d=a(172),j=a(181),u=a(170),b=a(129),h=a(182),g=a(168),O=a(79),m=a.n(O),p=a(56),x=a(171),f=a(184),v=a(180),y=a(176),w=a(177),C=a(173),S=a(179),k=a(175),I=a(80),P=a.n(I),A=a(178),D=a(81),F=a.n(D),N=a(64),W=a.n(N),E=a(10),q=a(186),z=a(187),T=a(169),Z=a(165),_=a(4);function R(){return Object(_.jsx)(Z.a,{position:"relative",style:{background:"linear-gradient(20deg, rgba(169, 18, 154, 1) 10%, rgba(84, 50, 153, 1) 44%, rgba(56, 105, 182, 1) 70%)"},children:Object(_.jsx)(g.a,{container:!0,spacing:2,justify:"space-between",children:Object(_.jsx)(g.a,{item:!0,children:Object(_.jsx)(T.a,{children:Object(_.jsx)(p.a,{variant:"h5",color:"inherit",className:"font",children:"Go Data Insights"})})})})})}function $(){return Object(_.jsxs)(p.a,{variant:"body2",align:"center",style:{color:"#fe60c7"},children:["Copyright \xa9 ",Object(_.jsx)(u.a,{color:"inherit",href:"https://www.godatainsights.com/",children:"Go Data Insights"})," ",(new Date).getFullYear(),"."]})}var G=Object(x.a)((function(e){return{paper:{margin:e.spacing(8,4),display:"flex",flexDirection:"column",alignItems:"center"},avatar:{margin:e.spacing(1),backgroundColor:e.palette.secondary.main,top:"-20px"},form:{width:"100%"},submit:{margin:e.spacing(3,0,2)},notchedOutline:{borderWidth:"1px",borderColor:"#920c61 !important"}}}));function L(){var e=G(),t=Object(n.useState)(""),a=Object(c.a)(t,2),r=a[0],i=a[1],u=Object(n.useState)(""),O=Object(c.a)(u,2),x=O[0],I=O[1],D=Object(E.f)(),N=Object(n.useState)(""),T=Object(c.a)(N,2),Z=T[0],L=T[1],Y=Object(n.useState)(""),B=Object(c.a)(Y,2),J=B[0],M=B[1],U=Object(n.useState)(""),V=Object(c.a)(U,2),H=V[0],K=V[1],Q=Object(n.useState)(""),X=Object(c.a)(Q,2),ee=X[0],te=X[1],ae=Object(n.useState)(""),ne=Object(c.a)(ae,2),se=ne[0],re=ne[1],ie=Object(n.useState)(""),ce=Object(c.a)(ie,2),oe=ce[0],le=ce[1],de=Object(n.useState)(""),je=Object(c.a)(de,2),ue=je[0],be=je[1],he=Object(n.useState)(""),ge=Object(c.a)(he,2),Oe=ge[0],me=ge[1],pe=Object(n.useState)(!1),xe=Object(c.a)(pe,2),fe=xe[0],ve=xe[1],ye=Object(n.useState)(""),we=Object(c.a)(ye,2),Ce=we[0],Se=we[1],ke=Object(n.useState)(""),Ie=Object(c.a)(ke,2),Pe=Ie[0],Ae=Ie[1];var De=function(e){e.preventDefault(),be(""),le("");var t={first_name:J,last_name:H,email:ee,password:se};""===J.trim()||""===H.trim()||""===se.trim()||""===ee.trim()?le("Please fill out all the required fields."):(le(""),se.length<5&&Se("The password must be of minimum length 6 characters."),""!==Oe?console.log("invalid email :<"):(me(""),W.a.post("https://go-data-insights.herokuapp.com/api/register/",t).then((function(e){console.log(e),L(!1),le(""),re(""),be(""),me(""),Se("")})).catch((function(e){"User Already Exist"===e.response.data.message?be("An account with ".concat(ee,"  already exists.\nPlease try a different Email Address. Remember, email addresses are not case sensitive.")):be(""),console.log(e.response.data.message)}))))};return Object(_.jsxs)(s.a.Fragment,{children:[Object(_.jsx)(d.a,{}),Object(_.jsx)(R,{}),Object(_.jsxs)(g.a,{component:"main",className:"root",children:[Object(_.jsx)(g.a,{className:"image",children:Object(_.jsx)("img",{src:"./../assets/images/vector.png",alt:"hh",style:{width:"100%",marginTop:"15%"}})}),Object(_.jsx)(g.a,{className:"section2",component:b.a,elevation:6,square:!0,children:Object(_.jsxs)("div",{className:e.paper,children:[Object(_.jsx)(o.a,{className:e.avatar,children:Object(_.jsx)(m.a,{})}),Object(_.jsx)(p.a,{component:"h1",variant:"h5",style:{marginTop:"-20px"},className:"font",children:"Sign in"}),Object(_.jsx)("img",{src:"./../assets/images/login.png",alt:"login",style:{height:"30%",width:"30%"}}),Object(_.jsxs)("form",{className:e.form,noValidate:!0,children:[Object(_.jsx)(j.a,{variant:"outlined",margin:"normal",required:!0,fullWidth:!0,id:"email",label:"Email Address",name:"email",autoComplete:"email",autoFocus:!0,onChange:function(e){return function(e){RegExp(/^[a-zA-Z0-9.!#$%&\u2019+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)$/).test(e)?(Ae(""),te(e)):Ae("Please enter a valid email.")}(e.target.value)},InputProps:{classes:{notchedOutline:e.notchedOutline}}}),void 0!==Pe&&Object(_.jsx)("p",{style:{color:"red"},children:Pe}),Object(_.jsx)(j.a,{variant:"outlined",margin:"normal",required:!0,fullWidth:!0,name:"password",label:"Password",type:"password",id:"password",autoComplete:"current-password",InputProps:{classes:{notchedOutline:e.notchedOutline}},onChange:function(e){return i(e.target.value)}}),void 0!==x&&Object(_.jsx)("p",{style:{color:"red"},children:x}),Object(_.jsx)(l.a,{type:"submit",fullWidth:!0,variant:"contained",className:e.submit,onClick:function(e){e.preventDefault(),console.log(ee),console.log(r);var t={email:ee,password:r};W.a.post("https://go-data-insights.herokuapp.com/api/login/",t).then((function(e){localStorage.setItem("token",e.data.access_token),D.push({pathname:"/dashboard"}),I("")})).catch((function(e){"Bad Email or Password"===e.response.data.message&&I("Invalid Email or Password"),console.log(e)}))},style:{background:"linear-gradient(20deg, rgba(169, 18, 154, 1) 10%, rgba(84, 50, 153, 1) 44%, rgba(56, 105, 182, 1) 70%)",color:"white"},children:"Sign In"}),Object(_.jsxs)(g.a,{container:!0,children:[Object(_.jsx)(g.a,{item:!0,xs:!0,children:Object(_.jsx)(l.a,{variant:"body2",style:{textTransform:"none",color:"#a61273"},children:"Forgot password?"})}),Object(_.jsxs)(g.a,{item:!0,children:[Object(_.jsx)(l.a,{variant:"body2",onClick:function(){L(!0)},style:{textTransform:"none",color:"#a61273"},children:"Don't have an account? Sign Up"}),Object(_.jsxs)(f.a,{open:Z,onClose:De,fullWidth:!0,"aria-labelledby":"form-dialog-title",children:[Object(_.jsxs)(k.a,{id:"form-dialog-title",style:{color:"#a61273"},children:["Signup Form :"," "]}),Object(_.jsxs)(y.a,{children:[Object(_.jsxs)(w.a,{children:["Enter Your Details :"," "]}),Object(_.jsx)(j.a,{autoFocus:!0,variant:"outlined",margin:"dense",id:"regfirstName",label:"First Name",type:"text",fullWidth:!0,required:!0,InputProps:{classes:{notchedOutline:e.notchedOutline}},onChange:function(e){return M(e.target.value)}}),Object(_.jsx)(j.a,{variant:"outlined",autoFocus:!0,margin:"dense",id:"regLastName",label:"Last Name",type:"text",fullWidth:!0,required:!0,InputProps:{classes:{notchedOutline:e.notchedOutline}},onChange:function(e){return K(e.target.value)}}),Object(_.jsx)(j.a,{variant:"outlined",autoFocus:!0,margin:"dense",id:"email",label:"Email",fullWidth:!0,required:!0,InputProps:{classes:{notchedOutline:e.notchedOutline}},onChange:function(e){return function(e){RegExp(/^[a-zA-Z0-9.!#$%&\u2019+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)$/).test(e)?(me(""),te(e)):me("Please enter a valid email.")}(e.target.value)}}),void 0!==ue&&Object(_.jsx)("p",{style:{color:"red"},children:ue}),void 0!==Oe&&Object(_.jsx)("p",{style:{color:"red"},children:Oe}),Object(_.jsxs)(C.a,{variant:"outlined",autoFocus:!0,fullWidth:!0,required:!0,size:"small",InputProps:{classes:{notchedOutline:e.notchedOutline}},children:[Object(_.jsx)(z.a,{htmlFor:"outlined-adornment-password",children:"Password"}),Object(_.jsx)(q.a,{variant:"outlined",id:"outlined-adornment-password",type:fe?"text":"password",onChange:function(e){return re(e.target.value)},endAdornment:Object(_.jsx)(A.a,{position:"end",children:Object(_.jsx)(S.a,{"aria-label":"toggle password visibility",onClick:function(){ve(!fe)},onMouseDown:function(e){e.preventDefault()},edge:"end",children:fe?Object(_.jsx)(P.a,{}):Object(_.jsx)(F.a,{})})}),labelWidth:80})]}),void 0!==Ce&&Object(_.jsx)("p",{style:{color:"red"},children:Ce}),void 0!==oe&&Object(_.jsx)("p",{style:{color:"red"},children:oe})]}),Object(_.jsx)("br",{}),Object(_.jsx)("br",{}),Object(_.jsxs)(v.a,{children:[Object(_.jsx)(l.a,{onClick:function(){L(!1),le(""),M(""),K(""),re(""),be(""),me(""),Se(""),I("")},style:{color:"#a61273",borderColor:"#a61273"},variant:"outlined",children:"Cancel"}),Object(_.jsx)(l.a,{onClick:De,style:{background:"linear-gradient(20deg, rgba(169, 18, 154, 1) 10%, rgba(84, 50, 153, 1) 44%, rgba(56, 105, 182, 1) 70%)",color:"white"},variant:"contained",children:"Register"})]})]})]})]}),Object(_.jsx)(h.a,{mt:5,children:Object(_.jsx)($,{})})]})]})})]})]})}function Y(){var e=Object(E.f)();function t(){return Object(_.jsxs)(p.a,{variant:"body2",style:{color:"#fe60c7",top:"90%",left:"50%",position:"absolute",textAlign:"center",transform:"translate(-50%,-50%)"},children:["Copyright \xa9 ",Object(_.jsx)(u.a,{color:"inherit",href:"https://www.godatainsights.com/",children:"Go Data Insights"})," ",(new Date).getFullYear(),"."]})}return Object(_.jsxs)(s.a.Fragment,{children:[Object(_.jsx)(d.a,{}),Object(_.jsx)(R,{}),Object(_.jsxs)("main",{children:[Object(_.jsx)("h2",{style:{textAlign:"center",marginTop:"15%",color:"#920c61"},children:"Welcome to the Dashboard !!"}),Object(_.jsx)(l.a,{style:{background:"linear-gradient(20deg, rgba(169, 18, 154, 1) 10%, rgba(84, 50, 153, 1) 44%, rgba(56, 105, 182, 1) 70%)",color:"white",marginTop:"40px",left:"50%",transform:"translate(-50%,-50%)"},onClick:function(){return e.push({pathname:"/"})},children:"Logout"})]}),Object(_.jsx)(t,{})]})}var B=a(51);var J=function(){return Object(_.jsx)(B.a,{children:Object(_.jsxs)(E.c,{children:[Object(_.jsx)(E.a,{exact:!0,path:"/",children:Object(_.jsx)(L,{})}),Object(_.jsx)(E.a,{exact:!0,path:"/dashboard",children:Object(_.jsx)(Y,{})})]})})};i.a.render(Object(_.jsx)(s.a.StrictMode,{children:Object(_.jsx)(J,{})}),document.getElementById("root"))},59:function(e,t,a){}},[[127,1,2]]]);
//# sourceMappingURL=main.fbd4b455.chunk.js.map