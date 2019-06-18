(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{15:function(e,t,a){},16:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(7),i=a(8),s=a(1),o=a(2),l=a(4),m=a(3),u=a(5),d=function(e){function t(){return Object(s.a)(this,t),Object(l.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement("header",null,r.a.createElement("div",{className:"hero_wrapper"},r.a.createElement("div",{className:"logo"}),r.a.createElement("div",{className:"theme-button",onClick:this.props.switchTheme},r.a.createElement("img",{src:"https://www.emoji.co.uk/files/emoji-one/activity-emoji-one/1706-artist-palette.png",style:{height:"50px",width:"50px",float:"right",display:"inline",cursor:"pointer",marginRight:"25px"},alt:"theme-swticher"})),r.a.createElement("div",{className:"hero_image_container"},r.a.createElement("div",{className:"hero__details"},r.a.createElement("h1",null,"New Arrivals"),r.a.createElement("p",null,r.a.createElement("div",null,"Shop curated brands and city essentials, all in one place")),r.a.createElement("div",{className:"hero_button_container"},r.a.createElement("button",null,"View Collection"),r.a.createElement("button",null,"My Wishlist"))))))}}]),t}(n.Component),h=function(e){return"$"+Number(e.toFixed(1)).toLocaleString()+" "},p=function(e){function t(){return Object(s.a)(this,t),Object(l.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this,t=this.props.products.map(function(t){return r.a.createElement("div",{className:"Item",key:t.id},r.a.createElement("a",{href:"#".concat(t.id),onClick:function(a){return e.props.handleAddToCart(a,t)}},r.a.createElement("div",{className:"Image"},r.a.createElement("img",{className:"Image",src:"products/".concat(t.id,".jpg"),alt:t.title}),r.a.createElement("button",{type:"button",onClick:function(a){return e.props.handleAddToCart(a,t)},class:"mybuttonoverlap btn btn-info add-to-cart"}," ","Add to Cart"," "))),r.a.createElement("div",{className:"Item__title"},t.title),r.a.createElement("div",{class:"Item__price"},h(t.price),".00 USD"," "))});return r.a.createElement("div",{className:"Items"},t)}}]),t}(n.Component),f=function(e){function t(){return Object(s.a)(this,t),Object(l.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this,t=this.props.cartItems;return r.a.createElement("div",{className:"showfilter"},r.a.createElement("h3",{class:"filterheader"},"Your Shopping Cart"),0===t.length?r.a.createElement("h3",{class:"filterheader"},' "Basket is empty" '):r.a.createElement("div",{class:"filterheader"},"You have ",t.length," items in the basket. ",r.a.createElement("hr",null)),t.length>0&&r.a.createElement("div",{className:"cart-items"},r.a.createElement("ul",{class:"browser__list",style:{marginLeft:10}},t.map(function(t){return r.a.createElement("li",{key:t.id},r.a.createElement("b",null,t.title),r.a.createElement("button",{style:{float:"right"},className:"remove-btn",onClick:function(a){return e.props.handleRemoveFromCart(a,t)}},"X"),r.a.createElement("br",null),t.count," X ",h(t.price))})),r.a.createElement("b",{style:{marginLeft:25}},"Sum:"," ",h(t.reduce(function(e,t){return e+t.price*t.count},0))),r.a.createElement("button",{style:{marginLeft:"3.3em",marginTop:"1em",marginBottom:"1em"},onClick:function(){return alert("Todo: Implement checkout page.")}},"checkout")))}}]),t}(n.Component),b=(a(15),function(e){function t(){var e;return Object(s.a)(this,t),(e=Object(l.a)(this,Object(m.a)(t).call(this))).switchTheme=function(){"light"===e.state.theme?e.setState({theme:"dark"}):e.setState({theme:"light"})},e.handleRemoveFromCart=function(t,a){e.setState(function(e){var t=e.cartItems.filter(function(e){return e.id!==a.id});return localStorage.setItem("cartItems",JSON.stringify(t)),{cartItems:t}})},e.handleAddToCart=function(t,a){e.setState(function(e){var t=e.cartItems,n=!1;return t.forEach(function(e){e.id===a.id&&(e.count+=1,n=!0)}),n||t.push(Object(i.a)({},a,{count:1})),localStorage.setItem("cartItems",JSON.stringify(t)),{cartItems:t}})},e.listProducts=function(){e.setState(function(e){return""!==e.sort?e.products.sort(function(t,a){return"lowestprice"===e.sort?t.price>a.price?1:-1:t.price<a.price?1:-1}):e.products.sort(function(e,t){return e.id>t.id?1:-1}),""!==e.size?{filteredProducts:e.products.filter(function(t){return t.availableSizes.indexOf(e.size.toUpperCase())>=0})}:{filteredProducts:e.products}})},e.state={theme:"light",size:"",sort:"",cartItems:[],products:[],filteredProducts:[]},e}return Object(u.a)(t,e),Object(o.a)(t,[{key:"componentWillMount",value:function(){var e=this;localStorage.getItem("cartItems")&&this.setState({cartItems:JSON.parse(localStorage.getItem("cartItems"))}),fetch("https://gist.githubusercontent.com/diaaanek/a32f9928163c9c8cf0dfcefbccbb3e0a/raw/11cec91a45384756fcaa3b373e94ed6180ecd1e1/products.json").then(function(e){return e.json()}).then(function(e){return e.products}).then(function(t){e.setState({products:t}),e.listProducts()})}},{key:"render",value:function(){var e="App theme-".concat(this.state.theme);return r.a.createElement("div",{className:e},r.a.createElement(d,{switchTheme:this.switchTheme}),r.a.createElement("div",{class:"product_wrapper"},r.a.createElement("section",{class:"clearfix"},r.a.createElement(f,{cartItems:this.state.cartItems,handleRemoveFromCart:this.handleRemoveFromCart}),r.a.createElement("div",{class:"product_container"},r.a.createElement("h2",null,"SHOP")," ",r.a.createElement(p,{products:this.state.filteredProducts,handleAddToCart:this.handleAddToCart})))))}}]),t}(n.Component));Object(c.render)(r.a.createElement(b,null),document.getElementById("root"))},9:function(e,t,a){e.exports=a(16)}},[[9,1,2]]]);
//# sourceMappingURL=main.261bb64a.chunk.js.map