(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,,,,,,,,,,,,function(e,t,a){e.exports=a.p+"static/media/1.0e9f2e8b.jpg"},function(e,t,a){e.exports=a.p+"static/media/2.4e261238.jpg"},function(e,t,a){e.exports=a.p+"static/media/3.dfc3bc9e.jpg"},,,,,,,,,function(e,t,a){e.exports=a(42)},,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(23),l=a.n(c),o=(a(31),a(9)),i=a(10),u=a(12),m=a(11),s=a(13),p=(a(32),a(2)),E=a(6),d=(a(33),a(15)),h=a.n(d),f=a(16),g=a.n(f),v=a(17),b=a.n(v),y=function(){var e=[h.a,g.a,b.a][Math.floor(3*Math.random())];return r.a.createElement(r.a.Fragment,null,r.a.createElement(E.e,null,r.a.createElement(E.c,{path:"/",exact:!0,render:function(){return r.a.createElement("img",{src:e,alt:"beach"})}}),r.a.createElement(E.c,{path:"/products",render:function(){return r.a.createElement("img",{src:h.a,alt:"beach"})}}),r.a.createElement(E.c,{path:"/contact",render:function(){return r.a.createElement("img",{src:g.a,alt:"beach"})}}),r.a.createElement(E.c,{path:"/login",render:function(){return r.a.createElement("img",{src:b.a,alt:"beach"})}}),r.a.createElement(E.c,{render:function(){return r.a.createElement("img",{src:e,alt:"beach"})}})))},x=(a(38),[{name:"start",path:"/",exact:!0},{name:"produkty",path:"/products"},{name:"kontakt",path:"/contact"},{name:"panel admina",path:"/login"}]),j=function(){var e=x.map(function(e){return r.a.createElement("li",{key:e.name},r.a.createElement(p.c,{to:e.path,exact:!!e.exact&&e.exact},e.name))});return r.a.createElement("nav",{className:"main"},r.a.createElement("ul",null,e))},k=function(e){var t=e.title,a=e.author,n=e.text;return r.a.createElement("article",{style:{marginBottom:40}},r.a.createElement("h3",{style:{marginBottom:3,textTransform:"uppercase"}},t),r.a.createElement("span",{style:{display:"block",marginBottom:"10px",fontSize:12}},a),r.a.createElement("p",{style:{fontSize:15}},n))},w=[{id:1,title:"czym jest teoria strun",author:"Johan Nowak",text:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eveniet optio et doloremque esse molestias dolor, voluptas, sit minus natus distinctio beatae quam deserunt soluta iure, reiciendis non tempore! Eaque, exercitationem."},{id:2,title:"czym jest paradoks fermiefgo",author:"Johan Nowak",text:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eveniet optio et doloremque esse molestias dolor, voluptas, sit minus natus distinctio beatae quam deserunt soluta iure, reiciendis non tempore! Eaque, exercitationem."},{id:3,title:"Szara materia i cemna energia",author:"Johan Nowak",text:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eveniet optio et doloremque esse molestias dolor, voluptas, sit minus natus distinctio beatae quam deserunt soluta iure, reiciendis non tempore! Eaque, exercitationem."}],N=function(){var e=w.map(function(e){return r.a.createElement(k,Object.assign({key:e.id},e))});return r.a.createElement("div",{className:"home"},e)},O=(a(39),["car","bike","rowery"]),q=function(){var e=O.map(function(e){return r.a.createElement("li",{key:e},r.a.createElement(p.b,{to:"/product/".concat(e)},e))});return r.a.createElement("div",{className:"products"},r.a.createElement("h2",null,"Lista produkt\xf3w"),r.a.createElement("div",null,r.a.createElement("ul",null,e)))},z=function(e){return r.a.createElement("article",{className:"product"},r.a.createElement("h1",null,e.id))},J=function(e){var t=e.match;return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",null,"strona produkt\xf3w"),r.a.createElement(z,{id:t.params.id}),r.a.createElement(p.b,{to:"/products"},"Powr\xf3t"))},S=(a(40),function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(u.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={value:"",isEmpty:!0},a.handleSubmit=function(e){e.preventDefault(),a.setState({value:"",isEmpty:!0})},a.handleChange=function(e){e.target.value.length>0?a.setState({value:e.target.value,isEmpty:!1}):a.setState({value:e.target.value,isEmpty:!0})},a}return Object(s.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"contact"},r.a.createElement("form",{onSubmit:this.handleSubmit},r.a.createElement("h3",null,"Napisz do nas"),r.a.createElement("textarea",{value:this.state.value,onChange:this.handleChange,placeholder:"Wpisz wiadomo\u015b\u0107..."}),r.a.createElement("button",null,"Wy\u015blij")),r.a.createElement(E.a,{when:!this.state.isEmpty,message:"Czy na pewno chcesz opu\u015bci\u0107 t\u0105 stron\u0119"}))}}]),t}(r.a.Component)),F=function(){return r.a.createElement(E.c,{render:function(){return r.a.createElement(E.b,{to:"/login"})}})},C=function(){return r.a.createElement("div",null,r.a.createElement("label",{htmlFor:""},"Podaj login",r.a.createElement("input",{type:"text"})),r.a.createElement("label",{htmlFor:""},"Podaj has\u0142o",r.a.createElement("input",{type:"password"})),r.a.createElement("button",null,"Zaloguj"))},B=function(){return r.a.createElement("div",null,r.a.createElement("p",null,"Error 404"),r.a.createElement("p",null,"Brak takiej strony")," ")},P=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(E.e,null,r.a.createElement(E.c,{path:"/",exact:!0,component:N}),r.a.createElement(E.c,{path:"/products",component:q}),r.a.createElement(E.c,{path:"/product/:id",component:J}),r.a.createElement(E.c,{path:"/contact",component:S}),r.a.createElement(E.c,{path:"/admin",component:F}),r.a.createElement(E.c,{path:"/login",component:C}),r.a.createElement(E.c,{component:B})))},L=(a(41),function(){return r.a.createElement("div",null,r.a.createElement("h2",null,"stopka"),r.a.createElement(E.c,{path:"/",exact:!0,render:function(e){return r.a.createElement("p",null,"Jeste\u015b na ",r.a.createElement("span",null,"stornie g\u0142\xf3wnej"))}}),r.a.createElement(E.c,{path:"/:page",exact:!0,render:function(e){return r.a.createElement(r.a.Fragment,null,r.a.createElement("p",null,"Jeste\u015b na ",r.a.createElement("span",null,e.match.params.page)))}}),r.a.createElement(E.c,{path:"/:page/:idProduct",exact:!0,render:function(e){return r.a.createElement(r.a.Fragment,null,r.a.createElement("p",null,"Jeste\u015b na ",r.a.createElement("span",null,e.match.url)),r.a.createElement("p",null,"Jeste\u015b na ",r.a.createElement("span",null,e.match.params.idProduct)))}}))}),M=function(e){function t(){return Object(o.a)(this,t),Object(u.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(s.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement(p.a,null,r.a.createElement("div",{className:"app"},r.a.createElement("header",null,r.a.createElement(y,null)),r.a.createElement("main",null,r.a.createElement("aside",null,r.a.createElement(j,null)),r.a.createElement("section",{className:"page"},r.a.createElement(P,null))),r.a.createElement("footer",null,r.a.createElement(L,null))))}}]),t}(n.Component);l.a.render(r.a.createElement(M,null),document.getElementById("root"))}],[[26,1,2]]]);
//# sourceMappingURL=main.d2082fcb.chunk.js.map