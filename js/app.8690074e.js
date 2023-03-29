(function(t){function e(e){for(var n,i,r=e[0],c=e[1],l=e[2],d=0,f=[];d<r.length;d++)i=r[d],Object.prototype.hasOwnProperty.call(a,i)&&a[i]&&f.push(a[i][0]),a[i]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(t[n]=c[n]);u&&u(e);while(f.length)f.shift()();return o.push.apply(o,l||[]),s()}function s(){for(var t,e=0;e<o.length;e++){for(var s=o[e],n=!0,r=1;r<s.length;r++){var c=s[r];0!==a[c]&&(n=!1)}n&&(o.splice(e--,1),t=i(i.s=s[0]))}return t}var n={},a={app:0},o=[];function i(e){if(n[e])return n[e].exports;var s=n[e]={i:e,l:!1,exports:{}};return t[e].call(s.exports,s,s.exports,i),s.l=!0,s.exports}i.m=t,i.c=n,i.d=function(t,e,s){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:s})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var s=Object.create(null);if(i.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)i.d(s,n,function(e){return t[e]}.bind(null,n));return s},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/";var r=window["webpackJsonp"]=window["webpackJsonp"]||[],c=r.push.bind(r);r.push=e,r=r.slice();for(var l=0;l<r.length;l++)e(r[l]);var u=c;o.push([0,"chunk-vendors"]),s()})({0:function(t,e,s){t.exports=s("56d7")},"327f":function(t,e,s){},"56d7":function(t,e,s){"use strict";s.r(e);var n=s("2b0e"),a=s("f309");n["a"].use(a["a"]);var o=new a["a"]({}),i=s("7496"),r=s("8336"),c=s("b0af"),l=s("a523"),u=s("ce7e"),d=s("132d"),f=s("adda"),h=s("1f4f"),p=s("2db4"),v=s("8654"),m=function(){var t=this,e=t._self._c;return e(i["a"],{staticClass:"fade-in"},[e(l["a"],{attrs:{fluid:""}},[e("div",{staticClass:"mx-4"},[e("div",{class:`text-center font-${t.font.header} mt-8 mb-16`},[t._v("QA Assignment")]),e("div",{class:`text-left font-${t.font.note} my-4`},[t._v("This assignment consists of "),e("span",{staticClass:"blue--text text--lighten-2 font-weight-bold"},[t._v("3")]),t._v(" questions in total. You may use any tools or forms to answer them.")]),e("div",{class:`text-left font-${t.font.note} my-4`},[t._v("Please copy the questions to your workspace for us to review your answers, and submit the assignment "),e("strong",[t._v("within the designated time frame")]),t._v(". You are free to choose either "),e("strong",[t._v("Chinese")]),t._v(" or "),e("strong",[t._v("English")]),t._v(" to answer. Please submit your assignment response mainly in "),e("strong",[t._v("PDF format")]),t._v(". You can use intermediary tools such as Google Docs or Microsoft Word to convert your text response to PDF. If you encounter difficulties obtaining these tools, you may also submit a plain text file (.txt) to avoid formatting issues caused by different environments.")]),e("div",{class:`text-left font-${t.font.note} my-4`},[t._v("If you have any questions or experience any problems while completing the assignment, please feel free to contact us for assistance. This will help avoid misunderstandings that could result in an invalid response. Thank you.")]),e(u["a"],{staticClass:"my-16"}),e("div",{class:`text-left font-${t.font.title} my-4`},[e("span",{staticClass:"blue--text text--lighten-2 font-weight-bold"},[t._v("Question 1. ")]),t._v("Please describe your past experience with "),e("strong",[t._v("testing")]),t._v(".")]),e("div",{class:`text-left font-${t.font.note} mx-4 my-4`},[t._v("Note: This can include experience with courses, projects, or other assignments, and can be in the form of manual or automated testing, without limitation to any specific project or format.")]),e("div",{staticClass:"text-left font-14 mx-4 my-16 grey--text"},[e("div",{staticClass:"my-2"},[t._v("Here is a template for answering questions:")]),e("div",{staticClass:"ml-4"},[t._v("I once served as a functional tester in a project during my student years. The project aimed to design a course schedule system that allows registration and login using student ID. Once the student completes the registration, the system would link to the school's course data and display the student's course schedule information on the website. In the testing phase, my role was to check whether the course schedule displayed correctly, whether the buttons and functions on the webpage worked as expected, and whether the school's course data was correctly connected. In this project, I also helped develop automated tests using the TestCafe web testing framework, which helped reduce the cost of manual testing.")]),e("div",{staticClass:"my-2 ml-4"},[t._v("(and so on.)")])]),e(u["a"],{staticClass:"my-16"}),e("div",{class:`text-left font-${t.font.title} my-4`},[e("span",{staticClass:"blue--text text--lighten-2 font-weight-bold"},[t._v("Question 2. ")]),t._v("If you encounter a situation where a page fails to load while using KKBOX, how would you attempt to "),e("strong",[t._v("troubleshoot")]),t._v(" the issue and "),e("strong",[t._v("identify")]),t._v(" the root cause ?")]),e("div",{class:`text-left font-${t.font.note} mx-4 my-4`},[t._v("Note: Please provide a detailed description of the steps you would take to troubleshoot and identify the root cause, and explain the reasons for your approach as much as possible.")]),e(f["a"],{staticClass:"mx-auto my-16 rounded-lg",staticStyle:{border:"1px dashed #ddd"},attrs:{src:s("cf1c"),width:t.isMobile()?200:300}}),e("div",{staticClass:"text-left font-14 mx-4 my-16 grey--text"},[e("div",{staticClass:"my-2"},[t._v("Here is a template for answering questions:")]),e("div",{staticClass:"ml-4"},[t._v("Step 1: I would check if the device is connected to the internet because it seems like a network issue.")]),e("div",{staticClass:"ml-4"},[t._v("Step 2: If there is no internet, I would try connecting to Wi-Fi to see if the issue is with my phone's 4G signal.")]),e("div",{staticClass:"my-2 ml-4"},[t._v("(and so on.)")])]),e(u["a"],{staticClass:"my-16"}),e("div",{class:`text-left font-${t.font.title} my-4`},[e("span",{staticClass:"blue--text text--lighten-2 font-weight-bold"},[t._v("Question 3. ")]),t._v("Please use "),e("strong",[t._v("specification by example")]),t._v(" to design test cases based on the specification of this sign-up form.")]),e("div",{class:`text-left font-${t.font.note} mx-4 my-4`},[t._v("Note: You can use the interactive fields below to help you design test cases, and use the "),e("strong",{staticClass:"blue--text text--lighten-2"},[t._v("Verify")]),t._v(" button to check if your ideas are correct. For this question, you must list your test cases one by one through a form, and try to design effective tests without exhaustively listing all possible cases. Please cover as many scenarios as possible, including positive scenarios, negative scenarios, and error handling, etc.")]),e("div",{class:`text-left font-${t.font.note} mx-4 my-4`},[t._v("The specifications for this sign-up form: the account section must be a "),e("strong",[t._v("valid email")]),t._v(". For the password section, case sensitivity and special characters can be ignored and "),e("strong",[t._v("only the length requirement")]),t._v(" applies, which must be between "),e("strong",[t._v("8")]),t._v(" to "),e("strong",[t._v("16")]),t._v(" characters.")]),e(c["a"],{staticClass:"mx-auto my-16 pa-8 elevation-10",attrs:{"max-width":"800"}},[e("div",{staticClass:"text-center font-24"},[t._v("Sign Up")]),e(v["a"],{staticClass:"mx-auto my-4",attrs:{color:"blue lighten-2",label:"Account",hint:"A valid email","prepend-icon":"mdi-account",outlined:"",dark:""},model:{value:t.account,callback:function(e){t.account=e},expression:"account"}}),e(v["a"],{staticClass:"mx-auto my-4",attrs:{color:"blue lighten-2",label:"Password",hint:"Between 8 and 16 characters in length, case sensitivity and special characters can be ignored.","prepend-icon":"mdi-key",outlined:"",dark:""},model:{value:t.password,callback:function(e){t.password=e},expression:"password"}}),e("div",{staticClass:"text-center"},[e(r["a"],{staticClass:"text-capitalize font-weight-bold",attrs:{color:"blue lighten-2",height:"40",outlined:"",rounded:"",dark:""},on:{click:function(e){return t.verify()}}},[e(d["a"],{attrs:{left:""}},[t._v("mdi-check")]),t._v("Verify")],1)],1),t.formHint?e("div",[e(u["a"],{staticClass:"my-8"}),t._l(t.formHint.split("\n"),(function(s){return e("div",{key:s.id},[e("span",[t._v(t._s(s))]),e("br")])}))],2):t._e()],1),e("div",{staticClass:"text-left font-14 mx-4 my-16 grey--text"},[e("div",{staticClass:"my-2"},[t._v("Here is a template for answering questions:")]),e(h["a"],{staticClass:"ml-4 my-4",attrs:{dense:""},scopedSlots:t._u([{key:"default",fn:function(){return[e("thead",[e("tr",[e("th",{staticClass:"grey--text"},[t._v("Account")]),e("th",{staticClass:"grey--text"},[t._v("Password")]),e("th",{staticClass:"grey--text"},[t._v("Scenario")]),e("th",{staticClass:"grey--text"},[t._v("Description")])])]),e("tbody",[e("tr",[e("td",[e("span",{staticClass:"font-14 grey--text"},[t._v("test_001@gmail.com")])]),e("td",[e("span",{staticClass:"font-14 grey--text"},[t._v("12345678")])]),e("td",[e("span",{staticClass:"font-14 grey--text"},[t._v("Positive")])]),e("td",[e("span",{staticClass:"font-14 grey--text"},[t._v("Verify the functionality of the positive scenario.")])])]),e("tr",[e("td",[e("span",{staticClass:"font-14 grey--text"},[t._v("test_001@gmail.com")])]),e("td",[e("span",{staticClass:"font-14 grey--text"},[t._v("123")])]),e("td",[e("span",{staticClass:"font-14 grey--text"},[t._v("Negative")])]),e("td",[e("span",{staticClass:"font-14 grey--text"},[t._v("Verify password length is less than the required 8 characters.")])])])])]},proxy:!0}])}),e("div",{staticClass:"my-2 ml-4"},[t._v("(and so on.)")])],1)],1)]),e(u["a"],{staticClass:"mt-16"}),e("div",{staticClass:"text-center mt-10 my-8 font-10"},[t._v("This assignment primarily provides recruitment information for the App Development Center of KKCompany Music Streaming.")]),e(p["a"],{attrs:{top:"",timeout:t.snackbarTimeout},scopedSlots:t._u([{key:"action",fn:function({attrs:s}){return[e(r["a"],t._b({attrs:{text:"",color:"blue lighten-2"},on:{click:function(e){t.snackbar=!1}}},"v-btn",s,!1),[t._v("Close")])]}}]),model:{value:t.snackbar,callback:function(e){t.snackbar=e},expression:"snackbar"}},t._l(t.snackbarText.split("\n"),(function(s){return e("div",{key:s.id},[e("span",[t._v(t._s(s))]),e("br")])})),0)],1)},y=[],g={name:"App",data(){return{font:{header:this.isMobile()?"36":"48",title:this.isMobile()?"18":"24",note:this.isMobile()?"12":"16"},account:"",password:"",formHint:null,snackbar:!1,snackbarText:"",snackbarTimeout:6e3}},created(){this.$vuetify.theme.dark=!0},methods:{verify:function(){const t=/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,e=!!this.account.match(t),s=this.password.length>=8&&this.password.length<=16;this.formHint=e&&s?`This is a POSITIVE scenario, as it results in successful sign-up.\n\n【Account】${this.account}（${e?"✔":"✘"}）\n【Password】${this.password}（${s?"✔":"✘"}）`:`This is a NEGATIVE scenario, as it results in unsuccessful sign-up.\n\n【Account】${this.account}（${e?"✔":"✘"}）\n【Password】${this.password}（${s?"✔":"✘"}）`},snack:function(t){this.snackbarText=t,this.snackbar=!0},isMobile(){switch(this.$vuetify.breakpoint.name){case"xs":return!0;case"sm":return!0;case"md":return!0;case"lg":return!1;case"xl":return!1}}}},b=g,_=(s("8b00"),s("2877")),x=Object(_["a"])(b,m,y,!1,null,null,null),w=x.exports;n["a"].config.productionTip=!1,n["a"].config.devtools=!1,new n["a"]({vuetify:o,render:t=>t(w)}).$mount("#app")},"8b00":function(t,e,s){"use strict";s("327f")},cf1c:function(t,e,s){t.exports=s.p+"img/loading.665f88e9.gif"}});
//# sourceMappingURL=app.8690074e.js.map