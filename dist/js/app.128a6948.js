(function(t){function a(a){for(var i,r,o=a[0],c=a[1],p=a[2],g=0,A=[];g<o.length;g++)r=o[g],n[r]&&A.push(n[r][0]),n[r]=0;for(i in c)Object.prototype.hasOwnProperty.call(c,i)&&(t[i]=c[i]);l&&l(a);while(A.length)A.shift()();return s.push.apply(s,p||[]),e()}function e(){for(var t,a=0;a<s.length;a++){for(var e=s[a],i=!0,o=1;o<e.length;o++){var c=e[o];0!==n[c]&&(i=!1)}i&&(s.splice(a--,1),t=r(r.s=e[0]))}return t}var i={},n={app:0},s=[];function r(a){if(i[a])return i[a].exports;var e=i[a]={i:a,l:!1,exports:{}};return t[a].call(e.exports,e,e.exports,r),e.l=!0,e.exports}r.m=t,r.c=i,r.d=function(t,a,e){r.o(t,a)||Object.defineProperty(t,a,{enumerable:!0,get:e})},r.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,a){if(1&a&&(t=r(t)),8&a)return t;if(4&a&&"object"===typeof t&&t&&t.__esModule)return t;var e=Object.create(null);if(r.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:t}),2&a&&"string"!=typeof t)for(var i in t)r.d(e,i,function(a){return t[a]}.bind(null,i));return e},r.n=function(t){var a=t&&t.__esModule?function(){return t["default"]}:function(){return t};return r.d(a,"a",a),a},r.o=function(t,a){return Object.prototype.hasOwnProperty.call(t,a)},r.p="/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],c=o.push.bind(o);o.push=a,o=o.slice();for(var p=0;p<o.length;p++)a(o[p]);var l=c;s.push([0,"chunk-vendors"]),e()})({0:function(t,a,e){t.exports=e("56d7")},"109c":function(t,a,e){"use strict";var i=e("fa94"),n=e.n(i);n.a},"10fb":function(t,a){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAECklEQVRIibWX22tcVRTGv2+fmcn9MkUpIhVa1BIwiCUq+B9IbKUmTictJs0kqaWKgg+CD0pQ8MEHoQ+W2KRJTTUzubRV2uLfoJJaiRgrEpQipQQyk/tMZs7+5JxkYgJpzG2+l7M5e531O2ufvddah9iCOjtl7tVMvy/ZRoqPgwgDKBIEiguC7gMcl4Ouvkj41lZ8bgp+o1+lwaLUBQpRD7Q6Ie9JLUC0AkpAOVxxJWAGYHyytOq9G8e4sG3w6cFk1BH6AQS17PIeafrhBkdmAqVjwxG6edtzQypbsjMvW9iPCNV6biVkQXOqN1o1vCXw60MKVLrJqyCPadngZyfgnLzYWPn7ZquTV9tg+qDs4hCIOi4TriygPBY/Ecw9FHzmSwVzlam7JA4CcK1Mu6G+uhSt1laga9WaSL5N4TwJA+m2YOp6m/7zsw7clkiOAjgCIZ1l6bP90aI/tgtcq46huVprl34CWCThlqPA0e6TFT7c5O1iidTHAo4IcOGU1O4W6qk7Uj6GUOg5QS6JemvcD/JzfsRvXde+dDo1CcJYItJ3Irzhhtip2hPJJgsNALRpt/rRgVOc8iNezKS6PKiEH0WN7CXUU080HAf4AwFTYlJdsXiKxjsKhI57Bk4w0Ho5sm/bG2lLCgbb5Z9zHZ83FSGT1nQzwACkCdKMFwQKoLeh/FdIf5MMlLmz7xpa+NHCYdfFhrLCRJuX4WV/aPCKEXXYoy0UBb4uKNTjyfgMyh4yhPZTcuOvVtwvNLgnWvUnJIF8hG2JKUH8n3LxEHGlYOxARrt5ehcKEMgICPVGw6ZglDWKxadyBHNe0pgkyY7EzFOFhjZ9N7efpAPigQEx4d20sKcKDS5N55pXhncNLW8uj21rocGSzvpX4lszE6g6Lygn8InY1bnaQkE7RmZrCBwC5Bazut/bUFnIXPdP01K2uxDQWCJJN5dbzlrEtQsRzpnhCJW2VWclWBIvtiVSTXsNFtUI6AVAtjgY9pfbP0LZIJIEP/SSCmSvxK7N1uwVtG0o/aSxjHtdqGA+/eI1TmFt6+MtB8QbpOohZYwTet7vIHah5kTm6QDmfyFYLGC0Nxquy3tbTRq90bAX7lEAt70eyXWzd1oTU+/sFNsan24Jav63FehfFQ+qX1o7v2F7W6HpS5Rt9tIpgVGakkhPpHhiK8AzIzOH3Zw7sNI0et/35qwJNwxHuLQpOK/Y4HQj5H5DMORncmnM0PkkZCq/93blmhd1KnLzz9DJNUK2BeCBlamsBU/3RasHNvK/aU2KDKq0XNOfU7ZJZOWqseCCWpT/qViyrrYJGVGJXCZ8rr9lB78w66JPJCmDerp8E7A1IB/zMqBHoZgRlCT5D8jhA+NVn3V2cvNyB+BfeO+7wgzVyfcAAAAASUVORK5CYII="},"20ca":function(t,a){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAeCAYAAABNChwpAAAB0ElEQVRYR+2XsWsTURzHv9+LIoKSO8nQpSC2YLGjdBPUyaEgFSG9OtSSUycHUYprNkH8Fy4OYryrooKbi7g56GZT8S8QOrwQdUnMfeXSixgJeUdocbk3/u77+73P+z4Ovo8AEDwzNUGbgPMSUC+tWRd1BGKVxCcJLas+ExA4JWJBzqHlx9Xju7yx1T6rRB/zDthPXeh7ZC0yjwjc28/BeWftAcTtKqV42CThfZ4BJM7/rcvTR2ARRGXYNwS4SulFVnwT+t7lPABBZN4BuJBqBV5q+O5bW9/N5vfFxPn1OdN9DX3vdOrA/wUIYrMC4VVG9Tr0vSu2kwz+nCkc2Gh2FkpOf2dvvnZC/8QZ3mp2Kn2nvzuokffDVffhQQFAYhAbA7AMoRGueQHTzTa2fsyUElVmvxxr1etMDgwAwLWnbe+oo5Odkrv9vMruAGCaNc0VjNunACgcKBwoHCgcKBwoHCgcyOXA9ag9d1iaHYnhRJqKs3jHB4T+pGI5SDp0P6SJxxZ2rAC1yNwFkD5erNoRQOhbr+vNP1nnz0kQ1qFBZNLEvGI7ybjvEpcaa+7EZ58VoBabi0hwB0B5ZBPiHIHSIGD/85oiIYCtcLV8G6Qmwf8GD/QfLnvotZ8AAAAASUVORK5CYII="},"34c9":function(t,a){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAETklEQVRIS7WXTWwUdRjGn2e2X1Db7mz4UCQ2JUREBBLkBPFAjEI0SCpx20VQulsaE0UNUYnESAkHvFSMB42F3S41dqetbTwoBw8e1IiosUEkYOCAH2gwuLPtAoVuZx4za7eppYXd0s5pkvd9n99//vP/eF4ij6e5WcbvS1PbJK2hWANiEYBqQYMUzwk6C/C061NPPBg4mYckeLOkp7rkq1RqK4S9AGpGc4WLoM5BLBYwB9RcghVeXMCPAOLuoP9QvIHXJtOfFLy9K7nc57IXwGIBQ4DiMIriZag4+V6Ql8cL7rAG7nXgvECoAeAdEs4SqIuGzL6J4BOCI4nkFpAxAUWEWn3FpftbN5f/lc8UbmtXeXFx/x5QrxNwQOwboP9Ad5DO2Pr/gZs+UPFwZeogiecBJF35NraFKr/JBzg+J9xpr4MLi8Q8SB3RUODpScERy34HwEsQ+jK+0o3twdkXpgLN1TR1DMxxjOEvAS6VsD8WMt/MxUa/ONI5sFZyvgLwK2b5V8Q2MX070FxtY8/VhW7m2vcE7xTwbKzebPdiWfDOoyq92p/6BcTdAlbH6s0T0wEdhXckV7gGvgV4PW34F3QHOZgFhy37GQJHJOyLhczm6YTmtMKWfZDAyxB2RUOm9w5ErOQxgKthGPOjwarkTICbeq7cNZwZOg/pUtpn1rChK32/4Q6fmmjlTfcAwonk+ySfc10+zEgitRvUWzL0UCwY+Hq6YWP1vC1G4QuBrzFs2W3wVlud3wdSMwmOdPUH4Lr/QOpk9v8K1dFQYMFMQnPakUTyT5BXPHAa4tloyFxVKDjSY1cjg/OF1mX3cdiybUoXoqHAA4UK3BY4Ytl9ku6LhQKzCgVPJT+cSF4gmGE4YfeSqPW5vrmtWyovTUUs35ptvel5JUPDFwF84k11C4FdAIPRen93viJTyWvs7H9Mcj8DsJeNHalHZOhzQEej9YHHpyKYb03YsmMEGkA9MXJWJ08BXJIpKVrw4ZMVf+crVEied2Q6maHfAF0pNcyF/4ETqR2kWsffmYUI3yo3bNnvEtgJak+0LnAgC97epjKjLPUTiRoYxtposOq7WwkVEvf8m+HiOIEh72s9zzZqBHZ0pJc5zPxA4JJTxuXxWjNViPhkuY0dl+eLmRMg5t9gBEbvzJEph3SKJWUbDm+e/cftwLPGr8Q+RnC5gJZYvflKTu8GlxmxbM9zvS3AdqHaeCjg2aGCn7Blr6T0EchlAj6954x/U3Mz3UnBXqChs3+9IedjgbMKtbdNXckqxzVeBbQbgiGqJW2Yb3QHOTR29JMaes8g0M30ElySNfRSzKDvSIlR+fNYQ+91G+WZgUW+IncNpCDARwEUATjnytjaFqo6PtF03bSFgcRw58AGynlR5HqOmEOMtDACKr39T6BkVFzoc6lDGjTbptTCjB9lpKt/sRytA9xVIB8EsBLQ9VzTRvIMUWQdrq84nc+C+BdTbd6hLOuWsgAAAABJRU5ErkJggg=="},"56d7":function(t,a,e){"use strict";e.r(a);e("cadf"),e("551c"),e("f751"),e("097d");var i=e("2b0e"),n=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",[e("ul",{staticClass:"img-list"},[e("li",{staticClass:"img-item"},[e("span",{staticClass:"title",on:{click:function(a){return t.openDrawing("/assets/images/img_01.jpeg")}}},[t._v("编辑图片img_01（800 × 500）")]),e("img",{attrs:{src:"/assets/images/img_01.jpeg",alt:"img_01"}})]),e("li",{staticClass:"img-item"},[e("span",{staticClass:"title",on:{click:function(a){return t.openDrawing("/assets/images/img_02.jpeg")}}},[t._v("编辑图片img_02（720 × 926）")]),e("img",{attrs:{src:"/assets/images/img_02.jpeg",alt:"img_02"}})]),e("li",{staticClass:"img-item"},[e("span",{staticClass:"title",on:{click:function(a){return t.openDrawing("/assets/images/img_03.jpeg")}}},[t._v("编辑图片img_03（1600 × 1200）")]),e("img",{attrs:{src:"/assets/images/img_03.jpeg",alt:"img_03"}})])]),e("div",[e("img",{directives:[{name:"show",rawName:"v-show",value:t.imgBase64,expression:"imgBase64"}],staticClass:"imgBase64",attrs:{src:t.imgBase64,alt:"imgBase64"}})]),t.drawingStatus?e("div",{staticClass:"drawing-wrap"},[e("img-drawing",{attrs:{url:t.drawingUrl},on:{closeDrawing:t.closeDrawing}})],1):t._e()])},s=[],r=function(){var t=this,a=t.$createElement,i=t._self._c||a;return i("div",{staticClass:"drawing-wrap"},[i("div",{staticClass:"tool-wrap"},[i("div",[i("el-tooltip",{attrs:{content:"矩形"}},[i("el-button",{attrs:{circle:""},on:{click:function(a){t.drawingType="rectangle"}}},[i("img",{attrs:{src:e("f3d9")}})])],1),t._e(),i("el-tooltip",{attrs:{content:"自定义路径"}},[i("el-button",{attrs:{circle:""},on:{click:function(a){t.drawingType="route"}}},[i("img",{attrs:{src:e("6329")}})])],1),i("el-tooltip",{attrs:{content:"半径画圆"}},[i("el-button",{attrs:{circle:""},on:{click:function(a){t.drawingType="radius"}}},[i("img",{attrs:{src:e("34c9")}})])],1),i("el-tooltip",{attrs:{content:"直径画圆"}},[i("el-button",{attrs:{circle:""},on:{click:function(a){t.drawingType="diameter"}}},[i("img",{attrs:{src:e("10fb")}})])],1),i("el-tooltip",{attrs:{content:"文字"}},[i("el-button",{attrs:{circle:""},on:{click:function(a){t.drawingType="font"}}},[i("img",{attrs:{src:e("20ca")}})])],1),i("i",{staticClass:"border"}),i("el-tooltip",{attrs:{content:"清除"}},[i("el-button",{attrs:{circle:""},on:{click:t.clear}},[i("img",{attrs:{src:e("6999")}})])],1),i("el-tooltip",{attrs:{content:"画笔粗细"}},[i("el-button",{directives:[{name:"popover",rawName:"v-popover:popover",arg:"popover"}],attrs:{circle:""}},[i("img",{attrs:{src:e("f224")}})])],1),i("el-popover",{ref:"popover",attrs:{placement:"bottom",width:"50",trigger:"click"}},[i("el-slider",{staticStyle:{padding:"10px 0 10px 38px"},attrs:{min:1,max:10,vertical:"",height:"150px"},on:{change:t.lineWidthChange},model:{value:t.lineWidth,callback:function(a){t.lineWidth=a},expression:"lineWidth"}})],1),i("el-tooltip",{attrs:{content:"颜色"}},[i("el-color-picker",{staticClass:"color-picker",attrs:{size:"mini"},on:{change:t.strokeStyleChange},model:{value:t.strokeStyle,callback:function(a){t.strokeStyle=a},expression:"strokeStyle"}})],1),i("i",{staticClass:"border"}),i("el-tooltip",{attrs:{content:"撤销"}},[i("el-button",{attrs:{circle:""},on:{click:function(a){return t.revokeAndRecovery(-1)}}},[i("img",{attrs:{src:e("e978")}})])],1),i("el-tooltip",{attrs:{content:"重做"}},[i("el-button",{attrs:{circle:""},on:{click:function(a){return t.revokeAndRecovery(1)}}},[i("img",{attrs:{src:e("721f")}})])],1)],1),i("div",{staticClass:"btn"},[i("span",{staticClass:"info"},[t._v(t._s(t.drawingType?t.info[t.drawingType]:"请选择左侧工具开始标记"))]),i("i",{staticClass:"border"}),i("el-button",{attrs:{type:"success"},on:{click:t.drawingSure}},[t._v("确认")]),i("el-button",{on:{click:t.drawingCancel}},[t._v("取消")])],1)]),i("div",{ref:"canvasWrap",staticClass:"canvas-wrap"},[i("canvas",{ref:"canvas",staticClass:"canvas",on:{mousedown:t.mousedown,mouseup:t.mouseup,mousemove:t.mousemove,click:t.canvasClick}},[t._v("你的设备不支持绘制功能请使用现代浏览器")])]),i("div",{directives:[{name:"show",rawName:"v-show",value:t.textareaShow,expression:"textareaShow"}],ref:"textarea",staticClass:"textarea-wrap"},[i("el-input",{attrs:{type:"textarea",rows:3,placeholder:"请输入内容"},model:{value:t.textareaText,callback:function(a){t.textareaText=a},expression:"textareaText"}}),i("div",{staticClass:"btn-wrap"},[i("el-button",{attrs:{type:"success",size:"mini"},on:{click:t.fontSure}},[t._v("确认")]),i("el-button",{attrs:{size:"mini"},on:{click:t.fontCancel}},[t._v("取消")])],1)],1)])},o=[],c=(e("96cf"),e("3b8d")),p={img:"data:image/png;base64,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SZKkIgaUkiRJKmJAKUmSpCIGlJIkSSpiQClJkqQiBpSSJEkqYkApSZKkIgaUkiRJKmJAKUmSpCIGlJIkSSpiQClJkqQiBpSSJEkqYkApSZKkIgaUkiRJKmJAKUmSpCIGlJIkSSpiQClJkqQiBpSSJEkqYkApSZKkIgaUkiRJKmJAKUmSpCIGlJIkSSpiQClJkqQiBpSSJEkqYkApSZKkIgaUkiRJKmJAKUmSpCIGlJIkSSpiQClJkqQiBpSSJEkqYkApSZKkIgaUkiRJKmJAKUmSpCIGlJIkSSpiQClJkqQiBpSSJEkqYkApSZKkIgaUkiRJKmJAKUmSpCIGlJIkSSpiQClJkqQiBpSSJEkqYkApSZKkIgaUkiRJKmJAKUmSpCIGlJIkSSpiQClJkqQiBpSSJEkqYkApSZKkIgaUkiRJKmJAKUmSpCIGlJIkSSpiQClJkqQiBpSSJEkqYkApSZKkIgaUkiRJKmJAKUmSpCIGlJIkSSpiQClJkqQiBpSSJEkqYkApSZKkIgaUkiRJKmJAKUmSpCIGlJIkSSpiQClJkqQiBpSSJEkqYkApSZKkIgaUkiRJKmJAKUmSpCIGlJIkSSpiQClJkqQiBpSSJEkqYkApSZKkIgaUkiRJKmJAKUmSpCIGlJIkSSpiQClJkqQiBpSSJEkqYkApSZKkIgaUkiRJKmJAKUmSpCIGlJIkSSpiQClJkqQiBpSSJEkqYkApSZKkIgaUkiRJKmJAKUmSpCIGlJIkSZpfVVX/H5AodtQ10KLbAAAAAElFTkSuQmCC"},l={data:function(){return{info:{rectangle:"拖拽绘制矩形",polygon:"多边形",route:"长按鼠标左键绘制自由路径",radius:"以半径拖拽画圆",diameter:"以直径拖拽画圆",font:"点击画布编辑文字",clear:"已清楚你的全部绘制",revoke:"撤销操作",recovery:"恢复撤销",thickness:"请调整画笔粗细",color:"请选择颜色"},canvas:null,downX:0,downY:0,downMs:0,drawingType:"",drawingStatus:!1,imgData:[],imgDataIndex:0,textareaText:"",textareaShow:!1,lineWidth:2,strokeStyle:"#ff0000"}},mounted:function(){this.canvas=this.$refs.canvas.getContext("2d"),this.drawingImg()},methods:{pushCanvasData:function(){var t=this.$refs.canvas.width,a=this.$refs.canvas.height;this.imgData=this.imgData.slice(0,this.imgDataIndex+1),this.imgData.push(this.canvas.getImageData(0,0,t,a)),this.imgDataIndex=this.imgData.length-1},setCanvasAttr:function(t,a){var e=this.$refs.canvasWrap.offsetWidth,i=this.$refs.canvasWrap.offsetHeight;return this.$refs.canvas.width=t<e?e:t,this.$refs.canvas.height=a<i?i:a,{x:(this.$refs.canvas.width-t)/2,y:(this.$refs.canvas.height-a)/2,w:t,h:a}},drawingImg:function(){var t=this,a=new Image;a.crossOrigin="anonymous",a.src=this.url,a.onload=function(e){var i=t.setCanvasAttr(a.width,a.height);t.canvas.drawImage(a,i.x,i.y,i.w,i.h),t.setStyle(),t.pushCanvasData()}},setStyle:function(){this.canvas.font="14px Arial",this.canvas.fillStyle="#ff0000",this.canvas.strokeStyle="#ff0000",this.canvas.lineWidth=2},lineWidthChange:function(t){this.canvas.lineWidth=t},strokeStyleChange:function(t){this.canvas.fillStyle=t,this.canvas.strokeStyle=t},mousedown:function(t){""!=this.drawingType&&(this.downMs=+new Date,this.drawingStatus=!0,this.downX=t.offsetX,this.downY=t.offsetY,this.canvas.beginPath())},mouseup:function(t){var a=+new Date-this.downMs>20&&this.downMs;a&&this.pushCanvasData(),""!=this.drawingType&&(this.drawingStatus=!1)},mousemove:function(t){this.drawingType&&this.drawingStatus&&(this.canvas.clearRect(0,0,this.$refs.canvas.width,this.$refs.canvas.height),this.canvas.putImageData(this.imgData[this.imgDataIndex],0,0),"rectangle"==this.drawingType?this.rectangle(t.offsetX,t.offsetY):"radius"==this.drawingType?this.radius(t.offsetX,t.offsetY):"diameter"==this.drawingType?this.diameter(t.offsetX,t.offsetY):"route"==this.drawingType?this.route(t.offsetX,t.offsetY):"polygon"==this.drawingType&&this.polygon(t.offsetX,t.offsetY))},canvasClick:function(t){"font"==this.drawingType&&(this.textareaShow=!0,this.downX=t.offsetX,this.downY=t.offsetY,this.$refs.textarea.style.left="".concat(t.clientX,"px"),this.$refs.textarea.style.top="".concat(t.clientY,"px"))},fontCancel:function(){this.textareaText="",this.textareaShow=!1},fontSure:function(){for(var t=0,a=0,e=0,i=this.textareaText.length;e<i;e++)t=e%11*15+12,a=20*(Math.floor(e/11)+1)+2,this.canvas.fillText(this.textareaText[e],t+this.downX,a+this.downY);this.fontCancel(),this.pushCanvasData()},rectangle:function(t,a){this.canvas.strokeRect(this.downX,this.downY,t-this.downX,a-this.downY)},radius:function(t,a){var e=Math.sqrt(Math.pow(t-this.downX,2)+Math.pow(a-this.downY,2));this.canvas.beginPath(),this.canvas.arc(this.downX,this.downY,e,0,2*Math.PI,!0),this.canvas.stroke(),this.canvas.closePath()},diameter:function(t,a){var e=Math.sqrt(Math.pow(t-this.downX,2)+Math.pow(a-this.downY,2))/2,i=(t-this.downX)/2+this.downX,n=(a-this.downY)/2+this.downY;this.canvas.beginPath(),this.canvas.arc(i,n,e,0,2*Math.PI,!0),this.canvas.stroke(),this.canvas.closePath()},route:function(t,a){this.canvas.lineTo(t,a),this.canvas.stroke()},polygon:function(t,a){this.canvas.beginPath(),this.canvas.moveTo(this.downX,this.downY),this.canvas.lineTo(t,a),this.canvas.stroke()},revokeAndRecovery:function(t){this.imgDataIndex+=t,this.imgDataIndex=this.imgDataIndex<0?0:this.imgDataIndex,this.imgDataIndex=this.imgDataIndex==this.imgData.length?this.imgData.length-1:this.imgDataIndex,this.canvas.putImageData(this.imgData[this.imgDataIndex],0,0)},clear:function(){this.imgData=this.imgData.slice(0,this.imgDataIndex+1),this.imgData.push(this.imgData[0]),this.imgDataIndex=this.imgData.length-1,this.canvas.putImageData(this.imgData[this.imgDataIndex],0,0)},signStatus:function(){var t=1==this.imgData.length||0==this.imgDataIndex;return{status:t,info:t?"未对画布做任何修改":"用户对画布做了修改"}},eleConfirm:function(t,a){return this.$confirm(t,"提示",{type:a}).then(function(){return!0}).catch(function(){return!1})},drawingSure:function(){var t=Object(c["a"])(regeneratorRuntime.mark(function t(){var a,e;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:if(a=this.$refs.canvas.toDataURL(),!this.signStatus().status){t.next=6;break}return t.next=4,this.eleConfirm("未对资源做任何标记确定要保存吗？","warning");case 4:return e=t.sent,t.abrupt("return",e&&this.$emit("closeDrawing",a));case 6:this.$emit("closeDrawing",a);case 7:case"end":return t.stop()}},t,this)}));function a(){return t.apply(this,arguments)}return a}(),drawingCancel:function(){var t=Object(c["a"])(regeneratorRuntime.mark(function t(){var a;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:if(!this.signStatus().status){t.next=2;break}return t.abrupt("return",this.$emit("closeDrawing"));case 2:return t.next=4,this.eleConfirm("确定要丢弃你的标记吗？","warning");case 4:a=t.sent,a&&this.$emit("closeDrawing");case 6:case"end":return t.stop()}},t,this)}));function a(){return t.apply(this,arguments)}return a}()},props:{url:{type:String,default:p.img}}},g=l,A=(e("73ac"),e("2877")),h=Object(A["a"])(g,r,o,!1,null,"459f1835",null),u=h.exports,m={data:function(){return{drawingStatus:!1,drawingUrl:"",imgBase64:""}},methods:{openDrawing:function(t){this.drawingUrl=t,this.drawingStatus=!0},closeDrawing:function(t){this.imgBase64=t,this.drawingStatus=!1}},components:{imgDrawing:u}},k=m,d=(e("109c"),Object(A["a"])(k,n,s,!1,null,"24da692e",null)),S=d.exports,f=(e("affb"),e("3e98"),e("64f3")),v=e.n(f);i["default"].use(v.a),i["default"].config.productionTip=!1,new i["default"]({render:function(t){return t(S)}}).$mount("#app")},6329:function(t,a){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAADv0lEQVRIS63WT2gcZRgG8Of5Ztto/u1OJLUIiopgD+bgQSiptpoG8kciVOgmu/WQZBVRxJNXIXj1JEWUmt2EVrKbFJEqtmJVYqtVKdYiFirSghWhUchsEgxtNjOPTOJuJ9vNdpLsXBZ2GH7zvO/3ft8QNb5SuYXHpMJJkvcLuFDYHuk59nzT3+UMa+kOTs22WS6/ARAF9AXIbkG/GW/7vtFk40zQqhk8ODG/y6J7DkCjRxwcG7BPpLL5N0C9LeGq0bb2IF4T2EeNcc8AaqRMXzoR+6qYLogvW3V7j8br//LvbRkuoVKdodU1OhD9obx9qdzsawAPA7pWMHe1+/iW4CJKoFXSZ5kBuw+kKq2bII5t3Ltp+BaqBoGXCDwhKJfpt5Pr4cPZ/Eukjgj6dVPwGtSgawH2T02u8yXJ9jvhqezsKX+1bxguRzPxlm/90h6c0t13wl/Mze324H4N4MqG4PXQYk+r4alsfr/ofUoh74LtoeHU1Nwj8rxzhBpk0FVMWr6QKuFDk/nnjHAcxILrmt3jh6K/h4JXUfcsQVtGneuhlZIDOAPhSVCL9LBnNNnyS6g5DqKex96xZMzv0co1MiJz7VHnfRB7Hrhst42M0FuDe86PBNsALRLW/uCMV01cDYXE4cn8MQKHIH2eTrT0BMuempjrlvFOEFD5C1dNHAJNExgCMF3fHOs+3MubpW0ygFLoHk3Y06FOp9CocLo+GuurhAJyjdhbCa2YOCzqb5GRefvAkZdZKE/qo1KkcyzR7J9WFa81PQ6P4uOrO2Px6We4vBl0TeLBrPOgob73R6bSYhjOORm/p/6WuGDsF47H6d7eUy15inRVS1p8ZiWxj1rQWZCtFdGs8w6J1wUczfTHBoOHwK3VqyUXVsf4QPR8mK8aDk0ttBq3cEHkDnnsCc7p/3uw1ezm/wE1le63X6kFulLq1ORsH8RPIBQoPjuajJ0O88ZDE/kOGp0iNpa0VOrSGSndIGiFwX3UGJ2UdNOj1Rm2vMFAHM46b5J4y4P6jPAewHur4WtQi/vG4/bFMBW6bQNJ5fLvAnrVM5EdcpcbVla2eE8lvFboao9zzkcCDmT6Y5a/cEqzXIYXUQiLroWOzSYN9Hj2OwIPpRMt95Xmsnj2CjE/uQu4fk991Cjy1AfJpkubKW95j6+QmE8P2I8Xx6cB/7Zanvu04H1IwRO1TPFGrdDVUmedJf+QhviHgJ0gWln+vS04tURX4OGccxHQwxCvA5oB/F/M0OC6PM74/wl1P48l6v/canmDz/8H8UWhAP8CsyUAAAAASUVORK5CYII="},6999:function(t,a){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAADpElEQVRIS8XWT2gcVRwH8O931iRLSN2ZIqYQjFChFWqll14iRihYBPFQ1GSzktSdSSwiSIteeihs1YMXjYVS2rK7iUIyk0g9iHhQQRMPCqJQmkMPtpZqqYHSN/lj1Wbn/WRSJ6RmNjO7HjrHmffe533fv3nEPXp4j1z8L/iVM9KyklvYnTGgyn3mL42EaBp2ptRBiJwAmAtBgcwRLQOV/Ja5NB1oCrY9dZjA6B0QVyjyB8hdgCxoGPvG8uZPSXjDcHFKjVNwkEBN0xga68+5pZIYVx/1ywSKafGG4KKrKiTssJIW+T0jrXvKhY751XQidDy/DMJOg6eGI/RfZI7kYyK4bEhLzxoOwPFungL4aogHBp4c79t6IW7YU8F2mATirDYQ4PhSi/n2lsD/mMSBONz21CiBwxCoICNPxeGJ8HqUYhyrDOTeCf0XpyWzHq9l2no/6mu/FqWzXXWMxFv18E3hemjU+HockKsrRrbnLjxa/QJVI/d+mDcvRXXrwkXPP03IodWCmkerBfPduLlKwh1XHQHxPgRfVgas/ZvCtqtOgHg9CU2b3HHVeRCPB22wxg9YflhvQ2LHVbYQ4Z6kCK5kM+buU31cTjoQNkvueOpTAM/VhZ3JhWfE0J+LyBLBb0k8K8APWcPc1yzeqlce0hJ8DfDX6oC1I3aoHU9dFsg2iNFbzed+tKf8cQJDzeIieh40OgC0g9xf7Te/2gC/PL28LaNXrgtwrpq3XohOo2bxDu1/ZwB7BRDCKFTyOW/9dK3N8eAnSw+23q7NC+RC90VrT6lEvYZ76gzJkbTJi55/iNCnKYRoHK++ZJX+u0buWlyOp2YA9Aow0X3RHFrDAdjuzbNp8DUUhATx6IZVPeIt7tASfA/Caga33YXXwOAkQ1TL0Wpha+zej91OI5NLuzRr34B4oBG8ETQWDl/a04s7GQQzIDrT4Ldq/rBhyGiYlBpvlgvWe0n7vu6RaU/425HRswS7NsMhuCSURxpB6yaOeuucUw9jRWYBdod4td8cBCnR96KrvjCIp1fvARpHqgXrg6SkiT+JqMDQ9K2u+4K/Z0lsh6BayZvDIe64alCIMYABwTcq+dzJtGhi4qih4cnlTm3cniG4E8ANEXaAkoUg3OvnASwmoSRU8Kc5MF7kX6nhsGBhwrey1J+B7GHi9SGmGwKdkUzn2cL9NxqCo1NsyFVPtFK6AOPOJS/t09r2c/n59t9Sz3Hadhst18ygNWrElv8HqGEUPReO82MAAAAASUVORK5CYII="},"721f":function(t,a){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAC6ElEQVRIib2XzUsUcRjHv8/M7LrpojuaUWgH6ZAFgXXpIoTRixXVQShUDFdlgyLoL+jWy8VTdLHNQqJywyIqSgITqVNQ6CHoEEQlEsHurKvmujPzxKw7uzuzKvs2fm/PwzO/z+8387z8Bk5oYGyp0R+K7d1oaSo390JoqUHS4tNEqAPzW9ErdwydpiV7nFBusFtbaU1CDRG1qwuR8d777HEcLLhdUwDCpk1ErYJHeW2Hlx081FE1p4OOAhzNwHHYDi/7Nzblf6IcEKBPAFRj+pgxoS/7Tj3w03Je4EAoXMOqq1GV1K2ilv9mGXQQxLcsPsZETPSdWHeRwNjijkQi3icA3QDtyReW3454NAfc/ZCrKyTlGpgvE1FONpZJqgXc/ziyH4QxAE0OAZNi8Hga3PtovlkU1E8AeW1B/8CYAdFXAn4xg/MFEFE9wJcs66W+sWQYgZdcqS0qryxQRoKBG9K8fH3oIiUKPZU/FKuHlpgiyrxUM6uf+mklCVYXIleJaFfWvhZYoDPD5+X3hQIN9YeitbwKbbZDjVIybDKSySNFfqbrjaETU3uwy/euGGjPs9g294o6DqBlPaghwSMqZy1FThwsFmqoIq61WaH8wQ5NgkHosDh03CkWCrNXM/9OmVOSVz5uhyLVq9PNgYG/wa7amVLARq/+vl1uAomtldW+Y2uNREMSMzdkZd6PUqCmJttInQQ+bhQjEGXqkgqo0VIlMNOcuQaTsx0rW0ZyfTNtAup7Q+F9mwIm8BuLQ8OVTQEnBM8Loz2mPUQDfaPKEcfBI+cqZ5l4MM010Kw/94cih5wEJ+uoZ4Sr3G5lGkCmX6eGRFWN7+btkxR3BIzUWBQE9TOBtmQHlDIWV59HWGTXaLDL+2dNMBy8CDB4VorKTdnj1XK9vdcpf1lWfS0MDDJzTn8tVgRq0OVo47onzlbqV6QPxN0E2l3SiZnvDnfWBvICZ8u43mq6a6cuqHWFXG9T1HDO4AHwH021OZXlWPRzAAAAAElFTkSuQmCC"},"73ac":function(t,a,e){"use strict";var i=e("a3dd"),n=e.n(i);n.a},a3dd:function(t,a,e){},affb:function(t,a,e){},e978:function(t,a){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAC00lEQVRIS72XvU8TcRjHv09/1xbBQmmiDkYTVqKQGGHRYCAaXFwkFjCGwFFZjLvK5mD8BzShgWIkQGnioKIQXVxx8G0RNcggxgTl7koLIm3vMeWlXmmvXIvtjb/f8zyfu+f9CDmenlCkVgixPNhWvpBLrpA7yqbU95TLE1H1EYjOM2MpLpz1D73l3wsBmOlkgLuHucxWpr4kotPbSsTUMdjpnigaeBOqPSNCiwGiCLvjmL+t4kdRwNmhHNZhaxnucL/5n9CkrQ1Xlxq6Ab4UYocroU3tcC/AdIPAM1a/NCHAUlz6RVJswe/1hHfTo95xJQii9t0E87vnjzowarc7A2a5Qb1BNQZAys+wNWlmXgPRvT9x9+3RK7Rs1CI5qEwTqNWaqYKl5sFoG+qsfpsqUdMYg+4z80+rKCIQA0fAXAtCHYH2petyNKFLDQ8uV87mzGpmnmVhbxr2uizDt0F9A2yPV2r9BNwCwW54gTlR4a7zX6DVVOfKVlJJOAlxashbpVj9cqOcPKE2E/MTgPZvnzNzf6DTcyetZZp0rnfrDql15KJrsRC4b0w7x8TTINg29Tm8Fq8+WpJeLQeVAQL1pV6c0WU+nVa0KQBNYF4QDmfjXnq1b0ypYxu9N3jscVZwUuD6c3auRiIn5w66Zl41U7wQN6fFO6guEnBg6+yzKXivoJ36clB9TUDDRpSZV0oG7h1XZ0Bo3EqwaMnAssHVzPhSEnB3SDkudPqQqmVgsiRgeVzxE9HVf3Hna0UHyxPaWTC/oK2lA4xYTDhrigruCalnbDpPprVM8N1Ah+dmUcDJHrAS1pLGM4bE+rq7fqSLMsvJNxY9lKBYOwGefGp5t7HI4N+6Lp1IG4tp46xKnSfQ4XygFmQzFwGjki+k1bDOXy0YsiSSc/XJaG0ZqW+JkSbE4E9gGo0LZ8Ds1ydrciWnCYjyinFyvbXp0pKwxb5ZWW//AqCdQ94qgEkBAAAAAElFTkSuQmCC"},f224:function(t,a){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACMAAAAeCAYAAACmPacqAAABRElEQVRYR+2XP0vDUBTFzwmNo7S4OFUQHBx0dRI62EEEF0FwcUhc9Cu4ZBD8Bro5miCIIJ2KUOjm3EkRFyeh9KWrkRypk4tDegtRyJvv+XG4/7iPYey6INoo+QnoMIjdkMRCyV4AYcggGW9D+UbpZug9snQTPwxUZn6rRpWZKjNFJ5XhrVtCpguBWwTmigKs8QI+CD3A5wnDxPUAtKxQq15Aj0E8GpOct8Lseo3/VmYOb0ZNP8dl2T2TeTiull619IpOWNUz/6dnokje26rbyYV1in7RWk8bLyqjOGg+1TtRxJytnmrL72lCYG9aqFUn4e51sb7PMEnPAJ1agWa9eD75Nz2TWDHD7IAXhrEbgWjYWTaCgHRipg9i04aaibrPo+u0LU/dmeAsEH1fmkAQu10CEYg1ADULs6D2E8JAQHR10Lj/Ali2a7PQEcTiAAAAAElFTkSuQmCC"},f3d9:function(t,a){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAACXklEQVRIS+2Xy2sTURTGvzOTB7ZpmXFVikZUsFn4ABdFcCFFF7oQkWBILFYzqXRT9S8Qg3+BoqjE5oFgMo1vNwoudKVCN13UhRuJVnAjmUlSgo/kHhklIY01TaPTgDrLud89v3PunPk4l9Clh7rEha3gE+miT6bKWbesTlwJ0EJjkbaCI3p+EqBLguXdyVD/8//gP9Zf41lzI6q8oRZQAIeJcJqZJyXQq9r7z1+VGdKmjREwHhPgYnBJMG1nItkBMQuQpyZmYCYRVIc13RgDkCIsaszz8aB6TsvkC0TUv1wlzLhHEd2cAPgagIsMvCtJyuUBD6hcKJxicAOY5pIh5fZYNu91VOk4APk7QAILwoNUQJ2N6IUgs/DVwcTDBDoARoKB+XoRMp7+qFhgyuFRtsUOUnm5bFey3rKro1GWckOmNxVScysJ2o62JTisG2EJiPEaZW3iEJXaCdiupiU4ohtnAFyQna7BmL/3Q7tB29Fp0+Y+Yn7CVdqcGFXeLDIQO8EWaPxOed2Uv+d9c6JkN/hXJ/N3gsO6uZNY3P8kpB3pUcVYtW8c0c0jAGcl4dh6/Whf3TKtBGw96n8QnC7shyQeCXZ7k6GeulfbftQWQLtpbmo2D9vBx25wr9Np7k2E1IeraiBaxrAGgbvkdK9vdq/udzUBfjDy7Zh/s4YliCIpL28F6MtJvbiFuTpoaYSEPcSILv0fZwwNhHgnwMY91lzlfa1enfeZ1jDhblxbsqutQeDtUGmXjKqrU3gFXM0NqC+ejVClsWIrHpPjYzzYN/dTc3UK+919tt4kWiX3DVeLURYMgITMAAAAAElFTkSuQmCC"},fa94:function(t,a,e){}});
//# sourceMappingURL=app.128a6948.js.map