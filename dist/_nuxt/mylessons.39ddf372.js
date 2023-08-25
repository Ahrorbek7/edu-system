import{_ as O}from"./nuxt-link.ae0995ea.js";import{g as y,s as j,J as Y,_ as B,o as s,h as T,w,c as o,b,T as F,a as e,t as f,d,i as h,p as U,e as V,f as A,k as E,F as M,r as S}from"./entry.658c09b7.js";import{h as R}from"./index.344f9f74.js";import{u as z}from"./asyncData.83219eef.js";import{_ as J}from"./logo-eduapp.172290a9.js";function W(a,l,t){const[n={},u]=typeof l=="string"?[{},l]:[l,t],i=n.key||R([u,y(n.baseURL),typeof a=="string"?a:"",y(n.params||n.query)]);if(!i||typeof i!="string")throw new TypeError("[nuxt] [useFetch] key must be a string: "+i);if(!a)throw new Error("[nuxt] [useFetch] request is missing.");const p=i===u?"$f"+i:i,r=j(()=>{let m=a;return typeof m=="function"&&(m=m()),y(m)});if(!n.baseURL&&typeof r.value=="string"&&r.value.startsWith("//"))throw new Error('[nuxt] [useFetch] the request URL must not start with "//".');const{server:x,lazy:v,default:c,transform:g,pick:k,watch:$,immediate:I,...L}=n,C=Y({...L,cache:typeof n.cache=="boolean"?void 0:n.cache}),N={server:x,lazy:v,default:c,transform:g,pick:k,immediate:I,watch:$===!1?[]:[C,r,...$||[]]};let _;return z(p,()=>{var D;return(D=_==null?void 0:_.abort)==null||D.call(_),_=typeof AbortController<"u"?new AbortController:{},typeof r.value=="string"&&r.value.startsWith("/"),(n.$fetch||globalThis.$fetch)(r.value,{signal:_.signal,...C})},N)}const q={props:{isOpen:Boolean,lesson:Object}},K=a=>(U("data-v-214a7820"),a=a(),V(),a),P={key:0,class:"modal fixed top-0 left-0 w-full h-full flex items-center justify-center"},Z={class:"modal-content bg-white rounded-md w-[70%] z-10 h-[94%] shadow-xl border border-gray-400"},G={class:"modal-inner flex w-full h-full"},H=["src"],Q={class:"text-area-modal w-[95%] mx-4 my-4 overflow-y-scroll text-gray-700 pb-4 h-[300px] text-center px-4"},X={class:"text-gray-900 text-xl font-semibold text-center my-4"},ee={class:"lesson-txt px-6"},te=K(()=>e("h1",{class:"text-3xl text-center my-4 rounded-xl font-semibold"},[d(" Useful Podcasts "),e("i",{class:"bi bi-headphones"})],-1)),se={key:0,controls:""},oe=["src"],ne={key:1,controls:""},ae=["src"],le={key:2,controls:""},ce=["src"],ie={key:3,controls:""},re=["src"],de={key:4,controls:""},ue=["src"],_e={key:5,controls:""},he=["src"];function pe(a,l,t,n,u,i){return s(),T(F,{name:"modal-outer"},{default:w(()=>[t.isOpen?(s(),o("div",P,[b(F,{name:"modal-inner"},{default:w(()=>[e("div",Z,[e("div",G,[e("div",null,[e("iframe",{class:"w-[98%] h-[300px] m-4",src:t.lesson.videoUrl,frameborder:"0"},null,8,H),e("section",Q,[e("h1",X,f(t.lesson.title),1),d(" "+f(t.lesson.description),1)])]),e("section",ee,[te,t.lesson.podcast1?(s(),o("audio",se,[e("source",{src:t.lesson.podcast1,type:"audio/mp3"},null,8,oe),d(" Your browser does not support the audio element. ")])):h("",!0),t.lesson.podcast2?(s(),o("audio",ne,[e("source",{src:t.lesson.podcast2,type:"audio/mp3"},null,8,ae),d(" Your browser does not support the audio element. ")])):h("",!0),t.lesson.podcast3?(s(),o("audio",le,[e("source",{src:t.lesson.podcast3,type:"audio/mp3"},null,8,ce),d(" Your browser does not support the audio element. ")])):h("",!0),t.lesson.podcast4?(s(),o("audio",ie,[e("source",{src:t.lesson.podcast4,type:"audio/mp3"},null,8,re),d(" Your browser does not support the audio element. ")])):h("",!0),t.lesson.podcast5?(s(),o("audio",de,[e("source",{src:t.lesson.podcast5,type:"audio/mp3"},null,8,ue),d(" Your browser does not support the audio element. ")])):h("",!0),t.lesson.podcast6?(s(),o("audio",_e,[e("source",{src:t.lesson.podcast6,type:"audio/mp3"},null,8,he)])):h("",!0)]),e("button",{class:"float-right px-7 py-2 rounded-md bg-blue-600 text-white m-4 h-[60px]",onClick:l[0]||(l[0]=p=>a.$emit("close"))}," Close ")])])]),_:1})])):h("",!0)]),_:1})}const me=B(q,[["render",pe],["__scopeId","data-v-214a7820"]]),fe={class:"lessons-container w-full h-[100vh] overflow-hidden"},xe=e("i",{class:"bi bi-house-fill home-link absolute left-20 text-4xl text-purple-700"},null,-1),ye=e("h1",{class:"lessons-heading text-4xl text-center mt-14 font-semibold text-gray-900"}," Our todays lessons! ",-1),be={class:"task-container w-full h-[70vh] flex flex-wrap justify-evenly items-center overflow-y-scroll"},we=["onClick"],ve=["src"],ge={class:"text-md font-semibold text-center"},ke={key:0},$e={key:1},Ce={class:"my-4 mx-2 text-gray-950"},De=e("i",{class:"bi bi-mortarboard-fill text-xl text-blue-700"},null,-1),Fe={key:0,class:"font-semibold text-gray-950"},Ie={key:1,class:"text-gray-600"},Le=e("p",{class:"mx-2"},[e("i",{class:"bi bi-journal-check text-xl text-green-500"}),d(" Includes: "),e("span",{class:"font-semibold"},"videos, presintation...")],-1),Ne={class:"w-full justify-between flex items-center px-2"},Oe={key:0,class:"text-gray-600 mx-2"},je={key:1,class:"text-gray-600"},Ye=e("img",{width:"100px",src:J,alt:""},null,-1),Be=e("button",{class:"rounded-xl my-5 w-[12%] h-[60px] bg-purple-700 text-white mx-[45%] hover:bg-purple-900"}," Need any help? ",-1),Se={__name:"mylessons",async setup(a){let l,t;const{data:n}=([l,t]=A(()=>W("/api/lessons","$fYIV3JFZMD")),l=await l,t(),l),u=E(null),i=p=>{u.value=p};return(p,r)=>{const x=O,v=me;return s(),o("div",fe,[e("main",null,[b(x,{to:"/home"},{default:w(()=>[xe]),_:1}),ye,e("div",be,[(s(!0),o(M,null,S(y(n),(c,g)=>(s(),o("div",{key:"lesson-"+g,class:"cursor-pointer hover:bg-slate-200 transition duration-100 task-card w-[300px] h-[370px] bg-white m-4 rounded-xl shadow-xl flex flex-col justify-between",onClick:k=>i(c)},[e("img",{class:"w-[90%] h-[43%] bord00 my-3 mx-auto",src:c.headerImg,alt:"taskImg"},null,8,ve),e("h1",ge,[c.title?(s(),o("span",ke,f(c.title),1)):(s(),o("span",$e," Lesson "))]),e("h3",Ce,[De,d(" speciality: "),c.speciality?(s(),o("span",Fe,f(c.speciality),1)):(s(),o("span",Ie,"Not specified"))]),Le,e("div",Ne,[c.createdDate?(s(),o("p",Oe,f(c.createdDate),1)):(s(),o("p",je," No date set ")),Ye])],8,we))),128))]),b(v,{"is-open":u.value!==null,lesson:u.value,onClose:r[0]||(r[0]=c=>u.value=null)},null,8,["is-open","lesson"]),b(x,{to:"/chat"},{default:w(()=>[Be]),_:1})])])}}};export{Se as default};