(this.webpackJsonpreact_keyboard=this.webpackJsonpreact_keyboard||[]).push([[0],{13:function(e,t,n){},14:function(e,t,n){"use strict";n.r(t);var a=n(3),r=n.n(a),s=n(4),c=n(5),o=n(7),i=n(6),u=n(1),l=n(0),d=function(e){Object(o.a)(n,e);var t=Object(i.a)(n);function n(){var e;Object(s.a)(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={key:null},e.keyPressHandler=function(t){var n=t.key;e.setState({key:n})},e}return Object(c.a)(n,[{key:"componentDidMount",value:function(){document.addEventListener("keyup",this.keyPressHandler)}},{key:"componentWillUnmount",value:function(){document.removeEventListener("keyup",this.keyPressHandler)}},{key:"render",value:function(){var e=this.state.key;return Object(l.jsx)("div",{className:"App",children:Object(l.jsx)("p",{className:"App__message",children:e?"".concat("The last pressed key is [".concat(e,"]")):"Nothing was pressed yet"})})}}]),n}(u.Component);n(13);r.a.render(Object(l.jsx)(d,{}),document.getElementById("root"))}},[[14,1,2]]]);
//# sourceMappingURL=main.fae39b57.chunk.js.map