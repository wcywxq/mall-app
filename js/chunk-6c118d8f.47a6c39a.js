(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-6c118d8f"],{4886:function(t,e,i){"use strict";i.r(e);var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"category"},[i("van-nav-bar",{attrs:{title:"商品类型"}}),i("div",{staticClass:"category-box"},[i("van-row",[i("van-col",{staticClass:"nav",attrs:{span:"6"}},[i("ul",t._l(t.types,function(e,n){return i("li",{key:e._id,class:{active:t.active==n},staticStyle:{"font-size":"0.24rem"},on:{click:function(i){return t.selectCategory(e.typeId,n)}}},[t._v(t._s(e.typeName))])}),0)]),i("van-col",{staticClass:"container",attrs:{span:"18"}},[i("van-pull-refresh",{on:{refresh:t.onRefresh},model:{value:t.isLoading,callback:function(e){t.isLoading=e},expression:"isLoading"}},[i("van-list",{staticClass:"content",attrs:{finished:t.finished,"finished-text":"没有更多了",error:t.error,"error-text":"请求失败，点击重新加载"},on:{load:t.onLoad,"update:error":function(e){t.error=e}},model:{value:t.isLoading,callback:function(e){t.isLoading=e},expression:"isLoading"}},t._l(t.productList,function(e){return i("div",{key:e._id,staticClass:"content-item",on:{click:function(i){return t.goDetail(e._id)}}},[i("img",{directives:[{name:"lazy",rawName:"v-lazy",value:e.img,expression:"item.img"}],attrs:{alt:""}}),i("p",{staticClass:"content-item-name"},[t._v(t._s(e.name))]),i("p",{staticClass:"content-item-price"},[t._v("￥"+t._s(e.price))])])}),0)],1)],1)],1)],1)],1)},s=[],a=i("7f43"),o=i.n(a),c=i("07dc"),r={name:"category",data:function(){return{types:[],active:0,productList:[],typeId:1,start:0,limit:10,finished:!1,error:!1,isLoading:!1}},methods:{selectCategory:function(t,e){this.active=e,this.typeId=t,this.productList=[],this.finished=!1,this.getProductList()},getProductList:function(){var t=this;this.isLoading=!0,o()({url:c["a"].getProductsByType,method:"get",params:{typeId:this.typeId,start:this.productList.length,limit:this.limit}}).then(function(e){console.log(e),0!=e.data.length?t.productList=t.productList.concat(e.data):t.finished=!0,t.isLoading=!1}).catch(function(e){t.error=!0})},onLoad:function(){var t=this;setTimeout(function(){t.getProductList()},1e3)},onRefresh:function(){var t=this;setTimeout(function(){t.productList=[],t.getProductList()},2e3)},goDetail:function(t){console.log(t),this.$router.push("/detail/".concat(t))}},created:function(){var t=this;o()({url:c["a"].getTypes,method:"get"}).then(function(e){console.log(e),t.types=e.data,t.selectCategory(t.typeId,t.active)}).catch(function(t){console.log(t)})}},l=r,u=(i("603a"),i("8c9c")),d=Object(u["a"])(l,n,s,!1,null,"1a1efb51",null);e["default"]=d.exports},"603a":function(t,e,i){"use strict";var n=i("89b1"),s=i.n(n);s.a},"89b1":function(t,e,i){}}]);