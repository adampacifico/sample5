(this.webpackJsonpmyreact4=this.webpackJsonpmyreact4||[]).push([[0],{26:function(e,t,c){},38:function(e,t,c){"use strict";c.r(t);var n=c(3),s=c.n(n),r=c(9),a=c.n(r),i=(c(26),c(13)),d=c(20),o=c(8),j=function(e,t){switch(t.type){case"decrement":var c=t.payload,n=e.cartItems.find((function(e){return e.id===c.id}));return Object(o.a)(Object(o.a)({},e),{},{cartItems:1===n.qty?e.cartItems.filter((function(e){return e.id!==c.id})):e.cartItems.map((function(e){return e.id===c.id?Object(o.a)(Object(o.a)({},n),{},{qty:n.qty-1}):e}))});case"onAdd":var s=t.payload,r=e.cartItems.find((function(e){return e.id===s.id}));return Object(o.a)(Object(o.a)({},e),{},{cartItems:r?e.cartItems.map((function(e){return e.id===s.id?Object(o.a)(Object(o.a)({},r),{},{qty:r.qty++}):e})):[].concat(Object(d.a)(e.cartItems),[Object(o.a)(Object(o.a)({},s),{},{qty:1})])});case"onRemove":return Object(o.a)(Object(o.a)({},e),{},{cartItems:e.cartItems.filter((function(e){return e.id!==t.payload.id}))});default:return e}},l=c(1),m={products:[{id:1,name:"Shoes",price:10,desc:"Short description here",img:"https://assets.adidas.com/images/w_600,f_auto,q_auto/449c838942da409f8ba9a97f00d3cffe_9366/Runfalcon_Shoes_Black_F36199_01_standard.jpg"},{id:2,name:"Slippers",price:15,desc:"Short description here",img:"https://assets.adidas.com/images/w_600,f_auto,q_auto/89289a3dbb1a4c0dbfe3a9910019a415_9366/Adilette_Aqua_Slides_Red_F35540.jpg"},{id:4,name:"Cap",price:13,desc:"Short description here",img:"https://assets.adidas.com/images/w_600,f_auto,q_auto/62ad810c54cc402f8707aa9a00b92ec7_9366/Cap_Pink_FN0989.jpg"}],cartItems:[]},b=Object(n.createContext)(m),u=function(e){var t=e.children,c=Object(n.useReducer)(j,m),s=Object(i.a)(c,2),r=s[0],a=s[1];return Object(l.jsx)(b.Provider,{value:{products:r.products,cartItems:r.cartItems,decrementCount:function(e){a({type:"decrement",payload:e})},onAdd:function(e){console.log("here"),a({type:"onAdd",payload:e})},onRemove:function(e){a({type:"onRemove",payload:e})}},children:t})},h=(c(28),c(39)),O=c(40),x=c(41),p=c(42),f=function(){var e=Object(n.useContext)(b).cartItems;return Object(l.jsx)(l.Fragment,{children:Object(l.jsxs)(h.a,{className:"bg-info text-white",children:[Object(l.jsx)(O.a,{className:"text-white",children:"MYSHOPPINGCART"}),Object(l.jsxs)(x.a,{children:[Object(l.jsxs)(p.a,{className:"text-white",children:["Cart",Object(l.jsx)("span",{className:"badge bg-danger mr-3 ml-2 ",children:e.length})]}),Object(l.jsx)(p.a,{className:"text-white",children:Object(l.jsx)("span",{children:"Sign In"})})]})]})})},g=function(e){return Object(l.jsxs)("div",{className:"card",children:[Object(l.jsx)("img",{src:e.img,className:"card-img-top",alt:e.products}),Object(l.jsxs)("div",{className:"card-body",children:[Object(l.jsx)("h5",{className:"card-title",children:e.productName}),Object(l.jsxs)("strong",{children:["$ ",e.price]}),Object(l.jsx)("p",{className:"card-text",children:e.description}),Object(l.jsx)("button",{onClick:function(){return e.onAdd(e.products)},className:"btn btn-primary",children:"Add to Cart"})]})]})},y=function(){var e=Object(n.useContext)(b),t=e.products,c=e.onAdd,s=e.cartItems,r=e.setCartItems;return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)("h1",{children:"Products"}),Object(l.jsx)("div",{className:"container-fluid",children:Object(l.jsx)("ul",{className:"row",style:{listStyleType:"none",padding:"0"},children:t.map((function(e){return Object(l.jsx)("li",{className:"col-sm-4 p-2",children:Object(l.jsx)(g,{onAdd:c,description:e.desc,productName:e.name,price:e.price,img:e.img,products:e,cartItem:s,setCartItems:r})},e.id)}))})})]})},N=c(43),I=c(44),v=c(45),C=c(49),_=c(46),S=c(47),w=c(48),A=function(e){var t=e.onRemove,c=e.cartItemImg,n=e.cartItemName,s=e.cartItemPrice,r=e.cartItemsQty,a=e.cart,i=e.onAdd,d=e.decrementCount,o=r*s;return Object(l.jsxs)("div",{className:"container-fluid p-0 d-flex justify-content-between",children:[Object(l.jsxs)("div",{className:"d-flex",children:[Object(l.jsx)("img",{src:c,style:{maxWidth:"100px"}}),Object(l.jsxs)("div",{className:"mx-2",children:[Object(l.jsx)("h4",{children:n}),Object(l.jsxs)("strong",{className:"text-secondary",children:["$ ",s]}),Object(l.jsxs)("div",{className:"d-flex mt-2",children:[Object(l.jsx)("button",{className:"btn btn-warning",onClick:function(){return i(a)},children:"+"}),Object(l.jsx)("button",{className:"btn btn-danger ml-2",onClick:function(){return d(a)},children:"-"})]}),Object(l.jsx)("strong",{children:r+" x  $"+s+" = $"+o})]})]}),Object(l.jsx)("button",{className:"btn btn-secondary txt-light",onClick:function(){return t(a)},children:"X"})]})},k=function(){var e=Object(n.useContext)(b),t=e.cartItems,c=e.onAdd,s=e.decrementCount,r=e.onRemove,a=t.reduce((function(e,t){return e+t.price*t.qty}),0),d=.14*a,o=a>100?0:50,j=a+d+o,m=Object(n.useState)(!1),u=Object(i.a)(m,2),h=u[0],O=u[1],x=function(){return O(!h)};return Object(l.jsxs)("div",{className:"container-fluid",children:[Object(l.jsx)("h3",{children:" Your Cart"}),Object(l.jsx)(N.a,{children:t.map((function(e){return Object(l.jsx)(I.a,{children:Object(l.jsx)(A,{cartItemName:e.name,cartItemPrice:e.price,cartItemImg:e.img,cartItemsQty:e.qty,cartItemsid:e.id,onAdd:c,decrementCount:s,cart:e,onRemove:r})},Math.random(100*Math.floor()))}))}),0!==t.length?Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)("hr",{style:{height:"3px",backgroundColor:"red"}}),Object(l.jsxs)("p",{style:{fontWeight:"500"},children:["Item Total Price : $ "+a," ",Object(l.jsx)("br",{}),"Tax : $ "+d.toFixed(2)," ",Object(l.jsx)("br",{}),"Shipping Fee : $ "+o,Object(l.jsx)("br",{}),Object(l.jsx)("span",{className:"text-muted fst-italic",children:"(free shipping on Min. spend of $100)"}),Object(l.jsx)("br",{}),Object(l.jsx)("span",{className:"fs-1 text-success",children:"Total : $ "+j.toFixed(2)})]}),Object(l.jsxs)("div",{children:[Object(l.jsx)(v.a,{color:"primary",onClick:x,children:"Check Out"}),Object(l.jsxs)(C.a,{isOpen:h,toggle:x,children:[Object(l.jsx)(_.a,{toggle:x,children:"Success!!"}),Object(l.jsx)(S.a,{children:"Your Order Has Placed! Thanks for Shopping"}),Object(l.jsx)(w.a,{children:Object(l.jsx)(v.a,{color:"secondary",onClick:x,children:"Exit"})})]})]})]}):Object(l.jsx)("span",{children:"Place Order"})]})};var F=function(){return Object(l.jsx)("div",{className:"App",children:Object(l.jsxs)(u,{children:[Object(l.jsx)(f,{}),Object(l.jsx)("div",{className:"container-fluid",children:Object(l.jsxs)("div",{className:"row",children:[Object(l.jsx)("div",{className:"col-sm-8",children:Object(l.jsx)(y,{})}),Object(l.jsx)("div",{className:"col-sm-4",children:Object(l.jsx)(k,{})})]})})]})})},q=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,50)).then((function(t){var c=t.getCLS,n=t.getFID,s=t.getFCP,r=t.getLCP,a=t.getTTFB;c(e),n(e),s(e),r(e),a(e)}))};a.a.render(Object(l.jsx)(s.a.StrictMode,{children:Object(l.jsx)(F,{})}),document.getElementById("root")),q()}},[[38,1,2]]]);
//# sourceMappingURL=main.b89941fd.chunk.js.map