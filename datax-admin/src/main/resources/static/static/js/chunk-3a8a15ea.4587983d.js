(window["webpackJsonp_Data Link"]=window["webpackJsonp_Data Link"]||[]).push([["chunk-3a8a15ea"],{"3a8d":function(e,t,r){"use strict";r.d(t,"c",(function(){return a})),r.d(t,"b",(function(){return l})),r.d(t,"f",(function(){return i})),r.d(t,"a",(function(){return n})),r.d(t,"e",(function(){return s})),r.d(t,"d",(function(){return c}));var o=r("b775");function a(e){return Object(o["a"])({url:"api/jobTemplate/pageList",method:"get",params:e})}function l(){return Object(o["a"])({url:"api/jobGroup/list",method:"get"})}function i(e){return Object(o["a"])({url:"/api/jobTemplate/update",method:"post",data:e})}function n(e){return Object(o["a"])({url:"/api/jobTemplate/add/",method:"post",data:e})}function s(e){return Object(o["a"])({url:"/api/jobTemplate/remove/"+e,method:"post"})}function c(e){return Object(o["a"])({url:"/api/jobTemplate/nextTriggerTime?cron="+e,method:"get"})}},a897:function(e,t,r){},c3e2:function(e,t,r){"use strict";r("a897")},e7ae:function(e,t,r){"use strict";r.r(t);var o=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"app-container"},[r("div",{staticClass:"filter-container"},[r("el-input",{staticClass:"filter-item",staticStyle:{width:"200px"},attrs:{placeholder:"任务描述"},model:{value:e.listQuery.jobDesc,callback:function(t){e.$set(e.listQuery,"jobDesc",t)},expression:"listQuery.jobDesc"}}),e._v(" "),r("el-select",{staticClass:"filter-item",attrs:{multiple:"",placeholder:"所属项目"},model:{value:e.projectIds,callback:function(t){e.projectIds=t},expression:"projectIds"}},e._l(e.jobProjectList,(function(e){return r("el-option",{key:e.id,attrs:{label:e.name,value:e.id}})})),1),e._v(" "),r("el-button",{directives:[{name:"waves",rawName:"v-waves"}],staticClass:"filter-item",attrs:{type:"primary",icon:"el-icon-search"},on:{click:e.fetchData}},[e._v("\n      搜索\n    ")]),e._v(" "),r("el-button",{staticClass:"filter-item",staticStyle:{"margin-left":"10px"},attrs:{type:"primary",icon:"el-icon-edit"},on:{click:e.handleCreate}},[e._v("\n      添加\n    ")])],1),e._v(" "),r("el-table",{directives:[{name:"loading",rawName:"v-loading",value:e.listLoading,expression:"listLoading"}],attrs:{data:e.list,"element-loading-text":"Loading",border:"",fit:"","highlight-current-row":""}},[r("el-table-column",{attrs:{align:"center",label:"任务ID",width:"80"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v(e._s(t.row.id))]}}])}),e._v(" "),r("el-table-column",{attrs:{label:"任务描述",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v(e._s(t.row.jobDesc))]}}])}),e._v(" "),r("el-table-column",{attrs:{label:"所属项目",align:"center",width:"120"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v(e._s(t.row.projectName))]}}])}),e._v(" "),r("el-table-column",{attrs:{label:"Cron",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[r("span",[e._v(e._s(t.row.jobCron))])]}}])}),e._v(" "),r("el-table-column",{attrs:{label:"路由策略",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v(" "+e._s(e.routeStrategies.find((function(e){return e.value===t.row.executorRouteStrategy})).label))]}}])}),e._v(" "),r("el-table-column",{attrs:{label:"修改用户",align:"center",width:"80"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v(e._s(t.row.userName))]}}])}),e._v(" "),r("el-table-column",{attrs:{label:"注册节点",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[r("el-popover",{attrs:{placement:"bottom",width:"500"},on:{show:function(r){return e.loadById(t.row)}}},[r("el-table",{attrs:{data:e.registerNode}},[r("el-table-column",{attrs:{width:"150",property:"title",label:"执行器名称"}}),e._v(" "),r("el-table-column",{attrs:{width:"150",property:"appName",label:"appName"}}),e._v(" "),r("el-table-column",{attrs:{width:"150",property:"registryList",label:"机器地址"}})],1),e._v(" "),r("el-button",{attrs:{slot:"reference",size:"small"},slot:"reference"},[e._v("查看")])],1)]}}])}),e._v(" "),r("el-table-column",{attrs:{label:"下次触发时间",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[r("el-popover",{attrs:{placement:"bottom",width:"300"},on:{show:function(r){return e.nextTriggerTime(t.row)}}},[r("h5",{domProps:{innerHTML:e._s(e.triggerNextTimes)}}),e._v(" "),r("el-button",{attrs:{slot:"reference",size:"small"},slot:"reference"},[e._v("查看")])],1)]}}])}),e._v(" "),r("el-table-column",{attrs:{label:"操作",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){var o=t.row;return[r("el-dropdown",{attrs:{trigger:"click"}},[r("span",{staticClass:"el-dropdown-link"},[e._v("\n            操作"),r("i",{staticClass:"el-icon-arrow-down el-icon--right"})]),e._v(" "),r("el-dropdown-menu",{attrs:{slot:"dropdown"},slot:"dropdown"},[r("el-dropdown-item",{attrs:{divided:""},nativeOn:{click:function(t){return e.handlerUpdate(o)}}},[e._v("编辑")]),e._v(" "),r("el-dropdown-item",{nativeOn:{click:function(t){return e.handlerDelete(o)}}},[e._v("删除")])],1)],1)]}}])})],1),e._v(" "),r("pagination",{directives:[{name:"show",rawName:"v-show",value:e.total>0,expression:"total>0"}],attrs:{total:e.total,page:e.listQuery.current,limit:e.listQuery.size},on:{"update:page":function(t){return e.$set(e.listQuery,"current",t)},"update:limit":function(t){return e.$set(e.listQuery,"size",t)},pagination:e.fetchData}}),e._v(" "),r("el-dialog",{attrs:{title:e.textMap[e.dialogStatus],visible:e.dialogFormVisible,width:"1000px","before-close":e.handleClose},on:{"update:visible":function(t){e.dialogFormVisible=t}}},[r("el-form",{ref:"dataForm",attrs:{rules:e.rules,model:e.temp,"label-position":"left","label-width":"110px"}},[r("el-row",{attrs:{gutter:20}},[r("el-col",{attrs:{span:12}},[r("el-form-item",{attrs:{label:"执行器",prop:"jobGroup"}},[r("el-select",{attrs:{placeholder:"请选择执行器"},model:{value:e.temp.jobGroup,callback:function(t){e.$set(e.temp,"jobGroup",t)},expression:"temp.jobGroup"}},e._l(e.executorList,(function(e){return r("el-option",{key:e.id,attrs:{label:e.title,value:e.id}})})),1)],1)],1),e._v(" "),r("el-col",{attrs:{span:12}},[r("el-form-item",{attrs:{label:"任务描述",prop:"jobDesc"}},[r("el-input",{attrs:{size:"medium",placeholder:"请输入任务描述"},model:{value:e.temp.jobDesc,callback:function(t){e.$set(e.temp,"jobDesc",t)},expression:"temp.jobDesc"}})],1)],1)],1),e._v(" "),r("el-row",{attrs:{gutter:20}},[r("el-col",{attrs:{span:12}},[r("el-form-item",{attrs:{label:"路由策略",prop:"executorRouteStrategy"}},[r("el-select",{attrs:{placeholder:"请选择路由策略"},model:{value:e.temp.executorRouteStrategy,callback:function(t){e.$set(e.temp,"executorRouteStrategy",t)},expression:"temp.executorRouteStrategy"}},e._l(e.routeStrategies,(function(e){return r("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})})),1)],1)],1),e._v(" "),r("el-col",{attrs:{span:12}},[r("el-dialog",{attrs:{title:"提示",visible:e.showCronBox,width:"60%","append-to-body":""},on:{"update:visible":function(t){e.showCronBox=t}}},[r("cron",{model:{value:e.temp.jobCron,callback:function(t){e.$set(e.temp,"jobCron",t)},expression:"temp.jobCron"}}),e._v(" "),r("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[r("el-button",{on:{click:function(t){e.showCronBox=!1}}},[e._v("关闭")]),e._v(" "),r("el-button",{attrs:{type:"primary"},on:{click:function(t){e.showCronBox=!1}}},[e._v("确 定")])],1)],1),e._v(" "),r("el-form-item",{attrs:{label:"Cron",prop:"jobCron"}},[r("el-input",{attrs:{"auto-complete":"off",placeholder:"请输入Cron表达式"},model:{value:e.temp.jobCron,callback:function(t){e.$set(e.temp,"jobCron",t)},expression:"temp.jobCron"}},[e.showCronBox?r("el-button",{attrs:{slot:"append",icon:"el-icon-open",title:"关闭图形配置"},on:{click:function(t){e.showCronBox=!1}},slot:"append"}):r("el-button",{attrs:{slot:"append",icon:"el-icon-turn-off",title:"打开图形配置"},on:{click:function(t){e.showCronBox=!0}},slot:"append"})],1)],1)],1)],1),e._v(" "),r("el-row",{attrs:{gutter:20}},[r("el-col",{attrs:{span:12}},[r("el-form-item",{attrs:{label:"阻塞处理",prop:"executorBlockStrategy"}},[r("el-select",{attrs:{placeholder:"请选择阻塞处理策略"},model:{value:e.temp.executorBlockStrategy,callback:function(t){e.$set(e.temp,"executorBlockStrategy",t)},expression:"temp.executorBlockStrategy"}},e._l(e.blockStrategies,(function(e){return r("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})})),1)],1)],1),e._v(" "),r("el-col",{attrs:{span:12}},[r("el-form-item",{attrs:{label:"报警邮件"}},[r("el-input",{attrs:{placeholder:"请输入报警邮件，多个用逗号分隔"},model:{value:e.temp.alarmEmail,callback:function(t){e.$set(e.temp,"alarmEmail",t)},expression:"temp.alarmEmail"}})],1)],1)],1),e._v(" "),r("el-row",{attrs:{gutter:20}},[r("el-col",{attrs:{span:12}},[r("el-form-item",{attrs:{label:"任务类型",prop:"glueType"}},[r("el-select",{attrs:{placeholder:"任务脚本类型"},model:{value:e.temp.glueType,callback:function(t){e.$set(e.temp,"glueType",t)},expression:"temp.glueType"}},e._l(e.glueTypes,(function(e){return r("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})})),1)],1)],1),e._v(" "),r("el-col",{attrs:{span:12}},[r("el-form-item",{attrs:{label:"失败重试次数"}},[r("el-input-number",{attrs:{min:0,max:20},model:{value:e.temp.executorFailRetryCount,callback:function(t){e.$set(e.temp,"executorFailRetryCount",t)},expression:"temp.executorFailRetryCount"}})],1)],1)],1),e._v(" "),r("el-row",{attrs:{gutter:20}},[r("el-col",{attrs:{span:12}},[r("el-form-item",{attrs:{label:"所属项目",prop:"projectId"}},[r("el-select",{staticClass:"filter-item",attrs:{placeholder:"所属项目"},model:{value:e.temp.projectId,callback:function(t){e.$set(e.temp,"projectId",t)},expression:"temp.projectId"}},e._l(e.jobProjectList,(function(e){return r("el-option",{key:e.id,attrs:{label:e.name,value:e.id}})})),1)],1)],1),e._v(" "),r("el-col",{attrs:{span:12}},[r("el-form-item",{attrs:{label:"超时时间(分钟)"}},[r("el-input-number",{attrs:{min:0,max:120},model:{value:e.temp.executorTimeout,callback:function(t){e.$set(e.temp,"executorTimeout",t)},expression:"temp.executorTimeout"}})],1)],1)],1),e._v(" "),r("el-row",{attrs:{gutter:20}},[r("el-col",{attrs:{span:12}},[r("el-form-item",{attrs:{label:"子任务"}},[r("el-select",{attrs:{multiple:"",placeholder:"子任务","value-key":"id"},model:{value:e.temp.childJobId,callback:function(t){e.$set(e.temp,"childJobId",t)},expression:"temp.childJobId"}},e._l(e.jobIdList,(function(e){return r("el-option",{key:e.id,attrs:{label:e.jobDesc,value:e}})})),1)],1)],1),e._v(" "),r("el-col",{attrs:{span:12}})],1),e._v(" "),r("el-row",{attrs:{gutter:20}},[r("el-col",{attrs:{span:24}},[r("el-form-item",{attrs:{label:"JVM启动参数"}},[r("el-input",{attrs:{placeholder:"-Xms1024m -Xmx1024m -XX:+HeapDumpOnOutOfMemoryError"},model:{value:e.temp.jvmParam,callback:function(t){e.$set(e.temp,"jvmParam",t)},expression:"temp.jvmParam"}})],1)],1)],1)],1),e._v(" "),r("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[r("el-button",{on:{click:function(t){e.dialogFormVisible=!1}}},[e._v("\n        取消\n      ")]),e._v(" "),r("el-button",{attrs:{type:"primary"},on:{click:function(t){"create"===e.dialogStatus?e.createData():e.updateData()}}},[e._v("\n        确认\n      ")])],1)],1)],1)},a=[],l=(r("28a5"),r("6b54"),r("39ed")),i=r("5ec8"),n=r("3a8d"),s=r("6724"),c=r("333d"),u=r("7e39"),d=r("a53d"),p=r("2b10"),m={name:"JobTemplate",components:{Pagination:c["a"],Cron:i["a"]},directives:{waves:s["a"]},filters:{statusFilter:function(e){var t={published:"success",draft:"gray",deleted:"danger"};return t[e]}},data:function(){var e=this,t=function(e,t,r){t||r(new Error("Increment parameters is required")),r()},r=function(t,r,o){e.partitionField||o(new Error("Partition parameters is required")),o()};return{projectIds:"",list:null,listLoading:!0,total:0,listQuery:{current:1,size:10,jobGroup:0,triggerStatus:-1,jobDesc:"",executorHandler:"",userId:0,projectIds:""},showCronBox:!1,dialogPluginVisible:!1,pluginData:[],dialogFormVisible:!1,dialogStatus:"",textMap:{update:"Edit",create:"Create"},rules:{jobGroup:[{required:!0,message:"jobGroup is required",trigger:"change"}],executorRouteStrategy:[{required:!0,message:"executorRouteStrategy is required",trigger:"change"}],executorBlockStrategy:[{required:!0,message:"executorBlockStrategy is required",trigger:"change"}],jobDesc:[{required:!0,message:"jobDesc is required",trigger:"blur"}],jobProject:[{required:!0,message:"jobProject is required",trigger:"blur"}],jobCron:[{required:!0,message:"jobCron is required",trigger:"blur"}],incStartId:[{trigger:"blur",validator:t}],replaceParam:[{trigger:"blur",validator:t}],primaryKey:[{trigger:"blur",validator:t}],incStartTime:[{trigger:"change",validator:t}],replaceParamType:[{trigger:"change",validator:t}],partitionField:[{trigger:"blur",validator:r}],datasourceId:[{trigger:"change",validator:t}],readerTable:[{trigger:"blur",validator:t}],projectId:[{required:!0,message:"projectId is required",trigger:"change"}]},temp:{id:void 0,jobGroup:"",jobCron:"",jobDesc:"",executorRouteStrategy:"RANDOM",executorBlockStrategy:"DISCARD_LATER",childJobId:"",executorFailRetryCount:"",alarmEmail:"",executorTimeout:"",userId:0,jobConfigId:"",executorHandler:"executorJobHandler",glueType:"BEAN",executorParam:"",jvmParam:"",projectId:"",datasourceId:0,readerTable:""},resetTemp:function(){this.temp=this.$options.data().temp},executorList:"",jobIdList:"",jobProjectList:"",dataSourceList:"",blockStrategies:[{value:"SERIAL_EXECUTION",label:"单机串行"},{value:"DISCARD_LATER",label:"丢弃后续调度"},{value:"COVER_EARLY",label:"覆盖之前调度"}],routeStrategies:[{value:"FIRST",label:"第一个"},{value:"LAST",label:"最后一个"},{value:"ROUND",label:"轮询"},{value:"RANDOM",label:"随机"},{value:"CONSISTENT_HASH",label:"一致性HASH"},{value:"LEAST_FREQUENTLY_USED",label:"最不经常使用"},{value:"LEAST_RECENTLY_USED",label:"最近最久未使用"},{value:"FAILOVER",label:"故障转移"},{value:"BUSYOVER",label:"忙碌转移"}],glueTypes:[{value:"BEAN",label:"DataX任务"}],triggerNextTimes:"",registerNode:[]}},created:function(){this.fetchData(),this.getExecutor(),this.getJobIdList(),this.getJobProject(),this.getDataSourceList()},methods:{handleClose:function(e){this.$confirm("确认关闭？").then((function(t){e()})).catch((function(e){}))},getExecutor:function(){var e=this;n["b"]().then((function(t){var r=t.content;e.executorList=r}))},getJobIdList:function(){var e=this;p["d"]().then((function(t){var r=t.content;e.jobIdList=r}))},getJobProject:function(){var e=this;d["c"]().then((function(t){e.jobProjectList=t}))},getDataSourceList:function(){var e=this;u["d"]().then((function(t){e.dataSourceList=t}))},fetchData:function(){var e=this;this.listLoading=!0,this.projectIds&&(this.listQuery.projectIds=this.projectIds.toString()),n["c"](this.listQuery).then((function(t){var r=t.content;e.total=r.recordsTotal,e.list=r.data,e.listLoading=!1}))},handleCreate:function(){var e=this;this.resetTemp(),this.dialogStatus="create",this.dialogFormVisible=!0,this.temp.jobGroup=this.executorList[0]["id"],this.$nextTick((function(){e.$refs["dataForm"].clearValidate()}))},createData:function(){var e=this;this.$refs["dataForm"].validate((function(t){if(t){if(e.temp.childJobId){var r=[];for(var o in e.temp.childJobId)r.push(e.temp.childJobId[o].id);e.temp.childJobId=r.toString()}e.partitionField&&(e.temp.partitionInfo=e.partitionField+","+e.timeOffset+","+e.timeFormatType),n["a"](e.temp).then((function(){e.fetchData(),e.dialogFormVisible=!1,e.$notify({title:"Success",message:"Created Successfully",type:"success",duration:2e3})}))}}))},handlerUpdate:function(e){var t=this;this.resetTemp(),this.temp=Object.assign({},e),this.dialogStatus="update",this.dialogFormVisible=!0;var r=[],o=[];if(this.JobIdList){for(var a in this.JobIdList)this.JobIdList[a].id!==this.temp.id&&o.push(this.JobIdList[a]);this.JobIdList=o}if(this.temp.childJobId){var l=this.temp.childJobId.split(",");for(var i in l)for(var n in this.jobIdList)this.jobIdList[n].id===parseInt(l[i])&&r.push(this.jobIdList[n]);this.temp.childJobId=r}if(this.temp.partitionInfo){var s=this.temp.partitionInfo.split(",");this.partitionField=s[0],this.timeOffset=s[1],this.timeFormatType=s[2]}this.$nextTick((function(){t.$refs["dataForm"].clearValidate()}))},updateData:function(){var e=this;this.$refs["dataForm"].validate((function(t){if(t){if(e.temp.childJobId){var r=[];for(var o in e.temp.childJobId)r.push(e.temp.childJobId[o].id);e.temp.childJobId=r.toString()}e.partitionField&&(e.temp.partitionInfo=e.partitionField+","+e.timeOffset+","+e.timeFormatType),n["f"](e.temp).then((function(){e.fetchData(),e.dialogFormVisible=!1,e.$notify({title:"Success",message:"Update Successfully",type:"success",duration:2e3})}))}}))},handlerDelete:function(e){var t=this;this.$confirm("确定删除吗？","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then((function(){n["e"](e.id).then((function(e){t.fetchData(),t.$notify({title:"Success",message:"Delete Successfully",type:"success",duration:2e3})}))}))},nextTriggerTime:function(e){var t=this;n["d"](e.jobCron).then((function(e){var r=e.content;t.triggerNextTimes=r.join("<br>")}))},loadById:function(e){var t=this;l["e"](e.jobGroup).then((function(e){t.registerNode=[];var r=e.content;t.registerNode.push(r)}))}}},b=m,f=(r("c3e2"),r("2877")),v=Object(f["a"])(b,o,a,!1,null,null,null);t["default"]=v.exports}}]);