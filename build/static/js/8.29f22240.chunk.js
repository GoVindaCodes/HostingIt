(this["webpackJsonpdashtar-admin"]=this["webpackJsonpdashtar-admin"]||[]).push([[8],{1218:function(e,a,s){"use strict";var t=s(89),r=s.n(t),c=s(1),l=s(58),i=s(45),n=s(118),o=s(99),m=s(9);a.a=()=>{const[e,a]=Object(c.useState)(!1),{dispatch:s}=Object(c.useContext)(n.a),t=Object(i.g)(),d=Object(i.h)(),{register:b,handleSubmit:j,formState:{errors:h}}=Object(l.a)();return{onSubmit:e=>{let{name:c,email:l,verifyEmail:i,password:n,role:b}=e;a(!0);"/login"===d.pathname&&(o.a.loginAdmin({email:l,password:n}).then((e=>{e&&(console.log("Login response:",e),r.a.set("adminInfo",JSON.stringify(e),{expires:.5}))})).catch((e=>{console.error("Login error:",e),Object(m.b)(e?e.response.data.message:e.message),a(!1)})),a(!1),Object(m.c)("Login Success!"),s({type:"USER_LOGIN",payload:{email:l}}),localStorage.setItem("email",l),t.replace("/")),"/signup"===d.pathname&&o.a.registerAdmin({name:c,email:l,password:n,role:b}).then((e=>{e&&(a(!1),Object(m.c)("Register Success!"),s({type:"USER_LOGIN",payload:e}),r.a.set("adminInfo",JSON.stringify(e),{expires:.5}),t.replace("/"))})).catch((e=>{Object(m.b)(e?e.response.data.message:e.message),a(!1)})),"/forgot-password"===d.pathname&&o.a.forgetPassword({verifyEmail:i}).then((e=>{a(!1),Object(m.c)(e.message)})).catch((e=>{a(!1),Object(m.b)(e?e.response.data.message:e.message)}))},register:b,handleSubmit:j,errors:h,loading:e}}},1226:function(e,a,s){"use strict";s.r(a);s(1);var t=s(33),r=s(4),c=s(1221),l=s(139),i=s(16),n=s(39),o=s(14),m=s(225),d=s(1218),b=s.p+"static/media/create-account-office.080280cb.jpeg",j=s.p+"static/media/create-account-office-dark.080280cb.jpeg",h=s(2);a.default=()=>{const{t:e}=Object(l.a)(),{onSubmit:a,register:s,handleSubmit:x,errors:p,loading:g}=Object(d.a)();return Object(h.jsx)("div",{className:"flex items-center min-h-screen p-6 bg-gray-50 dark:bg-gray-900",children:Object(h.jsx)("div",{className:"flex-1 h-full max-w-4xl mx-auto overflow-hidden bg-white rounded-lg shadow-md dark:bg-gray-800",children:Object(h.jsxs)("div",{className:"flex flex-col overflow-y-auto md:flex-row",children:[Object(h.jsxs)("div",{className:"h-32 md:h-auto md:w-1/2",children:[Object(h.jsx)("img",{"aria-hidden":"true",className:"object-cover w-full h-full dark:hidden",src:b,alt:"Office"}),Object(h.jsx)("img",{"aria-hidden":"true",className:"hidden object-cover w-full h-full dark:block",src:j,alt:"Office"})]}),Object(h.jsx)("main",{className:"flex items-center justify-center p-6 sm:p-12 md:w-1/2",children:Object(h.jsxs)("div",{className:"w-full",children:[Object(h.jsx)("h1",{className:"mb-6 text-2xl font-semibold text-gray-700 dark:text-gray-200",children:e("CreateAccount")}),Object(h.jsxs)("form",{onSubmit:x(a),children:[Object(h.jsx)(o.a,{label:"Name"}),Object(h.jsx)(n.a,{register:s,label:"Name",name:"name",type:"text",placeholder:"Admin"}),Object(h.jsx)(i.a,{errorName:p.name}),Object(h.jsx)(o.a,{label:"Email"}),Object(h.jsx)(n.a,{register:s,label:"Email",name:"email",type:"email",placeholder:"john@doe.com"}),Object(h.jsx)(i.a,{errorName:p.email}),Object(h.jsx)(o.a,{label:"Password"}),Object(h.jsx)(n.a,{register:s,label:"Password",name:"password",type:"password",placeholder:"***************"}),Object(h.jsx)(i.a,{errorName:p.password}),Object(h.jsx)(o.a,{label:"Staff Role"}),Object(h.jsxs)("div",{className:"col-span-8 sm:col-span-4",children:[Object(h.jsx)(m.a,{register:s,label:"Role",name:"role"}),Object(h.jsx)(i.a,{errorName:p.role})]}),Object(h.jsxs)(r.Label,{className:"mt-6",check:!0,children:[Object(h.jsx)(r.Input,{type:"checkbox"}),Object(h.jsxs)("span",{className:"ml-2",children:[e("Iagree")," ",Object(h.jsx)("span",{className:"underline",children:e("privacyPolicy")})]})]}),Object(h.jsx)(r.Button,{disabled:g,type:"submit",className:"mt-4 h-12 w-full",to:"/dashboard",block:!0,children:e("CreateAccountTitle")})]}),Object(h.jsx)("hr",{className:"my-10"}),Object(h.jsxs)("button",{disabled:!0,className:"text-sm inline-flex items-center cursor-pointer transition ease-in-out duration-300 font-semibold font-serif text-center justify-center rounded-md focus:outline-none text-gray-700 bg-gray-100 shadow-sm my-2 md:px-2 lg:px-3 py-4 md:py-3.5 lg:py-4 hover:text-white hover:bg-blue-600 h-11 md:h-12 w-full mr-2",children:[Object(h.jsx)(c.a,{className:"w-4 h-4 mr-2"})," ",Object(h.jsxs)("span",{className:"ml-2",children:[" ",e("LoginWithFacebook")," "]})]}),Object(h.jsxs)("button",{disabled:!0,className:"text-sm inline-flex items-center cursor-pointer transition ease-in-out duration-300 font-semibold font-serif text-center justify-center rounded-md focus:outline-none text-gray-700 bg-gray-100 shadow-sm my-2  md:px-2 lg:px-3 py-4 md:py-3.5 lg:py-4 hover:text-white hover:bg-red-500 h-11 md:h-12 w-full",children:[Object(h.jsx)(c.b,{className:"w-4 h-4 mr-2"})," ",Object(h.jsx)("span",{className:"ml-2",children:e("LoginWithGoogle")})]}),Object(h.jsx)("p",{className:"mt-4",children:Object(h.jsx)(t.b,{className:"text-sm font-medium text-green-500 dark:text-green-400 hover:underline",to:"/login",children:e("AlreadyAccount")})})]})})]})})})}}}]);
//# sourceMappingURL=8.29f22240.chunk.js.map