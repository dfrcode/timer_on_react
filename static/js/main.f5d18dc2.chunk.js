(this.webpackJsonptimer=this.webpackJsonptimer||[]).push([[0],{12:function(t,e,s){},13:function(t,e,s){},15:function(t,e,s){"use strict";s.r(e);var n=s(1),a=s.n(n),i=s(3),r=s.n(i),c=(s(12),s(4)),o=s(5),m=s(7),u=s(6),l=(s(13),s(0)),h=function(t){Object(m.a)(s,t);var e=Object(u.a)(s);function s(t){var n;return Object(c.a)(this,s),(n=e.call(this,t)).start=function(){n.setState({isStarting:!0}),n.timerId=setInterval((function(){n.setState({seconds:n.state.seconds+1}),60===n.state.seconds?(n.setState({seconds:0}),n.setState({minutes:n.state.minutes+1})):60===n.state.minutes&&(n.setState({minutes:0}),n.setState({hours:n.state.hours+1}))}),1e3)},n.stop=function(){n.setState({isStarting:!1}),clearInterval(n.timerId)},n.reset=function(){!1===n.state.isStarting&&n.setState({hours:0,minutes:0,seconds:0})},n.formatTimer=function(t){return t<10?"0"+t:t},n.state={hours:0,minutes:0,seconds:0,isStarting:!1},n}return Object(o.a)(s,[{key:"componentDidMount",value:function(){var t=localStorage.getItem("hours"),e=localStorage.getItem("minutes"),s=localStorage.getItem("seconds");t&&e&&s&&this.setState({hours:+t,minutes:+e,seconds:+s})}},{key:"componentDidUpdate",value:function(){localStorage.setItem("hours",this.state.hours),localStorage.setItem("minutes",this.state.minutes),localStorage.setItem("seconds",this.state.seconds)}},{key:"componentWillUnmount",value:function(){clearInterval(this.timerId)}},{key:"render",value:function(){return Object(l.jsx)("div",{className:"App",children:Object(l.jsx)("div",{className:"wrapper",children:Object(l.jsxs)("div",{className:"box_timer",children:[Object(l.jsx)("h1",{className:"title",children:"Timer"}),Object(l.jsxs)("p",{className:"timer",children:[this.formatTimer(this.state.hours)," : ",this.formatTimer(this.state.minutes)," : ",this.formatTimer(this.state.seconds)]}),Object(l.jsxs)("div",{className:"box_timer_btn",children:[this.state.isStarting?Object(l.jsx)("button",{className:"btn_start",onClick:this.stop,children:"Stop"}):Object(l.jsx)("button",{className:"btn_start",onClick:this.start,children:"Start"}),Object(l.jsx)("button",{className:"btn_reset",onClick:this.reset,children:"Reset"})]})]})})})}}]),s}(n.Component);r.a.render(Object(l.jsx)(a.a.StrictMode,{children:Object(l.jsx)(h,{})}),document.getElementById("root"))}},[[15,1,2]]]);
//# sourceMappingURL=main.f5d18dc2.chunk.js.map