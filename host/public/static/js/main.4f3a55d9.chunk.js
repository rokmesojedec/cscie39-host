(this["webpackJsonpassignment-1"]=this["webpackJsonpassignment-1"]||[]).push([[0],{35:function(e,t,n){},36:function(e,t,n){},38:function(e,t,n){},39:function(e,t,n){},40:function(e,t,n){},41:function(e,t,n){},42:function(e,t,n){},43:function(e,t,n){},44:function(e,t,n){},49:function(e,t,n){},50:function(e,t,n){},51:function(e,t,n){},58:function(e,t,n){"use strict";n.r(t);var s=n(1),r=n.n(s),i=n(22),c=n.n(i),o=(n(35),n(16)),a=n(6),l=n(29),d=n(2),u=n(3),h=n(5),j=n(4),m=n(23),b=n(24),p=(n(36),n(0)),O=function(e){Object(h.a)(n,e);var t=Object(j.a)(n);function n(){return Object(d.a)(this,n),t.apply(this,arguments)}return Object(u.a)(n,[{key:"render",value:function(){return Object(p.jsxs)("div",{className:" table-wrapper shadow-6 rounded m-b-4 ",children:[Object(p.jsx)("h4",{className:"text-center",children:this.props.title}),Object(p.jsxs)("div",{className:"",children:[Object(p.jsx)("div",{className:"component-container m-r-2",children:this.props.component}),Object(p.jsxs)("table",{className:"sass-table",children:[Object(p.jsx)("thead",{children:Object(p.jsxs)("tr",{children:[Object(p.jsx)("th",{children:"Prop"}),Object(p.jsx)("th",{children:"Description"}),Object(p.jsx)("th",{children:"Type"}),Object(p.jsx)("th",{children:"Default value"})]})}),Object(p.jsx)("tbody",{children:this.props.propDocs.map((function(e,t){return Object(p.jsxs)("tr",{children:[Object(p.jsx)("td",{children:e.prop}),Object(p.jsx)("td",{children:e.description}),Object(p.jsx)("td",{children:e.type}),Object(p.jsx)("td",{className:"code-font",children:e.defaultValue})]},t)}))})]})]})]})}}]),n}(r.a.Component),x=O,v=(n(38),function(e){Object(h.a)(n,e);var t=Object(j.a)(n);function n(){return Object(d.a)(this,n),t.apply(this,arguments)}return Object(u.a)(n,[{key:"render",value:function(){var e=this.props,t=e.disabled,n=e.onClick,s=e.children,r=e.tooltip,i=e.className;return Object(p.jsx)("button",{"data-tooltip-bottom":r,className:["btn",i].join(" "),disabled:t,onClick:n,children:s||"Button"})}}]),n}(s.Component)),f=v;v.defaultProps={disabled:!1,className:"primary bold raised",tooltip:null,onClick:function(){console.log("button clicked!")}};var g=n(30),y=1e3,N=6e4,k=36e5,_=24*k,w=365*_,T=w/12,M={MILLISECOND:1,SECOND:y,MINUTE:N,HOUR:k,DAY:_,YEAR:w,MONTH:T},C=function(){function e(){var t=this,n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},s=n.years,r=void 0===s?0:s,i=n.months,c=void 0===i?0:i,o=n.days,a=void 0===o?0:o,l=n.hours,u=void 0===l?0:l,h=n.minutes,j=void 0===h?0:h,m=n.seconds,b=void 0===m?0:m,p=n.milliseconds,O=void 0===p?0:p,x=n.rounds,v=void 0===x?1:x,f=n.tickSize,y=void 0===f?1:f,N=n.countdownMode,k=void 0===N||N,_=n.intervalFunctions,w=void 0===_?[]:_;Object(d.a)(this,e),this._years=r,this._months=c,this._days=a,this._hours=u,this._minutes=j,this._seconds=b,this._milliseconds=O,this.rounds=this._currentRound=v,this._roundsCompleted=0,this.tickSize=y,this.countdownInterval=null,this.intervalFunctions=Object(g.a)(w),this.countdownMode=k,["years","months","days","hours","minutes","seconds","milliseconds"].forEach((function(e){Object.defineProperty(t,e,{get:function(){return this["_".concat(e)]},set:function(t){if(isNaN(t)||!isNaN(t)&&t<0)throw new Error("".concat(e," paramter is not a number greater or equal to 0"));this["_".concat(e)]=t}})})),this.initializeTime()}return Object(u.a)(e,[{key:"initializeTime",value:function(){var e=0+this._milliseconds+this._seconds*y+this._minutes*N+this._hours*k+this._days*_+this._months*T+this._years*w;this.countdownMode?this._currentTime=e:this._currentTime=0,this._currentRound=this.rounds,this._roundsCompleted=0,this._totalTime=e*this.rounds,this._roundTime=e}},{key:"tick",value:function(){this.countdownMode?(this._currentTime-=this.tickSize,this._currentTime<=0&&(this._currentRound>0&&this._currentRound--,this._currentRound>0?this._currentTime=this._roundTime-this._currentTime:this._currentTime=0)):(this._currentTime+=this.tickSize,this._currentTime>=this._roundTime&&(this._currentRound>0&&this._currentRound--,this._currentRound>0?(this._roundsCompleted++,this._currentTime=this._currentTime-this._roundTime):this._currentTime=this._roundTime))}},{key:"start",value:function(){var e=this;null===this.countdownInterval&&(this.initializeTime(),this.countdownInterval=setInterval((function(){e.tick(),e.intervalFunctions.forEach((function(t){t(e)})),e.done&&e.clear()}),this.tickSize))}},{key:"clear",value:function(){clearInterval(this.countdownInterval),this.countdownInterval=null}},{key:"pushIntervalFunction",value:function(e){this.intervalFunctions.push(e)}},{key:"roundDone",get:function(){return Math.floor(this._currentTime/this._roundTime*1e4)}},{key:"precentDone",get:function(){return Math.floor(((this.countdownMode?this._currentRound-1:this._roundsCompleted)*this._roundTime+this._currentTime)/this._totalTime*1e4)}},{key:"currentYears",get:function(){return Math.floor(this._currentTime/w)}},{key:"currentMonths",get:function(){return Math.floor(this._currentTime%w/T)}},{key:"currentDays",get:function(){return Math.floor(this._currentTime%T/_)}},{key:"currentHours",get:function(){return Math.floor(this._currentTime%_/k)}},{key:"currentMinutes",get:function(){return Math.floor(this._currentTime%k/N)}},{key:"currentSeconds",get:function(){return Math.floor(this._currentTime%N/y)}},{key:"currentMilliseconds",get:function(){return Math.floor(this._currentTime%y/1)}},{key:"done",get:function(){return this.countdownMode?0===this._currentRound&&0===this._currentTime:0===this._currentRound&&this._currentTime===this._roundTime}}],[{key:"TIME_ENUM",get:function(){return M}}]),e}(),D=(n(39),n(40),function(e){Object(h.a)(n,e);var t=Object(j.a)(n);function n(){return Object(d.a)(this,n),t.apply(this,arguments)}return Object(u.a)(n,[{key:"render",value:function(){var e=this.props,t=e.type,n=e.value,s=e.disabled,r=e.className,i=e.min,c=e.max,o=e.onChange;return Object(p.jsx)("input",{className:["timer-input timer-font",r].join(" "),type:t,value:n,min:i,max:c,disabled:s,onChange:o})}}]),n}(s.Component));D.defaultProps={type:"number",disabled:!1,min:0,onChange:function(){console.log("onChange firing")}};var z=D,I=(n(41),function(e){Object(h.a)(n,e);var t=Object(j.a)(n);function n(){return Object(d.a)(this,n),t.apply(this,arguments)}return Object(u.a)(n,[{key:"render",value:function(){var e=this.props,t=e.prependZero,n=e.value,s=e.label,r=e.className,i=e.showColon,c=e.readOnly,o=["time-component",r,i?"colon":"no-colon",c?"readonly-mode":"input-mode"].filter((function(e){return"string"===typeof e&&e.length>0})).join(" ");return Object(p.jsxs)("div",{className:o,children:[c&&Object(p.jsxs)("div",{children:[t&&n<10&&Object(p.jsx)("span",{className:"timer-font zero",children:"0"}),Object(p.jsx)("span",{className:"timer-font"+(0===n?" zero":""),children:n})]}),!c&&Object(p.jsx)("div",{children:Object(p.jsx)(z,{value:n})}),s&&Object(p.jsx)("div",{className:"label",children:s})]})}}]),n}(s.Component));I.defaultProps={value:0,prependZero:!1,label:null,className:null,showColon:!1,readOnly:!0};var S=I,E=function(e){Object(h.a)(n,e);var t=Object(j.a)(n);function n(e){var s;return Object(d.a)(this,n),(s=t.call(this,e)).state={hours:0,minutes:0,seconds:0,milliseconds:0,duration:e.duration},s}return Object(u.a)(n,[{key:"durationTick",value:function(e){this.setState({hours:e.currentHours,minutes:e.currentMinutes,seconds:e.currentSeconds,milliseconds:e.currentMilliseconds})}},{key:"componentDidMount",value:function(){var e=this.state.duration;e&&e.pushIntervalFunction(this.durationTick.bind(this))}},{key:"componentWillUnmount",value:function(){this.state.duration.clear()}},{key:"render",value:function(){var e=this,t=this.props,n=t.className,s=t.readOnly;return Object(p.jsx)("div",{className:["time-components",n].join(" "),children:[{label:"h",prependZero:!0,name:"hours"},{label:"m",prependZero:!0,name:"minutes"},{label:"s",prependZero:!0,name:"seconds"},{label:"ms",prependZero:!1,name:"milliseconds"}].map((function(t,n){return Object(p.jsx)(S,{value:e.state[t.name],label:t.label,prependZero:t.prependZero,readOnly:s,showColon:0!==n},t.label)}))})}}]),n}(s.Component);E.defaultProps={duration:new C(0),className:null,readOnly:!1};var R=E,L=(n(42),function(e){Object(h.a)(n,e);var t=Object(j.a)(n);function n(){return Object(d.a)(this,n),t.apply(this,arguments)}return Object(u.a)(n,[{key:"render",value:function(){var e=this.props.className;return Object(p.jsx)("div",{className:["relative rounded p-4",e].join(" "),children:this.props.children})}}]),n}(s.Component)),P=L,B=(n(43),function(e){Object(h.a)(n,e);var t=Object(j.a)(n);function n(){return Object(d.a)(this,n),t.apply(this,arguments)}return Object(u.a)(n,[{key:"render",value:function(){var e=this.props,t=e.progress,n=e.position,s=e.className,r=e.background;return Object(p.jsx)("div",{className:["ProgressBar",s,n].join(" "),children:Object(p.jsx)("div",{className:["progress","progress-"+t,r].join(" ")})})}}]),n}(s.Component));B.defaultProps={progress:0,position:null,className:null,background:"gradient-primary-light-danger"};var H=B,U=(n(44),function(e){Object(h.a)(n,e);var t=Object(j.a)(n);function n(){return Object(d.a)(this,n),t.apply(this,arguments)}return Object(u.a)(n,[{key:"render",value:function(){var e=this.props,t=e.progress,n=e.className,s=e.children,r=e.size,i=e.thickness;return Object(p.jsx)("div",{className:["size-".concat(r," shadow-6"),"thickness-".concat(i),"ProgressCircle",n].join(" "),children:Object(p.jsx)("div",{className:["overlay","progress-"+t].join(" "),children:Object(p.jsx)("div",{className:["InnerCircle"].join(" "),children:s})})})}}]),n}(s.Component));U.defaultProps={progress:0,className:"embedded",thickness:"sm",size:"lg"};var Z,F=U,W=b.a.div(Z||(Z=Object(m.a)(["\n  display: flex;\n  justify-content: center;\n  width: 100%;\n"]))),A=function(e){Object(h.a)(n,e);var t=Object(j.a)(n);function n(){return Object(d.a)(this,n),t.apply(this,arguments)}return Object(u.a)(n,[{key:"componentDidMount",value:function(){document.body.classList.add("white-bg")}},{key:"componentWillUnmount",value:function(){document.body.classList.remove("white-bg")}},{key:"render",value:function(){var e=function(e){var t=Object(l.a)(e,4);return{prop:t[0],description:t[1],type:t[2],defaultValue:t[3]}};return Object(p.jsx)(W,{children:Object(p.jsxs)("div",{children:[Object(p.jsx)("h1",{className:"text-center",children:"Documentation"}),Object(p.jsx)(x,{title:"<Button></Button>",component:Object(p.jsx)(f,{}),propDocs:[e(["disabled","disables / enables button","bool","false"]),e(["className","sets HTML class name","string","primary bold raised"]),e(["tooltip","adds on hover tooltip","string","null"]),e(["onClick","on click method","func","()=>{ console.log('button clicked!'); }"])]}),Object(p.jsx)(x,{title:"<DisplayTime />",component:Object(p.jsx)(R,{className:"dark"}),propDocs:[e(["duration","duration object","Duration","new Duration(0)"]),e(["className","sets HTML class name","string","null"]),e(["readOnly","enable user editing of values when set to true","bool","true"])]}),Object(p.jsx)(x,{title:"<Input />",component:Object(p.jsx)(z,{value:5}),propDocs:[e(["type","sets HTML input type","string","number"]),e(["value","sets HTML value attribute","string | number","N/A"]),e(["disabled","disables / enables input","bool","false"]),e(["min","sets HTML min attribute","number","0"]),e(["max","sets HTML max attribute","number","N/A"])]}),Object(p.jsx)(x,{title:"<Panel></Panel>",component:Object(p.jsx)(P,{className:"shadow-6 round",children:"Hello Panel!"}),propDocs:[e(["className","sets HTML class name","string","null"])]}),Object(p.jsx)(x,{title:"<ProgressCircle></ProgressCircle>",component:Object(p.jsx)(F,{size:"sm",progress:4534,className:"embedded text-light text-center",children:"Hello Circle!"}),propDocs:[e(["progress","sets progress amount","number between 0 and 10000 where 10000 is 100%","0"]),e(["className","sets HTML class name","string","null"]),e(["thickness","sets thickness of loader line",'string one of "xs", "sm", "md", "lg", "xl", "xxl',"sm"]),e(["thickness","sets size of circle",'string one of "xs", "sm", "md", "lg", "xl", "xxl',"lg"])]}),Object(p.jsx)(x,{title:"<ProgressBar />",component:Object(p.jsx)(H,{className:"width-100px shadow-6",progress:54}),propDocs:[e(["className","sets HTML class name","string","null"]),e(["position","sets absolute position to one side of parent container","string one of 'bottom', 'top', 'left', 'right', null","null"]),e(["progress","sets progress amount","number","0"]),e(["background","sets CSS class for background of the filler bar","string","gradient-primary-light-danger"])]}),Object(p.jsx)(x,{title:"<TimeComponent />",component:Object(p.jsx)(S,{className:"shadow-6 text-center dark",label:"label",prependZero:!0,value:1}),propDocs:[e(["value","sets value shown in time component","number","0"]),e(["prependZero","prepends zero to value if value lower than 10 when in readonly mode","bool","false"]),e(["showColon","adds ':' to the left of component","bool","false"]),e(["label","adds label under the value","string","null"]),e(["readOnly","when set to false, value can be changed by user","bool","true"])]})]})})}}]),n}(r.a.Component),Y=A,J=function(e){Object(h.a)(n,e);var t=Object(j.a)(n);function n(e){var s;return Object(d.a)(this,n),(s=t.call(this,e)).state={progress:9464,stopwatch:new C({rounds:1,seconds:10,tickSize:52*C.TIME_ENUM.MILLISECOND,countdownMode:!1,intervalFunctions:[function(e){s.state.progress!==e.precentDone&&s.setState({progress:e.precentDone})}]})},s}return Object(u.a)(n,[{key:"componentDidMount",value:function(){}},{key:"componentWillUnmount",value:function(){}},{key:"render",value:function(){var e=this.props.title,t=this.state,n=t.stopwatch,s=t.progress;return Object(p.jsx)(P,{children:Object(p.jsx)(F,{progress:s,children:Object(p.jsxs)("div",{children:[Object(p.jsx)("div",{className:"text-center m-0",children:Object(p.jsx)("h5",{className:"text-center weight-100 gradient-code-secondary-clip ",children:e})}),Object(p.jsx)(R,{className:"m-t-3",duration:n}),Object(p.jsxs)("div",{className:"ButtonsPanel",children:[Object(p.jsx)(f,{className:"text-primary bold flat RoundButton",children:Object(p.jsx)("span",{className:"material-icons size-48",children:"play_arrow"})}),Object(p.jsx)(f,{className:"text-danger bold flat RoundButton",children:Object(p.jsx)("span",{className:"material-icons size-48",children:" clear"})})]})]})})})}}]),n}(r.a.Component),V=function(e){Object(h.a)(n,e);var t=Object(j.a)(n);function n(e){var s;return Object(d.a)(this,n),(s=t.call(this,e)).state={progress:5153,duration:new C({rounds:3,minutes:0,seconds:10,tickSize:52*C.TIME_ENUM.MILLISECOND,intervalFunctions:[function(e){s.state.progress!==e.precentDone&&s.setState({progress:e.precentDone})}]})},s}return Object(u.a)(n,[{key:"componentDidMount",value:function(){}},{key:"componentWillUnmount",value:function(){}},{key:"render",value:function(){var e=this.props.title,t=this.state,n=t.progress,s=t.duration;return Object(p.jsx)(P,{children:Object(p.jsx)(F,{progress:n,children:Object(p.jsxs)("div",{children:[Object(p.jsx)("div",{className:"text-center m-0",children:Object(p.jsx)("h5",{className:"text-center weight-100 gradient-code-secondary-clip ",children:e})}),Object(p.jsx)(R,{className:"m-t-3",duration:s}),Object(p.jsxs)("div",{className:"ButtonsPanel",children:[Object(p.jsx)(f,{className:"text-primary bold flat RoundButton",children:Object(p.jsx)("span",{className:"material-icons size-48",children:"play_arrow"})}),Object(p.jsx)(f,{className:"text-danger bold flat RoundButton",children:Object(p.jsx)("span",{className:"material-icons size-48",children:" clear"})})]})]})})})}}]),n}(r.a.Component),X=function(e){Object(h.a)(n,e);var t=Object(j.a)(n);function n(e){var s;return Object(d.a)(this,n),(s=t.call(this,e)).state={progress:8754,duration:new C({rounds:3,minutes:0,seconds:10,tickSize:52*C.TIME_ENUM.MILLISECOND,intervalFunctions:[function(e){s.state.progress!==e.precentDone&&s.setState({progress:e.precentDone})}]})},s}return Object(u.a)(n,[{key:"componentDidMount",value:function(){}},{key:"componentWillUnmount",value:function(){}},{key:"render",value:function(){var e=this.props.title,t=this.state,n=t.progress,s=t.duration;return Object(p.jsx)(P,{children:Object(p.jsx)(F,{progress:n,children:Object(p.jsxs)("div",{children:[Object(p.jsx)("div",{className:"text-center m-x-0 m-t-0 m-b-1",children:Object(p.jsx)("h5",{className:"text-center weight-100 gradient-code-secondary-clip m-b-2",children:e})}),Object(p.jsx)(F,{progress:4433,className:"embedded",size:"sm",thickness:"xs",children:Object(p.jsx)(S,{value:5,label:"round",readOnly:!1})}),Object(p.jsx)(R,{className:"m-t-1",duration:s}),Object(p.jsxs)("div",{className:"ButtonsPanel",children:[Object(p.jsx)(f,{className:"text-primary bold flat RoundButton",children:Object(p.jsx)("span",{className:"material-icons size-48",children:"play_arrow"})}),Object(p.jsx)(f,{className:"text-danger bold flat RoundButton",children:Object(p.jsx)("span",{className:"material-icons size-48",children:" clear"})})]})]})})})}}]),n}(r.a.Component),q=(n(49),function(e){Object(h.a)(n,e);var t=Object(j.a)(n);function n(e){var s;return Object(d.a)(this,n),(s=t.call(this,e)).state={progress:1343,tabata:new C({rounds:1,seconds:10,tickSize:52*C.TIME_ENUM.MILLISECOND,countdownMode:!0,intervalFunctions:[function(e){s.state.progress!==e.precentDone&&s.setState({progress:e.precentDone})}]})},s}return Object(u.a)(n,[{key:"componentDidMount",value:function(){}},{key:"componentWillUnmount",value:function(){}},{key:"render",value:function(){var e=this.props.title,t=this.state.progress;return Object(p.jsx)(P,{children:Object(p.jsx)(F,{progress:t,children:Object(p.jsxs)("div",{className:"tabata",children:[Object(p.jsx)("div",{className:"text-center m-0",children:Object(p.jsx)("h5",{className:"text-center weight-100 gradient-code-secondary-clip ",children:e})}),Object(p.jsxs)("div",{className:"tabata-progress-panel m-t-3",children:[Object(p.jsx)(F,{progress:8700,size:"xs",thickness:"xs",className:"embedded",children:Object(p.jsx)(S,{label:"round",prependZero:!0,value:3,readOnly:!1})}),Object(p.jsx)(F,{progress:5700,size:"xs",thickness:"xs",className:"embedded",children:Object(p.jsx)(S,{label:"work",prependZero:!0,value:26,readOnly:!1})}),Object(p.jsx)(F,{progress:1e4,size:"xs",thickness:"xs",className:"embedded",children:Object(p.jsx)(S,{label:"rest",prependZero:!0,readOnly:!1})})]}),Object(p.jsxs)("div",{className:"ButtonsPanel",children:[Object(p.jsx)(f,{className:"text-primary bold flat RoundButton",children:Object(p.jsx)("span",{className:"material-icons size-48",children:"play_arrow"})}),Object(p.jsx)(f,{className:"text-danger bold flat RoundButton",children:Object(p.jsx)("span",{className:"material-icons size-48",children:" clear"})})]})]})})})}}]),n}(r.a.Component));var G=function(){var e=[{title:"Stopwatch",C:Object(p.jsx)(J,{title:"Stopwatch"})},{title:"Countdown",C:Object(p.jsx)(V,{title:"Countdown"})},{title:"XY",C:Object(p.jsx)(X,{title:"XY"})},{title:"Tabata",C:Object(p.jsx)(q,{title:"Tabata"})}];return Object(p.jsx)("div",{className:"grid typescale-md-major-third grid-col-span-12 children-slide-down",children:e.map((function(e,t){return Object(p.jsx)("div",{className:"col-lg-span-6 ",children:Object(p.jsx)("div",{className:"m-t-2 m-x-0 p-0",children:e.C})},t)}))})};n(50),n(51);var K=function(){return Object(p.jsx)("div",{className:"\r p-0 \r typescale-minor-second \r typescale-sm-major-second \r typescale-xl-minor-third \r children-p-x-sm-10 \r children-p-x-4\r children-p-y-8",children:Object(p.jsxs)(o.a,{children:[Object(p.jsx)("header",{className:"p-y-0 slide-down-delay-5 fixed full-width z-3 top gradient-code-secondary shadow-8",children:Object(p.jsxs)("nav",{className:"p-lg-0 nav-flex nav-main typescale-minor-second max-width-center-xxl m-y-1",children:[Object(p.jsx)("h1",{className:"nowrap text-light",href:"index.html",children:"Rok's CSCI E39 Assignment #1"}),Object(p.jsxs)("ul",{className:"hover-light children-p-2 text-light",children:[Object(p.jsx)("li",{children:Object(p.jsx)(o.b,{to:"/",children:"Timers"})}),Object(p.jsx)("li",{children:Object(p.jsx)(o.b,{to:"/docs",children:"Documentation"})})]})]})}),Object(p.jsx)("section",{className:"max-width-center-xxl p-b-0 m-b-0",children:Object(p.jsxs)(a.c,{children:[Object(p.jsx)(a.a,{path:"/docs",children:Object(p.jsx)(Y,{})}),Object(p.jsx)(a.a,{path:"/",children:Object(p.jsx)(G,{})})]})})]})})};c.a.render(Object(p.jsx)(r.a.StrictMode,{children:Object(p.jsx)(K,{})}),document.getElementById("root"))}},[[58,1,2]]]);
//# sourceMappingURL=main.4f3a55d9.chunk.js.map