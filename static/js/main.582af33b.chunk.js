(this["webpackJsonpgoit-react-hw-06-phonebook-toolkit06"]=this["webpackJsonpgoit-react-hw-06-phonebook-toolkit06"]||[]).push([[0],{21:function(t,e,n){t.exports={input:"filter_input__2EEHk"}},30:function(t,e,n){},48:function(t,e,n){"use strict";n.r(e);var c,r=n(0),a=n.n(r),o=n(10),i=n.n(o),s=(n(30),n(6)),u=n(16),l=n(17),b=n(25),j=n(24),d=n(8),h=n.n(d),m=n(3),f=n(19),O=n.n(f),p=n(4),x=Object(p.b)("contacts/Add",(function(t){var e=t.name,n=t.number;return{payload:{id:O.a.generate(),name:e,number:n}}})),g=Object(p.b)("contacts/delete"),v=Object(p.b)("contacts/changeFilter"),k=n(1),y=function(t){Object(b.a)(n,t);var e=Object(j.a)(n);function n(){var t;Object(u.a)(this,n);for(var c=arguments.length,r=new Array(c),a=0;a<c;a++)r[a]=arguments[a];return(t=e.call.apply(e,[this].concat(r))).state={name:"",number:""},t.handleInputChange=function(e){t.setState(Object(s.a)({},e.target.name,e.target.value))},t.checkFullIsForm=function(t,e){return!!(t.length>0&e.length>0)||(alert("form is not full"),!1)},t.checkUnique=function(e,n){var c=t.props.contacts;if(c.length>0){var r=!!c.find((function(t){return t.name===e||t.number===n}));return r&&alert("".concat(e||n," is already exist")),!r}return!0},t.handleSubmit=function(e){e.preventDefault();var n=t.state,c=n.name,r=n.number,a=t.props.onAdd,o=t.checkUnique(c,r),i=t.checkFullIsForm(c,r);o&&i&&a(t.state),t.reset()},t.reset=function(){t.setState({name:"",number:""})},t}return Object(l.a)(n,[{key:"render",value:function(){return Object(k.jsx)(k.Fragment,{children:Object(k.jsxs)("form",{className:h.a.form,onSubmit:this.handleSubmit,children:[Object(k.jsxs)("label",{children:["Name",Object(k.jsx)("input",{className:h.a.input,type:"text",name:"name",value:this.state.name,onChange:this.handleInputChange})]}),Object(k.jsxs)("label",{children:["Number",Object(k.jsx)("input",{className:h.a.input,type:"tel",name:"number",value:this.state.number,onChange:this.handleInputChange})]}),Object(k.jsx)("button",{className:h.a.button,type:"submit",children:"Add"})]})})}}]),n}(r.Component),C=Object(m.b)((function(t){return{contacts:t.contacts.items}}),(function(t){return{onAdd:function(e,n){return t(x(e,n))}}}))(y),F=n(20),_=n(7),N=n.n(_),w={deleteContact:g},I=Object(m.b)(null,w)((function(t){var e=t.name,n=t.number,c=t.id,r=t.deleteContact;return Object(k.jsxs)("li",{className:N.a.listItem,children:[Object(k.jsxs)("span",{children:[e," : ",n]}),Object(k.jsx)("button",{className:N.a.button,type:"button",onClick:function(){return r(c)},children:"Delete"})]})})),A=Object(m.b)((function(t){return{contacts:t.contacts.items,filter:t.contacts.filter}}),null)((function(t){var e=t.contacts,n=t.filter,c=function(){console.log(e,n);var t=n.toLowerCase();return e.filter((function(e){return e.name.toLowerCase().includes(t)||e.number.includes(t)}))}();return Object(k.jsx)("ul",{className:N.a.list,children:c&&c.map((function(t){return Object(k.jsx)(I,Object(F.a)({},t),t.id)}))})})),S=n(21),E=n.n(S),q={changeFilter:v},D=Object(m.b)((function(t){return{filter:t.filter}}),q)((function(t){var e=t.changeFilter,n=t.filter;return Object(k.jsx)(k.Fragment,{children:Object(k.jsx)("label",{children:Object(k.jsx)("input",{className:E.a.input,type:"text",value:n,onChange:function(t){e(t.target.value)}})})})})),J=function(){return Object(k.jsxs)("div",{children:[Object(k.jsx)("h1",{children:"Phonebook"}),Object(k.jsx)(C,{}),Object(k.jsx)("h2",{children:"Contacts"}),Object(k.jsx)(D,{}),Object(k.jsx)(A,{})]})},K=n(11),L=n(2),U=Object(p.c)([],(c={},Object(s.a)(c,x,(function(t,e){var n=e.payload;return[].concat(Object(K.a)(t),[n])})),Object(s.a)(c,g,(function(t,e){var n=e.payload;return t.filter((function(t){return t.id!==n}))})),c)),z=Object(p.c)("",Object(s.a)({},v,(function(t,e){return e.payload}))),B=Object(L.c)({items:U,filter:z}),G=n(5),H=n(22),M=n.n(H),P=Object(K.a)(Object(p.d)({serializableCheck:{ignoredActions:[G.a,G.f,G.b,G.c,G.d,G.e]}})),T={key:"contacts",storage:M.a,blacklist:["filter"]},X=Object(p.a)({reducer:{contacts:Object(G.g)(T,B)},middleware:P,devTools:!0}),Y={store:X,persistor:Object(G.h)(X)},Q=n(23);i.a.render(Object(k.jsx)(a.a.StrictMode,{children:Object(k.jsx)(m.a,{store:Y.store,children:Object(k.jsx)(Q.a,{loading:null,persistor:Y.persistor,children:Object(k.jsx)(J,{})})})}),document.getElementById("root"))},7:function(t,e,n){},8:function(t,e,n){t.exports={form:"contactForm_form__YedcG",input:"contactForm_input__2KXel",button:"contactForm_button__l3K4C"}}},[[48,1,2]]]);
//# sourceMappingURL=main.582af33b.chunk.js.map