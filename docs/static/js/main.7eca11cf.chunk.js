(this["webpackJsonpproject-module-3"]=this["webpackJsonpproject-module-3"]||[]).push([[0],[,,,,,,,,,,,,,,,,,function(e,a,t){},,,,function(e,a,t){},,,,,,,,,function(e,a,t){},function(e,a,t){},function(e,a,t){},,,,,,function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){"use strict";t.r(a);var s=t(0),i=t(1),r=t.n(i),n=t(22),l=t.n(n),c=(t(30),t(2)),o=t(3),d=t(5),j=t(4),p=(t(31),t(12)),h=t.p+"static/media/logo-devilappers.310a6f20.svg",b=(t(32),function(e){Object(d.a)(t,e);var a=Object(j.a)(t);function t(){return Object(c.a)(this,t),a.apply(this,arguments)}return Object(o.a)(t,[{key:"render",value:function(){return Object(s.jsxs)("footer",{className:"footer",role:"contentinfo",children:[Object(s.jsx)("small",{className:"footer__small",children:" \xa9 devilAPPers 2020 "}),Object(s.jsx)("a",{href:"./profileCards.html",title:"Ir a crear tu tarjeta de visita",children:Object(s.jsx)("img",{className:"footer__logo",src:h,alt:"Logo del grupo",title:"Logo del grupo"})})]})}}]),t}(r.a.Component)),m=t.p+"static/media/logo-awesome-profile-cards.a65df2b2.svg",u=function(e){Object(d.a)(t,e);var a=Object(j.a)(t);function t(){return Object(c.a)(this,t),a.apply(this,arguments)}return Object(o.a)(t,[{key:"render",value:function(){return Object(s.jsxs)(s.Fragment,{children:[Object(s.jsxs)("main",{className:"mainLanding",role:"main",children:[Object(s.jsx)("div",{className:"mainLanding__logo",children:Object(s.jsx)("a",{href:"./profileCards.html",title:"Ir a crear tu tarjeta de visita",children:Object(s.jsx)("img",{className:"mainLanding__logo--img",src:m,alt:"Logo crea tu propia tarjeta de visita",title:"Logo crea tu propia tarjeta de visita"})})}),Object(s.jsxs)("section",{className:"mainLanding__text",children:[Object(s.jsx)("h1",{className:"mainLanding__text--title",children:"Crea tu tarjeta de visita"}),Object(s.jsx)("h2",{className:"mainLanding__text--subtitle",children:"Crea mejores contactos profesionales de forma f\xe1cil y c\xf3moda"})]}),Object(s.jsx)("section",{children:Object(s.jsxs)("ul",{className:"mainLanding__list",children:[Object(s.jsxs)("li",{children:[Object(s.jsx)("span",{className:"mainLanding__list--icon",children:Object(s.jsx)("i",{className:"far fa-object-ungroup","aria-hidden":"true"})}),Object(s.jsx)("h3",{className:"iconTitle",children:"Dise\xf1a"})]}),Object(s.jsxs)("li",{children:[Object(s.jsx)("span",{className:"mainLanding__list--icon",children:Object(s.jsx)("i",{className:"far fa-keyboard","aria-hidden":"true"})}),Object(s.jsx)("h3",{className:"iconTitle",children:"Rellena"})]}),Object(s.jsxs)("li",{children:[Object(s.jsx)("span",{className:"mainLanding__list--icon",children:Object(s.jsx)("i",{className:"fas fa-share-alt","aria-hidden":"true"})}),Object(s.jsx)("h3",{className:"iconTitle",children:"Comparte"})]})]})}),Object(s.jsx)("div",{className:"mainLanding__link",role:"link",children:Object(s.jsx)(p.b,{to:"/card-generator",className:"mainLanding__link--text",title:"Ir a crear tu tarjeta de visita",children:"Comenzar"})})]}),Object(s.jsx)(b,{})]})}}]),t}(r.a.Component),O=t(24),f=t(7),_=(t(38),t(39),function(e){Object(d.a)(t,e);var a=Object(j.a)(t);function t(){return Object(c.a)(this,t),a.apply(this,arguments)}return Object(o.a)(t,[{key:"render",value:function(){return Object(s.jsx)("header",{className:"header",role:"banner",children:Object(s.jsx)(p.b,{to:"/",children:Object(s.jsx)("div",{children:Object(s.jsx)("img",{className:"header__image",src:m,alt:"Logo crea tu propia tarjeta de visita",title:"Vuelve a la p\xe1gina de bienvenida"})})})})}}]),t}(r.a.Component)),v=(t(40),t(41),t(42),function(e){Object(d.a)(t,e);var a=Object(j.a)(t);function t(){return Object(c.a)(this,t),a.apply(this,arguments)}return Object(o.a)(t,[{key:"render",value:function(){return Object(s.jsx)(s.Fragment,{children:Object(s.jsx)("section",{className:"mainCard",children:Object(s.jsxs)("div",{className:"resetImage",children:[Object(s.jsxs)("button",{className:"mainCard__button js-resetBtn",type:"reset",value:"Reset",onClick:this.props.handleReset,children:[Object(s.jsx)("i",{className:"far fa-trash-alt mainCard__button--trashBin","aria-hidden":"true"}),"Reset"]}),Object(s.jsxs)("article",{className:"mainCard__wrapper",children:[Object(s.jsx)("h1",{className:"mainCard__wrapper--name js-nameCard js-border1 palette".concat(this.props.dataFromParent.palette,"_border palette").concat(this.props.dataFromParent.palette,"_name"),children:this.props.dataFromParent.name||"Nombre Apellido"}),Object(s.jsx)("h2",{className:"mainCard__wrapper--position js-positionCard js-border2 palette".concat(this.props.dataFromParent.palette,"_border"),children:this.props.dataFromParent.job||"Front-end developer"}),Object(s.jsx)("div",{className:"profile",children:Object(s.jsx)("img",{className:"profile__avatar",src:this.props.dataFromParent.avatar,alt:"visualized"})}),Object(s.jsx)("nav",{children:Object(s.jsxs)("ul",{className:"mainCard__wrapper--list",children:[Object(s.jsx)("li",{className:"socialLink js-circle1 palette".concat(this.props.dataFromParent.palette,"_circle"),children:Object(s.jsx)("a",{href:"tel:"+this.props.dataFromParent.phone,target:"_blank",rel:"noreferrer",className:"socialLink__link js-tlCard js-icon1 palette".concat(this.props.dataFromParent.palette,"_icon"),children:Object(s.jsx)("i",{className:"fas fa-mobile-alt","aria-hidden":"true"})})}),Object(s.jsx)("li",{className:"socialLink js-circle2 palette".concat(this.props.dataFromParent.palette,"_circle"),children:Object(s.jsx)("a",{href:"mailto:"+this.props.dataFromParent.email,target:"_blank",rel:"noreferrer",className:"socialLink__link js-tlCard js-icon2 palette".concat(this.props.dataFromParent.palette,"_icon"),children:Object(s.jsx)("i",{className:"far fa-envelope","aria-hidden":"true"})})}),Object(s.jsx)("li",{className:"socialLink js-circle3 palette".concat(this.props.dataFromParent.palette,"_circle"),children:Object(s.jsx)("a",{href:"https://www.linkedin.com/in/"+this.props.dataFromParent.linkedin,target:"_blank",rel:"noreferrer",className:"socialLink__link js-tlCard js-icon3 palette".concat(this.props.dataFromParent.palette,"_icon"),children:Object(s.jsx)("i",{className:"fab fa-linkedin-in","aria-hidden":"true"})})}),Object(s.jsx)("li",{className:"socialLink js-circle4 palette".concat(this.props.dataFromParent.palette,"_circle"),children:Object(s.jsx)("a",{href:"https://www.github.com/"+this.props.dataFromParent.github,target:"_blank",rel:"noreferrer",className:"socialLink__link js-tlCard js-icon2 palette".concat(this.props.dataFromParent.palette,"_icon"),children:Object(s.jsx)("i",{className:"fab fa-github-alt","aria-hidden":"true"})})})]})})]})]})})})}}]),t}(r.a.Component)),g=(t(43),t(44),t(45),t(21),function(e){Object(d.a)(t,e);var a=Object(j.a)(t);function t(){return Object(c.a)(this,t),a.apply(this,arguments)}return Object(o.a)(t,[{key:"handleCollapsable",value:function(){this.props.handleCollapsable()}},{key:"render",value:function(){return Object(s.jsx)("div",{onClick:this.props.handleCollapsable,children:Object(s.jsxs)("nav",{className:"mainMenu ".concat(this.props.navclass),children:[Object(s.jsxs)("div",{className:"mainMenu__iconTitle",children:[Object(s.jsx)("span",{className:"mainMenu__iconTitle--icon",children:Object(s.jsx)("i",{className:this.props.icon,"aria-hidden":"true"})}),Object(s.jsx)("h3",{className:"mainMenu__iconTitle--title",children:this.props.title})]}),Object(s.jsx)("button",{className:"".concat(this.props.arrow," mainMenu__button js-button"),id:this.props.id,children:Object(s.jsx)("img",{src:"https://img.icons8.com/ios-glyphs/30/000000/jack-o-lantern.png",alt:"pumpkin icon"})})]})})}}]),t}(r.a.Component)),x=(t(17),function(e){Object(d.a)(t,e);var a=Object(j.a)(t);function t(e){var s;return Object(c.a)(this,t),(s=a.call(this,e)).handleCollapsable=s.handleCollapsable.bind(Object(f.a)(s)),s.state={isHidden:!0,arrow:""},s}return Object(o.a)(t,[{key:"handleCollapsable",value:function(){this.setState({arrow:"changeArrow",isHidden:!this.state.isHidden})}},{key:"render",value:function(){return Object(s.jsxs)("div",{children:[Object(s.jsx)(g,{icon:"far fa-object-ungroup",title:"Dise\xf1a",nom:!0,navclass:"navDesign",id:"design",handleCollapsable:this.handleCollapsable,arrow:this.state.arrow}),Object(s.jsxs)("section",{className:"".concat(!0===this.state.isHidden?"hideCollapsable":""," collapsableDesign section-design"),children:[Object(s.jsx)("h4",{className:"collapsableDesign__title",children:"Colores"}),Object(s.jsxs)("div",{className:"collapsableDesign__palette",onChange:this.props.inputChange,children:[Object(s.jsxs)("label",{htmlFor:"palette1",className:"palette1",children:[Object(s.jsx)("input",{className:"paletteRadio js-paletteRadio1",id:"palette",type:"radio",value:"1",name:"palette"}),Object(s.jsx)("div",{className:"palette1__color1"}),Object(s.jsx)("div",{className:"palette1__color2"}),Object(s.jsx)("div",{className:"palette1__color3"})]}),Object(s.jsxs)("label",{htmlFor:"palette2",className:"palette2",children:[Object(s.jsx)("input",{className:"paletteRadio js-paletteRadio2",id:"palette",type:"radio",value:"2",name:"palette"}),Object(s.jsx)("div",{className:"palette2__color1"}),Object(s.jsx)("div",{className:"palette2__color2"}),Object(s.jsx)("div",{className:"palette2__color3"})]}),Object(s.jsxs)("label",{htmlFor:"palette3",className:"palette3",children:[Object(s.jsx)("input",{className:"paletteRadio js-paletteRadio3",id:"palette",type:"radio",value:"3",name:"palette"}),Object(s.jsx)("div",{className:"palette3__color1"}),Object(s.jsx)("div",{className:"palette3__color2"}),Object(s.jsx)("div",{className:"palette3__color3"})]}),Object(s.jsxs)("label",{htmlFor:"halloween",className:"palette4",children:[Object(s.jsx)("input",{className:"paletteRadio js-paletteRadio4",id:"palette",type:"radio",value:"4",name:"palette"}),Object(s.jsx)("div",{className:"palette4__color1"}),Object(s.jsx)("div",{className:"palette4__color2"}),Object(s.jsx)("div",{className:"palette4__color3"})]})]})]})]})}}]),t}(r.a.Component)),N=(t(46),t(47),function(e){Object(d.a)(t,e);var a=Object(j.a)(t);function t(e){var s;return Object(c.a)(this,t),(s=a.call(this,e)).fr=new FileReader,s.myFileField=r.a.createRef(),s.getPreview=s.getPreview.bind(Object(f.a)(s)),s.handleFilePicker=s.handleFilePicker.bind(Object(f.a)(s)),s.uploadImage=s.uploadImage.bind(Object(f.a)(s)),s.getImage=s.getImage.bind(Object(f.a)(s)),s}return Object(o.a)(t,[{key:"handleFilePicker",value:function(){this.myFileField.current.click()}},{key:"uploadImage",value:function(e){var a=e.currentTarget.files[0];this.fr.addEventListener("load",this.getImage),this.fr.readAsDataURL(a)}},{key:"getImage",value:function(){var e=this.fr.result;this.props.updateAvatar(e)}},{key:"getPreview",value:function(e,a){return e?"https://carmitive.com/wp-content/uploads/2017/08/blank-white-page.jpg":a}},{key:"render",value:function(){return Object(s.jsxs)(s.Fragment,{children:[Object(s.jsx)("label",{className:"form__label labelImage",htmlFor:"img",children:"Imagen de perfil"}),Object(s.jsxs)("div",{className:"form__wrapperImage",children:[Object(s.jsxs)("div",{className:"action get-avatar",children:[Object(s.jsx)("button",{className:"action__upload-btn js__profile-trigger get-avatar__trigger",type:"button",onClick:this.handleFilePicker,children:"A\xf1adir imagen"}),Object(s.jsx)("input",{type:"file",name:"",id:"avatar",ref:this.myFileField,className:"action__hiddenField js__profile-upload-btn get-avatar__upload-field",onChange:this.uploadImage,required:!0})]}),Object(s.jsx)("div",{className:"get-avatar__preview--container",children:Object(s.jsx)("img",{className:"profile__preview js__profile-preview get-avatar__preview",src:this.getPreview(this.props.isAvatarDefault,this.props.avatar),alt:"visualized"})})]})]})}}]),t}(i.Component)),k=function(e){Object(d.a)(t,e);var a=Object(j.a)(t);function t(e){var s;return Object(c.a)(this,t),(s=a.call(this,e)).handleCollapsable=s.handleCollapsable.bind(Object(f.a)(s)),s.state={isHidden:!0,arrow:""},s}return Object(o.a)(t,[{key:"handleCollapsable",value:function(){!0===this.state.isHidden?this.setState({arrow:"changeArrowOn",isHidden:!1}):this.setState({arrow:"changeArrowOff",isHidden:!0})}},{key:"render",value:function(){return Object(s.jsxs)("div",{children:[Object(s.jsx)(g,{icon:"far fa-keyboard",title:"Rellena",navclass:"navForm",id:"form",handleCollapsable:this.handleCollapsable,arrow:this.state.arrow}),Object(s.jsx)("section",{className:"".concat(!0===this.state.isHidden?"hideCollapsable":""," section-form"),children:Object(s.jsxs)("form",{onChange:this.props.inputChange,className:"form",action:"",method:"POST",children:[Object(s.jsx)("label",{className:"form__label",htmlFor:"fullName",children:"Nombre completo"}),Object(s.jsx)("input",{className:"form__input js-field",id:"name",type:"text",name:"inputForm",placeholder:"Ej.: Mal\xe9fica",required:!0,value:this.props.dataFromParent.name}),Object(s.jsx)("label",{className:"form__label",htmlFor:"position",children:"Puesto"}),Object(s.jsx)("input",{className:"form__input js-field",id:"job",type:"text",name:"inputForm",placeholder:"Ej.: Bruja malvada",required:!0,value:this.props.dataFromParent.job}),Object(s.jsx)(N,{avatar:this.props.dataFromParent.avatar,isAvatarDefault:this.props.dataFromParent.isAvatarDefault,updateAvatar:this.props.updateAvatar}),Object(s.jsx)("label",{className:"form__label",htmlFor:"emailAddress",children:"E-mail"}),Object(s.jsx)("input",{className:"form__input js-field",id:"email",type:"email",name:"inputForm",placeholder:"Ej.: malefica@gmail.com",required:!0,value:this.props.dataFromParent.email}),Object(s.jsx)("label",{className:"form__label",htmlFor:"telephone",children:"Tel\xe9fono"}),Object(s.jsx)("input",{className:"form__input js-field",id:"phone",type:"tel",name:"inputForm",placeholder:"Ej.: 666-66-66-66",required:!0,value:this.props.dataFromParent.phone}),Object(s.jsx)("label",{className:"form__label",htmlFor:"linkedin",children:"LinkedIn"}),Object(s.jsx)("input",{className:"form__input js-field",id:"linkedin",type:"text",name:"inputForm",placeholder:"Ej.: linkedin.com/in/malefica",value:this.props.dataFromParent.linkedin}),Object(s.jsx)("label",{className:"form__label",htmlFor:"github",children:"GitHub"}),Object(s.jsx)("input",{className:"form__input js-field",id:"github",type:"text",name:"inputForm",placeholder:"Ej.: @malefica",value:this.props.dataFromParent.github})]})})]})}}]),t}(r.a.Component),C=(t(48),function(e){Object(d.a)(t,e);var a=Object(j.a)(t);function t(e){var s;return Object(c.a)(this,t),(s=a.call(this,e)).handleCollapsable=s.handleCollapsable.bind(Object(f.a)(s)),s.state={isHidden:!0,arrow:"",hiddenBorder:""},s}return Object(o.a)(t,[{key:"handleCollapsable",value:function(){!0===this.state.isHidden?this.setState({arrow:"changeArrowOn",isHidden:!1,hiddenBorder:"hideLineShare"}):this.setState({arrow:"changeArrowOff",isHidden:!0,hiddenBorder:""})}},{key:"render",value:function(){return Object(s.jsxs)("div",{children:[Object(s.jsx)(g,{icon:"fas fa-share-alt",title:"Comparte",navclass:"".concat(this.state.hiddenBorder," navShare"),id:"share",arrow:this.state.arrow,handleCollapsable:this.handleCollapsable}),Object(s.jsxs)("section",{className:"".concat(!0===this.state.isHidden?"hideCollapsable":""," collapsableShare section-share"),children:[Object(s.jsxs)("button",{className:"collapsableShare__btn",onClick:this.props.sendRequest,children:[Object(s.jsx)("i",{className:"far fa-address-card","aria-hidden":"true"}),"Crear tarjeta"]}),Object(s.jsxs)("div",{className:"collapsableShare__createLink hideCollapsable",children:[Object(s.jsx)("p",{className:"collapsableShare__createLink--title",children:"La tarjeta ha sido creada:"}),Object(s.jsx)("span",{className:"collapsableShare__createLink--twitterLink"}),Object(s.jsxs)("a",{className:"collapsableShare__createLink--twitterButton",target:"_blank",rel:"noreferrer",href:"https://twitter.com/Adalab_Digital",children:[Object(s.jsx)("i",{className:"fab fa-twitter","aria-hidden":"true"}),"Compartir en Twitter"]})]})]})]})}}]),t}(r.a.Component));var F=function(e){return fetch("https://us-central1-awesome-cards-cf6f0.cloudfunctions.net/card/",{method:"POST",body:JSON.stringify(e),headers:{"content-type":"application/json"}}).then((function(e){return e.json()})).then((function(e){return e})).catch((function(e){return{success:!1,error:"Se ha producido un error"}}))},y=function(e){Object(d.a)(t,e);var a=Object(j.a)(t);function t(){var e;return Object(c.a)(this,t),(e=a.call(this)).handleChange=e.handleChange.bind(Object(f.a)(e)),e.getLocalStorage=e.getLocalStorage.bind(Object(f.a)(e)),e.handleReset=e.handleReset.bind(Object(f.a)(e)),e.state=e.getLocalStorage(),e.sendRequest=e.sendRequest.bind(Object(f.a)(e)),e.updateAvatar=e.updateAvatar.bind(Object(f.a)(e)),e}return Object(o.a)(t,[{key:"sendRequest",value:function(){var e=this,a={name:this.state.name,job:this.state.job,photo:this.state.photo,phone:this.state.phone,email:this.state.email,linkedin:this.state.linkedin,github:this.state.github,palette:this.state.palette};F(a).then((function(a){!0===a.success?(e.setState({apiSuccess:!0,apiCardUrl:a.cardURL,apiError:""}),console.log(e.state.apiCardUrl)):e.setState({apiSuccess:!1,apiCardUrl:"",apiError:a.error})}))}},{key:"updateAvatar",value:function(e){this.setState({avatar:e,isAvatarDefault:!1})}},{key:"handleChange",value:function(e){var a=this,t=e.target.id;"name"===e.target.id?e.target.value=e.target.value.slice(0,16):"job"===e.target.id&&(e.target.value=e.target.value.slice(0,20)),this.setState(Object(O.a)({},t,e.target.value),(function(){localStorage.setItem("object",JSON.stringify(a.state))}))}},{key:"getLocalStorage",value:function(){var e=JSON.parse(localStorage.getItem("object"));return null===e?{palette:1,name:"",job:"",phone:"",email:"",linkedin:"",github:"",isAvatarDefault:!0,avatar:"https://i.picasion.com/pic90/275001457e7c33cd30cbc32e7de2aabe.gif",apiSuccess:!1,apiCardUrl:"",apiError:""}:{name:e.name,job:e.job,phone:e.phone,email:e.email,linkedin:e.linkedin,github:e.github,palette:e.palette,isAvatarDefault:!1,avatar:e.avatar,apiSuccess:!1,apiCardUrl:"",apiError:""}}},{key:"handleReset",value:function(){localStorage.clear(),this.setState({palette:1,name:"",job:"",phone:"",email:"",linkedin:"",github:"",isAvatarDefault:!0,avatar:"https://i.picasion.com/pic90/275001457e7c33cd30cbc32e7de2aabe.gif"})}},{key:"render",value:function(){return console.log(this.state),Object(s.jsxs)(s.Fragment,{children:[Object(s.jsx)(_,{}),Object(s.jsxs)("main",{className:"mainProfileCards",role:"main",children:[Object(s.jsx)(v,{handleReset:this.handleReset,dataFromParent:this.state}),Object(s.jsxs)("section",{className:"mainOptions",children:[Object(s.jsx)(x,{inputChange:this.handleChange,dataFromParent:this.state}),Object(s.jsx)(k,{updateAvatar:this.updateAvatar,inputChange:this.handleChange,dataFromParent:this.state}),Object(s.jsx)(C,{dataFromParent:this.state})]})]}),Object(s.jsx)(b,{})]})}}]),t}(r.a.Component),w=t(6),P=function(e){Object(d.a)(t,e);var a=Object(j.a)(t);function t(){return Object(c.a)(this,t),a.apply(this,arguments)}return Object(o.a)(t,[{key:"render",value:function(){return Object(s.jsx)(s.Fragment,{children:Object(s.jsxs)(w.c,{children:[Object(s.jsx)(w.a,{exact:!0,path:"/",component:u}),Object(s.jsx)(w.a,{path:"/card-generator",component:y})]})})}}]),t}(r.a.Component);l.a.render(Object(s.jsx)(r.a.StrictMode,{children:Object(s.jsx)(p.a,{children:Object(s.jsx)(P,{})})}),document.getElementById("root"))}],[[49,1,2]]]);
//# sourceMappingURL=main.7eca11cf.chunk.js.map