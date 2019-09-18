(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{154:function(t,a,s){},212:function(t,a,s){"use strict";var e=s(154);s.n(e).a},217:function(t,a,s){"use strict";s.r(a);var e=s(193),n=s.n(e),r=s(210),p=s.n(r),o=(s(211),{name:"ImgUpload",model:{prop:"value",event:"change"},props:{tip:{type:String,default:null},value:{type:String,default:""},scaling:{type:Number,default:NaN},width:{type:Number,default:NaN},height:{type:Number,default:NaN}},data:()=>({dialogFixImg:!1,btnLoading:!1,cropper:null,file:null,imgName:null,imgType:null,insideSrc:null}),computed:{imgId(){return`cropper${this._uid}`},previewId(){return`cropper_preview${this._uid}`}},methods:{handleChange(t){this.file=t,this.imgName=t.raw.name,this.imgType=t.raw.type,this.setCrop()},setCrop(){const t=new FileReader;t.readAsDataURL(this.file.raw),t.onload=t=>{this.cropper.replace(t.srcElement.result)},this.$nextTick(()=>{const t=document.getElementById(this.imgId);this.cropper=new p.a(t,{preview:`#${this.previewId}`,aspectRatio:this.scaling,autoCropArea:.8,checkCrossOrigin:!0})}),this.dialogFixImg=!0},native(){this.upFile(this.file.raw)},crop(){this.btnLoading=!0,this.cropper.getCroppedCanvas({width:this.width,height:this.height}).toBlob(t=>{this.upFile(t)},this.imgType||"image/jpeg")},async upFile(t){const a=new FormData;a.append("file",t,this.imgName);const s=await n()({method:"post",url:"",data:a,headers:{ContentType:"multipart/form-data"}}).catch(t=>(console.log("模拟返回，修改 url 后可以将 catch 删除"),{data:{code:2e3,data:"https://ououe.com/img/homescreen96.png",message:"上传成功"}})),{code:e,data:r,message:p}=s.data;this.btnLoading=!1,p&&this.$message({message:p,type:2e3===e?"success":"error"}),2e3===e&&(this.file=null,this.imgName=null,this.imgType=null,this.close(),this.$emit("change",r))},close(){this.dialogFixImg=!1,this.cropper.destroy()}}}),i=(s(212),s(16)),l=Object(i.a)(o,(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("section",[s("div",{staticClass:"uploader"},[s("el-upload",{attrs:{"show-file-list":!1,"auto-upload":!1,multiple:!1,"on-change":t.handleChange,"before-upload":function(){return!1},action:""}},[s("el-button",{attrs:{slot:"trigger",size:"small",type:"primary"},slot:"trigger"},[t._v("选取文件")])],1),t._v(" "),t.value?s("div",{staticClass:"img-warp"},[s("img",{staticClass:"img",attrs:{src:t.value}})]):s("div",{staticClass:"text"},[t._v("未选择任何文件")])],1),t._v(" "),t.tip?s("div",{staticClass:"uploadPhotoTips"},[t._v(t._s(t.tip))]):t._e(),t._v(" "),s("el-dialog",{staticClass:"dialogs",attrs:{visible:t.dialogFixImg,"append-to-body":!0,"close-on-click-modal":!1,width:"600px",title:"裁剪图片"},on:{"update:visible":function(a){t.dialogFixImg=a},close:t.close}},[t.tip?s("div",{staticClass:"uploadPhotoTips dialog-tip"},[t._v(t._s(t.tip))]):t._e(),t._v(" "),s("div",{staticClass:"crop-box"},[s("img",{attrs:{id:t.imgId}})]),t._v(" "),s("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[s("el-button",{attrs:{loading:t.btnLoading,type:"primary"},on:{click:t.native}},[t._v("直接上传")]),t._v(" "),s("el-button",{attrs:{loading:t.btnLoading,type:"primary"},on:{click:t.crop}},[t._v("裁剪上传")]),t._v(" "),s("el-button",{on:{click:function(a){t.dialogFixImg=!1}}},[t._v("取消")])],1)])],1)}),[],!1,null,"d7aaba82",null).exports;l.install=function(t){t.component(l.name,l)};var c={components:{ImgUpload:l},data:()=>({imgSrc:""}),methods:{handleChange(t){console.log(t)}}},v=Object(i.a)(c,(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"imgupload"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#imgupload","aria-hidden":"true"}},[t._v("#")]),t._v(" ImgUpload")]),t._v(" "),s("blockquote",[s("p",[t._v("基于 cropperjs element-ui 的图片裁剪")])]),t._v(" "),s("h2",{attrs:{id:"作用"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#作用","aria-hidden":"true"}},[t._v("#")]),t._v(" 作用")]),t._v(" "),s("p",[t._v("拦截图片的自动上传，并弹出裁剪窗口，通过裁剪让图片达到要求的比例和尺寸，并提供直接上传的按钮")]),t._v(" "),s("p",[s("strong",[t._v("通过"),s("code",[t._v("直接上传")]),t._v("按钮将直接上传图片，通过"),s("code",[t._v("裁剪上传")]),t._v("才会上传选中区域的裁剪图片")])]),t._v(" "),s("h2",{attrs:{id:"使用"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#使用","aria-hidden":"true"}},[t._v("#")]),t._v(" 使用")]),t._v(" "),s("div",{staticClass:"language-html vue extra-class"},[s("pre",{pre:!0,attrs:{class:"language-html"}},[s("code",[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("template")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("img-upload")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("v-model")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("imgSrc"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v(":width")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("143"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v(":height")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("144"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v(":scaling")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("143 / 144"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("tip")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("提示文字"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("@change")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("handleChange"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("/>")])]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("template")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("script")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),s("span",{pre:!0,attrs:{class:"token script"}},[s("span",{pre:!0,attrs:{class:"token language-javascript"}},[t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("default")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("data")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      imgSrc"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("''")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  methods"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("handleChange")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("url")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      console"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("url"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("script")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])]),s("p",[s("strong",[t._v("效果")])]),t._v(" "),[s("img-upload",{attrs:{width:143,height:144,scaling:143/144,tip:"提示文字"},on:{change:t.handleChange},model:{value:t.imgSrc,callback:function(a){t.imgSrc=a},expression:"imgSrc"}})],t._v(" "),s("h2",{attrs:{id:"配置"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#配置","aria-hidden":"true"}},[t._v("#")]),t._v(" 配置")]),t._v(" "),s("p",[t._v("v-model 或者 value")]),t._v(" "),s("ul",[s("li",[t._v("type: "),s("code",[t._v("String")])]),t._v(" "),s("li",[t._v("default: "),s("code",[t._v("''")])])]),t._v(" "),s("p",[t._v("绑定图片的地址")]),t._v(" "),s("p",[t._v("width")]),t._v(" "),s("ul",[s("li",[t._v("type: "),s("code",[t._v("Number")])]),t._v(" "),s("li",[t._v("default: "),s("code",[t._v("NaN")])])]),t._v(" "),s("p",[t._v("设置裁剪后图片的宽度")]),t._v(" "),s("p",[t._v("height")]),t._v(" "),s("ul",[s("li",[t._v("type: "),s("code",[t._v("Number")])]),t._v(" "),s("li",[t._v("default: "),s("code",[t._v("NaN")])])]),t._v(" "),s("p",[t._v("设置裁剪后图片的高度")]),t._v(" "),s("p",[t._v("scaling")]),t._v(" "),s("ul",[s("li",[t._v("type: "),s("code",[t._v("Number")])]),t._v(" "),s("li",[t._v("default: "),s("code",[t._v("NaN")])])]),t._v(" "),s("p",[t._v("裁剪图片的固定比例")]),t._v(" "),s("p",[t._v("tip")]),t._v(" "),s("ul",[s("li",[t._v("type: "),s("code",[t._v("String")])]),t._v(" "),s("li",[t._v("default: "),s("code",[t._v("null")])])]),t._v(" "),s("p",[t._v("提示文字")]),t._v(" "),s("h2",{attrs:{id:"事件"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#事件","aria-hidden":"true"}},[t._v("#")]),t._v(" 事件")]),t._v(" "),s("p",[t._v("change")]),t._v(" "),s("p",[t._v("上传成功后返回图片 "),s("code",[t._v("url")])]),t._v(" "),s("h2",{attrs:{id:"注意"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#注意","aria-hidden":"true"}},[t._v("#")]),t._v(" 注意")]),t._v(" "),s("p",[t._v("需要手动修改组件里面的"),s("em",[t._v("上传文件")])])],2)}),[],!1,null,null,null);a.default=v.exports}}]);