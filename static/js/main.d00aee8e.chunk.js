(this["webpackJsonpnews-ripo"]=this["webpackJsonpnews-ripo"]||[]).push([[0],{253:function(e,t,a){},291:function(e,t,a){},292:function(e,t,a){},629:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),s=a(15),r=a.n(s),i=(a(253),a(41)),o=a(38),l=a(234),d=a(11),j=a(236),u=a(122),b=a(680),h=a(222),O=a(666),p=a(682),x=a(671),g=a(232),m=a.n(g),f=a(21),v=a(49),y=a(31),w=(a(102),a(120));a(270),a(271);w.a.initializeApp({apiKey:"AIzaSyA_UrbjJqf12-cSVitKQw0s-ugTsPnzi2I",authDomain:"myproject-55f30.firebaseapp.com",projectId:"myproject-55f30",storageBucket:"myproject-55f30.appspot.com",messagingSenderId:"518892027628",appId:"1:518892027628:web:90b8555ea581e070df2fc9",measurementId:"G-EJLTRNS2HS"});var S=w.a.auth(),I=w.a.firestore(),C=a(48),k=a(118),N=a.n(k),D=a(228),T=a(675),E=a(676),U=a(665),F=a(667),W=a(668),_=a(669),A=a(670),P=a(681),V=a(664),q=a(4),L=Object(V.a)((function(e){return{root:{width:"80vw",height:"80vh",backgroundColor:e.palette.grey[200],paddingTop:e.spacing(5)},media:{height:"138px",width:"180px",paddingBottom:"12px"}}})),M=function(e){console.log("first step props me--",e);var t=Object(n.useContext)(ae),a=(t.setStep,t.userData),s=t.setUserData,r=(t.submitData,t.UpdateNews),i=t.docID,l=t.userID,j=t.setSecondStep,h=t.innerdata;console.log(Object(n.useContext)(ae));var p=L(),g=Object(n.useState)([]),m=Object(d.a)(g,2),f=(m[0],m[1]),v=Object(n.useState)(h||[]),y=Object(d.a)(v,2),w=y[0],S=y[1],I=c.a.useState([]),k=Object(d.a)(I,2),N=k[0],D=k[1],T=function(e){return function(){var t=N.indexOf(e),n=Object(C.a)(N);-1===t?n.push(e):n.splice(t,1),D(n),f(n),s(Object(o.a)(Object(o.a)({},a),{},{newsitem:n}))}};return console.log(l),Object(n.useEffect)((function(){w.newsitem?D(w.newsitem):D([]),console.log(h),S(h)}),[h]),console.log("first step me userData--",w.newsitem),Object(q.jsxs)(q.Fragment,{children:[Object(q.jsx)("h2",{align:"center",children:"Choose News here..."}),Object(q.jsx)(U.a,{className:p.root,children:Object(q.jsxs)(O.a,{container:!0,align:"center",spacing:3,children:[Object(q.jsx)(O.a,{item:!0,sm:3,children:Object(q.jsx)(F.a,{children:Object(q.jsxs)(W.a,{children:[Object(q.jsx)(_.a,{className:p.media,component:"img",image:"/KhabarWala/news_images/TimesOfIndia1.png"}),Object(q.jsx)(A.a,{children:Object(q.jsxs)(u.a,{variant:"subtitle1",children:[Object(q.jsx)(P.a,{checked:!!(null===N||void 0===N?void 0:N.includes("The Times of India")),onChange:T("The Times of India"),name:"The Times of India"}),"The Times of India"]})})]})})}),Object(q.jsx)(O.a,{item:!0,sm:3,children:Object(q.jsx)(F.a,{children:Object(q.jsxs)(W.a,{children:[Object(q.jsx)(_.a,{component:"img",image:"/KhabarWala/news_images/Hindustantimes.png"}),Object(q.jsx)(A.a,{children:Object(q.jsxs)(u.a,{variant:"subtitle1",children:[Object(q.jsx)(P.a,{checked:!!(null===N||void 0===N?void 0:N.includes("Hindustan Times")),onChange:T("Hindustan Times"),name:"Hindustan Times"}),"Hindustan Times"]})})]})})}),Object(q.jsx)(O.a,{item:!0,sm:3,children:Object(q.jsx)(F.a,{children:Object(q.jsxs)(W.a,{children:[Object(q.jsx)(_.a,{className:p.media,component:"img",image:"/KhabarWala/news_images/IndianExpress.jpg"}),Object(q.jsx)(A.a,{children:Object(q.jsxs)(u.a,{variant:"subtitle1",children:[Object(q.jsx)(P.a,{checked:!!(null===N||void 0===N?void 0:N.includes("The Indian Express")),onChange:T("The Indian Express"),name:"The Indian Express"}),"The Indian Express"]})})]})})}),Object(q.jsx)(O.a,{item:!0,sm:3,children:Object(q.jsx)(F.a,{children:Object(q.jsxs)(W.a,{children:[Object(q.jsx)(_.a,{className:p.media,component:"img",image:"/KhabarWala/news_images/ndtv.jpg"}),Object(q.jsx)(A.a,{children:Object(q.jsxs)(u.a,{variant:"subtitle1",children:[Object(q.jsx)(P.a,{checked:!!(null===N||void 0===N?void 0:N.includes("NDTV News")),onChange:T("NDTV News"),name:"NDTV News"}),"NDTV News"]})})]})})}),Object(q.jsx)(b.a,{ml:2,children:""===i?Object(q.jsx)(x.a,{variant:"contained",onClick:function(){return j("secondStep")},color:"primary",children:"Next"}):Object(q.jsx)(x.a,{type:"submit",variant:"contained",onClick:function(){return r()},color:"secondary",children:"Update"})})]})})]})},B=a(663),R=a(672),H=a(673),K=a(674),z=Object(V.a)((function(e){return{root:{width:"100%",maxWidth:360,backgroundColor:e.palette.background.paper}}})),J=function(){var e=Object(n.useContext)(ae),t=(e.setStep,e.userData),a=e.setUserData,s=e.submitData,r=e.innerdata,i=e.docID,l=e.UpdateCategory,j=e.setSecondStep,u=Object(n.useState)(r||[]),h=Object(d.a)(u,2),O=h[0],p=h[1],g=z(),m=c.a.useState([]),f=Object(d.a)(m,2),v=f[0],y=f[1],w=function(e){return function(){var n=v.indexOf(e),c=Object(C.a)(v);-1===n?c.push(e):c.splice(n,1),y(c),a(Object(o.a)(Object(o.a)({},t),{},{category:c})),console.log("value from list",c)}};return Object(n.useEffect)((function(){O.category&&y(O.category),p(r)}),[r]),console.log("second wale me category--",O.category),Object(q.jsxs)(q.Fragment,{children:[Object(q.jsx)("h2",{align:"center",children:"Choose News Category here..."}),Object(q.jsxs)("div",{align:"center",children:[Object(q.jsx)(B.a,{className:g.root,children:["health","sports","entertainment","business"].map((function(e){var t="checkbox-list-label-".concat(e);return Object(q.jsxs)(R.a,{role:void 0,dense:!0,button:!0,onClick:w(e),children:[Object(q.jsx)(H.a,{children:Object(q.jsx)(P.a,{edge:"start",checked:!!(null===v||void 0===v?void 0:v.includes(e)),tabIndex:-1,disableRipple:!0,inputProps:{"aria-labelledby":t}})}),Object(q.jsx)(K.a,{id:t,primary:"".concat(e)})]},e)}))}),Object(q.jsxs)(b.a,{m:2,p:2,style:{display:"flex",width:"100%",justifyContent:"space-evenly"},children:[i?null:Object(q.jsx)(x.a,{variant:"contained",onClick:function(){return j("firstStep")},color:"secondary",children:"Back"}),""===i?Object(q.jsx)(x.a,{type:"submit",variant:"contained",onClick:function(){return s()},color:"primary",children:"Submit"}):Object(q.jsx)(x.a,{variant:"contained",type:"submit",onClick:function(){return l()},color:"Secondary",children:"Update"})]})]})]})},G=a(229),Q=a(230),X=a(34),Y=Object(X.a)(),Z=new(function(){function e(){Object(G.a)(this,e),Y.listen((function(e){}))}return Object(Q.a)(e,[{key:"history",get:function(){return Y}}]),e}()),$=(a(273),a(291),function(e){var t=e.newsItem,a=new Date(t.publishedAt).toString().split(" "),n=parseInt(a[4].substring(0,2)),c=n>12;return Object(q.jsxs)("div",{className:"newsCard",style:{display:"flex",width:"100%",boxShadow:"0 2px 5px 0 rgba(0, 0, 0, 0.16), 0 2px 10px 0 rgba(0, 0, 0, 0.12)",padding:"10px",marginBottom:"25px",borderRadius:"5px"},children:[Object(q.jsx)("img",{className:"newsImage",style:{objectFit:"cover",width:"320px",height:"268px"},alt:t.title,src:t.urlToImage?t.urlToImage:"https://i2.wp.com/vibrant-technik.com/wp-content/uploads/2018/01/placeholder-image.png?ssl=1"}),Object(q.jsxs)("div",{style:{padding:"0 0 0 10px",display:"flex",flexDirection:"column",justifyContent:"space-between"},children:[Object(q.jsxs)("div",{children:[Object(q.jsx)("span",{style:{fontSize:"22px",lineHeight:"27px",fontFamily:'"Roboto", sans-serif'},children:t.title})," ",Object(q.jsxs)("span",{style:{fontSize:"12px",fontWeight:300,lineHeight:"22px",color:"#808290"},children:[Object(q.jsx)("a",{href:t.url,target:"_blank",children:Object(q.jsx)("b",{children:"published"})})," ",Object(q.jsxs)("span",{style:{fontWeight:100},children:["by ",t.author?t.author:"unknown","/"," ",c?"".concat(n-12,":").concat(a[4].substring(3,5)," pm"):"".concat(n,":").concat(a[4].substring(3,5)," am")," ","on ",a[2]," ",a[1]," ",a[3],", ",a[0]]})]})]}),Object(q.jsxs)("div",{style:{display:"flex",flexDirection:"column",justifyContent:"space-between",flex:1,padding:"10px 0"},children:[Object(q.jsx)("div",{style:{fontSize:"16px",lineHeight:"22px",color:"#44444d"},children:t.description}),Object(q.jsxs)("span",{style:{fontSize:"12px",fontWeight:400,paddingTop:"10px"},children:["Read more at"," ",Object(q.jsx)("a",{href:t.url,target:"_blank",children:Object(q.jsx)("b",{children:t.source.name})})]})]})]})]})}),ee=(a(292),function(e){var t=e.newsArray,a=e.newsResults,n=e.loadmore,c=e.setLoadmore;e.setStep;return Object(q.jsx)(q.Fragment,{children:Object(q.jsx)(U.a,{maxWidth:"md",children:Object(q.jsxs)("div",{style:{padding:"20px",display:"flex",flexDirection:"column",alignItems:"center"},children:[Object(q.jsx)("div",{className:"downloadMessage",style:{width:"95%",display:"flex",alignItems:"center",background:"#f44336",height:"48px",padding:"0 48px",margin:"20px 0 35px 0",color:"white",boxShadow:"0 2px 5px 0 rgba(0,0,0, 0.16), 0 2px 10px 0 rgba(0,0,0,0.12)"},children:Object(q.jsx)("div",{className:"container-fluid nav_bg",children:Object(q.jsx)("div",{className:"row",children:Object(q.jsx)("div",{className:"col-10 mx-auto",children:Object(q.jsx)("nav",{className:"navbar navbar-expand-lg navbar-light bg-light",children:Object(q.jsx)("div",{className:"container-fluid",children:Object(q.jsx)("div",{className:"collapse navbar-collapse",id:"navbarSupportedContent",children:Object(q.jsxs)("ul",{className:"navbar-nav ms-auto mb-2 mb-lg-0",children:[Object(q.jsx)("button",{variant:"contained",color:"primary",children:Object(q.jsx)("li",{className:"nav-item",children:Object(q.jsx)(i.b,{className:"nav-link",to:"/selectNews",children:"Edit News"})})}),"   ",Object(q.jsx)("button",{variant:"contained",color:"primary",children:Object(q.jsx)("li",{className:"nav-item",children:Object(q.jsx)(i.b,{className:"nav-link",to:"/selectCategory",children:"Edit Category"})})})]})})})})})})})}),t.map((function(e){return Object(q.jsx)($,{newsItem:e},e.title)})),n<=a&&Object(q.jsxs)(q.Fragment,{children:[Object(q.jsx)("hr",{}),Object(q.jsx)("button",{onClick:function(){c(n+5)},className:"loadMore",children:"Load More"})]})]})})})}),te=(a(296),Object(f.h)((function(e){e.user,e.existuser,e.category,e.news;var t=e.isAuthenticate,a=c.a.useState(!0),s=Object(d.a)(a,2),r=s[0],i=(s[1],Object(n.useContext)(ae)),o=(i.currentStep,i.finalData,i.setSecondStep,i.docID),l=i.secondStep,j=(i.innerdata,i.userID),b=(i.isData,Object(n.useState)([])),h=Object(d.a)(b,2),O=h[0],p=h[1],g=Object(n.useState)(),m=Object(d.a)(g,2),v=m[0],w=m[1],k=Object(n.useState)(3),U=Object(d.a)(k,2),F=U[0],W=U[1],_=Object(n.useState)([]),A=Object(d.a)(_,2),P=A[0],V=A[1],L=Object(n.useState)([]),B=Object(d.a)(L,2),R=B[0],H=B[1],K=Object(n.useState)(""),z=Object(d.a)(K,2),G=z[0],Q=z[1];Object(f.g)();console.log("doc id----",o),Object(n.useEffect)((function(){X(),Y(),t.onAuthentication()}),[j,P]);var X=function(){j?I.collection("users_news_category").where("userId","==",j).onSnapshot((function(e){e.docs.map((function(e){Q(e.data().userId),V(e.data().category),H(e.data().newsitem)}))})):console.log("kuch ni mila fir se dekh..le")};console.log("category 1---",P),console.log("News 1---",R),console.log("exist user 1---",G);var Y=function(){var e=Object(D.a)(N.a.mark((function e(){var t,a,n,c,s,r,i;return N.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=[],a=[],n=P.map((function(e){return fetch("https://saurav.tech/NewsAPI/top-headlines/category/".concat(e,"/in.json")).then((function(e){return e.json()}))})),e.next=5,Promise.all(n);case 5:c=e.sent,t.push.apply(t,Object(C.a)(c)),s=t.map((function(e){return e.articles})),r=a.concat.apply(a,Object(C.a)(s)),(i=r.filter((function(e){return R.includes(e.source.name)}))).length>1?(p(i),w(i.length)):console.log("home page no data in array ");case 11:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();console.log("news array--",O);var $;return j===G&&o?$=Object(q.jsx)(ee,{setLoadmore:W,loadmore:F,newsArray:O,newsResults:v}):""===G&&""===o&&(console.log("home me phle yha a raha h qa"),$=Object(q.jsx)(M,{})),"secondStep"===l&&($=Object(q.jsx)(J,{})),"firstStep"===l&&(console.log("yha se aaraha h ?"),$=Object(q.jsx)(M,{})),Object(q.jsx)(q.Fragment,{children:r&&Object(q.jsxs)(q.Fragment,{children:[Object(q.jsx)(y.a,{}),Object(q.jsx)("div",{style:{flexGrow:1},children:Object(q.jsx)(T.a,{position:"sticky",children:Object(q.jsxs)(E.a,{children:[Object(q.jsx)(u.a,{variant:"h6",style:{flexGrow:1},children:Object(q.jsx)("b",{children:"KhabarWala"})}),Object(q.jsx)(x.a,{color:"inherit",onClick:function(){S.signOut().then((function(){localStorage.removeItem("user"),Z.history.replace("/KhabarWala/")})).catch(console.error)},children:Object(q.jsx)("b",{children:"Logout"})})]})})}),$]})})}))),ae=c.a.createContext(),ne=Object(f.h)((function(e){var t=e.children,a=(e.props,Object(n.useState)(0)),c=Object(d.a)(a,2),s=c[0],r=c[1],i=Object(n.useState)(""),o=Object(d.a)(i,2),l=o[0],j=o[1],u=Object(n.useState)([]),b=Object(d.a)(u,2),h=b[0],O=b[1],p=Object(n.useState)([]),x=Object(d.a)(p,2),g=x[0],m=x[1],v=Object(n.useState)([]),w=Object(d.a)(v,2),k=w[0],N=w[1],D=Object(n.useState)(""),T=Object(d.a)(D,2),E=T[0],U=T[1],F=Object(n.useState)(""),W=Object(d.a)(F,2),_=W[0],A=W[1],P=Object(n.useState)(""),V=Object(d.a)(P,2),L=V[0],M=V[1],B=Object(n.useState)(""),R=Object(d.a)(B,2),H=(R[0],R[1],Object(n.useState)("")),K=Object(d.a)(H,2),z=K[0],J=K[1],G=Object(f.g)();Object(n.useEffect)((function(){k.length<1&&I.collection("users_news_category").where("userId","==",L).onSnapshot((function(e){e.docs.map((function(e){N(e.data()),A(e.id)}))})),Q()}),[L,s]),console.log("steptext--",k);var Q=function(){S.onAuthStateChanged((function(e){e&&M(e.uid)}))};return Object(q.jsx)(q.Fragment,{children:Object(q.jsx)("div",{children:Object(q.jsxs)(ae.Provider,{value:{secondStep:l,setSecondStep:j,UpdateNews:function(){var e=S.currentUser;m((function(e){return[].concat(Object(C.a)(e),[h])})),O([]);try{g.map((function(t){I.collection("users_news_category").doc(_).update({newsitem:t.newsitem,userId:e.uid,createdAt:new Date}).then((function(){console.log("news updated.."),y.b.success("news updated successfully.."),G.goBack()}))}))}catch(t){window.location.reload(),console.log("error=>",t)}},innerdata:k,UpdateCategory:function(){var e=S.currentUser;m((function(e){return[].concat(Object(C.a)(e),[h])}));try{g.map((function(t){I.collection("users_news_category").doc(_).update({category:t.category,userId:e.uid,createdAt:new Date}).then((function(){console.log("category updated.."),y.b.success("category updated successfully.."),G.goBack()}))}))}catch(t){window.location.reload(),console.log("error=>",t)}},currentStep:s,send:z,setSend:J,setStep:r,userData:h,userID:L,docID:_,setUserData:O,finalData:g,setFinalData:m,submitData:function(){var e=S.currentUser;m((function(e){return[].concat(Object(C.a)(e),[h])})),O([]),""===_&&g.map((function(t){I.collection("users_news_category").add({category:t.category,newsitem:t.newsitem,userId:e.uid,createdAt:new Date}).then((function(){y.b.success("User selected news and category successfully.."),console.log("added"),G.goForward("/news-content")}))}))},getId:E,setGetId:U},children:[t,Object(q.jsx)(y.a,{})]})})})})),ce=a(233),se=(a.p,Object(f.h)((function(e){console.log("Log--\x3e",e);var t=Object(n.useState)(""),a=Object(d.a)(t,2),c=a[0],s=a[1],r=Object(n.useState)(""),o=Object(d.a)(r,2),l=o[0],g=o[1],w=Object(n.useState)(""),I=Object(d.a)(w,2),C=I[0],k=I[1],N=Object(n.useContext)(ae),D=(N.setGetId,N.setUserData,N.docID);N.setStep,Object(f.g)();console.log("login me",D);return Object(q.jsx)(q.Fragment,{children:Object(q.jsx)(O.a,{align:"center",children:Object(q.jsxs)(j.a,{elevation:10,style:{padding:20,height:"70vh",width:280,margin:"20px auto"},children:[Object(q.jsx)(p.a,{style:{backgroundColor:"green"},children:Object(q.jsx)(m.a,{})}),Object(q.jsx)("h2",{children:"Sign In"}),Object(q.jsxs)(v.ValidatorForm,{onSubmit:function(){k(!0),S.signInWithEmailAndPassword(c,l).then((function(t){var a=t.user;console.log("login karte time user id--\x3e",a.uid);var n={userId:a.uid,email:a.email};localStorage.setItem("user",JSON.stringify(n));var c=localStorage.getItem("user"),s=null!==c?JSON.parse(c):null;e.loggedIn(s),k(!1),e.auth.onAuthentication()})).catch((function(e){y.b.error(e.message),k(!1)}))},onError:function(e){var t,a=Object(h.a)(e);try{for(a.s();!(t=a.n()).done;){var n=t.value;console.log(n.props.errorMessages[0])}}catch(n){a.e(n)}finally{a.f()}},children:[Object(q.jsx)(v.TextValidator,{variant:"outlined",margin:"normal",fullWidth:!0,label:"Email",onChange:function(e){s(e.target.value)},name:"email",value:c,validators:["required","isEmail"],errorMessages:["This field is required","Email is not valid"],autoComplete:"off"}),Object(q.jsx)(v.TextValidator,{variant:"outlined",fullWidth:!0,label:"Password",onChange:function(e){g(e.target.value)},name:"password",type:"password",value:l,validators:["required"],errorMessages:["This field is required"],autoComplete:"off"}),C?Object(q.jsx)(ce.ScaleLoader,{css:"\n    display: block;\n    margin-left: 100px;\n    border-color: blue;\n  ",size:150,color:"#3f51b5",loading:C}):Object(q.jsx)(b.a,{m:2,p:1,children:Object(q.jsx)(x.a,{type:"submit",color:"primary",variant:"contained",fullWidth:!0,children:"Sign In"})})]}),Object(q.jsxs)(u.a,{children:["Do you have an account? ",Object(q.jsx)(i.b,{className:"nav-link",to:e.visit,children:"Sign Up"})]})]})})})}))),re=Object(f.h)((function(e){console.log("signIn--\x3e",e.authentiCation);var t=Object(n.useState)(0),a=Object(d.a)(t,2),c=a[0],s=(a[1],Object(n.useState)("")),r=Object(d.a)(s,2),i=r[0],h=r[1],O=Object(n.useState)([]),p=Object(d.a)(O,2),x=p[0],g=p[1],m=Object(n.useState)(""),f=Object(d.a)(m,2),v=f[0],y=f[1],w=Object(n.useState)([]),S=Object(d.a)(w,2),C=S[0],k=S[1],N=Object(n.useContext)(ae).innerdata;function D(e){var t=e.children,a=e.value,n=e.index,c=Object(l.a)(e,["children","value","index"]);return Object(q.jsx)("div",Object(o.a)(Object(o.a)({role:"tabpanel",hidden:a!==n,id:"scrollable-auto-tabpanel-".concat(n),"aria-labelledby":"scrollable-auto-tab-".concat(n)},c),{},{children:a===n&&Object(q.jsx)(b.a,{p:3,children:Object(q.jsx)(u.a,{children:t})})}))}Object(n.useEffect)((function(){T(),E()}),[]);var T=function(){var e=localStorage.getItem("user"),t=null!==e?JSON.parse(e):null;h(t)};console.log("index me user---",i),console.log("index inner data ---\x3e",N);var E=function(){i&&I.collection("users_news_category").where("userId","==",i.userId).onSnapshot((function(e){e.docs.map((function(e){return console.log("index me user ka data--",e.data()),k(e.data().newsitem),y(e.data().userId),g(e.data().category)}))}))};return console.log("index me category",x),Object(q.jsx)(q.Fragment,{children:null!==i?Object(q.jsx)(q.Fragment,{children:Object(q.jsx)(te,{isAuthenticate:e.authentiCation,isData:N,news:C,user:i,existuser:v,category:x,fetchCategory:E,setUserState:function(){return h(null)}})}):Object(q.jsx)(q.Fragment,{children:Object(q.jsx)(j.a,{square:!0,children:Object(q.jsx)(D,{value:c,index:0,children:Object(q.jsx)(se,{loggedIn:function(e){return h(e)},auth:e.authentiCation,visit:"/Signup"})})})})})})),ie=a(677),oe=Object(f.h)((function(e){var t=Object(n.useState)(""),a=Object(d.a)(t,2),c=a[0],s=a[1],r=Object(n.useState)(""),i=Object(d.a)(r,2),o=i[0],l=i[1],h=Object(n.useState)(""),g=Object(d.a)(h,2),m=g[0],f=g[1];return Object(n.useEffect)((function(){return v.ValidatorForm.addValidationRule("isPasswordMatch",(function(e){return e===o})),function(){v.ValidatorForm.removeValidationRule("isPasswordMatch")}}),[o]),Object(q.jsxs)(O.a,{children:[Object(q.jsx)(y.a,{}),Object(q.jsxs)(j.a,{elevation:20,style:{padding:"30px 20px",width:300,margin:"20px auto"},children:[Object(q.jsxs)(O.a,{align:"center",children:[Object(q.jsx)(p.a,{style:{backgroundColor:"green"},children:Object(q.jsx)(ie.a,{})}),Object(q.jsx)("h2",{children:"Sign Up"}),Object(q.jsx)(u.a,{variant:"caption",gutterBottom:!0,children:"Please fill this form to create an account !"})]}),Object(q.jsxs)(v.ValidatorForm,{onSubmit:function(){S.createUserWithEmailAndPassword(c,o).then((function(t){console.log(t),t&&(e.history.goBack(),y.b.success("User Registered Successfully.."))})).catch((function(e){switch(e.code){case"auth/email-already-in-use":case"auth/invalid-email":case"auth/weak-password":y.b.error(e.message);break;default:console.log(e)}}))},align:"center",children:[Object(q.jsxs)(O.a,{children:[Object(q.jsx)(v.TextValidator,{variant:"outlined",margin:"normal",label:"Email",onChange:function(e){s(e.target.value)},name:"email",value:c,validators:["required","isEmail"],errorMessages:["This field is required","Email is not valid"],autoComplete:"off",fullWidth:!0,placeholder:"Enter Email"}),Object(q.jsx)(v.TextValidator,{variant:"outlined",margin:"normal",fullWidth:!0,label:"Password",onChange:function(e){l(e.target.value)},name:"password",type:"password",value:o,validators:["required"],errorMessages:["This field is required"],autoComplete:"off",placeholder:"Enter Password"}),Object(q.jsx)(v.TextValidator,{variant:"outlined",margin:"normal",fullWidth:!0,label:"Confirm Password",onChange:function(e){f(e.target.value)},name:"confirmpassword",type:"password",value:m,validators:["isPasswordMatch","required"],errorMessages:["Password do not matched!!!","This field is required"],autoComplete:"off",placeholder:"Enter Confirm Password"})]}),Object(q.jsxs)(b.a,{m:2,p:2,style:{display:"flex",width:"100%",justifyContent:"space-evenly"},children:[Object(q.jsx)(x.a,{type:"submit",variant:"contained",color:"primary",children:"Sign Up"}),Object(q.jsx)(x.a,{type:"submit",variant:"contained",onClick:function(t){t.preventDefault(),null===e||void 0===e||e.history.goBack()},color:"primary",children:"Back"})]})]})]})]})})),le=a(678),de=a(679),je={isLoggedIn:!1,onAuthentication:function(){this.isLoggedIn=!0},getLogInStatus:function(){return this.isLoggedIn}};function ue(e){return Object(q.jsx)(f.b,{path:e.path,render:function(t){return je.getLogInStatus()?Object(q.jsx)(e.component,Object(o.a)({},t)):Object(q.jsx)(f.a,{to:{pathname:"/login"}})}})}S.currentUser;var be=Object(f.h)((function(){return Object(q.jsxs)("div",{className:"App",children:[Object(q.jsx)(le.a,{}),Object(q.jsxs)(f.d,{children:[Object(q.jsx)(f.b,{exact:!0,path:"/login",render:function(e){return Object(q.jsx)(re,Object(o.a)(Object(o.a)({},e),{},{authentiCation:je}))}}),Object(q.jsx)(f.b,{exact:!0,path:"/Signup",component:oe}),Object(q.jsx)(ue,{exact:!0,path:"/selectNews",component:M}),Object(q.jsx)(ue,{exact:!0,path:"/selectCategory",component:J}),Object(q.jsx)(ue,{exact:!0,path:"/news-contents",component:de.a}),Object(q.jsx)(f.a,{to:"/login"}),"? ",Object(q.jsx)(f.a,{to:"/login"}),": ",Object(q.jsx)(f.a,{to:"/KhabarWala"})]})]})}));r.a.render(Object(q.jsx)(q.Fragment,{children:Object(q.jsx)(i.a,{history:Z.history,children:Object(q.jsx)(ne,{children:Object(q.jsx)(be,{})})})}),document.getElementById("root"))}},[[629,1,2]]]);
//# sourceMappingURL=main.d00aee8e.chunk.js.map