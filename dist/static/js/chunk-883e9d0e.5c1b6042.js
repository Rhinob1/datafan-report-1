/*! new version */
(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-883e9d0e"],{"0f59":function(e,t,a){"use strict";a("4db9")},"4db9":function(e,t,a){},ad60:function(e,t,a){"use strict";a.r(t);var s=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"result-count"},[a("PageBreadcrumb",{attrs:{"title-list":e.titleList}}),a("CalculateEventBaseInfo"),a("div",{staticClass:"result-count-body"},[a("div",{staticClass:"body-head flex-box--row flex-box--between-justify"},[a("a-select",{staticClass:"head__select",attrs:{"allow-clear":"",placeholder:"请选择版本号"},model:{value:e.versionValue,callback:function(t){e.versionValue=t},expression:"versionValue"}},e._l(e.versionList,(function(t,s){return a("a-select-option",{key:s},[e._v(" "+e._s(t.name)+" ")])})),1),a("div",{staticClass:"head__btn"},[a("a-button",{staticClass:"head__button",attrs:{type:"primary",size:"small",shape:"round",ghost:""},on:{click:e.joinRun}},[e._v("加入运行")]),a("a-button",{staticClass:"head__button",attrs:{type:"primary",size:"small",shape:"round",ghost:""}},[e._v("结果导出")]),a("a-button",{attrs:{type:"primary",size:"small",shape:"round",ghost:""},on:{click:e.versionComparison}},[e._v("版本对比")])],1)],1),a("div",{staticClass:"result-count-info"},[e._m(0),a("div",{staticClass:"info-body"},[a("div",{staticClass:"result-tilte"},[e._v(" 计算结果列表 ")]),a("div",{staticClass:"line"}),a("div",{staticClass:"result-count-table"},[a("SenseTable",e._b({ref:"senseTable",on:{"checkbox-change":e.onSelectChange,"checkbox-all":e.onSelectChange,"page-change":e.changePage}},"SenseTable",e.tableOptions,!1))],1)])])])],1)},n=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"info-head"},[a("span",{staticClass:"info-head-margin"},[e._v("版本备注：规则包含‘税务’")]),a("span",[e._v("创建时间：2021-11-01 11:27:30")])])}],i=(a("d81d"),a("bc42")),l=a("7bb4"),o={name:"CalculateEventResult",components:{CalculateEventBaseInfo:l["a"],PageBreadcrumb:i["a"]},data:function(){return{titleList:[{name:"测算管理"},{name:"测算事件管理"},{name:"查看结果"}],versionValue:null,versionList:[{name:"版本1"}],tableOptions:{emptyRender:{size:"small"},pagerConfig:{pageSizes:[10,20,50,100],total:0,currentPage:1,pageSize:10},loading:!1,columns:[{width:100,type:"checkbox",title:"导出"},{title:"事件编号",field:"code"},{title:"描述",field:"desc"},{title:"创建人",field:"submitUserName"}],data:[{code:"1"}]}}},methods:{versionComparison:function(){var e=this.$route.query.eventCode;this.$router.push({path:"/calculate/calculateEventVersion",query:{eventCode:e}})},changePage:function(e){this.tableOptions.pagerConfig.currentPage=e.currentPage,this.tableOptions.pagerConfig.pageSize=e.pageSize},onSelectChange:function(e){var t=e.records;this.selectedRowKeys=t.map((function(e){return e.code}))},joinRun:function(){this.$success({title:"加入运行",content:"成功提交任务"})}}},c=o,r=(a("0f59"),a("2877")),u=Object(r["a"])(c,s,n,!1,null,"4c569eac",null);t["default"]=u.exports}}]);