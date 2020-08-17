(this["webpackJsonpreact-to-weather"]=this["webpackJsonpreact-to-weather"]||[]).push([[0],{17:function(e,t,a){e.exports=a(34)},22:function(e,t,a){},23:function(e,t,a){},30:function(e,t,a){},32:function(e,t,a){},33:function(e,t,a){},34:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(14),i=a.n(c),s=(a(22),a(23),a(2)),o=a(3),l=function(){return r.a.createElement("header",null,r.a.createElement("nav",null,r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"https://github.com/gerrgg/react-to-weather"},r.a.createElement(s.a,{icon:o.a,style:{paddingRight:".5rem"}}),"Source Code")),r.a.createElement("li",null,r.a.createElement("a",{href:"/",className:"logo"},r.a.createElement(s.a,{icon:o.d}),r.a.createElement("br",null),"React to Weather")),r.a.createElement("li",null,r.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"https://gerrgg.github.io/resume/"},"Resume",r.a.createElement(s.a,{icon:o.b,style:{paddingLeft:".5rem"}}))))))},u=a(4),h=a.n(u),m=a(10),p=a(5),d=a(6),v=a(7),f=a(9),E=a(8),b=a(15),g=(a(30),function(e){Object(f.a)(a,e);var t=Object(E.a)(a);function a(e){var n;return Object(p.a)(this,a),(n=t.call(this)).state={},n.handleChange=n.handleChange.bind(Object(v.a)(n)),n}return Object(d.a)(a,[{key:"handleChange",value:function(e){var t=e.target,a=t.name,n=t.value;this.setState(Object(b.a)({},a,n))}},{key:"render",value:function(){return r.a.createElement("form",{onSubmit:this.props.handleSubmit},r.a.createElement("button",{type:"button"},r.a.createElement(s.a,{icon:o.c})),r.a.createElement("input",{id:"search-bar",type:"text",name:"query",placeholder:"Petoskey, Michigan",onChange:this.handleChange}),r.a.createElement("button",null,r.a.createElement(s.a,{icon:o.f})))}}]),a}(n.Component)),y=a(16),k=a.n(y),w=(a(32),function(e){return r.a.createElement("div",{className:"detail"},r.a.createElement("span",{className:"header"},e.header,":"),r.a.createElement("span",{className:"value"},e.value))}),j=function(e){var t=function(e){return k()(1e3*e).format("LT")};return r.a.createElement("div",{className:"wrapper"},r.a.createElement("div",{id:"weather-details"},r.a.createElement(w,{header:"Wind",value:"".concat(e.data.wind.speed," mph")}),r.a.createElement(w,{header:"Humidity",value:"".concat(e.data.main.humidity,"%")}),r.a.createElement(w,{header:r.a.createElement(s.a,{icon:o.h}),value:t(e.data.sys.sunrise)}),r.a.createElement(w,{header:r.a.createElement(s.a,{icon:o.e}),value:t(e.data.sys.sunset)}),r.a.createElement(w,{header:"Visibility",value:"".concat(e.data.visibility/1e3,"km")}),r.a.createElement(w,{header:"Pressure",value:"".concat(e.data.main.pressure," mb")})))},O=function(e){Object(f.a)(a,e);var t=Object(E.a)(a);function a(e){var n;return Object(p.a)(this,a),(n=t.call(this)).state={hasData:!1,src:""},n.handleClick=n.handleClick.bind(Object(v.a)(n)),n}return Object(d.a)(a,[{key:"componentDidMount",value:function(){var e=Object(m.a)(h.a.mark((function e(){return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.getGifSrc();case 2:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"componentDidUpdate",value:function(e){this.props.query!==e.query&&this.getGifSrc()}},{key:"handleClick",value:function(){var e=Object(m.a)(h.a.mark((function e(){return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.getGifSrc();case 2:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"getGifSrc",value:function(){var e=Object(m.a)(h.a.mark((function e(){var t,a,n;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=this.props.query,"XglG7Kno2HckkrUjCimsJOv8YE0STATQ",e.prev=2,e.next=5,fetch("https://api.giphy.com/v1/gifs/translate?api_key=".concat("XglG7Kno2HckkrUjCimsJOv8YE0STATQ","&s=").concat(t),{mode:"cors"});case 5:return a=e.sent,e.next=8,a.json();case 8:n=e.sent,this.setState({hasData:!0,src:n.data.images.original.url}),e.next=15;break;case 12:e.prev=12,e.t0=e.catch(2),console.log("error",e.t0);case 15:case"end":return e.stop()}}),e,this,[[2,12]])})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){return console.log(this.props),r.a.createElement("span",{className:"weather-gif"},this.state.hasData?r.a.createElement("img",{alt:"sunny",src:this.state.src,onClick:this.handleClick}):r.a.createElement(s.a,{icon:o.g}))}}]),a}(n.Component),S=function(e){Object(f.a)(a,e);var t=Object(E.a)(a);function a(e){var n;return Object(p.a)(this,a),(n=t.call(this)).convertTemp=function(e){var t=9*(e-273.15)/5+32;return Math.round(t)+"\xb0F"},n}return Object(d.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{id:"weather-summmary"},r.a.createElement(O,{query:this.props.data.weather[0].description}),r.a.createElement("div",{className:"summary-right"},r.a.createElement("h1",null,this.convertTemp(this.props.data.main.temp)," ",this.props.data.weather[0].description),r.a.createElement("div",{className:"summary-details"},r.a.createElement(w,{header:"Feels Like",value:this.convertTemp(this.props.data.main.feels_like)}),r.a.createElement(w,{header:"Low",value:this.convertTemp(this.props.data.main.temp_min)}),r.a.createElement(w,{header:"High",value:this.convertTemp(this.props.data.main.temp_max)}))))}}]),a}(n.Component),C=function(e){Object(f.a)(a,e);var t=Object(E.a)(a);function a(e){var n;return Object(p.a)(this,a),(n=t.call(this)).state={hasData:!1,perferredUnit:"Fahrenheit",query:""},n.handleSubmit=n.handleSubmit.bind(Object(v.a)(n)),n}return Object(d.a)(a,[{key:"componentDidMount",value:function(){var e=Object(m.a)(h.a.mark((function e(){return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.getTheWeather();case 2:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"handleSubmit",value:function(e){e.preventDefault();var t=e.target[1].value;t&&this.getTheWeather(t)}},{key:"getTheWeather",value:function(){var e=Object(m.a)(h.a.mark((function e(){var t,a,n,r=arguments;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=r.length>0&&void 0!==r[0]?r[0]:"Petoskey, MI, US",e.next=3,fetch("https://api.openweathermap.org/data/2.5/weather?q=".concat(t,"&appid=").concat(this.props.apiKey),{mode:"cors"});case 3:return a=e.sent,e.next=6,a.json();case 6:"404"!==(n=e.sent).cod&&this.setState({weather:n,hasData:!0});case 8:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){return console.log(this.state.weather),r.a.createElement("div",{id:"weather"},r.a.createElement("div",{id:"search-location"},r.a.createElement(g,{handleSubmit:this.handleSubmit})),this.state.hasData?r.a.createElement("div",null,r.a.createElement(j,{data:this.state.weather}),r.a.createElement(S,{data:this.state.weather})):null)}}]),a}(n.Component);a(33);var x=function(){return r.a.createElement("div",{className:"App"},r.a.createElement(l,null),r.a.createElement(C,{apiKey:"f49ab69788385465860411f295879340"}))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(x,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[17,1,2]]]);
//# sourceMappingURL=main.04e369d9.chunk.js.map