(this["webpackJsonpsoapbox-giphy"]=this["webpackJsonpsoapbox-giphy"]||[]).push([[0],{12:function(e,t,a){e.exports=a(21)},17:function(e,t,a){},21:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(8),s=a.n(i),l=(a(17),a(1)),o=a(2),c=a(4),u=a(3),m=(a(5),a(9)),p=a.n(m),h=function(e){Object(c.a)(a,e);var t=Object(u.a)(a);function a(){return Object(l.a)(this,a),t.apply(this,arguments)}return Object(o.a)(a,[{key:"render",value:function(){return r.a.createElement("section",null,r.a.createElement("div",{className:"homepageContainer"},r.a.createElement("div",{className:"mainImageContainer"},r.a.createElement("img",{class:"mainImage",src:p.a,alt:"Logo"})),r.a.createElement("div",{className:"mainDescription"},r.a.createElement("h1",null,"Stay up to date to with trending Gif's."),r.a.createElement("span",null,r.a.createElement("p",null,"Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero, repellendus? Hic, laboriosam ut. Odio eveniet quod")),r.a.createElement("span",null,r.a.createElement("p",null,"sapiente, est deserunt, adipisci quaerat cupiditate vel veniam voluptates saepe quam cumque? Molestiae, libero.")))))}}]),a}(n.Component),d=a(6),g=a.n(d),f=a(10),v=function(e){var t=e.gif.images.downsized_medium;return r.a.createElement("div",null,r.a.createElement("img",{src:t.url,name:t.title,alt:t.slug,height:"250",width:"250"}))},y=function(e){var t=e.gifs.map((function(e,t){return r.a.createElement("div",{key:t},r.a.createElement(v,{gif:e,key:e.id}))}));return r.a.createElement("div",{className:"flexContent"},t)},E=function(e){Object(c.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(l.a)(this,a),(n=t.call(this,e)).state={userSearch:""},n}return Object(o.a)(a,[{key:"handleSearchBarChange",value:function(e){this.setState({userSearch:e}),this.props.onChange(e)}},{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"flexContent"},r.a.createElement("h2",null,"Enter a keyword to return your results"),r.a.createElement("div",{className:"flexContent searchBar"},r.a.createElement("input",{className:"inputClass",type:"text",placeholder:"Enter your search...",value:this.state.userSearch,onChange:function(t){return e.handleSearchBarChange(t.target.value)}})))}}]),a}(r.a.Component),C=a(11),b=a.n(C),j=function(e){Object(c.a)(a,e);var t=Object(u.a)(a);function a(){var e;return Object(l.a)(this,a),(e=t.call(this)).apiCallToGiphy=function(){var t=Object(f.a)(g.a.mark((function t(a){return g.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("http://api.giphy.com/v1/gifs/search?q=".concat(a,"&api_key=").concat("P4hCy0QXgCWhBkBv1WS8E4upKd540JNg","&limit=18")).then((function(e){return e.json()})).then((function(t){t.error?alert("There was an error"):e.setState({gifs:t,loading:!1})}));case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),e.state={gifs:{},loading:!0},e}return Object(o.a)(a,[{key:"componentDidMount",value:function(){this.apiCallToGiphy("computers")}},{key:"render",value:function(){var e=this,t=b.a.debounce((function(t){e.apiCallToGiphy(t)}),200);return this.state.gifs.data?r.a.createElement("div",null,r.a.createElement(E,{onChange:function(e){return t(e)}}),r.a.createElement(y,{gifs:this.state.gifs.data})):null}}]),a}(n.Component),k=function(e){Object(c.a)(a,e);var t=Object(u.a)(a);function a(){var e;return Object(l.a)(this,a),(e=t.call(this)).displayHomepageComponent=function(){e.setState({displayHomepage:!0,displayResults:!1,loading:!1})},e.displayResultsComponent=function(){e.setState({displayHomepage:!1,displayResults:!0,loading:!1})},e.state={displayHomepage:!0,displayResults:!1,loading:!1},e}return Object(o.a)(a,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("header",null,r.a.createElement("div",{className:"wrapper"},r.a.createElement("div",{className:"flexContent buttonContainer"},r.a.createElement("button",{className:"inputClass",onClick:this.displayHomepageComponent},"\u2190 giphy \u2192"),r.a.createElement("button",{className:"inputClass",onClick:this.displayResultsComponent},"Launch App \u2192")))),r.a.createElement("main",null,this.state.displayHomepage?r.a.createElement(h,{homepageProps:this.displayHomepage}):null,this.state.displayResults?r.a.createElement(j,{resultsProps:this.state.displayResults}):null))}}]),a}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(k,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},5:function(e,t,a){},9:function(e,t,a){e.exports=a.p+"static/media/mainImage.fb94054c.png"}},[[12,1,2]]]);
//# sourceMappingURL=main.ed17a455.chunk.js.map