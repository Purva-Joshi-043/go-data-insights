(this["webpackJsonpgdi-assignment"]=this["webpackJsonpgdi-assignment"]||[]).push([[0],{127:function(e,t,a){"use strict";a.r(t);var n=a(0),s=a.n(n),r=a(11),o=a.n(r),i=(a(60),a(17)),c=a(185),l=a(174),d=a(172),j=a(181),u=a(170),h=a(129),b=a(182),g=a(168),m=a(79),p=a.n(m),O=a(57),x=a(171),f=a(184),v=a(180),y=a(176),w=a(177),C=a(173),k=a(179),S=a(175),A=a(80),I=a.n(A),F=a(178),N=a(81),P=a.n(N),D=a(48),E=a.n(D),W=a(10),T=a(186),z=a(187),q=a(169),Z=a(165),_=a(4);function R(){return Object(_.jsx)(Z.a,{position:"relative",style:{background:"linear-gradient(20deg, rgba(169, 18, 154, 1) 10%, rgba(84, 50, 153, 1) 44%, rgba(56, 105, 182, 1) 70%)"},children:Object(_.jsx)(g.a,{container:!0,spacing:2,justify:"space-between",children:Object(_.jsx)(g.a,{item:!0,children:Object(_.jsx)(q.a,{children:Object(_.jsx)(O.a,{variant:"h5",color:"inherit",className:"font",children:"Go Data Insights"})})})})})}function $(){return Object(_.jsxs)(O.a,{variant:"body2",align:"center",style:{color:"#fe60c7"},children:["Copyright \xa9 ",Object(_.jsx)(u.a,{color:"inherit",href:"https://www.godatainsights.com/",children:"Go Data Insights"})," ",(new Date).getFullYear(),"."]})}var B=Object(x.a)((function(e){return{paper:{margin:e.spacing(8,4),display:"flex",flexDirection:"column",alignItems:"center"},avatar:{margin:e.spacing(1),backgroundColor:e.palette.secondary.main,top:"-20px"},form:{width:"100%"},submit:{margin:e.spacing(3,0,2)},notchedOutline:{borderWidth:"1px",borderColor:"#920c61 !important"}}}));function G(){var e=B(),t=Object(n.useState)(""),a=Object(i.a)(t,2),r=a[0],o=a[1],u=Object(n.useState)(""),m=Object(i.a)(u,2),x=m[0],A=m[1],N=Object(W.f)(),D=Object(n.useState)(""),q=Object(i.a)(D,2),Z=q[0],G=q[1],L=Object(n.useState)(""),M=Object(i.a)(L,2),U=M[0],Y=M[1],J=Object(n.useState)(""),H=Object(i.a)(J,2),V=H[0],K=H[1],Q=Object(n.useState)(""),X=Object(i.a)(Q,2),ee=X[0],te=X[1],ae=Object(n.useState)(""),ne=Object(i.a)(ae,2),se=ne[0],re=ne[1],oe=Object(n.useState)(""),ie=Object(i.a)(oe,2),ce=ie[0],le=ie[1],de=Object(n.useState)(""),je=Object(i.a)(de,2),ue=je[0],he=je[1],be=Object(n.useState)(""),ge=Object(i.a)(be,2),me=ge[0],pe=ge[1],Oe=Object(n.useState)(!1),xe=Object(i.a)(Oe,2),fe=xe[0],ve=xe[1],ye=Object(n.useState)(""),we=Object(i.a)(ye,2),Ce=we[0],ke=we[1],Se=Object(n.useState)(""),Ae=Object(i.a)(Se,2),Ie=Ae[0],Fe=Ae[1];var Ne=function(e){e.preventDefault(),he(""),le("");var t={first_name:U,last_name:V,email:ee,password:se};""===U.trim()||""===V.trim()||""===se.trim()||""===ee.trim()?le("Please fill out all the required fields."):(le(""),se.length<5&&ke("The password must be of minimum length 6 characters."),""!==me?console.log("invalid email :<"):(pe(""),E.a.post("https://go-data-insights.herokuapp.com/api/register/",t).then((function(e){console.log(e),G(!1),le(""),re(""),he(""),pe(""),ke("")})).catch((function(e){"User Already Exist"===e.response.data.message?he("An account with ".concat(ee,"  already exists.\nPlease try a different Email Address. Remember, email addresses are not case sensitive.")):he(""),console.log(e.response.data.message)}))))};return Object(_.jsxs)(s.a.Fragment,{children:[Object(_.jsx)(d.a,{}),Object(_.jsx)(R,{}),Object(_.jsxs)(g.a,{component:"main",className:"root",children:[Object(_.jsx)(g.a,{className:"image",children:Object(_.jsx)("img",{src:"./../assets/images/vector.png",alt:"hh",style:{width:"100%",marginTop:"15%"}})}),Object(_.jsx)(g.a,{className:"section2",component:h.a,elevation:6,square:!0,children:Object(_.jsxs)("div",{className:e.paper,children:[Object(_.jsx)(c.a,{className:e.avatar,children:Object(_.jsx)(p.a,{})}),Object(_.jsx)(O.a,{component:"h1",variant:"h5",style:{marginTop:"-20px"},className:"font",children:"Sign in"}),Object(_.jsx)("img",{src:"./../assets/images/login.png",alt:"login",style:{height:"30%",width:"30%"}}),Object(_.jsxs)("form",{className:e.form,noValidate:!0,children:[Object(_.jsx)(j.a,{variant:"outlined",margin:"normal",required:!0,fullWidth:!0,id:"email",label:"Email Address",name:"email",autoComplete:"email",autoFocus:!0,onChange:function(e){return function(e){RegExp(/^[a-zA-Z0-9.!#$%&\u2019+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)$/).test(e)?(Fe(""),te(e)):Fe("Please enter a valid email.")}(e.target.value)},InputProps:{classes:{notchedOutline:e.notchedOutline}}}),void 0!==Ie&&Object(_.jsx)("p",{style:{color:"red"},children:Ie}),Object(_.jsx)(j.a,{variant:"outlined",margin:"normal",required:!0,fullWidth:!0,name:"password",label:"Password",type:"password",id:"password",autoComplete:"current-password",InputProps:{classes:{notchedOutline:e.notchedOutline}},onChange:function(e){return o(e.target.value)}}),void 0!==x&&Object(_.jsx)("p",{style:{color:"red"},children:x}),Object(_.jsx)(l.a,{type:"submit",fullWidth:!0,variant:"contained",className:e.submit,onClick:function(e){e.preventDefault(),console.log(ee),console.log(r);var t={email:ee,password:r};E.a.post("https://go-data-insights.herokuapp.com/api/login/",t).then((function(e){localStorage.setItem("token",e.data.access_token),N.push({pathname:"/dashboard"}),A("")})).catch((function(e){"Bad Email or Password"===e.response.data.message&&A("Invalid Email or Password"),console.log(e)}))},style:{background:"linear-gradient(20deg, rgba(169, 18, 154, 1) 10%, rgba(84, 50, 153, 1) 44%, rgba(56, 105, 182, 1) 70%)",color:"white"},children:"Sign In"}),Object(_.jsxs)(g.a,{container:!0,children:[Object(_.jsx)(g.a,{item:!0,xs:!0,children:Object(_.jsx)(l.a,{variant:"body2",style:{textTransform:"none",color:"#a61273"},children:"Forgot password?"})}),Object(_.jsxs)(g.a,{item:!0,children:[Object(_.jsx)(l.a,{variant:"body2",onClick:function(){G(!0)},style:{textTransform:"none",color:"#a61273"},children:"Don't have an account? Sign Up"}),Object(_.jsxs)(f.a,{open:Z,onClose:Ne,fullWidth:!0,"aria-labelledby":"form-dialog-title",children:[Object(_.jsxs)(S.a,{id:"form-dialog-title",style:{color:"#a61273"},children:["Signup Form :"," "]}),Object(_.jsxs)(y.a,{children:[Object(_.jsxs)(w.a,{children:["Enter Your Details :"," "]}),Object(_.jsx)(j.a,{autoFocus:!0,variant:"outlined",margin:"dense",id:"regfirstName",label:"First Name",type:"text",fullWidth:!0,required:!0,InputProps:{classes:{notchedOutline:e.notchedOutline}},onChange:function(e){return Y(e.target.value)}}),Object(_.jsx)(j.a,{variant:"outlined",autoFocus:!0,margin:"dense",id:"regLastName",label:"Last Name",type:"text",fullWidth:!0,required:!0,InputProps:{classes:{notchedOutline:e.notchedOutline}},onChange:function(e){return K(e.target.value)}}),Object(_.jsx)(j.a,{variant:"outlined",autoFocus:!0,margin:"dense",id:"email",label:"Email",fullWidth:!0,required:!0,InputProps:{classes:{notchedOutline:e.notchedOutline}},onChange:function(e){return function(e){RegExp(/^[a-zA-Z0-9.!#$%&\u2019+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)$/).test(e)?(pe(""),te(e)):pe("Please enter a valid email.")}(e.target.value)}}),void 0!==ue&&Object(_.jsx)("p",{style:{color:"red"},children:ue}),void 0!==me&&Object(_.jsx)("p",{style:{color:"red"},children:me}),Object(_.jsxs)(C.a,{variant:"outlined",autoFocus:!0,fullWidth:!0,required:!0,size:"small",InputProps:{classes:{notchedOutline:e.notchedOutline}},children:[Object(_.jsx)(z.a,{htmlFor:"outlined-adornment-password",children:"Password"}),Object(_.jsx)(T.a,{variant:"outlined",id:"outlined-adornment-password",type:fe?"text":"password",onChange:function(e){return re(e.target.value)},endAdornment:Object(_.jsx)(F.a,{position:"end",children:Object(_.jsx)(k.a,{"aria-label":"toggle password visibility",onClick:function(){ve(!fe)},onMouseDown:function(e){e.preventDefault()},edge:"end",children:fe?Object(_.jsx)(I.a,{}):Object(_.jsx)(P.a,{})})}),labelWidth:80})]}),void 0!==Ce&&Object(_.jsx)("p",{style:{color:"red"},children:Ce}),void 0!==ce&&Object(_.jsx)("p",{style:{color:"red"},children:ce})]}),Object(_.jsx)("br",{}),Object(_.jsx)("br",{}),Object(_.jsxs)(v.a,{children:[Object(_.jsx)(l.a,{onClick:function(){G(!1),le(""),Y(""),K(""),re(""),he(""),pe(""),ke(""),A("")},style:{color:"#a61273",borderColor:"#a61273"},variant:"outlined",children:"Cancel"}),Object(_.jsx)(l.a,{onClick:Ne,style:{background:"linear-gradient(20deg, rgba(169, 18, 154, 1) 10%, rgba(84, 50, 153, 1) 44%, rgba(56, 105, 182, 1) 70%)",color:"white"},variant:"contained",children:"Register"})]})]})]})]}),Object(_.jsx)(b.a,{mt:5,children:Object(_.jsx)($,{})})]})]})})]})]})}function L(){return Object(_.jsxs)(O.a,{variant:"body2",style:{color:"#fe60c7",top:"90%",left:"50%",position:"absolute",textAlign:"center",transform:"translate(-50%,-50%)"},children:["Copyright \xa9 ",Object(_.jsx)(u.a,{color:"inherit",href:"https://www.godatainsights.com/",children:"Go Data Insights"})," ",(new Date).getFullYear(),"."]})}function M(){var e=Object(W.f)(),t=function(){e.push({pathname:"/"})};null===localStorage.getItem("token")&&t();var a={headers:{"Content-Type":"application/json;charset=UTF-8","Access-Control-Allow-Origin":"*",Authorization:"Bearer "+localStorage.getItem("token")}};return Object(n.useEffect)((function(){E.a.get("https://go-data-insights.herokuapp.com/api/dashboard/",a).then((function(e){console.log("success")})).catch((function(e){"Missing Authorization Header"!==e.response.data.msg&&"Token has expired"!==e.response.data.msg&&"Not enough segments"!==e.response.data.msg||t(),console.log(e.response.data)}))}),[]),Object(_.jsxs)(s.a.Fragment,{children:[Object(_.jsx)(d.a,{}),Object(_.jsx)(R,{}),Object(_.jsxs)("main",{children:[Object(_.jsx)("h2",{style:{textAlign:"center",marginTop:"15%",color:"#920c61"},children:"Welcome to the Dashboard !!"}),Object(_.jsx)(l.a,{style:{background:"linear-gradient(20deg, rgba(169, 18, 154, 1) 10%, rgba(84, 50, 153, 1) 44%, rgba(56, 105, 182, 1) 70%)",color:"white",marginTop:"40px",left:"50%",transform:"translate(-50%,-50%)"},onClick:function(){localStorage.clear("token"),e.push({pathname:"/"})},children:"Logout"})]}),Object(_.jsx)(L,{})]})}var U=a(52);var Y=function(){return Object(_.jsx)(U.a,{children:Object(_.jsxs)(W.c,{children:[Object(_.jsx)(W.a,{exact:!0,path:"/",children:Object(_.jsx)(G,{})}),Object(_.jsx)(W.a,{path:"/dashboard",children:Object(_.jsx)(M,{})})]})})};o.a.render(Object(_.jsx)(s.a.StrictMode,{children:Object(_.jsx)(Y,{})}),document.getElementById("root"))},60:function(e,t,a){}},[[127,1,2]]]);
//# sourceMappingURL=main.eae7e8e9.chunk.js.map