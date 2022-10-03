(function(e){function t(t){for(var s,l,o=t[0],r=t[1],c=t[2],d=0,p=[];d<o.length;d++)l=o[d],Object.prototype.hasOwnProperty.call(a,l)&&a[l]&&p.push(a[l][0]),a[l]=0;for(s in r)Object.prototype.hasOwnProperty.call(r,s)&&(e[s]=r[s]);u&&u(t);while(p.length)p.shift()();return n.push.apply(n,c||[]),i()}function i(){for(var e,t=0;t<n.length;t++){for(var i=n[t],s=!0,o=1;o<i.length;o++){var r=i[o];0!==a[r]&&(s=!1)}s&&(n.splice(t--,1),e=l(l.s=i[0]))}return e}var s={},a={app:0},n=[];function l(t){if(s[t])return s[t].exports;var i=s[t]={i:t,l:!1,exports:{}};return e[t].call(i.exports,i,i.exports,l),i.l=!0,i.exports}l.m=e,l.c=s,l.d=function(e,t,i){l.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:i})},l.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},l.t=function(e,t){if(1&t&&(e=l(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var i=Object.create(null);if(l.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var s in e)l.d(i,s,function(t){return e[t]}.bind(null,s));return i},l.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return l.d(t,"a",t),t},l.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},l.p="/dynamic-search-demo/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],r=o.push.bind(o);o.push=t,o=o.slice();for(var c=0;c<o.length;c++)t(o[c]);var u=r;n.push([0,"chunk-vendors"]),i()})({0:function(e,t,i){e.exports=i("56d7")},"08cc":function(e,t,i){"use strict";i("2fae")},"0c68":function(e,t,i){},"2b79":function(e,t,i){"use strict";i("43a2")},"2fae":function(e,t,i){},"3f34":function(e,t,i){},"3fe4":function(e,t,i){},"43a2":function(e,t,i){},"56d7":function(e,t,i){"use strict";i.r(t);var s=i("2b0e"),a=function(){var e=this,t=e._self._c;return t("div",{attrs:{id:"app"}},[t("BaseCard",[t("div",{staticClass:"is-flex is-justify-content-center is-flex-grow-0 mb-5"},[t("div",[t("h1",{class:"typer has-text-weight-semibold is-size-5 is-family-monospace "+(e.tryIt?"border-none":"")},[e._v(" Dynamic Search Component ")])])]),t("Search",{ref:"search",attrs:{"init-config":e.config},on:{search:e.setResult}}),t("div",{staticClass:"mt-4 action__buttons"},[t("b-button",{attrs:{type:"is-success"},on:{click:e.toggleTryIt}},[e._v(" "+e._s(e.tryIt?"Back to Demo":"Try it")+" ")]),t("a",{attrs:{target:"_blank",href:"https://github.com/tsengm6h6/dynamic-search-demo"}},[t("b-button",{attrs:{type:"is-info",outlined:"","icon-right":"github"}},[e._v(" View Code ")])],1)],1),t("div",[t("div",{staticClass:"columns is-multiline"},[e.tryIt?t("ConfigForm",{staticClass:"column is-4",on:{"use-config":e.changeConfig}}):e._e(),t("CodeDisplay",{class:"column "+(e.tryIt?"is-4":"is-6"),attrs:{title:"Config",list:e.config}}),t("CodeDisplay",{class:"column "+(e.tryIt?"is-4":"is-6"),attrs:{title:"Result",list:e.result}})],1)])],1)],1)},n=[],l=function(){var e=this,t=e._self._c;return t("div",{staticClass:"py-4 px-2"},[t("div",{staticClass:"card is-flex-grow-1"},[t("div",{staticClass:"card-content"},[e._t("default")],2)])])},o=[],r={name:"Card"},c=r,u=i("2877"),d=Object(u["a"])(c,l,o,!1,null,null,null),p=d.exports,h=function(){var e=this,t=e._self._c;return t("div",{staticClass:"search__wrapper"},[t("div",{staticClass:"search__field-outline"},[t("div",{staticClass:"search__field-inner"},[e._l(e.selectedConfig,(function(i){return t("SearchOptionField",{key:i.id,attrs:{initFieldConfig:i,"avalible-options":e.getAvalibleOptions(i),"custom-class":"search__option reset__position "+(i.isEdit&&i.value?"edit":"")},on:{"field-changed":function(t){return e.onFieldChanged(t,"CHANGE")},"remove-option-key":function(t){return e.onFieldChanged(t,"REMOVE")}}})})),e.selectOptionKey?t("BaseAutocomplete",{attrs:{placeholder:"Click to start search",options:e.optionKeyitems,autofocus:e.selectedConfig.length>0,"custom-class":"search__autocomplete reset__position"},on:{select:e.onKeySelected}}):e._e()],2),t("div",{class:"search__field-reset "+(e.selectedConfig.length>0?"":"hidden"),on:{click:e.reset}},[t("b-icon",{attrs:{icon:"close-circle-outline",type:"is-primary"}})],1)]),t("SearchButton",{attrs:{disabled:!e.allowSearch},on:{search:e.search}})],1)},f=[],m=(i("14d9"),function(){var e=this,t=e._self._c;return t("b-button",{staticClass:"search__button",attrs:{type:"is-primary","icon-left":"magnify",disabled:e.$attrs.disabled},on:{click:function(t){return t.stopPropagation(),t.preventDefault(),e.$emit("search")}}})}),y=[],b={name:"SearchButton"},v=b,g=(i("2b79"),Object(u["a"])(v,m,y,!1,null,"24ea51aa",null)),C=g.exports,_=function(){var e=this,t=e._self._c;return t("b-field",{class:e.customClass,attrs:{label:e.label}},[t("b-autocomplete",e._b({ref:"autocomplete",attrs:{placeholder:e.placeholder,"keep-first":"","open-on-focus":"",data:e.filteredDataObj,field:"display"},on:{select:e.onSelect},scopedSlots:e._u([{key:"empty",fn:function(){return[e._v(" No results found ")]},proxy:!0}]),model:{value:e.input,callback:function(t){e.input=t},expression:"input"}},"b-autocomplete",e.$attrs,!1))],1)},k=[],w={name:"BaseAutocomplete",props:{label:{type:String,default:""},value:{type:[String,Number],default:""},options:{type:Array,default:()=>[]},customClass:{type:[String,Array],default:""},placeholder:{type:String,default:"Click to start search"}},data(){return{input:"",selected:null}},watch:{options(){this.init()},value:{handler(){this.init()},immediate:!0}},computed:{filteredDataObj(){return this.options.filter(e=>e.display.toString().toLowerCase().indexOf(this.input.toLowerCase())>=0)}},methods:{init(){var e,t;this.selected=(null===(e=this.options)||void 0===e?void 0:e.find(e=>e.value===this.value))||null,this.input=(null===(t=this.selected)||void 0===t?void 0:t.display)||""},onSelect(e){this.selected=e,this.$emit("select",e),this.$emit("save-field",e.value)}},mounted(){this.$attrs.autofocus&&this.$refs.autocomplete.focus()}},O=w,A=Object(u["a"])(O,_,k,!1,null,null,null),S=A.exports,x=function(){var e=this,t=e._self._c;return t("div",{class:""+(e.config.isEdit?e.customClass:"")},[e.config.isEdit?t("div",{staticClass:"control field__wrapper",class:e.customClass},[t("b-tag",{attrs:{type:"is-primary","aria-close-label":"Close tag",closable:""},on:{close:function(t){return e.$emit("remove-option-key",e.config)}}},[e._v(" "+e._s(e.config.label)+" ")]),t("div",{staticClass:"field__component"},[t("base-"+e.config.type,e._b({tag:"component",attrs:{value:e.config.value,options:e.useOptions||[]},on:{"save-field":e.handleFieldSave}},"component",e.config.attrs,!1))],1)],1):t("div",{staticClass:"control tag__wrapper",on:{dblclick:function(t){return e.edit(e.config)}}},[t("b-taglist",{attrs:{attached:""}},[t("b-tag",{attrs:{type:"is-dark"}},[e._v(e._s(e.config.label))]),t("b-tag",{attrs:{type:"is-info",closable:""},on:{close:function(t){return e.$emit("remove-option-key",e.config)}}},[e._v(e._s(e.config.display))])],1)],1)])},$=[],j=function(){var e=this,t=e._self._c;return t("b-field",{attrs:{type:e.invalid?"is-danger":"",message:e.invalid?e.invalidMessage:"",label:e.label}},[t("b-input",e._b({ref:"input",nativeOn:{keydown:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.onKeyDown.apply(null,arguments)}},model:{value:e.currValue,callback:function(t){e.currValue=t},expression:"currValue"}},"b-input",e.$attrs,!1))],1)},M=[],P={name:"BaseInput",inheritAttrs:!1,props:{label:{type:String,default:""},value:{type:String,default:""},invalid:{type:Boolean,default:!1},invalidMessage:{type:String,default:"Required"}},computed:{currValue:{get(){return this.value},set(e){this.$emit("input",e)}}},methods:{onKeyDown(e){e.target.value.trim()&&this.$emit("save-field",e.target.value.trim())}},mounted(){this.$attrs.autofocus&&this.$refs.input.focus()}},F=P,I=Object(u["a"])(F,j,M,!1,null,null,null),E=I.exports,B={name:"SearchOptionField",components:{BaseInput:E,BaseAutocomplete:S},props:{initFieldConfig:{type:Object,default:()=>{}},customClass:{type:[String,Array],default:""},avalibleOptions:{type:Array,default:()=>{}}},computed:{config:{get(){return{...this.initFieldConfig,attrs:{...this.initFieldConfig.attrs,autofocus:!0}}},set(e){this.$emit("field-change",e)}},displayValue(){var e,t;return(null===(e=this.config.optoins)||void 0===e||null===(t=e.find(e=>e.value===this.config.value))||void 0===t?void 0:t.display)||this.config.value||""},useOptions(){return this.initFieldConfig.multiple?this.avalibleOptions:this.initFieldConfig.options}},methods:{handleFieldSave(e){var t,i;const s=(null===(t=this.config.options)||void 0===t||null===(i=t.find(t=>t.value===e))||void 0===i?void 0:i.display)||e||"",a={...this.config,isEdit:!1,value:e,display:s};this.$emit("field-changed",a)},edit(){this.$emit("field-changed",{...this.config,isEdit:!0})}}},D=B,z=(i("ea59"),Object(u["a"])(D,x,$,!1,null,"21a61723",null)),L=z.exports,K=i("2ef0"),V={name:"Search",components:{SearchButton:C,BaseAutocomplete:S,SearchOptionField:L},props:{initConfig:{type:Array,default:()=>[]}},data(){return{config:[],multipleConfig:[],selectedConfig:[],selectOptionKey:!0}},watch:{initConfig(e){this.init(e)}},computed:{optionKeyitems(){return this.config.map(e=>({value:e.key,display:e.label}))},multipleSelectedPair(){const e={};return this.multipleConfig.forEach(t=>{const i=this.selectedConfig.filter(e=>e.key===t)||[],s=i.map(e=>e.value)||[];e[t]=s||[]}),e},allowSearch(){return 0===this.selectedConfig.length||this.selectedConfig.some(({key:e,value:t})=>e&&t)}},created(){this.init(this.initConfig)},methods:{init(e){this.config=Object(K["cloneDeep"])(e),this.multipleConfig=Object(K["chain"])(this.config).filter(({multiple:e})=>e).map(({key:e})=>e).uniq().value()||[]},onKeySelected(e){const{value:t}=e,i=this.config.findIndex(e=>e.key===t);this.selectedConfig.push({...this.config[i],isEdit:!0,id:Math.random().toString(36).substr(2,9)}),this.selectOptionKey=!1},onFieldChanged(e,t){const{id:i,key:s}=e;this.updateSelectedConfig(i,e,t),this.updateConfig(s),e.isEdit&&e.value&&"REMOVE"!==t?this.selectOptionKey=!1:this.selectOptionKey=!0},updateSelectedConfig(e,t,i="CHANGE"){const s=this.selectedConfig.findIndex(t=>t.id===e);"REMOVE"===i?this.selectedConfig.splice(s,1):this.selectedConfig.splice(s,1,t)},updateConfig(e){const t=this.config.findIndex(t=>t.key===e);if(t>-1){const e=this.multipleIsFullSelected(t);e&&this.config.splice(t,1)}else{const t=this.initConfig.find(t=>t.key===e);this.config.push(t)}},multipleIsFullSelected(e){const{multiple:t,options:i,key:s}=this.config[e];return!t||i&&i.length===this.multipleSelectedPair[s].length},reset(){this.selectedConfig=[],this.config=Object(K["cloneDeep"])(this.initConfig),this.selectOptionKey=!0,this.$emit("search",[])},search(){const e=[];this.selectedConfig.forEach(t=>{t.multiple?this.formatMultipleParams(e,t):e.push(Object(K["pick"])(t,["key","value"]))}),this.$emit("search",e)},formatMultipleParams(e,t){const i=e.findIndex(e=>e.key===t.key);return i>-1?e.splice(i,1,{...e[i],value:[...e[i].value,t.value]}):e.push({key:t.key,value:[t.value]}),e},getAvalibleOptions({key:e,multiple:t,isEdit:i,value:s}){var a;const n=(null===(a=this.config.find(({key:t})=>t===e))||void 0===a?void 0:a.options)||[],l=n.filter(i=>{var s;return t?!(null!==(s=this.multipleSelectedPair[e])&&void 0!==s&&s.includes(i.value)):i}),o=n.find(e=>e.value===s);return s&&i?l.concat(o):l}}},R=V,N=(i("7492"),Object(u["a"])(R,h,f,!1,null,"41c1b7f3",null)),T=N.exports,q=function(){var e=this,t=e._self._c;return t("div",{staticClass:"mt-4"},[t("h1",{staticClass:"has-text-weight-semibold is-size-5 mb-2"},[e._v(e._s(e.title))]),t("pre",{staticClass:"display-height"},[e._v(e._s(e.list))])])},X=[],G={name:"CodeDisplay",props:{title:{type:String,default:""},list:{type:Array,default:()=>[]}}},H=G,J=(i("08cc"),Object(u["a"])(H,q,X,!1,null,"79c82d36",null)),W=J.exports,U=function(){var e=this,t=e._self._c;return t("div",{staticClass:"mt-4 p-5"},[t("h1",{staticClass:"has-text-weight-semibold is-size-5 mb-2"},[e._v("Enter your config")]),t("section",{staticClass:"attrs__height"},[t("BaseInput",{attrs:{label:"Key",invalid:this.invalidList.includes("key"),placeholder:"Input a config key"},model:{value:e.form.key,callback:function(t){e.$set(e.form,"key",t)},expression:"form.key"}}),t("BaseInput",{attrs:{label:"Label",invalid:this.invalidList.includes("label"),placeholder:"Input a config label"},model:{value:e.form.label,callback:function(t){e.$set(e.form,"label",t)},expression:"form.label"}}),t("BaseSelect",{attrs:{label:"Type",expanded:"",options:e.typeOptions,invalid:this.invalidList.includes("type"),placeholder:"Select a search type"},model:{value:e.form.type,callback:function(t){e.$set(e.form,"type",t)},expression:"form.type"}}),"autocomplete"===e.form.type?t("OptionField",{attrs:{options:e.form.options},on:{"add-option":e.addOption},model:{value:e.newOption,callback:function(t){e.newOption=t},expression:"newOption"}}):e._e(),t("AttributeField",{attrs:{attributes:e.form.attrs},on:{"ready-to-save":function(t){e.readyToSave=t},"change-attrs":e.changeAttribute}}),t("BaseInput",{attrs:{disabled:"",label:"Value",placeholder:"Input a config value"},model:{value:e.form.value,callback:function(t){e.$set(e.form,"value",t)},expression:"form.value"}}),t("div",{staticClass:"block mb-4"},[t("b-field",{attrs:{label:"Multiple"}},[t("b-radio",{attrs:{"native-value":"true"},model:{value:e.form.multiple,callback:function(t){e.$set(e.form,"multiple",t)},expression:"form.multiple"}},[e._v(" True ")]),t("b-radio",{attrs:{"native-value":"false"},model:{value:e.form.multiple,callback:function(t){e.$set(e.form,"multiple",t)},expression:"form.multiple"}},[e._v(" False ")])],1)],1)],1),t("div",{staticClass:"buttons is-pulled-right"},[t("b-button",{attrs:{type:"is-success",outlined:""},on:{click:e.resetConfig}},[e._v("Reset Config")]),t("b-button",{attrs:{type:"is-success",disabled:e.disabledAddConfig},on:{click:e.addConfig}},[e._v("Add Config")])],1)])},Y=[],Q=function(){var e=this,t=e._self._c;return t("b-field",{attrs:{type:e.invalid?"is-danger":"",message:e.invalid?e.invalidMessage:"",label:e.label}},[t("b-select",e._b({model:{value:e.currValue,callback:function(t){e.currValue=t},expression:"currValue"}},"b-select",e.$attrs,!1),e._l(e.options,(function(i){return t("option",{key:i.value,domProps:{value:i.value}},[e._v(" "+e._s(i.display)+" ")])})),0)],1)},Z=[],ee={name:"BaseSelect",inheritAttrs:!1,props:{label:{type:String,default:""},value:{type:[String,Number],default:""},options:{type:Array,default:()=>[]},invalid:{type:Boolean,default:!1},invalidMessage:{type:String,default:"Required"}},computed:{currValue:{get(){return this.value},set(e){this.$emit("input",e)}}}},te=ee,ie=Object(u["a"])(te,Q,Z,!1,null,null,null),se=ie.exports,ae=i("ec26"),ne=function(){var e=this,t=e._self._c;return t("div",[e.options.length>0?t("div",{staticClass:"mb-2 option__fields"},e._l(e.options,(function(i){return t("b-field",{key:i.value,attrs:{grouped:""}},[t("b-input",{attrs:{disabled:"",expanded:""},model:{value:i.display,callback:function(t){e.$set(i,"display",t)},expression:"option.display"}})],1)})),1):e._e(),t("b-field",{attrs:{type:e.newOptionMessage?"is-danger":"",message:e.newOptionMessage?e.newOptionMessage:"",grouped:""}},[t("b-input",{attrs:{expanded:"",placeholder:"Option..."},model:{value:e.currValue,callback:function(t){e.currValue=t},expression:"currValue"}}),t("p",{staticClass:"control"},[t("b-button",{attrs:{label:"Add",type:"is-primary"},on:{click:e.addOption}})],1)],1)],1)},le=[],oe={name:"OptionField",props:{options:{type:Array,default:()=>[]},value:{type:[String,Number],default:""}},data(){return{newOptionMessage:""}},computed:{currValue:{get(){return this.value},set(e){this.$emit("input",e)}}},methods:{addOption(){this.value?(this.$emit("add-option"),this.newOptionMessage=""):this.newOptionMessage="Required"}}},re=oe,ce=Object(u["a"])(re,ne,le,!1,null,null,null),ue=ce.exports,de=function(){var e=this,t=e._self._c;return t("div",[e.attrOptions.length>0?t("b-field",{staticClass:"pr-3",attrs:{label:"Attributes"}},[t("b-select",{attrs:{expanded:"",placeholder:"Attrs. key"},model:{value:e.newAttr.key,callback:function(t){e.$set(e.newAttr,"key",t)},expression:"newAttr.key"}},e._l(e.attrOptions,(function(i){return t("option",{key:i.value,domProps:{value:i.value}},[e._v(" "+e._s(i.display)+" ")])})),0),t("b-input",{attrs:{expanded:"",disabled:!e.newAttr.key,placeholder:"Attrs. value"},model:{value:e.newAttr.value,callback:function(t){e.$set(e.newAttr,"value",t)},expression:"newAttr.value"}}),t("div",{staticClass:"control"},[t("b-button",{attrs:{"icon-right":"plus",type:"is-primary",disabled:!e.newAttr.key||!e.newAttr.value},on:{click:function(t){return e.addAttribute()}}})],1)],1):e._e(),t("div",{staticClass:"attr__field mb-4 pr-3"},e._l(e.currentAttrs,(function(i,s,a){return t("b-field",{key:s,attrs:{expanded:"",label:0===e.attrOptions.length&&0===a?"Attributes":""}},[t("b-select",{attrs:{expanded:"",disabled:"",value:s,placeholder:"Attrs. key"}},e._l(e.originAttributes,(function(i){return t("option",{key:i.value,domProps:{value:i.value}},[e._v(" "+e._s(i.display)+" ")])})),0),t("b-input",{attrs:{value:i,disabled:"",placeholder:"Attrs. value",expanded:""}}),t("div",{staticClass:"control"},[t("b-button",{attrs:{"icon-right":"delete",type:"is-primary",outlined:""},on:{click:function(t){return e.removeAttribute(s)}}})],1)],1)})),1)],1)},pe=[],he={name:"AttrField",props:{attributes:{type:Object,default:()=>[]}},data(){return{newAttr:{key:null,value:null},originAttributes:[{value:"placeholder",display:"Placeholder"},{value:"min",display:"MMMMin"},{value:"max",display:"MAXXX"},{value:"max11",display:"MAXXX222"},{value:"max33",display:"MAXXX44"}]}},watch:{"newAttr.value":{handler(e){e?this.$emit("ready-to-save",!1):this.$emit("ready-to-save",!0)}}},computed:{attrOptions(){return this.originAttributes.filter(({value:e})=>!this.selected.includes(e))||[]},selected(){return Object.keys(this.attributes)||[]},currentAttrs:{get(){return this.attributes},set(e){this.$emit("change-attrs",e)}}},methods:{addAttribute(){this.newAttr.key&&this.newAttr.value&&(this.currentAttrs={...this.currentAttrs,[this.newAttr.key]:this.newAttr.value},this.newAttr={key:null,value:null},this.$emit("ready-to-save",!0))},removeAttribute(e){const t={...this.currentAttrs};delete t[e],this.currentAttrs={...t}}}},fe=he,me=(i("9abc"),Object(u["a"])(fe,de,pe,!1,null,"972fd71c",null)),ye=me.exports;const be={key:"",label:"",type:null,value:null,options:[],multiple:!1,attrs:{}};var ve={name:"ConfigFrom",components:{BaseInput:E,BaseSelect:se,OptionField:ue,AttributeField:ye},data(){return{form:Object(K["cloneDeep"])(be),typeOptions:[{value:"input",display:"Input"},{value:"autocomplete",display:"Autocomplete"}],newOption:"",config:[],invalidList:[],readyToSave:!0}},computed:{requiredField(){return{key:!0,label:!0,type:!0,value:!1,options:"autocomplete"===this.form.type,multiple:!0,attrs:!1}},disabledAddConfig(){return"autocomplete"===this.form.type&&0===this.form.options.length||!this.readyToSave}},methods:{addOption(){this.newOption?(this.form.options.push({value:Object(ae["a"])(),display:this.newOption}),this.newOption=""):this.showAlert({message:"Option is required !"})},changeAttribute(e){this.form.attrs=e},addConfig(){const e=this.validate();e?(this.config.push(this.form),this.$emit("use-config",this.config),this.resetForm()):this.showAlert({message:"Please fillin required fields."})},resetConfig(){this.$emit("use-config",[]),this.resetForm()},resetForm(){this.form=Object(K["cloneDeep"])(be)},validate(){return this.invalidList=[],Object.keys(this.form).forEach(e=>{"boolean"!==typeof this.form[e]&&(Array.isArray(this.form[e])?this.requiredField[e]&&0===this.form[e].length&&(this.showAlert({message:"Autocomplete is required at least one option"}),this.invalidList.push(e)):this.requiredField[e]&&!this.form[e]&&this.invalidList.push(e))}),0===this.invalidList.length},showAlert({message:e,type:t="is-warning"}){this.$buefy.snackbar.open({message:e,type:t,position:"is-top",actionText:"Got it",duration:3500,onAction:()=>{}})}}},ge=ve,Ce=(i("cfba"),Object(u["a"])(ge,U,Y,!1,null,"2d24c35d",null)),_e=Ce.exports,ke=i("db41");ke.map(e=>({value:e.id,display:e.name}));const we=ke.map(e=>({value:e.id,display:e.username})).splice(0,3),Oe=(ke.map(e=>({value:e.id,display:e.email})),ke.map(e=>({value:e.id,display:`${e.address.zipcode}, ${e.address.street}, ${e.address.city}, ${e.address.suite}`}))),Ae=ke.map(e=>({value:e.id,display:e.phone})),Se=(ke.map(e=>({value:e.id,display:e.website})),ke.map(e=>({value:e.id,display:e.company.name})),[{key:"name",label:"Name",type:"input",value:null,attrs:{placeholder:"Enter a Name"},multiple:!0},{key:"userName",label:"User Name",type:"autocomplete",value:null,attrs:{placeholder:"Input or select a userName"},multiple:!0,options:we},{key:"phone",label:"Phone",type:"autocomplete",value:null,options:Ae},{key:"address",label:"Address",type:"autocomplete",value:null,options:Oe}]);var xe={name:"App",components:{BaseCard:p,Search:T,CodeDisplay:W,ConfigForm:_e},data(){return{useConfig:"one",config:Se,result:[],tryIt:!1}},methods:{changeConfig(e){this.config=e,this.$refs.search.reset(),this.result=[]},setResult(e){this.result=e},toggleTryIt(){this.tryIt=!this.tryIt,this.config=this.tryIt?[]:Se,this.reset()},reset(){this.$refs.search.reset(),this.result=[]}}},$e=xe,je=(i("cdeb"),Object(u["a"])($e,a,n,!1,null,"67063ceb",null)),Me=je.exports,Pe=i("289d");i("73ec");s["a"].use(Pe["a"]),s["a"].config.productionTip=!1,new s["a"]({render:e=>e(Me)}).$mount("#app")},"73ec":function(e,t,i){},7492:function(e,t,i){"use strict";i("9a50")},"9a50":function(e,t,i){},"9abc":function(e,t,i){"use strict";i("0c68")},cdeb:function(e,t,i){"use strict";i("d5b7")},cfba:function(e,t,i){"use strict";i("3fe4")},d5b7:function(e,t,i){},db41:function(e){e.exports=JSON.parse('[{"id":1,"name":"Leanne Graham","username":"Bret","email":"Sincere@april.biz","address":{"street":"Kulas Light","suite":"Apt. 556","city":"Gwenborough","zipcode":"92998-3874","geo":{"lat":"-37.3159","lng":"81.1496"}},"phone":"1-770-736-8031 x56442","website":"hildegard.org","company":{"name":"Romaguera-Crona","catchPhrase":"Multi-layered client-server neural-net","bs":"harness real-time e-markets"}},{"id":2,"name":"Ervin Howell","username":"Antonette","email":"Shanna@melissa.tv","address":{"street":"Victor Plains","suite":"Suite 879","city":"Wisokyburgh","zipcode":"90566-7771","geo":{"lat":"-43.9509","lng":"-34.4618"}},"phone":"010-692-6593 x09125","website":"anastasia.net","company":{"name":"Deckow-Crist","catchPhrase":"Proactive didactic contingency","bs":"synergize scalable supply-chains"}},{"id":3,"name":"Clementine Bauch","username":"Samantha","email":"Nathan@yesenia.net","address":{"street":"Douglas Extension","suite":"Suite 847","city":"McKenziehaven","zipcode":"59590-4157","geo":{"lat":"-68.6102","lng":"-47.0653"}},"phone":"1-463-123-4447","website":"ramiro.info","company":{"name":"Romaguera-Jacobson","catchPhrase":"Face to face bifurcated interface","bs":"e-enable strategic applications"}},{"id":4,"name":"Patricia Lebsack","username":"Karianne","email":"Julianne.OConner@kory.org","address":{"street":"Hoeger Mall","suite":"Apt. 692","city":"South Elvis","zipcode":"53919-4257","geo":{"lat":"29.4572","lng":"-164.2990"}},"phone":"493-170-9623 x156","website":"kale.biz","company":{"name":"Robel-Corkery","catchPhrase":"Multi-tiered zero tolerance productivity","bs":"transition cutting-edge web services"}},{"id":5,"name":"Chelsey Dietrich","username":"Kamren","email":"Lucio_Hettinger@annie.ca","address":{"street":"Skiles Walks","suite":"Suite 351","city":"Roscoeview","zipcode":"33263","geo":{"lat":"-31.8129","lng":"62.5342"}},"phone":"(254)954-1289","website":"demarco.info","company":{"name":"Keebler LLC","catchPhrase":"User-centric fault-tolerant solution","bs":"revolutionize end-to-end systems"}},{"id":6,"name":"Mrs. Dennis Schulist","username":"Leopoldo_Corkery","email":"Karley_Dach@jasper.info","address":{"street":"Norberto Crossing","suite":"Apt. 950","city":"South Christy","zipcode":"23505-1337","geo":{"lat":"-71.4197","lng":"71.7478"}},"phone":"1-477-935-8478 x6430","website":"ola.org","company":{"name":"Considine-Lockman","catchPhrase":"Synchronised bottom-line interface","bs":"e-enable innovative applications"}},{"id":7,"name":"Kurtis Weissnat","username":"Elwyn.Skiles","email":"Telly.Hoeger@billy.biz","address":{"street":"Rex Trail","suite":"Suite 280","city":"Howemouth","zipcode":"58804-1099","geo":{"lat":"24.8918","lng":"21.8984"}},"phone":"210.067.6132","website":"elvis.io","company":{"name":"Johns Group","catchPhrase":"Configurable multimedia task-force","bs":"generate enterprise e-tailers"}},{"id":8,"name":"Nicholas Runolfsdottir V","username":"Maxime_Nienow","email":"Sherwood@rosamond.me","address":{"street":"Ellsworth Summit","suite":"Suite 729","city":"Aliyaview","zipcode":"45169","geo":{"lat":"-14.3990","lng":"-120.7677"}},"phone":"586.493.6943 x140","website":"jacynthe.com","company":{"name":"Abernathy Group","catchPhrase":"Implemented secondary concept","bs":"e-enable extensible e-tailers"}},{"id":9,"name":"Glenna Reichert","username":"Delphine","email":"Chaim_McDermott@dana.io","address":{"street":"Dayna Park","suite":"Suite 449","city":"Bartholomebury","zipcode":"76495-3109","geo":{"lat":"24.6463","lng":"-168.8889"}},"phone":"(775)976-6794 x41206","website":"conrad.com","company":{"name":"Yost and Sons","catchPhrase":"Switchable contextually-based project","bs":"aggregate real-time technologies"}},{"id":10,"name":"Clementina DuBuque","username":"Moriah.Stanton","email":"Rey.Padberg@karina.biz","address":{"street":"Kattie Turnpike","suite":"Suite 198","city":"Lebsackbury","zipcode":"31428-2261","geo":{"lat":"-38.2386","lng":"57.2232"}},"phone":"024-648-3804","website":"ambrose.net","company":{"name":"Hoeger LLC","catchPhrase":"Centralized empowering task-force","bs":"target end-to-end models"}}]')},ea59:function(e,t,i){"use strict";i("3f34")}});
//# sourceMappingURL=app.652c2df7.js.map