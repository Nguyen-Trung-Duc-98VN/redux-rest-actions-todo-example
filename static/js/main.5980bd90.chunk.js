(this["webpackJsonpredux-rest-actions-todo-example"]=this["webpackJsonpredux-rest-actions-todo-example"]||[]).push([[0],{104:function(e,t,a){e.exports=a(162)},128:function(e,t,a){},161:function(e,t,a){"use strict";a.r(t),a.d(t,"mockServer",(function(){return r}));var n=a(30),o=a(15);function r(){var e=4,t=[{id:"1",content:"Learn React",completed:!1},{id:"2",content:"Learn Redux",completed:!1},{id:"3",content:"Build an app",completed:!1}],a=200,r=201,c=404;function l(e){var t=e.url.split("/");return 4===t.length?t[3]:""}o.api.mockAdapter.onGet(/\/api\/todos\/*\d*/).reply((function(e){return l(e)?function(e){var n=l(e),o=null;return t.forEach((function(e){e.id===n&&(o=e)})),o?[a,o]:[c]}(e):function(e){var n=[].concat(t);console.log("query ===> ".concat(JSON.stringify(e.params)));var o="all";return e.params&&e.params.filters&&e.params.filters.visibilityFilter&&(o=e.params.filters.visibilityFilter),n=n.filter((function(e){return"all"===o||(!("completed"!==o||!e.completed)||"not_completed"===o&&!e.completed)})),e.params&&e.params.filters&&e.params.filters.search&&(n=n.filter((function(t){var a=e.params.filters.search.toLowerCase();return t.content.toLowerCase().indexOf(a)>=0}))),[a,{todos:n}]}(e)})),o.api.mockAdapter.onPost("/api/todos").reply((function(a){var o=Object(n.a)({},JSON.parse(a.data));return o.id=String(e++),t.push(o),[r,o]})),o.api.mockAdapter.onPut(/\/api\/todos\/\d+/).reply((function(e){var n=l(e),o=t.findIndex((function(e){return e.id===n}));if(-1===o)return[c];var r=JSON.parse(e.data);return t.splice(o,1,r),[a,r]})),o.api.mockAdapter.onDelete(/\/api\/todos\/\d+/).reply((function(e){var n=l(e),o=t.findIndex((function(e){return e.id===n}));return-1===o?[c]:(t.splice(o,1),[a,{id:n}])}))}t.default=r},162:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),r=a(7),c=a.n(r),l=a(55),i=a(15),d=a(44),u=a(32),s=a(205),p=a(4),m=a.n(p),b=(m.a.shape({id:m.a.string,content:m.a.string,completed:m.a.bool}),m.a.shape({visibilityFilter:m.a.string,searchFilter:m.a.string}),a(30)),E=a(36),f=a(204),O=a(197),v=a(163),g=a(199),j=a(201),T=a(208),h=a(207),C=a(203),_=a(88),y=a.n(_),A=a(202),D=a(200),k=a(85),S=a.n(k),R=a(86),P=a.n(R),F=a(194),L=a(87),U=a.n(L),w=a(60),x=a.n(w),N="all",G="completed",B="not_completed";var I=function(e){var t={visibility:e.visibilityFilter};return e.search&&(t.search=e.search),x.a.stringify(t)},M=function(e){var t=x.a.parse(e),a={};return t?(a.search=t.search||"",a.visibilityFilter=function(e){if(!e)return N;if("string"!==typeof e)return N;var t=e.toLocaleLowerCase();return t===N||t===G||t===B?t:N}(t.visibility),a):{visibilityFilter:N,search:""}};var J=function(e){var t=e.filters,a=t.visibilityFilter,n=t.search,r="You have nothing to do!";return a===B?(r="You have no uncompleted items",n&&(r+=" that match your search")):a===G?(r="You have no completed items",n&&(r+=" that match your search")):n&&(r="You have nothing to do that matches your search"),o.a.createElement(s.a,{mt:"2em"},r)};var K=function(e){var t=e.error;return o.a.createElement(s.a,{mt:"3em",color:"red"},t.message)},W=a(91),Y=a(198);var z=function(e){var t=e.onChange,a=Object(n.useState)(null),r=Object(E.a)(a,2),c=r[0],l=r[1],i=Object(n.useCallback)((function(e){l(e.currentTarget)}),[]),d=Object(n.useCallback)((function(e){l(null),t(e.target.id)}),[t]);return o.a.createElement(s.a,{component:e.component},o.a.createElement(F.a,{"aria-controls":"simple-menu","aria-haspopup":"true",onClick:i},e.label),o.a.createElement(W.a,{anchorEl:c,keepMounted:!0,open:Boolean(c),onClose:d},e.items.map((function(t){return o.a.createElement(Y.a,{id:t.value,key:t.value,selected:t.value===e.selected,onClick:d},t.display)}))))};var V=function(e){var t=e.getTodos,a=e.visibilityFilter,r=e.searchFilter,c=e.updateFilters,l=e.addTodo,i=e.updateTodo,d=e.pending,p=e.updatePending,m=e.todos,_=e.error,k=e.filters,R=Object(n.useState)(""),L=Object(E.a)(R,2),w=L[0],x=L[1],N=Object(u.f)();Object(n.useEffect)((function(){var e=M(window.location.search);c(e,N),t(e)}),[t,c,N]);var I,W=Object(n.useCallback)((function(e){N.push("/delete/".concat(e))}),[N]),Y=Object(n.useCallback)((function(e){var a=Object(b.a)({},k,{visibilityFilter:e});c(a,N),t(a)}),[t,k,c,N]),V=Object(n.useCallback)((function(e){var a=Object(b.a)({},k,{search:e.target.value});c(a,N),t(a)}),[t,k,c,N]),q=Object(n.useCallback)((function(e){N.push("/edit/".concat(e))}),[N]),$=Object(n.useCallback)((function(e){i(e.id,Object(b.a)({},e,{completed:!e.completed})).then((function(){return t(k)}))}),[t,k,i]),H=Object(n.useCallback)((function(e){x(e.target.value)}),[]),Q=Object(n.useCallback)((function(){var e=w.trim();e&&(l({content:e}),x(""))}),[l,w]),X=Object(n.useCallback)((function(e){"Enter"===e.key&&Q()}),[Q]),Z=Object(n.useMemo)((function(){return d||p}),[d,p]),ee=Object(n.useMemo)((function(){return _?o.a.createElement(K,{error:_}):m?(m.length?null:o.a.createElement(J,{filters:k}))||o.a.createElement(O.a,null,m.map((function(e){return o.a.createElement(v.a,{key:e.id,divider:!0},o.a.createElement(g.a,null,o.a.createElement(T.a,{disableRipple:!0,edge:"start",disabled:Z,checked:e.completed,tabIndex:-1,onChange:$.bind(null,e)})),o.a.createElement(j.a,{primary:e.content}),o.a.createElement(s.a,{component:"span",ml:"1em"},o.a.createElement(D.a,{"aria-label":"edit",onClick:q.bind(null,e.id),disabled:Z},o.a.createElement(S.a,null))),o.a.createElement(D.a,{"aria-label":"delete",onClick:W.bind(null,e.id),disabled:Z},o.a.createElement(P.a,null)))}))):null}),[m,Z,W,q,$,_,k]);return o.a.createElement(o.a.Fragment,null,o.a.createElement("div",{className:"header"},o.a.createElement("h2",null,"Todo List")),o.a.createElement(A.a,null,o.a.createElement(h.a,{id:"add-todo",variant:"outlined",placeholder:"Add a new TODO item",value:w,onChange:H,disabled:Z,onKeyPress:X,autoComplete:"off",size:"small"}),o.a.createElement(s.a,{component:"span",ml:"1em"},o.a.createElement(F.a,{variant:"contained",color:"primary",disabled:Z,onClick:Q},o.a.createElement(U.a,null))),o.a.createElement(s.a,{ml:"1em"},"Showing: ",(I=a)===B?"Not completed":I===G?"Completed":"All",o.a.createElement(z,{label:"Change Filter",items:[{value:"all",display:"All"},{value:"completed",display:"Completed"},{value:"not_completed",display:"Not completed"}],onChange:Y,component:"span",selected:a})),o.a.createElement(h.a,{id:"search-todo",variant:"outlined",placeholder:"Search",value:r,onChange:V,autoComplete:"off",size:"small",InputProps:{endAdornment:o.a.createElement(C.a,{position:"end"},o.a.createElement(y.a,null))}}),o.a.createElement(s.a,{component:"span",ml:"1em"},Z&&o.a.createElement(f.a,{color:"secondary"}))),ee)};var q=function(e){var t=e.getTodo,a=e.updateTodo,r=e.cancelUpdate,c=Object(u.f)(),l=Object(u.g)("id").id,i=Object(n.useState)(""),d=Object(E.a)(i,2),p=d[0],m=d[1],b=Object(n.useState)(!1),O=Object(E.a)(b,2),v=O[0],g=O[1];Object(n.useEffect)((function(){t(l).then((function(e){e&&e.content&&(m(e.content),g(e.completed))}))}),[l,t]);var j=Object(n.useCallback)((function(){r(),c.push("/")}),[c,r]),T=Object(n.useCallback)((function(){a(l,{id:l,content:p,completed:v}).then((function(){c.push("/")}))}),[a,c,l,p,v]),C=Object(n.useCallback)((function(e){m(e.target.value)}),[m]);return e.updatePending?o.a.createElement(f.a,null):e.updateError?o.a.createElement(o.a.Fragment,null,o.a.createElement(s.a,{color:"red",mb:"1em"},e.updateError.toString()),o.a.createElement(F.a,{variant:"contained",onClick:j},"BACK")):e.todo?o.a.createElement(o.a.Fragment,null,o.a.createElement("div",null,"Edit Todo"),o.a.createElement(s.a,{mt:"1em",mb:"1em"},o.a.createElement(h.a,{id:"edit-todo",variant:"outlined",onChange:C,value:p})),o.a.createElement(s.a,{mt:"1em",mb:"1em"},o.a.createElement(F.a,{variant:"contained",onClick:j},"Cancel"),o.a.createElement(s.a,{component:"span",ml:"1em"},o.a.createElement(F.a,{variant:"contained",color:"primary",onClick:T},"Save")))):null},$=a(196);var H=function(e){return o.a.createElement(s.a,{mt:"1em"},o.a.createElement(s.a,{mb:"1em"},e.children),o.a.createElement(F.a,{variant:"contained",onClick:e.onCancel},"Cancel"),o.a.createElement(s.a,{component:"span",ml:"1em"},o.a.createElement(F.a,{variant:"contained",color:"primary",onClick:e.onConfirm},"Delete")))};var Q=function(e){var t=e.getTodo,a=e.todo,r=e.deleteTodo,c=e.cancelUpdate,l=Object(u.f)(),i=Object(u.g)("id").id;Object(n.useEffect)((function(){t(i)}),[i,t]);var d=Object(n.useCallback)((function(){c(),l.push("/")}),[l,c]),p=Object(n.useCallback)((function(){r(i).then((function(){l.push("/")}))}),[l,i,r]);return e.updatePending?o.a.createElement(f.a,null):e.updateError?o.a.createElement(o.a.Fragment,null,o.a.createElement(s.a,{color:"red",mb:"1em"},e.updateError.toString()),o.a.createElement(F.a,{variant:"contained",onClick:d},"BACK")):e.todo?o.a.createElement(o.a.Fragment,null,o.a.createElement(s.a,{mb:"1em"},o.a.createElement("div",null,"Delete TODO"),o.a.createElement(H,{onCancel:d,onConfirm:p},o.a.createElement("p",{className:"warning"},"Are you sure you want to delete TODO:"),o.a.createElement($.a,null,o.a.createElement(s.a,{p:"1em"},a.content," ",a.completed?"(completed)":"(not completed)"))))):null},X="";X="/redux-rest-actions-todo-example";var Z=function(e){return o.a.createElement(s.a,{m:"1em"},o.a.createElement(d.a,{basename:X},o.a.createElement(u.c,null,o.a.createElement(u.a,{exact:!0,path:"/"},o.a.createElement(V,{getTodos:e.getTodos,addTodo:e.addTodo,error:e.listError,updateTodo:e.updateTodo,deleteTodo:e.deleteTodo,todos:e.todos,pending:e.pending,updatePending:e.updatePending,visibilityFilter:e.visibilityFilter,searchFilter:e.searchFilter,updateFilters:e.updateFilters,filters:e.filters})),o.a.createElement(u.a,{exact:!0,path:"/edit/:id"},o.a.createElement(q,{getTodo:e.getTodo,updateTodo:e.updateTodo,updateError:e.updateError,updatePending:e.updatePending,todo:e.todo,cancelUpdate:e.cancelUpdate})),o.a.createElement(u.a,{exact:!0,path:"/delete/:id"},o.a.createElement(Q,{getTodo:e.getTodo,deleteTodo:e.deleteTodo,updateError:e.updateError,updatePending:e.updatePending,todo:e.todo,cancelUpdate:e.cancelUpdate})))))},ee=a(8),te=Object(ee.b)("GET_TODOS",(function(e){return e?{payload:{params:{filters:e}}}:{}})),ae=Object(ee.b)("GET_TODOS_SUCCESS"),ne=Object(ee.b)("GET_TODOS_ERROR"),oe=Object(ee.b)("SET_FILTERS"),re=Object(ee.b)("GET_TODO",(function(e){return{payload:{id:e}}})),ce=Object(ee.b)("GET_TODO_SUCCESS"),le=Object(ee.b)("GET_TODO_ERROR"),ie=Object(ee.b)("ADD_TODO",(function(e){return{payload:{data:Object(b.a)({},e,{completed:!1})}}})),de=Object(ee.b)("ADD_TODO_SUCCESS"),ue=Object(ee.b)("ADD_TODO_ERROR"),se=Object(ee.b)("UPDATE_TODO",(function(e,t){return{payload:{id:e,data:t}}})),pe=Object(ee.b)("UPDATE_TODO_SUCCESS"),me=Object(ee.b)("UPDATE_TODO_ERROR"),be=Object(ee.b)("DELETE_TODO",(function(e){return{payload:{id:e}}})),Ee=Object(ee.b)("DELETE_TODO_SUCCESS"),fe=Object(ee.b)("DELETE_TODO_ERROR"),Oe=Object(ee.b)("CANCEL_UPDATE"),ve=function(e){return e.list.todos},ge=function(e){return e.list.error},je=function(e){return e.list.pending},Te=function(e){return e.update.pending},he=function(e){return e.update.error},Ce=function(e){return e.update.todo},_e=function(e){return e.filters},ye=function(e){return e.filters.visibilityFilter},Ae=function(e){return e.filters.search};var De,ke=Object(l.b)((function(e){return{todos:ve(e),todo:Ce(e),listError:ge(e),pending:je(e),updatePending:Te(e),updateError:he(e),visibilityFilter:ye(e),searchFilter:Ae(e),filters:_e(e)}}),{updateFilters:function(e,t){return function(a){a(oe(e)),t.push({search:I(e)})}},cancelUpdate:Oe})((function(e){return o.a.createElement(Z,Object.assign({},e,{getTodos:i.api.getTodos,getTodo:i.api.getTodo,addTodo:i.api.addTodo,updateTodo:i.api.updateTodo,deleteTodo:i.api.deleteTodo}))})),Se=(a(128),a(19)),Re=a(10);function Pe(e){e.pending=!0,e.error=null}function Fe(e,t){e.pending=!1,e.error=t.payload}var Le,Ue=Object(ee.c)({todos:[],pending:!1,error:null},(De={},Object(Re.a)(De,te,(function(e){Pe(e)})),Object(Re.a)(De,ae,(function(e,t){e.pending=!1,e.todos=t.payload.todos})),Object(Re.a)(De,de,(function(e,t){e.pending=!1})),Object(Re.a)(De,Ee,(function(e,t){e.pending=!1})),Object(Re.a)(De,pe,(function(e,t){e.pending=!1})),Object(Re.a)(De,ne,(function(e,t){Fe(e,t)})),De)),we=Object(ee.c)({pending:!1,error:null,todo:null},(Le={},Object(Re.a)(Le,re,(function(e){Pe(e)})),Object(Re.a)(Le,ce,(function(e,t){e.pending=!1,e.todo=t.payload})),Object(Re.a)(Le,le,(function(e,t){Fe(e,t)})),Object(Re.a)(Le,Oe,(function(e){e.todo=null})),Object(Re.a)(Le,ie,(function(e){Pe(e)})),Object(Re.a)(Le,de,(function(e){e.pending=!1})),Object(Re.a)(Le,ue,(function(e,t){Fe(e,t)})),Object(Re.a)(Le,se,(function(e){Pe(e)})),Object(Re.a)(Le,pe,(function(e){e.pending=!1,e.todo=null})),Object(Re.a)(Le,me,(function(e,t){Fe(e,t)})),Object(Re.a)(Le,be,(function(e){Pe(e)})),Object(Re.a)(Le,Ee,(function(e){e.pending=!1})),Object(Re.a)(Le,fe,(function(e,t){Fe(e,t)})),Le)),xe={search:"",visibilityFilter:N},Ne=Object(ee.c)(xe,Object(Re.a)({},oe,(function(e,t){return t.payload}))),Ge=Object(Se.combineReducers)({list:Ue,update:we,filters:Ne}),Be=a(90),Ie=a.n(Be),Me=a(45),Je={};Je.mockAdapter=Ie.a,Je.mockDelay=500,Je.enableTracing=!0;var Ke="";Object({NODE_ENV:"production",PUBLIC_URL:"/redux-rest-actions-todo-example",REACT_APP_USE_MOCK_DATA:"true",REACT_APP_ENABLE_MIDDLEWARE_LOGGING:"true"}).REACT_APP_BASE_URL&&(Ke=Object({NODE_ENV:"production",PUBLIC_URL:"/redux-rest-actions-todo-example",REACT_APP_USE_MOCK_DATA:"true",REACT_APP_ENABLE_MIDDLEWARE_LOGGING:"true"}).REACT_APP_BASE_URL);var We=Object(i.configureApiMiddleware)({baseURL:Ke},Je);var Ye,ze={getTodos:{url:"/api/todos",actions:[te,ae,ne]},getTodo:{url:"/api/todos/:id",actions:[re,ce,le]},addTodo:{url:"/api/todos",actions:[ie,de,ue]},updateTodo:{url:"/api/todos/:id",actions:[se,pe,me]},deleteTodo:{url:"/api/todos/:id",actions:[be,Ee,fe]}},Ve=Object(ee.a)({reducer:Ge,middleware:[We,Me.a],preloadedState:Ye});Object(i.configureApi)(Ve,ze),(0,a(161).default)();var qe=function(){return o.a.createElement(l.a,{store:Ve},o.a.createElement(ke,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(o.a.createElement(qe,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[104,1,2]]]);
//# sourceMappingURL=main.5980bd90.chunk.js.map