(this.webpackJsonpwallester2=this.webpackJsonpwallester2||[]).push([[0],{101:function(e){e.exports=JSON.parse('{"page-headers":{"part1":"User List","part2":"User Details","part3":"Create New User"},"create-new-user-button":"Create New User","form-validation":{"name":"name","required":"This field is required","over18years":"Sorry, you must be over 18 years old"}}')},102:function(e){e.exports=JSON.parse('{"page-headers":{"part1":"Lista de usuarios","part2":"Detalles de usuario","part3":"Crear nueva usuaria"},"create-new-user-button":"Crear Nueva Usuaria","form-validation":{"name":"name","required":"Este campo es obligatorio","over18years":"Lo siento, debes ser mayor de 18 a\xf1os."}}')},107:function(e,t,a){},108:function(e,t,a){},109:function(e,t,a){},123:function(e,t,a){},124:function(e,t,a){},125:function(e,t,a){},126:function(e,t,a){},128:function(e,t,a){},240:function(e,t,a){},242:function(e,t,a){"use strict";a.r(t);var r=a(1),n=a.n(r),s=a(44),c=a.n(s),i=(a(107),a(16)),l=a(5),u=(a(108),a(109),a(244)),o=a(3),j={en:{nativeName:"English",languageCode:"en"},es:{nativeName:"Spanish",languageCode:"es"}},d=function(){var e=Object(u.a)().i18n;return Object(o.jsx)("div",{className:"switch-languages",children:Object.keys(j).map((function(t){return Object(o.jsx)("button",{type:"submit",onClick:function(){return e.changeLanguage(t)},className:"switch-languages__language-button ".concat(j[t].languageCode),"aria-label":"change page language to ".concat(j[t].nativeName)},t)}))})},b=function(){return Object(o.jsx)("header",{className:"header",children:Object(o.jsxs)("div",{className:"header__wrapper",children:[Object(o.jsx)(i.b,{to:"/",children:Object(o.jsx)("h1",{children:"Fetch them all"})}),Object(o.jsx)(d,{})]})})},h=a(9),O=a(93),p=(a(123),a(92)),f=(a(124),function(){var e=Object(u.a)().t;return Object(o.jsxs)(i.b,{to:"/create-new-user",className:"create-new-user-button",children:[Object(o.jsx)(p.a,{className:"plus-icon"}),Object(o.jsx)("span",{className:"create-new-user-button__text",children:e("create-new-user-button")})]})}),m=(a(125),function(e){var t=e.title,a=e.showButton;return Object(o.jsxs)("div",{className:"users-header",children:[Object(o.jsx)("h2",{children:t}),a&&Object(o.jsx)(f,{})]})}),x=(a(126),function(e){for(var t=e.setCurrentPage,a=e.totalPages,r=e.currentPage,n=[],s=1;s<=a;s++)n.push(s);return Object(o.jsx)("div",{className:"pagination",children:Object(o.jsx)("ul",{className:"pagination__list",children:n.map((function(e){return Object(o.jsx)("li",{children:Object(o.jsx)("button",{className:"pagination__page-number ".concat(e===r&&"active-page"),onClick:function(){return t(e)},children:e})},e)}))})})}),v=a(20),g=a.n(v),N=a(34);function w(e){return y.apply(this,arguments)}function y(){return(y=Object(N.a)(g.a.mark((function e(t){var a;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(t);case 2:return a=e.sent,e.abrupt("return",a.json());case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function _(){return(_=Object(N.a)(g.a.mark((function e(t,a){var r;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(t,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(a)});case 2:return r=e.sent,e.abrupt("return",r.json());case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var S,B=function(){var e=Object(r.useState)([]),t=Object(h.a)(e,2),a=t[0],n=t[1],s=Object(r.useState)(1),c=Object(h.a)(s,2),l=c[0],j=c[1],d=Object(r.useState)(1),b=Object(h.a)(d,2),p=b[0],f=b[1],v=Object(u.a)().t;return Object(r.useEffect)((function(){w("https://reqres.in/api/users?page=".concat(l)).then((function(e){n(e.data),j(e.page),f(e.total_pages)})).catch((function(e){return console.error(e)}))}),[l]),Object(o.jsx)("main",{children:Object(o.jsxs)("div",{className:"wrapper",children:[Object(o.jsx)(m,{title:v("page-headers.part1"),showButton:!0}),Object(o.jsx)("div",{className:"users-list",children:a.map((function(e){return Object(o.jsxs)(i.b,{to:"/user/".concat(e.id),className:"users-list__user",children:[Object(o.jsxs)("span",{className:"users-list__name",children:[e.first_name," ",e.last_name]}),Object(o.jsx)(O.a,{})]},e.id)}))}),Object(o.jsx)(x,{totalPages:p,currentPage:l,setCurrentPage:j})]})})},q=(a(128),function(){var e=Object(r.useState)({}),t=Object(h.a)(e,2),a=t[0],n=t[1],s=Object(l.f)().id,c=Object(u.a)().t;return Object(r.useEffect)((function(){w("https://reqres.in/api/users/".concat(s)).then((function(e){n(e.data)})).catch((function(e){return console.error(e)}))}),[s]),Object(o.jsxs)("div",{className:"wrapper",children:[Object(o.jsx)(m,{title:c("page-headers.part2"),showButton:!0}),Object(o.jsxs)("div",{className:"user-details",children:[Object(o.jsx)("img",{className:"user-details__avatar",src:a.avatar,alt:a.first_name}),Object(o.jsx)("div",{className:"dividing-line"}),Object(o.jsxs)("p",{children:[a.first_name," ",a.last_name]}),Object(o.jsx)("p",{className:"user-details__email",children:a.email})]})]})}),C=a(94),P=a.n(C),k=a(36),E=a(37);a(240);!function(e){e.SoftwareEngineer="Software Engineer",e.Painter="Painter",e.BusDriver="Bus driver"}(S||(S={}));var D={firstName:"",lastName:"",position:"",dateOfBirth:null},F=new Date;F.setFullYear(F.getFullYear()-18);var J=function(){var e=Object(r.useState)(null),t=Object(h.a)(e,2),a=t[0],n=t[1],s=Object(u.a)().t,c=E.b().shape({firstName:E.c().matches(/^[a-z\s]+$/i,"Only latin craracters pls").required(s("form-validation.required")),lastName:E.c().matches(/^[a-z\s]+$/i,"Only latin craracters pls").required(s("form-validation.required")),dateOfBirth:E.a().max(F,s("form-validation.over18years")).required(s("form-validation.required")).nullable()});return Object(o.jsxs)("div",{className:"wrapper",children:[Object(o.jsx)(m,{title:s("page-headers.part3"),showButton:!1}),Object(o.jsx)(k.c,{initialValues:D,validationSchema:c,onSubmit:function(e,t){var a=t.setSubmitting;(function(e,t){return _.apply(this,arguments)})("https://reqres.in/api/users/",e).then((function(e){n(e),console.log(e)})).catch((function(e){return console.error(e)})),a(!1)},children:function(e){var t=e.values,a=e.errors,r=e.touched,n=e.handleChange,s=e.setFieldValue,c=e.setFieldTouched;return Object(o.jsxs)(k.b,{children:[Object(o.jsxs)("label",{children:["First Name:",Object(o.jsx)(k.a,{name:"firstName",placeholder:"enter your first name",required:!0}),a.firstName&&r.firstName&&Object(o.jsx)("div",{children:a.firstName})]}),Object(o.jsx)("br",{}),Object(o.jsxs)("label",{children:["Last Name:",Object(o.jsx)(k.a,{className:a.lastName&&r.lastName?"red":null,name:"lastName",placeholder:"enter your last name",required:!0}),a.lastName&&r.lastName?Object(o.jsx)("div",{children:a.lastName}):null]}),Object(o.jsx)("br",{}),Object(o.jsxs)("label",{children:["Occupation",Object(o.jsxs)("select",{onChange:n,name:"position",value:t.position,required:!0,children:[Object(o.jsx)("option",{value:"",label:"Select occupation",disabled:!0,hidden:!0}),Object(o.jsx)("option",{value:S.SoftwareEngineer,children:S.SoftwareEngineer}),Object(o.jsx)("option",{value:S.Painter,children:S.Painter}),Object(o.jsx)("option",{value:S.BusDriver,children:S.BusDriver})]})]}),Object(o.jsx)("br",{}),Object(o.jsxs)("label",{children:["Date of Birth:",Object(o.jsx)(P.a,{dayPlaceholder:"dd",monthPlaceholder:"mm",yearPlaceholder:"yyyy",className:"date-picker ".concat(a.dateOfBirth&&r.dateOfBirth?"red":"green"),name:"dateOfBirth",value:t.dateOfBirth,onChange:function(){var e=Object(N.a)(g.a.mark((function e(t){return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log(t),e.next=3,s("dateOfBirth",t,!1);case 3:c("dateOfBirth",!0);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}),r.dateOfBirth&&a.dateOfBirth&&Object(o.jsx)("div",{children:a.dateOfBirth})]}),Object(o.jsx)("br",{}),Object(o.jsx)("button",{type:"submit",children:"Submit"})]})}}),a&&Object(o.jsxs)("div",{children:["Response result: ",JSON.stringify(a)]})]})};var L=function(){return Object(o.jsxs)(i.a,{children:[Object(o.jsx)(b,{}),Object(o.jsxs)(l.c,{children:[Object(o.jsx)(l.a,{path:"/user/:id",children:Object(o.jsx)(q,{})}),Object(o.jsx)(l.a,{path:"/create-new-user",children:Object(o.jsx)(J,{})}),Object(o.jsx)(l.a,{path:"/",children:Object(o.jsx)(B,{})})]})]})},U=a(65),T=a(35),z={en:{translation:a(101)},es:{translation:a(102)}};U.a.use(T.e).init({lng:"en",resources:z});U.a;c.a.render(Object(o.jsx)(n.a.StrictMode,{children:Object(o.jsx)(L,{})}),document.getElementById("root"))}},[[242,1,2]]]);
//# sourceMappingURL=main.2218f1f3.chunk.js.map