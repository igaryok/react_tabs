(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{14:function(t,e,n){},15:function(t,e,n){},16:function(t,e,n){"use strict";n.r(e);var a=n(0),c=n.n(a),r=n(8),i=n.n(r),l=n(1),o=n(2),u=n(5),s=n(4),b=n(6),d=(n(14),n(3)),h=(n(15),function(t){function e(t){var n;return Object(l.a)(this,e),(n=Object(u.a)(this,Object(s.a)(e).call(this,t))).handleClick=n.handleClick.bind(Object(d.a)(n)),n}return Object(b.a)(e,t),Object(o.a)(e,[{key:"handleClick",value:function(t){var e=Number(t.target.id);this.props.handleActiveIndex(e)}},{key:"render",value:function(){var t=this.props,e=t.tab,n=t.currentIndex;return c.a.createElement("button",{id:n,type:"button",onClick:this.handleClick},e.title)}}]),e}(c.a.Component)),v=function(t){function e(t){var n;return Object(l.a)(this,e),(n=Object(u.a)(this,Object(s.a)(e).call(this,t))).state={activeIndex:0},n.handleActiveIndex=n.handleActiveIndex.bind(Object(d.a)(n)),n}return Object(b.a)(e,t),Object(o.a)(e,[{key:"handleActiveIndex",value:function(t){this.setState({activeIndex:t})}},{key:"render",value:function(){var t=this,e=this.props.tabs,n=e[this.state.activeIndex].content;return c.a.createElement(c.a.Fragment,null,e.map(function(e,n){return c.a.createElement(h,{tab:e,currentIndex:n,key:e.title,handleActiveIndex:t.handleActiveIndex})}),c.a.createElement("p",{className:"content"},n))}}]),e}(c.a.Component),p=function(t){function e(){var t,n;Object(l.a)(this,e);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(n=Object(u.a)(this,(t=Object(s.a)(e)).call.apply(t,[this].concat(c)))).state={tabs:[{title:"Tab 1",content:"Some text 1"},{title:"Tab 2",content:"Some text 2"},{title:"Tab 3",content:"Some text 3"}]},n}return Object(b.a)(e,t),Object(o.a)(e,[{key:"render",value:function(){var t=this.state.tabs;return c.a.createElement("div",{className:"App"},c.a.createElement("h1",null,"".concat(t.length," tabs")),c.a.createElement(v,{tabs:t}))}}]),e}(c.a.Component);i.a.render(c.a.createElement(p,null),document.getElementById("root"))},9:function(t,e,n){t.exports=n(16)}},[[9,1,2]]]);
//# sourceMappingURL=main.2340d21e.chunk.js.map