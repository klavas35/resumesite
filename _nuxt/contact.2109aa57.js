import{u as V,V as g,a as m,b as p}from"./VTextarea.464167bf.js";import{h,a as b,c as k,w as l,o as x,i as e,V as r,j as i,k as f,l as a,m as o,e as u,p as w}from"./entry.ea9d6039.js";import{V as y,a as _,b as C}from"./VRow.f80f9de2.js";const v={setup(){const d=V(),s=h({name:"",surname:"",email:"",message:""});function c(){console.log(d),d.send({from:s.value.name+" "+s.value.surname+" <"+s.value.email+">",subject:"resumsite",text:s.value.message})}return{message:s,send:c}}},F=a("h1",null,"İletişim",-1),T=a("a",{href:"tel:+905075895738"},"+90 507 589 57 38",-1),z=a("a",{href:"https://www.linkedin.com/in/kürşat-edabalı-yıldırım-276627178/",target:"_blank"},"LinkedIn",-1),q=a("a",{href:"https://github.com/klavas35"},"Github",-1),B=a("a",{href:`mailto:krst355@gmail.com\r
                `},[a("span",{class:"text--primary"}," krst355@gmail.com ")],-1),U=a("h1",null,"Konum",-1),j=a("div",{style:{position:"relative",overflow:"hidden"}},[a("iframe",{src:"https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d196.7294367031637!2d28.316533402453825!3d37.914752333738626!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2str!4v1684772515183!5m2!1sen!2str",width:"100%",height:"300",frameborder:"0",style:{border:"0",margin:"0"},loading:"lazy"})],-1),A=a("h1",null,"İletişim Formu",-1);function N(d,s,c,t,G,I){return x(),k(y,{style:{"margin-top":"4%"}},{default:l(()=>[e(C,null,{default:l(()=>[e(_,{cols:"12",md:"6"},{default:l(()=>[e(r,null,{default:l(()=>[e(i,null,{default:l(()=>[F]),_:1}),e(f,null,{default:l(()=>[a("p",null,[e(o,null,{default:l(()=>[u("mdi-map-marker")]),_:1}),u(" Aydın, Türkiye")]),a("p",null,[e(o,null,{default:l(()=>[u("mdi-phone")]),_:1}),T]),a("p",null,[e(o,null,{default:l(()=>[u("mdi-linkedin")]),_:1}),z]),a("p",null,[e(o,null,{default:l(()=>[u("mdi-github")]),_:1}),q]),a("p",null,[e(o,null,{default:l(()=>[u("mdi-email")]),_:1}),B])]),_:1})]),_:1}),e(_,{style:{"margin-left":"3%"},cols:"12",md:"10"},{default:l(()=>[e(r,null,{default:l(()=>[e(i,null,{default:l(()=>[U]),_:1}),e(f,null,{default:l(()=>[j]),_:1})]),_:1})]),_:1})]),_:1}),e(_,{cols:"12",md:"6"},{default:l(()=>[e(r,null,{default:l(()=>[e(i,null,{default:l(()=>[A]),_:1}),e(f,null,{default:l(()=>[e(g,null,{default:l(()=>[e(m,{label:"Adınız",modelValue:t.message.name,"onUpdate:modelValue":s[0]||(s[0]=n=>t.message.name=n),required:""},null,8,["modelValue"]),e(m,{label:"Soyadınız",modelValue:t.message.surname,"onUpdate:modelValue":s[1]||(s[1]=n=>t.message.surname=n),required:""},null,8,["modelValue"]),e(m,{label:"E-posta Adresiniz",modelValue:t.message.email,"onUpdate:modelValue":s[2]||(s[2]=n=>t.message.email=n),required:""},null,8,["modelValue"]),e(p,{label:"Mesajınız",modelValue:t.message.message,"onUpdate:modelValue":s[3]||(s[3]=n=>t.message.message=n),required:""},null,8,["modelValue"]),e(w,{onClick:t.send,color:"primary",dark:""},{default:l(()=>[u("Gönder")]),_:1},8,["onClick"])]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})}const L=b(v,[["render",N]]);export{L as default};