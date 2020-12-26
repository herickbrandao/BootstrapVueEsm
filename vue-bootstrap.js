/*
 * VueBootstrapEsm v0.2.1 Alpha
 * Released under the MIT License.
*/

import { maska } from "./maska.esm.js";

const Modalheader = { props: ["title"], template: `<div class="modal-header"><h5 class="modal-title" v-if="title!==undefined">{{ title }}</h5><slot></slot></div>` };
const Modalbody = { template: `<div class="modal-body"><slot></slot></div>` };
const Modalfooter = { template: `<div class="modal-footer"><slot></slot></div>` };
const Modal = { props: ["position"], methods: { positionCheck() { return this.position === "center" ? "display: table-cell;vertical-align: middle;" : ""; } }, template: `<div style="position: fixed;z-index: 9998;top: 0;left: 0;width: 100%;height: 100%;background-color: rgba(0, 0, 0, .5);display: table;transition: opacity .3s ease;"><div :style="positionCheck()"><div class="modal-dialog" role="document"><div class="modal-content"><slot></slot></div></div></div></div>` };
const Container = { props: ['size'], methods: { sizeCheck() { var sizes = {sm:1,md:1,lg:1,xl:1,xxl:1,fluid:1}; return sizes.hasOwnProperty(this.size) ? "container-"+this.size : "container"; } }, template: `<div :class="sizeCheck()"><slot></slot></div>` }
const Row = { template: `<div class="row"><slot></slot></div>` };
const Column = { props: ["xs","sm","md","lg","xl","xxl"], methods: { columnCheck() { var classes = ""; var sizes = ["sm","md","lg","xl","xxl"]; if(typeof this.xs === "number" && this.xs < 13) { classes += "col-"+this.xs; } else { classes += "col"; } sizes.forEach(s => { if(typeof this[s] === "number" && this[s] < 13) { classes += " col-"+s+"-"+this[s]; } }); return classes; } }, template: `<div :class="columnCheck()"><slot></slot></div>` };
const Btn = { props: ['color','size','type'], methods: { classCall() { var sizes = {lg:1,sm:1}; var colors = {primary:1,secondary:1,success:1,danger:1,warning:1,info:1,light:1,dark:1,link:1,close:1}; var classes = "btn"; if(sizes.hasOwnProperty(this.size)) { classes += " btn-"+this.size; } if(this.color && colors.hasOwnProperty(this.color.replace("outline-",""))) { classes += " btn-"+this.color; } return classes; }, }, template: `<a :class="classCall()" v-if="type == 'link'"><slot></slot></a><button :type="type!==undefined ? type : 'button'" :class="classCall()" v-else><slot></slot></button>` };
const Btngroup = { template: `<div class="btn-group" role="group"><slot></slot></div>` };
const Badge = { props: ["color"], methods: { typeCheck() { var type = "badge"; var colors = {primary:1,secondary:1,success:1,danger:1,warning:1,info:1,light:1,dark:1}; type += colors[this.color] ? " bg-"+this.color : " bg-secondary"; return type; } }, template: `<span :class="typeCheck()"><slot></slot></span>` };
const Carouselitem = { props: ["active","captions","src","href","link"], methods: { defineClasses() { var classes = "carousel-item"; if(this.active!==undefined) { classes += " active"; } return classes; } }, mounted() { this.$parent.slides++; }, template: `<div :class="defineClasses()"><a v-if="href!==undefined" :href="href"><img :src="src" class="d-block w-100 h-100" style="object-fit: cover;"/></a><router-link v-if="href===undefined&&link!==undefined" :to="link"><img :src="src" class="d-block w-100 h-100" style="object-fit: cover;"/></router-link><img v-if="href===undefined&&link===undefined" :src="src" class="d-block w-100 h-100" style="object-fit: cover;"><div class="carousel-caption d-none d-md-block" v-if="captions!==undefined"><slot></slot></div></div>` };
const Carousel = { props: ['id','indicators','controls','dark'], data() { return { pointer: 0, slides: 0, getId: "" }; }, methods: { defineId() { this.getId = "#"+this.id; return this.id; }, defineClasses() { var classes = "carousel slide"; if(this.dark!==undefined){ classes+=" carousel-dark"; } return classes; } }, template: `<div :id="defineId()" :class="defineClasses()" data-bs-ride="carousel"><ol class="carousel-indicators" v-if="indicators!==undefined"><li :data-bs-target="getId" v-for="(n, slide) in slides" :data-bs-slide-to="slide" :class="slide===0 ? 'active' : false"></li></ol><div class="carousel-inner"><slot></slot></div><a class="carousel-control-prev" :href="getId" role="button" data-bs-slide="prev" v-if="controls!==undefined"><span class="carousel-control-prev-icon" aria-hidden="true"></span><span class="visually-hidden">Previous</span></a><a class="carousel-control-next" :href="getId" role="button" data-bs-slide="next" v-if="controls!==undefined"><span class="carousel-control-next-icon" aria-hidden="true"></span><span class="visually-hidden">Next</span></a></div>` };
const Card = { props: ["img","title"], template: `<div class="card"><img v-if="img!==undefined" :src="img" class="card-img-top"><div class="card-body"><h5 class="card-title" v-if="title!==undefined">{{title}}</h5><slot></slot></div></div>` };
const Popover = { props: ["title","placement","content"], mounted() { new bootstrap.Popover(this.$el); }, template: `<span data-bs-html="true" data-bs-toggle="popover" :data-bs-placement="placement ?? 'bottom'" :title="title" :data-bs-content="content"><slot></slot></span>` };
const Tooltip = { props: ["title","placement"], mounted() { new bootstrap.Tooltip(this.$el); }, template: `<span data-bs-html="true" data-bs-toggle="tooltip" :data-bs-placement="placement ?? 'bottom'" :title="title"><slot></slot></span>` };
const Alert = { props: ["color","title"], methods: { typeCheck() { var type = "alert alert-dismissible fade show"; var colors = {primary:1,secondary:1,success:1,danger:1,warning:1,info:1,light:1,dark:1}; type += colors[this.color] ? " alert-"+this.color : " alert-secondary"; return type; }, }, template: `<div :class="typeCheck()" role="alert"><h4 v-if="title" class="alert-heading">{{title}}</h4><slot></slot></div>` };
const Field = { props: ["modelValue","size","name","disabled","readonly","autocomplete","type","class","placeholder","label","mask","float","required","valid","invalid"], methods: { defineClasses() { var classes = "form-control"; var sizes = {lg:1,sm:1}; if(this.size && sizes[this.size]) { classes += " form-control-"+this.size; } if(this.class) { classes += " "+this.class }; return classes; } }, template: `<div class="form-group" v-if="float===undefined"><label v-if="label!==undefined" :for="name" class="form-label" v-html="label"></label><input v-mask="mask??''" :type="type??'text'" :autocomplete="autocomplete" :placeholder="placeholder ?? ' '" :id="name" :name="name" :class="defineClasses()" :value="modelValue" @input="$emit('update:modelValue', $event.target.value)" :required="required" :disabled="disabled" :readonly="disabled"><div class="valid-feedback" v-if="valid" v-html="valid"></div><div class="invalid-feedback" v-if="invalid" v-html="invalid"></div></div><div v-if="label!==undefined&&float!==undefined&&float!='out'" class="form-floating"><input :type="type??'text'" v-mask="mask??''" :autocomplete="autocomplete" :placeholder="placeholder ?? ' '" :id="name" :name="name" :class="defineClasses()" :value="modelValue" @input="$emit('update:modelValue', $event.target.value)" :required="required" :disabled="disabled" :readonly="disabled"><div class="valid-feedback" v-if="valid" v-html="valid"></div><div class="invalid-feedback" v-if="invalid" v-html="invalid"></div><label :for="name" v-html="label"></label></div><label v-if="label&&float=='out'" class="has-float-label"><input :type="type??'text'" v-mask="mask??''" :autocomplete="autocomplete" :placeholder="placeholder ?? ' '" :id="name" :name="name" :class="defineClasses()" :value="modelValue" @input="$emit('update:modelValue', $event.target.value)" :required="required" :disabled="disabled" :readonly="disabled"><span v-html="label"></span><div class="valid-feedback" v-if="valid" v-html="valid"></div><div class="invalid-feedback" v-if="invalid" v-html="invalid"></div></label>` };
const Sel = { props: ["modelValue","options","tabindex","size","name","disabled","class","label","float"], data() { return { selected: this.modelValue&&this.options ? this.options.filter(op => op.val==this.modelValue)[0].content : this.options.length > 0 ? this.options[0].content : null, open: false, }; }, methods: { defineClasses() { var classes = "form-select vuejs-select"; var sizes = {lg:1,sm:1}; if(this.size && sizes[this.size]) { classes += " form-select-"+this.size; } if(this.class) { classes += " "+this.class }; return classes; }, changeModel(option) { if(option.disabled!==true) { this.selected = option.content; this.open = false; this.$emit('update:modelValue', option.val); } }, openSelect() { this.open=!this.open; } }, mounted() { var element = this.$el.nextElementSibling ? this.$el.nextElementSibling : this.$el; element.querySelector(".items").style.height = this.options.length*34; }, template: `<div class="form-group" v-if="float===undefined"><label v-if="label!==undefined" :for="name" class="form-label" v-html="label"></label><div :id="name" :class="defineClasses()" :tabindex="tabindex" @blur="open=false"><div v-if="(disabled!==undefined&&disabled!==false)||disabled=='disabled'" class="w-100 h-100 position-absolute" style="background: #00000013;"></div><div class="selected" :class="{ open: open }" @click="openSelect()" v-html="selected"></div><div class="items" :class="{ selectHide: !open }"><div v-for="(option, i) of options" :class="option.content==selected ? 'vuejs-select-active' : ''" :key="i" @click="changeModel(option)" v-html="option.content" :disabled="option.disabled"></div></div></div></div><div v-if="label!==undefined&&float!==undefined&&float!='out'" class="form-floating"><div v-if="(disabled!==undefined&&disabled!==false)||disabled=='disabled'" class="w-100 h-100 position-absolute" style="background: #00000013;"></div><label class="labered-call" v-html="label"></label><div :id="name" :class="defineClasses()" :tabindex="tabindex" @blur="open = false"><div class="selected" :class="{ open: open }" @click="openSelect()" v-html="selected"></div><div class="items" :class="{ selectHide: !open }"><div v-for="(option, i) of options" :class="option.content==selected ? 'vuejs-select-active' : ''" :key="i" @click="changeModel(option)" v-html="option.content" :disabled="option.disabled"></div></div></div></div><label v-if="label&&float=='out'" class="has-float-label"><div :id="name" :class="defineClasses()" :tabindex="tabindex" @blur="open = false"><div v-if="(disabled!==undefined&&disabled!==false)||disabled=='disabled'" class="w-100 h-100 position-absolute" style="background: #00000013;"></div><div class="selected" :class="{ open: open }" @click="openSelect()" v-html="selected"></div><div class="items" :class="{ selectHide: !open }"><div v-for="(option, i) of options" :class="option.content==selected ? 'vuejs-select-active' : ''" @click="changeModel(option)" v-html="option.content" :disabled="option.disabled"></div></div></div><span v-html="label"></span></label>` };
const Multiple = { props: ["modelValue","label","options","name","value","float","disabled","class"], data(){ return { selected: this.value ?? [] } }, methods: { checkClasses() { return this.class ? 'form-select'+this.class : 'form-select'; } }, mounted() { var opts = this.$el.nextElementSibling.querySelectorAll("option"); opts.forEach(o => { if(this.modelValue.includes(o.value)){ o.selected = true } }); }, template: `<span v-if="float===undefined"><label v-if="label" :for="name" v-html="label"></label><select multiple="multiple" :disabled="disabled" :id="name" :name="name+'[]'" v-model="selected" @change="$emit('update:modelValue', selected)" :class="checkClasses()"><option v-for="(option, i) of options" :value="option.val">{{option.content}}</option></select></span><div class="form-floating" v-if="label&&float!==undefined&&float!='out'"><select style="height: auto;max-height: 300px;" multiple="multiple" :disabled="disabled" :id="name" :name="name+'[]'" v-model="selected" @change="$emit('update:modelValue', selected)" :class="checkClasses()"><option v-for="(option, i) of options" :value="option.val">{{option.content}}</option></select><label :for="name" v-html="label"></label></div> <div class="has-float-label" v-if="label&&float=='out'"> <select multiple="multiple" :disabled="disabled" :id="name" :name="name+'[]'" v-model="selected" @change="$emit('update:modelValue', selected)" :class="checkClasses()"> <option v-for="(option, i) of options" :value="option.val">{{option.content}}</option></select><span v-html="label"></span></div> ` };
const Fieldtext = { props: ["modelValue","label","name","float","class","rows","style","disabled","readonly","required","valid","invalid"], methods: { checkClasses() { return this.class ? 'form-control vuejs-txt '+this.class : 'form-control vuejs-txt'; } }, template: `<span v-if="float===undefined"><label v-if="label" :for="name" v-html="label"></label><textarea :id="name" :name="name" :class="checkClasses()" :rows="rows" :style="style" :disabled="disabled" :readonly="readonly" :required="required" :value="modelValue" @input="$emit('update:modelValue', $event.target.value)"></textarea><div class="valid-feedback" v-if="valid" v-html="valid"></div><div class="invalid-feedback" v-if="invalid" v-html="invalid"></div></span><div class="form-floating" v-if="label&&float!==undefined&&float!='out'"><textarea :id="name" :name="name" :class="checkClasses()" :rows="rows" :style="style" :disabled="disabled" :readonly="readonly" :required="required" :value="modelValue" @input="$emit('update:modelValue', $event.target.value)"></textarea><div class="valid-feedback" v-if="valid" v-html="valid"></div><div class="invalid-feedback" v-if="invalid" v-html="invalid"></div><label :for="name" v-html="label"></label></div><div class="has-float-label" v-if="label&&float=='out'"><textarea :id="name" :name="name" :class="checkClasses()" :rows="rows" :style="style" :disabled="disabled" :readonly="readonly" :required="required" :value="modelValue" @input="$emit('update:modelValue', $event.target.value)"></textarea><span v-html="label"></span><div class="valid-feedback" v-if="valid" v-html="valid"></div><div class="invalid-feedback" v-if="invalid" v-html="invalid"></div></div>` };
const Check = { props: ["id","name","type","label","modelValue","value","required","disabled","valid","invalid"], data() { return { localType: "checkbox", customId: 0, } }, methods: { checkClasses() { var classes = "form-check"; if(this.type){ switch(this.type.replace("-inline","")) { case "switch": classes += " form-switch"; break; case "radio": this.localType="radio"; break; } if(this.type.indexOf("-inline") > -1) { classes += " form-check-inline"; } } return classes; }, }, mounted() { this.customId = this.id ? this.id : this.name+"-"+parseInt(Math.random()*1000000000000); }, template: `<div v-if="type=='radio'||type=='radio-inline'" :class="checkClasses()"><input class="form-check-input" :name="name" :type="localType" :required="required" :disabled="disabled" :checked="modelValue == value" :value="value" @change="$emit('update:modelValue', $event.target.value)" :id="customId"><label class="form-check-label" :for="customId">{{label}}<slot></slot></label><div class="valid-feedback" v-if="valid" v-html="valid"></div><div class="invalid-feedback" v-if="invalid" v-html="invalid"></div></div><div v-else :class="checkClasses()"><input class="form-check-input" :name="name" :type="localType" :checked="modelValue==true" @change="$emit('update:modelValue', $event.target.checked)" :id="customId" :required="required" :disabled="disabled"><label class="form-check-label" :for="customId">{{label}}<slot></slot></label><div class="valid-feedback" v-if="valid" v-html="valid"></div><div class="invalid-feedback" v-if="invalid" v-html="invalid"></div></div>` };
const Range = { props: ["name","disabled","label","min","max","step","class","style","modelValue"], methods: { appendClass() { return this.class ? 'form-range'+this.class : 'form-range'; } }, template: `<label :for="name" class="form-label" v-if="label" v-html="label"></label><input type="range" :class="appendClass()" :style="style" :min="min" :max="max" :step="step" :id="name" :name="name" :value="modelValue" :disabled="disabled" @input="$emit('update:modelValue', $event.target.value)">` };

export { Modalheader, Modalbody, Modalfooter, Modal, Container, Row, Column, Btn, Btngroup, Badge, Carouselitem, Carousel, Card, Popover, Tooltip, Alert, Field, Sel, Multiple, Fieldtext, Check, Range };
export default {
  install: (app, options) => {
    app.directive("mask", maska);
    app.component("Modalheader", Modalheader);
    app.component("Modalbody", Modalbody);
    app.component("Modalfooter", Modalfooter);
    app.component("Modal", Modal);
    app.component("Container", Container);
    app.component("Row", Row);
    app.component("Column", Column);
    app.component("Btn", Btn);
    app.component("Btngroup", Btngroup);
    app.component("Badge", Badge);
    app.component("Carouselitem", Carouselitem);
    app.component("Carousel", Carousel);
    app.component("Card", Card);
    app.component("Popover", Popover);
    app.component("Tooltip", Tooltip);
    app.component("Alert", Alert);
    app.component("Field", Field);
    app.component("Sel", Sel);
    app.component("Multiple", Multiple);
    app.component("Fieldtext", Fieldtext);
    app.component("Check", Check);
    app.component("Range", Range);
  }
}
