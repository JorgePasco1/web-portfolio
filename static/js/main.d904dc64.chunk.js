(this["webpackJsonpweb-portfolio"]=this["webpackJsonpweb-portfolio"]||[]).push([[0],{12:function(e,a,t){e.exports=t.p+"static/media/profile.0031d183.png"},13:function(e,a,t){e.exports=t(32)},18:function(e,a,t){},30:function(e,a,t){},32:function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),r=t(1),o=t.n(r),c=(t(18),t(2)),s=t(12),i=t.n(s);function m(){return l.a.createElement("div",{className:"bannerPic"},l.a.createElement("img",{src:i.a,alt:"profile"}),l.a.createElement("div",{className:"about-container"},l.a.createElement("h1",null,"About me")))}var u=t(7),p=t.n(u);t(30);function d(e){var a="Please, fill out name and email first.",t="Start typing your message",r="Forgot to say something? Send another email ;)",o=Object(n.useState)(""),s=Object(c.a)(o,2),i=s[0],m=s[1],u=Object(n.useState)(""),d=Object(c.a)(u,2),f=d[0],b=d[1],E=Object(n.useState)(""),h=Object(c.a)(E,2),g=h[0],v=h[1],O=Object(n.useRef)(null),N=Object(n.useRef)(null);return l.a.createElement(p.a,{isOpen:e.isOpen,onRequestClose:e.closeModal,className:"Modal",overlayClassName:"Overlay",contentLabel:"Contact Modal"},l.a.createElement("h2",{className:"form-title"},"Contact Me"),l.a.createElement("form",{ref:O},l.a.createElement("div",{className:"inline-inputs"},l.a.createElement("div",{className:"input-container"},l.a.createElement("label",{htmlFor:"your-name"},"Your name"),l.a.createElement("input",{className:"form-input",name:"your-name",value:i,onChange:function(e){return m(e.target.value)},required:!0})),l.a.createElement("div",{className:"input-container"},l.a.createElement("label",{htmlFor:"email"},"Your email"),l.a.createElement("input",{className:"form-input",name:"email",type:"email",value:f,onChange:function(e){return b(e.target.value)},required:!0}))),l.a.createElement("textarea",{ref:N,className:"form-ta",name:"form-ta",placeholder:i&&f?t:a,rows:"15",cols:"70",readOnly:!(i&&f),value:g,onChange:function(e){return v(e.target.value)},required:!0}),l.a.createElement("button",{onClick:function(a){if(a.preventDefault(),O.current.checkValidity()){var t={from_name:i,from_email:f,message:g};window.emailjs.send("gmail","template_oWWe49dU",t).then((function(a){e.handleEmail(!0),e.handleToast(!0),N.current.placeholder=r,v("")})).catch((function(a){e.handleToast(!0)})).finally((function(){e.handleToast(!1),e.handleEmail(!1)}))}else O.current.reportValidity()},className:"submit-button"},"Send")),l.a.createElement("button",{className:"unstyled-button close-button",onClick:e.closeModal},"X"))}p.a.setAppElement("#root");var f=t(3);t(31);function b(e){var a=e.called,t=e.success;return a&&(t?f.b.success("Your message was sent correctly! \ud83d\ude80",{position:f.b.POSITION.BOTTOM_CENTER}):f.b.error("Oops, something went wrong \u26a0. Please try again",{position:f.b.POSITION.BOTTOM_CENTER})),l.a.createElement("div",null,l.a.createElement("div",null,l.a.createElement(f.a,null)))}var E=function(){var e=Object(n.useState)(!1),a=Object(c.a)(e,2),t=a[0],r=a[1],o=Object(n.useState)(!1),s=Object(c.a)(o,2),i=s[0],u=s[1],p=Object(n.useState)(!1),f=Object(c.a)(p,2),E=f[0],h=f[1];return l.a.createElement("div",{className:"App"},l.a.createElement("main",null,l.a.createElement("section",{className:"about-section"},l.a.createElement(m,null),l.a.createElement("p",null,"Hey!",l.a.createElement("span",{role:"img","aria-label":"hi-emoji"},"\ud83d\udc4b")," ","My name is ",l.a.createElement("span",{className:"bold"},"Jorge Pasco"),", I'm a peruvian software developer, focused on web and machine learning. I currently work as a ",l.a.createElement("span",{className:"bold"},"Salesforce Developer")," in Oktana Corporation's peruvian offices, focused on the awesome Einstein Analytics platform"," ",l.a.createElement("span",{role:"img","aria-label":"chart-emoji"},"\ud83d\udcca"),". I'm self-taught and passionate about learning new technologies and solving problems.")),l.a.createElement("hr",null),l.a.createElement("section",{name:"additional-section"},l.a.createElement("p",null,"You can download or take a look at my"," ",l.a.createElement("a",{href:"https://drive.google.com/file/d/1ZOKB4oyhmFkkmh50giDI3fsH2UL-b_19/view?usp=sharing",className:"link",target:"_blank",rel:"noopener noreferrer"},"resume"),"\u270c\ud83c\udffc. Also, here are my"," ",l.a.createElement("a",{href:"https://www.github.com/jorgepasco1",className:"link",target:"_blank",rel:"noopener noreferrer"},"Github")," ","and"," ",l.a.createElement("a",{href:"https://www.linkedin.com/in/jorgepasco1/",className:"link",target:"_blank",rel:"noopener noreferrer"},"LinkedIn")," ","profiles"),l.a.createElement("p",{className:"contact-p"},"Reach out to me by filling out this"," ",l.a.createElement("button",{href:"#",className:"unstyled-button",onClick:function(){return r(!0)}},"form"),", or email me at jorgepascosoto@gmail.com \ud83d\udce9"))),l.a.createElement(d,{isOpen:t,closeModal:function(){return r(!1)},handleToast:function(e){return u(e)},handleEmail:function(e){return h(e)}}),l.a.createElement(b,{called:i,success:E}))};o.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(E,null)),document.getElementById("root"))}},[[13,1,2]]]);
//# sourceMappingURL=main.d904dc64.chunk.js.map