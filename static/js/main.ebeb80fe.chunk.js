(this.webpackJsonpcubchoo=this.webpackJsonpcubchoo||[]).push([[0],{158:function(e,a,t){e.exports=t(181)},163:function(e,a,t){},180:function(e,a,t){},181:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),i=t(9),l=t.n(i),c=t(123),o=t(124),s=t(145),u=t(142),m=t(23),d=(t(163),t(245)),p=t(232),E=t(229),g=t(240),h=t(231),v=t(242),b=t(226),f=t(183),w=t(241),y=t(228),q=t(128),x=t.n(q),k=t(77),N=t(227),C=t(143),O=t(107);var S=function(e,a){return"dain98@gmail.com"===e?"asdf;lkj4"===a||(alert("Incorrect Password!"),!1):(alert("User not found!"),!1)};function j(){return r.a.createElement(k.a,{variant:"body2",color:"textSecondary",align:"center"},"Copyright \xa9 ",r.a.createElement(b.a,{color:"inherit",href:"https://material-ui.com/"},"Your Website")," ",(new Date).getFullYear(),".")}var L=Object(N.a)((function(e){return{root:{height:"100vh"},image:{backgroundImage:"url(http://zenith.blue/i/t2vfh.jpg)",backgroundRepeat:"no-repeat",backgroundColor:"light"===e.palette.type?e.palette.grey[50]:e.palette.grey[900],backgroundSize:"cover",backgroundPosition:"center"},paper:{margin:e.spacing(8,4),display:"flex",flexDirection:"column",alignItems:"center"},avatar:{margin:e.spacing(1),backgroundColor:e.palette.secondary.main},form:{width:"100%",marginTop:e.spacing(1)},submit:{margin:e.spacing(3,0,2)}}})),P=function(e,a){console.log("props",e);var t=L();return r.a.createElement(C.a,{initialValues:{email:"",password:""},onSubmit:function(a,t){var n=t.setSubmitting;setTimeout((function(){n(!1),S(a.email,a.password)&&e.history.push("/main")}),500)},validationSchema:O.a().shape({email:O.b().email().required("Required"),password:O.b().required("No password provided.").min(8,"Password is too short - should be 8 characters minimum.").matches(/(?=.*[0-9])/,"Password must contain a number.")})},(function(e){var a=e.values,n=e.touched,i=e.errors,l=e.isSubmitting,c=e.handleChange,o=e.handleBlur,s=e.handleSubmit;return r.a.createElement(y.a,{container:!0,component:"main",className:t.root},r.a.createElement(E.a,null),r.a.createElement(y.a,{item:!0,xs:!1,sm:4,md:7,className:t.image}),r.a.createElement(y.a,{item:!0,xs:12,sm:8,md:5,component:f.a,elevation:6,square:!0},r.a.createElement("div",{className:t.paper},r.a.createElement(d.a,{className:t.avatar},r.a.createElement(x.a,null)),r.a.createElement(k.a,{component:"h1",variant:"h5"},"Sign in"),r.a.createElement("form",{className:t.form,onSubmit:s},r.a.createElement(g.a,{variant:"outlined",margin:"normal",required:!0,fullWidth:!0,id:"email",label:"Email Address",name:"email",autoComplete:"email",autoFocus:!0,value:a.email,onChange:c,onBlur:o,className:i.email&&n.email&&"error"}),i.email&&n.email&&r.a.createElement("div",{className:"input-feedback"},i.email),r.a.createElement(g.a,{variant:"outlined",margin:"normal",required:!0,fullWidth:!0,name:"password",label:"Password",type:"password",id:"password",autoComplete:"current-password",value:a.password,onChange:c,onBlur:o,className:i.password&&n.password&&"error"}),i.password&&n.password&&r.a.createElement("div",{className:"input-feedback"},i.password),r.a.createElement(h.a,{control:r.a.createElement(v.a,{value:"remember",color:"primary"}),label:"Remember me"}),r.a.createElement(p.a,{type:"submit",fullWidth:!0,variant:"contained",color:"primary",disabled:l,className:t.submit},"Sign In"),r.a.createElement(y.a,{container:!0},r.a.createElement(y.a,{item:!0,xs:!0},r.a.createElement(b.a,{href:"#",variant:"body2"},"Forgot password?")),r.a.createElement(y.a,{item:!0},r.a.createElement(b.a,{href:"#",variant:"body2"},"Don't have an account? Sign Up"))),r.a.createElement(w.a,{mt:5},r.a.createElement(j,null))))))}))},I=t(101),F=t(129),A=t(144),B=t(244),D=t(233),R=t(137),z=t.n(R),W=t(138),M=t.n(W),T=t(234),U=t(230),_=t(239),H=t(235),J=t(236),V=t(237),Y=t(238),G=t(130),K=t.n(G),Q=t(131),X=t.n(Q),Z=t(111),$=t.n(Z),ee=t(132),ae=t.n(ee),te=t(133),ne=t.n(te),re=t(134),ie=t.n(re),le=[{name:"Dashboard",url:"/main",id:1,icon:r.a.createElement(K.a,null)},{name:"User Settings",url:"/usersettings",id:2,icon:r.a.createElement(X.a,null),children:[{name:"Sample 1",url:"/sample1",id:1,icon:r.a.createElement($.a,null)},{name:"Sample 2",url:"/sample2",id:2,icon:r.a.createElement($.a,null)}]},{name:"Discord Settings",url:"/discordsettings",id:3,icon:r.a.createElement(ae.a,null),children:[{name:"osu!",url:"/osu",id:1,icon:r.a.createElement(ne.a,null)},{name:"League of Legends",url:"/LoL",id:2,icon:r.a.createElement(ie.a,null)}]}],ce=t(112),oe=function(){return r.a.createElement("div",null,r.a.createElement(k.a,{paragraph:!0},"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Rhoncus dolor purus non enim praesent elementum facilisis leo vel. Risus at ultrices mi tempus imperdiet. Semper risus in hendrerit gravida rutrum quisque non tellus. Convallis convallis tellus id interdum velit laoreet id donec ultrices. Odio morbi quis commodo odio aenean sed adipiscing. Amet nisl suscipit adipiscing bibendum est ultricies integer quis. Cursus euismod quis viverra nibh cras. Metus vulputate eu scelerisque felis imperdiet proin fermentum leo. Mauris commodo quis imperdiet massa tincidunt. Cras tincidunt lobortis feugiat vivamus at augue. At augue eget arcu dictum varius duis at consectetur lorem. Velit sed ullamcorper morbi tincidunt. Lorem donec massa sapien faucibus et molestie ac."),r.a.createElement(k.a,{paragraph:!0},"Consequat mauris nunc congue nisi vitae suscipit. Fringilla est ullamcorper eget nulla facilisi etiam dignissim diam. Pulvinar elementum integer enim neque volutpat ac tincidunt. Ornare suspendisse sed nisi lacus sed viverra tellus. Purus sit amet volutpat consequat mauris. Elementum eu facilisis sed odio morbi. Euismod lacinia at quis risus sed vulputate odio. Morbi tincidunt ornare massa eget egestas purus viverra accumsan in. In hendrerit gravida rutrum quisque non tellus orci ac. Pellentesque nec nam aliquam sem et tortor. Habitant morbi tristique senectus et. Adipiscing elit duis tristique sollicitudin nibh sit. Ornare aenean euismod elementum nisi quis eleifend. Commodo viverra maecenas accumsan lacus vel facilisis. Nulla posuere sollicitudin aliquam ultrices sagittis orci a."))},se=function(){return r.a.createElement("div",null,r.a.createElement("h2",null,"Test"))},ue=function(){return r.a.createElement("div",null,r.a.createElement("h2",null,"Test 2"))},me=function(){return r.a.createElement("div",null,r.a.createElement("h2",null,"hey im osu"))},de=function(){return r.a.createElement("div",null,r.a.createElement("h2",null,"hey im League of Legends"))},pe=Object(N.a)((function(e){return{root:{display:"flex"},appBar:{zIndex:e.zIndex.drawer+1},drawer:{width:240,flexShrink:0},drawerPaper:{width:240},drawerContainer:{overflow:"auto"},content:{flexGrow:1,padding:e.spacing(3)}}})),Ee=function(){var e=Object(m.g)(),a=pe();function t(e){return Object(ce.b)(e,{stiffness:330,damping:22})}var i=Object(n.useState)({}),l=Object(A.a)(i,2),c=l[0],o=l[1];function s(a){a!==e.location.pathname&&e.push(a)}return r.a.createElement("div",{className:a.root},r.a.createElement(E.a,null),r.a.createElement(D.a,{position:"fixed",className:a.appBar},r.a.createElement(T.a,null,r.a.createElement(k.a,{variant:"h6",noWrap:!0},"Kogomi"))),r.a.createElement(B.a,{className:a.drawer,variant:"permanent",classes:{paper:a.drawerPaper}},r.a.createElement(T.a,null),r.a.createElement("div",{className:a.drawerContainer},r.a.createElement(U.a,null,le.map((function(e,t){return e.children?r.a.createElement("div",{key:e.id},r.a.createElement(H.a,{button:!0,key:e.id,onClick:function(){return a=e.name,void o(Object(F.a)({},c,Object(I.a)({},a,!c[a])));var a}},r.a.createElement(J.a,null,e.icon),r.a.createElement(V.a,{primary:e.name}),c[e.name]?r.a.createElement(z.a,null):r.a.createElement(M.a,null)),r.a.createElement(Y.a,{key:e.children.id,component:"li",in:c[e.name],timeout:"auto",unmountOnExit:!0},r.a.createElement(U.a,{disablePadding:!0},e.children.map((function(t){return r.a.createElement(H.a,{button:!0,onClick:function(){return s(e.url+t.url)},className:a.content,key:t.id},r.a.createElement(V.a,{primary:t.name}))}))))," "," "):r.a.createElement(H.a,{button:!0,onClick:function(){return s(e.url)},key:e.id},r.a.createElement(J.a,null,e.icon),r.a.createElement(V.a,{primary:e.name}))}))),r.a.createElement(_.a,null))),r.a.createElement("main",{className:a.content},r.a.createElement(T.a,null),r.a.createElement(ce.a,{atEnter:{opacity:0,scale:1.2},atLeave:{opacity:t(0),scale:t(.8)},atActive:{opacity:t(1),scale:t(1)},mapStyles:function(e){return{opacity:e.opacity,transform:"scale(".concat(e.scale,")")}},runOnMount:!0,className:"route-wrapper"},r.a.createElement(m.b,{exact:!0,path:"/main",component:oe}),r.a.createElement(m.b,{exact:!0,path:"/usersettings/sample1",component:se}),r.a.createElement(m.b,{exact:!0,path:"/usersettings/sample2",component:ue}),r.a.createElement(m.b,{exact:!0,path:"/discordsettings/osu",component:me}),r.a.createElement(m.b,{exact:!0,path:"/discordsettings/LoL",component:de}))))},ge=t(115),he=t.n(ge),ve=t(139),be=t(41),fe=function(e){console.log("props",e);var a=function(){var e=Object(ve.a)(he.a.mark((function e(a){var t,n,r;return he.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=new URL("https://discordapp.com/api/oauth2/authorize?client_id=438239507565903872&redirect_uri=http%3A%2F%2Flocalhost%3A3000%2Fmain&response_type=code&scope=identify"),e.next=3,fetch(t,{signal:a});case 3:return n=e.sent,e.next=6,n.json();case 6:r=e.sent,r.value,console.log(n);case 9:case"end":return e.stop()}}),e)})));return function(a){return e.apply(this,arguments)}}();return r.a.createElement("div",null,r.a.createElement("h2",null,"Home"),r.a.createElement("ul",null,e.authed?r.a.createElement("li",null,r.a.createElement(be.b,{to:"/main"},"Login")):r.a.createElement("li",null,r.a.createElement(be.b,{to:"/login"},"Login")),r.a.createElement("li",null,r.a.createElement(be.b,{onClick:a},"Login with Discord"))))},we=function(e){return r.a.createElement("div",null,"Error 404")},ye=function(e){Object(s.a)(t,e);var a=Object(u.a)(t);function t(e){var n;return Object(c.a)(this,t),(n=a.call(this,e)).state={authed:!1,loggedIn:!0},n}return Object(o.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement("div",null,r.a.createElement(m.d,null,r.a.createElement(m.b,{exact:!0,path:"/",render:function(){return r.a.createElement(fe,{authed:e.state.authed})}}),r.a.createElement(m.b,{exact:!0,path:"/main",component:Ee}),r.a.createElement(m.b,{path:"/usersettings",component:Ee}),r.a.createElement(m.b,{path:"/discordsettings",component:Ee}),r.a.createElement(m.b,{exact:!0,path:"/login",component:P}),r.a.createElement(m.b,{exact:!0,path:"/NotFound",component:we}),r.a.createElement(m.a,{to:"/NotFound"})))}}]),t}(r.a.Component),qe=(t(180),t(141)),xe=t(102),ke={loggedIn:!1,authed:!1},Ne=Object(xe.b)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ke;arguments.length>1&&arguments[1];return e})),Ce=document.getElementById("root");l.a.render(r.a.createElement(qe.a,{store:Ne},r.a.createElement(be.a,null,r.a.createElement(ye,null))),Ce)}},[[158,1,2]]]);
//# sourceMappingURL=main.ebeb80fe.chunk.js.map