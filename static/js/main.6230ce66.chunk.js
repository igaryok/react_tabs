(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{14:function(e,t,n){},15:function(e,t,n){},16:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),r=n(8),i=n.n(r),l=n(1),s=n(2),o=n(5),u=n(4),d=n(6),b=(n(14),n(3)),h=(n(15),function(e){function t(e){var n;return Object(l.a)(this,t),(n=Object(o.a)(this,Object(u.a)(t).call(this,e))).handleClick=n.handleClick.bind(Object(b.a)(n)),n}return Object(d.a)(t,e),Object(s.a)(t,[{key:"handleClick",value:function(e){var t=Number(e.nativeEvent.target.id);this.props.handleIndex(t)}},{key:"render",value:function(){var e=this.props,t=e.tab,n=e.activeIndex,a=e.currentIndex,r=n===a?"nav-link active":"nav-link";return c.a.createElement("li",{className:"nav-item"},c.a.createElement("a",{id:a,onClick:this.handleClick,className:r,href:"# "},t.title))}}]),t}(c.a.Component)),v=function(e){function t(e){var n;return Object(l.a)(this,t),(n=Object(o.a)(this,Object(u.a)(t).call(this,e))).state={activeIndex:0},n.handleIndex=n.handleIndex.bind(Object(b.a)(n)),n}return Object(d.a)(t,e),Object(s.a)(t,[{key:"handleIndex",value:function(e){this.setState({activeIndex:e})}},{key:"render",value:function(){var e=this,t=this.props.tabs,n=this.state.activeIndex,a=t[n].content;return c.a.createElement(c.a.Fragment,null,c.a.createElement("ul",{className:"nav nav-tabs"},t.map(function(t,a){return c.a.createElement(h,{tab:t,activeIndex:n,currentIndex:a,key:t.title,handleIndex:e.handleIndex})})),c.a.createElement("p",{className:"content"},a))}}]),t}(c.a.Component),m=function(e){function t(){var e,n;Object(l.a)(this,t);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(n=Object(o.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(c)))).state={tabs:[{title:"Tab 1",content:"Some text 1"},{title:"Tab 2",content:"Some text 2"},{title:"Tab 3",content:"Some text 3"}]},n}return Object(d.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this.state.tabs;return c.a.createElement("div",{className:"App"},c.a.createElement("h1",null,"".concat(e.length," tabs")),c.a.createElement(v,{tabs:e}))}}]),t}(c.a.Component);i.a.render(c.a.createElement(m,null),document.getElementById("root"))},9:function(e,t,n){e.exports=n(16)}},[[9,1,2]]]);
//# sourceMappingURL=main.6230ce66.chunk.js.map