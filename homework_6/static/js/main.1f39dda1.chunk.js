(this.webpackJsonppuihw6=this.webpackJsonppuihw6||[]).push([[0],{23:function(e,t,s){},24:function(e,t,s){},30:function(e,t,s){"use strict";s.r(t);var a=s(0),i=s(1),n=s.n(i),c=s(15),r=s.n(c),o=(s(23),s(2)),l=s(3),d=s(6),u=s(5),h=s(4),j=(s(7),s.p+"static/media/bunlogo.cd9b2c50.png"),m=function(e){Object(u.a)(s,e);var t=Object(h.a)(s);function s(e){var a;return Object(o.a)(this,s),(a=t.call(this,e)).state={onStateChange:e.OnChange},a}return Object(l.a)(s,[{key:"render",value:function(){var e=this;return Object(a.jsxs)("div",{id:"BBMenu",className:"BBMenuWrapper",children:[Object(a.jsx)("div",{id:"BBLogo",className:"BBMenuLogo",onClick:function(){return e.state.onStateChange(0)},children:Object(a.jsx)("img",{className:"BBImg",src:j,alt:"Bun Bun Bakery Logo"})}),Object(a.jsxs)("div",{id:"BBNav",className:"BBMenuNav",children:[Object(a.jsx)("div",{className:"BBMenuNavLinkFirst BBMenuNavItem",onClick:function(){return e.state.onStateChange(1)},children:"BUNS"}),Object(a.jsx)("div",{className:"BBMenuNavItem",onClick:function(){return e.state.onStateChange(6)},children:"OFFERS"}),Object(a.jsx)("div",{className:"BBMenuNavItem",onClick:function(){return e.state.onStateChange(2)},children:"ABOUT US"}),Object(a.jsx)("div",{className:"BBMenuNavItem",onClick:function(){return e.state.onStateChange(3)},children:Object(a.jsx)("div",{children:Object(a.jsx)("svg",{className:"BBCart",viewBox:"0 0 46 46",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:Object(a.jsx)("path",{className:"CartFill",fillRule:"evenodd",clipRule:"evenodd",d:"M35.0678 22.9425C34.4162 24.1308 33.1512 24.9167 31.7137 24.9167H17.4345L15.3262 28.75H38.3262V32.5833H15.3262C12.4128 32.5833 10.5728 29.4592 11.972 26.8908L14.5595 22.2142L7.6595 7.66668H3.82617V3.83334H10.0937L11.8953 7.66668H40.262C41.7187 7.66668 42.6387 9.23834 41.9295 10.5033L35.0678 22.9425ZM37.0036 11.5H13.7161L18.2586 21.0833H31.7136L37.0036 11.5ZM15.3262 34.5C13.2178 34.5 11.512 36.225 11.512 38.3334C11.512 40.4417 13.2178 42.1667 15.3262 42.1667C17.4345 42.1667 19.1595 40.4417 19.1595 38.3334C19.1595 36.225 17.4345 34.5 15.3262 34.5ZM30.6787 38.3334C30.6787 36.225 32.3845 34.5 34.4928 34.5C36.6012 34.5 38.3262 36.225 38.3262 38.3334C38.3262 40.4417 36.6012 42.1667 34.4928 42.1667C32.3845 42.1667 30.6787 40.4417 30.6787 38.3334Z"})})})})]})]})}}]),s}(n.a.Component),b=function(e){Object(u.a)(s,e);var t=Object(h.a)(s);function s(e){return Object(o.a)(this,s),t.call(this,e)}return Object(l.a)(s,[{key:"render",value:function(){return Object(a.jsx)("div",{className:"BBHomeParallax",children:Object(a.jsx)("div",{className:"BBHomeIntroWrapper",children:Object(a.jsxs)("div",{className:"BBIntroInstructions",children:[Object(a.jsx)("h2",{className:"BBIntroTitle",children:"Welcome to the Bun Bun Bakery eStore!"}),Object(a.jsx)("p",{className:"BBIntroDesc",children:"To get started, go to the BUNS page and search through our buns. Choose the buns you desire, customize it with any glaze of your choice, and add the buns to your cart. Once you're done, you can go to your cart at checkout, purchase your buns, sit back and relax as we prepare your order within 20 minutes."}),Object(a.jsxs)("div",{className:"BBIntroLinkWrapper",children:[Object(a.jsx)("a",{href:"products.html",className:"BBIntroLink",children:"What buns are there?"}),Object(a.jsx)("a",{href:"about.html",className:"BBIntroLink",children:"What is Bun Bun Bakery?"})]})]})})})}}]),s}(n.a.Component),O=function(e){Object(u.a)(s,e);var t=Object(h.a)(s);function s(e){var a;return Object(o.a)(this,s),(a=t.call(this,e)).state={name:e.name,price:e.price,img:e.img,desc:e.desc,viewDetails:e.onOpenDetails},a}return Object(l.a)(s,[{key:"render",value:function(){var e=this;return Object(a.jsxs)("div",{id:"BBOriginal",className:"BBProductItem",onClick:function(){return e.state.viewDetails(e.state,4)},children:[Object(a.jsx)("div",{id:this.state.img,className:"BBProductImg"}),Object(a.jsxs)("div",{className:"BBProductText",children:[Object(a.jsx)("div",{className:"BBProductName",children:this.state.name}),Object(a.jsxs)("div",{className:"BBProductPrice",children:["$",this.state.price,"/Bun"]})]})]})}}]),s}(n.a.Component),p={original:{name:"Original Bun",price:1.75,img:"original",discount:.75,desc:""},glutenfree:{name:"Gluten-free Original Bun",price:1.75,img:"gluten-free",discount:.75,desc:""},caramelpecan:{name:"Caramel Pecan Bun",price:1.75,img:"caramel-pecan",desc:""},pumpkinspice:{name:"Pumpkin Spice Bun",price:1.75,img:"pumpkin-spice",desc:""},walnut:{name:"Walnut Bun",price:1.75,img:"walnut",desc:""},blackberry:{name:"Blackberry Bun",price:1.75,img:"blackberry",desc:""}},B=function(e){Object(u.a)(s,e);var t=Object(h.a)(s);function s(e){var a;return Object(o.a)(this,s),(a=t.call(this,e)).state={openDetails:e.openDetails},a}return Object(l.a)(s,[{key:"render",value:function(){return Object(a.jsxs)("div",{className:"BBProductBody",children:[Object(a.jsx)("h2",{className:"BBProductBunTitle",children:"OUR BUNS"}),Object(a.jsxs)("div",{id:"BBItems",className:"BBProductWrapper",children:[Object(a.jsx)(O,{name:p.original.name,price:p.original.price,img:p.original.img,desc:p.original.desc,onOpenDetails:this.state.openDetails}),Object(a.jsx)(O,{name:p.glutenfree.name,price:p.glutenfree.price,img:p.glutenfree.img,desc:p.glutenfree.desc,onOpenDetails:this.state.openDetails}),Object(a.jsx)(O,{name:p.caramelpecan.name,price:p.caramelpecan.price,img:p.caramelpecan.img,desc:p.caramelpecan.desc,onOpenDetails:this.state.openDetails}),Object(a.jsx)(O,{name:p.pumpkinspice.name,price:p.pumpkinspice.price,img:p.pumpkinspice.img,desc:p.pumpkinspice.desc,onOpenDetails:this.state.openDetails}),Object(a.jsx)(O,{name:p.walnut.name,price:p.walnut.price,img:p.walnut.img,desc:p.walnut.desc,onOpenDetails:this.state.openDetails}),Object(a.jsx)(O,{name:p.blackberry.name,price:p.blackberry.price,img:p.blackberry.img,desc:p.blackberry.desc,onOpenDetails:this.state.openDetails})]})]})}}]),s}(n.a.Component),v=function(e){Object(u.a)(s,e);var t=Object(h.a)(s);function s(e){return Object(o.a)(this,s),t.call(this,e)}return Object(l.a)(s,[{key:"render",value:function(){return Object(a.jsxs)("div",{id:"BBContent",className:"BBAboutWrapper",children:[Object(a.jsxs)("div",{id:"BBAbout1",className:"BBAbout",children:[Object(a.jsxs)("div",{className:"BBAboutText",children:[Object(a.jsx)("h2",{className:"BBAboutTitle",children:"BEST BUNS IN BUSINESS"}),Object(a.jsx)("p",{children:"Founded in 1974, Bun Bun Bakery has been a staple in the Santa Monica baking district. Our years of culinary expertise, compounded by our unmatched passion for baking, allows us to bring you the best bun-eating experience there is. Look no further, because buns can get no better than Bun Bun Bakery."})]}),Object(a.jsx)("div",{id:"about-1",className:"BBAboutImg"})]}),Object(a.jsxs)("div",{id:"BBAbout2",className:"BBAbout",children:[Object(a.jsx)("div",{id:"about-2",className:"BBAboutImg"}),Object(a.jsxs)("div",{id:"text-2",className:"BBAboutText",children:[Object(a.jsx)("h2",{children:"FUN BUNS UNDER THE SUN"}),Object(a.jsx)("p",{children:"Bathe under the California sun with our sweet, delectable buns! Bun Bun Bakery strives to bring joy and entertainment to our fellow Californians by offering regular events near the Santa Monica Pier. From games to prizes to show-and-tell contests, we strive to bring you fun with our buns!"})]})]})]})}}]),s}(n.a.Component),x=function(e){Object(u.a)(s,e);var t=Object(h.a)(s);function s(e){var a;return Object(o.a)(this,s),(a=t.call(this,e)).state={slideData:e.recs},a}return Object(l.a)(s,[{key:"render",value:function(){var e=this;return Object.keys(this.state.slideData).filter((function(t){return e.props.product!==e.state.slideData[t].name})).map((function(t,s){return Object(a.jsxs)("div",{className:"BBSlideElement",children:[Object(a.jsx)("div",{id:e.state.slideData[t].img,className:"BBSlideImg"}),Object(a.jsx)("h4",{className:"BBSlideText",children:e.state.slideData[t].name}),Object(a.jsxs)("p",{className:"BBSlideText",children:["$",e.state.slideData[t].price]})]},s)}))}}]),s}(i.Component),g=function(e){Object(u.a)(s,e);var t=Object(h.a)(s);function s(e){var a;return Object(o.a)(this,s),(a=t.call(this,e)).state={activeIndex:0,recs:e.recs,name:e.currentProduct},a.goToNextSlide=a.goToNextSlide.bind(Object(d.a)(a)),a.goToPrevSlide=a.goToPrevSlide.bind(Object(d.a)(a)),a}return Object(l.a)(s,[{key:"goToPrevSlide",value:function(){var e=this.state.activeIndex;e=0===e?Object.keys(this.state.recs).length-2:e-1,this.setState({activeIndex:e})}},{key:"goToNextSlide",value:function(){var e=this.state.activeIndex;e=e===Object.keys(this.state.recs).length-2?0:e+1,this.setState({activeIndex:e})}},{key:"render",value:function(){return Object(a.jsxs)("div",{className:"BBCarouselDiv",children:[Object(a.jsx)("button",{className:"BBAddButton",onClick:this.goToPrevSlide,children:"<"}),Object(a.jsx)("div",{className:"BBCarouselWrapper",children:Object(a.jsx)("div",{className:"BBSlideWrapper",style:{left:"".concat(-32*this.state.activeIndex,"vw")},children:Object(a.jsx)(x,{recs:this.state.recs,product:this.state.name})})}),Object(a.jsx)("button",{className:"BBAddButton",onClick:this.goToNextSlide,children:">"})]})}}]),s}(i.Component),N=function(e){Object(u.a)(s,e);var t=Object(h.a)(s);function s(e){var a;return Object(o.a)(this,s),(a=t.call(this,e)).state={amount:1,glaze:"No",product:e.product},a.SetGlaze=a.SetGlaze.bind(Object(d.a)(a)),a.SetAmount=a.SetAmount.bind(Object(d.a)(a)),a}return Object(l.a)(s,[{key:"SetGlaze",value:function(e){this.setState((function(t,s){return{glaze:e}}))}},{key:"SetAmount",value:function(e){this.setState((function(t,s){return{amount:e}}))}},{key:"render",value:function(){var e=this;return Object(a.jsxs)("div",{id:"BBItems",className:"BBItemWrapper",children:[Object(a.jsxs)("div",{className:"BBItemBackButton",children:[Object(a.jsx)("h3",{className:"BBBackButtonArrow",onClick:this.props.onBack,children:"\u2190"}),Object(a.jsx)("h2",{className:"BBProductBunTitle",children:this.state.product.name})]}),Object(a.jsx)("div",{className:"BBItemDetails",children:Object(a.jsxs)("div",{className:"BBItemSpecs",children:[Object(a.jsxs)("div",{className:"BBItemImgDesc",children:[Object(a.jsx)("div",{id:this.state.product.img,className:"BBItemImg"}),Object(a.jsx)("div",{className:"BBItemTxt",children:this.state.product.desc})]}),Object(a.jsxs)("div",{className:"BBItemOptions",children:[Object(a.jsxs)("div",{className:"BBOptionWrapper",children:[Object(a.jsx)("h3",{className:"BBOptionTitle",children:"Glaze:"}),Object(a.jsxs)("div",{className:"BBGlazeOption",children:[Object(a.jsx)("button",{className:"No"===this.state.glaze?"Checked":"",onClick:function(){return e.SetGlaze("No")},children:"None"}),Object(a.jsx)("button",{className:"Sugar-Milk"===this.state.glaze?"Checked":"",onClick:function(){return e.SetGlaze("Sugar-Milk")},children:"Sugar-Milk"}),Object(a.jsx)("button",{className:"Vanilla-Milk"===this.state.glaze?"Checked":"",onClick:function(){return e.SetGlaze("Vanilla-Milk")},children:"Vanilla-Milk"}),Object(a.jsx)("button",{className:"Double Chocolate"===this.state.glaze?"Checked":"",onClick:function(){return e.SetGlaze("Double Chocolate")},children:"Double Chocolate"})]})]}),Object(a.jsxs)("div",{className:"BBOptionWrapper",children:[Object(a.jsx)("h3",{className:"BBOptionTitle",children:"Amount:"}),Object(a.jsxs)("div",{className:"BBQuantityOption",children:[Object(a.jsx)("button",{className:1===this.state.amount?"Checked":"",onClick:function(){return e.SetAmount(1)},children:"1"}),Object(a.jsx)("button",{className:3===this.state.amount?"Checked":"",onClick:function(){return e.SetAmount(3)},children:"3"}),Object(a.jsx)("button",{className:6===this.state.amount?"Checked":"",onClick:function(){return e.SetAmount(6)},children:"6"}),Object(a.jsx)("button",{className:12===this.state.amount?"Checked":"",onClick:function(){return e.SetAmount(12)},children:"12"})]})]}),Object(a.jsxs)("div",{className:"BBItemPurchaseDetails",children:[Object(a.jsxs)("h4",{children:[this.state.glaze," Glaze ",this.state.product.name]}),Object(a.jsxs)("p",{children:["Total Cost: $",Number(this.state.amount*this.state.product.price).toFixed(2)," (",this.state.amount," x ",this.state.product.price,")"]})]}),Object(a.jsxs)("div",{className:"BBItemButtonDiv",children:[Object(a.jsx)("button",{className:"BBAddButton",onClick:function(){return e.props.addToCart(e.state)},children:"ADD TO CART"}),Object(a.jsx)("button",{className:"BBAddButton",onClick:function(){return e.props.addWish(e.state)},children:"ADD TO WISHLIST"})]})]})]})}),Object(a.jsx)(g,{currentProduct:this.state.product.name,recs:p})]})}}]),s}(n.a.Component),f=function(e){Object(u.a)(s,e);var t=Object(h.a)(s);function s(e){var a;return Object(o.a)(this,s),(a=t.call(this,e)).state={amount:e.order.amount,glaze:e.order.glaze,product:e.order.product,id:e.order.id},a.SetGlaze=a.SetGlaze.bind(Object(d.a)(a)),a.SetAmount=a.SetAmount.bind(Object(d.a)(a)),a}return Object(l.a)(s,[{key:"SetGlaze",value:function(e){this.setState((function(t,s){return{glaze:e}}))}},{key:"SetAmount",value:function(e){this.setState((function(t,s){return{amount:e}}))}},{key:"render",value:function(){var e=this;return Object(a.jsxs)("div",{id:"BBItems",className:"BBItemWrapper",children:[Object(a.jsxs)("div",{className:"BBItemBackButton",children:[Object(a.jsx)("h3",{className:"BBBackButtonArrow",onClick:this.props.onBack,children:"\u2190"}),Object(a.jsx)("h2",{className:"BBProductBunTitle",children:this.state.product.name})]}),Object(a.jsx)("div",{className:"BBItemDetails",children:Object(a.jsxs)("div",{className:"BBItemSpecs",children:[Object(a.jsxs)("div",{className:"BBItemImgDesc",children:[Object(a.jsx)("div",{id:this.state.product.img,className:"BBItemImg"}),Object(a.jsx)("div",{className:"BBItemTxt",children:this.state.product.desc})]}),Object(a.jsxs)("div",{className:"BBItemOptions",children:[Object(a.jsxs)("div",{className:"BBOptionWrapper",children:[Object(a.jsx)("h3",{className:"BBOptionTitle",children:"Glaze:"}),Object(a.jsxs)("div",{className:"BBGlazeOption",children:[Object(a.jsx)("button",{className:"No"===this.state.glaze?"Checked":"",onClick:function(){return e.SetGlaze("No")},children:"None"}),Object(a.jsx)("button",{className:"Sugar-Milk"===this.state.glaze?"Checked":"",onClick:function(){return e.SetGlaze("Sugar-Milk")},children:"Sugar-Milk"}),Object(a.jsx)("button",{className:"Vanilla-Milk"===this.state.glaze?"Checked":"",onClick:function(){return e.SetGlaze("Vanilla-Milk")},children:"Vanilla-Milk"}),Object(a.jsx)("button",{className:"Double Chocolate"===this.state.glaze?"Checked":"",onClick:function(){return e.SetGlaze("Double Chocolate")},children:"Double Chocolate"})]})]}),Object(a.jsxs)("div",{className:"BBOptionWrapper",children:[Object(a.jsx)("h3",{className:"BBOptionTitle",children:"Amount:"}),Object(a.jsxs)("div",{className:"BBQuantityOption",children:[Object(a.jsx)("button",{className:1===this.state.amount?"Checked":"",onClick:function(){return e.SetAmount(1)},children:"1"}),Object(a.jsx)("button",{className:3===this.state.amount?"Checked":"",onClick:function(){return e.SetAmount(3)},children:"3"}),Object(a.jsx)("button",{className:6===this.state.amount?"Checked":"",onClick:function(){return e.SetAmount(6)},children:"6"}),Object(a.jsx)("button",{className:12===this.state.amount?"Checked":"",onClick:function(){return e.SetAmount(12)},children:"12"})]})]}),Object(a.jsxs)("div",{className:"BBItemPurchaseDetails",children:[Object(a.jsxs)("h4",{children:[this.state.glaze," Glaze ",this.state.product.name]}),Object(a.jsxs)("p",{children:["Total Cost: $",Number(this.state.amount*this.state.product.price).toFixed(2)," (",this.state.amount," x ",this.state.product.price,")"]})]}),Object(a.jsxs)("div",{className:"BBItemButtonDiv",children:[Object(a.jsx)("button",{className:"BBAddButton",onClick:function(){return e.props.updateOrder(e.state.id,e.state)},children:"UPDATE ITEM"}),Object(a.jsx)("button",{className:"BBAddButton",onClick:function(){return e.props.removeOrder(e.state.id)},children:"DELETE ITEM"})]})]})]})})]})}}]),s}(n.a.Component);var C=function(e){return Object(a.jsxs)("div",{className:"BBCartElement",children:[Object(a.jsx)("div",{id:e.order.product.img,className:"BBCartImg"}),Object(a.jsxs)("div",{className:"BBCartDetails",children:[Object(a.jsx)("h2",{children:e.order.product.name}),Object(a.jsxs)("h4",{children:[e.order.glaze," Glaze"]}),Object(a.jsxs)("h3",{children:["$",Number(e.order.product.price*e.order.amount).toFixed(2)," (",Number(e.order.product.price).toFixed(2)," x ",e.order.amount,")"]}),Object(a.jsxs)("div",{className:"BBCartActions",children:[Object(a.jsx)("h3",{onClick:function(){return e.updateOrder(e.order,5)},children:"Edit"}),Object(a.jsx)("h3",{onClick:function(){return e.removeOrder(e.order.id)},children:"Delete"})]})]})]})};var S=function(e){return Object(a.jsxs)("div",{className:"BBCartElement",children:[Object(a.jsx)("div",{id:e.wish.product.img,className:"BBCartImg"}),Object(a.jsxs)("div",{className:"BBCartDetails",children:[Object(a.jsx)("h3",{children:e.wish.product.name}),Object(a.jsxs)("h4",{children:[e.wish.glaze," Glaze"]}),Object(a.jsxs)("h4",{children:["$",Number(e.wish.product.price).toFixed(2)," x ",e.wish.amount]}),Object(a.jsxs)("h3",{children:["$",Number(e.wish.product.price*e.wish.amount).toFixed(2)]}),Object(a.jsxs)("div",{className:"BBCartActions",children:[Object(a.jsx)("h3",{onClick:function(){return e.moveWish(e.wish)},children:"Add To Cart"}),Object(a.jsx)("h3",{onClick:function(){return e.removeWish(e.wish.id)},children:"Delete"})]})]})]})},k=function(e){Object(u.a)(s,e);var t=Object(h.a)(s);function s(e){return Object(o.a)(this,s),t.call(this,e)}return Object(l.a)(s,[{key:"render",value:function(){var e=this,t=this.props.orders.length,s=this.props.wishes.length,i=Object(a.jsx)("div",{}),n=Object(a.jsx)("div",{}),c=Object(a.jsx)("div",{});if(0===t)i=Object(a.jsx)("h4",{children:"You currently have no buns in your cart."});else{for(var r=0,o=0;o<this.props.orders.length;o++)r+=this.props.orders[o].amount*this.props.orders[o].product.price;c=Object(a.jsxs)("h3",{style:{textAlign:"start",fontWeight:500},children:["Total Cost: $",Number(r).toFixed(2)]})}return 0===s&&(n=Object(a.jsx)("h5",{children:"You currently have no items in your wishlist"})),Object(a.jsxs)("div",{className:"BBProductBody",children:[Object(a.jsxs)("div",{className:"BBCartHeader",children:[Object(a.jsx)("h2",{children:"YOUR BUNS"}),i]}),this.props.orders.map((function(t,s){return console.log("Order element:",t),Object(a.jsx)(C,{order:t,updateOrder:e.props.updateOrder,removeOrder:e.props.removeOrder},s)})),c,Object(a.jsxs)("div",{className:"BBWishHeader",children:[Object(a.jsx)("h3",{children:"YOUR WISHLIST"}),n]}),this.props.wishes.map((function(t,s){return console.log("Wish element:",t),Object(a.jsx)(S,{wish:t,moveWish:e.props.moveWish,removeWish:e.props.removeWish},s)}))]})}}]),s}(n.a.Component),I=function(e){Object(u.a)(s,e);var t=Object(h.a)(s);function s(e){var a;return Object(o.a)(this,s),(a=t.call(this,e)).state={name:e.name,price:e.price,discount:e.discount,img:e.img,desc:e.desc,viewDetails:e.onOpenDetails},a}return Object(l.a)(s,[{key:"render",value:function(){var e=this;return Object(a.jsxs)("div",{id:"BBOriginal",className:"BBProductItem",onClick:function(){return e.state.viewDetails(e.state,4)},children:[Object(a.jsx)("div",{id:this.state.img,className:"BBProductImg"}),Object(a.jsxs)("div",{className:"BBProductText",children:[Object(a.jsx)("div",{className:"BBProductName",children:this.state.name}),Object(a.jsxs)("div",{className:"BBProductPrice",children:[Object(a.jsxs)("span",{className:"BBDiscountStrikethrough",children:["$",this.state.price]}),"$",this.state.discount,"/Bun"]})]})]})}}]),s}(n.a.Component),y=function(e){Object(u.a)(s,e);var t=Object(h.a)(s);function s(e){var a;return Object(o.a)(this,s),(a=t.call(this,e)).state={openDetails:e.openDetails},a}return Object(l.a)(s,[{key:"render",value:function(){return Object(a.jsxs)("div",{className:"BBProductBody",children:[Object(a.jsx)("h2",{className:"BBProductBunTitle",children:"SPECIAL OFFERS"}),Object(a.jsxs)("div",{id:"BBItems",className:"BBProductWrapper",children:[Object(a.jsx)(I,{name:"Original Bun",price:1.75,img:"original",desc:"",discount:.75,onOpenDetails:this.state.openDetails}),Object(a.jsx)(I,{name:"Gluten-free Original Bun",price:1.75,img:"gluten-free",desc:"",discount:.75,onOpenDetails:this.state.openDetails})]})]})}}]),s}(n.a.Component),w=s(17),D=(s(24),function(e){Object(u.a)(s,e);var t=Object(h.a)(s);function s(e){var a;return Object(o.a)(this,s),(a=t.call(this,e)).state={siteState:0,previousState:0,focusProduct:null,shoppingCart:[],wishlist:[]},a.SetSiteState=a.SetSiteState.bind(Object(d.a)(a)),a.ViewProductDetails=a.ViewProductDetails.bind(Object(d.a)(a)),a.AddToCart=a.AddToCart.bind(Object(d.a)(a)),a.RemoveCartOrder=a.RemoveCartOrder.bind(Object(d.a)(a)),a.UpdateCartOrder=a.UpdateCartOrder.bind(Object(d.a)(a)),a.AddToWishlist=a.AddToWishlist.bind(Object(d.a)(a)),a.RemoveWishlistItem=a.RemoveWishlistItem.bind(Object(d.a)(a)),a.AddWishToCart=a.AddWishToCart.bind(Object(d.a)(a)),a}return Object(l.a)(s,[{key:"SetSiteState",value:function(e){var t=this;console.log("Shopping Cart: ",this.state.shoppingCart),this.setState((function(t,s){return{siteState:e}}),(function(){4!==e&&t.setState((function(){return{focusProduct:null}}))}))}},{key:"ViewProductDetails",value:function(e,t){var s=this;console.log("Viewing product details for: ",e),this.setState((function(t,a){return{previousState:s.state.siteState,focusProduct:e}}),(function(){s.SetSiteState(t)}))}},{key:"AddToCart",value:function(e){var t=this;console.log("New Order: ",e);var s=e.amount,a=e.glaze,i=e.product,n=this.state.shoppingCart;n.push({id:this.state.shoppingCart.length,amount:s,glaze:a,product:i}),this.setState((function(e,t){return{shoppingCart:n}}),(function(){t.SetSiteState(t.state.previousState)}))}},{key:"RemoveCartOrder",value:function(e){for(var t=this,s=this.state.shoppingCart,a=0;a<s.length;a++)if(s[a].id===e){s.splice(a,1);break}this.setState((function(e,t){return{shoppingCart:s}}),(function(){t.SetSiteState(3)}))}},{key:"UpdateCartOrder",value:function(e,t){for(var s=this,a=this.state.shoppingCart,i=t.amount,n=t.glaze,c=t.product,r=0;r<a.length;r++)if(a[r].id===e){a[r].amount=i,a[r].glaze=n,a[r].product=c;break}this.setState((function(e,t){return{shoppingCart:a}}),(function(){s.SetSiteState(3)}))}},{key:"AddToWishlist",value:function(e){var t=this;console.log("New Wishlist Item: ",e);var s=e.amount,a=e.glaze,i=e.product,n=this.state.wishlist;n.push({id:this.state.wishlist.length,amount:s,glaze:a,product:i}),this.setState((function(e,t){return{wishlist:n}}),(function(){t.SetSiteState(1)}))}},{key:"RemoveWishlistItem",value:function(e){for(var t=this,s=this.state.wishlist,a=0;a<s.length;a++)if(s[a].id===e){s.splice(a,1);break}this.setState((function(e,t){return{wishlist:s}}),(function(){t.SetSiteState(3)}))}},{key:"AddWishToCart",value:function(e){var t=this;console.log("Adding Wishlist Item to Cart: ",e);var s=e.id,a=e.amount,i=e.glaze,n=e.product,c=this.state.shoppingCart;c.push({id:this.state.shoppingCart.length,amount:a,glaze:i,product:n}),this.setState((function(e,t){return{shoppingCart:c}}),(function(){t.RemoveWishlistItem(s)}))}},{key:"render",value:function(){var e=this,t={0:Object(a.jsx)(b,{setSite:this.SetSiteState}),1:Object(a.jsx)(B,{openDetails:this.ViewProductDetails}),2:Object(a.jsx)(v,{}),3:Object(a.jsx)(k,{orders:this.state.shoppingCart,wishes:this.state.wishlist,removeOrder:this.RemoveCartOrder,updateOrder:this.ViewProductDetails,removeWish:this.RemoveWishlistItem,moveWish:this.AddWishToCart}),4:Object(a.jsx)(N,{product:this.state.focusProduct,onBack:function(){return e.SetSiteState(e.state.previousState)},addToCart:this.AddToCart,addWish:this.AddToWishlist}),5:Object(a.jsx)(f,{order:this.state.focusProduct,onBack:function(){return e.SetSiteState(3)},removeOrder:this.RemoveCartOrder,updateOrder:this.UpdateCartOrder}),6:Object(a.jsx)(y,{openDetails:this.ViewProductDetails})};return Object(a.jsx)(w.a,{basename:"/",children:Object(a.jsxs)("div",{className:"App",children:[Object(a.jsx)(m,{OnChange:this.SetSiteState}),t[this.state.siteState]]})})}}]),s}(n.a.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(Object(a.jsx)(n.a.StrictMode,{children:Object(a.jsx)(D,{})}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},7:function(e,t,s){}},[[30,1,2]]]);
//# sourceMappingURL=main.1f39dda1.chunk.js.map