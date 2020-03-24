(this["webpackJsonpreact-expenses-v2"]=this["webpackJsonpreact-expenses-v2"]||[]).push([[0],{41:function(e,t,a){e.exports=a(72)},71:function(e,t,a){},72:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(36),l=a.n(c),o=a(10),s=a(11),i=a(14),m=a(12),u=a(15),d=a(75),p=a(37),b=a.n(p),f=a(13),E=a(8),h=a(19),v=a.n(h),y=(a(62),a(64),a(73),{apiKey:"AIzaSyDX659ojkfbyFVd1Diy_N5XIb2VmO1ZwzI",authDomain:"lab8spendmoney.firebaseapp.com",databaseURL:"https://lab8spendmoney.firebaseio.com",projectId:"lab8spendmoney",storageBucket:"lab8spendmoney.appspot.com",messagingSenderId:"660598365448",appId:"1:660598365448:web:51a1c7879800aa3cafa0bd",measurementId:"G-QG2XBM77G6"});v.a.apps.length||v.a.initializeApp(y);var g=v.a;function N(){return r.a.createElement("div",null,r.a.createElement("h1",{className:"display-4 text-center"},r.a.createElement(f.b,{to:"/about"},r.a.createElement("i",{className:"fas fa-dollar-sign text-primary"})," My ",r.a.createElement("span",{className:"text-primary"},"Expenses"))))}var j=a(40),O=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(i.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={name:"",amount:""},a.onChange=function(e){a.setState(Object(j.a)({},e.target.name,e.target.value))},a.onSubmit=function(e){e.preventDefault(),a.props.addTransaction(a.state.name,a.state.amount),a.setState({name:"",amount:""})},a}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("form",{id:"add-transaction_form",onSubmit:this.onSubmit},r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"name"},"Transaction Name:"),r.a.createElement("input",{type:"text",name:"name",className:"form-control",placeholder:"Expense detail ...",onChange:this.onChange,value:this.state.name})),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"amount"},"Amount (+:income / -:expense)"),r.a.createElement("input",{type:"number",name:"amount",className:"form-control",placeholder:"0.00",onChange:this.onChange,value:this.state.amount})),r.a.createElement("input",{type:"submit",value:"Add Transaction",className:"btn btn-primary btn-block"})))}}]),t}(n.Component);function w(e){var t=e.transactions.map((function(e){return e.amount})).reduce((function(e,t){return e+t}),0),a=t<0?"-":"+";return 0===t&&(a=""),r.a.createElement("div",{className:"container mt-5 text-center"},r.a.createElement("h4",null,"Your Balance"),r.a.createElement("h1",{id:"balance"},a,"\u0e3f",Math.abs(t)))}function x(e){var t=e.transactions.map((function(e){return e.amount})),a=t.filter((function(e){return e>0})).reduce((function(e,t){return e+t}),0),n=-1*t.filter((function(e){return e<0})).reduce((function(e,t){return e+t}),0);return console.log(a+", "+n),r.a.createElement("div",{className:"inc-exp-container"},r.a.createElement("div",null,r.a.createElement("h4",null,"Income"),r.a.createElement("p",{className:"money plus"},"\u0e3f",a)),r.a.createElement("div",null,r.a.createElement("h4",null,"Expense"),r.a.createElement("p",{className:"money minus"},"\u0e3f",n)))}var T=function(e){function t(){return Object(o.a)(this,t),Object(i.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this.props.transaction,t=e.name,a=e.amount,n=e.date,c=new Date(n),l=c.getDate()+" "+["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"][c.getMonth()]+" "+(c.getYear()+1900);return r.a.createElement("tr",{className:a<0?"minus":"plus"},r.a.createElement("td",null,t),r.a.createElement("td",null,a),r.a.createElement("td",null,a<0?"expense":"income"),r.a.createElement("td",null,l))}}]),t}(n.Component);function k(e){var t=e.transactions;return r.a.createElement("div",null,r.a.createElement("div",null,r.a.createElement("h3",null,"Transaction History")),r.a.createElement("table",{className:"table table-striped mt-3"},r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",null,"Name"),r.a.createElement("th",null,"Amount"),r.a.createElement("th",null,"Type"),r.a.createElement("th",null,"Date"))),r.a.createElement("tbody",{id:"transaction-list"},t.map((function(e){return r.a.createElement(T,{key:e.id,transaction:e})})))),r.a.createElement("button",{id:"clear-history",className:"btn btn-danger btn-block",onClick:e.clearTransactions},"Clear History"))}function S(){return r.a.createElement("div",null,r.a.createElement("div",{className:"container mt-5"},r.a.createElement("div",{className:"card"},r.a.createElement("img",{src:"https://firebasestorage.googleapis.com/v0/b/lab8spendmoney.appspot.com/o/web_profile.jpg?alt=media&token=b26970b2-bdef-42cb-abaf-9fb9ae93f9c7",className:"card-img-top",alt:"..."}),r.a.createElement("div",{className:"card-body"},r.a.createElement("h5",{className:"card-title"},"Developer information"),r.a.createElement("p",null,"Thanadon Inthasit (610610584)"),r.a.createElement("p",null,"This app use Google Firebase as backend."),r.a.createElement(f.b,{to:"/"},r.a.createElement("h3",null,r.a.createElement("button",{type:"button",className:"btn btn-primary"},"Home")))))))}a(71);var A=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(i.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={transactions:[]},a.loadData=function(){a.setState({transactions:[]})},a.loadJsonData=function(){b.a.get("/static/data.json").then((function(e){var t=e.data;a.setState({transactions:t})}))},a.loadFirebase=function(){g.firestore().collection("expenses").onSnapshot((function(e){var t=[];e.forEach((function(e){t.push(e.data())})),a.setState({transactions:t})}))},a.validateForm=function(e,t){return e&&t?isNaN(e)?0===+t?(window.alert("Amount CANNOT be zero!"),!1):(Number.isInteger(+t)||window.alert("Amount must be integer!"),!0):(window.alert("Please fill only TEXT detail in transaction name."),!1):(window.alert("Please fill in ALL data fields."),!1)},a.addTransaction=function(e,t){if(!a.validateForm(e,t))return!1;var n={id:Object(d.a)(),name:e,amount:+t,date:(new Date).getTime()};g.firestore().collection("expenses").add(n),a.state.transactions.unshift(n),a.setState({transactions:a.state.transactions})},a.clearTransactions=function(){window.confirm("You are going to clear all transaction history!!!")&&(g.firestore().collection("expenses").get().then((function(e){e.forEach((function(e){e.ref.delete()}))})),a.setState({transactions:[]}))},a}return Object(u.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){this.loadFirebase()}},{key:"render",value:function(){var e=this;return r.a.createElement(f.a,null,r.a.createElement("div",{className:"container mt-4 mb-5"},r.a.createElement(N,null),r.a.createElement(E.a,{exact:!0,path:"/",render:function(t){return r.a.createElement("div",null,r.a.createElement(O,{addTransaction:e.addTransaction}),r.a.createElement(w,{transactions:e.state.transactions}),r.a.createElement(x,{transactions:e.state.transactions}),r.a.createElement(k,{transactions:e.state.transactions,clearTransactions:e.clearTransactions}))}}),r.a.createElement(E.a,{path:"/about",component:S})))}}]),t}(n.Component);l.a.render(r.a.createElement(A,null),document.getElementById("root"))}},[[41,1,2]]]);
//# sourceMappingURL=main.7d80b92f.chunk.js.map