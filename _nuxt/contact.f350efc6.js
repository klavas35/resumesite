import{u as y,V as C,a as i,b as x}from"./VTextarea.44354bfc.js";import{r as u,_ as w,z as f,s as l,k as c,q as e,V as g,B as k,C as p,m as t,D as m,v as n,E as b}from"./entry.8b575f4f.js";import{V as v,a as _,b as T}from"./VRow.b5d1884a.js";const q={setup(){const d=y(),s=u(!1),V=u(""),a={name:"",surname:"",email:"",message:""},r=u(!1);function h(){console.log(d),r.value=!0,console.log(a),d.send({from:this.message.name+" "+this.message.surname+" <"+this.message.email+">",subject:"resumsite",text:this.message.message}).catch(o=>{console.log(o,a)}),a.name="",a.surname="",a.email="",a.message=""}return{message:a,send:h,isMobile:s,formState:r,contactForm:V}},mounted(){this.isMobile=this.$vuetify.display.mobile},created(){window.addEventListener("resize",()=>{this.isMobile=this.$vuetify.display.mobile})}},B=t("h1",null,"Contact me!",-1),F=t("a",{href:"tel:+905075895738"},"+90 507 589 57 38",-1),M=t("a",{href:"https://www.linkedin.com/in/kürşat-edabalı-yıldırım-276627178/",target:"_blank"},"LinkedIn",-1),S=t("a",{href:"https://github.com/klavas35"},"Github",-1),N=t("a",{href:`mailto:krst355@gmail.com\r
                  `},[t("span",{class:"text--primary"}," krst355@gmail.com ")],-1),U=t("h1",null,"Contact Form",-1);function E(d,s,V,a,r,h){return c(),f(v,{style:{"margin-top":"4%"}},{default:l(()=>[e(T,null,{default:l(()=>[e(_,{cols:"12",md:"6"},{default:l(()=>[e(g,null,{default:l(()=>[e(k,null,{default:l(()=>[B]),_:1}),e(p,null,{default:l(()=>[t("p",null,[e(m,null,{default:l(()=>[n("mdi-map-marker")]),_:1}),n(" Aydın, Turkey")]),t("p",null,[e(m,null,{default:l(()=>[n("mdi-phone")]),_:1}),F]),t("p",null,[e(m,null,{default:l(()=>[n("mdi-linkedin")]),_:1}),M]),t("p",null,[e(m,null,{default:l(()=>[n("mdi-github")]),_:1}),S]),t("p",null,[e(m,null,{default:l(()=>[n("mdi-email")]),_:1}),N])]),_:1})]),_:1}),e(_,{style:{"margin-left":"3%"},cols:"12",md:"10"})]),_:1}),e(_,{cols:"12",md:"6"},{default:l(()=>[e(g,null,{default:l(()=>[e(k,null,{default:l(()=>[U]),_:1}),e(p,null,{default:l(()=>[a.formState?(c(),f(g,{key:1,color:"green",text:"Your message has been sent to send another message please click"},{default:l(()=>[e(b,{onClick:s[4]||(s[4]=o=>a.formState=!1),color:"primary",dark:""},{default:l(()=>[n("new message")]),_:1})]),_:1})):(c(),f(C,{key:0,ref:"contactForm"},{default:l(()=>[e(i,{modelValue:a.message.name,"onUpdate:modelValue":s[0]||(s[0]=o=>a.message.name=o),label:"Name",required:""},null,8,["modelValue"]),e(i,{modelValue:a.message.surname,"onUpdate:modelValue":s[1]||(s[1]=o=>a.message.surname=o),label:"Surname",required:""},null,8,["modelValue"]),e(i,{modelValue:a.message.email,"onUpdate:modelValue":s[2]||(s[2]=o=>a.message.email=o),label:"E-mail Address",required:""},null,8,["modelValue"]),e(x,{modelValue:a.message.message,"onUpdate:modelValue":s[3]||(s[3]=o=>a.message.message=o),label:"Message",required:""},null,8,["modelValue"]),e(b,{onClick:a.send,color:"primary",dark:""},{default:l(()=>[n("Send")]),_:1},8,["onClick"])]),_:1},512))]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})}const L=w(q,[["render",E]]);export{L as default};