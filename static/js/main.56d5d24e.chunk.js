(this["webpackJsonpgoit-react-hw-01-components"]=this["webpackJsonpgoit-react-hw-01-components"]||[]).push([[0],[,function(e,a,t){e.exports={profile:"Profile_profile__3WS5V",avatar:"Profile_avatar__33CRi",description:"Profile_description__3n8X0",name:"Profile_name__2mfx4",tag:"Profile_tag__14Nh9",location:"Profile_location__32sJU",stats:"Profile_stats__1XkpU",quantity:"Profile_quantity__3LZYw",label:"Profile_label__1mwdX"}},,function(e,a,t){e.exports={statList:"Statistics_statList__2NKBz",statistics:"Statistics_statistics__1lUBI",percentage:"Statistics_percentage__32rMz"}},function(e,a,t){e.exports={item:"FriendList_item__1-l7X",friendList:"FriendList_friendList__1SZjo",avatar:"FriendList_avatar__SLqIZ",isOnline:"FriendList_isOnline__179WS"}},,,function(e,a,t){e.exports={transactionHistory:"TransactionHistory_transactionHistory__2doNx"}},function(e){e.exports=JSON.parse('{"username":"Jacques Gluke","tag":"jgluke","location":"Ocho Rios, Jamaica","avatar":"https://cdn-icons-png.flaticon.com/512/2922/2922506.png","stats":{"followers":5603,"views":4827,"likes":1308}}')},function(e){e.exports=JSON.parse('[{"id":"id-1","label":".docx","percentage":22},{"id":"id-2","label":".pdf","percentage":4},{"id":"id-3","label":".mp3","percentage":17},{"id":"id-4","label":".psd","percentage":47},{"id":"id-5","label":".pdf","percentage":10}]')},function(e){e.exports=JSON.parse('[{"avatar":"https://cdn-icons-png.flaticon.com/512/1998/1998592.png","name":"Mango","isOnline":true,"id":1812},{"avatar":"https://cdn-icons-png.flaticon.com/512/616/616438.png","name":"Kiwi","isOnline":false,"id":1137},{"avatar":"https://cdn-icons-png.flaticon.com/512/1623/1623681.png","name":"Ajax","isOnline":true,"id":1213},{"avatar":"https://cdn-icons-png.flaticon.com/512/2977/2977285.png","name":"Jay","isOnline":true,"id":1714},{"avatar":"https://cdn-icons-png.flaticon.com/512/1998/1998749.png","name":"Poly","isOnline":false,"id":1284}]')},function(e){e.exports=JSON.parse('[{"id":"1e0700a2-5183-4291-85cc-2065a036a683","type":"invoice","amount":"964.82","currency":"LRD"},{"id":"a30f821b-4d25-4ff0-abdd-e340b3f0dd2b","type":"payment","amount":"686.50","currency":"WST"},{"id":"44dca67a-8e5a-4798-bf8e-b15efd4e1abd","type":"invoice","amount":"828.62","currency":"UGX"},{"id":"ea8ed3dc-2b68-4a53-905a-53ecb0adef33","type":"withdrawal","amount":"527.80","currency":"ALL"},{"id":"ea76146a-0b00-4b80-bc02-a8c822176712","type":"withdrawal","amount":"371.43","currency":"MUR"},{"id":"63ca02f9-d637-46b5-9237-f3b24425e029","type":"payment","amount":"862.44","currency":"AUD"},{"id":"ed0263e8-59a5-4bf1-87e0-2bb88e53dc34","type":"withdrawal","amount":"907.00","currency":"GEL"},{"id":"6013bad0-750c-4691-8bc2-d8f2b43969c4","type":"withdrawal","amount":"352.52","currency":"UGX"},{"id":"252c7be4-8b06-4fa7-8d42-61fb835b70d5","type":"payment","amount":"388.98","currency":"TOP"},{"id":"4eaab41b-b967-40ac-82ed-85fc66f646f1","type":"deposit","amount":"103.10","currency":"BWP"},{"id":"9648a350-8469-42d5-8bf3-18090de5fe67","type":"withdrawal","amount":"322.32","currency":"MRO"},{"id":"9c5c25fb-1a95-4b2f-8d1f-4c4426d677cc","type":"invoice","amount":"14.79","currency":"PYG"},{"id":"43ef232c-80e9-4d6f-b48a-b22405620de3","type":"payment","amount":"904.86","currency":"CHF"},{"id":"5161682e-e620-4019-ab0a-24ceb10fbd20","type":"withdrawal","amount":"307.08","currency":"NOK"},{"id":"7b119d71-42e6-4c42-a141-6818b07bb9ff","type":"invoice","amount":"275.07","currency":"AWG"},{"id":"a4f65722-65c4-4c28-b1f4-b8ed988bb205","type":"deposit","amount":"213.10","currency":"STD"},{"id":"c6e5784b-0ca3-48d6-86e5-b5128af5a523","type":"invoice","amount":"116.11","currency":"CUP CUC"},{"id":"c9ebed6a-3a02-4b49-ac0d-0534b51f2bfd","type":"invoice","amount":"878.67","currency":"HKD"},{"id":"a4a98b0e-b22c-438b-9f83-de2df52110c8","type":"invoice","amount":"725.03","currency":"UYU UYI"},{"id":"b39bfa7a-0166-4c47-94d6-87d20590f746","type":"payment","amount":"405.45","currency":"MDL"}]')},,,,,function(e,a,t){},function(e,a,t){},,function(e,a,t){"use strict";t.r(a);var n=t(2),c=t.n(n),i=t(6),s=t.n(i),r=(t(16),t(17),t(1)),d=t.n(r),l=t(0),o=function(e){var a=e.avatar,t=e.username,n=e.tag,c=e.location,i=e.stats;return Object(l.jsxs)("div",{className:d.a.profile,children:[Object(l.jsxs)("div",{className:d.a.description,children:[Object(l.jsx)("img",{src:a,alt:"avatar",className:d.a.avatar}),Object(l.jsxs)("p",{className:d.a.name,children:[" ",t," "]}),Object(l.jsxs)("p",{className:d.a.tag,children:[" @",n," "]}),Object(l.jsx)("p",{className:d.a.location,children:c})]}),Object(l.jsxs)("ul",{className:d.a.stats,children:[Object(l.jsxs)("li",{children:[Object(l.jsx)("span",{className:d.a.label,children:"Followers"}),Object(l.jsx)("span",{className:d.a.quantity,children:i.followers})]}),Object(l.jsxs)("li",{children:[Object(l.jsx)("span",{className:d.a.label,children:"Views"}),Object(l.jsx)("span",{className:d.a.quantity,children:i.views})]}),Object(l.jsxs)("li",{children:[Object(l.jsx)("span",{className:d.a.label,children:"Likes"}),Object(l.jsx)("span",{className:d.a.quantity,children:i.likes})]})]})]})},b=t(3),u=t.n(b),p=function(e){var a=e.name,t=e.value;return Object(l.jsxs)("li",{className:u.a.item,children:[Object(l.jsx)("span",{className:u.a.label,children:a}),Object(l.jsx)("span",{className:u.a.percentage,children:t})]})},j=function(e){var a=e.title,t=e.stats;return Object(l.jsx)("div",{children:Object(l.jsxs)("section",{className:u.a.statistics,children:[a&&Object(l.jsx)("h2",{className:u.a.title,children:a}),Object(l.jsx)("ul",{className:u.a.statList,children:t.map((function(e){return Object(l.jsx)(p,{name:e.label,id:e.id,value:e.percentage},e.id)}))})]})})},m=t(4),f=t.n(m),O=function(e){var a=e.avatar,t=e.name,n=e.isOnline;return Object(l.jsxs)("li",{className:f.a.item,children:[Object(l.jsx)("span",{className:f.a.isOnline,style:{backgroundColor:n?"green":"red"},children:n}),Object(l.jsx)("img",{className:f.a.avatar,src:a,alt:"User avatar",width:"48"}),Object(l.jsx)("p",{className:f.a.name,children:t})]})},y=function(e){var a=e.friends;return Object(l.jsx)("ul",{className:f.a.friendList,children:a.map((function(e){return Object(l.jsx)(O,{name:e.name,avatar:e.avatar,isOnline:e.isOnline},e.id)}))})},h=t(7),x=t.n(h),_=function(e){var a=e.type,t=e.amount,n=e.currency;return Object(l.jsxs)("tr",{children:[Object(l.jsx)("td",{children:a}),Object(l.jsx)("td",{children:t}),Object(l.jsx)("td",{children:n})]})},v=function(e){var a=e.items;return Object(l.jsxs)("table",{className:x.a.transactionHistory,children:[Object(l.jsx)("thead",{children:Object(l.jsxs)("tr",{children:[Object(l.jsx)("th",{children:"Type"}),Object(l.jsx)("th",{children:"Amount"}),Object(l.jsx)("th",{children:"Currency"})]})}),Object(l.jsx)("tbody",{children:a.map((function(e){return Object(l.jsx)(_,{type:e.type,amount:e.amount,currency:e.currency},e.id)}))})]})},g=function(e){return Object(l.jsxs)("div",{children:[Object(l.jsx)(o,{username:e.user.username,tag:e.user.tag,location:e.user.location,avatar:e.user.avatar,stats:e.user.stats}),Object(l.jsx)(j,{title:e.data.title,stats:e.data}),Object(l.jsx)(y,{friends:e.friends}),",",Object(l.jsx)(v,{items:e.transactions})]})},N=t(8),w=t(9),L=t(10),P=t(11);s.a.render(Object(l.jsx)(c.a.StrictMode,{children:Object(l.jsx)(g,{user:N,data:w,friends:L,transactions:P})}),document.getElementById("root"))}],[[19,1,2]]]);
//# sourceMappingURL=main.56d5d24e.chunk.js.map