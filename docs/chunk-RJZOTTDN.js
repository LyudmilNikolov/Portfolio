import{k as O}from"./chunk-5RD5N76R.js";import{B as f,G as x,Ia as r,Ja as o,Ka as w,O as v,Qa as a,Ra as E,U as b,Va as C,W as S,Wa as M,Xa as I,j as d,k as m,o as s,r as g,t as y,w as u,y as h,ya as D,z as c}from"./chunk-UJX24CQB.js";var T=(()=>{let t=class t{type({word:e,speed:i,backwards:p=!1}){return y(i).pipe(s(l=>p?e.substring(0,e.length-l):e.substring(0,l+1)),h(e.length))}typeEffect(e){return g(this.type({word:e,speed:50}),m("").pipe(f(1200),c()),this.type({word:e,speed:30,backwards:!0}),m("").pipe(f(300),c()))}getTypewriterEffect(e){return d(e).pipe(u(i=>this.typeEffect(i)),x())}};t.\u0275fac=function(i){return new(i||t)},t.\u0275prov=v({token:t,factory:t.\u0275fac,providedIn:"root"});let n=t;return n})();var N=(()=>{let t=class t{constructor(){this.titles=["Software Developer","Contractor","Open Source Enthusiast"],this.typewriterService=b(T),this.typedText$=this.typewriterService.getTypewriterEffect(this.titles).pipe(s(e=>e))}};t.\u0275fac=function(i){return new(i||t)},t.\u0275cmp=S({type:t,selectors:[["app-home"]],standalone:!0,features:[C],decls:17,vars:3,consts:[[1,"container","mx-auto","px-4","py-8"],[1,"grid","grid-cols-1","md:grid-cols-2","gap-4"],[1,"flex","flex-col","justify-center"],[1,"text-4xl","font-bold","mb-4","text-secondary"],["role","img","aria-labelledby","wave",1,"wave"],[1,"text-4xl","font-bold","mb-4","text-primary"],[1,"typewriter-effect","text-left","text-secondary","min-h-8"],["src","assets/Images/MePhoto.png","alt","home pic",1,"img-fluid",2,"max-height","450px"]],template:function(i,p){i&1&&(r(0,"div",0)(1,"div",1)(2,"div",2)(3,"h1",3),a(4," Hi There! "),r(5,"span",4),a(6," \u{1F44B}\u{1F3FB} "),o()(),r(7,"h1",5),a(8," I'M "),r(9,"strong"),a(10," LYUDMIL NIKOLOV"),o()(),r(11,"div",6)(12,"h2"),a(13),M(14,"async"),o()()(),r(15,"div"),w(16,"img",7),o()()()),i&2&&(D(13),E(I(14,1,p.typedText$)))},dependencies:[O],styles:[".wave[_ngcontent-%COMP%]{animation-name:_ngcontent-%COMP%_wave-animation;animation-duration:2.1s;animation-iteration-count:infinite;transform-origin:70% 70%;display:inline-block}@keyframes _ngcontent-%COMP%_wave-animation{0%{transform:rotate(0)}10%{transform:rotate(14deg)}20%{transform:rotate(-8deg)}30%{transform:rotate(14deg)}40%{transform:rotate(-4deg)}50%{transform:rotate(10deg)}60%{transform:rotate(0)}to{transform:rotate(0)}}"],changeDetection:0});let n=t;return n})();export{N as HomeComponent};