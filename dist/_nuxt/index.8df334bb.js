import{_ as j}from"./NavBar.e4739de4.js";import{a as I,U as g,f as U,b as A}from"./index.7aba0e44.js";import{q as C,o as c,c as d,a as t,g as a,b as x,w as p,t as l,d as s,i as h,k as f,s as N,l as y,v as w,f as O,h as m}from"./entry.658c09b7.js";import{_ as V}from"./nuxt-link.ae0995ea.js";import v from"./Icon.147ffa57.js";import{_ as B}from"./logo-eduapp.172290a9.js";import"./index.344f9f74.js";const G={class:"flex items-center gap-2 justify-between bg-light-200"},M=t("i",{class:"bi bi-box-arrow-right text-xl"},null,-1),q=[M],T=C({__name:"LogOut",props:{user:{type:Object,required:!0}},setup(e){const o=I;return(r,u)=>(c(),d("div",G,[t("button",{class:"py-2 px-6 bg-red-600 text-white rounded-md hover:bg-red-700 top-6 right-2 absolute",onClick:u[0]||(u[0]=(...i)=>a(o)&&a(o)(...i))},q)]))}}),D={class:"chatting-nav absolute bg-purple-600 text-white h-[17vh] font-semibold py-4 border-2 w-[29%] flex items-center justify-center"},P=t("i",{class:"bi bi-house-fill text-2xl text-white mx-5"},null,-1),z=t("h2",{class:"profile-heading text-center text-2xl"}," My Account ",-1),E={class:"flex justify-center h-[100vh] w-full"},F={class:"profile-block w-[500px] h-[90vh] flex-wrap my-20"},H=["src"],R={class:"text-center text-xl font-semibold"},S={class:"flex w-full justify-center my-2"},W={class:"mx-2 text-2xl"},Y=t("i",{class:"bi bi-people-fill text-blue-700"},null,-1),J={class:"mx-2 text-2xl"},K=t("i",{class:"bi bi-person-add text-green-600"},null,-1),Q={class:"text-gray-600 text-center my-2 max-w-[500px]"},X=["href"],Z={class:"my-4 text-center hover:underline"},tt={class:"my-5 text-gray-760"},et=t("i",{class:"bi bi-geo-alt-fill text-green-500 font-semibold text-xl"},null,-1),st={class:"text-gray-950 font-semibold"},ot={class:"my-6 text-gray-760"},nt=t("i",{class:"bi bi-building font-semibold text-xl"},null,-1),lt={class:"text-gray-950 font-semibold"},it={class:"my-6"},at=t("i",{class:"bi bi-briefcase font-semibold text-xl"},null,-1),ct={class:"font-semibold"},rt={key:0,class:"my-6"},ut=t("i",{class:"bi bi-twitter text-blue-700"},null,-1),_t={key:1,class:"my-6"},dt={class:"my-4"},xt=t("i",{class:"bi bi-clock-fill text-xl text-gray-600"},null,-1),mt={class:"my-4"},ht=t("i",{class:"bi bi-arrow-clockwise text-2xl text-blue-600"},null,-1),pt={__name:"MyAccount",props:{user:{type:Object,required:!0}},setup(e){return(o,r)=>{const u=V,i=v;return c(),d("div",null,[t("nav",D,[x(u,{to:"/home"},{default:p(()=>[P]),_:1}),z]),t("div",E,[t("div",F,[t("img",{class:"profileImg w-[200px] rounded-[50%] mx-auto",src:e.user.avatar_url,alt:"userImg"},null,8,H),t("h2",R,l(e.user.name),1),t("div",S,[t("p",W,[Y,s(" "+l(e.user.followers),1)]),t("p",J,[K,s(" "+l(e.user.following),1)])]),t("p",Q,l(e.user.bio),1),t("a",{href:e.user.html_url},[t("p",Z,[x(i,{name:"fa-brands:github"}),s(" My github profile ")])],8,X),t("p",tt,[et,s(" Location: "),t("span",st,l(e.user.location),1)]),t("p",ot,[nt,s(" Company: "),t("span",lt,l(e.user.company),1)]),t("p",it,[at,s(" Owner of the "),t("span",ct,l(e.user.public_repos),1),s(" in Github Portfolio ")]),e.user.twitter?(c(),d("p",rt,[ut,s(" Twitter: "),t("span",null,l(e.user.twitter),1)])):h("",!0),e.user.blog?(c(),d("p",_t," You can follow me on "+l(e.user.blog),1)):h("",!0),t("p",dt,[xt,s(" Account created "),x(a(g),{time:e.user.created_at},{default:p(({timeAgo:n})=>[s(l(n),1)]),_:1},8,["time"])]),t("p",mt,[ht,s(" Last updating "),x(a(g),{time:e.user.updated_at},{default:p(({timeAgo:n})=>[s(l(n),1)]),_:1},8,["time"])])])])])}}},bt=pt,gt=""+new URL("login-girl-img.604651e5.png",import.meta.url).href;const ft={class:"w-full h-[100vh] flex"},yt={class:"login-info flex items-center justify-center h-full w-1/2"},wt={class:"log-register w-[364px] h-[469px] py-4"},vt=t("h1",{class:"login-title text-center text-[30px] font-extrabold"}," LOGIN ",-1),$t=t("p",{class:"text-center text-[16px] my-2 text-gray-500 text-shadow"}," Want to start great adventure with us? ",-1),kt=t("p",{class:"mt-5 kip"}," Username ",-1),Lt=t("i",{class:"bi bi-person absolute translate-y-5 text-xl translate-x-2 text-gray-500"},null,-1),jt=t("p",{class:"mt-5 kip"}," Password ",-1),It=t("i",{class:"bi bi-shield-lock absolute translate-y-5 text-xl translate-x-2 text-gray-500"},null,-1),Ut=["disabled"],At=t("section",{class:"login-img h-full w-1/2 flex items-center justify-center"},[t("div",{class:"login-img--block border-2 border-gray-400 rounded-[40px] w-[400px] h-[500px] p-7"},[t("h3",{class:"text-white text-3xl font-semibold max-w-[200px] leading-10"}," Great things are waiting for you login now and start adventure! "),t("img",{class:"absolute w-[690px] top-[20.5%] right-[5.5%]",src:gt})])],-1),Ct={__name:"LogIn",props:{login:{type:Function,required:!0}},setup(e){const o=f(""),r=f(""),u=N(()=>o.value!=="admin"||r.value!=="12345");return(i,n)=>{const b=v;return c(),d("main",ft,[t("section",yt,[t("div",wt,[vt,$t,kt,Lt,y(t("input",{"onUpdate:modelValue":n[0]||(n[0]=_=>o.value=_),class:"outline-none bg-slate-100 border w-full py-3 px-8 rounded-xl my-2 shadow-md",type:"text",placeholder:"Username"},null,512),[[w,o.value]]),jt,It,y(t("input",{"onUpdate:modelValue":n[1]||(n[1]=_=>r.value=_),class:"outline-none bg-slate-100 border w-full py-3 px-8 rounded-xl my-2 shadow-md",type:"password",placeholder:"Password"},null,512),[[w,r.value]]),t("button",{class:"signin-btn w-full my-6 rounded-xl py-4 text-white transition duration-300",disabled:u.value,onClick:n[2]||(n[2]=(..._)=>e.login&&e.login(..._))},[x(b,{class:"text-xl mx-2",name:"fa-brands:github"}),s(" Authorize with GitHub ")],8,Ut)])]),At])}}},Nt=Ct;const Ot=t("img",{class:"w-[200px] absolute logo-site",src:B},null,-1),Pt={__name:"index",async setup(e){let o,r;const u=A,i=([o,r]=O(()=>U()),o=await o,r(),o);return(n,b)=>{const _=j,$=T,k=bt,L=Nt;return c(),d("div",null,[a(i)?(c(),m(_,{key:0})):h("",!0),a(i)?(c(),m($,{key:1,user:a(i)},null,8,["user"])):h("",!0),Ot,a(i)?(c(),m(k,{key:2,user:a(i)},null,8,["user"])):(c(),m(L,{key:3,login:a(u)},null,8,["login"]))])}}};export{Pt as default};